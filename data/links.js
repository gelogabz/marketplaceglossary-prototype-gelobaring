export const linkSections = [
  {
    platform: "Suger",
    platformTag: "suger",
    links: [
      {
        title: "Suger Console",
        url: "https://console.suger.io",
        type: "portal",
        desc: "The main Suger platform — where all marketplace operations live: listings, offers, entitlements, co-sell pipeline, revenue, and integrations.",
      },
      {
        title: "Suger Product Docs",
        url: "https://doc.suger.io/get-started/",
        type: "doc",
        desc: "Concept and configuration documentation for the Suger platform. Covers billing, metering, co-sell, integrations, APIs, and workflows.",
        confusesWith: {
          otherTitle: "Suger Enablement Hub",
          otherUrl:
            "https://doc.clickup.com/42081486/d/h/18476e-108291/674f5a6ad9187cb/18476e-75011",
          note: "The Enablement Hub has step-by-step how-to articles and onboarding guides. The product docs at doc.suger.io cover concepts, configuration, and API reference.",
        },
      },
      {
        title: "Suger Enablement Hub",
        url: "https://doc.clickup.com/42081486/d/h/18476e-108291/674f5a6ad9187cb/18476e-75011",
        type: "doc",
        desc: "Step-by-step task guides and onboarding resources for Suger — from connecting a marketplace integration to creating private offers and configuring co-sell.",
      },
      {
        title: "Suger Terminology Sheet",
        url: "https://docs.google.com/spreadsheets/d/1fSTPiLuS8XiHwbMnwdWv2ID4gLRxvcrezoYN8WXGBpA/edit?gid=1958209474#gid=1958209474",
        type: "doc",
        desc: "Internal Google Sheets glossary of Suger-specific terms, field names, and product vocabulary maintained by the Suger team.",
      },
      {
        title: "Suger Blog",
        url: "https://www.suger.io/resources/blog/",
        type: "blog",
        desc: "The official Suger blog — product announcements, cloud marketplace strategy, co-sell playbooks, and GTM content for ISVs.",
      },
      {
        title: "Suger Resources",
        url: "https://www.suger.io/resources/",
        type: "blog",
        desc: "Suger's full resource library: case studies, webinars, guides, and articles on cloud GTM, marketplace strategy, and revenue operations.",
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
        type: "portal",
        desc: "The seller-facing management console for AWS Marketplace. Where ISVs manage products, review payment status, and configure settings. Requires a seller account.",
        confusesWith: {
          otherTitle: "AWS Marketplace (buyer storefront)",
          otherUrl: "https://aws.amazon.com/marketplace/",
          note: "The public storefront is where buyers browse and subscribe to software. Sellers work in Seller Central; buyers shop at the storefront.",
        },
      },
      {
        title: "AWS Partner Central",
        url: "https://partnercentral.awspartner.com/",
        type: "portal",
        desc: "The AWS co-sell and partner portal. Where ISVs submit ACE referrals, access funding programs, view partner analytics, and track joint pipeline with AWS field sales.",
        confusesWith: {
          otherTitle: "AWS Marketplace Seller Central",
          otherUrl: "https://aws.amazon.com/marketplace/management/",
          note: "Seller Central is for listing and billing management. Partner Central is for co-selling and AWS partner programs — they are separate portals.",
        },
      },
      {
        title: "ISV Accelerate Program",
        url: "https://aws.amazon.com/partners/programs/isv-accelerate/",
        type: "program",
        desc: "The AWS program that unlocks co-sell benefits, AWS field team engagement, and access to the ACE pipeline. Enrollment is required for ISVs wanting to co-sell with AWS.",
      },
      {
        title: "Foundational Technical Review (FTR)",
        url: "https://aws.amazon.com/partners/foundational-technical-review/",
        type: "program",
        desc: "AWS's technical validation program for ISV solutions. FTR approval is required to achieve Software designation in the AWS Partner Network and unlock co-sell eligibility.",
      },
      {
        title: "AWS Partner Funding",
        url: "https://aws.amazon.com/partners/funding/",
        type: "program",
        desc: "Overview of all AWS funding programs available to partners — including the Marketplace Development Fund (MDF), POC credits, and migration incentives.",
      },
      {
        title: "AWS Marketplace Seller Guide",
        url: "https://docs.aws.amazon.com/marketplace/latest/userguide/",
        type: "doc",
        desc: "Official AWS documentation for sellers: listing types (SaaS, AMI, Container, Data), pricing models, private offers, metering, and SaaS integration.",
        confusesWith: {
          otherTitle: "AWS Marketplace Buyer Guide",
          otherUrl:
            "https://docs.aws.amazon.com/marketplace/latest/buyerguide/",
          note: "The Buyer Guide covers procurement from the buyer's perspective, including Private Marketplace admin controls and procurement policies.",
        },
      },
      {
        title: "Private Offers — AWS",
        url: "https://docs.aws.amazon.com/marketplace/latest/userguide/private-offers.html",
        type: "doc",
        desc: "Documentation for creating custom-priced offers for individual buyers, including flexible payment schedules, channel partner private offers (CPPO), and upgrade/renewal mechanics.",
      },
      {
        title: "AWS Tax Help",
        url: "https://aws.amazon.com/tax-help/",
        type: "doc",
        desc: "AWS's tax resource hub — covers tax collection, exemptions, and marketplace tax methodology for sellers transacting through AWS Marketplace.",
      },
      {
        title: "AWS Marketplace Blog",
        url: "https://aws.amazon.com/blogs/awsmarketplace/",
        type: "blog",
        desc: "Official AWS blog covering Marketplace and Partner Network updates — new listing types, program changes, seller spotlights, and go-to-market content.",
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
        type: "portal",
        desc: "The Microsoft partner console for ISVs and partners — marketplace listing management, co-sell referrals, CSP offers, incentive payouts, and MPN membership all in one portal.",
        confusesWith: {
          otherTitle: "Azure Portal",
          otherUrl: "https://portal.azure.com/",
          note: "The Azure Portal is for managing Azure cloud infrastructure and subscriptions. Partner Center is exclusively for partner programs, marketplace listings, and co-sell.",
        },
      },
      {
        title: "Co-sell Overview — Azure",
        url: "https://learn.microsoft.com/en-us/partner-center/co-sell-overview",
        type: "program",
        desc: "Microsoft's co-sell program documentation: IP co-sell status requirements, Azure IP co-sell incentive eligibility, and how referrals are submitted and tracked in Partner Center.",
      },
      {
        title: "GTM & Marketplace Rewards",
        url: "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/gtm-your-marketplace-benefits",
        type: "program",
        desc: "The Azure Marketplace go-to-market benefits available to published ISVs — co-marketing resources, sales enablement, and rewards tied to transact offer status.",
      },
      {
        title: "Partner Center — Marketplace Offers docs",
        url: "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/overview",
        type: "doc",
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
        type: "doc",
        desc: "Explains which Azure Marketplace purchases count toward a customer's Microsoft Azure Consumption Commitment. Critical for positioning marketplace deals against a customer's committed Azure spend.",
      },
      {
        title: "Tax Details — Azure Marketplace",
        url: "https://learn.microsoft.com/en-us/partner-center/marketplace-offers/tax-details-marketplace",
        type: "doc",
        desc: "Microsoft's tax documentation for marketplace transactions — covers which markets Microsoft manages tax on behalf of publishers and where publishers are responsible.",
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
        type: "portal",
        desc: "Google Cloud's listing management console for marketplace ISVs. Where products, pricing plans, and private offer configurations are created and managed.",
        confusesWith: {
          otherTitle: "Google Cloud Console",
          otherUrl: "https://console.cloud.google.com/",
          note: "The Cloud Console is for managing GCP infrastructure, APIs, and cloud resources. The Producer Portal is a sub-section specifically for marketplace sellers.",
        },
      },
      {
        title: "Google Cloud Partner Advantage",
        url: "https://partners.cloud.google.com",
        type: "portal",
        desc: "The partner portal for co-sell, funding, and partner program management on Google Cloud. Equivalent to AWS Partner Central and Microsoft Partner Center.",
      },
      {
        title: "GCP Marketplace Docs — Partners",
        url: "https://docs.cloud.google.com/marketplace/docs/partners",
        type: "doc",
        desc: "Official Google Cloud documentation for ISVs: integrated SaaS setup, backend integration, metering via Service Control API, IAM configuration, and managing private offers.",
      },
      {
        title: "CUD / Committed Use Discounts",
        url: "https://docs.cloud.google.com/docs/cuds",
        type: "doc",
        desc: "Google Cloud's committed spend program documentation. Relevant for positioning marketplace deals against a customer's existing GCP committed spend.",
      },
      {
        title: "Google Cloud Partners Blog",
        url: "https://cloud.google.com/blog/topics/partners",
        type: "blog",
        desc: "Official Google Cloud blog section covering partner ecosystem news, marketplace updates, co-sell program changes, and ISV spotlights.",
      },
    ],
  },
  {
    platform: "Snowflake",
    platformTag: "snowflake",
    links: [
      {
        title: "Snowflake Marketplace (browse)",
        url: "https://app.snowflake.com/marketplace",
        type: "portal",
        desc: "The public-facing Snowflake Marketplace where buyers discover and install data products and Native Apps. Useful for checking how your listing appears to buyers.",
      },
      {
        title: "Snowflake Marketplace — Provider Docs",
        url: "https://docs.snowflake.com/en/collaboration/collaboration-listings-about",
        type: "doc",
        desc: "Snowflake's official documentation for data providers and Native App publishers: creating listings, setting up data sharing, configuring pricing (free, paid, trial), and managing discoverability.",
      },
      {
        title: "Snowflake Blog",
        url: "https://www.snowflake.com/blog/",
        type: "blog",
        desc: "Official Snowflake blog — product updates, data marketplace content, Native App announcements, and partner ecosystem news.",
      },
    ],
  },
  {
    platform: "Alibaba",
    platformTag: "alibaba",
    links: [
      {
        title: "Alibaba Cloud Marketplace (browse)",
        url: "https://marketplace.alibabacloud.com/",
        type: "portal",
        desc: "The public-facing Alibaba Cloud Marketplace where buyers discover and deploy image, SaaS, and service products across global and China regions.",
      },
      {
        title: "Alibaba Cloud Marketplace — Seller Guide",
        url: "https://www.alibabacloud.com/help/en/marketplace/marketplace-seller-guide",
        type: "doc",
        desc: "Alibaba's official documentation for Marketplace sellers — product listing types (image, SaaS, service), vendor onboarding, and product management.",
      },
      {
        title: "Alibaba Cloud — Become a Partner",
        url: "https://www.alibabacloud.com/en/partner/become_partner",
        type: "program",
        desc: "Registration for Alibaba Cloud's technology partner program — the prerequisite for listing as a Marketplace vendor.",
      },
      {
        title: "Alibaba Cloud Blog",
        url: "https://www.alibabacloud.com/blog",
        type: "blog",
        desc: "Official Alibaba Cloud community blog — product updates, technical content, and partner ecosystem news.",
      },
    ],
  },
  {
    platform: "Oracle",
    platformTag: "oracle",
    links: [
      {
        title: "Oracle Cloud Marketplace (browse)",
        url: "https://marketplace.oracle.com/",
        type: "portal",
        desc: "The public-facing Oracle Cloud Marketplace where buyers discover SaaS, image, stack, container, and Helm chart listings without needing an OCI login. Useful for checking how your listing appears to buyers before they sign in.",
        confusesWith: {
          otherTitle: "Oracle Cloud Infrastructure (OCI)",
          otherUrl: "https://docs.oracle.com/en-us/iaas/Content/GSG/Concepts/baremetalintro.htm",
          note: "OCI is Oracle's underlying cloud infrastructure platform (compute, storage, networking). Oracle Cloud Marketplace is the separate commerce layer built on top of OCI where ISVs list and sell software — they are not the same product.",
        },
      },
      {
        title: "Oracle Cloud Marketplace — Docs",
        url: "https://docs.oracle.com/en-us/iaas/Content/Marketplace/home.htm",
        type: "doc",
        desc: "Oracle's official documentation hub for Marketplace — listing types, publisher registration, Service Catalog, private offers, and the Marketplace API/CLI.",
      },
      {
        title: "Oracle Partner Network (OPN) — Join",
        url: "https://www.oracle.com/partnernetwork/program/join/",
        type: "program",
        desc: "Registration for Oracle Partner Network — the prerequisite enrollment program before publishing on Oracle Cloud Marketplace.",
      },
      {
        title: "Oracle Cloud Infrastructure Blog",
        url: "https://blogs.oracle.com/cloud-infrastructure/",
        type: "blog",
        desc: "Official OCI blog — platform updates, Marketplace announcements, and partner ecosystem news.",
      },
    ],
  },
];
