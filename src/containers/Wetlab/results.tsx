import React from "react";
import "../Project/Contribution/contribution.css";
import "../Entrepreneurship/entrepreneur.css";
import PageHead from "../../components/Head/PageHead";
import { Link } from "react-router-dom";
import ReferencesDropdown from "../Homepage/References/references";
import Citation from "../../components/References/Citation";
import { Reference } from "../../components/References/ReferenceList";

const ResultsList: Reference[] = [
  {
    id: '1',
    text: 'Protein ladder M1 (Thermo Fisher 26616): <a href="https://www.thermofisher.com/order/catalog/product/26616" target="_blank" rel="noopener noreferrer">https://www.thermofisher.com/order/catalog/product/26616</a>'
  },
  {
    id: '2',
    text: 'Protein ladder M2 (Thermo Fisher 26619): <a href="https://www.thermofisher.com/order/catalog/product/26619" target="_blank" rel="noopener noreferrer">https://www.thermofisher.com/order/catalog/product/26619</a>'
  },
  {
    id: '3',
    text: 'Molecular weights were calculated with ExPASy ProtParam, using the sequence of the constructs we ordered (<a href="https://web.expasy.org/protparam/" target="_blank" rel="noopener noreferrer">https://web.expasy.org/protparam/</a>).<br/>\
    - CBD+SRSF1+His : 41265.10 kDa<br/>\
    - SRPK1+Strep : 75566.11 kDa<br/>\
    - INP-Si-HA : 46483.63<br/>\
    - INP-CBD-V5 : 40865.28<br/>\
    - CDA-V5 (might be secreted) : 45590.35<br/>\
    - RHO1-HA : 24446.80'
  },
  {
    id: '4',
    text: 'L. M. Sidor et al., “Engineered bacteria that self-assemble bioglass polysilicate coatings display enhanced light focusing”, <em>Proc. Natl. Acad. Sci. U.S.A.</em>, vol. 121, no. 51, p. e2409335121, Dec. 2024, doi: <a href="https://doi.org/10.1073/pnas.2409335121" target="_blank" rel="noopener noreferrer">10.1073/pnas.2409335121</a>.'
  },
  {
    id: '5',
    text: 'W. E. G. Müller et al., “Bioencapsulation of living bacteria (Escherichia coli) with poly(silicate) after transformation with silicatein-α gene”, <em>Biomaterials</em>, vol. 29, no. 7, pp. 771–779, Mar. 2008, doi: <a href="https://doi.org/10.1016/j.biomaterials.2007.10.038" target="_blank" rel="noopener noreferrer">10.1016/j.biomaterials.2007.10.038</a>.'
  },
  {
    id: '6',
    text: 'A. Nguyen, I. Tunn, M. Penttilä, and A. D. Frey, “Enhancing Chitin Production as a Fermentation Byproduct through a Genetic Toolbox That Activates the Cell Wall Integrity Response”, <em>ACS Synth. Biol.</em>, vol. 14, no. 1, pp. 113–128, Jan. 2025, doi: <a href="https://doi.org/10.1021/acssynbio.4c00436" target="_blank" rel="noopener noreferrer">10.1021/acssynbio.4c00436</a>.'
  },
  {
    id: '7',
    text: 'Y. Zhu et al., “Cellulose gel dispersions: fascinating green particles for the stabilization of oil/water Pickering emulsion”, <em>Cellulose</em>, vol. 24, no. 1, pp. 207–217, Jan. 2017, doi: <a href="https://doi.org/10.1007/s10570-016-1093-9" target="_blank" rel="noopener noreferrer">10.1007/s10570-016-1093-9</a>.'
  }
]

const Results: React.FC = () => {

  return (
    <div className="proof-container">
      <PageHead
        title="Results"
        subtitle="Experimental results and characterization of engineered strains and hydrogels"
        backgroundUrl="https://static.igem.wiki/teams/5590/wetlab/headpicture/micro-bw.webp"
        grayscale={true}
      />

      <div className="hardware-layout">
        <aside className="hardware-sidebar">
          <div className="sidebar-title">Table of Contents</div>
          <nav>
            <ul>
              <li>
                <a className="sidebar-button" href="#fireecoli">
                  Fire-Resistant E. coli Strain: SRSF1 &amp; SRPK1
                </a>
              </li>
              <li>
                <a className="sidebar-button" href="#silicaecoli">
                  Silica-Coated E. coli Strain: Silicatein &amp; CBD
                </a>
              </li>
              <li>
                <a className="sidebar-button" href="#yeast">
                  Chitosan-Producing Yeast Strain: RHO1 &amp; CDA
                </a>
              </li>
              <li>
                <a className="sidebar-button" href="#hydrogel">
                  Synthetic Hydrogel Assembly
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <section className="hardware-main proof-section">

          {/* Fire-Resistant E. coli */}
          <div className="proof-block" id="fireecoli">
            <h2 style={{ color: 'var(--color-dark-orange)' }}>Fire-Resistant E. coli (SRSF1 & SRPK1)</h2>
            <h3 style={{ color: 'var(--color-whitish)' }}> Recombinant Protein Expression</h3>

            <p>
              We aimed to generate a bacterial strain co-expressing CBD‑SRSF1‑His and SRPK1‑Strep, the two components of our fire-retardant module. SRSF1 is the core retardant protein that is ultimately embedded in the hydrogel (it is fused with a cellulose binding domain (CBD) and a His tag), and SRPK1 is the kinase that phosphorylates it (tagged by Streptomycin (Strep)). This post-translation modification enhances the fire-resistant properties of SRSF1.
            </p>
            <p>
              To serve as controls, we also produced single-transformed strains, each carrying only one of the plasmids. Following transformation, our first objective was to validate the expression of each fusion protein.

            </p>

            <h4> Coomassie stain</h4>
            <p>We first sought to verify sample quality. To this end, we performed a Coomassie gel stain on a similar gel run in parallel with the blotting gel. The stain showed uniform protein loading and no unexpected anomalies.</p>
            <figure>
              <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/slide2.webp" alt="Coomassie stain of total protein from E. coli lysates expressing SRSF1 and SRPK1" />
              <figcaption className="image-caption"><strong>Figure 1. Coomassie staining for loading control and ladders used.</strong>
             <figcaption> A) Lanes show total protein extracts from bacterial lysates. Lane 1: strain co-expressing CBD-SRSF1-His and SRPK1-Strep. Lane 2: strain expressing CBD-SRSF1-His only. Lane 3: strain expressing SRPK1-Strep only. M1 <Citation id ="1" /> and M2 <Citation id="2" />: protein ladders. CLN9-4 and ++ are positive controls for blotting. The expected molecular weights are CBD-SRSF1-His: 41.3 kDa, SRPK1-Strep: 75.6 kDa, CLN9‑4: 22.8 kDa. <Citation id ="3" /> B) Protein ladders used throughout the different SDS-PAGE : M1 <Citation id="1" /> and M2 <Citation id="2" />.
              </figcaption></figcaption>
            </figure>

            <h4> Western Blot</h4>
            <p>
              Strong bands can be observed for both SRSF1 (41.3 kDa, highlighted in green) and SRPK1 (75.6 kDa, highlighted in red) at their expected molecular weights across all tested samples (Fig. 1). Two positive controls were included : CLN9‑4, a His-tagged protein (MW 22.8 kDa, highlighted in blue) and a dual-tagged proteins (++, highlighted in purple) containing both His and Strep tags. The controls performed as expected. 
            </p>
            <figure>
              <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/slide4.webp" alt="Western blot showing expression of SRSF1 and SRPK1 in E. coli lysates" />
              <figcaption className="image-caption">
                <strong>Figure 2. Western blot showing expression of SRSF1 and SRPK1 in E. coli lysates.</strong> 
                <figcaption> A) Lanes show total protein extracts from bacterial lysates. Lane 1: strain co-expressing CBD-SRSF1-His and SRPK1-Strep. Lane 2: strain expressing CBD-SRSF1-His only. Lane 3: strain expressing SRPK1-Strep only. M1 <Citation id="1" /> and M2 <Citation id="2" />: protein ladders. CLN9-4 and ++ are positive controls for blotting. The expected molecular weights are CBD-SRSF1-His
              </figcaption></figcaption>
            </figure>
            <p>
              The Western blot confirmed the successful transformation of the plasmids and the expression of the CBD‑SRSF1‑His and SRPK1‑Strep fusion proteins in E. coli. Specific bands were detected at the expected WB : 41.3 kDa for SRSF1 and 75.6 kDa for SRPK1. This indicates proper transcription and translation of the constructs. </p>
            <p>To verify consistent protein loading and support interpretation of the blot, a Coomassie blue stain was performed on a duplicate gel. It thus confirmed that the observed signal was part of the total lysate background and not an artifact of detection.</p>
          </div>

          {/* Protein Purification */}
          <div className="proof-block" id="protpurification">
            <h3>Protein Purification via His-tag affinity Chromatography (FPLC)</h3>
          
            <p>
