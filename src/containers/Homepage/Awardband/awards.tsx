import React from 'react';
import './awards.css';

const awards = [
  { 
    icon: 'https://static.igem.wiki/teams/5590/awards/firstrunner.avif', 
    label: 'First Runner-Up' 
  },
  { 
    icon: 'https://static.igem.wiki/teams/5590/awards/climate.avif', 
    label: 'Best Climate Crisis Project' 
  },
  { 
    icon: 'https://static.igem.org/websites/common/2022/icons/awards/top10-color.svg', 
    label: 'Top 10 Project' 
  },
  { 
    icon: 'https://static.igem.wiki/teams/5590/awards/sustainable-development-impact.svg', 
    label: 'Best Sustainable Development' 
  }, 
  { 
    icon: 'https://static.igem.wiki/teams/5590/awards/measurement.svg', 
    label: 'Best Measurement' 
  },
  { 
    icon: 'https://static.igem.wiki/teams/5590/awards/software-tool.svg', 
    label: 'Best Software Tool' 
  },
  { 
    icon: 'https://static.igem.wiki/teams/5590/awards/wiki.svg', 
    label: 'Best Wiki' 
  },
  { 
    icon: 'https://static.igem.wiki/teams/5590/awards/presentation.svg', 
    label: 'Best Presentation' 
  },
  { 
    icon: 'https://static.igem.org/websites/common/2023/icons/medal-flat.svg', 
    label: 'Gold Medal' 
  },
];

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