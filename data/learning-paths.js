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
        name: "Transactable Offer",
        slug: "transactable-offer",
        why: "Not all listings can be purchased through the marketplace. Learn what makes an offer transactable and why this distinction matters for ISVs and buyers alike.",
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
    meta: "8 terms · ~30 min",
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
    meta: "9 terms · ~35 min",
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
        name: "ISV Accelerate — AWS",
        slug: "isv-accelerate-—-aws",
        why: "To unlock deeper AWS co-sell benefits, ISVs need to join ISV Accelerate. Learn the eligibility requirements and what the program unlocks — including AWS field engagement and deal support.",
      },
      {
        name: "SaaS Co-sell Benefit (SCB) — AWS",
        slug: "saas-co-sell-benefit-scb-—-aws",
        why: "The financial incentive that motivates AWS reps to actively co-sell your product. Understanding SCB explains why some deals get strong AWS field engagement and others don't.",
      },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
        why: "Azure's co-sell framework uses status tiers — Co-sell Eligible vs. Co-sell Incentivized — to determine what benefits an ISV receives. Learn how to qualify and what each status unlocks.",
      },
      {
        name: "Partner Advantage — GCP",
        slug: "partner-advantage-—-gcp",
        why: "GCP's co-sell program is structured differently from AWS and Azure. Partner Advantage is the framework that governs how ISVs qualify for and access GCP field co-sell support.",
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
    meta: "7 terms · ~25 min",
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
        name: "Metered Billing",
        slug: "metered-billing",
        why: "Usage-based billing is the most common model for marketplace transactions that draw down committed spend. Learn how metered billing is structured and why it's the preferred model for enterprise buyers.",
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
    ],
  },
  {
    slug: "marketplace-ops-essentials",
    title: "Marketplace Ops Essentials",
    category: "operations",
    level: "intermediate",
    description:
      "The day-to-day operational layer every ISV needs to understand — from what gets published on marketplace to how buyers get provisioned and how integrations keep entitlements in sync.",
    meta: "8 terms · ~30 min",
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
    meta: "7 terms · ~25 min",
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
    meta: "7 terms · ~20 min",
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
        why: "In Suger, an Organization is the top-level entity that maps to your company. Learn what an Organization contains, how it's structured, and why it's the first thing you configure when onboarding.",
      },
      {
        name: "Suger Console",
        slug: "suger-console",
        why: "The Suger Console is the management interface where you configure everything. Learn what's accessible from the Console, how it maps to cloud marketplace operations, and how to navigate it.",
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
    ],
  },
  {
    slug: "marketplace-integrations",
    title: "Marketplace Integrations",
    category: "operations",
    level: "intermediate",
    description:
      "How ISVs connect their backend systems to marketplace billing, entitlement, and provisioning flows — and what integration partners abstract for them.",
    meta: "7 terms · ~25 min",
    continuesFrom: "suger-platform-quickstart",
    next: "marketplace-tax-compliance",
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
    ],
  },
  {
    slug: "marketplace-tax-compliance",
    title: "Marketplace Tax & Compliance",
    category: "billing",
    level: "intermediate",
    description:
      "How tax collection and remittance works across AWS, Azure, and GCP — who's responsible for what, and how ISVs manage tax settings on each platform.",
    meta: "5 terms · ~20 min",
    continuesFrom: "marketplace-integrations",
    prereqs: ["marketplace-integrations"],
    steps: [
      {
        name: "Invoice",
        slug: "invoice",
        why: "Start with what a marketplace invoice is — the billing document that captures charges, fees, and tax. Understanding invoice structure gives you the frame for how tax appears in the billing flow.",
      },
      {
        name: "Tax Details Dashboard — AWS",
        slug: "tax-details-dashboard-—-aws",
        why: "AWS provides a dedicated dashboard for ISVs to configure their tax settings and review how tax is applied to marketplace transactions. Learn what it controls and what ISVs are responsible for configuring.",
      },
      {
        name: "Marketplace Tax Management — Azure",
        slug: "marketplace-tax-management-—-azure",
        why: "Azure's approach to marketplace tax differs from AWS — Microsoft acts as the Marketplace Facilitator for most transactions. Learn what that means for ISVs and what tax configuration is still required.",
      },
      {
        name: "Marketplace Tax Management — GCP",
        slug: "marketplace-tax-management-—-gcp",
        why: "GCP's tax model has its own nuances. Learn how Google handles tax collection and remittance for GCP Marketplace transactions and what compliance responsibilities remain with ISVs.",
      },
      {
        name: "Disbursement",
        slug: "disbursement",
        why: "Tax and fees are deducted before ISVs receive their net proceeds. Understanding disbursement — the payout schedule, deductions, and reconciliation process — completes the tax and billing picture.",
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
    meta: "8 terms · ~25 min",
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
        name: "Transactable Offer",
        slug: "transactable-offer",
        why: "Not all listings can be purchased through the marketplace directly. Learn what makes an offer transactable — this determines whether a buyer can close through marketplace or needs a different path.",
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
    meta: "6 terms · ~20 min",
    next: "cloud-marketplace-basics",
    steps: [
      {
        name: "Cloud Go-to-Market (Cloud GTM)",
        slug: "cloud-go-to-market-cloud-gtm",
        why: "Start with why Cloud GTM matters strategically — why the world's largest enterprise software companies are shifting distribution through cloud marketplaces and what it means for growth.",
      },
      {
        name: "Listing",
        slug: "listing",
        why: "A listing is how your company's product is published on a cloud marketplace. Understanding what a listing is and how buyers discover it sets up everything that follows about deal mechanics.",
      },
      {
        name: "Private Offer",
        slug: "private-offer",
        why: "Most enterprise marketplace revenue comes through private offers — seller-customized pricing for individual buyers. This is the primary transaction mechanism executives should understand.",
      },
      {
        name: "Co-sell",
        slug: "co-sell",
        why: "Co-selling is what makes cloud marketplace different from a traditional app store — it's a joint motion with the hyperscaler's own field teams. Learn why hyperscalers participate and what it means for deal velocity.",
      },
      {
        name: "Cloud Committed Spend (CCS)",
        slug: "cloud-committed-spend-ccs",
        why: "Enterprise buyers have committed spend balances with hyperscalers — and marketplace purchases draw them down. This is the mechanism that makes marketplace a preferred buying channel for large enterprises.",
      },
      {
        name: "Revenue",
        slug: "revenue",
        why: "Finally, understand how marketplace revenue flows — how transactions on the hyperscaler's platform translate into recognized revenue for your company, net of marketplace fees and timing of disbursements.",
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
    meta: "9 terms · ~35 min",
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
        name: "ISV Accelerate — AWS",
        slug: "isv-accelerate-—-aws",
        why: "ISV Accelerate is the AWS program that unlocks co-sell support, AWS field engagement, and SaaS Co-sell Benefit incentives. Learn the eligibility requirements and why qualifying for this program is a commercial priority.",
      },
      {
        name: "Agreement — AWS",
        slug: "agreement-—-aws",
        why: "When a buyer accepts a private offer on AWS Marketplace, an Agreement is created — the contract record that governs the subscription. Learn what an Agreement contains and how it persists through renewals and amendments.",
      },
      {
        name: "Standard Contract (SCMP) — AWS",
        slug: "standard-contract-scmp-—-aws",
        why: "AWS's standardized contract template for marketplace transactions. Learn when to use the SCMP, what it covers, and how ISVs can layer custom EULAs on top of it without starting from scratch.",
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
    ],
  },
  {
    slug: "azure-marketplace-essentials",
    title: "Azure Marketplace Essentials",
    category: "operations",
    level: "intermediate",
    description:
      "How Microsoft's commercial marketplace works end-to-end — from listing structures and offer types to MACC eligibility, partner programs, and the APIs that power SaaS integrations.",
    meta: "9 terms · ~35 min",
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
        why: "MACC-eligible status is the most important commercial lever for enterprise Azure deals — it lets purchases draw down the buyer's committed spend. Learn what it takes to achieve MACC eligibility and why enterprise buyers demand it.",
      },
      {
        name: "Co-sell Eligible / Incentivized — Azure",
        slug: "co-sell-eligible-/-incentivized-—-azure",
        why: "Azure co-sell access is gated by status tiers. Learn the difference between Co-sell Eligible and Co-sell Incentivized, what each unlocks, and how achieving Incentivized status amplifies deal support from Microsoft field teams.",
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
        name: "Microsoft AI Cloud Partner Program (MPN) — Azure",
        slug: "microsoft-ai-cloud-partner-program-mpn-—-azure",
        why: "MPN membership is the foundation of all Azure partner benefits — co-sell access, Marketplace Rewards, and ISV Success Program eligibility all flow through it. Learn the membership tiers and what each unlocks.",
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
    meta: "8 terms · ~30 min",
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
        name: "Partner Advantage — GCP",
        slug: "partner-advantage-—-gcp",
        why: "Partner Advantage is GCP's partner framework — co-sell access, Build Engagement credits, and funding programs all flow through it. Learn the tiers, engagement models, and what ISVs need to qualify.",
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
        why: "MCCP gives first-time GCP Marketplace buyers up to 3% in Google Cloud credits — a direct incentive that ISVs can use to accelerate deals. Learn eligibility requirements and how to register opportunities through Partner Advantage.",
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
    meta: "9 terms · ~35 min",
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
        why: "MCCP is GCP's buyer-side incentive — up to 3% in Google Cloud credits for first-time GCP Marketplace buyers. Learn how ISVs register opportunities in Partner Advantage to activate the credit and how it differs from AWS and Azure funding models.",
      },
    ],
  },
];
