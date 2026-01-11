import React, { useState, useEffect } from "react";
import "./wildfireheadlines.css";
import PageHead from "../../../components/Head/PageHead";

const WildfireHeadlines: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const navItems = [
    { id: "satellites", label: "What Satellites Show", isSubItem: false },
    { id: "headlines", label: "Headlines by Region", isSubItem: false },
    { id: "europe", label: "Europe", isSubItem: true },
    { id: "northamerica", label: "North America", isSubItem: true },
    { id: "asia", label: "Asia", isSubItem: true },
    { id: "africa", label: "Africa", isSubItem: true },
    { id: "oceania", label: "Oceania", isSubItem: true },
    { id: "southamerica", label: "South America", isSubItem: true }
  ];

  useEffect(() => {
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
        title="Wildfire Headlines Around the World — 2025"
        subtitle=""
        backgroundUrl="https://static.igem.wiki/teams/5590/wildfireheadline/nasa-earth-observatory-may-31.webp"
        
      />

      <div className="hardware-layout">
          <aside className="hardware-sidebar">
            <div className="sidebar-title">Table of Contents</div>
            <nav>
              <ul>
                <li>
                  <a className="sidebar-button" href="#satellites">
                    What Satellites Show
                  </a>
                </li>

                <li>
                  <a className="sidebar-button" href="#headlines">
                    Headlines by Region
                  </a>
                  <ul className="sidebar-sublist">
                    <li>
                      <a className="sidebar-subitem" href="#europe">
                        Europe
                      </a>
                    </li>
                    <li>
                      <a className="sidebar-subitem" href="#northamerica">
                        North America
                      </a>
                    </li>
                    <li>
                      <a className="sidebar-subitem" href="#asia">
                        Asia
                      </a>
                    </li>
                    <li>
                      <a className="sidebar-subitem" href="#africa">
                        Africa
                      </a>
                    </li>
                    <li>
                      <a className="sidebar-subitem" href="#oceania">
                        Oceania
                      </a>
                    </li>
                    <li>
                      <a className="sidebar-subitem" href="#southamerica">
                        South America
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </aside>
        
        <section className="hardware-main proof-section">
          <div className="proof-block" id="introduction">
            <p><b>2025 broke wildfire records worldwide</b>, leaving forests scorched and communities reeling.
              NASA captured smoke stretching across entire continents, and on-the-ground reporting in Europe and North America details massive burn scars, evacuations, and rising health impacts.
            </p>
          </div>

          {/* Satellites Section */}
          <div className="proof-block" id="satellites">
            <h2>🛰️ What Satellites Show: Smoke Visible from Space 🛰️</h2>

            <p>
          <a href="https://earthobservatory.nasa.gov/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }} className="interactive-link">  Satellites see the whole picture at once. </a>

             Instruments like MODIS, VIIRS and EPIC trace the spread of smoke and active fire detections in near-real time, so we can compare single-day events to seasonal trends and understand when 2025 broke past "normal."
            </p>
          </div>

          <div className="proof-block">
            <div className="satellite-image-container">
              <img src="https://static.igem.wiki/teams/5590/wildfireheadline/legend-nasa-earth-observatory-may-31.webp" alt="Earth showing smoke from space" className="satellite-img" />
              <div className="image-caption" >
                <b style={{ fontSize: '1.3rem' }}>Canada's season ranks second only to 2023:</b> ~8.8 million ha burned by early September; communities—especially Indigenous ones—faced repeated evacuations and long disruptions.
                <br />
                <a href="https://www.nifc.gov/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }} className="interactive-link">National Interagency Fire Center</a>
              </div>
            </div>
          </div>

          <div className="proof-block">
            <p><b style={{ fontSize: '1.3rem' }}>Europe's burned area is the highest since records began (2006):</b> by Sept 30, 2025, the EU had ~1.03 million ha burned; associated fire-season CO₂ emissions exceeded 41 Mt, more than double last year to date. </p>
            <div className="satellite-image-container">
              <img src="https://static.igem.wiki/teams/5590/wildfireheadline/spain-with-smoke-legend.webp" alt="Earth with smoke labels" className="satellite-img" />
              <div className="image-caption">
                <b style={{ fontSize: '1.3rem' }}>Iberian heat and drought drove intense smoke events</b> visible from space in mid-August.
                <br />
                <a href="https://joint-research-centre.ec.europa.eu/index_en" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }} className="interactive-link">JRC : Le Hub Scientifique de l'UE</a>
              </div>
            </div>
          </div>

          <div className="proof-block">
            <div className="satellite-image-container">
              
              <img src="https://static.igem.wiki/teams/5590/wildfireheadline/france-aude-with-legend.webp" alt="Earth with smoke labels" className="satellite-img" />
              
              <div className="image-caption">
                <b style={{ fontSize: '1.3rem' }}>France's "Aude" fire (~16,000 ha, Aug 2025)</b> was reported as the country's largest since 1949.

                <br />
                <a href="https://visibleearth.nasa.gov/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }} className="interactive-link">Visible Earth</a>
              </div>
            </div>
          </div>


          {/* Headlines Section */}
          <div className="proof-block" id="headlines">
            <h2>Headlines</h2>
            <p>
              The wildfire story in 2025 is <b>global</b>. A warming climate is loading the dice for more extreme fire weather, hotter heatwaves, longer dry spells, lower humidity, and stronger, erratic winds so fires spread faster, burn larger areas, and threaten places that once saw shorter, milder seasons.
            </p>
          </div>

          {/* Europe */}
          <div className="proof-block" id="europe">
            <h2>Europe — headlines 📰</h2>
            <h3 style={{ padding: '1rem'}}>Record season overall</h3>
            <p>
              2025 stands out as an unprecedented year for EU burned area based on EFFIS tracking, with <b>&gt;1 million hectares</b> burned by late August and Spain/Portugal among the hardest hit, according to <i>Le Monde</i>.
            </p>
            <div style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}>
              <p>
                <a
                  href="https://www.lemonde.fr/les-decodeurs/article/2025/08/26/une-annee-2025-deja-record-pour-les-feux-de-forets-en-europe_6635754_4355770.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-link"
                >
                  Le Monde: "Une année 2025 déjà record pour les feux de forêts en Europe"
                </a>
              </p>
            </div>
            

            <div className="chart-container">
              <img src="https://static.igem.wiki/teams/5590/wildfireheadline/seasonal-trend-ba-eu-2006-2024-2025.webp" alt="EU burned area seasonal trend 2025" className="chart-img" />
              <div style={{ color: "black" , fontSize: '0.9rem', marginTop: '0.5rem', textAlign: 'center' }}>
                <b>Fig. 1.</b> Seasonal trend of daily burned area in the EU: 2025 (red) vs the 2006–2024 average (blue) and the historical min–max range (grey). Peaks in early and mid-August 2025 rise well above the long-term average and approach historical maxima.
                <br />
                <em>When the red line pops above the grey band, 2025 isn't just above average, it's pushing beyond the recorded range.</em>
                <br />
                <a href="https://effis.jrc.ec.europa.eu/" target="_blank" rel="noopener noreferrer" className="interactive-link">Copernicus EMS — European Forest Fire Information System (EFFIS)</a>
              </div>
            </div>

            <p>The red curve shows 2025’s <b>daily burned area</b>; the blue curve is the 2006–2024 average; the grey band is the historical minimum–maximum for each calendar day. When the red line pops above the grey band,
