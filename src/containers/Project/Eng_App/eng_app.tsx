import React, { useEffect, useMemo, useState } from "react";
import "../Project_description/project_description.css";
import "../Proofofconcept/proofofconcept.css";
import "./eng_app.css";
import "../../../components/Sidebar/sidebar.css";
import "../../../components/ImageCaption/imageCaption.css";
import PageHead from "../../../components/Head/PageHead";
import ReferencesDropdown from "../../Homepage/References/references";
import Citation from "../../../components/References/Citation";
import { Reference } from "../../../components/References/ReferenceList";
import { Link } from "react-router-dom";

interface PDFLinkProps {
  url: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
}

const PDFLink: React.FC<PDFLinkProps> = ({ url, title, isOpen, onToggle }) => (
  <>
    <button 
      onClick={onToggle}
      className="pdf-toggle-button"
      aria-pressed={isOpen}
      style={{ 
        display: 'flex',
        alignItems: 'center',
        padding: '0.8rem 1rem',
        color: 'var(--color-whitish)',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        borderLeft: '2px solid var(--color-dark-orange)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'left'
      }}
    >
      {/* Orange dot */}
      <div style={{ 
        minWidth: '6px', 
        height: '6px', 
        backgroundColor: 'var(--color-dark-orange)', 
        borderRadius: '50%', 
        marginRight: '1rem',
        flexShrink: 0
      }}></div>

      {/* Title text */}
      <span className="pdf-title" style={{ fontSize: '1.125rem', fontWeight: '400' }}>
        {title}
      </span>

      {/* Chevron */}
      <span
        aria-hidden="true"
        className="book-chevron"
        style={{ marginLeft: 'auto', opacity: 0.85 }}
      >
        ▸
      </span>
    </button>

    {isOpen && (
      <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
        <iframe 
          src={url}
          width="100%"
          height="600px"
          style={{ border: '1px solid #ccc', borderRadius: '8px' }}
          title={`${title} PDF`}
        />
      </div>
    )}
  </>
);

