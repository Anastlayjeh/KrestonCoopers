"use client";



import React from 'react';

import { motion } from 'framer-motion';



// Component for the map visualization (simplified placeholder)

const GlobalMapPlaceholder = () => (

  <div className="p-4 sm:p-6 bg-gray-100 rounded-lg shadow-xl h-full flex items-center justify-center">

    <div className="w-full aspect-square md:aspect-[4/3] bg-blue-900 rounded-md overflow-hidden">

      {/* In a real project, replace this with a complex SVG map

        or an image of the world map (like the one in your image).

      */}

      <img
        src="/images/World.webp"
        alt="World map"
        className="w-full h-full object-cover object-center block"
      />

    </div>

  </div>

);



// Animation variants

const fadeIn = {

  hidden: { opacity: 0, y: 30 },

  visible: {

    opacity: 1,

    y: 0,

    transition: {

      duration: 0.7,

      ease: "easeOut"

    }

  },

};



const GlobalNetworkSection = () => {

  return (

    <div className="py-16 md:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

         

          {/* 1. Text Content Column (Left) */}

          <div className="order-2 lg:order-1">

            <motion.div

              initial="hidden"

              whileInView="visible"

              viewport={{ once: true, amount: 0.2 }}

              variants={fadeIn}

            >

              <h2 className="text-4xl font-bold text-blue-900 mb-4">

                Global Presence

              </h2>

              <div className="w-16 h-1 bg-blue-500 mb-6"></div>



              <p className="text-gray-700 mb-6 md:text-lg">

                Kreston Coopers operates with a growing international outlook through its direct presence in Ghana and Dubai, enabling us to support clients with cross-border operations and regional business interests.

              </p>

             

              <p className="text-gray-700 mb-8 md:text-lg">

                Our structure allows us to deliver consistent professional standards, clear communication, and practical advisory support across jurisdictions, while retaining the responsiveness and personalised service of a partner-led firm.

              </p>



              <h3 className="text-xl font-bold text-blue-900 mb-4 mt-8">

                Regional Coverage

              </h3>



              <div className="flex items-start mb-6">

                <motion.div

                  className="mr-4 text-blue-600"

                  initial={{ scale: 0 }}

                  whileInView={{ scale: 1 }}

                  viewport={{ once: true, amount: 0.5 }}

                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}

                >

                  {/* Globe Icon Placeholder */}

                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">

                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.41-7-7.93h2c0 3.03 2.47 5.5 5.5 5.5V19.93zm6-2.06V14.5c0-1.38-1.12-2.5-2.5-2.5S11 13.12 11 14.5v3.37c3.95-.49 7-3.41 7-7.93h-2c0 3.03-2.47 5.5-5.5 5.5V16.94z"/>

                  </svg>

                </motion.div>

                <div>

                  <h4 className="font-bold text-lg text-blue-900">Ghana Office</h4>

                  <p className="text-gray-600">Serving local and regional clients with strong knowledge of Ghanaian regulatory, tax, and reporting frameworks.</p>

                </div>

              </div>



              <div className="flex items-start mb-6">

                <motion.div

                  className="mr-4 text-blue-600"

                  initial={{ scale: 0 }}

                  whileInView={{ scale: 1 }}

                  viewport={{ once: true, amount: 0.5 }}

                  transition={{ type: "spring", stiffness: 200, delay: 0.4 }}

                >

                  {/* Expertise/Building Icon Placeholder */}

                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">

                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>

                  </svg>

                </motion.div>

                <div>

                  <h4 className="font-bold text-lg text-blue-900">Dubai Office</h4>

                  <p className="text-gray-600">Supporting clients with Middle East business interests, international structuring, advisory coordination, and cross-border compliance requirements.</p>

                </div>

              </div>



              <h3 className="text-xl font-bold text-blue-900 mb-4 mt-8">

                Cross-Border Capability

              </h3>

              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Direct coordination between Ghana and Dubai offices</li>
                <li>Practical support for businesses operating across multiple jurisdictions</li>
                <li>Strong understanding of international financial reporting and regulatory expectations</li>
                <li>Seamless communication and partner-level oversight on all engagements</li>
              </ul>



            </motion.div>

          </div>



          {/* 2. Image/Map Column (Right) */}

          <div className="order-1 lg:order-2">

            <motion.div

              initial={{ x: 50, opacity: 0 }}

              whileInView={{ x: 0, opacity: 1 }}

              viewport={{ once: true, amount: 0.4 }}

              transition={{ duration: 0.8, ease: "easeOut" }}

            >

              <GlobalMapPlaceholder />

            </motion.div>

          </div>

        </div>

      </div>

    </div>

  );

};



export default GlobalNetworkSection;