To obtain enough material for purification, we scaled up expression of CBD-SRSF1-His in E. coli. Small overnight pre-cultures (5 mL) were used to inoculate 1 L LB expression cultures with appropriate antibiotics. After 2 hours of growth, IPTG was added to induce protein expression, and cells were harvested 4 hours later. The pellets were resuspended in lysis buffer and lysozyme, DNase, and protease inhibitors, then lysed by sonication. Following centrifugation and microfiltration, a soluble fraction was obtained in order to use for purification.
            </p>
            <p>
Purification was performed on an ÄKTA FPLC system combined with a Ni-NTA affinity column. Proteins with low binding were washed away with low imidazole concentration, while proteins strongly binding to the resin were released in the elution step with high imidazole concentration buffer. The elution was tracked by UV absorbance at 280 nm, and fractions corresponding to the main elution peak were collected for size-exclusion chromatography (SEC). Fractions from this second run were then analysed by SDS-PAGE and Western blot to confirm presence of the His-tagged SRSF1, with the aim of obtaining pure protein for our hydrogel.

            </p>

            <h4> His-tag Affinity Chromatography (FPLC)</h4>
            <p>To isolate our protein of interest, CBD-SRSF1-His, we used Ni-NTA affinity chromatography on an ÄKTA FPLC system. The His-tag added to CBD-SRSF1 provides a strong and specific interaction with the nickel ions from the column, allowing us to separate it from other proteins present in cell lysate.</p>
            <figure>
              <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/fplc-graph.avif" alt="Coomassie stain of total protein from E. coli lysates expressing SRSF1 and SRPK1" />
              <figcaption className="image-caption"><strong>Figure 3. Chromatogram of purification of His-tagged SRSF1 using a Ni-NTA column on an ÄKTA FPLC system.</strong> 
              <figcaption>The UV absorbance at 280 nm (blue line) corresponds to protein elution, conductivity (orange line) indicates buffer changes due to electrical properties, and the green line represents loading of imidazole (Conc B).</figcaption>
            </figcaption>
            </figure>
            <p>
              The column was first equilibrated, then during the sample application phase, the clarified soluble lysate was loaded onto the column. Most proteins lacking a His-tag flowed through without binding, resulting in a large, broad UV signal at 280 nm. This represents the bulk of proteins present in native cells.
            </p>
            <p>In the column wash phase, low concentrations of imidazole were used  (10 mM). This gently removed proteins that bound non-specifically or only weakly to the resin. A small peak was detected here, corresponding to such contaminants being washed away.</p>
            <p>Finally, in the elution phase, the imidazole concentration was increased stepwise (500 mM). Imidazole competes with the histidine side chains of the tagged protein for binding to nickel, releasing His-tagged proteins from the column. A sharp, well-defined peak appeared at ~159 mL, coinciding with the increase in imidazole concentration. The intensity of this peak indicates that a strongly binding species was released in a relatively pure form.</p>
            <p>Fractions corresponding to the sharp elution peak (highlighted in blue in Fig. 3) were collected and pooled to maximize protein recovery. These pooled samples were used for  Size Exclusion Chromatography (SEC), allowing us to separate protein by size, and eliminate potential aggregates or contaminants. The collected SEC fractions were subsequently analyzed by SDS-PAGE and Western blot, with the aim of confirming the presence of CBD-SRFS1-His.</p>

  <a className="interactive-link" href="https://static.igem.wiki/teams/5590/wetlab/results/srsf1-fplc.csv" download>Download FPLC Data</a>


            <h4> Size Exclusion Chromatography (SEC)</h4>
            <p>
Following affinity purification of His-tagged SRSF1 by Ni-NTA chromatography (Fig. 3), we performed a second purification step using Size Exclusion Chromatography (SEC). This step was intended to further polish the protein preparation, remove aggregates and nucleic acid contaminants, and assess the oligomeric state of SRSF1.
            </p>
            <figure>
              <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/sec-graph.webp" alt="Coomassie stain of total protein from E. coli lysates expressing SRSF1 and SRPK1" />
              <figcaption className="image-caption"><strong>Figure 4. Size Exclusion Chromatography (SEC) profile of His-tagged SRSF1 following Ni-NTA affinity purification.</strong> 
              <figcaption>UV absorbance at 280 nm (orange) indicates protein content, while the 260 nm signal (blue) highlights nucleic acid contamination. The main peak at ~12.9 mL corresponds to purified the main protein obtained from FPLC, while minor peaks at ~11 mL and ~15 mL likely represent oligomeric species or contaminants.</figcaption>
            </figcaption>
            </figure>
            <p>
              During the SEC run, a large and well-defined peak was observed at ~12.9 mL in the UV 280 nm channel, corresponding to the main protein present in the sample. From this peak, we collected fractions A11, B3, B5, B8, and B12 (highlighted in the SEC figure), corresponding to the main peak as well as minor features. These were subsequently analyzed by Coomassie staining and Western blot.
            </p>
            <p>
In addition to the main peak, two smaller features are visible. Firstly, a small peak eluting earlier, around ~11 mL, which likely represents higher molecular weight species such as oligomers, protein aggregates, or contaminants. Secondly, we observe a later, smaller peak at ~15 mL, indicating lower molecular weight contaminants or fragments resulting from proteolysis. Regarding UV absorbance, 280 nm and 260 nm traces overlapped within the main peak. This suggests that nucleic acids might have bound to the protein, which could be explained by the known RNA-binding activity of SRSF1.
            </p>
            <p>Overall, the SEC indicated presence of a large amount of a single soluble protein in the main elution from the affinity purification experiment. The presence of a strong, sharp peak indicates that this protein can be efficiently isolated, although nucleic acid contamination and minor oligomerization were observed. Fractions from the SEC run were selected for subsequent analysis, including western blots with antibodies corresponding to the tagged protein and detection of phosphorylated serine residues.
            </p>

  <a className="interactive-link" href="https://static.igem.wiki/teams/5590/wetlab/results/srsf1-sec.csv?raw=true" download>Download SEC Data</a>


            <h4>Coomassie Stain of Purified Protein Fractions</h4>
            <p>
