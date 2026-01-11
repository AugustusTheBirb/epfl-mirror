import React from 'react';
import "./integratedhp.css";
import "../../../components/Sidebar/sidebar.css";
import PageHead from "../../../components/Head/PageHead";


export const IntegratedHumanPractices = () => {

  return (
    <div className="education-container">
      <PageHead
        title="Integrated Human Practices"
        subtitle="How we listened, learned, and evolved our project through global collaboration"
        backgroundUrl="https://static.igem.wiki/teams/5590/humanpractice/1757336114641-min.webp"
        grayscale={true}
      />
      <div className="hardware-layout">

      {/* Sidebar */}
      <aside className="hardware-sidebar">
        <div className="sidebar-title">Table of Contents</div>
        <nav>
          <ul>
            <li><a className="sidebar-button" href="#overview">Introduction</a></li>
            <li><a className="sidebar-button" href="#pyronix-mission">Pyronix Mission</a></li>
            <li><a className="sidebar-button" href="#listening">Listening to the World</a></li>
            <li><a className="sidebar-button" href="#learning">Learning from Perspectives</a></li>
            <li><a className="sidebar-button" href="#evolving">Evolving Process</a></li>
            
            <li>
              <a className="sidebar-button" href="#meetings">Our Meetings</a>
              <ul className="sidebar-sublist">
                <li><a className="sidebar-subitem" href="#empa">EMPA - Switzerland</a></li>
                <li><a className="sidebar-subitem" href="#wsl">WSL - Switzerland</a></li>
                <li><a className="sidebar-subitem" href="#firerein">FireRein - Canada</a></li>
                <li><a className="sidebar-subitem" href="#lebanon">Lebanese Fire Stations</a></li>
                <li><a className="sidebar-subitem" href="#dronecompany">Drone Company</a></li>
                <li><a className="sidebar-subitem" href="#british-columbia">British Columbia</a></li>
                <li><a className="sidebar-subitem" href="#nafc">NAFC - Australia</a></li>
                <li><a className="sidebar-subitem" href="#mirror">Mirror Foundation</a></li>
                <li><a className="sidebar-subitem" href="#sos">SOS Energie</a></li>
                <li><a className="sidebar-subitem" href="#fundo">Fundo Casa</a></li>
                <li><a className="sidebar-subitem" href="#cfe">CFE Cambodia</a></li>
                <li><a className="sidebar-subitem" href="#din">Din Certco</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
        <main className="hardware-main ">

          {/* Overview Section */}
          <div className="education-block" id="overview">

            <div className="proof-block" id="pyronix-mission">
              <h2>Pyronix: Fighting Wildfires, Protecting the Planet</h2>
                  <p style={{ marginBottom: '1rem' , color: 'white' }} >All around the world, wildfires are spreading, driven by the accelerating effects of climate change. The tools we use to fight them, especially chemical fire retardants, often cause their own harm, damaging ecosystems and posing risks to human health.</p>

                  <p><b>Pyronix</b> was created to change that. Our mission: develop a sustainable, effective way to fight wildfires without harming the environment we aim to protect.</p>

                  <p>At Pyronix, we designed our project around <b>core values:</b></p>
                  <ul  style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
                    <li><strong>Environmental responsibility:</strong> minimizing ecological damage and using biodegradable materials.</li>
                    <li><strong>Human safety:</strong> reducing risk to firefighters through drone deployment.</li>
                    <li><strong>Social impact:</strong> supporting communities affected by wildfires and respecting local knowledge.</li>
                    <li><strong>Scientific rigor and ethical innovation:</strong> ensuring solutions are both effective and responsible.</li>
                  </ul>

                  <h4 style={{ textDecoration: 'underline', marginTop: '2rem', marginBottom: '1rem' }}>Communities Consulted</h4>
                  <p>To ground our work in real-world needs, we engaged with a diverse set of stakeholders:</p>
                  <ul  style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
                    <li><strong>Firefighters in Canada and Lebanon</strong> to understand operational challenges and field realities.</li>
                    <li><strong>Aerial response teams in Australia</strong> to explore large-scale intervention and drone integration.</li>
                    <li><strong>Environmental NGOs in Brazil</strong> to learn about community engagement and forest protection strategies.</li>
                    <li><strong>Climate and research experts in Switzerland</strong> to validate scientific assumptions and performance requirements.</li>
                    <li><strong>Certification agencies in Europe</strong> to understand regulatory and safety standards for bioproducts.</li>
                  </ul>
                  
                  <p>These interactions provided critical insights, shaping Pyronix's design, usability, and implementation strategy.</p>
                  
                  <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                    <img 
                      src="https://static.igem.wiki/teams/5590/humanpractice/integratedhumanpractice/pyronixmission.webp" 
                      alt="Communities consulted visualization" 
                      style={{ 
                        width: '100%', 
                        maxWidth: '400px', 
                        borderRadius: '8px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        padding: '5px'
                      }} 
                    />
                  </div>
                
                </div>
              <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem', fontStyle: 'normal' }}>
                    This image is from Canva
                  </p>
                </div>
              </div>

              {/* Listening Section */}
              <div className="proof-block" id="listening">
                <h2>Listening to the World</h2>
                <p>To make sure our ideas stayed grounded in reality, we turned to those who know wildfires best. We spoke with firefighters in Canada and Lebanon, aerial response teams in Australia, environmental advocates in Brazil, and climate experts in Switzerland.</p>
                <p style={{ fontWeight: 'bold', color: 'var(--color-dark-blue)', justifyContent: 'center', display: 'flex' }}>Wildfires don't respect borders, and neither do we, connecting with experts from every corner of the globe.</p>

                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                  <img 
                    src="https://static.igem.wiki/teams/5590/humanpractice/integratedhumanpractice/listening-to-the-world.webp" 
                    alt="Global collaboration and listening visualization" 
                    style={{ 
                      width: '100%', 
                      maxWidth: '800px', 
                      borderRadius: '8px',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      padding: '5px'
                    }} 
                  />
                
                  
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem', fontStyle: 'normal' }}>
                    This graphic was created using Canva
                  </p>
                </div>
                <img 
                    src="https://static.igem.wiki/teams/5590/humanpractice/integratedhumanpractice/learning-from-europe.webp" 
                    alt="Global collaboration and listening visualization" 
                    style={{ 
                      width: '100%', 
                      maxWidth: '800px', 
                      borderRadius: '8px',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      padding: '5px'
                    }} 
                  />
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem', fontStyle: 'normal' }}>
                    This graphic was created using Canva
                  </p>
                </div>  
              </div>
              

              {/* Learning Section */}
              <div className="proof-block" id="learning">
                <h2>Learning from Every Perspective</h2>
                <p>These conversations weren't just formal interviews, they became turning points in our journey. At <b>EMPA</b>, we learned how to rigorously test our gel to ensure it truly performs under real conditions. <b>WSL</b> reminded us that fires are extremely unpredictable, pushing us to think beyond ideal scenarios and prepare for the unexpected. With <b>Voliro</b>, we explored how drones could operate in dangerous zones, delivering firefighting capabilities without risking human lives.</p>

                <p>From <b>FireRein</b>, we understood the importance of proper certification and the need to thoroughly assess the gel's physical properties before it can be deployed in the field. At the <b>National Aerial Firefighting Centre (NAFC)</b>, we were told that scalability is everything, a promising solution must be able to work not just in one place, but across vast, fire-prone landscapes. Firefighters we spoke with stressed that in an emergency, equipment must be versatile, quick to deploy, and intuitive to use.</p>

                <p>In Brazil, <b>Fundo Casa Socioambiental</b> showed us that protecting forests means working hand-in-hand with local communities, respecting their knowledge and involving them in long-term solutions. Each of these voices didn't just inform us, they reshaped Pyronix, guiding us to adapt, refine, and strengthen our mission at every step.</p>
              </div>

              {/* Evolving Process Section */}
              <div className="proof-block" id="evolving">
                <h2>An Evolving Process</h2>
                <p>We quickly fell into a rhythm: <strong>Establish Contact → Learn → Adapt → Improve</strong>. </p>
                <p>This cycle became the engine behind Pyronix, guiding every decision and ensuring our solution was built with real-world needs at its core.</p>
                <p>What started as an idea has grown into a global collaboration, a project shaped by expertise from around the world, united by a single goal: a safer, more sustainable way to fight wildfires.</p>
                
                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                  <img 
                    src="https://static.igem.wiki/teams/5590/humanpractice/integratedhumanpractice/learning-cycle.webp" 
                    alt="Learning cycle visualization" 
                    style={{ 
                      width: '100%', 
                      maxWidth: '600px', 
                      borderRadius: '8px',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      padding: '19px'
                    }} 
                  />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem', fontStyle: 'normal' }}>
                    Our learning cycle: Establish Contact → Learn → Adapt → Improve
                  </p>
                </div>
              </div>

              {/* Meetings Section */}
              <div className="proof-block" id="meetings">
                <h2>Our Meetings</h2>
                <p><em>To improve website navigation, the meetings are arranged in chronological order.</em></p>
              </div>

              {/* EMPA */}
              <div className="proof-block" id="empa">
                <div className="meeting-card" >
                  <div className="meeting-header" style={{ position: 'relative', paddingRight: '200px' }}>
                    <img
                      src="https://static.igem.wiki/teams/5590/humanpractice/attributions/empa-logo2.avif"
                      alt="EMPA Logo"
                      style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        height: '80px',
                        objectFit: 'contain'
                      }}
                    />
                    <h3 style={{ color: 'var(--color-dark-orange)' }}>EMPA</h3>
                    <div className="meeting-details">
                      <span>🕒 <strong>When:</strong> 15 July</span>
                      <span>📍 <strong>Where:</strong> Switzerland, St-Gall</span>
                      <span>❓ <strong>Who:</strong> Materials Science and technology institute</span>
                    </div>
                  </div>
                 
                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Establishing Contact</h4>
