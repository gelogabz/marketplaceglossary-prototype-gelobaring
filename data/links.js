export const linkSections = [
  {
    platform: "Suger",
    platformTag: "suger",
    links: [
      {
        title: "Suger Console",
        url: "https://console.suger.io",
        desc: "The main Suger platform — where all marketplace operations live: listings, offers, entitlements, co-sell pipeline, revenue, and integrations.",
      },
      {
        title: "Suger Product Docs",
        url: "https://doc.suger.io/get-started/",
        desc: "Concept and configuration documentation for the Suger platform. Covers billing, metering, co-sell, integrations, APIs, and workflows.",
        confusesWith: {
          otherTitle: "Suger Help Center",
          otherUrl: "https://suger.help.usepylon.com/",
          note: "The Help Center has step-by-step how-to articles. The product docs at doc.suger.io cover concepts, configuration, and API reference.",
        },
      },
      {
        title: "Suger Help Center",
        url: "https://suger.help.usepylon.com/",
        desc: "Step-by-step task guides for Suger — from connecting a marketplace integration to creating private offers and configuring co-sell.",
      },
      {
        title: "Suger Terminology Sheet",
        url: "https://docs.google.com/spreadsheets/d/1fSTPiLuS8XiHwbMnwdWv2ID4gLRxvcrezoYN8WXGBpA/edit?gid=1958209474#gid=1958209474",
        desc: "Internal Google Sheets glossary of Suger-specific terms, field names, and product vocabulary maintained by the Suger team.",
      },
    ],
  },
  {
    platform: "AWS",
    platformTag: "aws",
    links: [
      {
        title: "AWS Marketplace Seller Central",
        url: "https://aws.amazon.com/marketplace/management/",
        desc: "The seller-facing management console for AWS Marketplace. Where ISVs manage products, review payment status, and configure settings. Requires a seller account.",
        confusesWith: {
          otherTitle: "AWS Marketplace (buyer storefront)",
          otherUrl: "https://aws.amazon.com/marketplace/",
          note: "The public storefront is where buyers browse and subscribe to software. Sellers work in Seller Central; buyers shop at the storefront.",
        },
      },
      {
        title: "AWS Marketplace Seller Guide",
        url: "https://docs.aws.amazon.com/marketplace/latest/userguide/",
        desc: "Official AWS documentation for sellers: listing types (SaaS, AMI, Container, Data), pricing models, private offers, metering, and SaaS integration.",
        confusesWith: {
          otherTitle: "AWS Marketplace Buyer Guide",
          otherUrl:
            "https://docs.aws.amazon.com/marketplace/latest/buyerguide/",
          note: "The Buyer Guide covers procurement from the buyer's perspective, including Private Marketplace admin controls and procurement policies.",
        },
      },
      {
        title: "AWS Partner Central",
        url: "https://partnercentral.awspartner.com/",
        desc: "The AWS co-sell and partner portal. Where ISVs submit ACE referrals, access funding programs, view partner analytics, and track joint pipeline with AWS field sales.",
        confusesWith: {
          otherTitle: "AWS Marketplace Seller Central",
          otherUrl: "https://aws.amazon.com/marketplace/management/",
          note: "Seller Central is for listing and billing management. Partner Central is for co-selling and AWS partner programs — they are separate portals.",
        },
      },
      {
        title: "Private Offers — AWS",
        url: "https://docs.aws.amazon.com/marketplace/latest/userguide/private-offers.html",
        desc: "Documentation for creating custom-priced offers for individual buyers, including flexible payment schedules, channel partner private offers (CPPO), and upgrade/renewal mechanics.",
      },
      {
        title: "ISV Accelerate Program",
        url: "https://aws.amazon.com/partners/programs/isv-accelerate/",
        desc: "The AWS program that unlocks co-sell benefits, AWS field team engagement, and access to the ACE pipeline. Enrollment is required for ISVs wanting to co-sell with AWS.",
      },
    ],
  },
  {
    platform: "Azure",
    platformTag: "azure",
    links: [
      {
        title: "Microsoft Partner Center",
        url: "https://partner.microsoft.com/",
        desc: "The Microsoft partner console for ISVs and partners — marketplace listing management, co-sell referrals, CSP offers, incentive payouts, and MPN membership all in one portal.",
        confusesWith: {
          otherTitle: "Azure Portal",
          otherUrl: "https://portal.azure.com/",
          note: "The Azure Portal is for managing Azure cloud infrastructure and subscriptions. Partner Center is exclusively for partner programs, marketplace listings, and co-sell.",
        },
      },
      {
        title: "Partner Center — Marketplace Offers docs",
        url: "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/overview",
        desc: "Microsoft documentation for publishing SaaS, Azure Application, VM, and container offers on Azure Marketplace and AppSource. Covers offer types, plans, pricing, and fulfillment APIs.",
        confusesWith: {
          otherTitle: "Partner Center — Co-sell & Referrals",
          otherUrl:
            "https://learn.microsoft.com/en-us/partner-center/co-sell-overview",
          note: "Publishing and co-sell both live in Partner Center but are separate workstreams: marketplace publishing is under 'Marketplace offers'; co-sell pipeline is under 'Referrals'.",
        },
      },
      {
        title: "MACC / Azure Consumption Commitment",
        url: "https://learn.microsoft.com/en-us/marketplace/azure-consumption-commitment-benefit",
        desc: "Explains which Azure Marketplace purchases count toward a customer's Microsoft Azure Consumption Commitment. Critical for positioning marketplace deals against a customer's committed Azure spend.",
      },
      {
        title: "Co-sell Overview — Azure",
        url: "https://learn.microsoft.com/en-us/partner-center/co-sell-overview",
        desc: "Microsoft's co-sell program documentation: IP co-sell status requirements, Azure IP co-sell incentive eligibility, and how referrals are submitted and tracked in Partner Center.",
      },
    ],
  },
  {
    platform: "GCP",
    platformTag: "gcp",
    links: [
      {
        title: "GCP Producer Portal",
        url: "https://console.cloud.google.com/producer-portal",
        desc: "Google Cloud's listing management console for marketplace ISVs. Where products, pricing plans, and private offer configurations are created and managed.",
        confusesWith: {
          otherTitle: "Google Cloud Console",
          otherUrl: "https://console.cloud.google.com/",
          note: "The Cloud Console is for managing GCP infrastructure, APIs, and cloud resources. The Producer Portal is a sub-section specifically for marketplace sellers.",
        },
      },
      {
        title: "GCP Marketplace Docs — Partners",
        url: "https://docs.cloud.google.com/marketplace/docs/partners",
        desc: "Official Google Cloud documentation for ISVs: integrated SaaS setup, backend integration, metering via Service Control API, IAM configuration, and managing private offers.",
      },
      {
        title: "Google Cloud Partner Advantage",
        url: "https://partners.cloud.google.com",
        desc: "The partner portal for co-sell, funding, and partner program management on Google Cloud. Equivalent to AWS Partner Central and Microsoft Partner Center.",
      },
    ],
  },
  {
    platform: "Snowflake",
    platformTag: "snowflake",
    links: [
      {
        title: "Snowflake Marketplace — Provider Docs",
        url: "https://docs.snowflake.com/en/collaboration/collaboration-listings-about",
        desc: "Snowflake's official documentation for data providers and Native App publishers: creating listings, setting up data sharing, configuring pricing (free, paid, trial), and managing discoverability.",
      },
      {
        title: "Snowflake Marketplace (browse)",
        url: "https://app.snowflake.com/marketplace",
        desc: "The public-facing Snowflake Marketplace where buyers discover and install data products and Native Apps. Useful for checking how your listing appears to buyers.",
      },
    ],
  },
];
