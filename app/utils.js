// Shared utility functions

/**
 * Escape user input before inserting into innerHTML.
 * Use any time content from URL params, user input, or
 * untrusted sources is placed in a template literal.
 */
export function escHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Matches platform suffix on term names — e.g. "ACE — AWS", "MPO — Azure"
export const PLATFORM_SUFFIX_RE =
  / — (AWS|Azure|GCP|Snowflake|Alibaba|Oracle)$/;

// Walkthrough status labels — single source of truth for hub + detail pages
export const STATUS_LABELS = {
  "for-review": "For review",
  "not-started": "Not started",
  complete: "Complete",
  "in-progress": "In progress",
};

// ---- Learning path category metadata — single source of truth for hub + detail pages
export const CATEGORY_META = {
  fundamentals: {
    label: "Getting Started",
    desc: "Core concepts every Cloud GTM practitioner needs first.",
  },
  procurement: {
    label: "Procurement",
    desc: "How buyers transact — offers, contracts, and entitlements.",
  },
  cosell: {
    label: "Co-sell",
    desc: "Joint selling motions with hyperscaler sales teams.",
  },
  billing: {
    label: "Billing & Revenue",
    desc: "Revenue, metering, committed spend, and payout mechanics.",
  },
  operations: {
    label: "Marketplace Ops",
    desc: "Day-to-day ISV operations — APIs, integrations, and listing management.",
  },
  advanced: {
    label: "Channel & Partner",
    desc: "Distributor models, resale mechanics, and multi-party channel motions.",
  },
  onboarding: {
    label: "Role-Based Onboarding",
    desc: "Paths aligned to job function — get productive in your role fast.",
  },
};

// ---- Learning path localStorage helpers ------------------------------------

export const LP_STORAGE_KEY = "gtm-completed-paths";
export const LP_READ_KEY = "gtm-path-progress";

export function getCompleted() {
  try {
    return JSON.parse(localStorage.getItem(LP_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

export function isComplete(pathSlug) {
  return !!getCompleted()[pathSlug];
}

export function getReadProgress() {
  try {
    return JSON.parse(localStorage.getItem(LP_READ_KEY) || "{}");
  } catch {
    return {};
  }
}
