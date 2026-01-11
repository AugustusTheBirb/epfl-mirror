import React from "react";
import "./attribution.css";
import "../Project/Proofofconcept/proofofconcept.css";
import "../../components/Sidebar/sidebar.css";
import PageHead from "../../components/Head/PageHead";
import { Link } from "react-router-dom";

const Attributions: React.FC = () => {
  return (
    <div className="proof-container">
      <PageHead
        title="Attributions"
        subtitle="Acknowledging everyone who made our wildfire detection and suppression project possible"
        backgroundUrl="https://static.igem.wiki/teams/5590/teamphotos/grouponepfl.webp"
      />

      <div className="hardware-layout">
        <aside className="hardware-sidebar">
          <div className="sidebar-title">Table Of Contents</div>
          <nav>
            <ul>
              <li><a className="sidebar-button" href="#introduction">Introduction</a></li>
              <li><a className="sidebar-button" href="#supervisor-team">Supervisor Team</a></li>
              <li><a className="sidebar-button" href="#team">Team Member Contributions</a></li>
              <li><a className="sidebar-button" href="#external-support">External Support</a></li>
              <li><a className="sidebar-button" href="#sponsors">Sponsors & Funding</a></li>
              <li><a className="sidebar-button" href="#software">Software Tools</a></li>
              <li><a className="sidebar-button" href="#conclusion">Acknowledgments</a></li>
            </ul>
          </nav>
        </aside>

        <section className="hardware-main proof-section">
          {/* INTRODUCTION */}
          <div className="proof-block" id="introduction">
            <p>
              Our project would not have been possible without the incredible support, guidance, and expertise from numerous individuals and organizations. 
            </p>
            
          </div>

          {/* SUPERVISOR TEAM */}
          <div className="proof-block" id="supervisor-team">
            <h2>Supervisor Team</h2>
            <p>
              Our supervisor team provided the foundation for our project's success through their expertise, guidance, and unwavering support throughout our iGEM journey.
            </p>

            <div className="attribution-detailed-section">
              <h3>Brian McCabe — Primary PI</h3>
              <p>
                Brian McCabe is our Primary PI and the leader of iGEM EPFL. His extensive experience with iGEM has been an invaluable source of guidance for every aspect of the project, from wet lab experiments to video production, as well as the wiki, test bench, and drone development.
              </p>
            </div>

            <div className="attribution-detailed-section">
              <h3>Nicolas Manuel Goldbach — Secondary PI</h3>
              <p>
                Nicolas Manuel Goldbach is a Doctoral Assistant in the EPFL Laboratory of Protein Design &amp; Immunoengineering. 
                He was one of our main guides in the wet lab. He helped us design our experiments, making sure we thought critically 
                about our strategies and adapted when needed. He also took care of the very practical (but essential!) task of ordering 
                reagents and products, making sure we always had what we needed to keep working. Whenever we were learning a new technique, 
                Nico patiently demonstrated it the first time, following the principle: “we show it once, then you do it yourself.” 
                This gave us hands-on experience while knowing we had their guidance when necessary. He also went out of his way to lend 
                us missing compounds or materials from his own lab, which helped us move forward smoothly. His rigor, clarity, and support 
                made a huge difference in how confidently we could carry out our experiments.
              </p>
            </div>

            <div className="attribution-detailed-section">
              <h3>Camilla Di Giulio — Secondary PI</h3>
              <p>
                Camilla Di Giulio, a Doctoral Assistant in the Antanasijevic Lab of Virology and Structural Immunology, served 
                as our mentor on this student-led project. She guided our test-bench and wet-lab work—advising on hydrogel stress 
                tests, shaping experimental design, and helping interpret results—while keeping the execution in our hands. Camilla 
                introduced techniques such as western blotting, coached us through the first runs, and then stepped back so we could 
                operate independently, deliberately building our autonomy. Beyond the science, she helped us function better as a team: 
                balancing workloads, keeping regular check-ins to stay aligned, and lifting spirits when momentum dipped. Like Nico, 
                she readily shared reagents and materials from her lab when we were stuck. Her rigor, persistence, and steady mentorship 
                clearly improved our coordination and outcomes.
              </p>
            </div>

            <div className="attribution-detailed-section">
              <h3>Julius Wenckstern — Secondary PI</h3>
              <p>
                Julius Wenckstern is a Doctoral Assistant in the EPFL Laboratory of Protein Design & Immunoengineering. He is one of our two instructors with Camilla Di Giulio. Julius became our go-to person whenever something broke outside the wet lab. He jumped on wiki issues and bugs, chasing them down until our pages worked smoothly again. On the analysis side, he spent a lot of time with us walking through pipelines, stress-testing our assumptions, and helping us extract clear stories from messy data. He also weighed in on modeling questions when we needed a nudge, helping us set up simple frameworks and sanity checks that complemented our experiments.
                A hallmark of Julius’s mentorship is how he pushes us to think for ourselves. He asks pointed questions, offers guardrails, and insists we come to our own conclusions with his guidance. He never tells us what to do; instead, he equips us with the tools and reasoning to do it well. This balance of technical savvy and thoughtful coaching made a real difference in the quality and confidence of our work.

              </p>  
            </div>
          </div>

          {/* TEAM MEMBER CONTRIBUTIONS */}
          <div className="proof-block" id="team">
            <h2>Team Member Contributions</h2>

            <div className="attribution-detailed-section">
              <h3>Milo Sanders — STUDENT</h3>
              <p><strong>Role:</strong> Wet Lab Team Lead, Experimentation, Protocols, Data Analysis</p>
              <p>
                Milo led the wet lab team and served as the project’s experimental backbone. He designed and executed daily experiments, 
                maintained protocols and records, and coordinated resources to keep the experimental workflow on track.
              </p>
            </div>

            <div className="attribution-detailed-section">
              <h3>Cynthia Rabay — STUDENT</h3>
              <p><strong>Role:</strong> Conceptualization, Test Bench, Protocol Writing, Analysis, Software, Human Practices, Safety, Voiceover, Investigation</p>
              <p>
                Cynthia conceived the project and convinced the team with her pitch. She led the test-bench work, writing protocols, running experiments, 
                and analyzing results, and developed the drone software. She conducted stakeholder interviews for Human Practices, served as head of safety, 
                and narrated the team video.
              </p>
            </div>

            <div className="attribution-detailed-section">
              <h3>Sarah Bianchi — STUDENT</h3>
              <p><strong>Role:</strong> Experiment Lead, Protocol Writing, Wet Lab, Test Bench</p>
              <p>
                Sarah was head of experiments. She authored experimental protocols, ensured methodological rigor, and supported execution across wet lab and test-bench activities.
              </p>
            </div>

            <div className="attribution-detailed-section">
              <h3>Tessnim Bechrifa — STUDENT</h3>
              <p><strong>Role:</strong> Video Production, Scripting, Filming, Editing, Photography, Social Media, Fluid Mechanics, Materials Characterization, Wet Lab Support, Public Engagement, Analysis, Visualization, Writing</p>
              <p>
                Tessnim led all video work—writing scripts, filming, and editing—and managed the team’s photos and social media (LinkedIn, YouTube, Instagram). 
                Drawing on her experience in fluid mechanics, she assessed the physical properties of the hydrogel and contributed to wet lab and test-bench experiments.
              </p>
            </div>

            <div className="attribution-detailed-section">
              <h3>Nafi Anna Dramé — STUDENT</h3>
              <p><strong>Role:</strong> Human Practices Lead, Stakeholder Engagement, Writing, Sponsorship, Animation, Branding, Wet Lab/Test Bench Support</p>
              <p>
                Nafi led the Human Practices team, contacting stakeholders, conducting interviews, and writing the wiki text. She supported sponsorship outreach, 
                created video animations, co-designed the Pyronix logo with Julie, and assisted with wet lab and test-bench experiments.
              </p>
            </div>

            <div className="attribution-detailed-section">
              <h3>Elyse Peguret — STUDENT</h3>
              <p><strong>Role:</strong> Wiki Team Lead, Web Development, Content Coordination, Project Management, Budgeting, Logistics, Team Outfits</p>
              <p>
                Elyse led the wiki effort, coded the site, and coordinated content timelines. She enforced deadlines throughout the summer, managed the budget, booked accommodations, and organized team outfits for the competition. She also supported the team by assisting with video production, conducting interviews, and helping in the wet lab whenever extra assistance was needed.
              </p>
            </div>

            <div className="attribution-detailed-section">
              <h3>Khaoula Wakkach — STUDENT</h3>
              <p><strong>Role:</strong> Modeling, Data Analysis, Wiki Support</p>
              <p>
              Khaoula drove the project’s modeling work. As the wiki freeze approached, she joined the wiki team to help design and code pages and integrate content and modeling outputs. She created the posters and the children’s book for Education and designed the merch.
              </p>
            </div>

            <div className="attribution-detailed-section">
              <h3>David Farah — STUDENT</h3>
              <p><strong>Role:</strong> Drone Lead, CAD, Hardware, Procurement, Assembly, Software</p>
              <p>
                David led the drone team—designing the architecture and 3D-printed parts, producing the CAD model, sourcing components, 
                and integrating them into a working prototype. He also worked on the drone software (flight controller setup, simulation), 
                and wrote the IR camera application for the fire tests.
              </p>
            </div>

            <div className="attribution-detailed-section">
              <h3>Andrea Simonato — STUDENT</h3>
              <p><strong>Role:</strong> Entrepreneurship Lead, Human Practices, Sponsorship, Outreach</p>
              <p>
                Andrea led entrepreneurship activities, mapping the path to translation. He compiled stakeholder and sponsor lists and sent numerous outreach emails, 
                while contributing to Human Practices and sponsorship efforts.
              </p>
            </div>

            <div className="attribution-detailed-section">
              <h3>Julie Jasmijn Delis — STUDENT</h3>
              <p><strong>Role:</strong> Research Lead, Writing, Graphic Design, Visualization, Conceptualization, Background Research</p>
              <p>
                Julie led the research team for the wet lab and was involved in wiki writing ( co-wrote the project’s Description page, Proof of Concept, Safety, Parts). As part of the graphics team, she co-designed the logo with Nafi among other graphics used on the wiki and in the presentation videos. She co-wrote the hydrogel-assembly protocol and did research for hydrogel assembly and plasmid design. Assisted product design and investigated hydrogel usage possibilities (and how to optimize the design for them).</p>
            </div>
          </div>

          {/* EXTERNAL SUPPORT */}
          <div className="proof-block" id="external-support">
            <h2>External Persons & Organization</h2>
            <p>
              We received invaluable support from external experts who contributed their specialized knowledge across safety, research, and technical domains.
            </p>

            <div className="attribution-grid">
              <div className="attribution-card">
                <h4>Cédric Keller</h4>
                <p><strong>Unit Chief of Intervention at EPFL</strong></p>
                <p>Insured the safety of students and surroundings during the burn test.</p>
              </div>

              <div className="attribution-card">
                <h4>Emanuele Ripiccini</h4>
                <p><strong>Risk Prevention Scientist</strong></p>
                <p>Insured that the burn test respected safety guidelines.</p>
              </div>

              <div className="attribution-card">
              <h4>Philippe Abdel Sayed</h4>
              <p><strong>Operations Manager, DLL-STI Materials and Bioengineering</strong></p>
              <p>Served as our referent for wet lab safety tasks, provided a tour of the laboratory facilities, demonstrated lab equipment and safety procedures, and ensured the lab was well-stocked with basic consumables.</p>
              </div>

              <div className="attribution-card">
                <h4>Laboratory of Protein Design and Immunoengineering at EPFL (Headed by Bruno Correia)</h4>
                <p><strong>Expertise in computational protein design and experimental validation</strong></p>
                <p>Gave access to their wet lab facility for FPLC, sample preparation, and bacterial cultures.</p>
                <Link to="https://www.epfl.ch/labs/lpdi/" target="_blank" rel="noopener noreferrer" className="interactive-link">Website</Link>
              </div>

              <div className="attribution-card">
                <h4>Virology and Structural Immunology Lab at EPFL (Headed by Aleksandar Antanasijevic)</h4>
                <p><strong>Expertise in structural biology of viral pathogens and immune interactions</strong></p>
                <p>Gave access to their wet lab facility for western blotting, sample preparation, and bacterial cultures.</p>
                <Link to="https://www.epfl.ch/labs/antanasijevic-lab/" target="_blank" rel="noopener noreferrer" className="interactive-link">Website</Link>
              </div>

              <div className="attribution-card">
                <h4> Microbial Mechanics Lab at EPFL (Headed by Alexandre Persat)</h4>
                <p><strong>Expertise in fluorescent microscopy for bacteria</strong></p>
                <p>Gave access to the fluorescent microscope, imaged samples for us, and provided advice for hydrogel assembly and analysis of images.</p>
                <Link to="https://www.epfl.ch/labs/persat-lab/" target="_blank" rel="noopener noreferrer" className="interactive-link">Website</Link>
              </div>

              <div className="attribution-card">
                <h4>Miro Thorsten Wilhelm Plum</h4>
                <p><strong>Scientist, Microbial Mechanics Lab at EPFL</strong></p>
                <p>Gave advice on sample preparation for fluorescent microscopy and prepared slides for fluorescence imaging.</p>
              </div>

              <div className="attribution-card">
                <h4>Sourabh Monnappa Kuppanda Jafri</h4>
                <p><strong>Doctoral Assistant, Microbial Mechanics Lab at EPFL</strong></p>
                <p>Advised the team in designing the protocol for the hydrogel and troubleshooting gel composition errors, gave advice on sample preparation for fluorescent microscopy and prepared slides for fluorescence imaging.</p>
              </div>

                <div className="attribution-card">
                <h4>Soft Materials Lab at EPFL (Headed by Esther Amstad)</h4>
                <p><strong>Expertise in rheological testing for hydrogels and polymers</strong></p>
                <p>Gave access to the rheometer and provided advice for the mechanical characterization of our hydrogel.</p>
                <Link to="https://www.epfl.ch/labs/smal/" target="_blank" rel="noopener noreferrer" className="interactive-link">Website</Link>
              </div>
              
              <div className="attribution-card">
                <h4>Marc Elies Grädel</h4>
                <p><strong>Doctoral Assistant, Soft Materials Lab EPFL</strong></p>
                <p>Supervised the use of the rheometer and provided insights into the analysis of the rheometric data.</p>
              </div>

              <div className="attribution-card">
                <h4>Flow Cytometry Core Facility at EPFL (FCCF)</h4>
                <p><strong>Expertise in flow cell cytometry at EPFL</strong></p>
                <p>Gave advice on planning the cell flow cytometry experiment and gave the necessary training to use the devices from the facility.</p>
                <Link to="https://www.epfl.ch/research/facilities/cytometry/" target="_blank" rel="noopener noreferrer" className="interactive-link">Website</Link>
              </div>


              <div className="attribution-card">
                <h4>Dr. Sabyasachi Gaan</h4>
                <p><strong>Additive &amp; Chemistry Team Group Leader at EMPA</strong></p>
                <p>Gave us insights in designing the fire test and offered to host us in his lab to run a quantitative fire test (wasn’t performed due to time constraints).</p>
                <Link to="https://www.empa.ch/" target="_blank" rel="noopener noreferrer" className="interactive-link">Website</Link>
              </div>

              <div className="attribution-card">
                <h4>Milijana Jovic</h4>
                <p><strong>Laboratory Manager, Synthesis &amp; Fire Testing at EMPA</strong></p>
                <p>Offered to run an additional quantitative fire test for us (wasn’t performed due to time constraints).</p>
              </div>

              <div className="attribution-card">
                <h4>Swiss Federal Institute for Forest, Snow and Landscape Research (WSL)</h4>
                <p><strong>Swiss federal institute of research on forest, snow and landscape</strong></p>
                <p>Advised us on federal regulations of fire retardants in Switzerland and the challenges in modeling wildfires.</p>
              </div>

              <div className="attribution-card">
                <h4>David Hyndman (FireRein)</h4>
                <p><strong>Fire Rein Chief Science Officer</strong></p>
                <p>Gave insight on the fire retardant gel market and the importance of taking gel properties into account depending on use case.</p>
              </div>

              <div className="attribution-card">
                <h4>Voliro</h4>
                <p><strong>Fire Rein Chief Science Officer</strong></p>
                <p>Gave insight on the fire retardant gel market and the importance of taking gel properties into account depending on use case.</p>
              </div>

              <div className="attribution-card">
                <h4>BC Wildfire Service (BCWS)</h4>
                <p><strong>Wildfire suppression service of the Canadian province of British Columbia</strong></p>
                <p>Their experience gave us insight into the realities of firefighting in the field.</p>
              </div>
              
              <div className="attribution-card">
                <h4>Samer Fayez chekieh - Chief of Operations and Chief of Lebanese Firestations</h4>
                <p><strong> Wildfire suppression service in Lebanon</strong></p>
                <p>Their field experience provided insight in the need for concrete solutions to protect firefighters.</p>
              </div>

              <div className="attribution-card">
                <h4>NAFC</h4>
                <p><strong>Coordinates aerial firefighting resources for combating bushfires</strong></p>
                <p>Their insight into the strengths and limitations of different aircraft were extremely valuable.</p>
              </div>

              <div className="attribution-card">
                <h4>Fundo Casa Socioambiental</h4>
                <p><strong>Fundo Casa Socioambiental supports local communities protecting the environment across South America</strong></p>
                <p>Their experience was valuable in aligning our bio-based firefighting hydrogel with real environmental needs.</p>
              </div>

              <div className="attribution-card">
                <h4>Din Certco</h4>
                <p><strong>Din Certco is a certification company giving bio-labels to other companies.</strong></p>
                <p>They explained to us the process we would go through to get a biocertification for our hydrogel.</p>
              </div>

              <div className="attribution-card">
                <h4>The Mirror Foundation</h4>
                <p><strong>The Mirror foundation is a humanitarian foundation fighting wildfires in Thailand.</strong></p>
                <p>They explained to us the specifics of wildfires in Thailand.</p>
              </div>

              <div className="attribution-card">
                <h4>SOS Energie</h4>
                <p><strong>SOS Energie is a humanitarian foundation protecting the environment, including forests in Burkina Faso.</strong></p>
                <p>They explained to us the specifics of fighting wildfires in Burkina Faso.</p>
              </div>

              <div className="attribution-card">
                <h4>Eva Schier</h4>
                <p><strong>Communication Manager, Deanship SV at EPFL</strong></p>
                <p>She lended us a camera and a microphone for the video shooting and gave us advice on how to take shots.</p>
              </div>

              <div className="attribution-card">
                <h4>Lars Keller</h4>
                <p><strong>Sales Manager</strong></p>
                <p>Explained the different steps required for the biological certification of our hydrogel solution, as well as legal framework in Europe.</p>
              </div>

              <div className="attribution-card">
                <h4>Alexandra Bezler</h4>
                <p><strong>Professor &amp; Lab Director at EPFL</strong></p>
                <p>Alexandra Bezler gave us colorful bacteria from her lab. This helped us organize the S4S event and Dive Into Stem</p>
              </div>

              <div className="attribution-card">
                <h4>Nary</h4>
                <p><strong>Program Manager</strong></p>
                <p>Encouraged our drone-based approach and emphasized the importance of a biodegradable substance. He highlighted the major role that international organizations have in the protection of the flora.</p>
              </div>

              <div className="attribution-card">
                <h4>Beatriz Roseiro</h4>
                <p><strong>Program Manager for the Wildfire Prevention Program</strong></p>
                <p>Stressed the urgency for the need of solutions that are able to contain the fire. Furthermore she informed us on the gravity that large climate changes can have on the whole ecosystem within a forest. This, she said, needs to be taken care of on multiple levels.</p>
              </div>

              <div className="attribution-card">
                <h4>Vincent Nikiema</h4>
                <p><strong>General Manager at SOS Énergie Burkina Faso</strong></p>
                <p>Described the financial burden of current big-scale firefighting operations in western Africa. He helped us recognize the budgetary constraints that some countries encounter in implementing environmental protection measures.</p>
              </div>

              <div className="attribution-card">
                <h4>Aoy Soontara</h4>
                <p><strong>Coordinator of International Affairs at the Mirror Foundation</strong></p>
                <p>Provided valuable insights into the local realities of fire prevention, including techniques used to create firebreaks and the reliance on satellites for large‑scale detection. This exchange helped us recognize how our drone and hydrogel technology could complement existing methods by reinforcing firebreaks and providing precise, localized interventions. We are especially grateful for their perspective on how financial resources shape firefighting strategies.</p>
              </div>

              <div className="attribution-card">
                <h4>ECA</h4>
                <p><strong>Vaud Cantonal Insurance</strong></p>
                <p>The discussion was centered on the scalability of our delivery method. Our drone approach was criticized, opting instead for a helicopter strategy. These challenges showed us how much flexible we need to be in our marketing.</p>
              </div>

              <div className="attribution-card">
                <h4>Deb Sparkles</h4>
                <p><strong>Aviation Research and Evaluation Manager at AFAC - Australian National Aerial Firefighting Centre</strong></p>
                <p>Shared their expertise and providing valuable insights into the operational realities of aerial firefighting. . They highlighted the complementary role of drones within the broader ecosystem of fire detection and suppression technologies. Our discussion clarified that drones equipped with infrared cameras provide unmatched real‑time precision and projected how scalable our drone solution can be.</p>
              </div>

              <div className="attribution-card">
                <h4>Adriana Najera</h4>
                <p><strong>Sales &amp; Marketing at Voliro</strong></p>
                <p>Gave us information regarding the current applications of drone technology. </p>
              </div>

              <div className="attribution-card">
                <h4>Davide Ferriroli</h4>
                <p><strong>Scientific collaborator for forest fires, storms, and combined effects at the Federal Office for the Environment (FOEN).</strong></p>
                <p>Clarified the legal framework (Article 18 of the Swiss Federal Forest Law) and restrictions on using certain substances in forests and offered practical assistance by evaluating the product’s environmental impact.</p>
              </div>

              <div className="attribution-card">
                <h4>Synplode</h4>
                <p><strong>Previous EPFL iGEM Team</strong></p>
                <p>The drone they conceived served as the hardware foundation for our drone.</p>
              </div>

              <div className="attribution-card">
                <h4>GenoRobotics</h4>
                <p><strong>Another MAKE project at EPFL</strong></p>
                <p>How they Helped : They lent us cellulose</p>
              </div>
            </div>
          </div>

          {/* SPONSORS & FUNDING */}
          <div className="proof-block" id="sponsors">
            <h2>Sponsors &amp; Funding</h2>

            <div className="attribution-grid">
              <div className="attribution-card">
                <img src="https://static.igem.wiki/teams/5590/attribution/twist-bioscience-official-logo.avif"  className="sponsor-logo" />
                
                <h4>Twist</h4>
                <p>
                  Twist Bioscience supported us at the start of our iGEM journey by supplying the pESC-LEU yeast expression vector and pET-series E. coli plasmids—laying the foundation for our wet-lab protein-expression work.</p>
              </div>
              <div className="attribution-card">
                <img src="https://static.igem.wiki/teams/5590/attribution/lubio-science.webp"  className="sponsor-logo" />
                
                <h4>LubioScience</h4>
                <p>
                  LubioScience is Switzerland’s fastest‑growing life science distributor, serving as the country’s largest reagent and services platform. Founded in 2004, the company partners with over 120 trusted suppliers to offer more than 5 million products, from antibodies and proteins to assay kits, lab equipment, and molecular biology tools. Their portfolio supports research across disciplines such as neuroscience, oncology, diagnostics, and cell culture. LubioScience works closely with academic institutions, biotech start‑ups, and industry leaders to accelerate scientific discovery.</p>
              </div>

              <div className="attribution-card">
                <img src="https://static.igem.wiki/teams/5590/attribution/ampliqon-logo.webp"  className="sponsor-logo" />
                <h4>Ampliqon</h4>
                <p>
                  Ampliqon is a Danish manufacturer specializing in high‑quality PCR enzymes and laboratory reagents for research, diagnostics, and industrial applications. With over two decades of expertise, the company offers a broad portfolio : from DNA polymerases, master mixes, and buffers to custom‑made reagents tailored for specific workflows. Ampliqon’s products are trusted by hospitals, universities, research institutes, and life‑science companies worldwide for their reliability, performance, and short delivery times. By combining technical know‑how with flexible manufacturing, Ampliqon supports scientists in achieving accurate, reproducible results across molecular biology and genetic analysis.

                </p>
              </div>

              <div className="attribution-card">
                <img src="https://static.igem.wiki/teams/5590/attribution/make-project.webp"  className="sponsor-logo" />
                <h4>MAKE</h4>
                <p>As iGEM is a MAKE project, we received funding support.</p>
                
              </div>

              <div className="attribution-card">
                <h4>Life Sciences Faculty of EPFL</h4>
                <p>Provided funding support</p>
              </div>

              <div className="attribution-card">
                <h4>EPFL Education Outreach</h4>
                <p>Provided funding support as compensation for reagents used in the Dive Into STEM event.</p>
              </div>
            </div>
          </div>

          {/* SOFTWARE TOOLS */}
          <div className="proof-block" id="software">
            <h2>Software Tools</h2>
            <div className="attribution-grid">
              <div className="attribution-card">
                <h4>FoundationStereo</h4>
                <p>A foundation model for stereo depth estimation designed for strong zero-shot generalization.</p>
                <Link to="https://nvlabs.github.io/FoundationStereo/ nvlabs.github.io">Website</Link>

              </div>
              <div className="attribution-card">
                <h4>Isaac Sim</h4>
                <p>Robotics simulation platform on NVIDIA Omniverse to develop, simulate, and test AI-driven robots and generate synthetic data.</p>
                <Link to="https://developer.nvidia.com/isaac/sim NVIDIA Developer">Website</Link>
              </div>
              <div className="attribution-card">
                <h4>Pegasus Simulator</h4>
                <p>Framework atop Omniverse/Isaac Sim for realistic multirotor dynamics with PX4 integration and Python control.</p>
                <Link to="https://pegasussimulator.github.io/PegasusSimulator/ pegasussimulator.github.io">Website</Link>
              </div>
              <div className="attribution-card">
                <h4>WFB-NG</h4>
                <p>Next-gen long-range raw-WiFi digital link for UAV video/telemetry (commonly used with QGroundControl/PX4).</p>
                <Link to="https://github.com/svpcom/wfb-ng GitHub+1">Website</Link>
              </div>
              <div className="attribution-card">
                <h4>PX4 Autopilot</h4>
                <p>Open-source flight control software for drones and other unmanned vehicles.</p>
                <Link to="https://px4.io PX4 Autopilot">Website</Link>
              </div>
              <div className="attribution-card">
                <h4>Fiji</h4>
                <p>“Batteries-included” ImageJ2 distribution bundling many plugins for scientific image analysis.</p>
                <Link to="https://imagej.net/software/fiji/">Website</Link>
              </div>
            </div>
          </div>

          {/* ACKNOWLEDGMENTS */}
          <div className="proof-block" id="conclusion">
            <h2>Acknowledgments</h2>
            <p>
              Each contributor brought unique perspectives that shaped our solution. 
              We are deeply grateful to all who shared their time, knowledge, and resources in helping us develop a more sustainable approach to wildfire management. 
              The success of Pyronix is a testament to the power of collaboration.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Attributions;
