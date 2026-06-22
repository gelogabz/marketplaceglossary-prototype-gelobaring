/*
 * All learning paths and the global learning sequence.
 *
 * ADDING A PATH  ─────────────────────────────────────────────────────────────
 *   1. Append a new object to the `learningPaths` array below.
 *   2. If it belongs to the core journey, add its slug to GLOBAL_SEQUENCE.
 *   3. If using a new category, add it to CATEGORY_ORDER and CATEGORY_META
 *      in learning-paths/index.html and learning-paths/path.js.
 *   4. To include it in a role track, add its slug to the relevant array
 *      in ROLE_TRACKS inside learning-paths/index.html.
 *
 * PATH OBJECT FIELDS  ────────────────────────────────────────────────────────
 *   slug         string   — URL-safe, lowercase, hyphens only. Used in ?p=
 *                           query param and localStorage. Must be unique.
 *
 *   title        string   — Short display name (3–6 words).
 *
 *   category     string   — "fundamentals" | "procurement" | "cosell" |
 *                           "billing" | "operations" | "advanced" | "onboarding"
 *                           Note: "onboarding" is paths-only — never set on terms.
 *
 *   level        string   — "beginner" | "intermediate" | "advanced"
 *
 *   description  string   — 1–2 sentences summarising what the path covers.
 *
 *   meta         string   — Display string shown on hub card: "N terms · ~X min"
 *                           Rough guide: 3 min per term.
 *
 *   steps        object[] — Ordered list of terms to read. Max 20, target 7–15.
 *     Each step:
 *       name  string  — must exactly match the term's `name` in data/terms.js
 *       slug  string  — slug(name): lowercase, parens removed, spaces → hyphens
 *                       Example: "private-offer-—-aws"
 *       why   string  — 1–2 sentences explaining why this term is here
 *
 * OPTIONAL SEQUENCING FIELDS  ────────────────────────────────────────────────
 *   next          string   — slug of the recommended next path
 *   continuesFrom string   — slug of the path this one follows (shows callout)
 *   prereqs       string[] — slugs that should ideally be done first (advisory,
 *                            non-blocking — user still sees an amber hint)
 *
 * GLOBAL_SEQUENCE  ────────────────────────────────────────────────────────────
 *   Ordered array of path slugs defining the canonical 9-path core journey.
 *   Used to drive "Continue your journey" banners and completion detection.
 *   Onboarding (role-specific) paths live outside this sequence.
 */

// Reference: https://www.suger.io/resources/guides/

export const GLOBAL_SEQUENCE = [
  "cloud-marketplace-basics",
  "private-offers-and-cppas",
  "cosell-fundamentals",
  "marketplace-ops-essentials",
  "enterprise-billing-and-committed-spend",
  "channel-and-partner-motions",
  "suger-platform-quickstart",
  "marketplace-integrations",
  "marketplace-tax-compliance",
];
// Onboarding paths are role-specific — they sit outside the global sequence
// and are recommended via the role selector (Session LP3).

