import React from "react";
import "./proofofconcept.css";
import "../../../components/Sidebar/sidebar.css";
import PageHead from "../../../components/Head/PageHead";
import Citation from "../../../components/References/Citation";
import ReferencesDropdown from "../../Homepage/References/references";
import { Reference } from "../../../components/References/ReferenceList";

const ProofOfConcept: React.FC = () => {
  return (
    <div className="proof-container">
      <PageHead
        title="Proof of concept"
        subtitle="Pyronix hydrogel proof of concept"
        backgroundUrl="https://static.igem.wiki/teams/5590/fronimagesproject/proof-of-concept.avif"
        grayscale={true}
      />

      <div className="hardware-layout">
        <aside className="hardware-sidebar">
          <div className="sidebar-title">Table of Contents</div>
          <nav>
            <ul>
              <li><a className="sidebar-button" href="#overview">Introduction</a></li>
              <li><a className="sidebar-button" href="#experiments">Experiments</a></li>
              <li><a className="sidebar-button" href="#biological-synthesis">Biological synthesis</a></li>
              <li><a className="sidebar-button" href="#gel-property">Gel property assessment</a></li>
              <li><a className="sidebar-button" href="#future">Future directions</a></li>
            </ul>
          </nav>
        </aside>

        <section className="hardware-main proof-section">
          <div className="proof-block" id="overview">
            <p>
              The hydrogel is designed with two main functions:
            </p>
            <p>
              <strong>1. Fire retardancy.</strong> Its components must provide effective fire resistance while ensuring the material remains sprayable, allowing compatibility with drone-based spraying systems.
            </p>
            <p>
              <strong>2. Microbial production.</strong> Ideally, all components of the hydrogel would be produced by microorganisms. However, given time constraints, we focused on the key elements critical for gel structure and fire retardance: cellulose, chitosan, silicatein, and SRSF1, a fire-retardant protein. The silica component, in particular, is synthesized from silica precursors with the aid of silicatein.
            </p>
          </div>

          <div className="proof-block" id="experiments">
            <h2>Experiments</h2>
          </div>
          <div className="proof-block" id="biological-synthesis">
            <h3>Biological synthesis</h3>

            <h4>Achievement 1: Transformation of Silicatein in E. Coli:</h4>
            <p>
We designed silicatein-α plasmids for E. coli, that allow the bacteria to produce silicatein-α <Citation id="2"/>. We also added an INP display sequence to the silicatein-α, which makes the bacteria display the silicatein-α on their surface, and a cellulose binding domain <Citation id="3"/><Citation id="4"/>. In our experiments, we first proceeded to transform the plasmids in E. Coli. Then we assessed the expression of silicatein-α using western blotting.  During fluorescent microscopy, rhodamine 123 allowed to detect silica specifically, however, the synthesized silicatein-α failed to catalyze the conversion of silica precursor into silica.            </p>

            <h4>Achievement 2: Transformation of Chitosan in Yeast:</h4>
            <p>We choose yeast to produce chitosan, since it already  naturally produces chitin in small quantities. First, a constitutively active form of the native GTPase RHO1 was expressed in Yeast, which increased the chitin production <Citation id="5" />. Chitin needs to be de-acetylazed to become chitosan, we choose to add CDA (chitosan deacetylase) from Amylomyces rouxii/ Mucor rouxii <Citation id="6" />.  The presence of the constitutively active Rho1 and CDA was confirmed by western blotting, and later, chitin and chitosan were identified using Flow Cytometry. Chitin was identified using WGA-AF488 and chitosan with Cibacron.
            </p>
            

            <h4>Achievement 3: Production of SRSF1 and SRPK1 by bacteria:</h4>
            <p>
              In a similar fashion to silicatein, we had E. Coli produce SRSF1 and SRPK1. SRSF1 is the actual fire retardant here, but it is most efficient once phosphorylated, which is the role of SRPK1 <Citation id="6" />. The presence of both these enzymes was verified using western blot, and later SRSF1 was isolated by chromatography.
            </p>
          </div>

          <div className="proof-block" id="gel-property">
            <h3>Gel property assessment</h3>
            <h4>Achievement 1: Viscosity measurement for different gel composition:</h4>
              <p>
              Viscosity is the main physical property that will determine how we can use our gel. It is an important component for the design of a compatible spraying system, as well as for assessing compatibility with other gel distribution methods and current fire-fighting equipment. We tested the relationship between viscosity and shear stress for multiple gel compositions involving cellulose, chitosan and silica. A rotational rheometer from the Soft Materials Lab at EPFL was used for this <Citation id="1" />.
            </p>

              <p>
                These measurements allowed us to approximate our hydrogel as a Cross Fluid and model the relationship between shear rate and viscosity.
              </p>

            <h4>Achievement 2: Fire retardancy test depending on composition:</h4>
            <p>
              We aimed to demonstrate the gel’s ability to resist ignition, promote effective charring, and protect the underlying substrate. To achieve this, we conducted a small-scale burn test comparing the burn rates of treated versus untreated wood samples, while also observing how each sample burned over time. Woodboards were exposed to flame for 90 seconds under different conditions. Fire retardance was assessed using an IR camera and qualitative visual analysis. The most effective protection was observed in the Cellulose–Chitosan–Silica–SRSF1 formulation, which prevented sustained combustion, preserved wood integrity, and displayed markedly reduced heat penetration on infrared imaging. This was also supported by IR-image analysis.
            </p>
          </div>

          

          <div className="proof-block" id="future">
            <h2>Abstract: Future directions of Gel development</h2>
          <p>
            One of the key advantages of using synthetic biology for gel production is its automation: once the engineered strains are cultured, simply feeding the microorganisms is enough to drive gel synthesis. In the current version of our hydrogel, components such as cellulose, chitosan, silicatein-α, SRSF1, and SRPK1 are produced by microorganisms. However, these components alone are not sufficient to form a functional hydrogel. Therefore, the next step in improving our system is to enable microbial production of all essential components required for gel formation.
</p><p>Our data demonstrate that the pyronix hydrogel possesses fire-retardant properties. However, further improvements are necessary for it to be truly effective against wildfires. Future research should explore variations in composition as well as the incorporation of additional fire-retardant proteins into the system. These refinements could enhance both the fire resistance and the structural stability of the hydrogel.
</p><p>Furthermore, while our drone enables automated deployment of the hydrogel, the ideal scenario is to develop a formulation of the hydrogel that is compatible with both our drone-based spraying system and standard firefighting equipment. This compatibility would significantly enhance the gel’s versatility and broaden its potential applications in real-world firefighting operations.
</p><p>The current version does not include living micro-organisms inside of the gel, they are only used for biosynthesis of gel components.
</p><p>This prevents any release of GMOs into the environment. Nonetheless, this system demonstrates strong potential for further development, such as extending protection duration or improving material properties. Alternative hosts, like fungi that naturally secrete chitosan, could also make production more efficient.
</p>
          </div>

         
        </section>
      </div>
    </div>
  );
};

