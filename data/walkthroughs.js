// ============================================================
// data/walkthroughs.js — Procedural step-by-step guides
// ============================================================
//
// Steps are aligned to the Suger Help Center articles listed in
// info-sources.md. Each walkthrough has a sourceUrl pointing
// to the primary Help Center article.
//
// Categories follow the Suger Implementation V2 phase sequence:
//   kickoff → integrations → listings → cosell → cpq → go-live → operations
//
// STEP FIELDS:
//   title   — Step title, action verb first (required)
//   body    — Instruction text; may include inline HTML (required)
//   checks  — "Before moving on" questions rendered as checkboxes
//             2–3 per step minimum. State: localStorage gtm-walkthrough-checks
//   terms[] — Glossary chips: { name, slug }
//   path    — Related learning path slug
//   compare — Concept label in compare table
//   link    — { label, url } primary action link for this step
//   media   — Reserved for multimedia (always null for now)
//
// ============================================================

export const walkthroughs = [
  // ─────────────────────────────────────────────────────────
  // KICKOFF
  // ─────────────────────────────────────────────────────────

  {
    slug: "kickoff-setup",
    title: "Implementation Kickoff & Console Setup",
    category: "kickoff",
    description:
      "Set up your Suger organization, invite stakeholders, and align on the implementation timeline before integrations begin.",
    estimated: "~30 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/6695643183",
    steps: [
      {
        title: "Create your Suger Console and invite stakeholders",
        body: "Go to <a href='https://console.suger.io' target='_blank' rel='noopener'>console.suger.io</a> and sign up. Use your company email domain — not a personal email like Gmail. Enter your company name and basic details. Your account won't be active immediately: Suger must approve your organization before you can proceed, which typically takes up to <strong>1 business day</strong>. Once approved you'll receive a confirmation email. After approval, navigate to <strong>Settings → Users → Invite a New Team Member</strong> and assign roles: <strong>Admin</strong> for implementation leads, <strong>Editor</strong> for day-to-day operators, <strong>Viewer</strong> for executive stakeholders. Invite everyone early — delays in adding team members often block later phases. At minimum, cover: <strong>AWS Console Full Admin</strong> (for marketplace setup) and <strong>Sales Ops / Finance / Deal Desk / MarketplaceOps</strong> (for business stakeholders).",
        terms: [{ name: "Suger Console", slug: "suger-console" }],
        link: {
          label: "Open Suger Console →",
          url: "https://console.suger.io",
        },
        checks: [
          "Did you sign up using your company email domain (not a personal email like Gmail)?",
          "Did your organization approval email arrive within 1 business day? If not, reach out via your Slack channel.",
          "Have all relevant implementation stakeholders been invited?",
          "Are roles assigned correctly (Admin / Editor / Viewer)?",
          "Are these roles covered in your invite list: AWS Console Full Admin, Sales Ops, Finance, Deal Desk / MarketplaceOps?",
        ],
        media: null,
      },
      {
        title: "Familiarize your team with the Suger Console",
        body: "Walk your team through the main navigation areas they'll use during implementation: <strong>Product</strong> (manage listings), <strong>Offer</strong> (create and track private offers), <strong>Entitlement</strong> (monitor customer subscriptions), <strong>Co-Sell</strong> (referral management), <strong>Settings</strong> (integrations, notifications, API clients). The Home dashboard shows real-time summary metrics — a good starting point for daily reviews.",
        link: {
          label: "Navigate the Suger Console (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/7499963880",
        },
        checks: [
          "Can your team navigate to Settings → Integrations?",
          "Do key stakeholders know where to find Entitlements and Offers?",
        ],
        media: null,
      },
      {
        title: "Set up internal communication channels with Suger",
        body: "Suger communicates via Slack or Microsoft Teams during implementation. Establish a shared channel with your Suger implementation team for issue escalation and milestone updates. This channel will be active throughout the 6-phase implementation journey.",
        checks: [
          "Is a shared Slack or Teams channel active with your Suger implementation contact?",
          "Have you confirmed the escalation path for implementation blockers?",
        ],
        media: null,
      },
      {
        title: "Review the implementation timeline and assign task owners",
        body: "Walk through the 6-phase implementation plan with your Suger team: (1) Kickoff, (2) Integrations, (3) Listing Setup, (4) Co-Sell Field Mapping, (5) CPQ Configuration, (6) Go-Live. Assign a task owner from your side for each phase. Identify any blockers or dependencies upfront — especially for the CPQ form and listing creation, which have lead time.",
        checks: [
          "Has each of the 6 phases been assigned an owner on your team?",
          "Have you identified any blockers (e.g., AWS ISV Accelerate approval pending) that could delay a phase?",
        ],
        media: null,
      },
      {
        title: "Complete the CPQ intake form (if applicable)",
        body: "If you're configuring Suger's CPQ for private offer automation, your Suger implementation contact will send you a CPQ intake form. Complete and return it before the CPQ Configuration phase — this form captures your pricing model, deal workflow, and CRM field mappings and is required before Suger can build your CPQ V1.",
        checks: [
          "Have you received and returned the CPQ intake form to your Suger implementation contact?",
          "Is the CPQ form returned before the CPQ Configuration phase (Phase 5) begins?",
        ],
        media: null,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // INTEGRATIONS
  // ─────────────────────────────────────────────────────────

  {
    slug: "slack-notifications-setup",
    title: "Integrate Slack for Marketplace Notifications",
    category: "integrations",
    description:
      "Connect Suger to Slack to receive real-time alerts for marketplace events — offer creation, entitlement changes, billing events, and co-sell updates.",
    estimated: "~10 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/9256429762",
    steps: [
      {
        title: "Install the Suger App for Slack",
        body: "In Suger Console, go to <strong>Settings → Integrations</strong>. Find the <strong>Slack</strong> card and click <strong>Connect</strong>. You'll be redirected to Slack's OAuth authorization page. Select the correct workspace, review the permissions, and click <strong>Allow</strong>. You'll be redirected back to Suger Console once authorized.",
        terms: [{ name: "Suger Console", slug: "suger-console" }],
        link: {
          label: "Open Suger Console → Settings → Integrations →",
          url: "https://console.suger.io",
        },
        checks: [
          "Did you select the correct Slack workspace during authorization?",
          "Is Suger now listed as an installed app in your Slack workspace (Settings → Apps)?",
        ],
        media: null,
      },
      {
        title: "Configure notification scopes and channel routing",
        body: "After authorization, configure which events route to which Slack channels. In Suger, go to the Slack integration settings and define scope routing: offer events (CREATE, ACCEPT, EXPIRE) → sales channel; entitlement events (CREATE, CANCEL, SUSPEND) → ops or engineering channel; co-sell events → sales channel; billing events → finance channel. For <strong>private channels</strong>, invite the bot first: type <code>/invite @Suger</code> in the channel before adding it as a destination.",
        checks: [
          "Are critical entitlement events (CREATE, CANCEL) routed to a channel your ops or engineering team monitors?",
          "Are offer events routed to your sales or deal desk channel?",
          "For any private channels, did you run /invite @Suger before setting them as a destination?",
        ],
        media: null,
      },
      {
        title: "Understand notification types and test delivery",
        body: "Suger sends notifications for: marketplace events (offer lifecycle, entitlement changes), co-sell events (referral accepted, inbound submissions), and billing events (disbursements). To test, navigate to <strong>Settings → Notifications</strong> and click the <strong>Test</strong> button on a configured trigger. Confirm the test message arrives in the expected Slack channel within 30 seconds.",
        link: {
          label: "Configure Notifications (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/6793092534",
        },
        checks: [
          "Did the test notification arrive in the correct Slack channel?",
          "Is the message readable and correctly formatted?",
        ],
        media: null,
      },
      {
        title: "Manage lifecycle and safe removal",
        body: "To pause all Slack notifications temporarily, use the master toggle in the Slack integration settings. To fully remove the integration, you must: (1) delete it from Suger Console AND (2) uninstall the Suger app from Slack Workspace Settings → Apps. Removing from Suger alone does not fully revoke access.",
        checks: [
          "Do you know where the master notification toggle is to pause alerts if needed?",
          "Is the removal procedure documented for your team in case you need to disconnect?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "aws-marketplace-setup",
    title: "Integrate AWS Marketplace with Suger",
    category: "integrations",
    description:
      "Connect your AWS Marketplace seller account to Suger through a secure IAM connection, MCAS, and MDFS data feed configuration.",
    estimated: "~30 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/9351208221",
    steps: [
      {
        title: "Confirm prerequisites",
        body: "You must complete <strong>AWS Marketplace seller registration</strong> before starting this integration — the CloudFormation stack in the next step requires an active seller account. Also have ready: (1) someone with <strong>AWS account admin access</strong> to create IAM roles (takes ~20 minutes), and (2) Suger organization admin access. If you haven't registered as an AWS Marketplace seller, do that first via the link below.",
        terms: [
          { name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" },
          {
            name: "AWS Marketplace Management Portal (AMMP) — AWS",
            slug: "aws-marketplace-management-portal-ammp-—-aws",
          },
        ],
        path: "aws-marketplace-essentials",
        link: {
          label: "AWS Marketplace seller registration →",
          url: "https://aws.amazon.com/marketplace/management/tour",
        },
        checks: [
          "Is AWS Marketplace seller registration complete (not just applied or pending)?",
          "Do you have someone with AWS account admin access available for IAM configuration?",
          "Do you have Suger organization admin access?",
        ],
        media: null,
      },
      {
        title: "Establish the secure IAM connection",
        body: "In Suger Console, navigate to <strong>Settings → Integrations → AWS Marketplace</strong> and begin the setup wizard. Suger uses cross-account IAM roles — not access keys — for secure, credential-free access. The wizard provides a CloudFormation template. When prompted for an Account ID in the template, enter <strong>Suger's AWS Account ID: <code>752785145360</code></strong> — do not enter your own AWS account ID. Check the acknowledgment box that allows IAM resource creation. Wait for the CloudFormation stack status to show <strong>CREATE_COMPLETE</strong> before moving on. Then paste the resulting Role ARN back into Suger.",
        terms: [{ name: "Integration", slug: "integration" }],
        link: {
          label: "Open Suger Console → Settings → Integrations →",
          url: "https://console.suger.io",
        },
        checks: [
          "Did you enter <code>752785145360</code> (Suger's AWS Account ID) in the CloudFormation template — NOT your own AWS account ID?",
          "Did you check the acknowledgment box that allows IAM resource creation?",
          "Did you wait for CloudFormation stack status <code>CREATE_COMPLETE</code> before proceeding?",
          "Did you paste the Role ARN back into Suger?",
        ],
        media: null,
      },
      {
        title: "Enable Marketplace Commerce Analytics Service (MCAS)",
        body: "MCAS is an AWS service that gives Suger access to your marketplace business reports — revenue, disbursements, subscriber data, and usage records. In AWS Marketplace Management Portal (AMMP), navigate to the MCAS enrollment page. When setting up the IAM role for MCAS, select <strong>Use an existing IAM role</strong> and enter the S3 Bucket Name and SNS Topic ARN that correspond to your AWS account ID. This allows Suger to pull financial and subscription data automatically.",
        terms: [
          {
            name: "AWS Marketplace Management Portal (AMMP) — AWS",
            slug: "aws-marketplace-management-portal-ammp-—-aws",
          },
        ],
        link: {
          label: "Open AWS Marketplace Management Portal →",
          url: "https://aws.amazon.com/marketplace/management/settings",
        },
        checks: [
          "Is MCAS enabled in AMMP?",
          "Did you select 'Use an existing IAM role' during MCAS enrollment?",
          "Did you enter the correct S3 Bucket Name and SNS Topic ARN for your AWS account?",
        ],
        media: null,
      },
      {
        title: "Configure Marketplace Data Feeds Service (MDFS)",
        body: "MDFS delivers detailed subscription, usage, and financial data as CSV files. Run a second CloudFormation stack in your AWS account. <strong>The stack must be named exactly: <code>mp-data-feed</code></strong> — the name matters. Once the stack reaches <strong>CREATE_COMPLETE</strong>, go to <strong>AWS CloudFormation → Stacks → mp-data-feed → Outputs tab</strong>. Copy both the <strong><code>s3BucketARN</code></strong> and <strong><code>KMSKeyARN</code></strong> values from the Outputs tab and paste them into the Data Feed Configuration page in AMMP. If you skip this step, Suger will not be able to access your revenue and billing data.",
        link: {
          label: "AWS Marketplace Data Feed docs →",
          url: "https://docs.aws.amazon.com/marketplace/latest/userguide/data-feed.html",
        },
        checks: [
          "Is the CloudFormation stack named exactly <code>mp-data-feed</code>?",
          "Did you copy the <code>s3BucketARN</code> and <code>KMSKeyARN</code> from the stack's Outputs tab and paste them into the Data Feed Configuration page? (This is the most common reason verification fails.)",
          "Is the stack status <code>CREATE_COMPLETE</code>?",
        ],
        media: null,
      },
      {
        title: "Finalize your integration in the Suger Console",
        body: "Return to <strong>Settings → Integrations → AWS Marketplace</strong> in Suger Console. Click the <strong>VERIFY</strong> button on the integration card. Confirm the status updates to <strong>VERIFIED</strong>. If verification fails, the most common cause is missing or incorrect <code>s3BucketARN</code>/<code>KMSKeyARN</code> values in MDFS — re-check Step 4. Once verified, navigate to <strong>Products</strong> in Suger and link each product to its AWS Marketplace Product Code. Product Codes are found in AMMP under <strong>Listings</strong>.",
        terms: [
          { name: "Product Code — AWS", slug: "product-code-—-aws" },
          { name: "Listing", slug: "listing" },
        ],
        link: {
          label: "View your AWS Listings in AMMP →",
          url: "https://aws.amazon.com/marketplace/management/products/",
        },
        checks: [
          "Did you click VERIFY in Suger Console → Settings → Integrations → AWS Marketplace?",
          "Does the integration status show VERIFIED?",
          "Is every Suger product linked to its correct AWS Marketplace Product Code?",
        ],
        media: null,
      },
      {
        title: "Troubleshoot and verify with a test subscription",
        body: "Create a test subscription in AWS Marketplace: create a $0 private offer to a test buyer account you control and have that account accept it. Confirm the entitlement appears in Suger under <strong>Entitlements</strong> within 60 seconds. If no entitlement appears, check the Event Log at <strong>Settings → Integrations → AWS Marketplace → Event Log</strong>.",
        terms: [
          { name: "Entitlement", slug: "entitlement" },
          { name: "Private Offer", slug: "private-offer" },
        ],
        checks: [
          "Did the test entitlement appear in Suger → Entitlements within 60 seconds?",
          "If no entitlement appeared, did you check the Event Log for specific error messages?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "aws-partner-central-setup",
    title: "Integrate AWS ACE (Partner Central) with Suger",
    category: "integrations",
    description:
      "Connect Suger to AWS Partner Central to sync ACE co-sell opportunities and automate referral workflows. Requires active ISV Accelerate enrollment.",
    estimated: "~15 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/7842274106",
    steps: [
      {
        title: "Confirm prerequisites",
        body: "Before starting, confirm your organization meets AWS's co-sell eligibility requirements: your AWS account must be actively enrolled in <strong>ISV Accelerate</strong> — status must show 'Active', not 'Pending' or 'Applied'. Complete the ISV Accelerate eligibility check first if you haven't done so. After this integration is complete, your Suger contact will help configure field mapping so opportunities sync correctly between your CRM and AWS ACE.",
        terms: [
          { name: "ISV Accelerate — AWS", slug: "isv-accelerate-—-aws" },
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
        checks: [
          "Is your organization enrolled in ISV Accelerate / Partner Advantage and eligible for AWS co-sell?",
          "Is your ISV Accelerate status showing 'Active' (not Pending or Applied) in AWS Partner Central?",
          "Is the enrolled AWS account the same one you'll connect to Suger?",
        ],
        media: null,
      },
      {
        title: "Link your AWS account to Partner Central",
        body: "Confirm that the AWS account you'll use for this integration is properly linked to your AWS Partner Central account. In Partner Central, go to <strong>Account Settings</strong> and verify the AWS account association. If the accounts are not linked, follow AWS's account linking procedure before proceeding.",
        link: {
          label: "AWS Partner Central →",
          url: "https://partnercentral.awspartner.com/",
        },
        checks: [
          "Is the AWS account linked to your Partner Central account in Account Settings?",
          "Do you have admin permissions in both the AWS account and Partner Central?",
        ],
        media: null,
      },
      {
        title: "Configure the Suger integration",
        body: "In Suger Console, navigate to <strong>Settings → Integrations → AWS ACE</strong> (or <strong>Settings → Co-sell → Connect AWS Partner Central</strong>). Click <strong>Connect</strong> and complete the OAuth authorization flow. Log in with the <strong>ISV Accelerate-enrolled AWS account</strong> and grant all requested permissions — Suger needs read/write access to ACE opportunities on your behalf.",
        compare: "ACE",
        link: {
          label: "Open Suger Console →",
          url: "https://console.suger.io",
        },
        checks: [
          "Did you authorize using the ISV Accelerate-enrolled AWS account?",
          "Did you grant all requested permissions — not just some?",
          "Does the integration show 'Connected' in Suger after authorization?",
        ],
        media: null,
      },
      {
        title: "Sync and verify co-sell data",
        body: "After connecting, verify the integration is active by checking for any existing co-sell opportunities in Suger under <strong>Co-Sell</strong>. If you have existing ACE opportunities in Partner Central, they should begin syncing within a few minutes. Then test your co-sell configuration by opening an opportunity and clicking <strong>Share</strong>. Review the Share modal — all required AWS co-sell fields should be populated: <strong>Customer Business Problem</strong>, <strong>Solution Offered</strong>, <strong>Use Case</strong>, and <strong>Expected Monthly AWS Revenue</strong>. Enable <strong>Auto-Enrich</strong> to automatically fill in missing company and contact data before submission.",
        terms: [
          { name: "Outbound Referral", slug: "outbound-referral" },
          { name: "Inbound Referral", slug: "inbound-referral" },
        ],
        checks: [
          "Is the AWS Partner Central integration showing a green checkmark in Suger Console → Settings → Integrations?",
          "Are all required AWS co-sell fields mapped: Customer Business Problem, Solution Offered, Use Case, Expected Monthly AWS Revenue?",
          "Is Auto-Enrich turned ON to automatically fill missing company/contact data?",
          "In a Share modal test: does the Submit button become enabled after filling required fields?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "azure-marketplace-setup",
    title: "Integrate Azure Marketplace with Suger",
    category: "integrations",
    description:
      "Connect your Azure Marketplace publisher account to Suger through Azure App Registration, API permissions, and Partner Center linking.",
    estimated: "~30 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/8890722816",
    steps: [
      {
        title: "Confirm prerequisites",
        body: "Before starting, confirm: (1) someone with <strong>Global Administrator</strong> access in both Azure and Microsoft Partner Center is available to complete the OAuth consent step — without this, setup cannot complete, (2) Microsoft Partner Center enrollment is fully done: <strong>Commercial Marketplace enrollment</strong>, <strong>Microsoft AI Cloud Partner Program</strong>, <strong>Legal profile</strong>, <strong>Tax profile</strong>, and <strong>Payout profile</strong> — payout verification can take a few business days so set it up early, and (3) Suger organization admin access.",
        terms: [
          {
            name: "Microsoft Marketplace — Azure",
            slug: "microsoft-marketplace-—-azure",
          },
          { name: "Partner Center — Azure", slug: "partner-center-—-azure" },
        ],
        path: "azure-marketplace-essentials",
        link: {
          label: "Azure Partner Center →",
          url: "https://partner.microsoft.com/",
        },
        checks: [
          "Does the person completing the OAuth consent step have Global Administrator access in both Azure AND Microsoft Partner Center?",
          "Is Partner Center enrollment complete: Commercial Marketplace, Microsoft AI Cloud Partner Program, Legal/Tax/Payout profiles?",
          "Do you have Suger organization admin access?",
        ],
        media: null,
      },
      {
        title: "Register the Azure Application in Azure Active Directory",
        body: "In the Azure Portal, navigate to <strong>Azure Active Directory → App registrations → New registration</strong>. Create a new app registration for the Suger integration (name it something like 'Suger Marketplace Integration'). Note the <strong>Application (client) ID</strong> and <strong>Directory (tenant) ID</strong> — you'll need both for Suger. The redirect URI is not required for this integration type.",
        link: {
          label: "Azure Portal — App registrations →",
          url: "https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",
        },
        checks: [
          "Did you note the Application (client) ID from the app registration?",
          "Did you note the Directory (tenant) ID?",
          "Is the app registration in the same Azure tenant as your Partner Center publisher account?",
        ],
        media: null,
      },
      {
        title: "Configure authentication credentials and tokens",
        body: "In your app registration, go to <strong>Certificates & secrets → New client secret</strong>. Create a client secret with an appropriate expiry (12–24 months recommended). Copy the secret value immediately — it is shown only once. Note the secret's expiry date so you can rotate it before it expires. The client secret, client ID, and tenant ID together form the credentials Suger needs.",
        checks: [
          "Did you copy the client secret value immediately after creation?",
          "Did you note the secret expiry date for future rotation?",
          "Is the secret stored securely — not in plain text or email?",
        ],
        media: null,
      },
      {
        title: "Grant API permissions to the Azure Application",
        body: "In your app registration, go to <strong>API permissions → Add a permission → APIs my organization uses</strong>. Search for and add <strong>Partner Center</strong>. Grant the required permissions for Marketplace operations. Click <strong>Grant admin consent</strong> for your tenant to activate the permissions.",
        checks: [
          "Are Partner Center API permissions added to the app registration?",
          "Did you click 'Grant admin consent' to activate the permissions?",
          "Does the permissions page show a green checkmark next to the granted permissions?",
        ],
        media: null,
      },
      {
        title: "Link to Partner Center and finalize in Suger Console",
        body: "In Microsoft Partner Center, link the app registration to your publisher account under <strong>Account settings → User management → Azure AD applications</strong>. Add the application and assign it the <strong>Manager</strong> role. Then, in Suger Console, go to <strong>Settings → Integrations → Azure Marketplace</strong> and enter your Tenant ID, Client ID, and Client Secret. Save to establish the connection. <strong>If you already have an existing Azure Marketplace product:</strong> verify that the product's Technical Configuration values match — Azure AD Tenant ID, Azure AD Application (Client) ID, Landing Page URL, and Connection Webhook must all align between Partner Center and Suger.",
        link: {
          label: "Open Suger Console → Settings → Integrations →",
          url: "https://console.suger.io",
        },
        checks: [
          "Is the app registration linked to your Partner Center publisher account with Manager role?",
          "Did you enter Tenant ID, Client ID, and Client Secret in Suger Console?",
          "Does the integration show 'Connected' (VERIFIED) in Suger?",
          "If you have an existing Azure Marketplace product: do these values match between Partner Center and Suger — Azure AD Tenant ID, Client ID, Landing Page URL, Connection Webhook?",
        ],
        media: null,
      },
      {
        title: "Manage critical lifecycle — rotate secrets before expiry",
        body: "Azure client secrets expire. Set a calendar reminder to rotate the secret before the expiry date you noted in Step 3. To rotate: create a new client secret in Azure, update it in Suger Console under Settings → Integrations → Azure Marketplace, then delete the old secret. Letting the secret expire breaks the integration and stops entitlement sync.",
        checks: [
          "Do you have a reminder set to rotate the client secret before it expires?",
          "Is the rotation procedure documented for your team?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "gcp-marketplace-setup",
    title: "Integrate GCP Marketplace with Suger",
    category: "integrations",
    description:
      "Connect your GCP Marketplace producer account to Suger using keyless Workload Identity Federation — a secure, credential-free authentication method.",
    estimated: "~45 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/1552184238",
    steps: [
      {
        title: "Confirm prerequisites and define environment variables",
        body: "GCP has more upfront prerequisites than AWS or Azure. Before starting, complete these steps in order: set up a GCP Organization, create a GCP project, register on Partner Hub, accept the Marketplace Vendor Agreement (MVA), pass the Solution Architecture Validation, and enable the Producer Portal. The Solution Architecture Review is unique to GCP and is the most common cause of delays — start preparing your architecture diagram early. All setup commands must be run in <strong>GCP Cloud Shell</strong>, step by step in order. Do not paste the entire script at once. Validate each step before proceeding to the next. Also confirm: billing enabled on the GCP project, and Suger organization admin access.",
        terms: [
          { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
          { name: "Service Account — GCP", slug: "service-account-—-gcp" },
        ],
        path: "gcp-marketplace-essentials",
        link: {
          label: "Open GCP Producer Portal →",
          url: "https://console.cloud.google.com/producer-portal",
        },
        checks: [
          "Is billing enabled on the GCP project you're connecting?",
          "Are you running all commands in GCP Cloud Shell (not your local terminal)?",
          "Are you running commands one step at a time in order — not pasting the entire script?",
          "Do you have Suger organization admin access?",
        ],
        media: null,
      },
      {
        title: "Enable required GCP APIs",
        body: "Enable the three required APIs in your GCP project via the GCP Console or <code>gcloud</code> CLI: (1) <strong>Cloud Commerce Partner Procurement API</strong>, (2) <strong>Service Control API</strong>, (3) <strong>Cloud Pub/Sub API</strong>. The Suger Console setup wizard provides the exact <code>gcloud services enable</code> commands. All three are required — missing any one will cause integration failures.",
        terms: [
          {
            name: "Service Control API — GCP",
            slug: "service-control-api-—-gcp",
          },
        ],
        link: {
          label: "GCP APIs & Services Console →",
          url: "https://console.cloud.google.com/apis/dashboard",
        },
        checks: [
          "Are all three APIs enabled: Cloud Commerce Partner Procurement, Service Control, AND Cloud Pub/Sub?",
          "Do all three show 'Enabled' status in GCP APIs & Services?",
        ],
        media: null,
      },
      {
        title: "Create the GCP service account",
        body: "Create a dedicated GCP service account that Suger will use for all Marketplace API calls. Use the <code>gcloud iam service-accounts create</code> command provided by the Suger setup wizard. This service account will be granted specific IAM roles in the next step — do not use an existing service account.",
        checks: [
          "Is the new service account created in the correct GCP project?",
          "Did you use the service account name provided by the Suger setup wizard?",
        ],
        media: null,
      },
      {
        title: "Assign IAM roles to the service account",
        body: "Grant the new service account the two required IAM roles using the commands provided by the Suger setup wizard: (1) <code>roles/cloudcommerceproducer.admin</code> — for Marketplace operations, (2) <code>roles/servicemanagement.serviceController</code> — for usage reporting via Service Control API. Both roles are required.",
        link: {
          label: "GCP IAM Console →",
          url: "https://console.cloud.google.com/iam-admin/iam",
        },
        checks: [
          "Does the service account have BOTH IAM roles assigned?",
          "Did you verify the role assignments are saved in GCP IAM (not just in the terminal)?",
        ],
        media: null,
      },
      {
        title: "Set up Workload Identity Federation",
        body: "Suger uses <strong>Workload Identity Federation</strong> to authenticate from its AWS infrastructure to your GCP project without service account keys. Follow the Suger setup wizard to: (1) create a Workload Identity Pool in your GCP project, (2) add an AWS provider to the pool using Suger's AWS Account ID, and (3) bind the Workload Identity Pool principal to the service account you created. The wizard provides the exact <code>gcloud</code> commands.",
        checks: [
          "Is the Workload Identity Pool created in your GCP project?",
          "Is the AWS provider configured in the pool with Suger's AWS Account ID?",
          "Is the Workload Identity principal bound to the Suger service account?",
        ],
        media: null,
      },
      {
        title: "Grant access to Suger support and system accounts",
        body: "Grant specific Suger support and system accounts access to your GCP project as specified in the setup wizard. There are two categories: (1) <strong>Suger Support Access</strong> — allows Suger's support engineers to assist with issues, and (2) <strong>GCP System Account Permissions</strong> — required for Pub/Sub and Commerce API operations. The wizard provides the exact principal email addresses.",
        checks: [
          "Have all Suger support and system account principals been granted the specified roles?",
          "Did you follow the exact principal email addresses and role assignments from the wizard?",
        ],
        media: null,
      },
      {
        title: "Validate and connect in the Suger Console",
        body: "Before connecting, run the final output commands in GCP Cloud Shell to print your key identifiers. <strong>Save these values</strong> — you will need them when connecting in Suger Console: <strong>PROJECT_ID</strong>, <strong>PROJECT_NUMBER</strong>, <strong>Workload Identity Pool ID</strong> (<code>suger-wip</code>), and <strong>Service Account Email</strong>. Then in Suger Console, go to <strong>Settings → Integrations → GCP Marketplace</strong>, click <strong>Connect Now</strong>, enter the values from the final output, and run the validation. Once connected, submit a support ticket in Suger Console requesting integration whitelisting and final validation.",
        terms: [
          { name: "Entitlement", slug: "entitlement" },
          { name: "Producer Portal — GCP", slug: "producer-portal-—-gcp" },
        ],
        link: {
          label: "Open Suger Console →",
          url: "https://console.suger.io",
        },
        checks: [
          "Did you save the final output values: PROJECT_ID, PROJECT_NUMBER, Workload Identity Pool ID (suger-wip), and Service Account Email?",
          "Does the GCP Marketplace integration show 'Connected' in Suger?",
          "Have you submitted a support ticket in Suger Console requesting integration whitelisting and final validation?",
          "If validation failed, did you re-check all IAM role assignments and API enablements?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "gcp-partner-advantage-setup",
    title: "Integrate GCP Partner Network Hub with Suger",
    category: "integrations",
    description:
      "Connect Suger to Google Cloud Partner Network to enable automated GCP co-sell workflows and opportunity management.",
    estimated: "~15 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/2287045699",
    steps: [
      {
        title: "Confirm prerequisites",
        body: "Only complete this phase if your Suger subscription includes GCP co-sell capabilities. Before starting, confirm: (1) your organization is enrolled in <strong>Google Cloud Partner Advantage</strong>, (2) Partner Hub is configured correctly at <a href='https://partners.cloud.google.com' target='_blank' rel='noopener'>partners.cloud.google.com</a>, and (3) your GCP Marketplace integration in Suger is already connected (required before enabling co-sell). After this integration is complete, your Suger contact will help configure field mapping so opportunities sync correctly between your CRM and Google Cloud.",
        checks: [
          "Is your organization enrolled in Google Cloud Partner Advantage?",
          "Is Partner Hub configured correctly?",
          "Is your GCP Marketplace integration already connected in Suger?",
        ],
        media: null,
      },
      {
        title: "Add Suger as an integrator in the Partner Network Hub",
        body: "In the Partner Network Hub at <a href='https://partners.cloud.google.com' target='_blank' rel='noopener'>partners.cloud.google.com</a>, navigate to <strong>Integrations</strong> or <strong>Settings → Integrators</strong>. Add Suger as an authorized integrator. This grants Suger access to read and write co-sell opportunities on your behalf. The Suger setup wizard provides the exact steps.",
        link: {
          label: "GCP Partners →",
          url: "https://partners.cloud.google.com",
        },
        checks: [
          "Is Suger listed as an authorized integrator in your Partner Network Hub?",
          "Does Suger have the required permissions for co-sell opportunity management?",
        ],
        media: null,
      },
      {
        title: "Retrieve your Partner ID",
        body: "In the Partner Network Hub, locate your <strong>Partner ID</strong> from your account settings or profile page. This ID is required for Suger to associate co-sell opportunities with your organization in Google's systems.",
        checks: ["Have you located and noted your GCP Partner ID?"],
        media: null,
      },
      {
        title: "Connect via the Suger Console",
        body: "In Suger Console, navigate to <strong>Settings → Integrations → GCP Partner Network Hub</strong>. Enter your Partner ID and click <strong>Connect</strong>. After connection, verify the integration status shows <strong>Connected</strong>. Then test your co-sell configuration: open a GCP opportunity, click <strong>Share</strong>, and confirm all required fields populate without validation errors. Proceed to the Co-Sell Field Mapping walkthrough to configure automated referral sharing.",
        link: {
          label: "Open Suger Console →",
          url: "https://console.suger.io",
        },
        checks: [
          "Does the GCP Partner Network Hub integration show 'Connected' in Suger?",
          "In a Share modal test with a GCP opportunity: do required fields populate without errors?",
          "Is Auto-Enrich turned ON?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "snowflake-marketplace-setup",
    title: "Integrate Snowflake Marketplace with Suger",
    category: "integrations",
    description:
      "Connect your Snowflake Marketplace provider account to Suger using key-pair authentication to manage listings, entitlements, and revenue.",
    estimated: "~20 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/5917749327",
    steps: [
      {
        title: "Confirm prerequisites",
        body: "Before starting, confirm: (1) an active Snowflake Marketplace provider account with at least one published or in-progress listing, (2) Snowflake account admin access to generate RSA key pairs, and (3) Suger organization admin access.",
        checks: [
          "Is your Snowflake Marketplace provider account active?",
          "Do you have Snowflake account admin access for key-pair setup?",
          "Do you have Suger organization admin access?",
        ],
        media: null,
      },
      {
        title: "Configure key-pair authentication in Snowflake",
        body: "Snowflake uses RSA key-pair authentication for programmatic access. Generate a 2048-bit RSA key pair: use OpenSSL or the Suger setup wizard's instructions to generate a private key and public key. In Snowflake, assign the public key to the user that Suger will authenticate as. Keep the private key secure — it is the credential Suger uses.",
        link: {
          label: "Snowflake Marketplace Listings →",
          url: "https://docs.snowflake.com/en/collaboration/collaboration-listings-about",
        },
        checks: [
          "Is the RSA public key assigned to the correct Snowflake user?",
          "Is the private key stored securely?",
          "Is the Snowflake user assigned the required roles for Marketplace operations?",
        ],
        media: null,
      },
      {
        title: "Connect to the Suger Console",
        body: "In Suger Console, navigate to <strong>Settings → Integrations → Snowflake Marketplace</strong>. Enter your Snowflake account identifier, the username, and the private key (PEM format). Click <strong>Connect</strong>. The status should show <strong>Connected</strong>. Test by verifying that existing Snowflake listings appear in Suger under <strong>Products</strong>.",
        link: {
          label: "Open Suger Console →",
          url: "https://console.suger.io",
        },
        checks: [
          "Does the integration show 'Connected' status in Suger?",
          "Do existing Snowflake Marketplace listings appear in Suger → Products?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "salesforce-crm-setup",
    title: "Integrate Salesforce with Suger",
    category: "integrations",
    description:
      "Connect Salesforce to Suger: install the Suger app, configure two-way sync, set up the integration user, enable the Suger widget, and configure co-sell field mapping.",
    estimated: "~30 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/9560640419",
    steps: [
      {
        title: "Confirm prerequisites",
        body: "Before starting, confirm: (1) Salesforce admin access to install AppExchange apps and modify permission sets, (2) Suger organization admin access, and (3) the <strong>Suger for Salesforce</strong> app is available for installation from AppExchange (your Salesforce edition must support AppExchange).",
        terms: [
          { name: "Salesforce Integration", slug: "salesforce-integration" },
        ],
        path: "suger-platform-quickstart",
        checks: [
          "Do you have Salesforce admin access for app installation and permission management?",
          "Is your Salesforce edition compatible with AppExchange installations?",
          "Do you have Suger organization admin access?",
        ],
        media: null,
      },
      {
        title: "Install the Suger Salesforce App",
        body: "Go to the Salesforce AppExchange and search for <strong>Suger for Salesforce</strong>. Install the app for all users or specific profiles as appropriate. After installation, the Suger components (Quick Panel widget, permission sets) are available in your Salesforce org.",
        link: {
          label: "Salesforce AppExchange →",
          url: "https://appexchange.salesforce.com/",
        },
        checks: [
          "Is the Suger for Salesforce app installed in your Salesforce org?",
          "Did the installation complete without errors?",
        ],
        media: null,
      },
      {
        title: "Configure the API connection (two-way sync)",
        body: "Set up the bidirectional connection between Salesforce and Suger. In <strong>Salesforce</strong>: create a Connected App or use the OAuth flow provided by the Suger Console wizard. In <strong>Suger Console</strong>: go to Settings → Integrations → Salesforce and complete the OAuth authorization. After connection, Suger creates a dedicated Integration User in Salesforce — do not delete or modify this user.",
        link: {
          label: "Open Suger Console → Settings → Integrations →",
          url: "https://console.suger.io",
        },
        checks: [
          "Does Salesforce show as 'Connected' in Suger Settings → Integrations?",
          "Is the Suger Integration User visible in Salesforce → Setup → Users?",
        ],
        media: null,
      },
      {
        title: "Set up the Integration User and permissions",
        body: "In Salesforce, assign the <strong>'Suger Integrator' permission set</strong> to the Suger Integration User. This permission set grants the minimum required Read/Edit access for all Opportunity fields that will be mapped for co-sell and private offer workflows. Without this permission set, syncs fail silently.",
        checks: [
          "Is the 'Suger Integrator' permission set assigned to the Suger Integration User?",
          "Does the Integration User have Read/Edit access on all Opportunity fields you plan to map?",
        ],
        media: null,
      },
      {
        title: "Enable the Suger widget on Opportunity pages",
        body: "In Salesforce, go to <strong>Setup → Object Manager → Opportunity → Lightning Record Pages</strong>. Add the <strong>Suger Quick Panel</strong> component to the Opportunity page layout. This widget is how your sales team will share opportunities to cloud partners and create private offers directly from Salesforce. Save and activate the page layout update.",
        checks: [
          "Is the Suger Quick Panel widget visible on the Salesforce Opportunity page layout?",
          "Can your sales team see the widget when they open an Opportunity record?",
        ],
        media: null,
      },
      {
        title: "Configure Co-Sell field mapping",
        body: "With Salesforce connected, proceed to configure the co-sell field mapping — how Salesforce Opportunity fields map to cloud partner required fields. Follow the <strong>Co-Sell Field Mapping</strong> walkthrough for the full configuration, or navigate to <strong>Co-Sell → Settings → + New Config</strong> in Suger Console to start. After mapping, run a test via <strong>Settings → Co-Sell Configuration → Test</strong> and inspect each row. Then validate end-to-end: open an opportunity, click <strong>Share</strong>, and confirm all required fields populate in the Share modal without errors. Enable <strong>Auto-Enrich</strong> to automatically fill in missing company and contact data before submission.",
        terms: [
          {
            name: "APN Customer Engagements (ACE) — AWS",
            slug: "apn-customer-engagements-ace-—-aws",
          },
        ],
        link: {
          label: "Configure Co-Sell Settings for Salesforce (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/1414396545",
        },
        checks: [
          "Is the Salesforce integration showing VERIFIED in Suger Console → Settings → Integrations → Salesforce?",
          "Have you run Settings → Co-Sell Configuration → Test and reviewed field mapping results?",
          "In the Share modal test: do all required fields populate with no validation errors?",
          "Is Auto-Enrich turned ON to automatically fill missing company/contact data?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "hubspot-crm-setup",
    title: "Integrate HubSpot with Suger",
    category: "integrations",
    description:
      "Connect HubSpot to Suger: establish the OAuth connection, enable the Suger widget on Deal pages, and configure co-sell field mapping.",
    estimated: "~20 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/7681492250",
    steps: [
      {
        title: "Confirm prerequisites",
        body: "Before starting, confirm: (1) HubSpot admin access to authorize OAuth integrations, (2) HubSpot CRM with Deal objects in use (Contacts and Companies are also required for full co-sell sync), and (3) Suger organization admin access.",
        terms: [{ name: "CRM Enrichment", slug: "crm-enrichment" }],
        path: "suger-platform-quickstart",
        checks: [
          "Do you have HubSpot admin access?",
          "Are Deal records associated with Company and Contact records in HubSpot?",
          "Do you have Suger organization admin access?",
        ],
        media: null,
      },
      {
        title: "Establish the connection",
        body: "In Suger Console, navigate to <strong>Settings → Integrations → HubSpot</strong>. Click <strong>Connect</strong> and complete the HubSpot OAuth authorization. Select the correct HubSpot account and grant all requested permissions. After authorization, HubSpot should show as <strong>Connected</strong> in Suger.",
        link: {
          label: "Open Suger Console → Settings → Integrations →",
          url: "https://console.suger.io",
        },
        checks: [
          "Does HubSpot show as 'Connected' in Suger Settings → Integrations?",
          "Did you select the correct HubSpot account during authorization?",
        ],
        media: null,
      },
      {
        title: "Enable the Suger widget in HubSpot",
        body: "In HubSpot, navigate to the Deal Default View settings. Add the <strong>Suger App</strong> to the Deal right sidebar so your sales team can access Suger functionality directly from Deal records. The Suger widget shows co-sell opportunity status, intelligence signals, and allows deal sharing to cloud partners without leaving HubSpot.",
        checks: [
          "Is the Suger App visible in the HubSpot Deal Default View right sidebar?",
          "Can your sales team see the Suger widget when they open a Deal record?",
        ],
        media: null,
      },
      {
        title: "Configure Co-Sell field mapping",
        body: "With HubSpot connected, configure how HubSpot Deal properties map to cloud partner required fields. Start by creating a custom <strong>Referral State</strong> property on the HubSpot Deal object (see Help Center article for the exact setup), then follow the <strong>Co-Sell Field Mapping</strong> walkthrough or navigate to <strong>Co-Sell → Settings → + New Config</strong> in Suger Console. After mapping, validate end-to-end: open a deal, click <strong>Share</strong>, and confirm all required fields populate in the Share modal without errors. Enable <strong>Auto-Enrich</strong> to automatically fill in missing company and contact data.",
        terms: [{ name: "Outbound Referral", slug: "outbound-referral" }],
        link: {
          label: "Configure Co-Sell Settings for HubSpot (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/2668559601",
        },
        checks: [
          "Is the HubSpot integration showing VERIFIED (not just CREATED) in Suger Console? Note: it shows CREATED immediately, then updates to VERIFIED after Suger reads your deals.",
          "Have you created the custom Referral State property on the HubSpot Deal object?",
          "In the Share modal test: do all required fields populate with no validation errors?",
          "Is Auto-Enrich turned ON?",
        ],
        media: null,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LISTINGS
  // ─────────────────────────────────────────────────────────

  {
    slug: "aws-listing-submission",
    title: "Create & Publish an AWS Marketplace Listing",
    category: "listings",
    description:
      "Create, configure, test, and publish an AWS Marketplace product listing through Suger — from product draft through AWS review and go-live.",
    estimated: "~30 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/3227053177",
    steps: [
      {
        title: "Understand products vs. listings and confirm prerequisites",
        body: "This listing is what customers will see when they discover your product on AWS Marketplace. In Suger, a <strong>Product</strong> is your software offering; a <strong>Listing</strong> is its marketplace-specific representation. One product can have multiple listings (AWS, Azure, GCP). Before creating an AWS listing confirm: (1) your AWS Marketplace integration is connected in Suger, (2) you have a SaaS or Professional Services product to list, (3) your fulfillment URL (SaaS landing page) is live and publicly accessible — AWS checks it, and (4) you have product assets: description, logo (PNG), categories, pricing model, support email and support URL.",
        terms: [
          { name: "Listing", slug: "listing" },
          { name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" },
        ],
        path: "aws-marketplace-essentials",
        checks: [
          "Is your AWS Marketplace integration connected and VERIFIED in Suger (Settings → Integrations)?",
          "Is your fulfillment URL live and accessible at a public URL?",
          "Do you have a product logo ready (PNG format)?",
          "Do you have a support email and support URL — AWS requires both for listing review?",
        ],
        media: null,
      },
      {
        title: "Start a new product draft in Suger",
        body: "In Suger Console, navigate to <strong>Product → New Product</strong>. Select <strong>AWS</strong> as the cloud provider. Choose your product type: <strong>SaaS</strong> (most common) or <strong>Professional Services</strong>. Give the product a draft name — this is internal only at this stage. Save the draft to proceed to the detail fields.",
        link: {
          label: "Open Suger Console → Product →",
          url: "https://console.suger.io",
        },
        checks: [
          "Is AWS selected as the cloud provider?",
          "Is the product type (SaaS or Professional Services) correct?",
          "Is the draft saved and accessible in the Products list?",
        ],
        media: null,
      },
      {
        title: "Complete Basic Information",
        body: "Fill in all required Basic Information fields: <strong>Product Name</strong> (public-facing, shown in AWS Marketplace search), <strong>Short Description</strong> (up to 1,000 characters, shown in search results), <strong>Long Description</strong> (detailed product overview), <strong>Logo</strong> (PNG, 120×80px minimum), <strong>Support Contact</strong> email, <strong>Categories</strong> (up to 3), and <strong>Keywords</strong>. The Company Name must match your AWS Public Profile. Review product descriptions carefully before submitting: AWS rejects listings with <strong>competitive claims</strong> (naming competitors), <strong>hyperbolic language</strong> (best, industry-leading, revolutionary), <strong>unverifiable statistics</strong> (performance or cost claims that can't be substantiated), or <strong>missing dependency disclosures</strong> (if your product requires another product to function). Use neutral, factual language.",
        checks: [
          "Does the Company Name match your AWS Public Profile?",
          "Is the product name clear and unique in AWS Marketplace?",
          "Do product descriptions avoid: named competitor comparisons, terms like 'best'/'industry-leading', unverifiable performance claims, undisclosed product dependencies?",
          "Is the logo PNG at the correct dimensions?",
        ],
        media: null,
      },
      {
        title: "Complete Pricing Information",
        body: "Define your pricing model. Common AWS SaaS options: <strong>SaaS Subscription</strong> (monthly/annual flat fee), <strong>SaaS Contract</strong> (upfront contract with optional usage), <strong>Usage-Based</strong> (pay-per-use metered dimensions). For usage-based pricing, define each dimension: unit name (e.g., 'API calls'), unit description, and price per unit. <strong>Set every pricing dimension to $0.01 before testing</strong> — this is required for test purchases. Replace with your production pricing only when you're ready to publish. <strong>Pricing cannot be changed after a listing is public</strong> — verify thoroughly before going live.",
        checks: [
          "Is every pricing dimension currently set to $0.01? (Replace with production pricing only when ready to publish.)",
          "Is the pricing model correct for your sales motion?",
          "For usage-based: are all dimension names, units, and prices finalized?",
          "Have you confirmed production pricing with your deal desk before going live?",
        ],
        media: null,
      },
      {
        title: "Save, Preview, and Create",
        body: "Before submitting, confirm your <strong>Fulfillment URL</strong> is entered in <strong>both</strong> the AWS Marketplace Management Portal and in the product in Suger Console — it must be in both places. Click <strong>Save and Preview</strong> to see how your listing will appear in AWS Marketplace. Review the buyer-facing view carefully. Once satisfied, click <strong>Create</strong> to submit the listing to AWS for review. AWS Marketplace review typically takes 3–5 business days for initial listings. You'll receive email notification when approved or if changes are required. If you have an active deal waiting on your listing, let your Suger contact know — listings can be expedited.",
        checks: [
          "Is the Fulfillment URL entered in BOTH the AWS Marketplace Management Portal AND in the product in Suger Console?",
          "Did you preview the listing and confirm all fields look correct?",
          "Is the listing submitted to AWS for review?",
          "Have you noted the expected review timeline? (If you have a deal waiting, ask Suger about expediting.)",
        ],
        media: null,
      },
      {
        title: "Test and publish your AWS listing",
        body: "Once AWS approves the listing, it enters <strong>Limited</strong> status — visible only to you. Create a test subscription using a test buyer AWS account and verify: (1) the fulfillment URL redirects correctly post-subscribe, (2) the SaaS registration page works, (3) the entitlement syncs to Suger. After successful testing, change listing visibility to <strong>Public</strong> in Suger Console to go live.",
        link: {
          label: "Create and publish an AWS listing (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/3227053177",
        },
        checks: [
          "Did the test subscription fulfillment URL redirect work correctly?",
          "Did the test entitlement appear in Suger → Entitlements?",
          "Is the listing visibility changed to Public?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "azure-listing-submission",
    title: "Create & Publish an Azure Marketplace Listing",
    category: "listings",
    description:
      "Create and publish a transactable SaaS offer on Azure Marketplace through Suger and Microsoft Partner Center.",
    estimated: "~45 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/4753926390",
    steps: [
      {
        title: "Confirm prerequisites",
        body: "Before creating an Azure listing confirm: (1) your Azure Marketplace integration is connected in Suger, (2) your organization is enrolled as a publisher in Microsoft Partner Center, (3) you have a fulfillment URL ready (the SaaS landing page that handles Azure post-purchase redirects), and (4) you have product assets: description, logos (216×216px and 1280×720px), categories, pricing plans.",
        terms: [
          {
            name: "Microsoft Marketplace — Azure",
            slug: "microsoft-marketplace-—-azure",
          },
          { name: "Partner Center — Azure", slug: "partner-center-—-azure" },
          {
            name: "SaaS Fulfillment API — Azure",
            slug: "saas-fulfillment-api-—-azure",
          },
        ],
        path: "azure-marketplace-essentials",
        checks: [
          "Is your Azure Marketplace integration connected in Suger?",
          "Is your organization enrolled as a publisher in Microsoft Partner Center?",
          "Is your SaaS fulfillment URL live and implements the Azure SaaS Fulfillment API?",
        ],
        media: null,
      },
      {
        title: "Start a new product draft in Suger",
        body: "In Suger Console, navigate to <strong>Product → New Product</strong>. Select <strong>Azure</strong> as the cloud provider and <strong>SaaS</strong> as the product type. Enter a draft product name and save. Suger uses AI-assisted templates to pre-fill content — use the generated content as a starting point and review and refine everything before submitting. Suger will create the listing structure; fill in the details across Basic Information and Pricing sections.",
        link: {
          label: "Open Suger Console → Product →",
          url: "https://console.suger.io",
        },
        checks: [
          "Is Azure selected as the cloud provider?",
          "Is the product draft saved in Suger?",
          "Have you reviewed all AI-generated content and updated any placeholder or generic text?",
        ],
        media: null,
      },
      {
        title: "Complete Basic Information",
        body: "Fill in: <strong>Offer Name</strong> (public-facing), <strong>Offer ID</strong> (URL-safe, permanent — cannot be changed after publishing), <strong>Short Description</strong>, <strong>Long Description</strong> (supports Markdown), <strong>Logos</strong> (216×216px required; 1280×720px recommended for featured placement), <strong>Categories</strong>, <strong>Industries</strong>, <strong>Support Contact</strong>, and <strong>Privacy Policy URL</strong>. The Offer ID is set once — choose carefully.",
        checks: [
          "Is the Offer ID URL-safe and confirmed — it cannot be changed after publishing?",
          "Are both required logo sizes uploaded (216×216 and 1280×720)?",
          "Is the Privacy Policy URL live and accessible?",
        ],
        media: null,
      },
      {
        title: "Add Pricing Information (Plans)",
        body: "Azure SaaS offers use <strong>Plans</strong> (pricing tiers). Create at least one plan: set the <strong>Plan ID</strong>, <strong>Plan Name</strong>, pricing model (<strong>Flat Rate</strong> monthly/annual, <strong>Per User</strong>, or <strong>Metered</strong>), and prices per market. <strong>All plans must use the same pricing model</strong> — you cannot mix Flat Rate and Per User plans in one offer. Each plan must have at least one billing term configured. For metered billing, define dimension IDs and per-unit prices here. If using Flat Rate, add a generic $0.01 usage dimension before publishing — this is recommended for testing. Azure requires at least one plan before you can publish.",
        checks: [
          "Is at least one Plan created with a valid Plan ID?",
          "Did you select the correct pricing model — Flat Rate or Per User? Note: all plans in this offer must use the same model.",
          "Does each plan have at least one billing term configured?",
          "If using Flat Rate, have you added a $0.01 usage dimension before publishing?",
          "For metered plans: are all dimension IDs and prices defined?",
        ],
        media: null,
      },
      {
        title: "Complete Technical Setup in Microsoft Partner Center",
        body: "After saving in Suger, you need to complete the technical configuration in <strong>Microsoft Partner Center</strong>: (1) set the <strong>Landing Page URL</strong> (your fulfillment URL), (2) set the <strong>Connection Webhook URL</strong> (Suger provides this — available in Settings → Integrations → Azure), (3) configure the Azure Active Directory Tenant ID and Application ID for your integration. Save and validate in Partner Center.",
        link: {
          label: "Microsoft Partner Center →",
          url: "https://partner.microsoft.com/",
        },
        checks: [
          "Is the Landing Page URL (your fulfillment URL) set in Partner Center?",
          "Is the Connection Webhook URL (from Suger) set in Partner Center?",
          "Are the Azure AD Tenant ID and Application ID correctly entered?",
        ],
        media: null,
      },
      {
        title: "Publish, review, and go live",
        body: "Before submitting for review, do a final content check: no placeholder or AI-generated text left in descriptions, all required logos and screenshots uploaded, no broken or missing URLs (Privacy Policy, documentation, support). In Microsoft Partner Center, click <strong>Review and Publish</strong>. Microsoft reviews the offer — typically 1–3 business days. If you have an active deal waiting, let your Suger contact know — listings can be expedited. Once approved, the offer enters <strong>Publisher Preview</strong>: only you can see it. Test a purchase using a test account. After confirming everything works, click <strong>Go Live</strong> in Partner Center to make it publicly available. Finalize in Suger by verifying the listing status updates to Published.",
        link: {
          label: "Create and publish an Azure listing (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/4753926390",
        },
        checks: [
          "Does the listing have no placeholder or AI-generated text that wasn't updated?",
          "Are all required assets present: logos (216×216 and 1280×720), screenshots, Privacy Policy URL, support URL?",
          "Did the Publisher Preview subscription work end-to-end?",
          "Have you clicked 'Go Live' in Partner Center?",
          "Is the listing status updated to Published in Suger?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "gcp-listing-submission",
    title: "Create & Publish a GCP Marketplace Listing",
    category: "listings",
    description:
      "Create and publish a product listing on Google Cloud Marketplace through Suger and the GCP Producer Portal — from draft through approval phases and billing tests.",
    estimated: "~45 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/7061509678",
    steps: [
      {
        title: "Understand Product vs. Listing and confirm prerequisites",
        body: "GCP Marketplace uses a two-stage process: Suger creates the product draft, then GCP's Producer Portal completes the technical integration. Confirm before starting: (1) your GCP Marketplace integration is connected in Suger (including IAM roles and Workload Identity), (2) your fulfillment URL implements the GCP procurement API flow, (3) you have product assets ready: description, logo (PNG 200×200px), pricing model, and support contact.",
        terms: [
          { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
          { name: "Producer Portal — GCP", slug: "producer-portal-—-gcp" },
        ],
        path: "gcp-marketplace-essentials",
        checks: [
          "Is your GCP Marketplace integration connected in Suger (including Workload Identity)?",
          "Does your fulfillment URL implement the GCP procurement API?",
          "Is a 200×200px PNG logo ready?",
        ],
        media: null,
      },
      {
        title: "Create a product draft in Suger",
        body: "In Suger Console, navigate to <strong>Product → New Product</strong>. Select <strong>GCP</strong> as the cloud provider. Enter a product name and save the draft. Suger creates the initial structure and syncs it to the GCP Producer Portal. You'll complete the product details in the next step.",
        link: {
          label: "Open Suger Console → Product →",
          url: "https://console.suger.io",
        },
        checks: [
          "Is GCP selected as the cloud provider in Suger?",
          "Is the product draft created and visible in both Suger and the GCP Producer Portal?",
        ],
        media: null,
      },
      {
        title: "Fill in core product details",
        body: "In Suger Console, complete the product fields: <strong>Product Name</strong>, <strong>Tagline</strong> (short description shown in search), <strong>Description</strong>, <strong>Logo</strong> (200×200px PNG), <strong>Categories</strong>, <strong>Support URL</strong>, and <strong>Pricing</strong>. For GCP SaaS, pricing uses <strong>Usage Plans</strong> with metered dimensions or subscription tiers. Save in Suger — changes sync to the GCP Producer Portal.",
        checks: [
          "Are all required fields completed?",
          "Is the logo 200×200px PNG?",
          "Is pricing configured with the correct model (subscription or metered)?",
        ],
        media: null,
      },
      {
        title: "Complete the GCP approval phases",
        body: "GCP has a two-phase technical approval process in the <strong>GCP Producer Portal</strong>: (1) <strong>Define product information</strong> — complete all marketplace listing fields, set your fulfillment URL, configure your service account. (2) <strong>Complete technical integration</strong> — GCP validates your backend's integration with the Commerce API and Pub/Sub. Both phases require GCP review. Suger's implementation team can assist with the technical integration requirements.",
        link: {
          label: "GCP Producer Portal →",
          url: "https://console.cloud.google.com/producer-portal",
        },
        checks: [
          "Is Phase 1 (product information) complete and submitted in GCP Producer Portal?",
          "Is Phase 2 (technical integration) validated by GCP?",
        ],
        media: null,
      },
      {
        title: "Conduct billing tests and publish",
        body: "After GCP approves both phases, conduct billing tests: create a test private offer to a GCP test account and verify the subscription flow. Confirm: (1) the fulfillment URL redirect works post-purchase, (2) the entitlement syncs to Suger → Entitlements, (3) usage reporting works if applicable. Once billing tests pass, submit for final GCP review to make the listing publicly available.",
        link: {
          label: "Create and publish a GCP listing (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/7061509678",
        },
        checks: [
          "Did the test subscription flow work end-to-end?",
          "Did the test entitlement sync to Suger?",
          "Is the listing submitted for final GCP review?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "listing-migration",
    title: "Migrate Existing Listings to Suger",
    category: "listings",
    description:
      "Migrate your existing AWS, Azure, GCP, or Snowflake marketplace listings into Suger so entitlements, billing, and co-sell data flow through the platform.",
    estimated: "~20 min",
    status: "not-started",
    steps: [
      {
        title: "Content coming soon",
        body: "This walkthrough is being prepared. Contact your Suger implementation team for guidance on migrating existing listings.",
        terms: [
          { name: "Listing", slug: "listing" },
          { name: "Entitlement", slug: "entitlement" },
        ],
        media: null,
      },
    ],
  },

  {
    slug: "buyer-experience-video",
    title: "Create a Buyer Experience Video for AWS",
    category: "listings",
    description:
      "Record and submit an optional product demo video for your AWS Marketplace listing.",
    estimated: "~10 min",
    status: "not-started",
    steps: [
      {
        title: "Content coming soon",
        body: "This walkthrough is being prepared. Refer to the <a href='../learning-paths/path.html?p=aws-marketplace-essentials'>AWS Marketplace Essentials</a> learning path for context.",
        terms: [{ name: "Listing", slug: "listing" }],
        path: "aws-marketplace-essentials",
        media: null,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // CO-SELL
  // ─────────────────────────────────────────────────────────

  {
    slug: "cosell-field-mapping",
    title: "Create & Test Co-Sell Field Mapping",
    category: "cosell",
    description:
      "Configure CRM-to-cloud-partner field mappings, enable automation, and validate with a test referral for AWS, Azure, and GCP co-sell.",
    estimated: "~45 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/4221427647",
    steps: [
      {
        title: "Confirm cloud partner connections are active",
        body: "Before mapping fields, verify the relevant cloud partner integrations are connected in Suger. For AWS: Settings → Integrations → AWS ACE. For Azure: Settings → Integrations → Azure Marketplace. For GCP: Settings → Integrations → GCP Partner Network Hub. All relevant connections must show <strong>Connected</strong> before proceeding.",
        checks: [
          "Are the cloud partner integrations you're mapping (AWS/Azure/GCP) showing as 'Connected'?",
          "Is your CRM (Salesforce or HubSpot) also showing as 'Connected'?",
        ],
        media: null,
      },
      {
        title: "Activate Co-Sell Intelligence",
        body: "In Suger Console, navigate to <strong>Settings → Co-sell</strong>. In the Co-sell Intelligence section, click <strong>Edit</strong>. Toggle <strong>Enable Co-sell Intelligence Signals</strong> ON and select the cloud partners you're enabling (AWS, Azure, GCP). Co-Sell Intelligence surfaces engagement scores (Low/Medium/High) in your CRM's Suger Quick Panel, helping prioritize high-propensity accounts.",
        link: {
          label: "Set up Co-Sell in Settings (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/6364417812",
        },
        checks: [
          "Is Co-sell Intelligence toggled ON?",
          "Are all relevant cloud partners selected for intelligence signals?",
        ],
        media: null,
      },
      {
        title: "Establish co-sell configurations",
        body: "Click <strong>+ New Config</strong> to create a co-sell configuration. Select the Cloud Partner and your CRM Partner. Only one active config per hyperscaler is allowed — check for duplicates before creating. Create a separate config for each cloud partner you're enabling (AWS, Azure, GCP each require their own config).",
        checks: [
          "Is there no existing active configuration for this hyperscaler?",
          "Did you create a separate config for each cloud partner?",
        ],
        media: null,
      },
      {
        title: "Configure field mapping (CRM → partner)",
        body: "Map CRM fields to cloud partner required fields. See the Help Center article for complete field lists per platform. Key required fields for all platforms: <strong>Customer Website</strong> (Auto-Enrich lookup key), <strong>Owner Email</strong>, <strong>Geography</strong> (ISO 2-letter code — use Picklist Mapping to transform 'United States' → 'US'), <strong>Close Date</strong> (no past dates), <strong>Customer Problem</strong>. Use <strong>Expression Mode (Go Templates)</strong> for fields needing transformation.",
        link: {
          label: "Understand Fields & Mapping (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/5260356493",
        },
        checks: [
          "Does geography output ISO 2-letter codes — not full country names?",
          "Is the Customer Website field mapped (required for Auto-Enrich)?",
          "Are all required fields mapped for each cloud partner?",
        ],
        media: null,
      },
      {
        title: "Configure automation settings",
        body: "Under <strong>Automation</strong>, enable: (1) <strong>Auto-Enrich — ON</strong>: fills missing partner fields using customer website as lookup key; (2) <strong>Auto-Share</strong>: set deal stage trigger (SOQL predicate for Salesforce, ILS Segment ID for HubSpot) for automatic referral submission; (3) <strong>Field Syncing — ON</strong>: hourly updates push CRM edits to the partner portal. Test with the Share Modal preview before activating Auto-Share.",
        checks: [
          "Is Auto-Enrich ON for each cloud partner config?",
          "Have you defined and verified the Auto-Share trigger condition?",
          "Did you use the Share Modal to preview a referral before enabling Auto-Share?",
        ],
        media: null,
      },
      {
        title: "Share opportunities with cloud partners (test)",
        body: "Test the field mapping: find a non-production CRM opportunity, open the Suger Quick Panel widget on the record, click <strong>Share to Partner</strong>. Review the Share Modal — all required fields should be pre-populated without validation errors. Submit the test referral and verify it appears in the cloud partner portal within 5 minutes.",
        terms: [{ name: "Outbound Referral", slug: "outbound-referral" }],
        checks: [
          "Did the Share Modal populate without validation errors?",
          "Did the test referral appear in the cloud partner portal within 5 minutes?",
        ],
        media: null,
      },
      {
        title: "Manage inbound referrals and track co-sell insights",
        body: "Configure inbound settings to map cloud partner fields to your CRM objects when referrals come in from partners. Enable Auto-Accept if appropriate. After go-live, monitor co-sell performance in Suger under <strong>Co-Sell → Insights</strong> for referral acceptance rates, pipeline attribution, and partner engagement trends.",
        terms: [{ name: "Inbound Referral", slug: "inbound-referral" }],
        link: {
          label: "Manage Co-Sell Opportunities (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/4221427647",
        },
        checks: [
          "Is your inbound referral mapping configured for CRM objects?",
          "Have you confirmed your Auto-Accept policy with your sales team?",
        ],
        media: null,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // CPQ
  // ─────────────────────────────────────────────────────────

  {
    slug: "cpq-private-offer-mapping",
    title: "Configure CPQ & Private Offer Field Mapping",
    category: "cpq",
    description:
      "Map CRM fields to cloud marketplace private offer requirements for AWS, Azure, GCP, and Snowflake — and test the configuration before going live.",
    estimated: "~45 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/2043902306",
    steps: [
      {
        title: "Access private offer mapping settings",
        body: "In Suger Console, navigate to <strong>Settings → Private Offer</strong>. This page lists all CPQ configurations by cloud partner. Click <strong>+ New Config</strong> to begin. You'll need a separate configuration for each cloud provider (AWS, Azure, GCP, Snowflake). Start with your primary marketplace.",
        link: {
          label: "Open Suger Console → Settings →",
          url: "https://console.suger.io",
        },
        checks: [
          "Did you find the Settings → Private Offer (CPQ) page?",
          "Are you creating a separate config per cloud provider?",
        ],
        media: null,
      },
      {
        title: "Define outbound field mappings (CRM → Offer)",
        body: "Select the Cloud Partner and define how CRM fields map to offer fields. Three mapping methods: (1) <strong>Static Values</strong> — hardcoded defaults (e.g., EULA type), (2) <strong>Direct 1:1 field links</strong> — direct CRM field references, (3) <strong>Expression Mode (Go Templates)</strong> — for transformations, date formatting, or conditional logic. Use Expression Mode for any field requiring transformation.",
        link: {
          label: "Configure Private Offer Field Mappings (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/2043902306",
        },
        checks: [
          "Have you identified which fields need Expression Mode vs. Direct mapping?",
          "Are all required fields for this cloud provider planned out?",
        ],
        media: null,
      },
      {
        title: "Map AWS private offer fields",
        body: "Required AWS fields to map: (1) <strong>Salesforce/HubSpot Opportunity ID</strong>, (2) <strong>Product ID</strong> — your AWS Marketplace product, (3) <strong>Offer Name</strong>, (4) <strong>Buyer AWS Account ID</strong> — the customer's 12-digit AWS account number (collect from the customer, never hardcode), (5) <strong>Contacts</strong> — buyer contact email, (6) <strong>EULA Type</strong> (Standard or Custom), (7) <strong>Expiry and contract start/end dates</strong>.",
        path: "private-offers-and-cppas",
        checks: [
          "Is the Buyer AWS Account ID mapped to a CRM field populated by the customer — not hardcoded?",
          "Is the Product ID mapped to your actual AWS Marketplace product (not a test product)?",
          "Are expiry and contract dates mapped correctly (future dates only)?",
        ],
        media: null,
      },
      {
        title: "Map Azure private offer fields",
        body: "Required Azure fields to map: (1) <strong>Opportunity ID</strong>, (2) <strong>Product ID</strong> — your Azure Marketplace plan, (3) <strong>Offer Name</strong>, (4) <strong>Buyer Azure Billing Account ID</strong> — UUID format: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX (collect from customer), (5) <strong>Preparer email</strong>, (6) <strong>Start date and expiry date</strong>.",
        checks: [
          "Is the Buyer Azure Billing Account ID sourced from the customer — not hardcoded?",
          "Is the ID in UUID format (XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX)?",
        ],
        media: null,
      },
      {
        title: "Map GCP private offer fields",
        body: "Required GCP fields to map: (1) <strong>Billing Account ID</strong> — format XXXXXX-XXXXXX-XXXXXX (6-6-6 alphanumeric; collect from customer), (2) <strong>Buyer org</strong>, (3) <strong>Contact emails</strong>, (4) <strong>Term length</strong>, (5) <strong>Expiry date</strong>.",
        checks: [
          "Is the GCP Billing Account ID sourced from the customer?",
          "Is the ID in the correct 6-6-6 alphanumeric format (e.g., ABCDEF-123456-789ABC)?",
        ],
        media: null,
      },
      {
        title: "Map Snowflake private offer fields",
        body: "Required Snowflake fields to map: (1) <strong>Display Name</strong> — offer name shown to the buyer, (2) <strong>Expiry date</strong>, (3) <strong>Start date</strong>, (4) <strong>End date</strong>. Snowflake's offer model is simpler than the hyperscalers — fewer required fields but precise date formatting is critical.",
        checks: [
          "Are all date fields mapped and correctly formatted for Snowflake?",
          "Is the Display Name mapped to a descriptive CRM field?",
        ],
        media: null,
      },
      {
        title: "Set listing filters and test the configuration",
        body: "Optionally, configure <strong>Listing Filters</strong> to restrict which marketplace products your sales team can select when creating offers (useful if you have multiple products and want to prevent wrong product selection). Then test: open a CRM opportunity, use the Suger Quick Panel to create a private offer, and review the pre-populated offer form. Fix all validation errors. Get sign-off from your deal desk before enabling for live deals.",
        checks: [
          "Did the CPQ offer form pre-populate without validation errors?",
          "Are buyer account IDs sourced from the customer — not hardcoded test values?",
          "Did you obtain sign-off from your deal desk or implementation contact?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "create-private-offer",
    title: "Create an AWS Marketplace Private Offer",
    category: "cpq",
    description:
      "Walk through creating, pricing, and sending a custom-priced AWS Marketplace private offer to a specific buyer through the Suger Console.",
    estimated: "~15 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/8241797607",
    steps: [
      {
        title: "Prepare AWS and Suger requirements",
        body: "Before creating the offer, confirm: (1) your AWS Marketplace listing is published and active, (2) you have the buyer's <strong>12-digit AWS Account ID</strong> (the account they use for AWS purchases — get this directly from the buyer), (3) the offer pricing and term length are agreed with the buyer, and (4) you have the buyer's contact email for notification.",
        terms: [
          { name: "Private Offer", slug: "private-offer" },
          { name: "Product Code — AWS", slug: "product-code-—-aws" },
        ],
        path: "private-offers-and-cppas",
        checks: [
          "Is your AWS listing published and active?",
          "Do you have the buyer's 12-digit AWS Account ID — confirmed with the buyer directly?",
          "Are pricing and term length agreed with the buyer before creating the offer?",
        ],
        media: null,
      },
      {
        title: "Create the draft offer in Suger",
        body: "In Suger Console, navigate to <strong>Offer → Create Private Offer</strong>. Select the target cloud provider (AWS) and the specific listing to offer. Click <strong>Create Draft</strong> to start the offer creation flow.",
        link: {
          label: "Open Suger Console → Offer →",
          url: "https://console.suger.io",
        },
        checks: [
          "Is the draft offer created for the correct listing?",
          "Is the target cloud provider set to AWS?",
        ],
        media: null,
      },
      {
        title: "Fill in basic information",
        body: "Enter the offer details: <strong>Offer Name</strong> (internal reference, not shown to buyer), buyer's <strong>AWS Account ID</strong>, buyer contact email(s) for notification, and any internal notes. Set the offer <strong>Expiry Date</strong> — the date by which the buyer must accept before the offer expires.",
        checks: [
          "Is the buyer's AWS Account ID entered correctly (12 digits)?",
          "Is the expiry date set to a future date agreed with the buyer?",
          "Are buyer contact emails entered for acceptance notifications?",
        ],
        media: null,
      },
      {
        title: "Fill in offer terms",
        body: "Define the contract terms: select the <strong>contract duration</strong> (1 year, 2 years, 3 years, or custom), the <strong>payment schedule</strong> (upfront or installment — see Variable Payments if needed), and the contract <strong>start date</strong>.",
        terms: [
          { name: "Variable Payments — AWS", slug: "variable-payments-—-aws" },
        ],
        checks: [
          "Is the contract duration correct?",
          "Is the payment schedule agreed with the buyer (upfront vs. installment)?",
        ],
        media: null,
      },
      {
        title: "Fill in pricing information",
        body: "Enter the custom pricing: for SaaS subscription products, enter the negotiated contract value. For usage-based products, enter the committed spend and/or per-unit rates for each dimension. The pricing you enter here overrides the public listing price — double-check before finalizing.",
        checks: [
          "Is the pricing the correct negotiated value — not the public list price?",
          "For usage-based: are all dimension rates entered correctly?",
        ],
        media: null,
      },
      {
        title: "Add legal terms and finalize",
        body: "Select the <strong>EULA type</strong>: Standard Contract for AWS Marketplace (SCMP) or a Custom EULA (upload your own PDF). If using a Custom EULA, upload the PDF and confirm the buyer has reviewed it. Click <strong>Submit</strong> to send the offer to AWS Marketplace. AWS processes offers typically within minutes.",
        checks: [
          "Is the correct EULA type selected (Standard vs. Custom)?",
          "If Custom EULA: is the PDF uploaded and confirmed with the buyer?",
          "Is the offer submitted to AWS?",
        ],
        media: null,
      },
      {
        title: "Share the offer with your buyer",
        body: "After submission, use Suger's <strong>Share Offer</strong> button to send the offer URL to the buyer. The buyer will receive an email with a link to accept the offer in AWS Marketplace. You can also copy the offer URL directly. Track acceptance status in Suger under <strong>Offer</strong> — the status will update to Accepted once the buyer completes the transaction.",
        link: {
          label: "Manage Offers (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/2371362824",
        },
        checks: [
          "Did you share the offer URL with the buyer?",
          "Are you monitoring the offer status in Suger → Offer for acceptance?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "create-private-offer-azure",
    title: "Create an Azure Marketplace Private Offer",
    category: "cpq",
    description:
      "Walk through creating, configuring, and activating a custom-priced Azure Marketplace private offer for a specific buyer through Suger.",
    estimated: "~15 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/3943279189",
    steps: [
      {
        title: "Create the private offer in Suger",
        body: "In Suger Console, navigate to <strong>Offer → Create Private Offer</strong>. Select <strong>Azure</strong> as the cloud provider and choose the published Azure listing plan to offer. Enter the offer details: <strong>Offer Name</strong> (internal reference), buyer's <strong>Azure Billing Account ID</strong> (UUID format — get from the customer), <strong>Preparer email</strong>, <strong>Start Date</strong>, <strong>End Date</strong>, and custom pricing. Click <strong>Create</strong> to generate the offer.",
        terms: [{ name: "Private Offer", slug: "private-offer" }],
        path: "private-offers-and-cppas",
        link: {
          label: "Open Suger Console → Offer →",
          url: "https://console.suger.io",
        },
        checks: [
          "Is the buyer's Azure Billing Account ID in UUID format (XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX)?",
          "Did you confirm the Billing Account ID directly with the buyer — not guessed?",
          "Are start date, end date, and pricing confirmed with the buyer?",
        ],
        media: null,
      },
      {
        title: "Send the private offer to your buyer",
        body: "After the offer is created in Suger, use the <strong>Share</strong> button to send the offer link to your buyer. The buyer receives an email with a link to the offer in Microsoft Azure. You can also copy the offer URL directly. Monitor acceptance status in Suger → Offer.",
        checks: [
          "Did you send the offer link to the buyer?",
          "Is the offer showing as 'Pending Acceptance' in Suger?",
        ],
        media: null,
      },
      {
        title: "Buyer accepts and purchases the offer in Azure",
        body: "The buyer navigates to the offer link in Azure Marketplace and clicks <strong>Get It Now</strong> or <strong>Accept</strong>. Azure may show a two-step checkout: the buyer first accepts the offer terms, then completes the purchase. Azure's checkout for private offers sometimes shows a <strong>Pending Purchase</strong> state — this is normal and resolves within minutes.",
        checks: [
          "Did the buyer successfully accept the offer in Azure?",
          "If 'Pending Purchase' state appeared: did it resolve within 15 minutes?",
        ],
        media: null,
      },
      {
        title: "Buyer completes purchase in Azure",
        body: "After acceptance, Azure processes the subscription setup. The buyer may need to configure the SaaS subscription in the Azure portal (mapping it to their Azure subscription). The offer status updates to <strong>Active</strong> in Azure.",
        checks: [
          "Is the offer showing as Active/Subscribed in Azure?",
          "Did the buyer receive confirmation from Azure?",
        ],
        media: null,
      },
      {
        title: "Activate the subscription in Suger",
        body: "Once the buyer completes the purchase, the entitlement syncs to Suger under <strong>Entitlements</strong>. The offer status in Suger updates to <strong>Accepted</strong>. If you have a provisioning webhook configured, it fires automatically to trigger your onboarding flow. Verify the entitlement details match the agreed terms.",
        link: {
          label: "Create an Azure private offer (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/3943279189",
        },
        checks: [
          "Does the entitlement appear in Suger → Entitlements with correct status?",
          "If a provisioning webhook is configured, did it fire?",
          "Do the entitlement terms match the agreed contract?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "create-private-offer-gcp",
    title: "Create a GCP Marketplace Private Offer",
    category: "cpq",
    description:
      "Create and share a custom-priced Google Cloud Marketplace private offer for a specific buyer through Suger, with flexible pricing and payment options.",
    estimated: "~15 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/5598897548",
    steps: [
      {
        title: "Confirm prerequisites",
        body: "Before creating a GCP private offer confirm: (1) your GCP Marketplace integration is connected in Suger, (2) you have a published GCP listing, and (3) you have the buyer's <strong>GCP Billing Account ID</strong> in the format <code>XXXXXX-XXXXXX-XXXXXX</code> (6-6-6 alphanumeric — confirm with the buyer directly).",
        terms: [{ name: "Private Offer", slug: "private-offer" }],
        path: "private-offers-and-cppas",
        checks: [
          "Is your GCP Marketplace integration connected in Suger?",
          "Do you have a published GCP listing to offer against?",
          "Is the buyer's GCP Billing Account ID confirmed in the correct format (XXXXXX-XXXXXX-XXXXXX)?",
        ],
        media: null,
      },
      {
        title: "Create the offer in Suger",
        body: "In Suger Console, navigate to <strong>Offer → Create Private Offer</strong>. Select <strong>GCP</strong> as the cloud provider and the published listing. Fill in: <strong>Offer Name</strong>, buyer's <strong>Billing Account ID</strong>, buyer org, contact emails, <strong>Term Length</strong> (duration of the contract), <strong>Expiry Date</strong> (date by which buyer must accept), and pricing. For flexible payment, GCP supports installment schedules — configure payment dates if applicable.",
        link: {
          label: "Open Suger Console → Offer →",
          url: "https://console.suger.io",
        },
        checks: [
          "Is the Billing Account ID in the correct 6-6-6 format?",
          "Is the expiry date set to a future date agreed with the buyer?",
          "If installment payments: are all payment dates and amounts defined?",
        ],
        media: null,
      },
      {
        title: "Share the offer with your buyer",
        body: "After creating the offer, click <strong>Share</strong> in Suger to send the offer link to the buyer. The buyer navigates to GCP Marketplace, reviews the offer terms, and accepts. Once accepted, the entitlement syncs to Suger. Monitor status in Suger → Offer.",
        link: {
          label: "Create a GCP private offer (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/5598897548",
        },
        checks: [
          "Did you send the offer link to the buyer?",
          "After buyer acceptance: did the entitlement appear in Suger → Entitlements?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "resale-authorization-aws",
    title: "Create an AWS Resale Authorization (CPPO)",
    category: "cpq",
    description:
      "Create a resale authorization for an AWS Marketplace product so a channel partner can create Channel Partner Private Offers (CPPOs) for their customers.",
    estimated: "~20 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/3662037468",
    steps: [
      {
        title: "Complete AWS and Suger resale requirements",
        body: "Before creating a resale authorization confirm: <strong>AWS requirements</strong> — your listing must be SaaS with reseller permissions enabled; you must be enrolled in the AWS Channel Partner program; your channel partner must have an active AWS Marketplace Reseller account. <strong>Suger requirements</strong> — your AWS Marketplace integration is connected; the product is linked in Suger.",
        terms: [
          {
            name: "Channel Partner Private Offer (CPPO) — AWS",
            slug: "channel-partner-private-offer-cppo-—-aws",
          },
          {
            name: "Resale Authorization — AWS",
            slug: "resale-authorization-—-aws",
          },
        ],
        path: "private-offers-and-cppas",
        checks: [
          "Is reseller permission enabled on your AWS Marketplace listing?",
          "Does your channel partner have an active AWS Marketplace Reseller account?",
          "Is your AWS Marketplace integration connected in Suger?",
        ],
        media: null,
      },
      {
        title: "Create the resale authorization in Suger",
        body: "In Suger Console, navigate to <strong>Offer → Resale Authorization → Create</strong> (or <strong>Resale → New Authorization</strong>). Select your AWS listing and set the authorization terms: <strong>Wholesale Price</strong> (what the partner pays you — typically a discount from list price), <strong>Allowed Buyer Discount Range</strong> (how much the partner can discount to end buyers), <strong>Expiry Date</strong>, and any custom EULA. Submit to generate the Authorization ID.",
        link: {
          label: "Open Suger Console → Resale →",
          url: "https://console.suger.io",
        },
        checks: [
          "Is the wholesale price set to the agreed partner margin?",
          "Is the buyer discount range configured correctly?",
          "Is the Authorization ID generated successfully?",
        ],
        media: null,
      },
      {
        title: "Hand off to the channel partner",
        body: "Share the <strong>Authorization ID</strong> with your channel partner. The partner uses this ID in their AWS Partner Central account to create CPPOs for their end customers. Provide the partner with: (1) Authorization ID, (2) the product listing details, (3) your agreed pricing terms and discount limits, (4) EULA if custom.",
        checks: [
          "Did you share the Authorization ID with the channel partner?",
          "Does the partner have everything they need to create CPPOs?",
        ],
        media: null,
      },
      {
        title: "Track buyer acceptance and entitlements",
        body: "In Suger Console, monitor the resale authorization under <strong>Resale</strong>. When the partner creates a CPPO and a buyer accepts it, you'll see a new entitlement under <strong>Entitlements</strong> labeled as a wholesale/CPPO entitlement. The partner's offer (CPPO) is tracked separately from your direct offers. Confirm entitlements appear correctly and revenue records sync.",
        link: {
          label: "Track and manage Resale Authorizations (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/3929314336",
        },
        checks: [
          "Is the resale authorization visible in Suger → Resale?",
          "When a CPPO is created by the partner, does the wholesale entitlement appear in Suger?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "resale-authorization-azure",
    title: "Create an Azure Resale Authorization (MPPO)",
    category: "cpq",
    description:
      "Create a resale authorization for an Azure Marketplace product so channel partners can create Multiparty Private Offers (MPOs) for their customers.",
    estimated: "~20 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/8435645725",
    steps: [
      {
        title: "Complete Azure resale requirements",
        body: "Before creating an Azure resale authorization confirm: (1) your Azure Marketplace offer has the <strong>Sell through CSP</strong> or resale option enabled in Partner Center, (2) your channel partner is enrolled in the Microsoft CSP or Resell partner program, and (3) your Azure Marketplace integration is connected in Suger.",
        terms: [
          {
            name: "Multiparty Private Offer (MPO) — Azure",
            slug: "multiparty-private-offer-mpo-—-azure",
          },
        ],
        path: "private-offers-and-cppas",
        checks: [
          "Is the 'Sell through CSP' option enabled on your Azure offer in Partner Center?",
          "Is your channel partner enrolled in the Microsoft CSP or Resell program?",
          "Is your Azure Marketplace integration connected in Suger?",
        ],
        media: null,
      },
      {
        title: "Create the Resale Authorization in Suger",
        body: "In Suger Console, navigate to <strong>Resale → New Authorization</strong> and select <strong>Azure</strong>. Set the authorization details: <strong>Azure listing plan</strong> to authorize for resale, <strong>Wholesale Price</strong> (partner's cost), discount limits for end buyers, and expiry. Submit to generate the authorization — Suger syncs this to Azure Partner Center.",
        link: {
          label: "Open Suger Console → Resale →",
          url: "https://console.suger.io",
        },
        checks: [
          "Is the wholesale price set to the agreed margin?",
          "Is the correct Azure plan selected for authorization?",
          "Is the authorization submitted and visible in Suger?",
        ],
        media: null,
      },
      {
        title: "Hand off to the channel partner",
        body: "Share the resale authorization details with your channel partner. The partner uses this authorization in Microsoft Partner Center to create <strong>Multiparty Private Offers (MPOs)</strong> for their customers. Azure's MPO flow requires the partner to set the end-customer price within the discount limits you authorized.",
        checks: [
          "Did you share the authorization details with the partner?",
          "Does the partner understand the discount limits they can apply to end customers?",
        ],
        media: null,
      },
      {
        title: "Track buyer acceptance and manage active entitlements",
        body: "Monitor the resale authorization in Suger → Resale. Azure's checkout has a two-step process: <strong>Pending Purchase</strong> (offer accepted, purchase not yet finalized) and then <strong>Active</strong>. Once a buyer completes purchase, the entitlement appears in Suger. Azure MPPO entitlements are linked to the partner's transaction — confirm revenue splits are correct in Suger → Revenue.",
        link: {
          label: "Create a Resale Authorization for Azure (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/8435645725",
        },
        checks: [
          "Does the MPPO entitlement appear in Suger → Entitlements after buyer completes purchase?",
          "Is the revenue split correct in Suger → Revenue?",
        ],
        media: null,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // GO-LIVE
  // ─────────────────────────────────────────────────────────

  {
    slug: "production-go-live",
    title: "Migration to Production & Go-Live",
    category: "go-live",
    description:
      "Remove sandbox connections, connect production marketplace accounts, validate all functionality end-to-end, and sign off on the Suger implementation.",
    estimated: "~45 min",
    status: "complete",
    steps: [
      {
        title: "Remove sandbox connections",
        body: "This step applies only if you used a sandbox or test environment during setup. In Suger Console, navigate to <strong>Settings → Integrations</strong>. For each cloud marketplace (AWS, Azure, GCP, Snowflake), disconnect the sandbox or test integration. Do not delete the configuration — just disconnect the sandbox account to stop receiving sandbox events in your production data. Self-serve customers who set up directly in production can skip this step.",
        link: {
          label: "Open Suger Console → Settings → Integrations →",
          url: "https://console.suger.io",
        },
        checks: [
          "Did you use a sandbox environment during setup? If not, skip this step.",
          "Have all sandbox marketplace connections been disconnected (not deleted)?",
          "Are there no sandbox Product Codes remaining linked to Suger products?",
        ],
        media: null,
      },
      {
        title: "Connect production marketplace accounts",
        body: "Reconnect each marketplace using production seller/publisher credentials. Follow the same steps as the initial integration walkthrough for each platform, but using production accounts this time. Verify the Seller/Publisher ID in Suger matches your production marketplace account for each platform.",
        checks: [
          "Did you use production credentials — not sandbox or test accounts?",
          "Does the Seller/Publisher ID in Suger match the production marketplace account?",
          "Are production Product Codes linked to the correct Suger products?",
        ],
        media: null,
      },
      {
        title: "Grant production access to stakeholders",
        body: "In Suger Console, go to <strong>Settings → Users</strong>. Confirm all production team members have the correct roles. Remove any temporary implementation team accounts or test user accounts added during sandbox testing. Do not leave implementation-only accounts active in production.",
        link: {
          label: "Manage Users and Roles (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/6695643183",
        },
        checks: [
          "Do all production team members have the correct access role?",
          "Have temporary implementation and test accounts been removed?",
        ],
        media: null,
      },
      {
        title: "Test Private Offer configuration in production",
        body: "Before testing, confirm your listing is live: go to <strong>Suger Console → Product</strong>, open your product, and verify the status is <strong>Public</strong>. Copy the <strong>Marketplace URL</strong> and open it in an incognito browser window to confirm it loads. Then create a $0 test private offer using the production integration to a test buyer account you control. Confirm: (1) the offer appears in the production cloud marketplace portal, (2) the test buyer can accept the offer, (3) the entitlement syncs to Suger → Entitlements. Don't skip this step — it's much easier to catch issues here than after a real customer transacts.",
        terms: [
          { name: "Private Offer", slug: "private-offer" },
          { name: "Entitlement", slug: "entitlement" },
        ],
        checks: [
          "Is your listing status showing Public in Suger Console → Product?",
          "Did the Marketplace URL load successfully in an incognito browser window?",
          "Did the test private offer appear in the production cloud marketplace portal?",
          "Did the test buyer accept the offer successfully?",
          "Did the entitlement sync to Suger → Entitlements after acceptance?",
        ],
        media: null,
      },
      {
        title: "Test Co-Sell configuration in production",
        body: "Submit a test referral from production CRM. Confirm it arrives in the cloud partner portal (AWS Partner Central, Azure Partner Center, or GCP Partner Network). Accept it and verify the status syncs back to the CRM. If Auto-Share is enabled, trigger a qualifying opportunity and confirm it's auto-submitted.",
        terms: [
          { name: "Outbound Referral", slug: "outbound-referral" },
          { name: "Inbound Referral", slug: "inbound-referral" },
        ],
        checks: [
          "Did the test referral appear in the cloud partner portal?",
          "Did accepting the referral sync the status back to the CRM?",
          "If Auto-Share is enabled, did a qualifying opportunity get auto-submitted?",
        ],
        media: null,
      },
      {
        title: "Sign off and mark implementation complete",
        body: "Confirm all tests passed with your Suger implementation team. Document production Seller IDs, Product Codes, and integration timestamps. Update your project tracker to reflect go-live. For post-go-live support: <a href='mailto:support@suger.io'>support@suger.io</a>.",
        checks: [
          "Have you received formal sign-off from your Suger implementation contact?",
          "Are production Seller IDs and Product Codes documented?",
          "Is your internal project tracker updated to 'Complete'?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "post-onboarding-next-steps",
    title: "After Go-Live: Key Setup Checklist",
    category: "go-live",
    description:
      "A guided checklist of the first post-go-live actions: verify entitlements, configure notifications, set up webhooks, create an API client, and run your first data export.",
    estimated: "~25 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/6793092534",
    steps: [
      {
        title: "Verify entitlement sync is live",
        body: "Navigate to <strong>Entitlements</strong> in Suger Console. Confirm at least one test or real entitlement has synced from your cloud marketplace. If the list is empty, check <strong>Settings → Integrations → [Your Marketplace] → Event Log</strong> before proceeding.",
        terms: [
          { name: "Entitlement", slug: "entitlement" },
          { name: "Suger Console", slug: "suger-console" },
        ],
        path: "suger-platform-quickstart",
        checks: [
          "Is at least one entitlement visible in Suger Console → Entitlements?",
          "Does the status match what's shown in your cloud marketplace portal?",
        ],
        media: null,
      },
      {
        title: "Configure email notification recipients",
        body: "Navigate to <strong>Settings → Notifications</strong>. Toggle <strong>Enable Global Email Notifications</strong> ON. Define trigger routing: for each event type (Create Entitlement, Accept Offer, Cancel Entitlement), set To/CC/BCC recipients. Use team distribution list emails — not individual employee addresses.",
        link: {
          label: "Configure Notifications (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/6793092534",
        },
        checks: [
          "Is Enable Global Email Notifications ON?",
          "Are team distribution lists set for Create Entitlement, Cancel Entitlement, and Accept Offer?",
          "Did you run a Diagnostics test to verify email delivery?",
        ],
        media: null,
      },
      {
        title: "Set up your provisioning webhook",
        body: "Navigate to <strong>Settings → Notifications</strong>, click <strong>+ New Webhook</strong>. Enter your HTTPS provisioning endpoint URL. Add a Webhook Secret (32+ random characters). Verify with the <strong>Test</strong> button. Without a webhook, customers must be provisioned manually after marketplace purchase.",
        terms: [{ name: "Webhook", slug: "webhook" }],
        path: "marketplace-integrations",
        link: {
          label: "Configure Webhooks (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/7499683536",
        },
        checks: [
          "Is the Payload URL HTTPS?",
          "Is a Webhook Secret configured?",
          "Did the Test button confirm your server received the payload and returned 2xx?",
        ],
        media: null,
      },
      {
        title: "Create an API client",
        body: "Navigate to <strong>Settings → API Client</strong>, click <strong>+ CREATE API CLIENT</strong>, select <strong>API_KEY</strong>. Copy the key immediately — shown only once. Store in a secrets manager. Authenticate all API calls with header: <code>Authorization: Key YOUR_KEY</code> (capital K required).",
        terms: [{ name: "Suger API Client", slug: "suger-api-client" }],
        link: {
          label: "Configure an API Client (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/3219634544",
        },
        checks: [
          "Did you copy the key before leaving the creation page?",
          "Is the key stored in a secrets manager — not source code or email?",
          "Did a test call with 'Authorization: Key YOUR_KEY' return 200 OK?",
        ],
        media: null,
      },
      {
        title: "Configure your customer signup page",
        body: "Navigate to <strong>Settings → New Client Signup</strong>. Configure branding (company name, logo URL, welcome message) and notification emails. Copy the Suger-generated <strong>Fulfillment URL</strong> and paste it into your cloud marketplace portal as the SaaS setup URL. Preview the page before publishing.",
        link: {
          label: "Configure Signup Journey (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/9927609742",
        },
        checks: [
          "Is your logo and welcome message configured?",
          "Is the Fulfillment URL pasted into your marketplace portal?",
          "Did you preview the live signup page?",
        ],
        media: null,
      },
      {
        title: "Run your first data export",
        body: "Navigate to <strong>Settings → Data Export</strong>, click <strong>+ New Task</strong>. Select Entitlements as source, Console Download as destination, Last 30 days as range. Click Create. Once Completed, download and verify the data is clean.",
        link: {
          label: "Export Platform Data (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/4426176130",
        },
        checks: [
          "Did the export reach 'Completed' status?",
          "Does the data match entitlements in Suger Console?",
          "Are there no unexpected empty fields in the export?",
        ],
        media: null,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // OPERATIONS
  // ─────────────────────────────────────────────────────────

  {
    slug: "workflow-automation-setup",
    title: "Set Up API Clients and Webhooks",
    category: "operations",
    description:
      "Create a Suger API client for your integration layer and configure a signed webhook to automate provisioning and marketplace event handling.",
    estimated: "~15 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/3219634544",
    steps: [
      {
        title: "Create an API client (API Key)",
        body: "In Suger Console, go to <strong>Settings → API Client</strong>, click <strong>+ CREATE API CLIENT</strong>. Select <strong>API_KEY</strong> as the authentication type (not the legacy Bearer Token). Give it a descriptive label identifying its purpose (e.g., 'Production Provisioning Bot'). Your org supports up to 5 API clients by default.",
        terms: [{ name: "Suger API Client", slug: "suger-api-client" }],
        path: "marketplace-integrations",
        link: {
          label: "Open Suger Console → Settings → API Client →",
          url: "https://console.suger.io",
        },
        checks: [
          "Did you select 'API_KEY' — not the legacy Bearer Token?",
          "Did you give it a meaningful label identifying its purpose?",
        ],
        media: null,
      },
      {
        title: "Authenticate your requests",
        body: "Copy the API key immediately — it is shown only once. Store it in a secure credential vault. Authenticate all requests using the exact header: <code>Authorization: Key YOUR_API_KEY</code>. The prefix 'Key' (capital K) is case-sensitive — 'key' or 'Bearer' return 401. Verify with a test API call.",
        link: {
          label: "Suger API Reference →",
          url: "https://doc.suger.io/api/",
        },
        checks: [
          "Did you copy the key before leaving the creation page?",
          "Is it stored in a secrets manager — not source code or email?",
          "Did a test call return 200 OK using the 'Authorization: Key YOUR_KEY' header?",
        ],
        media: null,
      },
      {
        title: "Lifecycle and security management",
        body: "If a key is compromised, rotate it immediately: create a new API_KEY client, update all dependent services, then delete the old client. Deletion is immediate and irreversible — all services using the old key stop working instantly. Legacy Bearer Tokens (if you have them) still work but new creation is no longer supported — migrate to API_KEY.",
        checks: [
          "Is a key rotation procedure documented for your team?",
          "Do you know how to find which services use each API client?",
        ],
        media: null,
      },
      {
        title: "Create a new webhook",
        body: "In Suger Console, go to <strong>Settings → Notifications</strong>, click <strong>+ New Webhook</strong>. Enter your <strong>Payload URL</strong> — a publicly accessible HTTPS endpoint. Enter a <strong>Webhook Secret</strong> (32+ random characters). Suger signs every payload with HMAC-SHA256 using this secret — your server must verify the <code>X-Suger-Signature</code> header before processing.",
        terms: [{ name: "Webhook", slug: "webhook" }],
        link: {
          label: "Configure Webhooks (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/7499683536",
        },
        checks: [
          "Is the Payload URL HTTPS?",
          "Is a Webhook Secret configured — not left blank?",
          "Does your server verify the X-Suger-Signature header before processing payloads?",
        ],
        media: null,
      },
      {
        title: "Manage the product whitelist (optional)",
        body: "By default, all marketplace products trigger the webhook. Use the <strong>Product Whitelist</strong> to filter events to specific product IDs — useful for routing production events separately from sandbox or test listings. Leave disabled during initial testing to see all events; enable once confirmed working.",
        checks: [
          "Have you decided whether to use the Product Whitelist?",
          "If enabled, are only production product IDs in the whitelist — not test/sandbox IDs?",
        ],
        media: null,
      },
      {
        title: "Verify with the Test button",
        body: "Click the <strong>Test</strong> button on your webhook. Suger sends a sample JSON payload. Check your server logs to confirm: (1) payload arrived, (2) signature verification passed, (3) server returned 2xx. If the test fails, verify your URL is publicly accessible and your server returns 2xx for all payloads including test ones.",
        checks: [
          "Did the test payload arrive at your server?",
          "Did your signature verification accept the test payload?",
          "Did your server return 2xx — confirmed in your server logs?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "usage-metering-setup",
    title: "Configure Usage Metering Settings",
    category: "operations",
    description:
      "Set up billable metrics in Suger to connect product consumption data with cloud marketplace billing engines across AWS, Azure, and GCP.",
    estimated: "~20 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/3581615435",
    steps: [
      {
        title: "Define your billable metrics",
        body: "Before configuring in Suger, define what you're metering: each billable metric maps to a dimension in your cloud marketplace listing (e.g., 'api_calls', 'active_users', 'gb_processed'). Confirm: (1) your listing includes the correct usage dimensions, (2) each dimension has a <strong>unique Metric ID</strong> matching your API calls or CSV uploads, and (3) the unit pricing per dimension is set in your listing.",
        terms: [
          {
            name: "Metering / Usage Reporting",
            slug: "metering-/-usage-reporting",
          },
        ],
        path: "marketplace-metering",
        checks: [
          "Are usage dimensions defined and live in your cloud marketplace listing?",
          "Do you have a unique Metric ID planned for each dimension?",
          "Is unit pricing set in the listing for each dimension?",
        ],
        media: null,
      },
      {
        title: "Navigate to Settings → Usage Metering and add a metric",
        body: "In Suger Console, go to <strong>Settings → Usage Metering</strong>. Click <strong>+ Add Metric</strong> (or <strong>Add Billable Metric</strong>). You'll configure each metric one at a time. If you have multiple dimensions (e.g., users + API calls), add a separate metric for each.",
        link: {
          label: "Open Suger Console → Settings → Usage Metering →",
          url: "https://console.suger.io",
        },
        checks: [
          "Did you find Settings → Usage Metering in Suger Console?",
          "Are you ready to add one metric per billing dimension?",
        ],
        media: null,
      },
      {
        title: "Configure Basic Information for the metric",
        body: "For each metric, set: <strong>Metric ID</strong> — must exactly match the dimension ID in your cloud listing and the ID used in your API calls or CSV uploads (case-sensitive), <strong>Display Name</strong> — human-readable label shown in reports, <strong>Aggregation Method</strong> — SUM (accumulate usage over the period) or MAX (peak value), and an optional description.",
        checks: [
          "Does the Metric ID exactly match the dimension ID in your cloud listing (case-sensitive)?",
          "Is the aggregation method (SUM vs. MAX) correct for this usage type?",
        ],
        media: null,
      },
      {
        title: "Define Rules & Filters",
        body: "Optionally add filters to segment usage data — for example, filtering by customer tier or product SKU before reporting. Configure <strong>Group By</strong> properties if you need to break usage down by customer attribute. Leave filters empty if you want to report all usage for this metric without segmentation.",
        checks: [
          "Are filters configured only if needed — not as a default?",
          "If using Group By: are the property keys defined and matching what your system sends?",
        ],
        media: null,
      },
      {
        title: "Configure Partner-Specific Settings",
        body: "For each cloud partner using this metric, configure partner-specific settings: (1) <strong>Dimension Mapping</strong> — map your internal Metric ID to the cloud provider's dimension ID if they differ; (2) <strong>Commit with Additional Usage</strong> — for overage billing on committed-spend contracts; (3) <strong>Commit with List Price</strong> — for negotiated vs. list rate handling. Enable <strong>Dimension Mapping</strong> for active partners — then refresh the product in Suger to sync changes.",
        checks: [
          "Is Dimension Mapping enabled for each active cloud partner using this metric?",
          "Did you refresh the product in Suger after adding new dimensions?",
          "Is the Golden Rule satisfied: Usage Amount = Quantity Reported × Dimension Unit Price?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "notifications-setup",
    title: "Configure Notifications & Email Templates",
    category: "operations",
    description:
      "Set up Suger's notification system to route marketplace events to the right recipients, and optionally build branded custom email templates.",
    estimated: "~20 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/6793092534",
    steps: [
      {
        title: "Enable Global Email Notifications",
        body: "In Suger Console, navigate to <strong>Settings → Notifications</strong>. Toggle <strong>Enable Email Notification</strong> (or Enable Global Email Notifications) to ON. Without this master toggle enabled, no event-based emails are sent regardless of per-scope configuration.",
        link: {
          label: "Open Suger Console → Settings → Notifications →",
          url: "https://console.suger.io",
        },
        checks: ["Is the global Enable Email Notification toggle ON?"],
        media: null,
      },
      {
        title: "Define triggers and routing (To / CC / BCC)",
        body: "For each notification scope (event type), define recipient routing. Key scopes to configure: <strong>Create Entitlement</strong> (new customer subscribed), <strong>Accept Offer</strong>, <strong>Cancel Entitlement</strong>, <strong>Update Entitlement</strong>, <strong>Create Co-Sell</strong>, <strong>Usage Metering Alert</strong>. Set <strong>To</strong>, <strong>CC</strong>, and <strong>BCC</strong> per scope using team distribution lists — not individual email addresses. Some scopes (co-sell, commission) are always-on and cannot be disabled.",
        link: {
          label: "About Email Notification Scopes (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/8953451261",
        },
        checks: [
          "Are team distribution lists set for Create Entitlement, Cancel Entitlement, and Accept Offer?",
          "Are individual email addresses replaced with team aliases wherever possible?",
          "Are co-sell notification recipients set (always-on scopes)?",
        ],
        media: null,
      },
      {
        title: "Map marketplace events to email templates",
        body: "For each trigger, select an email template: use <strong>Default Suger Template</strong> for quick setup, or assign a <strong>Custom Template</strong> for branded emails. The default templates are functional but unbranded — if buyer-facing notifications are needed, create custom templates (next step). Internal-facing notifications (entitlement alerts to your ops team) are fine with default templates.",
        checks: [
          "Is a template assigned to each enabled notification scope?",
          "Are buyer-facing notifications (e.g., offer acceptance) using branded custom templates?",
        ],
        media: null,
      },
      {
        title: "Build custom email templates (optional)",
        body: "To create a custom template: in Settings → Notifications, click the template dropdown for an event and select <strong>+ New Template</strong>. Set the template name, <strong>Evaluator Type</strong> (Golang Template recommended), and <strong>Event Type</strong>. Use the drag-and-drop builder to add content blocks. Inject dynamic data via <strong>Merge Tags</strong> (e.g., customer name, offer amount, contract dates). Test the template using the Diagnostics → Test button with a mock event.",
        link: {
          label: "Build custom email templates (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/2962340355",
        },
        checks: [
          "Does the custom template render correctly with merge tag data?",
          "Did the Diagnostics test send the email to the expected recipient?",
        ],
        media: null,
      },
      {
        title: "Test the full notification pipeline",
        body: "In Settings → Notifications, use the <strong>Diagnostics → Test</strong> button on a configured trigger. Use either <strong>Mock JSON</strong> (send a sample payload) or <strong>Last Recorded Event</strong> (replay a real event). Confirm the email arrives at the configured recipients within 60 seconds. If no email arrives, check: global toggle is ON, recipients are valid, no spam filter blocking.",
        checks: [
          "Did the test email arrive at all configured To/CC/BCC recipients?",
          "Is the email content correct (merge tags populated, not showing raw variables)?",
          "Did you test at least one buyer-facing scope and one internal scope?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "okta-sso-setup",
    title: "Configure Okta SSO for Suger",
    category: "operations",
    description:
      "Integrate Okta OIDC Single Sign-On with SCIM provisioning to automate user management and enforce role-based access in the Suger Console.",
    estimated: "~30 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/2180341449",
    steps: [
      {
        title: "Initialize the Suger Application in Okta",
        body: "In Okta Admin Console, navigate to <strong>Applications → Browse App Catalog</strong> and search for Suger. Add the Suger OIDC app to your Okta organization. In the app's <strong>General</strong> settings, enter placeholder values initially — you'll update these after getting credentials from Suger. Navigate to the <strong>Sign On</strong> tab and copy the <strong>Client ID</strong>, <strong>Client Secret</strong>, and <strong>Okta Domain</strong> — you'll need all three for Suger.",
        checks: [
          "Is the Suger app added to your Okta organization?",
          "Do you have the Client ID, Client Secret, and Okta Domain copied?",
        ],
        media: null,
      },
      {
        title: "Configure the SSO connection in Suger Console",
        body: "In Suger Console, navigate to <strong>Settings → SSO</strong>. Click <strong>+ Set up SSO</strong> and complete the wizard using the Okta credentials from Step 1: enter your <strong>Okta Domain</strong>, <strong>Client ID</strong>, and <strong>Client Secret</strong>. Save to activate the SSO connection. After saving, a <strong>Continue with Okta</strong> option appears on the Suger login page. Test by logging in via Okta before making SSO mandatory.",
        link: {
          label: "Open Suger Console → Settings → SSO →",
          url: "https://console.suger.io",
        },
        checks: [
          "Is 'Continue with Okta' visible on the Suger login page?",
          "Did you test a successful Okta login before enforcing SSO for all users?",
        ],
        media: null,
      },
      {
        title: "Automate lifecycle management with SCIM (optional)",
        body: "SCIM automates user provisioning and deprovisioning: when a user is added to the Suger app in Okta, they're automatically created in Suger; when removed, they're deactivated. To enable: (1) email <a href='mailto:support@suger.io'>support@suger.io</a> to request your SCIM Endpoint URL and API Token, (2) in Okta → Suger App → Provisioning tab, enable API Integration and enter the endpoint and token, (3) activate Create Users, Update Attributes, and Deactivate Users. Note: the SCIM Endpoint URL must end with a trailing slash.",
        checks: [
          "Did you receive the SCIM Endpoint URL and API Token from Suger Support?",
          "Does the SCIM Endpoint URL have a trailing slash?",
          "Are Create, Update, and Deactivate toggles enabled in Okta Provisioning?",
        ],
        media: null,
      },
      {
        title: "Implement Role-Based Access Control (RBAC)",
        body: "Map Okta groups to Suger roles so users are automatically assigned the correct permissions on login. In Okta's <strong>Profile Editor</strong>, create a custom attribute called <code>sugerRole</code> with allowed values: <code>ADMIN</code>, <code>EDITOR</code>, <code>VIEWER</code>. Assign the correct <code>sugerRole</code> value to each Okta group (e.g., Suger-Admins → ADMIN, Suger-Users → EDITOR). Once configured, Okta sends the role attribute in the OIDC token and Suger applies it on login.",
        link: {
          label: "Configure and manage Okta SSO (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/2180341449",
        },
        checks: [
          "Is the sugerRole attribute created in Okta Profile Editor?",
          "Are Okta groups mapped to the correct ADMIN / EDITOR / VIEWER values?",
          "Did you test login for each role to confirm permissions are applied correctly?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "aws-funding-request",
    title: "Manage AWS Funding Requests in Suger",
    category: "operations",
    description:
      "Submit, track, and manage AWS Proof of Concept (POC) and Marketing Development Fund (MDF) funding requests through Suger.",
    estimated: "~15 min",
    status: "complete",
    sourceUrl: "https://suger.help.usepylon.com/articles/6911165083",
    steps: [
      {
        title: "Confirm prerequisites and activate funding",
        body: "AWS funding (POC and MDF) requires active participation in ISV Accelerate or other AWS partner programs. Confirm eligibility before requesting. To activate funding in Suger: navigate to <strong>Funding</strong> in the left navigation. If funding is not yet enabled for your org, contact your Suger implementation team or Suger Support to activate it. For Salesforce users: ensure the <strong>Suger Integrator</strong> permission set is updated to include Funding object permissions.",
        checks: [
          "Is your organization eligible for AWS funding (active in ISV Accelerate or equivalent)?",
          "Is the Funding section visible in Suger Console?",
          "For Salesforce users: are Funding permissions added to the Suger Integrator permission set?",
        ],
        media: null,
      },
      {
        title: "Submit a funding request",
        body: "In Suger Console, navigate to <strong>Funding → New Request</strong>. Select the funding type: <strong>POC</strong> (Proof of Concept — for funding a customer evaluation) or <strong>MDF</strong> (Marketing Development Fund — for co-marketing activities). Fill in the required fields: customer details, opportunity details (linked ACE referral if applicable), funding amount requested, activity description, and expected outcomes. Submit the request — it goes to AWS for review.",
        link: {
          label: "Open Suger Console → Funding →",
          url: "https://console.suger.io",
        },
        checks: [
          "Is the funding type (POC vs. MDF) correct for this request?",
          "Is the request linked to an ACE co-sell opportunity where applicable?",
          "Is the activity description specific enough to meet AWS approval criteria?",
        ],
        media: null,
      },
      {
        title: "Track the funding lifecycle",
        body: "Monitor the funding request status in Suger → Funding. AWS funding follows a lifecycle: <strong>Submitted → Under Review → Approved / Rejected → Active → Claimed</strong>. If a request is flagged as <strong>ACTION_REQUIRED</strong>, you need to respond with additional information — check the request details for what's needed and respond promptly to avoid expiry.",
        checks: [
          "Is the funding request status visible in Suger → Funding?",
          "If ACTION_REQUIRED: did you respond with the requested information?",
          "If rejected: did you review the rejection reason before re-submitting?",
        ],
        media: null,
      },
      {
        title: "Submit and track cash claims",
        body: "Once approved funding activities are completed, submit a <strong>Cash Claim</strong> in Suger to receive the funds. Navigate to the approved funding request, click <strong>Submit Claim</strong>, attach proof of activity (receipts, event reports, etc.), and submit. Track claim status in the same Funding view. Monitor wallets and purchase orders to confirm disbursement.",
        link: {
          label: "Manage AWS funding requests (Help Center) →",
          url: "https://suger.help.usepylon.com/articles/6911165083",
        },
        checks: [
          "Is the claim submitted with all required proof of activity attached?",
          "Is the claim status visible in Suger → Funding?",
          "Did the disbursement appear in the funding wallet after approval?",
        ],
        media: null,
      },
    ],
  },
];
