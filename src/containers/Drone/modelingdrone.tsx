import React, { useEffect, useRef, useState } from "react";
import "./modelingdrone.css";
import "../Project/Proofofconcept/proofofconcept.css";
import "../../components/Sidebar/sidebar.css";
import PageHead from "../../components/Head/PageHead";
import "@google/model-viewer";
import type { ModelViewerElement } from "@google/model-viewer";

const DRONE_ASSEMBLY_MODEL_URL = "https://static.igem.wiki/teams/5590/assets-drone/3d-parts/drone-assembly-draco.glb";
const LOADING_SYSTEM_MODEL_URL = "https://static.igem.wiki/teams/5590/assets-drone/3d-parts/loading-system-draco.glb";


interface PDFLinkProps {
  url: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
}
const PDFLink: React.FC<PDFLinkProps> = ({ url, title, isOpen, onToggle }) => {
  const [hover, setHover] = useState(false);

  const active = hover || isOpen;

  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.8rem 1rem',
          textDecoration: 'none',
          transition: 'all 0.15s ease',
          borderLeft: '2px solid var(--color-dark-orange)',
          background: 'transparent', // keep background transparent per request
          border: 'none',
          cursor: 'pointer',
          width: '100%',
          textAlign: 'left',
          borderRadius: 8,
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
            opacity: active ? 1 : 0.7
          }}
        />
        <span style={{ fontSize: '1.3rem', fontWeight: 400, color: active ? 'var(--color-dark-orange)' : 'var(--color-whitish)' }}>
          {title}
        </span>
        <span
          aria-hidden="true"
          style={{
            marginLeft: 'auto',
            transition: 'transform 200ms ease, color 150ms ease',
            transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
            fontSize: '0.95rem',
            opacity: 0.95,
            color: active ? 'var(--color-dark-orange)' : 'rgba(255,255,255,0.9)'
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
            title={`${title} Document`}
          />
        </div>
      )}
    </>
  );
};