To determine if SRSF1 has been effectively purified, we ran selected fractions from SEC on an SDS-PAGE and then stained it with Coomassie Blue.
            </p>
            <figure>
              <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/slide7.webp" alt="Western blot showing expression of SRSF1 and SRPK1 in E. coli lysates" />
              <figcaption className="image-caption">
                <strong>Figure 5. Coomassie staining of cell lysate and SEC fractions of the FPLC purification.</strong> 
                <figcaption>Lane 1 : lysate of strain expressing SRSF1 (5ul). Lane 2 : soluble fraction of cell lysate, obtained by spinning down and microfiltering (10ul). Lane 3 : purified protein by affinity chromatography (5ul). Lane 4-8 : purified fractions from SEC (A11, B3, B5, B8, B12 in order) (20ul). M1 <Citation id="1" /> and M2 <Citation id="2" />: protein ladders. The expected molecular weight of SRSF1 is 41.3 kDa.
              </figcaption>
              </figcaption>
            </figure>
          <p>
            The B3 fraction (Lane5), which corresponds to the strongest elution peak during SEC, displays a prominent band at approximately 100 kDa, which does not match the expected molecular weight of CBD-SRSF-1-His (41.3 kDa). 
          </p>
          <p>
           This high-molecular-weight protein likely has multiple exposed histidine residues that enable strong binding to the Ni-NTA affinity column. Its high abundance may have contributed it to outcompete SRSF1 for binding (law of mass action). Similar bands around 100 kDa are present in the original lysates, supporting the idea that this contaminant is endogenously expressed by the host strain and was inadvertently selected during purification.
          </p>
          <p>
            The absence of a clear band at the expected height in the SEC fractions indicates that FPLC purification was unsuccessful, likely due to competitive binding of the 100 kDa protein during the Ni-NTA step, which prevented efficient isolation of the target SRSF1.
          </p>
          <h4>Western Blot of Purified Protein</h4>
          <p>To better characterize the identity of proteins in our purified sample, we performed a Western blot using anti-His and anti-Strep antibodies, and compared the signal obtained with the total protein lysates.
          </p>
          <figure>
              <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/slide10.webp" alt="Western blot showing expression of SRSF1 and SRPK1 in E. coli lysates" />
              <figcaption className="image-caption">
                <strong>Figure 6. Western blot of FPLC purification and cell lysate.</strong> 
                <figcaption>Lane 1 : lysate of strain expressing SRSF1 (5ul). Lane 2 : soluble fraction of cell lysate, obtained by spinning down and microfiltering (10ul). Lane 3 : purified protein by affinity chromatography (5ul). Lane 4-6 : purified fractions from SEC (A11, B3, B5, B8, B12 in order) (20ul). M1 <Citation id="1" /> and M2 <Citation id="2" />: protein ladders. The expected molecular weight of SRSF1 is 41.3 kDa. Highlighted in red is SRSF1 and in green is SRPK1.
               </figcaption>
               </figcaption>
            </figure>
          <p>Figure 6 shows lysates, soluble fractions, and FPLC-purified fractions. Lanes 1 to 3, corresponding to the crude lysate, soluble supernatant, and Ni-NTA purified sample, do not display a clear band at the expected size for SRSF1. The only signal detected appears at about 100 kDa. In contrast, lanes 4 to 6, which contain SEC-purified fractions (A11, B3, B5, B8, B12), show clear bands at the expected molecular weights for both SRSF1 (highlighted in red) and SRPK1 (highlighted in green), confirming that both target proteins are present in the original lysates.</p>
          <p>One possible explanation for the absence of SRSF1 signal in lanes 1-3 is that the samples were too diluted, leading to sub-threshold detection. However, given that SRSF1 appears more intense than SRPK1 in the total cell lysates (e.g., Lane 5), it seems unlikely that only SRPK1 would remain detectable if dilution were the only issue.</p>
          <p>An alternative explanation is that the strong 100 kDa band corresponds to an abundant endogenous protein that bound non-specifically to the Ni-NTA resin, as it is consistent with the band observed in Coomassie staining. In this scenario, SRSF1 may have been poorly retained or outcompeted, resulting in low yield and ineffective detection. Interestingly, this abundant contaminant is not observed in the total cell lysates.</p>
          </div>

        {/*Fire resistant Protein Expression*/}
          <div className="proof-block" id="fireresistantprotein">
            <h3>Fire-Resistant Protein Expression (SRSF1) for Burn Test</h3>
            <p>
            Following failure to purify SRSF1 and in order to prepare sufficient fire‑retardant protein for hydrogel burn testing, we scaled up expression in an additional E. coli strain. Before incorporation, we verified expression of both constructs by Western blot and assessed loading and transfer by Ponceau stain.
            </p>
            <figure>
              <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/slide12.webp" alt="Western blot showing expression of SRSF1 and SRPK1 in E. coli lysates" />
              <figcaption className="image-caption">
<strong>Figure 7. Ponceau stain and Western blots of cell lysates used for the burn test.</strong> 
<figcaption>M1 <Citation id="1" />: protein ladder. A) Anti-His-HRP blot to detect CBD-SRSF1-His (expected 41.3 kDa). B) Anti-Strep-HRP blot to detect SRPK1-Strep (expected 75.6 kDa). C) Ponceau stain as a total‑protein transfer control. Highlighted in red is the band suspected to correspond to SRSF1.
               </figcaption></figcaption>
            </figure>
            <p> Despite clear total protein signals on the Ponceau stain, neither Western blot revealed bands at the expected molecular weights for CBD-SRSF1-His (41.3 kDa) or SRPK1-Strep (75.6 kDa). However, the Ponceau stain displays a distinct band at the expected position for SRSF1, suggesting that the protein is likely present in the lysate. As new antibody sources were used in these assays, it is possible that inefficient binding or degradation of the detection reagents explains the lack of signal on the blots.  These results suggest that protein expression was successful, but that detection failed due to issues with the antibodies.</p>
          
          </div>

          {/* Silica-Coated E. coli */}
          <div className="proof-block" id="silicaecoli">
            <h2>Silica-Coated E. coli: Silicatein and Cellulose-Binding Domain</h2>
            <h3> Recombinant Protein Expression</h3>
            <p>
              To simulate silica particles for incorporation into our hydrogel system, we aimed to engineer a bacterial strain co-expressing INP-CBD-V5 and INP-silicatein-HA. INP (Ice Nucleation Protein) is a transmembrane protein used to display fusion partners on the outer surface of the bacterial membrane. By fusing it to silicatein, a protein catalyzing the conversion of silica precursors into silica, we enable the bacteria to precipitate a silica shell around their outer membrane, thus coating themselves.</p>
            <p>
              In parallel, the fusion of CBD (Cellulose Binding Domain) allows the silica-coated bacteria to anchor within our cellulose-based hydrogel, facilitating their integration into our final material. To enable detection via Western blot, the constructs were tagged with V5 and HA epitopes.</p>
            <p>
              We also produced single-transformed control strains used to distinguish single- vs. dual-expression phenotypes.
            </p>
            <h4> Western Blot</h4>
            <p>
              In the lysate of the co-transformed strain, two closely migrating bands are visible between 40 kDa and 55 kDa. These bands correspond to the expected sizes of INP-CBD (40.9 kDa) and INP-silicatein (46.5 kDa), indicating simultaneous expression of both fusion proteins.</p>
            <p>Additionally, the single-transformed control strains each showed a band within the same molecular range, further confirming the individual expression of INP-CBD and INP-silicatein.</p>
            <p>The blotting membrane was incubated with both anti-V5 and anti-HA antibodies.</p>
            <figure>
              <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/slide6.webp" alt="Western blot showing expression of SRSF1 and SRPK1 in E. coli lysates" />
              <figcaption className="image-caption">
              <strong>Figure 8. Western blot of total protein extracts from bacterial lysates.</strong> Lane 1: strain expressing INP-silicatein-HA only. Lane 2: strain expressing INP-CBD-V5 only. Lane 3: strain co-expressing INP-silicatein-HA and INP-CBD-V5. M1 <Citation id="1" /> and M2 <Citation id="2"/>: protein ladders. The expected molecular weights are INP-silicatein-HA: 46.5 kDa, INP-CBD-V5: 40.9 kDa.<Citation id="3"/>
              </figcaption>
            </figure>
            <p>
              A band consistently appears around 100 kDa in samples expressing INP-CBD-V5. This signal is absent in the strain lacking the construct, suggesting it is associated with the presence of the fusion protein. However, the Western blot confirmed the successful transformation of the plasmid vectors and the expression of the target genes in E. coli.
            </p>
          </div>
        
          {/* Fluorescence Microscopy */}
          <div className="proof-block" id="fluomicro">
            <h3>Fluorescence Microscopy</h3>
            <h4> Experimental design</h4>
            <p>
