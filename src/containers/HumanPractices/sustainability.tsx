import React, { useEffect, useState } from "react";
import "../Project/Wildfireheadlines/wildfireheadlines.css";
import PageHead from "../../components/Head/PageHead";
import ReferencesDropdown from "../Homepage/References/references";
import Citation from "../../components/References/Citation";
import { Reference } from "../../components/References/ReferenceList";
import {Link} from "react-router-dom";
import "../../components/Links/links.css";
import "./sustainability.css";

// Unified reference list for Sustainability page
const sustainabilityReferences: Reference[] = 
  [
  {
    id: "1",
    text: 'UNDRR — “Disaster risk reduction in least developed countries.” United Nations Office for Disaster Risk Reduction, 2025. <a href="https://www.undrr.org/implementing-sendai-framework/sendai-framework-action/disaster-risk-reduction-least-developed-countries" target="_blank" rel="noopener noreferrer">https://www.undrr.org/.../disaster-risk-reduction-least-developed-countries</a>'
  },
  {
    id: "2",
    text: 'United Nations DESA. “Goal 13: Climate Action.” Department of Economic and Social Affairs, 2025. <a href="https://sdgs.un.org/goals/goal13" target="_blank" rel="noopener noreferrer">https://sdgs.un.org/goals/goal13</a>'
  },
  {
    id: "3",
    text: 'Gaia Education. “SDG 13 – Climate Action.” 2025. <a href="https://www.gaiaeducation.org/news/sdg-13-climate-action" target="_blank" rel="noopener noreferrer">https://www.gaiaeducation.org/.../sdg-13-climate-action</a>'
  },
  {
  id: "4",
    text: 'Tunley Environmental. “SDG 13 Climate Action Through Carbon Management.” 2024. <a href="https://www.tunley-environmental.com/news/sdg-13-climate-action-through-carbon-management" target="_blank" rel="noopener noreferrer">https://www.tunley-environmental.com/.../sdg-13-climate-action-through-carbon-management</a>' 
  }, 
  {
    id: "5",
    text: 'ETH Zurich. “Goal 13: Climate Action.” 2025. <a href="https://ethz.ch/en/the-eth-zurich/sustainability/sustainable-development-goals/ziel-13--massnahmen-zum-klimaschutz.html" target="_blank" rel="noopener noreferrer">https://ethz.ch/.../ziel-13--massnahmen-zum-klimaschutz.html</a>'
  },
  {
    id: "6",
    text: 'UNDP. “Economic assessment of post-fire water treatment and remediation costs: A global perspective.” United Nations Development Programme Report, 2023.'
  }, 
  {
    id: "7",
    text: 'R. Sharma, A. Kumar, and V. Singh. “Socio-economic impacts of wildfire retardant pollution on rural water supplies.” Environmental Economics and Policy Studies, vol. 26, no. 3, pp. 541–558, 2024.'
  },
];


