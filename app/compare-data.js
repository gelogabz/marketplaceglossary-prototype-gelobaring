// Pure cross-platform comparison data — union-find + concept labeling logic,
// shared between comparison/comparison.js (the standalone Compare page) and
// app/render.js (inline compare-row snippets on Journey guide steps).
// No DOM access here — importers own their own rendering.

import { terms } from "../data/terms.js";
import { PLATFORM_SUFFIX_RE as SUFFIX_RE } from "./utils.js";

export const DISPLAY_SUFFIX_RE =
  / — (AWS|Azure|GCP|Snowflake|Alibaba|Oracle|Suger)$/;

export const PLATFORM_KEYS = [
  "Suger",
  "AWS",
  "Azure",
  "GCP",
  "Snowflake",
  "Alibaba",
  "Oracle",
];

// Platform-suffixed terms (all hyperscalers + Snowflake + Alibaba)
const platformTerms = terms.filter((t) => SUFFIX_RE.test(t.name));

// Suger-specific terms: tagged with "suger" but NOT platform-suffixed
const sugerTerms = terms.filter(
  (t) => t.tags?.includes("suger") && !SUFFIX_RE.test(t.name),
);

const allComparableTerms = [...platformTerms, ...sugerTerms];

// ---- Union-Find ----

const parent = Object.fromEntries(
  allComparableTerms.map((t) => [t.name, t.name]),
);

function find(x) {
  if (!(x in parent)) return x;
  if (parent[x] === x) return x;
  parent[x] = find(parent[x]);
  return parent[x];
}

function union(a, b) {
  if (!(a in parent) || !(b in parent)) return;
  const ra = find(a),
    rb = find(b);
  if (ra !== rb) parent[ra] = rb;
}

// Pass 1: union platform terms that share an identical base concept name
const byBase = {};
platformTerms.forEach((t) => {
  const base = t.name.replace(SUFFIX_RE, "").trim();
  (byBase[base] ??= []).push(t.name);
});
Object.values(byBase).forEach((names) => {
  for (let i = 1; i < names.length; i++) union(names[0], names[i]);
});

// Pass 2: union terms linked by "X equivalent: Y" patterns in alias fields
const EQUIV_RE =
  /(?:(?:AWS|Azure|GCP|Snowflake|Alibaba|Oracle|Suger)\s+)?[Ee]quivalent:\s*([^|]+?)(?=\s*\||$)/g;
allComparableTerms.forEach((t) => {
  if (!t.alias) return;
  for (const m of t.alias.matchAll(EQUIV_RE)) {
    const refName = m[1].trim();
    if (refName in parent) union(t.name, refName);
  }
});

// Pass 3: union terms linked by "AWS: X | Azure: Y | GCP: Z | Suger: W" patterns
const PLATFORM_MAP_RE =
  /\b(AWS|Azure|GCP|Snowflake|Alibaba|Oracle|Suger):\s*([^|]+?)(?=\s*\||$)/g;
allComparableTerms.forEach((t) => {
  if (!t.alias) return;
  for (const m of t.alias.matchAll(PLATFORM_MAP_RE)) {
    const platform = m[1];
    const refBase = m[2].trim();
    if (refBase in parent) {
      union(t.name, refBase);
    } else if (platform !== "Suger") {
      const withSuffix = `${refBase} — ${platform}`;
      if (withSuffix in parent) union(t.name, withSuffix);
    }
  }
});

// Pass 4: union terms sharing an explicit `group` value
const byGroup = {};
allComparableTerms.forEach((t) => {
  if (!t.group) return;
  (byGroup[t.group] ??= []).push(t.name);
});
Object.values(byGroup).forEach((names) => {
  for (let i = 1; i < names.length; i++) union(names[0], names[i]);
});

// Build groups from connected components — collect ALL terms per platform
const groups = {};
allComparableTerms.forEach((t) => {
  const root = find(t.name);
  if (!groups[root]) groups[root] = {};
  const platformMatch = t.name.match(SUFFIX_RE);
  const platformKey = platformMatch ? platformMatch[1] : "Suger";
  if (!groups[root][platformKey]) groups[root][platformKey] = [];
  groups[root][platformKey].push(t);
});

