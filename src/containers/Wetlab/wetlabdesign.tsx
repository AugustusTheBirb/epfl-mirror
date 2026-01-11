import React, { useState, useEffect, useRef } from "react";
import "../Entrepreneurship/entrepreneur.css";
import PageHead from "../../components/Head/PageHead";
import ReferencesDropdown from "../Homepage/References/references";
import Citation from "../../components/References/Citation";
import { Reference } from "../../components/References/ReferenceList";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FigureCaption } from "react-bootstrap";

const navItems = [
  {id: 'overview', label: 'Overview'},
  {id: 'vectors', label: 'Vector Plasmids'},
  {id: 'fire-retardant', label: 'Fire-Retardant Module'},
  {id: 'silica', label: 'Silica Coating Module'},
  {id: 'chitosan', label: 'Chitosan Module'}
]

const useActiveSection = (sectionIds: string[], offset = 100) => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);
  const observers = useRef<IntersectionObserver[]>([]);

  useEffect(() => {
    observers.current.forEach(obs => obs.disconnect());
    observers.current = [];

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { rootMargin: `-${offset}px 0px 0px 0px`, threshold: 0.5 }
        );
        observer.observe(element);
        observers.current.push(observer);
      }
    });
    return () => {
      observers.current.forEach(obs => obs.disconnect());
    };
  }, [sectionIds, offset]);
  return activeSection;
};

