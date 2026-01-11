import React from "react";
import "./pagehead.css";

type PageHeadProps = {
  title: string;
  subtitle?: string;
  backgroundUrl: string;
  grayscale?: boolean;
};

const PageHead: React.FC<PageHeadProps> = ({ title, subtitle, backgroundUrl, grayscale }) => {
  return (
    <header className="hardware-hero">
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${backgroundUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          filter: grayscale ? 'grayscale(100%)' : 'none',
          zIndex: 1
        }}
      />
      <div className="hardware-hero-overlay" style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="titlestyle">{title}</h1>
        {subtitle && <p className="bodystyle">{subtitle}</p>}
      </div>
    </header>
  );
};

export default PageHead;