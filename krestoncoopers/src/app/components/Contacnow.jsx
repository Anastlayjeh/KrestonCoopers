// CtaSectionColorMatched.tsx

"use client"; // IMPORTANT: Keep this at the top

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// ... (Your containerVariants and itemVariants remain the same) ...
// 

const CtaSectionColorMatched = () => {
    // 1. New State to track if the component has mounted
    const [isMounted, setIsMounted] = useState(false);

    // 2. Set isMounted to true after the first render (on the client)
    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    // 3. Conditional Render: Render the motion component only if mounted.
    // This allows the server to render the static container section
    // but delays the hydration of the dynamic 'motion' elements.
    if (!isMounted) {
        // Render a static, un-animated version on the server/initial client load
        // This MUST exactly match the structure of the final component when not using 'motion'
        return (
            <section 
                className="bg-[#112F6C] py-16 md:py-24 text-white text-center overflow-hidden"
            >
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-base sm:text-lg font-light mb-8 md:mb-10 max-w-3xl mx-auto">
                        Get in touch to discuss your accounting needs and discover how we can help your business thrive.
                    </p>
                    <div>
                        <button className="bg-white text-[#112F6C] font-semibold py-3 px-8 rounded-lg shadow-xl">
                            Contact Us Today
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="
                bg-[#112F6C]             /* Custom dark blue from the image */
                py-16 md:py-24
                text-white
                text-center
                overflow-hidden
            "
        >
            {/* ... (Rest of your motion components here) ... */}
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Title */}
                <motion.h2 
                    variants={itemVariants} 
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
                >
                    Ready to Get Started?
                </motion.h2>

                {/* Subtext */}
                <motion.p 
                    variants={itemVariants} 
                    className="text-base sm:text-lg font-light mb-8 md:mb-10 max-w-3xl mx-auto"
                >
                    Get in touch to discuss your accounting needs and discover how we can help your business thrive.
                </motion.p>

                {/* Button Container/Wrapper for spacing */}
                <motion.div variants={itemVariants}>
                    <button
                        onClick={() => console.log('Contact Us Clicked')}
                        className="bg-white text-[#112F6C] font-semibold py-3 px-8 rounded-lg shadow-xl transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-2xl transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-white/50"
                    >
                        Contact Us Today
                    </button>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default CtaSectionColorMatched;