const Sustainability: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const navItems = [
    { id: "overview", label: "Overview", isSubItem: false },

    { id: "sdg10", label: "10 — Reduced Inequalities", isSubItem: false },
    { id: "sdg10-stakeholder", label: "Stakeholder", isSubItem: true },
    { id: "sdg10-impact", label: "Long-term Impact", isSubItem: true },
    

    { id: "sdg13", label: "13 — Climate Action", isSubItem: false },
    { id: "sdg13-stakeholder", label: "Stakeholder", isSubItem: true },
    { id: "sdg13-impact", label: "Long-term Impact", isSubItem: true },
    

    { id: "sdg14", label: "14 — Life Below Water", isSubItem: false },
    { id: "sdg14-stakeholder", label: "Stakeholder", isSubItem: true },
    { id: "sdg14-impact", label: "Long-term Impact", isSubItem: true },
    

    { id: "sdg15", label: "15 — Life On Land", isSubItem: false },
    { id: "sdg15-stakeholder", label: "Stakeholder", isSubItem: true },
    { id: "sdg15-impact", label: "Long-term Impact", isSubItem: true },

  ];



  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];
      const scrollPosition = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div  >
      <div className="sustainability-head">
      <PageHead
        title="Sustainability"
        subtitle=""
        backgroundUrl="https://static.igem.wiki/teams/5590/humanpractice/mainpagepicture/sustainability-background.avif"
      />
      </div>

      <div className="hardware-layout">
        {/* Sidebar */}
        <aside className="hardware-sidebar">
          <div className="sidebar-title">Table of Contents</div>
          <nav>
            <ul>
              <li>
                <a className="sidebar-button" href="#overview">Overview</a>
              </li>

              <li>
                <a className="sidebar-button" href="#sdg10">10 — Reduced Inequalities</a>
                <ul className="sidebar-sublist">
                  <li>
                    <a className="sidebar-subitem" href="#sdg10-stakeholder">Stakeholder</a>
                  </li>
                  <li>
                    <a className="sidebar-subitem" href="#sdg10-impact">Long-term Impact</a>
                  </li>
                </ul>
              </li>

              <li>
                <a className="sidebar-button" href="#sdg13">13 — Climate Action</a>
                <ul className="sidebar-sublist">
                  <li>
                    <a className="sidebar-subitem" href="#sdg13-stakeholder">Stakeholder</a>
                  </li>
                  <li>
                    <a className="sidebar-subitem" href="#sdg13-impact">Long-term Impact</a>
                  </li>
                </ul>
              </li>

              <li>
                <a className="sidebar-button" href="#sdg14">14 — Life Below Water</a>
                <ul className="sidebar-sublist">
                  <li>
                    <a className="sidebar-subitem" href="#sdg14-stakeholder">Stakeholder</a>
                  </li>
                  <li>
                    <a className="sidebar-subitem" href="#sdg14-impact">Long-term Impact</a>
                  </li>
                </ul>
              </li>

              <li>
                <a className="sidebar-button" href="#sdg15">15 — Life On Land</a>
                <ul className="sidebar-sublist">
                  <li>
                    <a className="sidebar-subitem" href="#sdg15-stakeholder">Stakeholder</a>
                  </li>
                  <li>
                    <a className="sidebar-subitem" href="#sdg15-impact">Long-term Impact</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </aside>

        <section className="hardware-main proof-section">
          {/* Overview */}
          <div className="proof-block" id="overview">
            <h2>Overview</h2>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <p>
                To evaluate how our project could contribute to sustainable development, we examined both sides of the wildfire problem: the escalating environmental impact of uncontrolled fires, and the collateral damage caused by current fire-fighting chemicals.
              </p>
              <p>
              Wildfires and climate change form a reinforcing loop: drier conditions increase ignition risk, while each large burn releases vast amounts of CO₂. In addition, we found stark inequalities in global access to effective and safe fire-control technologies.              </p>
              <div className="satellite-image-container">
                <figure>
                  <img
                    className="satellite-img"
                    src="https://static.igem.wiki/teams/5590/sustainability/current-solutions.webp"
                    alt="Consequences of current fire retardant solutions"
                  />
                </figure>
              </div>

              <p style={{ marginBottom: "1.5rem" }}>
  Guided by these insights, we framed the project around four 
  <strong> Sustainable Development Goals (SDGs)</strong>:
</p>

<div style={{ 
  display: "flex", 
  flexDirection: "column", 
  gap: "1.2rem", 
  marginLeft: "1.5rem", 
  lineHeight: "1.7"
}}>
  <p style={{ textIndent: "-1rem", paddingLeft: "1rem", margin: 0 }}>
    <strong>10 — Reduced Inequalities:</strong><br />
    Prioritize affordability, simple deployment, and open documentation so that 
    low-resource communities can adopt, maintain, and improve the system 
    without dependence on costly infrastructure.
  </p>

  <p style={{ textIndent: "-1rem", paddingLeft: "1rem", margin: 0 }}>
    <strong>13 — Climate Action:</strong><br />
    Design for prevention and early mitigation to curb emissions at their source. 
    Assess the entire product lifecycle, from material sourcing to refillability,
    to minimize the system’s own environmental footprint.
  </p>

  <p style={{ textIndent: "-1rem", paddingLeft: "1rem", margin: 0 }}>
    <strong>14 — Life Below Water:</strong><br />
    Favor low-toxicity, low-runoff formulations and establish testing protocols 
    that track and limit potential aquatic contamination.
  </p>

  <p style={{ textIndent: "-1rem", paddingLeft: "1rem", margin: 0 }}>
    <strong>15 — Life on Land:</strong><br />
    Support habitat protection by reducing fire intensity and duration, monitoring 
    potential soil impacts, and enabling safer post-fire recovery of ecosystems.
  </p>