<p style={{ display: 'flex', justifyContent: 'center' }}>
  <b>2025 isn’t just above average, it’s pushing beyond the recorded range.</b>
</p>
</p>

            <h3 style={{ padding: '1rem', textDecoration: 'underline', marginTop: '2rem' }}>Greece & Turkey evacuations</h3>
            <p>
              Severe heat and winds triggered mass evacuations and EU assistance across parts of Greece and Turkey, with fires reaching the northern suburbs of Athens in late July 2025.
            </p>
            <p style={{display: 'flex', justifyContent: 'center'}}>
              <a href="https://www.theguardian.com/world/2025/jul/27/greece-enlists-help-from-european-allies-to-tackle-raging-wildfires" target="_blank" rel="noopener noreferrer" className="interactive-link">
                The Guardian: "Thousands in Greece and Turkey evacuate as winds and heat fan wildfires"
              </a>
            </p>
            <img src="https://static.igem.wiki/teams/5590/wildfireheadline/the-gardian-headlines.webp" alt="The Guardian headlines" className="article-img" />

          </div>

          {/* North America */}
          <div className="proof-block" id="northamerica">
            <h2>North America — headlines 📰</h2>
            <h3 style={{ padding: '1rem', textDecoration: 'underline' }}>Why fire seasons are intensifying</h3>
            <p>
              TIME explains how a warming climate is lengthening fire seasons and raising the odds of large, fast-moving events: "We're Living in the Age of Fire. It Will Only Get Worse" (July 2, 2025).
            </p>
            <p style={{display: 'flex', justifyContent: 'center'}}>
              <a href="https://time.com/7299284/age-of-mega-wildfires-climate-change/" target="_blank" rel="noopener noreferrer" className="interactive-link">
                TIME: "We're Living in the Age of Fire. It Will Only Get Worse"
              </a>
            </p>
            <img src="https://static.igem.wiki/teams/5590/wildfireheadline/time-cover.webp" alt="TIME headline" className="article-img" />
              

            <h3 style={{ padding: '1rem', textDecoration: 'underline', marginTop: '2rem' }}>Human impacts in Canada</h3>
            <p>
              Indigenous communities bore a disproportionate share of evacuations and disruption during Canada's 2025 season, highlighting longstanding inequities in emergency response and recovery (<i>The Washington Post</i>, Oct 5, 2025).
            </p>
            <p style={{display: 'flex', justifyContent: 'center'}}>
              <a href="https://www.washingtonpost.com/world/2025/10/05/canada-wildfires-indigenous-people/" target="_blank" rel="noopener noreferrer" className="interactive-link">
                Washington Post: "Indigenous people bear the worst of Canada's historic wildfire season"
              </a>
            </p>
            <img src="https://static.igem.wiki/teams/5590/wildfireheadline/washington-post-headlines.webp" alt="Washington Post headline" className="article-img" />
          </div>

          {/* Asia */}
          <div className="proof-block" id="asia">
            <h2>Asia — headlines 📰</h2>
            <h3 style={{ padding: '1rem', textDecoration: 'underline' }}>Japan's largest wildfire in decades</h3>
            <p >
              Emergency crews battled a fast-moving blaze in early March, forcing evacuations and destroying homes in western Japan.
            </p>
            <p style={{display: 'flex', justifyContent: 'center'}}>
              <a href="https://www.theguardian.com/world/2025/mar/01/japan-battles-largest-wildfire-in-decades" target="_blank" rel="noopener noreferrer" className="interactive-link">
                The Guardian: "Japan battles largest wildfire in decades" (Mar 1, 2025)
              </a>
            </p>
            <img src="https://static.igem.wiki/teams/5590/wildfireheadline/newheadline/japan-wildfire-headlines.webp" alt="Japan headline" className="article-img" />


            <h3 style={{ padding: '1rem', textDecoration: 'underline', marginTop: '2rem' }}>South Korea's worst wildfires on record</h3>
            <p>
              Late-March fires killed dozens, displaced tens of thousands, and damaged cultural sites; containment came after rain and cooler weather.
            </p>
            
            <p style={{display: 'flex', justifyContent: 'center'}}>
              <a href="https://apnews.com/article/30ee7361cc07498f9cae20979df29277" target="_blank" rel="noopener noreferrer" className="interactive-link">
                AP News: "South Korea's worst wildfires are now almost contained" (Mar 29–31, 2025)
              </a>
              </p>            
              <img src="https://static.igem.wiki/teams/5590/wildfireheadline/newheadline/south-korea-headlines.webp" alt="South Korea headline" className="article-img" />

          </div>

          {/* Africa */}
          <div className="proof-block" id="africa">
            <h2>Africa — headlines 📰</h2>
            <h3 style={{ padding: '1rem', textDecoration: 'underline' }}>Namibia — Etosha National Park scorched</h3>
            <p>
              A week-long wildfire burned roughly <b>one-third</b> of Etosha, a ~20,000 km² reserve, with major impacts on tourism and wildlife.
            </p>
            <p style={{display: 'flex', justifyContent: 'center'}}>
              <a href="https://www.reuters.com/business/environment/wildfires-ravage-third-namibias-flagship-national-park-2025-09-29/" target="_blank" rel="noopener noreferrer" className="interactive-link">
                Reuters: "Wildfires ravage a third of Namibia's flagship national park" (Sep 29–30, 2025)
              </a>
            </p>
            <img src="https://static.igem.wiki/teams/5590/wildfireheadline/ap-africa-headlines.webp" alt="Reuters headline" className="article-img" />

            <p>Mobilization of forces and aerial support: Government deployed 500+ soldiers, helicopters and tankers as flames threatened communities.
            </p>
            <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
              <p style={{display: 'flex', justifyContent: 'center'}}>
                <a href="https://apnews.com/article/37401968181819d31b5f5b46b30e5d2b" target="_blank" rel="noopener noreferrer" className="interactive-link">
                  AP News: "Namibia sends hundreds of soldiers to help battle huge wildfire in Etosha National Park"
                </a>
              </p>
              <p style={{display: 'flex', justifyContent: 'center'}}>
                <a href="https://www.theguardian.com/world/2025/sep/29/wildfire-in-namibia-is-contained-says-pm-after-devastation-in-etosha-park" target="_blank" rel="noopener noreferrer" className="interactive-link">
                  The Guardian: "Wildfire in Namibia is contained, says PM, after devastation in Etosha park" (Sep 29, 2025)
                </a>
              </p>
            </ul>
          </div>

    

          {/* Oceania */}
          <div className="proof-block" id="oceania">
            <h2>Oceania — headlines 📰</h2>
            <h3 style={{ padding: '1rem', textDecoration: 'underline' }}>Australia — early spring heat and fire spikes</h3>
            <p>
              Queensland recorded 70+ active incidents and camper evacuations on Moreton Island as October heat set in.
            </p>
            <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
              <p style={{display: 'flex', justifyContent: 'center'}}>
                <a href="https://www.abc.net.au/news/2025-10-03/brisbane-bushfire-warning-issued-after-unusually-hot-weather/105847132" target="_blank" rel="noopener noreferrer" className="interactive-link">
                  ABC News (AU): "Firefighters tackle Brisbane bushfire after unusually hot weather" (Oct 2, 2025)
                </a>
              </p>
              <p style={{display: 'flex', justifyContent: 'center'}}>
                <a href="https://www.abc.net.au/news/2025-10-04/moreton-island-bushfire-update-evacuations/105855784" target="_blank" rel="noopener noreferrer" className="interactive-link">
                  ABC News (AU): "Campers evacuated as Moreton Island bushfire intensifies" (Oct 4, 2025)
                </a>
              </p>
            </ul>
            <img src="https://static.igem.wiki/teams/5590/wildfireheadline/australia-headlines.webp" alt="ABC Australia headline" className="article-img" />
          </div>

          {/* South America */}
          <div className="proof-block" id="southamerica">
            <h2>South America — headlines 📰</h2>
            <h3 style={{ padding: '1rem', textDecoration: 'underline' }}>Brazil — Pantanal fires surge</h3>
            <p>
              Early-season blazes in the world's largest tropical wetland jumped nearly tenfold vs. the prior year, reaching the highest levels since 2020.
            </p>
            <p style={{display: 'flex', justifyContent: 'center'}}>
              <a href="https://www.reuters.com/world/americas/fires-brazils-pantanal-wetlands-surge-drought-looms-2025-04-11/" target="_blank" rel="noopener noreferrer" className="interactive-link">
                Reuters: "Fires in Brazil's Pantanal wetlands surge as drought looms" (Apr 11, 2025)
              </a>
            </p>

            <h3 style={{ padding: '1rem', textDecoration: 'underline', marginTop: '2rem' }}>Chile — repeated emergency alerts</h3>
            <p>
              Months after 2024's deadly fires, 2025's southern-region blazes again triggered evacuations, curfews, and arrests on suspicion of arson.
            </p>
            <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
              <p style={{display: 'flex', justifyContent: 'center'}}>
                <a href="https://apnews.com/article/68155d884f1d706a4e2e1501fbe687b9" target="_blank" rel="noopener noreferrer" className="interactive-link">
                  AP News: "Chile issues evacuation alerts as wildfires rage in the country's south" (Feb 2025)
                </a>
              </p>
              <p style={{display: 'flex', justifyContent: 'center'}}>
                <a href="https://apnews.com/article/6c8d6f3bd3c6ff5cc0197be1c2c9110c" target="_blank" rel="noopener noreferrer" className="interactive-link">
                  AP News: "Chile's president orders curfews in fire-hit areas" (Feb 2025)
                </a>
              </p>
            </ul>

            <h3 style={{ padding: '1rem', textDecoration: 'underline', marginTop: '2rem' }}>Recovery still underway</h3>
            <p>
              One year on, families in Valparaíso/Viña del Mar were still rebuilding, underscoring long-tail impacts.
            </p>
            <p style={{display: 'flex', justifyContent: 'center'}}>
              <a href="https://www.reuters.com/world/americas/chile-struggles-rebuild-year-after-its-deadliest-wildfires-history-2025-02-03/" target="_blank" rel="noopener noreferrer" className="interactive-link">
                Reuters: "Chile struggles to rebuild a year after its deadliest wildfires" (Feb 3, 2025)
              </a>
            </p>
            <img src="https://static.igem.wiki/teams/5590/wildfireheadline/newheadline/chili-headline.webp" alt="Chile headline" className="article-img" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default WildfireHeadlines;