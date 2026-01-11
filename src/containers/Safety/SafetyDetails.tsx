import { useState, useEffect } from "react";
import "../Project/Project_description/project_description.css";
import "../../components/Sidebar/sidebar.css";
import { useLocation } from "react-router-dom";
import PageHead from "../../components/Head/PageHead";
import ReferencesDropdown from "../Homepage/References/references";
import Citation from "../../components/References/Citation";

type ReferenceType = {
	id: string;
	text: string;
};

const SafetyReferenceList: ReferenceType[] = [
  {
	id: '1',
	text: '« Sécurité en laboratoire », EPFL. Disponible sur: <a href="https://www.epfl.ch/campus/security-safety/activites-en-labo/">https://www.epfl.ch/campus/security-safety/activites-en-labo/</a>. [Consulté le: 3 octobre 2025]'
  },
  {
	id: '2',
	text: '« Philippe Abdel Sayed », EPFL People. Disponible sur: <a href="https://people.epfl.ch/philippe.abdel-sayed">https://people.epfl.ch/philippe.abdel-sayed</a>. [Consulté le: 3 octobre 2025]'
  },
  {
	id: '3',
	text: '« Mandatory basic safety training – FOBS 3 », EPFL. Disponible sur: <a href="https://www.epfl.ch/campus/security-safety/en/fobs-3-2/">https://www.epfl.ch/campus/security-safety/en/fobs-3-2/</a>. [Consulté le: 3 octobre 2025]'
  },
  {
	id: '4',
	text: '« Mandatory basic safety training – FOBS 1+2 », EPFL. Disponible sur: <a href="https://www.epfl.ch/campus/security-safety/en/trainings/mandatory-basic-safety-training-fobs-12/">https://www.epfl.ch/campus/security-safety/en/trainings/mandatory-basic-safety-training-fobs-12/</a>. [Consulté le: 3 octobre 2025]'
  },
  {
	id: '5',
	text: 'C. T. Y. Chan, J. W. Lee, D. E. Cameron, C. J. Bashor, et J. J. Collins, « “Deadman” and “Passcode” microbial kill switches for bacterial containment », Nat Chem Biol, vol. 12, no 2, p. 82‑86, févr. 2016, doi: 10.1038/nchembio.1979. Disponible sur: <a href="https://www.nature.com/articles/nchembio.1979">https://www.nature.com/articles/nchembio.1979</a>. [Consulté le: 3 octobre 2025]'
  },
  {
	id: '6',
	text: '« Swiss Federal Research Institute WSL ». Disponible sur: <a href="https://www.wsl.ch/en/">https://www.wsl.ch/en/</a>. [Consulté le: 3 octobre 2025]'
  },
];

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
	  className="pdf-toggle-button"
	  aria-pressed={isOpen}
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
	  }}
	>
	  {/* Orange dot */}
	  <div style={{ 
		minWidth: '6px', 
		height: '6px', 
		backgroundColor: 'var(--color-dark-orange)', 
		borderRadius: '50%', 
		marginRight: '1rem',
		flexShrink: 0
	  }}></div>

	  {/* Title text */}
	  <span className="pdf-title" style={{ fontSize: '1.125rem', fontWeight: '400' }}>
		{title}
	  </span>

	  {/* Chevron */}
	  <span
		aria-hidden="true"
		className="book-chevron"
		style={{ marginLeft: 'auto', opacity: 0.85 }}
	  >
		▸
	  </span>
	</button>

	{isOpen && (
  <div
    style={{
      marginTop: '1.5rem',
      marginBottom: '2rem',
      width: '100%',
    }}
  >
    <iframe
      src={url}
      width="100%"
      height="800px"
      style={{
        display: 'block',
        width: '100%',
        height: '800px',
        border: 'none',
        borderRadius: '12px',
        backgroundColor: '#fff',
        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
      }}
      title={`${title} PDF`}
    />
  </div>
)}

  </>
);


