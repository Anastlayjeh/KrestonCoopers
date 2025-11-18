// FindUsSection.jsx
import React from 'react';

/**
 * A responsive component to display an office location using Google Maps Embed API.
 * Uses inline styles for a self-contained component.
 * * @param {string} title - The main title of the section (defaults to "Find Us").
 * @param {string} description - The descriptive text below the title.
 * @param {string} location - The address or coordinates used for the map query.
 * @param {string} mapHeight - CSS height value for the map iframe (e.g., "450px").
 * @param {string} apiKey - Your Google Maps Platform API key (required for production).
 */
const FindUsSection = ({
  // --- CORRECTLY DESTRUCTURING PROPS WITH NEW DEFAULT LOCATION ---
  title = "Find Us",
  description = "Visit our office at Fudji Avenue for in-person consultations.",
  location = "Fudji Avenue Accra, Ghana", // <--- UPDATED DEFAULT LOCATION
  mapHeight = "450px",
  apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY // Remember to pass your API key via environment variables!
}) => {
  
  // --- 1. Utility & Configuration ---
  
  // Construct the Google Maps Embed URL, including the API key for authentication.
  // The location string is safely URL-encoded.
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(location)}&zoom=15&key=${apiKey}`;

  // --- 2. Inline Styles for Responsiveness and Aesthetics ---

  const styles = {
    section: {
      textAlign: 'center',
      padding: '60px 20px',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '2.8em', 
      fontWeight: '700',
      color: '#333',
      marginBottom: '15px',
    },
    description: {
      fontSize: '1.15em',
      color: '#555',
      maxWidth: '700px',
      margin: '0 auto 40px auto',
    },
    mapContainer: {
      maxWidth: '1000px',
      margin: '0 auto',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    },
    iframe: {
      display: 'block',
      width: '100%',
      height: mapHeight,
      border: 0,
    }
  };

  // --- 3. Component Render ---

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>{description}</p>

      <div style={styles.mapContainer}>
        <iframe
          title={`Office Location Map for ${location}`}
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