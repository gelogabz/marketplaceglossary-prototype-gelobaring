#!/usr/bin/env node
/**
 * fetch-whats-new.js
 * Fetches marketplace "What's New" entries from official sources and writes
 * them to data/whats-new.js, which the What's New page (whats-new/) reads.
 *
 * ── HOW TO RUN ────────────────────────────────────────────────────────────────
 *
 *   node scripts/fetch-whats-new.js
 *
 *   Run from the project root. No npm install needed — uses Node 18+ built-ins.
 *   Requires Node 18 or later (uses built-in fetch and ES modules).
 *
 * ── WHAT IT DOES ─────────────────────────────────────────────────────────────
 *
 *   1. Fetches entries from 6 sources (see SOURCE LIST below).
 *   2. Loads any existing entries already in data/whats-new.js.
 *   3. Merges: fresh entries overwrite existing ones with the same ID.
 *      Old entries not in the current fetch are kept (avoids data loss
 *      when a source feed only shows recent items).
 *   4. Filters out entries older than 90 days.
 *   5. Deduplicates by stable ID (platform + date + title slug).
 *   6. Sorts newest-first and writes data/whats-new.js.
 *
 * ── SOURCE LIST ───────────────────────────────────────────────────────────────
 *
 *   AWS What's New      https://aws.amazon.com/new/feed/         (RSS)
 *   AWS Marketplace Blog https://aws.amazon.com/blogs/awsmarketplace/feed/ (RSS)
 *   GCP Marketplace     https://cloud.google.com/marketplace/docs/partners/release-notes (HTML)
 *   Azure Partner Center https://learn.microsoft.com/en-us/partner-center/announcements/{year}-{month} (HTML, 3 months)
 *   Snowflake           https://docs.snowflake.com/en/whats-new  (HTML)
 *   Suger Blog          https://www.suger.io/resources/blog/      (HTML)
 *
 *   AWS What's New is keyword-filtered to marketplace-relevant entries only.
 *   All other AWS Marketplace Blog entries are included (no keyword filter).
 *   GCP, Snowflake entries are keyword-filtered for marketplace relevance.
 *   Azure and Suger Blog entries are included without additional filtering.
 *
 * ── ADDING A NEW SOURCE ───────────────────────────────────────────────────────
 *
 *   1. Write an async function that returns an array of update objects.
 *      Each object must have: id, platform, platformTag, date (YYYY-MM-DD),
 *      title, summary, type, sourceUrl, impact.
 *      See existing fetchers (fetchAwsWhatsNew, fetchGcpMarketplace, etc.)
 *      for reference. Use stableId(), inferType(), scoreImpact() helpers.
 *   2. Add it to the `fetchers` array in main() with a display name.
 *
 * ── CHANGING THE RETENTION WINDOW ────────────────────────────────────────────
 *
 *   Edit CUTOFF_DATE at the top of the file (format: "YYYY-MM-DD").
 *   Default: "2026-01-01" — keeps all entries from January 1 2026 onward.
 *   Change to a rolling window by computing: new Date(Date.now() - N_DAYS_MS).toISOString().slice(0,10)
 *
 * ── AUTOMATION ───────────────────────────────────────────────────────────────
 *
 *   GitHub Actions workflow: .github/workflows/fetch-whats-new.yml
 *   Runs daily at 6:00 AM UTC. Can also be triggered manually from the
 *   Actions tab in GitHub → "Fetch What's New" → "Run workflow".
 *   The workflow commits data/whats-new.js back to main if it changed.
 *
 * ── OUTPUT FORMAT ─────────────────────────────────────────────────────────────
 *
 *   Writes an ES module to data/whats-new.js:
 *     export const lastUpdated = "2026-06-23T06:00:00.000Z";
 *     export const updates = [ { id, platform, platformTag, date, ... }, ... ];
 *
 *   Do NOT edit data/whats-new.js manually — it will be overwritten on the
 *   next run. To inject manual entries, add them here as a static array and
 *   push them into `fresh` in main() before the merge step.
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "../data/whats-new.js");
const OUT_CSV = join(__dirname, "../data/whats-new.csv");
const CUTOFF_DATE = "2026-01-01"; // keep all entries from Jan 1 2026 onward

// ── Keyword filter ────────────────────────────────────────────────────────────
const MARKETPLACE_KEYWORDS = [
  "marketplace",
  "private offer",
  "cppo",
  "disbursement",
  "partner central",
  "partner network",
  "isv",
  "channel partner",
  "reseller",
  "co-sell",
  "cosell",
  "storefront",
  "listing",
  "entitlement",
  "payout",
  "saas subscription",
  "metering",
  "procurement",
  "seller wallet",
  "listing fee",
  "aws marketplace",
  "azure marketplace",
  "google cloud marketplace",
  "snowflake marketplace",
  "suger",
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function scrub(text) {
  if (!text) return "";
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&[a-z]{2,6};/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[\n\r\t]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function oneLiner(text, max = 280) {
  if (!text || text.length <= max) return text;
  const floor = Math.floor(max * 0.4);
  const lastDot = text.slice(0, max).lastIndexOf(". ");
  if (lastDot > floor) return text.slice(0, lastDot + 1);
  return text.slice(0, max - 1) + "…";
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 50);
}

function stableId(platform, date, title) {
  return `${platform.toLowerCase()}-${date}-${slugify(title)}`;
}

function isRecent(date) {
  if (!date) return false;
  const today = new Date().toISOString().slice(0, 10);
  return date >= CUTOFF_DATE && date <= today;
}

function parseIsoDate(dateStr) {
  if (!dateStr) return null;
  // Already ISO YYYY-MM-DD — return as-is
  if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) return dateStr.slice(0, 10);
  // "June 25, 2026" or "June 25 2026" — parse manually to avoid local-timezone off-by-one
  const months = {
    january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
    july: 7, august: 8, september: 9, october: 10, november: 11, december: 12,
    jan: 1, feb: 2, mar: 3, apr: 4, jun: 6,
    jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
  };
  const m = dateStr.match(/([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})/);
  if (m) {
    const mon = months[m[1].toLowerCase()];
    if (mon) return `${m[3]}-${String(mon).padStart(2, "0")}-${String(m[2]).padStart(2, "0")}`;
  }
  // Fallback for RFC 2822 / UTC-tagged strings (RSS pubDate: "Tue, 24 Jun 2026 00:00:00 GMT")
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10);
}

function hasKeyword(text) {
  const lower = text.toLowerCase();
  return MARKETPLACE_KEYWORDS.some((kw) => lower.includes(kw));
}

function scoreImpact(text) {
  const lower = text.toLowerCase();
  const highKw = [
    "launch",
    "generally available",
    "breaking change",
    "required",
    "mandatory",
    "new capability",
    "price change",
    "new feature",
    "announcement",
    "ga release",
    "now available",
  ];
  const medKw = [
    "update",
    "improvement",
    "enhancement",
    "expanded",
    "added",
    "now supports",
    "preview",
    "beta",
  ];
  if (highKw.some((k) => lower.includes(k))) return "high";
  if (medKw.some((k) => lower.includes(k))) return "medium";
  return "low";
}

function inferType(title, summary) {
  const text = (title + " " + summary).toLowerCase();
  if (/pric|fee|cost|billing|revenue|commission/.test(text)) return "pricing";
  if (/policy|compliance|requirement|regulation|program term/.test(text))
    return "policy";
  if (/program|partner program|incentive|benefit/.test(text)) return "program";
  if (/blog|guide|how to|best practice|case study|insight/.test(text))
    return "blog";
  if (
    /feature|launch|capability|generally available|ga |new service/.test(text)
  )
    return "feature";
  return "release";
}

// ── RSS parser ────────────────────────────────────────────────────────────────

function* parseRssItems(xml) {
  const itemRe = /<item>([\s\S]*?)<\/item>/g;
  let m;
  while ((m = itemRe.exec(xml)) !== null) {
    const block = m[1];
    const get = (tag) => {
      const r = new RegExp(
        `<${tag}(?:[^>]*)><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>` +
          `|<${tag}(?:[^>]*)>([\\s\\S]*?)</${tag}>`,
      );
      const mm = r.exec(block);
      return mm ? (mm[1] ?? mm[2] ?? "").trim() : "";
    };
    yield {
      title: get("title"),
      link: get("link"),
      description: get("description"),
      pubDate: get("pubDate"),
      category: [...block.matchAll(/<category[^>]*>([^<]+)<\/category>/g)]
        .map((c) => c[1])
        .join(" "),
    };
  }
}

// ── Fetch helpers ─────────────────────────────────────────────────────────────

async function fetchText(url, timeoutMs = 20000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; CloudGTMBot/1.0; +https://gelogabz.github.io/marketplaceglossary-prototype-gelobaring/)",
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} from ${url}`);
    return res.text();
  } finally {
    clearTimeout(timer);
  }
}

// ── Source: AWS What's New RSS ────────────────────────────────────────────────

async function fetchAwsWhatsNew() {
  const xml = await fetchText("https://aws.amazon.com/new/feed/");
  const results = [];
  for (const item of parseRssItems(xml)) {
    const title = scrub(item.title);
    const summary = oneLiner(scrub(item.description));
    const combined = title + " " + summary + " " + item.category;
    const inMpCategory = /marketplace/i.test(item.category);
    if (!inMpCategory && !hasKeyword(combined)) continue;
    const date = parseIsoDate(item.pubDate);
    if (!date || !isRecent(date)) continue;
    results.push({
      id: stableId("aws", date, title),
      platform: "AWS",
      platformTag: "aws",
      date,
      title,
      summary,
      type: inferType(title, summary),
      sourceUrl: item.link,
      impact: scoreImpact(combined),
    });
  }
  return results;
}

// ── Source: AWS Marketplace Blog RSS ─────────────────────────────────────────

async function fetchAwsMarketplaceBlog() {
  const xml = await fetchText(
    "https://aws.amazon.com/blogs/awsmarketplace/feed/",
  );
  const results = [];
  for (const item of parseRssItems(xml)) {
    const title = scrub(item.title);
    const summary = oneLiner(scrub(item.description));
    const date = parseIsoDate(item.pubDate);
    if (!date || !isRecent(date)) continue;
    results.push({
      id: stableId("aws", date, title),
      platform: "AWS",
      platformTag: "aws",
      date,
      title,
      summary,
      type: "blog",
      sourceUrl: item.link,
      impact: scoreImpact(title + " " + summary),
    });
  }
  return results;
}

// ── Source: GCP Marketplace Release Notes (HTML) ──────────────────────────────

async function fetchGcpMarketplace() {
  // Markdown plaintext — one section per ## DATE heading, no sub-items
  const txt = await fetchText(
    "https://docs.cloud.google.com/marketplace/docs/partners/release-notes.md.txt",
  );
  const results = [];
  const SOURCE_URL =
    "https://cloud.google.com/marketplace/docs/partners/release-notes";

  // Split on "## " at line start; each chunk: first line = date, rest = body
  const sections = txt.split(/^## /m);
  for (let i = 1; i < sections.length; i++) {
    const nl = sections[i].indexOf("\n");
    const heading = sections[i].slice(0, nl).trim();
    const rawBody = sections[i].slice(nl + 1);

    const date = parseIsoDate(heading);
    if (!date || !isRecent(date)) continue;

    // Strip markdown links [text](url) → text, collapse whitespace
    const body = rawBody
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/\n+/g, " ")
      .trim();
    if (body.length < 20) continue;

    const title = body.slice(0, 120);
    results.push({
      id: stableId("gcp", date, title),
      platform: "GCP",
      platformTag: "gcp",
      date,
      title,
      summary: oneLiner(body),
      type: inferType(title, body),
      sourceUrl: SOURCE_URL,
      impact: scoreImpact(title + " " + body),
    });
  }
  return results;
}

// ── Source: Azure Partner Center Announcements (HTML) ────────────────────────
//
// Page structure (learn.microsoft.com/en-us/partner-center/announcements/YYYY-month):
//   <h2> = announcement title (one h2 = one announcement)
//   <p><em>italic subtitle</em></p> = short summary
//   <ul><li>**Date**: June 24, 2026 ...</li></ul> = metadata block
//   body paragraphs and h4 sub-sections belong to the same announcement
//
// Strategy: split on <h2> only; each section is one announcement.
// Extract date from "**Date**:" or "**Announcement date**:" in the body.
// Use first <em> content as the summary.
// Do NOT sub-parse <li> items — they are metadata, not separate announcements.

async function fetchAzurePartnerCenter() {
  const results = [];
  const now = new Date();
  // Fetch every month from CUTOFF_DATE back to current month
  const cutoffYear = parseInt(CUTOFF_DATE.slice(0, 4), 10);
  const cutoffMonth = parseInt(CUTOFF_DATE.slice(5, 7), 10) - 1; // 0-indexed
  const totalMonths = (now.getFullYear() - cutoffYear) * 12 + (now.getMonth() - cutoffMonth);
  for (let offset = 0; offset <= totalMonths; offset++) {
    const d = new Date(now.getFullYear(), now.getMonth() - offset, 1);
    const year = d.getFullYear();
    const month = d.toLocaleString("en-us", { month: "long" }).toLowerCase();
    const url = `https://learn.microsoft.com/en-us/partner-center/announcements/${year}-${month}`;
    let html;
    try {
      html = await fetchText(url);
    } catch {
      continue;
    }

    // Each <h2> = one announcement; capture title + everything until next <h2>
    const sectionRe = /<h2[^>]*>([\s\S]*?)<\/h2>([\s\S]*?)(?=<h2|$)/g;
    let sm;
    while ((sm = sectionRe.exec(html)) !== null) {
      const title = scrub(sm[1]);
      if (!title || title.length < 8) continue;
      const titleLc = title.toLowerCase();
      if (titleLc === "in this article" || titleLc === "feedback" || titleLc === "additional resources") continue;

      const sectionHtml = sm[2];
      const sectionText = scrub(sectionHtml);

      // Extract date from metadata line: "Date: June 24, 2026" or "Announcement date: June 24, 2026"
      const datePat =
        /\*{0,2}(?:announcement\s+)?date\*{0,2}\s*[:\*]+\s*([A-Za-z]+ \d{1,2},?\s+\d{4})/i;
      const dateMatch = sectionText.match(datePat);
      let date = dateMatch ? parseIsoDate(dateMatch[1]) : null;
      // Fallback: use first of the month
      if (!date)
        date = `${year}-${String(d.getMonth() + 1).padStart(2, "0")}-01`;
      if (!isRecent(date)) continue;

      // Summary: prefer italic subtitle (first <em> block), else first 280 chars of body
      const emMatch = sectionHtml.match(/<em[^>]*>([\s\S]*?)<\/em>/);
      const summary = emMatch
        ? oneLiner(scrub(emMatch[1]))
        : oneLiner(sectionText.slice(0, 280));

      // Source URL: prefer first explicit link in section, fall back to page URL
      const linkM = sectionHtml.match(/href="([^"#][^"]+)"/);
      const rawHref = linkM ? linkM[1].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"') : null;
      const absUrl = rawHref
        ? rawHref.startsWith("http")
          ? rawHref
          : new URL(rawHref, url).href
        : url;

      results.push({
        id: stableId("azure", date, title),
        platform: "Azure",
        platformTag: "azure",
        date,
        title: title.slice(0, 120),
        summary,
        type: inferType(title, sectionText),
        sourceUrl: absUrl,
        impact: scoreImpact(title + " " + sectionText),
      });
    }
  }
  return results;
}

// ── Source: Snowflake What's New (HTML) ───────────────────────────────────────

async function fetchSnowflake() {
  const html = await fetchText("https://docs.snowflake.com/en/whats-new");
  const results = [];
  // h2 = date heading, followed by feature items
  const sectionRe = /<h2[^>]*>([\s\S]*?)<\/h2>([\s\S]*?)(?=<h2|$)/g;
  let sm;
  while ((sm = sectionRe.exec(html)) !== null) {
    const rawDate = scrub(sm[1]);
    const sectionHtml = sm[2];
    const date = parseIsoDate(rawDate);
    if (!date || !isRecent(date)) continue;

    const liRe = /<li[^>]*>([\s\S]*?)<\/li>/g;
    let lm;
    while ((lm = liRe.exec(sectionHtml)) !== null) {
      const raw = scrub(lm[1]);
      if (raw.length < 15 || !hasKeyword(raw)) continue;
      const linkM = lm[1].match(/href="([^"]+)"/);
      const href = linkM ? linkM[1] : null;
      const absUrl = href
        ? href.startsWith("http")
          ? href
          : `https://docs.snowflake.com${href}`
        : "https://docs.snowflake.com/en/whats-new";
      results.push({
        id: stableId("snowflake", date, raw),
        platform: "Snowflake",
        platformTag: "snowflake",
        date,
        title: raw.slice(0, 120),
        summary: oneLiner(raw),
        type: inferType(raw, ""),
        sourceUrl: absUrl,
        impact: scoreImpact(raw),
      });
    }
  }
  return results;
}

// ── Source: Suger Blog (HTML) ─────────────────────────────────────────────────

async function fetchSugerBlog() {
  const html = await fetchText("https://www.suger.io/resources/blog/");
  const results = [];
  const seen = new Set();

  // Webflow blog: anchor tags wrapping post cards
  const cardRe =
    /<a[^>]+href="([^"]*(?:\/blog\/|\/resources\/blog\/)[^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let cm;
  while ((cm = cardRe.exec(html)) !== null) {
    const href = cm[1];
    const block = cm[2];
    const rawText = scrub(block);
    if (rawText.length < 20 || seen.has(href)) continue;
    seen.add(href);

    // Look for a date pattern inside the card
    const dateM = rawText.match(
      /\b(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+\d{1,2},?\s+\d{4}/i,
    );
    if (!dateM) continue;
    const date = parseIsoDate(dateM[0]);
    if (!date || !isRecent(date)) continue;

    const url = href.startsWith("http") ? href : `https://www.suger.io${href}`;
    // First non-date line is likely the title
    const lines = rawText
      .split(/\s{3,}/)
      .map((l) => l.trim())
      .filter(Boolean);
    const title =
      lines.find(
        (l) =>
          l.length > 5 && !/^\d/.test(l) && !dateM[0].includes(l.slice(0, 5)),
      ) || rawText.slice(0, 80);

    results.push({
      id: stableId("suger", date, title),
      platform: "Suger",
      platformTag: "suger",
      date,
      title: title.slice(0, 120),
      summary: oneLiner(rawText),
      type: "blog",
      sourceUrl: url,
      impact: scoreImpact(rawText),
    });
  }
  return results;
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log("Fetching What's New data…\n");

  // Load existing entries for merge
  let existing = [];
  if (existsSync(OUT)) {
    try {
      const raw = readFileSync(OUT, "utf8");
      const m = raw.match(/export const updates = (\[[\s\S]*\]);/);
      if (m) existing = JSON.parse(m[1]);
    } catch (e) {
      console.warn("  Could not parse existing data.whats-new.js:", e.message);
    }
  }

  const fetchers = [
    ["AWS What's New RSS", fetchAwsWhatsNew],
    ["AWS Marketplace Blog RSS", fetchAwsMarketplaceBlog],
    ["GCP Marketplace", fetchGcpMarketplace],
    ["Azure Partner Center", fetchAzurePartnerCenter],
    // ["Snowflake What's New", fetchSnowflake], // URL needs fixing — disabled
    ["Suger Blog", fetchSugerBlog],
  ];

  const fresh = [];
  for (const [name, fn] of fetchers) {
    try {
      const items = await fn();
      console.log(`  ✓ ${name}: ${items.length} entries`);
      fresh.push(...items);
    } catch (e) {
      console.error(`  ✗ ${name}: FAILED — ${e.message}`);
    }
  }

  // Azure + Suger: replace strategy — both fetchers scrape a full listing page so we have
  // complete coverage; drop stale existing entries to avoid off-by-one date duplicates.
  existing = existing.filter((e) => e.platform !== "Azure" && e.platform !== "Suger");

  // Merge: fresh entries overwrite existing ones with same ID
  const byId = new Map();
  for (const e of existing) byId.set(e.id, e);
  for (const e of fresh) byId.set(e.id, e);

  // Filter to CUTOFF_DATE..today, deduplicate, sort newest first
  const today = new Date().toISOString().slice(0, 10);

  const final = [...byId.values()]
    .filter((e) => e.date >= CUTOFF_DATE && e.date <= today)
    .sort((a, b) => b.date.localeCompare(a.date));

  const iso = new Date().toISOString();
  const output =
    `// Auto-generated by scripts/fetch-whats-new.js — do not edit manually.\n` +
    `// Run: node scripts/fetch-whats-new.js\n` +
    `export const lastUpdated = ${JSON.stringify(iso)};\n` +
    `export const updates = ${JSON.stringify(final, null, 2)};\n`;

  writeFileSync(OUT, output, "utf8");

  // Write JSON mirror (for direct consumption by crawlers / AI bots)
  const jsonOutput = { lastUpdated: iso, updates: final };
  writeFileSync(OUT.replace("whats-new.js", "whats-new.json"), JSON.stringify(jsonOutput, null, 2) + "\n", "utf8");

  // Write CSV mirror
  const csvEsc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const CSV_COLS = ["id", "platform", "date", "title", "summary", "type", "sourceUrl", "impact"];
  const csvRows = [
    CSV_COLS.join(","),
    ...final.map((e) => CSV_COLS.map((k) => csvEsc(e[k])).join(",")),
  ];
  writeFileSync(OUT_CSV, csvRows.join("\n") + "\n", "utf8");

  console.log(`\nDone. ${final.length} entries written to data/whats-new.js + data/whats-new.json + data/whats-new.csv`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
