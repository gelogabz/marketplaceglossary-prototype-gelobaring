// Shared category metadata for the Journey hub + guide detail pages.
// Categories follow the Suger Implementation V2 phase sequence.

export const CATEGORY_ORDER = [
  "kickoff",
  "integrations",
  "listings",
  "cosell",
  "cpq",
  "go-live",
  "operations",
];

export const CATEGORY_META = {
  kickoff: {
    label: "Kickoff & Setup",
    desc: "Get your Suger organization ready and align your team before integrations begin.",
  },
  integrations: {
    label: "Integrations",
    desc: "Connect cloud marketplaces (AWS, Azure, GCP, Snowflake), CRM, and notification tools to Suger.",
  },
  listings: {
    label: "Listing Setup",
    desc: "Create and submit product listings on AWS, Azure, and GCP — one guide per marketplace.",
  },
  cosell: {
    label: "Co-Sell Field Mapping",
    desc: "Configure CRM-to-cloud-partner data mapping for automated co-sell referral sharing.",
  },
  cpq: {
    label: "CPQ, Offers & Resale",
    desc: "Create private offers, configure CPQ field mappings, and set up resale authorizations for channel partners.",
  },
  "go-live": {
    label: "Go-Live",
    desc: "Migrate from sandbox to production, validate end-to-end, and sign off on the implementation.",
  },
  operations: {
    label: "Operations",
    desc: "Set up API clients, webhooks, and automation for day-to-day marketplace operations.",
  },
};
