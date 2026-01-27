"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ---------------- ICONS PLACEHOLDERS ---------------- */
const IconBase = ({ children }) => (
  <svg
    className="w-6 h-6 text-blue-600"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const IconFileBase = ({ children }) => (
  <IconBase>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    {children}
  </IconBase>
);

const IconFileCheck = () => (
  <IconFileBase>
    <path d="M8 14l2 2 4-4" />
  </IconFileBase>
);

const IconFilePlus = () => (
  <IconFileBase>
    <path d="M10 14h4" />
    <path d="M12 12v4" />
  </IconFileBase>
);

const IconFileMinus = () => (
  <IconFileBase>
    <path d="M10 14h4" />
  </IconFileBase>
);

const IconFileText = () => (
  <IconFileBase>
    <path d="M8 13h8" />
    <path d="M8 17h6" />
  </IconFileBase>
);

const IconFileBarChart = () => (
  <IconFileBase>
    <path d="M8 17v-3" />
    <path d="M12 17v-5" />
    <path d="M16 17v-2" />
  </IconFileBase>
);

const IconShieldBase = ({ children }) => (
  <IconBase>
    <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
    {children}
  </IconBase>
);

const IconShieldCheck = () => (
  <IconShieldBase>
    <path d="M9 12l2 2 4-4" />
  </IconShieldBase>
);

const IconShield = () => (
  <IconShieldBase />
);

const IconTarget = () => (
  <IconBase>
    <circle cx="12" cy="12" r="7" />
    <circle cx="12" cy="12" r="3" />
  </IconBase>
);

const IconSearch = () => (
  <IconBase>
    <circle cx="11" cy="11" r="6" />
    <path d="M20 20l-4-4" />
  </IconBase>
);

const IconUsers = () => (
  <IconBase>
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M2 20a7 7 0 0 1 14 0" />
    <path d="M14 20a6 6 0 0 1 8 0" />
  </IconBase>
);

const IconCheckSquare = () => (
  <IconBase>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 12l3 3 5-5" />
  </IconBase>
);

const IconCheckCircle = () => (
  <IconBase>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l3 3 5-5" />
  </IconBase>
);

const IconCalculator = () => (
  <IconBase>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path d="M8 6h8" />
    <path d="M8 11h2" />
    <path d="M12 11h2" />
    <path d="M16 11h2" />
    <path d="M8 15h2" />
    <path d="M12 15h2" />
    <path d="M16 15h2" />
    <path d="M8 19h8" />
  </IconBase>
);

const IconReceipt = () => (
  <IconBase>
    <path d="M5 3h14v18l-2-1-2 1-2-1-2 1-2-1-2 1V3z" />
    <path d="M8 7h8" />
    <path d="M8 11h8" />
    <path d="M8 15h5" />
  </IconBase>
);

const IconPercent = () => (
  <IconBase>
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="7" cy="7" r="2" />
    <circle cx="17" cy="17" r="2" />
  </IconBase>
);

const IconPulse = () => (
  <IconBase>
    <path d="M3 12h4l2-4 4 8 2-4h6" />
  </IconBase>
);

const IconScale = () => (
  <IconBase>
    <path d="M12 3v18" />
    <path d="M5 7h14" />
    <path d="M7 7l-3 5h6z" />
    <path d="M17 7l3 5h-6z" />
  </IconBase>
);

const IconMessage = () => (
  <IconBase>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </IconBase>
);

const IconBarChart = () => (
  <IconBase>
    <path d="M3 21h18" />
    <path d="M6 17v-5" />
    <path d="M12 17v-9" />
    <path d="M18 17v-3" />
  </IconBase>
);

const IconBuilding = () => (
  <IconBase>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 7h2" />
    <path d="M11 7h2" />
    <path d="M15 7h2" />
    <path d="M7 11h2" />
    <path d="M11 11h2" />
    <path d="M15 11h2" />
    <path d="M7 15h2" />
    <path d="M11 15h2" />
    <path d="M15 15h2" />
  </IconBase>
);

const IconLineChart = () => (
  <IconBase>
    <path d="M3 21h18" />
    <path d="M3 17l6-6 4 4 7-7" />
  </IconBase>
);

const IconSliders = () => (
  <IconBase>
    <path d="M4 6h16" />
    <circle cx="9" cy="6" r="2" />
    <path d="M4 12h16" />
    <circle cx="15" cy="12" r="2" />
    <path d="M4 18h16" />
    <circle cx="11" cy="18" r="2" />
  </IconBase>
);

const IconClipboardList = () => (
  <IconBase>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M9 3v4h6V3" />
    <path d="M8 11h8" />
    <path d="M8 15h8" />
  </IconBase>
);

const IconLaptop = () => (
  <IconBase>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M2 20h20" />
  </IconBase>
);

const IconGrid = () => (
  <IconBase>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </IconBase>
);

const IconDatabase = () => (
  <IconBase>
    <ellipse cx="12" cy="5" rx="7" ry="3" />
    <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
    <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
  </IconBase>
);

const IconGauge = () => (
  <IconBase>
    <path d="M4 13a8 8 0 0 1 16 0" />
    <path d="M12 13l3-3" />
    <circle cx="12" cy="13" r="1" />
  </IconBase>
);

const IconGlobe = () => (
  <IconBase>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 0 1 0 18" />
    <path d="M12 3a15 15 0 0 0 0 18" />
  </IconBase>
);

const IconArrows = () => (
  <IconBase>
    <path d="M7 7l-4 4 4 4" />
    <path d="M3 11h18" />
    <path d="M17 7l4 4-4 4" />
  </IconBase>
);

const IconLayers = () => (
  <IconBase>
    <path d="M12 3l9 5-9 5-9-5z" />
    <path d="M3 12l9 5 9-5" />
    <path d="M3 17l9 5 9-5" />
  </IconBase>
);

const IconUserCheck = () => (
  <IconBase>
    <circle cx="9" cy="8" r="3" />
    <path d="M2 20a7 7 0 0 1 14 0" />
    <path d="M16 11l2 2 4-4" />
  </IconBase>
);

const IconPieChart = () => (
  <IconBase>
    <path d="M21 12a9 9 0 1 1-9-9v9z" />
    <path d="M21 12h-9V3" />
  </IconBase>
);

const IconWallet = () => (
  <IconBase>
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path d="M16 10h4" />
  </IconBase>
);

const IconClock = () => (
  <IconBase>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </IconBase>
);

const IconCreditCard = () => (
  <IconBase>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 10h18" />
    <path d="M7 15h4" />
  </IconBase>
);

const IconBoxes = () => (
  <IconBase>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </IconBase>
);

const IconTag = () => (
  <IconBase>
    <path d="M20 10l-8 8-9-9V2h7l10 8z" />
    <circle cx="7" cy="7" r="1" />
  </IconBase>
);

const IconBook = () => (
  <IconBase>
    <path d="M4 4h8a4 4 0 0 1 4 4v12a4 4 0 0 0-4-4H4z" />
    <path d="M20 4h-8a4 4 0 0 0-4 4v12a4 4 0 0 1 4-4h8z" />
  </IconBase>
);

const SERVICE_ICON_BY_TITLE = {
  "Statutory & Regulatory Audits": IconFileCheck,
  "Internal Audit Services": IconShieldCheck,
  "Special Purpose Audits": IconTarget,
  "Investigative & Forensic Reviews": IconSearch,
  "Donor & Project Audits": IconUsers,
  "Financial & Compliance Reviews": IconCheckSquare,
  "Corporate Income Tax": IconCalculator,
  "Value Added Tax (VAT)": IconReceipt,
  "Withholding Tax Advisory": IconPercent,
  "Tax Reviews & Health Checks": IconPulse,
  "GRA Audit Support": IconScale,
  "Tax Objections & Advisory": IconMessage,
  "Corporate Tax Registration / Deregistration": IconFilePlus,
  "VAT Tax Registration / Deregistration": IconFilePlus,
  "Corporate Tax Return Filing": IconFileCheck,
  "VAT Return Filing": IconFileCheck,
  "VAT Refund": IconWallet,
  "Financial Reporting Advisory": IconBarChart,
  "Business Setup & Structuring": IconBuilding,
  "Financial Modelling & Forecasting": IconLineChart,
  "Governance & Risk Advisory": IconShield,
  "Process Improvement": IconSliders,
  "Management & Board Reporting": IconClipboardList,
  "Accounting Software Setup": IconLaptop,
  "ERP Implementation Support": IconGrid,
  "System Customisation": IconSliders,
  "Data Migration & Cleanup": IconDatabase,
  "User Training & Support": IconUsers,
  "System Review & Optimisation": IconGauge,
  "Ghana-Dubai Coordination": IconGlobe,
  "Cross-Border Advisory": IconArrows,
  "Regional Compliance Support": IconCheckCircle,
  "International Structuring Support": IconLayers,
  "Partner-Led Oversight": IconUserCheck,
  "Management Accounting": IconPieChart,
  "Fund Accounting": IconWallet,
  "Accounts Backlog": IconClock,
  "Financial Accounting": IconFileText,
  "Cost Accounting": IconCalculator,
  "Payroll Process & Management": IconCreditCard,
  "Corporate Tax Registration in Dubai": IconFilePlus,
  "Freezone Corporate Tax": IconBuilding,
  "Trial Balance & Profit and Loss Statements": IconFileBarChart,
  "Stockpile Audit": IconBoxes,
  "Excise Tax De-Registration": IconFileMinus,
  "Excise Return Filing": IconFileCheck,
  "Excise Declaration": IconCheckSquare,
  "Excise Goods Registration": IconTag,
  "Internal Audit": IconShieldCheck,
  "External Audit": IconSearch,
  "Liquidation Audit": IconFileMinus,
  "Compliance Audit": IconCheckSquare,
  "Inventory Control": IconBoxes,
  "Sales Audit": IconLineChart,
  "IFRS Implementation": IconBook,
  "Audited Financial Statements for Freezone License Renewal": IconFileCheck,
};

const getServiceIcon = (title) =>
  SERVICE_ICON_BY_TITLE[title] || IconFileText;

const icons = {
  financial: (
    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z" />
    </svg>
  ),

  bookkeeping: (
    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
      <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z" />
    </svg>
  ),

  cost: (
    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6z" />
    </svg>
  ),

  inventory: (
    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  ),

  corporateTax: (
    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8z" />
    </svg>
  ),

  excise: (
    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6z" />
    </svg>
  ),

  internalAudit: (
    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5" />
    </svg>
  ),

  externalAudit: (
    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10" />
    </svg>
  ),

  statutoryAudit: (
    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14" />
    </svg>
  ),

  vatAudit: (
    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16" />
    </svg>
  ),
};

const normalizeOfficeKey = (value) => (value === "uae" ? "dubai" : value);

/* ---------------- SERVICE DATA (FIXED) ---------------- */
const ACCOUNTING_BOOKKEEPING = {
  categoryTitle: "Accounting & Bookkeeping",
  services: [
    {
      title: "Management Accounting",
      description: "Strategic financial insights for effective decision making.",
      icon: icons.financial,
    },
    {
      title: "Fund Accounting",
      description:
        "Precise handling of financial resources for funds and investments.",
      icon: icons.bookkeeping,
    },
    {
      title: "Accounts Backlog",
      description: "Streamlined organization of pending accounting tasks.",
      icon: icons.cost,
    },
    {
      title: "Financial Accounting",
      description:
        "Comprehensive financial reporting for clarity and transparency.",
      icon: icons.inventory,
    },
    {
      title: "Cost Accounting",
      description: "Detailed cost analysis to optimize business expenses.",
      icon: icons.inventory,
    },
    {
      title: "Payroll Process & Management",
      description:
        "Timely and accurate payroll processing for smooth operations.",
      icon: icons.inventory,
    },
  ],
};

const DUBAI_SERVICES = [
  {
    categoryTitle: "Auditing Services",
    services: [
      {
        title: "Internal Audit",
        description:
          "Independent review of internal controls, processes, and governance.",
        icon: icons.internalAudit,
      },
      {
        title: "External Audit",
        description:
          "Independent assurance on financial statements and stakeholder reporting.",
        icon: icons.externalAudit,
      },
      {
        title: "Liquidation Audit",
        description:
          "Audit support during liquidation or closure processes.",
        icon: icons.statutoryAudit,
      },
      {
        title: "Audited Financial Statements for Freezone License Renewal",
        description:
          "Audited financial statements prepared to meet renewal requirements.",
        icon: icons.vatAudit,
      },
    ],
  },

  ACCOUNTING_BOOKKEEPING,

  {
    categoryTitle: "Tax Services",
    services: [
      {
        title: "Corporate Tax Registration / Deregistration",
        description:
          "Registration and deregistration support for corporate tax obligations.",
        icon: icons.corporateTax,
      },
      {
        title: "VAT Tax Registration / Deregistration",
        description: "VAT registration and deregistration support for compliant setup.",
        icon: icons.vatAudit,
      },
      {
        title: "Corporate Tax Return Filing",
        description:
          "Preparation and filing of corporate tax returns.",
        icon: icons.corporateTax,
      },
      {
        title: "VAT Return Filing",
        description: "Accurate VAT return preparation and submission.",
        icon: icons.vatAudit,
      },
      {
        title: "VAT Refund",
        description:
          "Support with VAT refund claims and documentation.",
        icon: icons.vatAudit,
      },
      {
        title: "Excise Return Filing",
        description:
          "Excise return preparation and timely filing.",
        icon: icons.excise,
      },
    ],
  },

  {
    categoryTitle: "Advisory & Consulting",
    services: [
      {
        title: "Financial Reporting Advisory",
        description:
          "Support with financial reporting frameworks, policies, and statement preparation.",
        icon: icons.financial,
      },
      {
        title: "Business Setup & Structuring",
        description:
          "Advisory on company formation, restructuring, and operational setup.",
        icon: icons.inventory,
      },
      {
        title: "Financial Modelling & Forecasting",
        description:
          "Development of financial models, budgets, and projections for planning and investment decisions.",
        icon: icons.cost,
      },
      {
        title: "Governance & Risk Advisory",
        description:
          "Strengthening governance structures, internal controls, and risk management frameworks.",
        icon: icons.internalAudit,
      },
      {
        title: "Process Improvement",
        description:
          "Review and enhancement of financial and operational processes to improve efficiency.",
        icon: icons.inventory,
      },
      {
        title: "Management & Board Reporting",
        description:
          "Preparation of management and board-level reports to support oversight and decision-making.",
        icon: icons.financial,
      },
    ],
  },

  {
    categoryTitle: "Cross-Border & Regional Support",
    services: [
      {
        title: "Ghana-Dubai Coordination",
        description:
          "Seamless coordination of services across Ghana and Dubai offices.",
        icon: icons.externalAudit,
      },
      {
        title: "Cross-Border Advisory",
        description:
          "Advisory support for businesses operating across multiple jurisdictions.",
        icon: icons.externalAudit,
      },
      {
        title: "Regional Compliance Support",
        description:
          "Assistance with regional regulatory and reporting requirements.",
        icon: icons.statutoryAudit,
      },
      {
        title: "International Structuring Support",
        description:
          "Support for business structuring and operational alignment across borders.",
        icon: icons.cost,
      },
      {
        title: "Partner-Led Oversight",
        description:
          "Direct partner involvement to ensure quality, consistency, and accountability.",
        icon: icons.internalAudit,
      },
    ],
  },
];

const GHANA_SERVICES = [
  {
    categoryTitle: "Audit & Assurance",
    services: [
      {
        title: "Statutory & Regulatory Audits",
        description:
          "Independent audits conducted in accordance with applicable standards and statutory requirements.",
        icon: icons.statutoryAudit,
      },
      {
        title: "Internal Audit Services",
        description:
          "Risk-based internal audit reviews to strengthen governance, controls, and operational efficiency.",
        icon: icons.internalAudit,
      },
      {
        title: "Special Purpose Audits",
        description:
          "Tailored audit engagements designed to meet specific stakeholder or regulatory objectives.",
        icon: icons.externalAudit,
      },
      {
        title: "Investigative & Forensic Reviews",
        description:
          "Independent reviews to assess irregularities, fraud risks, or disputed financial matters.",
        icon: icons.externalAudit,
      },
      {
        title: "Donor & Project Audits",
        description:
          "Audits of donor-funded projects and non-profit organisations aligned with donor requirements.",
        icon: icons.vatAudit,
      },
      {
        title: "Financial & Compliance Reviews",
        description:
          "Targeted financial and compliance assessments outside the scope of full statutory audits.",
        icon: icons.statutoryAudit,
      },
    ],
  },
  ACCOUNTING_BOOKKEEPING,
  {
    categoryTitle: "Tax Advisory & Compliance",
    services: [
      {
        title: "Corporate Income Tax",
        description:
          "Tax advisory, computations, and filings to ensure compliance with corporate tax obligations.",
        icon: icons.corporateTax,
      },
      {
        title: "Value Added Tax (VAT)",
        description: "VAT registration, advisory, compliance, and migration support.",
        icon: icons.vatAudit,
      },
      {
        title: "Withholding Tax Advisory",
        description:
          "Guidance on withholding tax obligations, deductions, and statutory reporting.",
        icon: icons.excise,
      },
      {
        title: "Tax Reviews & Health Checks",
        description: "Identification of tax risks, exposures, and compliance gaps.",
        icon: icons.excise,
      },
      {
        title: "GRA Audit Support",
        description:
          "Professional support and representation during tax audits, reviews, and assessments.",
        icon: icons.externalAudit,
      },
      {
        title: "Tax Objections & Advisory",
        description:
          "Assistance with tax objections, reconciliations, and engagement with tax authorities.",
        icon: icons.corporateTax,
      },
    ],
  },
  {
    categoryTitle: "Advisory & Consulting",
    services: [
      {
        title: "Financial Reporting Advisory",
        description:
          "Support with financial reporting frameworks, policies, and statement preparation.",
        icon: icons.financial,
      },
      {
        title: "Business Setup & Structuring",
        description:
          "Advisory on company formation, restructuring, and operational setup.",
        icon: icons.inventory,
      },
      {
        title: "Financial Modelling & Forecasting",
        description:
          "Development of financial models, budgets, and projections for planning and investment decisions.",
        icon: icons.cost,
      },
      {
        title: "Governance & Risk Advisory",
        description:
          "Strengthening governance structures, internal controls, and risk management frameworks.",
        icon: icons.internalAudit,
      },
      {
        title: "Process Improvement",
        description:
          "Review and enhancement of financial and operational processes to improve efficiency.",
        icon: icons.inventory,
      },
      {
        title: "Management & Board Reporting",
        description:
          "Preparation of management and board-level reports to support oversight and decision-making.",
        icon: icons.financial,
      },
    ],
  },
  {
    categoryTitle: "Accounting Software & ERP Implementation",
    services: [
      {
        title: "Accounting Software Setup",
        description:
          "Implementation and configuration of accounting systems aligned with business needs.",
        icon: icons.bookkeeping,
      },
      {
        title: "ERP Implementation Support",
        description:
          "Deployment of ERP solutions to integrate finance, operations, and reporting.",
        icon: icons.inventory,
      },
      {
        title: "System Customisation",
        description:
          "Customisation of accounting and ERP systems to suit operational workflows.",
        icon: icons.cost,
      },
      {
        title: "Data Migration & Cleanup",
        description:
          "Secure migration and validation of financial data from legacy systems.",
        icon: icons.cost,
      },
      {
        title: "User Training & Support",
        description:
          "Training and ongoing support to ensure effective system adoption and usage.",
        icon: icons.financial,
      },
      {
        title: "System Review & Optimisation",
        description:
          "Assessment and optimisation of existing systems to improve performance and controls.",
        icon: icons.inventory,
      },
    ],
  },
  {
    categoryTitle: "Cross-Border & Regional Support",
    services: [
      {
        title: "Ghana-Dubai Coordination",
        description:
          "Seamless coordination of services across Ghana and Dubai offices.",
        icon: icons.externalAudit,
      },
      {
        title: "Cross-Border Advisory",
        description:
          "Advisory support for businesses operating across multiple jurisdictions.",
        icon: icons.externalAudit,
      },
      {
        title: "Regional Compliance Support",
        description:
          "Assistance with regional regulatory and reporting requirements.",
        icon: icons.statutoryAudit,
      },
      {
        title: "International Structuring Support",
        description:
          "Support for business structuring and operational alignment across borders.",
        icon: icons.cost,
      },
      {
        title: "Partner-Led Oversight",
        description:
          "Direct partner involvement to ensure quality, consistency, and accountability.",
        icon: icons.internalAudit,
      },
    ],
  },
];

const SERVICE_CATEGORIES_BY_OFFICE = {
  ghana: GHANA_SERVICES,
  dubai: DUBAI_SERVICES,
};

/* ---------------- ANIMATIONS ---------------- */
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

/* ---------------- SERVICE CARD ---------------- */
const ServiceCard = ({ service }) => {
  const IconComponent = getServiceIcon(service.title);

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start mb-4">
        <div className="p-3 bg-blue-100 rounded-lg mr-4">
          <IconComponent />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">
          {service.title}
        </h3>
      </div>

      {/* Description or list */}
      {service.description ? (
        <p className="text-gray-600 flex-grow">{service.description}</p>
      ) : (
        <ul className="text-gray-600 list-disc list-inside pl-2 flex-grow space-y-1">
          {service.listItems?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */
const AllServicesSection = () => {
  const [officeKey, setOfficeKey] = useState("ghana");

  useEffect(() => {
    const savedOffice = normalizeOfficeKey(localStorage.getItem("office"));
    if (savedOffice && SERVICE_CATEGORIES_BY_OFFICE[savedOffice]) {
      setOfficeKey(savedOffice);
    }

    const handleOfficeChange = (event) => {
      const nextOffice =
        normalizeOfficeKey(event?.detail) ||
        normalizeOfficeKey(localStorage.getItem("office"));
      if (nextOffice && SERVICE_CATEGORIES_BY_OFFICE[nextOffice]) {
        setOfficeKey(nextOffice);
      }
    };

    window.addEventListener("office-changed", handleOfficeChange);
    return () => window.removeEventListener("office-changed", handleOfficeChange);
  }, []);

  const serviceCategories =
    SERVICE_CATEGORIES_BY_OFFICE[officeKey] || GHANA_SERVICES;

  return (
    <div className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {serviceCategories.map((category, index) => (
          <motion.div
            key={category.categoryTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-blue-900 text-center mb-10">
              {category.categoryTitle}
            </h3>

            <div
              className={`grid gap-8 ${
                category.services.length === 3
                  ? "grid-cols-1 md:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {category.services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllServicesSection;