const proofReferenceList: Reference[] = [
  { id: '1', text: '‘Soft Materials Laboratory’, EPFL. Available:<a href="https://www.epfl.ch/labs/smal/"> https://www.epfl.ch/labs/smal/</a>. [Accessed: Oct. 04, 2025]' },
  { id: '2', text: 'C. N. Micklem, ‘Part:BBa_K1321340’. Available: <a href="https://parts.igem.org/Part%3ABBa_K1321340"> https://parts.igem.org/Part%3ABBa_K1321340</a>' },
  { id: '3', text: 'W. E. G. Müller, S. Engel, S. E. Wolf, and X. Wang, ‘Bioencapsulation of living bacteria (Escherichia coli) with poly(silicate) after transformation with silicatein-α gene’. Available: <a href="https://www.researchgate.net/publication/5823872_Bioencapsulation_of_living_bacteria_Escherichia_coli_with_polysilicate_after_transformation_with_silicatein-a_gene">https://www.researchgate.net/publication/5823872_Bioencapsulation_of_living_bacteria_Escherichia_coli_with_polysilicate_after_transformation_with_silicatein-a_gene</a>' },
  { id: '4', text: 'A. Nguyen, I. Tunn, M. Penttilä, and A. D. Frey, ‘Enhancing Chitin Production as a Fermentation Byproduct through a Genetic Toolbox That Activates the Cell Wall Integrity Response’, ACS Synth. Biol., vol. 14, no. 1, pp. 113–128, Jan. 2025, doi: 10.1021/acssynbio.4c00436. Available: <a href="https://pubs.acs.org/doi/10.1021/acssynbio.4c00436"> https://pubs.acs.org/doi/10.1021/acssynbio.4c00436</a>. [Accessed: Oct. 04, 2025]' },
  { id: '5', text: '‘UniProt’, UniProt. Available: <a href="https://www.uniprot.org/taxonomy/29923"> https://www.uniprot.org/taxonomy/29923</a>. [Accessed: Oct. 04, 2025]' },
  { id: '6', text: '‘Part:BBa K1608000 - parts.igem.org’. Available: <a href="https://parts.igem.org/Part:BBa_K1608000"> https://parts.igem.org/Part:BBa_K1608000</a>. [Accessed: Oct. 04, 2025]' }
];

const ProofWithRefs: React.FC = () => (
  <>
    <ProofOfConcept />
    <ReferencesDropdown references={proofReferenceList} />
  </>
);

export default ProofWithRefs;
