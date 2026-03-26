// Single source of truth for all tags.
// To add a new tag: add an entry here. CSS is generated automatically — no other file needs updating.
//
// Fields:
//   label  — display text shown in pills and badges
//   bg     — background color
//   color  — text/foreground color

export const tagMeta = {
    aws:       { label: "AWS",        bg: "#fff3dc", color: "#8a5700" },
    azure:     { label: "Azure",      bg: "#e3f0ff", color: "#0b4f9e" },
    cosell:    { label: "Co-sell",    bg: "#fde8f0", color: "#7a1f45" },
    gcp:       { label: "GCP",        bg: "#e8f5e9", color: "#1b5e20" },
    general:   { label: "General",    bg: "#f1efe8", color: "#444441" },
    snowflake: { label: "Snowflake",  bg: "#e8f4fd", color: "#0c4f7a" },
    suger:     { label: "Suger",      bg: "#ede9ff", color: "#3c3489" },
};
