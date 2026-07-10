/*
 * All glossary terms. Add new terms in alphabetical order by name.
 * A new entry appears automatically in the glossary, filter results,
 * and the cross-platform comparison table.
 *
 * NAMING  ────────────────────────────────────────────────────────────────────
 *   Format:  "Full Name (Acronym) — Platform"
 *   - Full name first, acronym in parens only if widely used
 *   - Em-dash (—) with a space on both sides
 *   - End with a platform suffix: AWS | Azure | GCP | Snowflake | Alibaba
 *   Good:  "Channel Partner Private Offer (CPPO) — AWS"
 *   Bad:   "CPPO" or "CPPO — aws" or "CPPO (Channel Partner Private Offer)"
 *
 * REQUIRED FIELDS  ───────────────────────────────────────────────────────────
 *   name        string   — naming rules above
 *
 *   tags        string[] — platform + topic tags from data/tags.js
 *               Platforms: "aws" | "azure" | "gcp" | "snowflake" | "alibaba" | "suger"
 *               Topics:    "offers" | "cosell" | "channel" | "integrations" | "funding"
 *
 *   def         string   — 2–4 sentence prose. No bullet points.
 *               Inline HTML allowed for links: <a href="..." target="_blank" rel="noopener">
 *
 *   alias       string   — cross-links to related terms using exact names.
 *               Format:  "Equivalent: [Name] | Related: [Name] | See also: [Name]"
 *               Use "Equivalent:" for the same concept on another platform.
 *               Use "Related:" for connected but distinct concepts.
 *               Never leave blank — use at minimum "Related: X".
 *
 *   source      string   — authoritative URL (official platform docs or Suger docs).
 *               No third-party sources.
 *
 *   difficulty  string   — "beginner" | "intermediate" | "advanced"
 *               beginner:     core concepts anyone new to marketplace needs first
 *               intermediate: requires understanding basics (CPPO, ACE, MACC)
 *               advanced:     operational mechanics, edge cases, platform-specific
 *
 *   category    string   — "fundamentals" | "procurement" | "cosell" |
 *                          "billing" | "operations" | "advanced"
 *
 *   whoFor      string[] — 1–4 values from this list only:
 *               "ISVs / Sellers" | "Enterprise Buyers" | "Channel Partners" |
 *               "Distributors" | "AWS Sales" | "Azure Sales" | "GCP Sales" |
 *               "Suger Users" | "Partner Managers"
 *
 *   useCases    string[] — 2–4 items, each starting with an action verb.
 *               Example: "Closing a custom-priced deal through marketplace"
 *
 *   context     string[] — 2–5 surface names where this term appears in practice.
 *               Example: ["AWS Marketplace", "AWS Partner Central"]
 *
 *   related     { name, slug }[] — links to other terms in this file.
 *               name must exactly match the target term's `name` field.
 *               slug = name lowercased, parens removed, spaces and — → hyphens.
 *               Example: { name: "Private Offer — AWS", slug: "private-offer-—-aws" }
 *
 * EXAMPLE ENTRY  ─────────────────────────────────────────────────────────────
 *   {
 *     name: "Example Term (ET) — AWS",
 *     tags: ["aws", "offers"],
 *     def: "What it is and why it matters. Keep to 2–4 sentences.",
 *     alias: "Equivalent: Example Term — Azure | Related: Private Offer — AWS",
 *     source: "https://docs.aws.amazon.com/marketplace/...",
 *     difficulty: "intermediate",
 *     category: "procurement",
 *     whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
 *     useCases: [
 *       "Verb-first sentence describing a real usage scenario",
 *       "Another scenario starting with a verb",
 *     ],
 *     context: ["AWS Marketplace", "AWS Partner Central"],
 *     related: [
 *       { name: "Private Offer — AWS", slug: "private-offer-—-aws" },
 *     ],
 *   },
 */

export const lastReviewed = "2026-07-06";

export const terms = [
  {
    name: "APN Customer Engagements (ACE) — AWS",
    tags: ["aws", "cosell"],
    def: 'AWS\'s co-sell platform where ISVs and AWS sales teams jointly register, track, and pursue customer opportunities. The AWS equivalent of Microsoft\'s co-sell program or Google Cloud Partner Network co-sell. Accessible at <a href="https://partnercentral.awspartner.com/" target="_blank" rel="noopener">partnercentral.awspartner.com</a>.',
    alias:
      "Related: AWS Partner Network (APN) — AWS, Inbound Referral, Outbound Referral",
    source:
      "https://docs.aws.amazon.com/partner-central/latest/builder-guide/index.html",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "AWS Sales", "Partner Managers"],
    useCases: [
      "Registering co-sell opportunities to get AWS field engagement on active deals",
      "Tracking joint pipeline with AWS sales teams in a shared CRM-like view",
      "Qualifying for ISV Accelerate co-sell benefits and SaaS Co-sell Benefit (SCB)",
    ],
    context: [
      "AWS Partner Central",
      "ACE Pipeline Manager",
      "ISV Accelerate",
      "Co-sell Motions",
    ],
    related: [
      {
        name: "AWS Partner Network (APN) — AWS",
        slug: "aws-partner-network-apn-—-aws",
      },
      { name: "ISV Accelerate — AWS", slug: "isv-accelerate-—-aws" },
      { name: "Co-sell", slug: "co-sell" },
    ],
  },
  {
    name: "Agreement-Based Offer (ABO) — AWS",
    tags: ["aws", "offers"],
    def: "An AWS Marketplace feature that lets sellers create a new offer on top of an existing buyer agreement — used for renewals, upgrades, or amendments without requiring the buyer to start a new subscription from scratch. ABOs are only supported for SaaS Contract and SaaS Contract with Consumption products — AMI, container, SaaS Subscription, and professional services offers do not support amendments. Amended offers become active immediately upon buyer acceptance; no future start date is possible.",
    alias: "Related: Agreement — AWS, Future Dated Agreement — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/private-offers-overview.html",
    difficulty: "advanced",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Renewing an existing buyer agreement without requiring them to start a new subscription from scratch",
      "Creating a future-dated upgrade offer on top of an active contract term",
    ],
    context: ["AWS Marketplace", "AWS Seller Central", "Private Offer Flows"],
    related: [
      { name: "Agreement — AWS", slug: "agreement-—-aws" },
      {
        name: "Future Dated Agreement — AWS",
        slug: "future-dated-agreement-—-aws",
      },
      { name: "Private Offer", slug: "private-offer" },
    ],
  },
  {
    name: "Agreement — AWS",
    tags: ["aws"],
    def: "The formal contract created when a buyer accepts an AWS Marketplace offer. Equivalent to Entitlement in Suger. Identified by an Agreement ID. Agreements can be renewed or amended via ABOs.",
    alias:
      "Suger equivalent: Entitlement | Related: Agreement-Based Offer (ABO) — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/private-offers-overview.html",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers", "Suger Users"],
    useCases: [
      "Tracking the active contract created after a buyer accepts a private offer on AWS",
      "Referencing an Agreement ID in support requests or API-based lifecycle calls",
    ],
    context: [
      "AWS Marketplace",
      "Suger Console",
      "AWS Marketplace Management Portal (AMMP)",
    ],
    related: [
      {
        name: "Agreement-Based Offer (ABO) — AWS",
        slug: "agreement-based-offer-abo-—-aws",
      },
      { name: "Entitlement", slug: "entitlement" },
      { name: "Private Offer", slug: "private-offer" },
    ],
  },
  {
    name: "Amazon Machine Image (AMI) — AWS",
    tags: ["aws"],
    def: "A pre-configured virtual machine image listed on AWS Marketplace. ISVs package their software as an AMI for buyers to deploy on EC2 instances. Can be priced hourly, with an annual contract, or as BYOL.",
    alias:
      "Related: Bring Your Own License (BYOL), Contract — AWS, Product Code — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/ami-products.html",
    difficulty: "intermediate",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Listing a server-side software product on AWS Marketplace for EC2 deployment",
      "Offering BYOL or hourly-priced software to buyers who manage their own infrastructure",
    ],
    context: [
      "AWS Marketplace",
      "EC2 Console",
      "AWS Marketplace Management Portal (AMMP)",
    ],
    related: [
      { name: "Listing", slug: "listing" },
      {
        name: "Bring Your Own License (BYOL)",
        slug: "bring-your-own-license-byol",
      },
      { name: "Contract — AWS", slug: "contract-—-aws" },
    ],
  },
  {
    name: "Suger Analytics",
    tags: ["suger"],
    def: "Suger's built-in analytics platform for tracking marketplace revenue, entitlement status, usage consumption, and co-sell pipeline across all connected marketplaces. Users can build fully customizable dashboards using a reusable chart library, organize data across multiple named datasets (Finance, Offers, Co-sell, Billing), and share dashboards collaboratively across the organization in real time. Analytics supports AI-powered conversational dashboard design — users describe a chart in natural language and Suger generates it automatically — as well as AI-powered automated recommendations and predictive analytics that surface insights and forecast trends without manual configuration.",
    alias: "Related: Revenue, Table Export, Suger Console",
    source: "https://doc.suger.io/analytics/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Building a customized revenue dashboard from Suger's chart library to track marketplace disbursements, entitlement volume, and co-sell pipeline in one view",
      "Using conversational AI chart design to generate Suger Analytics charts from plain-language descriptions without manual configuration",
      "Sharing a Finance or Billing Analytics dashboard across RevOps and finance teams for unified marketplace revenue reporting",
    ],
    context: ["Suger Console", "Analytics Dashboard", "Billing Analytics"],
    related: [
      { name: "Suger Console", slug: "suger-console" },
      { name: "Revenue", slug: "revenue" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "AppSource — Azure",
    tags: ["azure"],
    def: "Microsoft's former marketplace storefront for business applications integrating with Microsoft 365, Dynamics 365, and Power Platform. As of September 2025, AppSource has been consolidated into the unified Microsoft Marketplace alongside Azure Marketplace.",
    alias: "Now part of: Microsoft Marketplace — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/overview",
    difficulty: "beginner",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Understanding the history of Azure's marketplace before the Microsoft Marketplace unification in 2025",
      "Recognizing that AppSource listings are now unified under Microsoft Marketplace",
    ],
    context: ["Microsoft Marketplace — Azure", "Partner Center — Azure"],
    related: [
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
      { name: "Partner Center — Azure", slug: "partner-center-—-azure" },
    ],
  },
  {
    name: "AWS Marketplace — AWS",
    tags: ["aws"],
    def: "Amazon's digital catalog where ISVs list and sell software, SaaS, data products, and professional services to AWS customers. Purchases are billed through the customer's AWS account.",
    alias:
      "Related: AWS Marketplace Management Portal (AMMP) — AWS, AWS Marketplace Catalog API — AWS, AWS Partner Network (APN) — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/what-is-marketplace.html",
    difficulty: "beginner",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers", "AWS Sales"],
    useCases: [
      "Listing software for AWS customers to discover and purchase through their AWS account",
      "Reaching enterprise buyers who want to apply committed EDP spend through marketplace transactions",
    ],
    context: ["AWS Console", "AWS Partner Central", "Suger Console"],
    related: [
      { name: "Listing", slug: "listing" },
      { name: "Private Offer", slug: "private-offer" },
      {
        name: "Enterprise Discount Program (EDP) — AWS",
        slug: "enterprise-discount-program-edp-—-aws",
      },
    ],
  },
  {
    name: "AWS Marketplace Catalog API — AWS",
    tags: ["aws"],
    def: "The programmatic interface sellers use to manage product listings, offers, and changes in AWS Marketplace without using the seller console. Suger uses this API on sellers' behalf.",
    alias:
      "Related: AWS Marketplace Management Portal (AMMP) — AWS, Suger Console",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/APIReference/welcome.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Programmatically creating or updating product listings and offers without using the seller console",
      "Automating marketplace operations through Suger's built-in API integration with AWS",
    ],
    context: ["AWS Marketplace", "Suger Console", "ISV Backend Systems"],
    related: [
      {
        name: "AWS Marketplace Management Portal (AMMP) — AWS",
        slug: "aws-marketplace-management-portal-ammp-—-aws",
      },
      { name: "Suger Console", slug: "suger-console" },
      { name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" },
    ],
  },
  {
    name: "AWS Marketplace Management Portal (AMMP) — AWS",
    tags: ["aws"],
    def: 'The web-based portal where AWS Marketplace sellers create and manage listings, private offers, agreements, and reports. Also known as Seller Central for marketplace. Accessible at <a href="https://aws.amazon.com/marketplace/management/" target="_blank" rel="noopener">aws.amazon.com/marketplace/management</a>.',
    alias:
      "Azure equivalent: Partner Center — Azure | GCP equivalent: Producer Portal — GCP | Related: AWS Marketplace Catalog API — AWS, Suger Console",
    source: "https://docs.aws.amazon.com/marketplace/latest/userguide/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Creating and managing product listings, private offers, and agreements on AWS Marketplace",
      "Reviewing seller revenue reports and monitoring listing performance via the AWS seller UI",
    ],
    context: ["AWS Marketplace", "AWS Seller Operations"],
    related: [
      {
        name: "AWS Marketplace Catalog API — AWS",
        slug: "aws-marketplace-catalog-api-—-aws",
      },
      { name: "Private Offer", slug: "private-offer" },
      { name: "Suger Console", slug: "suger-console" },
    ],
  },
  {
    name: "AWS Partner Network (APN) — AWS",
    tags: ["aws"],
    def: "Amazon's global partner program for technology and consulting companies. Marketplace sellers are typically APN members, unlocking access to co-sell (ACE), funding, and go-to-market resources.",
    alias:
      "Azure equivalent: Microsoft AI Cloud Partner Program (MPN) — Azure | GCP equivalent: Google Cloud Partner Network — GCP | Related: APN Customer Engagements (ACE) — AWS, AWS Competency Program — AWS",
    source: "https://aws.amazon.com/partners/",
    difficulty: "beginner",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "AWS Sales", "Partner Managers"],
    useCases: [
      "Enrolling as an APN member to unlock co-sell access, marketplace listing eligibility, and AWS funding programs",
      "Tracking APN tier progression to qualify for ISV Accelerate and higher-tier MDF benefits",
    ],
    context: ["AWS Partner Central", "Co-sell Programs", "ISV Programs"],
    related: [
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
      { name: "ISV Accelerate — AWS", slug: "isv-accelerate-—-aws" },
      { name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" },
    ],
  },
  {
    name: "Microsoft Marketplace — Azure",
    tags: ["azure"],
    def: "Microsoft's unified marketplace platform launched September 25, 2025 — merging Azure Marketplace and AppSource into a single destination. Covers cloud solutions, SaaS, AI apps and agents, industry solutions, and professional services. Features a dedicated AI Apps and Agents category with 3,000+ solutions. Deeply integrated with Azure AI Foundry, Microsoft 365 Copilot, Teams, and Dynamics 365. Purchases by MACC-eligible customers count toward their Azure commitment.",
    alias:
      "Formerly: Azure Marketplace, AppSource | Related: Azure Consumption Commitment (MACC) — Azure, MISA (Microsoft Intelligent Security Association) — Azure, Marketplace Rewards — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/overview",
    difficulty: "beginner",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers", "Azure Sales"],
    useCases: [
      "Listing transactable SaaS or cloud solutions for Microsoft enterprise customers",
      "Reaching buyers whose MACC commitment can draw down against eligible marketplace purchases",
    ],
    context: ["Partner Center — Azure", "Azure Portal", "Microsoft Sales"],
    related: [
      {
        name: "Azure Consumption Commitment (MACC) — Azure",
        slug: "azure-consumption-commitment-macc-—-azure",
      },
      { name: "Partner Center — Azure", slug: "partner-center-—-azure" },
      { name: "Listing", slug: "listing" },
    ],
  },
  {
    name: "Billing Integration",
    tags: ["general", "suger"],
    def: "The technical connection between a marketplace and an ISV's system enabling automated invoicing, usage reporting, and payout reconciliation. Required for transactable listings.",
    alias:
      "Related: SaaS Fulfillment API — Azure, Procurement API — GCP, Signup URL Redirect",
    source: "https://doc.suger.io/get-started/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Connecting an ISV's system to a cloud marketplace to automate subscription lifecycle and usage reporting",
      "Setting up Suger as the billing integration layer to handle entitlement provisioning across AWS, Azure, and GCP",
    ],
    context: [
      "Suger Console",
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
    ],
    related: [
      { name: "Entitlement", slug: "entitlement" },
      { name: "Landing Page / Signup URL", slug: "landing-page-/-signup-url" },
      { name: "Usage Metering", slug: "usage-metering" },
    ],
  },
  {
    name: "Bring Your Own License (BYOL)",
    tags: ["general", "aws", "azure", "gcp"],
    def: "A marketplace listing model where the buyer has already purchased a license directly from the ISV outside the marketplace. The marketplace handles deployment but not billing. Not eligible for committed spend drawdown.",
    alias: "Related: Transactable Offer, Listing",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/ami-products.html",
    difficulty: "beginner",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Listing software on marketplace for discoverability when the buyer already has a license purchased directly",
      "Distinguishing BYOL listings from transactable offers when advising buyers on committed spend eligibility",
    ],
    context: [
      "AWS Marketplace",
      "GCP Marketplace",
      "Azure Marketplace",
      "Listing Types",
    ],
    related: [
      { name: "Listing", slug: "listing" },
      { name: "Transactable Offer", slug: "transactable-offer" },
      {
        name: "Committed Spend / Cloud Commit",
        slug: "committed-spend-/-cloud-commit",
      },
    ],
  },
  {
    name: "Buyer",
    tags: ["suger", "general"],
    def: "In Suger, the entity that has purchased a product through a marketplace. Has a tracked ID and maps to different entities across platforms.",
    alias:
      "AWS: Customer Identifier | Azure: Purchaser PUID | GCP: User Account Id",
    source: "https://doc.suger.io/get-started/",
    difficulty: "beginner",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Identifying the purchasing entity behind an entitlement in Suger across different marketplace platforms",
      "Mapping marketplace buyer IDs to internal CRM accounts for deal tracking",
    ],
    context: [
      "Suger Console",
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
    ],
    related: [
      { name: "Entitlement", slug: "entitlement" },
      { name: "Offer", slug: "offer" },
      { name: "Buyer Wallet", slug: "buyer-wallet" },
    ],
  },
  {
    name: "Channel Partner (CP)",
    tags: ["aws", "azure", "gcp", "general", "channel"],
    def: "A reseller, system integrator (SI), or managed service provider (MSP) authorized by an ISV to resell marketplace products to end customers. The channel partner typically becomes the seller of record.",
    alias:
      "Related: Channel Partner Private Offer (CPPO) — AWS, Multiparty Private Offer (MPO) — Azure",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/channel-partner-offers.html",
    difficulty: "beginner",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Distributors"],
    useCases: [
      "Identifying which partners are authorized to transact your product on marketplace on behalf of end customers",
      "Structuring resale motions where a partner becomes the seller of record in a CPPO or MPO transaction",
    ],
    context: [
      "Channel Programs",
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
    ],
    related: [
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
      },
      {
        name: "Multiparty Private Offer (MPO) — Azure",
        slug: "multiparty-private-offer-mpo-—-azure",
      },
      { name: "Seller of Record", slug: "seller-of-record" },
    ],
  },
  {
    name: "Cloud Go-to-Market (Cloud GTM)",
    tags: ["general"],
    def: "A sales and distribution strategy centered on cloud marketplaces — combining listing, transacting, and co-selling to reach enterprise buyers and shorten sales cycles.",
    alias: "Related: Suger Console, Co-sell",
    source: "https://aws.amazon.com/partners/programs/isv-accelerate/",
    difficulty: "beginner",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Framing your overall marketplace and co-sell strategy as a unified cloud distribution motion",
      "Positioning marketplace listing and co-sell as core revenue channels alongside direct sales",
    ],
    context: ["Go-to-Market Planning", "Sales Strategy", "Partner Programs"],
    related: [
      { name: "Co-sell", slug: "co-sell" },
      { name: "Listing", slug: "listing" },
      { name: "Suger Console", slug: "suger-console" },
    ],
  },
  {
    name: "Co-sell",
    tags: ["suger", "cosell"],
    def: "A partnership motion where an ISV and a cloud provider's sales team jointly pursue a customer opportunity. Unlocks pipeline sharing, deal acceleration, and marketplace incentives. Managed in Suger via the Co-sell module.",
    alias:
      "Related: APN Customer Engagements (ACE) — AWS, Google Cloud Partner Network — GCP, MISA (Microsoft Intelligent Security Association) — Azure",
    source: "https://doc.suger.io/cosell/",
    difficulty: "beginner",
    category: "cosell",
    whoFor: [
      "ISVs / Sellers",
      "AWS Sales",
      "GCP Sales",
      "Azure Sales",
      "Partner Managers",
    ],
    useCases: [
      "Sharing a qualified deal with AWS, Azure, or GCP sales teams to accelerate the enterprise sales cycle",
      "Registering opportunities in ACE, Google Cloud Partner Network, or Partner Center to unlock co-sell incentives",
    ],
    context: [
      "Suger Console",
      "AWS Partner Central",
      "Google Cloud Partner Network",
      "Azure Partner Center",
    ],
    related: [
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
      {
        name: "Google Cloud Partner Network — GCP",
        slug: "google-cloud-partner-network-—-gcp",
      },
      { name: "Inbound Referral", slug: "inbound-referral" },
    ],
  },
  {
    name: "Co-sell Eligible / Incentivized — Azure",
    tags: ["azure", "cosell"],
    def: "Microsoft's three-tier co-sell status system for Microsoft Marketplace offers: In-market (live transactable listing required), Co-sell Ready (In-market plus solution one-pager and pitch deck in Partner Center), and Azure IP Co-sell Eligible (Co-sell Ready plus ≥$100K Azure Consumed Revenue or Marketplace Billed Sales in the trailing 12 months at the org level, Azure-based technical validation, a transactable offer, and a reference architecture diagram for most offer types). Azure IP Co-sell Eligible status unlocks MACC eligibility and prioritized Microsoft seller engagement. Microsoft field sellers earn incentive credit (via MCI) for selling Azure IP Co-sell Eligible offers.",
    alias:
      "Related: Azure Consumption Commitment (MACC) — Azure, Microsoft Marketplace — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/referrals/co-sell-requirements",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Azure Sales", "Partner Managers"],
    useCases: [
      "Achieving Azure IP Co-sell status to make your listing MACC-eligible for enterprise buyers",
      "Qualifying for Co-sell Incentivized status so Microsoft sellers earn quota credit on deals involving your product",
    ],
    context: [
      "Partner Center — Azure",
      "Microsoft Marketplace",
      "Azure Co-sell Programs",
    ],
    related: [
      {
        name: "Azure Consumption Commitment (MACC) — Azure",
        slug: "azure-consumption-commitment-macc-—-azure",
      },
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
      {
        name: "Marketplace Rewards — Azure",
        slug: "marketplace-rewards-—-azure",
      },
    ],
  },
  {
    name: "Combined Pricing — GCP",
    tags: ["gcp"],
    def: "A GCP pricing model pairing a flat-rate subscription commit with usage-based metering. Buyers pay a base fee plus charges for consumption above the included amount.",
    alias: "Related: Usage Metering, Price Model",
    source:
      "https://docs.cloud.google.com/marketplace/docs/partners/integrated-saas",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Pricing a GCP Marketplace SaaS product with a base subscription plus metered overage for heavy users",
      "Structuring a deal that includes a predictable floor price alongside flexible consumption billing",
    ],
    context: [
      "GCP Marketplace",
      "Producer Portal — GCP",
      "Pricing Configuration",
    ],
    related: [
      { name: "Usage Metering", slug: "usage-metering" },
      { name: "Overage", slug: "overage" },
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
    ],
  },
  {
    name: "Commit / Prepaid Commit",
    tags: ["general", "aws", "azure", "gcp"],
    def: "An upfront amount or quantity a buyer commits to paying at contract start, regardless of actual usage. Often combined with metered overage billing for usage above the committed amount.",
    alias: "Related: Commit with Additional Usage Metering, Overage",
    source: "https://doc.suger.io/billing/metering/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers", "Suger Users"],
    useCases: [
      "Structuring a contract with a guaranteed minimum payment alongside usage-based overage billing",
      "Configuring prepaid commit amounts in Suger offer price models for AWS, Azure, or GCP listings",
    ],
    context: [
      "Suger Console",
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
    ],
    related: [
      {
        name: "Commit with Additional Usage Metering",
        slug: "commit-with-additional-usage-metering",
      },
      { name: "Overage", slug: "overage" },
      { name: "Metered Billing", slug: "metered-billing" },
    ],
  },
  {
    name: "Commit with Additional Usage Metering",
    tags: ["suger"],
    def: "A Suger feature that accumulates all reported usage against the entitlement commit. Only usage exceeding the commit is forwarded to the marketplace as billable overage — simplifying ISV-side metering logic.",
    alias: "Related: Commit / Prepaid Commit, Overage, Usage Metering",
    source: "https://doc.suger.io/billing/metering/",
    difficulty: "advanced",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Simplifying metering logic by letting Suger track cumulative usage and only forward overage to the marketplace",
      "Avoiding double-billing by ensuring usage within the commit is absorbed before reporting to AWS or Azure",
    ],
    context: ["Suger Console", "Usage Metering Configuration"],
    related: [
      { name: "Commit / Prepaid Commit", slug: "commit-/-prepaid-commit" },
      { name: "Overage", slug: "overage" },
      { name: "Usage Metering", slug: "usage-metering" },
    ],
  },
  {
    name: "Committed Spend / Cloud Commit",
    tags: ["general"],
    def: "A pre-negotiated spending commitment an enterprise makes with a cloud provider. Software purchased via transactable marketplace listings typically counts toward drawing down this commitment — a major driver of enterprise marketplace buying.",
    alias:
      "AWS: Enterprise Discount Program (EDP) — AWS | Azure: Azure Consumption Commitment (MACC) — Azure | GCP: Committed Use Discount (CUD) — GCP",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/private-offers.html",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Positioning marketplace transactable listings to enterprise buyers who want to draw down their EDP, MACC, or CUD commitment",
      "Understanding why enterprise buyers prefer marketplace procurement over direct purchasing",
    ],
    context: ["Enterprise Sales", "Marketplace Procurement", "Cloud Budgeting"],
    related: [
      {
        name: "Enterprise Discount Program (EDP) — AWS",
        slug: "enterprise-discount-program-edp-—-aws",
      },
      {
        name: "Azure Consumption Commitment (MACC) — Azure",
        slug: "azure-consumption-commitment-macc-—-azure",
      },
      {
        name: "Committed Use Discount (CUD) — GCP",
        slug: "committed-use-discount-cud-—-gcp",
      },
    ],
  },
  {
    name: "Commit Drawdown — Suger",
    tags: ["suger", "billing"],
    def: "Suger's cross-cloud comparison of how a marketplace purchase retires a customer's committed-spend agreement — AWS EDP/PPA, Azure MACC, or GCP CUD. Azure draws down 100% of the pretax purchase with no cap; AWS and GCP channel offers typically cap drawdown around 25%, a negotiated term rather than a published figure, so the exact cap must be confirmed in the customer's agreement. AWS and Azure only retire commit when the product is hosted on their own cloud — AWS requires the 'Deployed on AWS' badge and Azure requires 'Azure benefit eligible' status plus a purchase through the Azure portal path — while GCP has no hosting requirement and any transactable listing is auto-eligible.",
    alias:
      "Related: Committed Spend / Cloud Commit, Enterprise Discount Program (EDP) — AWS, Azure Consumption Commitment (MACC) — Azure, Committed Use Discount (CUD) — GCP",
    source: "https://doc.suger.io/billing/revenue/",
    difficulty: "advanced",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users", "Partner Managers"],
    useCases: [
      "Setting accurate customer expectations before a sale by confirming whether the product's hosting location qualifies for AWS EDP/PPA, Azure MACC, or GCP CUD drawdown",
      "Diagnosing why a completed purchase didn't reduce a customer's AWS EDP or Azure MACC balance by checking hosting and portal-path requirements",
      "Advising a GCP-hosted product's go-to-market team that GCP drawdown is the only cloud commitment they can realistically retire without a multi-cloud hosting footprint",
    ],
    context: [
      "Suger Console",
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
    ],
    related: [
      {
        name: "Committed Spend / Cloud Commit",
        slug: "committed-spend-/-cloud-commit",
      },
      {
        name: "Enterprise Discount Program (EDP) — AWS",
        slug: "enterprise-discount-program-edp-—-aws",
      },
      {
        name: "Azure Consumption Commitment (MACC) — Azure",
        slug: "azure-consumption-commitment-macc-—-azure",
      },
    ],
  },
  {
    name: "Contract — AWS",
    tags: ["aws"],
    def: "An AWS pricing model where a buyer commits upfront to a fixed fee for a defined term (up to 3 years). Can include a consumption/PAYG component for usage above the contract amount. Cannot be cancelled mid-term.",
    alias: "",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/contract-pricing.html",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Selling annual or multi-year upfront commitments on AWS Marketplace with optional metered overage",
      "Structuring an enterprise deal with a fixed-term, non-cancellable commitment via AWS Marketplace",
    ],
    context: [
      "AWS Marketplace",
      "Private Offer Flows",
      "Enterprise Procurement",
    ],
    related: [
      { name: "Private Offer", slug: "private-offer" },
      { name: "Agreement — AWS", slug: "agreement-—-aws" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "Channel Partner Private Offer (CPPO) — AWS",
    tags: ["aws", "cosell", "offers", "channel"],
    def: "A program where an ISV creates a selling authorization (also called resale authorization) with a wholesale price that an authorized channel partner uses to create a private offer — with markup — for an end customer. The channel partner is the seller of record.",
    alias:
      "GCP equivalent: Marketplace Channel Private Offer (MCPO) — GCP | Azure equivalent: Multiparty Private Offer (MPO) — Azure | Related: Resale Authorization — AWS, Solution Provider Private Offer (SPPO) — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/channel-partner-offers.html",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Distributors"],
    useCases: [
      "Enabling a channel partner to resell your AWS Marketplace product with a custom markup",
      "Routing an enterprise deal through a strategic reseller while preserving marketplace attribution",
      "Applying a committed spend discount for a buyer while a partner manages the relationship",
    ],
    context: [
      "AWS Marketplace",
      "AWS Seller Central",
      "Channel Programs",
      "Co-sell Motions",
    ],
    related: [
      {
        name: "Resale Authorization — AWS",
        slug: "resale-authorization-—-aws",
      },
      {
        name: "Marketplace Channel Private Offer (MCPO) — GCP",
        slug: "marketplace-channel-private-offer-mcpo-—-gcp",
      },
      {
        name: "Multiparty Private Offer (MPO) — Azure",
        slug: "multiparty-private-offer-mpo-—-azure",
      },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "CRM Integration",
    tags: ["suger", "cosell", "integrations"],
    def: "Suger's connections to Salesforce and HubSpot that sync marketplace entitlements, co-sell referrals, and deal data bi-directionally with your sales team's CRM.",
    alias:
      "Related: Salesforce Integration, HubSpot Integration, Salesforce App, HubSpot App",
    source: "https://doc.suger.io/integrations/salesforce/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users", "Partner Managers"],
    useCases: [
      "Syncing marketplace entitlement events into Salesforce or HubSpot opportunities automatically",
      "Surfacing co-sell referral status and deal data inside your CRM without manual exports",
    ],
    context: ["Suger Console", "Salesforce", "HubSpot", "Co-sell Workflows"],
    related: [
      { name: "Salesforce Integration", slug: "salesforce-integration" },
      { name: "HubSpot Integration", slug: "hubspot-integration" },
      { name: "Co-sell", slug: "co-sell" },
    ],
  },
  {
    name: "Cloud Solution Provider (CSP) — Azure",
    tags: ["azure", "cosell", "channel"],
    def: "A Microsoft partner program that lets authorized partners resell Microsoft cloud services and ISV Marketplace solutions to end customers. ISVs can create margin-sharing private offers for CSP partners via Multiparty Private Offers.",
    alias:
      "Related: Multiparty Private Offer (MPO) — Azure, Microsoft Marketplace — Azure",
    source: "https://learn.microsoft.com/en-us/partner-center/csp-overview",
    difficulty: "intermediate",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Distributors"],
    useCases: [
      "Enabling authorized CSP partners to resell your Microsoft Marketplace solution to their enterprise customers",
      "Creating Multiparty Private Offers for CSP partners to set their own margin on your product",
    ],
    context: [
      "Partner Center — Azure",
      "Microsoft Marketplace",
      "Channel Programs",
    ],
    related: [
      {
        name: "Multiparty Private Offer (MPO) — Azure",
        slug: "multiparty-private-offer-mpo-—-azure",
      },
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
      { name: "Channel Partner (CP)", slug: "channel-partner-cp" },
    ],
  },
  {
    name: "Committed Use Discount (CUD) — GCP",
    tags: ["gcp", "funding"],
    def: "Google Cloud's committed spend program. Enterprises commit to a minimum resource usage over 1–3 years in exchange for discounts. Eligible transactable marketplace purchases count toward CUD drawdown.",
    alias:
      "AWS equivalent: Enterprise Discount Program (EDP) — AWS | Azure equivalent: Azure Consumption Commitment (MACC) — Azure",
    source: "https://docs.cloud.google.com/docs/cuds",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers", "GCP Sales"],
    useCases: [
      "Positioning GCP Marketplace transactable listings as CUD-eligible to enterprise buyers managing their Google Cloud commitment",
      "Understanding how marketplace purchases draw down a buyer's CUD balance on GCP",
    ],
    context: [
      "GCP Marketplace",
      "Enterprise Procurement",
      "Google Cloud Billing",
    ],
    related: [
      {
        name: "Enterprise Discount Program (EDP) — AWS",
        slug: "enterprise-discount-program-edp-—-aws",
      },
      {
        name: "Azure Consumption Commitment (MACC) — Azure",
        slug: "azure-consumption-commitment-macc-—-azure",
      },
      {
        name: "Committed Spend / Cloud Commit",
        slug: "committed-spend-/-cloud-commit",
      },
    ],
  },
  {
    name: "Metering Dimension Conversion — Suger",
    tags: ["suger"],
    def: "A Suger setting that maps dimension keys from your internal metering system to marketplace dimension names using a multiplier factor. Avoids needing to rename dimensions in either system.",
    alias: "Related: Metering Dimension, Usage Metering, Billable Metric",
    source: "https://doc.suger.io/billing/metering/",
    difficulty: "advanced",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Mapping internal usage metric names to marketplace-specific dimension keys without changing either system",
      "Applying a multiplier factor to convert raw usage units into the dimension values expected by the marketplace",
    ],
    context: [
      "Suger Console",
      "Usage Metering Configuration",
      "Marketplace APIs",
    ],
    related: [
      { name: "Metering Dimension", slug: "metering-dimension" },
      { name: "Usage Metering", slug: "usage-metering" },
      { name: "Billable Metric", slug: "billable-metric" },
    ],
  },
  {
    name: "Disbursement",
    tags: ["general", "aws", "azure", "gcp"],
    def: "The payment a cloud marketplace sends to the seller after collecting from the buyer, net of marketplace fees and taxes. Typically processed monthly. Suger provides disbursement reports for all connected marketplaces.",
    alias:
      "Related: Revenue, Disbursement Date, Marketplace Fee / Transaction Fee",
    source: "https://doc.suger.io/billing/revenue/",
    difficulty: "beginner",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Reconciling monthly marketplace payouts against revenue records in Suger",
      "Tracking when marketplace payments are expected to land in your bank account",
    ],
    context: ["Suger Console", "Revenue Dashboard", "Marketplace Payouts"],
    related: [
      { name: "Revenue", slug: "revenue" },
      {
        name: "Marketplace Fee / Transaction Fee",
        slug: "marketplace-fee-/-transaction-fee",
      },
      { name: "Disbursed Amount", slug: "disbursed-amount" },
    ],
  },
  {
    name: "Divide Entitlement Commit",
    tags: ["suger"],
    def: "A Suger feature that splits a single annual upfront commit into monthly sub-entitlements, enabling monthly overage metering against a fraction of the total commitment.",
    alias: "Related: Commit with Additional Usage Metering, Overage",
    source: "https://doc.suger.io/billing/metering/",
    difficulty: "advanced",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Enabling monthly overage billing on an annual upfront deal by dividing the commit into monthly sub-entitlements",
      "Handling complex billing scenarios where the annual commit must be metered incrementally each month",
    ],
    context: ["Suger Console", "Entitlement Configuration", "Usage Metering"],
    related: [
      {
        name: "Commit with Additional Usage Metering",
        slug: "commit-with-additional-usage-metering",
      },
      { name: "Overage", slug: "overage" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "Enterprise Discount Program (EDP) — AWS",
    tags: ["aws", "funding"],
    def: "AWS's committed spend program for enterprises (also called Private Pricing Agreement / PPA). Eligible AWS Marketplace transactable listing purchases count toward EDP drawdown — a key enterprise buying incentive. Minimum commitment thresholds are negotiated privately with AWS and are not publicly disclosed; the $1M figure is widely cited but not officially confirmed.",
    alias:
      "Also known as: Private Pricing Agreement (PPA) — AWS | Azure equivalent: Azure Consumption Commitment (MACC) — Azure | GCP equivalent: Committed Use Discount (CUD) — GCP",
    source: "https://aws.amazon.com/pricing/enterprise/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers", "AWS Sales"],
    useCases: [
      "Positioning AWS Marketplace transactable listings as EDP-eligible to accelerate enterprise deal cycles",
      "Understanding how a buyer's EDP drawdown balance is reduced when they purchase via marketplace",
    ],
    context: ["Enterprise Sales", "AWS Marketplace", "AWS Account Management"],
    related: [
      {
        name: "Committed Spend / Cloud Commit",
        slug: "committed-spend-/-cloud-commit",
      },
      {
        name: "Azure Consumption Commitment (MACC) — Azure",
        slug: "azure-consumption-commitment-macc-—-azure",
      },
      {
        name: "Committed Use Discount (CUD) — GCP",
        slug: "committed-use-discount-cud-—-gcp",
      },
    ],
  },
  {
    name: "Entitlement",
    tags: ["suger"],
    def: "Suger's unified term for the contract/subscription created when a buyer purchases a product on a marketplace. Represents active access rights, billing terms, and the unit for metering.",
    alias:
      "AWS: Agreement — AWS | Azure: Subscription — Azure | GCP: Subscription — GCP",
    source: "https://doc.suger.io/billing/entitlement/",
    difficulty: "beginner",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Suger Users", "Enterprise Buyers"],
    useCases: [
      "Tracking all active buyer contracts and their billing status across connected marketplaces from one view",
      "Using entitlement state to trigger provisioning, cancellation, and renewal workflows in Suger",
    ],
    context: [
      "Suger Console",
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
    ],
    related: [
      { name: "Agreement — AWS", slug: "agreement-—-aws" },
      { name: "Private Offer", slug: "private-offer" },
      { name: "Usage Metering", slug: "usage-metering" },
    ],
  },
  {
    name: "End User License Agreement (EULA)",
    tags: ["general"],
    def: "The legal terms governing a buyer's use of software purchased on a marketplace. Sellers can use a custom EULA, a marketplace standard contract (AWS SCMP, Azure standard contract), or a combination with addendums.",
    alias: "Related: Standard Contract — AWS, Private Offer",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/saas-contracts.html",
    difficulty: "beginner",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Attaching custom legal terms to a private offer to cover enterprise-specific compliance requirements",
      "Using the AWS Standard Contract (SCMP) to reduce buyer legal review time on marketplace deals",
    ],
    context: [
      "AWS Marketplace",
      "Azure Marketplace",
      "Private Offer Flows",
      "Legal Review",
    ],
    related: [
      {
        name: "Standard Contract (SCMP) — AWS",
        slug: "standard-contract-scmp-—-aws",
      },
      { name: "Private Offer", slug: "private-offer" },
      { name: "Agreement — AWS", slug: "agreement-—-aws" },
    ],
  },
  {
    name: "Flat Rate Pricing — Azure",
    tags: ["azure"],
    def: "An Azure pricing model with a fixed monthly or annual fee. Can include a metered overage component where usage above the included quantity triggers additional charges.",
    alias: "",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/plan-saas-offer",
    difficulty: "beginner",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Pricing an Azure Marketplace SaaS offer with a predictable monthly or annual flat fee",
      "Adding a metered overage component on top of the base flat rate for heavy-usage customers",
    ],
    context: ["Partner Center — Azure", "Azure Marketplace", "Pricing Plans"],
    related: [
      { name: "Included Quantity — Azure", slug: "included-quantity-—-azure" },
      { name: "Per User Pricing — Azure", slug: "per-user-pricing-—-azure" },
      { name: "Overage", slug: "overage" },
    ],
  },
  {
    name: "Flexible Payment Schedule / Installment Plan",
    tags: ["general", "aws", "azure"],
    def: "An option on private offers that splits a contract's total value into multiple payments over time (e.g., quarterly installments on an annual deal), aligning to buyer budget cycles.",
    alias: "Related: Private Offer",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/private-offers.html",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Structuring an annual deal with quarterly installment payments to align to the buyer's budget cycle",
      "Offering flexible payment terms on a private offer without reducing total contract value",
    ],
    context: [
      "AWS Marketplace",
      "Azure Marketplace",
      "Private Offer Flows",
      "Enterprise Procurement",
    ],
    related: [
      { name: "Private Offer", slug: "private-offer" },
      { name: "Contract — AWS", slug: "contract-—-aws" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "Free Trial",
    tags: ["general"],
    def: "A marketplace listing option that lets buyers test software at no cost for a set period before converting to a paid subscription. Supported across AWS, Azure, and GCP.",
    alias: "Related: Listing, Transactable Offer",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/saas-free-trials.html",
    difficulty: "beginner",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Lowering buyer friction by offering a time-limited free trial before a marketplace subscription converts to paid",
      "Configuring trial periods on AWS, Azure, or GCP listings to drive product-led growth motions",
    ],
    context: [
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
      "Listing Configuration",
    ],
    related: [
      { name: "Listing", slug: "listing" },
      { name: "Transactable Offer", slug: "transactable-offer" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "Future Dated Agreement — AWS",
    tags: ["aws", "offers"],
    def: "An AWS ABO feature letting sellers create a renewal or upgrade offer with a future start date — up to 3 years in advance — ensuring continuous software access without a coverage gap. Also supported in CPPO transactions: ISVs can optionally cap the maximum future start date a channel partner can specify on a resale authorization.",
    alias:
      "Related: Agreement-Based Offer (ABO) — AWS, Resale Authorization — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/private-offers-overview.html",
    difficulty: "advanced",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Creating a renewal offer that starts the day an existing contract expires, ensuring zero coverage gap",
      "Locking in a future-dated upgrade agreement to secure multi-year terms early in the renewal cycle",
    ],
    context: ["AWS Marketplace", "Private Offer Flows", "Renewal Operations"],
    related: [
      {
        name: "Agreement-Based Offer (ABO) — AWS",
        slug: "agreement-based-offer-abo-—-aws",
      },
      {
        name: "Resale Authorization — AWS",
        slug: "resale-authorization-—-aws",
      },
      { name: "Agreement — AWS", slug: "agreement-—-aws" },
    ],
  },
  {
    name: "GCP Marketplace — GCP",
    tags: ["gcp"],
    def: "Google Cloud's marketplace for ISVs to list and sell software and services to Google Cloud customers. Integrated with GCP billing; purchases can draw down CUD commitments.",
    alias:
      "Related: Producer Portal — GCP, Committed Use Discount (CUD) — GCP, Private Offer — GCP",
    source: "https://docs.cloud.google.com/marketplace/docs",
    difficulty: "beginner",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers", "GCP Sales"],
    useCases: [
      "Listing software on GCP Marketplace to reach Google Cloud customers and draw down their CUD commitments",
      "Publishing a transactable SaaS offer on GCP to enable billing through Google Cloud accounts",
    ],
    context: ["Google Cloud Console", "Producer Portal — GCP", "GCP Billing"],
    related: [
      { name: "Listing", slug: "listing" },
      {
        name: "Committed Use Discount (CUD) — GCP",
        slug: "committed-use-discount-cud-—-gcp",
      },
      {
        name: "Google Cloud Partner Network — GCP",
        slug: "google-cloud-partner-network-—-gcp",
      },
    ],
  },
  {
    name: "Google Cloud Partner Network — GCP",
    tags: ["gcp", "cosell"],
    def: "Google Cloud's partner program (rebranded from 'Partner Advantage' at Google Cloud Next '26 in April 2026) with a three-tier structure — Select, Premier, and Diamond — where tier advancement is determined by partner-delivered customer outcomes rather than traditional credentialing. The 2026 restructuring replaced the previous two-tier model and retired the Specializations framework, replacing it with 21 competencies across Solution, Product, and Industry categories. Partners manage their program status, co-sell opportunities, and competency progress in the <strong>Partner Network Hub</strong> at <a href=\"https://partners.cloud.google.com/\" target=\"_blank\" rel=\"noopener\">partners.cloud.google.com</a>. ISVs join under the 'Build' engagement model — requiring a technical review and a transactable GCP Marketplace listing to unlock co-sell access and partner incentives.",
    alias:
      "Formerly: Google Cloud Partner Advantage | Related: Build Engagement Model — GCP, GCP Marketplace — GCP, Google Cloud Partner Network Diamond Tier — GCP, Google Cloud Partner Network Competency — GCP",
    source:
      "https://cloud.google.com/blog/topics/partners/introducing-google-cloud-partner-network/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "GCP Sales", "Partner Managers"],
    useCases: [
      "Enrolling in Google Cloud Partner Network under the Build engagement model to unlock GCP Marketplace listing and co-sell access",
      "Planning partnership tier progression (Select → Premier → Diamond) based on co-sell ACV, implemented workloads, and certification thresholds",
    ],
    context: [
      "Partner Network Hub",
      "GCP Partner Portal",
      "Co-sell Programs",
      "GCP Marketplace",
    ],
    related: [
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
      {
        name: "Build Engagement Model — GCP",
        slug: "build-engagement-model-—-gcp",
      },
      {
        name: "Google Cloud Partner Network Diamond Tier — GCP",
        slug: "google-cloud-partner-network-diamond-tier-—-gcp",
      },
      {
        name: "Google Cloud Partner Network Competency — GCP",
        slug: "google-cloud-partner-network-competency-—-gcp",
      },
    ],
  },
  {
    name: "Producer Portal — GCP",
    tags: ["gcp"],
    def: 'The GCP console interface where ISVs create and manage their Marketplace listings, pricing plans, and integration settings. Access requires Google Cloud Partner Network enrollment. Accessible at <a href="https://console.cloud.google.com/producer-portal" target="_blank" rel="noopener">console.cloud.google.com/producer-portal</a>.',
    alias: "Related: GCP Marketplace — GCP, Google Cloud Partner Network — GCP",
    source: "https://docs.cloud.google.com/marketplace/docs/partners",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Creating and publishing GCP Marketplace listings and pricing plans from the ISV's producer interface",
      "Managing integration settings for entitlement webhooks and backend API configuration",
    ],
    context: ["GCP Marketplace", "GCP Console"],
    related: [
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
      {
        name: "Google Cloud Partner Network — GCP",
        slug: "google-cloud-partner-network-—-gcp",
      },
      { name: "Procurement API — GCP", slug: "procurement-api-—-gcp" },
    ],
  },
  {
    name: "Inbound Referral",
    tags: ["cosell", "suger"],
    def: "A co-sell opportunity initiated by a cloud provider's sales team and shared with your organization to accept, qualify, and pursue jointly. Managed in Suger's co-sell module with status tracking and CRM sync.",
    alias:
      "Opposite: Outbound Referral | Azure equivalent: Microsoft-Sourced Opportunity Referral (MSOR) — Azure | Related: Co-sell, Referral",
    source: "https://doc.suger.io/cosell/cosell-inbound/",
    difficulty: "beginner",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Suger Users", "Partner Managers"],
    useCases: [
      "Accepting and qualifying a lead shared by an AWS, Azure, or GCP sales rep in Suger's co-sell module",
      "Tracking the status and ownership of inbound co-sell referrals with CRM sync",
    ],
    context: ["Suger Console", "Co-sell Module", "AWS Partner Central", "CRM"],
    related: [
      { name: "Outbound Referral", slug: "outbound-referral" },
      { name: "Referral", slug: "referral" },
      { name: "Co-sell", slug: "co-sell" },
      {
        name: "Microsoft-Sourced Opportunity Referral (MSOR) — Azure",
        slug: "microsoft-sourced-opportunity-referral-msor-—-azure",
      },
    ],
  },
  {
    name: "Included Quantity — Azure",
    tags: ["azure"],
    def: "In Azure Flat Rate and Per User pricing, the usage amount included in the base subscription price. Any consumption above this triggers metered overage charges.",
    alias: "Related: Flat Rate Pricing — Azure, Overage",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/plan-saas-offer",
    difficulty: "beginner",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Setting the included usage threshold in an Azure flat-rate plan so buyers know when overage kicks in",
      "Communicating to buyers how much usage is covered by the base subscription price",
    ],
    context: ["Partner Center — Azure", "Azure Marketplace", "Pricing Plans"],
    related: [
      { name: "Flat Rate Pricing — Azure", slug: "flat-rate-pricing-—-azure" },
      { name: "Overage", slug: "overage" },
      { name: "Per User Pricing — Azure", slug: "per-user-pricing-—-azure" },
    ],
  },
  {
    name: "Integration",
    tags: ["suger", "integrations"],
    def: "A Suger connection to an external platform — Salesforce, HubSpot, Slack, billing engines (Metronome, Orb, Lago), or marketplaces — that automatically syncs data with your existing workflows.",
    alias: "",
    source: "https://doc.suger.io/integrations/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Connecting Suger to CRM, billing, or notification tools to automate marketplace data flows",
      "Browsing available Suger integrations to identify which external systems can sync with your marketplace operations",
    ],
    context: ["Suger Console", "Integrations Catalog"],
    related: [
      { name: "CRM Integration", slug: "crm-integration" },
      { name: "Webhook", slug: "webhook" },
      { name: "Workflow", slug: "workflow" },
    ],
  },
  {
    name: "Independent Software Vendor (ISV)",
    tags: ["general"],
    def: "A company that builds and sells software products. On cloud marketplaces, ISVs are the sellers/publishers listing their products. Can also co-sell and resell through channel partners.",
    alias: "Related: Seller of Record, Channel Partner (CP)",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/what-is-marketplace.html",
    difficulty: "beginner",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Establishing the role of the ISV as the software builder and primary seller in cloud marketplace contexts",
      "Distinguishing ISV responsibilities from channel partner and cloud provider roles in a transaction",
    ],
    context: ["Cloud Marketplaces", "Partner Programs", "Marketplace Listings"],
    related: [
      { name: "Seller / Publisher", slug: "seller-/-publisher" },
      { name: "Seller of Record", slug: "seller-of-record" },
      { name: "Channel Partner (CP)", slug: "channel-partner-cp" },
    ],
  },
  {
    name: "ISV Accelerate — AWS",
    tags: ["aws", "cosell"],
    def: "An AWS program offering ISVs co-sell support, AWS sales team introductions, and go-to-market resources. Requires: (1) one or more products listed as GA in AWS Marketplace, (2) minimum 5 launched opportunities (ACE or private offers) in past 12 months excluding FVO, (3) minimum 15 qualified ACE opportunities in past 12 months, (4) at least one team member who completed the Co-Selling with AWS learning module, and (5) ≥$2,000 in recognized AWS Account revenue. Also requires an approved Foundational Technical Review (FTR) for co-sell eligibility and funding access. Partners must achieve Validated or Differentiated status in AWS Partner Central (via the Partner Path) as a baseline enrollment prerequisite; AWS Specialization status unlocks premium co-sell benefit tiers above the standard program. Required for SPPO participation. As of 2026, ISV Accelerate explicitly covers agentic SaaS co-sell activities and AI agent marketplace listings, extending the program's scope beyond conventional software products.",
    alias:
      "Azure equivalent: ISV Success Program — Azure | GCP equivalent: Build Engagement Model — GCP | Related: APN Customer Engagements (ACE) — AWS, Solution Provider Private Offer (SPPO) — AWS",
    source: "https://aws.amazon.com/partners/programs/isv-accelerate/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "AWS Sales", "Partner Managers"],
    useCases: [
      "Enrolling in ISV Accelerate to gain access to AWS seller introductions, co-sell resources, and SPPO eligibility",
      "Meeting ISV Accelerate requirements — transactable listing, FTR approval, 5+ launched ACE opportunities, 15+ qualified ACE opportunities, $2K+ AWS account revenue — to unlock full co-sell benefits including SCB",
    ],
    context: ["AWS Partner Central", "Co-sell Programs", "ISV Programs"],
    related: [
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
      {
        name: "Foundational Technical Review (FTR) — AWS",
        slug: "foundational-technical-review-ftr-—-aws",
      },
      {
        name: "SaaS Co-sell Benefit (SCB) — AWS",
        slug: "saas-co-sell-benefit-scb-—-aws",
      },
    ],
  },
  {
    name: "Landing Page / Signup URL",
    tags: ["general", "suger"],
    def: "The URL a buyer is redirected to after accepting a marketplace offer, to complete account setup with the ISV. Suger can intercept this redirect, provision the entitlement, then forward the buyer to the ISV's onboarding flow.",
    alias: "Related: Signup URL Redirect, Billing Integration",
    source: "https://doc.suger.io/get-started/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Configuring the signup URL in Suger to intercept marketplace redirects and auto-provision entitlements before sending buyers to your product",
      "Decoupling marketplace provisioning from product onboarding using Suger's signup URL redirect feature",
    ],
    context: [
      "Suger Console",
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
      "Buyer Onboarding",
    ],
    related: [
      { name: "Signup URL Redirect", slug: "signup-url-redirect" },
      { name: "Entitlement", slug: "entitlement" },
      { name: "Billing Integration", slug: "billing-integration" },
    ],
  },
  {
    name: "Listing",
    tags: ["general"],
    def: "A product's public page on a cloud marketplace — the discovery and purchase entry point for buyers. Can be free, BYOL, contact me, free trial, or transactable (paid).",
    alias: "Related: Transactable Offer, Bring Your Own License (BYOL)",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/saas-contracts.html",
    difficulty: "beginner",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Publishing a product on AWS, Azure, or GCP marketplace so buyers can discover and purchase it",
      "Choosing the right listing type (transactable, BYOL, free trial, contact me) for your go-to-market motion",
    ],
    context: [
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
      "Snowflake Marketplace",
    ],
    related: [
      { name: "Transactable Offer", slug: "transactable-offer" },
      {
        name: "Bring Your Own License (BYOL)",
        slug: "bring-your-own-license-byol",
      },
      { name: "Private Offer", slug: "private-offer" },
    ],
  },
  {
    name: "Azure Consumption Commitment (MACC) — Azure",
    tags: ["azure", "funding"],
    def: "Microsoft's enterprise committed spend program where enterprises pre-commit to Azure spend over 1–3 years; purchases of MACC-eligible transactable Marketplace listings count toward that commitment, making it a core enterprise buying driver. Purchases must be made through the Azure portal — credit card purchases on Marketplace.Microsoft.com and Azure prepayment (monetary commitments) are excluded. MACC enrollment is per-offer, not per-publisher; each offer must be independently enrolled and hold Azure IP Co-sell Eligible status. Free and BYOL offers are ineligible.",
    alias:
      "AWS equivalent: Enterprise Discount Program (EDP) — AWS | GCP equivalent: Committed Use Discount (CUD) — GCP",
    source:
      "https://learn.microsoft.com/en-us/marketplace/azure-consumption-commitment-benefit",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers", "Azure Sales"],
    useCases: [
      "Achieving Azure IP Co-sell status to make your listing MACC-eligible for enterprise customers managing Azure spend commitments",
      "Helping enterprise buyers understand that marketplace purchases of MACC-eligible listings count toward their Azure commitment",
    ],
    context: [
      "Microsoft Marketplace",
      "Enterprise Procurement",
      "Azure Billing",
    ],
    related: [
      {
        name: "Enterprise Discount Program (EDP) — AWS",
        slug: "enterprise-discount-program-edp-—-aws",
      },
      {
        name: "Committed Use Discount (CUD) — GCP",
        slug: "committed-use-discount-cud-—-gcp",
      },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
      {
        name: "MACC Eligibility — Azure",
        slug: "macc-eligibility-—-azure",
      },
    ],
  },
  {
    name: "MACC Eligibility — Azure",
    tags: ["azure", "offers", "procurement"],
    def: "The qualifying status that allows an Azure Marketplace transactable offer to count toward a buyer's Microsoft Azure Consumption Commitment (MACC) when purchased through the Azure portal. To be MACC-eligible, an offer must be transactable (free, BYOL, and trial offers are excluded), hold Azure IP Co-sell Eligible status, and be independently enrolled in the MACC program in Partner Center — enrollment is per-offer, not per-publisher. Buyers must complete purchases through the Azure portal; credit card purchases on Marketplace.Microsoft.com and Azure prepayments do not count toward MACC. MACC eligibility is a critical enterprise sales lever because it positions marketplace purchases as a way to draw down the customer's existing Azure committed spend.",
    alias:
      "Related: Azure Consumption Commitment (MACC) — Azure | Related: Co-sell Eligible / Incentivized — Azure | Related: Microsoft Marketplace — Azure",
    source:
      "https://learn.microsoft.com/en-us/marketplace/azure-consumption-commitment-benefit",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers", "Azure Sales"],
    useCases: [
      "Verifying whether an Azure Marketplace offer qualifies to draw down a customer's MACC balance before closing a deal",
      "Enrolling a transactable offer in the MACC program through Partner Center to make it MACC-eligible",
      "Advising enterprise buyers on which marketplace offers count toward their Azure Consumption Commitment",
    ],
    context: [
      "Microsoft Partner Center",
      "Azure Marketplace",
      "Enterprise Procurement",
      "Co-sell negotiations",
    ],
    related: [
      {
        name: "Azure Consumption Commitment (MACC) — Azure",
        slug: "azure-consumption-commitment-macc-—-azure",
      },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
    ],
  },
  {
    name: "Marketplace Customer Credit Program (MCCP) — GCP",
    tags: ["gcp", "cosell", "funding"],
    def: "A GCP incentive offering end customers up to 3% in Google Cloud credits when purchasing eligible ISV solutions through GCP Marketplace for the first time. Applies to both direct and reseller-led deals (MCPOs). ISVs must register the opportunity in Google Cloud Partner Network to qualify.",
    alias:
      "Also referred to as: MCCP | Related: Committed Use Discount (CUD) — GCP, Google Cloud Partner Network — GCP",
    source: "https://docs.cloud.google.com/marketplace/docs/partners",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "GCP Sales", "Enterprise Buyers"],
    useCases: [
      "Registering a first-time GCP Marketplace deal in Google Cloud Partner Network to qualify the buyer for up to 3% Google Cloud credits",
      "Positioning MCCP as an additional incentive alongside CUD drawdown to accelerate GCP enterprise deals",
    ],
    context: [
      "GCP Partner Portal",
      "Google Cloud Partner Network — GCP",
      "GCP Marketplace",
    ],
    related: [
      {
        name: "Google Cloud Partner Network — GCP",
        slug: "google-cloud-partner-network-—-gcp",
      },
      {
        name: "Committed Use Discount (CUD) — GCP",
        slug: "committed-use-discount-cud-—-gcp",
      },
      {
        name: "Marketplace Channel Private Offer (MCPO) — GCP",
        slug: "marketplace-channel-private-offer-mcpo-—-gcp",
      },
    ],
  },
  {
    name: "Marketplace Fee / Transaction Fee",
    tags: ["general"],
    def: "The revenue share cloud marketplaces charge ISVs on each transaction — typically 3–20% depending on program tier, deal type, and partner status. Disbursements are paid net of this fee.",
    alias: "Related: Disbursement, Seller of Record",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/what-is-marketplace.html",
    difficulty: "beginner",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Channel Partners"],
    useCases: [
      "Calculating net payout by understanding what percentage the marketplace retains before disbursing to the ISV",
      "Explaining to partners how revenue splits work across ISV, channel partner, and hyperscaler in a CPPO transaction",
    ],
    context: [
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
      "Revenue Reporting",
    ],
    related: [
      { name: "Disbursement", slug: "disbursement" },
      { name: "Seller of Record", slug: "seller-of-record" },
      { name: "Disbursed Amount", slug: "disbursed-amount" },
    ],
  },
  {
    name: "Marketplace Rewards — Azure",
    tags: ["azure", "cosell"],
    def: "Microsoft's benefits program for transactable Microsoft Marketplace publishers. Provides go-to-market support, co-marketing resources, and technical enablement; benefits scale with transact revenue milestones measured by Marketplace-billed sales, Business Applications solution value, or Teams App MAU. BYOL and free offers are categorized as List/Trial tier — not transact — and are ineligible for transact-tier Marketplace Rewards benefits. As of mid-2026, Marketplace Rewards is embedded within ISV Success (included automatically for ISV Success participants at no cost); Azure sponsorship credits will be restructured into use-case-specific allocations under Frontier Accelerate for Marketplace, a unified ISV program consolidating Marketplace Rewards, ISV Success, Azure IP co-sell, and Solutions Partner certifications, launching fall 2026.",
    alias:
      "Related: Microsoft Marketplace — Azure, ISV Success Program — Azure, Frontier Accelerate for Marketplace — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/gtm-your-marketplace-benefits",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Azure Sales", "Partner Managers"],
    useCases: [
      "Activating Marketplace Rewards to unlock co-marketing budget and technical support as Azure transact revenue grows",
      "Tracking revenue milestones that unlock higher-tier Rewards benefits in Partner Center",
    ],
    context: [
      "Partner Center — Azure",
      "Microsoft Marketplace",
      "Azure Partner Programs",
    ],
    related: [
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
      {
        name: "ISV Success Program — Azure",
        slug: "isv-success-program-—-azure",
      },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
    ],
  },
  {
    name: "Metered Billing",
    tags: ["general", "suger"],
    def: "A billing mechanism where buyers are charged based on actual consumption of defined usage dimensions. Suger normalizes metered billing across AWS, Azure, and GCP through its unified metering API.",
    alias: "Related: Usage Metering, Billable Metric, Metering Dimension",
    source: "https://doc.suger.io/billing/metering/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users", "Enterprise Buyers"],
    useCases: [
      "Implementing consumption-based billing where customers pay only for what they use",
      "Using Suger's unified metering API to report usage to AWS, Azure, and GCP from a single integration",
    ],
    context: [
      "Suger Console",
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
    ],
    related: [
      { name: "Usage Metering", slug: "usage-metering" },
      { name: "Metering Dimension", slug: "metering-dimension" },
      { name: "Billable Metric", slug: "billable-metric" },
    ],
  },
  {
    name: "Metering Dimension",
    tags: ["suger", "general"],
    def: "A specific unit of measure used to track and bill usage (e.g., seats, API calls, GB processed). Each entitlement can have multiple dimensions, referenced by Dimension Key or Dimension Name in Suger's API.",
    alias:
      "Related: Usage Metering, Billable Metric, Metering Dimension Conversion — Suger",
    source: "https://doc.suger.io/billing/metering/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Defining the units of consumption (API calls, GB, seats) that will be tracked and billed for a marketplace offer",
      "Mapping internal metric names to marketplace dimension keys using Suger's dimension configuration",
    ],
    context: [
      "Suger Console",
      "Usage Metering Configuration",
      "Marketplace APIs",
    ],
    related: [
      { name: "Usage Metering", slug: "usage-metering" },
      { name: "Billable Metric", slug: "billable-metric" },
      {
        name: "Metering Dimension Conversion — Suger",
        slug: "metering-dimension-conversion-—-suger",
      },
    ],
  },
  {
    name: "Microsoft AI Cloud Partner Program (MPN) — Azure",
    tags: ["azure", "cosell"],
    def: "Microsoft's partner program for ISVs and services companies. Enrollment is required to publish on Microsoft Marketplace and access co-sell, partner funding, and Marketplace Rewards — enrollment issues a PartnerID (formerly MPNID) that must be linked to Partner Center to complete publisher registration. Co-sell is managed through Partner Center — see the Partner Center — Azure term for the direct link.",
    alias:
      "Related: Microsoft Marketplace — Azure, Marketplace Rewards — Azure, MISA (Microsoft Intelligent Security Association) — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/membership/mpn-overview",
    difficulty: "beginner",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Azure Sales", "Partner Managers"],
    useCases: [
      "Enrolling in the MPN program as a prerequisite for publishing on Microsoft Marketplace and accessing co-sell benefits",
      "Navigating MPN program requirements to unlock Marketplace Rewards and partner funding eligibility",
    ],
    context: [
      "Partner Center — Azure",
      "Microsoft Marketplace",
      "Azure Partner Programs",
    ],
    related: [
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
      {
        name: "Marketplace Rewards — Azure",
        slug: "marketplace-rewards-—-azure",
      },
      {
        name: "ISV Success Program — Azure",
        slug: "isv-success-program-—-azure",
      },
    ],
  },
  {
    name: "Microsoft-Sourced Opportunity Referral (MSOR) — Azure",
    tags: ["azure", "cosell"],
    def: "A co-sell opportunity that a Microsoft sales representative identifies and shares with a partner through the Inbound tab of Partner Center's Co-sell opportunities page. The partner has 14 days to accept or decline; unanswered referrals automatically expire and both Microsoft and the partner are notified. MSORs typically arrive pre-matched against a Microsoft-managed customer account, giving the partner a warm, pre-qualified lead rather than a self-sourced deal.",
    alias:
      "Suger equivalent: Inbound Referral | AWS equivalent: APN Customer Engagements (ACE) — AWS | Related: Outbound Referral, Co-sell Eligible / Incentivized — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/referrals/manage-co-sell-opportunities",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers", "Azure Sales"],
    useCases: [
      "Reviewing an MSOR in Partner Center's Inbound tab and deciding whether to accept or decline within the 14-day window",
      "Prioritizing Azure co-sell pipeline by distinguishing Microsoft-sourced referrals from partner-created outbound deals",
      "Tracking MSOR acceptance and win rates to improve future referral volume and quality from Microsoft sales teams",
    ],
    context: [
      "Partner Center — Azure",
      "Co-sell Opportunities Page",
      "Azure Co-sell",
      "CRM",
    ],
    related: [
      { name: "Inbound Referral", slug: "inbound-referral" },
      { name: "Outbound Referral", slug: "outbound-referral" },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-incentivized-—-azure",
      },
      { name: "Partner Center — Azure", slug: "partner-center-—-azure" },
    ],
  },
  {
    name: "Multiparty Private Offer (MPO) — Azure",
    tags: ["azure", "cosell", "offers", "channel"],
    def: "Microsoft Marketplace's channel reseller mechanism — the Azure equivalent of AWS's CPPO. An ISV and channel partner collaborate to create a single private offer for an end customer; the partner sets their own margin, and the purchase counts toward the customer's MACC. With Resale-Enabled Offers, authorized channel partners can initiate MPOs independently for each customer deal without requiring per-deal ISV involvement. As of May 27, 2026, MPO is available across 30 European countries, with further expansion to Japan, Australia, and South Africa planned for July 15, 2026.",
    alias:
      "AWS equivalent: Channel Partner Private Offer (CPPO) — AWS | GCP equivalent: Marketplace Channel Private Offer (MCPO) — GCP | Related: Resale-Enabled Offer — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/multiparty-private-offers-for-isvs",
    difficulty: "intermediate",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Distributors"],
    useCases: [
      "Enabling a CSP or authorized partner to resell your Microsoft Marketplace product with their own margin",
      "Structuring an enterprise deal where the partner manages the customer relationship and the purchase counts toward MACC",
    ],
    context: [
      "Partner Center — Azure",
      "Microsoft Marketplace",
      "Channel Programs",
    ],
    related: [
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
      },
      {
        name: "Marketplace Channel Private Offer (MCPO) — GCP",
        slug: "marketplace-channel-private-offer-mcpo-—-gcp",
      },
      {
        name: "Resale-Enabled Offer — Azure",
        slug: "resale-enabled-offer-—-azure",
      },
    ],
  },
  {
    name: "Managed Service Provider (MSP)",
    tags: ["general", "cosell"],
    def: "A partner providing ongoing management of a customer's cloud environment and software. MSPs often resell ISV products through marketplace channel programs (CPPO on AWS, CSP/MPO on Azure).",
    alias: "Related: Channel Partner (CP), Co-sell",
    source: "https://aws.amazon.com/partners/programs/msp/",
    difficulty: "beginner",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Channel Partners"],
    useCases: [
      "Identifying MSP partners who manage customer cloud environments and could resell your marketplace product",
      "Structuring CPPO or MPO resale authorization for MSPs who bundle your software with managed services",
    ],
    context: [
      "Channel Programs",
      "AWS Marketplace",
      "Azure Marketplace",
      "Partner Ecosystem",
    ],
    related: [
      { name: "Channel Partner (CP)", slug: "channel-partner-cp" },
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
      },
      {
        name: "Cloud Solution Provider (CSP) — Azure",
        slug: "cloud-solution-provider-csp-—-azure",
      },
    ],
  },
  {
    name: "Offer",
    tags: ["suger", "general", "offers"],
    def: "In Suger, a pricing and terms proposal (public or private) that a buyer can accept to purchase a product. Must be linked to a Product. Maps differently across marketplaces.",
    alias: "AWS: Private Offer | Azure: Plan — Azure | Related: Private Offer",
    source: "https://doc.suger.io/billing/offer/",
    difficulty: "beginner",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Creating a public or private offer in Suger to present pricing and terms to a specific buyer",
      "Linking a Suger offer to a product before publishing to a cloud marketplace",
    ],
    context: [
      "Suger Console",
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
    ],
    related: [
      { name: "Private Offer", slug: "private-offer" },
      { name: "Product", slug: "product" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "Offer Expiration Date — AWS",
    tags: ["aws", "offers"],
    def: "The date after which a buyer can no longer view or accept a private offer. After 23:59:59 UTC on that date, the offer becomes inaccessible. Set by the seller at offer creation.",
    alias: "Related: Private Offer, Agreement-Based Offer (ABO) — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/private-offers-overview.html",
    difficulty: "beginner",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Setting an expiration date on a private offer to create urgency and close deals before a quarter ends",
      "Communicating to buyers the deadline by which they must accept an offer before it expires",
    ],
    context: ["AWS Marketplace", "AWS Seller Central", "Private Offer Flows"],
    related: [
      { name: "Private Offer", slug: "private-offer" },
      {
        name: "Agreement-Based Offer (ABO) — AWS",
        slug: "agreement-based-offer-abo-—-aws",
      },
    ],
  },
  {
    name: "Offer Set — AWS",
    tags: ["aws", "offers"],
    def: "An AWS Marketplace feature that groups multiple private offers into a single buyer transaction, part of the Multi-Product Solutions framework. Buyers accept the entire bundle in one step rather than accepting each offer individually. Each product retains its own listing and pricing, but purchase is coordinated as one event — reducing friction in multi-component enterprise deals. No direct Azure or GCP equivalent exists at this time.",
    alias:
      "Related: Multi-Product Solution — AWS | Related: Solution Listing — AWS | Related: Private Offer | Suger equivalent: Offer Set — Suger",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/multi-product-solutions.html",
    difficulty: "advanced",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Bundling a core SaaS product with a professional services offer so buyers complete one transaction instead of multiple separate acceptances",
      "Packaging complementary add-on products alongside a base subscription for simplified enterprise deals",
      "Reducing buyer friction in multi-product transactions by coordinating acceptance of multiple private offers into a single step",
    ],
    context: [
      "AWS Marketplace",
      "AWS Marketplace Management Portal",
      "Multi-Product Solutions",
    ],
    related: [
      {
        name: "Multi-Product Solution — AWS",
        slug: "multi-product-solution-—-aws",
      },
      { name: "Solution Listing — AWS", slug: "solution-listing-—-aws" },
      { name: "Private Offer", slug: "private-offer" },
      { name: "Offer Set — Suger", slug: "offer-set-—-suger" },
    ],
  },
  {
    name: "Offer Set — Suger",
    tags: ["suger", "aws", "offers"],
    def: "Suger's support for creating and managing AWS Marketplace Offer Sets through the Suger platform. Enables ISVs to bundle multiple private offers into a single buyer transaction programmatically, mirroring the AWS Offer Set workflow. Managed via the Suger console or API alongside other private offer operations, eliminating the need to coordinate directly in the AWS Marketplace Management Portal.",
    alias:
      "AWS equivalent: Offer Set — AWS | Related: Multi-Product Solution — AWS | Related: Private Offer",
    source: "https://doc.suger.io/get-started/",
    difficulty: "advanced",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Creating an AWS Offer Set through the Suger console to bundle multiple private offers for a single buyer transaction",
      "Programmatically managing offer set lifecycle (create, update, cancel) via the Suger API without navigating the AWS Marketplace Management Portal",
    ],
    context: ["Suger Console", "Suger API", "AWS Marketplace"],
    related: [
      { name: "Offer Set — AWS", slug: "offer-set-—-aws" },
      {
        name: "Multi-Product Solution — AWS",
        slug: "multi-product-solution-—-aws",
      },
      { name: "Private Offer", slug: "private-offer" },
    ],
  },
  {
    name: "Organization",
    tags: ["suger"],
    def: "The top-level account in Suger representing your company. All Products, Offers, Entitlements, and Buyers are scoped to your Organization.",
    alias: "Related: Role-Based Access Control (RBAC), Suger Console",
    source: "https://doc.suger.io/get-started/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Understanding the organizational hierarchy in Suger — all products, offers, and entitlements belong to your Organization",
      "Managing access permissions for team members across different roles within the same Organization",
    ],
    context: ["Suger Console", "Account Setup"],
    related: [
      {
        name: "Role-Based Access Control (RBAC)",
        slug: "role-based-access-control-rbac",
      },
      { name: "Suger Console", slug: "suger-console" },
      { name: "Product", slug: "product" },
    ],
  },
  {
    name: "Outbound Referral",
    tags: ["cosell", "suger"],
    def: "A co-sell opportunity your organization originates and shares with a cloud provider's sales team — requesting their resources, deal support, or joint pursuit.",
    alias: "Opposite: Inbound Referral | Related: Co-sell, Referral",
    source: "https://doc.suger.io/cosell/cosell-outbound/",
    difficulty: "beginner",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Suger Users", "Partner Managers"],
    useCases: [
      "Sharing a qualified opportunity with AWS, Azure, or GCP sales to request field support on an active deal",
      "Initiating a co-sell motion by pushing an outbound referral from Suger to AWS Partner Central",
    ],
    context: ["Suger Console", "Co-sell Module", "AWS Partner Central"],
    related: [
      { name: "Inbound Referral", slug: "inbound-referral" },
      { name: "Referral", slug: "referral" },
      { name: "Co-sell", slug: "co-sell" },
    ],
  },
  {
    name: "Overage",
    tags: ["suger", "general"],
    def: "Usage that exceeds a buyer's prepaid commit. Cloud marketplaces bill overage separately via metered usage. Suger can auto-track cumulative usage and report only the portion above the commit.",
    alias: "Related: Commit / Prepaid Commit, Usage Metering",
    source: "https://doc.suger.io/billing/metering/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users", "Enterprise Buyers"],
    useCases: [
      "Tracking when a buyer's usage exceeds their prepaid commit so overage billing kicks in automatically",
      "Configuring Suger to only report the portion of usage above the commit as billable to the marketplace",
    ],
    context: ["Suger Console", "Usage Metering", "Billing Configuration"],
    related: [
      { name: "Commit / Prepaid Commit", slug: "commit-/-prepaid-commit" },
      { name: "Usage Metering", slug: "usage-metering" },
      {
        name: "Commit with Additional Usage Metering",
        slug: "commit-with-additional-usage-metering",
      },
    ],
  },
  {
    name: "Partner Center — Azure",
    tags: ["azure"],
    def: 'Microsoft\'s portal where publishers create and manage Microsoft Marketplace offers, co-sell configurations, payout profiles, and partner program enrollments. Accessible at <a href="https://partner.microsoft.com/" target="_blank" rel="noopener">partner.microsoft.com</a>.',
    alias:
      "Related: Azure Marketplace / Microsoft Marketplace, SaaS Fulfillment API — Azure, Microsoft AI Cloud Partner Program (MPN) — Azure",
    source: "https://learn.microsoft.com/en-us/partner-center/enroll/overview",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Azure Sales", "Partner Managers"],
    useCases: [
      "Creating and managing Azure Marketplace offer listings, plans, and co-sell configurations",
      "Enrolling in MPN, setting up payout profiles, and tracking Marketplace Rewards milestones",
    ],
    context: ["Microsoft Marketplace", "Azure Publisher Operations"],
    related: [
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
      {
        name: "SaaS Fulfillment API — Azure",
        slug: "saas-fulfillment-api-—-azure",
      },
      {
        name: "Microsoft AI Cloud Partner Program (MPN) — Azure",
        slug: "microsoft-ai-cloud-partner-program-mpn-—-azure",
      },
    ],
  },
  {
    name: "PAYG / Pay-as-you-go",
    tags: ["general", "aws", "gcp"],
    def: "A pricing model with no upfront commitment — buyers are billed only for what they consume. Called 'Subscription' on AWS; 'Usage-based' on GCP.",
    alias: "",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/saas-pricing-models.html",
    difficulty: "beginner",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Listing a product with flexible consumption pricing so buyers aren't locked into upfront commitments",
      "Understanding when PAYG is preferred over contract pricing from a buyer's procurement perspective",
    ],
    context: ["AWS Marketplace", "GCP Marketplace", "Pricing Configuration"],
    related: [
      { name: "Metered Billing", slug: "metered-billing" },
      { name: "Commit / Prepaid Commit", slug: "commit-/-prepaid-commit" },
      { name: "Subscription — AWS", slug: "subscription-—-aws" },
    ],
  },
  {
    name: "Per User Pricing — Azure",
    tags: ["azure"],
    def: "An Azure pricing model billed per named user per month or year. Supports mid-term quantity updates and optional metered overage billing above committed seat count.",
    alias: "Related: Price Model, Included Quantity — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/plan-saas-offer",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Pricing an Azure Marketplace SaaS offer per seat with mid-term quantity adjustments as headcount changes",
      "Adding metered overage billing on top of per-user pricing for consumption above included seat usage",
    ],
    context: ["Partner Center — Azure", "Azure Marketplace", "Pricing Plans"],
    related: [
      { name: "Flat Rate Pricing — Azure", slug: "flat-rate-pricing-—-azure" },
      { name: "Included Quantity — Azure", slug: "included-quantity-—-azure" },
      { name: "Overage", slug: "overage" },
    ],
  },
  {
    name: "Plan — Azure",
    tags: ["azure", "offers"],
    def: "A specific pricing tier or configuration within an Azure Marketplace Offer. A single offer can have multiple plans with different pricing or audiences. Private plans are visible only to designated customers.",
    alias: "Related: Private Offer, Microsoft Marketplace — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/plan-saas-offer",
    difficulty: "beginner",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Creating multiple pricing tiers within a single Azure Marketplace offer (e.g., Starter, Pro, Enterprise plans)",
      "Publishing a private plan visible only to specific tenants for custom pricing without a full private offer",
    ],
    context: [
      "Partner Center — Azure",
      "Microsoft Marketplace",
      "Azure Offer Configuration",
    ],
    related: [
      { name: "Private Plan — Azure", slug: "private-plan-—-azure" },
      { name: "Private Offer", slug: "private-offer" },
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
    ],
  },
  {
    name: "Private Offer Success Team (POST) — AWS",
    tags: ["aws"],
    def: "AWS's dedicated support team for sellers with questions or issues related to private offer creation, buyer errors, and CPPO transactions. Contactable via the AWS Marketplace support form.",
    alias: "",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/private-offers-overview.html",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Contacting AWS support when a private offer has errors or a buyer cannot access an offer",
      "Getting help from AWS's dedicated team when CPPO transactions or resale authorizations have issues",
    ],
    context: ["AWS Marketplace", "AWS Seller Support"],
    related: [
      { name: "Private Offer", slug: "private-offer" },
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
      },
    ],
  },
  {
    name: "Private Offer",
    tags: ["suger", "aws", "azure", "gcp", "offers"],
    group: "private-offer",
    def: "A customized, non-public offer extended directly to a specific buyer with negotiated pricing, custom terms, payment schedule, or EULA. Must be based on a public listing.",
    alias:
      "Related: Offer, Agreement-Based Offer (ABO) — AWS, Multiparty Private Offer (MPO) — Azure",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/private-offers-overview.html",
    difficulty: "beginner",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Closing a custom-priced enterprise deal through marketplace with negotiated terms and payment schedules",
      "Extending a private offer to a specific buyer account after negotiating pricing off the public list",
    ],
    context: [
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
      "Suger Console",
    ],
    related: [
      { name: "Offer", slug: "offer" },
      { name: "Entitlement", slug: "entitlement" },
      {
        name: "Committed Spend / Cloud Commit",
        slug: "committed-spend-/-cloud-commit",
      },
    ],
  },
  {
    name: "Private Plan — Azure",
    tags: ["azure", "offers"],
    def: "A plan within an Azure offer visible only to designated customers (by tenant ID). Distinct from a private offer — a private plan is a listing-level construct; a private offer is a deal-level, time-bound transaction.",
    alias:
      "Suger equivalent: Private Plan — Suger | Related: Plan — Azure, Private Offer",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/create-new-saas-offer-plans",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Giving a specific enterprise customer access to custom pricing without creating a time-bound private offer",
      "Restricting a pricing plan to selected tenant IDs in Partner Center for segment-specific pricing",
    ],
    context: [
      "Partner Center — Azure",
      "Azure Marketplace",
      "Listing Configuration",
    ],
    related: [
      { name: "Plan — Azure", slug: "plan-—-azure" },
      { name: "Private Offer", slug: "private-offer" },
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
    ],
  },
  {
    name: "Private Plan — Suger",
    tags: ["suger", "azure", "offers"],
    def: "Suger's workflow for adding and managing Azure private plans — supplementary pricing tiers attached to an already-published Azure SaaS product, visible only to specific Azure AD tenant IDs. From the product detail page, sellers select Add Private Plan and provide a Plan ID, display name, description, one or more billing terms, and at least one restricted tenant ID; Azure publishes the plan asynchronously, which can take several hours. Once published, Azure locks the price — Suger's Manage Private Plans view lets sellers stop or restore distribution, but not edit pricing.",
    alias: "Azure equivalent: Private Plan — Azure | Related: Private Offer",
    source: "https://doc.suger.io/azure-marketplace/private-plan/",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Adding a private plan to an already-published Azure SaaS product to give a specific enterprise tenant custom pricing without a time-bound private offer",
      "Restricting a private plan's visibility to one or more Azure AD tenant IDs from the Suger Console",
      "Stopping distribution of a private plan in Suger's Manage Private Plans view while preserving existing entitlements",
    ],
    context: ["Suger Console", "Azure Marketplace", "Partner Center — Azure"],
    related: [
      { name: "Private Plan — Azure", slug: "private-plan-—-azure" },
      { name: "Private Offer", slug: "private-offer" },
      { name: "Plan — Azure", slug: "plan-—-azure" },
    ],
  },
  {
    name: "Procurement API — GCP",
    tags: ["gcp"],
    def: "Google Cloud's API that ISVs (producers) use to approve/reject entitlement requests, manage subscription lifecycle events, and validate buyer account status on GCP Marketplace.",
    alias: "Related: GCP Marketplace — GCP, Producer Portal — GCP",
    source:
      "https://docs.cloud.google.com/marketplace/docs/partners/integrated-saas/backend-integration",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Handling GCP Marketplace entitlement lifecycle events — approval, activation, cancellation — via backend API integration",
      "Validating buyer account status before provisioning access to your product after a marketplace purchase",
    ],
    context: ["GCP Marketplace", "ISV Backend Integration", "Suger Console"],
    related: [
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
      { name: "Pub/Sub — GCP", slug: "pub/sub-—-gcp" },
      { name: "Service Control API — GCP", slug: "service-control-api-—-gcp" },
    ],
  },
  {
    name: "Product",
    tags: ["suger", "general"],
    def: "Suger's top-level entity for a software product or service listed on a marketplace. All Offers and Entitlements link to a Product.",
    alias: "AWS: Product Code | Azure: Offer Id | GCP: Product Id",
    source: "https://doc.suger.io/get-started/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Creating a Product in Suger as the parent entity before building offers or listing on any marketplace",
      "Mapping Suger's Product entity to the corresponding Product Code (AWS), Offer ID (Azure), or Product ID (GCP)",
    ],
    context: ["Suger Console", "Product Configuration"],
    related: [
      { name: "Offer", slug: "offer" },
      { name: "Entitlement", slug: "entitlement" },
      { name: "Listing", slug: "listing" },
    ],
  },
  {
    name: "Product Code — AWS",
    tags: ["aws"],
    def: "The unique identifier for a product listed on AWS Marketplace. Used in API calls, entitlement lookups, and metering. The Suger equivalent is Product External ID.",
    alias:
      "Related: Amazon Machine Image (AMI) — AWS, AWS Marketplace Catalog API — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/ami-products.html",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Using the AWS Product Code to reference a listing in API calls, metering events, and support tickets",
      "Mapping the AWS Product Code to Suger's Product External ID during integration setup",
    ],
    context: ["AWS Marketplace", "Suger Console", "AWS Marketplace APIs"],
    related: [
      {
        name: "AWS Marketplace Catalog API — AWS",
        slug: "aws-marketplace-catalog-api-—-aws",
      },
      { name: "Product", slug: "product" },
      {
        name: "Amazon Machine Image (AMI) — AWS",
        slug: "amazon-machine-image-ami-—-aws",
      },
    ],
  },
  {
    name: "Pub/Sub — GCP",
    tags: ["gcp"],
    def: "Google Cloud's messaging service used to receive entitlement lifecycle events (creation, activation, cancellation) from GCP Marketplace. ISVs must subscribe to a Pub/Sub topic as part of technical integration.",
    alias:
      "Related: Procurement API — GCP, Service Account — GCP, GCP Marketplace — GCP",
    source:
      "https://docs.cloud.google.com/marketplace/docs/partners/integrated-saas/backend-integration",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Subscribing to GCP Marketplace Pub/Sub notifications to receive real-time entitlement lifecycle events",
      "Handling entitlement creation and cancellation events pushed by GCP Marketplace to your ISV backend",
    ],
    context: ["GCP Marketplace", "ISV Backend Integration"],
    related: [
      { name: "Procurement API — GCP", slug: "procurement-api-—-gcp" },
      { name: "Service Account — GCP", slug: "service-account-—-gcp" },
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
    ],
  },
  {
    name: "Role-Based Access Control (RBAC)",
    tags: ["suger", "general"],
    def: "A permission model controlling what each user can see and do within Suger. Enables different access levels for sales, finance, and engineering within the same Organization.",
    alias: "Related: Organization, Suger Console",
    source: "https://doc.suger.io/get-started/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Setting role-specific access so sales can view entitlements while finance accesses revenue reports",
      "Restricting engineering users to API and integration configuration without exposing billing data",
    ],
    context: ["Suger Console", "Account Administration"],
    related: [
      { name: "Organization", slug: "organization" },
      { name: "Suger Console", slug: "suger-console" },
    ],
  },
  {
    name: "Referral",
    tags: ["cosell", "suger"],
    def: "A shared sales opportunity in a co-sell workflow. Can be outbound (ISV shares with cloud partner) or inbound (cloud partner shares with ISV). Managed in Suger with status tracking and CRM sync.",
    alias: "Related: Inbound Referral, Outbound Referral, Co-sell",
    source: "https://doc.suger.io/cosell/",
    difficulty: "beginner",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Suger Users", "Partner Managers"],
    useCases: [
      "Managing co-sell referrals from AWS, Azure, or GCP in a single view with status tracking and CRM sync",
      "Distinguishing inbound referrals (from cloud partner) vs. outbound referrals (your team shares to cloud partner)",
    ],
    context: ["Suger Console", "Co-sell Module", "CRM"],
    related: [
      { name: "Inbound Referral", slug: "inbound-referral" },
      { name: "Outbound Referral", slug: "outbound-referral" },
      { name: "Co-sell", slug: "co-sell" },
    ],
  },
  {
    name: "Resale Authorization — AWS",
    tags: ["aws", "cosell", "offers", "channel"],
    def: "An ISV-created permission on AWS Marketplace that allows a specific channel partner to create CPPOs for a given product. Also called a 'Selling Authorization' in the AMMP UI. Can be single-use or multi-use, with or without an expiry date.",
    alias:
      "Also called: Selling Authorization — AWS | Related: Channel Partner Private Offer (CPPO) — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/channel-partner-offers.html",
    difficulty: "intermediate",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Channel Partners"],
    useCases: [
      "Granting a specific channel partner the right to resell your AWS Marketplace product via CPPO",
      "Configuring wholesale pricing, expiration, and reuse settings on a resale authorization",
    ],
    context: ["AWS Marketplace", "AWS Seller Central", "Channel Programs"],
    related: [
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
      },
      {
        name: "Selling Authorization — AWS",
        slug: "selling-authorization-—-aws",
      },
      {
        name: "Solution Provider Private Offer (SPPO) — AWS",
        slug: "solution-provider-private-offer-sppo-—-aws",
      },
    ],
  },
  {
    name: "Resale Authorization — Suger",
    tags: ["suger", "cosell", "offers", "channel"],
    def: "The Suger Console workflow (New Resale Authorization) that lets ISVs grant a specific channel partner permission to resell their product — creating an AWS CPPO or an Azure Multiparty Private Offer depending on the target marketplace. Sellers configure the reseller account, eligible buyers, and commit amount from a single form; the Suger Salesforce App exposes the same action as Create Reseller Authorization directly from an opportunity.",
    alias:
      "AWS equivalent: Resale Authorization — AWS | Related: Channel Partner Private Offer (CPPO) — AWS, Multiparty Private Offer (MPO) — Azure",
    source: "https://doc.suger.io/aws-marketplace/cppo/",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Suger Users"],
    useCases: [
      "Granting a channel partner resale permission for an AWS product directly from the Suger Console offer page",
      "Creating an Azure Multiparty Private Offer resale authorization without leaving Suger",
      "Using the Suger Salesforce App to create a Reseller Authorization from an existing opportunity",
    ],
    context: [
      "Suger Console",
      "AWS Marketplace",
      "Azure Marketplace",
      "Salesforce App",
    ],
    related: [
      {
        name: "Resale Authorization — AWS",
        slug: "resale-authorization-—-aws",
      },
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
      },
      {
        name: "Multiparty Private Offer (MPO) — Azure",
        slug: "multiparty-private-offer-mpo-—-azure",
      },
    ],
  },
  {
    name: "Reseller Program — GCP",
    tags: ["gcp", "cosell"],
    def: "Google Cloud Marketplace's channel program allowing authorized partners to resell ISV products via MCPO/RPOP, create private offers for customers, and leverage CUD committed spend. Partners manage orders via the Partner Sales Console.",
    alias:
      "Related: Marketplace Channel Private Offer (MCPO) — GCP, Reseller Private Offer Plan (RPOP) — GCP, Partner Sales Console — GCP, Committed Use Discount (CUD) — GCP",
    source:
      "https://docs.cloud.google.com/marketplace/docs/partners/resellers/resell",
    difficulty: "intermediate",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Distributors"],
    useCases: [
      "Enabling authorized GCP resellers to create private offers for your marketplace product using RPOP/MCPO",
      "Understanding how GCP's channel program compares to AWS CPPO and Azure MPO for resale motions",
    ],
    context: [
      "GCP Marketplace",
      "Partner Sales Console — GCP",
      "Channel Programs",
    ],
    related: [
      {
        name: "Marketplace Channel Private Offer (MCPO) — GCP",
        slug: "marketplace-channel-private-offer-mcpo-—-gcp",
      },
      {
        name: "Reseller Private Offer Plan (RPOP) — GCP",
        slug: "reseller-private-offer-plan-rpop-—-gcp",
      },
      {
        name: "Partner Sales Console — GCP",
        slug: "partner-sales-console-—-gcp",
      },
    ],
  },
  {
    name: "Software-as-a-Service (SaaS)",
    tags: ["general"],
    def: "A software delivery model where the ISV hosts the application and buyers access it over the internet. The most common listing type on all cloud marketplaces; typically requires API integration for subscription lifecycle management.",
    alias: "Related: Transactable Offer, Listing",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/saas-products.html",
    difficulty: "beginner",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Listing a hosted software product on cloud marketplace as a SaaS offer with subscription billing",
      "Understanding why SaaS is the most common and fully transactable listing type across AWS, Azure, and GCP",
    ],
    context: [
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
      "Listing Types",
    ],
    related: [
      { name: "Listing", slug: "listing" },
      { name: "Transactable Offer", slug: "transactable-offer" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "SaaS Fulfillment API — Azure",
    tags: ["azure"],
    def: "Microsoft's API that ISVs must implement to handle subscription lifecycle events for Azure Marketplace SaaS offers — including activation, plan changes, quantity updates, suspension, and unsubscription.",
    alias: "Related: Microsoft Marketplace — Azure, Partner Center — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/pc-saas-fulfillment-apis",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Implementing the Azure SaaS Fulfillment API to handle subscription activation, plan changes, and cancellations",
      "Using Suger to abstract SaaS Fulfillment API complexity so your backend receives normalized lifecycle events",
    ],
    context: [
      "Azure Marketplace",
      "ISV Backend Integration",
      "Partner Center — Azure",
    ],
    related: [
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
      { name: "Partner Center — Azure", slug: "partner-center-—-azure" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "Standard Contract (SCMP) — AWS",
    tags: ["aws"],
    def: "AWS's pre-drafted standard EULA for marketplace transactions. Using SCMP reduces buyers' legal review time. Sellers can attach addendums (Enhanced Security, BAA, Federal) for specific requirements.",
    alias: "Related: End User License Agreement (EULA), Agreement — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/standardized-license-terms.html",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Using AWS's standard contract on a private offer to reduce enterprise legal review time",
      "Attaching addendums to SCMP (BAA, Enhanced Security, Federal) for compliance-specific requirements",
    ],
    context: ["AWS Marketplace", "Private Offer Flows", "Legal Review"],
    related: [
      {
        name: "End User License Agreement (EULA)",
        slug: "end-user-license-agreement-eula",
      },
      { name: "Agreement — AWS", slug: "agreement-—-aws" },
      { name: "Private Offer", slug: "private-offer" },
    ],
  },
  {
    name: "Seller / Publisher",
    tags: ["general"],
    def: "The entity listing and selling software on a cloud marketplace. Called 'seller' on AWS, 'publisher' on Azure and GCP. Can be an ISV selling direct or a channel partner reselling via CPPO/CSP.",
    alias: "Related: Seller of Record, Channel Partner (CP)",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/what-is-marketplace.html",
    difficulty: "beginner",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Understanding who holds the publishing relationship with the marketplace (ISV, partner, or both)",
      "Distinguishing between the seller/publisher role vs. the seller of record role in a channel transaction",
    ],
    context: ["AWS Marketplace", "Azure Marketplace", "GCP Marketplace"],
    related: [
      { name: "Seller of Record", slug: "seller-of-record" },
      {
        name: "Independent Software Vendor (ISV)",
        slug: "independent-software-vendor-isv",
      },
      { name: "Channel Partner (CP)", slug: "channel-partner-cp" },
    ],
  },
  {
    name: "Seller of Record",
    tags: ["general", "channel"],
    def: "The legal entity responsible for a marketplace transaction — who invoices and collects from the buyer. In CPPOs and CSP/MPO transactions, the channel partner is the seller of record, not the ISV.",
    alias: "Related: Channel Partner (CP), Marketplace Fee / Transaction Fee",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/channel-partner-offers.html",
    difficulty: "intermediate",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Enterprise Buyers"],
    useCases: [
      "Understanding who is legally invoicing the buyer in a CPPO or MPO transaction",
      "Clarifying tax and compliance implications when the channel partner (not the ISV) is the seller of record",
    ],
    context: ["Channel Programs", "AWS Marketplace", "Azure Marketplace"],
    related: [
      { name: "Channel Partner (CP)", slug: "channel-partner-cp" },
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
      },
      {
        name: "Marketplace Fee / Transaction Fee",
        slug: "marketplace-fee-/-transaction-fee",
      },
    ],
  },
  {
    name: "Service Account — GCP",
    tags: ["gcp"],
    def: "A GCP identity (non-human account) used to authenticate API calls between Suger and GCP Marketplace services — including the Procurement API, Pub/Sub, and billing integration.",
    alias:
      "Related: Workload Identity Federation — GCP, Procurement API — GCP, Producer Portal — GCP",
    source: "https://docs.cloud.google.com/iam/docs/service-account-overview",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Creating and configuring a GCP Service Account as part of the Suger GCP Marketplace integration setup",
      "Authenticating Suger's API calls to GCP Marketplace services without using long-lived personal credentials",
    ],
    context: ["GCP Marketplace", "Suger Console", "GCP IAM"],
    related: [
      {
        name: "Workload Identity Federation — GCP",
        slug: "workload-identity-federation-—-gcp",
      },
      { name: "Procurement API — GCP", slug: "procurement-api-—-gcp" },
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
    ],
  },
  {
    name: "Service Control API — GCP",
    tags: ["gcp"],
    def: "Google Cloud's API ISVs use to report usage metrics to GCP Marketplace for metered billing. Suger calls this API on the ISV's behalf when usage records are submitted.",
    alias:
      "Related: Procurement API — GCP, Producer Portal — GCP, GCP Marketplace — GCP",
    source:
      "https://docs.cloud.google.com/marketplace/docs/partners/integrated-saas/backend-integration",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Reporting metered usage to GCP Marketplace via the Service Control API to trigger billing",
      "Using Suger to abstract Service Control API calls so ISVs submit usage through the unified Suger metering API",
    ],
    context: ["GCP Marketplace", "Metered Billing", "ISV Backend Integration"],
    related: [
      { name: "Procurement API — GCP", slug: "procurement-api-—-gcp" },
      { name: "Usage Metering", slug: "usage-metering" },
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
    ],
  },
  {
    name: "System Integrator (SI)",
    tags: ["general", "cosell"],
    def: "A partner that implements, customizes, and integrates software for enterprise customers. SIs often transact ISV products through marketplace channel programs and co-sell motions.",
    alias: "Related: Channel Partner (CP), Co-sell",
    source: "https://aws.amazon.com/partners/",
    difficulty: "beginner",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Channel Partners"],
    useCases: [
      "Identifying SI partners who implement your software and could transact it through marketplace channel programs",
      "Enabling SI partners as CPPO or MPO resellers for deals where they are the primary customer relationship owner",
    ],
    context: ["Partner Ecosystem", "Channel Programs", "Co-sell Motions"],
    related: [
      { name: "Channel Partner (CP)", slug: "channel-partner-cp" },
      {
        name: "Managed Service Provider (MSP)",
        slug: "managed-service-provider-msp",
      },
      { name: "Co-sell", slug: "co-sell" },
    ],
  },
  {
    name: "Signup URL Redirect",
    tags: ["suger"],
    def: "A Suger feature where marketplace buyer signup URLs route through Suger first for entitlement provisioning, then redirect to the ISV's own onboarding URL. Decouples marketplace provisioning from product onboarding.",
    alias: "Related: Entitlement, Landing Page / Signup URL",
    source: "https://doc.suger.io/get-started/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Routing post-purchase marketplace redirects through Suger to auto-provision entitlements before sending buyers to your onboarding flow",
      "Decoupling marketplace provisioning from product onboarding so entitlement state is tracked in Suger before handoff",
    ],
    context: [
      "Suger Console",
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
      "Buyer Onboarding",
    ],
    related: [
      { name: "Landing Page / Signup URL", slug: "landing-page-/-signup-url" },
      { name: "Entitlement", slug: "entitlement" },
      { name: "Billing Integration", slug: "billing-integration" },
    ],
  },
  {
    name: "Snowflake Marketplace — Snowflake",
    tags: ["snowflake"],
    def: "Snowflake's data marketplace for sharing and monetizing data products, apps, and native apps within Snowflake environments. Suger supports Snowflake Marketplace listing and entitlement management.",
    alias:
      "Related: Snowflake Data Clean Rooms — Snowflake, Snowflake Data Appreciation (SDA) — Snowflake",
    source:
      "https://docs.snowflake.com/en/collaboration/collaboration-listings-about",
    difficulty: "beginner",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Listing data products, apps, or native apps on Snowflake Marketplace to monetize within Snowflake environments",
      "Managing Snowflake Marketplace entitlements through Suger alongside AWS, Azure, and GCP listings",
    ],
    context: ["Snowflake Environment", "Suger Console"],
    related: [
      {
        name: "Snowflake Data Clean Rooms — Snowflake",
        slug: "snowflake-data-clean-rooms-—-snowflake",
      },
      {
        name: "Snowflake Data Appreciation (SDA) — Snowflake",
        slug: "snowflake-data-appreciation-sda-—-snowflake",
      },
      { name: "Listing", slug: "listing" },
    ],
  },
  {
    name: "Solution Listing — AWS",
    tags: ["aws", "offers"],
    def: "An AWS Marketplace discovery page that showcases how multiple products work together to solve a specific customer problem, part of the Multi-Product Solutions framework. Solution Listings are not independently transactable — they serve as a curated landing page that links buyers to the individual products or Offer Sets within the solution. Enables sellers to present a complete, integrated offering without creating a new transactional SKU.",
    alias:
      "Related: Multi-Product Solution — AWS | Related: Offer Set — AWS | Related: Listing",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/multi-product-solutions.html",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Creating a unified discovery page for a platform solution that spans multiple AWS Marketplace products",
      "Helping enterprise buyers find and evaluate a complete multi-component solution without searching for each product separately",
    ],
    context: [
      "AWS Marketplace",
      "Multi-Product Solutions",
      "Product Discovery",
    ],
    related: [
      {
        name: "Multi-Product Solution — AWS",
        slug: "multi-product-solution-—-aws",
      },
      { name: "Offer Set — AWS", slug: "offer-set-—-aws" },
      { name: "Listing", slug: "listing" },
    ],
  },
  {
    name: "Solution Provider Private Offer (SPPO) — AWS",
    tags: ["aws", "cosell", "offers"],
    def: "An AWS program enabling pre-vetted Solution Providers to create private offers at pre-negotiated ISV discounts — without needing to negotiate deal-by-deal. ISVs must be enrolled in ISV Accelerate.",
    alias:
      "Related: Channel Partner Private Offer (CPPO) — AWS, ISV Accelerate — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/channel-partner-offers.html",
    difficulty: "intermediate",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Channel Partners"],
    useCases: [
      "Enabling pre-vetted Solution Providers to transact at a standing wholesale discount without per-deal authorization",
      "Scaling channel sales on AWS Marketplace by pre-negotiating SPPO terms with multiple resellers upfront",
    ],
    context: ["AWS Marketplace", "Channel Programs", "ISV Accelerate"],
    related: [
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
      },
      {
        name: "Resale Authorization — AWS",
        slug: "resale-authorization-—-aws",
      },
      { name: "ISV Accelerate — AWS", slug: "isv-accelerate-—-aws" },
    ],
  },
  {
    name: "Suger",
    tags: ["suger"],
    def: "A unified cloud marketplace platform enabling ISVs to list, transact, meter, and co-sell across AWS, Azure, GCP, and Snowflake from a single interface, with integrations into CRM, billing, and communication tools.",
    alias: "Related: Suger Analytics, Entitlement, Metering Dimension",
    source: "https://www.suger.io/",
    difficulty: "beginner",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Managing all cloud marketplace operations — listing, transacting, metering, and co-selling — from one platform",
      "Connecting marketplace entitlements to CRM, billing systems, and co-sell workflows via Suger integrations",
    ],
    context: ["Cloud Marketplace Operations", "Suger Console"],
    related: [
      { name: "Suger Console", slug: "suger-console" },
      { name: "Suger Analytics", slug: "suger-analytics" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "Suger Console",
    tags: ["suger"],
    def: "The central web-based interface for managing cloud marketplace operations, viewing analytics, configuring integrations, and executing co-sell motions across all connected platforms.",
    alias: "Related: Suger Analytics, Entitlement, Metering Dimension",
    source: "https://doc.suger.io/get-started/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Accessing all Suger features — offers, entitlements, metering, co-sell, analytics — from a single web interface",
      "Configuring marketplace integrations, RBAC permissions, and workflow automations in the Suger Console",
    ],
    context: ["Suger Platform", "Daily Operations"],
    related: [
      { name: "Suger Analytics", slug: "suger-analytics" },
      { name: "Organization", slug: "organization" },
      { name: "Integration", slug: "integration" },
    ],
  },
  {
    name: "Subscription — AWS",
    tags: ["aws"],
    def: "An AWS Marketplace pay-as-you-go pricing model. Buyers can cancel any time and are billed based on metered usage only, with no upfront commitment. Different from Azure and Snowflake subscriptions, which may be commit-based.",
    alias: "",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/saas-pricing-models.html",
    difficulty: "beginner",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Listing a flexible, cancel-anytime product on AWS Marketplace with pure usage-based billing",
      "Understanding the difference between AWS Subscription pricing vs. AWS Contract pricing for SaaS products",
    ],
    context: ["AWS Marketplace", "Pricing Configuration"],
    related: [
      { name: "PAYG / Pay-as-you-go", slug: "payg-/-pay-as-you-go" },
      { name: "Metered Billing", slug: "metered-billing" },
      { name: "Contract — AWS", slug: "contract-—-aws" },
    ],
  },
  {
    name: "Subscription — Azure",
    tags: ["azure"],
    def: "A buyer's active contract for a marketplace offer. In Azure, the Subscription ID is the external identifier for an Entitlement in Suger.",
    alias: "Related: Entitlement, SaaS Fulfillment API — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/create-new-saas-offer",
    difficulty: "beginner",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers", "Suger Users"],
    useCases: [
      "Mapping an Azure Subscription ID to a Suger Entitlement for lifecycle tracking and metering",
      "Understanding how the Azure Subscription ID appears in SaaS Fulfillment API events",
    ],
    context: [
      "Azure Marketplace",
      "Suger Console",
      "SaaS Fulfillment API — Azure",
    ],
    related: [
      { name: "Entitlement", slug: "entitlement" },
      {
        name: "SaaS Fulfillment API — Azure",
        slug: "saas-fulfillment-api-—-azure",
      },
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
    ],
  },
  {
    name: "Subscription — GCP",
    tags: ["gcp"],
    def: "A buyer's active contract for a marketplace offer. In GCP, 'Subscription-based' pricing refers to a flat-rate commit model.",
    alias: "Related: Entitlement, Procurement API — GCP",
    source:
      "https://docs.cloud.google.com/marketplace/docs/partners/integrated-saas",
    difficulty: "beginner",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers", "Suger Users"],
    useCases: [
      "Understanding how GCP Subscription-based pricing maps to flat-rate commit models in Suger",
      "Tracking GCP subscription lifecycle events via Suger's entitlement management",
    ],
    context: ["GCP Marketplace", "Suger Console", "Procurement API — GCP"],
    related: [
      { name: "Entitlement", slug: "entitlement" },
      { name: "Procurement API — GCP", slug: "procurement-api-—-gcp" },
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
    ],
  },
  {
    name: "Transactable Offer",
    tags: ["general", "azure"],
    def: "A marketplace listing where the cloud provider handles the complete commerce transaction — payment, invoicing, and disbursement — on behalf of the ISV. Required for committed spend drawdown (EDP, MACC, CUD). Contrasts with BYOL or Contact Me listings.",
    alias:
      "Related: Listing, Committed Spend / Cloud Commit, Bring Your Own License (BYOL)",
    source:
      "https://learn.microsoft.com/en-us/azure/marketplace/marketplace-commercial-transaction-capabilities-and-considerations",
    difficulty: "beginner",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Publishing a transactable listing to enable marketplace-billed purchases that draw down EDP, MACC, or CUD",
      "Distinguishing transactable offers from BYOL or Contact Me listings when configuring a marketplace strategy",
    ],
    context: [
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
      "Listing Types",
    ],
    related: [
      { name: "Listing", slug: "listing" },
      {
        name: "Committed Spend / Cloud Commit",
        slug: "committed-spend-/-cloud-commit",
      },
      {
        name: "Bring Your Own License (BYOL)",
        slug: "bring-your-own-license-byol",
      },
    ],
  },
  {
    name: "Usage-Based Pricing — GCP",
    tags: ["gcp"],
    def: "GCP Marketplace's pay-as-you-go pricing model. Buyers are billed based on metered consumption with no upfront commitment. The GCP equivalent of AWS Subscription pricing.",
    alias: "Related: Pay-As-You-Go (PAYG), GCP Marketplace — GCP",
    source:
      "https://docs.cloud.google.com/marketplace/docs/partners/integrated-saas",
    difficulty: "beginner",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Configuring a GCP Marketplace SaaS offer with pure consumption-based pricing and no upfront commitment",
      "Understanding GCP Usage-based pricing as the equivalent of AWS Subscription pricing",
    ],
    context: [
      "GCP Marketplace",
      "Producer Portal — GCP",
      "Pricing Configuration",
    ],
    related: [
      { name: "PAYG / Pay-as-you-go", slug: "payg-/-pay-as-you-go" },
      { name: "Combined Pricing — GCP", slug: "combined-pricing-—-gcp" },
      { name: "Metered Billing", slug: "metered-billing" },
    ],
  },
  {
    name: "Usage Credit",
    tags: ["suger"],
    def: "Credits applied to a buyer's entitlement in Suger that reduce billable usage reported to the marketplace. Used for promotions, trials, service credits, or billing corrections.",
    alias: "Related: Entitlement, Usage Metering",
    source: "https://doc.suger.io/get-started/usage-credit/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Applying promotional or service credits to a buyer's entitlement to reduce their next billing cycle",
      "Issuing a billing correction by adding usage credits that offset over-reported consumption",
    ],
    context: ["Suger Console", "Entitlement Management", "Metering"],
    related: [
      { name: "Entitlement", slug: "entitlement" },
      { name: "Usage Metering", slug: "usage-metering" },
      { name: "Buyer Wallet", slug: "buyer-wallet" },
    ],
  },
  {
    name: "Usage Metering",
    tags: ["suger", "general"],
    def: "The process of tracking and reporting a buyer's consumption of a product in a billing period. Suger provides a unified metering API normalizing reporting across AWS, Azure, and GCP — handling deduplication, validation, and aggregation.",
    alias:
      "AWS equivalent: BatchMeterUsage API — AWS | Related: Metering Dimension, Billable Metric, Usage Record",
    source: "https://doc.suger.io/billing/metering/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Submitting usage data to Suger's unified metering API to trigger billing across AWS, Azure, or GCP",
      "Validating that reported consumption is correctly aggregated and deduplicated before forwarding to the marketplace",
    ],
    context: [
      "Suger Console",
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
    ],
    related: [
      { name: "Metering Dimension", slug: "metering-dimension" },
      { name: "Usage Record", slug: "usage-record" },
      { name: "Metered Billing", slug: "metered-billing" },
      { name: "BatchMeterUsage API — AWS", slug: "batchmeterusage-api-—-aws" },
    ],
  },
  {
    name: "Usage Record",
    tags: ["suger"],
    def: "A metering event sent to Suger's API reporting a buyer's consumption of one or more dimensions for a given entitlement. Suger deduplicates by ID, validates, and forwards to the correct marketplace.",
    alias:
      "Also known as: Usage Record Group | Related: Usage Metering, Metering Dimension",
    source: "https://doc.suger.io/billing/metering/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Submitting a usage record to Suger's API to report consumption for a specific entitlement and billing period",
      "Checking usage record status in Suger to confirm a metering event was validated and forwarded to the marketplace",
    ],
    context: ["Suger Console", "Suger API", "Usage Metering"],
    related: [
      { name: "Usage Metering", slug: "usage-metering" },
      { name: "Metering Dimension", slug: "metering-dimension" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "Vendor-Metered Tagging — AWS",
    tags: ["aws", "suger"],
    def: "An AWS feature (supported by Suger) that lets sellers tag metered usage by cost category (e.g., team, department). Tags propagate to the buyer's AWS Billing Console, enabling detailed cost allocation.",
    alias: "Related: Usage Metering, Product Code — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/APIReference/welcome.html",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Tagging metered usage by department or team so buyers can allocate costs in their AWS Billing Console",
      "Using Suger to include cost allocation tags when submitting usage records to AWS Marketplace",
    ],
    context: ["AWS Marketplace", "Suger Console", "AWS Billing Console"],
    related: [
      { name: "Usage Metering", slug: "usage-metering" },
      { name: "Metering Dimension", slug: "metering-dimension" },
      { name: "Product Code — AWS", slug: "product-code-—-aws" },
    ],
  },
  {
    name: "Webhook",
    tags: ["suger"],
    def: "An HTTP callback configured in Suger that pushes real-time event notifications — new entitlements, cancellations, plan changes, usage alerts — to an ISV's service endpoint.",
    alias: "Related: Email Notification, Workflow, Integration",
    source: "https://doc.suger.io/get-started/webhook/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Configuring a webhook to push real-time entitlement creation and cancellation events to your backend system",
      "Triggering provisioning or deprovisioning workflows in your product when Suger sends a lifecycle event",
    ],
    context: ["Suger Console", "ISV Backend Systems"],
    related: [
      { name: "Workflow", slug: "workflow" },
      { name: "Email Notification", slug: "email-notification" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "Workflow",
    tags: ["suger"],
    def: "An automation rule in Suger that triggers actions (CRM updates, Slack notifications, metering) based on marketplace events such as new entitlement creation or subscription cancellation.",
    alias: "Related: Webhook, Integration, CRM Integration",
    source: "https://doc.suger.io/workflow/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Automating CRM updates, Slack alerts, or metering triggers when a new entitlement is created in Suger",
      "Building no-code automation rules in Suger to handle marketplace events across connected platforms",
    ],
    context: ["Suger Console", "Automation Rules"],
    related: [
      { name: "Webhook", slug: "webhook" },
      { name: "Integration", slug: "integration" },
      { name: "CRM Integration", slug: "crm-integration" },
    ],
  },
  {
    name: "Workload Identity Federation — GCP",
    tags: ["gcp", "suger"],
    def: "A GCP mechanism Suger uses to authenticate as the ISV's service account without storing long-lived keys. Allows Suger's AWS-based infrastructure to securely call GCP Marketplace APIs on the ISV's behalf.",
    alias: "",
    source:
      "https://docs.cloud.google.com/iam/docs/workload-identity-federation",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Configuring Workload Identity Federation during Suger GCP integration setup to enable keyless authentication",
      "Avoiding long-lived GCP service account key storage by delegating authentication to Suger via federation",
    ],
    context: ["GCP Marketplace", "Suger Console", "GCP IAM"],
    related: [
      { name: "Service Account — GCP", slug: "service-account-—-gcp" },
      { name: "Procurement API — GCP", slug: "procurement-api-—-gcp" },
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
    ],
  },
  {
    name: "Alibaba Cloud Marketplace",
    tags: ["general", "alibaba"],
    def: "Alibaba Cloud's digital marketplace connecting ISVs and SaaS providers with customers globally and in China. Supports private offers, usage metering, and consolidated billing through Alibaba Cloud accounts.",
    alias: "Related: Private Offer, Usage Metering, Entitlement",
    source: "https://www.alibabacloud.com/en/marketplace",
    difficulty: "beginner",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Listing a product on Alibaba Cloud Marketplace to reach customers in China and global Alibaba Cloud regions",
      "Managing Alibaba Cloud Marketplace entitlements alongside AWS, Azure, and GCP listings in Suger",
    ],
    context: ["Alibaba Cloud Console", "Suger Console"],
    related: [
      { name: "Listing", slug: "listing" },
      { name: "Entitlement", slug: "entitlement" },
      { name: "Private Offer", slug: "private-offer" },
    ],
  },
  {
    name: "Suger API Client",
    tags: ["suger"],
    def: "Suger's authentication mechanism for programmatic access to the Suger API. ISVs generate API client credentials in the Suger Console to authenticate server-to-server calls for metering, entitlement management, and workflow automation.",
    alias: "Related: Suger Console, Webhook",
    source: "https://doc.suger.io/api/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Generating API client credentials in Suger to authenticate server-to-server calls for programmatic metering",
      "Using the Suger API Client to automate entitlement queries, usage submissions, and workflow triggers",
    ],
    context: ["Suger Console", "Suger API", "Backend Integration"],
    related: [
      { name: "Suger Console", slug: "suger-console" },
      { name: "Webhook", slug: "webhook" },
      { name: "Usage Metering", slug: "usage-metering" },
    ],
  },
  {
    name: "Billable Metric",
    tags: ["suger"],
    def: "A named, reusable definition in Suger that specifies what usage to track and how to aggregate it — by COUNT, SUM, MAX, UNIQUE COUNT, or LATEST. Billable metrics are created before offers and referenced in price models to calculate charges. Distinct from Metering Dimension, which is marketplace-specific.",
    alias: "",
    source: "https://doc.suger.io/billing/billable-metrics/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Defining what usage to track (API calls, GB processed, transactions) before building an offer price model",
      "Creating a reusable billable metric that can be referenced across multiple offers and price models",
    ],
    context: ["Suger Console", "Price Model Configuration"],
    related: [
      { name: "Billable Dimension", slug: "billable-dimension" },
      { name: "Price Model", slug: "price-model" },
      { name: "Metering Dimension", slug: "metering-dimension" },
    ],
  },
  {
    name: "Billable Dimension",
    tags: ["suger"],
    def: "The combination of a Billable Metric and a usage metering price model within an offer. Defines both what gets measured and how it gets priced. Multiple billable dimensions can be configured in a single offer.",
    alias: "",
    source: "https://doc.suger.io/billing/price-model/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Configuring multiple pricing dimensions in a single offer — e.g., one for API calls and another for storage",
      "Pairing a billable metric with a tiered or volume price model to create a specific billing dimension",
    ],
    context: ["Suger Console", "Offer Configuration"],
    related: [
      { name: "Billable Metric", slug: "billable-metric" },
      { name: "Price Model", slug: "price-model" },
      { name: "Offer", slug: "offer" },
    ],
  },
  {
    name: "Billing Cycle",
    tags: ["suger"],
    def: "The start day of a billing period in Suger — either the start date of the entitlement or the 1st of the month. Determines when each billing period begins relative to the contract.",
    alias: "",
    source: "https://doc.suger.io/billing/",
    difficulty: "beginner",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Configuring whether billing periods start on entitlement creation date or the 1st of the calendar month",
      "Aligning billing cycle settings to match a buyer's expected invoice cadence",
    ],
    context: ["Suger Console", "Billing Configuration"],
    related: [
      { name: "Billing Period", slug: "billing-period" },
      { name: "Billing Interval", slug: "billing-interval" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "Billing Interval",
    tags: ["suger", "general"],
    def: "The frequency at which a buyer is charged within a contract — monthly, quarterly, annually, etc. Configured per price model in a Suger offer.",
    alias: "",
    source: "https://doc.suger.io/billing/",
    difficulty: "beginner",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users", "Enterprise Buyers"],
    useCases: [
      "Setting monthly, quarterly, or annual billing frequency on a Suger offer price model",
      "Matching the billing interval to enterprise procurement requirements for predictable invoice scheduling",
    ],
    context: ["Suger Console", "Offer Configuration", "Price Model"],
    related: [
      { name: "Billing Cycle", slug: "billing-cycle" },
      { name: "Billing Period", slug: "billing-period" },
      { name: "Price Model", slug: "price-model" },
    ],
  },
  {
    name: "Billing Period",
    tags: ["suger", "general"],
    def: "A single charging cycle within a contract's duration. The price model is applied once per billing period. Multiple billing periods span the full contract term.",
    alias: "",
    source: "https://doc.suger.io/billing/",
    difficulty: "beginner",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users", "Enterprise Buyers"],
    useCases: [
      "Understanding how billing periods structure charges throughout an annual or multi-year contract",
      "Troubleshooting invoice timing by reviewing which billing period an invoice corresponds to",
    ],
    context: ["Suger Console", "Invoice Management", "Billing Configuration"],
    related: [
      { name: "Billing Cycle", slug: "billing-cycle" },
      { name: "Billing Interval", slug: "billing-interval" },
      { name: "Invoice", slug: "invoice" },
    ],
  },
  {
    name: "Chargebee Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Chargebee, a subscription billing platform. Allows ISVs already using Chargebee to sync billing data and entitlements with Suger's marketplace and co-sell workflows.",
    alias: "",
    source: "https://doc.suger.io/integrations/chargebee/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Syncing Chargebee subscription data with Suger entitlements for unified billing and marketplace reporting",
      "Connecting an ISV's existing Chargebee billing to Suger's marketplace and co-sell workflows",
    ],
    context: ["Suger Console", "Chargebee", "Billing Integration"],
    related: [
      { name: "Stripe Integration", slug: "stripe-integration" },
      { name: "Billing", slug: "billing" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "Databricks Marketplace",
    tags: ["general"],
    def: "Databricks' marketplace for data products and AI applications within the Databricks Data Intelligence Platform. Suger supports integration with Databricks to automate workflows, execute queries, and sync marketplace data.",
    alias: "",
    source: "https://docs.databricks.com/aws/en/marketplace",
    difficulty: "intermediate",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Listing data products and AI applications on Databricks Marketplace to reach Databricks platform users",
      "Integrating Databricks Marketplace workflows with Suger for automated query execution and data sync",
    ],
    context: ["Databricks Platform", "Suger Console"],
    related: [
      { name: "Listing", slug: "listing" },
      { name: "Entitlement", slug: "entitlement" },
      {
        name: "Snowflake Marketplace — Snowflake",
        slug: "snowflake-marketplace-—-snowflake",
      },
    ],
  },
  {
    name: "Email Notification",
    tags: ["suger"],
    def: "Suger's event-driven email alert and transactional email system. ISVs configure recipient lists to receive notifications on marketplace events — new entitlements, cancellations, usage alerts, and invoice issuance — distinct from Webhooks, which push to service endpoints. Suger also provides a full custom template builder powered by a Golang Template evaluator: templates support merge tags (buyer name, offer details, entitlement ID, and more), images, buttons, headings, and raw HTML blocks, with a test-against-mock-data capability that lets sellers preview rendered emails before activating.",
    alias: "Related: Webhook, Workflow, Entitlement",
    source: "https://doc.suger.io/get-started/email-notification/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Configuring email alerts so sales and ops teams are notified immediately when a new entitlement is created",
      "Receiving invoice issuance and usage threshold alerts via email without setting up a webhook endpoint",
    ],
    context: ["Suger Console", "Notification Settings"],
    related: [
      { name: "Webhook", slug: "webhook" },
      { name: "Workflow", slug: "workflow" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "Invoice",
    tags: ["suger"],
    def: "A billing document automatically generated by Suger per entitlement for non-cloud marketplace billing (e.g. Stripe). Four types exist: Commit, Installment, Usage, and Addon. Invoices can be issued automatically on due date or manually, edited while in Draft state, and exported as PDF.",
    alias:
      "Types: Commit, Installment, Usage, Addon | Related: Revenue, Stripe Integration, Disbursement",
    source: "https://doc.suger.io/billing/invoice/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users", "Enterprise Buyers"],
    useCases: [
      "Reviewing and exporting invoices generated by Suger for direct (non-marketplace) billing via Stripe",
      "Editing a Draft invoice before issuance to correct amounts, dates, or line items",
    ],
    context: ["Suger Console", "Direct Billing", "Stripe Integration"],
    related: [
      { name: "Payment", slug: "payment" },
      { name: "Revenue", slug: "revenue" },
      { name: "Stripe Integration", slug: "stripe-integration" },
    ],
  },
  {
    name: "Matrix Pricing",
    tags: ["suger"],
    def: "A Suger usage metering price model that determines per-unit cost based on combinations of two or more properties (e.g. cloud provider + region). Each property combination maps to a distinct price; unmatched combinations fall back to a default price.",
    alias: "",
    source: "https://doc.suger.io/billing/price-model/",
    difficulty: "advanced",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Pricing usage differently based on a combination of properties — e.g., cloud provider × region — using a matrix lookup",
      "Configuring a fallback default price for usage events that don't match any matrix property combination",
    ],
    context: ["Suger Console", "Price Model Configuration"],
    related: [
      { name: "Price Model", slug: "price-model" },
      { name: "Tiered Pricing", slug: "tiered-pricing" },
      { name: "Billable Metric", slug: "billable-metric" },
    ],
  },
  {
    name: "Minimum Spend",
    tags: ["suger", "general"],
    def: "A floor amount set on a usage-based price model ensuring a buyer is charged at least a defined minimum per billing period, regardless of actual consumption.",
    alias: "",
    source: "https://doc.suger.io/billing/price-model/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Setting a minimum monthly charge on a usage-based offer to protect revenue floor even in low-usage periods",
      "Communicating minimum spend requirements to buyers as part of the offer terms",
    ],
    context: ["Suger Console", "Price Model Configuration", "Offer Terms"],
    related: [
      { name: "Price Model", slug: "price-model" },
      { name: "Metered Billing", slug: "metered-billing" },
      { name: "Commit / Prepaid Commit", slug: "commit-/-prepaid-commit" },
    ],
  },
  {
    name: "NetSuite Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Oracle NetSuite ERP, enabling ISVs to sync marketplace revenue, invoices, and entitlement data with their financial management system for automated reconciliation.",
    alias: "",
    source: "https://doc.suger.io/integrations/netsuite/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Syncing Suger marketplace revenue and invoice data into NetSuite for automated financial reconciliation",
      "Eliminating manual ERP data entry by connecting Suger's billing and revenue layer to Oracle NetSuite",
    ],
    context: ["Suger Console", "NetSuite", "Finance Operations"],
    related: [
      { name: "Revenue", slug: "revenue" },
      { name: "Invoice", slug: "invoice" },
      { name: "Disbursement", slug: "disbursement" },
    ],
  },
  {
    name: "Okta Single Sign-On (SSO) Integration",
    tags: ["suger", "integrations"],
    def: "Suger's Single Sign-On integration with Okta. Allows organizations to manage Suger Console access through their existing Okta identity provider, enforcing centralized authentication and access policies.",
    alias: "Related: Role-Based Access Control (RBAC), Suger Console",
    source: "https://doc.suger.io/integrations/okta-sso/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Enforcing centralized authentication for Suger Console access via an existing Okta identity provider",
      "Managing Suger team access through Okta SSO to align with enterprise identity governance policies",
    ],
    context: ["Suger Console", "Okta", "Identity Management"],
    related: [
      {
        name: "Role-Based Access Control (RBAC)",
        slug: "role-based-access-control-rbac",
      },
      { name: "Organization", slug: "organization" },
      { name: "Suger Console", slug: "suger-console" },
    ],
  },
  {
    name: "Price Model",
    tags: ["suger"],
    def: "Suger's configuration for how a buyer is charged within an offer. Two top-level types: Flat Fee (fixed installments or recurring commits) and Usage Metering (consumption-based). Supports seven sub-types: Basic, Tiered, Bulk, Volume, Percentage, Tiered Percentage, and Matrix pricing.",
    alias:
      "Sub-types: Basic, Tiered, Bulk, Volume, Percentage, Tiered Percentage, Matrix | Related: Billable Metric, Billable Dimension, Offer",
    source: "https://doc.suger.io/billing/price-model/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Configuring how buyers are charged in a Suger offer — choosing between flat fee commit or consumption-based models",
      "Selecting the right price model sub-type (Tiered, Volume, Matrix, etc.) for a specific pricing structure",
    ],
    context: ["Suger Console", "Offer Configuration"],
    related: [
      { name: "Billable Metric", slug: "billable-metric" },
      { name: "Billable Dimension", slug: "billable-dimension" },
      { name: "Metered Billing", slug: "metered-billing" },
    ],
  },

  {
    name: "Recurring Commit",
    tags: ["suger"],
    def: "A flat fee price model in Suger that charges a buyer a fixed amount per billing period (quantity × rate). Supports prepay or postpay, and can be updated mid-contract — useful for per-seat pricing where seat count changes during the term.",
    alias: "",
    source: "https://doc.suger.io/billing/price-model/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Configuring per-seat pricing in Suger where the seat count can be updated mid-contract as headcount changes",
      "Using a recurring commit price model for monthly SaaS fees with prepay or postpay flexibility",
    ],
    context: ["Suger Console", "Price Model Configuration"],
    related: [
      { name: "Price Model", slug: "price-model" },
      { name: "Commit / Prepaid Commit", slug: "commit-/-prepaid-commit" },
      { name: "Billing Interval", slug: "billing-interval" },
    ],
  },
  {
    name: "Revenue",
    tags: ["suger"],
    def: "Suger's revenue tracking layer that generates per-entitlement revenue records and aggregated reports by product and buyer. Distinct from Disbursement — Revenue tracks what was earned; Disbursement tracks what was paid out by the marketplace.",
    alias: "Related: Disbursement, Invoice, Suger Analytics",
    source: "https://doc.suger.io/billing/revenue/",
    difficulty: "beginner",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Reviewing per-entitlement revenue records and aggregated reports by product in the Suger Console",
      "Distinguishing earned revenue (Revenue) from actual marketplace payouts (Disbursement) in Suger reporting",
    ],
    context: ["Suger Console", "Revenue Dashboard"],
    related: [
      { name: "Disbursement", slug: "disbursement" },
      { name: "Invoice", slug: "invoice" },
      { name: "Suger Analytics", slug: "suger-analytics" },
    ],
  },
  {
    name: "Salesforce App",
    tags: ["suger", "cosell", "integrations"],
    def: "Suger's native Salesforce application that embeds marketplace entitlement data, co-sell referral status, and metering information directly inside Salesforce — beyond the standard CRM Integration's bi-directional sync.",
    alias: "",
    source: "https://doc.suger.io/integrations/salesforce/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users", "Partner Managers"],
    useCases: [
      "Embedding live marketplace entitlement and co-sell data inside Salesforce opportunities without leaving the CRM",
      "Giving sales teams real-time marketplace context on accounts directly within Salesforce",
    ],
    context: ["Salesforce", "Suger Console", "Co-sell Workflows"],
    related: [
      { name: "Salesforce Integration", slug: "salesforce-integration" },
      { name: "CRM Integration", slug: "crm-integration" },
      { name: "Co-sell", slug: "co-sell" },
    ],
  },
  {
    name: "HubSpot App",
    tags: ["suger", "cosell", "integrations"],
    def: "Suger's native HubSpot application that surfaces marketplace and co-sell data inside HubSpot deals and contacts, enabling sales teams to act on entitlement events without leaving their CRM.",
    alias: "",
    source: "https://doc.suger.io/integrations/hubspot/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users", "Partner Managers"],
    useCases: [
      "Surfacing marketplace entitlement events and co-sell referral status inside HubSpot deals",
      "Enabling sales teams to act on marketplace events without switching out of HubSpot",
    ],
    context: ["HubSpot", "Suger Console", "Co-sell Workflows"],
    related: [
      { name: "HubSpot Integration", slug: "hubspot-integration" },
      { name: "CRM Integration", slug: "crm-integration" },
      { name: "Co-sell", slug: "co-sell" },
    ],
  },
  {
    name: "Service Quotas",
    tags: ["suger"],
    def: "Suger-enforced limits on API request rates and resource counts per organization — such as the number of products, offers, or usage records that can be created. Quotas can be reviewed and increase requests submitted via the Suger Console.",
    alias: "",
    source: "https://doc.suger.io/get-started/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Reviewing current API rate limits and resource quotas for your Suger organization",
      "Submitting a quota increase request when usage approaches limits on products, offers, or usage records",
    ],
    context: ["Suger Console", "API Rate Limits"],
    related: [
      { name: "Suger API Client", slug: "suger-api-client" },
      { name: "Organization", slug: "organization" },
    ],
  },
  {
    name: "Stripe Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Stripe for non-marketplace (direct) billing. When Stripe is selected as the billing partner on a product, Suger uses Stripe to collect payments, issue invoices, and deposit funds to the ISV's Stripe account.",
    alias: "",
    source: "https://doc.suger.io/integrations/stripe/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Enabling direct billing for buyers who don't transact through a cloud marketplace using Stripe as the payment processor",
      "Configuring Suger to issue invoices and collect payments through Stripe for non-marketplace entitlements",
    ],
    context: ["Suger Console", "Stripe", "Direct Billing"],
    related: [
      { name: "Invoice", slug: "invoice" },
      { name: "Payment", slug: "payment" },
      { name: "Billing", slug: "billing" },
    ],
  },
  {
    name: "Table Export",
    tags: ["suger"],
    def: "A Suger feature that exports tabular data — entitlements, usage records, revenue — from Suger's database to Amazon S3 (via a temporary presigned link) or Snowflake for custom reporting and data warehousing. Exports support CSV, JSON, and Parquet formats, and can be configured as one-time exports or recurring scheduled exports with time-based filters. Table Export is the primary mechanism for pushing Suger data into external analytics pipelines or data warehouses.",
    alias: "Related: Snowflake Integration, Suger Analytics",
    source: "https://doc.suger.io/get-started/table-export/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Scheduling a recurring Suger Table Export to Amazon S3 in Parquet format to feed an existing data warehouse pipeline with entitlement and revenue data",
      "Running a one-time Table Export to Snowflake to pull historical usage records for a custom finance report",
      "Exporting Suger revenue data in CSV format for ad-hoc analysis without using the built-in Suger Analytics dashboards",
    ],
    context: ["Suger Console", "Amazon S3", "Snowflake", "Data Warehousing"],
    related: [
      { name: "Snowflake Integration", slug: "snowflake-integration" },
      { name: "Suger Analytics", slug: "suger-analytics" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "Tiered Pricing",
    tags: ["suger", "general"],
    def: "A usage metering price model where the cost per unit depends on which tier range the unit falls into. Each tier can have its own per-unit rate and optional flat fee. Lower tiers are charged at their own rate even when higher tiers are reached — contrast with Volume Pricing.",
    alias: "",
    source: "https://doc.suger.io/billing/price-model/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Pricing usage where each consumption tier has a distinct per-unit rate — lower tiers stay at their own price",
      "Explaining tiered pricing to buyers so they understand how usage in each band is independently priced",
    ],
    context: ["Suger Console", "Price Model Configuration"],
    related: [
      { name: "Volume Pricing", slug: "volume-pricing" },
      { name: "Price Model", slug: "price-model" },
      { name: "Metered Billing", slug: "metered-billing" },
    ],
  },
  {
    name: "Volume Pricing",
    tags: ["suger", "general"],
    def: "A usage metering price model where the total quantity purchased determines the per-unit rate applied to all units. Reaching a higher volume tier changes the price retroactively for the entire quantity — contrast with Tiered Pricing.",
    alias: "",
    source: "https://doc.suger.io/billing/price-model/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Incentivizing higher usage with volume discounts where hitting a tier retroactively reprices all units",
      "Explaining to buyers how volume pricing differs from tiered pricing — all units get repriced when a volume threshold is hit",
    ],
    context: ["Suger Console", "Price Model Configuration"],
    related: [
      { name: "Tiered Pricing", slug: "tiered-pricing" },
      { name: "Price Model", slug: "price-model" },
      { name: "Metered Billing", slug: "metered-billing" },
    ],
  },
  {
    name: "Bulk Pricing",
    tags: ["suger"],
    def: "A Suger usage metering price model that charges usage in fixed bundles. If a buyer uses fewer units than a bundle size, they are billed for the full bundle. Usage above one bundle rolls into the next.",
    alias: "",
    source: "https://doc.suger.io/billing/price-model/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Pricing products in fixed unit bundles where partial bundle usage is still billed as a full bundle",
      "Structuring a token or credit pack pricing model where buyers purchase in fixed increments",
    ],
    context: ["Suger Console", "Price Model Configuration"],
    related: [
      { name: "Price Model", slug: "price-model" },
      { name: "Tiered Pricing", slug: "tiered-pricing" },
      { name: "Metered Billing", slug: "metered-billing" },
    ],
  },
  {
    name: "Percentage Pricing",
    tags: ["suger"],
    def: "A Suger usage metering price model that charges a percentage of a value carried in the usage event — for example, a percentage of a transaction amount. Supports an optional flat fee per event.",
    alias: "",
    source: "https://doc.suger.io/billing/price-model/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Charging a revenue-share or take-rate model where billing is a percentage of transaction value reported in usage events",
      "Adding a flat fee per transaction on top of the percentage-based charge",
    ],
    context: ["Suger Console", "Price Model Configuration"],
    related: [
      { name: "Price Model", slug: "price-model" },
      { name: "Billable Metric", slug: "billable-metric" },
      { name: "Metered Billing", slug: "metered-billing" },
    ],
  },
  {
    name: "AWS Partner Funding — AWS",
    tags: ["aws", "cosell", "funding"],
    def: "AWS's program that provides financial support (credits or cash) to partners pursuing co-sell opportunities. In Suger, funding requests are submitted, tracked, and managed directly from the Co-sell module via the Partner Central Funding Benefits API.",
    alias:
      "Related: Marketing Development Funds (MDF) — AWS, Migration Acceleration Program (MAP) — AWS, Partner Opportunity Acceleration (POA) — AWS, Proof of Concept (POC) Funding — AWS",
    source: "https://aws.amazon.com/partners/funding/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "AWS Sales", "Partner Managers"],
    useCases: [
      "Submitting and tracking funding requests across MDF, MAP, POC, and PIF programs via Suger's Co-sell module",
      "Understanding available AWS funding programs before engaging a PDM or using the AWS Partner Funding Portal",
    ],
    context: ["Suger Console", "AWS Partner Central", "Co-sell Module"],
    related: [
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
      },
      {
        name: "Partner Opportunity Acceleration (POA) — AWS",
        slug: "partner-opportunity-acceleration-poa-—-aws",
      },
      {
        name: "AWS Partner Funding Portal (APFP) — AWS",
        slug: "aws-partner-funding-portal-apfp-—-aws",
      },
    ],
  },
  {
    name: "Funding Wallet",
    tags: ["aws", "cosell", "suger"],
    def: "A balance and budget tracker within Suger's Funding tab showing a partner's available funding balance and the history of submitted and approved funding requests from AWS.",
    alias: "",
    source: "https://doc.suger.io/cosell/cosell-funding/",
    difficulty: "beginner",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Checking available AWS funding balance and request history from Suger's Funding tab without logging into AWS Partner Central",
      "Tracking the status of submitted and approved AWS funding requests in one place alongside co-sell referrals",
    ],
    context: ["Suger Console", "AWS Partner Central", "Co-sell Module"],
    related: [
      { name: "AWS Partner Funding — AWS", slug: "aws-partner-funding-—-aws" },
      { name: "Benefit Allocation — AWS", slug: "benefit-allocation-—-aws" },
      {
        name: "AWS Partner Funding Portal (APFP) — AWS",
        slug: "aws-partner-funding-portal-apfp-—-aws",
      },
    ],
  },
  {
    name: "Funding — Suger",
    tags: ["suger", "cosell", "funding"],
    group: "cloud-partner-funding",
    def: "The Suger Console tab that aggregates AWS Partner Central funding programs — MDF, POC Funding, and other ACE-linked incentives — into a single submit-and-track workflow. Suger connects directly to the AWS Partner Central API so sellers can create a funding request pre-filled from an existing co-sell opportunity or deal, without leaving the Suger Console or CRM. Requires an active AWS ACE integration migrated to Partner Central 3.0 before funding benefits can be enabled.",
    alias:
      "Related: APN Customer Engagements (ACE) — AWS, Marketing Development Funds (MDF) — AWS, Funding Wallet",
    source: "https://doc.suger.io/cosell/cosell-funding/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Submitting an AWS MDF or POC funding request pre-filled from an active co-sell opportunity without leaving the Suger Console",
      "Tracking the status of all AWS Partner Central funding requests in one place instead of per-program portals",
    ],
    context: ["Suger Console", "AWS Partner Central 3.0", "Co-sell Pipeline"],
    related: [
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
      },
      { name: "Funding Wallet", slug: "funding-wallet" },
    ],
  },
  {
    name: "Partner Central 3.0 (PC3.0) — AWS",
    tags: ["aws", "cosell"],
    def: "The latest version of AWS's partner portal. Required for access to the Funding Benefits API — ISVs must complete migration to PC3.0 before AWS Funding can be activated in Suger. Migration status is confirmed via the AWS Partner Manager.",
    alias: "",
    source: "https://aws.amazon.com/partners/partner-central/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Confirming PC3.0 migration status with your AWS PDM before activating Suger's AWS Funding integration",
      "Accessing the Funding Benefits API for programmatic funding requests after completing PC3.0 migration",
    ],
    context: ["AWS Partner Central", "Suger Console", "AWS Co-sell Setup"],
    related: [
      {
        name: "Funding Benefits API — AWS",
        slug: "funding-benefits-api-—-aws",
      },
      { name: "AWS Partner Funding — AWS", slug: "aws-partner-funding-—-aws" },
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
    ],
  },
  {
    name: "Funding Benefits API — AWS",
    tags: ["aws", "cosell"],
    def: "The AWS Partner Central API endpoint enabling programmatic submission and tracking of funding requests. Only available after a partner's migration to Partner Central 3.0 is confirmed.",
    alias: "",
    source: "https://aws.amazon.com/partners/funding/",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Programmatically submitting and tracking AWS funding requests through Suger's Co-sell integration after PC3.0 migration",
      "Automating funding request workflows for MDF and POC programs via the Partner Central API",
    ],
    context: ["AWS Partner Central", "Suger Console", "API Integration"],
    related: [
      {
        name: "Partner Central 3.0 (PC3.0) — AWS",
        slug: "partner-central-3.0-pc3.0-—-aws",
      },
      { name: "AWS Partner Funding — AWS", slug: "aws-partner-funding-—-aws" },
      { name: "AWS ACE Integration", slug: "aws-ace-integration" },
    ],
  },
  {
    name: "Marketing Development Funds (MDF) — AWS",
    tags: ["aws", "cosell", "funding"],
    group: "cloud-partner-funding",
    def: "AWS co-marketing funding provided to partners to offset demand generation costs — events, campaigns, digital ads, content creation, etc. Partners are reimbursed up to 50% of eligible expenses after submitting proof of performance (receipts). Can also be issued as AWS Promotional Credits. Requested via the AWS Partner Funding Portal. Requires an Amazon Payee Central account for cash disbursement. MDF can stack on top of Strategic Collaboration Agreement (SCA) — AWS benefits.",
    alias:
      "Related: AWS Partner Funding — AWS, Plan of Action (POA) — AWS, Partner Opportunity Acceleration (POA) — AWS, Partner Initiative Funding (PIF) — AWS",
    source: "https://aws.amazon.com/partners/funding/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Requesting reimbursement for demand generation activities (events, campaigns, ads) by submitting MDF claims with proof of performance through the AWS Partner Funding Portal",
      "Stacking MDF benefits on top of an SCA to fund co-marketing activities aligned with joint business goals",
    ],
    context: [
      "AWS Partner Funding Portal",
      "AWS Partner Central",
      "Co-sell Programs",
    ],
    related: [
      { name: "AWS Partner Funding — AWS", slug: "aws-partner-funding-—-aws" },
      { name: "Plan of Action (POA) — AWS", slug: "plan-of-action-poa-—-aws" },
      {
        name: "Strategic Collaboration Agreement (SCA) — AWS",
        slug: "strategic-collaboration-agreement-sca-—-aws",
      },
    ],
  },
  {
    name: "Migration Acceleration Program (MAP) — AWS",
    tags: ["aws", "cosell", "funding"],
    group: "cloud-partner-funding",
    def: "An AWS funding program providing credits and cash to partners helping customers migrate and modernize workloads on AWS. As of 2026, now covers generative AI and agentic features built during modernization — not just migrations. Funding scales with deal size.",
    alias:
      "Related: AWS Partner Funding — AWS, ISV Workload Migration Program (WMP) — AWS",
    source: "https://aws.amazon.com/migration-acceleration-program/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Partner Managers"],
    useCases: [
      "Applying for MAP funding to offset migration and modernization project costs for customers moving workloads to AWS",
      "Claiming MAP credits for generative AI or agentic feature builds included in a modernization engagement (post-2026 expansion)",
    ],
    context: [
      "AWS Partner Central",
      "AWS Partner Funding Portal",
      "Migration Projects",
    ],
    related: [
      { name: "AWS Partner Funding — AWS", slug: "aws-partner-funding-—-aws" },
      {
        name: "ISV Workload Migration Program (WMP) — AWS",
        slug: "isv-workload-migration-program-wmp-—-aws",
      },
      {
        name: "AWS Partner Funding Portal (APFP) — AWS",
        slug: "aws-partner-funding-portal-apfp-—-aws",
      },
    ],
  },
  {
    name: "AWS Partner Funding Portal (APFP) — AWS",
    tags: ["aws", "cosell"],
    def: "The AWS portal where partners submit, track, and manage fund requests across all funding programs (MDF, MAP, POC, PIF, etc.). Accessible via the Funding tab in AWS Partner Central.",
    alias: "",
    source: "https://aws.amazon.com/partners/funding/",
    difficulty: "beginner",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Submitting fund requests for MDF, MAP, POC, PIF, and Innovation Sandbox through a single portal",
      "Tracking the status of all funding requests across AWS programs without contacting a PDM for routine submissions",
    ],
    context: ["AWS Partner Central", "AWS Funding Programs"],
    related: [
      { name: "AWS Partner Funding — AWS", slug: "aws-partner-funding-—-aws" },
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
      },
      {
        name: "Partner Opportunity Acceleration (POA) — AWS",
        slug: "partner-opportunity-acceleration-poa-—-aws",
      },
    ],
  },
  {
    name: "Benefit Allocation — AWS",
    tags: ["aws", "cosell"],
    def: "An approved funding grant issued to a partner through the AWS Benefits API. Can take the form of cash disbursements, AWS credits, consumable wallets, access grants, or recognition. Each allocation has a lifecycle status tracked via the Partner Central API.",
    alias: "",
    source: "https://aws.amazon.com/partners/funding/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Tracking AWS-approved funding allocations — cash, credits, or access grants — received through the Partner Central API in Suger",
      "Monitoring the lifecycle status of benefit allocations submitted via Suger's funding integration",
    ],
    context: [
      "AWS Partner Central",
      "Suger Console",
      "Funding Benefits API — AWS",
    ],
    related: [
      {
        name: "Funding Benefits API — AWS",
        slug: "funding-benefits-api-—-aws",
      },
      { name: "AWS Partner Funding — AWS", slug: "aws-partner-funding-—-aws" },
      { name: "Funding Wallet", slug: "funding-wallet" },
    ],
  },
  {
    name: "Amazon Payee Central — AWS",
    tags: ["aws", "cosell"],
    def: "Amazon's payment registration system where partners must set up bank account and tax information before receiving any cash-based AWS funding benefits (MDF, MAP, etc.). Required prerequisite for cash disbursements.",
    alias: "",
    source: "https://aws.amazon.com/marketplace/management/paymentstatus/",
    difficulty: "beginner",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Setting up bank account and tax information in Amazon Payee Central before receiving cash AWS funding disbursements",
      "Completing Payee Central registration as a prerequisite for MDF, MAP, and POA cash reimbursements",
    ],
    context: ["AWS Partner Central", "AWS Funding Programs", "Payment Setup"],
    related: [
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
      },
      {
        name: "Partner Opportunity Acceleration (POA) — AWS",
        slug: "partner-opportunity-acceleration-poa-—-aws",
      },
      { name: "AWS Partner Funding — AWS", slug: "aws-partner-funding-—-aws" },
    ],
  },
  {
    name: "Proof of Concept (POC) Funding  — AWS",
    tags: ["aws", "cosell", "funding"],
    group: "cloud-partner-funding",
    def: "AWS funding that offsets up to 10% of the cost of building a proof of concept for a customer, capped at $25,000. Submitted through the AWS Partner Funding Portal. Requires Validated+ stage in any Partner Path. The ACE opportunity must be in Technical Validation stage or beyond.",
    alias:
      "Part of: Partner Opportunity Acceleration (POA) — AWS | Related: AWS Partner Funding — AWS, AWS Partner Funding Portal (APFP) — AWS",
    source: "https://aws.amazon.com/partners/funding/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Channel Partners"],
    useCases: [
      "Requesting POC funding to offset up to 10% of proof-of-concept build costs (max $25K) for an ACE opportunity at Technical Validation stage or beyond",
      "Applying for POC funding through the AWS Partner Funding Portal as part of the Partner Opportunity Acceleration program",
    ],
    context: [
      "AWS Partner Funding Portal",
      "ACE Opportunities",
      "AWS Partner Central",
    ],
    related: [
      { name: "AWS Partner Funding — AWS", slug: "aws-partner-funding-—-aws" },
      {
        name: "Partner Opportunity Acceleration (POA) — AWS",
        slug: "partner-opportunity-acceleration-poa-—-aws",
      },
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
    ],
  },
  {
    name: "Partner Initiative Funding (PIF) — AWS",
    tags: ["aws", "cosell", "funding"],
    group: "cloud-partner-funding",
    def: "An AWS funding type tied to specific partner agreement-based initiatives. The PIF template in the AWS Partner Funding Portal lets eligible partners self-access their initiative funds without requiring their AWS Partner Manager to be involved in every request — reducing friction and accelerating time-to-funding.",
    alias:
      "Related: AWS Partner Funding — AWS, Marketing Development Funds (MDF) — AWS, AWS Partner Funding Portal (APFP) — AWS",
    source: "https://aws.amazon.com/partners/funding/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Accessing PIF template-based funds without PDM involvement for eligible initiative-tied activities",
      "Submitting a PIF request via the APFP to unlock funding tied to a specific partner program agreement",
    ],
    context: [
      "AWS Partner Funding Portal",
      "AWS Partner Central",
      "Partner Agreements",
    ],
    related: [
      { name: "AWS Partner Funding — AWS", slug: "aws-partner-funding-—-aws" },
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
      },
      {
        name: "AWS Partner Funding Portal (APFP) — AWS",
        slug: "aws-partner-funding-portal-apfp-—-aws",
      },
    ],
  },
  {
    name: "ISV Workload Migration Program (WMP) — AWS",
    tags: ["aws", "cosell", "funding"],
    group: "cloud-partner-funding",
    def: "An AWS program providing promotional credits and go-to-market support to ISVs that help migrate customer workloads from on-premises to a SaaS model on AWS. As of 2026, WMP now offers direct credit disbursement to end customers for eligible migrations. Requires: Foundational Technical Review completion, Validated stage status, a SaaS solution on AWS, and a qualified migration use case.",
    alias:
      "Related: AWS Partner Funding — AWS, Migration Acceleration Program (MAP) — AWS, Foundational Technical Review (FTR) — AWS",
    source: "https://aws.amazon.com/partners/programs/isv-workload-migration/",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Applying for WMP credits and go-to-market support to migrate customer workloads from on-premises to SaaS on AWS",
      "Qualifying for post-2026 WMP direct credit disbursement to end customers by meeting FTR and Validated stage requirements",
    ],
    context: [
      "AWS Partner Central",
      "AWS Co-sell Programs",
      "SaaS Migration Projects",
    ],
    related: [
      { name: "AWS Partner Funding — AWS", slug: "aws-partner-funding-—-aws" },
      {
        name: "Migration Acceleration Program (MAP) — AWS",
        slug: "migration-acceleration-program-map-—-aws",
      },
      {
        name: "Foundational Technical Review (FTR) — AWS",
        slug: "foundational-technical-review-ftr-—-aws",
      },
    ],
  },
  {
    name: "AWS Promotional Credits — AWS",
    tags: ["aws", "cosell"],
    def: "Non-cash credits applied to an AWS account to offset usage costs. Awarded through programs like Innovation Sandbox, ISV WMP, and MAP. Not redeemable for cash. Subject to AWS Promotional Credit Terms.",
    alias: "",
    source: "https://aws.amazon.com/partners/funding/",
    difficulty: "beginner",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Receiving AWS Promotional Credits through programs like Innovation Sandbox, WMP, or MAP to offset AWS infrastructure costs during development or migration",
      "Distinguishing AWS Promotional Credits (non-cash, non-redeemable) from cash MDF reimbursements when planning funding strategy",
    ],
    context: ["AWS Partner Central", "AWS Funding Programs"],
    related: [
      {
        name: "Innovation Sandbox (APN) — AWS",
        slug: "innovation-sandbox-apn-—-aws",
      },
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
      },
      {
        name: "Marketplace Private Offer Promotion Program (MPOPP) — AWS",
        slug: "marketplace-private-offer-promotion-program-mpopp-—-aws",
      },
    ],
  },
  {
    name: "Innovation Sandbox (APN) — AWS",
    tags: ["aws", "cosell"],
    def: "An AWS program providing promotional credits to partners to offset AWS usage costs during solution development and testing. Accessible via the Funding tab in AWS Partner Central. For Global Startup Program partners, pre-loaded MDF Wallets are also available.",
    alias:
      "Related: AWS Partner Funding — AWS, Marketing Development Funds (MDF) — AWS",
    source: "https://aws.amazon.com/partners/funding/",
    difficulty: "beginner",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Applying for AWS Promotional Credits to offset development and testing costs during solution build-out via the APFP",
      "Accessing Innovation Sandbox MDF Wallets alongside standard credits for Global Startup Program partners",
    ],
    context: [
      "AWS Partner Funding Portal",
      "AWS Partner Central",
      "Solution Development",
    ],
    related: [
      { name: "AWS Partner Funding — AWS", slug: "aws-partner-funding-—-aws" },
      {
        name: "AWS Promotional Credits — AWS",
        slug: "aws-promotional-credits-—-aws",
      },
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
      },
    ],
  },
  {
    name: "Marketplace Commerce Analytics Service (MCAS) — AWS",
    tags: ["aws", "suger", "integrations"],
    def: "An AWS service giving sellers programmatic access to marketplace business data (usage, subscriptions, billing, customer info) via the AWS SDK. Data is delivered to an S3 bucket; delivery notifications use SNS (verify against current docs — EventBridge migration may affect this pipeline). Suger uses MCAS as part of the AWS integration setup.",
    alias: "",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/commerce-analytics-service.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Configuring MCAS as part of Suger's AWS integration setup to pull marketplace usage, subscription, and billing data into Suger",
      "Accessing AWS Marketplace business data programmatically via the SDK for custom analytics and reporting pipelines",
    ],
    context: ["AWS Marketplace", "Suger Console", "AWS Integration Setup"],
    related: [
      {
        name: "Marketplace Data Feed Service (MDFS) — AWS",
        slug: "marketplace-data-feed-service-mdfs-—-aws",
      },
      {
        name: "AWS Partner Network Integration (API)",
        slug: "aws-partner-network-integration-api",
      },
      { name: "Suger Analytics", slug: "suger-analytics" },
    ],
  },
  {
    name: "Marketplace Data Feed Service (MDFS) — AWS",
    tags: ["aws", "suger", "integrations"],
    def: "AWS's structured data pipeline that delivers product billing and customer information (company name, address, email domain) to an S3 bucket. Recommended alongside MCAS for complete revenue and buyer data sync in Suger.",
    alias: "",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/data-feed-service.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Enabling MDFS alongside MCAS to feed complete buyer data (company, address, email domain) into Suger's entitlement records",
      "Using MDFS for structured product billing data as part of Suger's AWS Marketplace integration",
    ],
    context: ["AWS Marketplace", "Suger Console", "AWS Integration Setup"],
    related: [
      {
        name: "Marketplace Commerce Analytics Service (MCAS) — AWS",
        slug: "marketplace-commerce-analytics-service-mcas-—-aws",
      },
      {
        name: "AWS Partner Network Integration (API)",
        slug: "aws-partner-network-integration-api",
      },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "Plan of Action (POA) — AWS",
    tags: ["aws", "cosell"],
    def: "A document AWS partners submit alongside MDF fund requests outlining the marketing activity, timeline, expected outcomes, and budget breakdown. Required for MDF claims.",
    alias:
      "Related: Marketing Development Funds (MDF) — AWS | See also: Partner Opportunity Acceleration (POA) — AWS",
    source: "https://aws.amazon.com/partners/funding/",
    difficulty: "beginner",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Drafting a Plan of Action document with marketing activity details, timeline, and budget to accompany an MDF fund request",
      "Distinguishing the POA (MDF documentation requirement) from Partner Opportunity Acceleration (POA), which share the same acronym",
    ],
    context: [
      "AWS Partner Funding Portal",
      "MDF Claims",
      "AWS Partner Central",
    ],
    related: [
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
      },
      {
        name: "Partner Opportunity Acceleration (POA) — AWS",
        slug: "partner-opportunity-acceleration-poa-—-aws",
      },
      {
        name: "AWS Partner Funding Portal (APFP) — AWS",
        slug: "aws-partner-funding-portal-apfp-—-aws",
      },
    ],
  },
  {
    name: "Partner Opportunity Acceleration (POA) — AWS",
    tags: ["aws", "cosell", "funding"],
    group: "cloud-partner-funding",
    def: "AWS funding program providing cash reimbursement or promotional credits to accelerate proof-of-concept and migration projects. Available to APN Select tier and above via the AWS Partner Funding Portal. Partners must apply POA benefits to reduce customer costs — benefits may not be retained as additional partner margin. Requires an Amazon Payee Central account.",
    alias:
      "Related: Proof of Concept (POC) Funding — AWS, Migration Acceleration Program (MAP) — AWS, AWS Partner Funding — AWS, Plan of Action (POA) — AWS, Amazon Payee Central — AWS",
    source: "https://aws.amazon.com/partners/funding/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Partner Managers"],
    useCases: [
      "Applying for POA cash reimbursement or credits to offset POC or migration project costs at APN Select tier or above",
      "Ensuring POA funding benefits are applied to reduce customer costs — not retained as partner margin — when submitting a POA claim",
    ],
    context: [
      "AWS Partner Central",
      "AWS Partner Funding Portal",
      "Co-sell Projects",
    ],
    related: [
      {
        name: "Proof of Concept (POC) Funding  — AWS",
        slug: "proof-of-concept-poc-funding-—-aws",
      },
      {
        name: "Migration Acceleration Program (MAP) — AWS",
        slug: "migration-acceleration-program-map-—-aws",
      },
      {
        name: "Amazon Payee Central — AWS",
        slug: "amazon-payee-central-—-aws",
      },
    ],
  },
  {
    name: "Funding Dashboard — AWS",
    tags: ["aws", "cosell", "suger"],
    def: "A native AWS Partner Central view providing real-time visibility into fund allocation, utilization, and performance metrics across all funding programs. Also mirrored in Suger's Funding tab.",
    alias: "",
    source: "https://aws.amazon.com/partners/funding/",
    difficulty: "beginner",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Monitoring fund allocation, utilization, and performance metrics across all AWS funding programs from Partner Central or Suger",
      "Reviewing funding request history and approval status in real time from the Suger Co-sell module's Funding tab",
    ],
    context: ["AWS Partner Central", "Suger Console", "Co-sell Module"],
    related: [
      { name: "AWS Partner Funding — AWS", slug: "aws-partner-funding-—-aws" },
      { name: "Funding Wallet", slug: "funding-wallet" },
      {
        name: "AWS Partner Funding Portal (APFP) — AWS",
        slug: "aws-partner-funding-portal-apfp-—-aws",
      },
    ],
  },
  {
    name: "Training & Certification Funding — AWS",
    tags: ["aws", "cosell"],
    def: "An AWS funding benefit offering discounted training to help partner teams prepare for AWS certification exams. Accessible via the Funding tab in AWS Partner Central.",
    alias: "",
    source: "https://aws.amazon.com/partners/funding/",
    difficulty: "beginner",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Accessing discounted AWS certification training for partner teams via the Funding tab in AWS Partner Central",
      "Budgeting for team upskilling using AWS Training & Certification Funding as part of overall partner program benefits",
    ],
    context: ["AWS Partner Central", "Partner Programs"],
    related: [
      { name: "AWS Partner Funding — AWS", slug: "aws-partner-funding-—-aws" },
      {
        name: "AWS Partner Network (APN) — AWS",
        slug: "aws-partner-network-apn-—-aws",
      },
      {
        name: "Foundational Technical Review (FTR) — AWS",
        slug: "foundational-technical-review-ftr-—-aws",
      },
    ],
  },
  {
    name: "Strategic Collaboration Agreement (SCA) — AWS",
    tags: ["aws", "cosell"],
    def: "A formal, multi-year agreement between AWS and a select partner — typically Premier Tier — committing both sides to joint business goals across Build-Market-Sell-Grow motions: co-sell targets, go-to-market investment, training, and funding. Anchored in outcome-driven business plans with defined metrics and milestones. MDF can stack on top of SCA benefits.",
    alias: "",
    source: "https://aws.amazon.com/partners/",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "AWS Sales", "Partner Managers"],
    useCases: [
      "Negotiating an SCA with AWS to formalize multi-year co-sell targets, joint GTM investment, and access to stacked MDF benefits",
      "Leveraging SCA commitments and defined milestones to align AWS field engagement and funding prioritization",
    ],
    context: [
      "AWS Partner Central",
      "Premier Partner Programs",
      "Co-sell Strategy",
    ],
    related: [
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
      },
      {
        name: "Partner Development Manager (PDM) — AWS",
        slug: "partner-development-manager-pdm-—-aws",
      },
      { name: "ISV Accelerate — AWS", slug: "isv-accelerate-—-aws" },
    ],
  },
  {
    name: "SaaS Co-sell Benefit (SCB) — AWS",
    tags: ["aws", "cosell"],
    def: "An AWS program where AWS sales reps earn quota retirement credit for co-selling SaaS/PaaS solutions transacted as private offers in AWS Marketplace. Incentivizes AWS sellers to prioritize ISV partners. Available to ISV Accelerate partners.",
    alias: "",
    source: "https://aws.amazon.com/partners/programs/isv-accelerate/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "AWS Sales"],
    useCases: [
      "Understanding why AWS sales reps are motivated to co-sell your product — SCB grants them quota retirement credit for co-sold SaaS private offers",
      "Ensuring your product is ISV Accelerate eligible to unlock SCB and make it financially compelling for AWS sellers to prioritize your deals",
    ],
    context: ["AWS Marketplace", "ISV Accelerate Program", "Co-sell Motions"],
    related: [
      { name: "ISV Accelerate — AWS", slug: "isv-accelerate-—-aws" },
      { name: "Quota Retirement — AWS", slug: "quota-retirement-—-aws" },
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
    ],
  },
  {
    name: "Quota Retirement — AWS",
    tags: ["aws", "cosell"],
    def: "When an AWS seller earns credit toward their sales quota for a deal transacted through AWS Marketplace. The SCB program grants this to AWS reps on co-sold SaaS private offers — the core mechanic that motivates AWS sellers to co-sell your product.",
    alias: "",
    source: "https://aws.amazon.com/partners/programs/isv-accelerate/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "AWS Sales"],
    useCases: [
      "Explaining to AWS sellers how transacting through marketplace private offers earns them quota retirement via the SCB program",
      "Using quota retirement as a selling point when positioning ISV Accelerate participation to AWS field teams",
    ],
    context: [
      "ISV Accelerate Program",
      "AWS Field Sales",
      "Co-sell Conversations",
    ],
    related: [
      {
        name: "SaaS Co-sell Benefit (SCB) — AWS",
        slug: "saas-co-sell-benefit-scb-—-aws",
      },
      { name: "ISV Accelerate — AWS", slug: "isv-accelerate-—-aws" },
      { name: "Private Offer", slug: "private-offer" },
    ],
  },
  {
    name: "Partner Development Manager (PDM) — AWS",
    tags: ["aws", "cosell"],
    def: "The AWS-assigned contact responsible for managing a partner's relationship with AWS. Helps with APN program navigation, SCA setup, co-sell strategy, and funding access.",
    alias: "",
    source: "https://aws.amazon.com/partners/",
    difficulty: "beginner",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Working with your PDM to navigate APN program tiers, confirm PC3.0 migration, and unlock ISV Accelerate benefits",
      "Engaging your PDM to initiate SCA negotiations, co-sell strategy sessions, and priority funding conversations",
    ],
    context: ["AWS Partner Central", "APN Relationship Management"],
    related: [
      {
        name: "AWS Partner Network (APN) — AWS",
        slug: "aws-partner-network-apn-—-aws",
      },
      { name: "ISV Accelerate — AWS", slug: "isv-accelerate-—-aws" },
      {
        name: "Strategic Collaboration Agreement (SCA) — AWS",
        slug: "strategic-collaboration-agreement-sca-—-aws",
      },
    ],
  },
  {
    name: "Private Pricing Agreement (PPA) — AWS",
    tags: ["aws", "cosell"],
    def: "AWS's committed spend program for enterprises — essentially the same as EDP. A negotiated agreement where a customer commits to a minimum AWS spend over 1–3 years in exchange for discounts. Marketplace transactable purchases count toward PPA drawdown. Can be AWS-led or Partner-led.",
    alias: "Also known as: EDP (Enterprise Discount Program)",
    source: "https://aws.amazon.com/pricing/enterprise/",
    difficulty: "advanced",
    category: "billing",
    whoFor: ["Enterprise Buyers", "ISVs / Sellers", "AWS Sales"],
    useCases: [
      "Positioning transactable marketplace listings to enterprise buyers under a PPA to enable committed spend drawdown",
      "Understanding PPA as the enterprise committed spend mechanism that powers EDP drawdown for AWS Marketplace purchases",
    ],
    context: [
      "AWS Enterprise Sales",
      "AWS Marketplace",
      "Committed Spend Motions",
    ],
    related: [
      {
        name: "Enterprise Discount Program (EDP) — AWS",
        slug: "enterprise-discount-program-edp-—-aws",
      },
      { name: "Transactable Offer", slug: "transactable-offer" },
      { name: "Private Offer", slug: "private-offer" },
    ],
  },
  {
    name: "Reseller Private Offer Plan (RPOP) — GCP",
    tags: ["gcp", "cosell", "offers"],
    def: "GCP Marketplace's channel reseller mechanism — the equivalent of AWS's CPPO. An ISV creates a plan (single-use or multi-use) with a wholesale discount that an authorized reseller uses to create private offers for end customers. Suger manages the full RPOP lifecycle from the console and Salesforce.",
    alias:
      "AWS equivalent: Resale Authorization — AWS | Related: Marketplace Channel Private Offer (MCPO) — GCP",
    source:
      "https://docs.cloud.google.com/marketplace/docs/partners/resellers/resell",
    difficulty: "advanced",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Distributors"],
    useCases: [
      "Creating a single-use or multi-use RPOP in Suger to authorize a GCP reseller to create private offers with an ISV-defined wholesale discount",
      "Managing the full RPOP lifecycle — creation, reseller acceptance, offer generation, and entitlement tracking — from Suger or Salesforce",
    ],
    context: ["GCP Marketplace", "Suger Console", "Channel Programs"],
    related: [
      {
        name: "Marketplace Channel Private Offer (MCPO) — GCP",
        slug: "marketplace-channel-private-offer-mcpo-—-gcp",
      },
      {
        name: "Resale Authorization — AWS",
        slug: "resale-authorization-—-aws",
      },
      {
        name: "Partner Sales Console — GCP",
        slug: "partner-sales-console-—-gcp",
      },
    ],
  },
  {
    name: "Reseller Contract (RCMP) — AWS",
    tags: ["aws", "cosell"],
    def: "AWS's standard contract template governing the relationship between an ISV and a channel partner in a CPPO transaction. ISVs can attach RCMP or a custom reseller contract to a resale authorization.",
    alias:
      "Related: Channel Partner Private Offer (CPPO) — AWS, Resale Authorization — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/channel-partner-offers.html",
    difficulty: "intermediate",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Channel Partners"],
    useCases: [
      "Attaching the RCMP standard reseller contract to a Resale Authorization to define the ISV–partner relationship in a CPPO transaction",
      "Using RCMP instead of a custom contract to reduce legal overhead for channel partner onboarding on AWS Marketplace",
    ],
    context: ["AWS Marketplace", "Channel Programs", "Resale Authorization"],
    related: [
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
      },
      {
        name: "Resale Authorization — AWS",
        slug: "resale-authorization-—-aws",
      },
      { name: "Seller of Record", slug: "seller-of-record" },
    ],
  },
  {
    name: "Partner Sales Console — GCP",
    tags: ["gcp", "cosell"],
    def: "The GCP portal used by authorized resellers to view RPOP private offer plans from ISVs, create private offers for end customers, and manage orders. The reseller-side equivalent of the GCP Producer Portal.",
    alias:
      "Related: Reseller Private Offer Plan (RPOP) — GCP, Marketplace Channel Private Offer (MCPO) — GCP, Producer Portal — GCP",
    source:
      "https://docs.cloud.google.com/marketplace/docs/partners/resellers/resell",
    difficulty: "intermediate",
    category: "advanced",
    whoFor: ["Channel Partners", "Distributors"],
    useCases: [
      "Accessing RPOP plans from ISVs in the Partner Sales Console to create private offers for end customers on GCP Marketplace",
      "Managing reseller orders and tracking offer acceptance from GCP's reseller-facing portal",
    ],
    context: ["GCP Marketplace", "Channel Programs", "Reseller Workflows"],
    related: [
      {
        name: "Reseller Private Offer Plan (RPOP) — GCP",
        slug: "reseller-private-offer-plan-rpop-—-gcp",
      },
      {
        name: "Marketplace Channel Private Offer (MCPO) — GCP",
        slug: "marketplace-channel-private-offer-mcpo-—-gcp",
      },
      { name: "Producer Portal — GCP", slug: "producer-portal-—-gcp" },
    ],
  },
  {
    name: "Selling Authorization — AWS",
    tags: ["aws", "cosell", "offers"],
    def: "AWS's term in the AMMP UI for what the API calls a Resale Authorization. An ISV creates this to authorize a specific channel partner to resell a product via CPPO. Can be single-use or reusable. Tracks statuses: Authorized, Authorized (reusable), Authorized (consumed), Expired, Deactivated.",
    alias:
      "Also called: Resale Authorization — AWS, Opportunity (in AWS API docs)",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/channel-partner-offers.html",
    difficulty: "intermediate",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Channel Partners"],
    useCases: [
      "Creating a Selling Authorization (Resale Authorization) in AMMP to authorize a channel partner to create a CPPO for a specific buyer",
      "Tracking the status of a Selling Authorization — from Authorized through Consumed or Expired — across multiple partner transactions",
    ],
    context: [
      "AWS Marketplace",
      "AMMP (AWS Marketplace Management Portal)",
      "Channel Programs",
    ],
    related: [
      {
        name: "Resale Authorization — AWS",
        slug: "resale-authorization-—-aws",
      },
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
      },
      {
        name: "AWS Marketplace Management Portal (AMMP) — AWS",
        slug: "aws-marketplace-management-portal-ammp-—-aws",
      },
    ],
  },
  {
    name: "Marketplace Channel Private Offer (MCPO) — GCP",
    tags: ["gcp", "cosell", "offers", "channel"],
    def: "GCP Marketplace's channel reseller program — the GCP equivalent of AWS's CPPO. An ISV creates a Reseller Private Offer Plan (RPOP) with a wholesale discount; the reseller uses it to create a private offer with markup for the end customer. MCPO purchases count 100% toward the buyer's CUD committed spend, capped at 25% of total commitment.",
    alias:
      "AWS equivalent: Channel Partner Private Offer (CPPO) — AWS | Azure equivalent: Multiparty Private Offer (MPO) — Azure",
    source:
      "https://docs.cloud.google.com/marketplace/docs/partners/resellers/resell",
    difficulty: "advanced",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Enterprise Buyers"],
    useCases: [
      "Transacting through a GCP reseller using an MCPO to allow committed spend (CUD) drawdown up to 25% of total customer commitment",
      "Enabling a reseller to mark up an ISV's wholesale price and create a customized private offer for an end customer on GCP Marketplace",
    ],
    context: ["GCP Marketplace", "Channel Programs", "Committed Spend (CUD)"],
    related: [
      {
        name: "Reseller Private Offer Plan (RPOP) — GCP",
        slug: "reseller-private-offer-plan-rpop-—-gcp",
      },
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
      },
      {
        name: "Multiparty Private Offer (MPO) — Azure",
        slug: "multiparty-private-offer-mpo-—-azure",
      },
    ],
  },
  {
    name: "Express Private Offer — AWS",
    tags: ["aws", "offers"],
    group: "private-offer",
    def: "An AI-powered AWS Marketplace feature (launched Nov 2025) where sellers pre-configure a rate card and AWS automatically generates and delivers personalized private offers to qualified buyers in minutes — without manual negotiation. Available for SaaS Contract and SaaS Contract with Consumption products.",
    alias:
      "Related: Private Offer — AWS, Agreement-Based Offer (ABO) — AWS, Marketplace Private Offer Promotion Program (MPOPP) — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/express-private-offers.html",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Configuring a rate card for Express Private Offers so AWS can automatically generate and deliver personalized offers to qualified buyers without manual negotiation",
      "Accelerating deal velocity by enabling buyers to receive custom-priced private offers in minutes for SaaS Contract products",
    ],
    context: ["AWS Marketplace", "Private Offer Flows", "AI-Powered Features"],
    related: [
      { name: "Private Offer — AWS", slug: "private-offer-—-aws" },
      {
        name: "Agreement-Based Offer (ABO) — AWS",
        slug: "agreement-based-offer-abo-—-aws",
      },
      {
        name: "Marketplace Private Offer Promotion Program (MPOPP) — AWS",
        slug: "marketplace-private-offer-promotion-program-mpopp-—-aws",
      },
    ],
  },
  {
    name: "Marketplace Private Offer Promotion Program (MPOPP) — AWS",
    tags: ["aws", "cosell", "funding"],
    group: "cloud-partner-funding",
    def: "An AWS program (launched Aug 2025) that issues AWS Promotional Credits to customers as an incentive for accepting private offers from participating ISVs. Credits are based on Total Contract Value (TCV). Self-service requests submitted via the AWS Partner Funding Portal with next-business-day credit delivery.",
    alias:
      "Related: AWS Promotional Credits — AWS, Marketing Development Funds (MDF) — AWS, Express Private Offer — AWS, AWS Partner Funding Portal (APFP) — AWS",
    source: "https://aws.amazon.com/partners/funding/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Enrolling in MPOPP to offer buyers AWS Promotional Credits as an incentive when accepting a private offer — accelerating deal close",
      "Submitting a self-service MPOPP request via the AWS Partner Funding Portal to trigger next-business-day credit delivery to the buyer",
    ],
    context: [
      "AWS Partner Funding Portal",
      "Private Offer Flows",
      "Co-sell Incentives",
    ],
    related: [
      {
        name: "AWS Promotional Credits — AWS",
        slug: "aws-promotional-credits-—-aws",
      },
      {
        name: "Express Private Offer — AWS",
        slug: "express-private-offer-—-aws",
      },
      {
        name: "AWS Partner Funding Portal (APFP) — AWS",
        slug: "aws-partner-funding-portal-apfp-—-aws",
      },
    ],
  },
  {
    name: "Multi-Product Solution — AWS",
    tags: ["aws", "offers"],
    def: "An AWS Marketplace framework that lets sellers combine multiple products into a unified offering through two complementary capabilities: Solution Listings (discovery pages showing how products work together) and Offer Sets (groups of private offers processed as a single buyer transaction). Sellers can use either or both. Simplifies both product discovery and procurement for buyers purchasing multi-component solutions.",
    alias:
      "Related: Offer Set — AWS | Related: Solution Listing — AWS | Related: Private Offer | Related: Seller of Record",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/multi-product-solutions.html",
    difficulty: "advanced",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Enterprise Buyers"],
    useCases: [
      "Packaging a platform product alongside complementary add-ons into a single discoverable offering on AWS Marketplace",
      "Simplifying enterprise procurement by combining multiple private offers into one buyer transaction through an Offer Set",
      "Participating as a component provider in a multi-vendor solution where a channel partner acts as seller of record",
    ],
    context: [
      "AWS Marketplace",
      "AWS Marketplace Management Portal",
      "Multi-Product Solutions",
    ],
    related: [
      { name: "Offer Set — AWS", slug: "offer-set-—-aws" },
      { name: "Solution Listing — AWS", slug: "solution-listing-—-aws" },
      { name: "Private Offer", slug: "private-offer" },
      { name: "Seller of Record", slug: "seller-of-record" },
    ],
  },
  {
    name: "Agent Mode — AWS",
    tags: ["aws"],
    def: "An AI-powered conversational buyer discovery experience on AWS Marketplace (launched Nov 2025). Buyers describe their needs in natural language, ask follow-up questions, upload requirements documents, and compare products side-by-side. Can generate downloadable procurement proposals. Also accessible via MCP-compatible AI applications.",
    alias: "Related: Listing, AWS Marketplace — AWS",
    source: "https://aws.amazon.com/marketplace/",
    difficulty: "beginner",
    category: "fundamentals",
    whoFor: ["Enterprise Buyers", "ISVs / Sellers"],
    useCases: [
      "Helping buyers discover and compare AWS Marketplace products using natural language queries, document uploads, and AI-generated procurement proposals",
      "Optimizing listing content and metadata to surface well in Agent Mode's AI-powered recommendations to enterprise buyers",
    ],
    context: ["AWS Marketplace", "Buyer Discovery", "AI-Powered Features"],
    related: [
      { name: "Listing", slug: "listing" },
      { name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" },
      { name: "Private Offer", slug: "private-offer" },
    ],
  },
  {
    name: "Resale-Enabled Offer — Azure",
    tags: ["azure", "cosell", "offers"],
    def: "A Microsoft Marketplace channel motion where ISVs designate authorized channel partners to resell their solutions on a geographic basis — without creating a separate private offer per customer deal. Available for transactable SaaS and Azure VM with software reservation pricing offers; available in 30+ markets as of May 2026. Resale-enabled offers that are also Azure benefit-eligible count toward the customer's MACC.",
    alias:
      "Related: Multiparty Private Offer (MPO) — Azure, Azure Consumption Commitment (MACC) — Azure, Cloud Solution Provider (CSP) — Azure, Microsoft Marketplace — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/resale-enabled-offers-overview",
    difficulty: "advanced",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Enterprise Buyers"],
    useCases: [
      "Designating authorized resellers by geography on a Resale-Enabled Offer to enable MACC drawdown for channel-transacted purchases",
      "Expanding Azure channel motion alongside MPO — Resale-Enabled Offers provide geographic-based partner authorization without a buyer-specific private offer",
    ],
    context: [
      "Microsoft Marketplace",
      "Azure Channel Programs",
      "Partner Center — Azure",
    ],
    related: [
      {
        name: "Multiparty Private Offer (MPO) — Azure",
        slug: "multiparty-private-offer-mpo-—-azure",
      },
      {
        name: "Azure Consumption Commitment (MACC) — Azure",
        slug: "azure-consumption-commitment-macc-—-azure",
      },
      {
        name: "Cloud Solution Provider (CSP) — Azure",
        slug: "cloud-solution-provider-csp-—-azure",
      },
    ],
  },
  {
    name: "AWS ACE Integration",
    tags: ["aws", "cosell", "suger", "integrations"],
    def: "Suger's connection to AWS Partner Central via the Partner Central API. Enables bi-directional sync of co-sell referrals (ACE opportunities), funding requests, and pipeline data between Suger and AWS Partner Central. Requires APN membership and Partner Central 3.0 migration for full functionality including funding.",
    alias:
      "Related: APN Customer Engagements (ACE) — AWS, Funding Benefits API — AWS, Partner Central 3.0 (PC3.0) — AWS",
    source: "https://doc.suger.io/integrations/aws-partner-network-api/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users", "Partner Managers"],
    useCases: [
      "Setting up Suger's AWS ACE Integration to bi-directionally sync co-sell referrals and funding requests with AWS Partner Central",
      "Using the ACE integration to manage ACE opportunities, submit funding requests, and track pipeline data without switching to AWS Partner Central",
    ],
    context: ["Suger Console", "AWS Partner Central", "Co-sell Workflows"],
    related: [
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
      {
        name: "Funding Benefits API — AWS",
        slug: "funding-benefits-api-—-aws",
      },
      {
        name: "Partner Central 3.0 (PC3.0) — AWS",
        slug: "partner-central-3.0-pc3.0-—-aws",
      },
    ],
  },
  {
    name: "AWS Partner Network Integration (S3)",
    tags: ["aws", "suger", "integrations"],
    def: "Suger's legacy integration with AWS Partner Network using S3-based data delivery for MCAS and MDFS reports. Being deprecated in favor of the API-based AWS Partner Network integration. ISVs still on S3 should migrate to the API integration.",
    alias:
      "Related: Marketplace Commerce Analytics Service (MCAS) — AWS, Marketplace Data Feed Service (MDFS) — AWS, AWS Partner Network Integration (API)",
    source: "https://doc.suger.io/integrations/aws-partner-network-s3/",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Migrating from the legacy S3-based AWS Partner Network integration to the API-based integration for improved reliability",
      "Understanding which MCAS and MDFS data flows are affected when transitioning from S3 to API-based integration in Suger",
    ],
    context: ["Suger Console", "AWS Integration Setup", "Legacy Integrations"],
    related: [
      {
        name: "AWS Partner Network Integration (API)",
        slug: "aws-partner-network-integration-api",
      },
      {
        name: "Marketplace Commerce Analytics Service (MCAS) — AWS",
        slug: "marketplace-commerce-analytics-service-mcas-—-aws",
      },
      {
        name: "Marketplace Data Feed Service (MDFS) — AWS",
        slug: "marketplace-data-feed-service-mdfs-—-aws",
      },
    ],
  },
  {
    name: "AWS Partner Network Integration (API)",
    tags: ["aws", "suger", "integrations"],
    def: "Suger's current API-based integration with AWS Partner Network. Enables programmatic access to co-sell (ACE), funding, MCAS/MDFS data, and marketplace reporting. Replaces the legacy S3-based integration.",
    alias:
      "Related: APN Customer Engagements (ACE) — AWS, Marketplace Commerce Analytics Service (MCAS) — AWS, Marketplace Data Feed Service (MDFS) — AWS, AWS Partner Funding Portal (APFP)",
    source: "https://doc.suger.io/integrations/aws-partner-network-api/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Configuring the API-based AWS integration in Suger to replace the legacy S3 integration and unlock co-sell, funding, and reporting features",
      "Using the AWS Partner Network API integration to pull MCAS/MDFS data and sync ACE opportunities into Suger automatically",
    ],
    context: ["Suger Console", "AWS Integration Setup", "AWS Partner Central"],
    related: [
      { name: "AWS ACE Integration", slug: "aws-ace-integration" },
      {
        name: "Marketplace Commerce Analytics Service (MCAS) — AWS",
        slug: "marketplace-commerce-analytics-service-mcas-—-aws",
      },
      {
        name: "AWS Partner Network Integration (S3)",
        slug: "aws-partner-network-integration-s3",
      },
    ],
  },
  {
    name: "Lago Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Lago, an open-source usage-based billing engine. Automates the flow of metered usage data from Lago directly to all connected cloud marketplaces via Suger's unified metering API — eliminating manual reporting.",
    alias: "Related: Usage Metering, Metronome Integration, Orb Integration",
    source: "https://doc.suger.io/integrations/lago/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Connecting Lago to Suger to automatically forward metered usage data to AWS, Azure, and GCP Marketplace without manual reporting",
      "Replacing a custom metering pipeline by routing Lago consumption events through Suger's unified marketplace metering API",
    ],
    context: ["Suger Console", "Lago", "Usage Metering"],
    related: [
      { name: "Usage Metering", slug: "usage-metering" },
      { name: "Metronome Integration", slug: "metronome-integration" },
      { name: "Orb Integration", slug: "orb-integration" },
    ],
  },
  {
    name: "Metronome Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Metronome, a usage-based billing platform. Automatically syncs consumption data from Metronome to cloud marketplace metering endpoints (AWS, Azure, GCP) through Suger.",
    alias: "Related: Usage Metering, Lago Integration, Orb Integration",
    source: "https://doc.suger.io/integrations/metronome/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Connecting Metronome to Suger to automatically sync consumption data to cloud marketplace metering endpoints",
      "Eliminating manual marketplace usage reporting by piping Metronome billing events through Suger",
    ],
    context: ["Suger Console", "Metronome", "Usage Metering"],
    related: [
      { name: "Usage Metering", slug: "usage-metering" },
      { name: "Lago Integration", slug: "lago-integration" },
      { name: "Orb Integration", slug: "orb-integration" },
    ],
  },
  {
    name: "Orb Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Orb, a billing infrastructure platform. Pipes metered usage from Orb to all cloud marketplaces automatically via Suger, supporting complex pricing models including tiered, volume, and matrix pricing.",
    alias: "Related: Usage Metering, Metronome Integration, Lago Integration",
    source: "https://doc.suger.io/integrations/orb/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Connecting Orb to Suger to automatically forward usage events with complex pricing models (tiered, volume, matrix) to all marketplace metering APIs",
      "Replacing manual usage reporting by routing Orb billing data through Suger's unified metering layer",
    ],
    context: ["Suger Console", "Orb", "Usage Metering"],
    related: [
      { name: "Usage Metering", slug: "usage-metering" },
      { name: "Metronome Integration", slug: "metronome-integration" },
      { name: "Lago Integration", slug: "lago-integration" },
    ],
  },
  {
    name: "Salesforce Integration",
    tags: ["suger", "cosell", "integrations"],
    def: "Suger's bi-directional connection to Salesforce CRM. Syncs marketplace entitlements, private offer status, co-sell referrals, and metering data into Salesforce opportunities and accounts. Also available as the Suger Salesforce App for a deeper embedded experience.",
    alias: "Related: Salesforce App, CRM Integration, HubSpot Integration",
    source: "https://doc.suger.io/integrations/salesforce/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users", "Partner Managers"],
    useCases: [
      "Syncing Suger marketplace entitlements, private offer status, and co-sell referrals into Salesforce opportunities for unified CRM visibility",
      "Using Salesforce Integration as the foundation for the Suger Salesforce App's deeper embedded marketplace experience",
    ],
    context: ["Salesforce", "Suger Console", "CRM Workflows"],
    related: [
      { name: "Salesforce App", slug: "salesforce-app" },
      { name: "CRM Integration", slug: "crm-integration" },
      { name: "HubSpot Integration", slug: "hubspot-integration" },
    ],
  },
  {
    name: "HubSpot Integration",
    tags: ["suger", "cosell", "integrations"],
    def: "Suger's bi-directional connection to HubSpot CRM. Syncs marketplace deals, entitlement events, and co-sell referral status into HubSpot. Also available as the Suger HubSpot App for a deeper embedded experience.",
    alias: "Related: HubSpot App, CRM Integration, Salesforce Integration",
    source: "https://doc.suger.io/integrations/hubspot/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users", "Partner Managers"],
    useCases: [
      "Syncing marketplace entitlement events and co-sell referral status from Suger into HubSpot deals for real-time CRM visibility",
      "Using HubSpot Integration as the foundation for the Suger HubSpot App's embedded marketplace experience inside deals",
    ],
    context: ["HubSpot", "Suger Console", "CRM Workflows"],
    related: [
      { name: "HubSpot App", slug: "hubspot-app" },
      { name: "CRM Integration", slug: "crm-integration" },
      { name: "Salesforce Integration", slug: "salesforce-integration" },
    ],
  },
  {
    name: "Slack Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Slack that delivers real-time marketplace event notifications — new entitlements, cancellations, usage alerts, and co-sell updates — to designated Slack channels in your workspace.",
    alias: "Related: Webhook, Email Notification, Microsoft Teams Integration",
    source: "https://doc.suger.io/integrations/slack/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Routing real-time marketplace event notifications — new entitlements, cancellations, usage alerts — to specific Slack channels",
      "Keeping sales and ops teams informed of marketplace activity without polling the Suger console",
    ],
    context: ["Suger Console", "Slack Workspace", "Notification Settings"],
    related: [
      {
        name: "Microsoft Teams Integration",
        slug: "microsoft-teams-integration",
      },
      { name: "Email Notification", slug: "email-notification" },
      { name: "Webhook", slug: "webhook" },
    ],
  },
  {
    name: "Microsoft Teams Integration",
    tags: ["suger", "azure", "integrations"],
    def: "Suger's connection to Microsoft Teams that pushes real-time marketplace event notifications and alerts to designated Teams channels. Mirrors Slack Integration functionality for Microsoft-centric organizations.",
    alias: "Related: Slack Integration, Webhook, Email Notification",
    source: "https://doc.suger.io/integrations/microsoft-teams/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Routing marketplace event notifications to Microsoft Teams channels for organizations standardized on Microsoft 365",
      "Replacing or complementing Slack Integration with Microsoft Teams notifications for real-time marketplace event alerting",
    ],
    context: ["Suger Console", "Microsoft Teams", "Notification Settings"],
    related: [
      { name: "Slack Integration", slug: "slack-integration" },
      { name: "Email Notification", slug: "email-notification" },
      { name: "Webhook", slug: "webhook" },
    ],
  },
  {
    name: "Gmail Integration",
    tags: ["suger", "integrations"],
    def: "Suger's organization-level connection to Gmail that allows Suger to send, receive, and manage emails on behalf of the organization — used for automated communications triggered by marketplace events and workflows.",
    alias:
      "Related: User Gmail Integration, Microsoft Outlook Integration, Workflow",
    source: "https://doc.suger.io/integrations/google-mail/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Connecting an organization Gmail account to Suger to send automated email communications triggered by marketplace events",
      "Using org-level Gmail Integration to handle buyer onboarding or entitlement notification emails through Suger workflows",
    ],
    context: ["Suger Console", "Gmail", "Workflow Automation"],
    related: [
      { name: "User Gmail Integration", slug: "user-gmail-integration" },
      {
        name: "Microsoft Outlook Integration",
        slug: "microsoft-outlook-integration",
      },
      { name: "Workflow", slug: "workflow" },
    ],
  },
  {
    name: "User Gmail Integration",
    tags: ["suger", "integrations"],
    def: "Suger's user-level Gmail connection (distinct from the org-level Gmail Integration). Allows individual Suger users to connect their personal Gmail account for email-based actions within Suger workflows.",
    alias: "Related: Gmail Integration, User Microsoft Outlook Integration",
    source: "https://doc.suger.io/integrations/google-mail/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Connecting a personal Gmail account to Suger to enable individual user email actions inside Suger workflows",
      "Distinguishing user-level Gmail access from the org-level Gmail Integration when configuring email automation in Suger",
    ],
    context: ["Suger Console", "Gmail", "User-Level Settings"],
    related: [
      { name: "Gmail Integration", slug: "gmail-integration" },
      {
        name: "User Microsoft Outlook Integration",
        slug: "user-microsoft-outlook-integration",
      },
      { name: "Workflow", slug: "workflow" },
    ],
  },
  {
    name: "Google Drive Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Google Drive that enables creating, deleting, updating, and sharing files and folders programmatically — used for storing marketplace reports, contracts, and exported data within Suger workflows.",
    alias: "Related: Table Export, Google Cloud Storage Integration",
    source: "https://doc.suger.io/integrations/google-drive/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Automatically storing marketplace reports, contracts, or exported data in Google Drive folders via Suger workflows",
      "Programmatically managing Google Drive files — creating, updating, sharing — as part of marketplace event automation",
    ],
    context: ["Suger Console", "Google Drive", "Workflow Automation"],
    related: [
      { name: "Table Export", slug: "table-export" },
      {
        name: "Google Cloud Storage Integration",
        slug: "google-cloud-storage-integration",
      },
      { name: "Workflow", slug: "workflow" },
    ],
  },
  {
    name: "Google Cloud Storage Integration",
    tags: ["suger", "gcp", "integrations"],
    def: "Suger's connection to GCP Cloud Storage for reading and writing files to GCS buckets as part of workflow automation. The integration supports file operations triggered by marketplace events — storing contracts, reports, or documents in GCS — and is used for data archiving and workflow-driven file management rather than as a Table Export destination (Table Export writes to Amazon S3 or Snowflake).",
    alias:
      "Related: Google BigQuery Integration, Google Drive Integration, Table Export",
    source: "https://doc.suger.io/integrations/google-cloud-storage/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Archiving marketplace contracts or exported documents to a GCS bucket via Suger workflow automation triggered by entitlement events",
      "Reading configuration or reference files from GCS buckets within Suger workflow steps",
    ],
    context: ["Suger Console", "Google Cloud Storage", "Data Warehousing"],
    related: [
      { name: "Table Export", slug: "table-export" },
      {
        name: "Google BigQuery Integration",
        slug: "google-bigquery-integration",
      },
      { name: "Suger Analytics", slug: "suger-analytics" },
    ],
  },
  {
    name: "Google BigQuery Integration",
    tags: ["suger", "gcp", "integrations"],
    def: "Suger's connection to Google BigQuery that allows Suger to query or update data in BigQuery tables. Used for advanced analytics, custom reporting, and syncing marketplace data into an existing data warehouse.",
    alias:
      "Related: Table Export, Google Cloud Storage Integration, Suger Analytics",
    source: "https://doc.suger.io/integrations/bigquery/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Syncing Suger marketplace data into a BigQuery data warehouse for advanced analytics and custom revenue reporting",
      "Querying or updating BigQuery tables as part of Suger automation workflows",
    ],
    context: ["Suger Console", "Google BigQuery", "Data Warehousing"],
    related: [
      { name: "Table Export", slug: "table-export" },
      {
        name: "Google Cloud Storage Integration",
        slug: "google-cloud-storage-integration",
      },
      { name: "Suger Analytics", slug: "suger-analytics" },
    ],
  },
  {
    name: "Microsoft Outlook Integration",
    tags: ["suger", "azure", "integrations"],
    def: "Suger's organization-level connection to Microsoft Outlook that allows Suger to send, receive, and manage emails on behalf of the organization — used for automated communications in Suger workflows.",
    alias:
      "Related: User Microsoft Outlook Integration, Gmail Integration, Workflow",
    source: "https://doc.suger.io/integrations/microsoft-outlook/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Connecting an organization Microsoft Outlook account to Suger for automated email communications triggered by marketplace events",
      "Using org-level Outlook Integration as the Microsoft 365 equivalent of Suger's Gmail Integration for workflow email automation",
    ],
    context: ["Suger Console", "Microsoft Outlook", "Workflow Automation"],
    related: [
      {
        name: "User Microsoft Outlook Integration",
        slug: "user-microsoft-outlook-integration",
      },
      { name: "Gmail Integration", slug: "gmail-integration" },
      { name: "Workflow", slug: "workflow" },
    ],
  },
  {
    name: "User Microsoft Outlook Integration",
    tags: ["suger", "azure", "integrations"],
    def: "Suger's user-level Outlook connection (distinct from the org-level Microsoft Outlook Integration). Allows individual Suger users to connect their personal Outlook account for email-based workflow actions.",
    alias: "Related: Microsoft Outlook Integration, User Gmail Integration",
    source: "https://doc.suger.io/integrations/microsoft-outlook/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Connecting a personal Outlook account to Suger to enable individual user email actions inside Suger workflows",
      "Distinguishing user-level Outlook access from the org-level Microsoft Outlook Integration when setting up email automation",
    ],
    context: ["Suger Console", "Microsoft Outlook", "User-Level Settings"],
    related: [
      {
        name: "Microsoft Outlook Integration",
        slug: "microsoft-outlook-integration",
      },
      { name: "User Gmail Integration", slug: "user-gmail-integration" },
      { name: "Workflow", slug: "workflow" },
    ],
  },
  {
    name: "OpenAI Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to OpenAI via API key. Enables AI-powered features within Suger — such as workflow automation, intelligent suggestions, and natural language processing — billed at cost directly to the ISV's OpenAI account.",
    alias: "Related: Google Gemini Integration, Anthropic Integration",
    source: "https://doc.suger.io/integrations/openai/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Connecting an OpenAI API key to Suger to enable AI-powered workflow automation and intelligent suggestions within Suger",
      "Choosing OpenAI as the AI provider for Suger's AI features, with costs billed directly to the ISV's OpenAI account",
    ],
    context: ["Suger Console", "AI Features", "Workflow Automation"],
    related: [
      { name: "Google Gemini Integration", slug: "google-gemini-integration" },
      { name: "Anthropic Integration", slug: "anthropic-integration" },
      { name: "Workflow", slug: "workflow" },
    ],
  },
  {
    name: "Google Gemini Integration",
    tags: ["suger", "gcp", "integrations"],
    def: "Suger's connection to Google Gemini via API key. Provides AI-powered capabilities within Suger at cost, using Google's Gemini models as an alternative or complement to OpenAI or Anthropic.",
    alias: "Related: OpenAI Integration, Anthropic Integration",
    source: "https://doc.suger.io/integrations/google-gemini/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Connecting a Google Gemini API key to Suger to use Gemini models as the AI provider for Suger's AI-powered features",
      "Choosing Gemini as an alternative to OpenAI or Anthropic for Suger workflow automation and intelligent suggestions",
    ],
    context: ["Suger Console", "AI Features", "Google Cloud"],
    related: [
      { name: "OpenAI Integration", slug: "openai-integration" },
      { name: "Anthropic Integration", slug: "anthropic-integration" },
      { name: "Workflow", slug: "workflow" },
    ],
  },
  {
    name: "Anthropic Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Anthropic via API key. Enables Claude-powered AI features within Suger at cost, billed directly to the ISV's Anthropic account. One of three AI provider integrations supported alongside OpenAI and Gemini.",
    alias: "Related: OpenAI Integration, Google Gemini Integration",
    source: "https://doc.suger.io/integrations/anthropic/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Connecting an Anthropic API key to Suger to use Claude models for AI-powered workflow automation within Suger",
      "Choosing Anthropic as the AI provider when Claude's capabilities best fit the ISV's Suger automation needs",
    ],
    context: ["Suger Console", "AI Features", "Workflow Automation"],
    related: [
      { name: "OpenAI Integration", slug: "openai-integration" },
      { name: "Google Gemini Integration", slug: "google-gemini-integration" },
      { name: "Workflow", slug: "workflow" },
    ],
  },
  {
    name: "OAuth 2.0 Integration",
    tags: ["suger", "integrations"],
    def: "Suger's generic OAuth 2.0 connector that allows ISVs to connect any compliant external service — including Salesforce, HubSpot, or custom providers — to the Suger platform using standard OAuth 2.0 authorization flows.",
    alias:
      "Related: Salesforce Integration, HubSpot Integration, Okta Single Sign-On (SSO) Integration",
    source: "https://doc.suger.io/integrations/oauth2-integration/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Connecting a custom or non-native external service to Suger using the generic OAuth 2.0 connector when a dedicated integration doesn't exist",
      "Using OAuth 2.0 Integration as the authentication layer for custom CRM or internal tool connections to Suger",
    ],
    context: ["Suger Console", "Integration Setup", "Custom Connectors"],
    related: [
      { name: "Salesforce Integration", slug: "salesforce-integration" },
      { name: "HubSpot Integration", slug: "hubspot-integration" },
      {
        name: "Okta Single Sign-On (SSO) Integration",
        slug: "okta-single-sign-on-sso-integration",
      },
    ],
  },
  {
    name: "Snowflake Integration",
    tags: ["suger", "snowflake", "integrations"],
    def: "Suger's connection to Snowflake for real-time cloud data streaming. Distinct from Snowflake Marketplace — this integration pipes marketplace data (entitlements, usage, revenue) from Suger directly into a Snowflake data warehouse.",
    alias:
      "Related: Snowflake Marketplace — Snowflake, Table Export, Google BigQuery Integration",
    source: "https://doc.suger.io/integrations/snowflake/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Streaming Suger marketplace data — entitlements, usage, revenue — in real time into a Snowflake data warehouse for analytics",
      "Distinguishing Snowflake Integration (data streaming into Snowflake) from Snowflake Marketplace (selling on Snowflake's marketplace)",
    ],
    context: ["Suger Console", "Snowflake", "Data Warehousing"],
    related: [
      {
        name: "Snowflake Marketplace — Snowflake",
        slug: "snowflake-marketplace-—-snowflake",
      },
      { name: "Table Export", slug: "table-export" },
      {
        name: "Google BigQuery Integration",
        slug: "google-bigquery-integration",
      },
    ],
  },
  {
    name: "Partner Revenue Measurement (PRM) — AWS",
    tags: ["aws", "cosell", "funding"],
    def: "An AWS Partner Network capability that measures and quantifies the revenue impact an ISV's product has on AWS service consumption — across both partner-managed and customer-managed accounts. Launched in January 2026. Partners implement PRM via resource tagging to demonstrate their AWS contribution, unlock APN funding benefits, and gain consumption insights.",
    alias:
      "Related: APN ID Tag (aws-apn-id), PRM Resource Tagging, Revenue Attribution — AWS, AWS Partner Network (APN) — AWS",
    source: "https://aws.amazon.com/partners/aws-marketplace/",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Implementing PRM resource tagging to quantify how your ISV product drives AWS consumption and unlock APN funding eligibility",
      "Demonstrating AWS consumption impact across partner-managed and customer-managed accounts via PRM to support SCA or MDF negotiations",
    ],
    context: ["AWS Partner Central", "AWS Resource Tagging", "APN Programs"],
    related: [
      {
        name: "APN ID Tag (aws-apn-id) — AWS",
        slug: "apn-id-tag-aws-apn-id-—-aws",
      },
      {
        name: "PRM Resource Tagging — AWS",
        slug: "prm-resource-tagging-—-aws",
      },
      { name: "Revenue Attribution — AWS", slug: "revenue-attribution-—-aws" },
    ],
  },
  {
    name: "APN ID Tag (aws-apn-id) — AWS",
    tags: ["aws"],
    def: "The AWS resource tag key used for Partner Revenue Measurement. Partners tag their AWS resources with key `aws-apn-id` and value `pc:<product-code>` (e.g. `pc:5ugbbrmu7ud3u5hsipfzug61p`) to attribute AWS service consumption to their marketplace product. Revenue attribution continues until the tag is removed or the resource is terminated.",
    alias: "",
    source: "https://aws.amazon.com/partners/aws-marketplace/",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Tagging AWS resources with the aws-apn-id key and your marketplace product code to begin attributing consumption to your product via PRM",
      "Understanding that revenue attribution persists as long as the aws-apn-id tag remains on a billable resource",
    ],
    context: [
      "AWS Resource Tagging",
      "AWS Partner Central",
      "PRM Implementation",
    ],
    related: [
      {
        name: "Partner Revenue Measurement (PRM) — AWS",
        slug: "partner-revenue-measurement-prm-—-aws",
      },
      {
        name: "PRM Resource Tagging — AWS",
        slug: "prm-resource-tagging-—-aws",
      },
      { name: "Product Code — AWS", slug: "product-code-—-aws" },
    ],
  },
  {
    name: "PRM Resource Tagging — AWS",
    tags: ["aws"],
    def: "The core implementation mechanism for AWS Partner Revenue Measurement. Partners tag billable AWS resources (EC2, S3, RDS, etc.) in their own or the customer's account with their Marketplace product code. Only resources consuming chargeable AWS services generate revenue attribution — tagging free services like IAM has no effect.",
    alias: "",
    source: "https://aws.amazon.com/partners/aws-marketplace/",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Tagging billable AWS resources (EC2, S3, RDS) with the ISV's marketplace product code to enable PRM revenue attribution",
      "Understanding which resource types generate attribution — only chargeable services count; tagging IAM or other free services has no effect",
    ],
    context: [
      "AWS Resource Tagging",
      "AWS Partner Central",
      "PRM Implementation",
    ],
    related: [
      {
        name: "Partner Revenue Measurement (PRM) — AWS",
        slug: "partner-revenue-measurement-prm-—-aws",
      },
      {
        name: "APN ID Tag (aws-apn-id) — AWS",
        slug: "apn-id-tag-aws-apn-id-—-aws",
      },
      {
        name: "PRM Architecture Patterns — AWS",
        slug: "prm-architecture-patterns-—-aws",
      },
    ],
  },
  {
    name: "PRM Architecture Patterns — AWS",
    tags: ["aws"],
    def: "The three deployment models supported by AWS Partner Revenue Measurement: Partner Account (all components in the partner's AWS account), Customer Account (all components in the customer's AWS account), and Hybrid (components split across both). Determines where tagging must be applied.",
    alias: "",
    source: "https://aws.amazon.com/partners/aws-marketplace/",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Determining where to apply aws-apn-id tags based on whether your solution runs in the partner account, customer account, or both",
      "Choosing the right PRM architecture pattern (Partner Account, Customer Account, or Hybrid) before implementing resource tagging",
    ],
    context: ["AWS Resource Tagging", "PRM Implementation", "AWS Architecture"],
    related: [
      {
        name: "PRM Resource Tagging — AWS",
        slug: "prm-resource-tagging-—-aws",
      },
      {
        name: "Partner Revenue Measurement (PRM) — AWS",
        slug: "partner-revenue-measurement-prm-—-aws",
      },
      {
        name: "APN ID Tag (aws-apn-id) — AWS",
        slug: "apn-id-tag-aws-apn-id-—-aws",
      },
    ],
  },
  {
    name: "Revenue Attribution — AWS",
    tags: ["aws"],
    def: "The process by which AWS associates a customer's consumption of AWS services with a specific partner's product, using PRM resource tags. Attribution is maintained as long as the `aws-apn-id` tag remains on the resource. Used by AWS to quantify partner impact and determine APN funding eligibility.",
    alias:
      "Related: PRM (Partner Revenue Measurement), APN ID Tag (aws-apn-id), Product Code — AWS",
    source: "https://aws.amazon.com/partners/aws-marketplace/",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Using PRM resource tags to establish AWS revenue attribution that demonstrates your product's impact on customer AWS spend",
      "Understanding how AWS quantifies partner contribution via revenue attribution to determine APN funding eligibility",
    ],
    context: ["AWS Partner Central", "PRM Implementation", "APN Funding"],
    related: [
      {
        name: "Partner Revenue Measurement (PRM) — AWS",
        slug: "partner-revenue-measurement-prm-—-aws",
      },
      {
        name: "APN ID Tag (aws-apn-id) — AWS",
        slug: "apn-id-tag-aws-apn-id-—-aws",
      },
      { name: "Product Code — AWS", slug: "product-code-—-aws" },
    ],
  },
  {
    name: "Subsidiary Account Connection — AWS",
    tags: ["aws"],
    def: "An AWS Partner Central feature allowing partners with multiple AWS Marketplace accounts to link them all under a single primary account. Required for partners managing multiple marketplace storefronts who want unified PRM tracking and APN program management.",
    alias: "",
    source: "https://aws.amazon.com/partners/partner-central/",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Linking multiple AWS Marketplace seller accounts under a single primary account for unified PRM tracking and APN program management",
      "Consolidating multi-account marketplace operations into a single Partner Central view via Subsidiary Account Connection",
    ],
    context: ["AWS Partner Central", "Multi-Account Management"],
    related: [
      {
        name: "Partner Revenue Measurement (PRM) — AWS",
        slug: "partner-revenue-measurement-prm-—-aws",
      },
      {
        name: "AWS Partner Network (APN) — AWS",
        slug: "aws-partner-network-apn-—-aws",
      },
      { name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" },
    ],
  },
  {
    name: "Partner Relationship Management (PRM) System",
    tags: ["suger", "general", "cosell", "aws", "azure", "gcp"],
    def: "A platform that helps companies recruit, onboard, enable, and manage partners, while supporting collaboration, deal tracking, and performance across the partner lifecycle. Suger extends traditional PRM by acting as the execution layer for cloud marketplace and co-sell workflows—automating CPPOs, syncing CRM deal data to AWS, Azure, and GCP, and enabling partners to transact and track deals in a unified system.",
    alias:
      "Related: Value Added Reseller (VAR), Global System Integrator (GSI), Learning Management System (LMS) — Suger, CRM Enrichment, Co-sell",
    source: "https://doc.suger.io/get-started/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Partner Managers"],
    useCases: [
      "Understanding how Suger extends traditional PRM to execute cloud marketplace and co-sell workflows — not just track pipeline",
      "Positioning Suger as the execution layer that connects partner management (CPPOs, referrals, deals) to marketplace transactions",
    ],
    context: ["Partner Ecosystem", "Cloud GTM Strategy", "Co-sell Programs"],
    related: [
      { name: "CRM Integration", slug: "crm-integration" },
      { name: "Co-sell", slug: "co-sell" },
      {
        name: "Partner Revenue Management (PRM)",
        slug: "partner-revenue-management-prm",
      },
    ],
  },
  {
    name: "Self-service Cancellations and Billing Adjustments (SCABA)",
    tags: ["suger", "aws"],
    def: "An AWS Marketplace feature integrated into Suger that allows sellers to independently manage refunds and agreement terminations directly from their CRM or the Suger console — without needing to contact AWS support or the buyer. SCABA events are delivered via the AWS Marketplace EventBridge integration to the Proposer account (not the Manufacturer); key event types include Agreement Cancellation Request (with statuses: Pending Approval, Approved, Rejected, Cancelled, Validation Failed) and Purchase Agreement Billing Adjustment (Completed, Failed). Sellers must complete the SNS-to-EventBridge migration to receive SCABA events, as the legacy SNS-based notification path does not support these event types.",
    alias:
      "Related: Agreement — AWS, Refund, CRM Integration, Manufacturer / Proposer Roles — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/seller-initiated-cancellations.html",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Issuing refunds or terminating AWS Marketplace agreements directly from Suger without contacting AWS support",
      "Enabling sales ops to manage billing adjustments and cancellations from Salesforce or the Suger console via the SCABA feature",
    ],
    context: ["AWS Marketplace", "Suger Console", "Agreement Management"],
    related: [
      { name: "Agreement — AWS", slug: "agreement-—-aws" },
      { name: "Refund", slug: "refund" },
      { name: "CRM Integration", slug: "crm-integration" },
    ],
  },
  {
    name: "AWS Secure Environment Accelerator (SEA) — AWS",
    tags: ["aws", "general"],
    def: "An open-source AWS tool designed to help organizations — initially the Government of Canada — deploy and operate secure, multi-account, multi-Region AWS environments. Uses a configuration file to automate compliant architecture deployment without code changes. Built to meet Canadian federal security standards including PBMM (Protected B, Medium Integrity, Medium Availability) and ITSG-33. Note: ASEA has been deprecated in favor of the Landing Zone Accelerator (LZA) as of Q3 2025.",
    alias:
      "Also called: ASEA | Successor: Landing Zone Accelerator (LZA) | Related: AWS Partner Network (APN), Public Sector",
    source:
      "https://docs.aws.amazon.com/solutions/landing-zone-accelerator-on-aws/",
    difficulty: "advanced",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Channel Partners"],
    useCases: [
      "Understanding ASEA as the predecessor to LZA for partners who need context on legacy public sector AWS deployments",
      "Guiding customers still using ASEA to migrate to the Landing Zone Accelerator (LZA) as the current recommended solution",
    ],
    context: [
      "AWS Public Sector",
      "Multi-Account AWS Environments",
      "Compliance",
    ],
    related: [
      {
        name: "Landing Zone Accelerator (LZA) — AWS",
        slug: "landing-zone-accelerator-lza-—-aws",
      },
      {
        name: "AWS Partner Network (APN) — AWS",
        slug: "aws-partner-network-apn-—-aws",
      },
      {
        name: "Foundational Technical Review (FTR) — AWS",
        slug: "foundational-technical-review-ftr-—-aws",
      },
    ],
  },
  {
    name: "Landing Zone Accelerator (LZA) — AWS",
    tags: ["aws", "general"],
    def: "AWS's recommended replacement for the Secure Environment Accelerator (ASEA), now generally available. Automates the deployment of high-compliance, multi-account AWS environments. Includes Canadian CCCS Cloud Medium and Trusted Secure Enclave Sensitive Edition sample configurations that deliver similar outcomes to ASEA. Supports automated migration from ASEA.",
    alias:
      "Replaces: SEA / ASEA | Related: AWS Secure Environment Accelerator (SEA) — AWS",
    source:
      "https://docs.aws.amazon.com/solutions/landing-zone-accelerator-on-aws/",
    difficulty: "advanced",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Channel Partners"],
    useCases: [
      "Deploying high-compliance, multi-account AWS environments using LZA with CCCS Cloud Medium or Trusted Secure Enclave sample configurations",
      "Migrating a customer from the deprecated ASEA to LZA using the automated migration path",
    ],
    context: [
      "AWS Public Sector",
      "Multi-Account AWS Environments",
      "Compliance",
    ],
    related: [
      {
        name: "AWS Secure Environment Accelerator (SEA) — AWS",
        slug: "aws-secure-environment-accelerator-sea-—-aws",
      },
      {
        name: "Foundational Technical Review (FTR) — AWS",
        slug: "foundational-technical-review-ftr-—-aws",
      },
      { name: "AWS Specialization — AWS", slug: "aws-specialization-—-aws" },
    ],
  },
  {
    name: "Foundational Technical Review (FTR) — AWS",
    tags: ["aws", "cosell"],
    def: "An AWS validation process that reviews an ISV's software product against AWS Well-Architected best practices across security, reliability, and operational excellence. Required prerequisite for ISV Accelerate, AWS Specialization, and co-sell eligibility. Valid for 3 years. Upon approval, partners earn a 'Reviewed by AWS' badge and listing in AWS Partner Solutions Finder. Can be waived with a recent Well-Architected Framework Review showing no high-risk issues. As of AWS Summit New York 2026, partners can also submit an existing SOC 2 Type II audit report and receive FTR approval or feedback within minutes rather than the previous multi-week review cycle, significantly accelerating the path to ISV Accelerate eligibility.",
    alias:
      "Related: ISV Accelerate — AWS, AWS Specialization, Well-Architected Framework Review, Partner Development Manager (PDM) — AWS",
    source: "https://aws.amazon.com/partners/foundational-technical-review/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Completing the FTR to unlock ISV Accelerate eligibility, AWS Specialization, and co-sell access",
      "Waiving FTR with a recent Well-Architected Framework Review showing no high-risk issues — confirmed with your PDM",
    ],
    context: [
      "AWS Partner Central",
      "ISV Accelerate Program",
      "APN Program Requirements",
    ],
    related: [
      { name: "ISV Accelerate — AWS", slug: "isv-accelerate-—-aws" },
      { name: "AWS Specialization — AWS", slug: "aws-specialization-—-aws" },
      {
        name: "Partner Development Manager (PDM) — AWS",
        slug: "partner-development-manager-pdm-—-aws",
      },
    ],
  },
  {
    name: "AWS Specialization — AWS",
    tags: ["aws", "cosell"],
    def: "AWS's validated expertise program for partners demonstrating deep technical and delivery capability in a specific domain (e.g., AI, Security, Resilience, MSP). Distinct from basic APN membership. Specialization badges appear in AWS Marketplace listings and influence the co-sell recommendation score. As of 2026, renewals require partners to demonstrate launched ACE opportunities tied to their Specialization solutions over a rolling 12-month period.",
    alias:
      "Related: Foundational Technical Review (FTR) — AWS, ACE (APN Customer Engagements), Co-sell Recommendation Score — AWS, AWS Competency — AWS",
    source: "https://aws.amazon.com/partners/programs/specializations/",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Earning an AWS Specialization badge to improve Marketplace listing visibility and increase Co-sell Recommendation Score",
      "Maintaining Specialization renewal by demonstrating launched ACE opportunities tied to the Specialization solution over a rolling 12-month period",
    ],
    context: [
      "AWS Partner Central",
      "AWS Marketplace Listings",
      "Co-sell Programs",
    ],
    related: [
      {
        name: "Foundational Technical Review (FTR) — AWS",
        slug: "foundational-technical-review-ftr-—-aws",
      },
      {
        name: "Co-sell Recommendation Score — AWS",
        slug: "co-sell-recommendation-score-—-aws",
      },
      { name: "AWS Competency — AWS", slug: "aws-competency-—-aws" },
    ],
  },
  {
    name: "AWS Competency — AWS",
    tags: ["aws", "cosell"],
    def: "A category of AWS Specialization validating a partner's technical expertise and customer success in a specific technology area or industry (e.g., AI Competency, Security Competency, SMB Competency). Partners with Competencies gain increased MDF, Marketplace visibility, and priority in AWS seller recommendations. ISVs on the Software Path do not need Advanced Tier APN status to pursue Competencies.",
    alias:
      "Related: AWS Specialization — AWS, Marketing Development Funds (MDF) — AWS — AWS, Strategic Collaboration Agreement (SCA) — AWS",
    source: "https://aws.amazon.com/partners/programs/specializations/",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Achieving an AWS Competency to unlock increased MDF, improved Marketplace visibility, and priority in AWS seller recommendations (no APN tier requirement for ISVs on the Software Path)",
      "Understanding that Competency is a subcategory of Specialization — all Competencies are Specializations, but ISVs on the Software Path do not need Advanced or Premier APN tier to pursue them",
    ],
    context: ["AWS Partner Central", "APN Programs", "Co-sell Eligibility"],
    related: [
      { name: "AWS Specialization — AWS", slug: "aws-specialization-—-aws" },
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
      },
      {
        name: "AWS Partner Network (APN) — AWS",
        slug: "aws-partner-network-apn-—-aws",
      },
    ],
  },
  {
    name: "Co-sell Recommendation Score — AWS",
    tags: ["aws", "cosell"],
    def: "An ML-powered score in AWS Partner Central (Analytics & Insights dashboard) reflecting how likely a partner is to be recommended to an AWS seller for a specific customer opportunity — by region, industry, and segment. Powered by signals including ACE activity, Marketplace listings, Specialization status, validated case studies, and win history. Available to ACE-eligible partners with an AWS Specialization at Validated or Differentiated stage.",
    alias:
      "Related: ACE (APN Customer Engagements), AWS Specialization, ISV Accelerate — AWS, Partner Development Manager (PDM) — AWS",
    source:
      "https://docs.aws.amazon.com/partner-central/latest/getting-started/partner-analytics-faq.html",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Monitoring Co-sell Recommendation Score to understand how likely AWS sellers are to recommend your solution for specific deals",
      "Improving the score by increasing ACE activity, Marketplace listing quality, and maintaining Specialization status with validated case studies",
    ],
    context: [
      "AWS Partner Central",
      "Analytics & Insights Dashboard",
      "Co-sell Programs",
    ],
    related: [
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
      { name: "AWS Specialization — AWS", slug: "aws-specialization-—-aws" },
      { name: "ISV Accelerate — AWS", slug: "isv-accelerate-—-aws" },
    ],
  },
  {
    name: "First Value Opportunity (FVO) — AWS",
    tags: ["aws", "cosell"],
    def: "A designation for an ISV's very first launched co-sell opportunity in ACE. FVOs are excluded from ISV Accelerate's minimum launched opportunity count requirements — meaning the first deal doesn't count toward the 5-launch threshold or the 15-qualified-opportunity count. Ensures the eligibility bar reflects sustained co-sell activity rather than a single deal.",
    alias: "Related: ACE (APN Customer Engagements), ISV Accelerate — AWS",
    source: "https://aws.amazon.com/partners/programs/isv-accelerate/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Understanding that the FVO — the very first launched ACE deal — is excluded from the 5-launch minimum required for ISV Accelerate",
      "Planning co-sell pipeline knowing the second launched opportunity is when the ISV Accelerate eligibility clock actually starts",
    ],
    context: [
      "ACE Opportunities",
      "ISV Accelerate Eligibility",
      "AWS Partner Central",
    ],
    related: [
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
      { name: "ISV Accelerate — AWS", slug: "isv-accelerate-—-aws" },
      { name: "Co-sell", slug: "co-sell" },
    ],
  },
  {
    name: "AWS Solution Provider Program (SPP) — AWS",
    tags: ["aws", "cosell"],
    def: "AWS's primary channel reseller program allowing authorized partners to resell AWS services to end customers, with consolidated billing and discounts. Updated significantly in 2026 with streamlined incentives: a new Streamlined Base Benefit, New Customer Incentive, and Partner Growth Incentive replacing several prior discount mechanisms. Distinct from CPPO/SPPO, which are ISV-specific marketplace channel programs.",
    alias:
      "Related: Channel Partner Private Offer (CPPO) — AWS, SPPO (Solution Provider Private Offer), Channel Partner (CP), Partner Development Manager (PDM) — AWS",
    source: "https://aws.amazon.com/partners/programs/",
    difficulty: "advanced",
    category: "advanced",
    whoFor: ["Channel Partners", "ISVs / Sellers"],
    useCases: [
      "Enrolling in SPP to resell AWS services to end customers with consolidated billing, discounts, and the 2026-updated incentive structure",
      "Distinguishing SPP (AWS service resale program) from CPPO/SPPO (ISV software marketplace channel programs) when advising on channel strategy",
    ],
    context: ["AWS Channel Programs", "AWS Partner Central", "Channel Resale"],
    related: [
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
      },
      {
        name: "Solution Provider Private Offer (SPPO) — AWS",
        slug: "solution-provider-private-offer-sppo-—-aws",
      },
      { name: "Channel Partner (CP)", slug: "channel-partner-cp" },
    ],
  },
  {
    name: "AWS Partner Central Agents — AWS",
    tags: ["aws", "cosell"],
    def: "Agentic AI capabilities embedded in AWS Partner Central (launched March 2026) that assist partner teams with pipeline insights, sales play recommendations, and automated ACE opportunity management. Can auto-populate opportunity fields from meeting transcripts or emails, recommend funding at the opportunity level, and generate pre-filled fund requests. A June 2026 expansion extended agent-assisted co-sell qualification to every deal — enabling partners to apply agentic acceleration across their full pipeline without manually selecting eligible opportunities. Available in all commercial AWS Regions.",
    alias:
      "Related: APN Customer Engagements (ACE) — AWS, AWS Partner Funding — AWS, Partner Central 3.0 (PC3.0) — AWS",
    source:
      "https://aws.amazon.com/about-aws/whats-new/2026/06/accelerate-co-selling-with-agents/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Using AWS Partner Central Agents to auto-populate ACE opportunity fields from meeting transcripts, reducing manual data entry",
      "Leveraging AI-generated funding recommendations and pre-filled fund requests at the opportunity level to accelerate co-sell funding workflows",
    ],
    context: ["AWS Partner Central", "AI Features", "Co-sell Operations"],
    related: [
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
      { name: "AWS Partner Funding — AWS", slug: "aws-partner-funding-—-aws" },
      {
        name: "Partner Central 3.0 (PC3.0) — AWS",
        slug: "partner-central-3.0-pc3.0-—-aws",
      },
    ],
  },
  {
    name: "Partner Revenue Management (PRM)",
    tags: ["suger", "general"],
    def: "The practice of tracking, reconciling, and reporting revenue generated through cloud marketplace and direct billing channels. In Suger, PRM spans the full billing lifecycle — from offer creation and usage metering through invoicing, payment collection, disbursement, and revenue reporting — across both marketplace and direct (Stripe) billing.",
    alias: "Related: Revenue, Disbursement, Invoice, Billing Integration",
    source: "https://doc.suger.io/billing/revenue/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Using Suger's PRM layer to track, reconcile, and report all revenue across both marketplace and direct Stripe billing channels in one place",
      "Understanding PRM as the full billing lifecycle — offer → metering → invoicing → payment → disbursement → reporting — in Suger",
    ],
    context: ["Suger Console", "Revenue Dashboard", "Billing Operations"],
    related: [
      { name: "Revenue", slug: "revenue" },
      { name: "Disbursement", slug: "disbursement" },
      { name: "Invoice", slug: "invoice" },
    ],
  },
  {
    name: "Payment",
    tags: ["suger"],
    def: "Suger's automated payment processing layer that triggers when an invoice becomes Finalized. Processes payments via Stripe, applying buyer wallet credits first before charging the remaining balance. Supports payment retry, dispute handling via Stripe webhooks, and abnormal payment alerts.",
    alias: "Related: Invoice, Stripe Integration, Refund, Buyer Wallet",
    source: "https://doc.suger.io/billing/payment/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Reviewing payment status and retry history for a finalized Suger invoice in the payment console",
      "Configuring abnormal payment alerts so finance teams are notified when a payment fails or requires retry",
    ],
    context: ["Suger Console", "Stripe", "Invoice Management"],
    related: [
      { name: "Invoice", slug: "invoice" },
      { name: "Refund", slug: "refund" },
      { name: "Buyer Wallet", slug: "buyer-wallet" },
    ],
  },
  {
    name: "Refund",
    tags: ["suger"],
    def: "Suger's manual refund capability for successful payments. Supports partial refunds, multiple refunds per payment, and both credit wallet refunds and Stripe payment refunds. Refunds are processed at the transaction level, not the invoice level.",
    alias: "Related: Payment, Invoice, Stripe Integration",
    source: "https://doc.suger.io/billing/payment/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Issuing a partial or full refund on a successful Suger payment at the transaction level",
      "Choosing between a Buyer Wallet credit refund and a Stripe payment refund based on the customer's preferred resolution",
    ],
    context: ["Suger Console", "Stripe", "Payment Management"],
    related: [
      { name: "Payment", slug: "payment" },
      { name: "Buyer Wallet", slug: "buyer-wallet" },
      { name: "Stripe Integration", slug: "stripe-integration" },
    ],
  },
  {
    name: "Buyer Wallet",
    tags: ["suger"],
    def: "A credit balance held for a specific buyer in Suger. During payment processing, credits in the wallet are applied first before any Stripe charge is made. Wallets must be in active status to accept credit refunds.",
    alias: "Related: Usage Credit, Payment, Refund",
    source: "https://doc.suger.io/billing/payment/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users", "Enterprise Buyers"],
    useCases: [
      "Applying buyer wallet credits to reduce the Stripe charge on an invoice — credits are consumed before any card or ACH payment",
      "Issuing a credit refund to a buyer's wallet rather than a direct Stripe refund for billing corrections",
    ],
    context: ["Suger Console", "Invoice Payment", "Credit Management"],
    related: [
      { name: "Usage Credit", slug: "usage-credit" },
      { name: "Payment", slug: "payment" },
      { name: "Refund", slug: "refund" },
    ],
  },
  {
    name: "Payment Transaction",
    tags: ["suger"],
    def: "A single atomic payment attempt within Suger's payment pipeline. One invoice may have multiple transactions — for example, a credit deduction followed by a Stripe charge. Each transaction has its own status (Pending, Processing, Success, Failed). The invoice's payment status always reflects the latest transaction.",
    alias: "Related: Payment, Invoice, Revenue Record",
    source: "https://doc.suger.io/billing/payment/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Reviewing individual payment transaction records to diagnose a failed or pending payment on a Suger invoice",
      "Understanding that a single invoice can have multiple transactions — wallet credit deduction followed by Stripe charge",
    ],
    context: ["Suger Console", "Payment Debugging", "Invoice Management"],
    related: [
      { name: "Payment", slug: "payment" },
      { name: "Invoice", slug: "invoice" },
      { name: "Revenue Record", slug: "revenue-record" },
    ],
  },
  {
    name: "Revenue Record",
    tags: ["suger"],
    def: "A financial record generated in Suger on successful invoice payment. Two types: Joined Records (one per invoice, consolidating all payment transactions) and Raw Records (one per individual payment transaction). Used for reconciliation and financial reporting.",
    alias: "Related: Revenue, Payment Transaction, Disbursement",
    source: "https://doc.suger.io/billing/revenue/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Using Joined Revenue Records for invoice-level reconciliation and Raw Records for per-transaction audit trails in Suger",
      "Exporting revenue records from Suger to accounting systems (NetSuite, QuickBooks) for financial reporting",
    ],
    context: ["Suger Console", "Revenue Reporting", "Financial Reconciliation"],
    related: [
      { name: "Revenue", slug: "revenue" },
      { name: "Payment Transaction", slug: "payment-transaction" },
      { name: "Disbursement", slug: "disbursement" },
    ],
  },
  {
    name: "Invoiced Amount",
    tags: ["suger", "general"],
    def: "The total amount billed to a buyer on an invoice — what the customer owes. Distinct from Collectable Amount, which accounts for marketplace fees and credits. Tracked per invoice issue date in Suger's revenue reports.",
    alias: "Related: Collectable Amount, Disbursed Amount, Invoice",
    source: "https://doc.suger.io/billing/revenue/",
    difficulty: "beginner",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Viewing total amounts billed per invoice issue date in Suger's revenue reports for period-close reconciliation",
      "Distinguishing Invoiced Amount (what the buyer owes) from Collectable Amount (what the ISV receives after fees)",
    ],
    context: ["Suger Console", "Revenue Reports", "Financial Reporting"],
    related: [
      { name: "Collectable Amount", slug: "collectable-amount" },
      { name: "Disbursed Amount", slug: "disbursed-amount" },
      { name: "Invoice", slug: "invoice" },
    ],
  },
  {
    name: "Collectable Amount",
    tags: ["suger", "general"],
    def: "The amount an ISV can expect to receive from a buyer after deducting marketplace/partner fees and applying credits. Formula: (Total Payment − Partner Fee) + Credits. Tracked per payment due date in Suger's revenue reports.",
    alias:
      "Related: Invoiced Amount, Disbursed Amount, Marketplace Fee / Transaction Fee",
    source: "https://doc.suger.io/billing/revenue/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Using Collectable Amount to forecast net receivables after marketplace fees and buyer credits on a per-payment-due-date basis",
      "Comparing Collectable Amount to Invoiced Amount to understand the effective take-rate after fees on a given transaction",
    ],
    context: ["Suger Console", "Revenue Reports", "Financial Forecasting"],
    related: [
      { name: "Invoiced Amount", slug: "invoiced-amount" },
      { name: "Disbursed Amount", slug: "disbursed-amount" },
      { name: "Partner Fee", slug: "partner-fee" },
    ],
  },
  {
    name: "Disbursed Amount",
    tags: ["suger", "general"],
    def: "The net amount paid out to the seller after deducting all partner/marketplace fees from the total payment. Formula: Total Payment − Partner Fee. Tracked per disbursement date. Distinct from Collectable Amount, which also includes credits.",
    alias: "Related: Collectable Amount, Invoiced Amount, Disbursement",
    source: "https://doc.suger.io/billing/revenue/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Reconciling actual cash received (Disbursed Amount) against expected net revenue per disbursement date in Suger reports",
      "Distinguishing Disbursed Amount (Total Payment minus fee) from Collectable Amount (which also factors in credits)",
    ],
    context: ["Suger Console", "Revenue Reports", "Cash Reconciliation"],
    related: [
      { name: "Collectable Amount", slug: "collectable-amount" },
      { name: "Disbursement", slug: "disbursement" },
      { name: "Partner Fee", slug: "partner-fee" },
    ],
  },
  {
    name: "Partner Fee",
    tags: ["suger", "general"],
    def: "The fee deducted from a buyer's payment by the marketplace or billing partner before disbursement to the ISV. In Suger's revenue reporting, this is subtracted from the total payment to calculate both Collectable Amount and Disbursed Amount.",
    alias:
      "Related: Marketplace Fee / Transaction Fee, Disbursed Amount, Collectable Amount",
    source: "https://doc.suger.io/billing/revenue/",
    difficulty: "beginner",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Understanding how Partner Fee is factored into Suger's revenue reporting — subtracted from total payment to derive Collectable and Disbursed Amounts",
      "Checking the Partner Fee percentage on a specific entitlement to understand the effective take-rate before reconciling payouts",
    ],
    context: ["Suger Console", "Revenue Reports", "Marketplace Fee Structures"],
    related: [
      {
        name: "Marketplace Fee / Transaction Fee",
        slug: "marketplace-fee-/-transaction-fee",
      },
      { name: "Disbursed Amount", slug: "disbursed-amount" },
      { name: "Collectable Amount", slug: "collectable-amount" },
    ],
  },
  {
    name: "Payment Due Date",
    tags: ["suger", "general"],
    def: "The deadline by which a buyer must complete payment on a finalized invoice. Used as the key date for Collectable Amount in Suger's revenue reports.",
    alias: "Related: Invoice, Payment, Collectable Amount",
    source: "https://doc.suger.io/billing/invoice/",
    difficulty: "beginner",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users", "Enterprise Buyers"],
    useCases: [
      "Filtering Suger revenue reports by Payment Due Date to see expected inflows within a specific period",
      "Configuring invoice due dates that align with enterprise buyer AP cycles",
    ],
    context: ["Suger Console", "Invoice Management", "Revenue Reports"],
    related: [
      { name: "Invoice", slug: "invoice" },
      { name: "Payment", slug: "payment" },
      { name: "Collectable Amount", slug: "collectable-amount" },
    ],
  },
  {
    name: "Disbursement Date",
    tags: ["suger", "general"],
    def: "The date when a successful payment is processed and transferred to the seller's account. Used as the key date for Disbursed Amount in Suger's revenue reports.",
    alias: "Related: Disbursement, Disbursed Amount, Payment",
    source: "https://doc.suger.io/billing/revenue/",
    difficulty: "beginner",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Filtering Suger revenue reports by Disbursement Date to reconcile actual cash received in a given period",
      "Distinguishing Disbursement Date (when cash clears) from Payment Due Date (when payment is expected)",
    ],
    context: ["Suger Console", "Revenue Reports", "Cash Reconciliation"],
    related: [
      { name: "Disbursement", slug: "disbursement" },
      { name: "Disbursed Amount", slug: "disbursed-amount" },
      { name: "Payment Due Date", slug: "payment-due-date" },
    ],
  },
  {
    name: "Payment Dispute",
    tags: ["suger", "general"],
    def: "A buyer-initiated challenge to a payment charge, handled by Stripe. Suger receives dispute notifications via Stripe webhooks and displays them in the relevant payment transaction record in the Suger console.",
    alias: "Related: Payment, Stripe Integration, Payment Transaction",
    source: "https://doc.suger.io/billing/payment/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Monitoring Stripe dispute notifications surfaced in Suger's payment transaction records to respond within Stripe's response window",
      "Investigating a disputed payment by reviewing the transaction record in Suger and responding through Stripe's dispute resolution flow",
    ],
    context: ["Suger Console", "Stripe", "Payment Management"],
    related: [
      { name: "Payment", slug: "payment" },
      { name: "Stripe Integration", slug: "stripe-integration" },
      { name: "Payment Transaction", slug: "payment-transaction" },
    ],
  },
  {
    name: "ACH Debit",
    tags: ["suger", "general"],
    def: "An electronic bank transfer payment method supported via Stripe in Suger. ACH refunds are processed as bank credits rather than explicit refunds. Payments may take a few hours to complete — refunds initiated before completion cancel the original payment rather than creating a separate refund.",
    alias: "Related: Payment, Stripe Integration, Refund",
    source: "https://doc.suger.io/billing/payment/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users", "Enterprise Buyers"],
    useCases: [
      "Enabling ACH Debit as a payment method for enterprise buyers who prefer bank transfer over card payment via Stripe",
      "Understanding ACH refund behavior — initiated before completion cancels the original payment rather than creating a separate refund",
    ],
    context: ["Suger Console", "Stripe", "Enterprise Billing"],
    related: [
      { name: "Payment", slug: "payment" },
      { name: "Refund", slug: "refund" },
      { name: "Stripe Integration", slug: "stripe-integration" },
    ],
  },
  {
    name: "Billing",
    tags: ["suger"],
    def: "Suger's end-to-end billing system for direct (non-marketplace) revenue. Covers the full lifecycle: product setup → billable metrics → offer creation → entitlement management → usage metering → invoicing → payment collection → revenue reporting. Uses Stripe as the payment provider.",
    alias: "Related: Partner Revenue Management, Invoice, Payment, Revenue",
    source: "https://doc.suger.io/billing/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Setting up direct (non-marketplace) billing in Suger to monetize buyers who don't transact through a cloud marketplace",
      "Understanding Suger's full direct billing lifecycle — from product and offer setup through metering, invoicing, and payment collection via Stripe",
    ],
    context: ["Suger Console", "Direct Billing", "Stripe"],
    related: [
      { name: "Invoice", slug: "invoice" },
      { name: "Payment", slug: "payment" },
      {
        name: "Partner Revenue Management (PRM)",
        slug: "partner-revenue-management-prm",
      },
    ],
  },

  {
    name: "AWS Competency Program — AWS",
    tags: ["aws", "cosell"],
    def: "A validation program that recognizes AWS partners who have demonstrated technical proficiency and proven customer success in specialized solution areas, industries, or workloads. Achieving a Competency is a prerequisite for higher-tier MDF funding.",
    alias:
      "Related: AWS Competency — AWS, Foundational Technical Review (FTR) — AWS, Marketing Development Funds (MDF) — AWS",
    source: "https://aws.amazon.com/partners/programs/specializations/",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Pursuing an AWS Competency designation to unlock higher-tier MDF and improved AWS Marketplace listing visibility",
      "Using Competency status as a prerequisite signal in SCA negotiations and co-sell priority discussions with AWS",
    ],
    context: ["AWS Partner Central", "APN Programs", "Co-sell Eligibility"],
    related: [
      { name: "AWS Competency — AWS", slug: "aws-competency-—-aws" },
      {
        name: "Foundational Technical Review (FTR) — AWS",
        slug: "foundational-technical-review-ftr-—-aws",
      },
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
      },
    ],
  },
  {
    name: "AWS Marketplace Skill",
    tags: ["aws", "cosell"],
    def: "A specific designation for AWS consulting partners who demonstrate expertise in helping customers transform their procurement and governance using AWS Marketplace. Partners with this skill often act as the 'Channel Partner' in CPPO transactions.",
    alias:
      "Related: Channel Partner Private Offer (CPPO) — AWS, AWS Partner Network (APN) — AWS, Channel Partner (CP)",
    source: "https://aws.amazon.com/partners/aws-marketplace/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["Channel Partners", "ISVs / Sellers"],
    useCases: [
      "Identifying AWS Marketplace Skill-designated partners as the most qualified channel partners for CPPO transactions",
      "Achieving the AWS Marketplace Skill designation as a consulting partner to unlock CPPO and marketplace procurement deal flow",
    ],
    context: ["AWS Partner Central", "Channel Programs", "AWS Marketplace"],
    related: [
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
      },
      { name: "Channel Partner (CP)", slug: "channel-partner-cp" },
      { name: "AWS Competency — AWS", slug: "aws-competency-—-aws" },
    ],
  },
  {
    name: "Build Engagement Model — GCP",
    tags: ["gcp", "cosell"],
    def: "The Google Cloud Partner Network engagement model designed for ISVs and SaaS providers who integrate their products with Google Cloud. Requires a technical review and a transactable GCP Marketplace listing to unlock co-sell incentives and Market Development Funds (MDF).",
    alias:
      "AWS equivalent: ISV Accelerate — AWS | Azure equivalent: ISV Success Program — Azure | Related: Google Cloud Partner Network — GCP, GCP Marketplace — GCP",
    source: "https://partners.cloud.google.com",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Enrolling in the GCP Build Engagement Model to unlock co-sell incentives and MDF by completing a technical review and publishing a transactable GCP listing",
      "Understanding Build as the GCP equivalent of AWS ISV Accelerate for software providers integrated with Google Cloud",
    ],
    context: [
      "Google Cloud Partner Network",
      "GCP Marketplace",
      "Co-sell Programs",
    ],
    related: [
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
      {
        name: "Google Cloud Partner Network — GCP",
        slug: "google-cloud-partner-network-—-gcp",
      },
      { name: "Transactable Offer", slug: "transactable-offer" },
    ],
  },
  {
    name: "ISV Success Program — Azure",
    tags: ["azure", "cosell", "funding"],
    def: "A Microsoft program that provides software providers with technical consulting, Azure credits, and marketplace rewards to help them build, publish, and grow their transactable listings on the Microsoft Marketplace. The program has two tiers: the self-service Advanced Package (available to all eligible ISVs) includes $50K Azure credits, up to $100K cash incentives for AI/Analytics builds, and $50K in migration simplification benefits; the invitation-only Expanded Benefits tier adds $25K Azure sponsorship, 50 hours of technical consultations, and a $5K GitHub Copilot bonus. Enrollment in ISV Success is required for Business Applications co-sell eligible status for Dynamics 365 and Power Apps ISVs. ISV Success is scheduled for consolidation into Frontier Accelerate for Marketplace in fall 2026.",
    alias:
      "AWS equivalent: ISV Accelerate — AWS | GCP equivalent: Build Engagement Model — GCP | Related: Microsoft Marketplace — Azure, Marketplace Rewards — Azure, MISA (Microsoft Intelligent Security Association) — Azure, Frontier Accelerate for Marketplace — Azure",
    source: "https://www.microsoft.com/isv/offer-benefits",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Enrolling in the ISV Success Program to access technical consulting, Azure credits, and marketplace rewards for building and publishing on Azure Marketplace",
      "Understanding ISV Success as the Azure equivalent of AWS ISV Accelerate — the primary ISV co-sell enablement program on Microsoft",
    ],
    context: [
      "Microsoft Marketplace",
      "Azure Co-sell Programs",
      "Partner Center — Azure",
    ],
    related: [
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
      {
        name: "Marketplace Rewards — Azure",
        slug: "marketplace-rewards-—-azure",
      },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
    ],
  },
  {
    name: "End Customer Investment Funds (ECIF) — Azure",
    tags: ["azure", "cosell", "funding"],
    group: "cloud-partner-funding",
    def: "Microsoft funding program where Microsoft pays approved partners to deliver services — deployment, migration, training, or proof of concept — accelerating customer adoption of Microsoft cloud technologies. Provides direct project funding up to $500K (not a percentage-of-revenue rebate). Requires Advanced Specialization as a hard prerequisite and must cover net-new cloud consumption. Field-driven only: initiated through a Partner Development Manager or Microsoft field team with a scoped statement of work, not self-service.",
    alias:
      "Related: ISV Success Program — Azure, Microsoft AI Cloud Partner Program (MPN) — Azure, Co-sell Eligible / Incentivized — Azure",
    source:
      "https://partner.microsoft.com/en-us/partnership/partner-incentives",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Partner Managers"],
    useCases: [
      "Initiating an ECIF engagement through your Microsoft PDM to fund a customer deployment, migration, or PoC project up to $500K",
      "Understanding ECIF prerequisites — Advanced Specialization required, net-new consumption only, field-driven (not self-service)",
    ],
    context: [
      "Azure Co-sell Programs",
      "Microsoft Partner Center",
      "Microsoft Field Team",
    ],
    related: [
      {
        name: "ISV Success Program — Azure",
        slug: "isv-success-program-—-azure",
      },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
      {
        name: "Microsoft AI Cloud Partner Program (MPN) — Azure",
        slug: "microsoft-ai-cloud-partner-program-mpn-—-azure",
      },
    ],
  },
  {
    name: "Microsoft Intelligent Security Association (MISA) — Azure",
    tags: ["azure", "cosell"],
    def: "A nomination-only ecosystem for independent software vendors (ISVs) and managed security service providers (MSSPs) that have integrated their solutions with Microsoft Security products. Requires a transactable marketplace listing.",
    alias:
      "Related: Microsoft Marketplace — Azure, Co-sell Eligible / Incentivized — Azure, ISV Success Program — Azure",
    source:
      "https://www.microsoft.com/en-us/security/business/intelligent-security-association",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Pursuing MISA membership to gain Microsoft Security ecosystem recognition and co-sell visibility for security-focused ISVs",
      "Understanding MISA as a nomination-only program requiring a transactable Azure Marketplace listing and Microsoft Security product integration",
    ],
    context: [
      "Azure Marketplace",
      "Microsoft Security Ecosystem",
      "Co-sell Programs",
    ],
    related: [
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
      {
        name: "ISV Success Program — Azure",
        slug: "isv-success-program-—-azure",
      },
    ],
  },
  {
    name: "Snowflake Data Appreciation (SDA) — Snowflake",
    tags: ["snowflake", "cosell"],
    def: "A Snowflake partner program that incentivizes data providers to list high-quality data products on the Snowflake Marketplace. Provides marketing support and increased visibility to Snowflake's customer base.",
    alias: "Related: Snowflake Marketplace — Snowflake, Snowflake Integration",
    source:
      "https://docs.snowflake.com/en/collaboration/collaboration-listings-about",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Enrolling in SDA to gain Snowflake marketing support and increased visibility for high-quality data products listed on Snowflake Marketplace",
      "Understanding SDA as the Snowflake co-sell/partner program equivalent for data providers on the Snowflake platform",
    ],
    context: ["Snowflake Marketplace", "Snowflake Partner Programs"],
    related: [
      {
        name: "Snowflake Marketplace — Snowflake",
        slug: "snowflake-marketplace-—-snowflake",
      },
      {
        name: "Snowflake Data Clean Rooms — Snowflake",
        slug: "snowflake-data-clean-rooms-—-snowflake",
      },
      { name: "Listing", slug: "listing" },
    ],
  },
  {
    name: "Snowflake Data Clean Rooms — Snowflake",
    tags: ["snowflake"],
    def: "A secure environment that allows multiple parties to join and analyze data without exposing the raw underlying data to each other. Often sold as a specialized application or service on the Snowflake Marketplace.",
    alias: "Related: Snowflake Marketplace — Snowflake, Snowflake Integration",
    source: "https://docs.snowflake.com/en/user-guide/cleanrooms/overview",
    difficulty: "advanced",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Selling a Snowflake Data Clean Room solution on Snowflake Marketplace to enable multi-party data collaboration without raw data exposure",
      "Understanding Clean Rooms as a premium product type on Snowflake Marketplace requiring Snowflake-native deployment",
    ],
    context: ["Snowflake Marketplace", "Multi-Party Data Collaboration"],
    related: [
      {
        name: "Snowflake Marketplace — Snowflake",
        slug: "snowflake-marketplace-—-snowflake",
      },
      {
        name: "Snowflake Data Appreciation (SDA) — Snowflake",
        slug: "snowflake-data-appreciation-sda-—-snowflake",
      },
      { name: "Listing", slug: "listing" },
    ],
  },

  {
    name: "Multiple Offers — GCP",
    tags: ["gcp", "offers"],
    def: "A Google Cloud Marketplace feature that allows a partner to send and maintain more than one active private offer for the same product to a single billing account. This enables buyers to purchase separate instances of a product with different terms, such as for different departments or project-specific billing.",
    alias:
      "Related: Private Offer — GCP, GCP Marketplace — GCP, Producer Portal — GCP",
    source:
      "https://docs.cloud.google.com/marketplace/docs/partners/integrated-saas",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Sending separate GCP private offers to the same billing account for different departments or projects, each with distinct terms",
      "Using Multiple Offers to handle enterprise buyers who need project-specific billing arrangements for the same product",
    ],
    context: [
      "GCP Marketplace",
      "Private Offer Flows",
      "Producer Portal — GCP",
    ],
    related: [
      { name: "Private Offer — GCP", slug: "private-offer-—-gcp" },
      { name: "Private Plan — GCP", slug: "private-plan-—-gcp" },
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
    ],
  },
  {
    name: "Private Offer — AWS",
    tags: ["aws", "offers"],
    group: "private-offer",
    def: "A custom pricing and terms agreement sent directly to a specific AWS account through AWS Marketplace. ISVs use private offers to negotiate custom pricing, payment schedules, contract durations, and EULA terms outside the public listing price. Private offers are accessed via a unique URL and must be accepted before the expiry date set by the seller. Variants include Express Private Offer (simplified flow), Agreement-Based Offer (ABO, for renewals on existing agreements), and Channel Partner Private Offer (CPPO, for reseller transactions).",
    alias:
      "Azure equivalent: Private Offer — Azure | GCP equivalent: Private Offer — GCP | Related: Express Private Offer — AWS, Agreement-Based Offer (ABO) — AWS, Channel Partner Private Offer (CPPO) — AWS, Resale Authorization — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/private-offers-overview.html",
    difficulty: "beginner",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Closing a custom-priced enterprise deal by sending a private offer with negotiated terms directly to the buyer's AWS account",
      "Setting a flexible payment schedule on an AWS private offer to match the buyer's budget cadence without changing the public listing price",
    ],
    context: [
      "AWS Marketplace",
      "AWS Marketplace Management Portal (AMMP)",
      "Suger Console",
      "Enterprise Sales",
    ],
    related: [
      {
        name: "Private Offer — Azure",
        slug: "private-offer-—-azure",
      },
      {
        name: "Private Offer — GCP",
        slug: "private-offer-—-gcp",
      },
      {
        name: "Express Private Offer — AWS",
        slug: "express-private-offer-—-aws",
      },
      {
        name: "Agreement-Based Offer (ABO) — AWS",
        slug: "agreement-based-offer-abo-—-aws",
      },
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
      },
    ],
  },
  {
    name: "Private Offer — GCP",
    tags: ["gcp", "offers"],
    group: "private-offer",
    def: "A custom pricing and terms agreement issued to a specific Google Cloud billing account through GCP Marketplace, expanded to general availability with version 2 in April 2026. Version 2 supports three discount types — flat fee, usage-based, and installment-based — and lets buyers download a signed offer including the EULA as a PDF. Multiple concurrent private offers can be issued for the same product to different billing accounts using the Multiple Offers feature, enabling separate project-based contracts with individually negotiated terms.",
    alias:
      "AWS equivalent: Private Offer — AWS | Azure equivalent: Private Offer — Azure | Related: Multiple Offers — GCP, Private Plan — GCP, Producer Portal — GCP",
    source:
      "https://docs.cloud.google.com/marketplace/docs/partners/selling/managing-private-offers",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Creating a custom-priced GCP private offer for a specific billing account to close an enterprise deal with negotiated terms",
      "Understanding GCP-specific private offer mechanics — including Multiple Offers and project-based billing — versus AWS and Azure equivalents",
    ],
    context: [
      "GCP Marketplace",
      "Private Offer Flows",
      "Producer Portal — GCP",
    ],
    related: [
      { name: "Multiple Offers — GCP", slug: "multiple-offers-—-gcp" },
      { name: "Private Plan — GCP", slug: "private-plan-—-gcp" },
      { name: "Private Offer — AWS", slug: "private-offer-—-aws" },
    ],
  },
  {
    name: "Private Plan — GCP",
    tags: ["gcp", "offers"],
    def: "A restricted product plan on Google Cloud Marketplace available only to specific billing accounts. While a private offer is a one-time transaction, a private plan allows multiple authorized customers to subscribe to the same custom terms repeatedly.",
    alias:
      "Related: Multiple Offers — GCP, Private Offer — GCP, GCP Marketplace — GCP",
    source:
      "https://docs.cloud.google.com/marketplace/docs/partners/integrated-saas",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Creating a Private Plan on GCP Marketplace to offer the same custom terms to multiple pre-authorized billing accounts without a per-customer private offer",
      "Distinguishing Private Plan (reusable, multi-subscriber) from Private Offer (one-time, single-buyer transaction) when configuring GCP pricing",
    ],
    context: [
      "GCP Marketplace",
      "Producer Portal — GCP",
      "Pricing Configuration",
    ],
    related: [
      { name: "Private Offer — GCP", slug: "private-offer-—-gcp" },
      { name: "Multiple Offers — GCP", slug: "multiple-offers-—-gcp" },
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
    ],
  },
  {
    name: "Cloud Committed Spend (CCS)",
    tags: ["general"],
    def: "A pre-negotiated minimum spend commitment an enterprise makes with a cloud provider, typically in exchange for volume discounts. Transactable marketplace purchases often count toward a company's committed spend balance, making them strategically attractive to enterprise buyers on EDP, MACC, or CUD agreements. CCS is the cross-platform umbrella term; each hyperscaler has a branded program name.",
    alias:
      "AWS: Enterprise Discount Program (EDP) — AWS | Azure: Azure Consumption Commitment (MACC) — Azure | GCP: Committed Use Discount (CUD) — GCP | See also: Committed Spend / Cloud Commit",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/private-offers.html",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Positioning a transactable marketplace listing as eligible for a buyer's committed spend drawdown to accelerate enterprise deal cycles",
      "Understanding why enterprise buyers prefer marketplace procurement over direct purchasing when they have an active EDP, MACC, or CUD commitment",
    ],
    context: [
      "Enterprise Sales",
      "Marketplace Procurement",
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
    ],
    related: [
      {
        name: "Enterprise Discount Program (EDP) — AWS",
        slug: "enterprise-discount-program-edp-—-aws",
      },
      {
        name: "Azure Consumption Commitment (MACC) — Azure",
        slug: "azure-consumption-commitment-macc-—-azure",
      },
      {
        name: "Committed Use Discount (CUD) — GCP",
        slug: "committed-use-discount-cud-—-gcp",
      },
      {
        name: "Committed Spend / Cloud Commit",
        slug: "committed-spend-/-cloud-commit",
      },
    ],
  },
  {
    name: "Metering / Usage Reporting",
    tags: ["general"],
    def: "The process by which an ISV reports a buyer's consumption data to the marketplace to trigger accurate billing. For usage-based and consumption models, the ISV — or their integration partner — must submit usage records to the marketplace's metering API within each billing period. Missing or late reports result in billing failures or undercollection. All major hyperscalers (AWS, Azure, GCP) require ISVs to implement a metering integration for SaaS products with usage-based pricing.",
    alias: "Related: Usage Metering, Metered Billing, Metering Dimension",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/saas-reporting.html",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Reporting per-seat, API-call, or data-volume consumption to AWS, Azure, or GCP Marketplace to trigger monthly billing",
      "Validating that all usage records are submitted before the marketplace metering deadline to avoid billing gaps",
    ],
    context: [
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
      "Suger Console",
    ],
    related: [
      { name: "Usage Metering", slug: "usage-metering" },
      { name: "Metered Billing", slug: "metered-billing" },
      { name: "Metering Dimension", slug: "metering-dimension" },
    ],
  },
  {
    name: "Provisioning",
    tags: ["general"],
    def: "The process of granting a buyer access to an ISV's product after they complete a marketplace purchase. When a buyer accepts an offer, the marketplace sends a notification to the ISV — typically via webhook, SQS message, or API callback — to create the customer's account or environment. Failed or delayed provisioning is the most common source of buyer dissatisfaction after a marketplace transaction, and is often the integration step ISVs underinvest in.",
    alias: "Related: Entitlement, Fulfillment URL",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/saas-product-customer-setup.html",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Implementing a fulfillment webhook to automatically create a buyer's account when a marketplace entitlement is activated",
      "Diagnosing a failed provisioning flow when a buyer reports they cannot access the product after purchase",
    ],
    context: [
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
      "Suger Console",
    ],
    related: [
      { name: "Entitlement", slug: "entitlement" },
      { name: "Listing", slug: "listing" },
      { name: "Usage Metering", slug: "usage-metering" },
    ],
  },
  {
    name: "Integration Partner",
    tags: ["general", "suger"],
    def: "A platform or service provider that handles the technical integration between an ISV's product and one or more cloud marketplace APIs. Integration partners abstract the complexity of listing management, metering, entitlement tracking, and offer creation across AWS, Azure, GCP, and Snowflake — allowing ISVs to go live on marketplace faster without dedicated engineering resources. Suger is an integration partner. The alternative is to build each marketplace integration in-house, which typically requires significant ongoing maintenance.",
    alias:
      "Related: Partner Relationship Management (PRM) System, Usage Metering, Provisioning",
    source: "https://doc.suger.io/get-started/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Evaluating whether to build marketplace integrations in-house or use an integration partner like Suger to reduce time-to-live",
      "Understanding how Suger manages metering, entitlement, and offer creation across multiple hyperscalers on behalf of an ISV",
    ],
    context: [
      "Marketplace Onboarding",
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
      "Suger Console",
    ],
    related: [
      {
        name: "Partner Relationship Management (PRM) System",
        slug: "partner-relationship-management-prm-system",
      },
      { name: "Usage Metering", slug: "usage-metering" },
      { name: "Provisioning", slug: "provisioning" },
    ],
  },
  {
    name: "Distributor",
    tags: ["general", "cosell", "channel"],
    def: "A company that sits between an ISV and its reseller network — managing the VAR and reseller tier on the ISV's behalf rather than selling directly to end customers. Real-world examples include TD Synnex, Ingram Micro, and Pax8. Distributors aggregate demand across many resellers, handle financing and credit, and report reseller-level sales data back to the ISV via DSOR (Distribution Sell-Out Reseller Reporting). For cloud marketplace transactions, distributors transact via CPPO on AWS, MPO on Azure, and MCPO on GCP under a resale authorization from the ISV.",
    alias:
      "Related: Channel Partner Private Offer (CPPO) — AWS, Multiparty Private Offer (MPO) — Azure, Marketplace Channel Private Offer (MCPO) — GCP, Resale Authorization — AWS, DSOR (Distribution Sell-Out Reseller Reporting), Value Added Reseller (VAR)",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/channel-partner-offers.html",
    difficulty: "intermediate",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Distributors"],
    useCases: [
      "Partnering with TD Synnex, Ingram Micro, or Pax8 to reach a broad network of resellers the ISV cannot recruit and manage directly",
      "Receiving DSOR reports from a distributor to get reseller-level deal attribution and calculate accurate commissions across the multi-tier channel",
      "Granting a resale authorization to a distributor so they can create CPPOs for their reseller network on AWS Marketplace",
    ],
    context: [
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
      "Channel Programs",
      "Suger PRM",
    ],
    related: [
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
      },
      {
        name: "Multiparty Private Offer (MPO) — Azure",
        slug: "multiparty-private-offer-mpo-—-azure",
      },
      {
        name: "Marketplace Channel Private Offer (MCPO) — GCP",
        slug: "marketplace-channel-private-offer-mcpo-—-gcp",
      },
      {
        name: "Resale Authorization — AWS",
        slug: "resale-authorization-—-aws",
      },
      {
        name: "DSOR (Distribution Sell-Out Reseller Reporting)",
        slug: "dsor-distribution-sell-out-reseller-reporting",
      },
      {
        name: "Value Added Reseller (VAR)",
        slug: "value-added-reseller-var",
      },
    ],
  },
  {
    name: "Tax Details Dashboard — AWS",
    tags: ["aws"],
    def: "A self-service portal in AWS Partner Central that lets marketplace sellers view, search, filter, and download tax invoices. Covers two invoice types: listing fee invoices (AWS charges to sellers for listing fees) and customer invoices (tax invoices generated on behalf of sellers to buyers). Bulk downloads are supported, and programmatic access is available via the ListInvoiceSummaries and GetInvoicePDF APIs. Customer invoice downloads are currently available to India-based sellers only.",
    alias:
      "Azure equivalent: Marketplace Tax Management — Azure | GCP equivalent: Marketplace Tax Management — GCP",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/managing-invoices.html",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Downloading listing fee invoices for finance reconciliation and accounting",
      "Accessing customer tax invoices (India-based sellers) to provide buyers with compliant documentation",
      "Automating invoice retrieval using the ListInvoiceSummaries and GetInvoicePDF APIs",
    ],
    context: ["AWS Partner Central", "AWS Marketplace", "Finance & Billing"],
    related: [
      {
        name: "Marketplace Tax Management — Azure",
        slug: "marketplace-tax-management-—-azure",
      },
      {
        name: "Marketplace Tax Management — GCP",
        slug: "marketplace-tax-management-—-gcp",
      },
      {
        name: "Marketplace Fee / Transaction Fee",
        slug: "marketplace-fee-/-transaction-fee",
      },
    ],
  },
  {
    name: "Marketplace Tax Management — Azure",
    tags: ["azure"],
    def: "Microsoft's framework governing tax obligations on Azure Marketplace transactions. Countries and regions are split into three categories: Microsoft-managed (Microsoft calculates, collects, and remits transaction taxes on the publisher's behalf), publisher-managed (the publisher is solely responsible for tax compliance, collection, and remittance), and reseller jurisdictions (currently Brazil only, where Microsoft acts as the reseller and handles all transaction tax). Publishers must determine which model applies in each target market to maintain compliance.",
    alias:
      "AWS equivalent: Tax Details Dashboard — AWS | GCP equivalent: Marketplace Tax Management — GCP",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/tax-details-marketplace",
    difficulty: "advanced",
    category: "billing",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Determining whether Microsoft or the publisher is responsible for collecting and remitting VAT or GST in a given market before expanding Azure listings to new regions",
      "Assessing publisher-side tax compliance requirements in publisher-managed jurisdictions",
    ],
    context: [
      "Azure Marketplace",
      "Microsoft Partner Center",
      "Finance & Billing",
    ],
    related: [
      {
        name: "Tax Details Dashboard — AWS",
        slug: "tax-details-dashboard-—-aws",
      },
      {
        name: "Marketplace Tax Management — GCP",
        slug: "marketplace-tax-management-—-gcp",
      },
      {
        name: "Marketplace Fee / Transaction Fee",
        slug: "marketplace-fee-/-transaction-fee",
      },
    ],
  },
  {
    name: "Marketplace Tax Management — GCP",
    tags: ["gcp"],
    def: "Google Cloud Marketplace's Agency Transaction model for tax, defined in the Marketplace Vendor Agreement. Where both the vendor's and buyer's countries qualify as Agency Jurisdictions, Google collects applicable taxes from buyers and remits them to tax authorities on the vendor's behalf. Vendors are required to notify Google if they have independent tax collection obligations in any jurisdiction. Google may withhold taxes and provide withholding certificates where local law requires.",
    alias:
      "AWS equivalent: Tax Details Dashboard — AWS | Azure equivalent: Marketplace Tax Management — Azure",
    source: "https://cloud.google.com/terms/marketplace-agency-jurisdictions",
    difficulty: "advanced",
    category: "billing",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Determining whether GCP's Agency Transaction model covers tax collection for a transaction in a given jurisdiction",
      "Identifying markets where vendor-side tax obligations remain even when GCP collects taxes under the agency model",
    ],
    context: ["GCP Marketplace", "Google Cloud Console", "Finance & Billing"],
    related: [
      {
        name: "Tax Details Dashboard — AWS",
        slug: "tax-details-dashboard-—-aws",
      },
      {
        name: "Marketplace Tax Management — Azure",
        slug: "marketplace-tax-management-—-azure",
      },
      {
        name: "Marketplace Fee / Transaction Fee",
        slug: "marketplace-fee-/-transaction-fee",
      },
    ],
  },
  {
    name: "Amazon EventBridge Marketplace Integration — AWS",
    tags: ["aws", "integrations"],
    def: "AWS's event-driven integration mechanism for SaaS Marketplace products. When a buyer subscribes, amends, or cancels, EventBridge sends events to the seller's default event bus using the source `aws.agreement-marketplace`. Sellers configure rules and targets (Lambda, Step Functions, API Gateway) to trigger provisioning and deprovisioning logic. EventBridge is the future direction for SaaS notification handling; existing SNS integrations continue to function, and new listings will eventually transition to EventBridge — no hard cutover date has been announced.",
    alias:
      "Replacing: Amazon SNS Marketplace Notifications — AWS | Related: SaaS Fulfillment API — Azure, Pub/Sub — GCP",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/saas-eventbridge-integration.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Triggering tenant provisioning automatically when a buyer's Purchase Agreement Created event is received from EventBridge",
      "Starting the 1-hour final usage reporting window by reacting to the License Deprovisioned - Manufacturer event before entitlements are revoked",
      "Replacing legacy SNS-based subscription notification handling by migrating SaaS product integration to EventBridge rules",
    ],
    context: [
      "AWS Marketplace",
      "AWS Seller SaaS Integration",
      "EventBridge Console",
      "AWS Lambda",
    ],
    related: [
      {
        name: "SaaS Fulfillment API — Azure",
        slug: "saas-fulfillment-api-—-azure",
      },
      { name: "Pub/Sub — GCP", slug: "pub/sub-—-gcp" },
      { name: "Usage Metering", slug: "usage-metering" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "Registration Token — AWS",
    tags: ["aws", "integrations"],
    def: "A short-lived token (`x-amzn-marketplace-token`) that AWS sends to a SaaS seller's landing page via HTTP POST when a buyer clicks Subscribe. The seller must exchange this token for a permanent CustomerIdentifier by calling the ResolveCustomer API — only then can metering begin. Tokens expire quickly and cannot be reused.",
    alias:
      "Related: Landing Page / Signup URL, ResolveCustomer API — AWS, Signup URL Redirect",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/saas-integrate-subscription.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Implementing the SaaS subscription onboarding flow by exchanging the registration token for a CustomerIdentifier on the seller's landing page",
      "Debugging failed SaaS subscriptions by checking whether the token was exchanged before metering began",
    ],
    context: [
      "AWS Marketplace SaaS Integration",
      "Seller Landing Page",
      "AWS Marketplace Metering Service",
    ],
    related: [
      { name: "Landing Page / Signup URL", slug: "landing-page-/-signup-url" },
      { name: "Signup URL Redirect", slug: "signup-url-redirect" },
      {
        name: "SaaS Fulfillment API — Azure",
        slug: "saas-fulfillment-api-—-azure",
      },
    ],
  },
  {
    name: "ResolveCustomer API — AWS",
    tags: ["aws", "integrations"],
    def: "An AWS Marketplace Metering Service API call that exchanges a buyer's temporary registration token for a permanent CustomerIdentifier, CustomerAWSAccountId, LicenseArn, and ProductCode. Required as the first step in all SaaS subscription and contract integrations — sellers must call this before provisioning access or sending metering records.",
    alias:
      "Related: Registration Token — AWS, BatchMeterUsage API — AWS, GetEntitlements API — AWS",
    source:
      "https://docs.aws.amazon.com/marketplacemetering/latest/APIReference/API_ResolveCustomer.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Exchanging the registration token for a permanent CustomerIdentifier during the SaaS onboarding flow so the seller can begin metering",
      "Storing the CustomerAWSAccountId and ProductCode returned by ResolveCustomer for use in future metering and entitlement API calls",
    ],
    context: [
      "AWS Marketplace Metering Service",
      "AWS Marketplace SaaS Integration",
      "Seller Backend",
    ],
    related: [
      { name: "Registration Token — AWS", slug: "registration-token-—-aws" },
      { name: "BatchMeterUsage API — AWS", slug: "batchmeterusage-api-—-aws" },
      { name: "GetEntitlements API — AWS", slug: "getentitlements-api-—-aws" },
      { name: "Landing Page / Signup URL", slug: "landing-page-/-signup-url" },
    ],
  },
  {
    name: "BatchMeterUsage API — AWS",
    tags: ["aws", "integrations"],
    def: "The AWS Marketplace Metering Service API that sellers call hourly to report usage consumption for SaaS subscription and SaaS contract products. Records are submitted per CustomerIdentifier and dimension, de-duplicated on the hour, and used to generate buyer invoices. Sellers must send final records within a 1-hour window after receiving a License Deprovisioned event before entitlements are revoked.",
    alias:
      "AWS equivalent of: Service Control API — GCP, Marketplace Metering Service API — Azure | Related: ResolveCustomer API — AWS, Usage Metering, Metered Billing",
    source:
      "https://docs.aws.amazon.com/marketplacemetering/latest/APIReference/API_BatchMeterUsage.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Reporting hourly SaaS usage records to AWS so buyers are billed for consumption on metered dimensions",
      "Submitting final usage records within the 1-hour window after a License Deprovisioned event to ensure all consumption is billed before access is revoked",
    ],
    context: [
      "AWS Marketplace Metering Service",
      "AWS Marketplace SaaS Integration",
      "Seller Backend",
    ],
    related: [
      { name: "ResolveCustomer API — AWS", slug: "resolvecustomer-api-—-aws" },
      { name: "GetEntitlements API — AWS", slug: "getentitlements-api-—-aws" },
      { name: "Usage Metering", slug: "usage-metering" },
      { name: "Service Control API — GCP", slug: "service-control-api-—-gcp" },
    ],
  },
  {
    name: "GetEntitlements API — AWS",
    tags: ["aws", "integrations"],
    def: "An AWS Marketplace Entitlement Service API that returns the quantity and dimensions a buyer is entitled to under a SaaS Contract. Sellers call this after resolving a customer to verify what the buyer has purchased, and again when they receive an `entitlement-updated` SNS notification (or the `License Updated - Manufacturer` EventBridge event from `aws.agreement-marketplace`) to check for contract changes. Only applicable to SaaS Contract products — PAYG/subscription products do not use entitlements.",
    alias:
      "Related: ResolveCustomer API — AWS, Amazon EventBridge Marketplace Integration — AWS, Entitlement",
    source:
      "https://docs.aws.amazon.com/marketplaceentitlement/latest/APIReference/API_GetEntitlements.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Verifying the buyer's contracted quantity and dimensions at onboarding by calling GetEntitlements after resolving the registration token",
      "Reacting to an entitlement-updated SNS notification by calling GetEntitlements to check whether a contract was upgraded, renewed, or cancelled",
    ],
    context: [
      "AWS Marketplace Entitlement Service",
      "AWS Marketplace SaaS Contract Integration",
      "Seller Backend",
    ],
    related: [
      { name: "ResolveCustomer API — AWS", slug: "resolvecustomer-api-—-aws" },
      { name: "BatchMeterUsage API — AWS", slug: "batchmeterusage-api-—-aws" },
      { name: "Entitlement", slug: "entitlement" },
      {
        name: "Amazon EventBridge Marketplace Integration — AWS",
        slug: "amazon-eventbridge-marketplace-integration-—-aws",
      },
    ],
  },
  {
    name: "SaaS Subscription Pricing — AWS",
    tags: ["aws", "billing"],
    def: "An AWS Marketplace SaaS pricing model where buyers pay hourly for actual usage with no upfront contract commitment. Sellers report usage via BatchMeterUsage and buyers are billed based on custom metering dimensions. Also called Pay-As-You-Go (PAYG). Does not use entitlement SNS topics or the GetEntitlements API — only subscription notifications apply. Note: AWS is migrating new SaaS product listings from SNS to Amazon EventBridge for subscription notifications; existing SNS integrations continue to function but new listings use EventBridge.",
    alias:
      "Also called: Pay-As-You-Go (PAYG) | Azure equivalent: SaaS flat-rate with metered billing | Related: SaaS Contract Pricing — AWS, Metered Billing, PAYG / Pay-as-you-go",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/saas-pricing-models.html",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Listing a consumption-based SaaS product on AWS Marketplace where buyers pay only for what they use with no upfront commitment",
      "Choosing between SaaS Subscription (PAYG) and SaaS Contract pricing when planning a new AWS Marketplace listing",
    ],
    context: [
      "AWS Marketplace",
      "AWS Marketplace Management Portal (AMMP)",
      "SaaS Product Setup",
    ],
    related: [
      {
        name: "SaaS Contract Pricing — AWS",
        slug: "saas-contract-pricing-—-aws",
      },
      { name: "Metered Billing", slug: "metered-billing" },
      { name: "PAYG / Pay-as-you-go", slug: "payg-/-pay-as-you-go" },
      { name: "BatchMeterUsage API — AWS", slug: "batchmeterusage-api-—-aws" },
    ],
  },
  {
    name: "SaaS Contract Pricing — AWS",
    tags: ["aws", "billing"],
    def: "An AWS Marketplace SaaS pricing model where buyers pay upfront — or on a flexible installment schedule — for defined entitlements (quantity × dimension). Includes SaaS Contracts (no consumption overage) and SaaS Contracts with Pay-As-You-Go (contract entitlement plus metered overage billing). Entitlements are verified via GetEntitlements and changes are notified via `entitlement-updated` SNS events.",
    alias:
      "Variant: SaaS Contracts with Pay-As-You-Go | Related: SaaS Subscription Pricing — AWS, Agreement — AWS, Flexible Payment Schedule / Installment Plan",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/saas-pricing-models.html",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Listing a SaaS product with upfront or installment-based pricing on AWS Marketplace where buyers purchase defined entitlements",
      "Structuring a contract with consumption overage by combining a SaaS Contract base with pay-as-you-go metering above the committed quantity",
    ],
    context: [
      "AWS Marketplace",
      "AWS Marketplace Management Portal (AMMP)",
      "SaaS Product Setup",
    ],
    related: [
      {
        name: "SaaS Subscription Pricing — AWS",
        slug: "saas-subscription-pricing-—-aws",
      },
      { name: "GetEntitlements API — AWS", slug: "getentitlements-api-—-aws" },
      { name: "Agreement — AWS", slug: "agreement-—-aws" },
      {
        name: "Flexible Payment Schedule / Installment Plan",
        slug: "flexible-payment-schedule-/-installment-plan",
      },
    ],
  },
  {
    name: "Connection Webhook — Azure",
    tags: ["azure", "integrations"],
    def: "A publisher-provided HTTPS endpoint that Microsoft calls to notify a SaaS seller of subscription lifecycle events. Required for all transactable SaaS offers in Microsoft Marketplace. Events include ChangePlan, ChangeQuantity, Suspend, Unsubscribe, Renew, and Reinstate. The publisher must respond with HTTP 200 within 10 seconds and then call the SaaS Fulfillment API to confirm or reject the operation.",
    alias:
      "AWS equivalent: Amazon EventBridge Marketplace Integration — AWS | GCP equivalent: Pub/Sub — GCP | Related: SaaS Fulfillment API — Azure, Subscription — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/pc-saas-fulfillment-webhook",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Implementing the required webhook endpoint to receive Microsoft's subscription lifecycle notifications for a transactable SaaS offer",
      "Handling a Suspend event by restricting buyer access until a Reinstate event confirms payment resumed",
      "Accepting or rejecting a plan change request received via webhook by calling the SaaS Fulfillment API within 10 seconds",
    ],
    context: [
      "Microsoft Marketplace",
      "Partner Center — Azure",
      "SaaS Offer Technical Configuration",
    ],
    related: [
      {
        name: "SaaS Fulfillment API — Azure",
        slug: "saas-fulfillment-api-—-azure",
      },
      { name: "Subscription — Azure", slug: "subscription-—-azure" },
      {
        name: "Amazon EventBridge Marketplace Integration — AWS",
        slug: "amazon-eventbridge-marketplace-integration-—-aws",
      },
      { name: "Pub/Sub — GCP", slug: "pub/sub-—-gcp" },
    ],
  },
  {
    name: "Marketplace Metering Service API — Azure",
    tags: ["azure", "integrations"],
    def: "Microsoft's API that publishers call to report custom usage dimensions consumed above the flat-rate base fee in a transactable SaaS or Azure Managed Application offer. Publishers POST usage events per resource, dimension, and hour to `marketplaceapi.microsoft.com`. Microsoft uses these events to bill the buyer for overage and pays the publisher. At most one event per hour per resource per dimension is accepted.",
    alias:
      "AWS equivalent: BatchMeterUsage API — AWS | GCP equivalent: Service Control API — GCP | Related: SaaS Fulfillment API — Azure, Metered Billing, Metering Dimension",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/marketplace-metering-service-apis",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Emitting custom dimension usage events to Microsoft after a buyer exhausts their flat-rate included quantity, triggering overage billing",
      "Implementing metered billing for an Azure Managed Application by POSTing usage against the managed resource group's resourceUri",
    ],
    context: [
      "Microsoft Marketplace",
      "Azure Managed Applications",
      "SaaS Offer Integration",
      "Partner Center — Azure",
    ],
    related: [
      {
        name: "SaaS Fulfillment API — Azure",
        slug: "saas-fulfillment-api-—-azure",
      },
      { name: "Metered Billing", slug: "metered-billing" },
      { name: "Metering Dimension", slug: "metering-dimension" },
      { name: "Service Control API — GCP", slug: "service-control-api-—-gcp" },
    ],
  },
  {
    name: "Standard Contract — Azure",
    tags: ["azure"],
    def: "Microsoft's standardized legal terms that publishers can adopt for their Microsoft Marketplace offers instead of writing custom terms and conditions. Customers who have accepted the Standard Contract once do not need to re-review it for new offers using it. Publishers can extend the Standard Contract with Universal Amendments (for all buyers) or Custom Amendments (targeted to specific Azure tenant IDs). Applies to SaaS, Azure Applications, Virtual Machines, Containers, and AI Apps.",
    alias:
      "AWS equivalent: Standard Contract (SCMP) — AWS | Related: End User License Agreement (EULA), Private Offer — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/standard-contract",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Simplifying the procurement process for enterprise buyers by adopting the Standard Contract so they don't need to review new legal terms for each offer",
      "Adding a Custom Amendment to the Standard Contract to include tenant-specific terms for a strategic customer without abandoning the standardized base",
    ],
    context: [
      "Microsoft Marketplace",
      "Partner Center — Azure",
      "Private Offer — Azure",
      "Offer Legal Terms",
    ],
    related: [
      {
        name: "Standard Contract (SCMP) — AWS",
        slug: "standard-contract-scmp-—-aws",
      },
      {
        name: "End User License Agreement (EULA)",
        slug: "end-user-license-agreement-eula",
      },
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
    ],
  },
  {
    name: "Flexible Billing Schedule — Azure",
    tags: ["azure", "offers"],
    def: "A Microsoft Marketplace feature that lets publishers create custom installment payment schedules — up to 70 installments with unique charge dates and amounts — inside a private offer. Available for SaaS flat-rate and Virtual Machine software reservation plans with contract durations of 1 year or longer. The buyer's invoicing cadence is unchanged; each installment appears as a separate line item. Mid-term plan changes are not supported on flexible schedule plans.",
    alias:
      "Related: Flexible Payment Schedule / Installment Plan, Private Plan — Azure, Multiparty Private Offer (MPO) — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/flexible-billing-schedule",
    difficulty: "advanced",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers", "Channel Partners"],
    useCases: [
      "Aligning a multi-year SaaS deal to a buyer's budget cycle by configuring a custom installment schedule inside a private offer",
      "Structuring a channel partner deal with a 0 USD immediate charge and back-loaded payments to match the end customer's cash flow preferences",
    ],
    context: [
      "Microsoft Marketplace",
      "Partner Center — Azure",
      "Private Offer — Azure",
      "Multiparty Private Offer (MPO) — Azure",
    ],
    related: [
      {
        name: "Flexible Payment Schedule / Installment Plan",
        slug: "flexible-payment-schedule-/-installment-plan",
      },
      { name: "Private Plan — Azure", slug: "private-plan-—-azure" },
      {
        name: "Multiparty Private Offer (MPO) — Azure",
        slug: "multiparty-private-offer-mpo-—-azure",
      },
      { name: "Subscription — Azure", slug: "subscription-—-azure" },
    ],
  },
  {
    name: "Concurrent Agreements — AWS",
    tags: ["aws"],
    def: "An AWS Marketplace capability (required for all new SaaS products from June 1, 2026) that allows a single AWS account to hold multiple active agreements for the same product simultaneously. Before this feature, a buyer could only have one active agreement per product per account. Sellers must migrate from Amazon SNS to Amazon EventBridge for subscription notifications before concurrent agreements support is activated, and must update their SaaS integration to use LicenseArn as the primary key (replacing CustomerIdentifier) in ResolveCustomer, GetEntitlements, and BatchMeterUsage API calls. Each concurrent agreement carries a unique LicenseArn, which is now the authoritative identifier for routing metering records and provisioning decisions. Event routing follows the Manufacturer/Proposer role model: License Deprovisioned events go to the Manufacturer account, while Agreement Cancellation events go to the Proposer.",
    alias:
      "Related: Agreement — AWS, SaaS Contract Pricing — AWS, ResolveCustomer API — AWS, Manufacturer / Proposer Roles — AWS",
    source:
      "https://aws.amazon.com/about-aws/whats-new/2026/02/concurrent-agreements-february/",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Updating SaaS integration logic to handle multiple active agreements on the same AWS account after the June 2026 Concurrent Agreements requirement takes effect",
      "Supporting enterprise buyers who need separate agreements for different business units within the same AWS account",
    ],
    context: [
      "AWS Marketplace SaaS Integration",
      "AWS Marketplace",
      "Seller Backend",
    ],
    related: [
      { name: "Agreement — AWS", slug: "agreement-—-aws" },
      {
        name: "SaaS Contract Pricing — AWS",
        slug: "saas-contract-pricing-—-aws",
      },
      { name: "ResolveCustomer API — AWS", slug: "resolvecustomer-api-—-aws" },
    ],
  },
  {
    name: "Agreements and Renewals Dashboard — AWS",
    tags: ["aws"],
    def: "A QuickSight-powered seller dashboard in the AWS Marketplace Management Portal (under Insights > Sales Operations) that surfaces agreement lifecycle data — active agreements, ended agreements, expiry timelines, and renewal intent — within 24 hours of signing. Sellers can filter by offer, subscriber account, CPPO flag, resale authorization, and agreement status to track renewal pipeline and spot churn risk.",
    alias:
      "Related: Agreement — AWS, Agreement-Based Offer (ABO) — AWS, AWS Marketplace Management Portal (AMMP) — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/agreements-renewals-dashboard.html",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Identifying agreements expiring in the next 30 days to proactively send renewal offers via the Agreements and Renewals Dashboard",
      "Tracking renewal intent by checking whether an ended agreement has a linked Next Agreement ID indicating the buyer renewed",
    ],
    context: [
      "AWS Marketplace Management Portal (AMMP)",
      "AWS Marketplace Insights",
      "Seller Reporting",
    ],
    related: [
      { name: "Agreement — AWS", slug: "agreement-—-aws" },
      {
        name: "Agreement-Based Offer (ABO) — AWS",
        slug: "agreement-based-offer-abo-—-aws",
      },
      {
        name: "AWS Marketplace Management Portal (AMMP) — AWS",
        slug: "aws-marketplace-management-portal-ammp-—-aws",
      },
    ],
  },
  {
    name: "AWS PrivateLink Product Delivery — AWS",
    tags: ["aws", "integrations"],
    def: "A product delivery method for AWS Marketplace SaaS products where buyers access the seller's service via a VPC endpoint over the Amazon private network — bypassing the public internet. Sellers create a VPC endpoint service backed by a Network Load Balancer, register it with AWS Marketplace Seller Operations, and grant access per buyer AWS account. Billing and metering remain identical to standard SaaS products.",
    alias:
      "Related: AWS Marketplace — AWS, Software-as-a-Service (SaaS), Listing",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/privatelink.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Delivering a SaaS product to security-sensitive enterprise buyers who require private network connectivity and prohibit public internet access to vendor services",
      "Configuring a VPC endpoint service with a private DNS name so buyers can connect to the seller's service using a consistent API URL across different VPCs",
    ],
    context: [
      "AWS Marketplace",
      "Amazon VPC",
      "AWS Marketplace Management Portal (AMMP)",
      "Enterprise Security Compliance",
    ],
    related: [
      { name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" },
      {
        name: "Software-as-a-Service (SaaS)",
        slug: "software-as-a-service-saas",
      },
      { name: "Listing", slug: "listing" },
    ],
  },
  {
    name: "Azure Managed Application — Azure",
    tags: ["azure"],
    def: "A Microsoft Marketplace offer type where a publisher deploys and manages Azure infrastructure resources inside the buyer's Azure subscription, but controls them via a separate managed resource group that only the publisher can modify. Unlike SaaS (where the seller hosts everything), the Azure resources run in the buyer's own subscription and are visible to them — but configuration and updates are locked to the publisher. Supports metered billing via the Marketplace Metering Service API. Used for complex infrastructure solutions that need to run within the customer's environment.",
    alias:
      "Also called: Azure App Managed Plan | Related: Microsoft Marketplace — Azure, SaaS Fulfillment API — Azure, Marketplace Metering Service API — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/plan-azure-app-managed-app",
    difficulty: "advanced",
    category: "fundamentals",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers", "Azure Sales"],
    useCases: [
      "Listing an infrastructure-heavy solution that deploys into the buyer's Azure subscription while retaining publisher control over the managed resource group",
      "Implementing metered billing for an Azure Managed Application by emitting usage events against the managed resource group's resourceUri via the Marketplace Metering Service API",
    ],
    context: [
      "Microsoft Marketplace",
      "Partner Center — Azure",
      "Azure Portal",
      "Azure Resource Manager",
    ],
    related: [
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
      {
        name: "SaaS Fulfillment API — Azure",
        slug: "saas-fulfillment-api-—-azure",
      },
      {
        name: "Marketplace Metering Service API — Azure",
        slug: "marketplace-metering-service-api-—-azure",
      },
      { name: "Listing", slug: "listing" },
    ],
  },
  {
    name: "Propensity to Buy (PTB) Score",
    tags: ["suger", "cosell"],
    def: "Suger's composite account intelligence score that aggregates hyperscaler engagement signals (AWS, Azure, GCP), marketplace purchase history, AI-powered search activity, and third-party technographic data (BuiltWith) into a single High / Medium / Low indicator per account. High means the account ranks in the top cohort of all customers for marketplace purchase likelihood; Medium is the middle cohort; Low is below the median. Sales and alliances teams use the PTB Score in the Suger Console to prioritize which accounts are most worth pursuing for co-sell outreach or inbound referral response.",
    alias:
      "AWS: AWS Intelligence Signals — AWS | Azure: Azure Intelligence Signals — Azure | GCP: GCP Intelligence Signals — GCP | Related: CRM Enrichment",
    source: "https://doc.suger.io/integrations/salesforce/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers", "Suger Users"],
    useCases: [
      "Prioritizing which accounts to target for co-sell outreach by filtering the Suger Console to show only High PTB Score accounts",
      "Focusing ISV-initiated ACE submissions on accounts with High PTB scores to maximize the likelihood of AWS field engagement on those opportunities",
    ],
    context: ["Suger Console", "Suger Co-sell Module", "Salesforce", "HubSpot"],
    related: [
      {
        name: "AWS Intelligence Signals — AWS",
        slug: "aws-intelligence-signals-—-aws",
      },
      {
        name: "Azure Intelligence Signals — Azure",
        slug: "azure-intelligence-signals-—-azure",
      },
      {
        name: "GCP Intelligence Signals — GCP",
        slug: "gcp-intelligence-signals-—-gcp",
      },
      { name: "CRM Enrichment", slug: "crm-enrichment" },
    ],
  },
  {
    name: "AWS Intelligence Signals — AWS",
    tags: ["aws", "cosell"],
    def: "A set of predictive account-level scores available in the Partner Insights dashboard in AWS Partner Central. Includes the AWS Marketplace Engagement Score (likelihood to purchase through the AWS Marketplace channel), the AWS Marketplace Solution Engagement Score (likelihood to purchase from a partner's specific listing), and the Co-sell Recommendation Score (how well the partner's solution matches AWS seller opportunities). All scores are cohort-relative: High indicates the top cohort, Medium the middle, and Low below the median. Refreshed monthly.",
    alias:
      "Azure equivalent: Azure Intelligence Signals — Azure | GCP equivalent: GCP Intelligence Signals — GCP | Related: Propensity to Buy (PTB) Score, AWS Marketplace Solution Engagement Score — AWS, Co-sell Recommendation Score — AWS",
    source:
      "https://docs.aws.amazon.com/partner-central/latest/getting-started/partner-analytics-faq.html",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Reviewing AWS Intelligence Signals before submitting outbound ACE referrals to confirm the target account shows High Marketplace Engagement or Solution Engagement",
      "Using the AWS Marketplace Solution Engagement Score to rank open pipeline by likelihood of transacting through AWS Marketplace before prioritizing co-sell effort",
    ],
    context: [
      "AWS Partner Central",
      "Partner Insights Dashboard",
      "Co-sell Programs",
      "Suger Console",
    ],
    related: [
      {
        name: "Propensity to Buy (PTB) Score",
        slug: "propensity-to-buy-ptb-score",
      },
      {
        name: "AWS Marketplace Solution Engagement Score — AWS",
        slug: "aws-marketplace-solution-engagement-score-—-aws",
      },
      {
        name: "Co-sell Recommendation Score — AWS",
        slug: "co-sell-recommendation-score-—-aws",
      },
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
    ],
  },
  {
    name: "AWS Marketplace Engagement Score — AWS",
    tags: ["aws", "cosell"],
    def: "An AWS Intelligence Signal in AWS Partner Central that predicts the likelihood of a specific customer account purchasing through AWS Marketplace as a procurement channel — not targeting any particular solution. Scored as High, Medium, Low, or '-' (indeterminate) relative to all other customers in the same cohort. Available to ISV and Software Path partners with active Marketplace listings. Refreshed monthly via the Partner Insights dashboard.",
    alias:
      "Part of: AWS Intelligence Signals — AWS | Related: AWS Marketplace Solution Engagement Score — AWS, Propensity to Buy (PTB) Score",
    source:
      "https://docs.aws.amazon.com/partner-central/latest/getting-started/partner-analytics-faq.html",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Filtering pipeline accounts by High AWS Marketplace Engagement Score to focus on buyers who are already predisposed to transact through AWS Marketplace",
      "Distinguishing between accounts likely to buy through the channel (Marketplace Engagement) versus accounts likely to buy your specific solution (Solution Engagement) when planning outreach strategy",
    ],
    context: [
      "AWS Partner Central",
      "Partner Insights Dashboard",
      "Analytics & Insights",
    ],
    related: [
      {
        name: "AWS Marketplace Solution Engagement Score — AWS",
        slug: "aws-marketplace-solution-engagement-score-—-aws",
      },
      {
        name: "AWS Intelligence Signals — AWS",
        slug: "aws-intelligence-signals-—-aws",
      },
      {
        name: "Propensity to Buy (PTB) Score",
        slug: "propensity-to-buy-ptb-score",
      },
    ],
  },
  {
    name: "AWS Marketplace Solution Engagement Score — AWS",
    tags: ["aws", "cosell"],
    def: "An AWS Intelligence Signal in AWS Partner Central that predicts the likelihood of a specific customer account purchasing from the partner's own marketplace listing — not the channel generally. Scored as High, Medium, Low, or '-' (indeterminate) relative to all accounts in the same cohort. Requires an active non-ProServe Marketplace listing and lifetime EC2 + GSS (Global Support Services, via private offers or public subscriptions) above $100. Refreshed monthly. This is the most partner-specific AWS predictive signal and is distinct from the channel-level Marketplace Engagement Score.",
    alias:
      "Part of: AWS Intelligence Signals — AWS | Related: AWS Marketplace Engagement Score — AWS, Co-sell Recommendation Score — AWS, Propensity to Buy (PTB) Score",
    source:
      "https://docs.aws.amazon.com/partner-central/latest/getting-started/partner-analytics-faq.html",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Identifying which prospect accounts have a High Solution Engagement Score before submitting outbound ACE referrals, to focus AWS field resources where deal probability is highest",
      "Monitoring month-over-month changes in Solution Engagement Scores for key accounts to detect rising intent before the account appears in inbound referrals",
    ],
    context: [
      "AWS Partner Central",
      "Partner Insights Dashboard",
      "Analytics & Insights",
    ],
    related: [
      {
        name: "AWS Intelligence Signals — AWS",
        slug: "aws-intelligence-signals-—-aws",
      },
      {
        name: "AWS Marketplace Engagement Score — AWS",
        slug: "aws-marketplace-engagement-score-—-aws",
      },
      {
        name: "Co-sell Recommendation Score — AWS",
        slug: "co-sell-recommendation-score-—-aws",
      },
      {
        name: "Propensity to Buy (PTB) Score",
        slug: "propensity-to-buy-ptb-score",
      },
    ],
  },
  {
    name: "Azure Intelligence Signals — Azure",
    tags: ["azure", "cosell"],
    def: "Account-level propensity and engagement data for Microsoft Azure, sourced from Microsoft CloudAscent — a free program available to transacting Microsoft partners. CloudAscent scores accounts using firmographic fit and behavioral buying signals, then classifies them into four propensity clusters: Act Now, Evaluate, Nurture, and Educate. Suger normalizes these signals under the field labels Azure Engagement Score, Azure Event Score, and Azure Usage Score — alongside marketplace activity metrics (Marketplace Count, Review Count, Purchase Count) — and surfaces them in the Suger Console and via CRM Enrichment.",
    alias:
      "AWS equivalent: AWS Intelligence Signals — AWS | GCP equivalent: GCP Intelligence Signals — GCP | Powered by: Microsoft CloudAscent | Related: Propensity to Buy (PTB) Score, CRM Enrichment, Azure Consumption Commitment (MACC) — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/insights/insights-customer-opportunities",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Using Azure Intelligence Signals in Suger to identify accounts in the Act Now cluster that are most likely to transact on Azure Marketplace in the near term",
      "Filtering CRM records by Azure Engagement Score to prioritize outbound co-sell motions for accounts with high Microsoft cloud affinity",
    ],
    context: [
      "Microsoft Partner Center",
      "CloudAscent",
      "Suger Console",
      "Co-sell Programs",
    ],
    related: [
      {
        name: "Propensity to Buy (PTB) Score",
        slug: "propensity-to-buy-ptb-score",
      },
      { name: "CRM Enrichment", slug: "crm-enrichment" },
      {
        name: "Azure Consumption Commitment (MACC) — Azure",
        slug: "azure-consumption-commitment-macc-—-azure",
      },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
    ],
  },
  {
    name: "GCP Intelligence Signals — GCP",
    tags: ["gcp", "cosell"],
    def: "Account-level engagement and marketplace activity data sourced from Google Cloud partner systems and surfaced in the Suger Console. Suger normalizes these signals as GCP Engagement Score alongside marketplace activity metrics including GCP Marketplace Count, GCP Marketplace Review Count, and GCP Marketplace Purchase Count. All scores use a cohort-relative High / Medium / Low ranking: High indicates the account is in the top cohort compared to all customers. Data is accessible in the Suger Console and pushable to Salesforce or HubSpot via CRM Enrichment.",
    alias:
      "AWS equivalent: AWS Intelligence Signals — AWS | Azure equivalent: Azure Intelligence Signals — Azure | Related: Propensity to Buy (PTB) Score, CRM Enrichment, Google Cloud Partner Network — GCP",
    source: "https://doc.suger.io/integrations/salesforce/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Identifying GCP-active accounts with High GCP Engagement Scores to prioritize for outbound co-sell motions via Google Cloud's Google Cloud Partner Network co-sell program",
      "Tracking GCP Marketplace Purchase Count in Salesforce via CRM Enrichment to spot accounts already transacting on GCP Marketplace who may be ready for a new offer",
    ],
    context: [
      "Google Cloud Partner Network",
      "Suger Console",
      "Co-sell Programs",
    ],
    related: [
      {
        name: "Propensity to Buy (PTB) Score",
        slug: "propensity-to-buy-ptb-score",
      },
      { name: "CRM Enrichment", slug: "crm-enrichment" },
      {
        name: "Google Cloud Partner Network — GCP",
        slug: "google-cloud-partner-network-—-gcp",
      },
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
    ],
  },
  {
    name: "CRM Enrichment",
    tags: ["suger"],
    def: "A Suger feature that automatically pushes hyperscaler engagement scores, propensity signals, and marketplace activity metrics into Salesforce and HubSpot custom fields via configurable field mappings. Runs on a 12-hour sync schedule and covers all three cloud providers: AWS (Marketplace Engagement Score, Solution Engagement Score), Azure (Engagement Score, Event Score, Usage Score), and GCP (Engagement Score, Marketplace Count, Review Count, Purchase Count). Configured inside the Suger Console under integrations — no PDM or manual export required.",
    alias:
      "Related: Propensity to Buy (PTB) Score, AWS Intelligence Signals — AWS, Azure Intelligence Signals — Azure, GCP Intelligence Signals — GCP",
    source: "https://doc.suger.io/integrations/salesforce/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Configuring CRM Enrichment in Suger to push AWS Solution Engagement Scores and Azure Engagement Scores into Salesforce Account fields so sales reps can prioritize outreach without leaving their CRM",
      "Setting up HubSpot CRM Enrichment to automatically populate marketplace activity metrics (Purchase Count, Review Count) on Contact records for accounts already transacting on cloud marketplaces",
    ],
    context: ["Suger Console", "Salesforce", "HubSpot", "CRM Integration"],
    related: [
      {
        name: "Propensity to Buy (PTB) Score",
        slug: "propensity-to-buy-ptb-score",
      },
      {
        name: "AWS Intelligence Signals — AWS",
        slug: "aws-intelligence-signals-—-aws",
      },
      {
        name: "Azure Intelligence Signals — Azure",
        slug: "azure-intelligence-signals-—-azure",
      },
      {
        name: "GCP Intelligence Signals — GCP",
        slug: "gcp-intelligence-signals-—-gcp",
      },
      { name: "Suger Console", slug: "suger-console" },
    ],
  },
  // TD1 2026-05-19 — 16 net-new terms approved
  {
    name: "Marketplace Capacity Drawdown (MCD) — Snowflake",
    tags: ["snowflake", "billing"],
    def: "Snowflake's committed spend mechanism for Marketplace purchases, generally available February 2026. Enterprises pre-commit to Snowflake Marketplace consumption capacity; purchases of participating listings draw down against that committed capacity rather than incurring incremental charges. MCD is the Snowflake-native equivalent of AWS EDP, Azure MACC, and GCP CUD — it is the primary commercial lever for enterprise Snowflake Marketplace procurement.",
    alias:
      "AWS equivalent: Enterprise Discount Program (EDP) — AWS | Azure equivalent: Azure Consumption Commitment (MACC) — Azure | GCP equivalent: Committed Use Discount (CUD) — GCP | Related: Snowflake Marketplace — Snowflake, Cloud Committed Spend (CCS)",
    source:
      "https://docs.snowflake.com/en/collaboration/collaboration-listings-about",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Positioning a Snowflake Marketplace listing as MCD-eligible to reach enterprise buyers who want purchases to draw down their committed Snowflake capacity",
      "Configuring MCD participation for a listing to unlock access to Snowflake enterprise procurement motions",
      "Comparing Snowflake MCD eligibility against EDP, MACC, and CUD requirements when planning cross-platform committed spend strategy",
    ],
    context: [
      "Snowflake Marketplace",
      "Snowflake Partner Programs",
      "Enterprise Procurement",
      "Cloud Committed Spend",
    ],
    related: [
      {
        name: "Snowflake Marketplace — Snowflake",
        slug: "snowflake-marketplace-—-snowflake",
      },
      {
        name: "Enterprise Discount Program (EDP) — AWS",
        slug: "enterprise-discount-program-edp-—-aws",
      },
      {
        name: "Azure Consumption Commitment (MACC) — Azure",
        slug: "azure-consumption-commitment-macc-—-azure",
      },
      {
        name: "Committed Use Discount (CUD) — GCP",
        slug: "committed-use-discount-cud-—-gcp",
      },
      {
        name: "Cloud Committed Spend (CCS)",
        slug: "cloud-committed-spend-ccs",
      },
    ],
  },
  {
    name: "Referral Confidence Score — Azure",
    tags: ["azure", "cosell"],
    def: "An ML-generated signal in Microsoft Partner Center that scores the quality and likelihood of progression for each co-sell referral. Launched May 2025, the score is calculated from deal attributes — customer profile, solution fit, engagement history, and pipeline velocity — and surfaces directly on the referral detail view. Higher-scoring referrals are prioritized by Microsoft field teams for engagement, making the score a practical filter for where to concentrate co-sell effort.",
    alias:
      "AWS equivalent: Co-sell Recommendation Score — AWS | GCP equivalent: GCP Intelligence Signals — GCP | Related: Azure Intelligence Signals — Azure, Referral, Inbound Referral",
    source: "https://learn.microsoft.com/en-us/partner-center/co-sell-overview",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Azure Sales", "Partner Managers"],
    useCases: [
      "Filtering co-sell referrals in Partner Center by Referral Confidence Score to prioritize deals most likely to receive active Microsoft field engagement",
      "Using confidence score trends to diagnose deal quality issues — low scores may indicate incomplete solution profiles or poor customer fit",
      "Comparing Referral Confidence Score against AWS Co-sell Recommendation Score to align cross-cloud co-sell prioritization in a unified pipeline",
    ],
    context: [
      "Microsoft Partner Center",
      "Azure Co-sell",
      "Co-sell Pipeline Management",
      "Referral Management",
    ],
    related: [
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
      {
        name: "Co-sell Recommendation Score — AWS",
        slug: "co-sell-recommendation-score-—-aws",
      },
      {
        name: "Azure Intelligence Signals — Azure",
        slug: "azure-intelligence-signals-—-azure",
      },
      { name: "Referral", slug: "referral" },
      { name: "Inbound Referral", slug: "inbound-referral" },
    ],
  },
  {
    name: "Microsoft Commerce Incentive (MCI) — Azure",
    tags: ["azure", "cosell"],
    def: "Microsoft's consolidated partner incentive program that replaced multiple legacy programs (OCAS, OSA Sell, etc.) starting October 2022. MCI pays Azure partners and co-sell ISVs performance-based rewards — including marketplace transact co-sell bonuses — based on monthly ACR (Azure Consumed Revenue) generated through eligible sales motions. For co-sell ISVs, MCI is the incentive mechanism that motivates Microsoft field teams to engage on deals where an ISV's solution is Co-sell Incentivized, making it the Azure structural equivalent of AWS's SaaS Co-sell Benefit (SCB).",
    alias:
      "AWS equivalent: SaaS Co-sell Benefit (SCB) — AWS | Related: Co-sell Eligible / Incentivized — Azure, Marketplace Rewards — Azure, Microsoft AI Cloud Partner Program (MPN) — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/incentives/incentives-get-started-intro",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Azure Sales", "Partner Managers"],
    useCases: [
      "Understanding why achieving Co-sell Incentivized status triggers active Microsoft field engagement — MCI is the financial mechanism that compensates Microsoft sellers for co-selling your solution",
      "Tracking MCI payments in Partner Center to measure the commercial value of co-sell activity and correlate deal support to program participation",
      "Comparing MCI to AWS SCB when explaining to executives why ISV co-sell programs are strategically important to the hyperscaler, not just to the ISV",
    ],
    context: [
      "Microsoft Partner Center",
      "Azure Co-sell",
      "Partner Incentive Programs",
      "Microsoft AI Cloud Partner Program (MPN)",
    ],
    related: [
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
      {
        name: "SaaS Co-sell Benefit (SCB) — AWS",
        slug: "saas-co-sell-benefit-scb-—-aws",
      },
      {
        name: "Marketplace Rewards — Azure",
        slug: "marketplace-rewards-—-azure",
      },
      {
        name: "Microsoft AI Cloud Partner Program (MPN) — Azure",
        slug: "microsoft-ai-cloud-partner-program-mpn-—-azure",
      },
    ],
  },
  {
    name: "Google Cloud Partner Innovation Fund — GCP",
    tags: ["gcp", "cosell"],
    group: "cloud-partner-funding",
    def: "A $750M Google Cloud funding commitment announced April 2026 to accelerate partner-led AI and marketplace innovation. The fund provides co-investment for qualified partners working on AI solutions, marketplace listings, and customer adoption programs, administered through Google Cloud Partner Network. It is Google Cloud's largest formal partner funding commitment and directly parallels AWS's partner funding cluster (MAP, POC Funding, PIF) as the primary mechanism for GCP to incentivize partner investment in the ecosystem.",
    alias:
      "AWS equivalent: Migration Acceleration Program (MAP) — AWS | AWS equivalent: Proof of Concept (POC) Funding — AWS | AWS equivalent: Partner Initiative Funding (PIF) — AWS | Related: Google Cloud Partner Network — GCP, Build Engagement Model — GCP, GCP Marketplace — GCP",
    source:
      "https://cloud.google.com/blog/topics/partners/how-google-cloud-partner-ecosystem-is-building-the-agentic-enterprise",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "GCP Sales", "Partner Managers"],
    useCases: [
      "Applying through Google Cloud Partner Network for co-investment to build or accelerate an AI marketplace listing on GCP",
      "Positioning a GCP co-sell motion to qualify for fund co-investment, similar to how ISVs apply for AWS MAP or POC funding",
      "Comparing GCP partner funding availability to AWS and Azure when making a cross-cloud investment decision",
    ],
    context: [
      "Google Cloud Partner Network — GCP",
      "GCP Marketplace",
      "Partner Funding Programs",
      "AI Partner Programs",
    ],
    related: [
      {
        name: "Google Cloud Partner Network — GCP",
        slug: "google-cloud-partner-network-—-gcp",
      },
      {
        name: "Build Engagement Model — GCP",
        slug: "build-engagement-model-—-gcp",
      },
      {
        name: "Migration Acceleration Program (MAP) — AWS",
        slug: "migration-acceleration-program-map-—-aws",
      },
      {
        name: "Proof of Concept (POC) Funding — AWS",
        slug: "proof-of-concept-poc-funding-—-aws",
      },
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
    ],
  },
  {
    name: "AWS Marketplace Agreements API — AWS",
    tags: ["aws", "operations"],
    def: "A programmatic API for querying and managing the full lifecycle of AWS Marketplace purchase agreements, available to both buyers and sellers. Launched May 2026, key operations include SearchAgreements, DescribeAgreement, GetAgreementTerms, GetAgreementEntitlements, ListAgreementCharges, UpdatePurchaseOrders, and SendAgreementPaymentRequest. Before this API, agreement status, terms, entitlements, and payment history could only be accessed through the AWS Marketplace Management Portal UI; the API makes these operations auditable and automatable at scale, enabling integration with procurement systems, ERP tools, and billing pipelines.",
    alias:
      "Related: Agreements and Renewals Dashboard — AWS, Agreement — AWS, AWS Marketplace Catalog API — AWS, AWS Marketplace Discovery API — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/APIReference/API_Operations_AWS_Marketplace_Agreement_Service.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers", "Suger Users"],
    useCases: [
      "Query all active agreements by buyer account or product type to build real-time subscription dashboards without using the Management Portal",
      "Automate purchase order number updates across active agreements via UpdatePurchaseOrders to sync with internal ERP systems",
      "Retrieve agreement entitlements and invoice line items programmatically for revenue reconciliation and compliance audits",
    ],
    context: [
      "AWS Marketplace Management Portal",
      "AWS Marketplace",
      "AWS SDK / AWS CLI",
      "Internal Procurement Portals",
    ],
    related: [
      { name: "Agreement — AWS", slug: "agreement-—-aws" },
      {
        name: "AWS Marketplace Catalog API — AWS",
        slug: "aws-marketplace-catalog-api-—-aws",
      },
      {
        name: "Agreements and Renewals Dashboard — AWS",
        slug: "agreements-and-renewals-dashboard-—-aws",
      },
      {
        name: "AWS Marketplace Discovery API — AWS",
        slug: "aws-marketplace-discovery-api-—-aws",
      },
    ],
  },
  {
    name: "AWS Marketplace Discovery API — AWS",
    tags: ["aws", "operations"],
    def: "A programmatic API that gives buyers, sellers, and channel partners access to AWS Marketplace product listings, pricing, offer terms, and purchase options without navigating the console. Launched April 2026 across three regions, it covers SaaS, AMI, containers, AI agents, and ML models. Key capabilities include retrieving public and private offer pricing, offer terms, and listing details, enabling sellers to embed live catalog data in external tools and buyers to build procurement workflows that query purchase options before initiating an agreement.",
    alias:
      "Related: AWS Marketplace Catalog API — AWS, AWS Marketplace Agreements API — AWS, Listing, Private Offer",
    source:
      "https://aws.amazon.com/about-aws/whats-new/2026/04/aws-marketplace-discovery-api/",
    difficulty: "advanced",
    category: "operations",
    whoFor: [
      "ISVs / Sellers",
      "Enterprise Buyers",
      "Channel Partners",
      "Suger Users",
    ],
    useCases: [
      "Embed live AWS Marketplace catalog data including current pricing and offer terms into a buyer's internal procurement portal",
      "Surface a seller's product listings and private offer details programmatically on the seller's own website without redirecting to the AWS console",
      "Build automated procurement workflows that query purchase options and offer terms before initiating a contract acceptance flow",
    ],
    context: [
      "AWS Marketplace",
      "AWS Marketplace Management Portal",
      "AWS SDK / AWS CLI",
      "Buyer Procurement Portals",
    ],
    related: [
      {
        name: "AWS Marketplace Catalog API — AWS",
        slug: "aws-marketplace-catalog-api-—-aws",
      },
      {
        name: "AWS Marketplace Agreements API — AWS",
        slug: "aws-marketplace-agreements-api-—-aws",
      },
      { name: "Listing", slug: "listing" },
      { name: "Private Offer", slug: "private-offer" },
    ],
  },
  {
    name: "Variable Payments — AWS",
    tags: ["aws", "billing"],
    def: "A contract pricing option for AWS Marketplace Professional Services private offers that lets sellers bill buyers incrementally as work is delivered, rather than requiring upfront payment or pre-scheduled installments. The seller sets a total contract cap at offer creation; once the buyer accepts, the seller submits individual payment requests specifying an amount and optional deliverables description — each request must not exceed the remaining contract balance. Unlike Flexible Payment Schedules, which define fixed amounts and dates at offer creation, variable payments are seller-initiated and tied to actual deliverables with no predetermined schedule. Available exclusively for Professional Services products.",
    alias:
      "Related: Flexible Payment Schedule / Installment Plan, Private Offer, AWS Marketplace Agreements API — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/proserv-variable-payments.html",
    difficulty: "advanced",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Bill a buyer in milestone-based increments for a multi-phase implementation engagement without locking in payment amounts at offer creation",
      "Submit a payment request tied to a specific deliverable and receive buyer approval before the charge appears on their invoice",
      "Structure a time-and-materials professional services contract through AWS Marketplace with a capped total and flexible draw-down payments",
    ],
    context: [
      "AWS Marketplace Management Portal",
      "Professional Services Offers",
      "Private Offer Flows",
    ],
    related: [
      {
        name: "Flexible Payment Schedule / Installment Plan",
        slug: "flexible-payment-schedule-/-installment-plan",
      },
      { name: "Private Offer", slug: "private-offer" },
      {
        name: "AWS Marketplace Agreements API — AWS",
        slug: "aws-marketplace-agreements-api-—-aws",
      },
    ],
  },
  {
    name: "SaaS Auto Activation — Azure",
    tags: ["azure", "operations"],
    def: "A plan-level setting in Microsoft Marketplace that decouples SaaS billing from ISV fulfillment actions, introduced May 2026. When enabled, Microsoft activates the customer's subscription and begins billing immediately upon purchase completion, then sends the ISV a Subscribe webhook event as the trigger to launch onboarding — eliminating the need for the ISV to call the Activate API manually. Previously, billing depended on the ISV issuing an activation API call after the buyer completed the landing page flow. All new SaaS plans default to auto activation ON; existing plans retain the manual activation behavior unless explicitly updated.",
    alias:
      "Related: SaaS Fulfillment API — Azure, Connection Webhook — Azure, Provisioning, Landing Page / Signup URL",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/pc-saas-fulfillment-webhook",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Launch customer onboarding workflows on receipt of the Subscribe webhook without waiting to call the Activate API manually",
      "Remove the activation API call dependency from Azure SaaS provisioning flows where governance doesn't require pre-billing confirmation",
      "Maintain manual activation for enterprise SaaS offers where provisioning must complete and be verified before billing begins",
    ],
    context: [
      "Microsoft Partner Center",
      "Azure Marketplace",
      "SaaS Fulfillment API — Azure",
      "Azure Marketplace Technical Configuration",
    ],
    related: [
      {
        name: "SaaS Fulfillment API — Azure",
        slug: "saas-fulfillment-api-—-azure",
      },
      {
        name: "Connection Webhook — Azure",
        slug: "connection-webhook-—-azure",
      },
      { name: "Provisioning", slug: "provisioning" },
      { name: "Landing Page / Signup URL", slug: "landing-page-/-signup-url" },
    ],
  },
  {
    name: "Partner-led Deal — Azure",
    tags: ["azure", "cosell"],
    def: "A co-sell deal type in Microsoft Partner Center where the ISV/partner works independently but grants Microsoft sellers read-only pipeline visibility, created by indicating 'no help required' while allowing Microsoft to view the deal. It is distinct from a co-sell deal (where active Microsoft participation is requested) and a private deal (where Microsoft has no visibility). Partner-led deals are eligible for Azure IP co-sell deal registration — and therefore co-sell incentives and MACC contribution — without requiring Microsoft seller participation, provided the deal includes an Azure IP co-sell eligible solution, is marked won, exceeds USD 25,000, and the customer account is Microsoft-managed.",
    alias:
      "Related: Co-sell Eligible / Incentivized — Azure, Referral, Outbound Referral, Azure Consumption Commitment (MACC) — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/referrals/manage-co-sell-opportunities",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Azure Sales", "Partner Managers"],
    useCases: [
      "Register a won deal for Azure IP co-sell incentives and MACC contribution without involving a Microsoft seller in the sales cycle",
      "Share pipeline visibility with Microsoft for forecasting while retaining full deal ownership and control",
      "Upgrade a partner-led deal to active co-sell mid-cycle by inviting a Microsoft seller before the deal reaches a terminal state",
    ],
    context: [
      "Microsoft Partner Center",
      "Azure Co-sell",
      "Co-sell Opportunities Workspace",
    ],
    related: [
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
      { name: "Referral", slug: "referral" },
      { name: "Outbound Referral", slug: "outbound-referral" },
      {
        name: "Azure Consumption Commitment (MACC) — Azure",
        slug: "azure-consumption-commitment-macc-—-azure",
      },
    ],
  },
  {
    name: "Business Applications Co-sell Incentive — Azure",
    tags: ["azure", "cosell"],
    def: "A co-sell incentive track in Microsoft Partner Center that applies exclusively to ISV solutions built on Dynamics 365 apps on Dataverse and Power Apps, and Dynamics 365 Operations Apps — structurally separate from Azure IP Co-sell Eligible status. Two tiers exist (Standard and Premium), both requiring active ISV Success program enrollment plus standard co-sell-ready prerequisites. Unlike Azure IP co-sell, this track does not require Azure Consumed Revenue thresholds or a reference architecture diagram; it is governed by offer type (Dynamics 365 and Power Platform only) and ISV Success enrollment. Microsoft sellers handling Dynamics 365 customer engagements are incentivized under MCI to prioritize solutions with this status.",
    alias:
      "Related: Co-sell Eligible / Incentivized — Azure, ISV Success Program — Azure, Microsoft Commerce Incentive (MCI) — Azure, AppSource — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/referrals/co-sell-requirements",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Azure Sales", "Partner Managers"],
    useCases: [
      "Qualify a Dynamics 365 or Power Apps ISV solution for Microsoft seller co-sell prioritization through the ISV Success enrollment pathway",
      "Distinguish Biz Apps co-sell requirements from Azure IP co-sell requirements when building a Microsoft Partner Center eligibility roadmap",
      "Track Standard vs. Premium co-sell incentive tier status in Partner Center for Dynamics 365 and Power Platform products",
    ],
    context: [
      "Microsoft Partner Center",
      "AppSource",
      "Dynamics 365 Ecosystem",
      "ISV Success Program",
    ],
    related: [
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
      {
        name: "ISV Success Program — Azure",
        slug: "isv-success-program-—-azure",
      },
      {
        name: "Microsoft Commerce Incentive (MCI) — Azure",
        slug: "microsoft-commerce-incentive-mci-—-azure",
      },
      { name: "AppSource — Azure", slug: "appsource-—-azure" },
    ],
  },
  {
    name: "Azure Consumed Revenue (ACR) — Azure",
    tags: ["azure", "cosell", "billing"],
    def: "The total Azure service consumption, measured in dollars, generated by a customer within their Azure subscriptions and attributed to the partner whose solution drives that consumption. ACR is Microsoft's primary metric for measuring partner impact in the Azure ecosystem — it determines co-sell incentive eligibility, Solutions Partner with certified software designation thresholds, and forms the basis of PRACR reporting. Unlike direct revenue metrics, ACR measures downstream cloud spend that a partner's SaaS or IP solution drives in the customer environment, making it a proxy for customer success and Azure platform commitment.",
    alias:
      "Related: Partner Reported Azure Consumed Revenue (PRACR) — Azure | Related: Azure Consumption Commitment (MACC) — Azure | Related: Co-sell Eligible / Incentivized — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/referrals/partner-reported-azure-consumed-revenue",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers", "Azure Sales"],
    useCases: [
      "Tracking downstream Azure spend attributed to your SaaS solution across customer accounts",
      "Qualifying for Solutions Partner with certified software designation based on ACR thresholds",
      "Reporting attributable customer Azure consumption to Microsoft via PRACR for co-sell incentive access",
    ],
    context: [
      "Microsoft Partner Center",
      "Azure Co-sell",
      "Solutions Partner Program",
      "PRACR Reporting",
    ],
    related: [
      {
        name: "Partner Reported Azure Consumed Revenue (PRACR) — Azure",
        slug: "partner-reported-azure-consumed-revenue-pracr-—-azure",
      },
      {
        name: "Azure Consumption Commitment (MACC) — Azure",
        slug: "azure-consumption-commitment-macc-—-azure",
      },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
    ],
  },
  {
    name: "Deal Registration — Azure",
    tags: ["azure", "cosell"],
    def: "A formal record a partner creates in Microsoft Partner Center to associate a customer opportunity with their solution and claim co-sell eligibility, including PRACR reporting rights. Microsoft reviews and approves each deal registration before it becomes eligible for co-sell incentive credits or PRACR revenue attribution. Registering a deal establishes the partner-of-record for that customer opportunity, protects against channel conflict, and gives Microsoft field sellers visibility into partner-sourced pipeline. Each approved deal registration is linked to specific customer subscription GUIDs, forming the foundation for revenue attribution in the Azure partner ecosystem.",
    alias:
      "Related: Partner Reported Azure Consumed Revenue (PRACR) — Azure | Related: Outbound Referral | Related: Partner Center — Azure | Related: Co-sell Eligible / Incentivized — Azure | Related: Microsoft Managed Account — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/referrals/manage-co-sell-opportunities",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers", "Azure Sales"],
    useCases: [
      "Registering a new customer deal in Partner Center to establish co-sell benefit and PRACR eligibility",
      "Protecting partner-of-record status on active customer deals to prevent channel conflict",
      "Meeting the PRACR prerequisite requirement before submitting monthly ACR reports",
    ],
    context: [
      "Microsoft Partner Center",
      "Azure Co-sell",
      "PRACR Reporting",
      "Azure IP Co-sell",
    ],
    related: [
      {
        name: "Partner Reported Azure Consumed Revenue (PRACR) — Azure",
        slug: "partner-reported-azure-consumed-revenue-pracr-—-azure",
      },
      { name: "Outbound Referral", slug: "outbound-referral" },
      { name: "Partner Center — Azure", slug: "partner-center-—-azure" },
      {
        name: "Microsoft Managed Account — Azure",
        slug: "microsoft-managed-account-—-azure",
      },
    ],
  },
  {
    name: "Partner Reported Azure Consumed Revenue (PRACR) — Azure",
    tags: ["azure", "cosell"],
    def: "A Microsoft program that lets qualifying ISVs self-report the Azure consumed revenue attributable to their SaaS solutions, aligning Microsoft field incentives with actual customer Azure consumption. Partners submit monthly CSV reports via Partner Center listing customer Subscription GUIDs and contract values; Microsoft calculates reportable revenue using an Estimated Azure Consumption (EAC) percentage proxy applied to monthly contract value. PRACR eligibility requires Solutions Partner with certified software designation (for Azure or Industry AI) and an approved Deal Registration for each reported deal. Participation signals partner-driven Azure impact to Microsoft's field teams and unlocks top-tier co-sell support benefits.",
    alias:
      "Related: Azure Consumed Revenue (ACR) — Azure | Related: Deal Registration — Azure | Related: Co-sell Eligible / Incentivized — Azure | Related: Partner Center — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/referrals/partner-reported-azure-consumed-revenue",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Reporting customer Azure consumption to Microsoft monthly to qualify for co-sell incentive benefits",
      "Demonstrating SaaS-driven Azure impact to unlock top-tier Microsoft field co-sell support",
      "Submitting Subscription GUIDs for active customer deals via Partner Center CSV upload",
      "Maintaining co-sell eligibility when transitioning from legacy Azure IP co-sell top-tier status",
    ],
    context: [
      "Microsoft Partner Center",
      "Azure Co-sell",
      "Solutions Partner Program",
      "Azure IP Co-sell",
    ],
    related: [
      {
        name: "Azure Consumed Revenue (ACR) — Azure",
        slug: "azure-consumed-revenue-acr-—-azure",
      },
      {
        name: "Deal Registration — Azure",
        slug: "deal-registration-—-azure",
      },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
      { name: "Partner Center — Azure", slug: "partner-center-—-azure" },
    ],
  },
  {
    name: "Agentic Earnings Hub — GCP",
    tags: ["gcp", "cosell"],
    def: "An AI-powered incentive management tool in the Google Cloud Partner Network Hub, announced at Google Cloud Next '26 (April 2026), that automates the operational side of partner incentive management. It auto-drafts statements of work, monitors consumption milestones, and auto-generates incentive claim requests. An embedded Earnings Potential Modeler maps all available GCP incentives down to individual client engagements, providing partners with contextual recommendations for maximizing earnings.",
    alias:
      "Related: Google Cloud Partner Network — GCP, Google Cloud Partner Agent — GCP, Build Engagement Model — GCP, Google Cloud Partner Innovation Fund — GCP",
    source:
      "https://cloud.google.com/blog/topics/partners/how-google-cloud-partner-ecosystem-is-building-the-agentic-enterprise",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "GCP Sales", "Partner Managers"],
    useCases: [
      "Auto-generate a GCP incentive claim request when a consumption milestone is reached without manual tracking",
      "Use the Earnings Potential Modeler to identify unmapped GCP incentives at the individual client level",
      "Auto-draft a statement of work through the Partner Network Hub to accelerate partner engagement",
    ],
    context: [
      "Google Cloud Partner Network Hub",
      "Google Cloud Partner Network — GCP",
      "Partner Incentives",
    ],
    related: [
      {
        name: "Google Cloud Partner Network — GCP",
        slug: "google-cloud-partner-network-—-gcp",
      },
      {
        name: "Google Cloud Partner Agent — GCP",
        slug: "google-cloud-partner-agent-—-gcp",
      },
      {
        name: "Build Engagement Model — GCP",
        slug: "build-engagement-model-—-gcp",
      },
    ],
  },
  {
    name: "Google Cloud Partner Agent — GCP",
    tags: ["gcp", "operations"],
    def: "An AI agent integrated into the Google Cloud Partner Network Hub, announced at Google Cloud Next '26 (April 2026), that guides partners through program workflows through natural language. It actively directs partners to next steps, summarizes complex program documentation and assets, and provides real-time coaching for completing registrations, statements of work, and co-sell workflows — all without leaving the Partner Hub. The GCP Partner Agent parallels AWS Partner Central Agents — AWS as Google Cloud's equivalent AI-native layer within its partner operations platform.",
    alias:
      "AWS equivalent: AWS Partner Central Agents — AWS | Related: Google Cloud Partner Network — GCP, Agentic Earnings Hub — GCP, Build Engagement Model — GCP",
    source:
      "https://cloud.google.com/blog/topics/partners/how-google-cloud-partner-ecosystem-is-building-the-agentic-enterprise",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "GCP Sales", "Partner Managers"],
    useCases: [
      "Get real-time coaching on completing a GCP partner registration or statement of work without navigating to separate documentation",
      "Summarize available GCP partner program incentives and next steps from within the Partner Network Hub",
      "Automate routine partner workflow tasks through natural language instructions in the Partner Hub",
    ],
    context: [
      "Google Cloud Partner Network Hub",
      "Google Cloud Partner Network — GCP",
      "GCP Co-sell Workflow",
    ],
    related: [
      {
        name: "Google Cloud Partner Network — GCP",
        slug: "google-cloud-partner-network-—-gcp",
      },
      {
        name: "Agentic Earnings Hub — GCP",
        slug: "agentic-earnings-hub-—-gcp",
      },
      {
        name: "AWS Partner Central Agents — AWS",
        slug: "aws-partner-central-agents-—-aws",
      },
    ],
  },
  {
    name: "Suger MCP Server",
    tags: ["suger", "integrations"],
    def: "A production-available server built on the Model Context Protocol (MCP) standard that lets AI assistants and agents interact with Suger's marketplace management platform through natural language. It exposes 120+ tools spanning the full Suger API surface across nine categories: Products & Offers, Buyers & Contacts, Entitlements, Metering & Usage, Billing & Revenue, Support, Operations & Auditing, Co-Sell, and Knowledge Search. An AI client connected to the Suger MCP Server can create offers, manage entitlements, report usage, pull revenue reports, and manage buyer relationships without navigating the Suger Console directly.",
    alias:
      "Related: Suger API Client, Suger Console, Insulin, Integration, AWS Partner Central Agents — AWS",
    source: "https://doc.suger.io/mcp/overview/",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Query live revenue and entitlement data through an AI assistant chat interface without switching to the Suger Console",
      "Create or update marketplace offers via natural language instructions using an MCP-compatible AI client",
      "Automate usage reporting and billing reconciliation through an AI agent connected to the Suger MCP Server",
    ],
    context: [
      "Suger API",
      "Suger Console",
      "MCP-compatible AI Clients",
      "Marketplace Operations",
    ],
    related: [
      { name: "Suger API Client", slug: "suger-api-client" },
      { name: "Suger Console", slug: "suger-console" },
      { name: "Integration", slug: "integration" },
      {
        name: "AWS Partner Central Agents — AWS",
        slug: "aws-partner-central-agents-—-aws",
      },
    ],
  },
  {
    name: "Co-Sell Insights — Suger",
    tags: ["suger", "cosell"],
    def: "An AI-powered co-sell intelligence feature within Suger that evaluates AWS Partner Central opportunity data using pre-defined triggers and surfaces actionable guidance through three card types: Warning Cards (deterministic Suger-computed alerts, such as opportunities unchanged for 30+ days), Main Insight Cards (data pulled from AWS MCP covering opportunity health, engagement scores, and POC/MDF funding eligibility), and AI Trigger Cards (context-specific recommendations for deal progression, rejection analysis, and funding requests). Co-Sell Insights is AWS-exclusive, requires AWS Partner Central 3.0 migration, and surfaces in the Suger Console co-sell tab and Suger Salesforce App.",
    alias:
      "AWS equivalent: AWS Partner Central Agents — AWS | Related: Suger Analytics, Propensity to Buy (PTB) Score, CRM Enrichment, APN Customer Engagements (ACE) — AWS",
    source: "https://doc.suger.io/cosell/co-sell-insights/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Suger Users", "Partner Managers"],
    useCases: [
      "Identify stalled AWS co-sell opportunities before they expire or are rejected by monitoring Warning Card alerts",
      "Assess POC funding or MDF eligibility on active AWS co-sell deals using Main Insight Card data from AWS MCP",
      "Act on AI-recommended next steps to advance an AWS opportunity through the partner pipeline without leaving the Suger Console",
    ],
    context: [
      "Suger Console",
      "AWS Partner Central 3.0",
      "Salesforce Integration",
      "Co-sell Pipeline",
    ],
    related: [
      { name: "Suger Analytics", slug: "suger-analytics" },
      {
        name: "Propensity to Buy (PTB) Score",
        slug: "propensity-to-buy-ptb-score",
      },
      { name: "CRM Enrichment", slug: "crm-enrichment" },
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
      {
        name: "AWS Partner Central Agents — AWS",
        slug: "aws-partner-central-agents-—-aws",
      },
      {
        name: "Co-sell Intelligence — Suger",
        slug: "co-sell-intelligence-—-suger",
      },
    ],
  },
  {
    name: "Co-sell Intelligence — Suger",
    tags: ["suger", "cosell"],
    def: "A global toggle in Suger Console → Settings → Co-sell that enables Suger to retrieve partner engagement signals from AWS, Azure, and GCP. Once enabled per cloud, it surfaces an Engagement Score (Low, Medium, or High) directly in the CRM widget for each account — a prerequisite signal layer that sits underneath higher-level features like Co-Sell Insights, which consumes this data to generate its Warning and AI Trigger cards.",
    alias:
      "Related: Co-Sell Insights — Suger, APN Customer Engagements (ACE) — AWS, CRM Enrichment",
    source: "https://doc.suger.io/cosell/cosell-configuration/",
    difficulty: "beginner",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Suger Users", "Partner Managers"],
    useCases: [
      "Enabling AWS, Azure, or GCP Signals in Settings → Co-sell so Engagement Scores appear in the CRM widget before building out co-sell automation",
      "Turning on Co-sell Intelligence as a prerequisite step before configuring Auto-Enrich or Auto-Share automations for a specific cloud partner",
    ],
    context: ["Suger Console", "Settings", "CRM Widget", "Co-sell Pipeline"],
    related: [
      { name: "Co-Sell Insights — Suger", slug: "co-sell-insights-—-suger" },
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
      { name: "CRM Enrichment", slug: "crm-enrichment" },
    ],
  },
  {
    name: "UsageRecordGroup — Suger",
    tags: ["suger", "billing"],
    def: "Suger's unified data structure for submitting metered usage to cloud marketplaces in a single normalized format. A UsageRecordGroup contains an entitlement ID, a map of dimension keys to quantities, an optional ID (max 36 characters, auto-generated if omitted), and optional UsageAllocation sub-objects for AWS cost-allocation tagging. Sellers submit records via the Suger Metering API or CSV upload through the Suger Console; Suger validates and forwards them to each cloud's native metering API — AWS BatchMeterUsage, Azure Metering Service, or GCP Service Control — abstracting the platform-specific differences into one consistent interface.",
    alias:
      "Related: Usage Record, Usage Metering, Metering Dimension, BatchMeterUsage API — AWS, Marketplace Metering Service API — Azure, Service Control API — GCP",
    source: "https://doc.suger.io/get-started/metering/",
    difficulty: "advanced",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Report per-dimension SaaS usage to AWS, Azure, and GCP marketplaces simultaneously using a single normalized API call",
      "Upload bulk usage records via CSV for a billing period through the Suger Console without calling hyperscaler metering APIs directly",
      "Convert internal usage units to marketplace-standard dimensions using Suger's dimension conversion layer before submitting a UsageRecordGroup",
    ],
    context: [
      "Suger Metering API",
      "Suger Console",
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
    ],
    related: [
      { name: "Usage Record", slug: "usage-record" },
      { name: "Usage Metering", slug: "usage-metering" },
      { name: "Metering Dimension", slug: "metering-dimension" },
      { name: "BatchMeterUsage API — AWS", slug: "batchmeterusage-api-—-aws" },
    ],
  },
  {
    name: "Suger Buyer Service",
    tags: ["suger"],
    def: "A dedicated procurement management portal within Suger for enterprise buyers to manage the cloud marketplace purchasing lifecycle — separate from the ISV-facing Suger Console. It covers five stages: creating purchase requests, routing them through internal review and approval workflows, receiving and accepting vendor private offers, managing active entitlements post-purchase, and tracking invoices and payments. Supports AWS, Azure, GCP, and Alibaba marketplaces.",
    alias:
      "Related: Suger Console, Entitlement, Buyer, Buyer Wallet, Private Offer",
    source: "https://doc.suger.io/as-buyer/buyer-journey/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["Enterprise Buyers", "Suger Users"],
    useCases: [
      "Run an internal approval workflow before accepting a vendor's AWS Marketplace private offer",
      "Centralize entitlement management and invoice tracking across AWS marketplace purchases in one portal",
      "Provide procurement teams visibility into cloud marketplace spend without granting access to the ISV-facing Suger Console",
    ],
    context: [
      "Suger Platform",
      "AWS Marketplace",
      "Enterprise Procurement",
      "Private Offer Flows",
    ],
    related: [
      { name: "Suger Console", slug: "suger-console" },
      { name: "Entitlement", slug: "entitlement" },
      { name: "Buyer", slug: "buyer" },
      { name: "Private Offer", slug: "private-offer" },
    ],
  },
  {
    name: "Insulin",
    tags: ["suger"],
    def: "Suger's AI-powered workspace embedded in the Suger Console, designed for ISVs operating across cloud marketplaces. Provides an AI chat interface with streaming responses and tool execution, specialized agents for marketplace tasks, shared team channels for multi-user collaboration, and Jobs — automated recurring agent runs that fire on a schedule or in response to external events. A built-in Skills & Marketplace catalog lets users install pre-built agents and instruction files with a single click.",
    alias:
      "Related: Insulin Agent — Suger, Insulin Jobs — Suger, Insulin Channel — Suger, Insulin Skill — Suger, Insulin Marketplace — Suger",
    source: "https://doc.suger.io/insulin/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users", "Partner Managers"],
    useCases: [
      "Using Insulin's specialized agents to automate marketplace workflows such as offer creation, co-sell referral submission, or entitlement tracking",
      "Setting up Jobs to run recurring agent tasks — like monitoring deal status changes or triggering notifications — without manual intervention",
      "Installing pre-built skills from the Insulin marketplace catalog to give agents specialized knowledge about specific marketplace workflows",
    ],
    context: ["Suger Console", "AI Workspace", "Marketplace Automation"],
    related: [
      { name: "Insulin Agent — Suger", slug: "insulin-agent-—-suger" },
      { name: "Insulin Jobs — Suger", slug: "insulin-jobs-—-suger" },
      { name: "Insulin Channel — Suger", slug: "insulin-channel-—-suger" },
      { name: "Insulin Skill — Suger", slug: "insulin-skill-—-suger" },
      {
        name: "Insulin Marketplace — Suger",
        slug: "insulin-marketplace-—-suger",
      },
    ],
  },
  {
    name: "Suger Chrome Extension",
    tags: ["suger", "integrations"],
    def: "A Chrome browser extension that surfaces Suger functionality in a persistent side panel without leaving the active webpage. Provides context-aware AI assistance tied to the current page, slash command skill execution, and CRM integrations — displaying live marketplace records (offers, entitlements, referrals, funding) inside Salesforce and HubSpot. Supports multi-organization switching, workflow initiation for offers and co-sell referrals, and autonomous multi-step actions that require explicit user approval before executing.",
    alias: "Related: Suger Console, Insulin, CRM Enrichment",
    source: "https://doc.suger.io/chrome-extension/quick-guide/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users", "Partner Managers"],
    useCases: [
      "Viewing live Suger offers, entitlements, and co-sell referrals inside a Salesforce deal or HubSpot contact without switching tabs",
      "Using slash commands in the Chrome side panel to trigger pre-built Suger skills and initiate marketplace workflows from any webpage",
      "Monitoring real-time notifications for offer and entitlement status changes while working in a CRM or other browser tool",
    ],
    context: [
      "Suger Console",
      "CRM Integration",
      "Salesforce",
      "HubSpot",
      "Browser Extension",
    ],
    related: [
      { name: "Suger Console", slug: "suger-console" },
      { name: "Insulin", slug: "insulin" },
      { name: "CRM Enrichment", slug: "crm-enrichment" },
    ],
  },
  {
    name: "SaaS Contracts with Pay-As-You-Go (Overages) — AWS",
    tags: ["aws", "offers", "billing"],
    def: "A SaaS pricing model that combines a committed contract (entitlement quantities purchased upfront) with unlimited overage consumption billed through the Metering API. Unlike SaaS Subscription, the buyer commits to defined quantities; unlike SaaS Contract, additional usage above the committed quantity is billed per-unit via BatchMeterUsage. Requires both the GetEntitlements API (to check contracted quantities) and the BatchMeterUsage API (to bill overages) — the only SaaS pricing model requiring both APIs simultaneously.",
    alias:
      "Related: SaaS Contract Pricing — AWS, SaaS Subscription Pricing — AWS, GetEntitlements API — AWS, BatchMeterUsage API — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/saas-contracts.html",
    difficulty: "advanced",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Pricing a SaaS product where buyers commit to a base quantity with the ability to consume additional units above that commitment",
      "Integrating both GetEntitlements and BatchMeterUsage APIs for a product that combines contract commitments with usage-based overages",
    ],
    context: [
      "AWS Marketplace",
      "SaaS Pricing Configuration",
      "Metered Billing",
    ],
    related: [
      {
        name: "SaaS Contract Pricing — AWS",
        slug: "saas-contract-pricing-—-aws",
      },
      {
        name: "SaaS Subscription Pricing — AWS",
        slug: "saas-subscription-pricing-—-aws",
      },
      { name: "GetEntitlements API — AWS", slug: "getentitlements-api-—-aws" },
      { name: "BatchMeterUsage API — AWS", slug: "batchmeterusage-api-—-aws" },
    ],
  },
  {
    name: "SaaS Free Trial — AWS",
    tags: ["aws", "offers"],
    def: "A free trial option configurable on SaaS Subscription and SaaS Contract AWS Marketplace listings. The buyer registers via the standard AMMP registration token flow; when the trial period ends, the listing automatically converts to paid or expires. The SNS `subscribe-success` notification includes an `isFreeTrialTermPresent` flag indicating an active trial, allowing ISV backends to distinguish trial from paid subscriptions during entitlement checks.",
    alias:
      "Related: SaaS Subscription Pricing — AWS, SaaS Contract Pricing — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/saas-free-trials.html",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Configuring a time-limited free trial period on an AWS Marketplace SaaS listing to lower buyer adoption friction",
      "Handling the isFreeTrialTermPresent flag in SNS notifications to track trial versus paid subscriptions in the ISV backend",
    ],
    context: [
      "AWS Marketplace",
      "SaaS Pricing Configuration",
      "Subscription Management",
    ],
    related: [
      {
        name: "SaaS Subscription Pricing — AWS",
        slug: "saas-subscription-pricing-—-aws",
      },
      {
        name: "SaaS Contract Pricing — AWS",
        slug: "saas-contract-pricing-—-aws",
      },
    ],
  },
  {
    name: "Private Marketplace — AWS",
    tags: ["aws", "procurement"],
    def: "An enterprise governance feature that allows AWS administrators to restrict which AWS Marketplace listings employees can purchase. IT and procurement teams curate an approved catalog; any listing not on the approved list is blocked at purchase time regardless of whether the employee can find it in Marketplace. Sellers can request inclusion on a buyer's Private Marketplace through the standard AWS Marketplace listing process.",
    alias: "Related: AWS Marketplace — AWS, Private Offer",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["Enterprise Buyers", "AWS Sales"],
    useCases: [
      "Configuring a Private Marketplace to restrict employee software purchases to pre-approved listings only",
      "Presenting an ISV product to an enterprise account for inclusion on their Private Marketplace approved catalog as part of a deal",
    ],
    context: ["AWS Marketplace", "Enterprise Procurement", "AWS Organizations"],
    related: [
      { name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" },
      { name: "Private Offer", slug: "private-offer" },
    ],
  },
  {
    name: "Seller Data Delivery Service (SDDS) — AWS",
    tags: ["aws", "operations"],
    def: "The current-generation data delivery pipeline for AWS Marketplace sellers, replacing the legacy Marketplace Data Feed Service (MDFS). SDDS delivers daily reports — including disbursements, subscriber activity, and usage data — to a seller-specified S3 bucket via automated batch delivery. It is the primary reporting infrastructure for sellers managing revenue reconciliation and analytics.",
    alias:
      "Replaces: Marketplace Data Feed Service (MDFS) — AWS | Related: AWS Marketplace — AWS, Disbursement",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/data-feed.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Setting up SDDS to receive daily seller reports in an S3 bucket for revenue reconciliation and buyer analytics",
      "Migrating from the legacy MDFS to SDDS as the active reporting pipeline for AWS Marketplace data",
    ],
    context: ["AWS Marketplace", "Seller Reporting", "AWS S3"],
    related: [
      {
        name: "Marketplace Data Feed Service (MDFS) — AWS",
        slug: "marketplace-data-feed-service-mdfs-—-aws",
      },
      { name: "Disbursed Amount", slug: "disbursed-amount" },
    ],
  },
  {
    name: "AWS Data Exchange — AWS",
    tags: ["aws", "offers", "integrations"],
    def: "An AWS service that enables ISVs to publish, license, and deliver data products — including datasets, APIs, Amazon S3 objects, and Amazon Redshift queries — to AWS customers via AWS Marketplace. Data Exchange listings are a distinct product type from SaaS, AMI, and container listings; subscription management is handled through the AWS Data Exchange console, not Seller Central.",
    alias: "Related: AWS Marketplace — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/data-products.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Publishing a data product (dataset or API feed) on AWS Marketplace as an AWS Data Exchange listing",
      "Accessing licensed third-party data feeds directly in AWS analytics workflows via Data Exchange subscriptions",
    ],
    context: ["AWS Marketplace", "AWS Data Exchange", "Data Products"],
    related: [{ name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" }],
  },
  {
    name: "EKS Add-On — AWS",
    tags: ["aws", "offers", "integrations"],
    def: "A container product delivery type that allows ISVs to list their software as an installable add-on directly within the Amazon EKS console. Buyers discover, purchase, and deploy the add-on from EKS cluster management without navigating the Marketplace catalog separately. Updates and versioning are managed through the EKS add-on lifecycle, not the standard container image pull workflow.",
    alias: "Related: AWS Marketplace — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/container-based-products.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Publishing a Kubernetes-native tool as an EKS Add-On to reach buyers who manage clusters through the EKS console",
      "Evaluating EKS Add-On versus standard container product listing for a networking or security tool targeting EKS users",
    ],
    context: ["AWS Marketplace", "Amazon EKS", "Container Products"],
    related: [{ name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" }],
  },
  {
    name: "Change Set — AWS",
    tags: ["aws", "operations", "integrations"],
    def: "The core operational unit of the AWS Marketplace Catalog API — a batch of one or more change requests (e.g., updating listing details, adding pricing tiers, adding versions) submitted as an atomic transaction. Amazon EventBridge emits change set lifecycle events — ChangeSetSucceeded, ChangeSetFailed, ChangeSetCancelled — from the aws.marketplace-catalog source, enabling automated pipeline monitoring of publish and update operations.",
    alias:
      "Related: AWS Marketplace Catalog API — AWS, Amazon EventBridge Marketplace Integration — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/APIReference/welcome.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Submitting a change set via the Catalog API to update listing details or pricing programmatically without using Seller Central",
      "Monitoring change set lifecycle EventBridge events to automate and track ISV publishing pipelines",
    ],
    context: [
      "AWS Marketplace",
      "Catalog API",
      "AWS Marketplace Seller Central",
    ],
    related: [
      {
        name: "AWS Marketplace Catalog API — AWS",
        slug: "aws-marketplace-catalog-api-—-aws",
      },
      {
        name: "Amazon EventBridge Marketplace Integration — AWS",
        slug: "amazon-eventbridge-marketplace-integration-—-aws",
      },
    ],
  },
  {
    name: "AWS European Sovereign Cloud Marketplace — AWS",
    tags: ["aws", "operations"],
    def: "A separate AWS Marketplace partition purpose-built for EU data sovereignty requirements, active as of 2026. ISVs must register independently from the standard AWS Marketplace — a separate seller account and listing are required even if the ISV is already registered on the main Marketplace. All data remains within EU borders and the partition operates under distinct regulatory guarantees.",
    alias: "Related: AWS Marketplace — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/what-is-marketplace.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Registering a separate seller account for the AWS European Sovereign Cloud Marketplace to serve EU data sovereignty customers",
      "Evaluating whether to list on both standard AWS Marketplace and the European Sovereign Cloud partition for enterprise EU deals",
    ],
    context: ["AWS Marketplace", "EU Sovereign Cloud", "AWS European Region"],
    related: [{ name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" }],
  },
  {
    name: "SaaS Free — AWS",
    tags: ["aws", "offers", "billing"],
    def: "An AWS Marketplace SaaS pricing model where all metering dimensions are priced at $0.00. Free SaaS products still require the full AMMP entitlement and fulfillment integration — including registration token handling, SNS subscription confirmation, and entitlement checks — even though no charge is generated. Used for freemium products or ISVs distributing tools at no cost through Marketplace.",
    alias:
      "Related: SaaS Subscription Pricing — AWS, SaaS Contract Pricing — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/saas-product-customer-experience.html",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Publishing a freemium or developer tool on AWS Marketplace at no cost while still using the standard entitlement and fulfillment integration",
      "Understanding that SaaS Free listings still require the full AMMP registration and entitlement flow despite $0 pricing",
    ],
    context: ["AWS Marketplace", "SaaS Pricing Configuration"],
    related: [
      {
        name: "SaaS Subscription Pricing — AWS",
        slug: "saas-subscription-pricing-—-aws",
      },
      {
        name: "SaaS Contract Pricing — AWS",
        slug: "saas-contract-pricing-—-aws",
      },
    ],
  },
  {
    name: "Billing Adjustment — AWS",
    tags: ["aws", "billing", "operations"],
    def: "A post-transaction correction mechanism in AWS Marketplace that allows sellers to modify charges after a transaction has been processed. Used to correct mispriced deals, apply credits, or adjust usage records after the billing cycle. Amazon EventBridge emits Billing Adjustment Completed and Billing Adjustment Failed events from the aws.marketplace-catalog source to notify ISVs of adjustment outcomes.",
    alias:
      "Related: Amazon EventBridge Marketplace Integration — AWS, Disbursement",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/buyer-private-offers.html",
    difficulty: "advanced",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Submitting a billing adjustment to correct a mispriced enterprise deal after transaction completion",
      "Monitoring Billing Adjustment EventBridge events to track adjustment status in an automated revenue operations pipeline",
    ],
    context: ["AWS Marketplace", "Billing & Revenue", "Seller Central"],
    related: [
      {
        name: "Amazon EventBridge Marketplace Integration — AWS",
        slug: "amazon-eventbridge-marketplace-integration-—-aws",
      },
      { name: "Disbursed Amount", slug: "disbursed-amount" },
    ],
  },
  {
    name: "Azure Virtual Machine Offer — Azure",
    tags: ["azure", "offers"],
    def: "A transactable Microsoft Marketplace listing type for VM-based software solutions. Pricing models include per-hour VM-core or vCPU billing, software reservation pricing (1–5 year via VMSR), and pay-as-you-go. Azure VM Offers are distinct from Azure Application offers (which include Managed Application and Solution Template plan types) and from SaaS offers.",
    alias:
      "Related: Azure Managed Application — Azure, VM Software Reservation (VMSR) — Azure, Microsoft Marketplace — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/publisher-guide-by-offer-type",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Publishing an infrastructure or security tool as an Azure VM Offer to reach buyers who provision VMs directly from Marketplace",
      "Configuring software reservation pricing on a VM Offer to offer 1- or 3-year discount tiers via VMSR",
    ],
    context: [
      "Microsoft Marketplace",
      "Partner Center — Azure",
      "Azure Portal",
    ],
    related: [
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
      {
        name: "Azure Managed Application — Azure",
        slug: "azure-managed-application-—-azure",
      },
    ],
  },
  {
    name: "VM Software Reservation (VMSR) — Azure",
    tags: ["azure", "offers", "billing"],
    def: "An ISV-configurable 1–5 year discount on VM software license fees published on Microsoft Marketplace. Buyers pay a discounted per-hour software rate in exchange for a term commitment; Azure infrastructure cost is billed separately. VMSR is supported on Resale-Enabled Offers, allowing channel partners to transact software reservations for end customers. The discounted software rate — not list price — is what Microsoft pays the ISV.",
    alias:
      "Related: Azure Virtual Machine Offer — Azure, Resale-Enabled Offer — Azure, Microsoft Marketplace — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/azure-vm-software-reservations",
    difficulty: "advanced",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers", "Channel Partners"],
    useCases: [
      "Configuring 1-year and 3-year VMSR discount tiers on a VM Offer to give enterprise buyers a term commitment discount",
      "Understanding the impact of VMSR software reservation pricing on ISV payout rates versus pay-as-you-go",
    ],
    context: [
      "Microsoft Marketplace",
      "Partner Center — Azure",
      "Azure VM Offers",
    ],
    related: [
      {
        name: "Azure Virtual Machine Offer — Azure",
        slug: "azure-virtual-machine-offer-—-azure",
      },
      {
        name: "Resale-Enabled Offer — Azure",
        slug: "resale-enabled-offer-—-azure",
      },
    ],
  },
  {
    name: "Solution Template — Azure",
    tags: ["azure", "offers"],
    def: "An Azure Application offer plan type that deploys a coordinated set of Azure resources (VMs, networking, storage, services) via an ARM template. Unlike Managed Application plans, Solution Templates are not directly transactable — they cannot be priced or purchased through Marketplace. ISVs use them to orchestrate free-to-deploy infrastructure patterns alongside a separately transactable offer.",
    alias:
      "Related: Azure Managed Application — Azure, Microsoft Marketplace — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/plan-azure-application-offer",
    difficulty: "advanced",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Publishing a Solution Template plan to deploy a multi-resource Azure environment alongside a separately transactable SaaS or VM offer",
      "Distinguishing between Solution Template (non-transactable, ARM-based) and Managed Application (transactable, ISV-managed) plan types within an Azure Application offer",
    ],
    context: [
      "Microsoft Marketplace",
      "Partner Center — Azure",
      "Azure Application Offers",
    ],
    related: [
      {
        name: "Azure Managed Application — Azure",
        slug: "azure-managed-application-—-azure",
      },
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
    ],
  },
  {
    name: "AI Apps and Agents — Azure",
    tags: ["azure", "offers"],
    def: "A dedicated Microsoft Marketplace category and certification layer for AI and agentic solutions, surfaced in Azure Portal, Azure AI Foundry, Microsoft 365 Copilot, and Teams. Publishers choose between two deployment subtypes — Azure Agents (infrastructure-side, running on Azure compute) and Microsoft 365/Copilot Agents (client-side, integrated with Microsoft 365 surfaces) — and must select an underlying transactable offer type (SaaS, Container, VM, or Azure Application) before the AI Apps and Agents category layer is applied. The Standard Contract for Cloud Marketplace was extended in March 2026 to explicitly cover AI Apps and Agents offers. ISVs listing AI solutions here gain placement in AI-native discovery surfaces alongside the standard Marketplace catalog.",
    alias:
      "Related: Microsoft Marketplace — Azure, ISV Success Program — Azure, Azure Container Offer (Kubernetes Application) — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/artificial-intelligence-apps-agents-publish",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Listing an AI agent or copilot extension in the AI Apps and Agents category to reach buyers in Azure AI Foundry and M365 Copilot surfaces",
      "Evaluating placement in the AI Apps and Agents category versus a standard SaaS offer type for an AI-native product",
    ],
    context: [
      "Microsoft Marketplace",
      "Azure AI Foundry",
      "Microsoft 365 Copilot",
    ],
    related: [
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
      {
        name: "ISV Success Program — Azure",
        slug: "isv-success-program-—-azure",
      },
    ],
  },
  {
    name: "Product Ingestion API — Azure",
    tags: ["azure", "operations", "integrations"],
    def: "Microsoft's unified REST API for programmatic offer management in Partner Center, replacing the legacy Cloud Partner Portal (CPP) API. Enables ISVs to create, update, and publish Microsoft Marketplace offers without using the Partner Center UI. Supports all transactable offer types including SaaS, Azure VM, Azure Application, and Container. The Azure equivalent of the AWS Marketplace Catalog API.",
    alias:
      "AWS equivalent: AWS Marketplace Catalog API — AWS | Related: Partner Center — Azure, Microsoft Marketplace — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/product-ingestion-api",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Using the Product Ingestion API to automate offer creation and updates in Partner Center as part of an ISV's publishing pipeline",
      "Migrating offer management scripts from the deprecated CPP API to the Product Ingestion API",
    ],
    context: [
      "Partner Center — Azure",
      "Microsoft Marketplace",
      "API Integration",
    ],
    related: [
      { name: "Partner Center — Azure", slug: "partner-center-—-azure" },
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
    ],
  },
  {
    name: "Private Offer — Azure",
    tags: ["azure", "offers"],
    group: "private-offer",
    def: "A direct ISV-to-customer custom-priced Microsoft Marketplace offer. The ISV creates a private offer in Partner Center for a specific customer, configuring a custom price, discount, or terms on top of an existing published plan. Distinct from Private Plan (a hidden plan within a published offer) and from Multiparty Private Offer (a tri-party ISV+partner+customer deal). Private Offer is the bilateral foundation on which MPO and Resale-Enabled Offers are built.",
    alias:
      "AWS equivalent: Private Offer — AWS | GCP equivalent: Private Offer — GCP | Related: Multiparty Private Offer (MPO) — Azure, Private Plan — Azure, Microsoft Marketplace — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/isv-customer-private-offers",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Creating a Private Offer in Partner Center to give a specific enterprise customer a custom price or custom terms on an existing published plan",
      "Understanding the distinction between Private Offer (ISV-to-customer), Private Plan (hidden public plan), and MPO (tri-party) on Microsoft Marketplace",
    ],
    context: [
      "Partner Center — Azure",
      "Microsoft Marketplace",
      "Enterprise Sales",
    ],
    related: [
      {
        name: "Multiparty Private Offer (MPO) — Azure",
        slug: "multiparty-private-offer-mpo-—-azure",
      },
      { name: "Private Plan — Azure", slug: "private-plan-—-azure" },
      { name: "Private Offer", slug: "private-offer" },
    ],
  },
  {
    name: "Metered Billing — Azure",
    tags: ["azure", "billing", "integrations"],
    def: "Microsoft Marketplace's consumption-based billing model for SaaS and Azure Managed Application offers. ISVs define up to 30 custom metering dimensions (e.g., API calls, active users, processed GB) and report usage via the Marketplace Metering Service API. Reported usage is billed directly to the buyer's Azure subscription. Metered billing cannot be combined with free trial offers, and dimension overage reporting must be submitted within 24 hours of the billing period end.",
    alias:
      "AWS equivalent: BatchMeterUsage API — AWS | GCP equivalent: Service Control API — GCP | Related: Marketplace Metering Service API — Azure, Metering Dimension",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/marketplace-metering-service-apis",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Configuring custom metering dimensions on a SaaS offer to bill customers based on API calls, active seats, or data processed per month",
      "Understanding the 30-dimension limit and 24-hour usage reporting deadline for Azure Marketplace metered billing",
    ],
    context: [
      "Microsoft Marketplace",
      "Partner Center — Azure",
      "Marketplace Metering Service API",
    ],
    related: [
      {
        name: "Marketplace Metering Service API — Azure",
        slug: "marketplace-metering-service-api-—-azure",
      },
      { name: "Metering Dimension", slug: "metering-dimension" },
    ],
  },
  {
    name: "Solutions Partner Designation — Azure",
    tags: ["azure", "cosell"],
    def: "Microsoft's competency-replacement program for partners, replacing Gold and Silver competencies retired September 2022. Partners earn designations by meeting a point threshold across performance, skilling, and customer success categories — assessed monthly. Designations are available across six solution areas: Azure Infrastructure, Digital & App Innovation, Data & AI, Business Applications, Modern Work, and Security. PRACR eligibility and certain co-sell benefit tiers require a Solutions Partner Designation.",
    alias:
      "Related: Partner Reported Azure Consumed Revenue (PRACR) — Azure, Microsoft AI Cloud Partner Program (MPN) — Azure, Co-sell Eligible / Incentivized — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/membership/solutions-partner-overview",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers", "Azure Sales"],
    useCases: [
      "Pursuing a Solutions Partner Designation to unlock PRACR eligibility and co-sell benefit tiers for an Azure-focused ISV",
      "Understanding that Solutions Partner Designations replaced Gold/Silver competencies and the new point-based monthly assessment process",
    ],
    context: [
      "Partner Center — Azure",
      "Azure Co-sell Programs",
      "Microsoft AI Cloud Partner Program",
    ],
    related: [
      {
        name: "Partner Reported Azure Consumed Revenue (PRACR) — Azure",
        slug: "partner-reported-azure-consumed-revenue-pracr-—-azure",
      },
      {
        name: "Microsoft AI Cloud Partner Program (MPN) — Azure",
        slug: "microsoft-ai-cloud-partner-program-mpn-—-azure",
      },
    ],
  },
  {
    name: "Agency Fee Discount for Renewals — Azure",
    tags: ["azure", "billing"],
    def: "A Microsoft Marketplace transaction fee reduction for private offer renewals. Standard private offers carry a 3% Microsoft agency fee; qualifying renewal private offers are discounted to 1.5% — a 50% reduction. The discount applies when an ISV renews an existing private offer for the same customer at renewal rather than creating a net-new private offer.",
    alias:
      "Related: Private Offer — Azure, Marketplace Rewards — Azure, Microsoft Marketplace — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/isv-customer-private-offers",
    difficulty: "advanced",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Structuring enterprise SaaS renewals as private offer renewals to qualify for the 1.5% agency fee instead of the standard 3%",
      "Calculating ISV net payout on renewal deals accounting for the reduced agency fee discount",
    ],
    context: [
      "Microsoft Marketplace",
      "Partner Center — Azure",
      "Private Offers",
    ],
    related: [
      { name: "Private Offer — Azure", slug: "private-offer-—-azure" },
      {
        name: "Marketplace Rewards — Azure",
        slug: "marketplace-rewards-—-azure",
      },
    ],
  },
  {
    name: "Standard Contract Amendment — Azure",
    tags: ["azure", "procurement"],
    def: "A publisher-specific addendum that ISVs attach to the Microsoft Standard Contract for Cloud Marketplace (SCMC) to modify or supplement standard terms. Once a SaaS or other offer is published under the Standard Contract, switching to fully custom terms is blocked — the amendment is the only customization path. ISVs commonly use amendments for data processing addenda, jurisdiction-specific clauses, or enterprise liability caps.",
    alias: "Related: Standard Contract — Azure, Standard Contract (SCMP) — AWS",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/standard-contract",
    difficulty: "advanced",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Attaching a Standard Contract Amendment to add a data processing addendum (DPA) or liability cap without switching away from the SCMC",
      "Understanding that publishing under the Standard Contract with an amendment blocks future migration to fully custom offer terms",
    ],
    context: [
      "Microsoft Marketplace",
      "Partner Center — Azure",
      "Offer Legal Terms",
    ],
    related: [
      { name: "Standard Contract — Azure", slug: "standard-contract-—-azure" },
    ],
  },
  {
    name: "CSP Private Offer — Azure",
    tags: ["azure", "offers", "channel"],
    def: "A bilateral ISV-to-CSP-partner pricing agreement on Microsoft Marketplace. The ISV sets a wholesale price for a Cloud Solution Provider (CSP) to resell to end customers; the CSP adds their own margin on top. Distinct from the standard CSP channel (list-price resell with no ISV-set wholesale price) and from Multiparty Private Offer (a tri-party ISV+partner+customer deal). Managed through a separate Private Offers tab in Partner Center and visible to authorized CSP partners in Partner Center Marketplace.",
    alias:
      "Related: Multiparty Private Offer (MPO) — Azure, Cloud Solution Provider (CSP) — Azure, Private Offer — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/csp-commercial-marketplace-offers",
    difficulty: "advanced",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Distributors"],
    useCases: [
      "Creating a CSP Private Offer to set a custom wholesale price for a trusted reseller, allowing them to add margin for customer deals",
      "Distinguishing CSP Private Offer (bilateral ISV→CSP) from MPO (tri-party) and standard CSP list-price resell",
    ],
    context: ["Partner Center — Azure", "Microsoft Marketplace", "CSP Channel"],
    related: [
      {
        name: "Multiparty Private Offer (MPO) — Azure",
        slug: "multiparty-private-offer-mpo-—-azure",
      },
      {
        name: "Cloud Solution Provider (CSP) — Azure",
        slug: "cloud-solution-provider-csp-—-azure",
      },
    ],
  },
  {
    name: "AI Agent Listing — GCP",
    tags: ["gcp", "offers"],
    def: "A first-class Google Cloud Marketplace listing type for AI agents, distinct from SaaS, VM, and Kubernetes product types. Announced at Google Cloud Next '26, AI Agent Listings allow ISVs to publish conversational and autonomous AI agents that buyers can deploy and integrate with Google Cloud AI services. Listings require an Agent Card JSON spec file and are discoverable through Google Cloud Marketplace and Google Agentspace.",
    alias:
      "Related: Agent Card — GCP, GCP Marketplace — GCP, Agentic Earnings Hub — GCP",
    source: "https://docs.cloud.google.com/marketplace/docs",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Publishing an AI agent as an AI Agent Listing on GCP Marketplace to reach buyers building with Google Cloud AI services",
      "Understanding AI Agent Listing requirements — including the Agent Card spec file — for launching an AI product on GCP Marketplace",
    ],
    context: ["GCP Marketplace", "Google Agentspace", "AI Agent Ecosystem"],
    related: [
      { name: "Agent Card — GCP", slug: "agent-card-—-gcp" },
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
      {
        name: "Agentic Earnings Hub — GCP",
        slug: "agentic-earnings-hub-—-gcp",
      },
    ],
  },
  {
    name: "Agent Card — GCP",
    tags: ["gcp", "integrations"],
    def: "A JSON specification file required to list an AI agent on Google Cloud Marketplace. The Agent Card describes the agent's capabilities, input/output schemas, authentication requirements, and supported protocols (including A2A). It is the discovery and interoperability artifact for AI agent listings — analogous to an OpenAPI spec for REST APIs.",
    alias:
      "Related: AI Agent Listing — GCP, Agent2Agent (A2A) Protocol — GCP, GCP Marketplace — GCP",
    source: "https://docs.cloud.google.com/marketplace/docs",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Creating an Agent Card JSON spec file to define the capabilities and interface of an AI agent before publishing on GCP Marketplace",
      "Ensuring the Agent Card correctly describes A2A protocol support for interoperability with Gemini Enterprise and other Google AI agents",
    ],
    context: ["GCP Marketplace", "AI Agent Listing", "AI Agent Integration"],
    related: [
      { name: "AI Agent Listing — GCP", slug: "ai-agent-listing-—-gcp" },
      {
        name: "Agent2Agent (A2A) Protocol — GCP",
        slug: "agent2agent-a2a-protocol-—-gcp",
      },
    ],
  },
  {
    name: "Agent2Agent (A2A) Protocol — GCP",
    tags: ["gcp", "integrations"],
    def: "Google's open protocol for AI agent interoperability, enabling ISV-built agents to communicate and collaborate with Gemini Enterprise and other Google AI agents in the same ecosystem. A2A agents are discoverable via Agent Cards and can participate in multi-agent workflows. ISV agents that support A2A can integrate with Google Agentspace, Vertex AI Agent Builder, and enterprise orchestration pipelines via a standardized communication interface.",
    alias:
      "Related: Agent Card — GCP, AI Agent Listing — GCP, Agentic Earnings Hub — GCP",
    source: "https://docs.cloud.google.com/marketplace/docs",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Implementing the A2A Protocol in an ISV agent to enable interoperability with Google Agentspace and Vertex AI orchestration pipelines",
      "Listing an A2A-compatible agent on GCP Marketplace as an AI Agent Listing to surface in Google AI discovery surfaces",
    ],
    context: [
      "GCP Marketplace",
      "Google Agentspace",
      "Vertex AI Agent Builder",
    ],
    related: [
      { name: "Agent Card — GCP", slug: "agent-card-—-gcp" },
      { name: "AI Agent Listing — GCP", slug: "ai-agent-listing-—-gcp" },
      {
        name: "Agentic Earnings Hub — GCP",
        slug: "agentic-earnings-hub-—-gcp",
      },
    ],
  },
  {
    name: "App Lifecycle Manager — GCP",
    tags: ["gcp", "integrations"],
    def: "An optional Google Cloud Marketplace integration layer that automates tenant provisioning, configuration, and deprovisioning for SaaS ISV backends. When a buyer purchases a listing with App Lifecycle Manager enabled, GCP sends structured lifecycle events to the ISV's registered endpoint — replacing manual Procurement API polling. Reduces integration complexity for multi-tenant SaaS architectures.",
    alias:
      "Related: Procurement API — GCP, GCP Marketplace — GCP, Producer Portal — GCP",
    source:
      "https://docs.cloud.google.com/marketplace/docs/partners/integrated-saas/backend-integration",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Configuring App Lifecycle Manager to receive structured provisioning events instead of polling the Procurement API for entitlement state changes",
      "Evaluating App Lifecycle Manager versus direct Procurement API integration for a new GCP Marketplace SaaS backend",
    ],
    context: [
      "GCP Marketplace",
      "ISV Backend Integration",
      "Producer Portal — GCP",
    ],
    related: [
      { name: "Procurement API — GCP", slug: "procurement-api-—-gcp" },
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
    ],
  },
  {
    name: "Insulin Jobs — Suger",
    tags: ["suger"],
    def: "An automated execution system within Suger Insulin that connects an Insulin Agent to a trigger and runs the agent when the trigger fires — without manual intervention. Supports three trigger modes: manual (on-demand run), cron schedule (recurring time pattern), and external push event (webhook or event signal from an external system). Renamed from Insulin Watch in 2026 to reflect expanded trigger capabilities beyond scheduled monitoring. Jobs enable ISV operations teams to automate recurring marketplace tasks — monitoring entitlements, generating reports, flagging stale co-sell referrals — as background processes that run independently of the Insulin Chat interface.",
    alias:
      "Related: Insulin Agent — Suger, Insulin Chat — Suger, Insulin Channel — Suger, Insulin Skill — Suger",
    source: "https://doc.suger.io/insulin/jobs/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["Suger Users"],
    useCases: [
      "Scheduling a recurring Insulin Agent job to scan co-sell opportunities for stale referrals every Monday morning without manual triggering",
      "Setting up an external push trigger so an Insulin Agent runs automatically when a new entitlement activates in Suger",
      "Automating weekly marketplace revenue reports by connecting a reporting agent to a cron Job that generates and delivers the output on schedule",
    ],
    context: [
      "Suger Insulin",
      "Automation Workflows",
      "Suger Console",
      "Agent Execution",
    ],
    related: [
      { name: "Insulin Agent — Suger", slug: "insulin-agent-—-suger" },
      { name: "Insulin Chat — Suger", slug: "insulin-chat-—-suger" },
      { name: "Insulin Channel — Suger", slug: "insulin-channel-—-suger" },
      { name: "Insulin Skill — Suger", slug: "insulin-skill-—-suger" },
    ],
  },
  {
    name: "Insulin Agent — Suger",
    tags: ["suger"],
    def: "The named unit of work within Suger's Insulin platform — an AI specialist with a defined role, system prompt, model configuration, and optional tool access. Insulin ships with 20+ pre-built agents organized by function (development, communication, project management, data analytics, sales CRM), and supports fully custom agent creation. Agents can be invoked manually in chat, triggered via an Insulin Job, or assigned to run within an Insulin Channel. Role-based permissions (Admin, Editor, User, Viewer) control who can edit or use each agent, with ownership transfer supported. Pre-built and community agents are available to install through the Insulin Marketplace.",
    alias:
      "Related: Insulin, Insulin Jobs — Suger, Insulin Channel — Suger, Insulin Skill — Suger, Insulin Marketplace — Suger",
    source: "https://doc.suger.io/insulin/agents/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["Suger Users", "ISVs / Sellers"],
    useCases: [
      "Invoking a pre-built Insulin Agent such as Deal Analyst to generate a co-sell briefing from Suger deal data",
      "Creating a custom Insulin Agent with specialized instructions and tools for a specific marketplace automation workflow",
    ],
    context: ["Suger Console", "Insulin Platform", "AI Workspace"],
    related: [
      { name: "Insulin", slug: "insulin" },
      { name: "Insulin Jobs — Suger", slug: "insulin-jobs-—-suger" },
      {
        name: "Insulin Channel — Suger",
        slug: "insulin-channel-—-suger",
      },
      { name: "Insulin Skill — Suger", slug: "insulin-skill-—-suger" },
      {
        name: "Insulin Marketplace — Suger",
        slug: "insulin-marketplace-—-suger",
      },
    ],
  },
  {
    name: "Insulin Channel — Suger",
    tags: ["suger"],
    def: "A persistent, multi-user and multi-agent group conversation space within Suger's Insulin platform. Channels support role-based access control and up to 20 agents simultaneously, enabling collaborative workflows where multiple team members and multiple specialized agents operate in shared context. Distinct from a direct 1:1 agent chat — Channels are designed for ongoing operational processes such as a nightly deal review or a revenue operations war room.",
    alias:
      "Related: Insulin, Insulin Agent — Suger, Insulin Jobs — Suger, Insulin Skill — Suger, Insulin Marketplace — Suger",
    source: "https://doc.suger.io/insulin/",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["Suger Users", "ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Setting up an Insulin Channel as a persistent deal review workspace where multiple team members and agents collaborate on co-sell pipeline",
      "Understanding the difference between an Insulin Channel (persistent, multi-agent, multi-user) and a direct agent chat (1:1, session-scoped)",
    ],
    context: ["Suger Console", "Insulin Platform", "AI Workspace"],
    related: [
      { name: "Insulin", slug: "insulin" },
      { name: "Insulin Agent — Suger", slug: "insulin-agent-—-suger" },
      { name: "Insulin Jobs — Suger", slug: "insulin-jobs-—-suger" },
      { name: "Insulin Skill — Suger", slug: "insulin-skill-—-suger" },
      {
        name: "Insulin Marketplace — Suger",
        slug: "insulin-marketplace-—-suger",
      },
    ],
  },
  {
    name: "Account Mapping — Suger",
    tags: ["suger", "cosell"],
    def: "A Suger feature that maps ISV CRM accounts to cloud partner accounts across AWS, Azure, and GCP to identify co-sell opportunities in the ISV's existing customer and prospect base. Shipped April 2026. Account Mapping surfaces potential co-sell engagements by finding overlaps between the ISV's pipeline and cloud partner account data — a prerequisite step before co-sell referral submission in many motions.",
    alias:
      "Related: Co-sell, APN Customer Engagements (ACE) — AWS, CRM Enrichment, Suger Console",
    source: "https://doc.suger.io/get-started/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Suger Users", "Partner Managers"],
    useCases: [
      "Running Account Mapping in Suger to identify which existing CRM accounts also have active relationships with AWS, Azure, or GCP partner teams",
      "Using Account Mapping as a prospecting tool to prioritize co-sell outreach by surfacing ISV accounts with cloud partner overlaps",
    ],
    context: ["Suger Console", "Co-sell Programs", "CRM Integration"],
    related: [
      { name: "Co-sell", slug: "co-sell" },
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
      { name: "CRM Enrichment", slug: "crm-enrichment" },
    ],
  },
  // ── TD1 2026-06-03 additions ────────────────────────────────────────
  {
    name: "Solutions Partner with Certified Software Designation — Azure",
    tags: ["azure", "cosell"],
    def: "A Microsoft partner credential introduced in 2026 that is required for net-new access to Partner Reported Azure Consumed Revenue (PRACR) and expanded co-sell incentive tiers. It is distinct from the general Solutions Partner Designation: partners must hold a transactable Microsoft Marketplace offer or qualify for IP co-sell eligibility, pass a technical interoperability audit, and maintain the credential across four solution areas (Azure, Data & AI, Digital & App Innovation, Business Applications) plus eleven Industry AI verticals. Unlike the general Solutions Partner Designation — which is assessed monthly against points — the Certified Software Designation requires a formal audit and is tied directly to the ISV's active Marketplace offer.",
    alias:
      "Related: Solutions Partner Designation — Azure | Related: Partner Reported Azure Consumed Revenue (PRACR) — Azure | Related: Co-sell Eligible / Incentivized — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/referrals/solutions-partner-certified-software-designations-introduction",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers", "Azure Sales"],
    useCases: [
      "Qualifying for PRACR reporting eligibility by completing the interoperability audit and maintaining an active transactable Marketplace offer",
      "Understanding the distinction between the general Solutions Partner Designation and the Certified Software Designation required for net-new PRACR access in 2026",
    ],
    context: [
      "Partner Center — Azure",
      "Azure Co-sell Programs",
      "Microsoft AI Cloud Partner Program",
      "PRACR Reporting",
    ],
    related: [
      {
        name: "Solutions Partner Designation — Azure",
        slug: "solutions-partner-designation-—-azure",
      },
      {
        name: "Partner Reported Azure Consumed Revenue (PRACR) — Azure",
        slug: "partner-reported-azure-consumed-revenue-pracr-—-azure",
      },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
    ],
  },
  {
    name: "Azure Container Offer (Kubernetes Application) — Azure",
    tags: ["azure", "offers"],
    def: "A transactable Azure Marketplace offer type for Kubernetes-based software deployed on Azure Kubernetes Service (AKS), using CNAB (Cloud Native Application Bundle) packaging for multi-container solutions. This replaced the legacy Docker container image offer type, which was retired in January 2024; all new container listings must use the Kubernetes Application format. Publishers choose from six predefined billing models (flat-rate monthly/annual, per-pod/core/node metered, plus custom dimension metered billing) and can optionally enable CSP resell and IP co-sell eligibility. The offer type is a certification and discovery layer — it does not deploy infrastructure directly but provides the marketplace billing and entitlement mechanics on top of the customer's existing AKS cluster.",
    alias:
      "Related: Microsoft Marketplace — Azure | Related: Plan — Azure | Related: Standard Contract Amendment — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/marketplace-containers",
    difficulty: "advanced",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Publishing a Kubernetes-native application to Azure Marketplace using CNAB packaging after the January 2024 Docker container image retirement",
      "Selecting a billing model (per-pod, per-core, or custom metered) for a containerized SaaS product transacted through Azure Marketplace",
    ],
    context: [
      "Microsoft Marketplace",
      "Partner Center — Azure",
      "Azure Kubernetes Service",
      "Offer Publishing",
    ],
    related: [
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
      { name: "Plan — Azure", slug: "plan-—-azure" },
      {
        name: "AI Apps and Agents — Azure",
        slug: "ai-apps-and-agents-—-azure",
      },
    ],
  },
  {
    name: "Estimated Azure Consumption (EAC) — Azure",
    tags: ["azure", "cosell"],
    def: "A percentage-based proxy metric that Microsoft Partner Center uses to calculate each customer's Estimated Monthly Azure Consumed Revenue for PRACR reporting. Partners configure their EAC% per eligible deal in Partner Center — it represents the proportion of the customer's monthly contract value attributable to underlying Azure infrastructure consumption. The EAC% replaces ad-hoc monthly ACR submission workflows introduced in 2026 and is set once per deal registration rather than re-submitted monthly. Microsoft applies the configured EAC% to the monthly contract value to produce the reportable ACR figure used in PRACR claims.",
    alias:
      "Related: Partner Reported Azure Consumed Revenue (PRACR) — Azure | Related: Azure Consumed Revenue (ACR) — Azure | Related: Solutions Partner with Certified Software Designation — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/referrals/how-to-update-estimated-azure-consumption",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Configuring the EAC% for each active PRACR-eligible deal in Partner Center to establish the monthly Azure consumption proxy for reporting",
      "Understanding how Microsoft translates a monthly SaaS contract value into a reportable Azure Consumed Revenue figure for co-sell incentive eligibility",
    ],
    context: [
      "Microsoft Partner Center",
      "PRACR Reporting",
      "Azure Co-sell Programs",
    ],
    related: [
      {
        name: "Partner Reported Azure Consumed Revenue (PRACR) — Azure",
        slug: "partner-reported-azure-consumed-revenue-pracr-—-azure",
      },
      {
        name: "Azure Consumed Revenue (ACR) — Azure",
        slug: "azure-consumed-revenue-acr-—-azure",
      },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
    ],
  },
  {
    name: "Partner Greenfield Program (PGP) — AWS",
    tags: ["aws", "cosell", "funding"],
    def: "A multi-year AWS co-investment program for partners building new customer acquisition practices in three priority areas: Migration and Modernization, Generative AI, and Security. PGP provides financial co-investment, enablement resources, and AWS field alignment over multiple funding cycles, targeting partners who are building net-new revenue streams rather than scaling existing ones. It is distinct from per-deal funding mechanisms like MAP (which funds customer migrations) or POC Funding (which funds pre-sales technical work) — PGP funds the partner's internal practice development and go-to-market infrastructure over a sustained period.",
    alias:
      "Related: Migration Acceleration Program (MAP) — AWS | Related: Marketing Development Funds (MDF) — AWS | Related: ISV Accelerate — AWS",
    source: "https://aws.amazon.com/partners/programs/partner-greenfield/",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers", "AWS Sales"],
    useCases: [
      "Applying for multi-year AWS co-investment to build a net-new Generative AI customer acquisition practice from scratch",
      "Accessing sustained AWS field alignment and financial support for developing a Migration and Modernization go-to-market motion",
    ],
    context: [
      "AWS Partner Central",
      "AWS Partner Funding Programs",
      "Go-to-Market Programs",
    ],
    related: [
      {
        name: "Migration Acceleration Program (MAP) — AWS",
        slug: "migration-acceleration-program-map-—-aws",
      },
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
      },
      { name: "ISV Accelerate — AWS", slug: "isv-accelerate-—-aws" },
    ],
  },
  {
    name: "Business Outcomes Xcelerator (BOX) Program — AWS",
    tags: ["aws", "cosell", "funding"],
    def: "An AWS partner program providing milestone-based financial support — up to $70,000 in combined cash incentives and AWS credits — for partners developing solutions targeted at line-of-business (LOB) buyers rather than IT infrastructure buyers. Partners receive support at defined delivery milestones (solution design, build, and go-to-market readiness) rather than as a lump-sum grant. Expanded in 2026 to include Business Consulting and Advisory Partners in addition to ISVs. BOX is distinct from MAP (migration funding) and MDF (marketing reimbursement) — it funds solution development and LOB go-to-market motion specifically.",
    alias:
      "Related: Marketing Development Funds (MDF) — AWS | Related: Partner Greenfield Program (PGP) — AWS | Related: ISV Accelerate — AWS",
    source: "https://aws.amazon.com/partners/business-outcomes/",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Applying for BOX Program milestone funding to build and go-to-market a LOB-targeted solution on AWS Marketplace",
      "Structuring a solution development plan around BOX Program milestones to access up to $70K in AWS incentives",
    ],
    context: [
      "AWS Partner Central",
      "AWS Partner Funding Programs",
      "Go-to-Market Programs",
    ],
    related: [
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
      },
      {
        name: "Partner Greenfield Program (PGP) — AWS",
        slug: "partner-greenfield-program-pgp-—-aws",
      },
      { name: "ISV Accelerate — AWS", slug: "isv-accelerate-—-aws" },
    ],
  },
  {
    name: "AWS AI Competency — Agentic AI Categories — AWS",
    tags: ["aws", "cosell"],
    def: "Three sub-categories added to the AWS AI Specialization in 2026 — Agentic AI Applications, Agentic AI Tools, and Agentic AI Consulting Services — each representing a distinct validated expertise track within the broader AI Competency. Partners earning any of these categories receive $25,000 in additional MDF per category beyond the base AI Competency benefits, plus dedicated placement on the AWS Marketplace AI Agents discovery page. These categories are part of AWS's strategy to differentiate AI-native partners building agentic workloads from general ML or analytics partners, and are independent of each other — a partner can hold one, two, or all three simultaneously.",
    alias:
      "Related: AWS Competency — AWS | Related: ISV Accelerate — AWS | Related: Marketing Development Funds (MDF) — AWS",
    source:
      "https://aws.amazon.com/blogs/apn/new-agentic-ai-categories-for-aws-ai-competency-partners/",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Pursuing an Agentic AI Applications category badge to unlock $25K in additional MDF and AWS Marketplace AI Agents page placement",
      "Understanding the distinction between base AWS AI Competency and the three 2026 Agentic AI sub-categories when planning a competency roadmap",
    ],
    context: [
      "AWS Partner Central",
      "AWS Marketplace AI Agents Page",
      "AWS Competency Program",
    ],
    related: [
      { name: "AWS Competency — AWS", slug: "aws-competency-—-aws" },
      { name: "ISV Accelerate — AWS", slug: "isv-accelerate-—-aws" },
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
      },
    ],
  },
  {
    name: "AWS Marketplace Billing Transfer — AWS",
    tags: ["aws", "billing", "offers"],
    def: "An AWS Billing and Cost Management feature announced at re:Invent 2025 that enables MSPs and channel partners to centralize AWS Marketplace billing across their end customers into a single consolidated billing account. For marketplace sellers, the key operational boundary is that their listing fees, revenue, and customer data are never transferred to or visible within the bill transfer account — the billing transfer relationship exists purely between the channel partner and the buyer's AWS account. Sellers continue to receive disbursements from AWS directly and their Marketplace data remains isolated from the channel partner's billing view.",
    alias:
      "Related: Channel Partner Private Offer (CPPO) — AWS | Related: Resale Authorization — AWS | Related: Disbursement",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/billing-transfer-faq-for-seller.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Enterprise Buyers"],
    useCases: [
      "Understanding that AWS Marketplace Billing Transfer does not expose seller revenue, fees, or customer data to the channel partner's bill transfer account",
      "Clarifying seller revenue isolation when a channel partner configures billing consolidation across end customers who have purchased marketplace listings",
    ],
    context: [
      "AWS Marketplace",
      "AWS Billing and Cost Management",
      "Channel Partner Operations",
    ],
    related: [
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
      },
      {
        name: "Resale Authorization — AWS",
        slug: "resale-authorization-—-aws",
      },
      { name: "Disbursement", slug: "disbursement" },
    ],
  },
  {
    name: "Google Cloud Partner Network Diamond Tier — GCP",
    tags: ["gcp", "cosell"],
    def: "The highest tier of the 2026 Google Cloud Partner Network (rebranded from Partner Advantage at Google Cloud Next '26), sitting above Select and Premier tiers. Diamond Tier has four specific threshold requirements: $20M in partner co-sell influenced ACV, 20 implemented customer workloads, 30 co-sell influenced opportunities, and 200 professional certifications. Partners qualifying for Diamond Tier receive priority co-sell support, exclusive Google Cloud field alignment, and the highest benefit tier in the partner program. The tier determination is outcome-based — assessed against the four thresholds — and is independent of which competencies a partner holds.",
    alias:
      "Related: Google Cloud Partner Network — GCP | Related: Google Cloud Partner Network Competency — GCP | Related: Build Engagement Model — GCP",
    source:
      "https://cloud.google.com/blog/topics/partners/introducing-google-cloud-partner-network/",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers", "GCP Sales"],
    useCases: [
      "Planning a multi-year GCP partnership roadmap against the Diamond Tier thresholds to access the highest tier of Google Cloud co-sell benefits",
      "Understanding that Diamond Tier is outcome-based (co-sell ACV, workloads, opportunities, certifications) rather than credential-based within the 2026 GCPN structure",
    ],
    context: [
      "Partner Network Hub",
      "Google Cloud Partner Network",
      "Co-sell Programs",
    ],
    related: [
      {
        name: "Google Cloud Partner Network — GCP",
        slug: "google-cloud-partner-network-—-gcp",
      },
      {
        name: "Google Cloud Partner Network Competency — GCP",
        slug: "google-cloud-partner-network-competency-—-gcp",
      },
      {
        name: "Build Engagement Model — GCP",
        slug: "build-engagement-model-—-gcp",
      },
    ],
  },
  {
    name: "Google Cloud Partner Network Competency — GCP",
    tags: ["gcp", "cosell"],
    def: "The 2026 replacement for GCP Specializations within the Google Cloud Partner Network, consisting of 21 competencies across three categories: 6 Solution Competencies (e.g., AI, Data, Infrastructure), 5 Product Competencies (tied to specific GCP services), and 10 Industry Competencies. Each competency is evaluated on two dimensions — Capacity (partner certifications and team size) and Capability (validated customer outcomes) — and is independent of GCPN tier level (Select, Premier, or Diamond). A partner can hold competencies at any tier, and competencies influence GCP Marketplace listing visibility, co-sell recommendations, and funding program access.",
    alias:
      "Related: Google Cloud Partner Network — GCP | Related: Google Cloud Partner Network Diamond Tier — GCP | Related: Build Engagement Model — GCP",
    source:
      "https://cloud.google.com/blog/topics/partners/introducing-google-cloud-partner-network/",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers", "GCP Sales"],
    useCases: [
      "Pursuing a GCP AI Solution Competency to increase GCP Marketplace listing visibility and improve co-sell recommendation eligibility",
      "Understanding that GCP Competencies replaced Specializations in 2026 and are evaluated on Capacity and Capability dimensions independent of partner tier",
    ],
    context: [
      "Partner Network Hub",
      "Google Cloud Partner Network",
      "GCP Marketplace",
      "Co-sell Programs",
    ],
    related: [
      {
        name: "Google Cloud Partner Network — GCP",
        slug: "google-cloud-partner-network-—-gcp",
      },
      {
        name: "Google Cloud Partner Network Diamond Tier — GCP",
        slug: "google-cloud-partner-network-diamond-tier-—-gcp",
      },
      {
        name: "Build Engagement Model — GCP",
        slug: "build-engagement-model-—-gcp",
      },
    ],
  },
  {
    name: "OAuth App — Suger",
    tags: ["suger", "integrations"],
    def: "Suger's machine-to-machine OAuth 2.0 credential system for authenticating external systems to the Suger API, using the client-credentials grant (RFC 6749 §4.4). An OAuth App consists of a client ID and client secret; the external system exchanges these for an RS256-signed JWT access token with a 1-hour TTL, then passes the token as a Bearer header in API requests. OAuth App is the recommended replacement for the legacy API Key ('Suger API Client') authentication method and is the correct mechanism for backend integrations, automated workflows, and CI/CD pipelines that need to call Suger APIs programmatically.",
    alias:
      "Related: Integration | Related: Workflow | Related: Suger API Client",
    source: "https://doc.suger.io/get-started/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Replacing legacy API Key authentication with an OAuth App client-credentials flow for backend systems calling the Suger API",
      "Configuring a CI/CD pipeline or automated integration to authenticate to Suger using client ID and secret with JWT token exchange",
    ],
    context: ["Suger Console", "Suger API", "Integration Setup"],
    related: [
      { name: "Integration", slug: "integration" },
      { name: "Suger API Client", slug: "suger-api-client" },
      { name: "Workflow", slug: "workflow" },
    ],
  },
  {
    name: "Usage Allocation — AWS",
    tags: ["aws", "billing"],
    def: "A cost-attribution tagging feature within the AWS Marketplace BatchMeterUsage API that lets sellers split a single customer's metered usage across multiple departments, projects, or environments. Each UsageAllocation object contains an allocated usage quantity and up to five tag key-value pairs; the tags flow through to the buyer's AWS Cost Explorer and Cost and Usage Report, enabling granular cost allocation without requiring separate AWS accounts per business unit. Usage Allocation is available only for SaaS metered products and is optional — sellers can submit BatchMeterUsage records without it. The total allocated quantity across all UsageAllocation objects in a record must equal the overall usage amount for that dimension.",
    alias:
      "Related: BatchMeterUsage API — AWS | Related: Usage Metering | Related: Metered Billing",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/metering-and-entitlement-apis.html",
    difficulty: "advanced",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Enabling enterprise buyers to allocate marketplace SaaS usage costs to specific departments or projects in AWS Cost Explorer using BatchMeterUsage allocation tags",
      "Implementing Usage Allocation in a multi-tenant SaaS product to pass per-tenant cost attribution data through to buyer AWS billing reports",
    ],
    context: [
      "AWS Marketplace Metering Service",
      "AWS Cost Explorer",
      "AWS Cost and Usage Report",
      "SaaS Integration",
    ],
    related: [
      { name: "BatchMeterUsage API — AWS", slug: "batchmeterusage-api-—-aws" },
      { name: "Usage Metering", slug: "usage-metering" },
      { name: "Metered Billing", slug: "metered-billing" },
    ],
  },
  {
    name: "Limited Release — AWS",
    tags: ["aws", "offers"],
    def: "An AWS Marketplace product lifecycle state where a listing has passed technical validation and is published, but is visible only to the seller's own AWS account and any allowlisted test accounts — not to the general marketplace catalog. Limited Release is the pre-public testing phase that allows sellers to verify buyer purchase flows, entitlement provisioning, and SaaS integration before exposing the listing publicly. Transitioning from Limited to Public requires submitting an Update Visibility Change Request, which triggers review by the AWS Seller Operations team before the listing appears in the marketplace.",
    alias:
      "Related: Change Request — AWS | Related: Listing | Related: Entitlement",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/ami-getting-started.html",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Testing the full buyer purchase and entitlement flow with internal accounts before submitting an Update Visibility Change Request to go public",
      "Understanding the Staging → Limited → Public lifecycle when preparing a first AWS Marketplace listing",
    ],
    context: [
      "AWS Marketplace Management Portal",
      "AWS Marketplace",
      "Product Publishing",
    ],
    related: [
      { name: "Listing", slug: "listing" },
      { name: "Change Request — AWS", slug: "change-request-—-aws" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "Change Request — AWS",
    tags: ["aws", "offers"],
    def: "The formal AWS Marketplace mechanism for submitting modifications to a published product — including pricing updates, version additions, region expansions, and visibility changes (Limited to Public). Change Requests are submitted either through the AWS Marketplace Management Portal UI or programmatically via the AWS Marketplace Catalog API. Processing time varies by change type: pricing and metadata updates typically complete within hours, while visibility changes and new product launches require Seller Operations review. Change Requests are product-level modifications and are distinct from agreement amendments, which modify the terms of an existing buyer contract.",
    alias:
      "Related: Limited Release — AWS | Related: AWS Marketplace Catalog API — AWS | Related: AWS Marketplace Management Portal (AMMP) — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/ami-getting-started.html",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Submitting a Change Request via the AWS Marketplace Management Portal to update pricing or add a new version to a published listing",
      "Using the Catalog API to submit Change Requests programmatically as part of a CI/CD pipeline for listing management",
    ],
    context: [
      "AWS Marketplace Management Portal",
      "AWS Marketplace Catalog API",
      "Product Publishing",
    ],
    related: [
      {
        name: "AWS Marketplace Management Portal (AMMP) — AWS",
        slug: "aws-marketplace-management-portal-ammp-—-aws",
      },
      {
        name: "AWS Marketplace Catalog API — AWS",
        slug: "aws-marketplace-catalog-api-—-aws",
      },
      { name: "Limited Release — AWS", slug: "limited-release-—-aws" },
    ],
  },
  {
    name: "Preview Audience — Azure",
    tags: ["azure", "offers"],
    def: "A Partner Center offer configuration that specifies which Azure tenant IDs or subscription IDs can access and test an offer during the Publisher Sign-off stage, before the offer is published to the live Microsoft Marketplace. Preview Audience is configured per pricing plan in the Pricing and Availability section. During Publisher Sign-off, only accounts matching the Preview Audience list can find and purchase the offer — it does not appear in the marketplace catalog. After sign-off validation, the publisher triggers Go Live to make the offer publicly available and the Preview Audience restriction is removed.",
    alias:
      "Related: Microsoft Marketplace — Azure | Related: Plan — Azure | Related: SaaS Fulfillment API — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/test-publish-saas-offer",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Configuring tenant IDs in Preview Audience to test the SaaS fulfillment integration end-to-end before triggering Go Live on a new Azure Marketplace offer",
      "Validating offer purchase flows with internal or trusted partner accounts during Publisher Sign-off without exposing the offer in the live marketplace catalog",
    ],
    context: [
      "Partner Center — Azure",
      "Microsoft Marketplace",
      "Offer Publishing",
      "Publisher Sign-off",
    ],
    related: [
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
      { name: "Plan — Azure", slug: "plan-—-azure" },
      {
        name: "SaaS Fulfillment API — Azure",
        slug: "saas-fulfillment-api-—-azure",
      },
    ],
  },
  // ── TD1 2026-06-16 batch ──
  {
    name: "Professional Services Offer — Azure",
    tags: ["azure", "offers"],
    def: "A non-transactable Azure Marketplace and AppSource offer type for listing consulting, implementation, assessment, training, and briefing services from Microsoft certified partners. Unlike SaaS or VM offers, Professional Services offers cannot be purchased directly through the marketplace checkout — they generate a contact request or lead, which initiates an offline sales engagement. Listing is available to partners with a Microsoft AI Cloud Partner Program (MPN) membership and at least one Solutions Partner Designation; co-sell eligibility for Professional Services engagements follows the Azure IP co-sell motion.",
    alias:
      "AWS equivalent: Professional Services Listing — AWS | Related: Listing, Partner Center — Azure, Solutions Partner Designation — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace/professional-services-offer-listing-best-practices",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Partner Managers"],
    useCases: [
      "Publishing implementation or migration services on Azure Marketplace to generate inbound buyer leads alongside a transactable SaaS offer",
      "Qualifying a consulting engagement for Azure IP co-sell motion by pairing a Professional Services offer with a co-sell-ready IP solution",
      "Listing briefing or assessment services in AppSource to create discovery entry points for buyers evaluating Dynamics 365 solutions",
    ],
    context: [
      "Microsoft Marketplace",
      "Azure Marketplace",
      "AppSource",
      "Partner Center — Azure",
    ],
    related: [
      { name: "Listing", slug: "listing" },
      { name: "Partner Center — Azure", slug: "partner-center-—-azure" },
      {
        name: "Solutions Partner Designation — Azure",
        slug: "solutions-partner-designation-—-azure",
      },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
    ],
  },
  {
    name: "Partner-to-Partner (P2P) Co-sell — Azure",
    tags: ["azure", "cosell"],
    def: "A Microsoft Partner Center program that enables two Microsoft partners to co-sell a combined solution to a shared enterprise customer — where one partner (the selling partner) leads the customer relationship and invites a second partner (the service partner) to collaborate on delivery or technical implementation. Unlike multiparty private offers, P2P co-sell is a referral and collaboration motion rather than a transactable deal structure; the selling partner creates a co-sell opportunity and nominates a service partner, and both accounts track shared pipeline in Partner Center. P2P deals can be co-sell eligible and count toward Microsoft Commerce Incentive (MCI) payouts for the selling partner.",
    alias:
      "AWS equivalent: Channel Partner Private Offer (CPPO) — AWS | Related: Partner-led Deal — Azure, Multiparty Private Offer (MPO) — Azure, Co-sell Eligible / Incentivized — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/referrals/p2p-overview",
    difficulty: "advanced",
    category: "cosell",
    whoFor: [
      "ISVs / Sellers",
      "Channel Partners",
      "Partner Managers",
      "Azure Sales",
    ],
    useCases: [
      "Creating a P2P co-sell opportunity in Partner Center to invite a systems integrator partner to co-deliver on an enterprise Azure deal, unlocking MCI incentives for the selling partner",
      "Accepting a P2P service partner invitation to attach your managed services or implementation practice to another ISV's Azure Marketplace transaction",
      "Tracking joint pipeline across two partner organizations in Partner Center using P2P referrals to coordinate pre-sales and delivery",
    ],
    context: [
      "Microsoft Partner Center",
      "Azure Co-sell Programs",
      "Partner-to-Partner Referrals",
      "Co-sell Pipeline",
    ],
    related: [
      { name: "Partner-led Deal — Azure", slug: "partner-led-deal-—-azure" },
      {
        name: "Multiparty Private Offer (MPO) — Azure",
        slug: "multiparty-private-offer-mpo-—-azure",
      },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
      {
        name: "Microsoft Commerce Incentive (MCI) — Azure",
        slug: "microsoft-commerce-incentive-mci-—-azure",
      },
    ],
  },
  {
    name: "Professional Services Listing — AWS",
    tags: ["aws", "offers"],
    def: "A distinct AWS Marketplace product type for selling time-bound, deliverable-based consulting, implementation, training, and managed services engagements. Unlike SaaS or AMI listings, Professional Services products do not provision software entitlements — instead, the buyer receives a statement of work or engagement scope. Private Offers for Professional Services support both Flexible Payment Schedules and Variable Payments as billing mechanisms, making them the primary vehicle for bundling advisory work alongside software on a single marketplace transaction. As of June 16, 2026, AWS reduced the listing fee for Professional Services private offers from 2.5% to 0.5%, applying to all new private offers across all AWS Regions and currencies. As of March 2026, AWS first-party Professional Services are also available as transactable listings in AWS Marketplace, marking the first time Amazon itself has offered consulting services for purchase through the marketplace alongside third-party ISV and SI listings.",
    alias:
      "Azure equivalent: Professional Services Offer — Azure | Related: Variable Payments — AWS, Flexible Payment Schedule / Installment Plan, Private Offer",
    source:
      "https://aws.amazon.com/about-aws/whats-new/2026/06/reduce-listing-fee-professional-services-aws-marketplace/",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Channel Partners"],
    useCases: [
      "Listing implementation, migration, or training services on AWS Marketplace to co-term delivery with a software purchase",
      "Applying Variable Payments to a Professional Services private offer to bill incrementally as project milestones are completed",
      "Enabling buyers to purchase advisory services through AWS Marketplace so spend counts toward their EDP committed spend",
    ],
    context: [
      "AWS Marketplace",
      "AWS Marketplace Management Portal (AMMP)",
      "Private Offers",
      "Professional Services Offers",
    ],
    related: [
      { name: "Variable Payments — AWS", slug: "variable-payments-—-aws" },
      {
        name: "Flexible Payment Schedule / Installment Plan",
        slug: "flexible-payment-schedule-/-installment-plan",
      },
      { name: "Private Offer", slug: "private-offer" },
      { name: "Listing", slug: "listing" },
    ],
  },
  {
    name: "Manufacturer / Proposer Roles — AWS",
    tags: ["aws", "integrations"],
    def: "Two distinct seller roles in the AWS Marketplace EventBridge notification model that govern which seller account receives which event types. The Manufacturer is the ISV who owns the underlying product and receives License Deprovisioned and usage-related events for final metering. The Proposer is the party — which may be the ISV or a channel partner — who creates and manages the agreement, and therefore receives Agreement Cancellation Request and SCABA-related events. In a direct sale, both roles resolve to the same account; in a CPPO transaction, the Manufacturer and Proposer are different entities, and event routing follows accordingly.",
    alias:
      "Related: Concurrent Agreements — AWS, Self-service Cancellations and Billing Adjustments (SCABA), Amazon EventBridge Marketplace Integration — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/saas-notification.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Channel Partners"],
    useCases: [
      "Configuring EventBridge subscribers to correctly route License Deprovisioned events to the Manufacturer account and Agreement Cancellation events to the Proposer account",
      "Auditing CPPO integration logic to ensure the ISV (Manufacturer) receives metering events even when a channel partner (Proposer) manages the agreement lifecycle",
      "Distinguishing Manufacturer vs. Proposer routing when debugging missing or misrouted marketplace events during concurrent agreements migration",
    ],
    context: [
      "AWS Marketplace EventBridge Integration",
      "SaaS Integration",
      "CPPO Transactions",
      "Concurrent Agreements",
    ],
    related: [
      {
        name: "Concurrent Agreements — AWS",
        slug: "concurrent-agreements-—-aws",
      },
      {
        name: "Amazon EventBridge Marketplace Integration — AWS",
        slug: "amazon-eventbridge-marketplace-integration-—-aws",
      },
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
      },
      {
        name: "Self-service Cancellations and Billing Adjustments (SCABA)",
        slug: "self-service-cancellations-and-billing-adjustments-scaba",
      },
    ],
  },
  {
    name: "License Deprovisioned Event — AWS",
    tags: ["aws", "integrations"],
    def: "An AWS Marketplace EventBridge notification sent to the Manufacturer's account when a buyer's entitlement is revoked — typically due to agreement cancellation, non-payment, or expiration. Upon receiving this event, sellers have a strict 1-hour window to submit any final usage records via the BatchMeterUsage API before the entitlement is fully deactivated; usage submitted after this window is rejected and cannot be billed. Failure to react within the window results in lost revenue for any unbilled consumption in the current metering period.",
    alias:
      "Related: Concurrent Agreements — AWS, Manufacturer / Proposer Roles — AWS, BatchMeterUsage API — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/saas-notification.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Triggering final usage record submission via BatchMeterUsage within the 1-hour window when a License Deprovisioned event is received to capture all billable consumption before access is cut",
      "Implementing an EventBridge rule that routes License Deprovisioned events to the Manufacturer account's Lambda or queue for immediate processing",
      "Testing license deprovision handling in staging to confirm no usage records are dropped during agreement cancellation scenarios",
    ],
    context: [
      "AWS Marketplace EventBridge Integration",
      "SaaS Metering Integration",
      "Entitlement Lifecycle",
      "Concurrent Agreements",
    ],
    related: [
      { name: "BatchMeterUsage API — AWS", slug: "batchmeterusage-api-—-aws" },
      {
        name: "Amazon EventBridge Marketplace Integration — AWS",
        slug: "amazon-eventbridge-marketplace-integration-—-aws",
      },
      { name: "Entitlement", slug: "entitlement" },
      {
        name: "Manufacturer / Proposer Roles — AWS",
        slug: "manufacturer-/-proposer-roles-—-aws",
      },
    ],
  },
  {
    name: "AMI Listing — AWS European Sovereign Cloud",
    tags: ["aws", "offers"],
    def: "The seller registration and publishing workflow for listing Amazon Machine Image (AMI) products on the AWS European Sovereign Cloud Marketplace — an operationally distinct process from standard AWS Marketplace AMI publishing. Sellers must register a separate AWS Marketplace seller account scoped to the EU Sovereign Cloud, re-submit AMI products through a dedicated onboarding flow, and comply with European data residency requirements (data stored exclusively in AWS EU Sovereign Regions). Only AMI products are currently supported for transactable listings in this environment; SaaS products have separate sovereign cloud considerations.",
    alias:
      "Related: Amazon Machine Image (AMI) — AWS, AWS European Sovereign Cloud Marketplace — AWS, Listing",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/eu-sovereign-cloud.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Registering a new seller account and onboarding an existing AMI product for transactable listing on the AWS European Sovereign Cloud Marketplace to reach EU public sector buyers",
      "Auditing data residency compliance requirements before publishing AMI products in EU Sovereign Cloud regions",
    ],
    context: [
      "AWS Marketplace Management Portal (AMMP)",
      "AWS European Sovereign Cloud Marketplace",
      "AMI Products",
      "EU Data Residency",
    ],
    related: [
      {
        name: "Amazon Machine Image (AMI) — AWS",
        slug: "amazon-machine-image-ami-—-aws",
      },
      {
        name: "AWS European Sovereign Cloud Marketplace — AWS",
        slug: "aws-european-sovereign-cloud-marketplace-—-aws",
      },
      { name: "Listing", slug: "listing" },
    ],
  },
  {
    name: "SageMaker Model Listing — AWS",
    tags: ["aws", "offers"],
    def: "An AWS Marketplace product type for selling pre-trained machine learning models and algorithms that buyers deploy directly into their Amazon SageMaker environment. Sellers package models as SageMaker Model Packages or Algorithm resources; buyers subscribe and deploy without seeing the underlying model artifacts. Pricing is consumption-based, typically on inference endpoint-hours or batch transform job volume, and is billed through AWS Marketplace. This listing type is distinct from SaaS or AMI products and requires SageMaker-specific onboarding through the AWS Marketplace Management Portal.",
    alias:
      "Related: Listing, Amazon Machine Image (AMI) — AWS, AWS Marketplace — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/machine-learning-products.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers"],
    useCases: [
      "Publishing a pre-trained ML model or algorithm on AWS Marketplace so data science teams can subscribe and deploy it directly in SageMaker without accessing proprietary model weights",
      "Monetizing inference capacity by packaging a model as a SageMaker Model Package with usage-based marketplace pricing",
    ],
    context: [
      "AWS Marketplace",
      "Amazon SageMaker",
      "AWS Marketplace Management Portal (AMMP)",
      "Machine Learning Products",
    ],
    related: [
      { name: "Listing", slug: "listing" },
      {
        name: "Amazon Machine Image (AMI) — AWS",
        slug: "amazon-machine-image-ami-—-aws",
      },
      { name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" },
    ],
  },
  {
    name: "'Deployed on AWS' Designation — AWS",
    tags: ["aws", "cosell"],
    def: "An AWS partner badge awarded to ISVs whose SaaS solutions are built on and delivered from AWS infrastructure, signaling to enterprise buyers that the product runs natively in the AWS cloud. The designation appears on the partner's AWS Marketplace listing and Partner Solutions Finder profile and is used to differentiate cloud-native solutions from on-premises or multi-cloud offerings in buyer discovery. Achieving this badge requires the partner to demonstrate that their production environment runs on AWS and meet a set of technical and business eligibility criteria.",
    alias: "Related: AWS Specialization — AWS, ISV Accelerate — AWS, Listing",
    source: "https://aws.amazon.com/partners/programs/deployed-on-aws/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Displaying the 'Deployed on AWS' badge on an AWS Marketplace listing to signal cloud-native architecture to enterprise buyers during product discovery",
      "Qualifying for AWS co-sell motions that require or prioritize solutions with verified AWS deployment status",
    ],
    context: [
      "AWS Marketplace",
      "AWS Partner Network (APN)",
      "Partner Solutions Finder",
      "AWS Partner Central",
    ],
    related: [
      { name: "AWS Specialization — AWS", slug: "aws-specialization-—-aws" },
      { name: "ISV Accelerate — AWS", slug: "isv-accelerate-—-aws" },
      {
        name: "AWS Partner Network (APN) — AWS",
        slug: "aws-partner-network-apn-—-aws",
      },
    ],
  },
  {
    name: "AWS Marketplace Vendor Insights",
    tags: ["aws", "general"],
    def: "An AWS Marketplace feature that gives enterprise buyers a unified security and compliance profile for a seller's SaaS product — aggregating data from AWS Security Hub, SOC 2 reports, ISO certifications, and seller-attested questionnaire responses into a single dashboard buyers can review before purchasing. Sellers who publish a Vendor Insights profile make their security posture continuously visible to buyers without repeated manual questionnaire responses; buyers can subscribe to profile updates and use the data to accelerate procurement approvals. Vendor Insights profiles are linked directly to the product listing and can be paired with AWS Specialization badges to create a dual-validation signal for compliance-sensitive buyers.",
    alias: "Related: AWS Specialization — AWS, Listing, AWS Marketplace — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/vendor-insights.html",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers", "Suger Users"],
    useCases: [
      "Publishing a Vendor Insights profile on an AWS Marketplace listing to reduce security questionnaire burden during enterprise buyer procurement cycles",
      "Subscribing to a vendor's Vendor Insights profile as an enterprise buyer to receive real-time alerts when the seller's security posture changes",
      "Pairing a Vendor Insights profile with an AWS Specialization badge to create a compliance-plus-competency trust signal for regulated industry buyers",
    ],
    context: [
      "AWS Marketplace",
      "AWS Marketplace Management Portal (AMMP)",
      "Security & Compliance",
      "Buyer Due Diligence",
    ],
    related: [
      { name: "AWS Specialization — AWS", slug: "aws-specialization-—-aws" },
      { name: "Listing", slug: "listing" },
      { name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" },
    ],
  },
  {
    name: "Limited Trial Listing — Snowflake",
    tags: ["snowflake", "offers"],
    def: "A Snowflake Marketplace listing type that gives prospective buyers time-limited or consumption-limited access to a Native App or data product without immediate payment commitment. Providers configure trial duration and access scope; when the trial expires, buyers must convert to a paid listing to retain access. Limited Trial listings are distinct from free-tier listings in that they are explicitly time-bounded and are designed as a conversion funnel entry point for paid Snowflake Marketplace transactions.",
    alias: "Related: Snowflake Marketplace — Snowflake, Free Trial, Listing",
    source:
      "https://docs.snowflake.com/en/developer-guide/native-apps/listing-on-marketplace",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Offering a time-limited trial of a Snowflake Native App to enterprise data teams before committing to a paid marketplace listing",
      "Configuring trial expiry and conversion prompts to drive paid listing adoption after a buyer evaluates the product in their own Snowflake account",
    ],
    context: [
      "Snowflake Marketplace",
      "Snowflake Partner Connect",
      "Native App Framework",
      "Listing Types",
    ],
    related: [
      {
        name: "Snowflake Marketplace — Snowflake",
        slug: "snowflake-marketplace-—-snowflake",
      },
      { name: "Free Trial", slug: "free-trial" },
      { name: "Listing", slug: "listing" },
    ],
  },
  {
    name: "Microsoft Preferred Solutions Badge — Azure",
    tags: ["azure", "cosell", "offers"],
    def: "A Microsoft Marketplace badge awarded to ISV solutions that demonstrate outstanding quality, customer impact, and alignment with Microsoft's technology priorities — evaluated annually by Microsoft solution area teams. Preferred Solutions receive increased discoverability in Azure Marketplace and AppSource search results, enhanced co-sell prioritization by Microsoft field sellers, and dedicated promotion in Microsoft sales materials. Earning the badge requires a transactable listing, active co-sell-ready status, strong customer reviews, and nomination or selection by a Microsoft solution area team.",
    alias:
      "Related: Co-sell Eligible / Incentivized — Azure, ISV Success Program — Azure, Microsoft Marketplace — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/marketplace/preferred-solutions",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Pursuing Microsoft Preferred Solutions Badge status to gain elevated marketplace search placement and Microsoft seller co-sell prioritization for a transactable Azure offer",
      "Demonstrating customer impact and solution quality metrics to Microsoft solution area teams as part of the annual Preferred Solutions evaluation cycle",
    ],
    context: [
      "Microsoft Marketplace",
      "Azure Marketplace",
      "AppSource",
      "Partner Center — Azure",
      "Co-sell Programs",
    ],
    related: [
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
      {
        name: "ISV Success Program — Azure",
        slug: "isv-success-program-—-azure",
      },
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
      {
        name: "Marketplace Rewards — Azure",
        slug: "marketplace-rewards-—-azure",
      },
    ],
  },
  {
    name: "AWS Specialization: Digital Sovereignty",
    tags: ["aws", "cosell"],
    def: "An AWS Partner specialization category recognizing ISVs and partners whose solutions help customers meet European and government data sovereignty requirements — including EU data residency, operational sovereignty (cloud management by EU-domiciled personnel), and software sovereignty (solutions deployable in on-premises or disconnected environments). Partners with this specialization gain co-sell prioritization with AWS field teams serving EU public sector, financial services, and regulated enterprise accounts, and are surfaced in the AWS European Sovereign Cloud Marketplace buyer discovery experience. Achieving the designation requires demonstrated customer deployments, technical validation, and alignment with the AWS Digital Sovereignty Pledge criteria.",
    alias:
      "Related: AWS Specialization — AWS, AWS European Sovereign Cloud Marketplace — AWS, ISV Accelerate — AWS",
    source: "https://aws.amazon.com/partners/specializations/",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers", "AWS Sales"],
    useCases: [
      "Qualifying for AWS Digital Sovereignty Specialization to unlock co-sell priority with AWS field teams targeting EU public sector and regulated enterprise accounts",
      "Positioning a solution for the AWS European Sovereign Cloud Marketplace by demonstrating compliance with data residency and operational sovereignty requirements",
    ],
    context: [
      "AWS Partner Network (APN)",
      "AWS European Sovereign Cloud Marketplace",
      "AWS Partner Central",
      "EU Public Sector Co-sell",
    ],
    related: [
      { name: "AWS Specialization — AWS", slug: "aws-specialization-—-aws" },
      {
        name: "AWS European Sovereign Cloud Marketplace — AWS",
        slug: "aws-european-sovereign-cloud-marketplace-—-aws",
      },
      { name: "ISV Accelerate — AWS", slug: "isv-accelerate-—-aws" },
    ],
  },
  {
    name: "Solution Assessment (SA) Co-sell — Azure",
    tags: ["azure", "cosell"],
    def: "A structured Microsoft co-sell engagement type where a qualified partner conducts a technical and business assessment of a customer's current environment to recommend a cloud migration or modernization roadmap on Azure. Solution Assessments are a distinct co-sell opportunity subtype in Partner Center — separate from standard IP co-sell referrals — and are funded through a separate Microsoft incentive pool. Partners must be enrolled in the Solution Assessment program and meet Microsoft-approved tooling requirements (typically using the Azure Migrate or assessment toolkits) to submit SA opportunities and claim incentive payouts.",
    alias:
      "Related: Partner-led Deal — Azure, Co-sell Eligible / Incentivized — Azure, End Customer Investment Funds (ECIF) — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/referrals/co-sell-overview",
    difficulty: "advanced",
    category: "cosell",
    whoFor: [
      "ISVs / Sellers",
      "Channel Partners",
      "Partner Managers",
      "Azure Sales",
    ],
    useCases: [
      "Submitting a Solution Assessment co-sell opportunity in Partner Center to claim Microsoft incentive funding for conducting an Azure migration readiness assessment",
      "Qualifying a partner practice for the Solution Assessment program to unlock a separate incentive track from standard IP co-sell opportunities",
    ],
    context: [
      "Microsoft Partner Center",
      "Azure Co-sell Programs",
      "Solution Assessment Program",
      "Azure Migration",
    ],
    related: [
      { name: "Partner-led Deal — Azure", slug: "partner-led-deal-—-azure" },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
      {
        name: "End Customer Investment Funds (ECIF) — Azure",
        slug: "end-customer-investment-funds-ecif-—-azure",
      },
    ],
  },
  {
    name: "Buyer Portal — Suger",
    tags: ["suger", "offers"],
    def: "A white-label, embeddable buyer self-service interface provided by Suger that gives enterprise buyers a unified dashboard to manage all their marketplace entitlements, offers, invoices, and service requests across connected cloud marketplaces. The portal has five sections — Home, Vendors, Offers, Invoices, and Requests — and is designed to be embedded in a seller's customer portal or offered as a standalone buyer-facing URL. ISVs configure branding, domain, and access controls; buyers authenticate and view their active entitlements and payment history without contacting the seller's support team.",
    alias: "Related: Suger Buyer Service, Buyer, Entitlement, Private Offer",
    source: "https://doc.suger.io/as-buyer/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers", "Suger Users"],
    useCases: [
      "Embedding the Suger Buyer Portal in a seller's customer success portal so buyers can self-serve on entitlement status, invoices, and renewal requests without opening support tickets",
      "Configuring a white-label Buyer Portal with custom branding and domain for buyers who manage multiple cloud marketplace entitlements from a single ISV",
      "Enabling buyers to view their Offers, Invoices, and Requests across all connected marketplaces from a single authenticated portal",
    ],
    context: [
      "Suger Console",
      "Customer Portal",
      "Buyer Self-service",
      "Entitlement Management",
    ],
    related: [
      { name: "Suger Buyer Service", slug: "suger-buyer-service" },
      { name: "Buyer", slug: "buyer" },
      { name: "Entitlement", slug: "entitlement" },
      { name: "Private Offer", slug: "private-offer" },
    ],
  },
  {
    name: "Global Search — Suger",
    tags: ["suger"],
    def: "A cross-record search interface in the Suger console that allows users to search across entitlements, offers, buyers, organizations, and integrations from a single query bar — without navigating to individual module pages. Global Search returns results ranked by relevance across all connected record types, enabling operators to locate a specific buyer account, trace an entitlement by deal name, or find an offer by product code in a single step. Results link directly to the matching record's detail view.",
    alias: "Related: Suger Console, Entitlement, Offer",
    source: "https://doc.suger.io/get-started/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Locating a specific buyer entitlement by account name or offer ID across all connected cloud marketplaces from the Suger console search bar",
      "Quickly navigating to an integration or workflow record without drilling through module-level navigation menus",
    ],
    context: ["Suger Console", "Navigation", "Record Lookup"],
    related: [
      { name: "Suger Console", slug: "suger-console" },
      { name: "Entitlement", slug: "entitlement" },
      { name: "Offer", slug: "offer" },
    ],
  },
  {
    name: "Payment Installments — Suger",
    tags: ["suger", "billing"],
    def: "A Suger console view that provides post-signing visibility into the installment payment schedule for an active entitlement — displaying each scheduled installment amount, due date, payment status (pending, paid, failed), and outstanding balance. This is an entitlement-level tracking surface, distinct from the Flexible Payment Schedule feature used at offer creation; it reflects the agreed schedule after the buyer has accepted the offer and allows ISVs and RevOps teams to monitor installment collection status without querying the marketplace API directly.",
    alias:
      "Related: Flexible Payment Schedule / Installment Plan, Entitlement, Invoice",
    source: "https://doc.suger.io/billing/payment/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Monitoring the collection status of each scheduled installment payment on an active enterprise entitlement without logging into the cloud marketplace portal",
      "Identifying failed or overdue installment payments across the entitlement portfolio from the Suger console for RevOps follow-up",
    ],
    context: [
      "Suger Console",
      "Entitlement Detail View",
      "Billing Management",
      "Revenue Tracking",
    ],
    related: [
      {
        name: "Flexible Payment Schedule / Installment Plan",
        slug: "flexible-payment-schedule-/-installment-plan",
      },
      { name: "Entitlement", slug: "entitlement" },
      { name: "Invoice", slug: "invoice" },
    ],
  },
  {
    name: "Zuora Integration — Suger",
    tags: ["suger", "integrations"],
    def: "Suger's native connection to Zuora's subscription billing and revenue management platform, enabling ISVs to sync marketplace entitlement data, usage records, and revenue events between Suger and Zuora without custom engineering. The integration maps Suger entitlement lifecycle events (creation, update, cancellation) to Zuora subscription objects and can push metered usage to Zuora's revenue recognition workflows, supporting unified billing for customers who transact across both cloud marketplace and direct channels.",
    alias: "Related: Billing Integration, Integration, Entitlement",
    source: "https://doc.suger.io/integrations/zuora/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Syncing Suger marketplace entitlement events to Zuora to trigger subscription creation and revenue recognition without manual data entry",
      "Pushing marketplace usage records from Suger to Zuora's billing engine for unified revenue reporting across marketplace and direct-sales channels",
    ],
    context: [
      "Suger Console",
      "Zuora Platform",
      "Integration Settings",
      "Billing Automation",
    ],
    related: [
      { name: "Billing Integration", slug: "billing-integration" },
      { name: "Integration", slug: "integration" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "Gong Integration — Suger",
    tags: ["suger", "integrations"],
    def: "Suger's connection to the Gong revenue intelligence platform, enabling ISVs to surface cloud marketplace deal context — active entitlements, private offer status, and renewal timelines — within Gong's call and email intelligence interface. Sales teams using Gong can view relevant Suger marketplace data alongside deal conversations without switching applications, supporting faster qualification and renewal identification for marketplace-sourced pipeline.",
    alias: "Related: CRM Integration, Integration, Entitlement",
    source: "https://doc.suger.io/integrations/gong/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Surfacing Suger marketplace entitlement and private offer status in Gong deal timelines so sales reps have full deal context during renewal calls",
      "Connecting Suger to Gong to eliminate context-switching between marketplace dashboards and revenue intelligence workflows",
    ],
    context: [
      "Suger Console",
      "Gong Platform",
      "Revenue Intelligence",
      "Integration Settings",
    ],
    related: [
      { name: "CRM Integration", slug: "crm-integration" },
      { name: "Integration", slug: "integration" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "DocuSign Integration — Suger",
    tags: ["suger", "integrations"],
    def: "Suger's connection to DocuSign's e-signature platform, enabling ISVs to trigger DocuSign signature workflows directly from private offer creation in the Suger console. When an offer is created or updated, Suger can automatically route the corresponding order form or addendum to configured signers via DocuSign — streamlining the contract execution step that precedes cloud marketplace acceptance. Signed documents are stored and linked to the offer record in Suger for audit purposes.",
    alias: "Related: Integration, Private Offer, Offer",
    source: "https://doc.suger.io/integrations/docusign/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Triggering a DocuSign order form signature workflow automatically when a Suger private offer is created, eliminating manual DocuSign routing steps",
      "Linking signed order form documents to Suger offer records for compliance and deal audit trails",
    ],
    context: [
      "Suger Console",
      "DocuSign Platform",
      "Integration Settings",
      "Private Offer Workflow",
    ],
    related: [
      { name: "Integration", slug: "integration" },
      { name: "Private Offer", slug: "private-offer" },
      { name: "Offer", slug: "offer" },
    ],
  },
  {
    name: "Apollo.io Integration — Suger",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Apollo.io's sales intelligence and prospecting platform, enabling ISVs to enrich Suger buyer and entitlement records with Apollo contact and company data. The integration allows sales teams to push marketplace-sourced leads (new entitlements, trial sign-ups) into Apollo sequences, or pull Apollo firmographic data into Suger for account segmentation and renewal prioritization — reducing manual data entry between marketplace and outbound sales workflows.",
    alias: "Related: CRM Integration, CRM Enrichment, Integration",
    source: "https://doc.suger.io/integrations/apollo/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Pushing new marketplace entitlement events from Suger into Apollo.io sequences to automate post-signup outreach to new buyers",
      "Enriching Suger account records with Apollo.io firmographic data to prioritize expansion and renewal outreach",
    ],
    context: [
      "Suger Console",
      "Apollo.io Platform",
      "Sales Intelligence",
      "Integration Settings",
    ],
    related: [
      { name: "CRM Integration", slug: "crm-integration" },
      { name: "CRM Enrichment", slug: "crm-enrichment" },
      { name: "Integration", slug: "integration" },
    ],
  },
  {
    name: "Datadog Integration — Suger",
    tags: ["suger", "integrations"],
    def: "Suger's connection to the Datadog observability platform, enabling ISVs to forward marketplace usage, entitlement, and billing events from Suger into Datadog dashboards and alerting workflows. The integration surfaces marketplace-sourced metrics — active entitlements, metering volume, billing anomalies — alongside infrastructure and application telemetry in Datadog, giving engineering and RevOps teams a unified operational view without building custom metric pipelines.",
    alias: "Related: Integration, Usage Metering, Entitlement",
    source: "https://doc.suger.io/integrations/datadog/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Forwarding Suger marketplace billing and entitlement events to Datadog for unified operational monitoring alongside application and infrastructure metrics",
      "Setting up Datadog alerts on Suger usage anomalies or entitlement state changes to trigger engineering or RevOps workflows",
    ],
    context: [
      "Suger Console",
      "Datadog Platform",
      "Observability",
      "Integration Settings",
    ],
    related: [
      { name: "Integration", slug: "integration" },
      { name: "Usage Metering", slug: "usage-metering" },
      { name: "Entitlement", slug: "entitlement" },
    ],
  },
  {
    name: "Auth0 Integration — Suger",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Auth0's identity and authentication platform, enabling ISVs to use Auth0 as the identity provider for their marketplace landing page and signup URL flow. When a buyer clicks 'Subscribe' on a cloud marketplace listing, the redirect to the seller's landing page can authenticate the buyer through Auth0 before the Suger provisioning flow processes the entitlement. This allows ISVs to enforce SSO, map marketplace buyer identity to existing Auth0 user records, and gate provisioning behind an authenticated session without building a custom identity layer.",
    alias:
      "Related: Landing Page / Signup URL, Billing Integration, Integration",
    source: "https://doc.suger.io/integrations/auth0/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Configuring Auth0 as the identity provider for a Suger marketplace landing page so new subscribers are authenticated via SSO before their entitlement is provisioned",
      "Mapping AWS or Azure marketplace buyer identifiers to existing Auth0 user records to provide a seamless login experience for buyers who already have accounts",
    ],
    context: [
      "Suger Console",
      "Auth0 Platform",
      "Landing Page / Signup URL",
      "Integration Settings",
    ],
    related: [
      { name: "Landing Page / Signup URL", slug: "landing-page-/-signup-url" },
      { name: "Billing Integration", slug: "billing-integration" },
      { name: "Integration", slug: "integration" },
    ],
  },
  {
    name: "Global System Integrator (GSI)",
    tags: ["general", "cosell"],
    def: "A large professional services and technology firm — such as Accenture, Deloitte, Infosys, Wipro, TCS, Capgemini, IBM, or Cognizant — that designs, implements, and manages complex cloud infrastructure and software deployments for enterprise clients. GSIs are key partners in cloud GTM strategies: they are typically enrolled in multiple hyperscaler partner programs, influence large enterprise purchasing decisions through multi-year transformation engagements, and often co-sell ISV software alongside their own services. ISVs who establish GSI partnerships can access major enterprise accounts and attach their marketplace listings to GSI-led cloud workloads.",
    alias:
      "Related: System Integrator (SI), Channel Partner (CP), Value Added Reseller (VAR), Partner Relationship Management (PRM) System",
    source: "https://aws.amazon.com/partners/",
    difficulty: "intermediate",
    category: "fundamentals",
    whoFor: [
      "ISVs / Sellers",
      "Partner Managers",
      "AWS Sales",
      "Azure Sales",
      "GCP Sales",
    ],
    useCases: [
      "Building GSI co-sell relationships to gain access to large enterprise accounts that procure software through multi-year cloud transformation programs led by firms like Accenture or Deloitte",
      "Registering GSI partners in Suger to track joint pipeline, referrals, and revenue attribution from GSI-sourced marketplace deals",
      "Qualifying GSI-influenced opportunities for hyperscaler co-sell motions by attaching marketplace listings to GSI-led cloud migration workloads",
    ],
    context: [
      "AWS Partner Network (APN)",
      "Microsoft Partner Center",
      "Google Cloud Partner Network",
      "Suger Console",
      "Co-sell Pipeline",
    ],
    related: [
      { name: "System Integrator (SI)", slug: "system-integrator-si" },
      { name: "Channel Partner (CP)", slug: "channel-partner-cp" },
      {
        name: "Partner Relationship Management (PRM)",
        slug: "partner-relationship-management-prm",
      },
      { name: "Co-sell", slug: "co-sell" },
    ],
  },
  {
    name: "Value Added Reseller (VAR)",
    tags: ["general", "offers"],
    def: "A company that purchases a vendor's product and resells it to end customers with additional value — typically bundled implementation services, customization, training, ongoing support, or integration with other tools. In cloud marketplace contexts, VARs often transact ISV software through channel private offer mechanisms (CPPO on AWS, MPO on Azure, MCPO on GCP) and become the seller of record for their end-customer relationships. VARs are distinct from pure distributors in that they actively add services value, and distinct from GSIs in that they are typically smaller, vertical-focused, or regional rather than global in scope.",
    alias:
      "Related: Channel Partner (CP), Channel Partner Private Offer (CPPO) — AWS, Multiparty Private Offer (MPO) — Azure, Distributor, Global System Integrator (GSI), Distribution Sell-Out Reseller Reporting (DSOR), Partner Relationship Management (PRM) System",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/channel-partner-offers.html",
    difficulty: "beginner",
    category: "fundamentals",
    whoFor: [
      "ISVs / Sellers",
      "Channel Partners",
      "Distributors",
      "Partner Managers",
    ],
    useCases: [
      "Structuring a VAR resale program on AWS Marketplace by creating CPPOs for channel partners who add integration or managed services value to the ISV's SaaS product",
      "Distinguishing VAR partners from pure distributors in PRM tracking to attribute revenue correctly based on whether the partner adds services value or purely resells",
      "Enabling VAR partners to transact ISV software through marketplace private offers so enterprise customers can consume spend against cloud committed budgets (EDP, MACC)",
      "Tracking VAR-sourced deals separately from direct sales in Suger PRM and configuring tier-based commission plans and SPIFFs for VAR performance incentives",
    ],
    context: [
      "Channel Programs",
      "AWS Marketplace",
      "Azure Marketplace",
      "GCP Marketplace",
      "Suger PRM",
    ],
    related: [
      { name: "Channel Partner (CP)", slug: "channel-partner-cp" },
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
      },
      {
        name: "Multiparty Private Offer (MPO) — Azure",
        slug: "multiparty-private-offer-mpo-—-azure",
      },
      { name: "Distributor", slug: "distributor" },
      {
        name: "Global System Integrator (GSI)",
        slug: "global-system-integrator-gsi",
      },
      {
        name: "Distribution Sell-Out Reseller Reporting (DSOR)",
        slug: "distribution-sell-out-reseller-reporting-dsor",
      },
      {
        name: "Partner Relationship Management (PRM) System",
        slug: "partner-relationship-management-prm-system",
      },
    ],
  },
  {
    name: "Integrated SaaS Listing — Snowflake",
    tags: ["snowflake", "offers"],
    def: "A Snowflake Marketplace listing type (GA 2026) that allows consumers to discover, trial, and purchase third-party SaaS applications directly from the Snowflake interface, with Snowflake automatically provisioning required database objects and managing integration setup. Unlike standard Snowflake Marketplace data listings, Integrated SaaS listings support free trial activation from the listing page and drawdown against a buyer's existing Snowflake capacity commitment via Marketplace Capacity Drawdown. This model replaces the legacy Snowflake Partner Connect trial flow, unifying discovery, trial, and transactable purchase into a single in-platform experience.",
    alias:
      "Related: Marketplace Capacity Drawdown (MCD) — Snowflake, Snowflake Marketplace — Snowflake | AWS equivalent: SaaS Subscription Pricing — AWS | Azure equivalent: Subscription — Azure",
    source:
      "https://docs.snowflake.com/en/release-notes/2026/other/2026-06-30-integrated-saas-listings-ga",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Publishing a SaaS product on Snowflake Marketplace with an in-platform free trial to reduce buyer friction without requiring a separate trial provisioning system",
      "Enabling buyers to activate a SaaS trial from the Snowflake listing page with automatic database object provisioning, without leaving the Snowflake UI",
      "Allowing buyers to apply their prepaid Snowflake capacity commitment toward Integrated SaaS Listing purchases via Marketplace Capacity Drawdown",
    ],
    context: [
      "Snowflake Marketplace",
      "Snowflake Provider Studio",
      "Snowflake Collaboration",
      "Snowflake Listings",
    ],
    related: [
      {
        name: "Snowflake Marketplace — Snowflake",
        slug: "snowflake-marketplace-—-snowflake",
      },
      {
        name: "Marketplace Capacity Drawdown (MCD) — Snowflake",
        slug: "marketplace-capacity-drawdown-mcd-—-snowflake",
      },
      { name: "Free Trial", slug: "free-trial" },
      { name: "Transactable Offer", slug: "transactable-offer" },
    ],
  },
  {
    name: "AWS Marketplace Storefront — AWS",
    tags: ["aws", "offers"],
    def: "An AWS Marketplace capability (announced AWS Summit New York 2026) that enables ISVs to embed a branded, curated product catalog on their own website backed by AWS Marketplace billing and procurement infrastructure. Customers browse and purchase through the ISV's storefront experience while all transactions settle through AWS Marketplace, counting toward buyers' EDP or other committed spend commitments. The Storefront model lets sellers customize the buying experience with their own branding, pricing copy, and catalog curation while retaining all the co-sell eligibility, disbursement, and committed spend benefits of a standard marketplace transaction.",
    alias:
      "Related: AWS Marketplace — AWS, Express Private Offer — AWS, Enterprise Discount Program (EDP) — AWS",
    source: "https://aws.amazon.com/blogs/apn/get-ready-to-sell/",
    difficulty: "intermediate",
    category: "procurement",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Creating a branded ISV storefront where enterprise buyers can purchase directly using consolidated AWS billing without navigating the public AWS Marketplace console",
      "Embedding AWS Marketplace checkout into an ISV website to preserve brand identity while enabling buyers to apply EDP committed spend",
      "Reducing deal friction for high-velocity self-service SKUs by giving buyers a familiar ISV-branded purchasing experience backed by marketplace contracts and co-sell eligibility",
    ],
    context: [
      "AWS Marketplace",
      "AWS Marketplace Management Portal (AMMP)",
      "ISV Go-to-Market",
      "AWS Summit New York 2026",
    ],
    related: [
      { name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" },
      {
        name: "Express Private Offer — AWS",
        slug: "express-private-offer-—-aws",
      },
      {
        name: "Enterprise Discount Program (EDP) — AWS",
        slug: "enterprise-discount-program-edp-—-aws",
      },
      { name: "Listing", slug: "listing" },
    ],
  },
  {
    name: "Pay-Per-Outcome Pricing — AWS",
    tags: ["aws", "offers"],
    def: "An AWS Marketplace commercial model (announced 2026) that allows ISVs to charge buyers based on measurable business outcomes rather than resource consumption or user seats. Outcome-based pricing uses custom metering dimensions tied to delivered business results — such as cost saved, revenue generated, or anomalies resolved — and typically combines a predictable base subscription fee with variable outcome-metered charges. Designed primarily for agentic SaaS products where traditional per-seat or usage-volume models fail to capture the value delivered, this model requires defining outcome metrics as metering dimensions in the product's pricing plan.",
    alias:
      "Related: Metered Billing, Metering Dimension, SaaS Subscription Pricing — AWS",
    source:
      "https://aws.amazon.com/blogs/apn/agentic-saas-your-next-growth-market-is-already-here/",
    difficulty: "advanced",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Pricing an AI agent product on AWS Marketplace by business outcome metric (e.g., 'per resolved support ticket') rather than API calls or seat count",
      "Structuring a hybrid pricing model combining a monthly base fee with outcome-based metering dimensions for an agentic SaaS product",
      "Aligning AWS Marketplace pricing with enterprise buyer ROI expectations by charging for delivered business value rather than consumed compute",
    ],
    context: [
      "AWS Marketplace",
      "Agentic SaaS",
      "AWS Marketplace Custom Metering",
      "AWS Summit New York 2026",
    ],
    related: [
      { name: "Metered Billing", slug: "metered-billing" },
      { name: "Metering Dimension", slug: "metering-dimension" },
      {
        name: "SaaS Subscription Pricing — AWS",
        slug: "saas-subscription-pricing-—-aws",
      },
      {
        name: "BatchMeterUsage API — AWS",
        slug: "batchmeterusage-api-—-aws",
      },
    ],
  },
  {
    name: "Opportunity Quality Score — AWS",
    tags: ["aws", "cosell"],
    def: "A real-time data-driven metric in AWS Partner Central that scores how well an ACE opportunity submission aligns with patterns of successful co-sell engagements. The score recalculates as partners update submission details and directly determines routing to one of three co-sell motion tiers: AWS Field-engaged (direct AWS seller involvement), Agent-engaged (AI agent support with potential promotion), or Partner-led (partner operates independently with AI assistance). Higher-scoring submissions are more likely to receive direct AWS field seller engagement.",
    alias:
      "Related: APN Customer Engagements (ACE) — AWS, AWS Marketplace Engagement Score — AWS, Propensity to Buy (PTB) Score",
    source: "https://aws.amazon.com/blogs/apn/sell-smarter-with-aws/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "AWS Sales", "Partner Managers"],
    useCases: [
      "Optimizing ACE opportunity submissions to improve the Opportunity Quality Score and unlock direct AWS field seller engagement",
      "Diagnosing why an ACE submission was routed to Agent-engaged rather than Field-engaged tier and identifying which fields to enrich",
      "Training sales teams on the signals that drive higher opportunity quality scores to improve co-sell pipeline conversion",
    ],
    context: [
      "AWS Partner Central",
      "ACE Pipeline",
      "Co-sell Routing",
      "AWS Partner Central Agents — AWS",
    ],
    related: [
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
      {
        name: "AWS Partner Central Agents — AWS",
        slug: "aws-partner-central-agents-—-aws",
      },
      {
        name: "AWS Marketplace Engagement Score — AWS",
        slug: "aws-marketplace-engagement-score-—-aws",
      },
      { name: "Co-sell", slug: "co-sell" },
    ],
  },
  {
    name: "Agent-Engaged Opportunity — AWS",
    tags: ["aws", "cosell"],
    def: "A co-sell motion tier in AWS Partner Central where ACE opportunities are supported by an AI agent rather than assigned to a human AWS field seller. Agent-engaged opportunities receive actionable insights, next-step recommendations, and enrichment suggestions from the Partner Central AI agent, and may be promoted to the Field-engaged tier if the opportunity quality improves or the deal gains strategic significance. This tier sits between Partner-led (no AWS involvement, AI-assisted only) and AWS Field-engaged (direct AWS seller collaboration) in the three-tier co-sell routing model introduced in 2026.",
    alias:
      "Related: APN Customer Engagements (ACE) — AWS, AWS Partner Central Agents — AWS, Opportunity Quality Score — AWS, Partner-Led Opportunity — AWS",
    source: "https://aws.amazon.com/blogs/apn/sell-smarter-with-aws/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Responding to AWS Partner Central AI agent recommendations on an Agent-engaged ACE opportunity to improve deal quality and qualify for Field-engaged promotion",
      "Setting pipeline expectations for deals in the Agent-engaged tier — no AWS seller is assigned, but AI insights can still accelerate the opportunity",
      "Understanding when an Agent-engaged opportunity can be escalated to Field-engaged based on deal size, strategic fit, or enriched submission data",
    ],
    context: [
      "AWS Partner Central",
      "ACE Pipeline",
      "Co-sell Routing",
      "AWS Partner Central Agents",
    ],
    related: [
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
      {
        name: "AWS Partner Central Agents — AWS",
        slug: "aws-partner-central-agents-—-aws",
      },
      {
        name: "Opportunity Quality Score — AWS",
        slug: "opportunity-quality-score-—-aws",
      },
      {
        name: "Partner-Led Opportunity — AWS",
        slug: "partner-led-opportunity-—-aws",
      },
    ],
  },
  {
    name: "Partner-Led Opportunity — AWS",
    tags: ["aws", "cosell"],
    def: "A co-sell motion tier in AWS Partner Central where an ACE opportunity receives no AWS field seller assignment. The partner operates independently with 24/7 AI agent support via Partner Central — receiving insights, recommendations, and best practices from the Partner Central AI — but without direct human AWS seller involvement. Partner-led is the lowest tier in the three-tier opportunity routing model (below Agent-engaged and Field-engaged) and is typically assigned when the Opportunity Quality Score is insufficient to qualify for higher tiers or when the deal does not meet AWS co-sell criteria.",
    alias:
      "Related: Agent-Engaged Opportunity — AWS, APN Customer Engagements (ACE) — AWS, Opportunity Quality Score — AWS",
    source: "https://aws.amazon.com/blogs/apn/sell-smarter-with-aws/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Understanding that a Partner-led routing means no AWS rep is assigned — the partner is solely responsible for deal advancement, with AI agent guidance only",
      "Improving an ACE opportunity's Opportunity Quality Score to move from Partner-led to Agent-engaged or Field-engaged tier",
      "Setting accurate pipeline expectations for deals routed as Partner-led, which have lower close rates than Field-engaged co-sell opportunities",
    ],
    context: [
      "AWS Partner Central",
      "ACE Pipeline",
      "Co-sell Routing",
      "AWS Partner Central Agents",
    ],
    related: [
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
      {
        name: "Agent-Engaged Opportunity — AWS",
        slug: "agent-engaged-opportunity-—-aws",
      },
      {
        name: "Opportunity Quality Score — AWS",
        slug: "opportunity-quality-score-—-aws",
      },
      {
        name: "AWS Partner Central Agents — AWS",
        slug: "aws-partner-central-agents-—-aws",
      },
    ],
  },
  {
    name: "Express Private Offer Extension — AWS",
    tags: ["aws", "offers", "cosell"],
    def: "An AWS Marketplace capability (announced AWS Summit New York 2026) that allows AWS sales representatives to extend personalized custom pricing invitations directly to customers, automating the private offer workflow from the AWS side. Unlike standard Express Private Offers — which are ISV-initiated — this mechanism is triggered by an AWS rep within Partner Central, pre-populating offer terms based on the customer's account and existing commitments. The rep-initiated flow is designed to reduce deal-closure friction on co-sell opportunities by eliminating manual coordination between the ISV and AWS rep to initiate a custom pricing conversation.",
    alias:
      "Related: Express Private Offer — AWS, Private Offer, APN Customer Engagements (ACE) — AWS",
    source: "https://aws.amazon.com/blogs/apn/get-ready-to-sell/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "AWS Sales", "Channel Partners"],
    useCases: [
      "Receiving an AWS-rep-initiated express pricing invitation in a co-sell deal and understanding how it differs from an ISV-originated express private offer",
      "Enabling AWS sales reps to unlock personalized pricing on a co-sell opportunity without requiring manual coordination with the ISV to create the offer first",
      "Tracking rep-initiated offer extensions in the AWS Marketplace Management Portal alongside standard ISV-created private offers",
    ],
    context: [
      "AWS Marketplace",
      "AWS Partner Central",
      "Co-sell Private Offers",
      "AWS Summit New York 2026",
    ],
    related: [
      {
        name: "Express Private Offer — AWS",
        slug: "express-private-offer-—-aws",
      },
      { name: "Private Offer", slug: "private-offer" },
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
      { name: "Co-sell", slug: "co-sell" },
    ],
  },
  {
    name: "AWS Marketplace List & Sell Incentive — AWS",
    tags: ["aws"],
    def: "A cost-offset funding program (announced AWS Summit New York 2026) that reimburses AWS Marketplace partners for expenses associated with creating a new marketplace listing, expanding to new countries, or adding self-service purchase features. The incentive targets listing integration and go-live costs — such as SaaS fulfillment API integration, metering setup, and legal/contract work — reducing the financial barrier to marketplace entry for new ISVs and for existing ISVs expanding their geographic or product footprint.",
    alias:
      "Related: AWS Partner Funding — AWS, Marketing Development Funds (MDF) — AWS, ISV Accelerate — AWS",
    source: "https://aws.amazon.com/blogs/apn/get-ready-to-sell/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Applying for the List & Sell Incentive to offset SaaS fulfillment API integration costs when publishing a first AWS Marketplace listing",
      "Using the incentive to fund country expansion for an existing listing, covering legal review and regional pricing configuration costs",
      "Combining the List & Sell Incentive with POC Funding and MDF in a coordinated AWS Partner Funding strategy for a marketplace launch",
    ],
    context: [
      "AWS Partner Funding Portal (APFP)",
      "AWS Partner Funding",
      "AWS Marketplace Onboarding",
      "AWS Summit New York 2026",
    ],
    related: [
      {
        name: "AWS Partner Funding — AWS",
        slug: "aws-partner-funding-—-aws",
      },
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
      },
      { name: "ISV Accelerate — AWS", slug: "isv-accelerate-—-aws" },
      {
        name: "Foundational Technical Review (FTR) — AWS",
        slug: "foundational-technical-review-ftr-—-aws",
      },
    ],
  },
  {
    name: "Business Value Realization (BVR) Motion — AWS",
    tags: ["aws", "cosell"],
    def: "An AWS Services Partner program (announced AWS Summit New York 2026) that helps eligible partners shift from project-delivery billing to outcome-based engagement models. The BVR Motion includes a Business Value Realization Toolkit with industry-specific templates and benchmarks, a new AWS BVR Competency designation, outcome-tied funding (up to $50K MDF for the 2026–2027 period), and a dedicated Partner Success Specialist. Eligibility requires demonstrated customer success excellence and completion of BVR learning requirements. The program is distinct from ISV-focused programs — it targets AWS Services Partners and GSIs who want to prove and quantify customer ROI post-implementation.",
    alias:
      "Related: Business Value Realization (BVR) Competency — AWS, ISV Accelerate — AWS, Marketing Development Funds (MDF) — AWS, Strategic Collaboration Agreement (SCA) — AWS, Global System Integrator (GSI)",
    source:
      "https://aws.amazon.com/blogs/apn/accelerate-customer-outcomes-with-the-aws-business-value-realization-motion/",
    difficulty: "advanced",
    category: "cosell",
    whoFor: ["Partner Managers", "AWS Sales"],
    useCases: [
      "Enrolling as a Services Partner in the BVR Motion to access outcome-tied MDF and the BVR Competency designation for customer-facing proof of value programs",
      "Using the BVR Toolkit industry benchmarks to build a customer ROI framework that quantifies business outcomes from AWS-powered implementations",
      "Qualifying co-sell deals under the BVR Motion to access dedicated Partner Success Specialist support and funding unlocked by achieving customer milestones",
    ],
    context: [
      "AWS Partner Network (APN)",
      "AWS Partner Funding Portal (APFP)",
      "AWS Services Partners",
      "AWS Summit New York 2026",
    ],
    related: [
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
      },
      {
        name: "Strategic Collaboration Agreement (SCA) — AWS",
        slug: "strategic-collaboration-agreement-sca-—-aws",
      },
      {
        name: "Global System Integrator (GSI)",
        slug: "global-system-integrator-gsi",
      },
      { name: "ISV Accelerate — AWS", slug: "isv-accelerate-—-aws" },
    ],
  },
  {
    name: "GCP AI Agents Program — GCP",
    tags: ["gcp", "cosell"],
    def: "A Google Cloud partner program (announced Google Cloud Next 2026) designed for ISVs building and commercializing AI agents on the Google Cloud platform. The program includes a rapid agent deployment framework, a structured onboard-commercialize-discover path, a $750 million partner fund for agentic development, and Google Sales co-sell incentivization for certified agents. Partners completing the program receive the Google Cloud Ready — Gemini Enterprise designation, which lists their agents in the Gemini Enterprise Agent Gallery for direct discovery and procurement by enterprise customers.",
    alias:
      "Related: Google Cloud Ready — Gemini Enterprise Designation — GCP, Agent Gallery — GCP, GCP Marketplace — GCP, Google Cloud Partner Network — GCP",
    source:
      "https://cloud.google.com/blog/products/ai-machine-learning/partner-built-agents-available-in-gemini-enterprise",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "GCP Sales", "Partner Managers"],
    useCases: [
      "Enrolling an AI agent product in the GCP AI Agents Program to access the $750M partner fund and unlock Google Sales co-sell incentivization",
      "Completing the certification evaluation to earn the Google Cloud Ready — Gemini Enterprise designation and list the agent in the Gemini Enterprise Agent Gallery",
      "Using the structured onboard-commercialize-discover path to accelerate a GCP agent product from development to marketplace-listed and sales-ready",
    ],
    context: [
      "Google Cloud Marketplace",
      "Google Cloud Partner Network",
      "Gemini Enterprise",
      "Google Cloud Next 2026",
    ],
    related: [
      {
        name: "Google Cloud Partner Network — GCP",
        slug: "google-cloud-partner-network-—-gcp",
      },
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
      {
        name: "Build Engagement Model — GCP",
        slug: "build-engagement-model-—-gcp",
      },
      { name: "AI Agent Listing — GCP", slug: "ai-agent-listing-—-gcp" },
    ],
  },
  {
    name: "Agent Gallery — GCP",
    tags: ["gcp", "offers"],
    def: "A curated hub within the Gemini Enterprise application where enterprise customers discover and procure partner-built AI agents certified under the Google Cloud Ready — Gemini Enterprise designation. The Agent Gallery is distinct from the standard Google Cloud Marketplace console — it is integrated directly into the Gemini Enterprise workflow, allowing enterprise users to discover, evaluate, and activate partner agents without leaving their Gemini environment. Google Sales representatives are incentivized to recommend and co-sell agents listed in the gallery, making gallery placement a co-sell activation milestone for ISVs in the GCP AI Agents Program.",
    alias:
      "Related: GCP AI Agents Program — GCP, Google Cloud Ready — Gemini Enterprise Designation — GCP, AI Agent Listing — GCP, Agent Card — GCP",
    source:
      "https://cloud.google.com/blog/products/ai-machine-learning/partner-built-agents-available-in-gemini-enterprise",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers", "GCP Sales"],
    useCases: [
      "Listing a certified AI agent in the Gemini Enterprise Agent Gallery to surface the product to enterprise buyers already using Gemini Enterprise",
      "Discovering and activating a partner-built AI agent within a Gemini Enterprise workflow without navigating to the standalone Google Cloud Marketplace",
      "Using Agent Gallery placement as a co-sell trigger — gallery-listed agents are covered by Google Sales incentivization and eligible for GCP AI Agents Program benefits",
    ],
    context: [
      "Gemini Enterprise",
      "Google Cloud Marketplace",
      "GCP AI Agents Program",
      "Partner Agent Discovery",
    ],
    related: [
      { name: "AI Agent Listing — GCP", slug: "ai-agent-listing-—-gcp" },
      {
        name: "GCP AI Agents Program — GCP",
        slug: "gcp-ai-agents-program-—-gcp",
      },
      { name: "Agent Card — GCP", slug: "agent-card-—-gcp" },
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
    ],
  },
  {
    name: "Google Cloud Ready — Gemini Enterprise Designation — GCP",
    tags: ["gcp", "cosell"],
    def: "A Google Cloud partner certification badge awarded to AI agents that pass a four-step evaluation covering basic functionality, output accuracy, autonomous execution capability, and enterprise security and compliance standards. Certified agents are listed in the Gemini Enterprise Agent Gallery, providing commercial discoverability within the Gemini Enterprise application and eligibility for Google Sales co-sell incentivization. The designation is part of the GCP AI Agents Program introduced at Google Cloud Next 2026.",
    alias:
      "Related: GCP AI Agents Program — GCP, Agent Gallery — GCP, Google Cloud Partner Network Competency — GCP",
    source:
      "https://cloud.google.com/blog/products/ai-machine-learning/partner-built-agents-available-in-gemini-enterprise",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "GCP Sales"],
    useCases: [
      "Submitting a partner-built AI agent for Google Cloud Ready — Gemini Enterprise evaluation to unlock Agent Gallery listing and co-sell incentivization",
      "Verifying that a prospective agent partner holds the Google Cloud Ready — Gemini Enterprise designation before recommending the agent to enterprise buyers",
      "Using the designation as a buyer-facing quality signal indicating the agent has passed Google's enterprise readiness criteria",
    ],
    context: [
      "Google Cloud Partner Network",
      "Gemini Enterprise",
      "Agent Gallery",
      "GCP AI Agents Program",
    ],
    related: [
      {
        name: "GCP AI Agents Program — GCP",
        slug: "gcp-ai-agents-program-—-gcp",
      },
      { name: "Agent Gallery — GCP", slug: "agent-gallery-—-gcp" },
      {
        name: "Google Cloud Partner Network Competency — GCP",
        slug: "google-cloud-partner-network-competency-—-gcp",
      },
      { name: "AI Agent Listing — GCP", slug: "ai-agent-listing-—-gcp" },
    ],
  },
  {
    name: "Insulin Skill — Suger",
    tags: ["suger"],
    def: "An instruction file — implemented as a Markdown document — that provides Suger Insulin agents with specialized knowledge, procedures, and domain expertise for specific cloud GTM workflows. Agents automatically discover and load relevant skills based on conversation context without requiring manual invocation. Skills can be created by uploading Markdown files, building interactively with an agent, importing from a GitHub repository, or installing from the Insulin Marketplace. Once installed, a skill's content becomes part of the agent's active context for all relevant conversations in that workspace.",
    alias:
      "Related: Insulin Agent — Suger, Insulin Marketplace — Suger, Insulin — Suger, Insulin Jobs — Suger",
    source: "https://doc.suger.io/insulin/marketplace/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["Suger Users", "ISVs / Sellers"],
    useCases: [
      "Installing a co-sell workflow skill from the Insulin Marketplace to give an Insulin agent domain knowledge about ACE opportunity best practices",
      "Creating a custom Insulin Skill by uploading a Markdown file with internal SOPs, enabling agents to follow company-specific marketplace processes",
      "Importing a skill from a GitHub repository to keep the agent's domain knowledge synchronized with a team's evolving process documentation",
    ],
    context: [
      "Suger Insulin",
      "Insulin Workspace",
      "Insulin Agents",
      "Insulin Marketplace",
    ],
    related: [
      { name: "Insulin Agent — Suger", slug: "insulin-agent-—-suger" },
      {
        name: "Insulin Marketplace — Suger",
        slug: "insulin-marketplace-—-suger",
      },
      { name: "Insulin", slug: "insulin" },
      {
        name: "Insulin Channel — Suger",
        slug: "insulin-channel-—-suger",
      },
    ],
  },
  {
    name: "Insulin Marketplace — Suger",
    tags: ["suger"],
    def: "A curated catalog of pre-built agents and skills within the Suger Insulin workspace, covering 20+ agents and 29+ skills across domains including document generation, CRM workflows, code review, and meeting preparation. Users browse, install with a single click, and customize installed items — each installation copies the agent's system prompt, configuration, conversation starters, and icon into the user's Insulin workspace as an editable copy. The Insulin Marketplace is Suger's distribution layer for sharing reusable AI automation components across marketplace operations teams.",
    alias:
      "Related: Insulin Agent — Suger, Insulin Skill — Suger, Insulin — Suger",
    source: "https://doc.suger.io/insulin/marketplace/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["Suger Users"],
    useCases: [
      "Browsing the Insulin Marketplace to find a pre-built co-sell automation agent and install it to a workspace with one click",
      "Publishing a custom-built Insulin agent to the team's Insulin Marketplace so other Suger users in the organization can discover and install it",
      "Installing a domain-specific skill from the Insulin Marketplace to give an existing agent expertise in a new area such as legal review or deal structuring",
    ],
    context: ["Suger Insulin", "Insulin Workspace", "Suger Console"],
    related: [
      { name: "Insulin Agent — Suger", slug: "insulin-agent-—-suger" },
      { name: "Insulin Skill — Suger", slug: "insulin-skill-—-suger" },
      { name: "Insulin", slug: "insulin" },
      {
        name: "Insulin Channel — Suger",
        slug: "insulin-channel-—-suger",
      },
    ],
  },
  {
    name: "MCP Integration — Suger",
    tags: ["suger", "integrations"],
    def: "A Suger integration type that connects any external Model Context Protocol (MCP)-compatible server to Suger AI, allowing Suger's Insulin agents to discover and use all tools exposed by that server. Supports OAuth (PKCE), client credentials, and API key authentication methods. Suger provides a catalog of 77 pre-configured MCP servers spanning payments, project management, and productivity tools, plus the ability to connect custom MCP servers by URL. The MCP Integration is directionally opposite to the Suger MCP Server — where the MCP Server exposes Suger's own data to external AI tools, the MCP Integration brings external tool capabilities into Suger's AI layer.",
    alias:
      "Related: Suger MCP Server, Insulin Agent — Suger, Integration, OAuth 2.0 Integration",
    source: "https://doc.suger.io/integrations/mcp/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["Suger Users", "ISVs / Sellers"],
    useCases: [
      "Connecting a custom internal MCP server to Suger AI to give Insulin agents access to proprietary tools and data sources not in Suger's standard integration catalog",
      "Installing a pre-configured MCP server from Suger's catalog of 77 servers to give agents access to payment, project management, or productivity tools in one step",
      "Distinguishing the MCP Integration (Suger consumes external MCP tools) from the Suger MCP Server (external AI tools consume Suger's data)",
    ],
    context: [
      "Suger Console",
      "Insulin Agents",
      "Model Context Protocol",
      "Suger Integrations",
    ],
    related: [
      { name: "Suger MCP Server", slug: "suger-mcp-server" },
      { name: "Insulin Agent — Suger", slug: "insulin-agent-—-suger" },
      { name: "Integration", slug: "integration" },
      { name: "OAuth 2.0 Integration", slug: "oauth-2.0-integration" },
    ],
  },
  {
    name: "Alibaba Marketplace Integration — Suger",
    tags: ["suger", "alibaba", "integrations"],
    def: "An org-level OAuth integration that connects a Suger organization to Alibaba Cloud Marketplace, enabling marketplace operations for sellers and buyers in China and international Alibaba Cloud markets. Configuration requires OAuth credentials for the integration and an SPI key for marketplace event notifications, which Alibaba uses to push real-time subscription and billing events to Suger. The integration supports both seller and buyer marketplace workflows; deleting it may affect active marketplace subscriptions and billing relationships, so deactivation must be coordinated with any live Alibaba transactions.",
    alias: "Related: Alibaba Cloud Marketplace, Integration, Suger",
    source: "https://doc.suger.io/integrations/alibaba-marketplace/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["Suger Users", "ISVs / Sellers"],
    useCases: [
      "Connecting a Suger organization to Alibaba Cloud Marketplace to enable automated entitlement provisioning and billing event handling for the China market",
      "Configuring the SPI key for Alibaba marketplace event notifications to receive real-time subscription lifecycle events in Suger",
      "Managing Alibaba marketplace subscriptions and billing relationships through the Suger Console alongside AWS, Azure, and GCP operations",
    ],
    context: [
      "Suger Console",
      "Alibaba Cloud Marketplace",
      "Suger Integrations",
      "Marketplace Event Notifications",
    ],
    related: [
      { name: "Alibaba Cloud Marketplace", slug: "alibaba-cloud-marketplace" },
      { name: "Suger", slug: "suger" },
      { name: "Integration", slug: "integration" },
      { name: "Webhook", slug: "webhook" },
    ],
  },
  {
    name: "People Data Labs Integration — Suger",
    tags: ["suger", "integrations"],
    def: "An org-level API key integration connecting Suger to People Data Labs for bulk lead and account data enrichment. Enriches professional profiles with verified employment histories, person profiles, and company firmographics from People Data Labs' datasets. Unlike user-level OAuth integrations, this integration operates at the organization level, making enriched data accessible to all Suger users and workflows within the organization. Designed for systematic enrichment of marketplace buyer and prospect records rather than per-contact lookup.",
    alias:
      "Related: CRM Enrichment, CRM Integration, Account Mapping — Suger, Integration",
    source: "https://doc.suger.io/integrations/people-data-labs/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["Suger Users", "ISVs / Sellers"],
    useCases: [
      "Enriching marketplace buyer records with verified employment and firmographic data from People Data Labs to improve ICP scoring and outreach personalization",
      "Running a bulk account enrichment job across all Suger marketplace entitlements to supplement CRM data with current employment and company information",
      "Combining People Data Labs enrichment with Account Mapping to identify which enriched buyers are also AWS or GCP account-mapped prospects",
    ],
    context: [
      "Suger Console",
      "CRM Enrichment",
      "Suger Integrations",
      "Lead Enrichment",
    ],
    related: [
      { name: "CRM Enrichment", slug: "crm-enrichment" },
      { name: "CRM Integration", slug: "crm-integration" },
      {
        name: "Account Mapping — Suger",
        slug: "account-mapping-—-suger",
      },
      { name: "Integration", slug: "integration" },
    ],
  },
  {
    name: "Microsoft Dynamics 365 Integration — Suger",
    tags: ["suger", "integrations"],
    def: "An org-level integration connecting Suger to Microsoft Dynamics 365 to provide CRM and ERP capabilities within the Suger platform. Enables organizations to synchronize and automate processes between Suger's cloud marketplace operations — entitlements, offers, co-sell pipelines — and Dynamics 365 sales and operations data. Complements existing Microsoft integrations (Teams, Outlook) by adding the full CRM and ERP data layer for enterprise sellers who run Dynamics 365 as their system of record.",
    alias:
      "Related: CRM Integration, Salesforce Integration, HubSpot Integration, Microsoft Teams Integration",
    source: "https://doc.suger.io/integrations/microsoft-dynamics365/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["Suger Users", "ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Syncing Suger marketplace entitlement data to Dynamics 365 to give sales teams pipeline visibility without leaving their CRM",
      "Automating Dynamics 365 opportunity updates when a Suger-managed private offer is accepted, reducing manual CRM hygiene",
      "Using Dynamics 365 as the system of record for co-sell pipeline while Suger manages marketplace transaction mechanics",
    ],
    context: [
      "Suger Console",
      "CRM Integration",
      "Suger Integrations",
      "Microsoft Ecosystem",
    ],
    related: [
      { name: "CRM Integration", slug: "crm-integration" },
      { name: "Salesforce Integration", slug: "salesforce-integration" },
      {
        name: "Microsoft Teams Integration",
        slug: "microsoft-teams-integration",
      },
      { name: "HubSpot Integration", slug: "hubspot-integration" },
    ],
  },
  {
    name: "Deal Registration — Suger",
    tags: ["suger", "channel"],
    def: "The act of a partner — VAR, reseller, GSI, tech partner, or distributor — formally claiming credit for a deal with an ISV before or during an active sales cycle. In Suger PRM, a partner submits a deal registration through the white-label portal; Suger automatically creates or updates a Salesforce Opportunity, routes the registration for ISV approval, and fires notifications so neither side loses track. Approved registrations protect the partner's margin and give the ISV a real-time view of partner-sourced pipeline alongside hyperscaler co-sell on the same CRM record.",
    alias:
      "Related: Partner Relationship Management (PRM) System, Value Added Reseller (VAR), Channel Partner (CP), Commission Tracking — Suger, Deal Registration — Azure",
    source: "https://doc.suger.io/get-started/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Partner Managers"],
    useCases: [
      "Enabling VAR and reseller partners to submit deal registrations through the Suger white-label portal so the ISV can approve and protect partner margin",
      "Automatically creating a Salesforce Opportunity from a partner deal registration, surfacing partner-sourced pipeline alongside AWS co-sell on the same CRM record",
      "Tracking approval status, routing, and notifications for all incoming partner registrations without manual email follow-up",
    ],
    context: [
      "Suger PRM",
      "Suger Console",
      "Salesforce",
      "Channel Programs",
      "Partner Portal",
    ],
    related: [
      {
        name: "Partner Relationship Management (PRM) System",
        slug: "partner-relationship-management-prm-system",
      },
      { name: "Value Added Reseller (VAR)", slug: "value-added-reseller-var" },
      { name: "Channel Partner (CP)", slug: "channel-partner-cp" },
      {
        name: "Commission Tracking — Suger",
        slug: "commission-tracking-—-suger",
      },
      {
        name: "Deal Registration — Azure",
        slug: "deal-registration-—-azure",
      },
    ],
  },
  {
    name: "DSOR (Distribution Sell-Out Reseller Reporting)",
    tags: ["general", "channel"],
    def: "A reporting standard in multi-tier distribution where distributors — such as TD Synnex, Ingram Micro, or Pax8 — report the downstream reseller-level sales data back to the ISV. Because distributors transact with ISVs at a tier-one level but sell through a network of resellers to end customers, DSOR gives the ISV visibility into which reseller actually closed the deal, what the end-customer price was, and how much volume each partner in the channel is driving. Without DSOR, ISVs see distributor aggregates but not the reseller-level attribution needed for accurate commissions, deal protection, and program compliance.",
    alias:
      "Related: Distributor, Value Added Reseller (VAR), Commission Tracking — Suger, Deal Registration — Suger",
    source: "https://doc.suger.io/get-started/",
    difficulty: "advanced",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Distributors", "Partner Managers"],
    useCases: [
      "Receiving sell-out reports from distributors like TD Synnex or Ingram Micro to see which resellers are closing deals and at what price",
      "Reconciling distributor-level invoicing with reseller-level attribution in Suger PRM for accurate commission calculations and deal protection",
      "Enforcing minimum advertised price (MAP) policies and deal registration compliance across a multi-tier reseller network using DSOR data",
    ],
    context: [
      "Suger PRM",
      "Channel Programs",
      "Distribution Networks",
      "Partner Revenue Management",
    ],
    related: [
      { name: "Distributor", slug: "distributor" },
      { name: "Value Added Reseller (VAR)", slug: "value-added-reseller-var" },
      {
        name: "Commission Tracking — Suger",
        slug: "commission-tracking-—-suger",
      },
      {
        name: "Deal Registration — Suger",
        slug: "deal-registration-—-suger",
      },
    ],
  },
  {
    name: "Commission Tracking — Suger",
    tags: ["suger", "channel"],
    def: "Suger PRM's module for defining, managing, and paying out partner commissions. ISVs configure commission plans — flat fee, percentage of deal value, tiered, or per-deal override — and Suger calculates the payout for each partner-sourced or partner-influenced deal as it closes. Partners can see their earned commissions in the white-label portal, giving channel teams a defensible, auditable alternative to manual spreadsheet payouts at quarter end. Commission plans connect directly to deal registration records so attribution and payout flow through the same system.",
    alias:
      "Related: Deal Registration — Suger, Partner Relationship Management (PRM) System, Distributor, DSOR (Distribution Sell-Out Reseller Reporting)",
    source: "https://doc.suger.io/get-started/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Partner Managers"],
    useCases: [
      "Setting up a commission plan in Suger PRM so that VAR and reseller partners are automatically paid a percentage of each closed deal they registered",
      "Using per-deal commission overrides in Suger to handle special pricing or SPIF incentives without changing the base commission plan",
      "Giving partners real-time visibility into their earned and pending commissions through the Suger white-label portal, replacing manual quarterly payouts",
    ],
    context: [
      "Suger PRM",
      "Suger Console",
      "Channel Programs",
      "Partner Portal",
      "Finance & Billing",
    ],
    related: [
      {
        name: "Deal Registration — Suger",
        slug: "deal-registration-—-suger",
      },
      {
        name: "Partner Relationship Management (PRM) System",
        slug: "partner-relationship-management-prm-system",
      },
      { name: "Distributor", slug: "distributor" },
      {
        name: "DSOR (Distribution Sell-Out Reseller Reporting)",
        slug: "dsor-distribution-sell-out-reseller-reporting",
      },
    ],
  },
  {
    name: "Generative AI Innovation Center (GenAIIC) — AWS",
    tags: ["aws", "cosell"],
    def: "An AWS initiative that provides technical expertise, co-innovation frameworks, and architectural guidance to help enterprise customers and partners build and scale generative AI solutions from proof-of-concept to production. GenAIIC has collaborated across thousands of enterprise engagements to validate agentic AI approaches. For ISV partners, GenAIIC serves as the technical backbone of the Partner Agent Factory (PAF) program — providing hands-on collaboration, Bedrock-based architecture guidance, and go-to-market support for industry-specific AI agent solutions listed on AWS Marketplace.",
    alias:
      "Related: Partner Agent Factory (PAF) — AWS, AWS Partner Central Agents — AWS",
    source:
      "https://aws.amazon.com/blogs/awsmarketplace/aws-genaiic-partner-agent-factory-new-ai-agents-now-in-aws-marketplace/",
    difficulty: "advanced",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "AWS Sales"],
    useCases: [
      "Applying to the Partner Agent Factory to co-build and validate an industry-specific AI agent solution with GenAIIC technical support",
      "Listing a PAF-validated agentic AI solution on AWS Marketplace with simplified procurement that counts toward customer AWS commitments",
    ],
    context: [
      "AWS Marketplace",
      "AWS Partner Network",
      "Partner Agent Factory",
      "Amazon Bedrock",
    ],
    related: [
      {
        name: "Partner Agent Factory (PAF) — AWS",
        slug: "partner-agent-factory-paf-—-aws",
      },
      {
        name: "AWS Partner Central Agents — AWS",
        slug: "aws-partner-central-agents-—-aws",
      },
    ],
  },
  {
    name: "Partner Agent Factory (PAF) — AWS",
    tags: ["aws", "cosell"],
    def: "A structured co-innovation program operated by AWS GenAIIC that pairs GenAIIC's technical expertise with AWS Partner domain knowledge to build, validate, and list industry-specific agentic AI solutions on AWS Marketplace. Partners apply via genaiic-partners@amazon.com; accepted partners receive hands-on architectural collaboration using Amazon Bedrock and Strands Agents, plus go-to-market support. PAF solutions are listed on AWS Marketplace with simplified procurement and consolidated billing that counts toward existing customer AWS commitments.",
    alias:
      "Related: Generative AI Innovation Center (GenAIIC) — AWS, AWS Partner Central Agents — AWS",
    source:
      "https://aws.amazon.com/blogs/awsmarketplace/aws-genaiic-partner-agent-factory-new-ai-agents-now-in-aws-marketplace/",
    difficulty: "advanced",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "AWS Sales"],
    useCases: [
      "Applying to PAF via genaiic-partners@amazon.com to co-build an agentic AI solution with GenAIIC support and list it on AWS Marketplace",
      "Discovering PAF-validated AI agent solutions on AWS Marketplace to accelerate enterprise AI adoption with billing that counts toward AWS committed spend",
    ],
    context: [
      "AWS Marketplace",
      "AWS Partner Network",
      "Generative AI Innovation Center",
      "Amazon Bedrock",
    ],
    related: [
      {
        name: "Generative AI Innovation Center (GenAIIC) — AWS",
        slug: "generative-ai-innovation-center-genaiic-—-aws",
      },
      {
        name: "AWS Partner Central Agents — AWS",
        slug: "aws-partner-central-agents-—-aws",
      },
    ],
  },
  {
    name: "Partner Portal — Suger",
    tags: ["suger"],
    def: "A white-label, partner-facing web portal provisioned through Suger PRM that ISVs deploy under their own domain and branding. Partners authenticate via SSO/SAML to register deals, access enablement content, track commission status, and manage their activity — without any Suger branding visible. The portal can go live in under five days with no implementation fee.",
    alias:
      "Related: Partner Relationship Management (PRM) System, Learning Management System (LMS) — Suger, Value Added Reseller (VAR), Buyer Portal — Suger, Deal Registration — Suger",
    source: "https://www.suger.io/prm/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Channel Partners", "Partner Managers"],
    useCases: [
      "Launch a branded partner portal without building custom infrastructure",
      "Give resellers a single login to register deals, access content, and track payouts",
      "Enable SSO for partner users via your existing identity provider",
    ],
    context: [
      "Suger PRM",
      "Partner Enablement",
      "Deal Registration",
      "Suger Console",
    ],
    related: [
      {
        name: "Partner Relationship Management (PRM) System",
        slug: "partner-relationship-management-prm-system",
      },
      { name: "Deal Registration — Suger", slug: "deal-registration-—-suger" },
      { name: "Buyer Portal — Suger", slug: "buyer-portal-—-suger" },
    ],
  },
  {
    name: "Partner Tiering — Suger",
    tags: ["suger"],
    def: "A classification system within Suger PRM that groups channel partners into tiers (such as Silver, Gold, Platinum) based on performance, revenue contribution, or certification status. Tier assignments control approval routing for deal registrations, commission plan eligibility, and access to incentive programs — ensuring higher-performing partners receive differentiated treatment automatically.",
    alias:
      "Related: Partner Relationship Management (PRM) System, Deal Registration — Suger, Commission Plan — Suger",
    source: "https://www.suger.io/prm/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Route deal registrations to different approvers based on partner tier",
      "Apply higher commission rates automatically for Gold and Platinum partners",
      "Restrict access to premium enablement content to certified-tier partners",
    ],
    context: [
      "Suger PRM",
      "Deal Registration",
      "Commission Plans",
      "Partner Portal — Suger",
    ],
    related: [
      {
        name: "Partner Relationship Management (PRM) System",
        slug: "partner-relationship-management-prm-system",
      },
      { name: "Deal Registration — Suger", slug: "deal-registration-—-suger" },
      {
        name: "Commission Tracking — Suger",
        slug: "commission-tracking-—-suger",
      },
    ],
  },
  {
    name: "Commission Plan — Suger",
    tags: ["suger"],
    def: "A configurable template in Suger PRM that defines the commission rate, calculation basis, and payout trigger for a class of channel partners or deal types. Plans are applied at the program level with optional per-deal overrides. When a deal closes in the connected CRM, Suger calculates the payout automatically and initiates the full payout lifecycle.",
    alias:
      "Related: Commission Tracking — Suger, Partner Tiering — Suger, SPIFF — Suger",
    source: "https://www.suger.io/prm/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Define a 15% commission rate for resellers on net-new logo deals",
      "Override the standard plan for a strategic partner negotiating a higher rate",
      "Trigger automatic payout calculation when an opportunity closes in Salesforce",
    ],
    context: [
      "Suger PRM",
      "Commission Tracking",
      "Partner Payouts",
      "Salesforce Integration",
    ],
    related: [
      {
        name: "Commission Tracking — Suger",
        slug: "commission-tracking-—-suger",
      },
      { name: "Partner Tiering — Suger", slug: "partner-tiering-—-suger" },
      { name: "SPIFF — Suger", slug: "spiff-—-suger" },
    ],
  },
  {
    name: "SPIFF — Suger",
    tags: ["suger"],
    def: "A short-term performance incentive program (SPIFF) or special performance fund (SPF) configured within Suger PRM to motivate channel partners around a specific product, time window, or deal type. SPIFFs pay a bonus on top of the standard commission plan and are tracked separately with their own payout lifecycle and reporting.",
    alias:
      "Related: Commission Plan — Suger, Commission Tracking — Suger, Partner Relationship Management (PRM) System",
    source: "https://www.suger.io/prm/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Partner Managers", "Channel Partners"],
    useCases: [
      "Run a Q4 SPIFF offering a bonus per deal closed on a new product line",
      "Create a special performance fund to accelerate a specific partner's pipeline",
      "Track SPIFF payouts separately from baseline commissions for clean reporting",
    ],
    context: [
      "Suger PRM",
      "Partner Incentives",
      "Commission Tracking",
      "Partner Portal — Suger",
    ],
    related: [
      { name: "Commission Plan — Suger", slug: "commission-plan-—-suger" },
      {
        name: "Commission Tracking — Suger",
        slug: "commission-tracking-—-suger",
      },
      {
        name: "Partner Relationship Management (PRM) System",
        slug: "partner-relationship-management-prm-system",
      },
    ],
  },
  {
    name: "Learning Management System (LMS) — Suger",
    tags: ["suger"],
    def: "A partner enablement module built into Suger PRM that lets ISVs create and deliver structured training — courses, certifications, and onboarding modules — directly through the partner portal. Content is organized by partner tier or role, with completion tracking that can gate deal registration access or commission eligibility behind required training. Accepts SCORM-compliant course packages so organizations with existing training libraries can import them without rebuilding.",
    alias:
      "Related: SCORM, Partner Portal — Suger, Partner Tiering — Suger, Partner Relationship Management (PRM) System",
    source: "https://www.suger.io/prm/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Partner Managers", "Channel Partners"],
    useCases: [
      "Build product certification tracks for resellers and gate deal registration behind completion",
      "Deliver onboarding courses to new partner tiers automatically on signup",
      "Import existing SCORM training modules into the partner portal without rebuilding them",
      "Track partner enablement completion to qualify commission eligibility by tier",
    ],
    context: [
      "Suger PRM",
      "Partner Portal — Suger",
      "Partner Enablement",
      "Channel Onboarding",
    ],
    related: [
      { name: "SCORM", slug: "scorm" },
      { name: "Partner Portal — Suger", slug: "partner-portal-—-suger" },
      { name: "Partner Tiering — Suger", slug: "partner-tiering-—-suger" },
      {
        name: "Partner Relationship Management (PRM) System",
        slug: "partner-relationship-management-prm-system",
      },
    ],
  },
  {
    name: "SCORM",
    tags: ["general"],
    def: "Sharable Content Object Reference Model — an e-learning technical standard that defines how online training content packages communicate with a learning management system. SCORM-compliant courses can be uploaded to any compatible LMS, which then tracks completion, quiz scores, and time-on-module data without custom integration. Most enterprise training authoring tools (Articulate Storyline, iSpring, Adobe Captivate) export SCORM packages, making it the default interchange format for organizations moving existing training content into a partner enablement platform like Suger PRM.",
    alias:
      "Related: Learning Management System (LMS) — Suger, Partner Portal — Suger",
    source: "https://adlnet.gov/projects/scorm/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Upload existing corporate training assets into Suger PRM partner enablement without rebuilding them",
      "Maintain one training library that works across multiple LMS platforms via SCORM export",
      "Verify partner training completion before granting deal registration or commission eligibility",
    ],
    context: [
      "Partner Enablement",
      "Learning Management System (LMS) — Suger",
      "Suger PRM",
      "E-learning Standards",
    ],
    related: [
      {
        name: "Learning Management System (LMS) — Suger",
        slug: "learning-management-system-lms-—-suger",
      },
      { name: "Partner Portal — Suger", slug: "partner-portal-—-suger" },
    ],
  },
  {
    name: "Microsoft Managed Account — Azure",
    tags: ["azure", "cosell"],
    def: "A customer account classification in Microsoft Partner Center indicating the account is actively managed by Microsoft's sales team. When a partner selects a Microsoft Managed account while creating a co-sell opportunity, the deal becomes eligible for Azure IP co-sell deal registration — a prerequisite for PRACR reporting and co-sell incentive credits. Microsoft Managed accounts appear on a dedicated tab in the Partner Center customer search, alongside Microsoft Unmanaged and Other (Moody's database) tabs, and Microsoft consolidates multiple entries for the same customer into a single linked row.",
    alias:
      "Related: Microsoft Unmanaged Account — Azure, Deal Registration — Azure, Partner Center — Azure, Partner Reported Azure Consumed Revenue (PRACR) — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/referrals/manage-co-sell-opportunities",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers", "Azure Sales"],
    useCases: [
      "Selecting a Microsoft Managed account when creating a co-sell opportunity to unlock Azure IP co-sell deal registration eligibility",
      "Confirming deal registration eligibility before marking a co-sell opportunity as won and submitting for PRACR reporting",
      "Identifying accounts with an existing Microsoft sales relationship to receive faster seller engagement and response",
    ],
    context: [
      "Microsoft Partner Center",
      "Azure Co-sell",
      "Deal Registration",
      "Azure IP Co-sell",
    ],
    related: [
      {
        name: "Microsoft Unmanaged Account — Azure",
        slug: "microsoft-unmanaged-account-—-azure",
      },
      { name: "Deal Registration — Azure", slug: "deal-registration-—-azure" },
      { name: "Partner Center — Azure", slug: "partner-center-—-azure" },
      {
        name: "Partner Reported Azure Consumed Revenue (PRACR) — Azure",
        slug: "partner-reported-azure-consumed-revenue-pracr-—-azure",
      },
    ],
  },
  {
    name: "Microsoft Unmanaged Account — Azure",
    tags: ["azure", "cosell"],
    def: "A customer account classification in Microsoft Partner Center indicating the account does not have an active Microsoft sales team relationship. When a partner selects a Microsoft Unmanaged account while creating a co-sell opportunity, the deal is not eligible for Azure IP co-sell deal registration, which blocks PRACR reporting and co-sell incentive credits for that opportunity. Partners are encouraged to search for Microsoft Managed accounts first; alternatively, selecting from the Other (Moody's database) tab defers managed/unmanaged determination to Microsoft's internal account-matching process after the referral is created.",
    alias:
      "Related: Microsoft Managed Account — Azure, Deal Registration — Azure, Partner Center — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/referrals/manage-co-sell-opportunities",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers", "Azure Sales"],
    useCases: [
      "Identifying customer accounts where Azure IP co-sell deal registration is unavailable before committing to co-sell motions",
      "Understanding why a specific deal does not qualify for PRACR reporting or co-sell incentive credits",
      "Deciding whether to proceed with a private or partner-led deal when no Microsoft Managed account match is found",
    ],
    context: [
      "Microsoft Partner Center",
      "Azure Co-sell",
      "Deal Registration",
      "Azure IP Co-sell",
    ],
    related: [
      {
        name: "Microsoft Managed Account — Azure",
        slug: "microsoft-managed-account-—-azure",
      },
      { name: "Deal Registration — Azure", slug: "deal-registration-—-azure" },
      { name: "Partner Center — Azure", slug: "partner-center-—-azure" },
    ],
  },
  {
    name: "AI-Assisted Product Listing — AWS",
    tags: ["aws"],
    def: "An AI capability in AWS Partner Central and AMMP (launched June 16, 2026) that automatically generates and validates product listing content for AWS Marketplace from existing seller digital assets — website URLs, PDFs, case studies, and product documentation. Partner Assistant reads imported materials and produces content across all required listing fields (description, highlights, categories, metadata), validates against AWS Marketplace size and format requirements, and returns a quality score comparing the listing against AWS best practices. Not available in GovCloud or China Regions.",
    alias:
      "Related: AWS Marketplace — AWS, AWS Partner Central Agents — AWS, Listing",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/partner-assistant.html",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Generating complete AWS Marketplace listing content from existing product documentation and marketing materials without manual data entry",
      "Validating listing quality and completeness before submitting to AWS Marketplace for review",
      "Optimizing listing discoverability by applying AI-generated field recommendations against AWS Marketplace best practices",
    ],
    context: [
      "AWS Marketplace Management Portal (AMMP)",
      "AWS Partner Central",
      "Partner Assistant",
      "Listing Creation",
    ],
    related: [
      { name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" },
      {
        name: "AWS Partner Central Agents — AWS",
        slug: "aws-partner-central-agents-—-aws",
      },
      { name: "Listing", slug: "listing" },
    ],
  },
  {
    name: "AWS Marketplace MCP Server — AWS",
    tags: ["aws"],
    def: "An AWS-provided Model Context Protocol (MCP) server (GA May 2026) that enables AI assistants and agents to programmatically discover, evaluate, and transact AWS Marketplace products using natural language queries. Capabilities include finding products by business need, generating AI-written vendor comparison reports, and producing purchase proposals tailored to buyer requirements. Available without coding via the AWS Marketplace connector for Claude, where tool discovery and invocation happen automatically. Distinct from Suger's MCP Integration, which connects Suger platform workflows to AI models — this MCP server is buyer-facing and focused on product discovery and procurement.",
    alias:
      "Related: MCP Integration — Suger, AWS Marketplace — AWS, AWS Partner Central Agents — AWS",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/APIReference/marketplace-mcp-server.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["Enterprise Buyers", "ISVs / Sellers", "Suger Users"],
    useCases: [
      "Discovering AWS Marketplace products by business need using natural language queries through an AI assistant",
      "Generating side-by-side vendor comparison reports without manually navigating the AWS Marketplace console",
      "Automating purchase proposal creation for procurement workflows that route through an AI-native interface",
    ],
    context: [
      "AWS Marketplace",
      "AI Agents and Tools",
      "Model Context Protocol (MCP)",
      "Buyer Discovery",
    ],
    related: [
      { name: "MCP Integration — Suger", slug: "mcp-integration-—-suger" },
      { name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" },
      {
        name: "AWS Partner Central Agents — AWS",
        slug: "aws-partner-central-agents-—-aws",
      },
    ],
  },
  {
    name: "Frontier Accelerate for Marketplace — Azure",
    tags: ["azure", "offers", "cosell"],
    def: "Microsoft's unified ISV program for FY27 (launching fall 2026) that consolidates ISV Success, Marketplace Rewards, Azure IP co-sell, and Solutions Partner with certified software designations into a single enrollment and benefits track. Azure sponsorship within Frontier Accelerate is restructured into use-case-specific allocations: a larger dedicated allowance for customer deployments and a smaller separate allowance for no-cost trials. The program is designed to reduce administrative overhead for software companies transacting on Microsoft Marketplace by eliminating the need to manage multiple separate program enrollments.",
    alias:
      "Related: ISV Success Program — Azure, Marketplace Rewards — Azure, Co-sell Eligible / Incentivized — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/announcements/2026-june",
    difficulty: "intermediate",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Enrolling in a single program to access ISV co-marketing, Azure IP co-sell eligibility, and Marketplace transact benefits without managing separate program memberships",
      "Allocating Azure sponsorship credits separately for customer deployments versus no-cost trial environments under the FY27 use-case structure",
      "Planning go-to-market strategy for FY27 using the unified Frontier Accelerate benefit track across Azure Marketplace",
    ],
    context: [
      "Microsoft Partner Center",
      "Azure Marketplace",
      "ISV Go-to-Market",
      "FY27 Partner Programs",
    ],
    related: [
      {
        name: "ISV Success Program — Azure",
        slug: "isv-success-program-—-azure",
      },
      {
        name: "Marketplace Rewards — Azure",
        slug: "marketplace-rewards-—-azure",
      },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
    ],
  },
  {
    name: "Lead Enrichment — AWS",
    tags: ["aws", "cosell"],
    def: "An AWS Partner Central capability (launched June 15, 2026) that augments partner-uploaded or AWS-sourced leads with AWS-generated propensity-to-buy signals and program eligibility recommendations. For each lead, the feature returns a Marketplace purchase likelihood score (High/Medium/Low), alignment with AWS solution categories, and eligibility flags for programs including Partner Greenfield Program (PGP), Pioneer Credits, and Partner-Led Sales Motion. Available to all ACE-eligible AWS Partners via the Partner Central console and Partner Central API (US East N. Virginia Region).",
    alias:
      "Related: APN Customer Engagements (ACE) — AWS, Partner Greenfield Program (PGP) — AWS, AWS Marketplace Engagement Score — AWS, AWS Partner Central Agents — AWS",
    source:
      "https://docs.aws.amazon.com/partner-central/latest/sales-guide/lead-enrichment.html",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Suger Users", "AWS Sales"],
    useCases: [
      "Prioritizing high-value leads by surfacing AWS-generated propensity signals before investing in outreach or co-sell motions",
      "Identifying which accounts are eligible for PGP, Pioneer Credits, or Partner-Led Sales Motion before submitting ACE opportunities",
      "Enriching partner-generated leads programmatically via the Partner Central API to feed into CRM scoring workflows",
    ],
    context: [
      "AWS Partner Central",
      "APN Customer Engagements (ACE)",
      "Pipeline Management",
      "Partner-Led Sales",
    ],
    related: [
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
      {
        name: "Partner Greenfield Program (PGP) — AWS",
        slug: "partner-greenfield-program-pgp-—-aws",
      },
      {
        name: "AWS Marketplace Engagement Score — AWS",
        slug: "aws-marketplace-engagement-score-—-aws",
      },
      {
        name: "AWS Partner Central Agents — AWS",
        slug: "aws-partner-central-agents-—-aws",
      },
    ],
  },
  {
    name: "Amazon Connect Customer Services Competency — AWS",
    tags: ["aws"],
    def: "An AWS Specialization (announced June 2026) that recognizes Services Partners with validated expertise in transforming enterprise customer experience on Amazon Connect. Partners are validated in two categories: Contact Center Transformation (migrating legacy contact center infrastructure) and AI-Powered Customer Experience (operationalizing AI at scale on Amazon Connect). The Competency replaces the Amazon Connect Service Delivery Program, which is deprecated June 1, 2027. Benefits include $50K Marketing Development Funds (MDF) in both 2026 and 2027, AWS Migration Acceleration Program funding for customer migrations, and dedicated co-selling support.",
    alias:
      "Related: Marketing Development Funds (MDF) — AWS, AWS Marketplace — AWS",
    source:
      "https://aws.amazon.com/about-aws/whats-new/2026/06/aws-announces-amazon-connect-customer-services-competency/",
    difficulty: "advanced",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "AWS Sales", "Partner Managers"],
    useCases: [
      "Earning validated partner status in Contact Center Transformation or AI-Powered CX to differentiate in AWS customer-facing sales motions",
      "Qualifying for $50K MDF and MAP funding to offset customer migration costs and co-marketing spend",
      "Replacing Amazon Connect Service Delivery Program credentials before the June 2027 deprecation deadline",
    ],
    context: [
      "AWS Partner Network (APN)",
      "AWS Specializations",
      "Amazon Connect",
      "Partner Marketing",
    ],
    related: [
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
      },
      { name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" },
    ],
  },
  {
    name: "Suger AI — Suger",
    tags: ["suger"],
    def: "An in-product AI copilot embedded across the Suger platform that queries offers, diagnoses failures, fills forms, and navigates the console without requiring users to leave the current page. In co-sell workflows, Suger AI provides autofill from CRM data and AI-mapped fields, reducing manual entry by approximately 80%. Also powers chat-based dashboard creation, automated workflow recommendations, and AI-driven analytics insights within the Suger console. Suger AI is distinct from Insulin, which is the AI layer surfaced to end-buyers and channel partners through embedded marketplace experiences.",
    alias: "Related: Insulin, MCP Integration — Suger, Insulin Agent — Suger",
    source: "https://www.suger.io/platform/ai-intelligence/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users", "Partner Managers"],
    useCases: [
      "Autofilling co-sell opportunity fields from CRM and meeting data to reduce manual entry and submission errors",
      "Querying offer status, diagnosing submission failures, and navigating marketplace workflows using natural language within the Suger console",
      "Creating and modifying analytics dashboards through conversational AI without writing queries or editing layout manually",
    ],
    context: [
      "Suger Platform",
      "Co-sell Automation",
      "AI Copilot",
      "Suger Console",
    ],
    related: [
      { name: "Insulin", slug: "insulin" },
      { name: "MCP Integration — Suger", slug: "mcp-integration-—-suger" },
      { name: "Insulin Agent — Suger", slug: "insulin-agent-—-suger" },
    ],
  },
  {
    name: "Insulin Chat — Suger",
    tags: ["suger"],
    def: "The conversational interface layer of the Suger Insulin platform through which users interact with Insulin agents in multi-turn threads. Supports streaming token-by-token responses, tool execution with expandable status indicators (running/succeeded/failed), and two safety gates: plan approvals (user confirms a multi-step task before execution) and tool approvals (explicit authorization required before data-modifying actions). Automatically retains conversation history both short-term and across sessions, and supports context chips for attaching files, images, or code snippets to messages. Distinct from Insulin Agent, which is the underlying AI system — Chat is the interface layer that presents Agent responses.",
    alias:
      "Related: Insulin Agent — Suger, Insulin, Insulin Channel — Suger, Suger AI — Suger",
    source: "https://doc.suger.io/insulin/chat/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["Suger Users"],
    useCases: [
      "Running multi-turn conversations with an Insulin agent to diagnose marketplace failures, query offer status, or generate co-sell content without leaving the Suger console",
      "Using plan approvals to review and confirm a multi-step agent task before it executes data-modifying operations",
      "Attaching deal documents, emails, or screenshots as context chips to give an Insulin agent the necessary context for a co-sell or offer task",
    ],
    context: [
      "Suger Insulin",
      "Insulin Agents",
      "Suger Console",
      "Conversational AI",
    ],
    related: [
      { name: "Insulin Agent — Suger", slug: "insulin-agent-—-suger" },
      { name: "Insulin", slug: "insulin" },
      { name: "Insulin Channel — Suger", slug: "insulin-channel-—-suger" },
      { name: "Suger AI — Suger", slug: "suger-ai-—-suger" },
    ],
  },
  {
    name: "Business Value Realization (BVR) Competency — AWS",
    tags: ["aws", "cosell"],
    def: "A standalone AWS Specialization (launched June 2026) that designates AWS Services Partners with demonstrated expertise in connecting customers' AWS technology investments to measurable business outcomes — cost savings, productivity gains, or revenue growth. Validated partners deliver Value Realization Plans linking specific AWS workloads to trackable business results, extending partner engagement beyond technical delivery into post-sales customer success. Benefits include $50K in MDF (2026–2027), priority placement in the AWS Partner Solutions Finder, access to the BVR Toolkit (industry-specific templates, benchmarks, and use case models), and a dedicated Partner Success Specialist. Distinct from the Business Value Realization (BVR) Motion — the Motion is the broader post-sales framework with funding and enablement; the Competency is the formal designation earned to access those Motion benefits.",
    alias:
      "Related: Business Value Realization (BVR) Motion — AWS, Marketing Development Funds (MDF) — AWS",
    source: "https://aws.amazon.com/partners/business-value-realization/",
    difficulty: "advanced",
    category: "advanced",
    whoFor: ["Partner Managers", "AWS Sales"],
    useCases: [
      "Pursuing the BVR Competency to earn the AWS Specialization badge and unlock $50K MDF for customer-facing business value programs",
      "Using the BVR Toolkit templates and benchmarks to build industry-specific Value Realization Plans that quantify ROI from AWS-powered implementations",
      "Demonstrating validated post-sales customer success expertise to differentiate from competitors in the AWS Partner Solutions Finder",
    ],
    context: [
      "AWS Partner Network (APN)",
      "AWS Specializations",
      "AWS Partner Solutions Finder",
      "Post-Sales Customer Success",
    ],
    related: [
      {
        name: "Business Value Realization (BVR) Motion — AWS",
        slug: "business-value-realization-bvr-motion-—-aws",
      },
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
      },
    ],
  },
  {
    name: "Partner Marketing Center Pro — Azure",
    tags: ["azure"],
    def: "The AI-powered tier of Microsoft's Partner Marketing Center, launched in 2026 as part of the Frontier partner push. Eligibility requires an active Microsoft partner benefits package, a Solutions Partner designation, or enrollment in ISV Success. The Pro tier adds AI-driven content generation for marketing campaign assets — decks, social posts, email templates, landing pages, and display ads — created from guided questions about a partner's ideal customer profile, target industries, and value proposition. The standard Partner Marketing Center remains available to all partners; the Pro tier provides audience-specific AI customization plus social and email scheduling and an analytics dashboard.",
    alias:
      "Related: ISV Success Program — Azure, Frontier Accelerate for Marketplace — Azure, Marketplace Rewards — Azure",
    source:
      "https://blogs.microsoft.com/blog/2026/04/21/accelerating-frontier-transformation-with-microsoft-partners/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Generating AI-customized marketing campaign assets for a specific industry vertical or customer profile without engaging an agency",
      "Creating coordinated multi-format campaign materials (social posts, email sequences, display ads, decks) from a single audience brief via the Partner Marketing Center Pro AI generation flow",
      "Accessing the Pro tier as an ISV Success participant to complement Azure Marketplace go-to-market benefits with AI-powered demand generation content",
    ],
    context: [
      "Microsoft Partner Center",
      "Azure Marketplace",
      "ISV Go-to-Market",
      "Partner Marketing",
    ],
    related: [
      {
        name: "ISV Success Program — Azure",
        slug: "isv-success-program-—-azure",
      },
      {
        name: "Frontier Accelerate for Marketplace — Azure",
        slug: "frontier-accelerate-for-marketplace-—-azure",
      },
      {
        name: "Marketplace Rewards — Azure",
        slug: "marketplace-rewards-—-azure",
      },
    ],
  },
  {
    name: "Microsoft Publisher Agreement — Azure",
    tags: ["azure", "offers"],
    def: "The legal contract between Microsoft and publishers transacting on Microsoft Marketplace (commercial marketplace, AppSource, Azure Marketplace). Version 8.0 (effective July 1, 2026) introduced three significant provisions: an AI Systems section requiring publishers to comply with EU AI Act Article 5 prohibited practices and submit AI conformity documentation; a Marketplace Facilitator Tax (MFT) provision where Microsoft collects and remits sales tax in eligible U.S. jurisdictions while publishers remain liable for amounts arising from incorrect information they provide; and a Sovereign Cloud Operator Marketplace section enabling publishers to offer products on SCO-operated clouds where Microsoft acts as agent or commissionaire. For Multiparty Private Offers, the agreement clarifies that the Store Service Fee applies only to the ISV Price, not the partner markup.",
    alias:
      "Related: Multiparty Private Offer (MPO) — Azure, Marketplace Rewards — Azure, ISV Success Program — Azure",
    source:
      "https://learn.microsoft.com/en-us/legal/marketplace/msft-publisher-agreement",
    difficulty: "advanced",
    category: "advanced",
    whoFor: ["ISVs / Sellers", "Partner Managers"],
    useCases: [
      "Reviewing the Publisher Agreement v8.0 AI Systems requirements before listing an AI-powered product on Microsoft Marketplace to ensure EU AI Act compliance",
      "Understanding Marketplace Facilitator Tax handling to determine publisher liability for sales tax in U.S. jurisdictions where Microsoft remits on behalf of the publisher",
      "Assessing Sovereign Cloud Operator Marketplace provisions when planning to offer products on government or restricted SCO-operated clouds",
    ],
    context: [
      "Microsoft Marketplace",
      "Azure Marketplace",
      "Partner Center — Azure",
      "Publisher Compliance",
    ],
    related: [
      {
        name: "Multiparty Private Offer (MPO) — Azure",
        slug: "multiparty-private-offer-mpo-—-azure",
      },
      {
        name: "Marketplace Rewards — Azure",
        slug: "marketplace-rewards-—-azure",
      },
      {
        name: "ISV Success Program — Azure",
        slug: "isv-success-program-—-azure",
      },
    ],
  },
  {
    name: "Notion Integration — Suger",
    tags: ["suger", "integrations"],
    def: "A user-level OAuth 2.0 integration that connects an individual Suger user's Notion workspace account to Suger, enabling Notion workspace access within automation workflows. Each user authenticates independently with their own Notion credentials. Deletion immediately revokes Notion access; to switch accounts, the integration must be deleted and recreated.",
    alias: "Related: Integration, MCP Integration — Suger",
    source: "https://doc.suger.io/integrations/notion/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["Suger Users"],
    useCases: [
      "Triggering Notion page creation or database updates from Suger marketplace events in an automation workflow",
      "Accessing Notion workspace content within Suger AI to provide context for deal documentation or knowledge management tasks",
    ],
    context: ["Suger Console", "Suger Integrations", "Automation Workflows"],
    related: [
      { name: "Integration", slug: "integration" },
      { name: "MCP Integration — Suger", slug: "mcp-integration-—-suger" },
    ],
  },
  {
    name: "Asana Integration — Suger",
    tags: ["suger", "integrations"],
    def: "A user-level OAuth 2.0 integration that connects an individual Suger user's Asana account to Suger, enabling task and project management from automation workflows. Supports creating, updating, and managing tasks and projects, updating project status, and accessing workspace data. A separate Asana MCP variant (connecting to mcp.asana.com) is also available for Suger AI tool use within Insulin agents.",
    alias: "Related: Integration, MCP Integration — Suger",
    source: "https://doc.suger.io/integrations/asana/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["Suger Users"],
    useCases: [
      "Auto-creating Asana tasks from Suger marketplace events such as a new entitlement activation or co-sell opportunity status change",
      "Connecting the Asana MCP variant to give Insulin agents direct access to Asana task creation and project management tools",
    ],
    context: ["Suger Console", "Suger Integrations", "Automation Workflows"],
    related: [
      { name: "Integration", slug: "integration" },
      { name: "MCP Integration — Suger", slug: "mcp-integration-—-suger" },
    ],
  },
  {
    name: "Atlassian Integration — Suger",
    tags: ["suger", "integrations"],
    def: "A user-level OAuth 2.0 integration that connects an individual Suger user's Atlassian account to Suger, covering Jira (issue tracking), Confluence (documentation), and Bitbucket (code collaboration) under a single integration. Enables auto-creating Jira issues and updating Confluence pages from marketplace automation workflows. Each user authenticates with their own Atlassian credentials; no org-level variant exists.",
    alias: "Related: Integration, MCP Integration — Suger",
    source: "https://doc.suger.io/integrations/atlassian/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["Suger Users"],
    useCases: [
      "Auto-creating Jira issues when a Suger co-sell opportunity reaches a specific stage or when a marketplace entitlement triggers a provisioning task",
      "Updating Confluence documentation pages automatically from Suger marketplace events in an automation workflow",
    ],
    context: ["Suger Console", "Suger Integrations", "Automation Workflows"],
    related: [
      { name: "Integration", slug: "integration" },
      { name: "MCP Integration — Suger", slug: "mcp-integration-—-suger" },
    ],
  },
  {
    name: "ClickUp Integration — Suger",
    tags: ["suger", "integrations"],
    def: "A user-level OAuth 2.0 integration that connects an individual Suger user's ClickUp account to Suger, enabling task and project management from automation workflows. Supports listing workspaces, spaces, folders, and tasks; creating, updating, and retrieving tasks with filtering; adding and retrieving task comments; and fetching task attachments. Suger AI wraps the ClickUp API directly using each user's personal OAuth credentials.",
    alias: "Related: Integration, MCP Integration — Suger",
    source: "https://doc.suger.io/integrations/clickup/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["Suger Users"],
    useCases: [
      "Creating ClickUp tasks automatically when Suger marketplace events require action, such as a new private offer request or co-sell opportunity update",
      "Using Suger AI to query ClickUp task status and manage project items directly from the Suger console via Insulin agents",
    ],
    context: ["Suger Console", "Suger Integrations", "Automation Workflows"],
    related: [
      { name: "Integration", slug: "integration" },
      { name: "MCP Integration — Suger", slug: "mcp-integration-—-suger" },
    ],
  },
  {
    name: "Monday.com Integration — Suger",
    tags: ["suger", "integrations"],
    def: "A user-level OAuth 2.0 integration that connects an individual Suger user's Monday.com account to Suger, providing access to boards, workspaces, and user-specific data within automation workflows. Each user authenticates with their own Monday.com credentials; no org-level variant exists.",
    alias: "Related: Integration, MCP Integration — Suger",
    source: "https://doc.suger.io/integrations/monday/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["Suger Users"],
    useCases: [
      "Reading Monday.com board and workspace data from Suger automation workflows to synchronize marketplace deal status with project tracking",
      "Triggering Monday.com item updates from Suger events such as entitlement activations or offer acceptances",
    ],
    context: ["Suger Console", "Suger Integrations", "Automation Workflows"],
    related: [
      { name: "Integration", slug: "integration" },
      { name: "MCP Integration — Suger", slug: "mcp-integration-—-suger" },
    ],
  },
  {
    name: "GitHub Integration — Suger",
    tags: ["suger", "integrations"],
    def: "A Suger integration available in two variants: an org-level GitHub App installation (requires org owner/admin privileges, provides org-wide repository access) and a user-level personal OAuth connection. When both are active, the user-level connection takes precedence. Supports tracking repository activity, correlating development data with marketplace sales operations, and using GitHub tooling via Suger AI Insulin agents.",
    alias: "Related: Integration, MCP Integration — Suger",
    source: "https://doc.suger.io/integrations/github/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["Suger Users"],
    useCases: [
      "Installing the org-level GitHub App to give Suger access to all organization repositories for development activity correlation with marketplace deals",
      "Connecting a personal GitHub OAuth account to Suger AI for use by Insulin agents to access repository data and developer workflows",
    ],
    context: ["Suger Console", "Suger Integrations", "Automation Workflows"],
    related: [
      { name: "Integration", slug: "integration" },
      { name: "MCP Integration — Suger", slug: "mcp-integration-—-suger" },
    ],
  },
  {
    name: "GitLab Integration — Suger",
    tags: ["suger", "integrations"],
    def: "A Suger integration for automating developer workflows in GitLab — browsing projects and groups, reading and writing repository files, branches, and commits, managing issues and merge requests, and driving CI/CD pipelines, jobs, and releases. Supports an org-level access token (service account, Group Access Token, or personal access token, including self-managed GitLab instances) or a user-level OAuth connection to GitLab.com. Access tokens expire and must be rotated and reconnected before they lapse, or GitLab calls start failing; the integration cannot be edited in place, only deleted and recreated.",
    alias: "Related: GitHub Integration — Suger, Integration",
    source: "https://doc.suger.io/integrations/gitlab/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["Suger Users", "ISVs / Sellers"],
    useCases: [
      "Connecting a GitLab service account access token to Suger so Insulin agents can drive CI/CD pipelines and merge request workflows",
      "Rotating an expiring GitLab access token and reconnecting the integration before API calls start failing",
    ],
    context: ["Suger Console", "GitLab", "Insulin Agents"],
    related: [
      { name: "GitHub Integration — Suger", slug: "github-integration-—-suger" },
      { name: "Integration", slug: "integration" },
    ],
  },
  {
    name: "Databricks Integration — Suger",
    tags: ["suger", "integrations"],
    def: "A Suger integration with the Databricks Data Intelligence Platform for automating data and AI workflows — executing SQL queries, uploading data files, and triggering Databricks jobs from within Suger. Authenticates via a personal access token or an OAuth service principal (client ID and client secret) plus the Databricks host URL. Distinct from Databricks Marketplace, which is Databricks' own product marketplace rather than this data-platform connector. Cannot be edited after creation — credentials must be updated by deleting and recreating the integration.",
    alias: "Related: Databricks Marketplace, Google BigQuery Integration",
    source: "https://doc.suger.io/integrations/databricks/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["Suger Users", "ISVs / Sellers"],
    useCases: [
      "Triggering a Databricks job from Suger after a marketplace entitlement event, using OAuth service principal credentials",
      "Distinguishing the Databricks Integration (data/AI workflow connector) from Databricks Marketplace (Databricks' own product listing platform)",
    ],
    context: ["Suger Console", "Databricks Data Intelligence Platform"],
    related: [
      { name: "Databricks Marketplace", slug: "databricks-marketplace" },
      {
        name: "Google BigQuery Integration",
        slug: "google-bigquery-integration",
      },
    ],
  },
  {
    name: "Snowflake Marketplace Integration — Suger",
    tags: ["suger", "snowflake", "integrations"],
    def: "Suger's organization-level connection to Snowflake Marketplace, the platform vendors use to discover, evaluate, and monetize data applications and services. Distinct from Snowflake Integration, which streams Suger's own marketplace data into a Snowflake data warehouse — this integration connects to Snowflake's data-application marketplace itself for billing and product-listing management. Requires an active Snowflake account with API access and marketplace billing permissions; cannot be edited after creation, only deleted and recreated, which does not affect data already stored in Snowflake Marketplace.",
    alias: "Related: Snowflake Integration, Snowflake Marketplace — Snowflake",
    source: "https://doc.suger.io/integrations/snowflake-marketplace/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Connecting Suger to Snowflake Marketplace to manage billing for data application listings",
      "Distinguishing Snowflake Marketplace Integration (Snowflake's data-app marketplace) from Snowflake Integration (streaming Suger data into a Snowflake warehouse)",
    ],
    context: ["Suger Console", "Snowflake Marketplace"],
    related: [
      { name: "Snowflake Integration", slug: "snowflake-integration" },
      {
        name: "Snowflake Marketplace — Snowflake",
        slug: "snowflake-marketplace-—-snowflake",
      },
    ],
  },
  {
    name: "AWS Marketplace Integration — Suger",
    tags: ["suger", "aws", "integrations"],
    def: "Suger's organization-level connection to AWS Marketplace for consolidated billing, procurement, and usage metering across an ISV's SaaS listings. Setup requires an active AWS Marketplace seller account, an AWS account with marketplace API access, and appropriate IAM permissions; authorization runs through OAuth with a seller account, then selecting the linked AWS accounts to sync. Distinct from AWS ACE Integration (co-sell and funding data) and AWS Billing Integration (organization-wide cost management) — this integration is specifically the core marketplace listing, procurement, and metering connection. Cannot be edited after creation — deleting it may affect active marketplace subscriptions and billing relationships.",
    alias:
      "Related: AWS Marketplace — AWS, AWS ACE Integration, AWS Billing Integration — Suger",
    source: "https://doc.suger.io/integrations/aws-marketplace/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Connecting Suger to an AWS Marketplace seller account via OAuth to centralize billing, procurement, and usage metering",
      "Selecting the correct linked AWS accounts during setup so marketplace data syncs to the right listings",
    ],
    context: ["Suger Console", "AWS Marketplace", "AWS IAM"],
    related: [
      { name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" },
      { name: "AWS ACE Integration", slug: "aws-ace-integration" },
      {
        name: "AWS Billing Integration — Suger",
        slug: "aws-billing-integration-—-suger",
      },
    ],
  },
  {
    name: "AWS Billing Integration — Suger",
    tags: ["suger", "aws", "integrations"],
    def: "Suger's organization-level connection to AWS billing infrastructure for syncing billing data, managing costs, and centralizing financial operations across an ISV's AWS accounts. Requires an AWS Organization master or linked account with Billing and Cost Management permissions; authenticated via OAuth, with no user-level option. The integration cannot be edited after creation — changes require deleting and recreating it, which can disrupt billing data sync and cost reporting until reconnected.",
    alias:
      "Related: Marketplace Data Feed Service (MDFS) — AWS, Marketplace Commerce Analytics Service (MCAS) — AWS",
    source: "https://doc.suger.io/integrations/aws-billing/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Connecting Suger to an AWS Organization master account to sync billing data and centralize cost reporting",
      "Understanding that AWS Billing Integration is organization-level only, with no user-level connection option",
    ],
    context: [
      "Suger Console",
      "AWS Organizations",
      "Billing and Cost Management",
    ],
    related: [
      {
        name: "Marketplace Data Feed Service (MDFS) — AWS",
        slug: "marketplace-data-feed-service-mdfs-—-aws",
      },
      {
        name: "Marketplace Commerce Analytics Service (MCAS) — AWS",
        slug: "marketplace-commerce-analytics-service-mcas-—-aws",
      },
    ],
  },
  {
    name: "Azure Marketplace Integration — Suger",
    tags: ["suger", "azure", "integrations"],
    def: "Suger's organization-level connection to Azure Marketplace for consolidated billing, procurement, and usage metering across an ISV's Azure SaaS listings. Setup requires an active Azure Marketplace seller account, a Microsoft Partner Network (MPN) account, and an Azure subscription with marketplace permissions; authorization runs through Microsoft/Azure OAuth with selectable target subscriptions. The integration cannot be edited in place — deleting and recreating it can disrupt active marketplace subscriptions and billing relationships until reconnected.",
    alias:
      "Related: Microsoft Marketplace — Azure, Partner Center — Azure, Microsoft AI Cloud Partner Program (MPN) — Azure",
    source: "https://doc.suger.io/integrations/azure-marketplace/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Connecting Suger to Azure Marketplace via Microsoft OAuth to centralize billing, procurement, and usage metering",
      "Selecting the correct Azure subscriptions during setup so marketplace data syncs to the right listings",
    ],
    context: ["Suger Console", "Microsoft Partner Center", "Azure Marketplace"],
    related: [
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
      },
      { name: "Partner Center — Azure", slug: "partner-center-—-azure" },
      {
        name: "Microsoft AI Cloud Partner Program (MPN) — Azure",
        slug: "microsoft-ai-cloud-partner-program-mpn-—-azure",
      },
    ],
  },
  {
    name: "Azure Co-sell Integration — Suger",
    tags: ["suger", "azure", "cosell", "integrations"],
    def: "Suger's organization-level connection to Microsoft's co-sell program through the One Commercial Partner (OCP) ecosystem, letting ISVs manage joint-selling opportunities with Microsoft sales teams inside Suger. Setup requires an active Microsoft Partner Network (MPN) account, Azure Active Directory tenant access, enrollment in the Azure Co-sell program, and the right Partner Center role; authorization runs through Microsoft OAuth with configurable opportunity-sync settings. Cannot be edited after creation — deleting and recreating it can affect active co-sell opportunities and partner relationships.",
    alias:
      "Related: Microsoft-Sourced Opportunity Referral (MSOR) — Azure, Co-Sell Insights — Suger, Co-sell Intelligence — Suger",
    source: "https://doc.suger.io/integrations/azure-cosell/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers", "Suger Users"],
    useCases: [
      "Connecting Suger to Microsoft's OCP ecosystem so Azure co-sell opportunities sync automatically instead of manual Partner Center tracking",
      "Verifying MPN enrollment and Partner Center role permissions before authorizing the Azure Co-sell OAuth connection",
    ],
    context: [
      "Suger Console",
      "Microsoft Partner Center",
      "Azure Co-sell Program",
    ],
    related: [
      {
        name: "Microsoft-Sourced Opportunity Referral (MSOR) — Azure",
        slug: "microsoft-sourced-opportunity-referral-msor-—-azure",
      },
      { name: "Co-Sell Insights — Suger", slug: "co-sell-insights-—-suger" },
      {
        name: "Co-sell Intelligence — Suger",
        slug: "co-sell-intelligence-—-suger",
      },
    ],
  },
  {
    name: "GCP Marketplace Integration — Suger",
    tags: ["suger", "gcp", "integrations"],
    def: "Suger's organization-level connection to Google Cloud Marketplace for unified billing, procurement, and usage tracking across an ISV's GCP SaaS listings. Setup requires an active Google Cloud Marketplace seller account with completed seller onboarding and a GCP organization with billing enabled; authorization runs through Google Cloud OAuth with selectable GCP projects. Cannot be edited after creation — deleting the integration may affect active marketplace subscriptions and billing relationships.",
    alias: "Related: GCP Marketplace — GCP, Producer Portal — GCP",
    source: "https://doc.suger.io/integrations/gcp-marketplace/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Connecting Suger to Google Cloud Marketplace via OAuth to centralize billing and usage tracking across GCP listings",
      "Selecting the correct GCP projects during setup so marketplace data syncs to the right products",
    ],
    context: ["Suger Console", "GCP Marketplace", "Google Cloud Organization"],
    related: [
      { name: "GCP Marketplace — GCP", slug: "gcp-marketplace-—-gcp" },
      { name: "Producer Portal — GCP", slug: "producer-portal-—-gcp" },
    ],
  },
  {
    name: "GCP Co-sell Integration — Suger",
    tags: ["suger", "gcp", "cosell", "integrations"],
    def: "Suger's organization-level connection to Google Cloud's co-sell program through Partner Advantage, letting ISVs manage joint-selling opportunities with Google Cloud sales teams inside Suger. Setup requires active Google Cloud Partner Advantage membership, enrollment in the GCP Co-sell program, and Partner Administrator access; sellers add Suger's Google Service Account as an Integrator in the Partner Network Hub, then enter their Partner ID in Suger to complete the connection. Cannot be edited after creation — deleting and recreating it can affect active co-sell opportunities and partner relationships.",
    alias:
      "Related: Google Cloud Partner Network — GCP, Google Cloud Partner Agent — GCP, Co-Sell Insights — Suger",
    source: "https://doc.suger.io/integrations/gcp-cosell/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Partner Managers", "Suger Users"],
    useCases: [
      "Adding Suger's Google Service Account as an Integrator in the Partner Network Hub to enable GCP co-sell sync",
      "Entering a Partner ID in Suger Settings to complete the GCP Co-sell connection and start managing opportunities with Google sales teams",
    ],
    context: [
      "Suger Console",
      "Google Cloud Partner Advantage",
      "Partner Network Hub",
    ],
    related: [
      {
        name: "Google Cloud Partner Network — GCP",
        slug: "google-cloud-partner-network-—-gcp",
      },
      {
        name: "Google Cloud Partner Agent — GCP",
        slug: "google-cloud-partner-agent-—-gcp",
      },
      { name: "Co-Sell Insights — Suger", slug: "co-sell-insights-—-suger" },
    ],
  },
  {
    name: "AWS China Marketplace Integration — Suger",
    tags: ["suger", "aws", "integrations"],
    def: "An org-level OAuth integration that connects a Suger organization to AWS China Marketplace — a localized marketplace for mainland China operated by AWS's local China partners. Enables marketplace seller operations within the China region, distinct from the standard global AWS Marketplace integration. Requires an AWS China Marketplace seller account, an AWS China region account with marketplace access, and localized business credentials for the China region. Deletion may impact active marketplace subscriptions in the China region.",
    alias: "Related: Integration, Alibaba Marketplace Integration — Suger",
    source: "https://doc.suger.io/integrations/aws-china-marketplace/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["Suger Users", "ISVs / Sellers"],
    useCases: [
      "Connecting Suger to AWS China Marketplace to manage seller operations, entitlements, and billing events for the China market alongside global AWS operations",
      "Enabling marketplace subscriptions and billing events for China-region buyers through the dedicated AWS China Marketplace infrastructure",
    ],
    context: [
      "Suger Console",
      "AWS China Marketplace",
      "Suger Integrations",
      "China Region",
    ],
    related: [
      { name: "Integration", slug: "integration" },
      {
        name: "Alibaba Marketplace Integration — Suger",
        slug: "alibaba-marketplace-integration-—-suger",
      },
    ],
  },
  {
    name: "Dropbox Integration — Suger",
    tags: ["suger", "integrations"],
    def: "A Suger integration available in two variants: an org-level Dropbox Business connection (requires admin privileges, adds team member info and team-wide file access) and a user-level personal account connection (limited to personal files and folders). Supports reading file metadata and content, writing files, and managing sharing. Deletion removes credentials from Suger but requires separate disconnection at dropbox.com to fully revoke access.",
    alias:
      "Related: Integration, Google Drive Integration, Google Cloud Storage Integration",
    source: "https://doc.suger.io/integrations/dropbox/",
    difficulty: "beginner",
    category: "operations",
    whoFor: ["Suger Users"],
    useCases: [
      "Accessing Dropbox Business team files from Suger automation workflows for document generation or deal artifact management",
      "Using Suger AI to read and write Dropbox files within Insulin agent workflows for co-sell documentation tasks",
    ],
    context: ["Suger Console", "Suger Integrations", "File Storage"],
    related: [
      { name: "Integration", slug: "integration" },
      { name: "Google Drive Integration", slug: "google-drive-integration" },
      {
        name: "Google Cloud Storage Integration",
        slug: "google-cloud-storage-integration",
      },
    ],
  },
  {
    name: "Google Calendar Integration — Suger",
    tags: ["suger", "integrations"],
    def: "An org-level Suger integration that uses a GCP service account with Domain-wide Delegation to manage Google Calendar on behalf of a specified user email. Unlike OAuth-based Suger integrations, authentication requires uploading a GCP service account JSON key file rather than a personal sign-in. Capabilities include creating, updating, deleting, and listing calendars and events (including recurring events and Google Meet links), free/busy queries for scheduling, natural language event creation, and calendar sharing and ACL management. Requires a GCP project with the Calendar API enabled and the Service Account Token Creator IAM role.",
    alias: "Related: Integration, Gmail Integration, Google Drive Integration",
    source: "https://doc.suger.io/integrations/google-calendar/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["Suger Users"],
    useCases: [
      "Automating meeting scheduling from Suger workflows by creating Google Calendar events with Google Meet links for co-sell discovery calls or partner onboarding sessions",
      "Querying free/busy availability across team calendars from a Suger automation to find optimal meeting slots for enterprise deal cycles",
    ],
    context: [
      "Suger Console",
      "Suger Integrations",
      "Google Workspace",
      "GCP Service Account",
    ],
    related: [
      { name: "Integration", slug: "integration" },
      { name: "Gmail Integration", slug: "gmail-integration" },
      { name: "Google Drive Integration", slug: "google-drive-integration" },
    ],
  },
  {
    name: "DNS Email Integration — Suger",
    tags: ["suger", "integrations"],
    def: "An org-level Suger integration that enables sending workflow and notification emails from a custom verified domain instead of Suger's default noreply@suger.io address. Authentication is via DNS record verification (DKIM, SPF, MX, DMARC) using AWS SES domain identity rather than OAuth or API key. Supports DKIM-signed outbound mail for deliverability, custom MAIL FROM subdomains with SPF alignment, DMARC policy configuration, and per-workflow sender overrides for local-part and display name. Requires DNS zone control for the sending domain.",
    alias: "Related: Integration, Gmail Integration, OAuth 2.0 Integration",
    source: "https://doc.suger.io/integrations/dns-email/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["Suger Users"],
    useCases: [
      "Configuring a custom sending domain for all Suger-generated workflow and notification emails to improve deliverability and brand consistency",
      "Setting DKIM and SPF records for DMARC compliance on outbound Suger emails from a verified company domain",
    ],
    context: [
      "Suger Console",
      "Suger Integrations",
      "Email Delivery",
      "AWS SES",
    ],
    related: [
      { name: "Integration", slug: "integration" },
      { name: "Gmail Integration", slug: "gmail-integration" },
      { name: "OAuth 2.0 Integration", slug: "oauth-2.0-integration" },
    ],
  },
  {
    name: "AWS EMEA SARL — AWS",
    tags: ["aws"],
    def: "The Luxembourg-headquartered Amazon.com subsidiary (established July 1, 2018) that operates AWS Marketplace and acts as merchant of record for all EMEA transactions — covering Europe, the Middle East, and Africa except Turkey and South Africa. When an EMEA-region account purchases through AWS Marketplace, the contracting entity is AWS EMEA SARL rather than Amazon Web Services, Inc., and it issues all applicable VAT invoices and handles regional tax compliance across its 25+ branch offices. ISVs selling on AWS Marketplace receive a separate disbursement from AWS EMEA SARL for EMEA sales, distinct from non-EMEA disbursements issued by Amazon Web Services, Inc. — requiring sellers to reconcile two payout sources in financial reporting.",
    alias:
      "Related: Seller of Record, AWS Marketplace — AWS, Disbursement, Private Offer — AWS",
    source: "https://aws.amazon.com/legal/aws-emea/",
    difficulty: "intermediate",
    category: "billing",
    whoFor: ["ISVs / Sellers", "Enterprise Buyers"],
    useCases: [
      "Identifying the correct contracting entity when an EMEA-region buyer purchases through AWS Marketplace for legal or procurement review",
      "Reconciling separate disbursement payments from AWS EMEA SARL (EMEA sales) and Amazon Web Services, Inc. (non-EMEA sales) in revenue reporting",
      "Verifying VAT invoice issuer and tax compliance entity for EMEA marketplace transactions during finance audits",
    ],
    context: [
      "AWS Marketplace",
      "Seller Disbursements",
      "EMEA Compliance",
      "VAT Invoicing",
    ],
    related: [
      { name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" },
      { name: "Seller of Record", slug: "seller-of-record" },
      { name: "Disbursement", slug: "disbursement" },
      { name: "Private Offer — AWS", slug: "private-offer-—-aws" },
    ],
  },
  {
    name: "Insulin Custom Apps — Suger",
    tags: ["suger"],
    def: "An AI-assisted app builder within Suger Insulin that generates interactive dashboards, forms, and workflow tools from natural-language prompts — without requiring separate product engineering. Apps are compiled from multi-file source code including App.tsx components, shared at the org level, and governed by integration permissions that control which Suger data and external connectors each app can access. Custom Apps complement Insulin Chat for cases where a recurring, shared interactive interface is more efficient than a conversational session — such as a persistent revenue dashboard or a structured deal-submission form used daily across a team.",
    alias:
      "Related: Insulin Agent — Suger, Insulin Chat — Suger, Insulin Jobs — Suger",
    source: "https://doc.suger.io/insulin/custom-apps/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["Suger Users", "ISVs / Sellers"],
    useCases: [
      "Building a persistent revenue dashboard by prompting Insulin to generate a Custom App that visualizes entitlement and deal data for daily team review",
      "Creating a partner deal-submission form as a Custom App so field teams can capture structured inputs without navigating the full Suger Console",
    ],
    context: [
      "Suger Console",
      "Suger Insulin",
      "AI Workspace",
      "Marketplace Automation",
    ],
    related: [
      { name: "Insulin Agent — Suger", slug: "insulin-agent-—-suger" },
      { name: "Insulin Chat — Suger", slug: "insulin-chat-—-suger" },
      { name: "Insulin Jobs — Suger", slug: "insulin-jobs-—-suger" },
    ],
  },
  {
    name: "Insulin Knowledge Bases — Suger",
    tags: ["suger"],
    def: "Searchable document collections stored within Suger Insulin that agents retrieve at query time to ground responses in org-specific content — runbooks, deal notes, product documentation, and playbooks. Knowledge Bases extend Insulin Agents beyond platform data by ingesting proprietary internal files, chunking and indexing them for semantic search, and automatically surfacing the most relevant chunks when a Knowledge Base is attached to an agent's configuration. Agents can answer questions and generate outputs requiring company-specific context without that information needing to live inside the Suger platform itself.",
    alias:
      "Related: Insulin Agent — Suger, Insulin Skill — Suger, Insulin Chat — Suger",
    source: "https://doc.suger.io/insulin/knowledge-base/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["Suger Users", "ISVs / Sellers"],
    useCases: [
      "Attaching an internal co-sell playbook as a Knowledge Base so an Insulin Agent references company-specific deal escalation procedures when responding to referral questions",
      "Indexing product documentation in a Knowledge Base so agents surface accurate technical details when generating marketplace listings or customer-facing email follow-ups",
    ],
    context: [
      "Suger Console",
      "Suger Insulin",
      "AI Workspace",
      "Document Management",
    ],
    related: [
      { name: "Insulin Agent — Suger", slug: "insulin-agent-—-suger" },
      { name: "Insulin Skill — Suger", slug: "insulin-skill-—-suger" },
      { name: "Insulin Chat — Suger", slug: "insulin-chat-—-suger" },
    ],
  },
  {
    name: "Partner Relationship Management (PRM) — Suger",
    tags: ["suger"],
    def: "Suger's Partner Relationship Management product that unifies cloud marketplace co-sell workflows, channel partner management, commission automation, and partner enablement in one platform — eliminating the need for separate CRM plugins, spreadsheets, and standalone LMS tools. Core capabilities include deal registration via public forms that auto-sync to Salesforce or HubSpot, automated commission calculation and SPIFF programs triggered at deal closure, a white-label branded partner portal deployable in five days, and a built-in LMS for partner certification tracking. Unlike generic PRM systems, Suger PRM is purpose-built for organizations running both cloud marketplace co-sell motions and traditional channel reseller programs — giving partner managers a single interface for hyperscaler-driven and direct channel pipeline.",
    alias:
      "Related: Partner Relationship Management (PRM) System, Partner Portal — Suger, Commission Plan — Suger, Learning Management System (LMS) — Suger",
    source: "https://www.suger.io/prm/",
    difficulty: "intermediate",
    category: "operations",
    whoFor: ["Partner Managers", "ISVs / Sellers", "Channel Partners"],
    useCases: [
      "Deploying a white-label partner portal in five days to give resellers and VARs a branded hub for deal registration and co-sell collaboration",
      "Automating commission payouts and SPIFF programs by connecting Suger PRM deal closure events to configurable commission templates without manual calculation",
      "Consolidating co-sell referral tracking and channel partner management in one interface so partner managers avoid context-switching between separate tools",
    ],
    context: [
      "Suger PRM Portal",
      "Suger Console",
      "Partner Enablement",
      "Co-sell Management",
      "Channel Management",
    ],
    related: [
      {
        name: "Partner Relationship Management (PRM) System",
        slug: "partner-relationship-management-prm-system",
      },
      { name: "Partner Portal — Suger", slug: "partner-portal-—-suger" },
      { name: "Commission Plan — Suger", slug: "commission-plan-—-suger" },
      {
        name: "Learning Management System (LMS) — Suger",
        slug: "learning-management-system-lms-—-suger",
      },
    ],
  },
  {
    name: "LicenseArn — AWS",
    tags: ["aws"],
    def: "An Amazon Resource Name (ARN) that uniquely identifies each active software license issued under AWS Marketplace Concurrent Agreements. Required in all SaaS listings supporting Concurrent Agreements (mandatory for new listings as of June 1, 2026), LicenseArn is the primary key passed to ResolveCustomer, GetEntitlements, and BatchMeterUsage API calls — replacing the prior product-code and account-ID model for entitlement and metering lookup. A single AWS account can hold multiple active LicenseArns for the same product simultaneously, each with independent terms and pricing; sellers must store and pass the correct LicenseArn per license to accurately track and bill each subscription.",
    alias: "Related: Concurrent Agreements — AWS, Entitlement, Metered Billing",
    source:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/checking-entitlements.html",
    difficulty: "advanced",
    category: "operations",
    whoFor: ["ISVs / Sellers", "Suger Users"],
    useCases: [
      "Resolving a customer's active license during SaaS subscription activation by passing LicenseArn to the ResolveCustomer API call",
      "Tracking and billing multiple independent subscriptions for the same product in one AWS account by maintaining distinct LicenseArns per active entitlement",
      "Migrating existing SaaS listings to Concurrent Agreements by updating ResolveCustomer and BatchMeterUsage implementations to use LicenseArn instead of product code and account ID",
    ],
    context: [
      "AWS Marketplace",
      "Concurrent Agreements",
      "SaaS Entitlement API",
      "AWS Marketplace Metering Service",
    ],
    related: [
      {
        name: "Concurrent Agreements — AWS",
        slug: "concurrent-agreements-—-aws",
      },
      { name: "Entitlement", slug: "entitlement" },
      { name: "Metered Billing", slug: "metered-billing" },
    ],
  },
  {
    name: "Joint Planning — Azure",
    tags: ["azure", "cosell"],
    def: "An always-on Partner Center co-sell workflow (GA February 2026) that connects ISVs and channel partners with Microsoft Small Medium Enterprise & Channel (SME&C) sellers on shared customer accounts. Partners gain early access to Microsoft-generated leads and customer insights from SME&C seller data; leads accepted through Joint Planning convert directly into co-sell opportunities tracked in Partner Center. Unlike standard co-sell referral submission — where partners initiate by sharing an opportunity — Joint Planning is Microsoft-initiated: SME&C sellers surface accounts they believe a partner can help activate, and the partner responds.",
    alias:
      "Related: Co-sell Eligible / Incentivized — Azure, APN Customer Engagements (ACE) — AWS, Partner Center — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/announcements/2026-february",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Azure Sales", "Partner Managers"],
    useCases: [
      "Accepting a Microsoft-initiated Joint Planning lead to convert it into a co-sell opportunity with a shared SME&C customer account",
      "Using Joint Planning as an inbound pipeline source alongside standard outbound co-sell referral submission to increase co-sell volume",
      "Tracking Joint Planning-originated co-sell opportunities separately in Partner Center to measure Microsoft seller-driven pipeline contribution",
    ],
    context: [
      "Microsoft Partner Center",
      "Co-sell Motions",
      "SME&C Sales",
      "Pipeline Management",
    ],
    related: [
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
      { name: "Partner Center — Azure", slug: "partner-center-—-azure" },
      {
        name: "Frontier Accelerate for Marketplace — Azure",
        slug: "frontier-accelerate-for-marketplace-—-azure",
      },
    ],
  },
  {
    name: "Co-sell Referral Quality — Azure",
    tags: ["azure", "cosell"],
    def: "An automated quality gate Microsoft introduced in Partner Center (GA May 2026) that evaluates every inbound co-sell referral at submission against five mandatory fields: solution area or play, estimated deal value, estimated close date, customer need description, and customer contact consent. Referrals missing any required field are held or declined automatically rather than routed to a Microsoft seller; referrals passing all five fields are auto-routed to the right seller without manual review. High-quality referrals — those with complete fields plus an ACR value — receive faster seller assignment and higher engagement priority. The Azure equivalent of AWS's Opportunity Quality Score for prioritizing co-sell pipeline.",
    alias:
      "AWS equivalent: Opportunity Quality Score — AWS | Related: Co-sell Eligible / Incentivized — Azure, Partner Center — Azure, Azure Consumed Revenue (ACR) — Azure",
    source:
      "https://learn.microsoft.com/en-us/partner-center/announcements/2026-may",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "Azure Sales", "Partner Managers"],
    useCases: [
      "Ensuring all five required fields are complete before submitting a Partner Center co-sell referral to avoid automatic hold or decline",
      "Adding an ACR value to a complete referral to signal Azure workload intensity and increase the likelihood of proactive Microsoft seller engagement",
      "Diagnosing why a co-sell referral was held or declined by checking whether it passed the automated quality gate",
    ],
    context: [
      "Microsoft Partner Center",
      "Co-sell Referrals",
      "Azure IP Co-sell",
      "Pipeline Management",
    ],
    related: [
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
      },
      {
        name: "Azure Consumed Revenue (ACR) — Azure",
        slug: "azure-consumed-revenue-acr-—-azure",
      },
      {
        name: "Opportunity Quality Score — AWS",
        slug: "opportunity-quality-score-—-aws",
      },
    ],
  },
  {
    name: "Marketplace Listing Association — AWS",
    tags: ["aws", "cosell", "offers"],
    def: "A Partner Central feature (GA July 1, 2026) that lets AWS Partners link one or more AWS Marketplace solution listings directly to a co-sell opportunity in ACE. Once associated, the linked listing appears alongside the opportunity in the Partner Central pipeline view, giving AWS field sellers full context on which products are being co-sold without requiring a separate lookup. Listing association is required for certain co-sell motions where the Marketplace transaction is the intended deal vehicle — connecting the co-sell engagement record to the transactable product the customer will ultimately purchase.",
    alias:
      "Related: APN Customer Engagements (ACE) — AWS, AWS Partner Central Agents — AWS, Listing, AWS Marketplace — AWS",
    source:
      "https://aws.amazon.com/about-aws/whats-new/2026/07/aws-marketplace-co-selling-support/",
    difficulty: "intermediate",
    category: "cosell",
    whoFor: ["ISVs / Sellers", "AWS Sales", "Suger Users"],
    useCases: [
      "Associating an AWS Marketplace listing to an ACE co-sell opportunity so AWS field sellers can see the transactable product without a separate lookup",
      "Linking multiple listings to a single co-sell opportunity when an enterprise deal covers more than one AWS Marketplace product",
      "Using Marketplace Listing Association to close the loop between a co-sell referral and the eventual marketplace transaction for attribution and reporting",
    ],
    context: [
      "AWS Partner Central",
      "APN Customer Engagements (ACE)",
      "AWS Marketplace",
      "Co-sell Workflow",
    ],
    related: [
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
      },
      { name: "AWS Marketplace — AWS", slug: "aws-marketplace-—-aws" },
      { name: "Listing", slug: "listing" },
      {
        name: "AWS Partner Central Agents — AWS",
        slug: "aws-partner-central-agents-—-aws",
      },
    ],
  },
];

// { name: "", tags: [""], def: "", alias: "", source: "" },
