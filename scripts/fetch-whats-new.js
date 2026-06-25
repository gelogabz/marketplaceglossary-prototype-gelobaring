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
 *   Edit NINETY_DAYS_MS at the top of the file.
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
const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;

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

function isRecent(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return false;
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 90);
  return d >= cutoff;
}

function parseIsoDate(dateStr) {
  if (!dateStr) return null;
  // Already ISO YYYY-MM-DD — return as-is
  if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) return dateStr.slice(0, 10);
  // "June 25, 2026" or "June 25 2026" — parse manually to avoid local-timezone off-by-one
  const months = {
    january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
    july: 7, august: 8, september: 9, october: 10, november: 11, december: 12,
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
  const html = await fetchText(
    "https://cloud.google.com/marketplace/docs/partners/release-notes",
  );
  const results = [];
  // Each release is an h2 with a date-like ID, followed by list items
  const sectionRe =
    /<h2[^>]*id="([^"]*)"[^>]*>([\s\S]*?)<\/h2>([\s\S]*?)(?=<h2|<\/article|$)/g;
  let sm;
  while ((sm = sectionRe.exec(html)) !== null) {
    const rawDate = scrub(sm[2]);
    const sectionHtml = sm[3];
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
          : `https://cloud.google.com${href}`
        : "https://cloud.google.com/marketplace/docs/partners/release-notes";
      results.push({
        id: stableId("gcp", date, raw),
        platform: "GCP",
        platformTag: "gcp",
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
  // Fetch current month + previous two months for better coverage
  for (let offset = 0; offset <= 2; offset++) {
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
      if (title.toLowerCase() === "in this article") continue;

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
      const href = linkM ? linkM[1] : null;
      const absUrl = href
        ? href.startsWith("http")
          ? href
          : `https://learn.microsoft.com${href}`
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
    ["Snowflake What's New", fetchSnowflake],
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

  // Merge: fresh entries overwrite existing ones with same ID
  const byId = new Map();
  for (const e of existing) byId.set(e.id, e);
  for (const e of fresh) byId.set(e.id, e);

  // Filter to 90 days, deduplicate, sort newest first
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - 90);
  const cutoff = cutoffDate.toISOString().slice(0, 10);

  const final = [...byId.values()]
    .filter((e) => e.date >= cutoff)
    .sort((a, b) => b.date.localeCompare(a.date));

  const iso = new Date().toISOString();
  const output =
    `// Auto-generated by scripts/fetch-whats-new.js — do not edit manually.\n` +
    `// Run: node scripts/fetch-whats-new.js\n` +
    `export const lastUpdated = ${JSON.stringify(iso)};\n` +
    `export const updates = ${JSON.stringify(final, null, 2)};\n`;

  writeFileSync(OUT, output, "utf8");
  console.log(`\nDone. ${final.length} entries written to data/whats-new.js`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
