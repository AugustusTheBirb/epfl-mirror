import { useEffect } from "react";
import "./wetlab.css";
import PageHead from "../../components/Head/PageHead";
import { useLocation } from "react-router-dom";

interface Protocol {
  id: string;
  title: string;
  description: string;
  category: string;
  pdfUrl: string;
}

const protocols: Protocol[] = [
  // Bacterial Expression
  {
    id: "1",
    title: "Bacterial Transformation",
    description: "Competent cell preparation and plasmid transformation protocol for E. coli",
    category: "Bacterial Expression",
  pdfUrl: "https://static.igem.wiki/teams/5590/wetlab/protocols/1-bacterial-transformation.pdf"
  },
  {
    id: "2", 
    title: "Miniprep Plasmid Extraction",
    description: "Fast and efficient plasmid DNA isolation from bacterial cultures",
    category: "Bacterial Expression",
  pdfUrl: "https://static.igem.wiki/teams/5590/wetlab/protocols/2-miniprep-plasmid-extraction.pdf"
  },
  {
    id: "3",
    title: "Overnight Bacterial Liquid Culture",
    description: "Standard protocol for growing bacterial cultures in liquid media",
    category: "Bacterial Expression", 
  pdfUrl: "https://static.igem.wiki/teams/5590/wetlab/protocols/3-overnight-bacterial-liquid-culture.pdf"
  },
  {
    id: "4",
    title: "IPTG Induced Expression in Bacteria",
    description: "Protein expression induction using IPTG in bacterial systems",
    category: "Bacterial Expression",
  pdfUrl: "https://static.igem.wiki/teams/5590/wetlab/protocols/4-iptg-induced-expression-in-bacteria.pdf"
  },
  {
    id: "5",
    title: "Glycerol Stock",
    description: "Long-term storage of bacterial strains in glycerol stocks",
    category: "Bacterial Expression",
  pdfUrl: "https://static.igem.wiki/teams/5590/wetlab/protocols/5-glycerol-stock.pdf"
  },
  
  // Yeast Expression
  {
    id: "6",
    title: "Yeast Transformation", 
    description: "Transformation protocol for introducing DNA into yeast cells",
    category: "Yeast Expression",
  pdfUrl: "https://static.igem.wiki/teams/5590/wetlab/protocols/6-yeast-transformation.pdf"
  },
  {
    id: "7",
    title: "Yeast Passaging",
    description: "Routine maintenance and passaging of yeast cultures",
    category: "Yeast Expression",
  pdfUrl: "https://static.igem.wiki/teams/5590/wetlab/protocols/7-yeast-passaging.pdf"
  },
  {
    id: "8",
    title: "Yeast Protein Expression and Extraction",
    description: "Protein expression induction and extraction from yeast cells",
    category: "Yeast Expression", 
  pdfUrl: "https://static.igem.wiki/teams/5590/wetlab/protocols/8-yeast-protein-expression-and-extraction.pdf"
  },
  
  // Western Blot Analysis
  {
    id: "9",
    title: "SDS-PAGE Gel and Transfer",
    description: "Protein separation by gel electrophoresis and membrane transfer",
    category: "Western Blot Analysis",
  pdfUrl: "https://static.igem.wiki/teams/5590/wetlab/protocols/9-sds-page-gel-and-transfer.pdf"
  },
  {
    id: "10",
    title: "Coomassie and Ponceau S Staining",
    description: "Protein visualization using Coomassie blue and Ponceau S stains",
    category: "Western Blot Analysis",
  pdfUrl: "https://static.igem.wiki/teams/5590/wetlab/protocols/10-coomassie-and-ponceau-s-staining.pdf"
  },
  {
    id: "11",
    title: "Western Blot",
    description: "Immunodetection of specific proteins using antibodies",
    category: "Western Blot Analysis",
  pdfUrl: "https://static.igem.wiki/teams/5590/wetlab/protocols/11-western-blot.pdf"
  },
  
  // Protein Purification
  {
    id: "12",
    title: "Protein Purification via His-tag Affinity Chromatography (FPLC)",
    description: "Purification of His-tagged proteins using FPLC system",
    category: "Protein Purification",
  pdfUrl: "https://static.igem.wiki/teams/5590/wetlab/protocols/12-protein-purification-via-his-tag-affinity-chromatography-fplc.pdf"
  },
  
  // Microscopy & Flow Cytometry
  {
    id: "13",
    title: "Chitosan Overexpression and Flow Cytometry",
    description: "Flow cytometry analysis for chitosan production in yeast",
    category: "Microscopy & Flow Cytometry",
  pdfUrl: "https://static.igem.wiki/teams/5590/wetlab/protocols/13-chitosan-overexpression-and-flow-cytometry.pdf"
  },
  {
    id: "14",
    title: "Silica Bioencapsulation and Staining for Microscopy",
    description: "Fluorescent staining and microscopy of silica-encapsulated cells",
    category: "Microscopy & Flow Cytometry",
  pdfUrl: "https://static.igem.wiki/teams/5590/wetlab/protocols/14-silica-bioencapsulation-and-staining-for-microscopy.pdf"
  },
  
  // Hydrogel Characterization
  {
    id: "15",
    title: "Hydrogel Assembly",
    description: "Assembly and formation of protein-based hydrogels",
    category: "Hydrogel Characterization",
  pdfUrl: "https://static.igem.wiki/teams/5590/wetlab/protocols/15-hydrogel-assembly.pdf"
  },
  {
    id: "16",
    title: "Rheological Characterization of Hydrogels",
    description: "Mechanical property analysis using rheometer measurements",
    category: "Hydrogel Characterization",
  pdfUrl: "https://static.igem.wiki/teams/5590/wetlab/protocols/16-rheological-characterization-of-hydrogels.pdf"
  }
];

