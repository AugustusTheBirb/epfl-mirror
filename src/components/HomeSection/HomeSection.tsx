import React from 'react';
import { Link } from 'react-router-dom';
import './HomeSection.css';

interface NavigationLink {
  href: string;
  label: string;
}

interface ContentSection {
  title: string;
  content: string;
  listItems?: string[];
}

interface HomeSectionProps {
  sectionName: string;
  welcomeMessage?: string;
  navigationTitle?: string;
  navigationLinks: NavigationLink[];
  contentSections?: ContentSection[];
  children?: React.ReactNode;
}

const HomeSection: React.FC<HomeSectionProps> = ({
  sectionName,
  welcomeMessage,
  navigationTitle = "Explore Our Work",
  navigationLinks,
  contentSections = [],
  children
}) => {
  return (
    <div className="home-section-container">
      {/* Section name */}
      <h1 className="home-section-title">{sectionName}</h1>
      
      {/* Welcome message */}
      {welcomeMessage && (
        <div className="home-welcome-section">
          <p className="home-welcome-message">{welcomeMessage}</p>
        </div>
      )}
      
      {/* Navigation links */}
      <div className="home-navigation-section">
        <h3 className="home-navigation-title">{navigationTitle}</h3>
        <div className="home-navigation-links">
          {navigationLinks.map((link, index) => {
            const isExternal = link.href.startsWith('http');
            const hasFragment = link.href.includes('#');
            
            if (isExternal) {
              return (
                <a
                  key={index}
                  href={link.href}
                  className="home-nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              );
            } else if (hasFragment) {
              // Use regular anchor tag for links with fragments
              return (
                <a
                  key={index}
                  href={link.href}
                  className="home-nav-link"
                >
                  {link.label}
                </a>
              );
            } else {
              return (
                <Link key={index} to={link.href} className="home-nav-link">
                  {link.label}
                </Link>
              );
            }
          })}
        </div>
      </div>

      {/* Content sections */}
      {contentSections.map((section, index) => (
        <div key={index} className="home-content-section">
          <h3 className="home-content-title">{section.title}</h3>
          <p className="home-content-text">{section.content}</p>
          {section.listItems && (
            <ul className="home-content-list">
              {section.listItems.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      {/* Nested routes or additional content */}
      {children}
    </div>
  );
};

export default HomeSection;
