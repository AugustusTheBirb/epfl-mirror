import React, { useState, useEffect } from "react";
import "./entrepreneur.css";
import PageHead from "../../components/Head/PageHead";
import ReferencesDropdown from "../Homepage/References/references";
import Citation from "../../components/References/Citation";
import { Reference } from "../../components/References/ReferenceList";
import BusinessModelSummary from "./BusinessModelSummary";
import { useLocation } from "react-router-dom";


const entrepreneurReferenceList: Reference[] = [
  {
    id: '1',
    text: 'J. Clarke, “Canada’s wildfires fuel the climate crisis,” <em>Counterfire</em>, Jul. 31, 2025. <a href="https://www.counterfire.org/article/canadas-wildfires-fuel-the-climate-crisis/" target="_blank" rel="noopener noreferrer">https://www.counterfire.org/article/canadas-wildfires-fuel-the-climate-crisis/</a>'
  },
  {
    id: '2',
    text: '“2025 Canadian wildfires,” <em>Wikipedia</em>, Sep. 16, 2025. <a href="https://en.wikipedia.org/wiki/2025_Canadian_wildfires" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/2025_Canadian_wildfires</a>'
  },
  {
    id: '3',
    text: '<em>Wildfire Protection System Market Size | Trends [2025–2033]</em>, Business Research Insights, Sep. 8, 2025. <a href="https://www.businessresearchinsights.com/market-reports/wildfire-protection-system-market-118395" target="_blank" rel="noopener noreferrer">https://www.businessresearchinsights.com/market-reports/wildfire-protection-system-market-118395</a>'
  },
  {
    id: '4',
    text: '<em>Bio-based Flame Retardants Market’s Evolutionary Trends 2025–2033</em>, Data Insights Market, Jun. 20, 2025. <a href="https://www.datainsightsmarket.com/reports/bio-based-flame-retardants-244200" target="_blank" rel="noopener noreferrer">https://www.datainsightsmarket.com/reports/bio-based-flame-retardants-244200</a>'
  },
  {
    id: '5',
    text: 'U.S. Department of the Interior, <em>Budget Justifications and Performance Information FY 2025: Office of Wildland Fire</em>, Mar. 2024. <a href="https://www.doi.gov/sites/default/files/documents/2024-03/fy2025-508-owf-greenbook.pdf" target="_blank" rel="noopener noreferrer">https://www.doi.gov/.../fy2025-508-owf-greenbook.pdf</a>'
  },
  {
    id: '6',
    text: 'Government of Canada, “Canada invests in wildfire innovation and resilience through new Centre of Excellence,” <em>Canada.ca</em>, Jul. 18, 2025. <a href="https://www.canada.ca/en/natural-resources-canada/news/2025/07/canada-invests-in-wildfire-innovation-and-resilience-through-new-centre-of-excellence.html" target="_blank" rel="noopener noreferrer">https://www.canada.ca/...</a>'
  },
  {
    id: '7',
    text: 'European Court of Auditors, <em>Special Report 16/2025: EU funding to tackle forest fires</em>, Luxembourg, 2025. <a href="https://www.eca.europa.eu/ECAPublications/SR-2025-16/SR-2025-16_EN.pdf" target="_blank" rel="noopener noreferrer">https://www.eca.europa.eu/ECAPublications/SR-2025-16/SR-2025-16_EN.pdf</a>'
  },
  {
    id: '8',
    text: 'Commonwealth of Australia, <em>Budget Paper No. 2: Budget Measures 2025–26</em>, Mar. 25, 2025. <a href="https://budget.gov.au/content/bp2/download/bp2_2025-26.pdf" target="_blank" rel="noopener noreferrer">https://budget.gov.au/content/bp2/download/bp2_2025-26.pdf</a>'
  },
  {
    id: '9',
    text: 'A. Burden, “Stylo sur papier,” Unsplash, n.d. <a href="https://unsplash.com/photos/stylo-sur-papier-6EnTPvPPL6I" target="_blank" rel="noopener noreferrer">https://unsplash.com/photos/stylo-sur-papier-6EnTPvPPL6I</a>'
  }

  
];

interface ExpandableTextProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ title, isOpen, onToggle, children }) => {
  const [hover, setHover] = useState(false);
  const [focused, setFocused] = useState(false);

  const active = isOpen || hover || focused;
  const titleColor = active ? 'var(--color-dark-orange)' : 'var(--color-whitish)';