export const learningPaths = [
  {
    slug: "cloud-marketplace-basics",
    title: "Cloud Marketplace Basics",
    category: "fundamentals",
    level: "beginner",
    description:
      "Everything you need to understand how cloud marketplaces work — what they are, who buys and sells on them, and how transactions flow from listing to entitlement.",
    meta: "8 terms · ~25 min",
    next: "private-offers-and-cppas",
    steps: [
      {
        name: "Cloud Go-to-Market (Cloud GTM)",
        slug: "cloud-go-to-market-cloud-gtm",
        why: "Start with the strategic frame: what Cloud GTM means, why companies build marketplace motions, and why cloud marketplaces are the fastest-growing sales channel in enterprise software.",
      },
      {
        name: "Independent Software Vendor (ISV)",
        slug: "independent-software-vendor-isv",
        why: "Understand who the seller is in the marketplace ecosystem — an ISV is the company whose software gets listed, transacted, and delivered through the platform.",
      },
      {
        name: "Buyer",
        slug: "buyer",
        why: "Now that you know who sells, learn who buys — the buyer's role, their motivations, and why enterprise companies prefer purchasing through marketplace rather than direct.",
      },
      {
        name: "Listing",
        slug: "listing",
        why: "The listing is what an ISV publishes on a hyperscaler marketplace — learn its structure, states, and why it must be both discoverable and transactable to generate revenue.",
      },
      {
        name: "Software-as-a-Service (SaaS)",
        slug: "software-as-a-service-saas",
        why: "SaaS is the most common listing type on modern cloud marketplaces. Learn how SaaS billing and fulfillment work and why it requires API integration with the hyperscaler.",
      },
      {
        name: "Offer",
        slug: "offer",
        why: "Before a deal can close on any marketplace, it must be structured as an offer — a priced, time-limited proposal sent to a specific buyer. Understanding what an offer is (and isn't) is the foundation for everything from private negotiations to channel deals.",
      },
      {
        name: "Private Offer",
        slug: "private-offer",
        why: "Most enterprise deals happen through private offers, not public listings. Learn how sellers customize pricing for individual buyers and why private offers dominate large contracts.",
      },
      {
        name: "Entitlement",
        slug: "entitlement",
        why: "Once a buyer accepts a private offer, an entitlement is created. This is the record that ties the buyer's access rights to the marketplace transaction — and what you'll monitor throughout the subscription lifecycle.",
      },
    ],
  },
  {
    slug: "private-offers-and-cppas",
    title: "Private Offers & CPPOs",
    category: "procurement",
    level: "intermediate",
    description:
      "From a basic private offer to a channel partner resale — learn how AWS pricing customization works, how partners get involved, and what authorizations and agreements are required.",
    meta: "10 terms · ~40 min",
    continuesFrom: "cloud-marketplace-basics",
    next: "cosell-fundamentals",
    prereqs: ["cloud-marketplace-basics"],
    steps: [
      {
        name: "Private Offer",
        slug: "private-offer",
        why: "Start with the foundation — direct seller-to-buyer custom pricing on any cloud marketplace. Understanding what a private offer is sets the stage for everything else in this path.",
      },
      {
        name: "Express Private Offer — AWS",
        slug: "express-private-offer-—-aws",
        why: "Launched November 2025, Express Private Offers use AI to auto-generate and deliver personalized offers to buyers without manual negotiation. If you're building a private offer today on AWS, this is the flow you'll encounter in AMMP.",
      },
      {
        name: "Agreement — AWS",
        slug: "agreement-—-aws",
        why: "When a buyer accepts a private offer, an Agreement is created on AWS Marketplace. Learn what this contract record contains and how it governs the ongoing subscription.",
      },
      {
        name: "Offer Expiration Date — AWS",
        slug: "offer-expiration-date-—-aws",
        why: "Private offers aren't open-ended — they expire. Learn how expiration windows create urgency, how sellers control them, and how they affect deal timing in enterprise sales cycles.",
      },
      {
        name: "Flexible Payment Schedule / Installment Plan",
        slug: "flexible-payment-schedule-/-installment-plan",
        why: "Large enterprise deals often require installment billing rather than upfront payment. Learn how flexible payment schedules work on marketplace and how they're structured in a private offer.",
      },
      {
        name: "Variable Payments — AWS",
        slug: "variable-payments-—-aws",
        why: "Flexible Payment Schedules handle installments on a known commitment; Variable Payments handle milestone-tied professional services billed through marketplace. If your company sells implementation or advisory services alongside software, Variable Payments is the mechanism that lets you bundle and bill both through a single AWS private offer.",
      },
      {
        name: "Entitlement",
        slug: "entitlement",
        why: "Once the Agreement is signed, an Entitlement is created. This is the active record of the buyer's access rights — and what you'll track through the full subscription lifecycle.",
      },
      {
        name: "Resale Authorization — AWS",
        slug: "resale-authorization-—-aws",
        why: "When a channel partner needs to resell your product, you must grant a Resale Authorization first. Learn what it controls — pricing scope, partner eligibility, and expiration.",
      },
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
        why: "With a Resale Authorization in place, the partner uses a CPPO to transact with the buyer. Learn how attribution, discounting, and disbursement flow across ISV, partner, and buyer.",
      },
      {
        name: "Marketplace Fee / Transaction Fee",
        slug: "marketplace-fee-/-transaction-fee",
        why: "In both direct private offers and CPPOs, the marketplace takes a percentage. Understand how the fee structure works and how revenue is split across ISV, partner, and hyperscaler.",
      },
    ],
  },
  {
    slug: "cosell-fundamentals",
    title: "Co-sell Fundamentals",
    category: "cosell",
    level: "intermediate",
    description:
      "How ISVs work alongside hyperscaler sales teams to close deals. Covers the co-sell motion, referral mechanics, platform tools, AWS program requirements, and how co-sell varies across AWS, Azure, and GCP.",
    meta: "18 terms · ~70 min",
    continuesFrom: "private-offers-and-cppas",
    next: "marketplace-ops-essentials",
    prereqs: ["private-offers-and-cppas"],
    steps: [
      {
        name: "Co-sell",
        slug: "co-sell",
        why: "Start with what co-selling actually means — the motion, the mutual incentives, and why hyperscalers actively want ISVs to participate in joint selling.",
      },
      {
        name: "Referral",
        slug: "referral",
        why: "The referral is the basic unit of co-sell activity — a formal record of a joint opportunity. Understanding what a referral is and how it gets created is the operational foundation of any co-sell program.",
      },
      {
        name: "Inbound Referral",
        slug: "inbound-referral",
        why: "Now that you know what a referral is, learn the inbound direction — when the hyperscaler's field team sends you a lead. This is the highest-value co-sell motion and the one most ISVs optimize for.",
      },
      {
        name: "Outbound Referral",
        slug: "outbound-referral",
        why: "The outbound direction: you submit a deal to the hyperscaler's field team to request their involvement. Learn when to use outbound referrals and what the hyperscaler looks for before engaging.",
      },
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
        why: "ACE is the platform where AWS co-sell actually happens. Now that you understand referrals conceptually, learn the system you'll use to register opportunities and engage AWS field teams.",
      },
      {
        name: "AWS Partner Central Agents — AWS",
        slug: "aws-partner-central-agents-—-aws",
        why: "When you open ACE today, you'll encounter AI agents that auto-populate opportunity fields, recommend funding, and automate pipeline management. Learn what these agents do so you can use them — not work around them.",
      },
      {
        name: "ISV Accelerate — AWS",
        slug: "isv-accelerate-—-aws",
        why: "To unlock deeper AWS co-sell benefits, ISVs need to join ISV Accelerate. Learn the eligibility requirements and what the program unlocks — including AWS field engagement and deal support.",
      },
      {
        name: "First Value Opportunity (FVO) — AWS",
        slug: "first-value-opportunity-fvo-—-aws",
        why: "ISV Accelerate requires 5 launched opportunities — but your very first deal doesn't count. Learn what the FVO exclusion means for how you plan your co-sell pipeline and when the eligibility clock actually starts.",
      },
      {
        name: "SaaS Co-sell Benefit (SCB) — AWS",
        slug: "saas-co-sell-benefit-scb-—-aws",
        why: "The financial incentive that motivates AWS reps to actively co-sell your product. Understanding SCB explains why some deals get strong AWS field engagement and others don't.",
      },
      {
        name: "Quota Retirement — AWS",
        slug: "quota-retirement-—-aws",
        why: "SCB works because AWS sellers earn quota credit — not just recognition — for co-sold private offers. Learn the underlying quota retirement mechanic that drives AWS field behavior and makes co-sell financially compelling for both sides.",
      },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
        why: "Azure's co-sell framework uses status tiers — Co-sell Eligible vs. Co-sell Incentivized — to determine what benefits an ISV receives. Learn how to qualify and what each status unlocks.",
      },
      {
        name: "Referral Confidence Score — Azure",
        slug: "referral-confidence-score-—-azure",
        why: "Once you understand Azure's co-sell status tiers, the Referral Confidence Score explains how Microsoft evaluates individual deal quality — an AI-generated signal that affects how much attention your referral gets from the Azure field team. Knowing this score exists changes how you structure and qualify outbound referrals.",
      },
      {
        name: "Partner-led Deal — Azure",
        slug: "partner-led-deal-—-azure",
        why: "Azure's co-sell framework distinguishes between deal types based on who drives the opportunity. A Partner-Led Deal is one where the ISV or partner owns the motion without requesting active Microsoft seller support — understanding this deal type clarifies when to engage Microsoft field teams versus when to execute independently and still receive referral attribution.",
      },
      {
        name: "Microsoft Commerce Incentive (MCI) — Azure",
        slug: "microsoft-commerce-incentive-mci-—-azure",
        why: "You've learned that Co-sell Incentivized status unlocks Azure field engagement — MCI is the financial mechanism behind that engagement. Understanding how MCI compensates Microsoft sellers for co-sold transactions explains why Incentivized ISVs consistently get stronger field support than Eligible ones.",
      },
      {
        name: "Business Applications Co-sell Incentive — Azure",
        slug: "business-applications-co-sell-incentive-—-azure",
        why: "MCI covers the broad Azure co-sell incentive framework; the Business Applications Co-sell Incentive is a specialized track for ISVs whose products integrate with Dynamics 365 or Power Platform. If your solution touches Microsoft's business apps ecosystem, this incentive tier significantly raises the financial motivation for Microsoft field teams to co-sell alongside you.",
      },
      {
        name: "Azure Consumed Revenue (ACR) — Azure",
        slug: "azure-consumed-revenue-acr-—-azure",
        why: "ACR is the core metric Microsoft uses to measure partner-driven Azure impact. Understanding how ACR is defined, tracked, and attributed is the foundation for PRACR reporting and co-sell incentive eligibility on the Azure platform.",
      },
      {
        name: "Deal Registration — Azure",
        slug: "deal-registration-—-azure",
        why: "Before PRACR reporting can begin, each customer deal must have an approved deal registration in Partner Center. Deal registration establishes partner-of-record status and is the prerequisite that unlocks co-sell incentive eligibility and monthly ACR reporting rights.",
      },
      {
        name: "Partner Reported Azure Consumed Revenue (PRACR) — Azure",
        slug: "partner-reported-azure-consumed-revenue-pracr-—-azure",
        why: "PRACR is Azure's mechanism for ISVs to self-report the customer Azure consumption their SaaS solution drives, directly tying co-sell support level to real cloud impact. It's the Azure equivalent of demonstrating marketplace traction — but measured in downstream infrastructure spend rather than transactions.",
      },
      {
        name: "Google Cloud Partner Network — GCP",
        slug: "google-cloud-partner-network-—-gcp",
        why: "GCP's co-sell program is structured differently from AWS and Azure. Google Cloud Partner Network is the framework that governs how ISVs qualify for and access GCP field co-sell support.",
      },
      {
        name: "Co-sell Insights — Suger",
        slug: "co-sell-insights-—-suger",
        why: "After learning how co-sell programs work across AWS, Azure, and GCP, Co-sell Insights shows how Suger aggregates signals from all three into a unified intelligence layer. This is where cross-platform co-sell strategy becomes operationally executable — surfacing which deals to pursue and what actions to take, across all hyperscalers at once.",
      },
      {
        name: "Account Mapping — Suger",
        slug: "account-mapping-—-suger",
        why: "Account Mapping is how you turn your CRM pipeline into a co-sell targeting list. Suger maps your existing accounts against cloud partner account data across AWS, Azure, and GCP — surfacing which of your deals already have an active cloud partner relationship. These overlaps are the highest-probability co-sell engagements, because the hyperscaler already knows the account.",
      },
    ],
  },
  {
    slug: "enterprise-billing-and-committed-spend",
    title: "Enterprise Billing & Committed Spend",
    category: "billing",
    level: "advanced",
    description:
      "How committed spend agreements interact with marketplace purchases, why it matters for ISV deal strategy, and how to position listings as eligible across AWS, Azure, and GCP.",
    meta: "10 terms · ~40 min",
    continuesFrom: "marketplace-ops-essentials",
    next: "channel-and-partner-motions",
    prereqs: ["marketplace-ops-essentials"],
    steps: [
      {
        name: "Cloud Committed Spend (CCS)",
        slug: "cloud-committed-spend-ccs",
        why: "The umbrella concept — what committed spend means across hyperscalers, how enterprise buyers use it, and why it creates a gravitational pull toward marketplace purchases.",
      },
      {
        name: "Enterprise Discount Program (EDP) — AWS",
        slug: "enterprise-discount-program-edp-—-aws",
        why: "AWS's committed spend mechanism. Learn how EDP draw-down works, what qualifies marketplace purchases for draw-down, and why EDP eligibility is a deal-closing lever for enterprise AWS buyers.",
      },
      {
        name: "Azure Consumption Commitment (MACC) — Azure",
        slug: "azure-consumption-commitment-macc-—-azure",
        why: "Azure's equivalent — understand what MACC-eligible status means for ISVs, how to achieve it, and why enterprise Azure buyers specifically look for MACC-eligible marketplace solutions.",
      },
      {
        name: "Committed Use Discount (CUD) — GCP",
        slug: "committed-use-discount-cud-—-gcp",
        why: "GCP's committed spend model. Learn how CUD interacts with GCP Marketplace purchases and what ISVs need to know to position their listings for committed spend draw-down.",
      },
      {
        name: "Marketplace Capacity Drawdown (MCD) — Snowflake",
        slug: "marketplace-capacity-drawdown-mcd-—-snowflake",
        why: "After covering AWS EDP, MACC, and GCP CUD, complete the committed spend picture with Snowflake's equivalent. MCD lets buyers draw down Snowflake capacity commitments through marketplace purchases — a critical lever for ISVs targeting Snowflake-heavy enterprise accounts.",
      },
      {
        name: "Metered Billing",
        slug: "metered-billing",
        why: "Usage-based billing is the most common model for marketplace transactions that draw down committed spend. Learn how metered billing is structured and why it's the preferred model for enterprise buyers.",
      },
      {
        name: "Variable Payments — AWS",
        slug: "variable-payments-—-aws",
        why: "Metered billing covers consumption-based models; Variable Payments covers milestone-based billing for professional services and multi-phase engagements. Enterprise deals frequently combine both — understanding Variable Payments completes the billing model picture for complex AWS transactions.",
      },
      {
        name: "Metering / Usage Reporting",
        slug: "metering-/-usage-reporting",
        why: "For committed spend draw-down to work in practice, ISVs must report usage back to the marketplace. Learn the mechanics of metering records, reporting cadence, and common failure modes.",
      },
      {
        name: "Disbursement",
        slug: "disbursement",
        why: "After committed spend purchases are billed and fees are deducted, ISVs receive their proceeds through disbursement. Understand the payout schedule, currency handling, and reconciliation process.",
      },
      {
        name: "Payment Installments — Suger",
        slug: "payment-installments-—-suger",
        why: "For enterprise deals with installment billing schedules, the Payment Installments view in Suger shows the post-signing state of each scheduled payment — amounts, due dates, and collection status. This is the RevOps surface for monitoring whether installments are hitting on time and flagging failures before they become disputes.",
      },
    ],
  },
  {
    slug: "marketplace-ops-essentials",
    title: "Marketplace Ops Essentials",
    category: "operations",
    level: "intermediate",
    description:
      "The day-to-day operational layer every ISV needs to understand — from what gets published on marketplace to how buyers get provisioned and how integrations keep entitlements in sync.",
    meta: "10 terms · ~40 min",
    continuesFrom: "cosell-fundamentals",
    next: "enterprise-billing-and-committed-spend",
    prereqs: ["cosell-fundamentals"],
    steps: [
      {
        name: "Product",
        slug: "product",
        why: "In marketplace operations, a Product is the ISV's software as it's registered in the hyperscaler's systems — distinct from a listing. Understanding this distinction is foundational to marketplace ops.",
      },
      {
        name: "Listing",
        slug: "listing",
        why: "A listing is the public-facing representation of a product on the marketplace. Learn its structure, lifecycle states, and what separates a well-configured listing from one that stalls in review.",
      },
      {
        name: "Professional Services Listing — AWS",
        slug: "professional-services-listing-—-aws",
        why: "SaaS and AMI are the dominant listing types — but Professional Services is the mechanism for ISVs who want to monetize implementation, consulting, and training alongside software on a single marketplace transaction. A distinct product type with its own billing and offer mechanics.",
      },
      {
        name: "Professional Services Offer — Azure",
        slug: "professional-services-offer-—-azure",
        why: "Azure's equivalent: a non-transactable listing type for consulting, assessment, and briefing services that generates a lead rather than a checkout event. Knowing both AWS and Azure professional services listing types completes the picture of how advisory work can be listed and co-sell-eligible across hyperscalers.",
      },
      {
        name: "Offer",
        slug: "offer",
        why: "An offer is how buyers transact against a listing. Learn the difference between public and private offers, how offers are structured, and how they trigger the downstream billing and provisioning flow.",
      },
      {
        name: "Entitlement",
        slug: "entitlement",
        why: "When a buyer accepts an offer, an Entitlement is created — the operational record that confirms active access. Learn what entitlement states mean and how to track them through the full lifecycle.",
      },
      {
        name: "Provisioning",
        slug: "provisioning",
        why: "After an entitlement is created, the ISV must provision the buyer's access to the product. Learn how provisioning flows work, common failure modes, and what ISVs must build or configure.",
      },
      {
        name: "Metering / Usage Reporting",
        slug: "metering-/-usage-reporting",
        why: "For usage-based and consumption pricing models, ISVs must actively report usage back to the marketplace to trigger billing. Learn the reporting flow, cadence, and what happens if records are missed.",
      },
      {
        name: "Webhook",
        slug: "webhook",
        why: "Marketplace events — new entitlements, cancellations, usage alerts — are delivered via webhook. Learn how these events work, what ISVs must listen for, and how to handle them reliably.",
      },
      {
        name: "Integration Partner",
        slug: "integration-partner",
        why: "Platforms like Suger handle marketplace API integrations on behalf of ISVs. Understand what they abstract, what ISVs still own, and when using an integration partner is the right call.",
      },
    ],
  },
  {
    slug: "channel-and-partner-motions",
    title: "Channel & Partner Motions",
    category: "advanced",
    level: "advanced",
    description:
      "How ISVs sell through distribution and channel partners across AWS, Azure, and GCP. Covers resale mechanics, authorizations, and the multi-party transaction flows each hyperscaler uses.",
    meta: "10 terms · ~40 min",
    continuesFrom: "enterprise-billing-and-committed-spend",
    next: "suger-platform-quickstart",
    prereqs: ["enterprise-billing-and-committed-spend"],
    steps: [
      {
        name: "Channel Partner (CP)",
        slug: "channel-partner-cp",
        why: "Start with who channel partners are — the resellers, VARs, and MSPs that distribute ISV products to end buyers. Understanding the partner entity is the foundation of every channel motion in this path.",
      },
      {
        name: "Value Added Reseller (VAR)",
        slug: "value-added-reseller-var",
        why: "VARs are the most common channel partner type for ISVs — they resell software with bundled services (implementation, training, support) and transact through CPPO/MPO/MCPO. Understanding what makes a partner a VAR vs. a pure reseller or distributor is critical before structuring a channel program.",
      },
      {
        name: "Global System Integrator (GSI)",
        slug: "global-system-integrator-gsi",
        why: "GSIs like Accenture, Deloitte, and Infosys operate differently from VARs — they're enrolled in multiple hyperscaler programs simultaneously, drive multi-year enterprise transformation projects, and influence massive procurement decisions. ISVs who build GSI relationships unlock enterprise accounts that rarely engage through direct sales.",
      },
      {
        name: "Distributor",
        slug: "distributor",
        why: "In two-tier channel models, distributors sit between ISVs and channel partners. Learn the distributor's role, why ISVs engage them, and how they affect pricing and resale mechanics on marketplace.",
      },
      {
        name: "Seller of Record",
        slug: "seller-of-record",
        why: "In channel transactions, who is legally the seller matters — for tax, compliance, and liability. Learn how Seller of Record status works in marketplace resale and who bears responsibility in each model.",
      },
      {
        name: "Resale Authorization — AWS",
        slug: "resale-authorization-—-aws",
        why: "Before a partner can resell your product on AWS Marketplace, you must grant a Resale Authorization. Learn the fields that control pricing scope, partner eligibility, and expiration.",
      },
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
        why: "With a Resale Authorization in place, the partner uses a CPPO to transact with the buyer. Learn how attribution, discounting, and disbursement flow across ISV, partner, and hyperscaler.",
      },
      {
        name: "Multiparty Private Offer (MPO) — Azure",
        slug: "multiparty-private-offer-mpo-—-azure",
        why: "Azure's equivalent of CPPO. Learn how ISVs, partners, and enterprise buyers transact together on Microsoft's marketplace and where the MPO flow differs from AWS's CPPO model.",
      },
      {
        name: "Partner-to-Partner (P2P) Co-sell — Azure",
        slug: "partner-to-partner-p2p-co-sell-—-azure",
        why: "MPO handles multi-party transactions; P2P Co-sell handles multi-party collaboration. When two Microsoft partners jointly pursue an enterprise deal — one selling, one delivering — P2P is the referral motion that coordinates pipeline, tracks the deal in Partner Center, and unlocks MCI incentives for the selling partner.",
      },
      {
        name: "Marketplace Channel Private Offer (MCPO) — GCP",
        slug: "marketplace-channel-private-offer-mcpo-—-gcp",
        why: "GCP's resale mechanism. Learn how MCPO compares to CPPO and MPO and what's unique about the Google Cloud channel motion — including partner discount structures and approval flows.",
      },
    ],
  },
  {
    slug: "suger-platform-quickstart",
    title: "Suger Platform Quickstart",
    category: "operations",
    level: "beginner",
    description:
      "Core Suger concepts — what the platform does, how it connects to cloud marketplaces, and where to configure what. Start here if you're new to Suger.",
    meta: "19 terms · ~75 min",
    continuesFrom: "channel-and-partner-motions",
    next: "marketplace-integrations",
    steps: [
      {
        name: "Suger",
        slug: "suger",
        why: "Start with what Suger is — the platform's purpose, what it connects, and why ISVs use it to manage cloud marketplace operations rather than building integrations from scratch.",
      },
      {
        name: "Organization",
        slug: "organization",
        why: "Your Organization is the root of your Suger account — it's where access controls, integrations, and product configurations live. Getting this right at setup prevents permission and billing attribution issues across every marketplace you connect to later.",
      },
      {
        name: "Suger Console",
        slug: "suger-console",
        why: "The Suger Console is your operational control plane for cloud marketplace — where you monitor entitlements, manage offers, trigger metering, and configure integrations. Understanding its structure up front saves hours of navigation time once you're live.",
      },
      {
        name: "Suger Buyer Service",
        slug: "suger-buyer-service",
        why: "The Suger Console is the ISV's operational interface; the Suger Buyer Service is the buyer-facing portal Suger provides for procurement and entitlement management. Understanding both sides of the Suger platform explains how buyers interact with marketplace purchases that ISVs manage through the Console.",
      },
      {
        name: "Buyer Portal — Suger",
        slug: "buyer-portal-—-suger",
        why: "The Buyer Portal is the white-label, embeddable self-service UI Suger provides for enterprise buyers — a five-section dashboard covering entitlements, offers, invoices, and requests that ISVs can brand and embed in their own customer portals. It's the product-facing complement to the Suger Console.",
      },
      {
        name: "Global Search — Suger",
        slug: "global-search-—-suger",
        why: "As your entitlement and offer volume grows, finding a specific record without drilling through module menus becomes friction. Global Search queries across entitlements, offers, buyers, organizations, and integrations from a single bar — the fastest way to navigate Suger once you're beyond initial setup.",
      },
      {
        name: "Integration",
        slug: "integration",
        why: "An Integration is how Suger connects to a specific cloud marketplace. Learn what an integration covers, how to set one up, and what permissions and credentials it requires.",
      },
      {
        name: "Billing Integration",
        slug: "billing-integration",
        why: "The billing integration specifically handles the metering and reporting pipeline between your product and the marketplace. Learn what it does, how it's configured, and why it's critical for usage-based pricing.",
      },
      {
        name: "Entitlement",
        slug: "entitlement",
        why: "Once your integration is live and a buyer purchases through marketplace, Suger creates an Entitlement record. Learn how Suger tracks entitlement state and what it syncs from the hyperscaler.",
      },
      {
        name: "Provisioning",
        slug: "provisioning",
        why: "After an entitlement is created, Suger helps trigger buyer provisioning. Learn how Suger's provisioning webhooks and callbacks work and what your product backend needs to handle.",
      },
      {
        name: "Offer Set — Suger",
        slug: "offer-set-—-suger",
        why: "For deals that involve multiple products, Suger supports AWS Offer Sets — bundling multiple private offers into one buyer transaction. Learn how to create and manage Offer Sets through the Suger console or API so multi-product deals close in a single step.",
      },
      {
        name: "CRM Enrichment",
        slug: "crm-enrichment",
        why: "The PTB scores and hyperscaler engagement signals in the Suger Console are most useful when your sales team can see them without leaving their CRM. CRM Enrichment pushes all three cloud providers' signals into Salesforce or HubSpot automatically — making account prioritization happen in the tools your team already uses.",
      },
      {
        name: "Co-sell Insights — Suger",
        slug: "co-sell-insights-—-suger",
        why: "CRM Enrichment pushes hyperscaler signals into your CRM; Co-sell Insights is Suger's AI layer that interprets those signals and recommends next actions for co-sell opportunities. Understanding this feature completes the picture of how Suger turns raw hyperscaler data into actionable co-sell guidance.",
      },
      {
        name: "Suger MCP Server",
        slug: "suger-mcp-server",
        why: "Once you understand what Suger does operationally, the MCP Server shows how AI agents can interact with it directly. The Suger MCP Server exposes Suger's API capabilities to AI coding assistants and automation agents — enabling teams to build, query, and manage marketplace workflows without leaving their AI toolchain.",
      },
      {
        name: "Insulin",
        slug: "insulin",
        why: "Insulin is Suger's built-in AI workspace — inside the Console, not a separate tool. It adds agents, team channels, and automated Watches on top of the platform you already use. Understanding Insulin completes the picture of how Suger is evolving from a management console into an agentic operations platform.",
      },
      {
        name: "Insulin Agent — Suger",
        slug: "insulin-agent-—-suger",
        why: "Insulin Agents are the named units of work inside Insulin — each one is an AI specialist with defined tools and instructions. Suger ships 20+ pre-built agents and lets you create custom ones. Knowing what an Agent is tells you what you're configuring when you set up a Watch or assign agents to a Channel.",
      },
      {
        name: "Insulin Watch — Suger",
        slug: "insulin-watch-—-suger",
        why: "Watches are how you turn Insulin from a chat tool into a background automation layer. A Watch runs an Agent on a cron schedule or event trigger — so your agents can monitor revenue changes, entitlement events, or deal activity without you having to invoke them manually.",
      },
      {
        name: "Insulin Channel — Suger",
        slug: "insulin-channel-—-suger",
        why: "Channels are persistent multi-user, multi-agent workspaces inside Insulin. Where direct agent chats are session-scoped and 1:1, a Channel is designed for ongoing operations — a deal review board, a co-sell war room, a RevOps workspace. Up to 20 agents can run inside a single Channel alongside your team.",
      },
      {
        name: "Suger Chrome Extension",
        slug: "suger-chrome-extension",
        why: "The Chrome Extension brings Suger into your browser's side panel, so marketplace data surfaces directly inside Salesforce deals and HubSpot contacts. It's the access point for users who spend most of their time in a CRM rather than the Suger Console — and it connects directly to Insulin for context-aware AI assistance.",
      },
    ],
  },
  {
    slug: "marketplace-integrations",
    title: "Marketplace Integrations",
    category: "operations",
    level: "intermediate",
    description:
      "How ISVs connect their backend systems to marketplace billing, entitlement, and provisioning flows — and what integration partners abstract for them.",
    meta: "14 terms · ~55 min",
    continuesFrom: "suger-platform-quickstart",
    next: "marketplace-metering",
    prereqs: ["suger-platform-quickstart"],
    steps: [
      {
        name: "Integration Partner",
        slug: "integration-partner",
        why: "Start with the big picture — integration partners like Suger exist because marketplace integrations are complex. Understand what they abstract, what APIs they wrap, and what ISVs still own.",
      },
      {
        name: "Integration",
        slug: "integration",
        why: "A marketplace integration is the connection layer between your ISV backend and a hyperscaler's APIs. Learn what an integration covers — entitlements, billing, provisioning — and how it's structured.",
      },
      {
        name: "Billing Integration",
        slug: "billing-integration",
        why: "The billing integration is the most technically demanding part. Learn how it connects usage metering from your product to the hyperscaler's billing pipeline and what failure modes to design around.",
      },
      {
        name: "AWS Marketplace Catalog API — AWS",
        slug: "aws-marketplace-catalog-api-—-aws",
        why: "The Catalog API is how ISVs programmatically manage listings and offers on AWS Marketplace. Learn what operations it supports and how integration platforms use it to automate listing management.",
      },
      {
        name: "AWS Marketplace Agreements API — AWS",
        slug: "aws-marketplace-agreements-api-—-aws",
        why: "The Catalog API manages listings; the Agreements API manages the contracts buyers sign. For a complete AWS integration, you need both — the Agreements API is how you programmatically verify entitlement state, pull contract terms, and reconcile agreement records with your CRM or billing system.",
      },
      {
        name: "Webhook",
        slug: "webhook",
        why: "Marketplace events — new entitlements, subscription changes, cancellations — are pushed to ISVs via webhook. Learn the event types, how to handle them reliably, and what Suger does to normalize these across hyperscalers.",
      },
      {
        name: "Provisioning",
        slug: "provisioning",
        why: "After an entitlement event arrives via webhook, your system must provision buyer access. Learn how provisioning flows connect to the integration layer and what you need to build on the ISV side.",
      },
      {
        name: "Metering / Usage Reporting",
        slug: "metering-/-usage-reporting",
        why: "Metering closes the integration loop — your product reports usage back through the integration layer to trigger billing. Learn the reporting model, batch vs. real-time approaches, and idempotency requirements.",
      },
      {
        name: "Manufacturer / Proposer Roles — AWS",
        slug: "manufacturer-/-proposer-roles-—-aws",
        why: "In AWS Marketplace EventBridge notifications, not all events go to the same account. The Manufacturer gets license and metering events; the Proposer gets cancellation and billing adjustment events. In CPPO transactions, these are two different accounts — misconfiguring this routing causes silent event loss.",
      },
      {
        name: "License Deprovisioned Event — AWS",
        slug: "license-deprovisioned-event-—-aws",
        why: "When a buyer's entitlement is cancelled, AWS sends a License Deprovisioned event to the Manufacturer's account — and the seller has exactly 1 hour to submit final usage records via BatchMeterUsage before billing closes. Miss the window, lose the revenue. This event type deserves its own failover logic in every AWS SaaS integration.",
      },
      {
        name: "Zuora Integration — Suger",
        slug: "zuora-integration-—-suger",
        why: "For ISVs that use Zuora for subscription billing and revenue recognition, the Suger-Zuora integration syncs marketplace entitlement events directly to Zuora subscription objects — eliminating manual reconciliation between marketplace and direct-billing channels.",
      },
      {
        name: "DocuSign Integration — Suger",
        slug: "docusign-integration-—-suger",
        why: "Enterprise private offer workflows typically require a signed order form before the marketplace offer is accepted. The DocuSign integration triggers the signature workflow automatically when a Suger private offer is created — streamlining the contract-to-checkout step without manual routing.",
      },
      {
        name: "Gong Integration — Suger",
        slug: "gong-integration-—-suger",
        why: "Sales teams using Gong need deal context — active entitlement status, offer timelines, renewal dates — without leaving the conversation intelligence tool. The Gong integration surfaces Suger marketplace data directly in Gong deal timelines.",
      },
      {
        name: "Suger MCP Server",
        slug: "suger-mcp-server",
        why: "The integration patterns in this path — catalog APIs, webhooks, metering — are increasingly managed through AI agents rather than manual code. The Suger MCP Server is the protocol layer that lets AI assistants call Suger's APIs directly, making it a natural extension of any automated marketplace integration workflow.",
      },
    ],
  },
  {
    slug: "marketplace-metering",
    title: "Usage Metering Deep-Dive",
    category: "operations",
    level: "advanced",
    description:
      "How usage metering actually works across AWS, Azure, and GCP — from dimension design through API calls to cross-platform differences. For ISVs building or debugging usage-based billing integrations.",
    meta: "13 terms · ~55 min",
    continuesFrom: "marketplace-integrations",
    next: "marketplace-tax-compliance",
    prereqs: ["marketplace-integrations"],
    steps: [
      {
        name: "Usage Metering",
        slug: "usage-metering",
        why: "Before diving into APIs and dimensions, ground yourself in what usage metering is: the mechanism that connects your product's telemetry to marketplace billing. Understand the end-to-end flow so the subsequent steps each fit into a coherent picture.",
      },
      {
        name: "Metering Dimension",
        slug: "metering-dimension",
        why: "Dimensions are the pre-declared units of measure that define what you bill for. You must register them in your listing before any metering call can reference them — a mismatch between your listing's dimensions and your API calls causes billing failure. Learn to design dimensions that map cleanly to your product's actual usage model.",
      },
      {
        name: "Usage Record",
        slug: "usage-record",
        why: "Every usage metering report is a usage record: a bundle of dimension, quantity, customer token, and timestamp. Learn the structural rules — specifically idempotency key requirements and the submission deadline — because a rejected or duplicate record means unbilled usage or double charges.",
      },
      {
        name: "UsageRecordGroup — Suger",
        slug: "usagerecordgroup-—-suger",
        why: "The Usage Record is the atomic unit the hyperscaler billing API expects; UsageRecordGroup is Suger's abstraction that batches multiple usage records into a single API call across customers and dimensions. Understanding this construct is essential for teams using Suger's metering API — it's what you actually build against, not the raw hyperscaler endpoints.",
      },
      {
        name: "Metered Billing",
        slug: "metered-billing",
        why: "Metered billing is the pricing model that activates your usage records into buyer charges. Understand how hyperscalers aggregate your reported usage into invoice line items, and how late or inaccurate records affect what buyers see on their bills.",
      },
      {
        name: "Registration Token — AWS",
        slug: "registration-token-—-aws",
        why: "On AWS, every metering call must be tied to a valid registration token — the proof that the buyer's entitlement is active. Learn how to capture the token at subscription time, how long it's valid, and what error codes indicate a stale or invalid token.",
      },
      {
        name: "ResolveCustomer API — AWS",
        slug: "resolvecustomer-api-—-aws",
        why: "ResolveCustomer converts the registration token into a CustomerIdentifier you attribute all metering records to. This is the mandatory first step of the AWS metering flow — without resolving the customer you cannot submit any usage to AWS Marketplace.",
      },
      {
        name: "BatchMeterUsage API — AWS",
        slug: "batchmeterusage-api-—-aws",
        why: "BatchMeterUsage is the call that actually submits usage to AWS Marketplace. Learn the batch structure, the per-record idempotency requirements, and how to handle partial-batch failure responses so a single bad record doesn't cause you to skip or double-bill the rest.",
      },
      {
        name: "GetEntitlements API — AWS",
        slug: "getentitlements-api-—-aws",
        why: "For SaaS contract products, GetEntitlements tells you exactly what a buyer has purchased. Learn how to query entitlement state to gate features at the right tier and reconcile buyer entitlements against your own subscription records before each metering cycle.",
      },
      {
        name: "Amazon EventBridge Marketplace Integration — AWS",
        slug: "amazon-eventbridge-marketplace-integration-—-aws",
        why: "AWS delivers subscription lifecycle events — new subscriptions, cancellations, entitlement changes — through EventBridge. Wiring up an EventBridge listener is how your product reacts to those events automatically, so provisioning and deprovisioning happen without manual polling.",
      },
      {
        name: "Marketplace Metering Service API — Azure",
        slug: "marketplace-metering-service-api-—-azure",
        why: "Azure's metering API differs from AWS in auth model, resource ID requirements, and how it handles SaaS versus managed application products. Learn the Azure-specific call format so you know exactly what changes when porting a metering integration from AWS to Azure.",
      },
      {
        name: "Service Control API — GCP",
        slug: "service-control-api-—-gcp",
        why: "GCP routes usage reporting through the Service Control API rather than a marketplace-specific endpoint. Learn the service name and operation structure it expects, and how Suger normalizes GCP's model alongside AWS and Azure in a single metering integration.",
      },
      {
        name: "Concurrent Agreements — AWS",
        slug: "concurrent-agreements-—-aws",
        why: "Concurrent Agreements lets buyers hold multiple active subscriptions to the same AWS product simultaneously — for example, two different pricing tiers running in parallel during a migration. Learn how this affects your metering logic: you must track and report usage against the correct CustomerIdentifier for each active agreement, or charges will be attributed incorrectly.",
      },
    ],
  },
  {
    slug: "marketplace-tax-compliance",
    title: "Marketplace Tax & Compliance",
    category: "billing",
    level: "intermediate",
    description:
      "How tax collection and remittance works across AWS, Azure, and GCP — who's responsible for what, and how ISVs manage tax settings on each platform.",
    meta: "9 terms · ~35 min",
    continuesFrom: "marketplace-metering",
    prereqs: ["marketplace-integrations"],
    steps: [
      {
        name: "Invoice",
        slug: "invoice",
        why: "The invoice is the primary document your finance team will receive and reconcile for every marketplace transaction. Understanding what's on it — charges, fees, tax line items — is the starting point for any compliant billing workflow.",
      },
      {
        name: "Tax Details Dashboard — AWS",
        slug: "tax-details-dashboard-—-aws",
        why: "Misconfigured tax settings on AWS can result in incorrect tax collection or ISV liability exposure. Learn exactly what AWS's Tax Details Dashboard controls and what you must configure before going live.",
      },
      {
        name: "Marketplace Tax Management — Azure",
        slug: "marketplace-tax-management-—-azure",
        why: "Microsoft acts as the Marketplace Facilitator for most Azure transactions — which shifts the tax remittance burden away from ISVs in many jurisdictions. Know which geographies are covered and where you still own the obligation.",
      },
      {
        name: "Marketplace Tax Management — GCP",
        slug: "marketplace-tax-management-—-gcp",
        why: "GCP's tax handling model differs from both AWS and Azure in ways that matter for multi-cloud ISVs. Learn which tax responsibilities GCP assumes and where ISVs remain exposed, so your compliance posture is accurate across all three platforms.",
      },
      {
        name: "Marketplace Fee / Transaction Fee",
        slug: "marketplace-fee-/-transaction-fee",
        why: "The marketplace fee is deducted before you ever see revenue — and it's calculated on gross transaction value, not net. Understanding how the fee is applied is essential for accurate revenue recognition, tax basis calculations, and finance-to-marketplace reconciliation.",
      },
      {
        name: "Revenue",
        slug: "revenue",
        why: "Marketplace revenue recognition has platform-specific timing and treatment. Understanding when revenue is recognized — versus when it's billed, collected, or disbursed — is the foundation for accurate financial close cycles.",
      },
      {
        name: "Disbursement",
        slug: "disbursement",
        why: "Knowing your disbursement schedule isn't optional for finance — it's what allows accurate cash flow forecasting and reconciliation with your accounting system. Learn what's deducted before payout and when funds actually arrive.",
      },
      {
        name: "Disbursed Amount",
        slug: "disbursed-amount",
        why: "The disbursed amount is the net figure after marketplace fees and any applicable tax withholding — and it's often significantly different from the gross transaction value. Your finance team needs to reconcile this number, not the invoice total.",
      },
      {
        name: "Disbursement Date",
        slug: "disbursement-date",
        why: "Knowing when funds land — not just that they will — is what lets your finance team reconcile marketplace revenue with your accounting close cycle. Disbursement dates follow platform-specific schedules that are often misunderstood or missed entirely.",
      },
    ],
  },
  {
    slug: "sales-onboarding",
    title: "Sales Onboarding",
    category: "onboarding",
    level: "beginner",
    description:
      "Marketplace fundamentals every AE needs to understand before their first marketplace deal — what marketplace is, how enterprise buyers transact, and how co-sell works.",
    meta: "9 terms · ~30 min",
    next: "private-offers-and-cppas",
    steps: [
      {
        name: "Cloud Go-to-Market (Cloud GTM)",
        slug: "cloud-go-to-market-cloud-gtm",
        why: "Start with the strategic frame: why cloud marketplaces matter as a sales channel, what Cloud GTM means, and why your company is investing in it. This is the 'why' before the 'how'.",
      },
      {
        name: "Listing",
        slug: "listing",
        why: "A listing is how your company's product appears on cloud marketplace. Before you can close a deal through marketplace, you need to understand what a listing is and how buyers find and evaluate it.",
      },
      {
        name: "Offer",
        slug: "offer",
        why: "Before a deal can close on any marketplace, it must be structured as an offer — a priced, time-limited proposal sent to a specific buyer. As an AE, understanding what an offer is and how it triggers the buying workflow is essential for navigating the close.",
      },
      {
        name: "Private Offer",
        slug: "private-offer",
        why: "Most enterprise deals happen through private offers, not public listings. Learn how to customize pricing for individual buyers and why buyers prefer the private offer workflow for large contracts.",
      },
      {
        name: "Entitlement",
        slug: "entitlement",
        why: "When a buyer accepts your private offer, an entitlement is created. As an AE, you'll track entitlement status post-close — understand what it is, what states it can be in, and how it maps to the buyer's subscription.",
      },
      {
        name: "Co-sell",
        slug: "co-sell",
        why: "Co-selling means working alongside the hyperscaler's own sales team to close deals. Learn the motion, when to engage the cloud field team, and what sellers gain from co-sell participation.",
      },
      {
        name: "ISV Accelerate — AWS",
        slug: "isv-accelerate-—-aws",
        why: "ISV Accelerate is the AWS program that formalizes co-sell access for software sellers. Learn what your company needs to qualify and what benefits it unlocks for your AWS-facing pipeline.",
      },
      {
        name: "Propensity to Buy (PTB) Score",
        slug: "propensity-to-buy-ptb-score",
        why: "Every AE has more accounts than time. The PTB Score is how Suger surfaces which accounts are most likely to transact through a cloud marketplace — so you know where to focus co-sell effort before opening ACE or reaching out to a hyperscaler field team.",
      },
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
        why: "When a deal involves a channel partner or reseller, it closes through a CPPO rather than a direct private offer. Learn how attribution works and what the AE's role is in a partner-led marketplace deal.",
      },
    ],
  },
  {
    slug: "partner-manager-onboarding",
    title: "Partner Manager Onboarding",
    category: "onboarding",
    level: "intermediate",
    description:
      "Co-sell programs, channel motions, and partner tooling from the partner manager's perspective — what you need to know to operate the partner layer of a cloud marketplace motion.",
    meta: "8 terms · ~30 min",
    next: "channel-and-partner-motions",
    prereqs: ["cosell-fundamentals"],
    steps: [
      {
        name: "Co-sell",
        slug: "co-sell",
        why: "Partner management on cloud marketplace is fundamentally a co-sell motion. Start with what co-sell means, how the hyperscaler's field team participates, and what the ISV does to enable it.",
      },
      {
        name: "Referral",
        slug: "referral",
        why: "The referral is the core unit of co-sell operations — the joint opportunity record you'll create and manage. Learn what a referral contains, how it flows between systems, and how it becomes a deal.",
      },
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
        why: "ACE is the AWS platform where co-sell referrals are managed. As a partner manager, you'll register opportunities, track AWS field engagement, and report on joint pipeline through ACE.",
      },
      {
        name: "ISV Accelerate — AWS",
        slug: "isv-accelerate-—-aws",
        why: "ISV Accelerate governs what co-sell benefits your company can access on AWS. Learn the program requirements, what tiers unlock ACE access and AWS rep incentives, and how to maintain eligibility.",
      },
      {
        name: "Resale Authorization — AWS",
        slug: "resale-authorization-—-aws",
        why: "When partners need to resell, you as the partner manager will grant Resale Authorizations. Learn what fields you control — pricing scope, partner eligibility, expiration — and how to configure them correctly.",
      },
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
        why: "The CPPO is the transaction mechanism your channel partners use after receiving a Resale Authorization. Learn how the offer is created, how attribution flows back to the ISV, and what you monitor post-close.",
      },
      {
        name: "Distributor",
        slug: "distributor",
        why: "In two-tier partner models, distributors aggregate channel partners. Learn when distributors appear in the channel chain, what they do, and how they affect your resale and authorization workflows.",
      },
      {
        name: "Channel Partner (CP)",
        slug: "channel-partner-cp",
        why: "Your day-to-day as a partner manager is built around channel partner entities — their records, their authorizations, their deal history. Learn how CPs are structured in marketplace systems and what you manage.",
      },
    ],
  },
  {
    slug: "revops-onboarding",
    title: "RevOps Onboarding",
    category: "onboarding",
    level: "intermediate",
    description:
      "Revenue attribution, metering, committed spend, and billing mechanics that flow through marketplace — the RevOps perspective on cloud GTM.",
    meta: "7 terms · ~25 min",
    next: "enterprise-billing-and-committed-spend",
    prereqs: ["enterprise-billing-and-committed-spend"],
    steps: [
      {
        name: "Revenue",
        slug: "revenue",
        why: "Start with the revenue model — how marketplace revenue is defined, where it comes from, and how it's recognized differently from direct sales. This is the RevOps frame for everything that follows.",
      },
      {
        name: "Metered Billing",
        slug: "metered-billing",
        why: "Usage-based billing is the dominant model for marketplace revenue. Learn how metered billing is structured, how consumption maps to charges, and what RevOps needs to track for accurate revenue reporting.",
      },
      {
        name: "Metering / Usage Reporting",
        slug: "metering-/-usage-reporting",
        why: "Metered billing requires ISVs to actively report usage to the marketplace. Learn the reporting pipeline, timing requirements, and what happens when records are missed or duplicated — a common source of revenue leakage.",
      },
      {
        name: "Cloud Committed Spend (CCS)",
        slug: "cloud-committed-spend-ccs",
        why: "Enterprise buyers' committed spend balances drive a large portion of marketplace deal volume. Learn what CCS is, how draw-down works, and why it matters for forecasting and deal strategy.",
      },
      {
        name: "Enterprise Discount Program (EDP) — AWS",
        slug: "enterprise-discount-program-edp-—-aws",
        why: "EDP is the AWS committed spend program most commonly encountered in enterprise deals. Learn what qualifies for draw-down, how it affects net revenue, and what RevOps needs to track for EDP-eligible transactions.",
      },
      {
        name: "Azure Consumption Commitment (MACC) — Azure",
        slug: "azure-consumption-commitment-macc-—-azure",
        why: "MACC is Azure's committed spend equivalent. Learn how MACC-eligible transactions are recognized, what RevOps attributes to MACC draw-down, and how it differs from EDP in reporting terms.",
      },
      {
        name: "Disbursement",
        slug: "disbursement",
        why: "Disbursement is how marketplace revenue lands in your bank — the payout schedule, fee deductions, and reconciliation process. Understanding the disbursement cycle is critical for RevOps cash flow and revenue close.",
      },
    ],
  },
  {
    slug: "executive-briefing",
    title: "Executive Briefing",
    category: "onboarding",
    level: "beginner",
    description:
      "Why cloud marketplaces matter, how enterprise procurement works through marketplace, and the co-sell and committed spend dynamics that drive revenue — no prior knowledge needed.",
    meta: "9 terms · ~30 min",
    next: "cloud-marketplace-basics",
    steps: [
      {
        name: "Cloud Go-to-Market (Cloud GTM)",
        slug: "cloud-go-to-market-cloud-gtm",
        why: "Cloud GTM is now a primary growth lever for enterprise software companies — not an experiment. Understand why the shift to marketplace distribution is accelerating and what it means for your company's competitive positioning.",
      },
      {
        name: "Listing",
        slug: "listing",
        why: "Your marketplace listing is your product's commercial presence on the hyperscaler's platform. Executives should understand what a listing enables — and what it doesn't — because listing quality directly affects whether enterprise buyers can transact through marketplace at all.",
      },
      {
        name: "Private Offer",
        slug: "private-offer",
        why: "The vast majority of enterprise marketplace revenue is transacted through private offers — customized, negotiated deals sent directly to a specific buyer. Understanding this mechanism explains why marketplace is a serious enterprise sales channel, not just a catalog.",
      },
      {
        name: "Co-sell",
        slug: "co-sell",
        why: "Co-selling with hyperscaler field teams is the highest-leverage motion in cloud GTM — it accelerates deal cycles, adds enterprise credibility, and creates a distribution multiplier you can't replicate through direct sales alone. This is the core reason serious ISVs invest in marketplace.",
      },
      {
        name: "ISV Accelerate — AWS",
        slug: "isv-accelerate-—-aws",
        why: "ISV Accelerate is the AWS program that gates access to co-sell support and AWS rep incentives. Executives should understand what qualifying for this program unlocks — because it's the difference between passive marketplace presence and active hyperscaler-backed distribution.",
      },
      {
        name: "Cloud Committed Spend (CCS)",
        slug: "cloud-committed-spend-ccs",
        why: "Your largest enterprise prospects almost certainly have committed spend balances with AWS, Azure, or GCP — and they're looking for ways to draw them down before they expire. Marketplace listings that qualify for committed spend draw-down have a structural deal-closing advantage in those accounts.",
      },
      {
        name: "Marketplace Fee / Transaction Fee",
        slug: "marketplace-fee-/-transaction-fee",
        why: "The marketplace takes a fee on every transaction — typically 3–5% for established ISVs. Executives need to understand this cost structure to accurately model marketplace economics and compare it against other distribution channels.",
      },
      {
        name: "Entitlement",
        slug: "entitlement",
        why: "When a marketplace deal closes, an entitlement is created — the operational record that the buyer's access rights are active. Understanding what 'closed on marketplace' means operationally helps executives track pipeline health and distinguish counted revenue from in-flight transactions.",
      },
      {
        name: "Revenue",
        slug: "revenue",
        why: "Marketplace revenue has its own recognition timing, fee structure, and disbursement schedule. Executives need to understand how marketplace bookings translate to recognized revenue — and how they're reported differently from direct sales — to accurately communicate performance to the board.",
      },
    ],
  },
  {
    slug: "aws-marketplace-essentials",
    title: "AWS Marketplace Essentials",
    category: "operations",
    level: "intermediate",
    description:
      "The AWS-specific mechanics every ISV needs: how listings, offers, and agreements work on AWS Marketplace, the key programs that unlock co-sell access, and the tools and APIs that run day-to-day operations.",
    meta: "20 terms · ~80 min",
    continuesFrom: "cloud-marketplace-basics",
    next: "cosell-fundamentals",
    prereqs: ["cloud-marketplace-basics"],
    steps: [
      {
        name: "AWS Marketplace — AWS",
        slug: "aws-marketplace-—-aws",
        why: "Start with the platform itself — what AWS Marketplace is, how it fits into the AWS Partner Network, and why it's the largest and most mature cloud marketplace for ISV distribution.",
      },
      {
        name: "AWS Marketplace Management Portal (AMMP) — AWS",
        slug: "aws-marketplace-management-portal-ammp-—-aws",
        why: "The AMMP is the seller's primary interface for managing listings, offers, and account settings on AWS Marketplace. Learn what's configurable here and how it relates to the Catalog API.",
      },
      {
        name: "AWS Partner Network (APN) — AWS",
        slug: "aws-partner-network-apn-—-aws",
        why: "ISV Accelerate, ACE, and most AWS co-sell benefits require APN membership. Understand what the APN is, how partners are tiered, and why your APN standing determines your access to marketplace programs.",
      },
      {
        name: "Partner Revenue Measurement (PRM) — AWS",
        slug: "partner-revenue-measurement-prm-—-aws",
        why: "PRM launched January 2026 and is now required for ISVs who want to unlock APN funding benefits — including for the ISV Accelerate 2026 cohort. Learn what PRM is and how to set it up before you get stuck on a funding claim.",
      },
      {
        name: "ISV Accelerate — AWS",
        slug: "isv-accelerate-—-aws",
        why: "ISV Accelerate is the AWS program that unlocks co-sell support, AWS field engagement, and SaaS Co-sell Benefit incentives. Learn the eligibility requirements and why qualifying for this program is a commercial priority.",
      },
      {
        name: "Foundational Technical Review (FTR) — AWS",
        slug: "foundational-technical-review-ftr-—-aws",
        why: "The FTR is a hard prerequisite for ISV Accelerate co-sell access and AWS Specialization. Learn what the review covers, how long it takes, and when the Well-Architected waiver applies — so you can plan the gate before it blocks you.",
      },
      {
        name: "AWS Intelligence Signals — AWS",
        slug: "aws-intelligence-signals-—-aws",
        why: "Once ISV Accelerate is active, you gain access to AWS's predictive signals in Partner Insights: Marketplace Engagement Score (channel likelihood) and Solution Engagement Score (your-product-specific likelihood). These are the data points that should drive which accounts you prioritize for ACE referrals.",
      },
      {
        name: "Agreement — AWS",
        slug: "agreement-—-aws",
        why: "When a buyer accepts a private offer on AWS Marketplace, an Agreement is created — the contract record that governs the subscription. Learn what an Agreement contains and how it persists through renewals and amendments.",
      },
      {
        name: "AWS Marketplace Agreements API — AWS",
        slug: "aws-marketplace-agreements-api-—-aws",
        why: "After learning what an Agreement is, learn how to query and manage it programmatically. The Agreements API lets ISVs and integration platforms retrieve agreement details, validate entitlements, and monitor subscription state — the operational glue between marketplace contracts and your own systems.",
      },
      {
        name: "Standard Contract (SCMP) — AWS",
        slug: "standard-contract-scmp-—-aws",
        why: "AWS's standardized contract template for marketplace transactions. Learn when to use the SCMP, what it covers, and how ISVs can layer custom EULAs on top of it without starting from scratch.",
      },
      {
        name: "Multi-Product Solution — AWS",
        slug: "multi-product-solution-—-aws",
        why: "AWS's framework for bundling multiple products into one offering, built on two capabilities: Solution Listings for discovery and Offer Sets for transactions. Learn what each does before going deeper on either — they're distinct tools that serve different stages of the buyer journey.",
      },
      {
        name: "Solution Listing — AWS",
        slug: "solution-listing-—-aws",
        why: "The discovery side of a Multi-Product Solution: a curated AWS Marketplace page that showcases how your products work together without requiring a new transactional SKU. Learn when to use one and how it routes buyers toward your individual listings or Offer Set.",
      },
      {
        name: "Offer Set — AWS",
        slug: "offer-set-—-aws",
        why: "The transactional side of a Multi-Product Solution: groups multiple private offers into a single buyer acceptance event. Learn how Offer Sets simplify procurement for multi-component deals and when they're the right choice over separate private offers.",
      },
      {
        name: "Subscription — AWS",
        slug: "subscription-—-aws",
        why: "An AWS Marketplace Subscription is the active billing relationship between a buyer and a product. Learn how subscriptions differ from Agreements, how they're managed, and what triggers subscription state changes.",
      },
      {
        name: "Product Code — AWS",
        slug: "product-code-—-aws",
        why: "The Product Code is the AWS identifier that links every marketplace transaction — metering records, entitlements, and subscriptions — back to a specific product. Know how it's used in APIs and billing pipelines.",
      },
      {
        name: "AWS Marketplace Catalog API — AWS",
        slug: "aws-marketplace-catalog-api-—-aws",
        why: "The Catalog API is how ISVs and integration platforms programmatically create and update listings and offers. Learn its capabilities and how integration partners like Suger use it to automate listing management.",
      },
      {
        name: "AWS Marketplace Discovery API — AWS",
        slug: "aws-marketplace-discovery-api-—-aws",
        why: "The Catalog API manages your own listings; the Discovery API exposes the full AWS Marketplace catalog for programmatic search and browse. Buyers and partner platforms use Discovery to build procurement tooling and catalog integrations — ISVs benefit by understanding how their listings are indexed and surfaced in automated purchase flows.",
      },
      {
        name: "Professional Services Listing — AWS",
        slug: "professional-services-listing-—-aws",
        why: "SaaS and AMI are the most common AWS Marketplace product types, but Professional Services is the mechanism for selling consulting, implementation, training, and managed services alongside software on a single marketplace transaction — including with Variable Payments for milestone billing.",
      },
      {
        name: "SageMaker Model Listing — AWS",
        slug: "sagemaker-model-listing-—-aws",
        why: "If your product includes ML models, SageMaker Model Listings are how you distribute them on AWS Marketplace — buyers deploy directly into their SageMaker environment without seeing your model artifacts. A distinct product type from SaaS or AMI with its own onboarding requirements.",
      },
      {
        name: "AWS Marketplace Vendor Insights",
        slug: "aws-marketplace-vendor-insights",
        why: "Enterprise buyers increasingly run security questionnaire processes before approving marketplace purchases. Vendor Insights gives your listing a continuously-updated security and compliance profile — aggregating SOC 2, ISO certifications, and AWS Security Hub data — so buyers can approve faster without repeated manual questionnaire responses.",
      },
    ],
  },
  {
    slug: "azure-marketplace-essentials",
    title: "Azure Marketplace Essentials",
    category: "operations",
    level: "intermediate",
    description:
      "How Microsoft's commercial marketplace works end-to-end — from listing structures and offer types to MACC eligibility, partner programs, and the APIs that power SaaS integrations.",
    meta: "16 terms · ~60 min",
    continuesFrom: "cloud-marketplace-basics",
    next: "cosell-fundamentals",
    prereqs: ["cloud-marketplace-basics"],
    steps: [
      {
        name: "Microsoft Marketplace — Azure",
        slug: "microsoft-marketplace-—-azure",
        why: "Start with the platform — the unified Microsoft commercial marketplace that replaced the separate Azure Marketplace and AppSource storefronts. Learn what types of offers are available and how buyers discover them.",
      },
      {
        name: "Partner Center — Azure",
        slug: "partner-center-—-azure",
        why: "Partner Center is where ISVs publish and manage every offer on Microsoft Marketplace. Learn how it's structured, what's configured there, and how it connects to the SaaS Fulfillment API and co-sell workflows.",
      },
      {
        name: "Plan — Azure",
        slug: "plan-—-azure",
        why: "Azure offers are organized into Plans — pricing and packaging tiers within a single listing. Understanding how plans work is essential before creating private plans or configuring MACC-eligible offers.",
      },
      {
        name: "Private Plan — Azure",
        slug: "private-plan-—-azure",
        why: "Azure's mechanism for custom pricing: instead of a standalone private offer, ISVs create a private plan visible only to a specific buyer. Learn how private plans differ from AWS private offers and when to use each.",
      },
      {
        name: "Azure Consumption Commitment (MACC) — Azure",
        slug: "azure-consumption-commitment-macc-—-azure",
        why: "MACC-eligible status is the most important commercial lever for enterprise Azure deals — it lets purchases draw down the buyer's committed spend. Understand what the MACC program is and why enterprise buyers specifically seek out MACC-eligible offers.",
      },
      {
        name: "MACC Eligibility — Azure",
        slug: "macc-eligibility-—-azure",
        why: "Knowing that MACC exists is only half the story — understanding the exact criteria your offer must meet is what separates sellers who can pitch MACC as a buying lever from those who can't. MACC eligibility is per-offer (not per-publisher), requires Azure IP Co-sell Eligible status, and excludes free, BYOL, and trial offers. This is the checklist every ISV needs before positioning MACC in an enterprise deal.",
      },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
        why: "Azure co-sell access is gated by status tiers. Learn the difference between Co-sell Eligible and Co-sell Incentivized, what each unlocks, and how achieving Incentivized status amplifies deal support from Microsoft field teams.",
      },
      {
        name: "Referral Confidence Score — Azure",
        slug: "referral-confidence-score-—-azure",
        why: "When you submit a referral from Partner Center, Microsoft uses the Referral Confidence Score to prioritize engagement from the Azure field team. Understanding this scoring mechanism explains why deal quality signals — not just deal volume — determine how much co-sell support you receive.",
      },
      {
        name: "Microsoft Commerce Incentive (MCI) — Azure",
        slug: "microsoft-commerce-incentive-mci-—-azure",
        why: "MCI is the incentive program that motivates Microsoft's field sellers to co-sell your product. Knowing how MCI works — and how your listing's eligibility affects whether Microsoft reps earn incentive on a deal — gives you a direct lever for improving field engagement on your Azure co-sell pipeline.",
      },
      {
        name: "Partner-led Deal — Azure",
        slug: "partner-led-deal-—-azure",
        why: "When submitting opportunities in Partner Center, selecting the right deal type determines whether Microsoft sellers are invited in. The Partner-Led Deal type gives ISVs a way to register and close opportunities independently while still building co-sell track record — which contributes to Co-sell Incentivized eligibility.",
      },
      {
        name: "Azure Intelligence Signals — Azure",
        slug: "azure-intelligence-signals-—-azure",
        why: "Microsoft's CloudAscent system scores every account for Azure adoption propensity and classifies them into Act Now, Evaluate, Nurture, and Educate clusters. Suger surfaces these as Azure Engagement, Event, and Usage Scores — the signals that tell you which accounts are ready for a Microsoft co-sell push.",
      },
      {
        name: "Marketplace Rewards — Azure",
        slug: "marketplace-rewards-—-azure",
        why: "As ISVs transact more revenue through Microsoft Marketplace, they unlock Marketplace Rewards — marketing, technical, and sales benefits. Learn what's available at each revenue tier and how to activate rewards.",
      },
      {
        name: "SaaS Fulfillment API — Azure",
        slug: "saas-fulfillment-api-—-azure",
        why: "The SaaS Fulfillment API is how ISVs integrate their SaaS products with Microsoft Marketplace — handling subscription lifecycle events, activation, and plan changes. Learn the required endpoints and what Suger abstracts.",
      },
      {
        name: "SaaS Auto Activation — Azure",
        slug: "saas-auto-activation-—-azure",
        why: "The SaaS Fulfillment API requires ISVs to explicitly activate subscriptions after buyer purchase — but SaaS Auto Activation decouples billing from fulfillment, allowing subscriptions to start billing even before ISV activation is complete. Understanding this behavior is critical to avoid unintended billing gaps or disputes during launch.",
      },
      {
        name: "Microsoft AI Cloud Partner Program (MPN) — Azure",
        slug: "microsoft-ai-cloud-partner-program-mpn-—-azure",
        why: "MPN membership is the foundation of all Azure partner benefits — co-sell access, Marketplace Rewards, and ISV Success Program eligibility all flow through it. Learn the membership tiers and what each unlocks.",
      },
      {
        name: "Professional Services Offer — Azure",
        slug: "professional-services-offer-—-azure",
        why: "Unlike SaaS or VM offers, Professional Services offers are non-transactable — they generate a contact request rather than a checkout event. They're the mechanism for listing consulting, implementation, and assessment services on Azure Marketplace, and can be paired with IP co-sell motions to make advisory engagements co-sell eligible.",
      },
      {
        name: "Microsoft Preferred Solutions Badge — Azure",
        slug: "microsoft-preferred-solutions-badge-—-azure",
        why: "The Preferred Solutions Badge is Azure's top-tier quality signal — awarded annually by Microsoft solution area teams to ISVs with outstanding customer impact and technology alignment. It unlocks elevated search placement and co-sell prioritization by Microsoft field sellers, making it the highest-leverage trust credential available to a transactable Azure offer.",
      },
    ],
  },
  {
    slug: "gcp-marketplace-essentials",
    title: "GCP Marketplace Essentials",
    category: "operations",
    level: "intermediate",
    description:
      "The GCP-specific mechanics ISVs need: how GCP Marketplace is structured, how committed use and private offers work, and the partner programs and APIs that govern the GCP co-sell and reseller motions.",
    meta: "12 terms · ~45 min",
    continuesFrom: "cloud-marketplace-basics",
    next: "cosell-fundamentals",
    prereqs: ["cloud-marketplace-basics"],
    steps: [
      {
        name: "GCP Marketplace — GCP",
        slug: "gcp-marketplace-—-gcp",
        why: "Start with the platform — what GCP Marketplace is, how it compares to AWS and Azure marketplaces, and the key differences in how listings and transactions are structured on Google Cloud.",
      },
      {
        name: "Producer Portal — GCP",
        slug: "producer-portal-—-gcp",
        why: "The Producer Portal is the GCP equivalent of AWS's AMMP — the ISV interface for managing listings and offers on GCP Marketplace. Learn what you configure here and how it connects to the Procurement API.",
      },
      {
        name: "Google Cloud Partner Network — GCP",
        slug: "google-cloud-partner-network-—-gcp",
        why: "Google Cloud Partner Network is GCP's partner framework — co-sell access, Build Engagement credits, and funding programs all flow through it. Learn the tiers, engagement models, and what ISVs need to qualify.",
      },
      {
        name: "Google Cloud Partner Innovation Fund — GCP",
        slug: "google-cloud-partner-innovation-fund-—-gcp",
        why: "Google Cloud Partner Network tiers gate access to GCP funding programs, and the Partner Innovation Fund is one of the most useful — it offsets POC, development, and go-to-market costs. Knowing this fund exists and how to qualify through Google Cloud Partner Network is part of operating the GCP partnership effectively.",
      },
      {
        name: "Agentic Earnings Hub — GCP",
        slug: "agentic-earnings-hub-—-gcp",
        why: "Google Cloud Partner Network is the framework; the Agentic Earnings Hub is where ISVs actually claim AI-specific incentive payouts. If your product is in the generative AI or agents space, the Agentic Earnings Hub is the Partner Center-equivalent tool for managing GCP's AI partner earnings — knowing it exists before you go live prevents missed claims.",
      },
      {
        name: "Google Cloud Partner Agent — GCP",
        slug: "google-cloud-partner-agent-—-gcp",
        why: "The Google Cloud Partner Agent is an AI-powered tool inside the partner portal that automates routine operational tasks — certifications, incentive claims, program status updates. Understanding what it can handle versus what requires manual action lets partner teams work more efficiently inside the GCP partner ecosystem.",
      },
      {
        name: "GCP Intelligence Signals — GCP",
        slug: "gcp-intelligence-signals-—-gcp",
        why: "Google Cloud Partner Network gives ISVs access to GCP engagement and marketplace activity data per account — surfaced in Suger as GCP Engagement Score plus purchase and review metrics. Use these to identify which accounts are already active on GCP Marketplace before initiating outreach.",
      },
      {
        name: "Committed Use Discount (CUD) — GCP",
        slug: "committed-use-discount-cud-—-gcp",
        why: "CUD is GCP's committed spend mechanism. Understand how CUD draw-down works for marketplace purchases, what makes an ISV's offer eligible, and why CUD eligibility is a deal-closing lever for enterprise GCP buyers.",
      },
      {
        name: "Private Offer — GCP",
        slug: "private-offer-—-gcp",
        why: "GCP's private offer mechanism differs from AWS and Azure — learn how it's structured, what the ISV configures, and how the buyer accepts a private offer through GCP Marketplace.",
      },
      {
        name: "Marketplace Channel Private Offer (MCPO) — GCP",
        slug: "marketplace-channel-private-offer-mcpo-—-gcp",
        why: "MCPO is GCP's channel resale mechanism — the equivalent of AWS's CPPO. Learn how ISVs authorize resellers, how the MCPO transaction flows, and how it differs from the AWS and Azure channel models.",
      },
      {
        name: "Marketplace Customer Credit Program (MCCP) — GCP",
        slug: "marketplace-customer-credit-program-mccp-—-gcp",
        why: "MCCP gives first-time GCP Marketplace buyers up to 3% in Google Cloud credits — a direct incentive that ISVs can use to accelerate deals. Learn eligibility requirements and how to register opportunities through Google Cloud Partner Network.",
      },
      {
        name: "Procurement API — GCP",
        slug: "procurement-api-—-gcp",
        why: "The Procurement API is how ISVs integrate with GCP Marketplace — handling entitlement events, subscription approvals, and usage reporting. Learn the core endpoints and what Suger wraps for GCP integrations.",
      },
    ],
  },
  {
    slug: "cloud-funding-incentives",
    title: "Cloud Funding & Incentives",
    category: "billing",
    level: "intermediate",
    description:
      "The cross-platform funding landscape — AWS, Azure, and GCP programs that offset customer acquisition, migration, and proof-of-concept costs. Learn which programs exist, what they cover, and how ISVs and partners qualify.",
    meta: "11 terms · ~45 min",
    prereqs: ["cosell-fundamentals"],
    steps: [
      {
        name: "AWS Partner Funding — AWS",
        slug: "aws-partner-funding-—-aws",
        why: "Start with the AWS umbrella — the set of funding types AWS makes available to partners. Understanding the overall framework before diving into specific programs (MAP, MDF, POA, PIF) prevents confusion about what applies when.",
      },
      {
        name: "Migration Acceleration Program (MAP) — AWS",
        slug: "migration-acceleration-program-map-—-aws",
        why: "MAP is AWS's largest partner funding program — credits and cash for migration and modernization engagements. Learn what qualifies, how funding scales with deal size, and how the 2026 expansion to generative AI workloads broadens eligibility.",
      },
      {
        name: "ISV Workload Migration Program (WMP) — AWS",
        slug: "isv-workload-migration-program-wmp-—-aws",
        why: "WMP is MAP's ISV-specific variant — targeted at software vendors migrating customer workloads onto their AWS-hosted product. Learn how WMP funding differs from MAP and what ISVs must demonstrate to qualify.",
      },
      {
        name: "Marketing Development Funds (MDF) — AWS",
        slug: "marketing-development-funds-mdf-—-aws",
        why: "MDF reimburses eligible marketing activities — events, campaigns, and demand generation — that drive AWS pipeline. Learn what activities qualify, how to submit claims through the APFP, and what documentation AWS requires.",
      },
      {
        name: "Partner Opportunity Acceleration (POA) — AWS",
        slug: "partner-opportunity-acceleration-poa-—-aws",
        why: "POA is AWS's deal-level funding type — financial support tied to a specific ACE opportunity to accelerate close. Learn the eligibility criteria, how POA interacts with proof-of-concept funding, and the claim timeline.",
      },
      {
        name: "Proof of Concept (POC) Funding  — AWS",
        slug: "proof-of-concept-poc-funding-—-aws",
        why: "POC Funding offsets up to $25,000 of the cost of building a proof of concept for a customer. Learn the ACE stage requirements, how to submit through the APFP, and how POC funding fits into a broader deal acceleration strategy.",
      },
      {
        name: "Marketplace Private Offer Promotion Program (MPOPP) — AWS",
        slug: "marketplace-private-offer-promotion-program-mpopp-—-aws",
        why: "Launched August 2025, MPOPP lets ISVs accelerate deal close by offering AWS Promotional Credits when buyers accept private offers. It's the AWS equivalent of ECIF (Azure) and MCCP (GCP) — both of which you just covered.",
      },
      {
        name: "Partner Initiative Funding (PIF) — AWS",
        slug: "partner-initiative-funding-pif-—-aws",
        why: "PIF unlocks initiative-specific funding via a self-service template in the APFP — no PDM approval required for eligible activities. Learn what differentiates PIF from MDF and when to use each.",
      },
      {
        name: "End Customer Investment Funds (ECIF) — Azure",
        slug: "end-customer-investment-funds-ecif-—-azure",
        why: "ECIF is Microsoft's direct project funding mechanism — up to $500K paid to partners to deliver deployment, migration, or POC services that accelerate customer cloud adoption. Learn the hard prerequisites (Advanced Specialization) and how it compares to AWS's POA and POC programs.",
      },
      {
        name: "Marketplace Customer Credit Program (MCCP) — GCP",
        slug: "marketplace-customer-credit-program-mccp-—-gcp",
        why: "MCCP is GCP's buyer-side incentive — up to 3% in Google Cloud credits for first-time GCP Marketplace buyers. Learn how ISVs register opportunities in Google Cloud Partner Network to activate the credit and how it differs from AWS and Azure funding models.",
      },
      {
        name: "Google Cloud Partner Innovation Fund — GCP",
        slug: "google-cloud-partner-innovation-fund-—-gcp",
        why: "MCCP covers buyer-side GCP credits; the Partner Innovation Fund covers the ISV side — providing funding for go-to-market activities, POC builds, and joint solution development through Google Cloud Partner Network. Understanding both sides of GCP's incentive stack gives you the full picture of what's available to offset deal and onboarding costs.",
      },
    ],
  },
  {
    slug: "partner-revenue-measurement",
    title: "Partner Revenue Measurement",
    category: "advanced",
    level: "advanced",
    description:
      "How AWS measures and attributes the revenue impact of your product on customer AWS consumption — and how Suger's PRM layer connects disbursement, invoicing, and reporting into a unified picture. Covers the full lifecycle from fee mechanics to tagging implementation.",
    meta: "11 terms · ~45 min",
    prereqs: ["channel-and-partner-motions", "enterprise-billing-and-committed-spend"],
    next: "cloud-funding-incentives",
    steps: [
      {
        name: "Partner Revenue Management (PRM)",
        slug: "partner-revenue-management-prm",
        why: "Start with the concept: PRM is the full billing lifecycle from offer creation through disbursement and reporting. This is Suger's framing — before going into AWS-specific mechanics, understand what you're ultimately trying to measure and reconcile.",
      },
      {
        name: "Disbursement",
        slug: "disbursement",
        why: "The end goal of PRM: getting paid. Understand when marketplaces remit funds, what triggers disbursement, and how timing differs across AWS, Azure, and GCP — before going into what gets deducted first.",
      },
      {
        name: "Marketplace Fee / Transaction Fee",
        slug: "marketplace-fee-/-transaction-fee",
        why: "Before disbursement hits your account, the marketplace takes its cut. Know the standard listing fee (3% on AWS, varies elsewhere), when reduced rates apply for ISV Accelerate members, and how fees affect your net revenue calculation.",
      },
      {
        name: "Invoice",
        slug: "invoice",
        why: "In Suger's direct billing model, invoices are how usage translates into a payment obligation. Understanding the invoice lifecycle — Draft → Finalized → payment triggered — gives you the full picture of how revenue becomes cash before it becomes a disbursement.",
      },
      {
        name: "Suger Analytics",
        slug: "suger-analytics",
        why: "Before implementing AWS PRM tagging, understand what reporting visibility looks like in Suger. Analytics surfaces revenue, disbursements, and offer metrics across all marketplace channels — the reporting destination for the attribution data you'll configure next.",
      },
      {
        name: "Partner Revenue Measurement (PRM) — AWS",
        slug: "partner-revenue-measurement-prm-—-aws",
        why: "Now shift to the AWS-specific mechanism: PRM is how AWS quantifies the consumption impact your product has on customers' AWS bills. Launched January 2026, it unlocks APN funding eligibility and consumption insights that weren't previously available to partners.",
      },
      {
        name: "Revenue Attribution — AWS",
        slug: "revenue-attribution-—-aws",
        why: "Attribution is the core output of PRM: AWS associating customer AWS spend with your product. Understand how attribution is established, how long it persists, and what breaks it — before going into the tagging implementation that creates it.",
      },
      {
        name: "APN ID Tag (aws-apn-id) — AWS",
        slug: "apn-id-tag-aws-apn-id-—-aws",
        why: "The specific tag key-value pair (`aws-apn-id: pc:<product-code>`) that tells AWS which partner product to attribute consumption to. Knowing the exact format before you deploy prevents misattribution bugs that are difficult to detect after the fact.",
      },
      {
        name: "PRM Resource Tagging — AWS",
        slug: "prm-resource-tagging-—-aws",
        why: "Implementation detail: which resource types generate attribution (EC2, S3, RDS — chargeable services only), which don't (IAM, free-tier), and where tags must be applied to count. The most common PRM failure points are wrong resource types or missing tags on the actual billable workload.",
      },
      {
        name: "PRM Architecture Patterns — AWS",
        slug: "prm-architecture-patterns-—-aws",
        why: "Your deployment model determines where tags must go. Partner Account means you control everything; Customer Account means tagging in the customer's environment; Hybrid means both. Choose the wrong pattern and your attribution is partial — funding calculations will undercount your actual impact.",
      },
      {
        name: "Partner Relationship Management (PRM) System",
        slug: "partner-relationship-management-prm-system",
        why: "Close by zooming out: PRM isn't just a tagging exercise. Suger functions as the PRM execution layer — connecting AWS PRM attribution, co-sell pipeline, CPPO transactions, and CRM data into a unified partner revenue picture. This is how the tagging you just configured feeds into measurable, reportable partner impact.",
      },
    ],
  },
];
