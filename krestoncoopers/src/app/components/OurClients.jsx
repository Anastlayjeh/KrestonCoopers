"use client";

import React from "react";
import { motion } from "framer-motion";

const BRAND_BLUE = "#04366A";
const ACCENT_BLUE = "14 165 233";

const clientTypes = [
  "Small and Medium-Sized Enterprises (SMEs)",
  "Engineering and construction companies",
  "Trading and FMCG businesses",
  "Educational institutions",
  "Religious and not-for-profit organisations",
  "Donor-funded projects and NGOs",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const OurClientsSection = () => {
  return (
    <div
      className="relative py-16 md:py-24 overflow-hidden bg-slate-50"
      style={{ "--brand-blue": BRAND_BLUE, "--accent-blue": ACCENT_BLUE }}
    >
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-28 right-0 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(4, 54, 106, 0.06), transparent 45%, rgba(14, 165, 233, 0.10))",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1fr_1.3fr] items-start">
          <div className="text-left">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] font-semibold text-slate-500"
            >
              Client Segments
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
              style={{ color: "var(--brand-blue)" }}
            >
              Our Clients
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl"
            >
              We serve a diverse range of clients, including:
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 rounded-xl border border-slate-200/80 bg-white/85 p-5 shadow-sm"
            >
              <div
                className="h-1 w-12 rounded-full mb-4"
                style={{
                  background:
                    "linear-gradient(90deg, rgb(var(--accent-blue) / 0.95), var(--brand-blue))",
                }}
              />
              <p className="text-sm sm:text-base text-slate-600">
                Our clients value us for our practical guidance, regulatory knowledge,
                and dependable delivery.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {clientTypes.map((client) => (
              <motion.div
                key={client}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white/90 p-5 pl-6 shadow-[0_16px_40px_-30px_rgba(4,54,106,0.7)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-30px_rgba(4,54,106,0.8)]"
              >
                <div
                  className="absolute inset-y-0 left-0 w-1"
                  style={{
                    background:
                      "linear-gradient(180deg, rgb(var(--accent-blue) / 0.95), var(--brand-blue))",
                  }}
                />
                <p className="text-sm sm:text-base font-semibold text-slate-800">
                  {client}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurClientsSection;