To investigate silica coating in E. coli, constructs encoding silicatein (SIL) and the cellulose-binding domain (CBD) were fused to the ice nucleation protein (INP) for surface display on the external membrane. We first verified expression of these two proteins with bacterial lysates. SDS-PAGE gel analysis and western blotting enabled us to validate expression using anti-HA and anti-V5 antibodies for the INP-Silicatein and INP-CBD constructs, respectively (see earlier section on validation of expression in bacteria). After initial microscopy results, we modified our constructs the display domain to OmpA as an alternative to improve surface localization
            </p>
            <p>
             To assess the display of the two proteins of interest on the surface and the formation of a silica shell, we chose fluorescence microscopy in order to analyze our bacterial strains. Cells expressing the different constructs were first cultured, induced with IPTG, then incubated with sodium orthosilicate, as described in the protocol inspired by published attempts. <Citation id="4"/><Citation id="5"/> Cultures were stained with various fluorophores selected to label our main targets: CellMask and FM4-64 were used to stain bacterial membranes (for INP and OmpA strains, respectively), Anti-HA-FITC and Anti-V5-AF555 targeted the tags on the silicatein and CBD fusion proteins, and Rhodamine 123 was used to visualize silica polymerisation. Samples were then visualized and imaged with a fluorescence microscope (Nikon ECLIPSE Ti2).
            </p>
            <p>
              Although background fluorescence signals were detected for silica staining (Rhodamine 123 staining), the INP domain did not enable efficient display of silicatein or CBD on the bacterial surface, consistent with previous observations in the literature <Citation id="4"/>. We thus decided on using the OmpA display protein as an alternative indicated by references for our second experiment.
            </p>

          <h4> Microscopy Setup</h4>
          <p>
            All fluorescence and confocal images were acquired using a Nikon ECLIPSE Ti2 spinning disk confocal microscope (CSU-W1, 50 µm pinhole disk) equipped with a Hamamatsu Fusion C14440-20UP camera and a Plan Apo λ 100× Oil Ph3 DM objective (NA = 1.45). Image acquisition and processing were performed in NIS-Elements AR v5.42.03 (Laboratory Imaging s.r.o.). Images were saved as .nd2 files with 16-bit depth.
          </p>
            <p>
              Acquisition parameters:
            </p>
            <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Image size: 16-bit, 2304 x 2304 px</li>
              <li>Pixel size: 0.065 µm</li>
              <li>Exposure time: 100 ms (FITC, TRITC, Cy5), 21 ms (brightfield)</li>
              <li>Laser lines: 488 nm, 561 nm, 640 nm</li>
              <li>Emission filters: FITC (525/45 nm), TRITC (609/54 nm), Cy5 (698/70 nm)</li>
              <li>Objective medium/ refractive index: 1.515 (oil immersion)</li>
            </ul>
          <h4>Experiment 1</h4>
          <p>Samples:</p>
          <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
            <li>1: INP-CBD-V5</li>
            <li>2: INP-Silicatein-HA</li>
            <li>3: INP-CBD-V5 + INP-Silicatein-HA</li>
          </ul>
          <p>Staining conditions:</p>
          <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
            <li>B: CellMask </li>
            <li>C: Cellmask + Anti-HA-FITC + Anti-V5-AF555</li>
            <li>D: CellMask</li>
            <li>E: Rhodamine 123</li>
            <li>F: CellMask + Rhodamine 123</li>
          </ul>
          <p></p>
          
          <h4>Experiment 2 </h4>
          <p>Samples:</p>
          <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
            <li>1: WT</li>
            <li>2: OmpA-CBD-V5</li>
            <li>3: OmpA-Silicatein-HA</li>
            <li>4: OmpA-CBD-V5 + OmpA-Silicatein-HA</li>
          </ul>
          <p>Staining conditions:</p>
          <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
            <li>A: unstained</li>
            <li>B: FM4-64</li>
            <li>C: FM4-64  + Anti-HA-FITC + Anti-V5-AF555</li>
            <li>D: Rhodamine 123</li>
            <li>E: FM4-64 + Rhodamine 123</li>
          </ul>

        <h4> Qualitative Analysis</h4>
        <figure>
              <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/rhodamine123.webp" alt="Quantitative Analysis" />
              <figcaption className="image-caption">
              <strong>Figure 9. Rhodamine 123 staining of E. coli strains expressing INP- and OmpA-fusion constructs.</strong> 
              <figcaption>Fluorescence microscopy images of E. coli expressing silicatein (SIL), cellulose-binding domain (CBD), or both proteins, all displayed with INP (top row) or OmpA (bottom row). Cells were induced then incubated with sodium orthosilicate and stained with Rhodamine 123 to visualize silica encapsulation. Merged greyscale and green fluorescence channels are shown without contrast or brightness adjustment.
              </figcaption> </figcaption>
        </figure>
        
        <p>
          Microscopy revealed large differences in phenotype between strains expressing INP- and OmpA-based surface display constructs. Bacteria expressing INP-Silicatein were elongated and displayed non-uniform fluorescence inside their cell. This suggests that silicatein expression via the INP might influence cell shape and cause accumulation of protein in the cytoplasm rather than on the outer surface. Similarly, co-expression of INP-CBD and INP-Silicatein produced longer cells compared to wild type and CBD.</p>
          <p>In contrast, all strains using the OmpA display system exhibited normal morphology and homogeneous fluorescence distribution across the membrane. This indicates that OmpA-based fusion proteins are more compatible with E. coli surface display and enable better cell function in this case. Further quantitative fluorescence analysis will help confirm differences in silica formation between the constructs. From these observations, the OmpA system seems to provide a more consistent and stable way to display proteins on the bacterial surface.</p>

          <figure>
              <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/orange-stain.avif" alt="Fig 10" style={{ maxWidth: '700px', display: 'block', margin: '0 auto' }} />
              <figcaption className="image-caption">
              <strong>Figure 10. Fluorescence microscopy of OmpA constructs stained with antibodies.</strong>
              <figcaption>Bacterial cells expressing different OmpA fusion proteins were imaged following antibody staining with Anti-HA-FITC (for silicatein) and Anti-V5-AF555 (for CBD). Shown are fluorescence images of E. coli expressing  WT, OmpA-CBD-V5, OmpA-SIL-HA, and OmpA-CBD-V5 coexpressed with OmpA-SIL-HA. Each image was individually adjusted for brightness and contrast for illustration purposes. Fluorescence intensity corresponds to the presence of tagged fusion proteins on or near the bacterial surface. Bright patches in samples 2 and 4 indicate regions of higher fluorescence intensity, suggesting surface display of the fusion proteins.
              </figcaption> </figcaption>
        </figure>
        <p>
          Antibody staining showed different fluorescence patterns among the OmpA display strains. Cells expressing OmpA-CBD-V5 and the OmpA-CBD-V5 and OmpA-SIL-HA combination exhibited brighter fluorescence regions compared to WT and OmpA-SIL-HA alone, as confirmed by intensity histograms in Fiji. This suggests that the CBD fusion might be displayed on the cell surface through the OmpA anchoring domain, while the OmpA-SIL construct doesn’t show signal stronger than in controls. In the FITC (anti-HA) channel, corresponding to silicatein detection, no distinct fluorescence signal was observed across the samples. Interestingly, strong fluorescence signals appeared in dense clusters of the samples. This may indicate partial detachment or release of OmpA-CBD into the medium, possibly due to localized cell lysis or membrane shedding. Overall, these observations support the hypothesis that OmpA facilitates CBD surface display more efficiently than SIL, consistent with improved accessibility of the V5-tag for antibody binding.
          </p>

        <h4>Quantification of cell fluorescence</h4>
        <p>
          While fluorescence microscopy provided qualitative insight into silica formation in E. coli expressing different surface-display constructs, a quantitative comparison was needed to evaluate differences in silica coating at the cellular level. To achieve this, we wrote two automated image-processing and data-analysis scripts that measure fluorescence intensity for each cell and take into account acquisition parameters such as exposure time and laser power.
        </p>
        <p>
          Quantification was performed in two steps:
        </p>
        <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
        <li>1. ImageJ/Fiji macro: A macro for automated fluorescence quantification across .nd2 microscopy files. Each image stack was imported via Bio-Formats, and individual cells were segmented using the brightfield channel through adaptive local thresholding and morphological cleanup (erosion, dilation, hole-filling, watershed). For each segmented cell region, fluorescence intensity was measured in the Rhodamine channel after background subtraction and smoothing. Mean, background, adjusted, and integrated intensity values were recorded, along with cell area and normalized mean intensity (intensity corrected by exposure time and laser power extracted from image metadata). The macro exported all single cell data to .csv files for further analysis. </li>
        <li>2. Python analysis and visualization script: The resulting CSVs were processed in Python using pandas and matplotlib. The script aggregated single-cell data by sample and condition, computed summary statistics (mean, median, standard deviation), and generated visualizations including histograms and box plots under both full and clipped (≤200 a.u.) intensity scales. Samples were color-coded by construct type (WT, INP-CBD, INP-SIL, INP-CBD + INP-SIL) and plotted. </li>
        </ul>

        <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
          <iframe
            title="EPFL: Fiji Demo for Rhodamine Fluorescence Analysis (2025)"
            width="900"
            height="515"
            src="https://video.igem.org/videos/embed/8WW9mRcNCEVZeCu6HBrPqJ"
            allow="fullscreen"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            style={{ border: "0px" }}
          ></iframe>
        </div>
        <p>
          The code will be freely available on the <Link className="interactive-link" to="https://gitlab.igem.org/2025/software-tools/epfl/-/tree/main/Fluorescence_Analysis?ref_type=heads" target="_blank" rel="noopener noreferrer">team’s GitLab</Link> for reproducibility and use by other iGEM teams.
        </p>
        <figure>
          <img className="image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/histogram-inp.webp" alt="fig 11" />
          <figcaption className="image-caption">
            <strong>Figure 11. Normalized distributions of Rhodamine 123 fluorescence intensity in INP-expressing E. coli.</strong>
            <div>
              Normalized and clipped fluorescence intensity per cell (≤ 200 a.u.) measured from Rhodamine 123 staining. The overall fluorescence signal across INP samples (INP-CBD, INP-SIL, and INP-CBD + INP-SIL) was low, with most cells displaying normalized intensities below 25 a.u. Distributions were similar between constructs, indicating comparable intracellular fluorescence under these imaging conditions and suggesting limited surface-displayed silicatein activity or insufficient staining/incubation.
            </div>
          </figcaption>
        </figure>

        <figure>
          <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/boxplot-inp.webp" alt="fig 12" />
          <figcaption className="image-caption">
          <strong>Figure 12. Quantification of Rhodamine 123 fluorescence in INP-expressing E. coli.</strong> 
          <figcaption>Boxplots show normalized mean fluorescence intensity per cell (≤ 200 a.u.) for all INP-based constructs. Overall fluorescence levels were low across all samples, with no major differences observed between INP-CBD, INP-SIL, or the co-expression condition.
          </figcaption>
          </figcaption>
        </figure>

        <p>
          For the INP-based constructs, fluorescence intensities were generally low, with most cells showing values close to background levels. The similarity between samples indicates that none of the INP fusions led to substantial silica polymerisation under the tested conditions. In contrast, the OmpA-based samples showed higher overall fluorescence levels, likely due to less stringent washing and better retention of Rhodamine 123 dye. However, variability between replicates was high, and no consistent increase in fluorescence was observed for silicatein-expressing strains compared to controls.</p>
        
        <figure>
          <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/histogram-ompa.webp" alt="fig 13" />
          <figcaption className="image-caption">
          <strong>Figure 13. Distribution of Rhodamine 123 fluorescence intensity in OmpA-expressing E. coli.</strong>
          <figcaption>Normalized single-cell fluorescence intensities (≤ 200 a.u.) measured from Rhodamine 123 staining of OmpA samples. In contrast to the INP samples, OmpA strains showed generally higher fluorescence levels, likely due to fewer washing steps. Differences between individual OmpA constructs were minor, and overall variability remained high. As with the INP experiment, staining efficiency is low.
          </figcaption> 
          </figcaption>
        </figure>

        <figure>
          <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/boxplot-ompa.webp" alt="fig 14" />
          <figcaption className="image-caption">
          <strong>Figure 14. Quantification of Rhodamine 123 fluorescence in OmpA-expressing E. coli.</strong>
          <figcaption>Boxplots showing normalized mean fluorescence intensity per cell (≤200 a.u.) across OmpA sample images. In general, OmpA strains displayed higher overall fluorescence compared to INP-based samples, consistent with reduced washing. Differences between individual constructs are small, and variability is high across images of the same samples. These results suggest that fusion of silicatein with OmpA didn’t enable formation of a silica coating around the bacteria.          </figcaption>
          </figcaption>
        </figure>


        <p>Together, these results suggest that while OmpA may improve protein display compatibility in E. coli, neither display system produced clear evidence of silica coating formation. The fluorescence quantification workflow nonetheless provides a robust analytical framework for future experiments to build upon.
        </p>

      <div>
        <a className="interactive-link" href="https://static.igem.wiki/teams/5590/wetlab/results/inp-ef.csv" download>Download INP-EF Data</a>
        <br />
        <a className="interactive-link" href="https://static.igem.wiki/teams/5590/wetlab/results/ompa-de.csv" download>Download OmpA-DE Data</a>
      </div>

      <p>After imaging and quantitative analysis, both INP- and OmpA-based surface display experiments showed only weak Rhodamine 123 fluorescence, suggesting little or no silica polymerisation under the conditions that were tested. The INP system in particular produced elongated and irregular cell morphologies, indicating failed localisation and accumulation of the fusion proteins inside of the cell rather than proper surface display. While the OmpA constructs caused less changes in the cell shape of E. coli and showed higher fluorescence, they did not exhibit strong or distinct silica-associated signals. These results are likely due to experimental mistakes or incompatibility of the expression system with the surface display domains, an issue reported in the literature. Experimental steps that could be optimised include induction parameters (time and temperature), longer incubation times with sodium orthosilicate, and longer incubation times and higher concentrations of dyes during staining.</p>
      <p>Although the microscopy was not a successful experiment, our results give a foundation for future iGEM teams. The methods described here, such as the staining procedure and the single-cell fluorescence quantification - can be reused and improved to test silica polymerisation in bacteria. Repeating these experiments with optimized methods and use of the exact constructs and experimental parameters from previous literature would provide clearer evidence for silica coating. In this way, our results contribute practical knowledge and tools that can help the iGEM community in reliable procedures for analysis of silica mineralisation. </p>
