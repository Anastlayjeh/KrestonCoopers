"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const statsData = [
  { value: "85+", label: "Trusted Clients" },
  { value: "10+", label: "Awards" },
  { value: "25+", label: "Expert Advisor" },
  { value: "500+", label: "Solutions Delivered" },
];

export default function StatsSection() {
  return (
    <div className="bg-blue-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-x-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <p className="text-white text-5xl sm:text-6xl font-extrabold mb-2">
                {stat.value}
              </p>
              <p className="text-white text-base sm:text-lg opacity-80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
