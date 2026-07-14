// Single source of truth for all tags used on terms.
//
// To add a tag:
//   1. Add an entry to tagMeta below (CSS is auto-generated — no stylesheet edits needed)
//   2. Add a <button class="filter-chip" type="button" data-filter-tag="yourtag">
//      inside the relevant section of the filter modal in index.html
//   3. Tag terms in data/terms.js by adding the key to their `tags` array
//
// Fields:
//   label  — display text shown in filter chips and tag pills (keep ≤12 chars)
//   bg     — background color (use a light tint)
//   color  — text color (must contrast ≥4.5:1 against bg for WCAG AA)
//
// Tag order here determines display order on term cards. Platform tags first, topic tags after.

export const tagMeta = {
  suger: { label: "Suger", bg: "#ede9ff", color: "#3c3489" },
  general: { label: "General", bg: "#f1efe8", color: "#444441" },
  aws: { label: "AWS", bg: "#fff3dc", color: "#8a5700" },
  azure: { label: "Azure", bg: "#e3f0ff", color: "#0b4f9e" },
  gcp: { label: "GCP", bg: "#e8f5e9", color: "#1b5e20" },
  snowflake: { label: "Snowflake", bg: "#e8f4fd", color: "#0c4f7a" },
  alibaba: { label: "Alibaba", bg: "#fff0e0", color: "#8c3d00" },
  oracle: { label: "Oracle", bg: "#fbe9e7", color: "#8c231a" },
  offers: { label: "Offers", bg: "#fff8e8", color: "#7a4f00" },
  channel: { label: "Channel", bg: "#f0e8ff", color: "#5320aa" },
  integrations: { label: "Integrations", bg: "#e8f0fe", color: "#1a56cc" },
  cosell: { label: "Co-sell", bg: "#fde8f0", color: "#7a1f45" },
  funding: { label: "Funding", bg: "#e6fffa", color: "#234e52" },
};

// Example new entry:
//   mytag: { label: "My Tag", bg: "#e8f5e9", color: "#1b5e20" },
