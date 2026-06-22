# Cloud GTM Reference

A searchable glossary and learning platform for cloud marketplace terminology — covering AWS, Azure, GCP, Snowflake, and Alibaba.

**Live site:** https://gelogabz.github.io/marketplaceglossary-prototype-gelobaring/

---

## Pages

| Page           | URL                | Description                                                                 |
| -------------- | ------------------ | --------------------------------------------------------------------------- |
| Glossary       | `/`                | Searchable database of cloud marketplace terms                              |
| Compare        | `/comparison/`     | Cross-platform concept map (same idea, different names across hyperscalers) |
| Learning Paths | `/learning-paths/` | Curated reading sequences organized by role and topic                       |
| Walkthroughs   | `/walkthroughs/`   | Step-by-step guides for common marketplace workflows                        |
| Links          | `/links/`          | Curated directory of official portals and documentation                     |
| What's New     | `/whats-new/`      | Live feed of marketplace updates from official sources                      |

---

## What's New — automated feed

The What's New page is populated by a Node.js fetch script that pulls from official sources:

- AWS What's New (RSS)
- AWS Marketplace Blog (RSS)
- GCP Marketplace release notes
- Azure Partner Center announcements
- Snowflake What's New
- Suger Blog

**Run locally:**

```bash
node scripts/fetch-whats-new.js
```

Requires Node 18+. No dependencies — uses built-in `fetch`.

**Automated:** `.github/workflows/fetch-whats-new.yml` runs daily at 6:00 AM UTC and on manual trigger from the Actions tab. The workflow commits updated data back to `main` if anything changed.

---

## Tech stack

- Vanilla JS (ES modules) — no build step, no npm
- Pure CSS — no frameworks
- GitHub Pages — static hosting, deploys on push to `main`