</div>

          {/* Chitosan-Producing Yeast */}
  <div className="proof-block" id="yeast">
            <h2>Chitosan-Producing S. cerevisiae Strain: RHO1 & CDA</h2>
            <h3> Recombinant Protein Expression</h3>
            <p>We selected S. cerevisiae as a eukaryotic host for chitosan production due to its proven ability to overproduce chitin <Citation id="6"/>, the natural precursor of chitosan. To enable chitosan biosynthesis and its incorporation into our hydrogel system, we engineered yeast to co-express two proteins: CDA‑V5 (chitin deacetylase) and RHO1Q68H‑HA. The overproduction of chitin is achieved by introducing a constitutively active mutation (Q68H) in RHO1, a GTP-binding protein involved in signaling pathways that regulate cell wall synthesis. This mutation upregulates a transcriptional cascade that increases chitin synthesis in the yeast cell wall, where it is subsequently converted into chitosan by CDA, which removes acetyl groups from the polymer backbone. CDA is designed to be secreted into the extracellular space through fusion to the AGA2 signal peptide, which directs the protein into the yeast secretory pathway. Both coding sequences were cloned into yeast expression vectors under copper-inducible promoters, as well as co-expression. Following induction with CuSO₄, cultures were grown under standard conditions and growth was monitored in liquid medium. To verify expression, Western blot analysis was used to analyze both cell lysates and culture supernatants. In addition to cell lysates, the medium was also analyzed as the constructs were designed with secretion signals, allowing us to assess whether the recombinant proteins were successfully secreted into the extracellular environment.</p>

            <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
              <table
                style={{
                  borderCollapse: "collapse",
                  width: "100%",
                  maxWidth: "500px",
                  textAlign: "center",
                  margin: "0 auto",
                  fontSize: "0.95rem",
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "2px solid #000",
                  borderRadius: "6px",
                  overflow: "hidden",
                }}
              >
                <thead style={{ backgroundColor: "#111" }}>
                  <tr>
                    <th
                      style={{
                        border: "1px solid #444",
                        padding: "0.5rem 0.7rem",
                        fontWeight: 600,
                      }}
                    >
                      Strain
                    </th>
                    <th
                      style={{
                        border: "1px solid #444",
                        padding: "0.5rem 0.7rem",
                        fontWeight: 600,
                      }}
                    >
                      Replicate 1
                    </th>
                    <th
                      style={{
                        border: "1px solid #444",
                        padding: "0.5rem 0.7rem",
                        fontWeight: 600,
                      }}
                    >
                      Replicate 2
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "1px solid #444", padding: "0.5rem 0.7rem" }}>CDA</td>
                    <td style={{ border: "1px solid #444", padding: "0.5rem 0.7rem" }}>3.32</td>
                    <td style={{ border: "1px solid #444", padding: "0.5rem 0.7rem" }}>4.49</td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #444", padding: "0.5rem 0.7rem" }}>
                      RHO1<sub>Q68H</sub>
                    </td>
                    <td style={{ border: "1px solid #444", padding: "0.5rem 0.7rem" }}>5.27</td>
                    <td style={{ border: "1px solid #444", padding: "0.5rem 0.7rem" }}>5.55</td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #444", padding: "0.5rem 0.7rem" }}>
                      CDA +  RHO1<sub>Q68H</sub>
                    </td>
                    <td style={{ border: "1px solid #444", padding: "0.5rem 0.7rem" }}>8.31</td>
                    <td style={{ border: "1px solid #444", padding: "0.5rem 0.7rem" }}>8.50</td>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #444", padding: "0.5rem 0.7rem" }}>WT</td>
                    <td style={{ border: "1px solid #444", padding: "0.5rem 0.7rem" }}>15.18</td>
                    <td style={{ border: "1px solid #444", padding: "0.5rem 0.7rem" }}>16.90</td>
                  </tr>
                </tbody>
              </table>

              <figure>
                <figcaption>
                  <strong>Table 1.</strong> Optical density (OD<sub>600</sub>) measurements after 6 hours of yeast
                  culture at 30 °C and 200 rpm. Each strain was measured in duplicate.
                </figcaption>
              </figure>

              <p>
                In the table above, we can see that yeast growth was significantly reduced in all engineered strains compared to the wild type (WT). This is probably due to the metabolic burden of overproducing and modifying cell wall polysaccharides, such as chitin and chitosan, likely impacts growth dynamics under standard culture conditions. In addition, the use of CuSO₄ to induce gene expression likely contributed to growth impairment, as Copper ions are known to be toxic to yeast at elevated concentrations.
              </p>

          <h4> Western Blot</h4>
          <p> The AGA2 signal peptide was fused to CDA, targeting the enzyme for secretion. This allowed the enzyme to reach the outer surface of the yeast cell wall and convert chitin into chitosan. Therefore, we analyzed both the cell lysates and the culture media to assess protein localization.
          </p><p>Western blotting revealed bands at the expected molecular weights for both CDA‑V5 (45.6 kDa) and RHO1Q68H‑HA (24.4 kDa), confirming successful expression of both proteins. However, CDA was only detected in the lysate, not in the medium. This suggests that the AGA2 signal sequence did not successfully direct CDA through the secretion pathway, and the protein likely remained intracellular, possibly due to folding issues or inefficient signal peptide processing.
          </p>

          <figure>
              <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/slide5.webp" alt=" Fig 15" />
              <figcaption className="image-caption">
              <strong>Figure 15. Western blot of yeast lysates and mediums.</strong> 
              <figcaption>Lane 1: lysate of strain expressing CDA-V5 only. Lane 2: medium of strain expressing RHO1Q68H-HA only. Lane 3: strain co-expressing CDA-V5 and RHO1Q68H-HA. Lane 4: medium of strain expressing CDA-V5 only. Lane 5: lysate of strain expressing RHO1Q68H-HA only. Lane 6: medium of strain co-expressing CDA-V5 and RHO1Q68H-HA. M1 <Citation id="1" /> and M2 <Citation id="2" />: protein ladders. The expected molecular weights are CDA-V5: 45.6 kDa, RHO1Q68H-HA: 24.4 kDa.
              </figcaption> 
              </figcaption>
            </figure>
            <p>