<p>We contacted EMPA to determine how to rigorously test the efficacy of our flame-retardant hydrogel. EMPA’s Additives & Chemistry team published on flame-retardant materials and operates in-house fire-testing infrastructure, including cone calorimetry. Their expertise made them an ideal partner to identify application-relevant tests for wildfire scenarios and to ensure our results are reproducible.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Learning</h4>
<p>Our discussion with Dr. Sabyasachi Gaan and Milijana Jovic clarified which tests to prioritize, what to measure, and how to prepare samples. They recommended beginning with qualitative screening by suspending a wood sample and exposing it to a Bunsen burner while recording ignition, self-extinguishing behavior, dripping, and char formation on video. They emphasized tracking temperature with an IR camera to follow changes over time. To isolate the gel’s true effect, they advised including controls such as uncoated wood and water-only. For reproducibility, coatings should be applied uniformly and their thickness reported.</p><p>As a more quantitative test, EMPA offered to host cone calorimetry. However, due to time constraints, we were not able to conduct it. </p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Improving</h4>
<p>Based on Empa’s guidance, we refined our protocol to be reproducible. We tested our hydrogel compositions in triplicate on standardized wood samples (10 x 10 cm x 4 mm) with uniform coating deposition. We were also able to define the parameters to monitor to determine our hydrogel performance.</p>
                  </div>
                </div>
              </div>

              {/* WSL */}
              <div className="proof-block" id="wsl">
                <div className="meeting-card">
                  <div className="meeting-header" style={{ position: 'relative', paddingRight: '140px' }}>
                    <img
                      src="https://static.igem.wiki/teams/5590/humanpractice/attributions/wsl-logo.avif"
                      alt="WSL Logo"
                      style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        height: '90px',
                        objectFit: 'contain'
                      }}
                    />
                    <h3 style={{ color: 'var(--color-dark-orange)' }}>WSL</h3>
                    <div className="meeting-details">
                      <span>🕒 <strong>When:</strong> 21 July</span>
                      <span>📍 <strong>Where:</strong> Switzerland</span>
                      <span>❓ <strong>Who:</strong> Swiss federal institute of research on forest, snow and landscape</span>
                    </div>
                  </div>
                  
                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Establishing Contact</h4>
                    <p>It was important for us to contact WSL because their expertise and datasets are critical for accurate forest fire modeling in Switzerland. WSL manages the Swissfire database, the FireNiche model, and meteorological data from MeteoSwiss. Meeting WSL allows us to validate assumptions about forest composition, fire spread, and environmental conditions.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Learning</h4>
                    <p>During the meeting, WSL highlighted several limitations of forest fire modeling such as the fact that interdependent factors influence fire spread, including tree species, fuel types, wind, and moisture and that fire resistance properties and ignition patterns vary significantly between species, making parameter selection and assumptions challenging. From this, we learned that modeling fire forests realistically is nearly impossible, and any model must balance accuracy with feasibility.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Improving</h4>
                    <p>Based on what we learned, we improved our modeling approach by adopting a simplified strategy to simulate hydrogel application without attempting to fully replicate the complexity of forests and fires.</p>
                  </div>
                </div>
              </div>

              {/* FireRein */}
              <div className="proof-block" id="firerein">
                <div className="meeting-card" >
                  <div className="meeting-header" style={{ position: 'relative', paddingRight: '140px' }}>
                    <img 
                      src="https://static.igem.wiki/teams/5590/humanpractice/attributions/fire-rein-logo2-png.avif" 
                      alt="FireRein Logo" 
                      style={{ 
                        position: 'absolute',
                        top: '20px', 
                        right: '20px', 
                        height: '120px',
                        objectFit: 'contain'
                      }} 
                    />
                    <h3 style={{ color: 'var(--color-dark-orange)' }}>FireRein</h3>
                    <div className="meeting-details">
                      <span>🕒 <strong>When:</strong> 5 August</span>
                      <span>📍 <strong>Where:</strong> Canada</span>
                      <span>❓ <strong>Who:</strong> FireRein made Eco-Gel, a 100% plant-based hydrogel alternative</span>
                    </div>
                  </div>
                  
                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Establishing Contact</h4>
                    <p>FireRein creates 100% bio-based hydrogels made from plants. The main difference from our approach is that we use synthetic biology to produce the compound in our hydrogel. Given the similarity between their Eco-Gel and our hydrogel, we decided to contact them.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Learning</h4>
                    <p>While we were already aware of the importance of fire-retardant properties for our gel, our discussion with Dr. Hyndman highlighted the critical role of viscosity in ensuring compatibility with standard firefighting equipment. Fire services typically operate within a specific viscosity range, and any product used must conform to these limits.</p>
                    <p>A key factor to investigate is the rheological behavior of our hydrogel, specifically, whether it exhibits shear-thinning properties. Shear-thinning materials become less viscous under applied stress, allowing them to flow easily through equipment like nozzles. Once the stress is removed, the material returns to its more viscous, gel-like state. This property is highly desirable in firefighting applications, as it allows for efficient spraying while ensuring the gel remains in place after application.</p>
                    <p>FireRein’s Eco-Gel demonstrates this shear-thinning behavior naturally, due to its composition of starch and plant-based gums. Determining whether our hydrogel falls into this category is essential, especially if we aim to integrate it into standardized or custom spraying systems.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Improving</h4>
                    <p>Dr. Hyndman recommended conducting viscosity measurements using a viscometer to assess this behavior. Consequently, we plan to reach out to laboratories at EPFL equipped with viscometers to help us characterize the rheological profile of our product.</p>
                    <p>We decided to contact the Soft Materials Lab to measure the rheological properties of our gel during our wet-lab experiments. They lent us both a microscope to visualize our hydrogel and equipment to measure its rheological properties. The results can be seen on the Wet Lab page of the wiki. From these tests, we confirmed that our gel is shear-thinning, as intended.</p>
                  </div>
                </div>
              </div>

              {/* Lebanon */}
              <div className="proof-block" id="lebanon">
                <div className="meeting-card" style={{ position :'relative', paddingRight: '150px'}}>
                  <div className="meeting-header">
                    <img
                      src="https://static.igem.wiki/teams/5590/humanpractice/attributions/fire-station-logo.avif"
                      alt="Lebanese Fire Stations Logo"
                      style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        height: '130px',
                        objectFit: 'contain'
                      }}
                    />
                    <h3 style={{ color: 'var(--color-dark-orange)' }}>Lebanese Fire Stations</h3>
                    <div className="meeting-details">
                      <span>🕒 <strong>When:</strong> 6 August</span>
                      <span>📍 <strong>Where:</strong> Lebanon</span>
                      <span>❓ <strong>Who:</strong> Lebanese firefighters spent the summer protecting Lebanon’s landscapes, and their experience was invaluable to us.</span>
                    </div>
                  </div>
                  
                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Establishing Contact</h4>
                    <p>We connected with the Chief of Operations of a Lebanese fire station, Samir Fayez Chekieh, to gain insights from a firefighter’s perspective on both operations and feasibility. His practical experience provided an invaluable viewpoint for our project, particularly regarding the potential use of drones for data collection.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Learning</h4>
                    <p>The Chief of Operations walked us through the standard firefighting protocols in Lebanon and shared information about fire retardants, their applications, and the critical role of data collection in effectively managing fires.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Improving</h4>
                    <p>Based on his feedback, we refined our focus on the key data points our drone should capture—most notably, temperature readings obtained through the infrared (IR) camera.</p>
                  </div>
                </div>
              </div>

              {/* Voliro */}
              <div className="proof-block" id="dronecompany">
                <div className="meeting-card" >
                  <div className="meeting-header">
                    <h3 style={{ color: 'var(--color-dark-orange)' }}>Drone Company</h3>
                    <div className="meeting-details">
                      <span>🕒 <strong>When:</strong> 8 August</span>
                      <span>❓ <strong>Who:</strong> A company developing advanced aerial drones. Their insights were incredibly useful in the conception of our drone.</span>
                    </div>
                  </div>
                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Establishing Contact</h4>
                    <p>The company specializes in advanced drone technologies for diverse applications, including spraying various substances such as gels. Their expertise in managing drones equipped with spraying systems, especially for viscous materials. proved invaluable to us.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Learning</h4>
                    <p>During our meeting, the team presented the core aspects of their work, from drone design and development to a wide range of use cases. This provided a comprehensive overview of their capabilities and practical experience.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Improving</h4>
                    <p>With their guidance, and their generous offer to review the technical details of our drone, we were able to better evaluate our progress and reorganize our approach. This helped us focus on the most impactful elements and achieve more meaningful results.</p>
                  </div>
                </div>
              </div>

              {/* British Columbia */}
              <div className="proof-block" id="british-columbia">
                <div className="meeting-card" style={{ position: 'relative', paddingRight: '140px' }}>
                  <div className="meeting-header">
                    <img 
                      src="https://static.igem.wiki/teams/5590/humanpractice/attributions/british-columbia-wildifre-service-logo.avif" 
                      alt="British Columbia Wildfire Service Logo" 
                      style={{ 
                        position: 'absolute',
                        top: '20px', 
                        right: '20px', 
                        height: '150px',
                        objectFit: 'contain'
                      }} 
                    />
                    <h3 style={{ color: 'var(--color-dark-orange)' }}>British Columbia Wildfire Service</h3>
                    <div className="meeting-details">
                      <span>🕒 <strong>When:</strong> 11 August</span>
                      <span>📍 <strong>Where:</strong> British Columbia, Canada</span>
                      <span>❓ <strong>Who:</strong> British Columbia firefighters spent the summer protecting Canada's landscapes and their experience was invaluable to us.</span>
                    </div>
                  </div>
  
                  
                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Establishing Contact</h4>
                    <p>We established contact with the British Columbia Wildfire Service to gain insights from firefighters who are actively fighting fires on the ground. Their practical experience and knowledge of daily operations provided invaluable perspective for our project, particularly regarding the integration of new firefighting technologies like our bio-based hydrogel.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Learning</h4>
                    <p>From this interview, we learned that for firefighters who have already invested heavily in firetrucks, airplanes, and helicopters, our current drone design is not immediately compelling, as their existing equipment already meets their operational needs. However, our hydrogel could still be of interest when they need to replenish fire suppressant supplies. To maximize its usefulness, the hydrogel must be versatile and compatible with both our drone-based spraying system and the firefighting equipment already in use, ensuring seamless integration into their established workflows.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Improving</h4>
                    <p>This discussion reinforced lessons from our previous interview with FireRein: we need to be careful about the physical properties of the hydrogel, ensuring it can be used safely and effectively with existing firefighting tools. This includes making adjustments to viscosity, flow characteristics, and delivery methods so that our product complements current equipment without requiring costly modifications or specialized training. These insights will guide the next stages of development, ensuring that our solution is both practical and adaptable for frontline firefighting teams.</p>
                  </div>
                </div>
              </div>

              {/* NAFC */}
              <div className="proof-block" id="nafc">
                <div className="meeting-card" style={{ position: 'relative' }}>
                  <img 
                    src="https://static.igem.wiki/teams/5590/humanpractice/attributions/afac-nafc-logo.avif" 
                    alt="NAFC Logo" 
                    style={{ 
                      position: 'absolute', 
                      top: '20px', 
                      right: '20px', 
                      height: '60px',
                      objectFit: 'contain'
                    }} 
                  />
                      
                  <div className="meeting-header">
                    <h3 style={{ color: 'var(--color-dark-orange)', margin: 0 }}>NAFC - Australia</h3>
                    <div className="meeting-details">
                      <span>🕒 <strong>When:</strong> 13 August</span>
                      <span>📍 <strong>Where:</strong> Australia</span>
                      <span>❓ <strong>Who:</strong> The National Aerial Firefighting Centre coordinates aerial operations in Australia, and their insights into the strengths and limitations of different aircraft were extremely valuable.</span>
                    </div>
                  </div>
  


                   <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Establishing Contact</h4>
                    <p>We reached out to the National Aerial Firefighting Centre (NAFC), which coordinates national aerial firefighting efforts in Australia, to better understand the operational and technical challenges of using drones in wildfire suppression. Since our project focuses on developing a drone capable of delivering a bio-based hydrogel, we wanted to learn directly from experts about the realities of aerial firefighting and how our technology could complement existing strategies.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Learning</h4>
                    <p>Fire detection and monitoring in Australia is currently primarily done through visual observation and supplemented with satellite technology for fire progression. Current satellite data does not give the level of real-time, high-resolution data required for detailed fire mapping and drones could play a place in this.</p>
                    <p>We also learned that scalability is a key limitation: to carry enough suppressant to meaningfully impact a large fire, a drone would require a payload capacity comparable to that of a helicopter or fixed-wing aircraft. Our current prototype functions as a proof of concept, demonstrating the integration of sensors and software, but is not yet capable of large-scale fire suppression.</p>
                    <p>Geography also plays a crucial role in aerial firefighting strategy. Australia’s flat plains are ideal for planes, allowing quick takeoff and wide coverage although many of the notable fires occur in mountainous terrain, while Switzerland’s mountainous terrain makes smaller aerial vehicles like drones more practical. This highlighted the importance of designing drone solutions that are adaptable to specific landscapes and operational constraints.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Improving</h4>
                    <p>These insights helped us refine the focus of our project. Our current drone serves as a proof-of-concept platform, demonstrating our software and sensor integration and allowing us to test operational concepts in real-world conditions. However, it is important to keep in mind that the final operational drone will need to be much larger, with a payload capacity comparable to that of a helicopter, in order to deliver sufficient amounts of fire suppressant for meaningful impact. Future development will focus on scaling up the platform while maintaining precision and adaptability, integrating additional sensors, and ensuring it can operate effectively across different terrains. This approach balances technical feasibility with the operational demands of large-scale wildfire suppression.</p>
                  </div>
                </div>
              </div>

              {/* Mirror */}
              <div className="proof-block" id="mirror">
                <div className="meeting-card" style={{ position: 'relative' }} >
                  <div className="meeting-header">
                    <img
                      src="https://static.igem.wiki/teams/5590/humanpractice/attributions/the-mirror-foundation-logo.webp"
                      alt="Mirror Foundation Logo"
                      style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        height: '120px',
                        objectFit: 'contain'
                      }}
                    />
                    <h3 style={{ color: 'var(--color-dark-orange)' }}>The Mirror Foundation</h3>
                    <div className="meeting-details">
                      <span>🕒 <strong>When:</strong> 20 August</span>
                      <span>📍 <strong>Where:</strong> Thailand</span>
                      <span>❓ <strong>Who:</strong> The Mirror foundation is an humanitarian foundation fighting wildfire in Thailand.</span>
                    </div>
                  </div>
                  
                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Establishing Contact</h4>
                    <p>The Mirror Foundation is a humanitarian association based in Thailand that supports local communities in recovering from the damage caused by wildfires. We established contact with them to better understand the realities of wildfire management in the region and to explore how our project could be adapted to local needs.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Learning</h4>
                    <p>Through our discussions, we discovered that in Thailand, most wildfires are caused by dry leaves. One of the most effective local techniques for stopping the spread of fire is the use of leaf blowers to create firebreaks. We realized that our drone technology could complement this method by deploying hydrogel to reinforce these firebreaks. This insight helped us refine how our hydrogel could be applied depending on the situation.</p>
                    <p>We also learned that financial resources play an important role in shaping wildfire strategies. Countries with larger budgets, such as Canada and Australia, often rely on large-scale solutions like planes and helicopters. In contrast, countries with more limited resources may find drones a more practical and affordable approach to firefighting.</p>
                    <p>Additionally, the Mirror Foundation shared that Thailand already uses satellites to detect wildfires. These satellites feed data into a mobile application used by firefighters, allowing them to track fire locations in real time. This confirmed our belief that satellites are highly effective for large-scale detection, while drones equipped with sensors can provide unmatched precision at a local level.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Improving</h4>
                    <p>This exchange was valuable in helping us adapt our project to diverse contexts. We now see more clearly how our drone system can complement existing firefighting methods, particularly in regions with fewer resources. It also encouraged us to think strategically about combining large-scale detection tools like satellites with precise, localized drone interventions. Overall, the insights gained from the Mirror Foundation are guiding us toward making our solution more flexible, practical, and impactful.</p>
                  </div>
                </div>
              </div>

              {/* SOS */}
              <div className="proof-block" id="sos">
                <div className="meeting-card" style={{ position: 'relative' }} >
                  <div className="meeting-header">
                    <img
                      src="https://static.igem.wiki/teams/5590/humanpractice/attributions/sos-energie-logo.avif"
                      alt="SOS Energie Logo"
                      style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        height: '120px',
                        objectFit: 'contain'
                      }}
                    />
                    <h3 style={{ color: 'var(--color-dark-orange)' }}>SOS Energie</h3>
                    <div className="meeting-details">
                      <span>🕒 <strong>When:</strong> 21 August</span>
                      <span>📍 <strong>Where:</strong> Burkina Faso</span>
                      <span>❓ <strong>Who:</strong> SOS energie is an humanitarian foundation protecting environment and forest in Burkina Faso.</span>
                    </div>
                  </div>
                  
                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Establishing Contact</h4>
                    <p>We established contact with SOS Energie, a humanitarian association based in Burkina Faso. The organization is dedicated to protecting forests, with a primary focus on combating deforestation caused by the use of wood for charcoal production. In addition, they contribute to wildfire prevention by creating firebreaks.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Learning</h4>
                    <p>Our discussions highlighted the financial constraints Burkina Faso faces compared to countries like Canada or Australia. For SOS Energie, the cost of our hydrogel and drone was the most important consideration. They explained that their firefighting teams currently rely on fire trucks, as planes and helicopters are financially out of reach. One testimony described the tragic loss of a firefighter who died battling flames on the ground. This underlined the risks associated with conventional methods and the urgent need for safer alternatives.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Improving</h4>
                    <p>These insights strengthened our conviction that drones could provide a safer and more affordable solution for regions with limited resources. By reducing human exposure to danger and lowering operational costs, our system could represent a realistic and impactful tool to support firefighting efforts in countries like Burkina Faso.</p>
                  </div>
                </div>
              </div>

              {/* Fundo */}
              <div className="proof-block" id="fundo">
                <div className="meeting-card" style={{ position: 'relative', paddingRight: '140px' }}>
                  <div className="meeting-header">
                    <img 
                      src="https://static.igem.wiki/teams/5590/humanpractice/attributions/fundo-casa-logo.avif" 
                      alt="Fundo Casa Logo" 
                      style={{ 
                        position: 'absolute',
                        top: '20px', 
                        right: '20px', 
                        height: '80px',
                        objectFit: 'contain'
                      }} 
                    />
                    <h3 style={{ color: 'var(--color-dark-orange)' }}>Fundo Casa</h3>
                    <div className="meeting-details">
                      <span>🕒 <strong>When:</strong> 13 August</span>
                      <span>📍 <strong>Where:</strong> Brazil</span>
                      <span>❓ <strong>Who:</strong> Fundo Casa Socioambiental supports local communities protecting the environment across South America, and their experience was valuable in aligning our bio-based firefighting hydrogel with real environmental needs.</span>
                    </div>
                  </div>
                  
                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Establishing Contact</h4>
                    <p>We reached out to Fundo Casa Socioambiental, a pioneering organization dedicated to supporting local communities in protecting the environment. Their work encompasses promoting environmentally friendly practices, empowering grassroots initiatives, and investing in sustainable fire management strategies. Engaging with such an organization allowed us to access both their technical knowledge and their deep understanding of the socio-environmental landscape in Latin America.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Learning</h4>
                    <p>Their unmatched expertise in advancing greener solutions proved invaluable. They provided us with key insights into how the market for environmentally friendly approaches is evolving, the challenges local communities face in adopting these practices, and the opportunities for innovation in fire management and prevention. This gave us a clearer picture not only of technological needs but also of the social dimension of implementing sustainable solutions.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Improving</h4>
                    <p>With this perspective, we were able to refine our business model to align more closely with the growing global and local demand for greener practices. Their feedback encouraged us to place greater emphasis on sustainability as a core value of our project and to highlight the role of our drone technology in bridging innovation with environmental responsibility. This adaptation has strengthened both the relevance and the potential impact of our work.</p>
                  </div>
                </div>
              </div>

              {/* CFE */}
              <div className="proof-block" id="cfe">
                <div className="meeting-card" style={{ position: 'relative', paddingRight: '140px' }}>

                  <div className="meeting-header">
                    <img 
                      src="https://static.igem.wiki/teams/5590/humanpractice/attributions/cambodian-fairwind-entreprises-cfe-logo.avif" 
                      alt="CFE Cambodia Logo" 
                      style={{ 
                        position: 'absolute',
                        top: '20px', 
                        right: '20px', 
                        height: '130px',
                        objectFit: 'contain'
                      }} 
                    />
                    <h3 style={{ color: 'var(--color-dark-orange)' }}>CFE Cambodia</h3>
                    <div className="meeting-details">
                      <span>🕒 <strong>When:</strong> 25 August</span>
                      <span>📍 <strong>Where:</strong> Cambodia</span>
                      <span>❓ <strong>Who:</strong> Cambodian Fairwind Enterprises (CFE) is a pioneering organization dedicated to advancing fire safety standards and practices in Cambodia.</span>
                    </div>
                  </div>
                  
                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Establishing Contact</h4>
                    <p>We engaged with experts in the domain of fire safety and national-level fire prevention guidelines. Their perspective was particularly valuable, as they were extremely knowledgeable on the methods currently adopted for fire prevention, the standard measures taken during fire emergencies, and the feasibility of introducing eco-friendly fire retardants as a recommended firefighting strategy. Accessing this expertise allowed us to better understand the alignment between technological innovation and national regulatory frameworks.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Learning</h4>
                    <p>They shared extensive knowledge on the existing fire prevention methods used in agriculture, crop protection, and farming practices, along with the conventional state-level guidelines for fire safety. While our project is primarily focused on forest fire management, these insights gave us a broader understanding of how fire risks are approached across different sectors. Importantly, we were able to identify overlapping needs and potential opportunities where eco-friendly innovations could bridge gaps in both agricultural and environmental fire protection.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Improving</h4>
                    <p>With this feedback, we were able to envision future steps beyond forest fire applications, such as adapting our solutions to agricultural and industrial contexts. This broadened perspective helped us refine our roadmap by highlighting the versatility of our approach and the potential for scaling our technology to address fire safety challenges across multiple domains.</p>
                  </div>
                </div>
              </div>

              {/* Din */}
              <div className="proof-block" id="din">
                <div className="meeting-card" style={{ position: 'relative', paddingRight: '140px' }}>
                  <div className="meeting-header">
                    <img 
                      src="https://static.igem.wiki/teams/5590/humanpractice/attributions/din-certco-logo.webp" 
                      alt="Din Certco Logo" 
                      style={{ 
                        position: 'absolute',
                        top: '20px', 
                        right: '20px', 
                        height: '120px',
                        objectFit: 'contain'
                      }} 
                    />
                    <h3 style={{ color: 'var(--color-dark-orange)' }}>Din Certco</h3>
                    <div className="meeting-details">
                      <span>🕒 <strong>When:</strong> 8 September</span>
                      <span>📍 <strong>Where:</strong> Germany</span>
                      <span>❓ <strong>Who:</strong> Din Certco is a certification company giving bio-labels to company. They explained us the process to get a bio certification</span>
                    </div>
                  </div>
                  
                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Establishing Contact</h4>
                    <p>Din Certco is a company giving biological labels to products. Creating a biodegradable hydrogel is a core idea for our project. We contacted them to know how the certification process worked.</p>
                  </div>

                  <div className="meeting-section">
                    <h4 style={{ color: 'var(--color-dark-orange)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Learning</h4>
                    <p>We learned from this meeting the different steps in getting a biological certification giving us precious insight to take our project further. </p>
                  </div>

                </div>
              </div>

        </main>
      </div>
    </div>
  );
};