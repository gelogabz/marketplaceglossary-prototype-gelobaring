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
export const PLATFORM_SUFFIX_RE = / — (AWS|Azure|GCP|Snowflake|Alibaba)$/;

// Walkthrough status labels — single source of truth for hub + detail pages
export const STATUS_LABELS = {
  "for-review": "For review",
  "not-started": "Not started",
  complete: "Complete",
  "in-progress": "In progress",
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
