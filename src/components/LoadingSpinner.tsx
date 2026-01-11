// components/LoadingSpinner.tsx
import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-container">
      <img
        className="loading-logo"
        src="https://static.igem.wiki/teams/5590/socials/logo-letter-recadre-transparent.webp"
        alt="Pyronix logo"
      />
      <p className="loading-text">Cooling the flames of impatience…</p>
      <div className="spinner" />
      
    </div>
  );
};

export default LoadingSpinner;
