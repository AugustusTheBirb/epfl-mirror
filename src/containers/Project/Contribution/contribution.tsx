import React, { useState } from "react";
import "./contribution.css";
import "../Proofofconcept/proofofconcept.css";
import "../../../components/Sidebar/sidebar.css";
import PageHead from "../../../components/Head/PageHead";
import { Link } from "react-router-dom";

const Contribution: React.FC = () => {
  const cards = [
    {
      key: "tools",
      label: "Shared Tools & Parts",
      img: "https://static.igem.wiki/teams/5590/assets-drone/hardware.webp",
      desc: "Biological parts and protocols for hydrogel biosynthesis, standardized cloning strategies, and testing protocols for fire-retardant materials.",
    },
    {
      key: "collaboration",
      label: "Collaboration Resources",
      img: "https://static.igem.wiki/teams/5590/assets-drone/hardware.webp",
      desc: "Open-source code for drone path optimization, safety assessments, and guidelines for handling bio-based fire retardants.",
    },
    {
      key: "impact",
      label: "Future Impact",
      img: "https://static.igem.wiki/teams/5590/assets-drone/hardware.webp",
      desc: "Supporting future iGEM teams in sustainability, biosafety, and environmental applications through reusable and well-documented work.",
    },
  ];

const navItems = [
  { id: "wetlab", label: "Wetlab", isSubItem: false },
  { id: "wetlabparts", label: "New and Optimized Parts", isSubItem: true },
  { id: "wetlabprotocols", label: " New and Improved Protocols", isSubItem: true },
  { id: "wetlabimagetool", label: "Image Analysis Tools", isSubItem: true },
  { id: "drone", label: "Drone Technology", isSubItem: false },
  { id: "firetest", label: "Fire Retardancy Test", isSubItem: false }
  
];

const [activeSection, setActiveSection] = useState<string | null>(null);

React.useEffect(() => {
  const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


return (
    <div className="proof-container">
      <PageHead
        title="Contribution to iGEM Teams"
        subtitle="Sharing tools, knowledge, and resources with the global iGEM community"
        backgroundUrl="https://static.igem.wiki/teams/5590/fronimagesproject/screenshot-2025-11-30-at-14-32-36.avif"
        grayscale={true}  
      />

      <div className="hardware-layout">
          <aside className="hardware-sidebar">
            <div className="sidebar-title">Table of Contents</div>
            <nav>
              <ul>
                <li>
                  <a className="sidebar-button" href="#introduction">Introduction</a>
                </li>

                <li>
                  <a className="sidebar-button" href="#wetlab">Wetlab Innovations</a>
                  <ul className="sidebar-sublist">
                    <li>
                      <a className="sidebar-subitem" href="#wetlabparts">New and Optimized Parts</a>
                    </li>
                    <li>
                      <a className="sidebar-subitem" href="#wetlabprotocols">New and Improved Protocols</a>
                    </li>
                    <li>
                      <a className="sidebar-subitem" href="#wetlabimagetool">Image Analysis Tools</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a className="sidebar-button" href="#drone">Drone Technology & Spraying Systems</a>
                </li>

                <li>
                  <a className="sidebar-button" href="#firetest">Fire Retardancy Test</a>
                </li>
              </ul>
            </nav>
          </aside>
        <section className="hardware-main proof-section">
          <div className="proof-block" id="introduction" color="var(--color-whitish)">
            <p>
            In this section we present our contributions to the iGEM community. Throughout the Pyronix project, we developed expertise and resources that we want to share with future iGEM teams. Our contributions span three key areas: Wetlab Innovations, Drone Technology and Spraying Systems, and Fire Retardancy Test.
            </p>
          </div>

          {/*Wetlab*/}
          <div className="proof-block" id="wetlab">
            <h2>Wetlab Innovations</h2>
          </div>
          <div className="proof-block" id="wetlabparts">
            <h3 style={{ padding: '1rem', textDecoration: 'underline' }}>New and Optimized Parts</h3>
            <p> We designed and characterized several new plasmids for E. coli and S. cerevisiae and  <b>RHO1Q68H</b> (constitutively active GTPase) and <b>Chitin Deacetylase (CDA)</b> for yeast, enabling chitosan biosynthesis. <b>INP–Silicatein</b> and <b>INP–CBD</b> for E. coli, creating a silica-coating strain able to anchor in cellulose hydrogels. <b>CBD–SRSF1–His</b> and <b>SRPK1–Strep</b> for E. coli, producing a phosphorylated fire-retardant protein module. </p>
            <p>These modules are deposited in the Registry with detailed characterization, including Western blots, microscopy, flow cytometry, and purification data. </p>
            <p>We repurposed several existing iGEM parts (e.g., <b>SRSF1 BBa_K1608000</b>, <b>CBD BBa_K1321340</b>, <b>Silicatein BBa_K5199004</b>) by fusing them with new tags, anchors, and promoters, and re-cloning them into suitable expression vectors (pET for E. coli, pESC for yeast). This integration enabled expression in novel contexts and improved functional activity.</p>

            <Link to="/parts" target="_blank" rel="noopener noreferrer" className="interactive-link">
               → To our New and Optimized Parts
            </Link>
       
            
          </div>

          <div className="proof-block" id="wetlabprotocols">
            <h3 style={{ padding: '1rem', textDecoration: 'underline' }}>New and Optimized Protocols</h3>
            <p> Our work optimized and documented several experimental protocols that are broadly useful for other teams</p>
            <p><b>Silica-coated bacteria:</b> culture, induction, staining, and verification via fluorescence microscopy. </p>
            <p><b>Flow cytometry of yeast cells:</b> culture, induction, staining, and analysis of fluorescence.</p>
            <p><b>His-tag protein purification:</b> purification of SRSF1 using Ni-NTA affinity chromatography on FPLC, followed by SEC and validation.</p>
            <p><b>Hydrogel assembly:</b> systematic preparation of cellulose-chitosan-silica gels, optimized for spraying applications.</p>
            <p><b>Hydrogel rheology tests:</b> viscosity–shear measurements fitted to the Cross model, essential for evaluating firefighting compatibility.</p>
            <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>All protocols are made available in our wiki and Registry pages for reproducibility.</p>

            <Link to="/protocols" target="_blank" rel="noopener noreferrer" className="interactive-link">
               → To our New and Optimized Protocols
            </Link>
          
            
          </div>

          <div className="proof-block" id="wetlabimagetool">
            <h3 style={{ padding: '1rem', textDecoration: 'underline' }}>Image Analysis Tools</h3>
            <p><b>Fiji macro for cell fluorescence:</b> script to use in Fiji software that analyzes fluorescence levels of single cells and collects the data into a .csv file.</p>
            <p><b>Python script for graphing cell fluorescence data:</b> code for doing graphs of fluorescence distributions and boxplots across samples.</p>
            <p><b>Flow cytometry of yeast cells:</b> culture, induction, staining, and analysis of fluorescence.</p>

            <Link to="/results" target="_blank" rel="noopener noreferrer" className="interactive-link">
               → To our Image Analysis Tools
            </Link>
    
            
        </div>
          
          {/*Drone & Spraying Systems*/}
          <div className="proof-block" id="drone">
            <h2>Drone Technology & Spraying Systems</h2>
          </div>

          <div className="proof-block">
          <p>To support reproducible applications in drone development, we created several open-source tools and resources: </p>
          <p>This includes : </p>
          <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
            <li>IR camera application code, ready to be adapted and reused by future teams.</li>
            <li>A model of a gel-spraying system, providing a foundation for further advancements in drone-based spraying applications.</li>
            <li>A collection of ROS integration codes, serving as a starting point for drone automation with sensor inclusion.</li>
            <li>A simulation framework, which can be further expanded to evaluate drone performance and characteristics in diverse environments and test software.</li>
          </ul >
          
          
            <p>
              All of these tools are openly accessible, with the aim of accelerating progress and enabling future iGEM teams to build upon our work.
             They can be found on our  <Link className="interactive-link" to="/software" target="_blank" rel="noopener noreferrer"  style={{ textAlign: 'left' }}>Software</Link> Gitlab.
            </p>

         </div>




          {/*Fire Retardancy Test*/}
          <div className="proof-block" id="firetest">
            <h2>Fire Retardancy Test</h2>
          </div>
          <div className="proof-block">
          <p>Recognizing that burn tests are less commonly performed compared to other experimental assays, we created a building block for future iGEM teams interested in exploring fire-retardancy testing. </p>
          <p>This includes : </p>
          <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
            <li> A detailed protocol with the experimental setup and step-by-step procedure for conducting burn tests.</li>
            <li>A data analysis pipeline, including methods to assess charred versus lost area after burning.</li>
            <li> Open-source Python tools (available on our GitLab) for data visualization (bar plots and time-based plots) and statistical analysis (Welch’s t-test with Bonferroni correction).</li>
          </ul >
          
          
            <p>
              → The protocol and data analysis can be found in the <Link className="interactive-link" to="/measurement" target="_blank" rel="noopener noreferrer">Burn Measurement page</Link>.
            </p>

         </div>
          
        </section>
      </div>
    </div>
  );
};

export default Contribution;