function SafetyDetails() {
	 const location = useLocation();
	   const [openPdf, setOpenPdf] = useState<string | null>(null);
	 
	   const togglePdf = (pdfUrl: string) => {
		 setOpenPdf(openPdf === pdfUrl ? null : pdfUrl);
	   };


useEffect(() => {
  if (location.hash) {
    const id = decodeURIComponent(location.hash.slice(1));
    const el = document.getElementById(id);
    if (el) {
      // First scroll
      el.scrollIntoView({ behavior: "smooth", block: "start" });

      // Scroll again after images/layout settle
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  }
}, [location.hash]);

   return (
		<div className="safety-container">
			{/* Hero Section */}
			<PageHead
				title="Safety & Security"
				subtitle="Ensuring safety in all aspects of our project: fire retardance tests, GMO handling, and drone operations."
				backgroundUrl="https://static.igem.wiki/teams/5590/safety/photo-2025-10-01-19-43-25.webp"
				grayscale ={true}
			/>
			{/* Main Layout: Hardware-style grid */}
			<div className="hardware-layout">
				<aside className="hardware-sidebar">
  <div className="sidebar-title">Table of Contents</div>
  <nav>
    <ul>
      <li>
        <a className="sidebar-button" href="#general">
          General Safety Guidelines
        </a>
      </li>
      <li>
        <a className="sidebar-button" href="#fire">
          Fire-retardancy Tests
        </a>
      </li>
      <li>
        <a className="sidebar-button" href="#gmo">
          GMO Safety
        </a>
      </li>
      <li>
        <a className="sidebar-button" href="#epfl">
          EPFL Safety Measures
        </a>
      </li>
      <li>
        <a className="sidebar-button" href="#drone">
          Drone Safety
        </a>
      </li>
    </ul>
  </nav>
</aside>

				<section className="hardware-main projectdescrip-section">
					<div className="projectdescrip-block" id="general" style={{ scrollMarginTop: '120px' }}>
						<h2>General Safety Guidelines</h2>
						<p>
							Our project has many aspects that require tight safety measures, including the fire retardance tests performed to assess gel properties, the genetically modified organisms that produce the components of the hydrogel, and the drone. We made sure all of our experiments were performed in safe conditions and with appropriate supervision, and that we stored and trashed our components according to the safety guidelines.
						</p>
					</div>
					<div className="projectdescrip-block" id="fire" style={{ scrollMarginTop: '120px' }}>
						<h2>Fire-retardance tests</h2>
						<p>
							In order to perform our fire-retardance tests safely, we reached out to the occupational Safety and Health (OHS) department, the office dedicated to safety at EPFL <Citation id="1" />. We worked with them to come to a protocol and equipment that would satisfy the safety requirements.
						</p>
						<p>They made sure all members of our iGEM team followed safety training to use the laboratory equipment with Philippe Abdel Sayed <Citation id="2" />. Our Teaching Assistants also followed all 3 FOBS trainings <Citation id="3" /> <Citation id="4" />.</p>

						<p>Given the high temperatures of our tests (~750°), we took extra measures:</p>
						<ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
							<li>Conduct the test outdoors</li>
							<li>Wear heat-resistant gloves, goggles, and non-flammable clothing</li>
							<li>Have a water bucket and a fire extinguisher on hand</li>
							<li>The burn test was conducted over a water basin to ensure that any falling debris would be safely contained and not damage the work surface.</li>
							<li>Abort test if open flame appears on plywood</li>
						</ul>
						<p>
							After this the OHS and the EPFL fire departments attended the first test to make sure there were no safety hazards, and approved it to allow us to pursue the tests on our own under the supervision of our TA Camilla Di Giulio.
						</p>
					</div>
					<div className="projectdescrip-block" id="gmo" style={{ scrollMarginTop: '120px' }}>
						<h2>How to deal with Genetically Modified Organisms (GMO)</h2>
						<p>
						Our gel contains components produced by genetically modified organisms (GMOs). In some cases, these components remain attached to the modified microorganisms themselves (e.g., silicatein and cellulose-binding domain), meaning that the gel may contain whole microorganisms. In future versions of the gel, we plan to include a kill switch in our constructs to strengthen environmental safety. Our idea is to use auxotrophic strains that rely on nutrients only provided in the lab, combined with a simple “deadman” system that prevents survival outside controlled conditions. Alongside the inactivation steps we already apply, this layered approach would make sure that no living microorganisms remain in the final gel <Citation id="5" />.
						</p>
						<p>
						For our experiments, however, the gel was always prepared using pre-synthesized components to guarantee biosecurity. The microorganisms responsible for producing these components were handled strictly in accordance with EPFL’s safety guidelines for GMO use.
						</p>
						<p>
						We deliberately chose E. coli and Saccharomyces cerevisiae (yeast) because they are widely used, well-characterized, and pose very low safety risks. Specifically, the strains we worked with were:
						</p>
						
						<ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
							<li><i>E. Coli</i> T7 express (for protein production)</li>
							<li><i>E. Coli</i> HB101 (cellulose producing strain)</li>
							<li><i>S. Cerevisiae </i> (Yeast)</li>
						</ul>
						<p>
						All of these strains belong to Risk Group 1 and are included on the iGEM White List for safety. However, we had to ensure that S. cerevisiae did not form spores, which we achieved by maintaining the yeast exclusively in liquid cultures with selection marker media and YPAD. These conditions provide enough nutrients to prevent the starvation that usually causes sporulation. For long-term storage, cultures were kept in the fridge under controlled conditions. Importantly, no live yeast was ever present in the tested gel itself, and a kill switch would be implemented as in bacteria in future iterations of the gel.

						</p>
					</div>
					<div className="projectdescrip-block interactive-link" id="epfl" style={{ scrollMarginTop: '120px' }}>
						<h2>EPFL Safety Measures</h2>
						<PDFLink
							url="https://static.igem.wiki/teams/5590/safety/safety-guidelines-general-epfl.pdf"
							title="EPFL Safety Measures"
							isOpen={openPdf === "https://static.igem.wiki/teams/5590/safety/safety-guidelines-general-epfl.pdf"}
							onToggle={() => togglePdf("https://static.igem.wiki/teams/5590/safety/safety-guidelines-general-epfl.pdf")}
						/>


						
					</div>
					<div className="projectdescrip-block" id="drone" style={{ scrollMarginTop: '120px' }}>
						<h2>Drone Safety</h2>
						<p>
						Drone flight restrictions are very tight in Switzerland, we only flew our drone on the EPFL campus with the appropriate authorization. In the future, it will have to comply with national policies regarding drone flights in the wildfire zone, to avoid all accidents related to other aircraft involved in firefighting (typically helicopters, source <Citation id="6" />: WSL ) or weather .
						</p>
					</div>
				</section>
			</div>
			
			<ReferencesDropdown references={SafetyReferenceList} />
		</div>
	);
}

export default SafetyDetails;