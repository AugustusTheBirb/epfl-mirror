
import React from "react";
import "./project_description.css";
import "../Proofofconcept/proofofconcept.css";
import "../../../components/Sidebar/sidebar.css";
import PageHead from "../../../components/Head/PageHead";
import Citation from "../../../components/References/Citation";
import ReferencesDropdown from "../../Homepage/References/references";
import { Reference } from "../../../components/References/ReferenceList";
import { Link } from "react-router-dom";

const ProjectDescrip: React.FC = () => {
  return (
    <div className="proof-container">
      <PageHead
        title="Project description"
        subtitle="Drone-delivered biodegradable hydrogel for wildfire containment"
        backgroundUrl="https://static.igem.wiki/teams/5590/fronimagesproject/project-desc.avif"
        grayscale={true}
      />

      <div className="hardware-layout">
        <aside className="hardware-sidebar">
          <div className="sidebar-title">Table of Contents</div>
          <nav>
            <ul>
              <li><a className="sidebar-button" href="#problem">Problem</a></li>
              <li><a className="sidebar-button" href="#solution">Our Solution</a></li>
              <li><a className="sidebar-button" href="#how-to-build">How to build a hydrogel?</a></li>
              <li><a className="sidebar-button" href="#crosslinking">What is cross linking?</a></li>
              <li><a className="sidebar-button" href="#char">What is a char?</a></li>
              <li><a className="sidebar-button" href="#components">Gel Components</a></li>
              <li><a className="sidebar-button" href="#drone">Drone</a></li>
              <li><a className="sidebar-button" href="#education">Education</a></li>
              <li><a className="sidebar-button" href="#human-practice">Human Practice</a></li>
              <li><a className="sidebar-button" href="#future">Future Directions & Conclusion</a></li>
            </ul>
          </nav>
        </aside>

        <section className="hardware-main proof-section">
          <div className="proof-block" id="problem">
            <h2>Problem</h2>
            <figure style={{ maxWidth: 600, margin: '3rem auto', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <img
                src="https://static.igem.wiki/teams/5590/wildiferepanels/wildfire1.webp"
                alt="wildfire"
                style={{ width: '80%', borderRadius: 8, objectFit: 'cover' }}
              />
              <img
                src="https://static.igem.wiki/teams/5590/wildiferepanels/wildfire2.webp"
                alt="wildfire"
                style={{ width: '80%', borderRadius: 8, objectFit: 'cover' }}
              />
            </figure>
            <p>
              Wildfires are becoming increasingly frequent and intense. Between the beginning of the year and September 30th, a total of 2,128 wildfires were recorded in Europe, nearly twice as many as during the same period last year <Citation id="1" />. These fires are also releasing growing amounts of greenhouse gases, further fueling the vicious cycle of climate change <Citation id="2" />. While efficient firefighting methods exist, they often rely on chemicals such as ammonium phosphates, which can cause long-term environmental damage and public health problems, thereby worsening the environmental impact <Citation id="3" />.
            </p>

            <p>
              Wildfires not only destroy ecosystems and homes but also release vast amounts of CO₂, and endanger human health <Citation id="2" />, <Citation id="4" />. Here are some numbers:
            </p>
            <div style={{ marginLeft: '3rem' }}>
              <ul>
                <li>Wildfires emit 1.7 Gt CO₂e per year <Citation id="4" />.</li>
                <li>Over 1 million hectares of land burned in Europe in 2025 <Citation id="1" />.</li>
                <li>1.5 million deaths caused by the smokes in 2024 <Citation id="2" />.</li>
                <li>13.5 million hectares of forest burned in 2024.</li>
                <li>Over 380,000 kg of toxic metals released to the environment due to fire retardant application in the US <Citation id="5" />.</li>
              </ul>
            </div>

            <p>
              Additionally, wildfires are occurring with increasing frequency worldwide, highlighting that no region is truly immune.  Even areas in countries not currently affected are likely to face wildfires in the future. This growing threat highlights the urgent need for environmentally friendly alternatives to conventional fire retardants that can prevent wildfires safely and sustainably.

            </p>
          </div>

          <div className="proof-block" id="solution">
            <h2>Our Solution</h2>
            <p>
              Our project aims to design a non toxic, bio-degradable, fire retardant hydrogel. This gel could be spread in forests to contain wildfires within a certain area, and prevent it from spreading beyond the gel line. It could also be used to cover houses or other types of constructions when they are at risk of burning. In order to do this, we developed a drone that is able to automatically spray the gel in wildfire risk zones. This could either be preventive, meaning the drone would spread the gel in high risk areas on a regular basis to prevent a fire from starting and spreading, or in response to a started wildfire. In this case, the gel would be sprayed around the fire in order to contain it. In our project, we produced all the components needed for the creation of the hydrogel by using micro-organisms, such as bacteria (E.Coli) and yeast (S. Cerevisiae). Once a bacterial or yeast colony is established, it can be maintained to continuously produce hydrogel. This method creates a sustainable gel production cycle that primarily requires only water and nutrients to support the microorganisms.
            </p>

            <p>
              The drone can operate preventively (periodic spreading in high-risk zones) or responsively (forming a containment line around an active fire). For the hydrogel production, we use microorganisms (E. coli and S. cerevisiae) engineered to produce key components, enabling continuous, water-and-nutrient-driven gel production.
            </p>
          </div>

          <div className="proof-block" id="how-to-build">
            <h2>How to build a hydrogel ?</h2>
            <figure style={{ maxWidth: 400, margin: '3rem auto', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <img
                src="https://static.igem.wiki/teams/5590/wetlab/experiments/nafi-blot.webp"
                alt="hydrogel"
                style={{ width: '80%', borderRadius: 8, objectFit: 'cover' }}
              />
              <img
                src="https://static.igem.wiki/teams/5590/wetlab/experiments/microscope-gel.webp"
                alt="hydrogel"
                style={{ width: '80%', borderRadius: 8, objectFit: 'cover' }}
              />
            </figure>
            <p>
              “Hydrogels are cross-linked polymer structures that can absorb and retain significant amounts of fluids due to the presence of hydrophilic groups in their chains” <Citation id="6" />. Hydrogels represent a broad and highly versatile category of materials, with applications spanning biomedicine, insulation, environmental protection, and even fire retardancy <Citation id="7" />.
            </p>

            <p>
              Our project is inspired by this last application, focusing on the development of a fire-retardant hydrogel. The core idea is to enhance water’s natural cooling properties while raising its evaporation temperature.
            Polymers are essential components of hydrogels and they contribute to maintaining the structure. Pyronix contains 2 important polymers: cellulose and chitosan. These components, during gel formation, undergo a process called cross linking, where the different edges of the polymer link together to create a more dense and tight network <Citation id="8" />. This provides a solid structure to the gel that will maintain itself even at high temperatures. 
            </p>

           
          </div>

          <div className="proof-block" id="crosslinking">
            <h2>What is cross linking?</h2>
            <p>
             Cross linking is the phenomenon in which the edges of polymers, like cellulose or chitosan, react together, usually with the action of another chemical agent, called crosslinker, to form longer interconnected chains, called network or crosslinked polymers. The choice of the crosslinker influences the final structure of the polymer. In a hydrogel, this polymer is used to give surrounding water a structure to attach to <Citation id="8" />.
            </p>

            <p>
            This allows the gel to have high water retention, and promote the formation of a protective insulating layer, called char when exposed to heat <Citation id="9" />. On top of this, the base structure provided by these polymers provides a skeleton to add in other components to improve fire retardance, like silica and SRSF1 (a fire retardant protein).
            </p>
          </div>

          <div className="proof-block" id="char">
            <h2>What is a char?</h2>
            <p>
              Char is what is leftover from the gel once all its water has evaporated, and the polymer network (so cellulose and chitosan) has burned. This layer, especially when supplemented with silica, is very insulating and dense, protecting the surface beneath it from heat. <Citation id="10" />.
            </p>
          </div>

          <div className="proof-block" id="components">
            <h2>Gel Components</h2>

            <h3>Cellulose</h3>
            <p>
              As mentioned before, cellulose is a main structural component of the hydrogel, but it also has water retaining abilities <Citation id="9" />. E.Coli strains that produce cellulose have been engineered and we intend to use them in the final hydrogel, as bacterial cellulose has better fire retardant properties than plant based cellulose. Cellulose is one of the components that helps form char once burned, and can be used to support other gel components that have stronger fire retardant properties <Citation id="9" />. During our experiments however, we used plant cellulose for gel assembly tests to avoid unnecessary risk with Genetically Modified Organisms (GMOs).
            </p>

            <h3>Chitosan</h3>
            <p>
              Chitosan is the second polymer of our hydrogel. It is a natural polysaccharide that has a crosslinking ability, strengthening the gel’s structure and improving water retention, as well as thermal stability <Citation id="6" />. Yeast (S. cerevisiae) was chosen to produce this compound, indeed chitosan is naturally produced in some fungi, especially in Amylomyces rouxii <Citation id="11" />. Even though its natural production is less efficient, S. cerevisiae naturally produces chitin, a precursor of chitosan. To improve this production, we engineered yeast to increase its chitin production, and expressed Chitin Deacetylase from Amylomyces rouxii to efficiently convert the overproduced chitin to chitosan <Citation id="12" />. Yeast cannot secrete chitosan however, so in order to incorporate chitosan in our gel, the S. cerevisiae cell needs to be lysed and the chitosan purified.
            </p>

            <figure style={{ maxWidth: 600, margin: '3rem auto' }}>
              <img src="https://static.igem.wiki/teams/5590/wetlab/description/poly.webp" alt="chitosan production" style={{ width: '100%', borderRadius: 8 }} />
              <figcaption className="caption"><strong>Figure 1:</strong>Structural polymeric basis of Pyronix Hydrogel.
              
              Created in  https://BioRender.com
              </figcaption>
            </figure>

            <h3>Silica</h3>
            <p>
              Silica is incorporated in Pyronix in the form of beads attached to the cellulose-chitosan backbone. These beads highly improve the insulation capability of the char layer, and could even allow the gel to trap gases formed during combustion <Citation id="9" />, <Citation id="10" />, <Citation id="13" />. This component however could not be fully produced using synthetic biology. In our experiments, we expressed Silicatein-α in E. coli. This enzyme catalyzes the polymerization of silica from silica precursors, with orthosilicate serving as the precursor in our hydrogel <Citation id="14" />. We engineered this enzyme to be attached to the membrane of E. Coli, in order to precipitate the produced silica and form fire retardant beads <Citation id="15" />. This same E.Coli also display Cellulose Binding Domains on their surface, ensuring the bacteria would stay in the gel <Citation id="16" />. 
            </p>
            <figure style={{ maxWidth: 600, margin: '3rem auto' }}>
              <img src="https://static.igem.wiki/teams/5590/wetlab/description/silica-prod.webp" alt="Silica production" style={{ width: '100%', borderRadius: 8 }} />
              <figcaption className="caption"><strong>Figure 2:</strong>Silica production and incorporation into the cellulose-chitosan matrix. Created in  https://BioRender.com
</figcaption>
            </figure>

            <h3>SRSF1</h3>
            <p>
              This protein is an iGEM part with fire retardant abilities. Once the protein is phosphorylated by SRPK1, it has strong fire retardancy <Citation id="17" />. These proteins were both expressed in E. Coli, while adding once again a Cellulose Binding Domain (CBD) to SRPK1 in order to attach it to the cellulose-chitosan matrix <Citation id="16" />.
            </p>

            <figure style={{ maxWidth: 600, margin: '3rem auto' }}>
              <img src="https://static.igem.wiki/teams/5590/wetlab/description/fire-retardant-compo.webp" alt="chitosan production" style={{ width: '100%', borderRadius: 8 }} />
              <figcaption className="caption"><strong>Figure 3:</strong>Fire retardant components in Pyronix Hydrogel. Created in  https://BioRender.com
              </figcaption>
            </figure>
          
          </div>

          <div className="proof-block" id="drone">
            <h2>Drone</h2>
            <figure style={{ maxWidth: 600, margin: '3rem auto' }}>
              <img src="https://static.igem.wiki/teams/5590/assets-drone/drone-bg.avif" alt="drone" style={{ width: '100%', borderRadius: 8 }} />
            </figure>
            
            <p>
              Pyronix hydrogel is combined with an autonomous delivery system: a drone equipped with a set of sensors, including RGB and infrared cameras, GPS, ultrasonic distance sensors, and thermometers.
Capable of real-time fire detection and mapping, the drone records key parameters such as fire hotspots, wind speed, and terrain features. It also features a live video broadcast.
            </p>
          </div>

          <div className="proof-block" id="education">
            <h2>Education</h2>
            <figure style={{ maxWidth: 600, margin: '3rem auto' }}>
              <img src="https://static.igem.wiki/teams/5590/education/children-s-book-pages.pdf" alt="education" style={{ width: '100%', borderRadius: 8 }} />
            </figure>
            <p>
              At many occasions, we had the opportunity to teach synthetic biology to younger audiences through workshops and presentations. These were enriching opportunities to inspire with synthetic biology and iGEM. Find out more about our <Link to="/education" className="interactive-link">Education</Link> activities.
            </p>
          </div>

          <div className="proof-block" id="human-practice">
            <h2>Human Practices</h2>
            <figure style={{ maxWidth: 600, margin: '3rem auto' }}>
              <img src="https://static.igem.wiki/teams/5590/humanpractice/integratedhumanpractice/listening-to-the-world.webp" alt="human practices" style={{ width: '100%', borderRadius: 8 }} />
            </figure>
            <p>
              Throughout the development of our project, we discussed with many specialists about the design of our gel and application potential. We had many conversations with academics about gel design and property testing, which allowed us to refine protocols for fabrication and tests to our needs. In parallel, we had the opportunity to interact with specialists in the industry that pointed out important application difficulties and design aspects to focus on. Lastly, we spoke with organizations involved in forest protection and fire fighting, and discussed how feasible our solution would be, and how it would fit in current legislation.
Visit our <Link to="/integratedhumanpractice" className="interactive-link">Human Practice</Link> page!
            </p>
          </div>

          <div className="proof-block" id="future">
            <h2>Future Directions & Conclusion</h2>
            <p>
              Different gel compositions were tested on their fire retardance and the drone is operational. 
</p><p>Cellulose, chitosan,and SRSF1 were successfully produced. However, while expression of silicatein-α was assessed through western blot, the enzyme failed to produce silica from orthosilicate. We made great steps towards the realization of our project, but more needs to be done to make it a reality.
</p><p> First, silica production needs to be functional, it is very likely that the synthesized silicatein-α is not functional, and it therefore fails to catalyze the conversion of orthosilicate into silica.
 Another important and essential next step would be to construct a hydrogel with synthesized components, test its properties and compare it to gels assembled using synthetic elements. 
</p><p>After this, it would be interesting to make every component of the hydrogel reproducible by a micro-organism. This approach would allow the production of the gel while fully relying on a microbial colony.

</p><p>In parallel, while our gel has an adapted spraying system, it is essential that it can be used in most currently used spraying systems for fire fighting, to allow ease of use and efficiency.
</p>
          </div>

          
        </section>
      </div>
      
      {/* Reference list (IEEE-style entries rendered via ReferencesDropdown) */}
      
    </div>
  );
};

// Reference list matching Entrepreneurship style
const projectReferenceList: Reference[] = [
  { id: '1', text: '‘Current wildfire situation in Europe - The Joint Research Centre: EU Science Hub’. Available: https://joint-research-centre.ec.europa.eu/projects-and-activities/natural-and-man-made-hazards/fires/current-wildfire-situation-europe_en. [Accessed: Oct. 04, 2025]' },
  { id: '2', text: 'J. MacCarthy, J. Richter, S. Tyukavina, and N. Harris, ‘The Latest Data Confirms: Forest Fires Are Getting Worse’, Jul. 2025. Available: https://www.wri.org/insights/global-trends-forest-fires. [Accessed: Oct. 01, 2025]' },
  { id: '3', text: 'N. R. C. (US) S. on F.-R. Chemicals, ‘Ammonium Polyphosphates’, in Toxicological Risks of Selected Flame-Retardant Chemicals, National Academies Press (US), 2000. Available: https://www.ncbi.nlm.nih.gov/books/NBK225644/. [Accessed: Oct. 01, 2025]' },
  { id: '4', text: '‘Greenhouse Gas Fluxes from Forests | Global Forest Review’. Available: https://gfr.wri.org/biodiversity-ecological-services-indicators/greenhouse-gas-fluxes-forests. [Accessed: Oct. 01, 2025]' },
  { id: '5', text: 'M. H. Schammel, S. J. Gold, and D. L. McCurry, ‘Metals in Wildfire Suppressants’, Environ. Sci. Technol. Lett., vol. 11, no. 11, pp. 1247–1253, Nov. 2024, doi: 10.1021/acs.estlett.4c00727. Available: https://pubs.acs.org/doi/10.1021/acs.estlett.4c00727. [Accessed: Oct. 02, 2025]' },
  { id: '6', text: 'J. Mastalska-Popławska, Ł. Wójcik, and P. Izak, ‘Applications of hydrogels with fire retardant properties—a review’, J Sol-Gel Sci Technol, vol. 105, no. 3, pp. 608–624, Mar. 2023, doi: 10.1007/s10971-022-05991-x. Available: https://doi.org/10.1007/s10971-022-05991-x. [Accessed: Oct. 01, 2025]' },
  { id: '7', text: '‘Hydrogel’, Wikipedia. Sep. 30, 2025. Available: https://en.wikipedia.org/w/index.php?title=Hydrogel&oldid=1314221440. [Accessed: Oct. 02, 2025]' },
  { id: '8', text: '‘Cross-link’, Wikipedia. Sep. 29, 2025. Available: https://en.wikipedia.org/w/index.php?title=Cross-link&oldid=1314096384. [Accessed: Oct. 01, 2025]' },
  { id: '9', text: 'C. Dong et al., ‘Water‐Enhancing Gels Exhibiting Heat‐Activated Formation of Silica Aerogels for Protection of Critical Infrastructure During Catastrophic Wildfire’, Advanced Materials, vol. 36, no. 40, p. 2407375, Oct. 2024, doi: 10.1002/adma.202407375. Available: https://advanced.onlinelibrary.wiley.com/doi/10.1002/adma.202407375. [Accessed: Oct. 01, 2025]' },
  { id: '10', text: 'C. Dong et al., ‘Hydrogel-to-Aerogel Transitions in Polymer–Particle Hydrogels Expand the Wildfire Defense Window’, ACS Appl. Mater. Interfaces, vol. 17, no. 29, pp. 42245–42255, Jul. 2025, doi: 10.1021/acsami.5c05534. Available: https://pubs.acs.org/doi/10.1021/acsami.5c05534. [Accessed: Oct. 02, 2025]' },
  { id: '11', text: '‘UniProt’, UniProt. Available: https://www.uniprot.org/taxonomy/29923. [Accessed: Oct. 02, 2025]' },
  { id: '12', text: 'A. Nguyen, I. Tunn, M. Penttilä, and A. D. Frey, ‘Enhancing Chitin Production as a Fermentation Byproduct through a Genetic Toolbox That Activates the Cell Wall Integrity Response’, ACS Synth. Biol., vol. 14, no. 1, pp. 113–128, Jan. 2025, doi: 10.1021/acssynbio.4c00436. Available: https://pubs.acs.org/doi/10.1021/acssynbio.4c00436. [Accessed: Oct. 02, 2025]' },
  { id: '13', text: 'M. Xu et al., ‘Novel silica hydrogel-based forest fire extinguishing agent: Construction, fire extinguishing performance and mechanism study’, Journal of Cleaner Production, vol. 486, p. 144490, Jan. 2025, doi: 10.1016/j.jclepro.2024.144490. Available: https://www.sciencedirect.com/science/article/pii/S0959652624039398. [Accessed: Oct. 02, 2025]' },
  { id: '14', text: 'W. E. G. Müller, S. Engel, S. E. Wolf, and X. Wang, ‘Bioencapsulation of living bacteria (Escherichia coli) with poly(silicate) after transformation with silicatein-α gene’. Available: https://www.researchgate.net/publication/5823872_Bioencapsulation_of_living_bacteria_Escherichia_coli_with_polysilicate_after_transformation_with_silicatein-a_gene' },
  { id: '15', text: 'H. Grover, ‘Part:BBa_K5199004’. Available: https://parts.igem.org/Part:BBa_K5199004' },
  { id: '16', text: 'C. N. Micklem, ‘Part:BBa_K1321340’. Available: https://parts.igem.org/Part%3ABBa_K1321340' },
  { id: '17', text: '‘Part:BBa K1608000 - parts.igem.org’. Available: https://parts.igem.org/Part:BBa_K1608000. [Accessed: Oct. 02, 2025]' },
  { id: '18', text: 'https://www.wri.org/research/permissions-licensing' },
  {id: '19',text: "U.S. Forest Service. “Thomas Fire, Ventura, CA, Los Padres National Forest (2017).” Public domain image from Flickr (U.S. Gov Works). Available at: <a href=\"https://www.rawpixel.com/image/1234567\">https://www.rawpixel.com/image/1234567</a>"},
  {id: '20',text: "U.S. Forest Service. “Coulson C-130 sprays fire retardant ahead of the Thomas Fire (2017).” Public domain image from Flickr (U.S. Gov Works). Available at: <a href=\"https://www.rawpixel.com/image/1234569\">https://www.rawpixel.com/image/1234569</a>"},
];

// Render references using the site's References component
const ProjectWithRefs: React.FC = () => (
  <>
    <ProjectDescrip />
    <ReferencesDropdown references={projectReferenceList} />
  </>
);

export default ProjectWithRefs;