The Western blot confirmed successful transformation of the plasmid vectors and expression of the target genes in S. cerevisiae. However, the secretion of CDA was unsuccessful, indicating that further modifications to the expression construct or secretion signal may be necessary.</p>

            <h3> Flow Cytometry</h3>
            <p> To quantify how RHO1 and CDA influence chitin and chitosan production in yeast, we performed flow cytometry on stained cell populations. We used WGA-AF488 to detect chitin and Cibacron to detect chitosan, comparing wild-type cells to strains overexpressing CDA, RHO1-Q68H, or both genes. Unstained and single-stained controls were included to establish background fluorescence and verify staining specificity. By examining both the distribution of fluorescence intensities and the proportion of cells in high-signal gates, we aimed to assess how our modifications affect production of these polymers.
            </p>
            <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
              <li> WGA-AF488 (488 nm channel, green) stains chitin</li>
              <li> Cibacron (561 nm channel, red) stains chitosan</li>
            </ul>

            <figure>
              <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/cytometry-graphs-png.webp" alt="Fig 16" />
              <figcaption className="image-caption">
<strong>Figure 16. Flow cytometry analysis of chitin and chitosan staining in yeast strains.</strong>
<figcaption>Yeast strains (WT, CDA, RHO1, and RHO1+CDA) were stained with WGA-AF488 (chitin, top) and Cibacron (chitosan, bottom). WT cells show low native fluorescence in both channels. CDA overexpression alone causes only a minor increase in chitosan signal, while RHO1 increases chitin levels but not chitosan. The combination of RHO1 and CDA produces noticeable right-shifts in both channels, indicating a combined effect of chitin overproduction and its conversion to chitosan.
              </figcaption> </figcaption>
            </figure>
            <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
            
            <figure>
            <table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                maxWidth: "750px",
                textAlign: "center",
                margin: "0 auto",
                fontSize: "0.9rem",
                backgroundColor: "black",
                color: "#fff",
                border: "1px solid #555",
              }}
            >
              <thead style={{ backgroundColor: "black" }}>
                <tr>
                  <th style={{ border: "1px solid #555", padding: "0.4rem 0.6rem" }}>Stain</th>
                  <th style={{ border: "1px solid #555", padding: "0.4rem 0.6rem" }}>Strain</th>
                  <th style={{ border: "1px solid #555", padding: "0.4rem 0.6rem" }}>All Events</th>
                  <th style={{ border: "1px solid #555", padding: "0.4rem 0.6rem" }}>P1</th>
                  <th style={{ border: "1px solid #555", padding: "0.4rem 0.6rem" }}>P2</th>
                  <th style={{ border: "1px solid #555", padding: "0.4rem 0.6rem" }}>P3</th>
                  <th style={{ border: "1px solid #555", padding: "0.4rem 0.6rem" }}>P4</th>
                  <th style={{ border: "1px solid #555", padding: "0.4rem 0.6rem" }}>P5</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Unstained", "WT", "10948", "10253", "10222", "10000", "0", "12"],
                  ["Unstained", "CDA", "12351", "10202", "10181", "10000", "3", "249"],
                  ["Unstained", "RHO1", "14132", "10350", "10322", "10000", "0", "37"],
                  ["Unstained", "CDA + RHO1", "13356", "10236", "10191", "10000", "2", "151"],
                  ["Cibacron", "WT", "11133", "10349", "10327", "10000", "4", "24"],
                  ["Cibacron", "CDA", "12272", "10216", "10189", "10000", "10", "481"],
                  ["Cibacron", "RHO1", "13946", "10443", "10424", "10000", "35", "306"],
                  ["Cibacron", "CDA + RHO1", "14506", "10222", "10209", "10000", "21", "502"],
                  ["WGA-AF488", "WT", "10699", "10168", "10158", "10000", "5267", "6"],
                  ["WGA-AF489", "CDA", "12519", "10187", "10161", "10000", "7099", "210"],
                  ["WGA-AF490", "RHO1", "14074", "10245", "10228", "10000", "9279", "57"],
                  ["WGA-AF491", "CDA + RHO1", "13850", "10180", "10164", "10000", "8728", "168"],
                  ["Double Stain", "WT", "10931", "10208", "10191", "10000", "5431", "16"],
                  ["Double Stain", "CDA", "12315", "10180", "10139", "10000", "7298", "438"],
                  ["Double Stain", "RHO1", "14304", "10274", "10251", "10000", "9208", "164"],
                  ["Double Stain", "CDA + RHO1", "13946", "10251", "10227", "10000", "8608", "566"],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ border: "1px solid #555", padding: "0.4rem 0.6rem" }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

                <figcaption style={{marginLeft: "5.5rem", paddingTop: "0.5rem"}}>
                  <strong>Table 2.</strong> Complete data from flow cell cytometry of yeast cultures,
                  indicating stain type, strain, and counts for all gates.
                </figcaption>
            </figure>

          <figure>
            <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
  <table
    style={{
      borderCollapse: "collapse",
      width: "100%",
      maxWidth: "600px",
      textAlign: "center",
      margin: "0 auto",
      fontSize: "0.9rem",
      backgroundColor: "black",
      color: "#fff",
      border: "1px solid #555",
    }}
  >
    <thead style={{ backgroundColor: "black" }}>
      <tr>
        <th style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>Stain</th>
        <th style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>Strain</th>
        <th style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>%P4 from P3</th>
        <th style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>%P5 from P4</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>Double Stain</td>
        <td style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>WT</td>
        <td style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>54.31</td>
        <td style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>0.16</td>
      </tr>
      <tr>
        <td style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>Double Stain</td>
        <td style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>CDA</td>
        <td style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>72.98</td>
        <td style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>4.38</td>
      </tr>
      <tr>
        <td style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>Double Stain</td>
        <td style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>RHO1</td>
        <td style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>92.08</td>
        <td style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>1.64</td>
      </tr>
      <tr>
        <td style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>Double Stain</td>
        <td style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>RHO1 + CDA</td>
        <td style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>86.08</td>
        <td style={{ border: "1px solid #555", padding: "0.5rem 0.7rem" }}>5.66</td>
      </tr>
    </tbody>
  </table>

  <figcaption style={{marginLeft: "5.5rem", paddingTop: "0.5rem"}}>
    <strong>Table 3.</strong> Percentages of cells from gate 3 in gate 4 and 5, respectively. These
    results point to both an increase in the percentage of cells present in the high chitin range for
    <em>RHO1</em>, and in the high chitosan range for <em>CDA</em>. The chitin levels are lower for the
    double strain, as a portion of it might be getting deacetylated into chitosan, but the chitosan
    levels are clearly higher.
  </figcaption>
