import React from 'react';
import Citation from '../../components/References/Citation';

const BusinessModelSummary: React.FC = () => {
  return (
    <section className="apple-business-hero" aria-labelledby="business-model-heading">
      <h2 id="business-model-heading" className="apple-hero-title">Business Model Overview</h2>

      <div className="apple-circles" role="region" aria-label="Signal, Shield and Scale summary">
        <article className="apple-circle apple-circle--signal" aria-labelledby="signal-title" tabIndex={0}>
          <h3 id="signal-title" className="apple-circle-title">Signal <span className="apple-circle-chevron" aria-hidden="true">▾</span></h3>
          <div className="apple-circle-body">
            <p>
              In 2025 alone, over 102 million hectares burned. The U.S. saw a 92% year-over-year
              surge in incidents: 16'380 fires consuming more than 810'000 acres by early April <Citation id="1" /> and
              Canada braved record-breaking fires, with over 7.25 million hectares scorched by early
              August — nearly 3 times the 10‑year seasonal average <Citation id="2" />. These blazes have driven
              suppression costs past $1.9 billion and left ecosystems contaminated by toxic polymers
              and surfactants.
            </p>
            <p className="apple-circle-emphasis">These demand an eco-safe, high-performance response.</p>
          </div>
        </article>

        <article className="apple-circle apple-circle--shield" aria-labelledby="shield-title" tabIndex={0}>
          <h3 id="shield-title" className="apple-circle-title">Shield <span className="apple-circle-chevron" aria-hidden="true">▾</span></h3>
          <div className="apple-circle-body">
            <p>
              Enter our synthetic hydrogel, a fully biodegradable, toxin-free barrier that clings to
              vegetation and infrastructure. By harnessing engineered biopolymers, we eliminate
              runoff hazards, aquatic toxicity, and polymer residues, giving fire agencies a truly
              green line of defence.
            </p>
          </div>
        </article>

        <article className="apple-circle apple-circle--scale" aria-labelledby="scale-title" tabIndex={0}>
          <h3 id="scale-title" className="apple-circle-title">Scale <span className="apple-circle-chevron" aria-hidden="true">▾</span></h3>
          <div className="apple-circle-body">
            <p>
              Our business plan maps a clear path from pilot deployments with federal and state
              agencies to nationwide roll-outs via B2G contracts, licensing deals with
              specialty-chemical partners, and subscription-based reapplication services. Backed by
              modular facilities deals and seasoned procurement teams, we aim to capture a rapidly
              expanding slice of the wildfire-suppression market while delivering positive
              environmental impact.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BusinessModelSummary;
