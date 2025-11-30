"use client";

import React from "react";
import { motion } from "framer-motion";

/* ---------------- ICONS PLACEHOLDERS ---------------- */
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

/* ---------------- SERVICE DATA (FIXED) ---------------- */
const serviceCategories = [
  {
    categoryTitle: "Accounting & Bookkeeping",
    services: [
      {
        title: "Management Accounting",
        description:
          "Strategic financial insights for effective decision making.",
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
  },

  {
    categoryTitle: "Tax Services",
    services: [
      {
        title: "Corporate Tax Registration in Dubai",
        listItems: ["How to Register for UAE Corporate Tax in 2025"],
        icon: icons.corporateTax,
      },
      {
        title: "Freezone Corporate Tax",
        listItems: ["A Complete Guide for Businesses"],
        icon: icons.excise,
      },
      {
        title: "Trial Balance & Profit and Loss Statements",
        listItems: [
          "Vital for accurate accounting and corporate tax compliance",
        ],
        icon: icons.excise,
      },
      {
        title: "Stockpile Audit",
        listItems: ["Comprehensive assessment of excise tax stockpile records"],
        icon: icons.excise,
      },
      {
        title: "Excise Tax De-Registration",
        listItems: ["Streamlining the de-registration process"],
        icon: icons.excise,
      },
      {
        title: "Excise Return Filing",
        listItems: ["Accurate and timely excise return filing"],
        icon: icons.excise,
      },
      {
        title: "Excise Declaration",
        listItems: ["Get FTA excise tax approval fast and hassle-free."],
        icon: icons.excise,
      },
      {
        title: "Excise Goods Registration",
        listItems: ["FTA product registration made simple."],
        icon: icons.excise,
      },
    ],
  },

  {
    categoryTitle: "Auditing Services",
    services: [
      {
        title: "Internal Audit",
        description:
          "Independent assessment of your organization’s internal controls.",
        icon: icons.internalAudit,
      },
      {
        title: "External Audit",
        description:
          "Independent financial statement verification for stakeholders.",
        icon: icons.externalAudit,
      },
      {
        title: "Compliance Audit",
        description:
          "Verifying adherence to regulations and industry standards.",
        icon: icons.externalAudit,
      },
      {
        title: "Inventory Control",
        description:
          "Ensure regulatory compliance and optimize inventory systems.",
        icon: icons.externalAudit,
      },
      {
        title: "Sales Audit",
        description: "Accurate assessment of sales processes and performance.",
        icon: icons.statutoryAudit,
      },
      {
        title: "IFRS Implementation",
        description:
          "Implementing International Financial Reporting Standards.",
        icon: icons.vatAudit,
      },
    ],
  },
];

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
const ServiceCard = ({ service }) => (
  <motion.div
    variants={cardVariants}
    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow"
  >
    <div className="flex items-start mb-4">
      <div className="p-3 bg-blue-100 rounded-lg mr-4">{service.icon}</div>
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

/* ---------------- MAIN COMPONENT ---------------- */
const AllServicesSection = () => {
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
