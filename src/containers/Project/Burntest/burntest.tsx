
import React, { useState } from "react";
import "../Proofofconcept/proofofconcept.css";
import "../../../components/Sidebar/sidebar.css";
import "./burntest.css";
import PageHead from "../../../components/Head/PageHead";
import Citation from "../../../components/References/Citation";
import ReferencesDropdown from "../../Homepage/References/references";
import { Reference } from "../../../components/References/ReferenceList";


const BurnTest: React.FC = () => {
  const [openPdf, setOpenPdf] = useState<string | null>(null);
  const togglePdf = (pdfUrl: string) => {
    setOpenPdf(openPdf === pdfUrl ? null : pdfUrl);
  };
  // Reference list for this page
  const burntestReferenceList: Reference[] = [
    {
      id: '1',
      text: 'Dong, Changxin, et al. “Water‐Enhancing Gels Exhibiting Heat‐Activated Formation of Silica Aerogels for Protection of Critical Infrastructure During Catastrophic Wildfire.” <em>Advanced Materials</em>, vol. 36, no. 40, Oct. 2024, p. 2407375. DOI.org (Crossref), <a href="https://doi.org/10.1002/adma.202407375" target="_blank" rel="noopener noreferrer">https://doi.org/10.1002/adma.202407375</a>'
    }
  ];
  return (
    <div className="education-container">
      {/* Hero Section */}
      <PageHead
        title="Burn Measurement"
        subtitle="Experimental validation of Pyronix gel under controlled fire exposure"
        backgroundUrl="https://static.igem.wiki/teams/5590/fronimagesproject/img-6665.avif"
        grayscale={true}
      />

      <div className="hardware-layout">
          <aside className="hardware-sidebar">
          <div className="sidebar-title">Table of Contents</div>
          <nav>
            <ul>
              <li><a className="sidebar-button" href="#intro">Burn Test Overview</a></li>
              <li><a className="sidebar-button" href="#protocol">Experimental Setup and Protocol</a></li>
              <li><a className="sidebar-button" href="#videos">Burn Test Videos</a></li>

              <li>
                <a className="sidebar-button" href="#categories">Qualitative Analysis</a>
                <ul className="sidebar-sublist">
                  <li><a className="sidebar-button sub-item" href="#mid-paragraph">Introduction</a></li>
                  <li><a className="sidebar-button sub-item" href="#qual-results">Results</a></li>
                  <li><a className="sidebar-button sub-item" href="#qual-discussion">Discussion</a></li>
                </ul>
              </li>

              <li>
                <a className="sidebar-button" href="#graphs">Quantitative Analysis</a>
                <ul className="sidebar-sublist">
                  <li><a className="sidebar-button sub-item" href="#graphs">Introduction</a></li>
                  <li><a className="sidebar-button sub-item" href="#quant-results">Results</a></li>
                  <li><a className="sidebar-button sub-item" href="#analysis">Discussion</a></li>
                  <li><a className="sidebar-button sub-item" href="#triplicates">Supplementary</a></li>
                </ul>
              </li>

            </ul>
          </nav>
        </aside>
        <section className="hardware-main proof-section">
          {/* 1. Intro Paragraph */}
          <div className="proof-block" id="intro">
            <p>
              The objective of this experiment was to evaluate the fire-retardant properties of our hydrogel under controlled conditions. Specifically, we aimed to demonstrate the gel’s ability to resist ignition, promote effective charring, and protect the underlying substrate.
            <p>
              To achieve this, we conducted a small-scale burn test comparing the burn rates of treated versus untreated wood samples, while also observing how each sample burned over time.
            </p>
            </p>
          </div>

          {/* 2. Protocol PDF */}
          <div className="proof-block" id="protocol">
            <h2>Experimental Setup & Protocol</h2>
            <p>
              Wood boards were exposed to a direct flame under controlled conditions. Each sample was subjected to flame for a maximum of 90 seconds; samples were removed earlier if the flame height reached half the board height for safety. The experimental design was inspired by Dong et al. (Advanced Materials, 2024) <Citation id="1" />.
            </p>
            


            <figure style={{ maxWidth: 700, margin: '1.25rem auto 0', textAlign: 'center' }}>
              <img src="https://static.igem.wiki/teams/5590/burn-test/burn-test-setup-2.webp" alt="Burn test experimental setup" />
              <figcaption className="caption">
                <strong>Figure A: Experimental Setup of the Burn Test. </strong>This schematic illustrates the experimental setup, where a wood board is secured with a clamp on a support rod positioned above a water tray. 
              </figcaption>
            </figure>
          </div>

            {/* PDF link styled like Wetlab experiments */}
            <div style={{ marginTop: 0, marginBottom: 0 }}>
              <p>
                The burning process was recorded with RGB cameras and infrared (IR) cameras, allowing us to assess not only the visible burn progression but also the thermal impact and damage distribution across the samples.
              </p>
              <p style={{ marginTop: 0, marginBottom: 0 }}>
                More detailed information on the experimental protocol and measurement methodology is available in the accompanying PDF:
              </p>
            </div>
            <div style={{ marginTop: 0, display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
              <button
                onClick={() => togglePdf('https://static.igem.wiki/teams/5590/burn-test/burning-test-protocol.pdf')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.4rem 0.6rem',
                  color: 'var(--color-whitish)',
                  textDecoration: 'none',
                  transition: 'all 0.15s ease',
                  borderLeft: '2px solid var(--color-dark-orange)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left'
                }}>
                <div style={{
                  minWidth: '6px',
                  height: '6px',
                  backgroundColor: 'var(--color-dark-orange)',
                  borderRadius: '50%',
                  marginRight: '0.6rem',
                  flexShrink: 0
                }}></div>
                <span className="interactive-link" style={{ fontSize: '1.125rem', fontWeight: '400' }}>Burn Test Protocol (PDF)</span>
                <span aria-hidden="true" style={{ marginLeft: 'auto', fontSize: '0.9rem', opacity: 0.85 }}>{openPdf ? '▴' : '▾'}</span>
              </button>
              {openPdf === 'https://static.igem.wiki/teams/5590/burn-test/burning-test-protocol.pdf' && (
                <div style={{ marginTop: '0rem', marginBottom: '0rem' }}>
                  <iframe
                    src="https://static.igem.wiki/teams/5590/burn-test/burning-test-protocol.pdf"
                    width="100%"
                    height="600px"
                    style={{ border: '1px solid #ccc', borderRadius: '8px' }}
                    title="Burn Test Protocol"
                  />
                 
                </div>
              )}
            </div>
          
          <div className="proof-block" >
          <h2 style={{ paddingBottom: "1rem", color: "var(--color-dark-orange)" }}>Reasons behind the measurement choice</h2>
            <p>With limited access to specialized fire-testing equipment, we designed a practical, reproducible protocol focused on what we could measure well. To capture the key effects of fire on wood, we chose burn damage as a function of time and temperature gradient, the most intuitive and scalable metrics for our constraints. We standardized samples using gridded wood pieces and recorded two synchronized video streams: an RGB feed to track damage progression over time, and an IR feed to map surface temperature gradients.To maximize interpretability, gel formulations were selected via a component-ablation approach relative to the cellulose holding matrix, allowing us to infer each component’s contribution; we also included three negative controls : no treatment, water (a strong benchmark we aim to outperform), and the final gel composition with lysate, to assess whether the specific protein affected performance.
            </p><p>This gave us a robust first dataset that we analyzed in two complementary ways: a qualitative overview to characterize patterns and failure modes, followed by a rigorous quantitative analysis to test and compare outcomes.
            </p>
</div>

          <div className="proof-block" id="videos">
            <h2>Burn Test Videos</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ maxWidth: 720, margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <iframe title="EPFL: Burn Test Demo" width="560" height="315" src="https://video.igem.org/videos/embed/twuJVvbhJgzYwZeLQmghUM" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style={{ border: 0 }}></iframe>
                </div>
                <figcaption className="caption">
                <strong>Figure B.1 : Burn Test Demo. Wood Coated with Cellulose–Chitosan–Silica–Cell Lysate Gel
            </strong>This video shows the setup of our burn test. A wood piece is held by a clamp on a support rod and exposed to flame. Half of the wood surface is coated with a gel composed of cellulose, chitosan, silica, and cell lysate.
              </figcaption>

              </div>
              <div style={{ maxWidth: 720, margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <iframe title="EPFL: Burn Test IR" width="560" height="315" src="https://video.igem.org/videos/embed/fngZrXCofhWdsvqdYKEWuY" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style={{ border: 0 }}></iframe>
                </div>
                <figcaption className="caption">
                <strong>Figure B.2: Burn Test IR Camera Feed: Wood Coated with Cellulose–Chitosan–Silica–Cell Lysate Gel
 
                </strong>Infrared camera feed from the burn test conducted . A wood sample, half coated with a cellulose–chitosan–silica–cell lysate gel, is clamped on a support rod and exposed to flame for comparative thermal resistance assessment.
                </figcaption>

              </div>
              </div>
          </div>

          {/* 4. Paragraph */}
          <div className="proof-block" id="mid-paragraph">
            <p style={{ color: 'var(--color-light-orange)' }}>

            In the next section, we present the outcomes of the burn test carried out. The analysis is structured into two complementary parts: a qualitative assessment, focusing on the observable features of post-ignition wood samples on which different gel compositions were applied, and a quantitative evaluation, where we examine the exact damaged area as a function of time as well as the burn rate of each sample. Together, these approaches provide a comprehensive understanding of the material’s burn characteristics.
            </p>
          </div>

          <div className="proof-block" id="categories">
            <h2>Qualitative Analysis</h2>
            <p>For the qualitative assessment, we present the final state of one representative sample (from the triplicates) for each condition, along with an infrared (IR) image captured during the burning process. A single representative sample was selected for simplicity and clarity, while still conveying the overall trends observed across all replicates. This approach allows us to highlight the key visual differences in burn behavior and substrate protection between conditions.
            </p>

          </div>

          <div className="proof-block" id="results-and-discussion">
              <h4 style={{ fontWeight: 'bold', fontSize: '1.5rem', textDecoration: 'underline' }}>Results</h4>
            <div className="results-category">
              <h4>Nothing (Negative control)</h4>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <figure style={{ maxWidth: 300 }}>
                  <img src="https://static.igem.wiki/teams/5590/burn-test/nothing.webp" alt="Negative control final" style={{ width: '100%', borderRadius: 8 }} />
                  <figcaption className="caption"><strong>Figure C. Negative Control (No Gel Applied) Wood Board Final State</strong>  Wood sample without gel. The sample ignited easily and sustained combustion for approximately 13 seconds before extinguishing.</figcaption>
                </figure>
                <figure style={{ maxWidth: 600 }}>
                  <img src="https://static.igem.wiki/teams/5590/burn-test/nothing-ir.webp" alt="Negative control IR" style={{ width: '100%', borderRadius: 8 }} />
                  <figcaption className="caption"><strong>Figure D. Negative Control (No Gel Applied)- IR image</strong>
                  Infrared capture of the untreated wood sample during combustion, showing heat distribution and intensity during the test.</figcaption>
                </figure>
              </div>
            </div>

            <div className="results-category">
              <h4>Water</h4>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <figure style={{ maxWidth: 300 }}>
                  <img src="https://static.igem.wiki/teams/5590/burn-test/water.webp" alt="Water final" style={{ width: '100%', borderRadius: 8 }} />
                  <figcaption className="caption"><strong>Figure E. Water-Treated Wood Board – Final State</strong>
                  Wood sample treated with water but without gel. The final state, after 50 seconds of combustion, shows clear burn damage, with visible charring and measurable mass loss.</figcaption>
                </figure>
                <figure style={{ maxWidth: 800 }}>
                  <img src="https://static.igem.wiki/teams/5590/burn-test/water-ir.webp" alt="Water IR" style={{ width: '100%', borderRadius: 8 }} />
                  <figcaption className="caption"><strong>Figure F. Water-Treated Wood Board – IR Image</strong>
                  Infrared capture of the water-treated wood sample during combustion, highlighting heat distribution and intensity. The zoomed view reveals two distinct regions: the water-treated half and the untreated half. Notably, there is little difference in thermal gradient between the two areas, indicating limited protective effect of water alone.</figcaption>
                </figure>
              </div>
            </div>

            <div className="results-category">
              <h4>Cellulose, Chitosan, Silica, Lysate</h4>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <figure style={{ maxWidth: 300 }}>
                  <img src="https://static.igem.wiki/teams/5590/burn-test/lysate.webp" alt="Lysate final" style={{ width: '100%', borderRadius: 8 }} />
                  <figcaption className="caption"><strong>Figure G. Cellulose, Chitosan, Silica and Lysate Gel-Treated Wood Board – Final State</strong>
                  Wood sample treated with a gel composed of Cellulose, silica, chitosan and lysate.The final state shows burn damage, with visible charring and mass loss.</figcaption>
                </figure>
                <figure style={{ maxWidth: 800 }}>
                  <img src="https://static.igem.wiki/teams/5590/burn-test/lysate-ir.webp" alt="Lysate IR" style={{ width: '100%', borderRadius: 8 }} />
                  <figcaption className="caption"><strong>Figure H. Cellulose, Chitosan, Silica and Lysate Gel-Treated Wood Board – IR Image</strong>
                  Infrared capture of a wood sample treated with during combustion, highlighting heat distribution and intensity. The zoomed view reveals two distinct regions: the water-treated half and the untreated half. Notably, there is little difference in thermal gradient between the two areas, indicating limited protective effect of water alone</figcaption>
                </figure>
              </div>
            </div>

            <div className="results-category">
              <h4>Cellulose, Chitosan, Silica, SRSF1</h4>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <figure style={{ maxWidth: 300 }}>
                  <img src="https://static.igem.wiki/teams/5590/burn-test/srsf1.webp" alt="SRSF1 final" style={{ width: '100%', borderRadius: 8 }} />
                  <figcaption className="caption"><strong>Figure I. Cellulose, Chitosan, Silica and SRSF1 Gel-Treated Wood Board – Final State</strong>
                  Wood sample treated with a gel composed of Cellulose, Chitosan, Silica, and SRSF1. The final state shows minimal burn damage, with localized charring at the flame contact point but no sustained combustion. The protective gel significantly reduced spread and preserved the wood structure compared to untreated samples.</figcaption>
                </figure>
                <figure style={{ maxWidth: 800 }}>
                  <img src="https://static.igem.wiki/teams/5590/burn-test/srsf1-ir.webp" alt="SRSF1 IR" style={{ width: '100%', borderRadius: 8 }} />
                  <figcaption className="caption"><strong>Figure J. Cellulose, Chitosan, Silica and SRSF1 Gel-Treated Wood Board – IR Image</strong>
                  Infrared capture of the gel-treated wood sample during combustion, highlighting heat distribution and intensity. The zoomed view reveals two distinct regions: the gel-treated half and the untreated half. Notably, the gel-treated region shows reduced thermal gradient and heat penetration, demonstrating the enhanced fire-retardant effect of the formulation compared to untreated areas.</figcaption>
                </figure>
              </div>
            </div>

            <div className="results-category">
              <h4>Cellulose, Chitosan, Silica</h4>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <figure style={{ maxWidth: 300 }}>
                  <img src="https://static.igem.wiki/teams/5590/burn-test/cellulose-silica-chitosan.webp" alt="Cellulose chitosan silica final" style={{ width: '100%', borderRadius: 8 }} />
                  <figcaption className="caption"><strong>Figure K. Cellulose, Chitosan, Silica Gel-Treated Wood Board – Final State</strong>
                  Wood sample treated with a gel composed of Cellulose, Chitosan, and Silica. The final state shows localized burn damage at the flame contact point with visible charring, but combustion was not sustained. The treated half of the board shows a protective layer, with reduced penetration of the flame compared to the untreated side.</figcaption>
                </figure>
                <figure style={{ maxWidth: 800 }}>
                  <img src="https://static.igem.wiki/teams/5590/burn-test/cellulose-chitosan-silica-ir.webp" alt="Cellulose chitosan silica IR" style={{ width: '100%', borderRadius: 8 }} />
                  <figcaption className="caption"><strong>Figure L. Cellulose, Chitosan, Silica Gel-Treated Wood Board – IR Image</strong>
                  Infrared capture of the wood sample during combustion, highlighting heat distribution and intensity. The zoomed view reveals two distinct regions: the gel-treated half and the untreated half. The gel-treated area demonstrates reduced heat transfer and lower thermal intensity relative to the untreated side, indicating enhanced fire resistance provided by the formulation.</figcaption>
                </figure>
              </div>
            </div>

            <div className="results-category">
              <h4>Cellulose, Silica</h4>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <figure style={{ maxWidth: 300 }}>
                  <img src="https://static.igem.wiki/teams/5590/burn-test/cellulose-silica.webp" alt="Cellulose silica final" style={{ width: '100%', borderRadius: 8 }} />
                  <figcaption className="caption"><strong>Figure M. Cellulose, Silica Gel-Treated Wood Board – Final State</strong>
                  Wood sample treated with a gel composed of Cellulose and Silica. The final state shows extensive burn damage, with clear charring that spread vertically through the sample. On average, the treated samples burned for approximately 70 seconds, indicating limited protective effect compared to formulations containing chitosan or SRSF1.</figcaption>
                </figure>
                <figure style={{ maxWidth: 800 }}>
                  <img src="https://static.igem.wiki/teams/5590/burn-test/cellulose-silica-ir.webp" alt="Cellulose silica IR" style={{ width: '100%', borderRadius: 8 }} />
                  <figcaption className="caption"><strong>Figure N. Cellulose, Silica Gel-Treated Wood Board – IR Image</strong>
                  Infrared capture of the wood sample during combustion, highlighting heat distribution and intensity.The zoomed view reveals two distinct regions: the gel-treated half and the untreated half. Both regions display high thermal gradients, with the gel-treated half showing only minor reduction in heat transfer. This result demonstrates that the Cellulose–Silica formulation provides insufficient fire retardancy under these conditions.</figcaption>
                </figure>
              </div>
            </div>

            <div className="results-category">
              <h4>Cellulose</h4>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <figure style={{ maxWidth: 300 }}>
                  <img src="https://static.igem.wiki/teams/5590/burn-test/cellulose.webp" alt="Cellulose final" style={{ width: '100%', borderRadius: 8 }} />
                  <figcaption className="caption"><strong>Figure O. Cellulose Gel-Treated Wood Board – Final State</strong>
                  Wood sample treated with a gel composed solely of Cellulose. The final state shows heavy burn damage, with deep charring concentrated at the flame contact point and visible spreading upward. Combustion was sustained and more severe compared to multi-component formulations, indicating that Cellulose alone provided minimal flame-retardant protection.</figcaption>
                </figure>
                <figure style={{ maxWidth: 800 }}>
                  <img src="https://static.igem.wiki/teams/5590/burn-test/cellulose-ir.webp" alt="Cellulose IR" style={{ width: '100%', borderRadius: 8 }} />
                  <figcaption className="caption"><strong>Figure P. Cellulose Gel-Treated Wood Board – IR Image</strong>
                  Infrared capture of the wood sample during combustion, highlighting heat distribution and intensity. Both areas reached high thermal intensities, with little difference in heat penetration between them. This demonstrates that Cellulose alone has limited ability to suppress heat transfer or reduce flame propagation.</figcaption>
                </figure>
              </div>
            </div>

            <h3 style={{ color: 'var(--color-dark-orange)' }} id="qual-discussion">Discussion</h3>
            <p>
              The series of burn tests demonstrated clear differences in fire resistance among treatments. Untreated and water-treated samples ignited easily and sustained burning, with IR images showing high heat penetration and minimal protective effect. Cellulose alone or in combination with silica provided only limited resistance, as samples burned for extended periods with deep charring and strong thermal gradients across both treated and untreated halves. Incorporating chitosan improved outcomes, with reduced flame spread, localized charring, and lower thermal transfer visible in IR captures. The most effective protection was observed in the Cellulose–Chitosan–Silica–SRSF1 formulation, which prevented sustained combustion, preserved wood integrity, and displayed markedly reduced heat penetration on infrared imaging. Overall, IR analysis supported the visual results, confirming that multi-component gels, particularly those with chitosan and SRSF1, offer significant enhancement in fire-retardant performance compared to simpler formulations.
            </p>
          </div>

             <div className="proof-block" id="graphs">
            <h2>Quantitative Analysis</h2>
            <p>
              To complement the qualitative observations, we performed a quantitative evaluation of fire damage across triplicate samples under each condition. At 30-second intervals, wood boards were photographed, and both charred and lost surface areas were quantified using Fiji (ImageJ). Full details of the image processing workflow and raw data are provided in the Supplementary section.
            </p>
            <p>
              Two levels of analysis were conducted with the processed data. The first analysis focused on endpoint comparisons, where a burn rate was calculated for each sample. This burn rate was derived from the final damaged area normalized by the time to removal, thereby accounting for variations in final burn duration caused by safety restrictions. Such normalization was critical, as boards that burned for shorter periods could otherwise appear less damaged than longer-burning samples, introducing bias into the comparison. The aggregated burn rates for each condition were then displayed as bar graphs, with mean values and error bars representing variability across triplicates. Statistical significance between conditions was assessed using Welch’s Student t-tests, followed by Bonferroni correction for multiple comparisons. Results are reported using the standard annotation format (*** ≤ 0.001, ** ≤ 0.01, * ≤ 0.05, ns &gt; 0.05).
            </p>
            <p>
              The second analysis examined the progression of damage over time, where charred areas were plotted at each available 30-second interval. Mean values and standard errors were reported across triplicates, providing a dynamic perspective on the rate of fire spread. This time-course assessment complemented the burn rate bar graph by highlighting real time dynamics of fire spread.
            </p>

          </div>

          <div className="proof-block">
            <h3 id="quant-results" style={{ color: 'var(--color-dark-orange)' }}>Results</h3>

            

            <div style={{ display: 'grid', gap: '1rem' }}>
              {/* GRAPH 1 */}
              <figure style={{ maxWidth: 950, margin: '0 auto' }}>
                <img src="https://static.igem.wiki/teams/5590/burn-test/graph-1.webp" alt="Graph 1 burn rates" style={{ width: '100%', borderRadius: 8 }} />
                <figcaption className="caption">
                  <strong> Figure Q: Burn Rates of Wood Samples Treated with Final Gel Compositions Compared to Negative Controls</strong>
                </figcaption>
              </figure>

              {/* Paragraph for GRAPH 1 */}
              <p>
                Burn rates were determined for four conditions (n = 3 each): cellulose–silica–chitosan gel, cellulose–silica–chitosan + SRSF1 gel, water, and no treatment. Both gel formulations exhibited significantly lower burn rates compared with the controls. Specifically, the cellulose–silica–chitosan gel showed strong protection compared with water (p &lt; 0.0002), while the SRSF1 formulation also reduced burn rates relative to water (p = 0.0025). When compared with the untreated boards, both gels remained significantly protective (p = 0.0132 for SRSF1, p = 0.0144 for cellulose–silica–chitosan). These results demonstrate that both envisioned gel compositions confer measurable fire-retardant properties under the test conditions.
              </p>

              {/* GRAPH 2 */}
              <figure style={{ maxWidth: 950, margin: '0 auto' }}>
                <img src="https://static.igem.wiki/teams/5590/burn-test/graph-2.webp" alt="Graph 2 partial formulations" style={{ width: '100%', borderRadius: 8 }} />
                <figcaption className="caption">
                  <strong>Figure R: Burn Rates of Partial Gel Compositions and Protein Controls Compared to Water</strong>
                </figcaption>
              </figure>

              {/* Paragraph for GRAPH 2 */}
              <p>
                To assess the contribution of individual components, partial formulations (cellulose alone; cellulose + silica) and a protein lysate control were compared against water (n = 3 each). None of these conditions differed significantly from water following Bonferroni correction (p = 0.1023 for cellulose; p = 0.4705 for cellulose + silica; p = 1.0000 for lysate). These findings indicate that partial gels and non-specific proteins do not provide any further detectable fire-retardant activity relative to water, emphasizing the necessity of the complete formulation for effective protection.
              </p>

              {/* GRAPH 3 */}
              <figure style={{ maxWidth: 950, margin: '0 auto' }}>
                <img src="https://static.igem.wiki/teams/5590/burn-test/graph-3.webp" alt="Graph 3: SRSF1 ablation" style={{ width: '100%', borderRadius: 8 }} />
                <figcaption className="caption">
                  <strong>Figure S: Effect of SRSF1 Ablation on Burn Protection</strong>
                </figcaption>
              </figure>

              {/* Paragraph for GRAPH 3 */}
              <p>
                Thus, under the current experimental design and limited sample size, the protective contribution of SRSF1 cannot be confirmed statistically. Notably, the lysate condition displayed a relatively large measurement error, which may reflect uncontrolled sources of variability such as fluctuations in wind or flame intensity. Future experiments should address these potential confounders by incorporating environmental containment to minimize airflow disturbances, using a stabilized, higher-capacity gas source to ensure a consistent flame, and increasing the number of replicates to strengthen statistical power.
              </p>

              {/* GRAPH 4 */}
              <figure style={{ maxWidth: 950, margin: '0 auto' }}>
                <img src="https://static.igem.wiki/teams/5590/burn-test/graph-4.webp" alt="Graph 4 damage progression" style={{ width: '100%', borderRadius: 8 }} />
                <figcaption className="caption">
                  <strong>Figure T: Damage Progression as a Function of Time</strong>
                </figcaption>
              </figure>

              {/* Paragraph for GRAPH 4 */}
              <p>
                The time-course analysis revealed clear differences between conditions. Both controls (water and no treatment) exhibited steep increases in damage over time, consistent with rapid burn propagation. In contrast, the two complete gel formulations displayed the shallowest slopes, indicating effective retardation of fire spread throughout the exposure period. These findings reinforce the protective capacity of the gels not only at the endpoint but also dynamically during the burning process.
              </p>
            </div>
          </div>
          {/* 12. Analysis Paragraph */}
          <div className="proof-block" id="analysis">
            <h3 style={{ color: 'var(--color-dark-orange)' }}>Discussion</h3>
            <p>
              The combustion tests demonstrated clear differences in fire resistance among treatments. Untreated and water-treated samples ignited easily and sustained burning, with IR images showing high heat penetration and minimal protective effect. Cellulose alone or with silica provided limited resistance. Incorporating chitosan improved outcomes, with reduced flame spread and lower thermal transfer. The most effective protection was observed in the Cellulose–Chitosan–Silica–SRSF1 formulation, which prevented sustained combustion and markedly reduced heat penetration. IR analysis supported the visual results and quantitative metrics.
            </p>
            <p>
              In this test, we evaluated the fire-retardant performance of novel hydrogel formulations based on cellulose, silica, and chitosan, with or without the addition of the SRSF1 protein. Using small-scale burn tests under controlled conditions, we integrated both endpoint analyses (Figures 1–3) and time-course assessments (Figure 4) to provide a comprehensive view of gel performance.
            </p>
            <p>
              The results demonstrate that both final gel formulations significantly reduced burn rates compared to untreated and water-treated controls. Importantly, neither partial formulations (cellulose or cellulose–silica) nor the lysate-containing control exhibited detectable protection, underscoring that the fire-retardant properties arise from the full synergy of cellulose, silica, and chitosan, rather than from individual components or non-specific proteins.
            </p>
            <p>
              In contrast, the addition of SRSF1 did not significantly improve performance over the base gel or the lysate control after Bonferroni correction. This finding suggests that, under the present experimental design and sample size, SRSF1 does not provide measurable additional fire-retardant activity. High variability, particularly in the lysate condition, may reflect uncontrolled sources of error such as wind disturbances or variability in flame strength, which could have masked subtle effects.
            </p>
            <p>
              Future experiments should address these limitations by increasing the number of replicates, introducing environmental containment to minimize airflow disturbances, and using a stabilized, higher-capacity gas source to ensure a consistent flame. These improvements would help reduce experimental noise, improve reproducibility, and allow more confident conclusions about potential biomolecular contributions.
            </p>
            <p>
              Despite these constraints, the dynamic analysis of damage progression confirmed that both gel compositions slowed fire spread relative to controls, highlighting their potential as effective fire-retardant coatings. Together, these findings establish proof-of-concept that cellulose–silica–chitosan gels can provide measurable fire protection and validate the necessity of complete formulations rather than partial mixtures.
            </p>
            <p>
              Future work should expand testing to larger scales and more realistic fire scenarios, while also optimizing formulation stability and application strategies.
            </p>
            
          </div>

          <div className="proof-block" id="triplicates">
            <h3 style={{ color: 'var(--color-dark-orange)' }}>Supplementary: Fiji Analysis and Data Retrieval</h3>
            <p>
              To accurately quantify the damaged areas of each wood board, we employed the Fiji software (ImageJ). For each image, color thresholding was applied to distinguish burnt regions from intact material, allowing consistent measurement of the charred surface area. A spatial calibration was established using the grid marks displayed on the wood boards, ensuring that all measurements were converted into real area units.
            </p>

            <figure style={{ maxWidth: 950, margin: '0.5rem auto' }}>
              <img src="https://static.igem.wiki/teams/5590/burn-test/fiji.webp" alt="Fiji analysis overlay" style={{ width: '100%', borderRadius: 8 }} />
              <figcaption className="caption">
                <strong>Figure U. Fiji-Based Analysis of Damaged Area</strong>
                The red overlay represents the charred region automatically detected by Fiji following application of the appropriate threshold. In parallel, the lost area (structural loss due to burning) was quantified. In cases where the software detected both charred and lost regions together, the total was reported under the category “Charred area.”
              </figcaption>
            </figure>

            <p>
              The processed data for all samples are summarized in the figure below:
            </p>

            <figure style={{ maxWidth: 800, margin: '0.5rem auto 1rem' }}>
              <img src="https://static.igem.wiki/teams/5590/burn-test/data.webp" alt="Processed data table" style={{ width: '100%', borderRadius: 8 }} />
              <figcaption className="caption"><strong>Figure V: Processed Data Summary.</strong>Processed summary of measured charred and lost areas for all samples.</figcaption>
              {/* Protocol-style PDF link for Fiji analysis */}
              <div style={{ marginTop: '1rem', marginBottom: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                <button
                  onClick={() => togglePdf('https://static.igem.wiki/teams/5590/burn-test/how-to-analyze-using-fiji.pdf')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.4rem 0.6rem',
                    color: 'var(--color-whitish)',
                    textDecoration: 'none',
                    transition: 'all 0.15s ease',
                    borderLeft: '2px solid var(--color-dark-orange)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left'
                  }}>
                  <div style={{
                    minWidth: '6px',
                    height: '6px',
                    backgroundColor: 'var(--color-dark-orange)',
                    borderRadius: '50%',
                    marginRight: '0.6rem',
                    flexShrink: 0
                  }}></div>
                  <span className="interactive-link" style={{ fontSize: '1.125rem', fontWeight: '400' }}>Fiji Image Analysis Protocol (PDF)</span>
                  <span aria-hidden="true" style={{ marginLeft: 'auto', fontSize: '0.9rem', opacity: 0.85 }}>{openPdf === 'https://static.igem.wiki/teams/5590/burn-test/how-to-analyze-using-fiji.pdf' ? '▴' : '▾'}</span>
                </button>
                {openPdf === 'https://static.igem.wiki/teams/5590/burn-test/how-to-analyze-using-fiji.pdf' && (
                  <div style={{ marginTop: '0rem', marginBottom: '0rem' }}>
                    <iframe
                      src="https://static.igem.wiki/teams/5590/burn-test/how-to-analyze-using-fiji.pdf"
                      width="100%"
                      height="600px"
                      style={{ border: '1px solid #ccc', borderRadius: '8px' }}
                      title="Fiji Image Analysis Protocol"
                    />
                  </div>
                  
                )}
                <p>In addition, the Python code used to generate plots and perform statistical testing is available on our <a href="https://gitlab.igem.org/2025/software-tools/epfl" target="_blank" rel="noopener noreferrer" className="interactive-link"><strong><span style={{ color: 'var(--color-dark-orange)' }}>GitLab</span></strong></a>.</p>
              </div>
            </figure>
          </div>
        </section>
      </div>
      <ReferencesDropdown references={burntestReferenceList} />
    </div>
  );
};

export default BurnTest;
