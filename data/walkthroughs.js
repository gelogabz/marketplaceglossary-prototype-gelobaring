// ============================================================
// data/walkthroughs.js — Procedural step-by-step guides
// ============================================================
//
// Steps are aligned to the Suger product docs (doc.suger.io) listed in
// info-sources.md. Each walkthrough has a sourceUrl pointing
// to the primary doc.suger.io page. ClickUp (formerly the Suger
// Enablement Hub) is deprecated — do not reintroduce clickup.com links.
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
      "Sign up, get approved, invite your team with the right roles, and understand your real (parallel, not sequential) implementation timeline before integrations begin.",
    estimated: "~35 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/get-started/quick-start/",
    steps: [
      {
        title: "Sign up, turn on MFA, and create your organization",
        body: "Go to <a href='https://console.suger.io/login' target='_blank' rel='noopener'>console.suger.io/login</a> and sign up with your company email domain — not a personal email like Gmail. Suger uses Auth0 for authentication: sign up with email/password, or use <strong>Continue with Google</strong>, <strong>Continue with Microsoft</strong>, or Okta SSO (available on request). The account that creates the organization becomes its first <strong>Admin</strong>, and that email's domain becomes the organization's domain — only teammates with a matching email domain can be added later. Turn on <strong>multi-factor authentication</strong> during setup: scan the QR code in an authenticator app (Microsoft/Google Authenticator, or a password manager with OTP support like 1Password), or enter the setup key manually if scanning fails, then enter the 6-digit code. Make sure your device's clock is set to automatic date &amp; time — MFA codes are time-based and drift causes failures. You can check \"Remember this device for 30 days\" to skip MFA there.",
        terms: [{ name: "Suger Console", slug: "suger-console" }],
        link: {
          label: "Open Suger Console →",
          url: "https://console.suger.io/login",
        },
        checks: [
          "Did you sign up using your company email domain (not a personal email like Gmail)?",
          "Is MFA turned on, and is your device's clock set to automatic date & time?",
          "Do you know your organization's approved email domain — the one only matching teammates can join?",
        ],
        media: null,
      },
      {
        title: "Get your organization approved",
        body: "A new organization stays <strong>inactive</strong> until Suger approves it — you can't connect a marketplace or create offers until this is done. Email <strong>support@suger.io</strong> to request activation as soon as you've signed up; don't wait for it to happen automatically. Approval is usually within <strong>1 business day</strong>, and can take up to <strong>2</strong>. You'll get a confirmation once it's active.",
        checks: [
          "Have you emailed support@suger.io to request organization activation?",
          "Has approval come back within 1–2 business days? If not, follow up via your Slack/Teams channel with your Suger contact.",
        ],
        media: null,
      },
      {
        title: "Invite your team with the right roles",
        body: "In <strong>Settings → Users</strong>, click <strong>Add User</strong>, enter each teammate's professional email (must match your organization's approved domain), and pick a permission level. Suger emails an invitation link — this pre-approves the address but doesn't create the account; the invitee finishes signup themselves, and their status shows <strong>Pending</strong> until they do. Three built-in roles: <strong>Admin</strong> (Business Technology, Sales Ops, IT/CRM Admins — full access including user, org, API client, and webhook management), <strong>Editor</strong> (Sales, Partnerships, Alliances, Deal Desk — full access except user/org/API management), and <strong>Viewer</strong> (Finance, Accounting, Executives — read-only, with no access to Partner Management at all). If none of those fit, your organization can build <strong>custom roles</strong> with per-module Read/Write/Delete toggles (Billing, Co-Sell, Private Offers, etc.). Admins can reset a teammate's MFA or revoke access from the same Users screen.",
        terms: [{ name: "Suger Console", slug: "suger-console" }],
        checks: [
          "Does every invitee's email match your organization's approved domain?",
          "Are Admin/Editor/Viewer assigned by function (see the role table above), not just seniority?",
          "For anyone who needs a mix of access the built-in roles don't cover, has a custom role been considered?",
        ],
        media: null,
      },
      {
        title: "Get familiar with the Suger Console",
        body: "The console has more surface area than most people expect on day one — sixteen areas total. Start with the ones you'll actually touch during implementation: <strong>Home</strong> (daily starting point — marketplace health and revenue activity), <strong>Product</strong> (listings across AWS/Azure/GCP), <strong>Offer</strong> (private offers), <strong>Entitlement</strong> (the record of who actually bought what), <strong>Company</strong> / <strong>Contact</strong> (buyer accounts and the people tied to deals), <strong>Co-Sell</strong> (opportunities shared with cloud partners), <strong>Revenue</strong> (finance operations, analytics, reporting), and <strong>Settings</strong> (users, roles, integrations). <strong>Resale</strong> (CPPOs and channel partner arrangements), <strong>Usage Metering</strong>, <strong>Partner</strong>, <strong>Funding</strong> (AWS funding requests), <strong>Analytics</strong>, <strong>Workflows</strong>, and <strong>Tasks</strong> matter more once you're further along — worth knowing they exist, not worth a deep dive yet.",
        checks: [
          "Can your team navigate to Settings → Users and Settings → Integrations without help?",
          "Do key stakeholders know where Entitlement, Offer, and Revenue live?",
        ],
        media: null,
      },
      {
        title: "Set up a shared channel with your Suger contact",
        body: "Suger implementation teams typically coordinate over Slack or Microsoft Teams. Set up a shared channel with your Suger contact early — it's the fastest path for escalating blockers and getting unblocked on approval delays, integration questions, or anything else that comes up.",
        checks: [
          "Is a shared Slack or Teams channel active with your Suger implementation contact?",
          "Have you confirmed the escalation path for implementation blockers?",
        ],
        media: null,
      },
      {
        title: "Understand your real timeline — and that it's not sequential",
        body: "Suger's own timeline guidance is explicit: <strong>these tracks are not cumulative — most of the work below runs in parallel</strong>, not as a strict sequence of gated phases. For a net-new listing: AWS and Azure run about <strong>3 weeks</strong> end-to-end (product details ~1 hour, connecting Suger ~20 minutes, then ~2 weeks of marketplace review); GCP runs closer to <strong>4 weeks</strong> (~3 weeks of review). Migrating an existing listing is much faster — about <strong>5 days</strong> (connect Suger ~20 minutes, then ~3 days for a fulfillment-URL update to clear review). CRM and co-sell connectors are quick on their own: Salesforce ~1 hour, HubSpot ~10 minutes, AWS APN co-sell ~30 minutes. Map which of these tracks apply to you and start them in parallel — don't wait on one to finish before starting the next.",
        checks: [
          "Have you identified which tracks apply to you (which cloud(s), new listing vs. migration, which CRM/co-sell connectors)?",
          "Are the applicable tracks scheduled to run in parallel rather than one after another?",
        ],
        media: null,
      },
      {
        title: "Complete the CPQ intake form (if applicable)",
        body: "If you're configuring Suger's CPQ for private offer automation, your Suger implementation contact will send you a CPQ intake form. Complete and return it as early as possible — this form captures your pricing model, deal workflow, and CRM field mappings, and Suger can't build your CPQ configuration without it.",
        checks: [
          "Have you received and returned the CPQ intake form to your Suger implementation contact?",
          "Was it returned early enough to avoid blocking CPQ setup later?",
        ],
        media: null,
      },
      {
        title: "Next: connect your first cloud marketplace",
        body: "With your organization approved, team invited, and timeline mapped, the next real task is connecting a cloud marketplace account to Suger — Suger's own guidance calls this \"the real first setup task,\" since it unlocks products, offers, and billing. Pick your platform's Journey guide below and coordinate with whoever holds admin access on that cloud account.",
        link: {
          label: "See Integrations guides in the Journey hub →",
          url: "index.html#integrations",
        },
        checks: [
          "Do you know which cloud marketplace(s) you're connecting first?",
          "Does the person with admin access on that cloud account know they're needed next?",
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
    status: "for-review",
    sourceUrl: "https://doc.suger.io/integrations/slack/",
    steps: [
      {
        title: "Install the Suger App for Slack",
        body: "In Suger Console, go to <strong>Settings → Integrations</strong>. Find the <strong>Slack</strong> card and click <strong>Connect</strong>. During install, you'll also designate a Slack channel for notifications. You'll be redirected to Slack's OAuth authorization page — select the correct workspace, review the permissions, and click <strong>Allow</strong>. Back in Suger, click <strong>Verify</strong> to confirm the connection is active — connecting alone isn't the last step. This is the org-level install; individuals can separately connect their own Slack identity (a distinct user-level connection) if they want Suger to post as themselves rather than as the shared bot.",
        terms: [{ name: "Suger Console", slug: "suger-console" }],
        link: {
          label: "Open Suger Console → Settings → Integrations →",
          url: "https://console.suger.io",
        },
        checks: [
          "Did you select the correct Slack workspace during authorization?",
          "Did you click Verify after the OAuth redirect back to Suger?",
          "Is Suger now listed as an installed app in your Slack workspace (Settings → Apps)?",
        ],
        media: null,
      },
      {
        title: "Configure notification scopes and channel routing",
        body: "After authorization, configure which events route to which Slack channels. Suger's Slack notifications cover two entity types — <strong>OFFER</strong> and <strong>ENTITLEMENT</strong> — with action types CREATE, PENDING_START, CANCEL, PENDING_CANCEL, SUSPEND, REINSTATE, UPDATE, EXPIRE, and TEST. There's no separate \"co-sell\" or \"billing\" notification category for this integration — don't route based on categories that don't exist here. Route offer events to your sales or deal desk channel, and entitlement events (especially CANCEL and SUSPEND) to ops or engineering. For <strong>private channels</strong>, invite the bot first: type <code>/invite @Suger</code> in the channel before adding it as a destination.",
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
          label: "Configure Notifications (Suger Docs) →",
          url: "https://doc.suger.io/get-started/email-notification/",
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
    sourceUrl: "https://doc.suger.io/aws-marketplace/integration/",
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
        body: "In Suger Console, navigate to <strong>Settings → Integrations → AWS Marketplace</strong> and begin the setup wizard. Suger uses cross-account IAM roles — not access keys — for secure, credential-free access. The wizard provides a CloudFormation template. When prompted for an Account ID in the template, enter <strong>Suger's AWS Account ID</strong> — ask your Suger contact for this value, and do not enter your own AWS account ID. Check the acknowledgment box that allows IAM resource creation. Wait for the CloudFormation stack status to show <strong>CREATE_COMPLETE</strong> before moving on. Then paste the resulting Role ARN back into Suger.",
        terms: [{ name: "Integration", slug: "integration" }],
        link: {
          label: "Open Suger Console → Settings → Integrations →",
          url: "https://console.suger.io",
        },
        checks: [
          "Did you get Suger's AWS Account ID from your Suger contact and enter it in the CloudFormation template — NOT your own AWS account ID?",
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
      "Link your AWS seller account to APN, then connect Suger via IAM role so ACE co-sell opportunities sync automatically. Requires an IAM Administrator plus a Partner Central Alliance Lead or Cloud Administrator, and Salesforce or HubSpot as your CRM.",
    estimated: "~30 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/integrations/aws-partner-network-api/",
    steps: [
      {
        title: "Confirm prerequisites",
        body: "You'll need two people, not one: an <strong>IAM Administrator</strong> to handle the IAM role setup, and an <strong>AWS Partner Central Alliance Lead or Cloud Administrator</strong> with the authority to accept AWS Partner Network terms and link accounts. AWS ACE currently syncs with <strong>Salesforce or HubSpot only</strong> — confirm that's your CRM before starting.",
        terms: [
          {
            name: "APN Customer Engagements (ACE) — AWS",
            slug: "apn-customer-engagements-ace-—-aws",
          },
        ],
        path: "cosell-fundamentals",
        checks: [
          "Do you have an IAM Administrator and a Partner Central Alliance Lead / Cloud Administrator lined up?",
          "Is your CRM Salesforce or HubSpot? (No other CRM is supported for this integration.)",
        ],
        media: null,
      },
      {
        title: "Link your AWS seller account to APN",
        body: "This is the real first step, and it's more involved than a settings toggle: (1) identify the AWS account you'll link, (2) grant your team access to it, (3) start the linking process in AWS Partner Central, (4) sign in with that AWS account, (5) provide your legal business information, (6) assign IAM roles for the account, and (7) verify the linking status shows complete. Your Alliance Lead or Cloud Administrator should drive this — it establishes the business relationship AWS uses for co-sell before any technical connection to Suger happens.",
        link: {
          label: "AWS Partner Central →",
          url: "https://partnercentral.awspartner.com/",
        },
        checks: [
          "Has the AWS seller account been linked to APN through all 7 steps, ending in a verified linking status?",
          "Was legal business information submitted and accepted?",
        ],
        media: null,
      },
      {
        title: "Connect Suger via IAM role",
        body: "In Suger Console, go to <strong>Settings → Integrations → AWS ACE</strong> and click <strong>Create IAM role via CloudFormation</strong> — this redirects you to AWS CloudFormation to create the role. Once created, copy the role's ARN back into the <strong>Integration IAM Role ARN</strong> field in Suger and click <strong>Create</strong>, then <strong>Verify</strong>. This is the same IAM-role pattern used for the AWS Marketplace integration, not an OAuth login.",
        compare: "ACE",
        link: {
          label: "Open Suger Console →",
          url: "https://console.suger.io",
        },
        checks: [
          "Was the IAM role created via the CloudFormation link Suger provided?",
          "Does the integration show 'Verified' after entering the role ARN?",
        ],
        media: null,
      },
      {
        title: "Sync co-sell data and monitor the connection",
        body: "Go to <strong>Co-Sell → AWS ACE</strong> and click <strong>Inbound Sync</strong> to pull opportunity data from APN into Suger. Ongoing sync health is visible under <strong>Settings → Integrations → AWS ACE → Operations</strong> — check there if opportunities stop appearing. Field mapping for what syncs between your CRM and ACE is a separate configuration step your Suger contact will help set up (covered in the Co-Sell Field Mapping guide).",
        terms: [
          { name: "Outbound Referral", slug: "outbound-referral" },
          { name: "Inbound Referral", slug: "inbound-referral" },
        ],
        checks: [
          "Did clicking Inbound Sync pull existing ACE opportunities into Suger's Co-Sell view?",
          "Have you checked the Operations tab to confirm sync health shows no errors?",
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
      "Connect your Azure Marketplace publisher account to Suger through Azure AD app registration, API permissions, and Partner Center linking.",
    estimated: "~20–30 min",
    status: "complete",
    sourceUrl: "https://doc.suger.io/azure-marketplace/integration/",
    steps: [
      {
        title: "Confirm prerequisites",
        body: "Before starting, verify in Microsoft Partner Center: (1) valid login credentials and Partner Center linked to the Azure Portal, (2) enrollment in both <strong>Commercial Marketplace</strong> and the <strong>Microsoft AI Cloud Partner Program</strong>, (3) current legal documentation and approvals, plus completed <strong>payout</strong> and <strong>tax</strong> profiles — payout verification can take a few business days so set it up early, (4) the Azure AD Tenant ID matches between Partner Center and the Azure Portal, and (5) the person doing the setup is a <strong>Global Administrator</strong> in both the Azure tenant and Partner Center — without this role in both places, setup cannot complete. Also confirm Suger organization admin access.",
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
          "Does the person completing setup have Global Administrator access in BOTH the Azure tenant AND Partner Center?",
          "Is Partner Center enrollment complete: Commercial Marketplace AND Microsoft AI Cloud Partner Program?",
          "Are legal, tax, and payout profiles current and approved?",
          "Does the Azure AD Tenant ID match between Partner Center and the Azure Portal?",
          "Do you have Suger organization admin access?",
        ],
        media: null,
      },
      {
        title: "Register the Azure AD Application",
        body: "There are two setup paths. <strong>Path A — Quick Setup (recommended, ~2 min):</strong> in Azure Cloud Shell (which has Azure CLI, <code>jq</code>, and <code>curl</code> pre-installed), download and run Suger's setup script — <code>chmod +x setup-azure-app.sh && ./setup-azure-app.sh</code> — which creates the app, configures settings, grants permissions, generates a 365-day client secret, and verifies the auth flow automatically. It outputs <code>TENANT_ID</code>, <code>APP_ID</code>, and <code>CLIENT_SECRET</code>. To rotate credentials before expiry without downtime, re-run with <code>REUSE_EXISTING=true ./setup-azure-app.sh</code>. <strong>Path B — Manual Setup (~10 min):</strong> for customers who can't run scripts or are reusing an existing application. Register a new Azure AD Application with redirect URL <code>https://api.suger.cloud/public/integration/azure/authCode</code> and multitenant sign-in audience. Under Authentication, enable Implicit Grant: check both <strong>Access tokens</strong> and <strong>ID tokens</strong>. Under API permissions, add all three required Partner Center APIs — <strong>MicrosoftPartner</strong> (App ID <code>4990cffe-04e8-4e8b-808a-1175604b879f</code>) and two separate <strong>Microsoft Partner Center</strong> entries (App IDs <code>fa3d9a0c-3fb0-42cc-9193-47c7ecd2edbd</code> and <code>fabfbdc4-5751-471c-ac43-3826fa1afc31</code>) — selecting <code>user_impersonation</code> for each. Click <strong>Grant admin consent for {organization name}</strong> to activate all three.",
        link: {
          label: "Azure Portal — App registrations →",
          url: "https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",
        },
        checks: [
          "If using Path A: did the script output TENANT_ID, APP_ID, and CLIENT_SECRET successfully?",
          "If using Path B: is the redirect URL set to exactly https://api.suger.cloud/public/integration/azure/authCode?",
          "If using Path B: are BOTH Implicit Grant checkboxes (Access tokens AND ID tokens) enabled?",
          "If using Path B: are all THREE Partner Center API permissions added (MicrosoftPartner + 2 separate Microsoft Partner Center entries), not just one?",
          "Did you click 'Grant admin consent' so all three permissions show a green checkmark?",
        ],
        media: null,
      },
      {
        title: "Generate the client secret",
        body: "If you used the Quick Setup script, the client secret was already generated with a 365-day expiry — skip to the next step. If you're on the Manual Setup path, go to <strong>Certificates & secrets → New client secret</strong> and generate one with a 1-year (365-day) expiry. Copy the secret value immediately after creation — it is shown only once and cannot be retrieved later.",
        checks: [
          "Did you copy the client secret value immediately after creation?",
          "Is the secret set to the standard 365-day expiry?",
          "Is the secret stored securely — not in plain text or email?",
        ],
        media: null,
      },
      {
        title: "Register the application in Partner Center",
        body: "In Microsoft Partner Center, go to <strong>Account settings → User management → Azure AD applications</strong> and add the application. Assign it <strong>all five</strong> of these roles: <strong>Manager</strong>, <strong>Developer</strong>, <strong>Business Contributor</strong>, <strong>Finance Contributor</strong>, and <strong>Marketer</strong> — Suger's integration needs all five to function correctly, not just Manager. If you plan to use co-sell functionality, also assign the separate <strong>Referrals admin</strong> role in the Referrals workspace.",
        checks: [
          "Is the application registered under Partner Center → User management → Azure AD applications?",
          "Are ALL FIVE roles assigned — Manager, Developer, Business Contributor, Finance Contributor, AND Marketer?",
          "If you plan to use co-sell: is the Referrals admin role also assigned in the Referrals workspace?",
        ],
        media: null,
      },
      {
        title: "Create the integration in Suger Console",
        body: "In Suger Console, go to <strong>Settings → Integrations → Azure Marketplace</strong> and enter: <strong>Tenant ID</strong> (Azure AD Tenant ID), <strong>Client ID</strong> (Application ID), <strong>Client Secret</strong> (the generated secret value), and optionally <strong>User ID</strong> and <strong>User Secret</strong> (Microsoft Partner Center email and password). Click <strong>CREATE</strong> to proceed with OAuth verification.",
        link: {
          label: "Open Suger Console → Settings → Integrations →",
          url: "https://console.suger.io/settings?tab=integrations",
        },
        checks: [
          "Did you enter Tenant ID, Client ID, and Client Secret in Suger Console?",
          "Did you click CREATE and complete the OAuth verification step?",
          "Does the integration show 'Connected' (VERIFIED) in Suger?",
        ],
        media: null,
      },
      {
        title: "Complete Technical Configuration in Partner Center",
        body: "<strong>Critical:</strong> after the integration is created, go to your product's Technical Configuration in Partner Center and set: <strong>Azure AD Tenant ID</strong> and <strong>Azure AD Application ID</strong> (must exactly match the Suger integration), <strong>Landing Page URL</strong> — <code>https://api.suger.cloud/public/signup/azure/orgId/{orgId}</code>, and <strong>Connection Webhook</strong> — <code>https://api.suger.cloud/public/azure/fulfillment/webhook/orgId/{orgId}</code>. Mismatched values prevent Suger from retrieving entitlements. <strong>If you already have a live Azure Marketplace listing:</strong> reuse its existing Entra Application ID rather than creating a new one — retrieve it from the live listing's Technical Configuration, locate the application in the Azure Portal, configure authentication with Suger's redirect URI, add the same three Partner API permissions, register it in Partner Center with all five roles, generate new Client ID/Secret credentials, connect to Suger, then update the product's Technical Configuration with the Suger endpoints above.",
        checks: [
          "Do the Tenant ID and Application ID in Technical Configuration exactly match the Suger integration?",
          "Is the Landing Page URL set to the exact Suger-provided format (https://api.suger.cloud/public/signup/azure/orgId/{orgId})?",
          "Is the Connection Webhook set to the exact Suger-provided format (https://api.suger.cloud/public/azure/fulfillment/webhook/orgId/{orgId})?",
          "If migrating an existing listing: did you reuse its existing Entra Application ID instead of creating a new one?",
        ],
        media: null,
      },
      {
        title: "Manage critical lifecycle — rotate secrets before expiry",
        body: "Azure client secrets expire after 365 days. Set a calendar reminder to rotate before then. If you used the Quick Setup script, rotate with zero downtime by re-running <code>REUSE_EXISTING=true ./setup-azure-app.sh</code>; otherwise generate a new secret manually and update it in Suger Console under Settings → Integrations → Azure Marketplace. Optionally enable <strong>Entitlement End Soon Notification</strong> to get warned 10–60 days before expiry. Deleting the integration permanently removes all stored credentials with no recovery period, so confirm before doing so.",
        checks: [
          "Do you have a reminder set to rotate the client secret before its 365-day expiry?",
          "Is the rotation procedure (script re-run or manual) documented for your team?",
          "Is Entitlement End Soon Notification configured with a sensible warning window?",
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
      "Connect your GCP Marketplace producer account to Suger using keyless Workload Identity Federation — eight APIs, nine IAM roles, a linked service account, and a reports bucket, not just a credential-free login.",
    estimated: "~60 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/gcp-marketplace/integration/",
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
        body: "This integration needs more than a couple of APIs — enable all <strong>eight</strong> in your GCP project via the GCP Console or <code>gcloud</code> CLI: <strong>IAM API</strong>, <strong>Cloud Resource Manager API</strong>, <strong>IAM Service Account Credentials API</strong>, <strong>Security Token Service API</strong> (the last three power Workload Identity Federation itself — easy to miss since they're not marketplace-specific), <strong>Service Control API</strong>, <strong>Cloud Commerce Consumer Procurement API</strong>, <strong>Service Management API</strong>, and <strong>Service Usage API</strong>. The Suger Console setup wizard provides the exact <code>gcloud services enable</code> commands. Missing any one will cause integration failures, usually at the Workload Identity Federation step further down.",
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
          "Are all eight APIs enabled — including the three IAM/STS ones that WIF itself depends on, not just the marketplace-facing ones?",
          "Do all eight show 'Enabled' status in GCP APIs & Services?",
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
        body: "Grant the new service account all <strong>nine</strong> required IAM roles using the commands provided by the Suger setup wizard: <strong>Project Editor</strong>, <strong>Commerce Producer Admin</strong>, <strong>Commerce Price Management Private Offers Admin</strong>, <strong>Consumer Procurement Entitlement Manager</strong>, <strong>Consumer Procurement Order Administrator</strong>, <strong>Service Account Token Creator</strong> (this one's easy to skip and is specifically what lets Workload Identity Federation impersonate the account — without it, WIF authentication fails), <strong>Service Controller</strong>, <strong>Service Management Administrator</strong>, and <strong>Pub/Sub Editor</strong>.",
        link: {
          label: "GCP IAM Console →",
          url: "https://console.cloud.google.com/iam-admin/iam",
        },
        checks: [
          "Does the service account have all nine IAM roles assigned — including Service Account Token Creator?",
          "Did you verify the role assignments are saved in GCP IAM (not just in the terminal)?",
        ],
        media: null,
      },
      {
        title: "Set up Workload Identity Federation",
        body: "Suger uses <strong>Workload Identity Federation</strong> to authenticate from its AWS infrastructure to your GCP project without service account keys. Follow the Suger setup wizard to: (1) create a Workload Identity Pool named exactly <code>suger-wip</code> in your GCP project, (2) add an AWS provider named exactly <code>suger</code> to the pool using Suger's AWS Account ID, and (3) bind the Workload Identity Pool principal to the service account you created. The wizard provides the exact <code>gcloud</code> commands — the naming isn't cosmetic, Suger's backend expects those exact identifiers.",
        checks: [
          "Is the Workload Identity Pool named exactly suger-wip, and the provider named exactly suger?",
          "Is the Workload Identity principal bound to the Suger service account?",
        ],
        media: null,
      },
      {
        title: "Link your service account in the GCP Producer Portal",
        body: "In the GCP Producer Portal, authorize the service account (named <code>suger-integration@{PROJECT_ID}.iam.gserviceaccount.com</code>) for the Partner Procurement API, Pub/Sub, and Service Control integrations. This is a separate authorization step on Google's side, in addition to the IAM roles you already granted in GCP — skipping it is a common reason the integration connects but data doesn't flow.",
        checks: [
          "Is the suger-integration service account authorized in the Producer Portal for Partner Procurement API, Pub/Sub, and Service Control?",
        ],
        media: null,
      },
      {
        title: "Set up a reports storage bucket",
        body: "Create a Cloud Storage bucket to receive revenue and usage reports Google generates for your Marketplace listing, following the naming and permission pattern in Google's own producer guide. This is a separate piece of infrastructure from the service account/WIF setup above, and it's easy to overlook since nothing in the integration flow fails obviously if it's missing — you just won't get report files delivered.",
        checks: [
          "Is a reports storage bucket created and accessible to the Google service accounts that write to it?",
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
        body: "Before connecting, run the final output commands in GCP Cloud Shell to print your key identifiers. <strong>Save these values</strong> — you will need them when connecting in Suger Console: <strong>PROJECT_ID</strong>, <strong>PROJECT_NUMBER</strong>, <strong>Workload Identity Pool ID</strong> (<code>suger-wip</code>), <strong>Identity Provider ID</strong> (<code>suger</code>), <strong>Service Account Email</strong>, your <strong>Marketplace Partner/Provider ID</strong>, and the <strong>Report Bucket Name</strong> from the previous step. Then in Suger Console, go to <strong>Settings → Integrations → GCP Marketplace</strong>, click <strong>Connect Now</strong>, enter all the values from the final output, and run the validation. Once connected, submit a support ticket in Suger Console requesting integration whitelisting and final validation.",
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
    title: "Set Up GCP Co-Sell with Suger",
    category: "integrations",
    description:
      "GCP co-sell doesn't have its own separate connection step in Suger — it rides on your existing GCP Marketplace integration plus the generic CRM field mapping. GCP's co-sell feature set is also narrower than AWS's or Azure's; know the gaps before you rely on it.",
    estimated: "~10 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/cosell/",
    steps: [
      {
        title: "Confirm your GCP Marketplace integration is already connected",
        body: "There is no separate \"connect GCP for co-sell\" step, no Partner ID field, and no integrator-authorization flow to complete in Google's Partner Advantage portal — none of that is documented, and it doesn't appear to be a real Suger feature. What actually enables GCP co-sell is your existing <strong>GCP Marketplace</strong> integration in Suger (Settings → Integrations). If that's not connected yet, complete the GCP Marketplace guide first.",
        path: "cosell-fundamentals",
        checks: [
          "Is the GCP Marketplace integration already showing Connected/Verified in Suger?",
        ],
        media: null,
      },
      {
        title: "Configure CRM field mapping for GCP",
        body: "GCP co-sell fields are configured through the same generic Co-Sell Field Mapping flow used for AWS and Azure — there's no GCP-specific mapping screen. Follow the Co-Sell Field Mapping guide and select GCP as the target platform when mapping your CRM's Opportunity/Deal fields.",
        checks: [
          "Has GCP been configured as a target platform in your CRM's co-sell field mapping?",
        ],
        media: null,
      },
      {
        title: "Know GCP's reduced co-sell feature set before you rely on it",
        body: "GCP co-sell in Suger is documented as narrower than AWS or Azure: <strong>inbound sync is not supported</strong> for GCP at all, and GCP also lacks the funding-request workflow, Co-Sell Insights scoring, and automated sales-rep outreach that exist for AWS. Plan your GCP co-sell process around outbound sharing only — don't build a workflow that assumes inbound opportunities will appear automatically.",
        checks: [
          "Does your team know GCP co-sell is outbound-only, with no inbound sync?",
          "Have you adjusted expectations for funding requests and opportunity scoring, which aren't available for GCP?",
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
    sourceUrl: "https://doc.suger.io/snowflake-marketplace/integration/",
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
      "Connect Salesforce to Suger: install the app, manually connect both directions, create the Integration User, add the widget, and configure co-sell field mapping.",
    estimated: "~40 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/integrations/salesforce/",
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
          url: "https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3u00000RMskLEAT",
        },
        checks: [
          "Is the Suger for Salesforce app installed in your Salesforce org?",
          "Did the installation complete without errors?",
        ],
        media: null,
      },
      {
        title: "Connect Salesforce and Suger (manual, not OAuth)",
        body: "This is a manual, two-directional setup, not a single OAuth click. <strong>Salesforce → Suger:</strong> in Suger Console, go to <strong>Settings → Organization &amp; Users</strong> to get your Org ID, and <strong>Settings → API Client</strong> to generate an API Key. Then open the Suger app inside Salesforce, go to its Settings, and enter the Org ID, API Endpoint (<code>https://api.suger.cloud</code>), and API Key. <strong>Suger → Salesforce:</strong> in Suger Console, go to <strong>Settings → Integrations → Salesforce</strong>, click <strong>Connect Now</strong>, enter your Salesforce subdomain (e.g. <code>acme.my.salesforce.com</code>, checking Sandbox if applicable), click <strong>Create</strong>, then <strong>Verify</strong>.",
        link: {
          label: "Open Suger Console → Settings → Integrations →",
          url: "https://console.suger.io",
        },
        checks: [
          "Does the Suger app inside Salesforce have Org ID, API Endpoint, and API Key entered?",
          "Does Salesforce show as 'Verified' in Suger Console → Settings → Integrations?",
        ],
        media: null,
      },
      {
        title: "Create the Integration User and assign permission sets",
        body: "Suger does <strong>not</strong> auto-create this user — you create it manually: <strong>Setup → Users → New User</strong>, choose the <strong>Salesforce Integration License</strong> (recommended over a standard Salesforce License) with the <strong>\"Salesforce API Only System Integrations\"</strong> profile. Assign it the <strong>\"Suger Integrator (Salesforce Integration License)\"</strong> permission set, plus a separate custom permission set granting Read/View All on Account, Contact, Opportunity, and any fields you plan to map. Without both permission sets, syncs fail silently.",
        checks: [
          "Was the Integration User created manually with a Salesforce Integration License?",
          "Is 'Suger Integrator (Salesforce Integration License)' assigned, plus the custom Read/View-All permission set?",
        ],
        media: null,
      },
      {
        title: "Add the widget and grant end-user access",
        body: "In Salesforce, go to <strong>Setup → Object Manager → Opportunity → Lightning Record Pages</strong> and add the <strong>Suger Opportunity Quick Panel</strong> component (not \"Quick Panel\" — that's not its full name) to the page layout, then save and activate. This alone isn't enough for reps to use it: assign each end user one of <strong>\"Suger User – Marketplace\"</strong> (marketplace actions only), <strong>\"Suger User – Cosell\"</strong> (co-sell actions only), or <strong>\"Suger User\"</strong> (everything) — without one of these, the widget won't show its functionality even once it's on the page.",
        checks: [
          "Is the Suger Opportunity Quick Panel visible on the Salesforce Opportunity page layout?",
          "Has every rep who needs it been assigned Suger User – Marketplace / Cosell / (full) access?",
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
          label: "Configure Co-Sell Settings for Salesforce (Suger Docs) →",
          url: "https://doc.suger.io/cosell/cosell-outbound/",
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
    sourceUrl: "https://doc.suger.io/integrations/hubspot/",
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
        body: "With HubSpot connected, configure how HubSpot Deal properties map to cloud partner required fields. Start by creating a custom <strong>Referral State</strong> property on the HubSpot Deal object (see Suger Docs for the exact setup), then follow the <strong>Co-Sell Field Mapping</strong> walkthrough or navigate to <strong>Co-Sell → Settings → + New Config</strong> in Suger Console. After mapping, validate end-to-end: open a deal, click <strong>Share</strong>, and confirm all required fields populate in the Share modal without errors. Enable <strong>Auto-Enrich</strong> to automatically fill in missing company and contact data.",
        terms: [{ name: "Outbound Referral", slug: "outbound-referral" }],
        link: {
          label: "Configure Co-Sell Settings for HubSpot (Suger Docs) →",
          url: "https://doc.suger.io/cosell/cosell-outbound/",
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


  {
    slug: "outlook-org-integration",
    title: "Integrate Microsoft Outlook (Org-Level) with Suger",
    category: "integrations",
    description:
      "Connect an organization-wide Microsoft Outlook account to Suger via Azure AD app registration so Suger can send, receive, and manage email on your organization's behalf for workflow automation.",
    estimated: "~15 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/integrations/microsoft-outlook/",
    steps: [
      {
        title: "Confirm prerequisites",
        body: "Before starting, confirm: (1) you have <strong>Azure Active Directory admin access</strong> to approve org-wide app permissions (org-level setup uses Azure AD app registration, not a single user's mailbox), and (2) Suger organization admin access. Decide whether you need the <strong>org-level</strong> integration (organization-wide access, this walkthrough) or the <strong>user-level</strong> integration (a single person's personal Outlook account) — the two are separate integrations in Suger and are not interchangeable.",
        terms: [
          {
            name: "Microsoft Outlook Integration",
            slug: "microsoft-outlook-integration",
          },
          {
            name: "User Microsoft Outlook Integration",
            slug: "user-microsoft-outlook-integration",
          },
        ],
        checks: [
          "Do you have Azure Active Directory admin access to approve org-wide permissions?",
          "Do you have Suger organization admin access?",
          "Have you confirmed you need the org-level integration, not the user-level one?",
        ],
        media: null,
      },
      {
        title: "Start the connection from Suger Console",
        body: "In Suger Console, go to <strong>Settings → Integrations</strong>, find the <strong>Microsoft Outlook</strong> card, and click <strong>Connect Now</strong>. This launches the Microsoft OAuth 2.0 authentication flow for org-wide access.",
        link: {
          label: "Open Suger Console → Settings → Integrations →",
          url: "https://console.suger.io",
        },
        checks: [
          "Did clicking Connect Now redirect you to Microsoft's OAuth authorization page?",
        ],
        media: null,
      },
      {
        title: "Grant permissions and complete authorization",
        body: "On Microsoft's authorization screen, review the requested permissions for reading and sending email, then click <strong>Accept</strong>. Since this is the org-level flow, an Azure AD admin must approve the app registration for the organization rather than a single mailbox. You'll be redirected back to Suger Console showing a successful connection.",
        checks: [
          "Did an Azure AD admin approve the app registration (not just an individual user consent)?",
          "Does Suger Console show the connection as successful after the redirect?",
        ],
        media: null,
      },
      {
        title: "Verify the integration",
        body: "Back in Suger Console's Microsoft Outlook integration card, click <strong>Verify</strong> to confirm the connection is active. A successful check shows a <strong>Verified</strong> status. This integration wraps the Microsoft Graph Mail API, giving Suger workflows access to mail folders, messages (list, get, send, reply, update, move, delete), and drafts (create, update, send, delete).",
        checks: [
          "Does the integration show a Verified status after clicking Verify?",
        ],
        media: null,
      },
      {
        title: "Know the editing and deletion rules before you rely on this integration",
        body: "For security reasons, <strong>editing an existing Microsoft Outlook integration is not allowed</strong> — to change anything, you must delete it and recreate it from scratch. Deleting the integration removes all credentials and access tokens from Suger immediately and permanently, with no recovery. Deleting in Suger does <strong>not</strong> automatically revoke the Azure AD app's permissions — you must separately revoke the application permissions or delete the app registration in Azure Active Directory to fully cut off access.",
        checks: [
          "Does your team know that changes require delete-and-recreate, not in-place editing?",
          "Is it documented that deleting in Suger also requires revoking or removing the app registration in Azure AD?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "user-email-setup",
    title: "Connect Your Personal Email (Gmail or Outlook)",
    category: "integrations",
    description:
      "Connect your own Gmail or Outlook inbox to Suger at the user level, so automated emails send from your personal mailbox instead of a shared org address.",
    estimated: "~5 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/integrations/google-mail/",
    steps: [
      {
        title: "Confirm you want a user-level connection, not org-level",
        body: "Suger supports two levels for both Gmail and Outlook: an <strong>org-level</strong> connection (one shared mailbox — e.g. sales@company.com — used by every workflow in your organization, set up by an admin) and a <strong>user-level</strong> connection (your own personal inbox, used only for your own marketplace deals). This walkthrough is for the user-level connection. If you're trying to set up a shared corporate sender for the whole org instead, that's a separate admin-only flow under <strong>Settings → Integrations</strong>, not the one below.",
        terms: [
          { name: "Gmail Integration", slug: "gmail-integration" },
          {
            name: "Microsoft Outlook Integration",
            slug: "microsoft-outlook-integration",
          },
        ],
        checks: [
          "Are you connecting your own personal inbox, not a shared/corporate mailbox?",
          "Do you know which provider you're connecting — Gmail or Outlook?",
        ],
        media: null,
      },
      {
        title: "Open User Integrations under your profile settings",
        body: "In the Suger Console, go to the <strong>User Integrations</strong> section under your profile settings (this is separate from the org-wide <strong>Settings → Integrations</strong> page). Locate the <strong>Google Mail</strong> or <strong>Microsoft Outlook</strong> card, depending on which provider you use, and click <strong>Connect Now</strong>.",
        terms: [{ name: "Suger Console", slug: "suger-console" }],
        link: {
          label: "Open Suger Console →",
          url: "https://console.suger.io",
        },
        checks: [
          "Did you find the card under User Integrations (profile settings), not the org-level Integrations page?",
          "Did clicking Connect Now redirect you to your provider's sign-in page?",
        ],
        media: null,
      },
      {
        title: "Authorize the connection via OAuth",
        body: "You'll be redirected to your provider's own sign-in page — Google for Gmail, Microsoft for Outlook. <strong>Select the account you want to use for your marketplace deals</strong> and review the permissions requested. Click <strong>Allow</strong> (Google) or <strong>Accept</strong> (Microsoft) to grant Suger access. Suger never sees, asks for, or stores your email password — this is a token-based OAuth 2.0 handshake, and the grant covers reading and sending email related to your marketplace workflows.",
        terms: [
          { name: "User Gmail Integration", slug: "user-gmail-integration" },
          {
            name: "User Microsoft Outlook Integration",
            slug: "user-microsoft-outlook-integration",
          },
        ],
        checks: [
          "Did you sign in with your own personal mailbox, not a shared/group address?",
          "Did you review the requested permissions before clicking Allow/Accept?",
        ],
        media: null,
      },
      {
        title: "Verify the connection",
        body: "After authorizing, you'll be redirected back to the Suger Console. Find your new integration card and click <strong>Verify</strong>. A <strong>Verified</strong> status confirms Suger is ready to send and manage email on your behalf. If the card doesn't show Verified, disconnect and repeat the authorization step rather than troubleshooting a half-connected state.",
        checks: [
          "Does the integration card show a Verified status after clicking Verify?",
          "If not verified, did you redo the OAuth authorization rather than leaving it half-connected?",
        ],
        media: null,
      },
      {
        title: "Know how to revoke access later",
        body: "Deleting the integration inside Suger does <strong>not</strong> automatically revoke the permission grant on the provider's side. To fully disable access: for Gmail, go to <strong>Google Account → Security → Third-party apps &amp; services</strong>, find Suger, and click <strong>Remove access</strong>. For Outlook, go to <strong>Microsoft Account → Privacy → Apps and services</strong>, find Suger, and click <strong>Remove these permissions</strong>. Editing an existing connection isn't supported for security reasons — if your token expires or you need to change accounts, delete the integration in Suger and reconnect from scratch.",
        checks: [
          "Do you know where to revoke Suger's access on your provider's side (not just delete it in Suger)?",
          "If switching from a personal to a different account, did you delete the old integration first?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "ai-integrations",
    title: "Connect an AI Model Provider (BYOK) to Suger",
    category: "integrations",
    description:
      "Bring your own API key from OpenAI, Anthropic, Google Gemini, or another supported provider to power Suger's AI features — billed directly to your provider account instead of Suger.",
    estimated: "~10 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/integrations/openai/",
    steps: [
      {
        title: "Understand the BYOK model before connecting",
        body: "Suger's AI features (workflow automation, intelligent suggestions, natural language processing) can run on a model provider key you supply — Bring Your Own Key (BYOK) — instead of Suger's own pooled key. BYOK changes <strong>who charges you for the tokens</strong>: usage is billed directly to your account with the provider (OpenAI, Anthropic, Google Gemini, or one of the additional providers below), not to Suger. Suger still charges its own flat per-unit platform fee on top, and a <strong>zero credit balance on either side will pause AI requests</strong> — so BYOK doesn't remove the need to monitor your Suger credit balance, it adds a second balance to watch.",
        terms: [
          { name: "OpenAI Integration", slug: "openai-integration" },
          { name: "Anthropic Integration", slug: "anthropic-integration" },
          { name: "Google Gemini Integration", slug: "google-gemini-integration" },
        ],
        checks: [
          "Do you understand that BYOK bills token usage to the provider, not Suger, while Suger's flat fee still applies?",
          "Does your team know a zero balance on either the provider side or the Suger side will pause AI requests?",
        ],
        media: null,
      },
      {
        title: "Generate an API key from your chosen provider",
        body: "Generate an API key from the provider's own console (e.g. OpenAI's platform dashboard) before starting the connection in Suger — Suger does not create provider accounts or keys for you. For <strong>OpenAI specifically</strong>, decide between two connection levels: <strong>Org-level</strong>, which grants org-wide access to GPT models with usage billed to the organization, or <strong>User-level (Codex)</strong>, which grants personal workspace access for an individual developer via OAuth authorization rather than a pasted key. Most teams connecting AI features for shared Suger workflows want org-level.",
        checks: [
          "Have you generated (or located) a live API key in the provider's own console?",
          "For OpenAI, have you decided between org-level (shared, billed to the org) and user-level Codex (individual, OAuth-based) access?",
        ],
        media: null,
      },
      {
        title: "Connect the key in Suger Console",
        body: "In Suger Console, go to <strong>Settings → Integrations</strong> and find the card for your provider — <strong>OpenAI</strong>, <strong>Anthropic</strong>, or <strong>Google Gemini</strong> are the primary three, with <strong>Baseten</strong>, <strong>DeepInfra</strong>, <strong>Fireworks AI</strong>, <strong>OpenRouter</strong>, and <strong>Together AI</strong> also supported as BYOK connections. Click <strong>Connect</strong>. For OpenAI org-level, paste your API key and, optionally, your OpenAI organization ID. For OpenAI user-level (Codex), you'll instead be redirected to authorize through OpenAI's own login and grant access to your Codex workspace before returning to Suger to confirm the connection. The pattern is the same across all eight providers: supply credentials from that provider's console, authorize, and confirm the connection shows as active in Suger.",
        terms: [
          { name: "OpenAI Integration", slug: "openai-integration" },
          { name: "Anthropic Integration", slug: "anthropic-integration" },
          { name: "Google Gemini Integration", slug: "google-gemini-integration" },
          { name: "Baseten Integration", slug: "baseten-integration" },
          { name: "DeepInfra Integration", slug: "deepinfra-integration" },
          { name: "Fireworks AI Integration", slug: "fireworks-ai-integration" },
          { name: "OpenRouter Integration", slug: "openrouter-integration" },
          { name: "Together AI Integration", slug: "together-ai-integration" },
        ],
        link: {
          label: "Open Suger Console → Settings → Integrations →",
          url: "https://console.suger.io",
        },
        checks: [
          "Does the provider's integration card in Suger Console → Settings → Integrations show as connected/active?",
          "If using OpenAI org-level, did you enter the organization ID (if your OpenAI account has one)?",
          "If using OpenAI Codex user-level, did you complete the OAuth authorization and return to confirm in Suger?",
        ],
        media: null,
      },
      {
        title: "Rotate or remove the key when needed",
        body: "There is no in-place key edit: to change an API key, you must <strong>delete the existing integration and recreate it</strong> with the new key — plan for a short gap in AI feature availability during rotation. To fully disconnect a provider, delete the integration from Suger Console; for a Codex (OAuth) connection, also revoke Suger's access from the provider's own account settings, since removing it from Suger alone does not always revoke the external authorization.",
        checks: [
          "Does your team know that rotating a key means delete-and-recreate, not an in-place edit?",
          "For OAuth-based connections (e.g. Codex), do you know to also revoke access on the provider's side, not just in Suger?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "oauth2-integration",
    title: "Connect a Custom Service via Generic OAuth 2.0",
    category: "integrations",
    description:
      "Connect any external service that doesn't have a purpose-built Suger connector, using the generic OAuth 2.0 integration and one of its three supported grant types.",
    estimated: "~15 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/integrations/oauth2-integration/",
    steps: [
      {
        title: "Confirm the provider speaks OAuth 2.0 and pick a grant type",
        body: "The generic <strong>OAuth 2.0 Integration</strong> is a fallback for connecting a service that has no purpose-built Suger connector — check <strong>Settings → Integrations</strong> first to confirm one doesn't already exist. Before starting, decide which OAuth 2.0 grant type matches your provider: <strong>Client Credentials</strong> for server-to-server sync with no user login (needs a Client ID, Client Secret, and Token URL); <strong>Authorization Code</strong> for user-authorized access requiring manual approval (needs a Redirect URI plus an Authorization URL and Client ID/Secret); or <strong>Refresh Token</strong> for long-term access using a token you already have (needs the Refresh Token and Client ID/Secret). Have your provider's developer/API settings page open — you'll need to register credentials there.",
        terms: [
          { name: "OAuth 2.0 Integration", slug: "oauth-2.0-integration" },
          { name: "Integration", slug: "integration" },
        ],
        link: {
          label: "Open Suger Console → Settings → Integrations →",
          url: "https://console.suger.io",
        },
        checks: [
          "Have you confirmed no dedicated Suger connector already exists for this service?",
          "Do you know which grant type (Client Credentials / Authorization Code / Refresh Token) your provider supports?",
        ],
        media: null,
      },
      {
        title: "Whitelist the callback URL (Authorization Code flow only)",
        body: "If you're using the <strong>Authorization Code</strong> grant type, register Suger's redirect URI in your provider's API/app settings before configuring the integration — the connection will fail otherwise: <code>https://api.suger.cloud/public/integration/generic_oauth/callback</code>. Skip this step entirely for Client Credentials or Refresh Token grants, which don't involve a browser redirect.",
        checks: [
          "If using Authorization Code, has the callback URL been added to your provider's allowed redirect URIs?",
        ],
        media: null,
      },
      {
        title: "Configure the connection in Suger Console",
        body: "In Suger Console, go to <strong>Settings → Integrations</strong>, find the <strong>OAuth 2.0</strong> card, and click <strong>Connect Now</strong>. Fill in: a <strong>Label</strong> (friendly name so you can identify this connection later), your chosen <strong>Grant Type</strong>, the <strong>API Base URL</strong>, <strong>Token URL</strong>, <strong>Client ID</strong>, and <strong>Client Secret</strong>. <strong>Scope</strong> and <strong>Tenant ID</strong> are optional — set them only if your provider requires them. Double-check the Token URL and Client ID/Secret against your provider's developer console before saving; a typo here is the most common cause of a failed first connection.",
        terms: [{ name: "OAuth 2.0 Integration", slug: "oauth-2.0-integration" }],
        checks: [
          "Are the Client ID and Client Secret copied exactly from your provider's developer console (no extra whitespace)?",
          "Does the Token URL (and Authorization URL, if applicable) match what your provider's docs specify?",
        ],
        media: null,
      },
      {
        title: "Save and verify the connection",
        body: "When you save, Suger immediately tests the credentials against the provider. If the test succeeds, your Client Secret and any tokens are stored in Suger's AWS Secrets Manager vault — not in the database — and Suger automatically refreshes tokens within 5 minutes of expiration, so you shouldn't need to manually reconnect once it's working. If the test fails, re-check the grant type, URLs, and credentials from the previous step.",
        checks: [
          "Did the credential test succeed on save?",
          "Is the integration now showing as connected in Settings → Integrations?",
        ],
        media: null,
      },
      {
        title: "Know the removal process",
        body: "To remove the integration, click the trash icon in Suger Console — this permanently wipes the stored secrets and tokens from both the database and the AWS vault. This does <strong>not</strong> revoke access on the provider's side; you must separately revoke or delete the corresponding app/credential in your provider's developer console if you want to fully cut off access.",
        checks: [
          "If disconnecting, have you also revoked the credential on the provider's side (not just deleted it in Suger)?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "chargebee-integration",
    title: "Integrate Chargebee with Suger",
    category: "integrations",
    description:
      "Connect your Chargebee subscription billing account to Suger via an org-level API key to sync subscription and billing data into marketplace and co-sell workflows.",
    estimated: "~10 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/integrations/chargebee/",
    steps: [
      {
        title: "Gather your Chargebee credentials",
        body: "Before connecting, get two things from your Chargebee dashboard: your <strong>Site Name</strong> (the unique identifier in your Chargebee URL, e.g. <code>yoursite</code> in <code>yoursite.chargebee.com</code>) and a <strong>Full-Access API Key</strong>. Generate the API key from Chargebee under API Keys settings — Suger's org-level connection requires full access, not a read-only or restricted key.",
        terms: [{ name: "Chargebee Integration", slug: "chargebee-integration" }],
        checks: [
          "Do you have your Chargebee Site Name on hand?",
          "Have you generated a Full-Access API Key (not a restricted or read-only key)?",
        ],
        media: null,
      },
      {
        title: "Connect Chargebee in Suger Console",
        body: "In Suger Console, go to <strong>Settings → Integrations</strong>, find the <strong>Chargebee</strong> card, and click <strong>Connect</strong>. Enter your <strong>Site Name</strong> and paste your <strong>API Key</strong> into the connection form, then click <strong>Create</strong> to verify and establish the connection.",
        terms: [{ name: "Suger Console", slug: "suger-console" }],
        link: {
          label: "Open Suger Console → Settings → Integrations →",
          url: "https://console.suger.io",
        },
        checks: [
          "Did the connection verify successfully after clicking Create?",
          "Does the Chargebee card in Suger Console now show as connected?",
        ],
        media: null,
      },
      {
        title: "Know the update and removal limits",
        body: "Suger does not allow editing an active Chargebee connection's credentials for security reasons. To rotate an API key or change the site name, you must <strong>remove the existing integration and reconnect</strong> with the new credentials — there's no in-place edit. To remove it entirely, use the trash icon on the Integrations page; this permanently deletes the stored credentials from Suger's vault but does <strong>not</strong> affect anything in Chargebee itself.",
        checks: [
          "Does your team know that rotating the API key requires disconnect-and-reconnect, not an edit?",
          "Is it clear that deleting the integration in Suger has no effect on your Chargebee account or data?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "netsuite-integration",
    title: "Integrate Oracle NetSuite with Suger",
    category: "integrations",
    description:
      "Connect your Oracle NetSuite ERP to Suger using token-based authentication so marketplace revenue, invoices, and entitlement data sync into your financial system for automated reconciliation.",
    estimated: "~25 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/integrations/netsuite/",
    steps: [
      {
        title: "Confirm prerequisites",
        body: "You'll need <strong>Administrator access</strong> within NetSuite, plus your <strong>NetSuite Account ID</strong> — find it in your NetSuite browser URL (formatted as <code>1234567_SB1</code> for a sandbox account or <code>1234567</code> for production). You'll also need Suger organization admin access to complete the connection in Suger Console.",
        terms: [{ name: "NetSuite Integration", slug: "netsuite-integration" }],
        checks: [
          "Do you have NetSuite Administrator access?",
          "Have you located your NetSuite Account ID and noted whether it's sandbox or production?",
        ],
        media: null,
      },
      {
        title: "Enable SuiteCloud web services in NetSuite",
        body: "In NetSuite, go to <strong>Setup → Company → Enable Features</strong> and open the <strong>SuiteCloud</strong> tab. Under <strong>SuiteTalk (Web Services)</strong>, enable both <strong>SOAP</strong> and <strong>REST</strong> options. Under <strong>Manage Authentication</strong>, verify <strong>Token-Based Authentication</strong> is checked. Click <strong>Save</strong>.",
        checks: [
          "Are both SOAP and REST Web Services enabled under SuiteTalk?",
          "Is Token-Based Authentication checked and saved?",
        ],
        media: null,
      },
      {
        title: "Create the integration record and generate client credentials",
        body: "Go to <strong>Setup → Integration → Manage Integrations → New</strong>. Name the record <strong>Suger Connector</strong>, select <strong>Token-Based Authentication</strong>, and make sure both <strong>TBA: IssueToken Endpoint</strong> and <strong>TBA: Authorization Flow</strong> are <strong>disabled</strong>. Click <strong>Save</strong> — NetSuite displays your <strong>Consumer Key</strong> (Client ID) and <strong>Consumer Secret</strong> (Client Secret) only once, so copy both immediately into a secure location.",
        checks: [
          "Did you name the integration record 'Suger Connector' with Token-Based Authentication selected?",
          "Are both TBA: IssueToken Endpoint and TBA: Authorization Flow disabled?",
          "Did you save the Consumer Key and Consumer Secret before navigating away?",
        ],
        media: null,
      },
      {
        title: "Generate an access token",
        body: "From the NetSuite Home dashboard, open the <strong>Settings</strong> portlet and select <strong>Manage Access Tokens</strong>, then click <strong>New Token</strong>. Choose the <strong>Suger Connector</strong> application, select the appropriate user and role, and save. Copy the resulting <strong>Token ID</strong> and <strong>Token Secret</strong> immediately — like the Consumer credentials, they're shown only once.",
        checks: [
          "Did you select the Suger Connector application when creating the token?",
          "Did you copy both the Token ID and Token Secret before leaving the page?",
        ],
        media: null,
      },
      {
        title: "Connect NetSuite in Suger Console",
        body: "In Suger Console, go to <strong>Settings → Integrations</strong>, find the <strong>Oracle NetSuite</strong> card, and click <strong>Connect</strong>. Enter your <strong>Account ID</strong>, <strong>Client ID</strong> (Consumer Key), <strong>Client Secret</strong> (Consumer Secret), <strong>Token ID</strong>, and <strong>Token Secret</strong>, then click <strong>Create</strong>. A <strong>Verified</strong> status confirms the connection succeeded. Note: the connection can't be edited later — to rotate credentials, delete the integration and reconnect with a new token, and remember that deleting from Suger Console does not automatically revoke the token on the NetSuite side.",
        terms: [{ name: "Revenue", slug: "revenue" }, { name: "Invoice", slug: "invoice" }],
        link: {
          label: "Open Suger Console → Settings → Integrations →",
          url: "https://console.suger.io",
        },
        checks: [
          "Did all five fields (Account ID, Client ID, Client Secret, Token ID, Token Secret) get entered correctly?",
          "Does the integration show a 'Verified' status after clicking Create?",
          "Does your team know that editing isn't supported — credential rotation requires delete-and-reconnect?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "quickbooks-integration",
    title: "Integrate QuickBooks with Suger",
    category: "integrations",
    description:
      "Connect QuickBooks Online to Suger via OAuth so marketplace invoices and billing data sync automatically into your accounting ledger.",
    estimated: "~15 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/integrations/quickbooks/",
    steps: [
      {
        title: "Create a QuickBooks Developer App",
        body: "In the <a href='https://developer.intuit.com/' target='_blank' rel='noopener'>QuickBooks Developer Portal</a>, create an app for the Company Account you want to sync. In the app's settings, set the <strong>Redirect URI</strong> to exactly <code>https://api.suger.cloud/public/integration/quickbooks/oauthCallback</code> — Suger's OAuth callback will fail if this doesn't match. Then open <strong>Keys & credentials</strong> and copy the <strong>Client ID</strong> and <strong>Client Secret</strong>. Treat these as sensitive — anyone with them can authorize access to your QuickBooks data.",
        terms: [{ name: "Suger Console", slug: "suger-console" }],
        link: {
          label: "QuickBooks Developer Portal →",
          url: "https://developer.intuit.com/",
        },
        checks: [
          "Did you set the Redirect URI to the exact Suger callback URL, with no trailing changes?",
          "Have you copied the Client ID and Client Secret somewhere secure (not shared in plaintext chat)?",
        ],
        media: null,
      },
      {
        title: "Connect QuickBooks in the Suger Console",
        body: "In Suger Console, go to <strong>Settings → Integrations</strong> and click <strong>Connect</strong> on the QuickBooks card. Paste in the Client ID and Client Secret from the previous step. You'll be redirected to sign in to QuickBooks — select the specific <strong>Company Account</strong> you want Suger to sync with (the integration works at the organization level, with credentials shared across your team). Review the requested permissions and authorize the connection.",
        link: {
          label: "Open Suger Console → Settings → Integrations →",
          url: "https://console.suger.io",
        },
        checks: [
          "Did you select the correct Company Account during the QuickBooks sign-in step?",
          "Did the authorization redirect you back to Suger Console without an error?",
        ],
        media: null,
      },
      {
        title: "Verify the connection",
        body: "Back on the QuickBooks integration card in Suger Console, click <strong>Verify</strong>. Suger samples recent data to confirm the pipeline is active. Once confirmed, the card's status changes to <strong>Verified</strong> — this is the signal that the sync is actually working, not just that OAuth succeeded.",
        checks: [
          "Does the QuickBooks integration card show a Verified status, not just Connected?",
          "If verification fails, have you double-checked the Company Account selected in the OAuth step?",
        ],
        media: null,
      },
      {
        title: "Understand what syncs, and how to manage the connection",
        body: "The integration syncs <strong>invoices and related billing data</strong> from Suger into your QuickBooks ledger, reducing manual accounting entry for marketplace revenue. Two things to know before you rely on this: (1) you <strong>cannot edit credentials</strong> in place — if your Client ID/Secret change or rotate, delete the integration and reconnect with the new credentials; (2) <strong>disconnecting stops future syncs but does not remove data</strong> already written to QuickBooks.",
        terms: [
          { name: "Invoice", slug: "invoice" },
          { name: "Revenue", slug: "revenue" },
          { name: "NetSuite Integration", slug: "netsuite-integration" },
        ],
        checks: [
          "Does your finance team know that credential changes require delete-and-reconnect, not an edit?",
          "Is it clear to your team that disconnecting stops future syncs but keeps historical data in QuickBooks?",
        ],
        media: null,
      },
    ],
  },

  {
    slug: "bigquery-integration",
    title: "Integrate Google BigQuery with Suger",
    category: "integrations",
    description:
      "Connect a GCP service account to Suger so Suger can query and manage data in your Google BigQuery data warehouse for custom automation, usage metering, and financial reporting.",
    estimated: "~15 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/integrations/bigquery/",
    steps: [
      {
        title: "Confirm prerequisites",
        body: "This is an <strong>organization-level integration only</strong> — there is no user-level BigQuery connection option, since it's meant for company-wide data analytics access rather than a single person's credentials. Before starting, confirm you have: (1) an active GCP project with the <strong>BigQuery API enabled</strong>, and (2) someone who can create a GCP service account and assign it IAM roles.",
        terms: [{ name: "Google BigQuery Integration", slug: "google-bigquery-integration" }],
        checks: [
          "Is the BigQuery API enabled on the GCP project you plan to connect?",
          "Do you have someone available who can create a service account and assign IAM roles in that project?",
        ],
        media: null,
      },
      {
        title: "Create a dedicated service account and assign a BigQuery role",
        body: "In the GCP Console, create a <strong>dedicated service account</strong> for this integration — don't reuse one tied to another workload, since Suger's access should be scoped and auditable on its own. Grant it one of these roles depending on how much access Suger needs: <strong>BigQuery Admin</strong> (full management), <strong>BigQuery User</strong> (run queries, manage jobs), or <strong>BigQuery Data Viewer</strong> (read-only). Start with the narrowest role that supports your use case — you can widen it later.",
        link: {
          label: "Google Cloud Console →",
          url: "https://console.cloud.google.com/iam-admin/serviceaccounts",
        },
        checks: [
          "Did you create a new, dedicated service account rather than reusing an existing one?",
          "Does the assigned role (Admin / User / Data Viewer) match the level of access Suger actually needs?",
        ],
        media: null,
      },
      {
        title: "Generate a JSON key and connect it in Suger Console",
        body: "From the service account's <strong>Keys</strong> tab in GCP, generate a new key and download it as <strong>JSON</strong>. In Suger Console, go to <strong>Settings → Integrations → BigQuery</strong> and enter the service account's email address, then upload the JSON key file. Treat the downloaded key like a credential — store it securely and don't commit it anywhere.",
        terms: [{ name: "Suger Console", slug: "suger-console" }],
        link: {
          label: "Open Suger Console → Settings → Integrations →",
          url: "https://console.suger.io",
        },
        checks: [
          "Did you download the service account key in JSON format (not P12)?",
          "Does the service account email entered in Suger match the one the key belongs to?",
        ],
        media: null,
      },
      {
        title: "Verify the connection with a test query",
        body: "Once connected, Suger exposes four BigQuery tools to its automation and AI agent layer: <code>list_datasets</code>, <code>list_tables</code>, <code>get_table_schema</code>, and <code>run_query</code>. Confirm the connection works by listing datasets or tables from Suger — if the service account was granted the right role and the project has BigQuery API access enabled, you should see your existing datasets returned.",
        checks: [
          "Can Suger successfully list datasets or tables from your BigQuery project?",
          "Are there any permission errors, and if so, does the service account role need to be widened?",
        ],
        media: null,
      },
      {
        title: "Know the edit and removal process",
        body: "BigQuery connections can't be edited in place — to change the service account or key, you must <strong>delete and recreate</strong> the integration in Suger. Deletion in Suger is permanent and does <strong>not</strong> automatically revoke GCP access: you must manually delete or disable the service account (or its key) in GCP Console as a separate step to fully cut off access.",
        checks: [
          "Does your team know that changing the connected service account requires delete + recreate, not an in-place edit?",
          "If you ever disconnect this integration, is manual key/service-account revocation in GCP part of your offboarding checklist?",
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
      "Create, configure, test, and publish an AWS Marketplace product listing through Suger — from product draft through AWS review (2-4 weeks) and go-live.",
    estimated: "~30 min hands-on (plus 2-4 weeks of AWS review)",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/aws-marketplace/list-product/",
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
        body: "Fill in all required Basic Information fields: <strong>Product Name</strong> (public-facing, shown in AWS Marketplace search), <strong>Short Description</strong> (up to 1,000 characters, shown in search results), <strong>Long Description</strong> (detailed product overview), <strong>Highlights</strong> (1–3 required bullets), <strong>Logo</strong> (PNG or JPG, white or transparent background, between <strong>120 and 640 pixels</strong> in a 1:1 or 2:1 ratio — not a fixed 120×80), <strong>Support Contact</strong> email, <strong>Categories</strong> (up to 3), <strong>Keywords</strong>, up to 3 <strong>Resources</strong> files, and your <strong>EULA</strong> selection (AWS Standard Contract or a custom PDF). The Company Name must match your AWS Public Profile. Review product descriptions carefully before submitting: AWS rejects listings with <strong>competitive claims</strong> (naming competitors), <strong>hyperbolic language</strong> (best, industry-leading, revolutionary), <strong>unverifiable statistics</strong> (performance or cost claims that can't be substantiated), or <strong>missing dependency disclosures</strong> (if your product requires another product to function). Use neutral, factual language.",
        checks: [
          "Does the Company Name match your AWS Public Profile?",
          "Is the product name clear and unique in AWS Marketplace?",
          "Do product descriptions avoid: named competitor comparisons, terms like 'best'/'industry-leading', unverifiable performance claims, undisclosed product dependencies?",
          "Is the logo within the 120–640px range (1:1 or 2:1 ratio) — not assumed to be a fixed size?",
          "Have Highlights and an EULA selection been completed — both are required, not optional?",
        ],
        media: null,
      },
      {
        title: "Complete Pricing Information",
        body: "Define your pricing model. Common AWS SaaS options: <strong>SaaS Subscription</strong> (monthly/annual flat fee), <strong>SaaS Contract</strong> (upfront contract with optional usage), <strong>Usage-Based</strong> (pay-per-use metered dimensions). For usage-based pricing, define each dimension: unit name (e.g., 'API calls'), unit description, and price per unit. <strong>Set every pricing dimension to $0.01 before testing</strong> — this is required for test purchases. Replace with your production pricing only when you're ready to publish. Note: pricing isn't permanently locked once public, but <strong>price increases require a 90-day notice period</strong> — decreases are easier, but plan increases well ahead.",
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
        body: "Before submitting, confirm your <strong>Fulfillment URL</strong> is entered in <strong>both</strong> the AWS Marketplace Management Portal and in the product in Suger Console — it must be in both places. Click <strong>Save and Preview</strong> to see how your listing will appear in AWS Marketplace. Review the buyer-facing view carefully. Once satisfied, click <strong>Create</strong> to submit the listing to AWS for review. This first review (Draft → Limited) doesn't have a stated timeline; the review that follows publishing to Public typically takes <strong>2–4 weeks for SaaS</strong> or <strong>7–10 business days for Professional Services</strong> — plan around that, not a few days.",
        checks: [
          "Is the Fulfillment URL entered in BOTH the AWS Marketplace Management Portal AND in the product in Suger Console?",
          "Did you preview the listing and confirm all fields look correct?",
          "Is the listing submitted to AWS for review?",
          "Does your timeline planning reflect 2-4 weeks (SaaS) or 7-10 business days (Professional Services) for the Publish review, not a few days?",
        ],
        media: null,
      },
      {
        title: "Test your listing before publishing",
        body: "Once AWS approves the listing, it enters <strong>Limited</strong> status — visible only to you. In Suger Settings → Integrations → Console → AWS Marketplace → Build → SaaS products, open the listing and click <strong>View on AWS Marketplace → View purchase options</strong>, set the contract to <strong>\"Do not automatically renew,\"</strong> and subscribe using the $0.01 dimension with a test buyer account. If the test entitlement cancels unexpectedly, it's usually a payment failure on the test account, not a Suger issue. For usage-based products, also report test usage via Entitlements → test entitlement → Usage Metering tab → <strong>+ Report Usage</strong>. Before going live, you'll also need a short buyer-experience demo video — a required item on AWS's checklist, not optional; see the dedicated Journey guide for that.",
        link: {
          label: "Create and publish an AWS listing (Suger Docs) →",
          url: "https://doc.suger.io/aws-marketplace/list-product/",
        },
        checks: [
          "Did the test subscription fulfillment URL redirect work correctly?",
          "Did the test entitlement appear in Suger → Entitlements?",
          "Was test usage reported for usage-based products?",
        ],
        media: null,
      },
      {
        title: "Publish and go live",
        body: "Going Public isn't an instant visibility toggle — click <strong>Publish Product</strong> in Suger, which triggers the 2–4 week (SaaS) or 7–10 business day (Professional Services) AWS review from the earlier step. Before clicking it, replace every $0.01 test price with your real production pricing. Track review progress under Settings → Integrations → Console → AWS Marketplace → SaaS products → product → <strong>Requests log</strong> tab. Once live, cancel the test entitlement from earlier — it will otherwise keep charging $0.01 indefinitely.",
        checks: [
          "Have all $0.01 test prices been replaced with real production pricing before publishing?",
          "Was Publish Product clicked, and is review progress being tracked via the Requests log?",
          "Has the test entitlement from the previous step been cancelled after go-live?",
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
    estimated: "~45 min hands-on (plus 2-4 weeks of Microsoft certification)",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/azure-marketplace/list-product/",
    steps: [
      {
        title: "Confirm prerequisites",
        body: "Before creating an Azure listing confirm: (1) your Azure Marketplace integration is connected in Suger, (2) your organization is enrolled in the <strong>Microsoft AI Cloud Partner Program</strong> as a Commercial Marketplace publisher — not just \"enrolled as a publisher,\" this is the specific program name, (3) your Partner Center <strong>Legal Info, Payout profile, and Tax profile</strong> are all complete and verified — offers can't publish without these, (4) you have a fulfillment URL ready (the SaaS landing page that handles Azure post-purchase redirects), and (5) you have product assets: description, logo, categories, pricing plans.",
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
          "Is your organization enrolled in the Microsoft AI Cloud Partner Program as a Commercial Marketplace publisher?",
          "Are Legal Info, Payout profile, and Tax profile all complete in Partner Center?",
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
        body: "Fill in: <strong>Product Title</strong> and <strong>Product ID</strong> (Microsoft's current field names — lowercase/numbers/dashes/underscores only, can't end in <code>-preview</code>, and permanent once published), <strong>Product Alias</strong>, <strong>Short Description</strong>, <strong>Search Result Summary</strong> (one line, no line breaks), <strong>Long Description</strong> (supports Markdown), <strong>Company Logo</strong> (a range: between 216×216px and 350×350px — not two fixed sizes), a separate <strong>Screenshot</strong> asset (1280×720px), <strong>Categories</strong>, <strong>Industries</strong>, <strong>Search Keywords</strong> (max 3), <strong>Getting Started Instructions</strong>, a <strong>Supporting Document</strong> (PDF), up to 10 <strong>Resources</strong> links, <strong>Support Contact</strong>, <strong>Engineering Contact</strong>, <strong>CSP Program Contact</strong>, and <strong>Privacy Policy URL</strong>. The Product ID is set once — choose carefully.",
        checks: [
          "Is the Product ID confirmed — it cannot be changed after publishing?",
          "Is the Company Logo within the 216–350px range, with a separate 1280×720 Screenshot asset?",
          "Is the Privacy Policy URL live and accessible?",
          "Are Engineering Contact and CSP Program Contact filled in, not just the general Support Contact?",
        ],
        media: null,
      },
      {
        title: "Add Pricing Information (Plans)",
        body: "Azure SaaS offers use <strong>Plans</strong> (pricing tiers). Create at least one plan: set the <strong>Plan ID</strong>, <strong>Plan Name</strong>, and pricing model — there are only <strong>two</strong> top-level models, <strong>Flat Rate</strong> or <strong>Per User</strong> (\"Metered\" is not a third model; it's an optional usage dimension you can layer onto either one for overage billing). Prices per market, and a billing term: <strong>month, year, 2 years, or 3 years</strong>. <strong>All plans must use the same top-level pricing model</strong> — you cannot mix Flat Rate and Per User plans in one offer. If using Flat Rate, add a generic $0.01 usage dimension before publishing — this is recommended for testing. Azure requires at least one plan before you can publish.",
        checks: [
          "Is at least one Plan created with a valid Plan ID?",
          "Did you select Flat Rate or Per User (not a nonexistent third 'Metered' option)? All plans must match.",
          "Does each plan have a billing term selected from month/year/2 years/3 years?",
          "If using Flat Rate, have you added a $0.01 usage dimension before publishing?",
        ],
        media: null,
      },
      {
        title: "Complete Technical Setup in Microsoft Partner Center",
        body: "After saving in Suger, complete the technical configuration in <strong>Microsoft Partner Center</strong>, including the <strong>Supplemental Content</strong> tab: (1) set the <strong>Landing Page URL</strong> (your fulfillment URL), (2) set the <strong>Connection Webhook URL</strong> (Suger provides this — available in Settings → Integrations → Azure), (3) register a <strong>Microsoft Entra Application</strong> with the required API permissions and enter its tenant ID and application ID — these values <strong>must exactly match your Suger integration</strong>, or Suger can't track purchases. (Note: Microsoft's current terminology is \"Microsoft Entra,\" not \"Azure Active Directory.\") Save and validate in Partner Center.",
        link: {
          label: "Microsoft Partner Center →",
          url: "https://partner.microsoft.com/",
        },
        checks: [
          "Is the Landing Page URL (your fulfillment URL) set in Partner Center?",
          "Is the Connection Webhook URL (from Suger) set in Partner Center?",
          "Do the Microsoft Entra tenant ID and application ID exactly match your Suger integration?",
        ],
        media: null,
      },
      {
        title: "Publish, review, and go live",
        body: "Before submitting for review, do a final content check: no placeholder or AI-generated text left in descriptions, all required logos and screenshots uploaded, no broken or missing URLs (Privacy Policy, documentation, support). In Microsoft Partner Center, click <strong>Review and Publish</strong>. Certification is <strong>not</strong> a 1-3 day process — budget roughly <strong>2-4 weeks</strong> for a net-new offer. Suger syncs to Azure's live/not-live status roughly hourly, so don't expect an instant status change even after Microsoft approves it. Once approved, the offer enters <strong>Publisher Preview</strong>: only you (and up to 10 preview-audience emails you can add) can see it. Test a purchase using a test account. After confirming everything works, click <strong>Go Live</strong> in Partner Center to make it publicly available. Finalize in Suger by verifying the listing status updates to Published.",
        link: {
          label: "Create and publish an Azure listing (Suger Docs) →",
          url: "https://doc.suger.io/azure-marketplace/list-product/",
        },
        checks: [
          "Does the listing have no placeholder or AI-generated text that wasn't updated?",
          "Are all required assets present: logo, screenshot, Privacy Policy URL, support URL?",
          "Does your timeline planning reflect 2-4 weeks for certification, not a few days?",
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
    estimated: "~45 min hands-on (plus 1-3 weeks total, 2-5 business days per review round)",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/gcp-marketplace/list-product/",
    steps: [
      {
        title: "Understand Product vs. Listing and confirm prerequisites",
        body: "GCP Marketplace uses a two-stage process: Suger creates the product draft, then GCP's Producer Portal completes the technical integration. IAM roles and Workload Identity are <strong>not</strong> a day-one prerequisite here — that setup happens later in Phase 2 below. What you actually need before starting: (1) Producer Portal access (possibly requiring a Solution Architecture Review — architecture diagram, GCP pricing calculator estimate, and Year 1/3 sales projections), (2) payment and tax setup completed in Producer Portal's Payments tab (W-8/W-9), (3) an EULA selected, and (4) product assets ready: description, logo (PNG, between 130×130px and 512×512px, transparent background, under 256kB), pricing model, and support contact.",
        terms: [
          { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
          { name: "Producer Portal — GCP", slug: "producer-portal-—-gcp" },
        ],
        path: "gcp-marketplace-essentials",
        checks: [
          "Has Producer Portal access been granted, including a Solution Architecture Review if required?",
          "Is payment/tax setup (W-8/W-9) complete in the Producer Portal Payments tab?",
          "Is your logo within the 130–512px range and under 256kB — not assumed to be a fixed 200×200?",
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
        title: "Fill in core product details (Phase 1)",
        body: "In Suger Console, complete Phase 1 — <strong>Define product information</strong>: <strong>Product Name</strong>, <strong>Tagline</strong>, <strong>Description</strong>, <strong>Logo</strong>, <strong>Categories</strong> (up to 4), <strong>Support URL</strong>, a separate <strong>Support Description</strong>, <strong>Product Info Link</strong>, <strong>Documentation</strong> links, <strong>License</strong> agreement URLs, <strong>URL segment</strong>, <strong>Search Metadata</strong> and <strong>Search Keywords</strong>, and <strong>Pricing</strong>. For GCP SaaS, pricing uses <strong>Usage Plans</strong> with metered dimensions or subscription tiers. Save in Suger — changes sync to the GCP Producer Portal. Fulfillment URL and service account setup happen in Phase 2 next, not here.",
        checks: [
          "Are all required Phase 1 fields completed, including the ones easy to miss (License URLs, URL segment, Search Metadata)?",
          "Is Categories capped at 4 or fewer?",
          "Is pricing configured with the correct model (subscription or metered)?",
        ],
        media: null,
      },
      {
        title: "Complete technical integration (Phase 2)",
        body: "In the <strong>GCP Producer Portal</strong>, complete Phase 2 — <strong>Frontend Integration</strong>: set your fulfillment URL and sign up/SSO/login URL patterns, and configure your service account and IAM role bindings (this is where <code>cloud-commerce-procurement@system.gserviceaccount.com</code> gets bound to specific roles — not something you set up earlier). GCP validates your backend's integration with the <strong>Partner Procurement API</strong> — not \"Commerce API,\" that's not the real name — plus Cloud Pub/Sub and, for usage-based products, the Service Control API. Suger's implementation team can assist with the technical integration requirements.",
        link: {
          label: "GCP Producer Portal →",
          url: "https://console.cloud.google.com/producer-portal",
        },
        checks: [
          "Is Phase 1 (product information) complete and submitted in GCP Producer Portal?",
          "Is Phase 2 (technical integration — service account, IAM bindings, Partner Procurement API) validated by GCP?",
        ],
        media: null,
      },
      {
        title: "Conduct billing tests and publish",
        body: "GCP's billing test isn't a generic \"create a test offer and submit for review\" — it's a specific, coordinated process: (1) notify your Suger CSM, who runs an internal test and authorizes a test purchase; (2) open a GCP Marketplace support ticket to get an external billing account ID and hand it to your Suger rep for the Google billing test; (3) for usage-based products, submit test usage; (4) go-live happens when your cloud admin runs a <strong>Google-provided go-live script</strong> — there's no separate \"submit for final review\" button. Each review round typically takes 2–5 business days; total time from submission to live is usually 1–3 weeks.",
        link: {
          label: "Create and publish a GCP listing (Suger Docs) →",
          url: "https://doc.suger.io/gcp-marketplace/list-product/",
        },
        checks: [
          "Has your Suger CSM been notified to run the internal test and authorize a test purchase?",
          "Has a GCP Marketplace support ticket been opened for the external billing account ID?",
          "Did your cloud admin run the Google-provided go-live script to complete publishing?",
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
      "Migrate your existing AWS, Azure, GCP, or Snowflake marketplace listings into Suger so entitlements, billing, and co-sell data flow through the platform — without delisting or interrupting active deals.",
    estimated: "~2-4 hrs hands-on (plus an optional 1-2 week metering validation window)",
    status: "for-review",
    // No dedicated doc.suger.io page exists for this topic (checked the full
    // sitemap and every plausible candidate) — sourced from Suger's own blog
    // instead, still first-party content, just not on the docs subdomain.
    sourceUrl: "https://www.suger.io/blog/migrate-to-suger",
    steps: [
      {
        title: "Connect your existing marketplace(s) to Suger",
        body: "Connecting is passive and read-only at this stage — the integration won't impact your existing cloud marketplace solution. Suger automatically syncs your historical listings, offers, entitlements, revenue, and usage records with no data loss. No engineering work is required for this step.",
        terms: [
          { name: "Listing", slug: "listing" },
          { name: "Entitlement", slug: "entitlement" },
        ],
        checks: [
          "Is each marketplace (AWS/Azure/GCP/Snowflake) connected and VERIFIED in Suger?",
          "Does your historical data (past offers, entitlements, revenue) appear correctly in Suger after connecting?",
        ],
        media: null,
      },
      {
        title: "Migrate usage metering (only if you bill on usage)",
        body: "If your pricing is usage-based, begin reporting real-time metering data to Suger's API while keeping your existing metering pipeline running in parallel. This dual-reporting window (typically 1-2 weeks) lets you validate that Suger's usage records match your current system before cutover. Skip this step entirely if you're on flat-rate or contract pricing.",
        terms: [{ name: "Usage Metering", slug: "usage-metering" }],
        checks: [
          "If usage-based: has dual-reporting to Suger's metering API started?",
          "Do Suger's usage records match your existing system for a full billing cycle?",
        ],
        media: null,
      },
      {
        title: "Redirect new sign-ups through Suger",
        body: "Update your listing's technical/fulfillment integration so <strong>new</strong> customer sign-ups route through Suger's endpoint first, then redirect to your existing onboarding page. This is a no-engineering change (~1 hour) — you're pointing an existing signup flow at a new URL, not rebuilding it. Your listing stays live and public throughout: there's no need to delist, and you can keep creating private offers and closing deals during the switch.",
        checks: [
          "Has the fulfillment/signup URL been updated to route through Suger?",
          "Did a test sign-up correctly redirect through Suger to your existing onboarding page?",
        ],
        media: null,
      },
      {
        title: "Decommission the legacy system on your own timeline",
        body: "Once end-to-end testing confirms sign-ups, entitlements, and billing all flow correctly through Suger, sunset your previous integration whenever you're ready. There's no forced cutover window or shutdown period — the transition is designed to run alongside your existing setup until you're confident enough to retire it.",
        checks: [
          "Has full end-to-end testing (signup → entitlement → billing) passed through Suger?",
          "Is your legacy integration fully decommissioned (or scheduled)?",
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
      "Record and submit the short walkthrough video AWS requires before your listing can move from Limited to Public — the final item on AWS's implementation checklist, not an optional extra.",
    estimated: "~15-20 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/aws-marketplace/submit-listing/",
    steps: [
      {
        title: "Understand what AWS is validating and when it's needed",
        body: "AWS validates the full buyer journey as part of approving your move from Limited to Public — <strong>subscribing to the product, receiving credentials, and navigating your software</strong>. Providing a short walkthrough video lets AWS confirm this flow without requesting test credentials or scheduling a live call, which speeds up your approval. This is required — it's item 8 on AWS's final implementation checklist before Suger can submit your Publish request.",
        terms: [{ name: "Listing", slug: "listing" }],
        path: "aws-marketplace-essentials",
        checks: [
          "Is your listing currently in Limited View status?",
          "Have you already completed a test subscription you can record?",
        ],
        media: null,
      },
      {
        title: "Record the buyer experience walkthrough",
        body: "Using any standard screen recording tool, capture: navigating to your listing, simulating a purchase via <strong>Continue to Subscribe</strong>, how customers receive access credentials (show a sample confirmation email if you send one), logging in with those credentials, and a brief tour of your product's UI — dashboards, integrations, support access. Keep the recording to roughly <strong>2-3 minutes</strong>.",
        checks: [
          "Does the recording cover subscribe → credential delivery → login → a short UI tour?",
          "Is the video approximately 2-3 minutes long?",
        ],
        media: null,
      },
      {
        title: "Upload and share the recording with Suger",
        body: "Upload the recording to a shareable platform (Google Drive, Dropbox, etc.) and confirm the link is accessible <strong>without requiring a login</strong>. Share the link with your Suger team. This video is viewed only by AWS reviewers and is never made public.",
        link: {
          label: "Submit your AWS listing for approval (Suger Docs) →",
          url: "https://doc.suger.io/aws-marketplace/submit-listing/",
        },
        checks: [
          "Is the share link accessible without requiring a login?",
          "Has the link been sent to your Suger contact?",
        ],
        media: null,
      },
      {
        title: "Suger submits the final approval request",
        body: "Once your video is received, Suger initiates the final listing approval request with AWS on your behalf — the last of the 8 checklist items (product listing, registration page, AWS seller/public profiles, verified tax and payment info, AWS-Suger account connection, Limited View status, and this demo video). AWS's publish review typically takes 2-4 weeks from there.",
        checks: [
          "Has Suger confirmed the video was received and the approval request submitted?",
          "Do you know the current status of your AWS publish review?",
        ],
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
    estimated: "~50 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/cosell/cosell-configuration/",
    steps: [
      {
        title: "Confirm cloud partner connections are active",
        body: "Before mapping fields, verify the relevant cloud partner integrations are connected in Suger. For AWS: Settings → Integrations → AWS ACE. For Azure: Settings → Integrations → <strong>Connect Azure Co-Sell</strong> (a separate card from the Azure Marketplace billing integration — don't confuse the two). For GCP: there's no separate co-sell connection — it rides on your existing GCP Marketplace integration. All relevant connections must show <strong>Connected</strong> before proceeding.",
        checks: [
          "Are the cloud partner integrations you're mapping (AWS/Azure/GCP) showing as 'Connected'?",
          "Is your CRM (Salesforce or HubSpot) also showing as 'Connected'?",
        ],
        media: null,
      },
      {
        title: "Complete CRM-side prerequisite setup",
        body: "Field mapping doesn't work until your CRM is prepared. <strong>Salesforce:</strong> assign the Suger Integrator permission set (with field access to the objects you'll map) and add the Suger Opportunity Quick Panel to the Opportunity page layout. <strong>HubSpot:</strong> create a custom Deal property named <strong>Referral State</strong>, field type <strong>Multiple Checkboxes</strong>, with options exactly <strong>AWS</strong>, <strong>Azure</strong>, and <strong>GCP</strong> — then register it under Settings → Integrations → HubSpot → Advanced → Deal Referral State Property.",
        checks: [
          "Salesforce: is the Suger Integrator permission set assigned and the Quick Panel on the Opportunity layout?",
          "HubSpot: does the Referral State property exist as Multiple Checkboxes with exactly AWS/Azure/GCP as options, and is it registered in the HubSpot integration's Advanced settings?",
        ],
        media: null,
      },
      {
        title: "Activate Co-Sell Intelligence (support-enabled, not self-serve)",
        body: "Co-Sell Intelligence signals are <strong>not a self-serve toggle</strong> — email <strong>support@suger.io</strong> to request activation for the cloud partners you want (AWS, Azure, GCP). Once enabled, engagement scores (Low/Medium/High) surface in your CRM's Suger widget, helping prioritize high-propensity accounts.",
        link: {
          label: "Co-Sell overview (Suger Docs) →",
          url: "https://doc.suger.io/cosell/",
        },
        checks: [
          "Has support@suger.io confirmed Co-sell Intelligence is enabled for your selected cloud partners?",
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
        body: "Map CRM fields to cloud partner required fields — see the platform-specific field-list pages (AWS ACE fields, Microsoft co-sell fields) for the exact list. AWS's mandatory fields are <strong>Customer Company Name</strong>, <strong>Customer Website</strong>, <strong>Country</strong>, <strong>Postal Code</strong>, <strong>Customer Business Problem</strong>, and <strong>Target Close Date</strong> — note Owner Email is a sales-rep-attribution mapping, not an ACE submission requirement, so don't treat it as mandatory. Four mapping methods are available: <strong>Default Value</strong>, <strong>Direct &amp; Picklist Mapping</strong>, <strong>Expression Mode</strong> (Go Templates, for transformations like full country names → ISO 2-letter codes), and <strong>AI Generate</strong>. Use the <strong>Test</strong> button on any field to validate it against a live CRM record before saving.",
        link: {
          label: "AWS ACE field list (Suger Docs) →",
          url: "https://doc.suger.io/cosell/cosell-ace-fields/",
        },
        checks: [
          "Does geography output ISO 2-letter codes — not full country names?",
          "Are Customer Company Name and Postal Code mapped — both are AWS-required and easy to miss?",
          "Have you tried AI Generate for any field that's hard to map manually?",
          "Did you use the Test button to validate mappings against a live record before saving?",
        ],
        media: null,
      },
      {
        title: "Configure automation settings",
        body: "Under <strong>Automation</strong>, review what's available: <strong>Auto-Enrich</strong> fills missing partner fields using company name/website <em>or</em> contact email/full name as the lookup key (not website alone); <strong>Auto-Share</strong> sets a deal-stage trigger for automatic referral submission (a SOQL predicate for Salesforce, a Segment ID for HubSpot); <strong>Auto-Sync Contacts</strong> (AWS only) syncs contact data roughly every 10–30 minutes; <strong>Auto-Link</strong> (AWS–Salesforce only) links existing records automatically; <strong>Auto-Delete Referrals</strong> removes stale outbound/inbound referrals; and <strong>Field Syncing</strong> pushes CRM edits to the partner portal approximately every <strong>6 hours</strong> — not hourly. Preview with the Share Modal before activating Auto-Share.",
        checks: [
          "Is Auto-Enrich ON for each cloud partner config?",
          "Have you defined and verified the Auto-Share trigger condition?",
          "Does your team know Field Syncing runs on a ~6-hour cycle, not hourly — so edits won't appear in the partner portal instantly?",
        ],
        media: null,
      },
      {
        title: "Share opportunities with cloud partners (test)",
        body: "Test the field mapping: find a non-production CRM opportunity, open the Suger widget on the record, click <strong>Share to Partner</strong>. Review the Share Modal — all required fields should be pre-populated without validation errors. Submit the test referral and verify it appears in the cloud partner portal.",
        terms: [{ name: "Outbound Referral", slug: "outbound-referral" }],
        checks: [
          "Did the Share Modal populate without validation errors?",
          "Did the test referral appear in the cloud partner portal?",
        ],
        media: null,
      },
      {
        title: "Manage inbound referrals and track co-sell insights",
        body: "Configure Inbound Settings (under the same co-sell configuration) to map cloud partner fields to your CRM objects when referrals come in from partners. Enable Auto-Accept if appropriate. After go-live, monitor co-sell performance in Suger under <strong>Co-Sell → Insights</strong> for opportunity quality scoring and engagement trends.",
        terms: [{ name: "Inbound Referral", slug: "inbound-referral" }],
        link: {
          label: "Inbound referrals (Suger Docs) →",
          url: "https://doc.suger.io/cosell/cosell-inbound/",
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
    status: "for-review",
    sourceUrl: "https://doc.suger.io/get-started/private-offer-mapping/",
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
          label: "Configure Private Offer Field Mappings (Suger Docs) →",
          url: "https://doc.suger.io/get-started/private-offer-mapping/",
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
        body: "Required Azure fields to map: (1) <strong>Opportunity ID</strong>, (2) <strong>Product ID</strong> — your Azure Marketplace plan, (3) <strong>Offer Name</strong>, (4) <strong>Buyer Azure Billing Account ID</strong> — UUID format: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX (collect from customer), (5) <strong>Prepared By Email</strong>, (6) <strong>Offer Expiry Date</strong>, (7) <strong>Offer End Date</strong>, and (8) <strong>Start Date</strong> — Expiry Date and End Date are two distinct fields, not one.",
        checks: [
          "Is the Buyer Azure Billing Account ID sourced from the customer — not hardcoded?",
          "Is the ID in UUID format (XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX)?",
        ],
        media: null,
      },
      {
        title: "Map GCP private offer fields",
        body: "Required GCP fields to map: (1) <strong>Billing Account ID</strong> — format <code>000000-000000-000000</code> (6-6-6 numeric, not alphanumeric; collect from customer), (2) <strong>Buyer org</strong>, (3) <strong>Buyer Contact Email</strong> and (4) <strong>Sales Contact Email</strong> — two distinct fields, not one combined 'contact emails' bucket, (5) <strong>Term length</strong>, (6) <strong>Expiry date</strong>, (7) <strong>Deal Type</strong>, and (8) <strong>Notes for Customer</strong> / <strong>Notes for Your Team</strong>.",
        checks: [
          "Is the GCP Billing Account ID sourced from the customer?",
          "Is the ID in the correct 6-6-6 numeric format (e.g., 123456-789012-345678) — digits only, not letters?",
          "Are Buyer Contact Email and Sales Contact Email mapped as separate fields?",
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
        body: "Optionally, configure <strong>Listing Filters</strong> to restrict which marketplace products your sales team can select when creating offers (useful if you have multiple products and want to prevent wrong product selection). Use the <strong>Test</strong> button on individual field expressions to validate them before saving — this is the confirmed way to check a mapping works, rather than relying on a full end-to-end CRM test. Get sign-off from your deal desk before enabling for live deals.",
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
    status: "for-review",
    sourceUrl: "https://doc.suger.io/aws-marketplace/create-private-offer/",
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
        body: "In Suger Console, navigate to <strong>Offer</strong> and click <strong>+ New Private Offer</strong>. Select the target cloud provider (AWS) and the specific listing to offer. This opens the offer creation flow — there's no separate 'Create Draft' button, this button starts it directly.",
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
        body: "Define the contract terms: select the <strong>contract duration</strong> (1 year, 2 years, 3 years, or custom), the <strong>payment schedule</strong> (upfront or installment — see Variable Payments if needed), the contract <strong>start date</strong>, and the <strong>Buyer Net Payment Term</strong> (Net 15/30/45/60/90/120 days). Payment terms cannot be modified after the offer is released — get this confirmed with the buyer before submitting, not after.",
        terms: [
          { name: "Variable Payments — AWS", slug: "variable-payments-—-aws" },
        ],
        checks: [
          "Is the contract duration correct?",
          "Is the payment schedule agreed with the buyer (upfront vs. installment)?",
          "Is the Buyer Net Payment Term confirmed with the buyer — it's locked once the offer releases?",
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
        body: "Select the <strong>EULA type</strong> — there are three options, not two: <strong>Standard AWS Marketplace Contract</strong>, <strong>Enterprise AWS Marketplace Contract</strong>, or a <strong>Custom EULA</strong> (upload your own PDF). EULA can't be changed after the offer is created — if you need a different one, you'll have to cancel and recreate the offer, not edit it. If using a Custom EULA, upload the PDF and confirm the buyer has reviewed it. Click <strong>Submit</strong> to send the offer to AWS Marketplace — AWS typically takes about 5 minutes to process it (status moves Pending_Create → Create_Success).",
        checks: [
          "Is the correct EULA type selected — Standard, Enterprise, or Custom?",
          "If Custom EULA: is the PDF uploaded and confirmed with the buyer?",
          "Is the offer submitted to AWS?",
        ],
        media: null,
      },
      {
        title: "Share the offer with your buyer",
        body: "After submission, go to <strong>Actions → Copy offer URL</strong> in Suger to get the shareable link — there's no separate 'Share Offer' button. Send this to the buyer, or they'll receive an email with the link automatically. Track acceptance status in Suger under <strong>Offer</strong> — the status will update to Accepted once the buyer completes the transaction.",
        link: {
          label: "Manage Offers (Suger Docs) →",
          url: "https://doc.suger.io/billing/offer/",
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
    estimated: "~20 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/azure-marketplace/create-private-offer/",
    steps: [
      {
        title: "Create the private offer in Suger",
        body: "In Suger Console, navigate to <strong>Offer</strong> and click <strong>+ New Private Offer</strong>. Select <strong>Azure</strong> as the cloud provider and choose the published Azure listing plan to offer. Enter the offer details: <strong>Offer Name</strong> (internal reference), buyer's <strong>Azure Billing Account ID</strong> (UUID format — get from the customer), <strong>Preparer email</strong>, <strong>Start Date</strong>, <strong>Expiry Date</strong> (the deadline for the buyer to act — a separate field from End Date), <strong>End Date</strong>, up to <strong>5 Notification Contacts</strong> (Azure enforces this cap), and custom pricing (choose <strong>Discount Price</strong> or <strong>Absolute Price</strong>, with support for multiple plan tiers via 'Add plan'). Click <strong>Create</strong> to generate the offer.",
        terms: [{ name: "Private Offer", slug: "private-offer" }],
        path: "private-offers-and-cppas",
        link: {
          label: "Open Suger Console → Offer →",
          url: "https://console.suger.io",
        },
        checks: [
          "Is the buyer's Azure Billing Account ID in UUID format (XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX)?",
          "Did you confirm the Billing Account ID directly with the buyer — not guessed?",
          "Are Start Date, Expiry Date, and End Date all set as distinct values, not treated as one?",
          "Is the Notification Contacts list at 5 or fewer?",
        ],
        media: null,
      },
      {
        title: "Select the EULA",
        body: "Choose the offer's End User License Agreement: the <strong>Standard Contract for Azure Marketplace</strong>, or <strong>use your own EULA</strong> (upload a custom PDF). This is a separate, required selection — don't skip past it assuming a default applies.",
        checks: [
          "Has an EULA been explicitly selected — Standard or your own custom PDF?",
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
        body: "Once the buyer completes the purchase, the entitlement syncs to Suger under <strong>Entitlements</strong> — this can take <strong>a few hours</strong> via Azure's own sync, not instantly. The offer status in Suger updates to <strong>Accepted</strong>. If you have a provisioning webhook configured, it fires automatically to trigger your onboarding flow. Verify the entitlement details match the agreed terms.",
        link: {
          label: "Create an Azure private offer (Suger Docs) →",
          url: "https://doc.suger.io/azure-marketplace/create-private-offer/",
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
    estimated: "~20 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/gcp-marketplace/create-private-offer/",
    steps: [
      {
        title: "Confirm prerequisites",
        body: "Before creating a GCP private offer confirm: (1) your GCP Marketplace integration is connected in Suger, (2) you have a published GCP listing, and (3) you have the buyer's <strong>GCP Billing Account ID</strong> in the format <code>000000-000000-000000</code> (6-6-6 numeric, not alphanumeric — confirm with the buyer directly).",
        terms: [{ name: "Private Offer", slug: "private-offer" }],
        path: "private-offers-and-cppas",
        checks: [
          "Is your GCP Marketplace integration connected in Suger?",
          "Do you have a published GCP listing to offer against?",
          "Is the buyer's GCP Billing Account ID confirmed as digits only in the 6-6-6 format?",
        ],
        media: null,
      },
      {
        title: "Create the offer in Suger",
        body: "In Suger Console, go to the <strong>Offer</strong> page and click <strong>+ New Private Offer</strong> in the upper-right corner. Select <strong>GCP</strong> as the cloud provider and the published listing. Fill in: <strong>Offer Name</strong>, buyer's <strong>Billing Account ID</strong>, buyer org, <strong>Buyer Contact Email</strong> and <strong>Sales Contact Email</strong> (separate fields), <strong>Term Length</strong>, <strong>Expiry Date</strong>, <strong>Deal Type</strong>, <strong>EULA</strong>, and pricing (Payment Recurrence: Monthly/Quarterly/Yearly/Custom, with prepay 2–36 months or postpay 1–60 months if using installments).",
        link: {
          label: "Open Suger Console → Offer →",
          url: "https://console.suger.io",
        },
        checks: [
          "Is the Billing Account ID in the correct 6-6-6 numeric format?",
          "Are Deal Type and EULA both selected — both are required, not optional?",
          "If installment payments: are all payment dates and amounts defined?",
        ],
        media: null,
      },
      {
        title: "Validate before submitting",
        body: "Click the <strong>Validate</strong> button before finalizing. It runs pre-submission checks without actually creating the offer — a green banner means you're clear to submit, a red banner names the specific listing-related rejection reason so you can fix it first. Skipping this step means finding out about a rejection only after GCP has already reviewed it.",
        checks: [
          "Did Validate return a green banner before you submitted?",
          "If it returned red, was the specific reason fixed before resubmitting?",
        ],
        media: null,
      },
      {
        title: "Share the offer with your buyer",
        body: "After creating the offer, click <strong>Copy offer URL</strong> in Suger to get the shareable link — there's no separate 'Share' button. Send this to the buyer. They navigate to GCP Marketplace, review the offer terms, and accept.",
        link: {
          label: "Create a GCP private offer (Suger Docs) →",
          url: "https://doc.suger.io/gcp-marketplace/create-private-offer/",
        },
        checks: [
          "Did you send the copied offer URL to the buyer?",
        ],
        media: null,
      },
      {
        title: "Confirm the offer if it needs your approval",
        body: "For SaaS offers, acceptance doesn't always mean it's live: status moves to <strong>\"Needs Your Approval\"</strong> after the buyer accepts, and you must manually confirm it to activate — <strong>unless</strong> Automatic Offer Approval is enabled for your account. If you haven't set up auto-approval, build this manual check into your process, or the deal will sit accepted-but-inactive.",
        checks: [
          "Does your team know whether Automatic Offer Approval is enabled for your account?",
          "If not, is someone checking for 'Needs Your Approval' status and confirming manually?",
          "After confirmation, did the entitlement appear in Suger → Entitlements?",
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
    estimated: "~30 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/aws-marketplace/cppo/",
    steps: [
      {
        title: "Complete AWS and Suger resale requirements",
        body: "Before creating a resale authorization confirm: <strong>AWS requirements</strong> — your listing must be SaaS with reseller permissions enabled; you must be enrolled in the AWS Channel Partner program; your channel partner must have an active AWS Marketplace Reseller account. <strong>Technical prerequisite (easy to miss):</strong> both you and your channel partner must enable the service-linked role <code>AWSServiceRoleForMarketplaceResaleAuthorization</code> in AWS Marketplace Management Portal → Settings, and you need the <code>AmazonEventBridgeFullAccess</code> managed policy for webhook notifications. Skipping this causes unexplained failures later, not an upfront error.",
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
          "Have both you and the partner enabled the AWSServiceRoleForMarketplaceResaleAuthorization service-linked role?",
          "Do you have the AmazonEventBridgeFullAccess policy for webhook notifications?",
        ],
        media: null,
      },
      {
        title: "Create the resale authorization in Suger",
        body: "In Suger Console, navigate to <strong>Resale → + New Resale Authorization</strong>. Select your AWS listing, an <strong>Opportunity Name</strong> (1–100 characters, no <code>; \" ' &lt; &gt;</code>), and <strong>Availability Settings</strong> (Single Use / Specific time duration / No set time duration). For pricing, pick a <strong>Discount Type</strong> — not a flat wholesale price: <strong>Flexible payment schedule</strong> (installments), <strong>Individual pricing</strong> (per-commit discounts), or <strong>Percentage discount</strong> (single rate) — plus Commits (SKUs) and per-dimension unit pricing. Set the <strong>maximum buyer net payment term</strong> (Net 15/30/45/60/90/120 — immutable once released) and upload both legal documents: the <strong>EULA</strong> (buyer-visible) and the <strong>Reseller Agreement</strong> (partner-visible only) — these are two separate documents, not one.",
        link: {
          label: "Open Suger Console → Resale →",
          url: "https://console.suger.io",
        },
        checks: [
          "Is the Discount Type set correctly (Flexible payment schedule / Individual pricing / Percentage discount) rather than a flat wholesale price?",
          "Are both the EULA and the separate Reseller Agreement uploaded?",
          "Do seller, partner, and buyer all use the same currency? (CPPO transactions require matching currency across all three.)",
        ],
        media: null,
      },
      {
        title: "Hand off to the channel partner",
        body: "Suger doesn't use a manual 'share an ID' handoff — open the authorization in Suger Console and use <strong>More actions → Notify Contact</strong>, which emails the reseller a direct link to it. There's no need to separately relay an Authorization ID for them to enter into AWS Partner Central themselves.",
        checks: [
          "Did you use More actions → Notify Contact rather than manually sending an ID?",
          "Did the partner confirm they received and can open the link?",
        ],
        media: null,
      },
      {
        title: "Track buyer acceptance and entitlements",
        body: "In Suger Console, monitor the resale authorization under <strong>Resale</strong>. When the partner creates a CPPO and a buyer accepts it, you'll see a new entitlement under <strong>Entitlements</strong> labeled as a wholesale/CPPO entitlement (Suger distinguishes CPPO_OUT / CPPO / CPPO_IN). The partner's offer is tracked separately from your direct offers. If you need to update terms on an authorization that hasn't been used yet, use the <strong>Clone</strong> feature rather than editing it directly.",
        link: {
          label: "Manage AWS Resale Authorizations (Suger Docs) →",
          url: "https://doc.suger.io/aws-marketplace/cppo/",
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
    title: "Create an Azure Resale Authorization (CSP / MPO)",
    category: "cpq",
    description:
      "Create a resale authorization for an Azure Marketplace product — either a CSP Partner Private Offer (percentage margin) or a Multiparty Private Offer (discount/absolute price) — so a channel partner can resell to their customers.",
    estimated: "~30 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/azure-marketplace/cppo/",
    steps: [
      {
        title: "Pick the right offer type — there are two, not one",
        body: "Azure resale isn't a single generic flow with a 'Sell through CSP' checkbox — it's two genuinely different offer types with different setup steps. <strong>CSP Partner Private Offer</strong>: margin-sharing between you and a Cloud Solution Provider, priced as a percentage margin across up to 10 plans; requires the CSP partner's tenant ID/name. <strong>Multiparty Private Offer (MPO)</strong>: joint collaboration priced as a discount % or absolute price; requires the partner's marketplace seller ID. Decide which one matches your deal before starting — the fields and flow differ.",
        terms: [
          {
            name: "Multiparty Private Offer (MPO) — Azure",
            slug: "multiparty-private-offer-mpo-—-azure",
          },
        ],
        path: "private-offers-and-cppas",
        checks: [
          "Have you decided CSP Partner Private Offer vs. Multiparty Private Offer for this deal?",
          "Do you have the required partner identifier — CSP tenant ID/name, or MPO seller ID — for the type you picked?",
          "Is your Azure Marketplace integration connected in Suger?",
        ],
        media: null,
      },
      {
        title: "Create the Resale Authorization in Suger",
        body: "In Suger Console, navigate to <strong>Resale → + New Resale Authorization</strong> and select Azure. Fill in Basic Information, Offer Terms, and Pricing — for a <strong>CSP Partner Private Offer</strong>, pricing is a percentage margin (up to 10 plans); for an <strong>MPO</strong>, pricing is a discount % or absolute price. Under Additional Details, upload the <strong>EULA</strong>, add internal notes, and confirm the required identifier for your offer type (CSP tenant ID/name, or MPO seller ID). Up to 5 Notification Contacts are allowed. Document filenames are capped at 128 characters, customer-facing names at 100, ASCII only.",
        link: {
          label: "Open Suger Console → Resale →",
          url: "https://console.suger.io",
        },
        checks: [
          "Is pricing set to a percentage margin (CSP) or discount%/absolute price (MPO) — not a flat wholesale price?",
          "Is the EULA uploaded under Additional Details?",
          "Is the correct partner identifier entered for your offer type?",
        ],
        media: null,
      },
      {
        title: "Hand off to the channel partner",
        body: "Suger doesn't use a manual details hand-off — open the authorization in Suger Console and use <strong>More actions → Notify Contact</strong>, which emails the reseller a direct link to it. For MPOs, the partner then sets the end-customer price within the terms you authorized; while awaiting their review, the authorization shows a <strong>Pending Partner Action</strong> status specific to Multiparty offers.",
        checks: [
          "Did you use More actions → Notify Contact rather than sharing details manually?",
          "For MPOs: does the partner understand the pricing terms they can apply to end customers?",
        ],
        media: null,
      },
      {
        title: "Track buyer acceptance and manage active entitlements",
        body: "Monitor the resale authorization in Suger → Resale. Azure's checkout has a two-step process: <strong>Pending Purchase</strong> (offer accepted, purchase not yet finalized) and then <strong>Active</strong>. Once a buyer completes purchase, the entitlement appears in Suger. These entitlements are linked to the partner's transaction — confirm revenue splits are correct in Suger → Revenue.",
        link: {
          label: "Create a Resale Authorization for Azure (Suger Docs) →",
          url: "https://doc.suger.io/azure-marketplace/cppo/",
        },
        checks: [
          "Does the entitlement appear in Suger → Entitlements after buyer completes purchase?",
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
      "Suger doesn't have a separate sandbox environment to swap out — going live is about verifying the one integration you already have, cleaning up test-only access, testing end-to-end, and signing off.",
    estimated: "~30 min",
    status: "for-review",
    steps: [
      {
        title: "Confirm your integrations are Verified, not just Created",
        body: "Suger's integration model has one lifecycle per marketplace — <strong>CREATED → NOT_VERIFIED → VERIFIED</strong> — there's no separate sandbox integration to disconnect and swap for a production one. If you used a lower-tier or test buyer account while setting things up, that testing happened inside the same integration you'll keep using; there's nothing to migrate. In <strong>Settings → Integrations</strong>, confirm every marketplace you're going live with (AWS, Azure, GCP, Snowflake) shows <strong>VERIFIED</strong>, not just Created or Not Verified.",
        link: {
          label: "Open Suger Console → Settings → Integrations →",
          url: "https://console.suger.io",
        },
        checks: [
          "Does every marketplace integration you're going live with show VERIFIED?",
          "If any show NOT_VERIFIED, has that been resolved before proceeding?",
        ],
        media: null,
      },
      {
        title: "Clean up test-only access",
        body: "Remove any temporary buyer accounts, test entitlements, or $0.01 test subscriptions you created while validating pricing during setup — these aren't automatically cleaned up and will otherwise sit alongside real customer data. This is a cleanup step, not a reconnection step: your marketplace accounts and Suger integration stay exactly as they are.",
        checks: [
          "Have test entitlements and $0.01 test subscriptions been cancelled?",
          "Is Suger's Entitlements list free of leftover test records before go-live?",
        ],
        media: null,
      },
      {
        title: "Review team access before go-live",
        body: "In Suger Console, go to <strong>Settings → Users</strong>. Confirm every team member has the correct Admin/Editor/Viewer role for their function, and remove any implementation-only or test accounts you created while setting things up. Don't leave temporary accounts active once real customer data starts flowing through.",
        link: {
          label: "Manage Users and Roles (Suger Docs) →",
          url: "https://doc.suger.io/get-started/account/",
        },
        checks: [
          "Do all production team members have the correct access role?",
          "Have temporary implementation and test accounts been removed?",
        ],
        media: null,
      },
      {
        title: "Test Private Offer configuration in production",
        body: "Before testing, confirm your listing is live: go to <strong>Suger Console → Product</strong>, open your product, and verify the status is <strong>Public</strong> (not Draft, Limited, Unlisted, or one of the other intermediate states the listing can be in). Then create a low-value test private offer to a test buyer account you control. Confirm: (1) the offer appears in the cloud marketplace portal, (2) the test buyer can accept the offer, (3) the entitlement syncs to Suger → Entitlements. Don't skip this step — it's much easier to catch issues here than after a real customer transacts.",
        terms: [
          { name: "Private Offer", slug: "private-offer" },
          { name: "Entitlement", slug: "entitlement" },
        ],
        checks: [
          "Is your listing status showing Public in Suger Console → Product?",
          "Did the test private offer appear in the production cloud marketplace portal?",
          "Did the test buyer accept the offer successfully?",
          "Did the entitlement sync to Suger → Entitlements after acceptance?",
        ],
        media: null,
      },
      {
        title: "Test Co-Sell configuration in production",
        body: "Submit a test referral from your CRM. Confirm it arrives in the cloud partner portal (AWS Partner Central, Azure Partner Center, or GCP Partner Advantage). Accept it and verify the status syncs back to the CRM. If Auto-Share is enabled, trigger a qualifying opportunity and confirm it's auto-submitted.",
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
    status: "for-review",
    sourceUrl: "https://doc.suger.io/get-started/",
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
        body: "Navigate to <strong>Settings → Notifications</strong>. Toggle <strong>Enable Email Notification</strong> ON (it's a single switch, not \"Global Email Notifications\"). Define trigger routing: for each event type (Create Entitlement, Accept Offer, Cancel Entitlement), set To/CC/BCC recipients. Use team distribution list emails — not individual employee addresses.",
        link: {
          label: "Configure Notifications (Suger Docs) →",
          url: "https://doc.suger.io/get-started/email-notification/",
        },
        checks: [
          "Is Enable Email Notification ON?",
          "Are team distribution lists set for Create Entitlement, Cancel Entitlement, and Accept Offer?",
          "Did you run a Diagnostics test to verify email delivery?",
        ],
        media: null,
      },
      {
        title: "Set up your provisioning webhook",
        body: "Navigate to <strong>Settings → Notifications</strong>, click <strong>Create Webhook</strong>. Enter your provisioning endpoint URL and a Webhook Secret, and confirm the Content Type (defaults to <code>application/json</code>). Verify with the <strong>Test</strong> button — the test payload uses <code>\"action\": \"TEST\"</code>. Note: Suger allows only <strong>one webhook per organization</strong> — you'll need to delete the existing one before creating a replacement. Failed deliveries retry at 10s/20s/40s then every minute for up to 12 hours. Without a webhook, customers must be provisioned manually after marketplace purchase.",
        terms: [{ name: "Webhook", slug: "webhook" }],
        path: "marketplace-integrations",
        link: {
          label: "Configure Webhooks (Suger Docs) →",
          url: "https://doc.suger.io/get-started/webhook/",
        },
        checks: [
          "Is a Webhook Secret configured, and does your server verify the signature?",
          "Did the Test button confirm your server received the payload and returned 2xx?",
          "Does your team know only one webhook is allowed per org — replacing it means deleting the old one first?",
        ],
        media: null,
      },
      {
        title: "Create an API client (OAuth App recommended)",
        body: "Navigate to <strong>Settings → API Client → OAuth Apps</strong> and click <strong>+ New OAuth App</strong> — this is the current recommended method, not the older API_KEY/Bearer Token option (both of those are deprecated for new integrations). Set a Name, Description, and Access Level (Viewer/Editor/custom role). Exchange for a token via <code>POST https://apiv2.suger.cloud/oauth2/token</code>, then authenticate calls with <code>Authorization: Bearer &lt;token&gt;</code> — tokens expire in 1 hour, so cache and refresh them rather than fetching per request. Organizations can create up to 5 API clients; email support@suger.io with justification if you need more.",
        terms: [{ name: "Suger API Client", slug: "suger-api-client" }],
        link: {
          label: "Configure an OAuth App (Suger Docs) →",
          url: "https://doc.suger.io/get-started/oauth-app/",
        },
        checks: [
          "Was the client created as an OAuth App, not the deprecated API_KEY/Bearer Token type?",
          "Is the Access Level set appropriately (Viewer/Editor/custom)?",
          "Is your integration caching the token for its 1-hour lifetime instead of re-fetching it constantly?",
        ],
        media: null,
      },
      {
        title: "Configure your customer signup page",
        body: "Navigate to <strong>Settings → New Client Sign Up</strong>. Configure branding (company name, logo URL, welcome message) and notification emails. There are two distinct URLs here, not one: Suger's own Landing Page URL, and your <strong>Product Fulfillment URL</strong> — paste the Fulfillment URL into your cloud marketplace portal as the SaaS setup URL. Preview the page before publishing.",
        link: {
          label: "Configure Signup Journey (Suger Docs) →",
          url: "https://doc.suger.io/get-started/signup-url-redirect/",
        },
        checks: [
          "Is your logo and welcome message configured?",
          "Is the Product Fulfillment URL (not the Suger landing page URL) pasted into your marketplace portal?",
          "Did you preview the live signup page?",
        ],
        media: null,
      },
      {
        title: "Run your first data export",
        body: "Navigate to <strong>Settings → Table Export</strong> (not \"Data Export\"), click <strong>+ New Task</strong>. Select Entitlements as source, <strong>Direct Download</strong> (to AWS S3) or Snowflake Integration as destination — there's no \"Console Download\" option. Choose Last 30 days as the range, click Create, and once it reaches Completed, download and verify the data is clean.",
        link: {
          label: "Export Platform Data (Suger Docs) →",
          url: "https://doc.suger.io/get-started/table-export/",
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
    estimated: "~20 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/get-started/oauth-app/",
    steps: [
      {
        title: "Create an API client (OAuth App recommended)",
        body: "In Suger Console, go to <strong>Settings → API Client → OAuth Apps</strong> and click <strong>+ New OAuth App</strong> — this is the current recommended method. The older <strong>API_KEY</strong> and <strong>Bearer Token</strong> client types still exist but are explicitly deprecated for new integrations; only reach for them if you have a specific legacy compatibility need. Set a Name, Description, and Access Level (Viewer/Editor/custom role). Your org supports up to 5 API clients by default — email support@suger.io with justification to raise the limit.",
        terms: [{ name: "Suger API Client", slug: "suger-api-client" }],
        path: "marketplace-integrations",
        link: {
          label: "Open Suger Console → Settings → API Client →",
          url: "https://console.suger.io",
        },
        checks: [
          "Was the client created as an OAuth App, not the deprecated API_KEY/Bearer Token type (unless you have a specific legacy reason)?",
          "Is the Access Level scoped appropriately for what this client actually needs?",
        ],
        media: null,
      },
      {
        title: "Authenticate your requests",
        body: "Exchange your OAuth App credentials for a token via <code>POST https://apiv2.suger.cloud/oauth2/token</code>, then authenticate every request with <code>Authorization: Bearer &lt;token&gt;</code>. Tokens expire in <strong>1 hour</strong> — cache the token and refresh it before expiry rather than fetching a new one per request, which will hit rate limits under any real load.",
        link: {
          label: "Suger API Reference →",
          url: "https://doc.suger.io/get-started/oauth-app/",
        },
        checks: [
          "Is your integration caching the token and refreshing it before the 1-hour expiry, not fetching per-request?",
          "Did a test call with the Bearer token return 200 OK?",
        ],
        media: null,
      },
      {
        title: "Lifecycle and security management",
        body: "If credentials are compromised, rotate immediately: create a new OAuth App, update all dependent services, then delete the old one. Deletion is immediate and irreversible — all services using the old credentials stop working instantly.",
        checks: [
          "Is a credential rotation procedure documented for your team?",
          "Do you know how to find which services use each API client?",
        ],
        media: null,
      },
      {
        title: "Create a new webhook",
        body: "In Suger Console, go to <strong>Settings → Notifications</strong>, click <strong>Create Webhook</strong>. Enter your <strong>Payload URL</strong> and a <strong>Webhook Secret</strong>; Content Type defaults to <code>application/json</code>. Suger signs every payload with HMAC-SHA256 using this secret — your server must verify the <code>X-Suger-Signature-256</code> header (signatures are prefixed <code>sha256=</code>) before processing. Note: only <strong>one webhook is allowed per organization</strong> — creating a new one requires deleting the existing one first.",
        terms: [{ name: "Webhook", slug: "webhook" }],
        link: {
          label: "Configure Webhooks (Suger Docs) →",
          url: "https://doc.suger.io/get-started/webhook/",
        },
        checks: [
          "Is a Webhook Secret configured — not left blank?",
          "Does your server verify the X-Suger-Signature-256 header (not X-Suger-Signature) before processing payloads?",
          "Does your team know only one webhook exists per org, so replacing it means deleting the old one first?",
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
    sourceUrl: "https://doc.suger.io/billing/billable-metrics/",
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
    sourceUrl: "https://doc.suger.io/get-started/email-notification/",
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
          label: "About Email Notification Scopes (Suger Docs) →",
          url: "https://doc.suger.io/get-started/email-notification/",
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
          label: "Build custom email templates (Suger Docs) →",
          url: "https://doc.suger.io/get-started/email-notification/",
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
    estimated: "~45 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/integrations/okta-sso/",
    steps: [
      {
        title: "Initialize the Suger Application in Okta",
        body: "In Okta Admin Console, navigate to <strong>Applications → Browse App Catalog</strong> and search for Suger. Add the Suger OIDC app to your Okta organization. In the app's <strong>General</strong> settings, enter placeholder values initially, including a placeholder <strong>Organization ID</strong> (e.g. <code>SugerOrg</code>) and SCIM URL (e.g. <code>https://www.suger.io/</code>) — you'll replace these with real values later. Navigate to the <strong>Sign On</strong> tab and copy the <strong>Client ID</strong>, <strong>Client Secret</strong>, and <strong>Okta Domain</strong>.",
        checks: [
          "Is the Suger app added to your Okta organization?",
          "Do you have the Client ID, Client Secret, and Okta Domain copied?",
        ],
        media: null,
      },
      {
        title: "Configure the SSO connection in Suger Console",
        body: "In Suger Console, navigate to <strong>Settings → SSO</strong>. Click <strong>Set up SSO</strong> — this generates a <strong>24-hour setup ticket</strong> and opens an Auth0-hosted configuration wizard, so complete it in one sitting rather than starting and coming back later. Enter your <strong>Okta Domain</strong>, <strong>Client ID</strong>, and <strong>Client Secret</strong> from Step 1, and note your <strong>Organization ID</strong> — it's used both in Okta's General settings and in the SP-initiated login URL (<code>https://console.suger.io/login?orgId={org_id}</code>). Save to activate. Test by logging in via Okta before making SSO mandatory.",
        link: {
          label: "Open Suger Console → Settings → SSO →",
          url: "https://console.suger.io",
        },
        checks: [
          "Was the SSO setup completed within the 24-hour ticket window?",
          "Is 'Continue with Okta' visible on the Suger login page?",
          "Did you test a successful Okta login before enforcing SSO for all users?",
        ],
        media: null,
      },
      {
        title: "Generate a SCIM token (self-service, not a support request)",
        body: "This is self-service — don't email support for it. In Suger Console → Settings → SSO, find your connection, click the <strong>SCIM</strong> dropdown, and click <strong>+ Generate New Token</strong>. Suger does <strong>not store this token</strong> — copy it immediately, you won't see it again. In Okta → Suger App → Provisioning tab, enable API Integration and enter your real SCIM Endpoint URL (must end with a trailing slash) and this token, then activate Create Users, Update Attributes, and Deactivate Users.",
        checks: [
          "Was the SCIM token generated in Suger Console yourself, not requested via a support email?",
          "Was the token copied immediately after generation (Suger doesn't store it)?",
          "Does the SCIM Endpoint URL have a trailing slash?",
          "Are Create, Update, and Deactivate toggles enabled in Okta Provisioning?",
        ],
        media: null,
      },
      {
        title: "Implement Role-Based Access Control (RBAC) — two attributes, not one",
        body: "This needs <strong>two</strong> custom attributes, not just one. First, in Okta's <strong>Profile Editor</strong>, create a user attribute <code>sugerRole</code> with allowed values <code>ADMIN</code>, <code>EDITOR</code>, <code>VIEWER</code>. Second, under <strong>Profile Editor → Apps → Suger App user</strong>, create a separate SCIM-specific attribute: External name <code>roles.^[type=='SUGER_ROLE'].value</code>, External namespace matching your SCIM schema, Attribute type <code>Group</code>, Required = Yes. Then in the <strong>Provisioning tab → To App</strong> section, map <code>sugerRole</code> from the Okta profile to this attribute, applying on \"Create and update.\" Finally, assign users via Okta groups named exactly <strong>Suger Admins</strong>, <strong>Suger Editors</strong>, <strong>Suger Viewers</strong> (no hyphens), using an attribute override per group under the <strong>Assignments</strong> tab.",
        link: {
          label: "Configure and manage Okta SSO (Suger Docs) →",
          url: "https://doc.suger.io/integrations/okta-sso/",
        },
        checks: [
          "Is the sugerRole user attribute created in Okta Profile Editor?",
          "Is the second, SCIM-specific attribute also created under Profile Editor → Apps → Suger App user, and mapped in Provisioning → To App?",
          "Are the three Okta groups named exactly 'Suger Admins' / 'Suger Editors' / 'Suger Viewers'?",
          "Did you test login for each role to confirm permissions are applied correctly?",
        ],
        media: null,
      },
      {
        title: "Know what changes once this is live",
        body: "Once SCIM provisioning is active, <strong>all user management — creation, deactivation, and role changes — must happen in Okta</strong>. Manual changes made directly in the Suger console will be overridden by the next Okta sync. Only <code>email</code> and <code>sugerRole</code> actually sync between the two systems, and deprovisioning can take up to 24 hours to reflect in the Suger console — plan offboarding with that delay in mind.",
        checks: [
          "Does your team know that manual user changes in Suger Console will be overwritten by Okta once SCIM is active?",
          "Is offboarding process documented to account for the up-to-24-hour deprovisioning delay?",
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
    estimated: "~20 min",
    status: "for-review",
    sourceUrl: "https://doc.suger.io/cosell/cosell-funding/",
    steps: [
      {
        title: "Confirm prerequisites and activate funding",
        body: "AWS funding eligibility here isn't about ISV Accelerate — it requires (1) an active <strong>AWS ACE integration</strong> in Suger (Settings → Integrations), and (2) your ACE portal fully migrated to <strong>Partner Central 3.0</strong>, which AWS mandates for Funding Benefits API access. To activate: go to <strong>Settings → Integrations → AWS ACE (Partner Central API) → Edit</strong> and toggle <strong>Enable Funding Application</strong> yourself — this is self-service, not a support request. Salesforce users should assign the dedicated <strong>Suger Funding</strong> permission set (not \"Suger Integrator\").",
        checks: [
          "Is AWS ACE integration active, and has Partner Central 3.0 migration been completed?",
          "Did you self-activate via Settings → Integrations → AWS ACE → Edit → Enable Funding Application?",
          "For Salesforce users: is the 'Suger Funding' permission set assigned (not 'Suger Integrator')?",
        ],
        media: null,
      },
      {
        title: "Submit a funding request",
        body: "In Suger Console, go to the <strong>Funding Request</strong> tab and click <strong>Create Fund Request</strong> (you can also submit from an open Salesforce opportunity or HubSpot deal via the Suger widget/card). Select the funding type — <strong>POC</strong>, <strong>MDF</strong>, or one of the other three AWS programs available through this same flow (Migration Acceleration Program, ISV Workload Migration, MPOPP Grow). Fill in customer details, linked ACE opportunity, amount, and activity description. For POC requests specifically: the MRR you enter must <strong>exactly match</strong> the calculator's output — even a small mismatch gets the request rejected.",
        link: {
          label: "Open Suger Console → Funding →",
          url: "https://console.suger.io",
        },
        checks: [
          "Is the funding type correct for this request?",
          "Is the request linked to the relevant ACE opportunity?",
          "For POC: does the entered MRR exactly match the calculator's output?",
        ],
        media: null,
      },
      {
        title: "Track the funding lifecycle",
        body: "Monitor the funding request status in Suger → Funding Request. The real status values are <strong>PENDING_SUBMISSION, IN_REVIEW, APPROVED, REJECTED, ACTION_REQUIRED</strong> — there's no separate \"Active\" or \"Claimed\" status on the request itself (claims have their own tracking, see next step). Status refreshes roughly every <strong>3 hours</strong>, not in real time, so don't expect an immediate update after AWS acts on it. If flagged ACTION_REQUIRED, respond promptly to avoid expiry.",
        checks: [
          "Are you tracking against the real statuses (PENDING_SUBMISSION/IN_REVIEW/APPROVED/REJECTED/ACTION_REQUIRED)?",
          "Does your team know status updates roughly every 3 hours, not instantly?",
          "If ACTION_REQUIRED: did you respond with the requested information?",
        ],
        media: null,
      },
      {
        title: "Submit and track cash claims",
        body: "Once approved funding activities are completed, submit a <strong>Cash Claim</strong> in Suger — attach proof of activity (receipts, event reports, etc.) and submit. Once the claim is approved, its status becomes <strong>\"Awaiting Approval,\"</strong> and you'll receive a direct <strong>Payee Central link</strong> for invoice submission — that link, not the Suger console alone, is where reimbursement actually gets processed.",
        link: {
          label: "Manage AWS funding requests (Suger Docs) →",
          url: "https://doc.suger.io/cosell/cosell-funding/",
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