</div>

          </figure>


</div>

            <p>
              The flow cytometry results highlight the different roles of RHO1 and CDA in production of chitin and chitosan in yeast cells. Wild-type (WT) cells provide the baseline, showing low levels of both chitin and chitosan staining. Overexpressing CDA on its own causes only a small increase in the Cibacron signal, suggesting that some of the existing chitin is being deacetylated to chitosan, but that substrate availability is limiting. In contrast, overexpressing RHO1 produces a clear right-shift in the WGA-AF488 channel, indicating a strong increase in chitin deposition. This effect does not lead to higher chitosan levels unless CDA is also active, showing that RHO1 mainly boosts precursor supply.

</p><p>When RHO1 and CDA are co-expressed, both histograms shift noticeably to the right, pointing to a combined effect of the constructs : RHO1 drives increased chitin synthesis, which is then converted into chitosan by CDA. This underlines how the two genes complement one another in promoting chitosan production.

</p><p>The increase in chitin is striking and consistent, but the effect of CDA on chitosan is less pronounced under the current conditions. One likely explanation is the low concentration of Cibacron used, which may have limited our ability to detect chitosan accurately. Adjusting the staining protocol with higher dye concentration or other documented methods could help better reveal the effect of CDA.

</p><p>In summary, RHO1 clearly increases chitin levels, while CDA alone has only a modest effect. Together, however, they act together to boost both chitin accumulation and its conversion to chitosan. Further optimization of staining and quantitative analysis will be important to fully assess CDA’s contribution.

            </p>

</div>

 

            
          </div>

          {/* Hydrogel Assembly */}
          <div className="proof-block" id="hydrogel">
            <h2>Synthetic Hydrogel Assembly</h2>
            <h3> Hydrogel Fabrication</h3>
            <p>
              To prototype our hydrogel and characterize its properties in parallel with biological production, we fabricated it using synthetic analogs of our target components. This approach allowed us to optimize the concentration, mixing procedures, and mechanical handling.</p>
            <p>
              The fabrication process was designed for consistency, homogeneity, and scalability (see <Link className="interactive-link" to="/wetlab/protocols">Hydrogel Assembly Protocol</Link>). Two primary gel matrices, a cellulose-based gel and a chitosan-based gel, were prepared separately and then blended with colloidal silica particles to form the final composite.</p>
            <p>
            To prepare the cellulose-based hydrogel, cellulose powder was dissolved in a NaOH solution, which disrupts hydrogen bonding the polymer chains. This allows them to swell and partially dissolve. A freeze-thaw cycle was applied to promote physical crosslinking, resulting in a more cohesive gel. The resulting hydrogel was then washed with PBS to remove soluble byproducts and restore near-neutral pH for downstream mixing.

            </p>
            <p>
              This mimics the incorporation of biologically produced chitosan in our final material. The neutral pH was especially important for combining with the chitosan hydrogel, since chitosan is only soluble in acidic conditions. For this, chitosan powder was dissolved in acetic acid, forming a homogeneous gel that mimics the incorporation of biologically produced chitosan in our final material.</p>
          <p>
            In the final engineered hydrogel, both bacterial cellulose and yeast-derived chitosan will be produced biosynthetically. Bacterial cellulose naturally forms a hydrogel without chemical treatment, and chitosan is integrated into the yeast cell wall via enzymatic conversion of overproduced chitin. As a result, chemically intensive steps such as NaOH and acetic acid solubilization will no longer be necessary.
          </p>

          <figure>
              <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/hydrogels.webp" alt="Fig 17" />
              <figcaption className="image-caption">