// Group protocols by category
const groupedProtocols = protocols.reduce((acc, protocol) => {
  if (!acc[protocol.category]) {
    acc[protocol.category] = [];
  }
  acc[protocol.category].push(protocol);
  return acc;
}, {} as Record<string, Protocol[]>);

export default function Protocols() {
  const handleProtocolClick = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
  };

  // Scroll to hash if provided in URL (e.g. /protocols#western-blot-analysis)
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace('#', ''));
      const el = document.getElementById(id);
      if (el) {
        // small timeout to ensure layout is ready
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      }
    }
  }, [hash]);

  return (
    <div className="proof-container">
      <PageHead
        title="Laboratory Protocols"
        subtitle="Comprehensive collection of wetlab protocols for hydrogel development"
        backgroundUrl="https://static.igem.wiki/teams/5590/wetlab/headpicture/samples-bw.webp"
        grayscale={true}
      />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>

        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid #616061ff'
        }}>
          <p style={{
            fontSize: '1.4rem',
            color: '#bebec5ff',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            A complete collection of 16 protocols covering protein expression, purification, and hydrogel characterization
          </p>
        </div>

        {/* Protocol Categories */}
        {Object.entries(groupedProtocols).map(([category, categoryProtocols]) => {
          // create a stable slug for heading ids that matches links elsewhere in the app
          const slug = category
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');

          return (
            <section key={category} id={slug} style={{ marginBottom: '3rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                paddingBottom: '0.5rem',
                borderBottom: '2px solid #d2d9e0ff'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#fffcfcff',
                  borderRadius: '50%',
                  marginRight: '1rem'
                }} />
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#b7b7c5ff',
                  margin: 0
                }}>{category}</h2>
                <div style={{
                  marginLeft: '1rem',
                  backgroundColor: 'var(--color-dark-orange)',
                  color: 'white',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: 500
                }}>{categoryProtocols.length} protocol{categoryProtocols.length > 1 ? 's' : ''}</div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '1.5rem'
              }}>
                {categoryProtocols.map((protocol) => (
                  <article
                    key={protocol.id}
                    style={{
                      backgroundColor: '#aec6d0ff',
                      border: '1px solid #e5e5e7',
                      borderRadius: '16px',
                      padding: '1.5rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 24px rgba(255, 255, 255, 0.12)';
                      (e.currentTarget as HTMLElement).style.borderColor = '#7a7a7aff';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(217, 9, 9, 0.08)';
                      (e.currentTarget as HTMLElement).style.borderColor = '#e5e5e7';
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: '#f5f5f7',
                      color: '#1d1d1f',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 600
                    }}>{protocol.id}</div>

                    <div style={{ paddingRight: '2rem' }}>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#1d1d1f', marginBottom: '0.5rem', lineHeight: 1.4 }}>{protocol.title}</h3>
                      <p style={{ fontSize: '0.95rem', color: '#86868b', lineHeight: 1.5, margin: 0 }}>{protocol.description}</p>
                    </div>

                    <div style={{ marginTop: '1rem' }}>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleProtocolClick(protocol.pdfUrl); }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          background: 'transparent',
                          border: 'none',
                          padding: 0,
                          color: '#032447ff',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          cursor: 'pointer'
                        }}
                        aria-label={`View ${protocol.title} protocol PDF`}
                      >
                        <span style={{ marginRight: '0.5rem' }}>📄</span>
                        <span>View Protocol PDF</span>
                        <span className="protocol-chevron" aria-hidden="true" style={{ marginLeft: '0.6rem', transition: 'transform 200ms ease' }}>▾</span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '2rem',
          backgroundColor: '#f5f5f7',
          borderRadius: '16px'
        }}>
          <p style={{ fontSize: '0.9rem', color: '#86868b', margin: 0 }}>
            Click the "View Protocol PDF" button on each card to open the detailed PDF documentation.
          </p>
        </div>
      </div>
    </div>
  );
}
