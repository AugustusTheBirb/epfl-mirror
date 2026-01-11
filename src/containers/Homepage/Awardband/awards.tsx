import React from 'react';
import './awards.css';

const awards = [];

const AwardsTicker: React.FC = () => {
  // Duplicate awards for seamless infinite scroll
  const duplicatedAwards = [...awards, ...awards];

  return (
    <div className="awards-ticker">
      <div className="awards-ticker-inner">
        {duplicatedAwards.map((award, index) => (
          <React.Fragment key={index}>
            <div className="awards-ticker-item">
              <img 
                src={award.icon} 
                alt={award.label} 
                className="awards-ticker-icon" 
              />
              <span>{award.label}</span>
            </div>
            <div className="awards-ticker-dot" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AwardsTicker;