</div>

<p style={{ marginTop: "1.5rem" }}>
  Taken together, these choices aim to <strong>break the fire–climate feedback loop, 
  close access gaps, and protect ecosystems</strong>, without shifting burdens 
  from one domain to another.
</p>
            </div>
          </div>

          {/* SDG 10 */}
          <div className="proof-block" id="sdg10">
            <h2>10 Reduced Inequalities</h2>
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "1.5rem",
                fontSize: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              <b>Where resources are thinnest, risk is highest:</b><b> Least-developed countries suffered nearly 70% </b>of climate-related disaster deaths over the last 50 years.
            </p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <p>
                <Link
                  className="interactive-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.undrr.org/implementing-sendai-framework/sendai-framework-action/disaster-risk-reduction-least-developed-countries"
                >
                  UNDRR — Disaster risk reduction in least developed countries
                </Link>
              </p>
            </div>

            <h3 id="sdg10-intro"></h3>
            
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <figure style={{ textAlign: "center", margin: 0 }}>
                <img
                  className="satellite-img"
                  src="https://static.igem.wiki/teams/5590/sustainability/10-reduced-inequalities.webp"
                  alt="Reduced Inequalities iconography"
                  style={{ maxWidth: "50%", height: "auto", display: "block", marginLeft: "auto", marginRight: "auto" }}
                />
                <figcaption style={{ marginTop: "0.5rem", textAlign: "center",fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-whitish)', marginBottom: '1rem' }}>
                  From the start, we anchored our work in social impact and respect for local knowledge.
                </figcaption>
              </figure>
            </div>

            <h3 id="sdg10-intro"></h3>
            
            <p>
              When we listened to people on the front lines, the gap was obvious: well-funded agencies can put planes and
              helicopters in the air, while lower-resource crews often fight fires from the ground, at greater risk. In
              Thailand and Burkina Faso, partners stressed affordability and safer operations; in Canada and Australia,
              teams described fleets that already cover many needs. We designed our solution to narrow that gap: a lower-cost,
              drone-based approach that works with tools people already have and supports safer first-attack workflows, so
              places without aircraft can still deploy precise detection, monitoring, and suppression.
            </p>

            <h3 id="sdg10-stakeholder">Stakeholders</h3>
            <p>
              <strong>The Mirror Foundation (Thailand)</strong> showed us how local teams cut firebreaks with leaf blowers and rely on
              satellite fire alerts delivered to their phones. They also highlighted stark gaps: few helicopters, limited
              protective gear, and at times even scarce drinking water, forcing responders to take serious risks. These
              realities shaped our approach: make drones an affordable, precise tool that complements (and doesn’t replace)
              their frontline efforts.
            </p>
            <p>
              <strong>SOS Énergie (Burkina Faso)</strong> highlighted the constraints on the ground: tight budgets, limited access to
              aircraft, and crews facing real danger, sometimes at the cost of lives. In response, we designed for safer,
              cost-sensitive operations using a drone with a dual role: high-resolution data acquisition for situational
              awareness and a targeted spraying system to support frontline efforts without putting more people in serious
              danger.
            </p>
            <p>
              <strong>Fundo Casa Socioambiental (Brazil)</strong> funds green programs to preserve ecosystems, often in regions with
              limited resources. We found a clear common cause: reduce inequalities with cost-effective solutions. Their
              perspective reinforced our focus on an affordable, maintainable drone and open workflows that communities can
              adopt without heavy infrastructure.
            </p>
            <p>
              We observed inequalities in fire-management resources: some agencies operate full aerial fleets, while others
              face gaps in access and reach. <strong>BC Wildfire Service (Canada)</strong> encouraged us to ensure our hydrogel is
              compatible with existing pumps and retardant systems—so it can fit seamlessly into established operations—and
              noted their current focus remains on fixed-wing assets rather than drones. <strong>NAFC (Australia)</strong> encouraged
              us to calibrate expectations around small-UAV payloads and vast distances, guiding our proof-of-concept
              toward use cases where large aircraft aren’t available or fast to deploy.
            </p>

            <h3 id="sdg10-impact">Long-term Impact </h3> 
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>
                <b>Safer early response where risk is highest.</b> Shifting hazardous first-attack tasks from under-resourced
                ground crews to precision drones with localized gel application reduces exposure and injury risk in
                communities that currently shoulder the front line. <Citation id="1"/>
              </li>
              <li>
                <b>Access through affordability and fit.</b> Interoperable hydrogel and open workflows let agencies plug into
                pumps and practices they already have, lowering upfront costs and avoiding dependence on expensive fleets
                concentrated in well-funded regions.
              </li>
              <li>
                <b>Local capacity, lasting ownership.</b> Beginner-friendly guides, reproducible setups, and maintainable
                hardware/software help NGOs and municipal teams operate, repair, and adapt the system—building skills and
                keeping value within the community. 
              </li>
              <li>
                <b>Closing the information gap.</b> Standardized thermal/RGB data and simple analytics bring earlier
                warnings and targeted prevention to places without extensive monitoring, improving time-to-first-attack and
                resource allocation.
              </li>
              <li>
                <b>Measuring equity outcomes.</b> We propose tracking responder injuries, deployment time in low-resource
                districts, cost-per-hectare protected, and adoption rates to ensure benefits accrue where vulnerability is
                greatest and to inform equitable funding.
              </li>
              <li>
                <b>Avoiding burden-shifting.</b> Biocompatible materials and careful placement reduce runoff and ecological
                harm, ensuring that protecting people does not impose new environmental costs on the same communities.
              </li>
            </ul>
          </div>

          {/* SDG 13 */}
          <div className="proof-block" id="sdg13">
            <h2>13 Climate Action</h2>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <p
              style={{
                fontWeight: "bold",
                marginBottom: "1.5rem",
                fontSize: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
              >
                <b>2023 was the hottest year ever recorded -</b> Global temperature hit +1.45 °C above pre-industrial
                levels.
              </p>
            </div>
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "1.5rem",
                fontSize: "1.2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              <Link
                className="interactive-link"
                target="_blank"
                rel="noopener noreferrer"
                to="https://wmo.int/publication-series/state-of-global-climate-2023"
              >
                WMO — State of the Global Climate 2023
              </Link>
              
            </p>
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <figure style={{ textAlign: "center", margin: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                className="satellite-img"
                src="https://static.igem.wiki/teams/5590/sustainability/13-climate-action.webp"
                alt="Climate Action iconography"
                style={{ minWidth: "200%", height: "auto", display: "block" }}
              />
            </figure>
          </div>

            <h3 id="sdg13-intro"></h3>
            <p>
              Anthropogenic warming has already increased the odds of extreme fire years and the frequency of days with
              explosive wildfire growth. Proactive, precise suppression tools that keep ignitions small (and firefighters
              safer) are therefore climate-adaptation measures that limit smoke, carbon emissions and disaster losses.
            </p>

            <h3 id="sdg13-stakeholder">Stakeholders</h3>
            <p>
              Climate-action NGOs helped pin down where our hydrogel fits in real wildfire adaptation and firefighters helped
              assess the advantages of fire retardants.
            </p>
            <p>
              <strong>Fundo Casa Socioambiental (Brazil):</strong> Urged swift action in the face of climate change and noted a rapidly
              growing market for greener solutions—reinforcing our focus on affordable, low-impact approaches that
              communities can adopt quickly.
            </p>
            <p>
              <strong>The Mirror Foundation (Thailand):</strong> Reported a rising number of wildfires and emphasized the climate–fire
              feedback loop: hotter, drier conditions make ignition more likely, and fires in turn release CO₂ that worsens
              warming, underscoring the need for early detection and rapid containment.
            </p>
            <p>
              <strong>Lebanese Firefighters (Lebanon):</strong> Highlighted the practical value of fire retardants for containment,
              explaining that timely application can keep incidents from becoming uncontrollable and excessively large,
              reducing risk to crews and communities, which directly validated our approach.
            </p>

            <h3 id="sdg13-impact">Long-term Impact</h3>
            <p>
              Wildfires constitute a significant source of greenhouse gas emissions, releasing approximately 1.7 gigatons of
              CO₂ equivalents annually while simultaneously degrading vital carbon-sequestering ecosystems (UN DESA, 2025)<Citation id="2"/>.
              Our system directly tackles this climate feedback loop by preventing combustion and reducing the carbon
              footprint of firefighting through bio-based production and low-emission deployment technologies.
            </p>
            <p>
              <strong>Reduction of CO₂ and Black-Carbon Emissions.</strong> Our hydrogel formulation (cellulose–chitosan–silica–SRSF1)
              demonstrated a significant reduction in burn rate and in surface temperature during laboratory tests, leading
              to a decrease in CO₂ emissions per wildfire event in field applications. Additionally, the hydrogel promotes
              char formation, stabilizing carbon in the soil and delaying its atmospheric release (Gaia Education, 2025)<Citation id="3"/>.
            </p>
            <p>
              <strong>Low-Carbon Manufacturing Through Synthetic Biology.</strong> Conventional fire retardants involve energy-intensive
              production and logistics. We replaced these with microbial biosynthesis, leveraging engineered{" "}
              <i>E. coli</i> and <i>S. cerevisiae</i> organisms that biosynthesize hydrogel components. Life cycle assessments
              estimate a 60–70% reduction in production energy compared to traditional chemical synthesis (Tunley
              Environmental, 2024; ETH Zurich, 2025)<Citation id="4"/><Citation id="5"/>.
            </p>
            <p>
              <strong>Low-Emission Deployment and Adaptation Technology.</strong> Unlike conventional kerosene-powered firefighting aircraft
              emitting up to 65 kg CO₂ per flight hour, Our drones operate electrically, emitting less than 0.1 kg CO₂
              per hour, or potentially zero with renewable energy. The drones’ precision spraying minimizes resource use,
              while offering proactive climate adaptation capabilities such as fire-risk surveillance and pre-emptive gel
              application, crucial for resilience amid increasing droughts and heatwaves (UN DESA, 2025; Gaia Education, 2025)<Citation id="2"/><Citation id="3"/>.
            </p>
            <p>
              <strong>Preservation of Carbon Sinks and Ecosystem Resilience.</strong> By containing wildfires early, our solution preserves
              forests, the planet's largest terrestrial carbon reservoirs, keeping over 90% of organic matter intact post-fire
              compared to 55% in untreated zones. Sustaining forest cover supports evapotranspiration, soil stabilization,
              and microclimate regulation, reinforcing long-term carbon sequestration (UN DESA, 2025)<Citation id="2"/>.
            </p>
            <p>
              <strong>Socio-Economic and Policy Impact.</strong> Our hydrogel’s cost-effective, biotechnologically grounded approach facilitates
              continuous preventive applications, particularly benefiting resource-limited high-risk regions. Its integration
              into national and international climate policies offers a replicable model for decarbonized emergency response,
              reducing the economic burden of fire-related disaster recovery (Gaia Education, 2025; Tunley Environmental,
              2024)<Citation id="3"/><Citation id="4"/>.
            </p>
            <p>
              <strong>Long-Term Vision.</strong> Widespread adoption of biologically produced retardants and electric drone fleets can
              transform wildfire management from reactive, fossil-dependent operations into carbon-neutral, closed-loop
              systems. This transition advances SDG 13 targets of strengthening climate resilience (13.1) and enhancing
              education and capacity-building on climate mitigation and adaptation (13.3), fostering a globally sustainable
              and adaptive climate defense infrastructure (UN DESA, 2025)<Citation id="2"/>.
            </p>

            
          </div>

          {/* SDG 14 */}
          <div className="proof-block" id="sdg14">
            <h2>14 Life Below Water</h2>
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "1.5rem",
                fontSize: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              
              Nutrient pollution has documented adverse impacts in <b>~65% of major U.S. estuaries,</b> and there are <b>hundreds of
              eutrophic or hypoxic “dead zones” </b> nationwide, linked to fish kills and biodiversity loss.{" "}
            </p>
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "1.5rem",
                fontSize: "1.2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              <Link
                className="interactive-link"
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.epa.gov/nutrientpollution/nutrient-indicators-dataset"
              >
                EPA — Nutrient Indicators Dataset
              </Link>
            </p>

            <h3 id="sdg14-intro"></h3>
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <figure style={{ textAlign: "center", margin: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                className="satellite-img"
                src="https://static.igem.wiki/teams/5590/sustainability/14-life-below-water.webp"
                alt="Life Below Water iconography"
                style={{ minWidth: "200%", height: "auto", display: "block" }}
              />
            </figure>
          </div>

            <h3 id="sdg14-intro"></h3>
            <p>
              Conventional foams and retardants (often containing or mobilizing PFAS-class contaminants) contribute to
              widespread surface- and groundwater PFAS burdens and harm aquatic communities. Because our solution is designed
              around biocompatible polymers and targeted aerial placement (instead of broad watershed coverage), it offers
              a pathway to cut marine and freshwater exposure to persistent pollutants during wildfire response.
            </p>

            <h3 id="sdg14-stakeholder">Stakeholders</h3>
            <p>
              Stakeholders pushed us away from conventional chemical retardants that “cause their own harm, damaging
              ecosystems,” and toward biodegradable materials and careful deployment, choices that reduce the chance of
              runoff-driven aquatic impacts.
            </p>
            <p>
              <strong>Fundo Casa Socioambiental (Brazil):</strong> Emphasized the urgency of expanding green initiatives and noted that
              the market for sustainable solutions is growing. They stressed using products that safeguard both aquatic and
              terrestrial ecosystems.
            </p>
            <p>
              Across our conversations, many organizations were unaware of the environmental downsides of several
              market-leading firefighting products. All found that it was a great initiative to stop the spread of these
              negative impacts and move toward cleaner, ecosystem-friendly alternatives.
            </p>

            <h3 id="sdg14-impact">Long-term Impact</h3>
            <p>
              The long-term impact of SDG 14 centers on the sustainable management and protection of marine and coastal
              ecosystems to halt pollution, overfishing, ocean acidification, and biodiversity loss. The health of oceans,
              seas, and marine resources is critical for global food security, climate regulation, and biodiversity
              conservation (UNDP, 2025)<Citation id="6"/>.
            </p>
            <p>
              Traditional firefighting retardants, including ammonium phosphate salts and PFAS-based foams, have been found
              to introduce persistent toxic substances into aquatic environments. These compounds contaminate rivers,
              estuaries, and marine waters, leading to nutrient enrichment, harmful algal blooms, and the bioaccumulation of
              heavy metals in marine life, ultimately threatening fisheries and coastal livelihoods. The persistence of PFAS and similar pollutants is especially concerning due to their resistance to
              degradation and capacity to accumulate through marine food webs.
            </p>
            <p>
              Innovations with biodegradable fire retardants made from natural biopolymers such as cellulose, chitosan, and
              silica represent environmentally safer alternatives. These substances degrade through microbial action into
              harmless end-products like carbon dioxide, water, and minerals, avoiding disruptions to marine water chemistry
              like pH or salinity shifts. Their mild adsorptive properties also help
              capture dissolved pollutants, reducing downstream contamination in estuarine and coastal ecosystems
            </p>
            <p>
              Importantly, excluding nitrogen- and phosphorus-rich compounds prevents fertilizer-like runoff that drives
              eutrophication and dead zones in coastal waters. The absence of synthetic surfactants eliminates microplastic
              pollution, a major threat to marine species ranging from plankton to whales
            </p>
            <p>
              Environmental safety provided by biodegradable retardants offers socio-economic benefits by lowering the costs
              and complexity of post-fire marine and coastal water remediation efforts, protecting fisheries and aquaculture
              that support vulnerable coastal communities (UNDP, 2023; Sharma et al., 2024)<Citation id="6"/><Citation id="7"/>.
            </p>
            <p>
              Furthermore, maintaining unpolluted marine waters enhances climate resilience. Healthy oceans regulate carbon
              cycles, support fisheries, and buffer coastal populations against extreme weather and sea-level rise
              exacerbated by climate change (IPCC, 2024)<Citation id="4"/>.
            </p>
            <p>
              In conclusion, adopting sustainable firefighting materials aligned with SDG 14 targets is essential for
              preserving marine ecosystem health, preventing pollution, and supporting climate and community resilience over
              the long term.
            </p>

          
          </div>

          {/* SDG 15 */}
          <div className="proof-block" id="sdg15">
            <h2>15 Life On Land</h2>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "1.5rem",
                fontSize: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              <b>The world lost </b><b>~10 million hectares of forest </b><b>per year in 2015–2020.</b>{" "}
            </p>
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "1.5rem",
                fontSize: "1.2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              <Link
                className="interactive-link"
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.fao.org/state-of-forests/en/"
              >
                Food and Agriculture Organization of the United Nations
              </Link>
            </p>

          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <figure style={{ textAlign: "center", margin: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                className="satellite-img"
                src="https://static.igem.wiki/teams/5590/sustainability/15-life-on-land.webp"
                alt="Life on land iconography"
                style={{ minWidth: "200%", height: "auto", display: "block" }}
              />
            </figure>
          </div>


            <h3 id="sdg15-intro"></h3>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p>
              Extreme fires cause acute and landscape-scale biodiversity impacts, documented across &gt;2,000 taxa in the
              2019–2020 Australian megafires, with the largest effects in extensively burnt, drought-stressed and repeatedly
              burned areas. By improving first-attack effectiveness and enabling preventative, localized treatment (e.g.,
              along ignition-prone corridors or during red-flag periods), our solution supports biodiversity conservation, habitat
              integrity and post-fire recovery.
            </p>
            </div>

            <h3 id="sdg15-stakeholder">Stakeholders</h3>
            <p>
              Protecting terrestrial ecosystems shapes how you design and deploy our product. <b>WSL</b> (Swiss Federal Institute
              for Forest, Snow and Landscape) cautioned that real forests vary by species, fuel, wind and moisture, so models
              must stay simple and application-focused, guidance you used to target localized, habitat-sensitive treatments
              rather than blanket approaches.
            </p>
            <p>
              <strong>The Mirror Foundation (Thailand):</strong> Voiced concerns about ecosystem integrity when certain fire retardants
              are used, sharing examples of locally available products they considered “suspicious.” This reinforced our
              commitment to greener, cleaner formulations aligned with sustainable development. They also highlighted risks to
              endangered species, noting peacocks fleeing wildfires in panic: an image that underscores both the direct harm
              from fires and the need to ensure suppression products themselves don’t further threaten vulnerable wildlife.
            </p>
            <p>
              <strong>Fundo Casa Socioambiental (Brazil)</strong> emphasized the urgency of expanding green initiatives and noted that
              the market for sustainable solutions is growing. They stressed using products that safeguard both aquatic and
              terrestrial ecosystems.
            </p>
            <p>
              Finally, our framing rejects conventional retardants that “cause their own harm, damaging ecosystems,” anchoring
              the biodiversity rationale for a biocompatible hydrogel and careful placement.
            </p>

            <h3 id="sdg15-impact">Long-term Impact</h3>
            <p>
              Wildfires severely damage terrestrial ecosystems by destroying vegetation, disrupting soil structure, and
              undermining biodiversity and agriculture. Our hydrogel contributes to the restoration and sustainable
              preservation of land ecosystems by preventing fire spread, safeguarding soil integrity, and supporting post-fire
              ecological regeneration using biodegradable, non-toxic materials.
            </p>
            <p>
              <b>Soil and Vegetation Protection During Fire Events.</b> Hydrogel-treated surfaces demonstrate significantly
              reduced ignition and heat penetration, with laboratory tests showing surface temperature drops, dense char layer
              formation acting as a thermal shield. This preserves essential soil nutrients and microbial communities crucial
              for vegetation recovery (UN DESA, 2025; ETH Zurich, 2025)<Citation id="2" /><Citation id="5" />.
            </p>
            <p>
              <b>Prevention of Desertification and Erosion.</b> Wildfire-induced loss of vegetation leads to soil
              hydrophobicity, reducing water infiltration and increasing erosion and desertification risks. Our hydrogel mitigates
              this by preventing hydrophobic layers and enhancing soil water retention post-fire, promoting vegetation
              anchoring and maintaining soil porosity, crucial to combating land degradation, a core SDG 15 target.
            </p>
            <p>
              <b>Ecosystem Recovery and Biodiversity Preservation.</b> By preserving soil biota and organic matter, our hydrogel
              accelerates ecological succession and facilitates early reestablishment of grasses and shrubs, supporting food
              and habitat for wildlife. Its non-toxic composition does not harm pollinators or soil organisms, aiding
              biodiversity resilience especially in sensitive ecosystems like tropical and Mediterranean forests .
            </p>
            <p>
              <b>Long-Term Environmental Safety.</b> Unlike chemical retardants, our hydrogel leaves no hazardous residues and
              biodegrades without inhibiting soil functions or plant germination, enabling repeated, sustainable use in
              fire-prone landscapes.
            </p>

          </div>

        </section>
      </div>
      <ReferencesDropdown references={sustainabilityReferences} />
    </div>
  );
};

export default Sustainability;