const designReferenceList: Reference[] = [
  {
    id: '1',
    text: "T. Ntuli, M. S. Xaba, B. Ntsendwana, T. C. Mokhena, and M. J. Mochane, 'Recent Advances in Protein-Based Flame-Retardant Materials', in Biomaterials as Green Flame Retardants, T. C. Mokhena, M. J. Mochane, E. R. Sadiku, and S. Sinha Ray, Eds., Singapore: Springer Nature, 2024, pp. 285–316. doi: 10.1007/978-981-97-6871-4_12."
  },
  {
    id: '2',
    text: 'A. C. Yu et al., "Scalable manufacturing of biomimetic moldable hydrogels for industrial applications", <em>Proc. Natl. Acad. Sci. U.S.A.</em>, vol. 113, no. 50, pp. 14255–14260, Dec. 2016, doi: 10.1073/pnas.1618156113.'
  },
  {
    id: '3',
    text: 'A. C. Yu et al., "Wildfire prevention through prophylactic treatment of high-risk landscapes using viscoelastic retardant fluids", <em>Proc. Natl. Acad. Sci. U.S.A.</em>, vol. 116, no. 42, pp. 20820–20827, Oct. 2019, doi: 10.1073/pnas.1907855116.'
  },
  {
    id: '4',
    text: 'C. Dong et al., "Water‐Enhancing Gels Exhibiting Heat‐Activated Formation of Silica Aerogels for Protection of Critical Infrastructure During Catastrophic Wildfire", <em>Advanced Materials</em>, vol. 36, no. 40, p. 2407375, Oct. 2024, doi: 10.1002/adma.202407375.'
  },
  {
    id: '5',
    text: 'T. N. Vigil et al., "Surface-displayed silicatein-α enzyme in bioengineered E. coli enables biocementation and silica mineralization", <em>Front. Syst. Biol.</em>, vol. 4, May 2024, doi: 10.3389/fsysb.2024.1377188.'
  },
  {
    id: '6',
    text: 'L. M. Sidor et al., "Engineered bacteria that self-assemble bioglass polysilicate coatings display enhanced light focusing", <em>Proc. Natl. Acad. Sci. U.S.A.</em>, vol. 121, no. 51, p. e2409335121, Dec. 2024, doi: 10.1073/pnas.2409335121.'
  },
  {
    id: '7',
    text: 'J. Mastalska-Popławska, Ł. Wójcik, and P. Izak, "Applications of hydrogels with fire retardant properties—a review", <em>J Sol-Gel Sci Technol</em>, vol. 105, no. 3, pp. 608–624, Mar. 2023, doi: 10.1007/s10971-022-05991-x.'
  },
  {
    id: '8',
    text: 'Z. Ali et al., "Development of sustainable flame-retardant bio-based hydrogel composites from hemp/wool nonwovens with chitosan-banana sap hydrogel", <em>Sci Rep</em>, vol. 14, no. 1, p. 22116, Sep. 2024, doi: 10.1038/s41598-024-73052-0.'
  },
  {
    id: '9',
    text: 'T. Furuike, D. Komoto, H. Hashimoto, and H. Tamura, "Preparation of chitosan hydrogel and its solubility in organic acids", <em>International Journal of Biological Macromolecules</em>, vol. 104, pp. 1620–1625, Nov. 2017, doi: 10.1016/j.ijbiomac.2017.02.099.'
  },
  {
    id: '10',
    text: 'A. Nguyen, I. Tunn, M. Penttilä, and A. D. Frey, "Enhancing Chitin Production as a Fermentation Byproduct through a Genetic Toolbox That Activates the Cell Wall Integrity Response", <em>ACS Synth. Biol.</em>, vol. 14, no. 1, pp. 113–128, Jan. 2025, doi: 10.1021/acssynbio.4c00436.'
  },
  {
    id: '11',
    text: '"Team:Mingdao - 2015.igem.org". <a href="https://2015.igem.org/Team:Mingdao" target="_blank" rel="noopener noreferrer">https://2015.igem.org/Team:Mingdao</a>'
  },
  {
    id: '12',
    text: 'Y. Long et al., "Distinct mechanisms govern the phosphorylation of different SR protein splicing factors", <em>J Biol Chem</em>, vol. 294, no. 4, pp. 1312–1327, Jan. 2019, doi: 10.1074/jbc.RA118.003392.'
  },
  {
    id: '13',
    text: 'R. García et al., "Signalling through the yeast MAPK Cell Wall Integrity pathway controls P-body assembly upon cell wall stress", <em>Sci Rep</em>, vol. 9, no. 1, p. 3186, Feb. 2019, doi: 10.1038/s41598-019-40112-9.'
  },
  {
    id: '14',
    text: 'Christodoulidou, Anna et al., "Two Sporulation-specific Chitin Deacetylase-encoding Genes Are Required for the Ascospore Wall Rigidity of Saccharomyces cerevisiae", <em>Journal of Biological Chemistry</em>, vol. 271, no. 49, pp. 31420-31425.'
  },
  {
    id: '15',
    text: 'C. A. Cruz-Teran, K. Tiruthani, A. Mischler, and B. M. Rao, "Inefficient ribosomal skipping enables simultaneous secretion and display of proteins in Saccharomyces cerevisiae", <em>ACS Synth Biol</em>, vol. 6, no. 11, pp. 2096–2107, Nov. 2017, doi: 10.1021/acssynbio.7b00144.'
  },
  {
    id: '16',
    text: 'D. Kafetzopoulos, A. Martinou, and V. Bouriotis, "Bioconversion of chitin to chitosan: purification and characterization of chitin deacetylase from Mucor rouxii", <em>Proc Natl Acad Sci U S A</em>, vol. 90, no. 7, pp. 2564–2568, Apr. 1993, doi: 10.1073/pnas.90.7.2564.'
  },
  {
    id: '17',
    text: "M. M. Velencoso, A. Battig, J. C. Markwart, B. Schartel, and F. R. Wurm, 'Molecular Firefighting—How Modern Phosphorus Chemistry Can Help Solve the Challenge of Flame Retardancy', Angew Chem Int Ed Engl, vol. 57, no. 33, pp. 10450–10467, Aug. 2018, doi: 10.1002/anie.201711735."
  },
  {
    id: '18',
    text: "'Team:TU Delft - 2016.igem.org'. Accessed: Oct. 06, 2025. [Online]. Available: https://2016.igem.org/Team:TU_Delft/Project"
  }
  ,
  {
    id: '19',
    text: "G. B. LLC, 'pESC-LEU Sequence and Map'. Accessed: Oct. 07, 2025. [Online]. Available: https://www.snapgene.com/plasmids/yeast_plasmids/pESC-LEU"
  },
  {
    id: '20',
    text: "G. B. LLC, 'pET-21a(+) Sequence and Map'. Accessed: Oct. 07, 2025. [Online]. Available: https://www.snapgene.com/plasmids/pet_and_duet_vectors_(novagen)/pET-21a(%2B)"
  }
];