<strong>Figure 17. Hydrogels prepared with varying component concentrations.</strong>
<figcaption> Gel texture and homogeneity were visually assessed as initial quality indicators. The resulting hydrogels were uniform, firm in texture, and both sprayable and spreadable, making them suitable for further physical characterization.
              </figcaption> </figcaption>
            </figure>

            <h3> Microscopy</h3>
            <p> The micrographs presented below depict the microstructure of cellulose-silica composite hydrogels at different dilutions and magnifications.</p>
            <figure>
              <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/microscopy-hydrogels.webp" alt="Fig 18" />
              <figcaption className="image-caption">
<strong>Figure 18. Micrographs of cellulose-silica hydrogel particle dispersions at various dilutions and magnifications.</strong> 
<figcaption>(A) 1:100 dilution, 4× magnification. (B) 1:20 dilution, 10× magnification. (C) 1:20 dilution, 4× magnification. (D) 1:100 dilution, 10× magnification.
              </figcaption> </figcaption>
            </figure>
            <p>
In all images, irregularly shaped particles and clusters, typical of dispersed cellulose and silica phases, can be observed across the hydrogel matrix, with higher particle density and aggregation visible at lower dilutions (1:20) and increased particle separation and definition at higher dilutions (1:100). These features, along with the range of micron-sized domains and heterogeneous particle distribution, closely resemble the characteristic morphology reported in literature for cellulose-based hydrogels incorporating inorganic fillers such as silica. <Citation id="7"/> The absence of large-scale aggregation or phase separation further supports successful gel formation and homogenous dispersion, reflecting what is expected for well-prepared cellulose-silica hydrogels published in prior studies.
</p><p>
With homogeneity and cross-linking confirmed, we proceeded to evaluate the hydrogel’s mechanical properties.
            </p>
          
            <h3> Rheology Analysis</h3>
<p>
  To characterize the mechanical properties of our hydrogels, we performed rheological measurements using a rotational rheometer. Oscillatory shear tests were conducted to examine the relationship between viscosity and shear rate across various hydrogel formulations. 
</p>
<p>
  Viscosity measurements were carried out using a rotational rheometer over a broad range of shear rates (10-4000 s⁻¹). Five formulations were investigated: (1) cellulose hydrogel, (2) cellulose-chitosan hydrogel with a 50:50 ratio, (3) cellulose-chitosan hydrogel with a 75:25 ratio, (4) cellulose-chitosan-silica hydrogel with a 45:45:10 ratio, and (5) a diluted version of the cellulose-chitosan-silica hydrogel (1:1 dilution). 
</p>
<p>
The resulting viscosity-shear rate curves clearly showed that all hydrogels behave as non-Newtonian pseudoplastic materials. At low shear rates, the systems exhibited high viscosity, consistent with strong polymer-polymer interactions. As shear rate increased, viscosity decreased sharply, reflecting shear-thinning behavior. This response is typical of polymeric gels, in which flow alignment and disentanglement of polymer chains occur progressively with applied shear. Such behavior is advantageous for firefighting because the gel remains highly viscous and adherent at rest, resisting run-off, while still being capable of flowing easily through pumps and nozzles under applied shear during spraying.
</p>

            <figure>
              <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/viscosity-graph.webp" alt="Fig 19" />
              <figcaption className="image-caption">
<strong>Figure 19. Viscosity as a function of shear rate for different cellulose-based hydrogels,</strong>
<figcaption>showing shear-thinning behavior across compositions with varying chitosan and silica content.
</figcaption>
               </figcaption>
            </figure>

            <p>
              To describe these behaviors more quantitatively, the experimental data were fitted using the Cross model, an empirical rheological equation widely applied to pseudoplastic fluids. The Cross model relates viscosity to shear rate through four key parameters: the zero-shear viscosity η0​, which represents the plateau viscosity at very low shear rates; the infinite-shear viscosity η∞, which represents the limiting viscosity at very high shear rates; the time constant k, which determines the characteristic shear rate at which shear-thinning begins; and the exponent n, which controls the breadth of the shear-thinning transition. The equation can be written as
            </p>
            <p style={{ fontStyle: "italic", fontSize: "1.25rem", textAlign: "center"}}>
              η(γ̇) = η<sub>∞</sub> + 
              <span style={{ display: "inline-block", verticalAlign: "middle" }}>
                <span style={{ borderBottom: "1px solid", display: "block" }}>
                  η<sub>0</sub> − η<sub>∞</sub>
                </span>
                <span style={{ display: "block" }}>
                  1 + (kγ̇)<sup>n</sup>
                </span>
              </span>
            </p>
            
          <figure>
              <img className= "image-img" src="https://static.igem.wiki/teams/5590/wetlab/results/viscosity-diffcompositions.webp" alt="Fig 20" />
              <figcaption className="image-caption">
<strong>Figure 20. Viscosity measurements of different hydrogel samples fitted with the Cross model.</strong> 
<figcaption> Experimental viscosity data (black circles) are shown as a function of shear rate, and fitted with the Cross model (blue line). The plots illustrate the shear-thinning behavior characteristic of these hydrogels. (A) Cellulose-chitosan-silica hydrogel (45:45:10). (B) Cellulose-chitosan hydrogel (75:25). (C) Cellulose-chitosan hydrogel (50:50). (D) Cellulose hydrogel. (E) Cellulose-chitosan-silica hydrogel (45:45:10, diluted 1:1)
             </figcaption></figcaption>
          </figure>
            
          <p>
            Fitting the data to this model provided good agreement between experimental and calculated viscosity curves, confirming the suitability of the Cross model for these hydrogel systems. The extracted parameters highlighted the role of composition and dilution in determining flow properties. The cellulose-chitosan hydrogel with a 75:25 ratio showed the highest viscosity rates, followed by the 50:50 cellulose-chitosan hydrogel and the 45:45:10 cellulose-chitosan-silica hydrogel. Finally, the cellulose and the diluted hydrogels showed the lowest viscosities.
</p><p>From an application perspective, these results are important. For firefighting hydrogels, high zero-shear viscosity helps the gel adhere to walls, ceilings, and fuel surfaces, prolonging contact and enhancing cooling and smothering. But if viscosity is too high, delivery through extinguishing systems is hindered. Thus, balancing η₀ and η∞ is essential: the gel must stay in place once deployed yet remain sprayable under shear. The Cross model offers a framework for evaluating this trade-off and guiding formulation optimization.
</p><p>In summary, rheological analysis of cellulose, cellulose-chitosan, and cellulose-chitosan-silica hydrogels shows that composition and dilution strongly affect viscosity. All systems exhibited shear-thinning, beneficial for being both pumpable and adherent. The Cross model quantified zero- and infinite-shear viscosity plateaus, enabling systematic comparison of performance. These results highlight how tailoring hydrogel rheology via composition and water content can advance firefighting agent design.

          </p>



          </div>
        </section>
      </div>
    
    <ReferencesDropdown references={ResultsList}/>
    </div>
  );
};

export default Results;
