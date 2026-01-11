import "./wetlab.css";
import PageHead from "../../components/Head/PageHead";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

interface MonthlyEntry {
  id: string;
  month: string;
  title: string;
  highlights: string[];
  weeks: {
    period: string;
    activities: string[];
  }[];
}

const monthlyEntries: MonthlyEntry[] = [
  {
    id: "july",
    month: "July 2025",
    title: "Foundation & Setup",
    highlights: [
      "Project planning and strain selection completed",
      "Initial bacterial transformations established",
      "Western blot protocols optimized"
    ],
    weeks: [
      {
        period: "July 7–13",
        activities: [
          "Planification of experiments",
          "HB101 and T7 express strains selected for plasmid amplification and protein expression",
          "List of compounds and materials needed for wet lab determined"
        ]
      },
      {
        period: "July 14–20",
        activities: [
          "Evaluate stock left by the iGEM team of previous year, clean equipment",
          "Bacterial transformations with all plasmids performed for plating and amplification",
          "Amplification of plasmid DNA and mini-preps attempted in HB101, low yield due to shaking speed",
          "Repeated with higher rpm and got better concentration of plasmid DNA",
          "Expression of proteins SRFS1 and SRPK1 in E. coli"
        ]
      },
      {
        period: "July 21–27",
        activities: [
          "3 Western blots and coomassie stains of SRSF1 and SRPK1 cell lysates",
          "First blot was unsuccessful, but trials including changes in antibody concentration and incorporation of positive controls improved visualization",
          "Final list of synthetic compounds for hydrogel ordered"
        ]
      },
      {
        period: "July 28–August 3",
        activities: [
          "Planning of experiments for chitosan quantification in yeast",
          "Planning of experiments for visualization of silica bioencapsulation in E. coli",
          "Final western blot confirms expression of SRSF1 and SRPK1 in our T7 Express E. coli strain"
        ]
      }
    ]
  },
  {
    id: "august",
    month: "August 2025",
    title: "Dual-System Development",
    highlights: [
      "Yeast transformation protocols established",
      "Dual-system protein validation achieved",
      "Hydrogel assembly protocols finalized"
    ],
    weeks: [
      {
        period: "August 4–10",
        activities: [
          "Planning of microscopy for visualisation of silica coating in bacteria",
          "Western blot preparations continued",
          "Yeast transformation with RHO1 and CDA performed"
        ]
      },
      {
        period: "August 11–17",
        activities: [
          "Yeast expression induced",
          "Western blot of yeast samples to confirm expression of protein in yeast"
        ]
      },
      {
        period: "August 18–24",
        activities: [
          "2 Western blot trials of INP-Silicatein and INP-CBD strains of E. coli",
          "Western blot trials of RHO1 and CDA strains of S. cerevisiae",
          "First blot successful in showing expression in yeast but bacteria results not visible",
          "Second blot enabled us to show expression of the proteins of interest in E. coli"
        ]
      },
      {
        period: "August 25–31",
        activities: [
          "Final hydrogel assembly protocol determined",
          "Large-scale cultures of E. coli T7 express transformed with SRSF1",
          "Fire-resistant protein (SRSF1) purification performed via FPLC using Ni-NTA affinity and SEC columns"
        ]
      }
    ]
  },
  {
    id: "september",
    month: "September 2025",
    title: "Characterization & Testing",
    highlights: [
      "Rheological testing completed",
      "Flow cytometry protocols developed",
      "Large-scale production achieved"
    ],
    weeks: [
      {
        period: "September 1–7",
        activities: [
          "Hydrogel assembly for rheology tests started",
          "Mechanical properties of various hydrogels tested using rheometer device",
          "Gel structure visualized with microscope",
          "Western blots of SRSF1 protein: unsuccessful in showing presence of protein in purification samples",
          "Bacteria samples prepared for microscopy",
          "Fluorescent microscopy for visualization of silica coating in bacteria"
        ]
      },
      {
        period: "September 8–14",
        activities: [
          "Yeast cultures repassaged and prepared for staining, wild-type strain selected as control",
          "Staining of yeast cells with cibacron red and WGA-AF488",
          "Flow cytometry experiment for quantification of chitin and chitosan production in yeast"
        ]
      },
      {
        period: "September 15–21",
        activities: [
          "Large scale cultures of SRSF1 and SRPK1 strains for production of fire-resistant protein",
          "Western blots of SRSF1 and SRPK1 strain lysate: no protein detected for both antibodies",
          "Ponceau stain done to check for thick band at right molecular weight ranges",
          "Ponceau staining of SRSF1 samples used in fire test: confirmation that protein might be present"
        ]
      },
      {
        period: "September 22–28",
        activities: [
          "Transformation of E. Coli T7 express with OmpA-Silicatein and OmpA-CBD plasmids"
        ]
      },
      {
        period: "September 29–October 5",
        activities: [
          "Expression induced in OmpA-Silicatein and OmpA-CBD strains in preparation for fluorescent microscopy",
          "Staining with Rhodamine, CellMask, anti-HA-FITC, anti-V5-AF555",
          "Imaging with fluorescent microscope"
        ]
      }
    ]
  }
];

