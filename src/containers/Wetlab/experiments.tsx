import React, { useState } from 'react';
import "./wetlab.css";
import "../../components/ImageCaption/imageCaption.css";
import "../../components/Sidebar/sidebar.css";
import PageHead from "../../components/Head/PageHead";

interface PDFLinkProps {
  url: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
}

const PDFLink: React.FC<PDFLinkProps> = ({ url, title, isOpen, onToggle }) => {
  const [hover, setHover] = useState(false);
  const active = isOpen || hover;

  return (
    <>
      <button
        onClick={onToggle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.8rem 1rem',
          color: 'var(--color-whitish)',
          textDecoration: 'none',
          transition: 'all 0.18s ease',
          borderLeft: '2px solid var(--color-dark-orange)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
          textAlign: 'left',
        }}
      >
        <div
          style={{
            minWidth: '6px',
            height: '6px',
            backgroundColor: 'var(--color-dark-orange)',
            borderRadius: '50%',
            marginRight: '1rem',
            flexShrink: 0,
            transform: active ? 'scale(1.25)' : 'scale(1)',
            transition: 'transform 160ms ease, opacity 160ms ease',
            opacity: active ? 1 : 0.85,
          }}
        />
        <span
          style={{
            fontSize: '1.125rem',
            fontWeight: 400,
            color: active ? 'var(--color-dark-orange)' : 'var(--color-whitish)',
            transition: 'color 160ms ease, transform 160ms ease',
            transform: active ? 'translateX(2px)' : 'translateX(0)',
          }}
        >
          {title}
        </span>
        <span
          aria-hidden="true"
          style={{
            marginLeft: 'auto',
            transition: 'transform 200ms ease, opacity 160ms ease',
            transform: isOpen ? 'rotate(-180deg)' : hover ? 'rotate(-30deg)' : 'rotate(0deg)',
            fontSize: '0.9rem',
            opacity: 0.85,
          }}
        >
          ▾
        </span>
      </button>

      {isOpen && (
        <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
          <iframe
            src={url}
            width="100%"
            height="600px"
            style={{ border: '1px solid #ccc', borderRadius: '8px' }}
            title={`${title} Protocol`}
          />
        </div>
      )}
    </>
  );
};

