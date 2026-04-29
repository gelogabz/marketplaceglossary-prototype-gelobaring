export const terms = [
  {
    name: "APN Customer Engagements (ACE) — AWS",
    tags: ["aws", "cosell"],
    def: "AWS's co-sell platform where ISVs and AWS sales teams jointly register, track, and pursue customer opportunities. The AWS equivalent of Microsoft's co-sell program or GCP Partner Advantage co-sell.",
    alias:
      "Related: AWS Partner Network (APN) — AWS, Inbound Referral — Suger, Outbound Referral — Suger",
  },
  {
    name: "Agreement-Based Offer (ABO) — AWS",
    tags: ["aws", "offers"],
    def: "An AWS Marketplace feature that lets sellers create a new offer on top of an existing buyer agreement — used for renewals, upgrades, or amendments without requiring the buyer to start a new subscription from scratch.",
    alias: "Related: Agreement — AWS, Future Dated Agreement — AWS",
  },
  {
    name: "Agreement — AWS",
    tags: ["aws"],
    def: "The formal contract created when a buyer accepts an AWS Marketplace offer. Equivalent to Entitlement in Suger. Identified by an Agreement ID. Agreements can be renewed or amended via ABOs.",
    alias:
      "Suger equivalent: Entitlement — Suger | Related: Agreement-Based Offer (ABO) — AWS",
  },
  {
    name: "Amazon Machine Image (AMI) — AWS",
    tags: ["aws"],
    def: "A pre-configured virtual machine image listed on AWS Marketplace. ISVs package their software as an AMI for buyers to deploy on EC2 instances. Can be priced hourly, with an annual contract, or as BYOL.",
    alias:
      "Related: Bring Your Own License (BYOL) — General, Contract — AWS, Product Code — AWS",
  },
  {
    name: "Suger Analytics — Suger",
    tags: ["suger"],
    def: "Suger's built-in reporting dashboard for tracking marketplace revenue, entitlement status, usage consumption, and co-sell pipeline across all connected marketplaces.",
    alias:
      "Related: Revenue (Suger), Table Export (Suger), Suger Console — Suger",
  },
  {
    name: "AppSource — Microsoft",
    tags: ["azure"],
    def: "Microsoft's former marketplace storefront for business applications integrating with Microsoft 365, Dynamics 365, and Power Platform. As of September 2025, AppSource has been consolidated into the unified Microsoft Marketplace alongside Azure Marketplace.",
    alias: "Now part of: Microsoft Marketplace — Azure",
  },
  {
    name: "AWS Marketplace — AWS",
    tags: ["aws"],
    def: "Amazon's digital catalog where ISVs list and sell software, SaaS, data products, and professional services to AWS customers. Purchases are billed through the customer's AWS account.",
    alias: "",
  },
  {
    name: "AWS Marketplace Catalog API — AWS",
    tags: ["aws"],
    def: "The programmatic interface sellers use to manage product listings, offers, and changes in AWS Marketplace without using the seller console. Suger uses this API on sellers' behalf.",
    alias:
      "Related: AWS Marketplace Management Portal (AMMP) — AWS, Suger Console — Suger",
  },
  {
    name: "AWS Marketplace Management Portal (AMMP) — AWS",
    tags: ["aws"],
    def: "The web-based portal where AWS Marketplace sellers create and manage listings, private offers, agreements, and reports. Also known as Seller Central for marketplace.",
    alias: "Related: AWS Marketplace Catalog API — AWS, Suger Console — Suger",
  },
  {
    name: "AWS Partner Network (APN) — AWS",
    tags: ["aws"],
    def: "Amazon's global partner program for technology and consulting companies. Marketplace sellers are typically APN members, unlocking access to co-sell (ACE), funding, and go-to-market resources.",
    alias:
      "Related: APN Customer Engagements (ACE) — AWS, AWS Competency Program — AWS",
  },
  {
    name: "Azure Marketplace / Microsoft Marketplace",
    tags: ["azure"],
    def: "Microsoft's unified cloud marketplace launched September 2025, merging the previously separate Azure Marketplace and AppSource into a single platform. Covers SaaS, VMs, managed services, AI apps and agents, and professional services. Buyers with MACC-eligible committed spend can purchase transactable offers and draw down their Azure commitment.",
    alias: "Formerly: Azure Marketplace + AppSource | Related: MACC, MISA",
  },
  {
    name: "Billing Integration — General",
    tags: ["general", "suger"],
    def: "The technical connection between a marketplace and an ISV's system enabling automated invoicing, usage reporting, and payout reconciliation. Required for transactable listings.",
    alias:
      "Related: SaaS Fulfillment API — Azure, Procurement API — GCP, Signup URL Redirect — Suger",
  },
  {
    name: "Bring Your Own License (BYOL) — General",
    tags: ["general", "aws", "azure", "gcp"],
    def: "A marketplace listing model where the buyer has already purchased a license directly from the ISV outside the marketplace. The marketplace handles deployment but not billing. Not eligible for committed spend drawdown.",
    alias: "Related: Transactable Offer — General, Listing — General",
  },
  {
    name: "Buyer — Suger",
    tags: ["suger", "general"],
    def: "In Suger, the entity that has purchased a product through a marketplace. Has a tracked ID and maps to different entities across platforms.",
    alias:
      "AWS: Customer Identifier | Azure: Purchaser PUID | GCP: User Account Id",
  },
  {
    name: "Channel Partner (CP) — General",
    tags: ["aws", "azure", "gcp", "general"],
    def: "A reseller, system integrator (SI), or managed service provider (MSP) authorized by an ISV to resell marketplace products to end customers. The channel partner typically becomes the seller of record.",
    alias:
      "Related: Channel Partner Private Offer (CPPO) — AWS, Multiparty Private Offer (MPO) — Azure",
  },
  {
    name: "Cloud Go-To-Market (Cloud GTM) — General",
    tags: ["general"],
    def: "A sales and distribution strategy centered on cloud marketplaces — combining listing, transacting, and co-selling to reach enterprise buyers and shorten sales cycles.",
    alias: "Related: Suger Console — Suger, Co-sell — Suger",
  },
  {
    name: "Co-sell",
    tags: ["suger", "cosell"],
    def: "A partnership motion where an ISV and a cloud provider's sales team jointly pursue a customer opportunity. Unlocks pipeline sharing, deal acceleration, and marketplace incentives. Managed in Suger via the Co-sell module.",
    alias:
      "Related: APN Customer Engagements (ACE) — AWS, Partner Advantage — GCP, Microsoft Intelligent Security Association (MISA) — Azure",
  },
  {
    name: "Co-sell Eligible / Incentivized — Azure",
    tags: ["azure", "cosell"],
    def: "Tiered Microsoft co-sell statuses. 'Co-sell Ready' meets requirements for joint selling. 'Azure IP Co-sell Eligible' unlocks MACC eligibility — purchases count dollar-for-dollar toward the customer's Azure commitment on Microsoft Marketplace. 'Co-sell Incentivized' means Microsoft sellers earn quota credit for selling your product.",
    alias:
      "Related: Microsoft Azure Consumption Commitment (MACC) — Azure, Microsoft Marketplace — Azure",
  },
  {
    name: "Combined Pricing — GCP",
    tags: ["gcp"],
    def: "A GCP pricing model pairing a flat-rate subscription commit with usage-based metering. Buyers pay a base fee plus charges for consumption above the included amount.",
    alias: "Related: Usage Metering — Suger, Price Model — Suger",
  },
  {
    name: "Commit / Prepaid Commit — General",
    tags: ["general", "aws", "azure", "gcp"],
    def: "An upfront amount or quantity a buyer commits to paying at contract start, regardless of actual usage. Often combined with metered overage billing for usage above the committed amount.",
    alias:
      "Related: Commit with Additional Usage Metering — Suger, Overage — Suger",
  },
  {
    name: "Commit with Additional Usage Metering — Suger",
    tags: ["suger"],
    def: "A Suger feature that accumulates all reported usage against the entitlement commit. Only usage exceeding the commit is forwarded to the marketplace as billable overage — simplifying ISV-side metering logic.",
    alias:
      "Related: Prepaid Commit — General, Overage — Suger, Usage Metering — Suger",
  },
  {
    name: "Committed Spend / Cloud Commit — General",
    tags: ["general"],
    def: "A pre-negotiated spending commitment an enterprise makes with a cloud provider. Software purchased via transactable marketplace listings typically counts toward drawing down this commitment — a major driver of enterprise marketplace buying.",
    alias:
      "AWS: Enterprise Discount Program (EDP) — AWS | Azure: Microsoft Azure Consumption Commitment (MACC) — Azure | GCP: Committed Use Discount (CUD) — GCP",
  },
  {
    name: "Contract — AWS",
    tags: ["aws"],
    def: "An AWS pricing model where a buyer commits upfront to a fixed fee for a defined term (up to 3 years). Can include a consumption/PAYG component for usage above the contract amount. Cannot be cancelled mid-term.",
    alias: "",
  },
  {
    name: "CPPO (Channel Partner Private Offer)",
    tags: ["aws", "cosell", "offers"],
    def: "A program where an ISV creates a resale authorization (with a wholesale price) that an authorized channel partner uses to create a private offer — with markup — for an end customer. The channel partner is the seller of record.",
    alias:
      "GCP equivalent: MCPO / RPOP | Azure equivalent: MPO | Related: Resale Authorization (AWS), SPPO",
  },
  {
    name: "CRM Integration — Suger",
    tags: ["suger", "cosell", "integrations"],
    def: "Suger's connections to Salesforce and HubSpot that sync marketplace entitlements, co-sell referrals, and deal data bi-directionally with your sales team's CRM.",
    alias:
      "Related: Salesforce Integration — Suger, HubSpot Integration — Suger, Salesforce App — Suger, HubSpot App — Suger",
  },
  {
    name: "CSP (Cloud Solution Provider) — Azure",
    tags: ["azure", "cosell"],
    def: "A Microsoft partner program that lets authorized partners resell Microsoft cloud services and ISV Marketplace solutions to end customers. ISVs can create margin-sharing private offers for CSP partners via Multiparty Private Offers.",
    alias:
      "Related: Multiparty Private Offer (MPO) — Azure, Microsoft Marketplace — Azure",
  },
  {
    name: "CUD (Committed Use Discount) — GCP",
    tags: ["gcp", "funding"],
    def: "Google Cloud's committed spend program. Enterprises commit to a minimum resource usage over 1–3 years in exchange for discounts. Eligible transactable marketplace purchases count toward CUD drawdown.",
    alias: "AWS equivalent: EDP | Azure equivalent: MACC",
  },
  {
    name: "Dimension Conversion — Suger",
    tags: ["suger"],
    def: "A Suger setting that maps dimension keys from your internal metering system to marketplace dimension names using a multiplier factor. Avoids needing to rename dimensions in either system.",
    alias:
      "Related: Metering Dimension — Suger, Usage Metering — Suger, Billable Metric — Suger",
  },
  {
    name: "Disbursement — General",
    tags: ["general", "aws", "azure", "gcp"],
    def: "The payment a cloud marketplace sends to the seller after collecting from the buyer, net of marketplace fees and taxes. Typically processed monthly. Suger provides disbursement reports for all connected marketplaces.",
    alias:
      "Related: Revenue — Suger, Disbursement Date — General, Marketplace Fee — General",
  },
  {
    name: "Divide Entitlement Commit — Suger",
    tags: ["suger"],
    def: "A Suger feature that splits a single annual upfront commit into monthly sub-entitlements, enabling monthly overage metering against a fraction of the total commitment.",
    alias:
      "Related: Commit with Additional Usage Metering — Suger, Overage — Suger",
  },
  {
    name: "Enterprise Discount Program (EDP) — AWS",
    tags: ["aws", "funding"],
    def: "AWS's committed spend program for enterprises. Requires a minimum $1M spend commitment. Eligible AWS Marketplace transactable listing purchases count toward EDP drawdown — a key enterprise buying incentive.",
    alias:
      "Also known as: Private Pricing Agreement (PPA) — AWS | Azure equivalent: MACC — Azure | GCP equivalent: CUD — GCP",
  },
  {
    name: "Entitlement — Suger",
    tags: ["suger"],
    def: "Suger's unified term for the contract/subscription created when a buyer purchases a product on a marketplace. Represents active access rights, billing terms, and the unit for metering.",
    alias:
      "AWS: Agreement — AWS | Azure: Subscription — Azure | GCP: Entitlement — GCP",
  },
  {
    name: "End User License Agreement (EULA) — General",
    tags: ["general"],
    def: "The legal terms governing a buyer's use of software purchased on a marketplace. Sellers can use a custom EULA, a marketplace standard contract (AWS SCMP, Azure standard contract), or a combination with addendums.",
    alias: "Related: Standard Contract — AWS, Private Offer — General",
  },
  {
    name: "Flat Rate Pricing — Azure",
    tags: ["azure"],
    def: "An Azure pricing model with a fixed monthly or annual fee. Can include a metered overage component where usage above the included quantity triggers additional charges.",
    alias: "",
  },
  {
    name: "Flexible Payment Schedule / Installment Plan — General",
    tags: ["general", "aws", "azure"],
    def: "An option on private offers that splits a contract's total value into multiple payments over time (e.g., quarterly installments on an annual deal), aligning to buyer budget cycles.",
    alias: "Related: Private Offer — General",
  },
  {
    name: "Free Trial — General",
    tags: ["general"],
    def: "A marketplace listing option that lets buyers test software at no cost for a set period before converting to a paid subscription. Supported across AWS, Azure, and GCP.",
    alias: "Related: Listing — General, Transactable Offer — General",
  },
  {
    name: "Future Dated Agreement — AWS",
    tags: ["aws", "offers"],
    def: "An AWS ABO feature letting sellers create a renewal or upgrade offer with a future start date — up to 3 years in advance — ensuring continuous software access without a coverage gap. Also supported in CPPO transactions: ISVs can optionally cap the maximum future start date a channel partner can specify on a resale authorization.",
    alias:
      "Related: Agreement-Based Offer (ABO) — AWS, Resale Authorization — AWS",
  },
  {
    name: "GCP Marketplace — GCP",
    tags: ["gcp"],
    def: "Google Cloud's marketplace for ISVs to list and sell software and services to Google Cloud customers. Integrated with GCP billing; purchases can draw down CUD commitments.",
    alias: "",
  },
  {
    name: "Partner Advantage — GCP",
    tags: ["gcp", "cosell"],
    def: "Google Cloud's partner program required to list on GCP Marketplace. Provides co-sell access, partner advisors, ISV Center of Excellence resources, and marketing tools. ISVs join under the 'Build' engagement model.",
    alias:
      "Related: Build Engagement Model — GCP, GCP Marketplace — GCP, Producer Portal — GCP",
  },
  {
    name: "Producer Portal — GCP",
    tags: ["gcp"],
    def: "The GCP console interface where ISVs create and manage their Marketplace listings, pricing plans, and integration settings. Access requires Google Cloud Partner Advantage enrollment.",
    alias: "Related: GCP Marketplace — GCP, Partner Advantage — GCP",
  },
  {
    name: "Inbound Referral — Suger",
    tags: ["cosell", "suger"],
    def: "A co-sell opportunity initiated by a cloud provider's sales team and shared with your organization to accept, qualify, and pursue jointly. Managed in Suger's co-sell module with status tracking and CRM sync.",
    alias:
      "Opposite: Outbound Referral — Suger | Related: Co-sell — Suger, Referral — General",
  },
  {
    name: "Included Quantity — Azure",
    tags: ["azure"],
    def: "In Azure Flat Rate and Per User pricing, the usage amount included in the base subscription price. Any consumption above this triggers metered overage charges.",
    alias: "Related: Flat Rate Pricing — Azure, Overage — Suger",
  },
  {
    name: "Integration — Suger",
    tags: ["suger", "integrations"],
    def: "A Suger connection to an external platform — Salesforce, HubSpot, Slack, billing engines (Metronome, Orb, Lago), or marketplaces — that automatically syncs data with your existing workflows.",
    alias: "",
  },
  {
    name: "Independent Software Vendor (ISV) — General",
    tags: ["general"],
    def: "A company that builds and sells software products. On cloud marketplaces, ISVs are the sellers/publishers listing their products. Can also co-sell and resell through channel partners.",
    alias:
      "Related: Seller of Record — General, Channel Partner (CP) — General",
  },
  {
    name: "ISV Accelerate — AWS",
    tags: ["aws", "cosell"],
    def: "An AWS program offering ISVs co-sell support, AWS sales team introductions, and go-to-market resources in exchange for listing transactable products on AWS Marketplace. Required for SPPO participation.",
    alias:
      "Related: APN Customer Engagements (ACE) — AWS, Solution Provider Private Offer (SPPO) — AWS",
  },
  {
    name: "Landing Page / Signup URL — General",
    tags: ["general", "suger"],
    def: "The URL a buyer is redirected to after accepting a marketplace offer, to complete account setup with the ISV. Suger can intercept this redirect, provision the entitlement, then forward the buyer to the ISV's onboarding flow.",
    alias:
      "Related: Signup URL Redirect — Suger, Billing Integration — General",
  },
  {
    name: "Listing — General",
    tags: ["general"],
    def: "A product's public page on a cloud marketplace — the discovery and purchase entry point for buyers. Can be free, BYOL, contact me, free trial, or transactable (paid).",
    alias:
      "Related: Transactable Offer — General, Bring Your Own License (BYOL) — General",
  },
  {
    name: "Azure Consumption Commitment (MACC) — Azure",
    tags: ["azure", "funding"],
    def: "Microsoft's enterprise committed spend program. Enterprises pre-commit to Azure spend over 1–3 years; purchases of MACC-eligible transactable Marketplace listings count toward that commitment. A core driver of enterprise Azure Marketplace buying.",
    alias:
      "AWS equivalent: Enterprise Discount Program (EDP) — AWS | GCP equivalent: Committed Use Discount (CUD) — GCP",
  },
  {
    name: "Marketplace Customer Credit Program (MCCP) — GCP",
    tags: ["gcp", "cosell", "funding"],
    def: "A GCP incentive offering end customers up to 3% in Google Cloud credits when purchasing eligible ISV solutions through GCP Marketplace for the first time. Applies to both direct and reseller-led deals (MCPOs). ISVs must register the opportunity in Partner Advantage to qualify.",
    alias:
      "Also referred to as: MCCP | Related: Committed Use Discount (CUD) — GCP, Partner Advantage — GCP",
  },
  {
    name: "Marketplace Fee / Transaction Fee — General",
    tags: ["general"],
    def: "The revenue share cloud marketplaces charge ISVs on each transaction — typically 3–20% depending on program tier, deal type, and partner status. Disbursements are paid net of this fee.",
    alias: "Related: Disbursement — General, Seller of Record — General",
  },
  {
    name: "Marketplace Rewards — Azure",
    tags: ["azure", "cosell"],
    def: "Microsoft's benefits program for transactable Microsoft Marketplace publishers. Provides go-to-market support, co-marketing resources, and technical enablement scaled to the ISV's transact revenue milestones. Partners who activate Rewards see 7x higher sales on average.",
    alias:
      "Related: Microsoft Marketplace — Azure, ISV Success Program — Azure",
  },
  {
    name: "Metered Billing — General",
    tags: ["general", "suger"],
    def: "A billing mechanism where buyers are charged based on actual consumption of defined usage dimensions. Suger normalizes metered billing across AWS, Azure, and GCP through its unified metering API.",
    alias:
      "Related: Usage Metering — Suger, Billable Metric — Suger, Metering Dimension — Suger",
  },
  {
    name: "Metering Dimension — Suger",
    tags: ["suger", "general"],
    def: "A specific unit of measure used to track and bill usage (e.g., seats, API calls, GB processed). Each entitlement can have multiple dimensions, referenced by Dimension Key or Dimension Name in Suger's API.",
    alias:
      "Related: Usage Metering — Suger, Billable Metric — Suger, Dimension Conversion — Suger",
  },
  {
    name: "Microsoft AI Cloud Partner Program (MPN) — Azure",
    tags: ["azure", "cosell"],
    def: "Microsoft's partner program for ISVs and services companies. Enrollment is required to publish on Azure Marketplace and access co-sell, partner funding, and Marketplace Rewards.",
    alias:
      "Related: Microsoft Marketplace — Azure, Marketplace Rewards — Azure, Microsoft Intelligent Security Association (MISA) — Azure",
  },
  {
    name: "Multiparty Private Offer (MPO) — Azure",
    tags: ["azure", "cosell", "offers"],
    def: "Microsoft Marketplace's channel reseller mechanism — the Azure equivalent of AWS's CPPO. An ISV and channel partner collaborate to create a single private offer for an end customer. The partner sets their own margin; the purchase counts toward the customer's MACC. As of 2025, Microsoft is also expanding 'Resale-Enabled Offers' — a broader channel motion allowing geographic resale by authorized distributors including Arrow, Crayon, Ingram Micro, Pax8, and TD SYNNEX.",
    alias:
      "AWS equivalent: Channel Partner Private Offer (CPPO) — AWS | GCP equivalent: MCPO — GCP | Related: Resale-Enabled Offer — Azure",
  },
  {
    name: "Managed Service Provider (MSP) — General",
    tags: ["general", "cosell"],
    def: "A partner providing ongoing management of a customer's cloud environment and software. MSPs often resell ISV products through marketplace channel programs (CPPO on AWS, CSP/MPO on Azure).",
    alias: "Related: Channel Partner (CP) — General, Co-sell — Suger",
  },
  {
    name: "Offer — Suger",
    tags: ["suger", "general", "offers"],
    def: "In Suger, a pricing and terms proposal (public or private) that a buyer can accept to purchase a product. Must be linked to a Product. Maps differently across marketplaces.",
    alias:
      "AWS: Private Offer — General | Azure: Plan — Azure | Related: Private Offer — General",
  },
  {
    name: "Offer Expiration Date — AWS",
    tags: ["aws", "offers"],
    def: "The date after which a buyer can no longer view or accept a private offer. After 23:59:59 UTC on that date, the offer becomes inaccessible. Set by the seller at offer creation.",
    alias:
      "Related: Private Offer — General, Agreement-Based Offer (ABO) — AWS",
  },
  {
    name: "Organization — Suger",
    tags: ["suger"],
    def: "The top-level account in Suger representing your company. All Products, Offers, Entitlements, and Buyers are scoped to your Organization.",
    alias:
      "Related: Role-Based Access Control (RBAC) — Suger, Suger Console — Suger",
  },
  {
    name: "Outbound Referral — Suger",
    tags: ["cosell", "suger"],
    def: "A co-sell opportunity your organization originates and shares with a cloud provider's sales team — requesting their resources, deal support, or joint pursuit.",
    alias:
      "Opposite: Inbound Referral — Suger | Related: Co-sell — Suger, Referral — General",
  },
  {
    name: "Overage — Suger",
    tags: ["suger", "general"],
    def: "Usage that exceeds a buyer's prepaid commit. Cloud marketplaces bill overage separately via metered usage. Suger can auto-track cumulative usage and report only the portion above the commit.",
    alias:
      "Related: Prepaid Commit — General, Usage Metering — Suger, Overage Billing — General",
  },
  {
    name: "Partner Center — Microsoft",
    tags: ["azure"],
    def: "Microsoft's portal where publishers create and manage Azure Marketplace and AppSource offers, co-sell configurations, payout profiles, and partner program enrollments.",
    alias:
      "Related: Azure Marketplace / Microsoft Marketplace, SaaS Fulfillment API — Azure, Microsoft AI Cloud Partner Program (MPN) — Azure",
  },
  {
    name: "PAYG / Pay-as-you-go",
    tags: ["general", "aws", "gcp"],
    def: "A pricing model with no upfront commitment — buyers are billed only for what they consume. Called 'Subscription' on AWS; 'Usage-based' on GCP.",
    alias: "",
  },
  {
    name: "Per User Pricing — Azure",
    tags: ["azure"],
    def: "An Azure pricing model billed per named user per month or year. Supports mid-term quantity updates and optional metered overage billing above committed seat count.",
    alias: "Related: Price Model — Suger, Included Quantity — Azure",
  },
  {
    name: "Plan — Azure",
    tags: ["azure", "offers"],
    def: "A specific pricing tier or configuration within an Azure Marketplace Offer. A single offer can have multiple plans with different pricing or audiences. Private plans are visible only to designated customers.",
    alias: "Related: Private Offer — General, Microsoft Marketplace — Azure",
  },
  {
    name: "Private Offer Success Team (POST) — AWS",
    tags: ["aws"],
    def: "AWS's dedicated support team for sellers with questions or issues related to private offer creation, buyer errors, and CPPO transactions. Contactable via the AWS Marketplace support form.",
    alias: "",
  },
  {
    name: "Private Offer — General",
    tags: ["suger", "aws", "azure", "gcp", "offers"],
    def: "A customized, non-public offer extended directly to a specific buyer with negotiated pricing, custom terms, payment schedule, or EULA. Must be based on a public listing.",
    alias:
      "Related: Offer — Suger, Agreement-Based Offer (ABO) — AWS, Multiparty Private Offer (MPO) — Azure",
  },
  {
    name: "Private Plan — Azure",
    tags: ["azure", "offers"],
    def: "A plan within an Azure offer visible only to designated customers (by tenant ID). Distinct from a private offer — a private plan is a listing-level construct; a private offer is a deal-level, time-bound transaction.",
    alias: "Related: Plan — Azure, Private Offer — General",
  },
  {
    name: "Procurement API — GCP",
    tags: ["gcp"],
    def: "Google Cloud's API that ISVs (producers) use to approve/reject entitlement requests, manage subscription lifecycle events, and validate buyer account status on GCP Marketplace.",
    alias: "Related: GCP Marketplace — GCP, Producer Portal — GCP",
  },
  {
    name: "Product — Suger",
    tags: ["suger", "general"],
    def: "Suger's top-level entity for a software product or service listed on a marketplace. All Offers and Entitlements link to a Product.",
    alias: "AWS: Product Code | Azure: Offer Id | GCP: Product Id",
  },
  {
    name: "Product Code — AWS",
    tags: ["aws"],
    def: "The unique identifier for a product listed on AWS Marketplace. Used in API calls, entitlement lookups, and metering. The Suger equivalent is Product External ID.",
    alias:
      "Related: Amazon Machine Image (AMI) — AWS, AWS Marketplace Catalog API — AWS",
  },
  {
    name: "Pub/Sub — GCP",
    tags: ["gcp"],
    def: "Google Cloud's messaging service used to receive entitlement lifecycle events (creation, activation, cancellation) from GCP Marketplace. ISVs must subscribe to a Pub/Sub topic as part of technical integration.",
    alias: "",
  },
  {
    name: "Role-Based Access Control (RBAC) — Suger",
    tags: ["suger", "general"],
    def: "A permission model controlling what each user can see and do within Suger. Enables different access levels for sales, finance, and engineering within the same Organization.",
    alias: "Related: Organization — Suger, Suger Console — Suger",
  },
  {
    name: "Referral — General",
    tags: ["cosell", "suger"],
    def: "A shared sales opportunity in a co-sell workflow. Can be outbound (ISV shares with cloud partner) or inbound (cloud partner shares with ISV). Managed in Suger with status tracking and CRM sync.",
    alias:
      "Related: Inbound Referral — Suger, Outbound Referral — Suger, Co-sell — Suger",
  },
  {
    name: "Resale Authorization — AWS",
    tags: ["aws", "cosell", "offers"],
    def: "An ISV-created permission on AWS Marketplace that allows a specific channel partner to create CPPOs for a given product. Also called a 'Selling Authorization' in the AMMP UI. Can be single-use or multi-use, with or without an expiry date.",
    alias:
      "Also called: Selling Authorization | Related: Channel Partner Private Offer (CPPO) — AWS",
  },
  {
    name: "Reseller Program — GCP",
    tags: ["gcp", "cosell"],
    def: "Google Cloud Marketplace's channel program allowing authorized partners to resell ISV products via MCPO/RPOP, create private offers for customers, and leverage CUD committed spend. Partners manage orders via the Partner Sales Console.",
    alias: "Related: MCPO, RPOP, Partner Sales Console (GCP), CUD",
  },
  {
    name: "Software-as-a-Service (SaaS) — General",
    tags: ["general"],
    def: "A software delivery model where the ISV hosts the application and buyers access it over the internet. The most common listing type on all cloud marketplaces; typically requires API integration for subscription lifecycle management.",
    alias: "Related: Transactable Offer — General, Listing — General",
  },
  {
    name: "SaaS Fulfillment API — Azure",
    tags: ["azure"],
    def: "Microsoft's API that ISVs must implement to handle subscription lifecycle events for Azure Marketplace SaaS offers — including activation, plan changes, quantity updates, suspension, and unsubscription.",
    alias: "Related: Microsoft Marketplace — Azure, Partner Center — Microsoft",
  },
  {
    name: "Standard Contract (SCMP) — AWS",
    tags: ["aws"],
    def: "AWS's pre-drafted standard EULA for marketplace transactions. Using SCMP reduces buyers' legal review time. Sellers can attach addendums (Enhanced Security, BAA, Federal) for specific requirements.",
    alias:
      "Related: End User License Agreement (EULA) — General, Agreement — AWS",
  },
  {
    name: "Seller / Publisher — General",
    tags: ["general"],
    def: "The entity listing and selling software on a cloud marketplace. Called 'seller' on AWS, 'publisher' on Azure and GCP. Can be an ISV selling direct or a channel partner reselling via CPPO/CSP.",
    alias:
      "Related: Seller of Record — General, Channel Partner (CP) — General",
  },
  {
    name: "Seller of Record — General",
    tags: ["general"],
    def: "The legal entity responsible for a marketplace transaction — who invoices and collects from the buyer. In CPPOs (AWS) and CSP/MPO (Azure) transactions, the channel partner is the seller of record, not the ISV.",
    alias: "Related: Channel Partner (CP) — General, Marketplace Fee — General",
  },
  {
    name: "Service Account — GCP",
    tags: ["gcp"],
    def: "A GCP identity (non-human account) used to authenticate API calls between Suger and GCP Marketplace services — including the Procurement API, Pub/Sub, and billing integration.",
    alias: "",
  },
  {
    name: "Service Control API — GCP",
    tags: ["gcp"],
    def: "Google Cloud's API ISVs use to report usage metrics to GCP Marketplace for metered billing. Suger calls this API on the ISV's behalf when usage records are submitted.",
    alias: "",
  },
  {
    name: "System Integrator (SI) — General",
    tags: ["general", "cosell"],
    def: "A partner that implements, customizes, and integrates software for enterprise customers. SIs often transact ISV products through marketplace channel programs and co-sell motions.",
    alias: "Related: Channel Partner (CP) — General, Co-sell — Suger",
  },
  {
    name: "Signup URL Redirect — Suger",
    tags: ["suger"],
    def: "A Suger feature where marketplace buyer signup URLs route through Suger first for entitlement provisioning, then redirect to the ISV's own onboarding URL. Decouples marketplace provisioning from product onboarding.",
    alias: "Related: Entitlement — Suger, Landing Page — General",
  },
  {
    name: "Snowflake Marketplace — Snowflake",
    tags: ["snowflake"],
    def: "Snowflake's data marketplace for sharing and monetizing data products, apps, and native apps within Snowflake environments. Suger supports Snowflake Marketplace listing and entitlement management.",
    alias:
      "Related: Snowflake Data Clean Rooms — Snowflake, Snowflake Data Appreciation (SDA) — Snowflake",
  },
  {
    name: "Solution Provider Private Offer (SPPO) — AWS",
    tags: ["aws", "cosell", "offers"],
    def: "An AWS program enabling pre-vetted Solution Providers to create private offers at pre-negotiated ISV discounts — without needing to negotiate deal-by-deal. ISVs must be enrolled in ISV Accelerate.",
    alias:
      "Related: Channel Partner Private Offer (CPPO) — AWS, ISV Accelerate — AWS",
  },
  {
    name: "Suger",
    tags: ["suger"],
    def: "A unified cloud marketplace platform enabling ISVs to list, transact, meter, and co-sell across AWS, Azure, GCP, and Snowflake from a single interface, with integrations into CRM, billing, and communication tools.",
    alias: "Related: Analytics (Suger), Entitlement, Metering Dimension",
  },
  {
    name: "Suger Console — Suger",
    tags: ["suger"],
    def: "The central web-based interface for managing cloud marketplace operations, viewing analytics, configuring integrations, and executing co-sell motions across all connected platforms.",
    alias:
      "Related: Suger Analytics — Suger, Entitlement — Suger, Metering Dimension — Suger",
  },
  {
    name: "Subscription — AWS",
    tags: ["aws"],
    def: "An AWS Marketplace pay-as-you-go pricing model. Buyers can cancel any time and are billed based on metered usage only, with no upfront commitment. Different from Azure and Snowflake subscriptions, which may be commit-based.",
    alias: "",
  },
  {
    name: "Subscription — Azure",
    tags: ["azure", "gcp"],
    def: "A buyer's active contract for a marketplace offer. In Azure, the Subscription ID is the external identifier for an Entitlement in Suger.",
    alias: "Related: Entitlement — Suger, SaaS Fulfillment API — Azure",
  },
  {
    name: "Subscription — GCP",
    tags: ["gcp"],
    def: "A buyer's active contract for a marketplace offer. In GCP, 'Subscription-based' pricing refers to a flat-rate commit model.",
    alias: "Related: Entitlement — Suger, Procurement API — GCP",
  },
  {
    name: "Transactable Offer — General",
    tags: ["general", "azure"],
    def: "A marketplace listing where the cloud provider handles the complete commerce transaction — payment, invoicing, and disbursement — on behalf of the ISV. Required for committed spend drawdown (EDP, MACC, CUD). Contrasts with BYOL or Contact Me listings.",
    alias:
      "Related: Listing — General, Committed Spend — General, Bring Your Own License (BYOL) — General",
  },
  {
    name: "Usage-Based Pricing — GCP",
    tags: ["gcp"],
    def: "GCP Marketplace's pay-as-you-go pricing model. Buyers are billed based on metered consumption with no upfront commitment. The GCP equivalent of AWS Subscription pricing.",
    alias: "Related: Pay-As-You-Go (PAYG) — General, GCP Marketplace — GCP",
  },
  {
    name: "Usage Credit — Suger",
    tags: ["suger"],
    def: "Credits applied to a buyer's entitlement in Suger that reduce billable usage reported to the marketplace. Used for promotions, trials, service credits, or billing corrections.",
    alias: "Related: Entitlement — Suger, Usage Metering — Suger",
  },
  {
    name: "Usage Metering — Suger",
    tags: ["suger", "general"],
    def: "The process of tracking and reporting a buyer's consumption of a product in a billing period. Suger provides a unified metering API normalizing reporting across AWS, Azure, and GCP — handling deduplication, validation, and aggregation.",
    alias:
      "Related: Metering Dimension — Suger, Billable Metric — Suger, Usage Record — Suger",
  },
  {
    name: "Usage Record — Suger",
    tags: ["suger"],
    def: "A metering event sent to Suger's API reporting a buyer's consumption of one or more dimensions for a given entitlement. Suger deduplicates by ID, validates, and forwards to the correct marketplace.",
    alias:
      "Also known as: Usage Record Group | Related: Usage Metering — Suger, Metering Dimension — Suger",
  },
  {
    name: "Vendor-Metered Tagging — AWS",
    tags: ["aws", "suger"],
    def: "An AWS feature (supported by Suger) that lets sellers tag metered usage by cost category (e.g., team, department). Tags propagate to the buyer's AWS Billing Console, enabling detailed cost allocation.",
    alias: "Related: Usage Metering — Suger, Product Code — AWS",
  },
  {
    name: "Webhook — Suger",
    tags: ["suger"],
    def: "An HTTP callback configured in Suger that pushes real-time event notifications — new entitlements, cancellations, plan changes, usage alerts — to an ISV's service endpoint.",
    alias:
      "Related: Email Notification — Suger, Workflow — Suger, Integration — Suger",
  },
  {
    name: "Workflow — Suger",
    tags: ["suger"],
    def: "An automation rule in Suger that triggers actions (CRM updates, Slack notifications, metering) based on marketplace events such as new entitlement creation or subscription cancellation.",
    alias:
      "Related: Webhook — Suger, Integration — Suger, CRM Integration — Suger",
  },
  {
    name: "Workload Identity Federation — GCP",
    tags: ["gcp", "suger"],
    def: "A GCP mechanism Suger uses to authenticate as the ISV's service account without storing long-lived keys. Allows Suger's AWS-based infrastructure to securely call GCP Marketplace APIs on the ISV's behalf.",
    alias: "",
  },
  {
    name: "Alibaba Cloud Marketplace",
    tags: ["general", "alibaba"],
    def: "Alibaba Cloud's digital marketplace connecting ISVs and SaaS providers with customers globally and in China. Supports private offers, usage metering, and consolidated billing through Alibaba Cloud accounts.",
    alias: "Related: Private Offer, Usage Metering, Entitlement",
  },
  {
    name: "Suger API Client — Suger",
    tags: ["suger"],
    def: "Suger's authentication mechanism for programmatic access to the Suger API. ISVs generate API client credentials in the Suger Console to authenticate server-to-server calls for metering, entitlement management, and workflow automation.",
    alias: "Related: Suger Console — Suger, Webhook — Suger",
  },
  {
    name: "Billable Metric",
    tags: ["suger"],
    def: "A named, reusable definition in Suger that specifies what usage to track and how to aggregate it — by COUNT, SUM, MAX, UNIQUE COUNT, or LATEST. Billable metrics are created before offers and referenced in price models to calculate charges. Distinct from Metering Dimension, which is marketplace-specific.",
    alias: "",
  },
  {
    name: "Billable Dimension",
    tags: ["suger"],
    def: "The combination of a Billable Metric and a usage metering price model within an offer. Defines both what gets measured and how it gets priced. Multiple billable dimensions can be configured in a single offer.",
    alias: "",
  },
  {
    name: "Billing Cycle (Suger)",
    tags: ["suger"],
    def: "The start day of a billing period in Suger — either the start date of the entitlement or the 1st of the month. Determines when each billing period begins relative to the contract.",
    alias: "",
  },
  {
    name: "Billing Interval",
    tags: ["suger", "general"],
    def: "The frequency at which a buyer is charged within a contract — monthly, quarterly, annually, etc. Configured per price model in a Suger offer.",
    alias: "",
  },
  {
    name: "Billing Period",
    tags: ["suger", "general"],
    def: "A single charging cycle within a contract's duration. The price model is applied once per billing period. Multiple billing periods span the full contract term.",
    alias: "",
  },
  {
    name: "Chargebee Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Chargebee, a subscription billing platform. Allows ISVs already using Chargebee to sync billing data and entitlements with Suger's marketplace and co-sell workflows.",
    alias: "",
  },
  {
    name: "Databricks Marketplace",
    tags: ["general", "integrations"],
    def: "Databricks' marketplace for data products and AI applications within the Databricks Data Intelligence Platform. Suger supports integration with Databricks to automate workflows, execute queries, and sync marketplace data.",
    alias: "",
  },
  {
    name: "Email Notification (Suger)",
    tags: ["suger"],
    def: "Suger's event-driven email alert system. ISVs configure recipient lists to receive notifications on marketplace events — new entitlements, cancellations, usage alerts, and invoice issuance — distinct from Webhooks, which push to service endpoints.",
    alias: "",
  },
  {
    name: "Invoice (Suger)",
    tags: ["suger"],
    def: "A billing document automatically generated by Suger per entitlement for non-cloud marketplace billing (e.g. Stripe). Four types exist: Commit, Installment, Usage, and Addon. Invoices can be issued automatically on due date or manually, edited while in Draft state, and exported as PDF.",
    alias:
      "Types: Commit, Installment, Usage, Addon | Related: Revenue (Suger), Stripe Integration, Disbursement",
  },
  {
    name: "Matrix Pricing",
    tags: ["suger"],
    def: "A Suger usage metering price model that determines per-unit cost based on combinations of two or more properties (e.g. cloud provider + region). Each property combination maps to a distinct price; unmatched combinations fall back to a default price.",
    alias: "",
  },
  {
    name: "Minimum Spend",
    tags: ["suger", "general"],
    def: "A floor amount set on a usage-based price model ensuring a buyer is charged at least a defined minimum per billing period, regardless of actual consumption.",
    alias: "",
  },
  {
    name: "NetSuite Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Oracle NetSuite ERP, enabling ISVs to sync marketplace revenue, invoices, and entitlement data with their financial management system for automated reconciliation.",
    alias: "",
  },
  {
    name: "Okta Single Sign-On (SSO) Integration — Suger",
    tags: ["suger", "integrations"],
    def: "Suger's Single Sign-On integration with Okta. Allows organizations to manage Suger Console access through their existing Okta identity provider, enforcing centralized authentication and access policies.",
    alias:
      "Related: Role-Based Access Control (RBAC) — Suger, Suger Console — Suger",
  },
  {
    name: "Price Model (Suger)",
    tags: ["suger"],
    def: "Suger's configuration for how a buyer is charged within an offer. Two top-level types: Flat Fee (fixed installments or recurring commits) and Usage Metering (consumption-based). Supports seven sub-types: Basic, Tiered, Bulk, Volume, Percentage, Tiered Percentage, and Matrix pricing.",
    alias:
      "Sub-types: Basic, Tiered, Bulk, Volume, Percentage, Tiered Percentage, Matrix | Related: Billable Metric, Billable Dimension, Offer",
  },
  {
    name: "QuickBooks Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to QuickBooks accounting software, enabling ISVs to sync invoices, payments, and revenue data from Suger into their QuickBooks instance for financial reporting.",
    alias: "",
  },
  {
    name: "Recurring Commit",
    tags: ["suger"],
    def: "A flat fee price model in Suger that charges a buyer a fixed amount per billing period (quantity × rate). Supports prepay or postpay, and can be updated mid-contract — useful for per-seat pricing where seat count changes during the term.",
    alias: "",
  },
  {
    name: "Revenue (Suger)",
    tags: ["suger"],
    def: "Suger's revenue tracking layer that generates per-entitlement revenue records and aggregated reports by product and buyer. Distinct from Disbursement — Revenue tracks what was earned; Disbursement tracks what was paid out by the marketplace.",
    alias: "Related: Disbursement, Invoice (Suger), Analytics (Suger)",
  },
  {
    name: "Salesforce App (Suger)",
    tags: ["suger", "cosell", "integrations"],
    def: "Suger's native Salesforce application that embeds marketplace entitlement data, co-sell referral status, and metering information directly inside Salesforce — beyond the standard CRM Integration's bi-directional sync.",
    alias: "",
  },
  {
    name: "HubSpot App (Suger)",
    tags: ["suger", "cosell", "integrations"],
    def: "Suger's native HubSpot application that surfaces marketplace and co-sell data inside HubSpot deals and contacts, enabling sales teams to act on entitlement events without leaving their CRM.",
    alias: "",
  },
  {
    name: "Service Quotas (Suger)",
    tags: ["suger"],
    def: "Suger-enforced limits on API request rates and resource counts per organization — such as the number of products, offers, or usage records that can be created. Quotas can be reviewed and increase requests submitted via the Suger Console.",
    alias: "",
  },
  {
    name: "Stripe Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Stripe for non-marketplace (direct) billing. When Stripe is selected as the billing partner on a product, Suger uses Stripe to collect payments, issue invoices, and deposit funds to the ISV's Stripe account.",
    alias: "",
  },
  {
    name: "Table Export (Suger)",
    tags: ["suger"],
    def: "A Suger feature that exports tabular data — entitlements, usage records, revenue — from Suger's database to external storage destinations such as Google Cloud Storage or BigQuery for custom reporting and data warehousing.",
    alias: "",
  },
  {
    name: "Tiered Pricing",
    tags: ["suger", "general"],
    def: "A usage metering price model where the cost per unit depends on which tier range the unit falls into. Each tier can have its own per-unit rate and optional flat fee. Lower tiers are charged at their own rate even when higher tiers are reached — contrast with Volume Pricing.",
    alias: "",
  },
  {
    name: "Volume Pricing",
    tags: ["suger", "general"],
    def: "A usage metering price model where the total quantity purchased determines the per-unit rate applied to all units. Reaching a higher volume tier changes the price retroactively for the entire quantity — contrast with Tiered Pricing.",
    alias: "",
  },
  {
    name: "Bulk Pricing",
    tags: ["suger"],
    def: "A Suger usage metering price model that charges usage in fixed bundles. If a buyer uses fewer units than a bundle size, they are billed for the full bundle. Usage above one bundle rolls into the next.",
    alias: "",
  },
  {
    name: "Percentage Pricing",
    tags: ["suger"],
    def: "A Suger usage metering price model that charges a percentage of a value carried in the usage event — for example, a percentage of a transaction amount. Supports an optional flat fee per event.",
    alias: "",
  },
  {
    name: "AWS Partner Funding — AWS",
    tags: ["aws", "cosell", "funding"],
    def: "AWS's program that provides financial support (credits or cash) to partners pursuing co-sell opportunities. In Suger, funding requests are submitted, tracked, and managed directly from the Co-sell module via the Partner Central Funding Benefits API.",
    alias:
      "Related: Marketing Development Funds (MDF) — General, Migration Acceleration Program (MAP) — AWS",
  },
  {
    name: "Funding Wallet",
    tags: ["aws", "cosell", "suger"],
    def: "A balance and budget tracker within Suger's Funding tab showing a partner's available funding balance and the history of submitted and approved funding requests from AWS.",
    alias: "",
  },
  {
    name: "Partner Central 3.0 (PC3.0)",
    tags: ["aws", "cosell"],
    def: "The latest version of AWS's partner portal. Required for access to the Funding Benefits API — ISVs must complete migration to PC3.0 before AWS Funding can be activated in Suger. Migration status is confirmed via the AWS Partner Manager.",
    alias: "",
  },
  {
    name: "Funding Benefits API (AWS)",
    tags: ["aws", "cosell"],
    def: "The AWS Partner Central API endpoint enabling programmatic submission and tracking of funding requests. Only available after a partner's migration to Partner Central 3.0 is confirmed.",
    alias: "",
  },
  {
    name: "MDF (Marketing Development Funds)",
    tags: ["aws", "cosell", "funding"],
    def: "AWS co-marketing funding provided to partners to offset demand generation costs — events, campaigns, digital ads, content creation, etc. Partners are reimbursed up to 50% of eligible expenses after submitting proof of performance (receipts). Can also be issued as AWS Promotional Credits. Requested via the AWS Partner Funding Portal. Requires an Amazon Payee Central account for cash disbursement. MDF can stack on top of SCA benefits.",
    alias: "Related: AWS Funding, POA (Plan of Action), PIF",
  },
  {
    name: "MAP (Migration Acceleration Program)",
    tags: ["aws", "cosell", "funding"],
    def: "An AWS funding program providing credits and cash to partners helping customers migrate and modernize workloads on AWS. As of 2026, now covers generative AI and agentic features built during modernization — not just migrations. Funding scales with deal size.",
    alias: "Related: AWS Funding, ISV Workload Migration Program (WMP)",
  },
  {
    name: "AWS Partner Funding Portal (APFP)",
    tags: ["aws", "cosell"],
    def: "The AWS portal where partners submit, track, and manage fund requests across all funding programs (MDF, MAP, POC, PIF, etc.). Accessible via the Funding tab in AWS Partner Central.",
    alias: "",
  },
  {
    name: "Benefit Allocation",
    tags: ["aws", "cosell"],
    def: "An approved funding grant issued to a partner through the AWS Benefits API. Can take the form of cash disbursements, AWS credits, consumable wallets, access grants, or recognition. Each allocation has a lifecycle status tracked via the Partner Central API.",
    alias: "",
  },
  {
    name: "Amazon Payee Central",
    tags: ["aws", "cosell"],
    def: "Amazon's payment registration system where partners must set up bank account and tax information before receiving any cash-based AWS funding benefits (MDF, MAP, etc.). Required prerequisite for cash disbursements.",
    alias: "",
  },
  {
    name: "POC Funding (Proof of Concept)",
    tags: ["aws", "cosell", "funding"],
    def: "AWS funding that offsets up to 10% of the cost of building a proof of concept for a customer, capped at $25,000. Submitted through the AWS Partner Funding Portal. Requires Validated+ stage in any Partner Path. The ACE opportunity must be in Technical Validation stage or beyond.",
    alias: "Related: AWS Funding, AWS Partner Funding Portal (APFP)",
  },
  {
    name: "PIF (Partner Initiative Funding)",
    tags: ["aws", "cosell", "funding"],
    def: "An AWS funding type tied to specific partner agreement-based initiatives. The PIF template in the AWS Partner Funding Portal lets eligible partners self-access their initiative funds without requiring their AWS Partner Manager to be involved in every request — reducing friction and accelerating time-to-funding.",
    alias: "Related: AWS Funding, MDF, APFP",
  },
  {
    name: "ISV Workload Migration Program (WMP)",
    tags: ["aws", "cosell", "funding"],
    def: "An AWS program providing promotional credits and go-to-market support to ISVs that help migrate customer workloads from on-premises to a SaaS model on AWS. As of 2026, WMP now offers direct credit disbursement to end customers for eligible migrations. Requires: Foundational Technical Review completion, Validated stage status, a SaaS solution on AWS, and a qualified migration use case.",
    alias: "Related: AWS Funding, MAP, FTR (Foundational Technical Review)",
  },
  {
    name: "AWS Promotional Credits",
    tags: ["aws", "cosell"],
    def: "Non-cash credits applied to an AWS account to offset usage costs. Awarded through programs like Innovation Sandbox, ISV WMP, and MAP. Not redeemable for cash. Subject to AWS Promotional Credit Terms.",
    alias: "",
  },
  {
    name: "Innovation Sandbox (APN)",
    tags: ["aws", "cosell"],
    def: "An AWS program providing promotional credits to partners to offset AWS usage costs during solution development and testing. Accessible via the Funding tab in AWS Partner Central. For Global Startup Program partners, pre-loaded MDF Wallets are also available.",
    alias: "Related: AWS Funding, MDF",
  },
  {
    name: "MCAS (Marketplace Commerce Analytics Service)",
    tags: ["aws", "suger", "integrations"],
    def: "An AWS service giving sellers programmatic access to marketplace business data (usage, subscriptions, billing, customer info) via the AWS SDK. Data is delivered to an S3 bucket with SNS notifications. Suger uses MCAS as part of the AWS integration setup.",
    alias: "",
  },
  {
    name: "MDFS (Marketplace Data Feed Service)",
    tags: ["aws", "suger", "integrations"],
    def: "AWS's structured data pipeline that delivers product billing and customer information (company name, address, email domain) to an S3 bucket. Recommended alongside MCAS for complete revenue and buyer data sync in Suger.",
    alias: "",
  },
  {
    name: "POA (Plan of Action)",
    tags: ["aws", "cosell"],
    def: "A document AWS partners submit alongside MDF fund requests outlining the marketing activity, timeline, expected outcomes, and budget breakdown. Required for MDF claims.",
    alias: "",
  },
  {
    name: "Funding Dashboard",
    tags: ["aws", "cosell", "suger"],
    def: "A native AWS Partner Central view providing real-time visibility into fund allocation, utilization, and performance metrics across all funding programs. Also mirrored in Suger's Funding tab.",
    alias: "",
  },
  {
    name: "Training & Certification Funding",
    tags: ["aws", "cosell"],
    def: "An AWS funding benefit offering discounted training to help partner teams prepare for AWS certification exams. Accessible via the Funding tab in AWS Partner Central.",
    alias: "",
  },
  {
    name: "SCA (Strategic Collaboration Agreement)",
    tags: ["aws", "cosell"],
    def: "A formal, multi-year agreement between AWS and a select partner — typically Premier Tier — committing both sides to joint business goals across Build-Market-Sell-Grow motions: co-sell targets, go-to-market investment, training, and funding. Anchored in outcome-driven business plans with defined metrics and milestones. MDF can stack on top of SCA benefits.",
    alias: "",
  },
  {
    name: "SCB (SaaS Co-sell Benefit)",
    tags: ["aws", "cosell"],
    def: "An AWS program where AWS sales reps earn quota retirement credit for co-selling SaaS/PaaS solutions transacted as private offers in AWS Marketplace. Incentivizes AWS sellers to prioritize ISV partners. Available to ISV Accelerate partners.",
    alias: "",
  },
  {
    name: "Quota Retirement",
    tags: ["aws", "cosell"],
    def: "When an AWS seller earns credit toward their sales quota for a deal transacted through AWS Marketplace. The SCB program grants this to AWS reps on co-sold SaaS private offers — the core mechanic that motivates AWS sellers to co-sell your product.",
    alias: "",
  },
  {
    name: "PDM (Partner Development Manager)",
    tags: ["aws", "cosell"],
    def: "The AWS-assigned contact responsible for managing a partner's relationship with AWS. Helps with APN program navigation, SCA setup, co-sell strategy, and funding access.",
    alias: "",
  },
  {
    name: "PPA (Private Pricing Agreement)",
    tags: ["aws", "cosell"],
    def: "AWS's committed spend program for enterprises — essentially the same as EDP. A negotiated agreement where a customer commits to a minimum AWS spend over 1–3 years in exchange for discounts. Marketplace transactable purchases count toward PPA drawdown. Can be AWS-led or Partner-led.",
    alias: "Also known as: EDP (Enterprise Discount Program)",
  },
  {
    name: "Reseller Private Offer Plan (RPOP) — GCP",
    tags: ["gcp", "cosell", "offers"],
    def: "GCP Marketplace's channel reseller mechanism — the equivalent of AWS's CPPO. An ISV creates a plan (single-use or multi-use) with a wholesale discount that an authorized reseller uses to create private offers for end customers. Suger manages the full RPOP lifecycle from the console and Salesforce.",
    alias:
      "AWS equivalent: Resale Authorization — AWS | Related: Marketplace Channel Private Offer (MCPO) — GCP",
  },
  {
    name: "Reseller Contract (RCMP) — AWS",
    tags: ["aws", "cosell"],
    def: "AWS's standard contract template governing the relationship between an ISV and a channel partner in a CPPO transaction. ISVs can attach RCMP or a custom reseller contract to a resale authorization.",
    alias:
      "Related: Channel Partner Private Offer (CPPO) — AWS, Resale Authorization — AWS",
  },
  {
    name: "Partner Sales Console — GCP",
    tags: ["gcp", "cosell"],
    def: "The GCP portal used by authorized resellers to view RPOP private offer plans from ISVs, create private offers for end customers, and manage orders. The reseller-side equivalent of the GCP Producer Portal.",
    alias: "",
  },
  {
    name: "Selling Authorization — AWS",
    tags: ["aws", "cosell", "offers"],
    def: "AWS's term in the AMMP UI for what the API calls a Resale Authorization. An ISV creates this to authorize a specific channel partner to resell a product via CPPO. Can be single-use or reusable. Tracks statuses: Authorized, Authorized (reusable), Authorized (consumed), Expired, Deactivated.",
    alias: "Also called: Resale Authorization, Opportunity (in AWS API docs)",
  },
  {
    name: "Marketplace Channel Private Offer (MCPO) — GCP",
    tags: ["gcp", "cosell", "offers"],
    def: "GCP Marketplace's channel reseller program — the GCP equivalent of AWS's CPPO. An ISV creates a Reseller Private Offer Plan (RPOP) with a wholesale discount; the reseller uses it to create a private offer with markup for the end customer. MCPO purchases count 100% toward the buyer's CUD committed spend, capped at 25% of total commitment.",
    alias:
      "AWS equivalent: Channel Partner Private Offer (CPPO) — AWS | Azure equivalent: Multiparty Private Offer (MPO) — Azure",
  },
  {
    name: "Express Private Offer — AWS",
    tags: ["aws", "offers"],
    def: "An AI-powered AWS Marketplace feature (launched Nov 2025) where sellers pre-configure a rate card and AWS automatically generates and delivers personalized private offers to qualified buyers in minutes — without manual negotiation. Available for SaaS Contract and SaaS Contract with Consumption products.",
    alias: "Related: Private Offer, ABO (Agreement-Based Offer), MPOPP",
  },
  {
    name: "MPOPP (Marketplace Private Offer Promotion Program)",
    tags: ["aws", "cosell", "funding"],
    def: "An AWS program (launched Aug 2025) that issues AWS Promotional Credits to customers as an incentive for accepting private offers from participating ISVs. Credits are based on Total Contract Value (TCV). Self-service requests submitted via the AWS Partner Funding Portal with next-business-day credit delivery.",
    alias:
      "Related: AWS Promotional Credits, MDF (Marketing Development Funds), Express Private Offer, AWS Partner Funding Portal (APFP)",
  },
  {
    name: "Multi-Product Solution — AWS",
    tags: ["aws"],
    def: "A bundled listing type launched on AWS Marketplace at re:Invent 2025 that lets partners package multiple products and services from multiple providers into a single purchasable solution. One seller of record, one procurement flow, with transparent pricing per component.",
    alias:
      "Related: Listing, Private Offer, Seller of Record, Channel Partner (CP)",
  },
  {
    name: "Agent Mode — AWS",
    tags: ["aws"],
    def: "An AI-powered conversational buyer discovery experience on AWS Marketplace (launched Nov 2025). Buyers describe their needs in natural language, ask follow-up questions, upload requirements documents, and compare products side-by-side. Can generate downloadable procurement proposals. Also accessible via MCP-compatible AI applications.",
    alias: "Related: Listing, AWS Marketplace",
  },
  {
    name: "Microsoft Marketplace",
    tags: ["azure"],
    def: "Microsoft's unified marketplace platform launched September 25, 2025 — merging Azure Marketplace and AppSource into a single destination. Covers cloud solutions, SaaS, AI apps and agents, industry solutions, and professional services. Features a dedicated AI Apps and Agents category with 3,000+ solutions. Deeply integrated with Azure AI Foundry, Microsoft 365 Copilot, Teams, and Dynamics 365. Purchases by MACC-eligible customers count toward their Azure commitment.",
    alias:
      "Replaces: Azure Marketplace + AppSource | Related: MACC, MPO, Co-sell, Marketplace Rewards",
  },
  {
    name: "Resale-Enabled Offer — Azure",
    tags: ["azure", "cosell", "offers"],
    def: "A new Microsoft Marketplace channel motion (launched 2025, broadly available later in 2025) where ISVs designate authorized channel partners to resell their solutions on a geographic basis. Resale-enabled offers that are also Azure benefit-eligible count toward the customer's MACC. Part of Microsoft's broader expansion of partner resale options alongside MPO.",
    alias:
      "Related: MPO (Multiparty Private Offer), MACC, CSP, Microsoft Marketplace",
  },
  {
    name: "AWS ACE Integration",
    tags: ["aws", "cosell", "suger", "integrations"],
    def: "Suger's connection to AWS Partner Central via the Partner Central API. Enables bi-directional sync of co-sell referrals (ACE opportunities), funding requests, and pipeline data between Suger and AWS Partner Central. Requires APN membership and Partner Central 3.0 migration for full functionality including funding.",
    alias:
      "Related: ACE (APN Customer Engagements), Funding Benefits API, Partner Central 3.0",
  },
  {
    name: "AWS Partner Network Integration (S3)",
    tags: ["aws", "suger", "integrations"],
    def: "Suger's legacy integration with AWS Partner Network using S3-based data delivery for MCAS and MDFS reports. Being deprecated in favor of the API-based AWS Partner Network integration. ISVs still on S3 should migrate to the API integration.",
    alias: "Related: MCAS, MDFS, AWS Partner Network Integration (API)",
  },
  {
    name: "AWS Partner Network Integration (API)",
    tags: ["aws", "suger", "integrations"],
    def: "Suger's current API-based integration with AWS Partner Network. Enables programmatic access to co-sell (ACE), funding, MCAS/MDFS data, and marketplace reporting. Replaces the legacy S3-based integration.",
    alias: "Related: ACE, MCAS, MDFS, AWS Partner Funding Portal",
  },
  {
    name: "Lago Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Lago, an open-source usage-based billing engine. Automates the flow of metered usage data from Lago directly to all connected cloud marketplaces via Suger's unified metering API — eliminating manual reporting.",
    alias: "Related: Usage Metering, Metronome Integration, Orb Integration",
  },
  {
    name: "Metronome Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Metronome, a usage-based billing platform. Automatically syncs consumption data from Metronome to cloud marketplace metering endpoints (AWS, Azure, GCP) through Suger.",
    alias: "Related: Usage Metering, Lago Integration, Orb Integration",
  },
  {
    name: "Orb Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Orb, a billing infrastructure platform. Pipes metered usage from Orb to all cloud marketplaces automatically via Suger, supporting complex pricing models including tiered, volume, and matrix pricing.",
    alias: "Related: Usage Metering, Metronome Integration, Lago Integration",
  },
  {
    name: "Salesforce Integration",
    tags: ["suger", "cosell", "integrations"],
    def: "Suger's bi-directional connection to Salesforce CRM. Syncs marketplace entitlements, private offer status, co-sell referrals, and metering data into Salesforce opportunities and accounts. Also available as the Suger Salesforce App for a deeper embedded experience.",
    alias:
      "Related: Salesforce App (Suger), CRM Integration, HubSpot Integration",
  },
  {
    name: "HubSpot Integration",
    tags: ["suger", "cosell", "integrations"],
    def: "Suger's bi-directional connection to HubSpot CRM. Syncs marketplace deals, entitlement events, and co-sell referral status into HubSpot. Also available as the Suger HubSpot App for a deeper embedded experience.",
    alias:
      "Related: HubSpot App (Suger), CRM Integration, Salesforce Integration",
  },
  {
    name: "Slack Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Slack that delivers real-time marketplace event notifications — new entitlements, cancellations, usage alerts, and co-sell updates — to designated Slack channels in your workspace.",
    alias:
      "Related: Webhook, Email Notification (Suger), Microsoft Teams Integration",
  },
  {
    name: "Microsoft Teams Integration",
    tags: ["suger", "azure", "integrations"],
    def: "Suger's connection to Microsoft Teams that pushes real-time marketplace event notifications and alerts to designated Teams channels. Mirrors Slack Integration functionality for Microsoft-centric organizations.",
    alias: "Related: Slack Integration, Webhook, Email Notification (Suger)",
  },
  {
    name: "Gmail Integration",
    tags: ["suger", "integrations"],
    def: "Suger's organization-level connection to Gmail that allows Suger to send, receive, and manage emails on behalf of the organization — used for automated communications triggered by marketplace events and workflows.",
    alias:
      "Related: User Gmail Integration, Microsoft Outlook Integration, Workflow",
  },
  {
    name: "User Gmail Integration",
    tags: ["suger", "integrations"],
    def: "Suger's user-level Gmail connection (distinct from the org-level Gmail Integration). Allows individual Suger users to connect their personal Gmail account for email-based actions within Suger workflows.",
    alias: "Related: Gmail Integration, User Microsoft Outlook Integration",
  },
  {
    name: "Google Drive Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Google Drive that enables creating, deleting, updating, and sharing files and folders programmatically — used for storing marketplace reports, contracts, and exported data within Suger workflows.",
    alias: "Related: Table Export (Suger), Google Cloud Storage Integration",
  },
  {
    name: "Google Cloud Storage Integration",
    tags: ["suger", "gcp", "integrations"],
    def: "Suger's connection to GCP Cloud Storage for managing files and folders. Used as a destination for Table Export — exporting entitlement, usage, and revenue data from Suger to GCS buckets for custom reporting and data warehousing.",
    alias:
      "Related: Table Export (Suger), Google BigQuery Integration, Google Drive Integration",
  },
  {
    name: "Google BigQuery Integration",
    tags: ["suger", "gcp", "integrations"],
    def: "Suger's connection to Google BigQuery that allows Suger to query or update data in BigQuery tables. Used for advanced analytics, custom reporting, and syncing marketplace data into an existing data warehouse.",
    alias:
      "Related: Table Export (Suger), Google Cloud Storage Integration, Analytics (Suger)",
  },
  {
    name: "Microsoft Outlook Integration",
    tags: ["suger", "azure", "integrations"],
    def: "Suger's organization-level connection to Microsoft Outlook that allows Suger to send, receive, and manage emails on behalf of the organization — used for automated communications in Suger workflows.",
    alias:
      "Related: User Microsoft Outlook Integration, Gmail Integration, Workflow",
  },
  {
    name: "User Microsoft Outlook Integration",
    tags: ["suger", "azure", "integrations"],
    def: "Suger's user-level Outlook connection (distinct from the org-level Microsoft Outlook Integration). Allows individual Suger users to connect their personal Outlook account for email-based workflow actions.",
    alias: "Related: Microsoft Outlook Integration, User Gmail Integration",
  },
  {
    name: "OpenAI Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to OpenAI via API key. Enables AI-powered features within Suger — such as workflow automation, intelligent suggestions, and natural language processing — billed at cost directly to the ISV's OpenAI account.",
    alias: "Related: Google Gemini Integration, Anthropic Integration",
  },
  {
    name: "Google Gemini Integration",
    tags: ["suger", "gcp", "integrations"],
    def: "Suger's connection to Google Gemini via API key. Provides AI-powered capabilities within Suger at cost, using Google's Gemini models as an alternative or complement to OpenAI or Anthropic.",
    alias: "Related: OpenAI Integration, Anthropic Integration",
  },
  {
    name: "Anthropic Integration",
    tags: ["suger", "integrations"],
    def: "Suger's connection to Anthropic via API key. Enables Claude-powered AI features within Suger at cost, billed directly to the ISV's Anthropic account. One of three AI provider integrations supported alongside OpenAI and Gemini.",
    alias: "Related: OpenAI Integration, Google Gemini Integration",
  },
  {
    name: "OAuth 2.0 Integration",
    tags: ["suger", "integrations"],
    def: "Suger's generic OAuth 2.0 connector that allows ISVs to connect any compliant external service — including Salesforce, HubSpot, or custom providers — to the Suger platform using standard OAuth 2.0 authorization flows.",
    alias: "Related: Salesforce Integration, HubSpot Integration, Okta SSO",
  },
  {
    name: "Snowflake Integration",
    tags: ["suger", "snowflake", "integrations"],
    def: "Suger's connection to Snowflake for real-time cloud data streaming. Distinct from Snowflake Marketplace — this integration pipes marketplace data (entitlements, usage, revenue) from Suger directly into a Snowflake data warehouse.",
    alias:
      "Related: Snowflake Marketplace, Table Export (Suger), Google BigQuery Integration",
  },
  {
    name: "PRM (Partner Revenue Measurement)",
    tags: ["aws", "cosell", "funding"],
    def: "An AWS Partner Network capability that measures and quantifies the revenue impact an ISV's product has on AWS service consumption — across both partner-managed and customer-managed accounts. Launched in January 2026. Partners implement PRM via resource tagging to demonstrate their AWS contribution, unlock APN funding benefits, and gain consumption insights.",
    alias:
      "Related: APN ID Tag, PRM Resource Tagging, Revenue Attribution (AWS), AWS Partner Network (APN)",
  },
  {
    name: "APN ID Tag (aws-apn-id)",
    tags: ["aws"],
    def: "The AWS resource tag key used for Partner Revenue Measurement. Partners tag their AWS resources with key `aws-apn-id` and value `pc:<product-code>` (e.g. `pc:5ugbbrmu7ud3u5hsipfzug61p`) to attribute AWS service consumption to their marketplace product. Revenue attribution continues until the tag is removed or the resource is terminated.",
    alias: "",
  },
  {
    name: "PRM Resource Tagging",
    tags: ["aws"],
    def: "The core implementation mechanism for AWS Partner Revenue Measurement. Partners tag billable AWS resources (EC2, S3, RDS, etc.) in their own or the customer's account with their Marketplace product code. Only resources consuming chargeable AWS services generate revenue attribution — tagging free services like IAM has no effect.",
    alias: "",
  },
  {
    name: "PRM Architecture Patterns",
    tags: ["aws"],
    def: "The three deployment models supported by AWS Partner Revenue Measurement: Partner Account (all components in the partner's AWS account), Customer Account (all components in the customer's AWS account), and Hybrid (components split across both). Determines where tagging must be applied.",
    alias: "",
  },
  {
    name: "Revenue Attribution (AWS)",
    tags: ["aws"],
    def: "The process by which AWS associates a customer's consumption of AWS services with a specific partner's product, using PRM resource tags. Attribution is maintained as long as the `aws-apn-id` tag remains on the resource. Used by AWS to quantify partner impact and determine APN funding eligibility.",
    alias:
      "Related: PRM (Partner Revenue Measurement), APN ID Tag (aws-apn-id), Product Code (AWS)",
  },
  {
    name: "Subsidiary Account Connection",
    tags: ["aws"],
    def: "An AWS Partner Central feature allowing partners with multiple AWS Marketplace accounts to link them all under a single primary account. Required for partners managing multiple marketplace storefronts who want unified PRM tracking and APN program management.",
    alias: "",
  },
  {
    name: "Partner Relationship Management (PRM) System",
    tags: ["suger", "general", "cosell", "aws", "azure", "gcp"],
    def: "A platform that helps companies recruit, onboard, enable, and manage partners, while supporting collaboration, deal tracking, and performance across the partner lifecycle. Suger extends traditional PRM by acting as the execution layer for cloud marketplace and co-sell workflows—automating CPPOs, syncing CRM deal data to AWS, Azure, and GCP, and enabling partners to transact and track deals in a unified system.",
    alias: "Related: CRM, deals",
  },
  {
    name: "Self-service Cancellations and Billing Adjustments (SCABA)",
    tags: ["suger", "aws"],
    def: "An AWS Marketplace feature integrated into Suger that allows sellers to independently manage refunds and agreement terminations directly from their CRM or the Suger console — without needing to contact AWS support or the buyer.",
    alias: "Related: Agreement (AWS), Refund (Suger), CRM Integration",
  },
  {
    name: "SEA (AWS Secure Environment Accelerator)",
    tags: ["aws", "general"],
    def: "An open-source AWS tool designed to help organizations — initially the Government of Canada — deploy and operate secure, multi-account, multi-Region AWS environments. Uses a configuration file to automate compliant architecture deployment without code changes. Built to meet Canadian federal security standards including PBMM (Protected B, Medium Integrity, Medium Availability) and ITSG-33. Note: ASEA has been deprecated in favor of the Landing Zone Accelerator (LZA) as of Q3 2025.",
    alias:
      "Also called: ASEA | Successor: Landing Zone Accelerator (LZA) | Related: AWS Partner Network (APN), Public Sector",
  },
  {
    name: "LZA (Landing Zone Accelerator)",
    tags: ["aws", "general"],
    def: "AWS's recommended replacement for the Secure Environment Accelerator (ASEA), now generally available. Automates the deployment of high-compliance, multi-account AWS environments. Includes Canadian CCCS Cloud Medium and Trusted Secure Enclave Sensitive Edition sample configurations that deliver similar outcomes to ASEA. Supports automated migration from ASEA.",
    alias:
      "Replaces: SEA / ASEA | Related: SEA (AWS Secure Environment Accelerator)",
  },
  {
    name: "FTR (Foundational Technical Review)",
    tags: ["aws", "cosell"],
    def: "An AWS validation process that reviews an ISV's software product against AWS Well-Architected best practices across security, reliability, and operational excellence. Required prerequisite for ISV Accelerate, AWS Specialization, and co-sell eligibility. Valid for 3 years. Upon approval, partners earn a 'Reviewed by AWS' badge and listing in AWS Partner Solutions Finder. As of 2025, can be waived with a recent Well-Architected Framework Review showing no high-risk issues.",
    alias:
      "Related: ISV Accelerate (AWS), AWS Specialization, Well-Architected Framework Review, PDM (Partner Development Manager)",
  },
  {
    name: "AWS Specialization",
    tags: ["aws", "cosell"],
    def: "AWS's validated expertise program for partners demonstrating deep technical and delivery capability in a specific domain (e.g., AI, Security, Resilience, MSP). Distinct from basic APN membership. Specialization badges appear in AWS Marketplace listings and influence the co-sell recommendation score. As of 2026, renewals require partners to demonstrate launched ACE opportunities tied to their Specialization solutions over a rolling 12-month period.",
    alias:
      "Related: FTR (Foundational Technical Review), ACE (APN Customer Engagements), Co-sell Recommendation Score, AWS Competency",
  },
  {
    name: "AWS Competency",
    tags: ["aws", "cosell"],
    def: "A category of AWS Specialization validating a partner's technical expertise and customer success in a specific technology area or industry (e.g., AI Competency, Security Competency, SMB Competency). Requires Advanced Tier or higher APN status. Partners with Competencies gain increased MDF, Marketplace visibility, and priority in AWS seller recommendations.",
    alias:
      "Related: AWS Specialization, MDF (Marketing Development Funds), SCA (Strategic Collaboration Agreement)",
  },
  {
    name: "Co-sell Recommendation Score",
    tags: ["aws", "cosell"],
    def: "An ML-powered score in AWS Partner Central (Analytics & Insights dashboard) reflecting how likely a partner is to be recommended to an AWS seller for a specific customer opportunity — by region, industry, and segment. Powered by signals including ACE activity, Marketplace listings, Specialization status, validated case studies, and win history. Available to ACE-eligible partners with an AWS Specialization at Validated or Differentiated stage.",
    alias:
      "Related: ACE (APN Customer Engagements), AWS Specialization, ISV Accelerate (AWS), PDM (Partner Development Manager)",
  },
  {
    name: "FVO (First Value Opportunity)",
    tags: ["aws", "cosell"],
    def: "A designation for an ISV's very first launched co-sell opportunity in ACE. FVOs are excluded from ISV Accelerate's minimum launched opportunity count requirements — meaning the first deal doesn't count toward the 5-launch threshold. Ensures the eligibility bar reflects sustained co-sell activity rather than a single deal.",
    alias: "Related: ACE (APN Customer Engagements), ISV Accelerate (AWS)",
  },
  {
    name: "AWS Solution Provider Program (SPP)",
    tags: ["aws", "cosell"],
    def: "AWS's primary channel reseller program allowing authorized partners to resell AWS services to end customers, with consolidated billing and discounts. Updated significantly in 2026 with streamlined incentives: a new Streamlined Base Benefit, New Customer Incentive, and Partner Growth Incentive replacing several prior discount mechanisms. Distinct from CPPO/SPPO, which are ISV-specific marketplace channel programs.",
    alias:
      "Related: CPPO (Channel Partner Private Offer), SPPO (Solution Provider Private Offer), Channel Partner (CP), PDM (Partner Development Manager)",
  },
  {
    name: "AWS Partner Central Agents",
    tags: ["aws", "cosell"],
    def: "Agentic AI capabilities embedded in AWS Partner Central (launched March 2026) that assist partner teams with pipeline insights, sales play recommendations, and automated ACE opportunity management. Can auto-populate opportunity fields from meeting transcripts or emails, recommend funding at the opportunity level, and generate pre-filled fund requests. Available in all commercial AWS Regions.",
    alias:
      "Related: ACE (APN Customer Engagements), AWS Funding / Partner Funding, Partner Central 3.0 (PC3.0)",
  },
  {
    name: "Partner Revenue Management (PRM)",
    tags: ["suger", "general"],
    def: "The practice of tracking, reconciling, and reporting revenue generated through cloud marketplace and direct billing channels. In Suger, PRM spans the full billing lifecycle — from offer creation and usage metering through invoicing, payment collection, disbursement, and revenue reporting — across both marketplace and direct (Stripe) billing.",
    alias:
      "Related: Revenue (Suger), Disbursement, Invoice (Suger), Billing Integration",
  },
  {
    name: "Payment (Suger)",
    tags: ["suger"],
    def: "Suger's automated payment processing layer that triggers when an invoice becomes Finalized. Processes payments via Stripe, applying buyer wallet credits first before charging the remaining balance. Supports payment retry, dispute handling via Stripe webhooks, and abnormal payment alerts.",
    alias:
      "Related: Invoice (Suger), Stripe Integration, Refund (Suger), Buyer Wallet",
  },
  {
    name: "Refund (Suger)",
    tags: ["suger"],
    def: "Suger's manual refund capability for successful payments. Supports partial refunds, multiple refunds per payment, and both credit wallet refunds and Stripe payment refunds. Refunds are processed at the transaction level, not the invoice level.",
    alias: "Related: Payment (Suger), Invoice (Suger), Stripe Integration",
  },
  {
    name: "Buyer Wallet",
    tags: ["suger"],
    def: "A credit balance held for a specific buyer in Suger. During payment processing, credits in the wallet are applied first before any Stripe charge is made. Wallets must be in active status to accept credit refunds.",
    alias: "Related: Usage Credit, Payment (Suger), Refund (Suger)",
  },
  {
    name: "Payment Transaction",
    tags: ["suger"],
    def: "A single atomic payment attempt within Suger's payment pipeline. One invoice may have multiple transactions — for example, a credit deduction followed by a Stripe charge. Each transaction has its own status (Pending, Processing, Success, Failed). The invoice's payment status always reflects the latest transaction.",
    alias: "Related: Payment (Suger), Invoice (Suger), Revenue Record",
  },
  {
    name: "Revenue Record",
    tags: ["suger"],
    def: "A financial record generated in Suger on successful invoice payment. Two types: Joined Records (one per invoice, consolidating all payment transactions) and Raw Records (one per individual payment transaction). Used for reconciliation and financial reporting.",
    alias: "Related: Revenue (Suger), Payment Transaction, Disbursement",
  },
  {
    name: "Invoiced Amount",
    tags: ["suger", "general"],
    def: "The total amount billed to a buyer on an invoice — what the customer owes. Distinct from Collectable Amount, which accounts for marketplace fees and credits. Tracked per invoice issue date in Suger's revenue reports.",
    alias: "Related: Collectable Amount, Disbursed Amount, Invoice (Suger)",
  },
  {
    name: "Collectable Amount",
    tags: ["suger", "general"],
    def: "The amount an ISV can expect to receive from a buyer after deducting marketplace/partner fees and applying credits. Formula: (Total Payment − Partner Fee) + Credits. Tracked per payment due date in Suger's revenue reports.",
    alias:
      "Related: Invoiced Amount, Disbursed Amount, Marketplace Fee / Transaction Fee",
  },
  {
    name: "Disbursed Amount",
    tags: ["suger", "general"],
    def: "The net amount paid out to the seller after deducting all partner/marketplace fees from the total payment. Formula: Total Payment − Partner Fee. Tracked per disbursement date. Distinct from Collectable Amount, which also includes credits.",
    alias: "Related: Collectable Amount, Invoiced Amount, Disbursement",
  },
  {
    name: "Partner Fee",
    tags: ["suger", "general"],
    def: "The fee deducted from a buyer's payment by the marketplace or billing partner before disbursement to the ISV. In Suger's revenue reporting, this is subtracted from the total payment to calculate both Collectable Amount and Disbursed Amount.",
    alias:
      "Related: Marketplace Fee / Transaction Fee, Disbursed Amount, Collectable Amount",
  },
  {
    name: "Payment Due Date",
    tags: ["suger", "general"],
    def: "The deadline by which a buyer must complete payment on a finalized invoice. Used as the key date for Collectable Amount in Suger's revenue reports.",
    alias: "Related: Invoice (Suger), Payment (Suger), Collectable Amount",
  },
  {
    name: "Disbursement Date",
    tags: ["suger", "general"],
    def: "The date when a successful payment is processed and transferred to the seller's account. Used as the key date for Disbursed Amount in Suger's revenue reports.",
    alias: "Related: Disbursement, Disbursed Amount, Payment (Suger)",
  },
  {
    name: "Payment Dispute",
    tags: ["suger", "general"],
    def: "A buyer-initiated challenge to a payment charge, handled by Stripe. Suger receives dispute notifications via Stripe webhooks and displays them in the relevant payment transaction record in the Suger console.",
    alias: "Related: Payment (Suger), Stripe Integration, Payment Transaction",
  },
  {
    name: "ACH Debit",
    tags: ["suger", "general"],
    def: "An electronic bank transfer payment method supported via Stripe in Suger. ACH refunds are processed as bank credits rather than explicit refunds. Payments may take a few hours to complete — refunds initiated before completion cancel the original payment rather than creating a separate refund.",
    alias: "Related: Payment (Suger), Stripe Integration, Refund (Suger)",
  },
  {
    name: "Billing (Suger)",
    tags: ["suger"],
    def: "Suger's end-to-end billing system for direct (non-marketplace) revenue. Covers the full lifecycle: product setup → billable metrics → offer creation → entitlement management → usage metering → invoicing → payment collection → revenue reporting. Uses Stripe as the payment provider.",
    alias:
      "Related: Partner Revenue Management, Invoice (Suger), Payment (Suger), Revenue (Suger)",
  },

  {
    name: "AWS Competency Program — AWS",
    tags: ["aws", "cosell"],
    def: "A validation program that recognizes AWS partners who have demonstrated technical proficiency and proven customer success in specialized solution areas, industries, or workloads. Achieving a Competency is a prerequisite for higher-tier MDF funding.",
    alias:
      "Related: AWS Competency — AWS, FTR (Foundational Technical Review), MDF (Marketing Development Funds)",
  },
  {
    name: "AWS Marketplace Skill",
    tags: ["aws", "cosell"],
    def: "A specific designation for AWS consulting partners who demonstrate expertise in helping customers transform their procurement and governance using AWS Marketplace. Partners with this skill often act as the 'Channel Partner' in CPPO transactions.",
    alias: "Related: CPPO, AWS Partner Network (APN), Channel Partner (CP)",
  },
  {
    name: "Build Engagement Model — GCP",
    tags: ["gcp", "cosell"],
    def: "The Google Cloud Partner Advantage engagement model designed for ISVs and SaaS providers who integrate their products with Google Cloud. Requires a technical review and a transactable GCP Marketplace listing to unlock co-sell incentives and Market Development Funds (MDF).",
    alias: "Related: GCP Partner Advantage, GCP Marketplace, MDF",
  },
  {
    name: "ISV Success Program (Microsoft)",
    tags: ["azure", "cosell", "funding"],
    def: "A Microsoft program (formerly ISV Success Path) that provides software providers with technical consulting, Azure credits, and marketplace rewards to help them build, publish, and grow their transactable listings on the Microsoft Marketplace.",
    alias: "Related: Microsoft Marketplace, Marketplace Rewards (Azure), MISA",
  },
  {
    name: "MISA (Microsoft Intelligent Security Association)",
    tags: ["azure", "cosell"],
    def: "A nomination-only ecosystem for independent software vendors (ISVs) and managed security service providers (MSSPs) that have integrated their solutions with Microsoft Security products. Requires a transactable marketplace listing.",
    alias:
      "Related: Microsoft Marketplace, Azure IP co-sell eligible, ISV Success Program (Microsoft)",
  },
  {
    name: "Snowflake Data Appreciation (SDA) — Snowflake",
    tags: ["snowflake", "cosell"],
    def: "A Snowflake partner program that incentivizes data providers to list high-quality data products on the Snowflake Marketplace. Provides marketing support and increased visibility to Snowflake's customer base.",
    alias: "Related: Snowflake Marketplace, Snowflake Integration",
  },
  {
    name: "Snowflake Data Clean Rooms — Snowflake",
    tags: ["snowflake"],
    def: "A secure environment that allows multiple parties to join and analyze data without exposing the raw underlying data to each other. Often sold as a specialized application or service on the Snowflake Marketplace.",
    alias: "Related: Snowflake Marketplace, Snowflake Integration",
  },

  {
    name: "Multiple Offers — GCP",
    tags: ["gcp", "offers"],
    def: "A Google Cloud Marketplace feature that allows a partner to send and maintain more than one active private offer for the same product to a single billing account. This enables buyers to purchase separate instances of a product with different terms, such as for different departments or project-specific billing.",
    alias:
      "Related: Private Offer — GCP, GCP Marketplace — GCP, Producer Portal — GCP",
  },
  {
    name: "Private Offer — GCP",
    tags: ["gcp", "offers"],
    def: "A custom pricing and terms agreement sent to a specific Google Cloud billing account. In GCP, these can be 'Multiple Offers' allowing for separate project-based contracts for the same product ID.",
    alias:
      "Related: Multiple Offers — GCP, Private Plan — GCP, Producer Portal — GCP",
  },
  {
    name: "Private Plan — GCP",
    tags: ["gcp", "offers"],
    def: "A restricted product plan on Google Cloud Marketplace available only to specific billing accounts. While a private offer is a one-time transaction, a private plan allows multiple authorized customers to subscribe to the same custom terms repeatedly.",
    alias:
      "Related: Multiple Offers — GCP, Private Offer — GCP, GCP Marketplace — GCP",
  },
];

// { name: "", tags: [""], def: "", alias: "" },
