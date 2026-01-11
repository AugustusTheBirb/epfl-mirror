import React from "react";
import "./wetlab.css";
import "./parts.css";
import ReferencesDropdown from "../Homepage/References/references";
import { Reference } from "../../components/References/ReferenceList";
import PageHead from "../../components/Head/PageHead";
import "../../components/Sidebar/sidebar.css";
import Citation from "../../components/References/Citation";
import { Link } from "react-router-dom";



type SourceLink = {
  label: string;
  href: string;
};

type Part = {
  name: React.ReactNode;
  id?: SourceLink[];
  compositeOrBasic: string;
  partType: string;
  description: React.ReactNode;
  subparts?: string[];
  sources?: SourceLink[];
  expressed?: "Yes" | "No" | "N.A.";
  expressionNotes?: string;
  expressionRefId?: string; 
};


const recycledParts: Part[] = [
  {
    name: "INP-Silicatein-α-HA",
    id: [{label:"BBa_25DB9NAN", href:"https://registry.igem.org/parts/bba-25db9nan"}],
    compositeOrBasic: "Basic",
    partType: "Coding",
    description:
      "A membrane-displayed enzyme that catalyzes the formation of a silica coating around the bacterial cell. INP ensures display on the outer membrane of E. coli, silicatein catalyzes the formation of silica coating around the bacterial cell.",
    
    sources: [
      { label: "BBa_K5199004", href: "https://parts.igem.org/Part:BBa_K5199004" },
      { label: "BBa_K5199003", href: "https://parts.igem.org/Part:BBa_K5199003" },
      { label: "BBa_K4090000", href: "https://parts.igem.org/Part:BBa_K4090000" },
      { label: "Bioencapsulation", href: "https://www.researchgate.net/publication/5823872_Bioencapsulation_of_Bacteria_Escherichia_coli_with_polysilicate_after_transformation_with_silicatein-a_gene" },
    ],
    
    expressionNotes:
      "Silicatein-α expression was assessed by western blot, but polymerisation of silica based on Sodium Orthosilicate failed.",
  },
  {
    name: "SRSF1-CBD-His",
    id: [{label:"BBa_25JIBL9X", href:"https://registry.igem.org/parts/bba-25jibl9x"}],
    compositeOrBasic: "Basic",
    partType: "Coding",
    description:
      "A fire-resistant protein phosphorylated by SRPK1 to enhance flame resistance, anchored to the hydrogel matrix via a Cellulose Binding Domain (CBD).",
    
    sources: [
      { label: "BBa_K1321340", href: "https://parts.igem.org/Part:BBa_K1321340" },
      { label: "BBa_K1608000", href: "https://parts.igem.org/Part:BBa_K1608000" },
    ],
    
      expressionNotes:"Verification successfully showed by western blotting",

  },
  {
    name: "SRPK1-Strep",
    id: [{label:"BBa_25CLCW36", href:"https://registry.igem.org/parts/bba-25clcw36"}],

    compositeOrBasic: "Basic",
    partType: "Coding",
    description:
      "A protein kinase that phosphorylates SRSF1, enhancing its flame-retardant properties.",
    
    sources: [
      { label: "BBa_K1608001", href: "https://parts.igem.org/Part:BBa_K1608001" },
    ],
    
  expressionNotes:"Verification successfully showed by western blotting",

  },
  {
    name: "INP-CBD-V5",
    compositeOrBasic: "Basic",
    partType: "Coding",
    description:
      "An anchoring protein that binds bacteria to the hydrogel matrix. INP ensures display on the outer membrane of E. coli, CBD allows the bacteria to anchor itself to the cellulose matrix.",
    id: [{label:"BBa_25C8J30N", href:"https://registry.igem.org/parts/bba-25c8j30n"}],
    sources: [
      { label: "BBa_K1321340", href: "https://parts.igem.org/Part:BBa_K1321340" },
      { label: "BBa_K4090000", href: "https://parts.igem.org/Part:BBa_K4090000" },
    ],
    
    expressionNotes:
      "CBD expression was assessed by western blot, but protein function could not be confirmed.",

  },
  
];