const ModelingSection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [openPdf, setOpenPdf] = useState<string | null>(null);
  const [modelLoadingStates, setModelLoadingStates] = useState({
    assembly: true,
    loading: true
  });
  const [modelErrors, setModelErrors] = useState({
    assembly: false,
    loading: false
  });
  const assemblyViewerRef = useRef<ModelViewerElement | null>(null);
  const loadingViewerRef = useRef<ModelViewerElement | null>(null);

  const togglePdf = (pdfUrl: string) => {
    setOpenPdf(openPdf === pdfUrl ? null : pdfUrl);
  };

  useEffect(() => {
    const applyOffsetLighting = (viewer: ModelViewerElement | null) => {
      if (!viewer) return;

      viewer.environmentImage = "neutral";
      viewer.shadowIntensity = Math.min(1.25, Number(viewer.shadowIntensity ?? 1) + 0.15);
      viewer.shadowSoftness = Math.min(1, Number(viewer.shadowSoftness ?? 0.8) + 0.05);
      viewer.exposure = Math.max(1.05, Number(viewer.exposure ?? 1.15));

      const scene = (viewer as ModelViewerElement & { scene?: { sunlight?: any } }).scene;
      const sunlight = scene?.sunlight;

      if (sunlight) {
        sunlight.intensity = 1.6;
        sunlight.position.set(-3.2, 4.5, 2.1);
        sunlight.color.set("#ffe5c1");
      }
    };

    const handleLoad = (event: Event) => {
      const viewer = event.currentTarget as ModelViewerElement;
      applyOffsetLighting(viewer);
      
      // Update loading state based on which model loaded
      if (viewer === assemblyViewerRef.current) {
        setModelLoadingStates(prev => ({ ...prev, assembly: false }));
      } else if (viewer === loadingViewerRef.current) {
        setModelLoadingStates(prev => ({ ...prev, loading: false }));
      }
    };

    const handleError = (event: Event) => {
      const viewer = event.currentTarget as ModelViewerElement;
      console.error('Model loading error:', event);
      
      // Update error state based on which model failed
      if (viewer === assemblyViewerRef.current) {
        setModelErrors(prev => ({ ...prev, assembly: true }));
        setModelLoadingStates(prev => ({ ...prev, assembly: false }));
      } else if (viewer === loadingViewerRef.current) {
        setModelErrors(prev => ({ ...prev, loading: true }));
        setModelLoadingStates(prev => ({ ...prev, loading: false }));
      }
    };

    const viewers = [assemblyViewerRef.current, loadingViewerRef.current].filter(Boolean) as ModelViewerElement[];

    viewers.forEach(viewer => {
      if (viewer.model) {
        applyOffsetLighting(viewer);
      }
      viewer.addEventListener("load", handleLoad);
      viewer.addEventListener("error", handleError);
    });

    return () => {
      viewers.forEach(viewer => {
        viewer.removeEventListener("load", handleLoad);
        viewer.removeEventListener("error", handleError);
      });
    };
  }, []);

  const cards = [
    {
      key: "cad",
      label: "CAD Model",
      img: "https://static.igem.wiki/teams/5590/assets-drone/hardware.webp",
      desc: "Complete 1:1 scale CAD model with precise component positioning for verification of clearances, weight distribution, and assembly procedures.",
    },
    {
      key: "simulation",
      label: "Engineering Simulations",
      img: "https://static.igem.wiki/teams/5590/assets-drone/hardware.webp",
      desc: "Comprehensive FEA, CFD, and vibration analysis to validate design choices and optimize performance before physical prototyping.",
    },
    {
      key: "spraying",
      label: "Spraying System",
      img: "https://static.igem.wiki/teams/5590/assets-drone/hardware.webp",
      desc: "Meticulously designed liquid application system with optimized tank placement, nozzle configuration, and flow characteristics.",
    },
  ];

  return (
    <div className="proof-container">
      <PageHead
        title="Modeling & CAD"
        subtitle="Our CAD models and simulation environment for designing the drone."
        backgroundUrl="https://static.igem.wiki/teams/5590/assets-drone/software-bg.avif"
        grayscale={true}
      />

      <div className="hardware-layout">
        <aside className="hardware-sidebar">
          <div className="sidebar-title">Table Of Contents</div>
          <nav>
            <ul>
              <li><a className="sidebar-button" href="#introduction">Introduction</a></li>
              <li><a className="sidebar-button" href="#cad-model">CAD Model</a></li>
              <li><a className="sidebar-button" href="#design-process">Design Process</a></li>
              <li><a className="sidebar-button" href="#simulation">Simulations</a></li>
              <li><a className="sidebar-button" href="#spraying-system">Spraying System</a></li>
              <li><a className="sidebar-button" href="#future">Future Directions & Conclusion</a></li>
            </ul>
          </nav>
        </aside>

        <section className="hardware-main proof-section">
          <div className="proof-block" id="introduction">
            <h2>Modeling and Simulation</h2>
            <p>
              Modeling was a core part of our design process, allowing us to refine ideas safely and cost-effectively before moving to hardware. We built a highly accurate 3D digital twin of the drone, replicating its true dimensions, weight, materials, and inertia. This helped us verify clearances, avoid collisions, and optimize hardware placement for a stable center of gravity. It is also useful for optimizing control algorithms with an optimizer instead of trial and error.
            </p>
          </div>

          <div className="proof-block" id="cad-model">
            <h2>Real Scale CAD Model</h2>
            <p>
              Our complete CAD model represents the drone at 1:1 scale with all components precisely positioned and modeled. This digital prototype was essential for verifying clearances, weight distribution, and assembly procedures.
            </p>
            
            <h3>Complete Drone Assembly</h3>
            <div style={{ marginTop: "1.5rem", marginBottom: "3rem", position: "relative" }}>
              {modelLoadingStates.assembly && (
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                  color: "#666",
                  fontSize: "1.1rem"
                }}>
                  Loading 3D Model...
                </div>
              )}
              {modelErrors.assembly && (
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                  color: "#d32f2f",
                  fontSize: "1.1rem",
                  textAlign: "center"
                }}>
                  Error loading 3D model.<br/>
                  <small>Please check your internet connection and try refreshing.</small>
                </div>
              )}
              <model-viewer
                ref={assemblyViewerRef}
                src={DRONE_ASSEMBLY_MODEL_URL}
                alt="Interactive 3D model of our drone assembly"
                poster="https://static.igem.wiki/teams/5590/assets-drone/hardware.webp"
                camera-controls
                min-field-of-view="10deg"
                auto-rotate
                shadow-intensity="1"
                shadow-softness="0.8"
                exposure="1.2"
                environment-image="neutral"
                style={{
                  width: "100%",
                  height: "480px",
                  borderRadius: "8px",
                  background: "radial-gradient(circle at 20% 20%, #f7f9fc 0%, #e6ebf3 55%, #d5dce7 100%)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "inset 0 0 18px rgba(0,0,0,0.18)",
                  opacity: modelErrors.assembly ? 0.3 : 1,
                }}
              />
              <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '1rem', color: '#666' }}>
                Interactive CAD Model: Complete Drone Assembly
              </p>
            </div>

            <h3>Loading System Detail</h3>
            <p>
              The modular loading system was designed for rapid tank swapping and maintenance. This specialized component houses the gel dispensing mechanism and can be quickly detached for refilling or system maintenance.
            </p>
            <div style={{ marginTop: "1.5rem", position: "relative" }}>
              {modelLoadingStates.loading && (
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                  color: "#666",
                  fontSize: "1.1rem"
                }}>
                  Loading 3D Model...
                </div>
              )}
              {modelErrors.loading && (
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                  color: "#d32f2f",
                  fontSize: "1.1rem",
                  textAlign: "center"
                }}>
                  Error loading 3D model.<br/>
                  <small>Please check your internet connection and try refreshing.</small>
                </div>
              )}
              <model-viewer
                ref={loadingViewerRef}
                src={LOADING_SYSTEM_MODEL_URL}
                alt="Interactive 3D model of the loading system"
                poster="https://static.igem.wiki/teams/5590/assets-drone/hardware.webp"
                camera-controls
                min-field-of-view="10deg"
                auto-rotate
                shadow-intensity="1"
                shadow-softness="0.8"
                exposure="1.2"
                environment-image="neutral"
                style={{
                  width: "100%",
                  height: "480px",
                  borderRadius: "8px",
                  background: "radial-gradient(circle at 20% 20%, #f7f9fc 0%, #e6ebf3 55%, #d5dce7 100%)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "inset 0 0 18px rgba(0,0,0,0.18)",
                  opacity: modelErrors.loading ? 0.3 : 1,
                }}
              />
              <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '1rem', color: '#666' }}>
                Interactive CAD Model: Modular Loading System
              </p>
            </div>
          </div>

          <div className="proof-block" id="design-process">
            {/* CAD Modeling Video */}
            <h2>Design Process</h2>
            <p>
              For complex geometry and precise alignments, we initially tried manual measurements and photos, but these proved inefficient. The fastest and most accurate workflow was using a 2D scanner to capture the frame outlines and mounting holes, ensuring exact sizing and hole placement. These scans were then imported into Fusion 360, enabling us to design new parts with perfect alignment.
            </p>
            <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              <div style={{ maxWidth: 720, margin: '0 auto' }}>
                <iframe
                  title="EPFL: Time-Lapse: Manual CAD Modeling of the Drone Frame in Fusion 360 (2025)"
                  width="100%"
                  height="315"
                  src="https://video.igem.org/videos/embed/fmKcC3FQ9tZimdAhM76pwB"
                  allowFullScreen
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  style={{ border: 0, borderRadius: 8 }}
                />
              </div>
              <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '0.5rem', color: '#666' }}>
                Time-Lapse: Manual CAD Modeling of the Drone Frame in Fusion 360
              </p>
            </div>
            <p>
              This video serves as an example of how Fusion 360 was used. It highlights the design process of the drone's upper frame in Fusion 360, demonstrating the creation of key structural features and showcasing the precision and iterative design workflow.
            </p>
             <p>
              New components were designed to be structurally robust, modular, and vibration-isolated, with rubber elements and mounts to absorb stress and prevent resonance transfer. While the spraying system was modeled digitally, it was not physically built.
            </p>
            <p>
              The models were prepared for use in Isaac Sim to test algorithms in a realistic, physics-based environment. Although time constraints prevented full deployment, Isaac remains the intended platform due to its higher fidelity, RTX GPU support, and ability to simulate fire behavior.
            </p>
            
          </div>

          <div className="proof-block" id="spraying-system">
            <h2>Spraying System Modeling</h2>
            <p>
              Below a full theoretical analysis of the spraying system was conducted to ensure effective spraying and gel application in a wildfire context.  
              While the spraying system was fully examinated, physical implementation was deferred due to project timeline constraints. The detailed CAD models and simulation results provide a solid foundation for future integration and testing phases.
            </p>

            <div 
              className="pdf-container interactive-link" 

              style={{ 
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
            >
           
                <PDFLink
                  url="https://static.igem.wiki/teams/5590/assets-drone/igem-spraying-syst.pdf"
                  title="Spraying System Analysis"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/assets-drone/igem-spraying-syst.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/assets-drone/igem-spraying-syst.pdf')}

              />
            </div>
          </div>

          <div className="proof-block" id="simulation">
            <h2>Simulation</h2>
            <p>
              We initially attempted to use <a href="https://en.wikipedia.org/wiki/Gazebo_(software)" className="interactive-link" target="_blank" rel="noopener noreferrer">Gazebo</a>, a widely used open-source robotics simulator that offers realistic 3D environments, physics engines, and sensor modeling. Despite its popularity, we ran into compatibility and stability challenges on macOS after several weeks of effort.
            </p>
            <p>
              Consequently, we decided to shift to Isaac Sim augmented by <a href="https://pegasussimulator.github.io/PegasusSimulator/" className="interactive-link" target="_blank" rel="noopener noreferrer">Pegasus Simulator</a>, which is built on top of Isaac Sim to support multirotor dynamics, PX4 integration, and ROS2 interfaces. Pegasus offers photo-realistic rendering, real-time control prototyping, and modular APIs for custom sensors and vehicles. Which means that the simulated drone would behave very closely to the real one.
            </p>
            <p>
              Learn more about Pegasus Simulator: <a href="https://ieeexplore.ieee.org/document/10556959" className="interactive-link" target="_blank" rel="noopener noreferrer"> Paper</a> | <a href="https://github.com/PegasusSimulator/PegasusSimulator" className="interactive-link" target="_blank" rel="noopener noreferrer">GitHub repository</a>
            </p>
            <p>
              With Isaac and Pegasus, we used the simulator to test our stereo vision pipeline (foundationstereo), and had plans to implement our higher-level algorithms (SLAM, routing, fire detection, etc.) directly in the simulated environment.
            </p>
            <p>
              Because of time constraints, we did not fully integrate all functionality into Isaac Sim, but this was always our target simulation platform due to its fidelity, GPU support, and flexibility for aerial systems.
            </p>

            <figure className="image-figure image-figure--large image-figure--center">
              <img className="projectdescrip-img image-img" src="https://static.igem.wiki/teams/5590/assets-drone/screenshot-2025-10-06-at-19-56-19.webp" alt="Simulation environment" />
              <figcaption className="image-caption"><strong>Figure 1:</strong> Simulation environment in Isaac Sim with drone model.</figcaption>
            </figure>
          </div>

          <div className="proof-block" id="future">
            <h2>Future Directions & Conclusion</h2>
            <p>
              The comprehensive modeling and simulation approach enabled rapid design iteration and optimization. Future developments include advanced materials simulation, multi-physics coupling analysis, and integration with AI-driven design optimization tools for next-generation drone platforms.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ModelingSection;