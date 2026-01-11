import React from 'react';

const ThreeCircles: React.FC = () => {
  return (
    <section className="three-circles-wrapper" aria-label="Business model overview">
      <div className="three-circles">
        <div className="circle circle-signal">
          <div className="circle-label">Signal</div>
          <div className="circle-inner" style={{ color: 'var(--color-dark-orange)' }}>
            <p>
              In 2025 alone, over 102 million hectares burned. The U.S. saw a 92% year-over-year
              surge in incidents: 16'380 fires consuming more than 810'000 acres by early April (1)
              and Canada braved record-breaking fires, with over 7.25 million hectares scorched by
              early August — nearly 3 times the 10‑year seasonal average (2). These blazes have
              driven suppression costs past 1.9 billion and left ecosystems contaminated by toxic
              polymers and surfactants.
            </p>
            <p className="circle-emphasis">These demand an eco-safe, high-performance response.</p>
          </div>
        </div>

        <div className="circle circle-shield">
          <div className="circle-label left">Shield</div>
          <div className="circle-inner">
            <p>
              Enter our synthetic hydrogel, a fully biodegradable, toxin-free barrier that clings to
              vegetation and infrastructure. By harnessing engineered biopolymers, we eliminate
              runoff hazards, aquatic toxicity, and polymer residues, giving fire agencies a truly
              green line of defence.
            </p>
          </div>
        </div>

        <div className="circle circle-scale">
          <div className="circle-label right">Scale</div>
          <div className="circle-inner">
            <p>
              Our business plan maps a clear path from pilot deployments with federal and state
              agencies to nationwide roll-outs via B2G contracts, licensing deals with
              specialty-chemical partners, and subscription-based reapplication services. Backed by
              modular facilities deals and seasoned procurement teams, we aim to capture a rapidly
              expanding slice of the $3 billion annual wildfire-suppression market while delivering
              positive environmental impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeCircles;
