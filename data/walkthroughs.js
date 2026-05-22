// ============================================================
// data/walkthroughs.js — Procedural step-by-step guides
// ============================================================
//
// Walkthroughs guide users through completing a real task.
// Unlike learning paths (which teach concepts), these are
// numbered action sequences for specific workflows.
//
// TO ADD A WALKTHROUGH:
//   1. Add a new object to the walkthroughs array below
//   2. Set a unique slug (used in ?w= URL param)
//   3. Set category: "setup" | "integration" | "offers" |
//                    "cosell" | "onboarding" | "operations"
//   4. Write steps[] — action verb first for each title
//
// STEP FIELDS:
//   title   — Step title, action verb first (required)
//   body    — Instruction text; may include inline HTML (required)
//   terms[] — Glossary terms to surface as chips (optional)
//             Format: { name: "Term Name", slug: "term-slug" }
//             Slug = term name lowercased, spaces→dashes, () removed
//   path    — Slug of one related learning path (optional)
//   compare — Concept label as shown in compare table (optional)
//             Links to comparison/ page (no per-row anchors yet)
//   link    — Primary external action link (optional)
//             Format: { label: "Button label →", url: "https://..." }
//   media   — Reserved for future multimedia (always null for now)
//             Future format: { type, src, caption, position, alt }
//
// ============================================================

