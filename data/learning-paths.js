export const learningPaths = [
  {
    slug: "cloud-marketplace-basics",
    title: "Cloud Marketplace Basics",
    category: "fundamentals",
    level: "beginner",
    description:
      "Everything you need to understand how cloud marketplaces work — what they are, who buys and sells on them, and how transactions flow from listing to entitlement.",
    meta: "5 terms · ~15 min",
    steps: [
      {
        name: "Listing",
        slug: "listing",
        why: "Understand what an ISV publishes on a hyperscaler marketplace and what makes a listing discoverable and transactable.",
      },
      {
        name: "Software-as-a-Service (SaaS)",
        slug: "software-as-a-service-saas",
        why: "The most common listing type — learn how SaaS billing and fulfillment work on marketplace and why it requires API integration.",
      },
      {
        name: "Transactable Offer",
        slug: "transactable-offer",
        why: "Not all listings can be purchased through the marketplace. Learn what makes an offer transactable and why it matters.",
      },
      {
        name: "Private Offer",
        slug: "private-offer",
        why: "Most enterprise deals happen through private offers. Learn how sellers customize pricing for individual buyers.",
      },
      {
        name: "Entitlement",
        slug: "entitlement",
        why: "Once a buyer accepts an offer, an entitlement is created. This is the record you'll monitor throughout the subscription lifecycle.",
      },
    ],
  },
  {
    slug: "private-offers-and-cppas",
    title: "Private Offers & CPPOs",
    category: "procurement",
    level: "intermediate",
    description:
      "From a basic private offer to a channel partner resale — learn how AWS pricing customization works, how partners get involved, and what authorizations are required.",
    meta: "5 terms · ~20 min",
    steps: [
      {
        name: "Private Offer",
        slug: "private-offer",
        why: "Start with the foundation — direct seller-to-buyer custom pricing on any cloud marketplace.",
      },
      {
        name: "Resale Authorization — AWS",
        slug: "resale-authorization-—-aws",
        why: "Before a partner can resell, the ISV must grant a Resale Authorization. Learn what it controls and how to configure it.",
      },
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
        why: "The core channel partner transaction mechanism. Understand how attribution, discounting, and billing flow through a CPPO.",
      },
      {
        name: "Entitlement",
        slug: "entitlement",
        why: "What gets created in Suger after a CPPO is accepted — and how to track it through the full lifecycle.",
      },
      {
        name: "Marketplace Fee / Transaction Fee",
        slug: "marketplace-fee-/-transaction-fee",
        why: "Understand how the marketplace takes its cut and how revenue splits across ISV, partner, and hyperscaler in a CPPO transaction.",
      },
    ],
  },
  {
    slug: "cosell-fundamentals",
    title: "Co-sell Fundamentals",
    category: "cosell",
    level: "intermediate",
    description:
      "How ISVs work alongside hyperscaler sales teams to close deals. Covers the platforms, the motion, the requirements, and how co-sell intersects with marketplace transactions.",
    meta: "5 terms · ~20 min",
    steps: [
      {
        name: "Co-sell",
        slug: "co-sell",
        why: "Start with what co-selling actually means — the motion, the incentives, and why hyperscalers participate.",
      },
      {
        name: "AWS Partner Network (APN) — AWS",
        slug: "aws-partner-network-apn-—-aws",
        why: "The membership layer that unlocks co-sell access on AWS. Learn what APN is and what tiers unlock ACE and co-sell benefits.",
      },
      {
        name: "APN Customer Engagements (ACE) — AWS",
        slug: "apn-customer-engagements-ace-—-aws",
        why: "The platform where AWS co-sell actually happens — registering opportunities, getting AWS field engagement, tracking joint pipeline.",
      },
      {
        name: "ISV Accelerate — AWS",
        slug: "isv-accelerate-—-aws",
        why: "The AWS program that formalizes co-sell for software ISVs. Learn eligibility requirements and the benefits it unlocks.",
      },
      {
        name: "SaaS Co-sell Benefit (SCB) — AWS",
        slug: "saas-co-sell-benefit-scb-—-aws",
        why: "The financial incentive that motivates AWS reps to co-sell your product. Understanding SCB explains field engagement dynamics.",
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
    meta: "5 terms · ~25 min",
    steps: [
      {
        name: "Cloud Committed Spend (CCS)",
        slug: "cloud-committed-spend-ccs",
        why: "The umbrella concept — what committed spend means, how it works across hyperscalers, and why enterprise buyers care.",
      },
      {
        name: "Enterprise Discount Program (EDP) — AWS",
        slug: "enterprise-discount-program-edp-—-aws",
        why: "AWS's committed spend mechanism. Learn how EDP draw-down works and what qualifying marketplace purchases mean for ISVs.",
      },
      {
        name: "Azure Consumption Commitment (MACC) — Azure",
        slug: "azure-consumption-commitment-macc-—-azure",
        why: "Azure's equivalent — understand what MACC-eligible means, how to get listed as eligible, and why enterprise Azure buyers care.",
      },
      {
        name: "Committed Use Discount (CUD) — GCP",
        slug: "committed-use-discount-cud-—-gcp",
        why: "GCP's committed spend model. Learn how CUD interacts with GCP Marketplace purchases and what ISVs need to know.",
      },
      {
        name: "Metering / Usage Reporting",
        slug: "metering-/-usage-reporting",
        why: "How usage-based billing is reported to the marketplace — the mechanics that make committed spend draw-down work in practice.",
      },
    ],
  },
  {
    slug: "marketplace-ops-essentials",
    title: "Marketplace Ops Essentials",
    category: "operations",
    level: "intermediate",
    description:
      "The day-to-day operational layer every ISV needs to understand — how listings are managed, how buyers get provisioned, and how integrations keep entitlements in sync.",
    meta: "5 terms · ~20 min",
    steps: [
      {
        name: "Listing",
        slug: "listing",
        why: "Everything ISV operations runs through a listing. Learn the structure, states, and lifecycle from publish to deprecation.",
      },
      {
        name: "Entitlement",
        slug: "entitlement",
        why: "The operational record created when a buyer accepts an offer. Learn what entitlement states mean and how to track them.",
      },
      {
        name: "Provisioning",
        slug: "provisioning",
        why: "How buyers actually get access to the ISV's product after purchasing on marketplace. Understand fulfillment flows and failure modes.",
      },
      {
        name: "Metering / Usage Reporting",
        slug: "metering-/-usage-reporting",
        why: "For usage-based and consumption models — how ISVs report usage back to the marketplace to trigger billing.",
      },
      {
        name: "Integration Partner",
        slug: "integration-partner",
        why: "Platforms like Suger that handle marketplace API integrations on behalf of ISVs. Learn what they abstract and when you need one.",
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
    meta: "5 terms · ~25 min",
    steps: [
      {
        name: "Distributor",
        slug: "distributor",
        why: "Understand the distributor's role in marketplace resale — who they are, what they do, and why ISVs engage them.",
      },
      {
        name: "Resale Authorization — AWS",
        slug: "resale-authorization-—-aws",
        why: "The ISV-granted permission that enables a partner to resell on AWS Marketplace. Learn the fields that control pricing and scope.",
      },
      {
        name: "Channel Partner Private Offer (CPPO) — AWS",
        slug: "channel-partner-private-offer-cppo-—-aws",
        why: "AWS's mechanism for partner-led resale. Understand the transaction flow, attribution model, and disbursement mechanics.",
      },
      {
        name: "Multiparty Private Offer (MPO) — Azure",
        slug: "multiparty-private-offer-mpo-—-azure",
        why: "Azure's equivalent of CPPO — how ISVs, partners, and enterprise buyers transact together on Microsoft's marketplace.",
      },
      {
        name: "Marketplace Channel Private Offer (MCPO) — GCP",
        slug: "marketplace-channel-private-offer-mcpo-—-gcp",
        why: "GCP's resale mechanism. Learn how MCPO compares to CPPO and MPO, and what's unique about the Google Cloud channel motion.",
      },
    ],
  },
];