  return (
    <>
      <button
        onClick={onToggle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.8rem 1rem',
          color: 'var(--color-whitish)',
          textDecoration: 'none',
          transition: 'all 0.15s ease',
          borderLeft: '2px solid var(--color-dark-orange)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
          textAlign: 'left'
        }}
      >
        <div
          style={{
            minWidth: '6px',
            height: '6px',
            backgroundColor: 'var(--color-dark-orange)',
            borderRadius: '50%',
            marginRight: '1rem',
            flexShrink: 0
          }}
        ></div>
        <span style={{ fontSize: '1.3rem', fontWeight: '400', color: titleColor, transition: 'color 150ms ease' }}>
          {title}
        </span>
        <span
          aria-hidden="true"
          style={{
            marginLeft: 'auto',
            transition: 'transform 200ms ease',
            transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
            fontSize: '0.95rem',
            opacity: 0.85
          }}
        >
          ▾
        </span>
      </button>
      {isOpen && (
        <div style={{ marginTop: '0.3rem', marginBottom: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
          {children}
        </div>
      )}
    </>
  );
};


interface PDFLinkProps {
  url: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
}

const PDFLink: React.FC<PDFLinkProps> = ({ url, title, isOpen, onToggle }) => (
  <>
    <button 
      onClick={onToggle}
      style={{ 
        display: 'flex',
        alignItems: 'center',
        padding: '0.8rem 1rem',
        color: 'var(--color-whitish)',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        borderLeft: '2px solid var(--color-dark-orange)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'left'
      }}>
      <div style={{ 
        minWidth: '6px', 
        height: '6px', 
        backgroundColor: 'var(--color-dark-orange)', 
        borderRadius: '50%', 
        marginRight: '1rem',
        flexShrink: 0
      }}></div>
      <span style={{ fontSize: '1.3rem', fontWeight: '400' }}>{title}</span>
      <span
        aria-hidden="true"
        style={{
          marginLeft: 'auto',
          transition: 'transform 200ms ease',
          transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
          fontSize: '0.95rem',
          opacity: 0.85
        }}
      >▾</span>
    </button>
    {isOpen && (
      <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
        <iframe 
          src={url}
          width="100%"
          height="600px"
          style={{ border: '1px solid #ccc', borderRadius: '8px' }}
          title={`${title} Document`}
        />
      </div>
    )}
  </>
);

const BusinessStrategy: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openPdf, setOpenPdf] = useState<string | null>(null);
  const {hash} = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const togglePdf = (pdfUrl: string) => {
    setOpenPdf(openPdf === pdfUrl ? null : pdfUrl);
  };
  


  return (
    <div className="proof-container">
      <PageHead
        title="Business Strategy & Market Analysis"
        subtitle="Comprehensive business model, market validation, and commercialization roadmap"
        backgroundUrl="https://static.igem.wiki/teams/5590/entrepreneur/entrepheader.webp"
      />

      <div className="hardware-layout">
        {/* Sidebar Navigation */}  
        <aside className="hardware-sidebar">
          <div className="sidebar-title">Table of Contents</div>
          <nav>
            <ul>
              <li><a className="sidebar-button" href="#circles">Business Model</a></li>
              <li><a className="sidebar-button" href="#analysis">Business Analysis</a></li>
              <li><a className="sidebar-button" href="#approach">Our Approach</a></li>
              <li><a className="sidebar-button" href="#impacts">Long-Term Impacts</a></li>
              <li><a className="sidebar-button" href="#documents">Business Documents</a></li>
            </ul>
          </nav>
        </aside>

        <section className="hardware-main proof-section">
          
          {/* Modern Entrepreneurship Cards */}
          <div className="proof-block" id="circles">
            <BusinessModelSummary />
          </div>

          {/* Protocol-style expandable sections */}
          <div className="proof-block" id="analysis">
            <h2>Business Analysis</h2>
            
            <div style={{ 
              marginTop: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
            className="interactive-link"
            >
              <ExpandableText 
                title="Potential customers and unmet needs"
                isOpen={openSection === 'customers'}
                onToggle={() => toggleSection('customers')}
              >
                <p style={{ fontWeight: 400 }}>
                Government agencies on the front lines of wildfire prevention are constrained by harmful, fragmented methods, our approach offers a safer path forward.
                We serve government agencies at every level : national, regional, and municipal, whose mandates include wildfire prevention, land management, and emergency response.
                These organizations grapple with fragmented detection network, and reliance on chemical retardants that pose environmental and public health risks.
                If current chemical-based solutions remain in use, the cumulative toxicity in soil, water, and air will exacerbate respiratory illnesses, contaminate drinking supplies, disrupt wildlife habitats, and intensify fire severity and frequency, deepening ecosystem damage and public health challenges.                </p>
                </ExpandableText>

              <ExpandableText 
                title="Technical feasibility, scalability of the solution"
                isOpen={openSection === 'feasibility'}
                onToggle={() => toggleSection('feasibility')}
              >
                <p style={{ fontWeight: 400 }}>
                  We’ve proven core feasibility by building and testing an end-to-end prototype both, which was tested both mechanically (drone) and biologically (hydrogel).
                </p>

                <p style={{ fontWeight: 400 }}>
                  In controlled burn trials, our solution showed a 4-5x improvement over control. Moreover, time‑course analysis demonstrated that our hydrogel slows fire spread more effectively than water, cellulose alone, or other additive combinations. The scalability of our solution is ensured by the simple protein mix that can be produced in small batches (our case) or in a more scalable manner in bioreactors (our aim).  This approach is key into proposing a scalable alternative to conventional chemical suppressants
                </p>

                <h3>TAM, SAM, SOM</h3>

                <p style={{ fontWeight: 400 }}>
                  <strong>The Total Addressable Market (TAM)</strong> : represents the full global revenue potential for our wildfire‐protection solution across all customer segments and geographies.
                </p>

                <p style={{ fontWeight: 400 }}>
                  In this space, the wildfire protection system market was valued at USD 9.68 billion in 2024 and is projected to reach USD 10.9 billion by 2025, before surging to USD 25.3 billion by 2033 at a compound annual growth rate of 12.6 % <Citation id="3" />.
                </p>

                <p style={{ fontWeight: 400 }}>
                  This figure includes every form of detection sensor, AI-driven predictive model, fire-retardant spray, automated sprinkler, and evacuation alert system deployed by homeowners, commercial operators, forest managers, and government agencies worldwide.
                </p>

                <p style={{ fontWeight: 400 }}>
                  Within this broader ecosystem, the bio‐based flame retardant segment, where our biodegradable hydrogel competes, is estimated at USD 2 billion in 2025 and expected to reach USD 3.8 billion by 2033, growing at an 8.0 % CAGR as governments and utilities increasingly mandate eco‐friendly suppression agents <Citation id="4" />.
                </p>

                <p style={{ fontWeight: 400 }}>
                  Understanding this TAM allows us to benchmark our long-term ambitions for rolling out the biodegradable hydrogel across the entire wildfire-mitigation ecosystem.
                </p>

                <p style={{ fontWeight: 400 }}>
                  <strong>The Serviceable Available Market (SAM)</strong> : is the portion of the Total Addressable Market (TAM) that aligns with our specific product capabilities, geographies, and customer segments. It filters out sectors or regions we can’t realistically serve.
                </p>

                <p style={{ fontWeight: 400 }}>
                  Focusing on North America, Europe, and Australia, regions that collectively allocate over $2 billion annually to wildland firefighting <Citation id="5" />, <Citation id="6" />, <Citation id="7" />, <Citation id="8" />.
                
                </p>

                <p style={{ fontWeight: 400 }}>
                  Given current regulatory approvals, distribution partnerships, and our projected manufacturing capacity, we estimate the addressable spend on advanced hydrogel retardants at roughly $500 million per year. This figure represents the market slice where our product’s unique fire-retardant properties and eco-friendly profile give us a clear competitive advantage.
                </p>

                <figure style={{ margin: '1rem 0', padding: '1.2rem', border: '2px dashed rgba(255,255,255,0.06)', borderRadius: 8, textAlign: 'center' }}>
                  <img
                    src="https://static.igem.wiki/teams/5590/entrepreneur/accordion-2.webp"
                    alt="Scalability and feasibility overview"
                    style={{ maxWidth: '520px', width: '100%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: 6 }}
                  />
                  <figcaption style={{ marginTop: '0.75rem', color: 'var(--color-text)', fontSize: '0.95rem', textAlign: 'left' }}>
                    <div style={{ fontSize: '1rem', marginBottom: '0.35rem', textAlign: 'center' }}><strong>Figure 1: Target Slice for Pyronix</strong></div>
                    <div style={{ marginTop: '0.6rem', display: 'flex', justifyContent: 'center' }}>
                      <ul role="list" aria-label="Figure 1 legend" style={{ listStyle: 'none', display: 'flex', gap: '1.2rem', padding: 0, margin: 0, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <li role="listitem" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.9rem' }}><strong>TAM</strong>: Global wildfire protection systems market</span>
                        </li>
        
                        <li role="listitem" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.9rem' }}><strong>SAM</strong>: Serviceable Available Market (target regions: NA, EU, AU)</span>
                        </li>
                        <li role="listitem" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.9rem' }}><strong>SOM</strong>: Serviceable Obtainable Market (near-term capture)</span>
                        </li>
                      </ul>
                    </div>
                  </figcaption>
                </figure>

                <p style={{ fontWeight: 400 }}>
                  <strong>The Serviceable Obtainable Market (SOM) :</strong> is the slice of our SAM that we can realistically win over the next 2–3 years, given your current manufacturing capacity, pilot commitments, and B2G pipeline.
                </p>

                <p style={{ fontWeight: 400 }}>
                  Our SAM across North America, southern Europe and Australia is approximately USD 600 million annually. Capturing roughly 8 % of that in the near term translates to a SOM of about <strong>USD 48 million</strong>, equivalent to 0.44 % of the projected USD 10.9 billion global wildfire protection systems market in 2025.
                </p>
              </ExpandableText>

              <ExpandableText 
                title="Product development"
                isOpen={openSection === 'development'}
                onToggle={() => toggleSection('development')}
              >
                <figure style={{ margin: '0.6rem 0 1rem 0', textAlign: 'center' }}>
                  <img
                    src="https://static.igem.wiki/teams/5590/entrepreneur/entreptimeline.webp"
                    alt="Product development overview"
                    style={{ maxWidth: '950px', width: '100%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: 6 }}
                  />
                  <figcaption style={{ fontSize: '0.9rem', color: 'var(--color-text)', marginTop: '0.5rem' }}>
                    <div style={{ textAlign: 'center', fontSize: '0.98rem', marginBottom: '0.25rem' }}><strong>Figure 2</strong>: Product development pipeline overview</div>
                  </figcaption>
                </figure>

                <p style={{ fontWeight: 400 }}>
                  Our development roadmap includes:
                </p>
                <ul style={{ fontWeight: 400, marginLeft: '1.2rem', listStyleType: 'disc', marginTop: '0.5rem' }}>
                  <li>Visualize hydrogel production and quantify gel/hectare for barrier creation</li>
                  <li>Report controlled trial outcomes and durability (char formation, smoke capture)</li>
                  <li>Scale manufacturing capabilities for commercial deployment</li>
                  <li>Establish regulatory compliance across target markets</li>
                </ul>
              </ExpandableText>

              <ExpandableText 
                title="Building Credibility Through Expertise and Strategic Partnerships"
                isOpen={openSection === 'credibility'}
                onToggle={() => toggleSection('credibility')}
              >
                <p style={{ fontWeight: 400 }}>
                  Our approach is based on a rapid Build-Measure-Learn feedback loop that allows us to adapt our product to the needs. We will distribute our product in personalized small-batch amounts.
                </p>
                <p style={{ fontWeight: 400 }}>
                  This makes sure we are always up-to-date with the local regulations and able to adapt to them.
                </p>
                <p style={{ fontWeight: 400 }}>
                  We bring together expertise in synthetic biology for the formulation of biodegradable gels, chemical engineering for optimizing performance and safety, and drone technology for precise aerial deployment. To navigate the complex certification processes, we will work with regulatory affairs specialists and environmental compliance experts who can ensure adherence to national and international safety standards.
                </p>
                <p style={{ fontWeight: 400 }}>
                  Key stakeholders include Ministries of the Interior or Public Safety, environmental agencies, drone operation regulators, and potential industry partners in firefighting equipment manufacturing. By combining technical proficiency with strong regulatory and industry connections, the team is well-positioned to credibly develop, validate, and scale our innovative solution.
                </p>
              </ExpandableText>
            </div>
          </div>

          <div className="proof-block" id="impacts">
            <h2>Assessment of Long-Term Impacts</h2>
            <p>
              The solution proposed is already competitive since the biodegradable formulation is designed to significantly reduce environmental harm compared to conventional chemical fire suppressants.
            </p>
            <p>
              The drone-based delivery system is a surplus that can improve firefighter safety by reducing direct human exposure to hazardous conditions, while enabling faster, more targeted responses that may lower the overall economic and ecological costs of wildfires.
            </p>
            <p>
              We have also considered possible negative impacts. Large-scale production and deployment could still carry a carbon footprint, so we plan to source sustainable raw materials and optimize manufacturing efficiency. There is also a risk of unintended ecological effects if the gel interacts with sensitive habitats, which is why we will conduct rigorous, long-term environmental testing and work closely with environmental agencies before approval. Additionally, reliance on drone technology requires robust cybersecurity and operational safeguards to prevent misuse or system failures. By proactively addressing these factors, the team aims to ensure that the long-term benefits of our solution outweigh any potential drawbacks.
            </p>
          </div>

          <div className="proof-block" id="documents">
            <h2>Business Documents</h2>
            <p>Access our comprehensive business documentation including investor materials and detailed business plan.</p>
            
            <div style={{ 
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
            className="interactive-link"
            >
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/entrepreneur/pyronix-one-pager.pdf"
                title="Investor One-Pager"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/entrepreneur/pyronix-one-pager.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/entrepreneur/pyronix-one-pager.pdf')}
              />
              
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/entrepreneur/business-plan.pdf"
                title="Business Plan"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/entrepreneur/business-plan.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/entrepreneur/business-plan.pdf')}
              />
            </div>
          </div>
        </section>
      </div>
      
  <ReferencesDropdown references={entrepreneurReferenceList} />
    </div>
  );
};

export default BusinessStrategy;