export const walkthroughs = [
  // ─────────────────────────────────────────────────────────
  // SETUP
  // ─────────────────────────────────────────────────────────

  {
    slug: "aws-marketplace-setup",
    title: "AWS Marketplace Integration Setup",
    category: "setup",
    description:
      "Connect your AWS Marketplace seller account to Suger so entitlements, subscriptions, and metering sync automatically.",
    estimated: "~20 min",
    status: "for-review",
    steps: [
      {
        title: "Confirm prerequisites",
        body: "Before connecting, ensure you have: (1) Suger organization admin access, (2) an active AWS Marketplace seller account, and (3) your AWS Seller ID handy. If you haven't registered as a seller, complete AWS Marketplace seller registration first.",
        terms: [
          {
            name: "AWS Marketplace — AWS",
            slug: "aws-marketplace-—-aws",
          },
          {
            name: "AWS Marketplace Management Portal (AMMP) — AWS",
            slug: "aws-marketplace-management-portal-ammp-—-aws",
          },
        ],
        path: "aws-marketplace-essentials",
        link: {
          label: "Open AWS Seller Registration →",
          url: "https://aws.amazon.com/marketplace/management/tour",
        },
        media: null,
      },
      {
        title: "Navigate to AWS Marketplace Integration in Suger",
        body: 'In the Suger Console, go to <strong>Settings → Integrations → AWS Marketplace</strong>. You\'ll see a connection status panel. If this is your first time, the status will show as "Not connected."',
        terms: [
          { name: "Suger Console", slug: "suger-console" },
          { name: "Integration", slug: "integration" },
        ],
        link: {
          label: "Open Suger Console →",
          url: "https://console.suger.io",
        },
        media: null,
      },
      {
        title: "Authorize the OAuth connection",
        body: "Click <strong>Connect AWS Marketplace</strong>. You'll be redirected to AWS to authorize Suger's access. Log in with the AWS account that owns your Marketplace seller account and confirm the permissions. This is an org-level connection — it applies to your entire Suger organization.",
        terms: [
          {
            name: "AWS Marketplace — AWS",
            slug: "aws-marketplace-—-aws",
          },
        ],
        compare: "AWS Marketplace",
        media: null,
      },
      {
        title: "Confirm your AWS Seller ID",
        body: "After authorization, Suger detects your AWS Seller ID automatically. Verify it matches the Seller ID shown in your AWS Marketplace Management Portal under <strong>Account Settings</strong>. If it doesn't match, disconnect and reconnect with the correct AWS account.",
        terms: [
          {
            name: "AWS Marketplace Management Portal (AMMP) — AWS",
            slug: "aws-marketplace-management-portal-ammp-—-aws",
          },
          { name: "Product Code — AWS", slug: "product-code-—-aws" },
        ],
        link: {
          label: "Check your AWS Seller ID in AMMP →",
          url: "https://aws.amazon.com/marketplace/management/settings",
        },
        media: null,
      },
      {
        title: "Verify the integration status",
        body: "Return to <strong>Settings → Integrations → AWS Marketplace</strong> in Suger. The status badge should now show <strong>Connected</strong> in green. If it shows an error, check that the authorized AWS account has <em>AWSMarketplaceMeteringRegisterUsage</em> and <em>AWSMarketplaceSellerFullAccess</em> IAM policies attached.",
        terms: [{ name: "Entitlement", slug: "entitlement" }],
        media: null,
      },
      {
        title: "Link your product codes",
        body: "Navigate to <strong>Products</strong> in Suger and match each SaaS product to its AWS Marketplace Product Code. The product code is assigned by AWS when you create a listing — find it in AMMP under <strong>Listings</strong>.",
        terms: [
          { name: "Product Code — AWS", slug: "product-code-—-aws" },
          { name: "Listing", slug: "listing" },
        ],
        link: {
          label: "View your AWS Marketplace Listings →",
          url: "https://aws.amazon.com/marketplace/management/products/",
        },
        media: null,
      },
      {
        title: "Test with a subscription event",
        body: "Create a test subscription in AWS Marketplace (use a $0 private offer to a test buyer account) and confirm the entitlement appears in Suger under <strong>Entitlements</strong>. End-to-end sync typically completes within 60 seconds. If no entitlement appears, check <strong>Settings → Integrations → AWS Marketplace → Event Log</strong>.",
        terms: [
          { name: "Entitlement", slug: "entitlement" },
          { name: "Private Offer", slug: "private-offer" },
        ],
        media: null,
      },
    ],
  },

  {
    slug: "gcp-marketplace-setup",
    title: "GCP Marketplace Integration Setup",
    category: "setup",
    description:
      "Connect your GCP Marketplace producer account to Suger to enable entitlement tracking, usage metering, and subscription management on Google Cloud.",
    estimated: "~15 min",
    status: "for-review",
    steps: [
      {
        title: "Confirm prerequisites",
        body: "Before connecting, ensure you have: (1) a GCP project with Google Cloud Marketplace producer access enabled, (2) access to the GCP Producer Portal, and (3) Suger organization admin access. Your GCP project must have billing enabled and your org must be approved as a Marketplace producer.",
        terms: [
          {
            name: "GCP Marketplace — GCP",
            slug: "gcp-marketplace-—-gcp",
          },
          {
            name: "Producer Portal — GCP",
            slug: "producer-portal-—-gcp",
          },
        ],
        path: "gcp-marketplace-essentials",
        link: {
          label: "Open GCP Producer Portal →",
          url: "https://console.cloud.google.com/marketplace/",
        },
        media: null,
      },
      {
        title: "Navigate to GCP Integration in Suger",
        body: "In the Suger Console, go to <strong>Settings → Integrations → GCP Marketplace</strong>. Click <strong>Connect GCP Marketplace</strong> to begin the authorization flow.",
        terms: [
          { name: "Suger Console", slug: "suger-console" },
          { name: "Integration", slug: "integration" },
        ],
        link: {
          label: "Open Suger Console →",
          url: "https://console.suger.io",
        },
        media: null,
      },
      {
        title: "Authorize via Google OAuth and select your GCP project",
        body: "Sign in with the Google account that owns your GCP Marketplace producer project. After OAuth authorization, Suger lists your available GCP projects. Select the project that contains your Marketplace offerings. The connection is org-level — one Suger org maps to one GCP project.",
        terms: [
          {
            name: "GCP Marketplace — GCP",
            slug: "gcp-marketplace-—-gcp",
          },
          {
            name: "Service Account — GCP",
            slug: "service-account-—-gcp",
          },
        ],
        compare: "GCP Marketplace",
        media: null,
      },
      {
        title: "Grant IAM roles to the Suger service account",
        body: "Suger provisions a service account in your GCP project to perform Marketplace API calls. In the GCP Console under <strong>IAM & Admin → IAM</strong>, grant the following roles to the Suger service account email provided: <code>roles/cloudcommerceproducer.admin</code> and <code>roles/servicecontrol.serviceAgent</code>. Without these roles, metering and entitlement calls will fail.",
        terms: [
          {
            name: "Service Account — GCP",
            slug: "service-account-—-gcp",
          },
          {
            name: "Service Control API — GCP",
            slug: "service-control-api-—-gcp",
          },
        ],
        link: {
          label: "Open GCP IAM Console →",
          url: "https://console.cloud.google.com/iam-admin/iam",
        },
        media: null,
      },
      {
        title: "Enable required GCP APIs",
        body: "In your GCP project, enable the following APIs via <strong>APIs & Services → Enable APIs</strong>: (1) Cloud Commerce Consumer Procurement API, (2) Service Control API, (3) Cloud Pub/Sub API. All three are required for full Suger integration.",
        terms: [
          {
            name: "Service Control API — GCP",
            slug: "service-control-api-—-gcp",
          },
          {
            name: "GCP Marketplace — GCP",
            slug: "gcp-marketplace-—-gcp",
          },
        ],
        link: {
          label: "Enable APIs in GCP Console →",
          url: "https://console.cloud.google.com/apis/dashboard",
        },
        media: null,
      },
      {
        title: "Verify the integration status",
        body: "Return to <strong>Settings → Integrations → GCP Marketplace</strong> in Suger. The status badge should show <strong>Connected</strong>. If it shows an error, re-check that IAM roles were saved correctly and all three APIs are enabled. Integration health checks run automatically every 10 minutes.",
        terms: [
          { name: "Entitlement", slug: "entitlement" },
          {
            name: "Service Account — GCP",
            slug: "service-account-—-gcp",
          },
        ],
        media: null,
      },
      {
        title: "Test with a subscription event",
        body: "Create a test private offer in the GCP Producer Portal and have a test buyer account subscribe. Confirm the entitlement appears in Suger under <strong>Entitlements</strong>. End-to-end sync typically completes within 2–3 minutes via Pub/Sub. If no entitlement appears, check <strong>Settings → Integrations → GCP Marketplace → Event Log</strong>.",
        terms: [
          { name: "Entitlement", slug: "entitlement" },
          {
            name: "Producer Portal — GCP",
            slug: "producer-portal-—-gcp",
          },
        ],
        media: null,
      },
    ],
  },

  {
    slug: "listing-submission",
    title: "Creating and Submitting a Marketplace Listing",
    category: "setup",
    description:
      "Step through creating a new product listing in AWS Marketplace, from product type selection through submission for review.",
    estimated: "~15 min",
    status: "not-started",
    steps: [
      {
        title: "Content coming soon",
        body: "This walkthrough is being prepared. In the meantime, refer to the <a href='../learning-paths/path.html?p=aws-marketplace-essentials'>AWS Marketplace Essentials</a> learning path for context.",
        terms: [
          { name: "Listing", slug: "listing" },
          { name: "Product Code — AWS", slug: "product-code-—-aws" },
          {
            name: "AWS Marketplace — AWS",
            slug: "aws-marketplace-—-aws",
          },
        ],
        path: "aws-marketplace-essentials",
        media: null,
      },
    ],
  },

  {
    slug: "azure-marketplace-setup",
    title: "Azure Marketplace Integration Setup",
    category: "setup",
    description:
      "Connect your Azure Marketplace publisher account to Suger to sync transactable SaaS offers, entitlements, and billing via Partner Center.",
    estimated: "~15 min",
    status: "not-started",
    steps: [
      {
        title: "Content coming soon",
        body: "This walkthrough is being prepared. In the meantime, refer to the <a href='../learning-paths/path.html?p=azure-marketplace-essentials'>Azure Marketplace Essentials</a> learning path for context.",
        terms: [
          {
            name: "Microsoft Marketplace — Azure",
            slug: "microsoft-marketplace-—-azure",
          },
          {
            name: "Partner Center — Azure",
            slug: "partner-center-—-azure",
          },
          {
            name: "SaaS Fulfillment API — Azure",
            slug: "saas-fulfillment-api-—-azure",
          },
        ],
        path: "azure-marketplace-essentials",
        media: null,
      },
    ],
  },

  {
    slug: "buyer-experience-video",
    title: "Creating a Buyer Experience Video for AWS",
    category: "setup",
    description:
      "Record and submit the optional product demo video for your AWS Marketplace listing — requirements, format, and submission process.",
    estimated: "~10 min",
    status: "not-started",
    steps: [
      {
        title: "Content coming soon",
        body: "This walkthrough is being prepared. In the meantime, refer to the <a href='../learning-paths/path.html?p=aws-marketplace-essentials'>AWS Marketplace Essentials</a> learning path for context.",
        terms: [
          { name: "Listing", slug: "listing" },
          {
            name: "AWS Marketplace — AWS",
            slug: "aws-marketplace-—-aws",
          },
        ],
        path: "aws-marketplace-essentials",
        media: null,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // CO-SELL
  // ─────────────────────────────────────────────────────────

  {
    slug: "ace-cosell-setup",
    title: "Co-sell & ACE Integration Setup",
    category: "cosell",
    description:
      "Connect Suger to AWS Partner Central to sync ACE referrals, enable inbound co-sell opportunities, and submit outbound referrals automatically.",
    estimated: "~15 min",
    status: "for-review",
    steps: [
      {
        title: "Confirm ISV Accelerate enrollment",
        body: "ACE co-sell requires active enrollment in the AWS ISV Accelerate program. Log in to AWS Partner Central and verify your program status under <strong>Partner Central → Programs → ISV Accelerate</strong>. If not enrolled, submit an application — approval typically takes 2–4 weeks. You cannot complete this setup without active enrollment.",
        terms: [
          {
            name: "ISV Accelerate — AWS",
            slug: "isv-accelerate-—-aws",
          },
          {
            name: "APN Customer Engagements (ACE) — AWS",
            slug: "apn-customer-engagements-ace-—-aws",
          },
        ],
        path: "cosell-fundamentals",
        link: {
          label: "Check ISV Accelerate status in Partner Central →",
          url: "https://partnercentral.awspartner.com/",
        },
        media: null,
      },
      {
        title: "Navigate to ACE Integration in Suger",
        body: "In the Suger Console, go to <strong>Settings → Integrations → AWS ACE / Co-sell</strong>. The panel shows the current connection status and any active referral sync configuration.",
        terms: [
          { name: "Suger Console", slug: "suger-console" },
          {
            name: "APN Customer Engagements (ACE) — AWS",
            slug: "apn-customer-engagements-ace-—-aws",
          },
        ],
        link: {
          label: "Open Suger Console →",
          url: "https://console.suger.io",
        },
        media: null,
      },
      {
        title: "Authorize AWS Partner Central OAuth",
        body: "Click <strong>Connect AWS Partner Central</strong>. You'll be redirected to AWS to authorize Suger's ACE API access. Use the account enrolled in ISV Accelerate. Grant the requested permissions — Suger needs read/write access to ACE opportunities on your behalf.",
        terms: [
          {
            name: "APN Customer Engagements (ACE) — AWS",
            slug: "apn-customer-engagements-ace-—-aws",
          },
          { name: "Outbound Referral", slug: "outbound-referral" },
        ],
        compare: "ACE",
        media: null,
      },
      {
        title: "Configure inbound referral sync",
        body: "Under <strong>Inbound Referral Settings</strong>, choose how Suger should handle AWS-originated co-sell opportunities: (1) auto-accept and create opportunities in your CRM, or (2) queue for manual review. Set your default CRM pipeline stage for new inbound referrals.",
        terms: [
          { name: "Inbound Referral", slug: "inbound-referral" },
          { name: "CRM Enrichment", slug: "crm-enrichment" },
        ],
        media: null,
      },
      {
        title: "Configure outbound referral submission",
        body: "Under <strong>Outbound Referral Settings</strong>, enable automatic submission of your CRM opportunities to AWS as ACE referrals. Map your CRM opportunity fields to the required ACE fields: customer name, customer domain, estimated ARR, close date, and use case. Incomplete field mapping will cause submission errors.",
        terms: [
          { name: "Outbound Referral", slug: "outbound-referral" },
          { name: "Inbound Referral", slug: "inbound-referral" },
        ],
        media: null,
      },
      {
        title: "Verify sync with a test referral",
        body: "Create a test opportunity in your CRM (or directly in Suger) and submit it as an outbound ACE referral. Check AWS Partner Central to confirm it appears under <strong>Co-sell → Opportunities</strong>. Sync typically completes within 5 minutes. Then accept the test referral from Partner Central and verify the inbound sync brings it back into Suger.",
        terms: [
          { name: "Outbound Referral", slug: "outbound-referral" },
          { name: "Inbound Referral", slug: "inbound-referral" },
          {
            name: "APN Customer Engagements (ACE) — AWS",
            slug: "apn-customer-engagements-ace-—-aws",
          },
        ],
        link: {
          label: "View opportunities in AWS Partner Central →",
          url: "https://partnercentral.awspartner.com/",
        },
        media: null,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // OFFERS
  // ─────────────────────────────────────────────────────────

  {
    slug: "create-private-offer",
    title: "Creating a Private Offer",
    category: "offers",
    description:
      "Walk through creating, pricing, and sending a private offer to a specific buyer through AWS Marketplace, including custom terms and expiration.",
    estimated: "~10 min",
    status: "not-started",
    steps: [
      {
        title: "Content coming soon",
        body: "This walkthrough is being prepared. In the meantime, refer to the <a href='../learning-paths/path.html?p=private-offers-and-cppas'>Private Offers & CPPOs</a> learning path for context.",
        terms: [
          { name: "Private Offer", slug: "private-offer" },
          { name: "Entitlement", slug: "entitlement" },
        ],
        path: "private-offers-and-cppas",
        media: null,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // INTEGRATION
  // ─────────────────────────────────────────────────────────

  {
    slug: "salesforce-crm-setup",
    title: "Salesforce & CRM Integration Setup",
    category: "integration",
    description:
      "Connect Salesforce to Suger to enrich CRM records with marketplace intelligence, sync opportunities, and trigger co-sell actions automatically.",
    estimated: "~10 min",
    status: "not-started",
    steps: [
      {
        title: "Content coming soon",
        body: "This walkthrough is being prepared. In the meantime, refer to the <a href='../learning-paths/path.html?p=suger-platform-quickstart'>Suger Platform Quickstart</a> learning path for context.",
        terms: [
          {
            name: "Salesforce Integration",
            slug: "salesforce-integration",
          },
          { name: "CRM Enrichment", slug: "crm-enrichment" },
          {
            name: "Propensity to Buy (PTB) Score",
            slug: "propensity-to-buy-ptb-score",
          },
        ],
        path: "suger-platform-quickstart",
        media: null,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // ONBOARDING
  // ─────────────────────────────────────────────────────────

  {
    slug: "post-onboarding-next-steps",
    title: "After Onboarding: What to Do Next",
    category: "onboarding",
    description:
      "A guided checklist of the first actions to take in Suger after your marketplace integration is live — from testing entitlements to enabling co-sell.",
    estimated: "~10 min",
    status: "not-started",
    steps: [
      {
        title: "Content coming soon",
        body: "This walkthrough is being prepared. In the meantime, refer to the <a href='../learning-paths/path.html?p=suger-platform-quickstart'>Suger Platform Quickstart</a> learning path for context.",
        terms: [
          { name: "Suger Console", slug: "suger-console" },
          { name: "Entitlement", slug: "entitlement" },
          { name: "Provisioning", slug: "provisioning" },
        ],
        path: "suger-platform-quickstart",
        media: null,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // OPERATIONS
  // ─────────────────────────────────────────────────────────

  {
    slug: "workflow-automation-setup",
    title: "Setting Up Workflows and Automation",
    category: "operations",
    description:
      "Configure Suger's webhook and API client to automate provisioning, entitlement notifications, and usage metering for your marketplace integrations.",
    estimated: "~10 min",
    status: "not-started",
    steps: [
      {
        title: "Content coming soon",
        body: "This walkthrough is being prepared. In the meantime, refer to the <a href='../learning-paths/path.html?p=marketplace-integrations'>Marketplace Integrations</a> learning path for context.",
        terms: [
          { name: "Suger API Client", slug: "suger-api-client" },
          { name: "Webhook", slug: "webhook" },
          {
            name: "Metering / Usage Reporting",
            slug: "metering-/-usage-reporting",
          },
        ],
        path: "marketplace-integrations",
        media: null,
      },
    ],
  },
];