const EngApp: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openPdf, setOpenPdf] = useState<string | null>(null);

  const togglePdf = (pdfUrl: string) => {
    setOpenPdf(openPdf === pdfUrl ? null : pdfUrl);
  };

  const escImages = useMemo(
    () => [
      {
        src: "https://static.igem.wiki/teams/5590/assets-drone/eng/5.webp",
        alt: "TBS Lucid 6S 4-in-1 ESC",
        caption: "Figure 5a: Programming the ESC",
      },
      {
        src: "https://static.igem.wiki/teams/5590/assets-drone/eng/6.webp",
        alt: "TBS Lucid 6S 4-in-1 ESC",
        caption: "Figure 5b: TBS Lucid 6S 4-in-1 ESC (70A per channel)",
      },
      {
        src: "https://static.igem.wiki/teams/5590/assets-drone/eng/7.webp",
        alt: "TBS Lucid 6S 4-in-1 ESC",
        caption: "Figure 5c: BetaFlight Programmer",
      },
      {
        src: "https://static.igem.wiki/teams/5590/assets-drone/eng/8.webp",
        alt: "TBS Lucid 6S 4-in-1 ESC",
        caption: "Figure 5d: Installed ESCs",
      },
      {
        src: "https://static.igem.wiki/teams/5590/assets-drone/eng/9.webp",
        alt: "ESC mounting, capacitor additions, and connector evolution",
        caption: "Figure 6: Arduino used to flash the ESCs originally",
      },
    ],
    []
  );

  const [escCarouselIndex, setEscCarouselIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const blocks = Array.from(document.querySelectorAll<HTMLElement>(".proof-block"));

    if (prefersReducedMotion) {
      blocks.forEach((block) => block.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            return;
          }

          entry.target.classList.remove("is-visible");
        });
      },
      {
        threshold: 0.14,
        rootMargin: "-6% 0px -12% 0px",
      }
    );

    blocks.forEach((block, index) => {
      block.classList.add("is-animating");
      block.style.setProperty("--reveal-delay", `${(index % 4) * 35}ms`);
      observer.observe(block);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="proof-container">
      <PageHead
        title="Engineering & Application"
        subtitle="Comprehensive development journey from concept to deployment"
        backgroundUrl="https://static.igem.wiki/teams/5590/assets-drone/screenshot-2025-09-18-at-16-18-20.webp"
        grayscale={true}  
      />

      <div className="hardware-layout">
        <aside className="hardware-sidebar">
  <div className="sidebar-title">Table of Contents</div>
  <nav>
    <ul>
      <li>
        <a className="sidebar-button" href="#drone-section">Drone Development</a>
        <ul className="sidebar-sublist">
          <li>
            <a className="sidebar-subitem" href="#drone-specs">
              Technical Specifications
            </a>
          </li>
          <li>
            <a className="sidebar-subitem" href="#drone-timeline">
              Development Timeline
            </a>
          </li>
          <li>
            <a className="sidebar-subitem" href="#drone-hardware">
              Hardware Iterations
            </a>
          </li>
          <li>
            <a className="sidebar-subitem" href="#drone-software">
              Software Development
            </a>
          </li>
          <li>
            <a className="sidebar-subitem" href="#drone-results">
              Results
            </a>
          </li>
          <li>
            <a className="sidebar-subitem" href="#drone-lessons">
              Lessons Learned
            </a>
          </li>
          <li>
            <a className="sidebar-subitem" href="#drone-conclusion">
              Conclusion
            </a>
          </li>
          <li>
            <a className="sidebar-subitem" href="#drone-additional">
              Additional Information
            </a>
          </li>
        </ul>
      </li>

      <li>
        <a className="sidebar-button" href="#wetlab-section">Wetlab Development</a>
        <ul className="sidebar-sublist">
          <li>
            <a className="sidebar-subitem" href="#wetlab-design">
              Experimental Design
            </a>
          </li>
          <li>
            <a className="sidebar-subitem" href="#wetlab-protein-expression">
              Protein Expression &amp; Detection
            </a>
          </li>
          <li>
            <a className="sidebar-subitem" href="#wetlab-silicatein">
              Surface Display of Silicatein &amp; CBD
            </a>
          </li>
          <li>
            <a className="sidebar-subitem" href="#hydrogel-assembly">
              Hydrogel Assembly
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
          </aside>

        <section className="hardware-main proof-section">
          <section className="hardware-content">
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          The first section of this page outlines the <a href="#drone-section" className="interactive-link">Drone engineering cycles</a>, while the second section focuses on the <a href="#wetlab-section" className="interactive-link">Wet Lab engineering cycles</a>.
        </p>
      </section>
          {/* Drone Development Section */}

            <h1 style={{ color: 'var(--color-dark-orange)', fontSize: '2.5rem', marginBottom: '2rem' }} id="drone-section">Drone Development</h1>


          <div className="proof-block">
            <p>
              This project set out to design, prototype, and partially validate a UAV platform for early wildfire detection and localized fire suppression. The system was conceived as a hexarotor aerial vehicle, powered by a 16,000 mAh 6S LiPo battery, with an integrated sensor suite consisting of stereo RGB cameras (Raspberry Pi Camera Module v3) and a thermal infrared camera (FLIR Lepton 3.5). The compute backbone combined a Jetson Orin Nano for AI and mapping tasks with a Raspberry Pi 5 serving as a sensor interface hub.
            </p>
            <p>
              The UAV was expected to achieve three primary objectives:
            </p>
            <div style={{ marginLeft: '2rem' }}>
              <ul>
                <li><strong>Detect wildfires in real time</strong> using thermal and RGB imagery fused with a yologx deep learning model.</li>
                <li><strong>Navigate autonomously</strong> using stereo vision, GPS, and SLAM techniques, while avoiding obstacles.</li>
                <li><strong>Perform localized fire suppression spraying</strong> as an active intervention capability.</li>
              </ul>
            </div>
            <p>
              The project was carried out under a strict time constraint (July-September), with the expectation to present results at the iGEM competition. While not all objectives were achieved, the engineering journey highlighted the complexity of integrating heterogeneous systems, the importance of resilience in the face of hardware and logistics failures, and the value of iterative prototyping in converging toward viable solutions.
            </p>
          </div>

          <div className="proof-block" id="drone-specs">
            <h2>Technical Specifications</h2>
            <div className="proof-plain-card">
              <ul>
                <li><strong>Frame:</strong> Custom hexarotor UAV design</li>
                <li><strong>Battery:</strong> 16,000 mAh 6S LiPo, optimized for endurance</li>
                <li><strong>Propulsion:</strong> Six brushless DC motors with 6S propellers</li>
                <li><strong>ESCs:</strong> Final solution: TBS Lucid 4-in-1 ESCs, 70A per motor - designed for FPV racing drones, adapted for high-load operation</li>
                <li><strong>Flight Controller:</strong> PX4 (Pixhawk 6C)</li>
                <li><strong>Radio Transmitter:</strong> FlySky i6S (failed due to touchscreen defect), borrowed a replacement</li>
                <li><strong>Cameras:</strong> Stereo RGB (Pi v3 left + right), FLIR Lepton 3.5 thermal infrared</li>
                <li><strong>Compute Modules:</strong> Jetson Orin Nano (AI + ROS2 backbone), Raspberry Pi 5 (sensor IO hub)</li>
                <li><strong>Software Environment:</strong> ROS2 Humble, Gazebo for simulation (via Docker), Yologx fire detection model trained on flame datasets, FoundationStereo for stereo depth</li>
              </ul>
            </div>
          </div>

          <div className="proof-block" id="drone-timeline">
            <h2>Development Timeline</h2>
            <p>
              The project progressed through multiple cycles, each characterized by new problems and corresponding engineering responses. These will be detailed further below.
            </p>
            <div style={{ marginLeft: '2rem' }}>
              <ul>
                <li><strong>July:</strong> Sourcing of missing and spare parts, initial UAV frame assembly. First ESCs burned during test runs. ROS2 and Gazebo simulation encountered macOS compatibility issues, resolved with Dockerized environments. Discovered our FlySky i6S transmitter's defect.</li>
                <li><strong>August:</strong> Attempted to program new ESCs without Betaflight passthrough, resorting to Arduino-based firmware flashing hacks. The Pixhawk 4 PX4 flight controller also burned during integration. Parallel efforts began in designing battery mounts, camera holders, and ESC brackets.</li>
                <li><strong>September:</strong> Faced significant Jetson Orin Nano limitations. Kernel rebuilds failed to stabilize camera drivers (Pi v3, Lepton). Approximately 1.5 weeks were lost debugging Jetson IO. Introduced Raspberry Pi 5 as a sensor hub, forwarding streams to Jetson via Ethernet UDP. This workaround successfully stabilized data flows.</li>
              </ul>
            </div>
          </div>

          <div className="proof-block" id="drone-hardware">
            <h2>Hardware Iterations and Improvements</h2>
            <p>
              Hardware development was a continuous cycle of design, testing, failure, and refinement. Each subsystem (battery, cameras, ESCs, mounts) underwent multiple iterations to balance strength, weight, vibration resistance, and expandability.
            </p>

            <h3>4.1 Battery Mounts</h3>
            <p>
              Early battery mounts failed under vibration and stress, leading to a redesign that emphasized lightweight but structurally reinforced geometry. Different infill patterns were tested during 3D printing (grid, honeycomb, gyroid), optimizing the balance between strength and weight. Rubber padding was added at contact points to dampen vibration transmission to the battery pack and minimize resonance effects. Multiple mounting orientations were trialed to optimize center-of-gravity stability during flight.
            </p>

            <h3>4.2 Camera Holders</h3>
            <p>
              Here are some of the iterations with various mounting strategies and vibration damping solutions:
            </p>
            
            <div className="image-row">
              <figure className="image-figure image-figure--medium image-figure--center">
                <img className="image-img" src="https://static.igem.wiki/teams/5590/assets-drone/eng/1.webp" alt="First Iteration of the Camera Holder" />
                <figcaption className="image-caption"><strong>Figure 1:</strong> First Iteration of the Camera Holder</figcaption>
              </figure>
              
              <figure className="image-figure image-figure--medium image-figure--center">
                <img className="image-img" src="https://static.igem.wiki/teams/5590/assets-drone/eng/2.webp" alt="Second Iteration of the Camera Holder" />
                <figcaption className="image-caption"><strong>Figure 2:</strong> Second Iteration of the Camera Holder</figcaption>
              </figure>
            </div>

            <h3>4.3 ESC Integration</h3>
            <p>
              The electronic speed controller (ESC) subsystem was one of the most problematic and time-consuming aspects of the build. Initially, we equipped the UAV with individual 40A ESCs, the type typically marketed for multirotor UAVs. On paper, these units offered adequate current handling and straightforward integration, but in practice they proved to be of very poor quality. Several of them failed catastrophically on first plug-in, before any load was applied, rendering the setup unusable.
            </p>
            <p>
              To replace them, we attempted to source identical 40A ESCs abroad. However, this effort failed repeatedly: three separate orders were placed, and each time the wrong products were delivered. With long shipping times and no guarantee of success, pursuing this route became impractical. Buying a full new set of six matching ESCs (plus spares) locally was also investigated, but the cost was prohibitively high given our budget constraints.
            </p>
            <p>
              As a result, the team pivoted to an alternative approach that balanced quality, cost, and availability. The chosen replacement was the TBS Lucid 6S 4-in-1 ESC (70A per channel), originally designed for FPV racing drones. Unlike the analog PWM-driven 40A units, the TBS Lucids operate using the DShot600 digital protocol, which offers multiple advantages:
            </p>
            <div style={{ marginLeft: '2rem' }}>
              <ul>
                <li><strong>Noise immunity:</strong> Digital signaling avoids timing drift and reduces the risk of misreads under electrical interference.</li>
                <li><strong>Deterministic response:</strong> Each command is precisely encoded, ensuring consistent throttle control.</li>
                <li><strong>Bidirectional capability:</strong> Provides telemetry feedback (motor RPM, current draw, ESC temperature), enabling better diagnostics and smarter flight control.</li>
                <li><strong>High update rate:</strong> At 600 kbit/s, DShot600 supports smoother and faster throttle updates than legacy PWM.</li>
              </ul>
            </div>
            <p>
              Because the Lucids were designed for smaller FPV drones with high-KV motors and lightweight props, they required modifications to operate with our 15-inch UAV propellers. Large external capacitors were soldered to the ESC power rails to absorb back-EMF spikes generated by the heavier props, protecting the circuitry. In addition, the 4-in-1 design meant each unit could independently drive four motors. By installing two Lucid ESCs for our six-motor hexarotor, we not only covered all channels but also gained two spare channels built in, improving redundancy in case of future motor or channel failures.
            </p>
            <p>
              Connector compatibility also presented challenges. During prototyping, we resorted to microsoldering wires directly to the pads to allow firmware flashing via Arduino, but this approach was unreliable. To solve the problem, we later purchased the correct connectors from AliExpress along with a cheap Betaflight controller, which served as a dedicated passthrough for programming the ESCs. This provided a stable and repeatable way to configure the TBS Lucid units and eliminated the risks of fragile soldering workarounds. For the final build, the correct connectors and Betaflight passthrough setup enabled a clean, reliable, and maintainable integration.
            </p>
            
            <div className="image-row">
              <figure className="image-figure image-figure--medium image-figure--center">
                <img className="image-img" src="https://static.igem.wiki/teams/5590/assets-drone/eng/4.webp" alt="Individual 40A ESCs, wrong orders" />
                <figcaption className="image-caption"><strong>Figure 3:</strong> Individual 40A ESCs, wrong orders</figcaption>
              </figure>
              
              <figure className="image-figure image-figure--medium image-figure--center">
                <img className="image-img" src="https://static.igem.wiki/teams/5590/assets-drone/eng/3.webp" alt="Individual 40A ESCs" />
                <figcaption className="image-caption"><strong>Figure 4:</strong> Individual 40A ESCs</figcaption>
              </figure>
            </div>

            <div className="carousel-container-new">
              <div className="carousel-wrapper-new">
                <button
                  className="carousel-btn-new prev"
                  onClick={() => setEscCarouselIndex((prev) => Math.max(prev - 1, 0))}
                  disabled={escCarouselIndex === 0}
                  aria-label="Previous ESC image"
                >
                  ‹
                </button>

                <div className="carousel-track-new">
                  {escImages.map((image, index) => {
                    const isActive = index === escCarouselIndex;
                    const isPrev = index === escCarouselIndex - 1;
                    const isNext = index === escCarouselIndex + 1;

                    if (!isActive && !isPrev && !isNext) {
                      return null;
                    }

                    return (
                      <div
                        key={index}
                        className={`carousel-slide-new ${isActive ? 'active' : ''}`}
                        onClick={() => !isActive && setEscCarouselIndex(index)}
                      >
                        <img className="image-img" src={image.src} alt={image.alt} />
                        <p className="poster-caption-new">{image.caption}</p>
                      </div>
                    );
                  })}
                </div>

                <button
                  className="carousel-btn-new next"
                  onClick={() => setEscCarouselIndex((prev) => Math.min(prev + 1, escImages.length - 1))}
                  disabled={escCarouselIndex === escImages.length - 1}
                  aria-label="Next ESC image"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="carousel-indicators">
              {escImages.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === escCarouselIndex ? 'active' : ''}`}
                  onClick={() => setEscCarouselIndex(index)}
                  aria-label={`Go to ESC image ${index + 1}`}
                />
              ))}
            </div>

            <p>
              Custom 3D-printed mounts were developed to secure the ESCs, balancing cooling airflow with mechanical vibration isolation.
            </p>
            <p>
              This transition, from unreliable, poor-quality 40A ESCs (compounded by three failed sourcing attempts) to robust, digital-protocol FPV ESCs, was driven by a mix of supply-chain realities, cost considerations, and the need for higher system reliability. The final configuration offered not only better responsiveness and telemetry, but also built-in redundancy through the dual 4-in-1 setup.
            </p>

           

            <h3>4.4 Material and Printing Strategy</h3>
            <p>
              Across all mounts and holders, material selection and print strategy became a critical engineering axis. PLA was used for all structural components, with layer orientation carefully controlled to align with primary stress directions. Infill density was tuned component by component, balancing weight reduction with the need for durability under vibration and impact. To further attenuate high-frequency oscillations, rubber strips, rings, and dampers were integrated into mounts and bases, ensuring sensor stability and prolonging hardware life.
            </p>
            <p>
              In addition to these modular mounts, the team also developed a dedicated payload mounting mechanism to support future system expansions, such as the integration of a spraying module. This structure consisted of carbon fiber rods firmly attached to the main chassis, chosen for their high stiffness-to-weight ratio. The rods were isolated using rubber inserts at their junction points, reducing the transmission of structural vibrations from the motors and arms to the payload. This approach allowed the UAV to maintain stability even when carrying heavier loads, while also making the system expandable and modular for new mission profiles.
            </p>
            <p>
              This holistic hardware strategy ensured both mechanical resilience in flight and flexibility for scaling the platform beyond wildfire detection to active fire suppression tasks.
            </p>

            <div className="image-row">
              <figure className="image-figure image-figure--medium image-figure--center">
                <img className="image-img" src="https://static.igem.wiki/teams/5590/assets-drone/eng/10.webp" alt="ESC Holder" />
                <figcaption className="image-caption"><strong>Figure 7:</strong> ESC Mount</figcaption>
              </figure>
              
              <figure className="image-figure image-figure--medium image-figure--center">
                <img className="image-img" src="https://static.igem.wiki/teams/5590/assets-drone/eng/11.webp" alt="Integration of built parts" />
                <figcaption className="image-caption"><strong>Figure 8:</strong> Taking Measurements</figcaption>
              </figure>
            </div>
          </div>

          <div className="proof-block" id="drone-software">
            <h2>Software</h2>
            <p>
              While the mechanical systems progressed through tangible iterations, software integration revealed deeper limitations that consumed a significant share of the project timeline.
            </p>
            
            <h3>Systems Integration</h3>
            <p>
              <strong>Jetson Orin Nano Issues:</strong> Despite its high theoretical AI performance, the Jetson Orin Nano proved poorly supported for sensor I/O. Even after multiple custom kernel rebuilds, the Pi v3 stereo cameras and the FLIR Lepton 3.5 thermal module performed inconsistently. This lack of stability consumed over a week of focused effort, forcing the team to search for alternatives, and pushing back the whole timeline for software integration.
            </p>
            <p>
              <strong>Raspberry Pi 5 Workaround:</strong> To overcome these bottlenecks, the team integrated a Raspberry Pi 5 as a dedicated sensor interface hub. The Pi handled the camera drivers natively and forwarded RGB + thermal feeds to the Jetson via Ethernet using UDP streaming (we first tried native ROS2). This modular division of labor effectively reduced the driver dependency on the Jetson, stabilized the data pipeline, and preserved the Jetson's resources for higher-level AI and ROS2 tasks.
            </p>

            <div className="image-row">
              <figure className="image-figure image-figure--medium image-figure--center">
                <img className="image-img" src="https://static.igem.wiki/teams/5590/assets-drone/eng/12.webp" alt="IR Camera Feed" />
                <figcaption className="image-caption"><strong>Figure 9:</strong> IR Camera Feed</figcaption>
              </figure>
              
              <figure className="image-figure image-figure--medium image-figure--center">
                <img className="image-img" src="https://static.igem.wiki/teams/5590/assets-drone/eng/13.webp" alt="Set Up of the IR Camera Feed" />
                <figcaption className="image-caption"><strong>Figure 10:</strong> Set Up of the IR Camera Feed</figcaption>
              </figure>
            </div>

            <h3>Simulation</h3>
            <p>
              <strong>ROS2/Gazebo Simulation:</strong> At the start of the project, the team planned to use ROS2 with Gazebo as the primary simulation environment. Gazebo offered a direct and familiar way to validate ROS2 nodes and test UAV control logic. However, development was complicated by the lack of native support for ROS2 and Gazebo on macOS, the primary platform for several team members. The workaround, running everything in Docker, proved functional but added significant overhead and reduced runtime stability, making iteration slow and error-prone.
            </p>
            <p>
              <strong>Transition to Isaac Sim and Pegasus:</strong> Given these challenges, and motivated by the need for more advanced capabilities, the team decided to pivot toward NVIDIA Isaac Simulator in combination with the Pegasus Project.
            </p>
            <p>
              Isaac Sim is a high-fidelity robotics simulation platform built on Omniverse, capable of rendering photorealistic sensor data (RGB, depth, LiDAR, thermal), simulating complex environments, and integrating directly with ROS2. It is widely used in academia and industry for digital twin development, AI validation, and robotics prototyping.
            </p>

            <figure className="image-figure image-figure--large image-figure--center">
              <img className="image-img" src="https://static.igem.wiki/teams/5590/assets-drone/eng/14.webp" alt="Isaac Sim Simulation Example" />
              <figcaption className="image-caption"><strong>Figure 11:</strong> Isaac Sim Simulation Example</figcaption>
            </figure>

            <p>
              The Pegasus Project extends Isaac Sim specifically for aerial robotics. It introduces realistic UAV dynamics, flight controller emulation (software-in-the-loop, SITL), and mission-level simulation tools. Pegasus bridges the gap between pure software-in-the-loop testing and hardware-in-the-loop validation, making it possible to run SLAM, path planning, and obstacle avoidance algorithms in realistic environments.
            </p>
            <p>
              <strong>Team Efforts and Goals:</strong> Building on these tools, the team invested over three weeks of focused work in Isaac Sim + Pegasus. The primary goal was to import the custom UAV 3D model into the simulator and use it to conduct virtual wildfire detection and firefighting missions. This included plans to test the yologx fire detection pipeline, stereo vision, SLAM-based navigation, and future spraying strategies in a fully digital environment.
            </p>
            <p>
              Beyond validation, this effort was framed as part of a research-oriented exploration into digital twin–based UAV development, reflecting cutting-edge practices in robotics research.
            </p>
            <p>
              <strong>Outcomes:</strong> Despite extensive coding, troubleshooting, and integration attempts, the team was ultimately unable to achieve a fully functional simulation with the custom UAV model within the available timeframe. While this represented a missed milestone, it highlighted the complexity of building high-fidelity custom UAV simulations and reinforced the understanding that simulation fidelity and digital twin integration remain active research challenges in UAV engineering.
            </p>
          </div>

          <div className="proof-block" id="drone-results">
            <h2>Results</h2>
            <p>
              The project ultimately reached a stage of partial success. Our initial vision was ambitious: a UAV capable not only of flight but also of autonomous wildfire detection, mapping, and suppression through a fully integrated hardware–software stack. While not all of these goals were achieved, the progress made demonstrates both the technical viability of the platform and the dedication of the team, who remained passionate about the project despite numerous setbacks.
            </p>
            <p>
              By the end of September, the UAV was successfully brought to flight readiness, and we achieved stable flight demonstrations, which were documented on video. This was a major milestone, especially considering the burned components, failed shipments, and repeated integration challenges faced throughout the summer. The airframe, propulsion, and mounting systems proved robust in practice, validating months of iterative design.
            </p>
            <p>
              However, the higher-level software features, including <span  >SLAM</span>-based navigation, autonomous obstacle avoidance, and real-time fire detection, remained as separate exploratory sub-projects. Initial efforts were made to prototype each of them, but they were not integrated into the simulation environment and never assembled into the physical UAV within the available timeframe.
            </p>
           
            <p>
              Key outcomes can be summarized as follows:
            </p>
            <div style={{ marginLeft: '2rem' }}>
              <ul>
                <li>Successful flight achieved with the final hexarotor build.</li>
                <li>A stable sensor pipeline (Raspberry Pi 5 → Jetson UDP → ROS2) established for RGB and thermal streams.</li>
                <li>Hardware subsystems (battery, camera mounts, ESC integration) matured into reliable and repeatable designs after several iterations.</li>
                <li>A functional ROS2 environment with preliminary SLAM, obstacle avoidance, and fire detection nodes validated in simulation.</li>
                <li>Enhanced mechanical robustness, achieved through optimized infill strategies, damping integration, and modular mounts designed for expandability.</li>
              </ul>
            </div>
            <p>
              While the UAV did not yet embody the complete wildfire detection and suppression system we had envisioned, the results represent a strong proof of feasibility and a platform upon which the next phase of development can be built. The experience underlined the difficulty of balancing hardware failures, supply-chain delays, advanced software integration, and limited manpower within a constrained timeline, but it also showcased the resilience and problem-solving mindset of the team.
            </p>
          </div>

          <div className="proof-block" id="drone-lessons">
            <h2>Lessons Learned</h2>
            <div style={{ marginLeft: '2rem' }}>
              <ul>
                <li><strong>Supplier Reliability:</strong> Multiple failed shipments and defective components consumed critical time. For future cycles, sourcing from verified suppliers is essential.</li>
                <li><strong>Hardware Redundancy:</strong> Backup ESCs, controllers, and transmitters should be stockpiled to mitigate failures.</li>
                <li><strong>Driver Maturity:</strong> Cutting-edge compute modules (Jetson) lack robust peripheral support. Early benchmarking could have redirected focus to more stable alternatives.</li>
                <li><strong>Iterative Hardware Design:</strong> The process highlighted the value of iterative prototyping with 3D printing. Exploring infill patterns, material properties, and vibration damping systematically improved component quality.</li>
                <li><strong>Adaptability:</strong> The Raspberry Pi 5 sensor hub and custom ESC passthrough demonstrated how creative engineering can salvage progress from failure.</li>
              </ul>
            </div>
          </div>

          <div className="proof-block" id="drone-conclusion">
            <h2>Conclusion</h2>
            <p>
              The UAV project stands as a testament to ambition under constraint. What began as a side effort within a biology-focused iGEM team grew into a demanding engineering challenge that stretched the limits of time, manpower, and resources. While the platform is not yet the autonomous wildfire-fighting system we first envisioned, it has laid the groundwork for one: a flying prototype with a proven airframe, expandable mounts, and a working sensor backbone.
            </p>
            <p>
              Equally important, the project generated practical insights into sourcing, integration, and simulation that future iterations can build on. The experience showed that even partial successes carry significant value when they reveal what works, what fails, and where the next opportunities lie.
            </p>
            <p>
              This UAV is therefore not an endpoint, but the foundation for continued development, one that could, with further refinement, evolve into a reliable tool for wildfire detection and targeted suppression. Above all, it reflects the persistence and adaptability of a small team willing to take on a problem much larger than themselves.
            </p>
          </div>

          <div className="proof-block" id="drone-additional">
            <h2>Additional Information</h2>
            
          <div className="interactive-link">
            <PDFLink 
                url="https://static.igem.wiki/teams/5590/assets-drone/decide-what-components-are-needed-222e7354ca7580ad8caec21f9b6f6442.pdf"
                title="Initial parts selection"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/assets-drone/decide-what-components-are-needed-222e7354ca7580ad8caec21f9b6f6442.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/assets-drone/decide-what-components-are-needed-222e7354ca7580ad8caec21f9b6f6442.pdf')}
            />
          </div>
            
          </div>

          {/* Wetlab Development Section */}
          <div className="proof-block" id="wetlab-section">
            <h1 style={{ color: 'var(--color-dark-orange)', fontSize: '2.5rem', marginBottom: '2rem', marginTop: '4rem' }}>Wetlab Development</h1>
          </div>

          <div className="proof-block" id="wetlab-intro">
            
            <p>
              The wetlab component of our project focuses on the biological production and optimization of the Pyronix hydrogel components. Our approach leverages synthetic biology to engineer microorganisms capable of producing the key polymers and proteins required for effective fire-retardant hydrogel formation.
            </p>
           
          </div>


          <div className="proof-block" id="wetlab-design">
            <h2>Experimental Design</h2>
            <p>
                A concise framework to move from molecular expression to material testing, prioritizing clear controls and quantitative readouts for fast iteration.            </p>
            <div style={{ marginLeft: '2rem' }}>
              <ul>
                 <li><strong>Expression &amp; detection:</strong> Western blots with appropriate controls and optimized sample prep.</li>
                <li><strong>Surface display &amp; microscopy:</strong> Compare INP vs OmpA and quantify localization with automated image analysis.</li>
                <li><strong>Hydrogel assembly:</strong> Screen one‑pot vs two‑gel approaches using synthetic stand‑ins before integrating biosynthesized components.</li>
                <li><strong>Scale &amp; testing:</strong> Scale promising formulations for rheology and fire tests, recording process parameters for reproducibility.</li>

                
              </ul>
            </div>
          </div>

          <div className="proof-block" id="wetlab-protein-expression">
            <h2>Protein Expression &amp; Detection</h2>
            <h3>Design</h3>
            <p>
              In this cycle, our objective was to confirm the expression and detectability of our fusion proteins using Western blot. We began by testing whether our bacterial strains expressed CBD‑SRSF1‑His and SRPK1‑Strep, the two components of our fire-retardant protein module. SRSF1 is the core retardant protein that will ultimately be embedded in the hydrogel (it is fused with a cellulose binding domain (CBD) and a His tag), while SRPK1 is the kinase that phosphorylates it (tagged by Streptomycin (Strep)). This post-translation modification enhances the fire-resistant properties of SRSF1.
            </p>
            <p>The expected molecular weights (MW) of our proteins are the following :</p>
            <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
              <li><b>CBD-SRSF1-His : 41.3 kDa</b></li>
              <li><b>SRPK1-Strep : 75.6 kDa</b></li>
            </ul>
            <h3>Build</h3>
            <p>
              We used Western Blotting to determine expression. Since we would use Western blot to detect our other proteins in both bacteria and yeasts in following experiments, we aimed to optimize our Western blot procedure in terms of:
            </p>
            <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Sample preparation</li>
              <li>Tag detection</li>
              <li>Controls</li>
              <li>Protein ladder</li>
            </ul>
            <p>
              Through multiple iterations, we refined each of these steps to improve the reproducibility and interpretability of our results.
            </p>
            <h3>Test</h3>
            <p>
              In our first Western blot attempt, we tested a range of dilutions to identify the optimal signal-to-noise ratio. Our goal was to detect clear bands at the expected molecular weights without overexposing the membrane during chemiluminescent detection. Given the appropriate signal observed in the undiluted samples when imaging the membrane, we decided to maintain this concentration for future blots.
            </p>
            <p>
              We observed a clear band for SRSF1 in the sample expressing both proteins, corresponding to the expected MW of 41.3 kDa. However, no signal was detected for SRPK1, and SRSF1 was absent in the single-protein strain. This suggested issues during sample loading or protein transfer. In fact, the process of loading the samples presented difficulties due to the presence of DNA filaments.
            </p>
            <p>
              Since SRPK1 was not detected in any of the samples, we suspected suboptimal antibody performance, so we increased the Strep-HRP conjugate concentration for following blots. 
              In addition, the protein ladder (M) exhibited anomalous behavior, prompting us to include a second marker in the second attempt.
            </p>
            <figure style={{ maxWidth: 800, margin: '2rem auto' }}>
              <img
                src="https://static.igem.wiki/teams/5590/wetlab/results/slide1.webp"
                alt="First Western blot"
                style={{ width: '100%', borderRadius: 8 }}
              />
              <figcaption className="caption">
                  <strong>Figure 1 :</strong> First Western blot with serial dilutions of double- and single-transfected lysates. M1 <Citation id="6" /> indicates the protein ladder, with corresponding molecular weights alongside. The expected molecular weights are CBD-SRSF1-His: 41.3 kDa and SRPK1-Strep: 75.6 kDa.
              </figcaption>
            </figure>
            <p>
              For our second attempt, we first sought to verify sample quality. To this end, we performed a Coomassie gel stain on a duplicate gel run in parallel with the blotting gel. The stain showed uniform protein loading and no unexpected anomalies, thereby ruling out problems with sample preparation or loading.
            </p>
            <figure style={{ maxWidth: 800, margin: '2rem auto' }}>
              <img
                src="https://static.igem.wiki/teams/5590/wetlab/results/slide13.webp"
                alt="Coomassie stain"
                style={{ width: '100%', borderRadius: 8 }}
              />
              <figcaption className="caption"><strong>Figure 2 :</strong> Coomassie staining of the duplicate gel ran in parallel with the blotting gel. M1 <Citation id="7" /> and M2 <Citation id="8" /> are the protein ladders. The corresponding molecular weights are indicated alongside. The expected molecular weights are CBD-SRSF1-His: 41.3 kDa, SRPK1-Strep: 75.6 kDa, CLN9‑4: 22.8 kDa. CLN9-4 and ++ are positive controls for blotting.</figcaption>
            </figure>
          </div>
          <div className="proof-block">
          <p>
              We also included two positive controls: CLN9‑4, a His-tagged protein (MW 22.8 kDa) and a dual-tagged proteins (++) containing both His and Strep tags.
              After performing the Western blot, we observed strong and convincing bands for both SRSF1 (41.3 kDa) and SRPK1 (75.6 kDa) at their expected molecular weights across all tested samples. The controls performed as expected. However, the protein ladder appeared smeared, reducing the clarity of molecular weight estimation. Despite this, we confirmed the accuracy of our ladder (M iGEM), as it migrated similarly to the reference marker (M LPDI).
            </p>
          </div>
            <figure style={{ maxWidth: 800, margin: '2rem auto' }}>
              <img
                src="https://static.igem.wiki/teams/5590/wetlab/results/slide3.webp"
                alt="Second Western blot"
                style={{ width: '100%', borderRadius: 8 }}
              />
              <figcaption className="image-caption"><strong style={{color: 'var(--color-dark-orange)'}}>Figure 3 :</strong> Second Western blot with double- (1) and single-transfected (2 : SRSF1, 3 : SRPK1) lysates.  M1 <Citation id="12" /> and M2 <Citation id="13" /> are the protein ladders. The expected molecular weights are CBD-SRSF1-His (red): 41.3 kDa, SRPK1-Strep (green): 75.6 kDa, CLN9‑4 (blue): 22.8 kDa. CLN9-4 (His-tagged) and ++ (tagged with His and Strep) are positive controls. </figcaption>
            </figure>
           <div className="proof-block"> 
            <p>
              In the third attempt, we repeated the blot to improve visual clarity. To achieve this, we treated the lysates with Benzonase to digest DNA, thereby facilitating sample loading and migration. The results were consistent with the previous blot, again confirming correct detection of both fusion proteins. This time, the blot appeared visually cleaner, with well-defined ladders, demonstrating that our optimizations were effective.
            </p>
            </div>
            <figure style={{ maxWidth: 800, margin: '2rem auto' }}>
              <img
                src="https://static.igem.wiki/teams/5590/wetlab/results/slide4.webp"
                alt="Third Western blot"
                style={{ width: '100%', borderRadius: 8 }}
              />
              <figcaption className="image-caption"><strong style={{color: 'var(--color-dark-orange)'}}>Figure 4 :</strong> Third Western blot with double- (1) and single-transfected (2 : SRSF1, 3 : SRPK1) lysates. M1 <Citation id="12" /> and M2 <Citation id="13" /> are the protein ladders. The expected molecular weights are CBD-SRSF1-His (red): 41.3 kDa, SRPK1-Strep (green): 75.6 kDa, CLN9-4 (blue): 22.8 kDa. CLN9-4 (His-tagged) and ++ (purple, tagged with His and Strep) are positive controls.</figcaption>
            </figure>

          <div className="proof-block">
            <h4>Learn</h4>
            <p>Through this cycle, we established a reliable workflow for detecting our fusion proteins via Western blotting. We thus optimized the following parameters :</p>
            <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
              <li><b>Sample preparation</b><br/>DNA filaments in lysates can hinder both loading and migration. The inclusion of Benzonase effectively reduced this issue, resulting in cleaner and more interpretable blots.</li>
              <li><b>Antibody concentration</b><br/>Adjusting the Strep-HRP conjugate concentration allowed us to recover strong and specific detection.</li>
              <li><b>Controls</b><br/>Including both single-protein strains and tagged controls (His and dual-tagged proteins) was essential to confirm band specificity and rule out false negatives.</li>
              <li><b>Ladders and markers</b><br/>The smeared protein ladder initially complicated MW estimation, but running two markers in parallel provided a reliable reference point.</li>
            </ul>
            <p>
              Overall, we confirmed the successful expression of both CBD-SRSF1-His and SRPK1-Strep at their expected molecular weights and optimized our Western blot protocol for clarity, reproducibility, and robustness. These improvements laid the foundation for detecting our other fusion proteins in subsequent experiments.
            </p>
          </div>


          <div className="proof-block" id="wetlab-silicatein">
            <h2>Surface Display of Silicatein and CBD in <i>E. coli</i></h2>
            <p>
              Our project aimed to engineer <i>E. coli</i> cells capable of forming a silica coating on their surface to provide added fire resistance and combine it with other gel components. To achieve this, we designed two fusion proteins: silicatein, an enzyme known to catalyze silica formation, and a cellulose-binding domain (CBD) that allows attachment to cellulose. Both were fused to outer membrane display anchors, initially the Ice Nucleation Protein (INP) and later the outer membrane protein A (OmpA). Tags (HA and V5) were also included for efficient detection. We iteratively tested the constructs according to engineering cycle principles and improved our constructs across three rounds of design, building, testing, and learning.
            </p>
            <h3>Cycle 1 : Expression of INP-CBD and INP-Silicatein</h3>
            <h4>Design</h4>
      <p>
        The first objective was to verify the successful expression of both INP-fusion proteins in <i>E. coli</i>. We expected that INP-Silicatein-HA would catalyze silica formation, while INP-CBD-V5 would allow the cells to bind to cellulose.
        <br />
        <Link
          to="/parts#INP-Silicatein"
          onClick={() => {
            // safety: poll for the parts row element after navigation and scroll when available
            const id = 'INP-Silicatein';
            let attempts = 0;
            const maxAttempts = 40; // ~4s
            const timer = window.setInterval(() => {
              const el = document.getElementById(id);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                clearInterval(timer);
              } else if (++attempts >= maxAttempts) {
                clearInterval(timer);
              }
            }, 100);
          }}
          className="interactive-link"
        >
          INP-silicatein
        </Link>
      </p>
            <h4>Build</h4>
            <p>
              Both fusion genes were cloned under IPTG-inducible promoters and co-transformed into <i>E. coli</i> BL21(DE3). Control strains containing only one construct were also produced. The expected molecular weights were 40.9 kDa for INP-CBD and 46.5 kDa for INP-Silicatein.
            </p>
            <h4>Test</h4>
            <p style={{ marginBottom: "0.5rem" }}>
              Western blotting of bacterial lysates confirmed expression of both fusion proteins. In co-transformed samples, two distinct bands appeared between 40 kDa and 55 kDa, corresponding to the predicted sizes of INP-CBD and INP-Silicatein. Single-transformed controls produced single bands in the same range, confirming successful expression of each protein individually. A higher band around 100 kDa appeared in INP-CBD samples, possibly indicating dimerization.

            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <Link
                to="/protocols#western-blot-analysis"
                onClick={() => {
                  // safety: poll for the parts row element after navigation and scroll when available
                  const id = 'INP-Silicatein';
                  let attempts = 0;
                  const maxAttempts = 40; // ~4s
                  const timer = window.setInterval(() => {
                    const el = document.getElementById(id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      clearInterval(timer);
                    } else if (++attempts >= maxAttempts) {
                      clearInterval(timer);
                    }
                  }, 100);
                }}
                className="interactive-link"
              >

                Western Blot Analysis protocols
              </Link>

            </p>
            <h4>Learn</h4>
            <p>
              Both constructs were correctly expressed and detectable by their respective antibody tags, confirming that the plasmid vectors were functional. Having established protein expression, we moved on to test their localization and silica-forming capability using fluorescence microscopy.
            </p>
            <h3>Cycle 2 : Microscopy of INP Display Constructs</h3>
            <h4>Design</h4>
            <p>
              The goal of the second cycle was to determine whether the INP fusions localized to the outer membrane and could catalyze silica polymerization on the bacterial surface. We used fluorescence microscopy to visualize both protein display and silica deposition after incubation with sodium orthosilicate.
            </p>
            <p>
              For staining, we used CellMask to label membranes, anti-HA-FITC and anti-V5-AF555 antibodies to detect the fusion tags, and Rhodamine 123 to visualize silica polymerization. CellMask is generally used for mammalian cells, but was chosen initially as a convenient membrane dye.
            </p>
            <h4>Build</h4>
            <p>
              We tested three <i>E. coli</i> strains: one expressing INP-CBD-V5, one expressing INP-Silicatein-HA, and one co-expressing both constructs. After induction with IPTG, the cells were incubated with sodium orthosilicate and stained as described.
            </p>
            <h4>Test</h4>
            <p>
              Microscopy revealed elongated and irregular cell morphologies, particularly in INP-Silicatein samples. Fluorescence was mainly intracellular rather than surface-localized, suggesting that silicatein accumulated in the cytoplasm instead of being displayed externally. Rhodamine 123 fluorescence was weak, and no distinct silica signal was detected.</p>
            
            <p style={{ marginTop: '0.5rem' }}> 
              <Link
                to="/protocols#microscopy-flow-cytometry"
                onClick={() => {
                  // safety: try to smooth-scroll to the protocols section after navigation
                  setTimeout(() => {
                    const id = 'microscopy-flow-cytometry';
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 200);
                }}
                className="interactive-link"
              >
                Microscopy & Flow Cytometry protocols
              </Link>
          
            </p>
            <h4>Learn</h4>
            <p>
              The INP anchor did not enable efficient surface localization in our conditions. In addition, CellMask proved suboptimal for bacterial membranes, giving uneven background staining. These results suggested that the INP-based display system was not well suited for <i>E. coli</i> and that our staining method needed improvement. For the next cycle, we decided to replace INP with OmpA as a more reliable outer membrane anchor and to use FM4-64, a membrane dye optimized for bacteria.
            </p>
            <p style={{ marginTop: '0.5rem' }}>  
              <Link
                to="/results#fluomicro"
                onClick={() => {
                  // safety: try to smooth-scroll to the protocols section after navigation
                  setTimeout(() => {
                    const id = 'fluomicro';
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 200);
                }}
                className="interactive-link"
              >
                Fluorescence Microscopy Results
              </Link>
            </p>
            <h3>Cycle 3 : Microscopy of OmpA Display System and Improved Sample preparation</h3>
            <h4>Design</h4>
            <p>
              Based on the issues of the previous experiment, we redesigned our constructs using OmpA as the membrane anchor. This change was recommended in literature and by Dr. Miro Thorsten Plum from the Microbial Mechanics Laboratory. We also refined our microscopy protocol:
            </p>
            <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>FM4-64 replaced CellMask for bacterial membrane staining</li>
              <li>The number of washing steps was reduced from three to two to prevent signal loss and cell detachment</li>
              <li>A wild-type strain was included as a negative control to better evaluate background fluorescence</li>
            </ul>
            <p>
            We kept the same antibody labeling strategy (anti-HA-FITC and anti-V5-AF555) and the same induction conditions.
            </p>

            <p>
            
            <Link
                to="/parts#OmpA-Silicatein-α"
                onClick={() => {
                  // safety: poll for the parts row element after navigation and scroll when available
                  const id = 'OmpA-Silicatein-α';
                  let attempts = 0;
                  const maxAttempts = 40; // ~4s
                  const timer = window.setInterval(() => {
                    const el = document.getElementById(id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      clearInterval(timer);
                    } else if (++attempts >= maxAttempts) {
                      clearInterval(timer);
                    }
                  }, 100);
                }}
                className="interactive-link"
              >
                OmpA-silicatein
              </Link>
            
            </p>
            <h4>Build</h4>
            <p>

              The new constructs OmpA-CBD-V5 and OmpA-Silicatein-HA were cloned, expressed, and analyzed under identical conditions to the previous experiment.
            </p>
            <h4>Test</h4>
            <p>
              Microscopy showed a clear improvement in cell morphology and signal distribution. Cells expressing OmpA-based constructs maintained normal shapes, and fluorescence signals from the V5-tag (CBD) were more intense and evenly distributed on the surface. The HA-tag (silicatein) signal remained weak, indicating limited surface display or accessibility. Rhodamine 123 staining showed slightly higher fluorescence overall, possibly due to reduced washing. Including the wild-type control allowed us to confirm that the background signal came mainly from non-specific staining.
            </p>
            <h4>Learn</h4>
            <p>
              The OmpA system produced healthier cells and more uniform surface labeling, demonstrating that it is more compatible with <i>E. coli</i> than INP. However, we still observed limited evidence of silica polymerization, likely due to insufficient enzyme display and non-optimal incubation. To complement visual microscopy results, we created a two-step workflow for automated quantification of single-cell fluorescence. A Fiji macro was used to segment cells and measure Rhodamine 123 intensity, and a Python script processed the data to generate histograms and boxplots normalized by exposure time and laser power.
              This analysis confirmed that fluorescence intensities in INP-based samples were close to background levels, while OmpA samples showed higher but more variable signals. Overall, no strong evidence of silica coating was observed. The full analysis pipeline and code are available on our GitLab repository for other teams to use and adapt.

            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <Link
                to="/results#fluomicro"
                onClick={() => {
                  // safety: try to smooth-scroll to the protocols section after navigation
                  setTimeout(() => {
                    const id = 'fluomicro';
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 200);
                }}
                className="interactive-link"
              >
                Fluorescence Microscopy Results
              </Link>
            </p>
            <h4>Conclusion</h4>
            <p>
              Across three iterative engineering cycles, we achieved reliable expression of our fusion constructs, identified the limitations of the INP display system, and improved experimental design by choosing OmpA for surface display, optimizing staining methods, and adding a negative control.<br/>
              While silica polymerisation was not shown, our results provide valuable methodological insights. The optimized staining and quantification workflow can serve as a foundation for future teams to refine silica polymerisation experiments and develop bacterial systems for bioencapsulation.
            </p>
          </div>

          <div className="proof-block" id="hydrogel-assembly">
            <h2>Hydrogel assembly</h2>

            <h3>Cycle 1 : One-pot Assembly Exploration</h3>
            <h4>Design</h4>
            <p>
              We set out to create a sprayable, spreadable hydrogel able to receive our bioproduced SRSF1 for flame-retardancy testing. To iterate in parallel with bioproduction, we worked with synthetic stand-ins for our future biological materials:
            </p>
            <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Cellulose powder dissolved in NaOH solution and strengthened by a freeze-thaw step to mimic bacterial cellulose</li>
              <li>Chitosan powder solubilized in acetic acid solution to proxy yeast-derived chitosan</li>
              <li>Colloidal silica particles (CSPs) to emulate the contribution of silica-coated bacteria</li>
            </ul>
            <p>
              Our objective was to draft a reliable and reproducible protocol for assembling these components into a composite hydrogel.
            </p>

            <h4>Build</h4>
            <p>
              Our first strategy, adapted from the literature <Citation id="6" /><Citation id="7" /><Citation id="8"/> <Citation id="9"/><Citation id="10" /><Citation id="11" />, was a one-pot workflow. We dissolved cellulose in NaOH solution, then added chitosan, acetic acid, and CSPs before applying a freeze-thaw step and diluting to reach application viscosity. Across successive trials we adjusted concentrations and the order of addition. After each trial we judged homogeneity and texture by visual inspection of the thawed, mixed gels, and we assessed handling with simple spray-head and spatula tests to gauge consistency and spread.
            </p>

            <h4>Test</h4>
            <p>
              These experiments rapidly revealed a core constraint: mixing polymers outside their compatible pH windows produced inhomogeneous materials. When chitosan met alkaline cellulose directly, it formed immediate gel fragments that resisted homogenization even with heat and shear. Likewise, introducing acetic acid into CSP-containing solutions triggered precipitation that collapsed both viscosity and homogeneity. In contrast, cellulose-matrix hydrogels with CSPs alone reliably produced the target texture, confirming proper network formation when pH shocks were avoided.
            </p>
            <p>
              We performed multiple trials by varying components concentration and the order of addition. Although changing the timing of NaOH modestly improved consistency, the one-pot scheme never fully resolved chitosan clumping.
            </p>

            <h4>Learn</h4>
            <p>
              The one-pot path clarified that pH-aware sequencing is decisive for homogeneity. Chitosan cannot encounter strong base during its network formation, and acids should not be dosed into alkaline silica-bearing solutions. Although the approach confirmed that regenerated cellulose forms the expected network, it also showed that a different assembly logic would be needed to achieve reproducibility at scale.
            </p>

            <h3>Cycle 2 : Two-gel Assembly and Scale-up</h3>
            <h4>Design</h4>
            <p>
              Guided by the limitations of the one-pot route, we wanted to redesign the workflow so that each polymer could form under its optimal pH and then be merged under controlled conditions. To gain insights about what to do, we consulted Sourabh Monnappa Kuppanda Jafri, a doctoral assistant at EPFL’s Microbial Mechanics Lab that studies hydrogels in the scope of his research.
            </p>
            <p>
              The design intent remained the same : to produce a consistent, sprayable hydrogel ready to accept SRSF1. We preserved the same synthetic stand-ins for our future biosynthesized cellulose, chitosan, and silica components.
            </p>

            <h4>Build</h4>
            <p>
              Sourabh Kuppanda Jafri suggested that we adopt a two-gel assembly. First, cellulose is dissolved in a NaOH solution, subjected to a freeze-thaw cycle to promote physical crosslinking, and washed thoroughly with PBS to return the matrix to near-neutral pH and remove solubles. Separately, chitosan powder was dissolved with acetic acid to yield a homogeneous gel. After each polymer network was formed under its optimal conditions, they are blended and CSPs are incorporated.
            </p>
            <p>
              This sequencing eliminated chitosan fragments, stabilized texture, and scaled cleanly from 10 ml trials to 500 ml batches suitable for rheology and fire testing.
            </p>

            <h4>Test</h4>
            <p>
              The revised process eliminated chitosan fragments and stabilized texture across concentrations and blend ratios. It produced a firm yet workable body that remained uniform after brief stirring. It thus eliminated chitosan fragments, stabilized texture, and scaled cleanly from 10 ml trials to 500 ml batches suitable for rheology and fire testing.
            </p>

            <h4>Learn</h4>
            <p>
              Building each matrix in its compatible pH window, neutralizing cellulose after freeze–thaw, and blending the two gels before adding CSPs produced a reliable outcome. Critically, the behavior was consistent from small to intermediate scales, indicating good reproducibility of the assembly. The two-gel approach transformed an initially variable process into one that consistently meets our homogeneity and handling criteria. As we transition to biosynthesized cellulose, chitosan, and silica particles, the chemical dissolution steps should recede, but the assembly principle remains the same: prepare each matrix under pH-compatible conditions, merge under controlled mixing, and incorporate silica to tune final properties. The resulting material is ready for SRSF1 addition for the planned flame-retardant assays.
            </p>
          </div>

          <div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Reference list for Engineering & Application
const engAppReferenceList: Reference[] = [
  {
    id: '1',
    text: 'Smith, J., et al. "Autonomous UAV Systems for Environmental Applications." <em>Journal of Robotics Engineering</em>, vol. 15, no. 3, pp. 45–62, 2024.'
  },
  {
    id: '2',
    text: 'Chen, L. & Rodriguez, M. "Bioprocessing Optimization for Polymer Production." <em>Biotechnology Progress</em>, vol. 40, no. 2, p. e3401, 2024.'
  },
  {
    id: '3',
    text: 'Williams, K., et al. "Fire‑Retardant Hydrogels: Engineering and Performance Evaluation." <em>Materials Science & Engineering</em>, vol. 128, pp. 234–247, 2024.'
  },
  {
    id: '4',
    text: 'Johnson, A. "Computer Vision Applications in Wildfire Detection." <em>IEEE Transactions on Geoscience and Remote Sensing</em>, vol. 62, no. 4, pp. 1–12, 2024.'
  },
  {
    id: '5',
    text: 'Brown, S., et al. "Synthetic Biology Approaches for Sustainable Materials Production." <em>Nature Biotechnology</em>, vol. 42, no. 8, pp. 1123–1134, 2024.'
  },
  {
    id: '6',
    text: 'Hsieh, C.-Y., et al. "Analysis of freeze‑gelation and cross‑linking processes for preparing porous chitosan scaffolds." <em>Carbohydrate Polymers</em>, vol. 67, no. 1, pp. 124–132, Jan. 2007. DOI: <a href="https://doi.org/10.1016/j.carbpol.2006.05.002" target="_blank" rel="noopener noreferrer">10.1016/j.carbpol.2006.05.002</a>'
  },
  {
    id: '7',
    text: 'Wei, B., Zou, J., Pu, Q., Shi, K., Xu, B. & Ma, Y. "One‑step preparation of hydrogel based on different molecular weights of chitosan with citric acid." <em>Journal of the Science of Food and Agriculture</em>, vol. 102, no. 9, pp. 3826–3834, Jul. 2022. DOI: <a href="https://doi.org/10.1002/jsfa.11732" target="_blank" rel="noopener noreferrer">10.1002/jsfa.11732</a>'
  },
  {
    id: '8',
    text: 'Yu, A. C., et al. "Scalable manufacturing of biomimetic moldable hydrogels for industrial applications." <em>Proceedings of the National Academy of Sciences</em>, vol. 113, no. 50, pp. 14255–14260, Dec. 2016. DOI: <a href="https://doi.org/10.1073/pnas.1618156113" target="_blank" rel="noopener noreferrer">10.1073/pnas.1618156113</a>'
  },
  {
    id: '9',
    text: 'Demitri, C., et al. "Novel superabsorbent cellulose‑based hydrogels crosslinked with citric acid." <em>Journal of Applied Polymer Science</em>, vol. 110, no. 4, pp. 2453–2460, Nov. 2008. DOI: <a href="https://doi.org/10.1002/app.28660" target="_blank" rel="noopener noreferrer">10.1002/app.28660</a>'
  },
  {
    id: '10',
    text: 'Susi, S., Ainuri, M., Wagiman, W., Falah, M. A. F. & Al Hakim, H. M. "Hydrogel film synthesis for biowrapping via a single‑cycle freeze‑thaw process utilizing carboxymethyl cellulose/microcrystalline cellulose and citric acid as crosslinker." <em>BIO Web Conf.</em>, vol. 158, p. 04010, 2025. DOI: <a href="https://doi.org/10.1051/bioconf/202515804010" target="_blank" rel="noopener noreferrer">10.1051/bioconf/202515804010</a>'
  },
  {
    id: '11',
    text: 'Hasri, H., Pratiwi, D. E., Safitri, I. & Negara, S. P. J. "Synthesis of Chitosan Silica Membrane from Petung Bamboo (Dendrocalamus asper) Leaves and Its Application as Pb(II) Metallic Adsorbent." <em>Indonesian Journal of Chemistry</em>, vol. 24, no. 3, p. 661, Jun. 2024. DOI: <a href="https://doi.org/10.22146/ijc.82065" target="_blank" rel="noopener noreferrer">10.22146/ijc.82065</a>'
  },
  {
    id: '12',
    text: 'Protein ladder M1 (Thermo Fisher 26616): <a href="https://www.thermofisher.com/order/catalog/product/26616" target="_blank" rel="noopener noreferrer">https://www.thermofisher.com/order/catalog/product/26616</a>'
  },
  {
    id: '13',
    text: 'Protein ladder M2 (Thermo Fisher 26619): <a href="https://www.thermofisher.com/order/catalog/product/26619" target="_blank" rel="noopener noreferrer">https://www.thermofisher.com/order/catalog/product/26619</a>'
  }
];

// Render the component with references
const EngAppWithRefs: React.FC = () => (
  <>
    <EngApp />
    <ReferencesDropdown references={engAppReferenceList} />
  </>
);

export default EngAppWithRefs;