const navItems = [
  { id: "july", label: "July 2025" },
  { id: "august", label: "August 2025" },
  { id: "september", label: "September 2025" }
];

export default function Notebook() {

  return (
    <div className="proof-container">
      <PageHead
        title="Laboratory Notebook"
        subtitle="Monthly progress documentation of experimental milestones"
        backgroundUrl="https://static.igem.wiki/teams/5590/wetlab/headpicture/akta-bw.webp"
        grayscale={true}
      />

      <div className="hardware-layout">
        <aside className="hardware-sidebar">
          <div className="sidebar-title">Table of Contents</div>
          <nav>
            <ul>
              <li>
                <a className="sidebar-button" href="#july">
                  July 2025: Foundation &amp; Setup
                </a>
              </li>
              <li>
                <a className="sidebar-button" href="#august">
                  August 2025: Dual-System Development
                </a>
              </li>
              <li>
                <a className="sidebar-button" href="#september">
                  September 2025: Characterization &amp; Testing
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <section className="hardware-main proof-section">
          <div className="proof-block">
            <h2>Project Timeline Overview</h2>
            <p>
              Our laboratory notebook spans three intensive months of experimental work, from initial
              project planning through final characterization. This timeline documents our journey
              developing Pyronix hydrogel.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
                marginTop: "1.5rem"
              }}
            >
              {monthlyEntries.map(entry => (
                <div
                  key={entry.id}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid var(--color-dark-orange)",
                    borderRadius: "12px",
                    padding: "1.2rem",
                    textAlign: "center",
                    
                  }}
                >
                  <h4
                    style={{
                      color: "var(--color-dark-orange)",
                      fontSize: "1.2rem",
                      marginBottom: "0.5rem"

                    }}
                  >
                    {entry.month}
                  </h4>
                  <p
                    style={{
                      color: "var(--color-whitish)",
                      fontSize: "1rem",
                      margin: 0

                    }}
                  >
                    {entry.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {monthlyEntries.map(entry => (
            <div key={entry.id} className="proof-block" id={entry.id}>
              <h2>
                {entry.month}: {entry.title}
              </h2>

              {/* Key Achievements Section */}
              <div
                style={{
                  backgroundColor: "rgba(255, 149, 0, 0.1)",
                  border: "1px solid var(--color-dark-orange)",
                  borderRadius: "8px",
                  padding: "1.2rem",
                  marginBottom: "2rem",
                  fontSize: "1.2rem"
                }}
              >
                <h3
                  style={{
                    color: "var(--color-dark-orange)",
                    fontSize: "1.1rem",
                    marginBottom: "1rem"
                  }}
                >
                  Key Achievements
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {entry.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "var(--color-whitish)",
                        fontFamily: "var(--font-body)",
                        fontSize: "1.2rem",
                      }}
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          backgroundColor: "var(--color-dark-orange)",
                          borderRadius: "50%",
                          marginRight: "1rem",
                          flexShrink: 0
                        }}
                      ></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Activities */}
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {entry.weeks.map((week, weekIndex) => (
                  <div
                    key={weekIndex}
                    style={{
                      borderLeft: "3px solid var(--color-dark-orange)",
                      paddingLeft: "1.5rem",
                      backgroundColor: "rgba(255, 255, 255, 0.02)",
                      borderRadius: "0 8px 8px 0",
                      padding: "1.2rem 1.5rem"
                    }}
                  >
                    <h4
                      style={{
                        color: "var(--color-dark-orange)",
                        fontSize: "1rem",
                        marginBottom: "1rem",
                        fontWeight: "600"
                      }}
                    >
                      {week.period}
                    </h4>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                      {week.activities.map((activity, actIndex) => (
                        <div
                          key={actIndex}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            color: "var(--color-whitish)",
                            fontFamily: "var(--font-body)",
                            fontSize: "1.2rem",
                            lineHeight: "1.6",
                            letterSpacing: "0.01rem"
                          }}
                        >
                          <div
                            style={{
                              width: "4px",
                              height: "4px",
                              backgroundColor: "var(--color-whitish)",
                              borderRadius: "50%",
                              marginTop: "0.6rem",
                              marginRight: "1rem",
                              flexShrink: 0,
                              opacity: 0.7
                            }}
                          ></div>
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