// Generic concept overrides — keyed by the platform term that would otherwise
// become the label. The platform columns still show hyperscaler-specific
// names; only the Concept column is affected.
export const CONCEPT_OVERRIDES = {
  "Amazon EventBridge Marketplace Integration — AWS":
    "Subscription Lifecycle Events",
  "Amazon Machine Image (AMI) — AWS": "Virtual Machine Image Listing",
  "AWS Marketplace — AWS": "Marketplace Storefront",
  "AWS Marketplace Management Portal (AMMP) — AWS": "Marketplace Seller Portal",
  "AWS Partner Central Agents — AWS": "AI Partner Automation",
  "AWS Partner Network (APN) — AWS": "Partner Ecosystem Program",
  "AWS Specialization — AWS": "Partner Competency Program",
  "BatchMeterUsage API — AWS": "Batch Metering API",
  "Channel Partner Private Offer (CPPO) — AWS": "Channel Resale Offer",
  "End Customer Investment Funds (ECIF) — Azure": "Cloud Partner Funding",
  "Enterprise Discount Program (EDP) — AWS": "Committed Spend Drawdown",
  "ISV Accelerate — AWS": "ISV Co-sell Program",
  "ISV Workload Migration Program (WMP) — AWS": "Cloud Partner Funding",
  "Limited Release — AWS": "Pre-Launch Restricted Listing Preview",
  "Marketing Development Funds (MDF) — AWS": "Cloud Partner Funding",
  "Marketplace Private Offer Promotion Program (MPOPP) — AWS":
    "Cloud Partner Funding",
  "Migration Acceleration Program (MAP) — AWS": "Cloud Partner Funding",
  "Partner Initiative Funding (PIF) — AWS": "Cloud Partner Funding",
  "Partner Opportunity Acceleration (POA) — AWS": "Cloud Partner Funding",
  "Partner-Led Opportunity — AWS": "Partner-Led Co-sell Tier",
  "Proof of Concept (POC) Funding  — AWS": "Cloud Partner Funding",
  "SaaS Co-sell Benefit (SCB) — AWS": "Field Co-sell Incentive",
  "SaaS Contracts with Pay-As-You-Go (Overages) — AWS":
    "Committed Base + Metered Overage Pricing",
  "SaaS Free Trial — AWS": "Time-Limited Trial Listing",
  "Standard Contract (SCMP) — AWS": "Standard Marketplace Contract",
  "Tax Details Dashboard — AWS": "Marketplace Tax Configuration",
  "Offer Set — AWS": "Offer Set",
  "Offer Set — Suger": "Offer Set",
  "AWS Marketplace Catalog API — AWS": "Marketplace Catalog & Offer API",
  Insulin: "AI Agents & Tools",
};

const LABEL_PRIORITY = [
  "Suger",
  "AWS",
  "Azure",
  "GCP",
  "Snowflake",
  "Alibaba",
  "Oracle",
];

export function conceptLabel(byPlatform) {
  for (const p of LABEL_PRIORITY) {
    const arr = byPlatform[p];
    if (!arr?.length) continue;
    for (const t of arr) {
      if (CONCEPT_OVERRIDES[t.name]) return CONCEPT_OVERRIDES[t.name];
    }
  }
  for (const p of LABEL_PRIORITY) {
    if (byPlatform[p]?.length)
      return byPlatform[p][0].name.replace(DISPLAY_SUFFIX_RE, "").trim();
  }
  return Object.values(byPlatform)[0][0]
    .name.replace(DISPLAY_SUFFIX_RE, "")
    .trim();
}

// Only groups that span 2+ platforms, sorted alphabetically by concept label
export const rows = Object.values(groups)
  .filter((g) => Object.keys(g).length >= 2)
  .sort((a, b) => conceptLabel(a).localeCompare(conceptLabel(b)));

// Look up the comparison row matching a free-text query (concept label or any
// member term's name, case-insensitive whole-word match) — used to resolve a
// Journey step's `compare` field into a real row for inline rendering.
// Word-boundary (not substring) matching is required: a plain .includes("ACE")
// would false-positive on "Marketplace" (contains "ace" mid-word).
export function findComparisonRow(query) {
  if (!query) return null;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const wordRe = new RegExp(`\\b${escaped}\\b`, "i");
  return (
    rows.find((g) => {
      if (wordRe.test(conceptLabel(g))) return true;
      return Object.values(g).some((arr) => arr?.some((t) => wordRe.test(t.name)));
    }) || null
  );
}
