// Deterministic difficulty scoring for terms without an explicit t.difficulty value.
// Manual t.difficulty always takes precedence — this is a fallback only.

const BEGINNER_MAX = 1.5;
const INTERMEDIATE_MAX = 3.0;

export function computeDifficulty(term) {
  if (term.difficulty) return term.difficulty;

  let score = 0;
  const def = (term.def || "").toLowerCase();
  const alias = (term.alias || "").toLowerCase();
  const tags = term.tags || [];
  const related = term.related || [];

  // Conceptual complexity (definition length)
  if (def.length > 200) score += 0.5;
  if (def.length > 400) score += 0.5;

  // Financial / billing language
  if (
    /\b(billing|revenue|payout|disbursement|reconciliation|invoice)\b/.test(def)
  )
    score += 0.5;
  if (/\b(committed spend|drawdown|draw-down|macc|edp|ccs|draws)\b/.test(def))
    score += 1.0;

  // Procurement / legal language
  if (/\b(agreement|contract|entitlement|eula|scmp)\b/.test(def)) score += 0.3;

  // Channel mechanics — always intermediate or higher
  if (
    /\b(channel partner|resale|distributor|wholesale|markup|reseller|cppo|sppo|mcpo|mpo)\b/.test(
      def,
    )
  )
    score += 0.75;
  if (/\b(multi-party|multiparty|co-sell|cosell|joint.sell)\b/.test(def))
    score += 0.5;

  // Advanced / edge-case mechanics
  if (
    /\b(amendment|abo|flex commit|uplift|floor price|future dated|committed use discount)\b/.test(
      def,
    )
  )
    score += 1.0;
  if (
    /\b(metering dimension|usage record|catalog api|fulfillment api|marketplace api)\b/.test(
      def,
    )
  )
    score += 0.75;

  // Relationship density (alias pipe-delimited cross-links)
  const pipeCount = (alias.match(/\|/g) || []).length;
  if (pipeCount >= 2) score += 0.3;
  if (pipeCount >= 4) score += 0.3;

  // Explicit related array (from enriched terms)
  if (related.length >= 3) score += 0.3;
  if (related.length >= 5) score += 0.3;

  // General / Suger-tagged terms without platform specificity tend to be simpler
  const isPlatformSpecific = tags.some((t) =>
    ["aws", "azure", "gcp", "snowflake", "alibaba"].includes(t),
  );
  if (!isPlatformSpecific && tags.includes("general"))
    score = Math.max(0, score - 0.4);

  if (score < BEGINNER_MAX) return "beginner";
  if (score < INTERMEDIATE_MAX) return "intermediate";
  return "advanced";
}
