"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- Icon Placeholders ---
// Replace these with actual React Icons (e.g., from 'react-icons/fa' or 'react-icons/ai')
const icons = {
  // Accounts & Bookkeeping
  financial: <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-8c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"/></svg>,
  bookkeeping: <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z"/></svg>,
  cost: <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>,
  inventory: <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-12H8v2h8v-2zm-4 7h-2v-4h-4v-2h6v6z"/></svg>,

  // Tax Services
  corporateTax: <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>,
  vat: <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4.75-9.5c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25S6 13.19 6 12.5s.56-1.25 1.25-1.25zM12 8.5c-.69 0-1.25.56-1.25 1.25S11.31 11 12 11s1.25-.56 1.25-1.25S12.69 8.5 12 8.5zM16.75 11.25c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25z"/></svg>,
  excise: <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>,

  // Auditing Services
  internalAudit: <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>,
  externalAudit: <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-4h8v-2H8v2zm0-3h8v-2H8v2z"/></svg>,
  statutoryAudit: <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>,
  vatAudit: <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3-6H9V7h6v4z"/></svg>,
};
// --- End Icon Placeholders ---


const serviceCategories = [
  {
    categoryTitle: "Accounts & Bookkeeping",
    services: [
      { 
        title: "Financial Accounting", 
        description: "Complete financial record management and reporting solutions", 
        icon: icons.financial 
      },
      { 
        title: "Bookkeeping", 
        description: "Accurate daily transaction recording and account reconciliation", 
        icon: icons.bookkeeping 
      },
      { 
        title: "Cost Accounting", 
        description: "Detailed cost analysis and management accounting services", 
        icon: icons.cost 
      },
      { 
        title: "Inventory Control", 
        description: "Efficient inventory tracking and valuation systems", 
        icon: icons.inventory 
      },
    ],
  },
  {
    categoryTitle: "Tax Services",
    services: [
      { 
        title: "Corporate Tax", 
        listItems: ["Tax Registration", "Filing & Compliance", "Tax Planning", "Advisory Services"],
        icon: icons.corporateTax 
      },
      { 
        title: "VAT Services", 
        listItems: ["VAT Registration", "Return Filing", "VAT Advisory", "Documentation"],
        icon: icons.vat 
      },
      { 
        title: "Excise Tax", 
        listItems: ["Registration", "Filing Services", "Declarations", "Compliance"],
        icon: icons.excise 
      },
      // Note: Only 3 items in the Tax Services row in the image
    ],
  },
  {
    categoryTitle: "Auditing Services",
    services: [
      { 
        title: "Internal Audit", 
        description: "Comprehensive internal control and risk assessment", 
        icon: icons.internalAudit 
      },
      { 
        title: "External Audit", 
        description: "Independent financial statement auditing services", 
        icon: icons.externalAudit 
      },
      { 
        title: "Statutory Audit", 
        description: "Mandatory audit compliance and regulatory requirements", 
        icon: icons.statutoryAudit 
      },
      { 
        title: "VAT Audit", 
        description: "Specialized VAT compliance and audit services", 
        icon: icons.vatAudit 
      },
    ],
  },
];

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};


// Component for a single service card
const ServiceCard = ({ service }) => (
  <motion.div
    variants={cardVariants}
    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow duration-300"
  >
    <div className="flex items-start mb-4">
      <div className="p-3 bg-blue-100 rounded-lg mr-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 pt-1">{service.title}</h3>
    </div>

    {/* Render Description or List based on data */}
    {service.description ? (
      <p className="text-gray-600 mb-4 flex-grow">
        {service.description}
      </p>
    ) : (
      <ul className="text-gray-600 space-y-1 mb-4 flex-grow list-disc list-inside text-sm pl-2">
        {service.listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}

   
  </motion.div>
);


const AllServicesSection = () => {
  return (
    <div className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Overall Main Header */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-blue-900 mb-2">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive accounting and advisory solutions
          </p>
        </motion.header>

        {/* --- Service Categories --- */}
        {serviceCategories.map((category, index) => (
          <motion.div
            key={category.categoryTitle}
            className={`mb-16 md:mb-24 ${index > 0 ? 'pt-8' : ''}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            {/* Category Title */}
            <h3 className="text-3xl font-bold text-blue-900 text-center mb-10">
              {category.categoryTitle}
            </h3>

            {/* Service Grid */}
            <div className={`grid gap-8 ${
                category.services.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 
                'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            }`}>
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