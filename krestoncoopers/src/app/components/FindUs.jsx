// FindUsSection.jsx
"use client";

import React, { useEffect, useState } from "react";

/**
 * A responsive component to display an office location using Google Maps Embed API.
 * ... (other JSDoc omitted for brevity)
 */
const OFFICE_LOCATIONS = {
  ghana: {
    description: "Visit our office at Fudji Avenue for in-person consultations.",
    location: "Fudji Avenue Accra, Ghana",
  },
  dubai: {
    description: "Visit our office at Emaar Square, Building 6 for in-person consultations.",
    location: "Emaar Square, Building 6, Dubai, UAE",
  },
};

const normalizeOfficeKey = (value) => (value === "uae" ? "dubai" : value);

const FindUsSection = ({
  title = "Find Us",
  mapHeight = "450px",
  apiKey = "AIzaSyD0q5xWi9J3WtHm4wh5D72fNnjSb9jmhbc",
}) => {
  const [officeKey, setOfficeKey] = useState("ghana");

  useEffect(() => {
    const savedOffice = normalizeOfficeKey(localStorage.getItem("office"));
    if (savedOffice && OFFICE_LOCATIONS[savedOffice]) {
      setOfficeKey(savedOffice);
    }

    const handleOfficeChange = (event) => {
      const nextOffice = normalizeOfficeKey(event?.detail);
      if (nextOffice && OFFICE_LOCATIONS[nextOffice]) {
        setOfficeKey(nextOffice);
      }
    };

    window.addEventListener("office-changed", handleOfficeChange);
    return () => window.removeEventListener("office-changed", handleOfficeChange);
  }, []);
  
  // --- 1. Utility & Configuration ---

  const currentOffice = OFFICE_LOCATIONS[officeKey] || OFFICE_LOCATIONS.ghana;
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(currentOffice.location)}&zoom=15&key=${apiKey}`;

  // --- 2. Inline Styles for Responsiveness and Aesthetics ---
  // ... (styles object omitted for brevity)

  const styles = {
    // ... (Your existing styles)
    section: {
        textAlign: "center",
        padding: "60px 20px",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
      },
      title: {
        fontSize: "2.8em",
        fontWeight: "700",
        color: "#333",
        marginBottom: "15px",
      },
      description: {
        fontSize: "1.15em",
        color: "#555",
        maxWidth: "700px",
        margin: "0 auto 40px auto",
      },
      mapContainer: {
        maxWidth: "1000px",
        margin: "0 auto",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
      },
      iframe: {
        display: "block",
        width: "100%",
        height: mapHeight,
        border: 0,
      }
  };

  // --- 3. Component Render ---

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>{currentOffice.description}</p>

      <div style={styles.mapContainer}>
        <iframe
          title={`Office Location Map for ${currentOffice.location}`}
          aria-label="Office Location Map"
          src={googleMapsEmbedUrl}
          style={styles.iframe}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default FindUsSection;