interface ExpandableTextProps {
  title: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ title, isOpen, onToggle, children }) => (
  <>
    <button 
      onClick={onToggle}
      style={{ 
        display: 'flex',
        alignItems: 'center',
        padding: '0.8rem 1rem',
        color: isOpen ? 'var(--color-dark-orange)' : 'var(--color-whitish)',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        borderLeft: '2px solid var(--color-dark-orange)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'left'
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-dark-orange)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.color = isOpen ? 'var(--color-dark-orange)' : 'var(--color-whitish)';
      }}
    >
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
      <div style={{ marginTop: '0.3rem', marginBottom: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
        {children}
      </div>
    )}
  </>
);

const Design: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
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



  return (
    <div className="proof-container">
      <PageHead
        title="Design"
        subtitle="Production of hydrogel compounds through engineered biosynthetic systems"
        backgroundUrl="https://static.igem.wiki/teams/5590/wetlab/screenshot-2025-10-04-at-22-25-35-jpeg.webp"
        grayscale={true}
      />

      <div className="hardware-layout">
        <aside className="hardware-sidebar">
            <div className="sidebar-title">Table of Contents</div>
            <nav>
              <ul>
                <li><a className="sidebar-button" href="#overview">Overview</a></li>
                <li><a className="sidebar-button" href="#vectors">Vector Plasmids</a></li>
                <li><a className="sidebar-button" href="#fire-retardant">Fire-Retardant Module</a></li>
                <li><a className="sidebar-button" href="#silica">Silica Coating Module</a></li>
                <li><a className="sidebar-button" href="#chitosan">Chitosan Module</a></li>
              </ul>
            </nav>
          </aside>
        <section className="hardware-main proof-section">
          
          <div className="proof-block" id="overview">
            <h2>Production of Hydrogel Compounds</h2>
            <p>
              Our objective is to engineer a biosynthetic hydrogel composed of cellulose, silica, chitosan, and fire-retardant protein modules that synergize to form a flame-resistant, mechanically robust, and biocompatible material. To achieve this, we developed a modular system in which different engineered microorganisms contribute specific functional components through the expression of the following proteins:
            </p>
            
            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontWeight: 'bold', fontSize: '1.3rem', textDecoration: 'underline' }}>Fire-retardant protein module</p>
              <ul style={{ marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
                <li><b>CBD-SRSF1</b>: a fire-resistant protein phosphorylated by SRPK1 to enhance flame resistance, anchored to the hydrogel matrix via a CBD</li>
                <li><b>SRPK1</b>: a protein kinase that phosphorylates SRSF1, enhancing its flame-retardant properties</li>
              </ul>

              <p style={{ fontWeight: 'bold', fontSize: '1.3rem', textDecoration: 'underline' }}>Silica coating module</p>
              <ul style={{ marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
                <p>
                  We implemented INP and OmpA as alternative membrane display anchors. Our rationale is detailed in 
                  <Link to="/engineering" className="interactive-link"> Engineering Cycle: Microscopy</Link>.
                </p>
                <li><b>INP-silicatein or OmpA-silicatein</b>: a membrane-displayed enzyme that catalyzes the formation of a silica coating around the bacterial cell</li>
                <li><b>INP-CBD or OmpA-CBD</b>: an anchoring protein that binds bacteria to the hydrogel matrix</li>
              </ul>

              <p style={{ fontWeight: 'bold', fontSize: '1.3rem', textDecoration: 'underline' }}>Chitosan module</p>
              <ul style={{ marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
                <li><b>RHO1<sub>Q68H</sub></b>: a constitutively active GTPase that triggers chitin overproduction in <em>S. cerevisiae</em></li>
                <li><b>CDA</b>: converts chitin into chitosan by removing acetyl groups from the polymer backbone</li>
              </ul>
            </div>

            <p>
              To implement this system, we engineered both <em>E. coli</em> and <em>S. cerevisiae</em> as host organisms, each optimized for specific protein modules. This required the design of robust plasmid vectors tailored for stable replication and strong expression in both prokaryotic and eukaryotic hosts.
            </p>
          </div>

          <div className="proof-block" id="vectors">
            <h2>Plasmids</h2>
            <p>
              To enable the microbial expression of our hydrogel components, we designed plasmids adapted for use in <em>E. coli</em> and/or <em>S. cerevisiae</em>.
            </p>

            <div style={{ 
              marginTop: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
              
            }}
        
            >
              <ExpandableText 
                title="E. coli expression system"
                isOpen={openSection === 'ecoli'}
                onToggle={() => toggleSection('ecoli')}
              >
                <p>
                  We selected the pET series plasmids for protein expression in <em>E. coli</em>, which feature a T7 inducible promoter regulated by the lacI repressor. In this system, protein expression is tightly controlled and can be triggered by IPTG induction, allowing us to balance growth and protein yield. Depending on the construct, we used either ampicillin or kanamycin resistance as selectable markers. To facilitate detection and purification, our designs incorporated a combination of tags including V5, StrepTagII, 6xHis, and HA. Each plasmid also includes a strong ribosome binding site (RBS), a transcriptional terminator, and an origin of replication ensuring stable maintenance and efficient expression within bacterial cells.
                </p>
                <figure>
                  <img 
                    src="https://static.igem.wiki/teams/5590/wetlab/design/pet-amp.webp" 
                    alt="Schematic representation of the pET-Amp plasmid backbone" 
                    style={{ 
                      width: '100%', 
                      maxWidth: '600px', 
                      marginTop: '1rem', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      justifyContent: 'center',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }} 
                  />
                  <figcaption style={{ marginTop: '0.8rem', textAlign: 'center' }}>
                    <strong>Figure 1.</strong> Schematic representation of the pET-Amp plasmid backbone. Key features include the T7 promoter and LacI coding sequence for IPTG-inducible expression, the multiple cloning site (MCS) where the gene of interest is inserted, the AmpR selection marker, and the origin of replication (ori) for plasmid maintenance in E. coli.<br />
                    Sequence source: MilliporeSigma (Novagen), pET-21a(+). <Citation id="20" />
                  </figcaption>
                </figure>
              </ExpandableText>

              <ExpandableText 
                title="S. cerevisiae expression system"
                isOpen={openSection === 'yeast'}
                onToggle={() => toggleSection('yeast')}
              >
                <p>
                  For expression of proteins in S. cerevisiae, we employed the pESC plasmid system. These plasmids carry either URA3 or LEU2 auxotrophic markers for selection in appropriate dropout media. Expression was driven by the CUP1 promoter, which allows controlled induction in response to copper ions. To facilitate detection, constructs include HA and V5 tags. In addition, the plasmid backbone carries an antibiotic resistance gene and a bacterial origin of replication, enabling replication and selection during cloning in <em>E. coli</em>.
                </p>
                <img 
                  src="https://static.igem.wiki/teams/5590/wetlab/design/pesc-leu-vector.webp" 
                  alt="Schematic representation of the pESC-LEU backbone" 
                  style={{ 
                    width: '100%', 
                    maxWidth: '600px', 
                    marginTop: '1rem', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    justifyContent: 'center',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }} 
                />
                <figcaption style={{ marginTop: '0.8rem', textAlign: 'center' }}>
                  <strong>Figure 2.</strong> Schematic representation of the pESC-LEU backbone. Key features include the GAL1 and GAL10 promoters for galactose-inducible expression of two independent epitope-tagged MCS (multiple cloning sites), a LEU2 selection marker, and origins for replication in both S. cerevisiae (2-micron ori) and E. coli (pUC ori).<br />
                  Sequence source: Agilent Technologies, pESC-LEU <Citation id="19" />
                </figcaption>
              </ExpandableText>
            </div>
          </div>

          <div className="proof-block" id="fire-retardant">
            <h2>Fire-Retardant Protein Module</h2>
            <p>
              Phosphorylated compounds are well known for their fire-retardant properties, primarily due to the presence of negatively charged phosphate groups <Citation id="1" />. These groups help inhibit combustion by promoting char formation and scavenging reactive radicals, thereby disrupting the fire propagation process.
            </p>
            <p>
              Proteins rich in serine/arginine (SR) repeats can undergo extensive post-translational phosphorylation, making them ideal candidates for producing bio-based, flame-retardant materials <Citation id="11" />. This strategy allows us to generate a biocompatible and environmentally friendly phosphorylated compound, avoiding the use of hazardous synthetic chemicals.
            </p>
            <p>
              To introduce these properties into our hydrogel, we engineered an <em>E. coli</em> strain to co-express two fusion proteins:
            </p>
            <ul style={{ marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
              <li><b>CBD-SRSF1-His</b>: the core flame-retardant protein, rich in SR repeats, designed to be embedded in the hydrogel matrix via a CBD</li>
              <li><b>SRPK1-Strep</b>: the protein kinase responsible for phosphorylating the serine residues in SRSF1</li>
            </ul>
            <p>
              SRSF1 is subsequently purified from the bacterial lysate and incorporated into the hydrogel matrix. Together, these proteins constitute a biological module that significantly enhances the thermal stability and fire resistance of the final material.
            </p>

            <div style={{ 
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
            
            >
              <ExpandableText 
                title="SRSF1"
                isOpen={openSection === 'srsf1'}
                onToggle={() => toggleSection('srsf1')}
              >
                <p>
                  SRSF1 (Serine/Arginine-Rich Splicing Factor 1) is a eukaryotic RNA-binding protein involved in pre-mRNA splicing. It is rich in serine/arginine (SR) domains, which are targeted for phosphorylation. Once phosphorylated, SRSF1 carries multiple negatively charged phosphate groups, which have been shown to increase thermal stability, promote char formation, and reduce flammability <Citation id="1" />, <Citation id="17" />. 
                </p>
                <p>
                  To ensure that SRSF1 remains embedded within the hydrogel structure, we fused it to a Cellulose Binding Domain (CBD). This domain binds strongly and specifically to cellulose fibers, preventing diffusion of the protein after its integration into the hydrogel matrix.
                </p>
                <p>
                  A His tag was added to the C-terminus to allow for detection via Western blot and purification using affinity chromatography.
                </p>
                <img 
                  src="https://static.igem.wiki/teams/5590/wetlab/design/srsf1.webp" 
                  alt="Map of pET-Kan-CBD-SRSF1-His construct" 
                  style={{ 
                    width: '100%', 
                    maxWidth: '600px', 
                    marginTop: '1rem', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    justifyContent: 'center',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }} 
                />
                <figcaption style={{ marginTop: '0.8rem', textAlign: 'center' }}>
                  <strong>Figure 3.</strong> Map of pET-Kan-CBD-SRSF1-His. This construct expresses the CBD-SRSF1 fusion protein, with a 6xHis tag for purification and detection, under control of the T7 promoter and lac operator for IPTG-inducible expression in E. coli. It also includes a Kanamycin resistance gene (KanR) and ColE1 origin for E. coli replication.
                </figcaption>
              </ExpandableText>

              <ExpandableText 
                title="SRPK1"
                isOpen={openSection === 'srpk1'}
                onToggle={() => toggleSection('srpk1')}
              >
                <p>
                  SRPK1 (Serine/Arginine Protein Kinase 1) is a eukaryotic kinase that specifically phosphorylates SR proteins, such as SRSF1, at multiple serine residues within their serine/arginine-rich (SR) domains <Citation id="12" />.
                </p>
                <p>
                  By co-expressing SRPK1 alongside SRSF1, we ensure that phosphorylation occurs in vivo, eliminating the need for separate enzymatic or chemical modification steps during protein production.
                </p>
                <p>
                  A Strep TagII was added to the C-terminus of SRPK1 to enable detection by Western blot using a StrepTactin HRP conjugate.
                </p>
                <img 
                  src="https://static.igem.wiki/teams/5590/wetlab/design/srpk1.webp" 
                  alt="Map of pET-Kan-CBD-SRPK1-His construct" 
                  style={{ 
                    width: '100%', 
                    maxWidth: '600px', 
                    marginTop: '1rem', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    justifyContent: 'center',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }} 
                />
                <figcaption style={{ marginTop: '0.8rem', textAlign: 'center' }}>
                  <strong>Figure 4.</strong> Map of pET-Amp-SRPK1-StrepII. This plasmid drives the expression of SRPK1 under the control of a T7 promoter with a lac operator for IPTG-inducible expression in E. coli. StrepTagII allows for protein purification and detection. The plasmid carries an ampicillin resistance marker (AmpR) for selection and a ColE1 origin of replication (ori) for plasmid maintenance.

                </figcaption>
              </ExpandableText>
            </div>

            <figure className="image-figure image-figure--large">
                <img src="https://static.igem.wiki/teams/5590/wetlab/design/designwetlab.avif" alt="Schematic of SrPK1, SRSF1, and CBD fusion proteins" />
                <figcaption className="image-caption"><strong>Figure 5.</strong> Schematic representation of the fire-retardant protein module. A CBD domain is fused to the core protein SRSF1 to anchor the module to the hydrogel matrix. SPRK1 then phosphorylates the multiple SR domains of SRSF1, enhancing its fire-retardant properties.</figcaption>
              </figure>
          </div>

          <div className="proof-block" id="silica">
            <h2>Silica Coating Module</h2>
            <p>
              Silica nanoparticles have been shown to significantly enhance both the mechanical strength and flame resistance of flame-retardant hydrogels <Citation id="2" /><Citation id="3" /><Citation id="4" />. To replicate these effects using a bio-based approach, we engineered E. coli to form a silica shell around its outer membrane, effectively mimicking the structure and function of silica microparticles<Citation id="6" /><Citation id="18" />.
            </p>
            <p>
              This was achieved by co-expressing two fusion proteins:
            </p>
            <ul style={{ marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
              <li><b>INP-Silicatein-HA or OmpA-Silicatein-HA</b>: which catalyzes silica formation around the bacterial cell.</li>
              <li><b>INP-CBD-V5 or OmpA-CBD-V5</b>: which anchors the resulting silica-coated cells into the cellulose-based hydrogel via a CBD.</li>
            </ul>
            <p>
              Together, these constructs enable the bacteria to act as living silica particles, contributing both thermal insulation and structural reinforcement to the final hydrogel composite.
            </p>

            <div style={{ 
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
            
            >
              <ExpandableText 
                title="INP/OmpA-Silicatein"
                isOpen={openSection === 'inp-silicatein'}
                onToggle={() => toggleSection('inp-silicatein')}
              >
                <p>
                  Silicatein is an enzyme originally identified in marine sponges (<em>Suberites domuncula</em>) that catalyzes the polymerization of silica from soluble precursors such as silicic acid or tetraethyl orthosilicate (TEOS). Unlike traditional methods of silica formation, which require high temperatures or harsh chemicals, silicatein enables biomineralization under mild, aqueous conditions, making it ideal for sustainable and bio-based material production <Citation id="5" />.
                </p>
                <p>
                  The enzymatic activity of silicatein leads to the formation of a rigid, heat-resistant silica shell around the bacterial cells <Citation id="6" />. This improves the thermal insulation, mechanical integrity, and fire-retardant properties of the hydrogel once they are incorporated.
                </p>
                <p>
                  To localize silica formation to the bacterial surface, silicatein was fused to either INP (Ice Nucleation Protein) or OmpA (Outer membrane protein A), transmembrane proteins that display fusion partners on the outer membrane of <em>E. coli</em> <Citation id="5" />. This design ensures that silicatein's catalytic domain is exposed to the extracellular environment, where it can directly act on added silica precursors.
                </p>
                <p>
                  A HA epitope tag was included to enable detection of the fusion protein via Western blot using anti-HA antibodies.
                </p>
                <img 
                  src="https://static.igem.wiki/teams/5590/wetlab/design/inp-ompa-si.webp" 
                  alt="Plasmid maps of pET-Kan-INP-silicatein-HA and pET-Kan-OmpA-silicatein-HA" 
                  style={{ 
                    width: '100%', 
                    maxWidth: '600px', 
                    marginTop: '1rem', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    justifyContent: 'center',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }} 
                />
                <figcaption style={{ marginTop: '0.8rem', textAlign: 'center' }}>
                  <strong>Figure 6.</strong> Plasmid maps of pET-Kan-INP-silicatein-HA and pET-Kan-OmpA-silicatein-HA. Both constructs express silicatein tagged with HA for detection under control of the T7 promoter, with inducible expression via the lac operator system. In each case, silicatein is fused to a different membrane anchor: INP (A) or OmpA (B), enabling surface display in E. coli. The plasmids contain a KanR gene (resistance for kanamycin) and a ColE1 origin.
                </figcaption>
              </ExpandableText>

              <ExpandableText 
                title="INP/OmpA-CBD"
                isOpen={openSection === 'inp-cbd'}
                onToggle={() => toggleSection('inp-cbd')}
              >
                <p>
                  This construct uses the same INP or OmpA surface displays to present a Cellulose Binding Domain (CBD) on the outer membrane of <em>E. coli</em>. Without this anchoring mechanism, silica-coated bacteria could sediment or diffuse out of the hydrogel, reducing its stability and uniformity. We thus ensure that the mineralized cells remain physically embedded in the material after assembly.
                </p>
                <p>
                  A V5 epitope tag was included for detection.
                </p>
                <img 
                  src="https://static.igem.wiki/teams/5590/wetlab/design/inp-ompa-cbd.webp" 
                  alt="Plasmid maps of pET-Amp-INP-CBD-V5 and pET-Amp-OmpA-CBD-V5" 
                  style={{ 
                    width: '100%', 
                    maxWidth: '600px', 
                    marginTop: '1rem', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    justifyContent: 'center',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }} 
                />
                <figcaption style={{ marginTop: '0.8rem', textAlign: 'center' }}>
                  <strong>Figure 7.</strong> Plasmid maps of pET-Amp-INP-CBD-V5 and pET-Amp-OmpA-CBD-V5. These constructs express a CBD fusion protein tagged with V5 under the control of a T7 promoter and lac operator system for IPTG-inducible expression in E. coli. The CBD is anchored to the outer membrane via either INP (A) or OmpA (B). Both plasmids contain an AmpR gene for selection and a ColE1 origin for replication.
                </figcaption>
              </ExpandableText>
            </div>
          
          <figure>
                <img src="https://static.igem.wiki/teams/5590/wetlab/design/screenshot-2025-11-29-at-12-45-04-pm.avif" alt="Schematic of INP/OmpA-silicatein and INP/OmpA-CBD fusion proteins" />
                <figcaption style={{ textAlign: 'center', marginTop: '0.8rem' }}><strong>Figure 8.</strong> Schematic representation of the silica-coating module. Silicatein-alpha catalyzes the conversion of silica precursors into silica polymers that form a coating on the bacterial outer membrane. </figcaption>

              </figure>
          </div>

          <div className="proof-block" id="chitosan">
            <h2>Chitosan Module</h2>
            <p>
              Chitosan is a biopolymer known for its adhesive, biocompatible, and flame-retardant properties <Citation id="7" />, <Citation id="8" />. Its ability to form strong hydrogen bonds and interact electrostatically with other polymers makes it an ideal additive for reinforcing hydrogel matrices. In particular, chitosan has been shown to promote char formation and radical scavenging during combustion, thereby improving fire resistance.
            </p>
            <p>
              Despite its useful properties, traditional chitosan production relies on harsh chemical deacetylation of chitin using concentrated alkali, which is energy-intensive, polluting, and difficult to control at scale <Citation id="9" />. To create a more sustainable and biologically integrated solution, we engineered <em>Saccharomyces cerevisiae</em> to produce chitosan in situ, directly in its cell wall.
            </p>
            <p>
              Our strategy involved the co-expression of two key proteins:
            </p>
            <ul style={{ marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
              <li><b>RHO1<sub>Q68H</sub>-HA</b>: a constitutively active form of the native GTPase RHO1, which drives continuous chitin production in the cell wall</li>
              <li><b>AGA2-CDA-V5</b>: a chitin deacetylase from <em>Mucor rouxii</em>, fused to a secretion signal to convert cell-wall-bound chitin into chitosan directly at its site of synthesis</li>
            </ul>
            <p>
              Together, these modifications turn <em>S. cerevisiae</em> into a living chitosan producer, bypassing the need for environmentally damaging chemical treatments and external supply of the polymer. After induction and expression, yeast cell lysates containing wall-bound chitosan can be incorporated directly into the hydrogel, enhancing its flame-retardant, mechanical, and adhesive properties.
            </p>

            <div style={{ 
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
            
            >
                <ExpandableText 
                title={<>RHO1<sub>Q68H</sub></>}
                isOpen={openSection === 'rho1'}
                onToggle={() => toggleSection('rho1')}
              >
                <p>
                  RHO1 is a GTPase in <em>S. cerevisiae</em> that regulates cell wall biosynthesis by activating PKC1, which in turn triggers the MAPK signaling pathway and upregulates transcription factors such as Rlm1. These transcription factors control the expression of genes involved in chitin production and cell wall remodeling <Citation id="13" />.
                </p>
                <p>
                  To increase chitin production, Nguyen et al. (2024) <Citation id="10" /> described a constitutively active form of RHO1 carrying the Q68H mutation to increase chitin deposition in the yeast cell wall without impairing cell viability. This approach allows us to harness an endogenous regulatory pathway to induce chitin overproduction without the need to introduce foreign biosynthetic metabolic routes.
                </p>
                <p>
                  An HA epitope tag was added to the construct to facilitate detection of RHO1<sub>Q68H</sub> by Western blot.
                </p>
                <img 
                  src="https://static.igem.wiki/teams/5590/wetlab/design/rho1-plasmid.webp" 
                  alt="Map of the pESC-CUP1-RHO1Q68H-HA-LEU plasmid" 
                  style={{ 
                    width: '100%', 
                    maxWidth: '600px', 
                    marginTop: '1rem', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    justifyContent: 'center',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }} 
                />
                <figcaption style={{ marginTop: '0.8rem', textAlign: 'center' }}>
                  <strong>Figure 9.</strong> Map of the pESC-CUP1-RHO1Q68H-HA-LEU plasmid. The yeast GTPase mutant RHO1Q68H is expressed under the copper-inducible CUP1 promoter, with a HA tag for detection. The plasmid carries a LEU2 marker for S. cerevisiae selection, a 2μ origin for high-copy maintenance in yeast, and an AmpR gene and pUC origin for selection and replication in E. coli.
                </figcaption>
              </ExpandableText>

              <figure className="image-figure image-figure--large">
                <img src="https://static.igem.wiki/teams/5590/wetlab/design/rho1.avif" alt="Schematic of RHO1Q68H" />
                <figcaption className="image-caption"><strong>Figure 10.</strong> RHO1-dependent regulation of the cell integrity pathway. Constitutive activation of RHO1 bypasses the need for external stimuli (stress signals) and leads to persistent activation of downstream effectors, resulting in chitin overproduction.</figcaption>
                
              </figure>

              <ExpandableText 
                title="AGA2-CDA"
                isOpen={openSection === 'cda'}
                onToggle={() => toggleSection('cda')}
              >
                <p>
                  CDA (Chitin Deacetylase) catalyzes the conversion of chitin into chitosan by removing acetyl groups from the N-acetylglucosamine residues in the chitin polymer backbone <Citation id="9" />. We selected the CDA from <em>Mucor rouxii</em>, a fungal species known for its efficient deacetylase activity <Citation id="16" />. This enzyme allows us to bypass chemical deacetylation processes, which are typically harsh and energy-intensive.
                </p>
                <p>
                  In <em>S. cerevisiae</em>, chitosan production naturally occurs only during a specific stage of the budding cycle and is limited to specialized cell wall structures <Citation id="14" />, making it difficult to control and scale. Moreover, working with yeast strains in that developmental stage can pose biosafety challenges. Our engineered approach therefore provides a safer and more controllable alternative for continuous chitosan production.
                </p>
                <p>
                  To enable CDA to reach the outer cell wall, where chitin is located, it was fused to the AGA2 signal peptide, which directs the protein into the yeast secretory pathway <Citation id="15" />. This enables <em>S. cerevisiae</em> to convert chitin directly into chitosan in the cell wall, simplifying material integration into our hydrogel.
                </p>
                <p>
                  A V5 tag was added for detection.
                </p>
                <img 
                  src="https://static.igem.wiki/teams/5590/wetlab/design/cda-plasmid.webp" 
                  alt="Map of the pESC-CUP1-CDA-V5-URA plasmid" 
                  style={{ 
                    width: '100%', 
                    maxWidth: '600px', 
                    marginTop: '1rem', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    justifyContent: 'center',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }} 
                />
                <figcaption style={{ marginTop: '0.8rem', textAlign: 'center' }}>
                  <strong>Figure 11.</strong> Map of the pESC-CUP1-CDA-V5-URA plasmid. CDA from Mucor rouxii is expressed under the copper-inducible CUP1 promoter and fused to the AGA2 secretion signal for targeting to the yeast cell wall. A V5 tag was added for detection. The plasmid carries a URA3 marker for S. cerevisiae selection, a 2μ origin for high-copy maintenance in yeast, and an AmpR gene and pUC origin for selection and replication in E. coli.
                </figcaption>
              </ExpandableText>
            </div>
            
         
             <figure className="image-figure image-figure--large">
              <img src="https://static.igem.wiki/teams/5590/wetlab/design/screenshot-2025-11-29-at-1-12-11-pm.avif" alt="Schematic of chitosan"/>
              <figcaption className="image-caption"><strong>Figure 12.</strong> Schematic representation of CDA mechanism of action. CDA deacetylates chitin, converting GlcNAc residues into GlcN, thereby transforming chitin into chitosan.</figcaption>
               </figure>
         
        </div>

        </section>
      </div>

        
   
      
      <ReferencesDropdown references={designReferenceList} />
    </div>
  );
};

export default Design;