export default function Experiments() {
  const [openPdf, setOpenPdf] = useState<string | null>(null);

  const togglePdf = (pdfUrl: string) => {
    setOpenPdf(openPdf === pdfUrl ? null : pdfUrl);
  };

  return (
    <div className="proof-container">
      <PageHead
        title="Wet Lab Experiments"
        subtitle="Experimental validation of protein expression and hydrogel assembly"
        backgroundUrl="https://static.igem.wiki/teams/5590/wetlab/headpicture/sarah-bw.webp"
        grayscale={true}
      />
      <div className="hardware-layout">
        <aside className="hardware-sidebar">
          <div className="sidebar-title">Table of Contents</div>
          <nav>
            <ul>
              <li><a className="sidebar-button" href="#bacteria">Bacteria Expression</a></li>
              <li><a className="sidebar-button" href="#yeast">Yeast Expression</a></li>
              <li><a className="sidebar-button" href="#western">Western Blot</a></li>
              <li><a className="sidebar-button" href="#purification">Protein Purification</a></li>
              <li><a className="sidebar-button" href="#fluorescence">Fluorescence Microscopy</a></li>
              <li><a className="sidebar-button" href="#flow">Flow Cytometry</a></li>
              <li><a className="sidebar-button" href="#assembly">Hydrogel Assembly</a></li>
              <li><a className="sidebar-button" href="#rheology">Rheology</a></li>
            </ul>
          </nav>
        </aside>
        <section className="hardware-main proof-section">
          <div id="intro">
            <p style={{color: 'var(--color-whitish)', fontSize: '1.2rem', marginBottom: '1.5rem'}}>
              In order to confirm the successful expression of all the proteins required to produce the components of our fire-retardant hydrogel in <i>E. coli</i> and <i>S. cerevisiae</i>, we carried out a series of targeted experiments. These experiments were designed not only to verify the presence of the correct proteins, but also to assess their functionality and proper localization according to their intended roles. By validating both the expression and biological activity of each component, we aim to demonstrate the feasibility of assembling the complete hydrogel system through microbial biosynthesis.
            </p>
            </div>
          <div className="proof-block" id="bacteria">
            <h2>Recombinant Protein Expression in Bacteria</h2>
            <div className="image-row">
              <figure className="image-figure image-figure--small">
                <img className="image-img" src="https://static.igem.wiki/teams/5590/wetlab/experiments/inoculation.webp" alt="Bacterial inoculation" />
                <figcaption className="image-caption"><strong>Figure 1:</strong>Bacterial inoculation process for protein expression</figcaption>
              </figure>
              <figure className="image-figure image-figure--small">
                <img className="image-img" src="https://static.igem.wiki/teams/5590/wetlab/experiments/large-cultures.webp" alt="Large bacterial cultures" />
                <figcaption className="image-caption"><strong>Figure 2:</strong>Large-scale bacterial cultures in incubator</figcaption>
              </figure>
            </div>
          </div>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem'}}>
              To obtain our silica-coated strain capable of binding cellulose (INP-SIL and INP-CBD) and the bacteria producing fire-resistant proteins (SRSF1 and SRPK1), we cloned the corresponding coding sequences into bacterial expression vectors under the control of inducible promoters. <i>E. coli</i> T7 express strains were transformed with these constructs and grown under antibiotic selection. Protein expression was induced with IPTG, after which the cells were lysed and frozen for later use. Expression was then verified via Western blot to confirm successful production of the target proteins. This system provided a rapid, cost-effective approach and served as the foundation for our protein production pipeline.
            </p>
            
            <div style={{ 
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
            }}
            className='interactive-link'
            >
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/wetlab/protocols/1-bacterial-transformation.pdf"
                title="Bacterial Transformation"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/wetlab/protocols/1-bacterial-transformation.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/wetlab/protocols/1-bacterial-transformation.pdf')}
              />
              
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/wetlab/protocols/2-miniprep-plasmid-extraction.pdf"
                title="Miniprep Plasmid Extraction"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/wetlab/protocols/2-miniprep-plasmid-extraction.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/wetlab/protocols/2-miniprep-plasmid-extraction.pdf')}
              />
              
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/wetlab/protocols/3-overnight-bacterial-liquid-culture.pdf"
                title="Overnight Bacterial Liquid Culture"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/wetlab/protocols/3-overnight-bacterial-liquid-culture.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/wetlab/protocols/3-overnight-bacterial-liquid-culture.pdf')}
              />
              
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/wetlab/protocols/4-iptg-induced-expression-in-bacteria.pdf"
                title="IPTG Induced Expression in Bacteria"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/wetlab/protocols/4-iptg-induced-expression-in-bacteria.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/wetlab/protocols/4-iptg-induced-expression-in-bacteria.pdf')}
              />
              
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/wetlab/protocols/5-glycerol-stock.pdf"
                title="Glycerol Stock"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/wetlab/protocols/5-glycerol-stock.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/wetlab/protocols/5-glycerol-stock.pdf')}
              />
            </div>
          </div>
          <div className="proof-block" id="yeast">
            <h2>Recombinant Protein Expression in Yeast</h2>
          </div>
          <div style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
            <p>
              To complement bacterial expression, we also used <i>Saccharomyces cerevisiae</i> as a eukaryotic host for chitosan production (RHO1 and CDA). Yeast was chosen for its proven capacity to overproduce chitin, a precursor of chitosan. The coding sequences were integrated into yeast expression vectors with copper-inducible promoters. Following CuSO₄ induction, cultures were grown under optimized conditions, and protein expression was monitored. This yeast system allowed us to test eukaryotic processing capabilities and move toward enhanced chitosan production.
            </p>
            
            <div style={{ 
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
            className='interactive-link'
            >
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/wetlab/protocols/6-yeast-transformation.pdf"
                title="Yeast Transformation"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/wetlab/protocols/6-yeast-transformation.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/wetlab/protocols/6-yeast-transformation.pdf')}
              />
              
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/wetlab/protocols/7-yeast-passaging.pdf"
                title="Yeast Passaging"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/wetlab/protocols/7-yeast-passaging.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/wetlab/protocols/7-yeast-passaging.pdf')}
              />
              
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/wetlab/protocols/8-yeast-protein-expression-and-extraction.pdf"
                title="Yeast Protein Expression and Extraction"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/wetlab/protocols/8-yeast-protein-expression-and-extraction.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/wetlab/protocols/8-yeast-protein-expression-and-extraction.pdf')}
              />
            </div>
          </div>
          <div className="proof-block" id="western">
            <h2>Validation of Protein Expression by Western Blot</h2>
            <div className="image-row">
              <figure className="image-figure image-figure--small">
                <img className="image-img" src="https://static.igem.wiki/teams/5590/wetlab/experiments/run-gel.webp" alt="Running gel electrophoresis" />
                <figcaption className="image-caption"><strong>Figure 3:</strong>SDS-PAGE gel electrophoresis for protein separation</figcaption>
              </figure>
              <figure className="image-figure image-figure--small">
                <img className="image-img" src="https://static.igem.wiki/teams/5590/wetlab/experiments/nafi-blot.webp" alt="Western blot analysis" />
                <figcaption className="image-caption"><strong>Figure 4:</strong>Western blot analysis for protein validation</figcaption>
              </figure>
            </div>
          </div>
          <div style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
            <p>
              To confirm protein expression in both bacterial and yeast systems, we performed Western blotting. Proteins were extracted from cell lysates, separated by SDS-PAGE, and transferred onto membranes. Detection was carried out using tag-specific HRP-conjugated antibodies, followed by chemiluminescence imaging. This method allowed us to clearly determine the presence of our proteins of interest and to validate expression before advancing to downstream experiments.
            </p>
            
            <div style={{ 
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
            className='interactive-link'
            >
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/wetlab/protocols/9-sds-page-gel-and-transfer.pdf"
                title="SDS-PAGE gel and transfer on membrane"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/wetlab/protocols/9-sds-page-gel-and-transfer.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/wetlab/protocols/9-sds-page-gel-and-transfer.pdf')}
              />
              
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/wetlab/protocols/10-coomassie-and-ponceau-s-staining.pdf"
                title="Coomassie and Ponceau S Staining"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/wetlab/protocols/10-coomassie-and-ponceau-s-staining.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/wetlab/protocols/10-coomassie-and-ponceau-s-staining.pdf')}
              />
              
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/wetlab/protocols/11-western-blot.pdf"
                title="Western Blot"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/wetlab/protocols/11-western-blot.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/wetlab/protocols/11-western-blot.pdf')}
              />
            </div>
          </div>
          <div className="proof-block" id="purification">
            <h2>Protein Purification via His-tag Affinity Chromatography (FPLC)</h2>
            <div className="image-row">
              <figure className="image-figure image-figure--small">
                <img className="image-img" src="https://static.igem.wiki/teams/5590/wetlab/experiments/akta.webp" alt="FPLC AKTA system" />
                <figcaption className="image-caption"><strong>Figure 5:</strong>FPLC AKTA system for protein purification</figcaption>
              </figure>
            </div>
          </div>
          <div style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
            <p>
              The fire-resistant protein SRSF1 was engineered with a His-tag to facilitate purification. Soluble fractions from bacterial lysates were loaded onto a Ni-NTA affinity column connected to a Fast Protein Liquid Chromatography (FPLC) system. Unbound proteins were washed away, and bound His-tagged proteins were eluted with imidazole. Purified fractions were then analyzed by SDS-PAGE and Western blot to confirm protein recovery. This method provided us with purified protein samples suitable for hydrogel assembly.
            </p>
            
            <div style={{ 
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
            className='interactive-link'
            >
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/wetlab/protocols/12-protein-purification-via-his-tag-affinity-chromatography-fplc.pdf"
                title="Protein Purification via His-tag Affinity Chromatography (FPLC)"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/wetlab/protocols/12-protein-purification-via-his-tag-affinity-chromatography-fplc.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/wetlab/protocols/12-protein-purification-via-his-tag-affinity-chromatography-fplc.pdf')}
              />
            </div>
          </div>
          <div className="proof-block" id="fluorescence">
            <h2>Fluorescence Microscopy</h2>
            <div className="image-row">
              <figure className="image-figure image-figure--small">
                <img className="image-img" src="https://static.igem.wiki/teams/5590/wetlab/experiments/microscopy.webp" alt="Fluorescence microscopy setup" />
                <figcaption className="image-caption"><strong>Figure 6:</strong>Fluorescence microscopy setup for cell visualization</figcaption>
              </figure>
            </div>
          </div>
          <div style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
            <p>
              To verify the successful display of silicatein and CBD on the outer membrane of <i>E. coli</i> and the formation of a silica shell around the bacteria, cells were stained with specific dyes and visualized by fluorescence microscopy. This technique enabled us to directly observe our engineered strains and assess protein localization and shell formation at the single-cell level.
            </p>
            
            <div style={{ 
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
            className='interactive-link'
            >
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/wetlab/protocols/14-silica-bioencapsulation-and-staining-for-microscopy.pdf"
                title="Fluorescent Microscopy for Visualization of Silica Bioencapsulation"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/wetlab/protocols/14-silica-bioencapsulation-and-staining-for-microscopy.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/wetlab/protocols/14-silica-bioencapsulation-and-staining-for-microscopy.pdf')}
              />
            </div>
          </div>
          <div className="proof-block" id="flow">
            <h2>Flow Cytometry</h2>
            <div className="image-row">
              <figure className="image-figure image-figure--small">
                <img className="image-img" src="https://static.igem.wiki/teams/5590/wetlab/experiments/cytometry.webp" alt="Flow cytometry analysis" />
                <figcaption className="image-caption"><strong>Figure 7:</strong>Flow cytometry analysis for quantitative measurements</figcaption>
              </figure>
            </div>
          </div>
          <div style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
            <p>
              To quantitatively measure chitin and chitosan levels in our yeast strains, we performed flow cytometry using fluorescent dyes specific for these polymers. The fluorescence intensity provided a readout of chitin and chitosan abundance in individual cells. This high-throughput approach complemented Western blotting by revealing population-wide trends and expression heterogeneity. Analyzing thousands of cells per sample allowed us to confirm consistent overproduction of chitin and its conversion toward chitosan.
            </p>
            
            <div style={{ 
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
            className='interactive-link'
            >
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/wetlab/protocols/13-chitosan-overexpression-and-flow-cytometry.pdf"
                title="Staining of Yeast Samples and Flow Cytometry Analysis for Chitosan Overproduction"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/wetlab/protocols/13-chitosan-overexpression-and-flow-cytometry.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/wetlab/protocols/13-chitosan-overexpression-and-flow-cytometry.pdf')}
              />
            </div>
          </div>
          <div className="proof-block" id="assembly">
            <h2>Hydrogel Assembly</h2>
            <div className="image-row">
              <figure className="image-figure image-figure--small">
                <img className="image-img" src="https://static.igem.wiki/teams/5590/wetlab/experiments/hydrogel.webp" alt="Hydrogel assembly process" />
                <figcaption className="image-caption"><strong>Figure 8:</strong>Hydrogel assembly and formation process</figcaption>
              </figure>
            </div>
          </div>
          <div style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
            <p>
              We explored hydrogel formation using synthetic components as stand-ins for the biologically produced ones, allowing us to test material properties in parallel with our biological engineering. Chitosan, cellulose, and silica were mixed under a range of defined conditions to assemble hydrogels aligned with our design. The process was optimized by adjusting temperature, component ratios, and wash steps. Visual inspection of gel texture served as an initial evaluation criterion, and once the hydrogels matched our expectations, they were subjected to quantitative characterization.
            </p>
            
            <div style={{ 
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
            className='interactive-link'
            >
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/wetlab/protocols/15-hydrogel-assembly.pdf"
                title="Hydrogel Assembly"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/wetlab/protocols/15-hydrogel-assembly.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/wetlab/protocols/15-hydrogel-assembly.pdf')}
              />
            </div>
          </div>
          <div className="proof-block" id="rheology">
            <h2>Rheological Characterization of Hydrogel</h2>
            <div className="image-row">
              <figure className="image-figure image-figure--small">
                <img className="image-img" src="https://static.igem.wiki/teams/5590/wetlab/experiments/rheometer.webp" alt="Rheometer measurement" />
                <figcaption className="image-caption"><strong>Figure 9:</strong>Rheometer setup for mechanical property analysis</figcaption>
              </figure>
              <figure className="image-figure image-figure--small">
                <img className="image-img" src="https://static.igem.wiki/teams/5590/wetlab/experiments/microscope-gel.webp" alt="Hydrogel under microscope" />
                <figcaption className="image-caption"><strong>Figure 10:</strong>Microscopic analysis of hydrogel structure</figcaption>
              </figure>
            </div>

          </div>
          <div style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
            <p>
              To evaluate the mechanical properties of our hydrogels, we conducted rheological measurements using a rotational rheometer. Oscillatory shear tests were performed to study the relationship between viscosity and shear stress across different hydrogel formulations. Comparing these datasets allowed us to confirm our hypotheses regarding the chemical interactions within the gels and to verify their suitability for spray application. These measurements provided quantitative insights into the tunability and performance of our protein-based hydrogels.
            </p>
            
                        <div style={{ 
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
            className='interactive-link'
            >
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/wetlab/protocols/16-rheological-characterization-of-hydrogels.pdf"
                title="Rheological Characterization of Hydrogels"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/wetlab/protocols/16-rheological-characterization-of-hydrogels.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/wetlab/protocols/16-rheological-characterization-of-hydrogels.pdf')}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