const newParts: Part[] = [
  {
    name: <>RHO1<sub>Q68H</sub></>,
    id: [{label:"BBa_25SHFW8C", href:"https://registry.igem.org/parts/bba-25shfw8c"}],
    compositeOrBasic: "Basic",
    partType: "Coding",
    description:
      "A constitutively active form of the native GTPase RHO1, which drives continuous chitin production in the cell wall of S. cerevisiae.",
    sources: [
      { label: "UniProt: P06780", href: "https://www.uniprot.org/uniprotkb/P06780/entry#sequences" },
      { label: "ACS Synthetic Biology (2024)", href: "https://pubs.acs.org/doi/10.1021/acssynbio.4c00436?goto=supporting-info" },
      { label: "YeastGenome: RHO1", href: "https://www.yeastgenome.org/locus/S000006369#sequence" },
    ],
    expressed: "N.A.",
  },
  {
    name: (
      <>
        RHO1<sub>Q68H</sub>-HA
      </>
    ),
    compositeOrBasic: "Basic",
    partType: "Coding",
    id: [{label:"BBa_256VDYQ5", href:"https://registry.igem.org/parts/bba-256vdyq5"}],
    description:
      <>
        A constitutively active form of the native GTPase RHO1, which drives continuous chitin production in the cell wall of S. cerevisiae.
The sequence includes an HA tag for detection of the fusion protein via Western blot.
      </>,
  sources: [
    { label: "UniProt: P06780", href: "https://www.uniprot.org/uniprotkb/P06780/entry#sequences" },
    { label: "ACS Synthetic Biology (2024)", href: "https://pubs.acs.org/doi/10.1021/acssynbio.4c00436?goto=supporting-info" },
    { label: "YeastGenome: RHO1", href: "https://www.yeastgenome.org/locus/S000006369#sequence" }
  ],
  expressionNotes:"Verification successfully showed by western blotting",
  
},
  {
    name: "Chitin Deacetylase (CDA)",
    compositeOrBasic: "Basic",
    id: [{ label: "BBa_25VM1ZLC", href: "https://registry.igem.org/parts/bba-25vm1zlc" }],
    partType: "Coding",
    description:
      "Converts chitin into chitosan by removing acetyl groups from the polymer backbone.",
    sources: [
      { label: "UniProt: P50325", href: "https://www.uniprot.org/uniprotkb/P50325/entry#subcellular_location"},
      { label: "Organism taxonomy", href: "https://www.uniprot.org/taxonomy/29923" },
    ],
    expressed: "N.A.",
  },
  {
    name: "Aga2-Chitin Deacetylase-V5",
    compositeOrBasic: "Basic",
    id: [{ label: "BBa_250SSLZ0", href: "https://registry.igem.org/parts/bba-250sslz0" }],
    partType: "Coding",
    description:
      "CDA converts chitin into chitosan by removing acetyl groups from the polymer backbone.The sequence includes a V5  tag for detection of the fusion protein via Western blot, and an AGA2 signal peptide.",
sources: [
  
  { label: "UniProt: P50325", href: "https://www.uniprot.org/uniprotkb/P50325/entry#subcellular_location" },
  { label: "Organism taxonomy", href: "https://www.uniprot.org/taxonomy/29923" }
],
    expressionNotes:"Expression was successful but secretion failed."
  },
  {
    name: "OmpA-Silicatein-α",
    id: [{ label: "BBa_25SICUII", href: "https://registry.igem.org/parts/bba-25sicuii" }],
    compositeOrBasic: "Basic",
    partType: "Coding",
    description:
      "A membrane-displayed enzyme that catalyzes the formation of silica coating around the bacterial cell. OmpA ensures display on the outer membrane of E. coli, silicatein-α catalyzes the formation of silica around the bacterial cell.",
    sources: [
      { label: "PNAS", href: "https://www.pnas.org/doi/10.1073/pnas.2409335121" },
    ],
    expressed: "N.A.",
  },
  {
    name: "OmpA-CBD",
    compositeOrBasic: "Basic",
    partType: "Coding",
    id: [{ label: "BBa_25N9S3T5", href: "https://registry.igem.org/parts/bba-25n9s3t5" }],
    description:
      "CBD attached to OmpA. OmpA ensures display of CBD on the outer membrane of E. coli, and CBD allows the bacteria to anchor itself to the cellulose matrix.",
    sources: [
      { label: "BBa_K1321340", href: "https://parts.igem.org/Part:BBa_K1321340" },
      { label: "PNAS", href: "https://www.pnas.org/doi/10.1073/pnas.2409335121" }
    ],
    expressed: "N.A.",
  },
  {
    name: "OmpA-Silicatein-α-HA",
    compositeOrBasic: "Basic",
    partType: "Coding",
    id: [{ label: "BBa_25WM6N9L", href: "https://registry.igem.org/parts/bba-25wm6n9l" }],
    description:
      "A membrane-displayed enzyme that catalyzes the formation of a silica coating around the bacterial cell.  OmpA ensures display on the outer membrane of E. Coli, silicatein-α catalyzes the formation of a silica coating around the bacterial cell. The sequence includes an HA  tag for detection of the fusion protein via Western blot.",
    subparts: ["pET blank (KAN)"],
    sources: [
      { label: "PNAS", href: "https://www.pnas.org/doi/10.1073/pnas.2409335121" },
    ],
    expressed: "N.A.",
  },
  {
    name: "OmpA-CBD-V5",
    compositeOrBasic: "Basic",
    partType: "Coding",
    id: [{ label: "BBa_25V0H83N", href: "https://registry.igem.org/parts/bba-25v0h83n" }],
    description:
      "An anchoring protein that binds bacteria to the hydrogel matrix. OmpA ensures display on the outer membrane of E. Coli, CBD allows the bacteria to anchor itself to the cellulose matrix. The sequence includes a V5  tag for detection of the fusion protein via Western blot.",
    subparts: ["pET blank (AMP)"],
    sources: [
      { label: "PNAS", href: "https://www.pnas.org/doi/10.1073/pnas.2409335121" }
    ],

    expressed: "N.A.",
  },
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="parts-link" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function PartsTable({ title, data }: { title: string; data: Part[] }) {
  return (
    <div className="parts-card">
      <h3 className="parts-card-title">{title}</h3>
      <div className="table-wrap">
        <table className="parts-table detailed">
          <thead>
            <tr>
              <th>Part Name</th>
              <th>ID</th> 
              <th>Composite / Basic</th>
              <th>Part Type</th>
              <th>Description</th>
              <th>Sources</th>
              <th>Successful Protein Expression</th>
            </tr>
          </thead>
          <tbody>
            {data.map((p, idx) => (
              <tr
                key={idx}
                id={
                  Array.isArray(p.id)
                    ? p.id[0]?.label || undefined
                    : typeof p.id === "string"
                    ? p.id
                    : undefined
                }
              >
                <td className="mono">{p.name}</td>
                
                {/* 🆕 ID column rendering */}
                <td>
                  {Array.isArray(p.id) ? (
                    p.id.map((link, i) => (
                      <div key={i}>
                        <ExternalLink href={link.href}>{link.label}</ExternalLink>
                      </div>
                    ))
                  ) : typeof p.id === "string" ? (
                    <span>{p.id}</span>
                  ) : (
                    <span>—</span>
                  )}
                </td>

                <td>
                  <span
                    className={`badge ${
                      p.compositeOrBasic?.toLowerCase() === "composite"
                        ? "badge-composite"
                        : "badge-basic"
                    }`}
                  >
                    {p.compositeOrBasic}
                  </span>
                </td>
                <td>{p.partType}</td>
                <td>{p.description}</td>
                <td>
                  <ul className="compact-list">
                    {p.subparts?.map((s, i) => (
                      <li key={i}>
                        <strong>{s}</strong>
                      </li>
                    ))}
                    {p.sources?.map((s, i) => (
                      <li key={i}>
                        <ExternalLink href={s.href}>{s.label}</ExternalLink>
                      </li>
                    ))}
                  </ul>

                  {p.expressionRefId && (
                    <p className="expression-vector-note">
                      Expression vector <Citation id={p.expressionRefId} />.
                    </p>
                  )}
                </td>

                <td>
                  <div className="expression-status">
                    <strong>{p.expressed ?? "—"}</strong>
                    {p.expressionNotes && (
                      <p className="expression-notes">{p.expressionNotes}</p>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default function Parts() {
  return (
    <div className="proof-container">
      <PageHead
        title="Parts"
        subtitle="Parts and components used in the wetlab"
        backgroundUrl="https://static.igem.wiki/teams/5590/wetlab/headpicture/tubes-bw.webp"
        grayscale={true}
      />

      <div className="hardware-layout">
        <aside className="hardware-sidebar">
          <div className="sidebar-title">Table of Contents</div>
          <nav>
            <ul>
              <li><a className="sidebar-button" href="#overview">Overview</a></li>
              <li><a className="sidebar-button" href="#recycled-parts">Recycled parts</a></li>
              <li><a className="sidebar-button" href="#new-parts">New parts</a></li>
            </ul>
          </nav>
        </aside>

        <section className="hardware-main proof-section">
          <div style={{ fontSize: '1.2rem', marginBottom: '3rem' }} id="overview">
            <p>
              This page records all the genetic parts and components used during our project. These are related to production of hydrogel components by microorganisms. We used existing parts and designed new ones for the production of components essential to gel structure like chitosan, and components necessary for fire retardance, mainly silicatein-α, SRSF1, and SRPK1.
            </p>
          </div>

          <div className="proof-block">
            <h2 className="subtitle">Want to know more about our plasmid design?</h2>
          </div>
          <div style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
            <p>
              Check out our <Link className="interactive-link" to="/design" >Design</Link> for more details on how we designed and constructed these genetic parts.
            </p>
          </div>

          <section id="recycled-parts" className="section">
            <h2 className="subtitle">Recycled parts</h2>
            <p className="proof-content" style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
These parts were designed by adapting and combining existing iGEM parts that serve similar functions. Modifications were made using literature, to adjust them for our experimental setup. Note that pET series of plasmids were used for expression in E. Coli, and pESC plasmids were used for expression in S. cerevisiae
Bacterial expression vectors were sourced from Twist <Citation id="1" />. Yeast expression vectors were obtained from Genscript <Citation id="2" /><Citation id="3" />.
            </p>
            <PartsTable title="Recycled and/or adapted parts" data={recycledParts} />
          </section>

          <section id="new-parts" className="section">
            <h2 className="subtitle">New parts</h2>
            <p className="proof-content" style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
These parts were designed using sequences obtained from scientific literature rather than adapting existing iGEM parts. In some cases, existing iGEM parts feature similar constructs; when applicable, they are referenced on the Registry page.            </p>
            <PartsTable title="Newly designed parts" data={newParts} />
          </section>

          <ReferencesDropdown references={partsReferenceList} />
        </section>
      </div>
    </div>
  );
}

const partsReferenceList: Reference[] = [
  {
    id: "1",
    text: "‘Vectors | Twist Bioscience’. Available: <a href=\"https://www.twistbioscience.com/products/genes/vectors?tab=catalog-vectors\">https://www.twistbioscience.com/products/genes/vectors?tab=catalog-vectors</a>. [Accessed: Oct. 06, 2025].",
  },
  {
    id: "2",
    text: "‘pESC-LEU’. Available: <a href=\"https://www.genscript.com/vector/detail?vector_name=cEVTQy1MRVU=\">https://www.genscript.com/vector/detail?vector_name=cEVTQy1MRVU=</a>. [Accessed: Oct. 06, 2025]."
  },
  {
    id: "3",
    text: "‘pESC-URA’. Available: <a href=\"https://www.genscript.com/vector/detail?vector_name=cEVTQy1VUkE=\">https://www.genscript.com/vector/detail?vector_name=cEVTQy1VUkE=</a>. [Accessed: Oct. 06, 2025]."
  }
];


