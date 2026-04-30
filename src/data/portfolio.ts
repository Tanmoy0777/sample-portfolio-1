export const profile = {
  name: "Tanmoy Acharjee",
  shortName: "Tanmoy",
  initials: "TA",
  email: "tanmoyacharjee661@gmail.com",
  role: "Account Management & Campaign Strategy",
  headline: "Turning account data into smarter campaigns",
  location: "India",
  availability: "Open to opportunities",
  summary:
    "Account management and campaign strategy specialist with 2.5+ years building CRM workflows, campaign operating systems, account intelligence, and performance reporting for B2B growth teams.",
  philosophy:
    "I build systems that turn noisy data into confident decisions — where account clarity meets campaign precision.",
  proof: [
    { value: "40+", label: "hrs/month automated" },
    { value: "150+", label: "target accounts mapped" },
    { value: "+28%", label: "ABM campaign lift" },
  ],
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const capabilities = [
  {
    number: "01",
    title: "Account Intelligence",
    description:
      "Account segmentation, CRM hygiene, buyer-tier mapping, lead prioritization, funnel diagnostics, and leadership-ready account reporting layers that surface what matters.",
    tools: [
      "Power BI",
      "DAX",
      "SQL",
      "GA4",
      "Account Scoring",
      "Cohort Analysis",
      "A/B Testing",
      "ETL Design",
    ],
  },
  {
    number: "02",
    title: "Campaign Strategy",
    description:
      "Campaign planning, audience targeting, ABM coordination, budget pacing, channel reporting, and cross-functional workflows that move accounts forward at every stage.",
    tools: [
      "Adobe Marketo",
      "MS Dynamics 365",
      "ActiveCampaign",
      "LinkedIn Ads",
      "Google PPC",
      "ABM Strategy",
      "Channel Influence",
      "Marketing Automation",
    ],
  },
];

export const experience = [
  {
    role: "Account Management & Campaign Strategy",
    company: "NetCom Learning",
    period: "2024 — Now",
    body:
      "Built account and campaign reporting systems across CRM, marketing automation, paid media, events, and analytics data. Automated recurring workflows, surfaced account-stage bottlenecks, and supported campaign decisions with clean performance intelligence.",
  },
  {
    role: "Campaign Analytics & Automation",
    company: "B2B Growth Projects",
    period: "2023 — 2024",
    body:
      "Designed campaign performance engines, lead scoring logic, and operational dashboards that reduced decision latency from days to same-day action for campaign managers and account teams.",
  },
  {
    role: "Analytics Foundation",
    company: "BI, CRM & Data Ops",
    period: "2022 — 2023",
    body:
      "Developed the core toolkit across Power BI, SQL, Excel/VBA, ETL design, CRM operations, KPI frameworks, and lifecycle analytics.",
  },
];

const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export const projects = [
  {
    number: "01",
    title: "Account & Funnel Command Center",
    category: "Account Management",
    image: `${BASE}/images/project-revops.svg`,
    link: `${BASE}/projects/project1_revops_dashboard.html`,
    summary:
      "Consolidates Dynamics 365, Marketo, GA4, paid media, CRM, and event data into one account-stage view from first engagement to closed opportunity.",
    tools: "Power BI · Marketo · Dynamics 365 · ETL · GA4",
    metrics: ["150+ target accounts", "3,842 MQLs", "40+ hrs/month saved"],
  },
  {
    number: "02",
    title: "Campaign Mix & Budget Strategy",
    category: "Campaign Strategy",
    image: `${BASE}/images/project-attribution.svg`,
    link: `${BASE}/projects/project2_attribution_model.html`,
    summary:
      "Compares channel influence models across buyer journeys to rebalance budget, protect awareness programs, and improve campaign mix decisions.",
    tools: "Campaign Analytics · SQL · Power BI · Channel Mix",
    metrics: ["8 channels compared", "3.2× ROAS", "6.3 touches/deal"],
  },
  {
    number: "03",
    title: "Campaign Performance Engine",
    category: "ETL & Automation",
    image: `${BASE}/images/project-campaign.svg`,
    link: `${BASE}/projects/project3_campaign_engine.html`,
    summary:
      "End-to-end campaign operations engine for 10+ channels, replacing slow manual reports with refreshed campaign pacing and optimization signals.",
    tools: "ETL · Dimensional Modeling · Power BI · Alerting",
    metrics: ["342% ROI", "50K+ rows/day", "99.8% uptime"],
  },
  {
    number: "04",
    title: "Lead Scoring & Cohort Analysis",
    category: "Predictive Analytics",
    image: `${BASE}/images/project-scoring.svg`,
    link: `${BASE}/projects/project4_lead_scoring.html`,
    summary:
      "A 15-signal scoring model and cohort analysis layer that prioritizes high-intent accounts, routes follow-up, and improves account coverage.",
    tools: "Account Scoring · Cohorts · Marketo · CRM Routing",
    metrics: ["+18% coverage recovery", "34.2% high-score conversion", "3,842 leads scored"],
  },
];

export const socialLinks = [
  { label: "Github", href: "https://github.com/Tanmoy0777" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tanmoy--acharjee/" },
  { label: "Instagram", href: "https://www.instagram.com/__paradigm___/" },
];
