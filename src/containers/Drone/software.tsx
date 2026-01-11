import React from "react";
import { Link } from "react-router-dom";
import { Gauge, Map, Network, Scan, ShieldCheck, Video } from "lucide-react";
import "./software.css";
import "../Project/Proofofconcept/proofofconcept.css";
import "../../components/Sidebar/sidebar.css";
import "../../components/Lists/appleLists.css";
import "../../components/Links/links.css";
import PageHead from "../../components/Head/PageHead";
import ReferencesDropdown from "../Homepage/References/references";



const SoftwareSection: React.FC = () => {  

  const featureHighlights: Array<{
    icon: React.ElementType<{ size?: string | number }>;
    title: string;
    description: string;
  }> = [
    {
      icon: Network,
      title: "ROS Integration (Robot Operating System)",
      description:
        "Provides a unified communication backbone so that all modules, from cameras to the flight controller, work seamlessly together.",
    },
    {
      icon: Scan,
      title: "Stereo Vision & Depth Estimation",
      description:
        "Running on the Jetson, our UAV uses state-of-the-art models to generate depth maps, detect obstacles, and navigate safely in dense forests. Everything runs onboard for fast inference and autonomous operation.",
    },
    {
      icon: Video,
      title: "Live Video & Telemetry",
      description:
        "Camera and IR feeds are encoded onboard and streamed in real time to the ground station over wfb-ng, a modified Wi-Fi protocol optimized for low-latency, long-range video transmission.",
    },
    {
      icon: Gauge,
      title: "Flight Control & Sensors",
      description:
        "The Pixhawk controller manages stability and integrates distance sensors, while coordinating with the Jetson for higher-level autonomy.",
    },
    {
      icon: ShieldCheck,
      title: "Failsafe Remote Control",
      description:
        "A dedicated transmitter/receiver link ensures that the operator can always take over manually; a simple switch on the remote triggers failsafe mode for maximum safety.",
    },
    {
      icon: Map,
      title: "Route Planning",
      description:
        "With QGroundControl, we pre-plan complex missions from a laptop, enabling autonomous patrols and fire-monitoring routes.",
    },
  ];

  const softwareReferences = [
    { text: "FoundationStereo", url: "https://nvlabs.github.io/FoundationStereo/" },
    { text: "Isaac Sim", url: "https://developer.nvidia.com/isaac/sim" },
    { text: "Pegasus Simulator", url: "https://pegasussimulator.github.io/PegasusSimulator/" },
    { text: "WFB-NG", url: "https://github.com/svpcom/wfb-ng" },
    { text: "PX4 Autopilot", url: "https://px4.io" },
    { text: "Frontiers — Fire detection paper", url: "https://www.frontiersin.org/journals/environmental-science/articles/10.3389/fenvs.2024.1486212/full" }
  ];

  return (
    <div className="proof-container">
      <PageHead
        title="Software"
        subtitle="The software architecture and algorithms that enable autonomous flight and data processing."
        backgroundUrl="https://static.igem.wiki/teams/5590/assets-drone/coding-igem-room.avif"
        grayscale={true}
      />

      <div className="hardware-layout">
        <aside className="hardware-sidebar">
  <div className="sidebar-title">Table of Contents</div>
  <nav>
    <ul>
      <li><a className="sidebar-button" href="#introduction">Overview</a></li>
      <li><a className="sidebar-button" href="#features">Key intended features</a></li>
      <li><a className="sidebar-button" href="#diagram">System Diagram</a></li>
      
      <li>
        <a className="sidebar-button" href="#ros">Robot Operating System (ROS)</a>
        <ul className="sidebar-sublist">
          <li><a className="sidebar-subitem" href="#rosstack">Our ROS2-based UAV stack</a></li>
          <li><a className="sidebar-subitem" href="#ros-diagram">ROS Nodes Diagram</a></li>
        </ul>
      </li>
      
      <li>
        <a className="sidebar-button" href="#fire-detection">Fire detection</a>
        <ul className="sidebar-sublist">
          <li><a className="sidebar-subitem" href="#stereo">Stereo Vision</a></li>
          <li><a className="sidebar-subitem" href="#video">Video Transmission</a></li>
          <li><a className="sidebar-subitem" href="#flight-controller">Flight Controller</a></li>
          <li><a className="sidebar-subitem" href="#IRcamera">IR camera application</a></li>
        </ul>
      </li>
      
      <li><a className="sidebar-button" href="#other-software">Other Software Contributions</a></li>
    </ul>
  </nav>
</aside>

        <section className="hardware-main proof-section">
          {/* Introduction Section */}
          <div className="proof-block" id="introduction">
            <h2>Overview</h2>
            <p>Our software began with the drone, but it doesn’t end there. It now powers the entire Pyronix workflow: automating flights and simulations, retrieving and analyzing biological data, and running the statistical tests that link design to results. The stack plays well with synthetic biology standards (SBOL/SBOL3) and open formats (CSV/JSON/YAML), and it integrates smoothly with external tools via clean Python APIs, ROS nodes, and a simple CLI. It’s easy to use and well documented, with examples and a ROS installation tutorial PDF provided below. Under the hood, the codebase is thoughtfully structured and commented, supported by architecture diagrams, CI tests, and containerized environments for full reproducibility.</p>
            <p>
              Most software work centers on the drone (covered first on this page), while additional, indispensable tools are outlined in <a href="#other-software" className="interactive-link">Other Software Contributions</a>.
            </p>
          </div>
          {/* System Diagram */}
          <div className="proof-block" id="diagram">
            <h2>Drone Software - System Diagram</h2>
            <figure style={{ maxWidth: '720px', margin: '0 auto' }}>
              <img src="https://static.igem.wiki/teams/5590/assets-drone/software/screenshot-2025-10-04-at-21-53-57.webp" alt="Software system diagram" style={{ width: '100%', borderRadius: '8px' }} />
              <figcaption className="caption"><strong>Figure 1:</strong> High-level software architecture showing data flows between Jetson, Pixhawk, cameras, and ground station.</figcaption>
            </figure>

            <div className="sub-block" id="introduction">
              <p>
                The software stack on our UAV is designed to make the system modular, autonomous, safe, and versatile. Beyond simple remote control, the drone can process sensor data, make decisions, and coordinate its components with minimal human input.
              </p>
              <div
                style={{
                  background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  marginTop: '1.5rem',
                  color: 'white',
                  boxShadow: '0 12px 28px rgba(15, 23, 42, 0.25)',
                  fontWeight: 600,
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  letterSpacing: '0.01em',
                }}
              >
                A lot more detail can be found in the{' '}
                <Link to="/engineering" className="interactive-link">
                  Engineering
                </Link>{' '}
                section where we detail what we tried and what worked or didn&apos;t.
              </div>
            </div>
          </div>


          {/* Key intended features */}
          <div className="proof-block" id="features">
            <h2>Key intended features</h2>
            <ul className="file-features-list">
              {featureHighlights.map(({ icon: IconComponent, title, description }) => (
                <li key={title}>
                  <span className="file-features-icon" aria-hidden="true">
                    <IconComponent size={24} />
                  </span>
                  <span className="file-features-content">
                    <b>{title}:</b> {description}
                  </span>
                </li>
              ))}
            </ul>
            <p>
              This architecture, powered by PX4, ROS, and open-source frameworks, opens the door to many features: automated fire detection alerts, dynamic re-routing, swarm coordination, and advanced monitoring for large forest areas.
            </p>
          </div>

          {/* Robot Operating System (ROS) */}
          <div className="proof-block" id="ros">
            <h2>Robot Operating System (ROS)</h2>
            <h4>What is ROS?</h4>
            <p>
              An open-source middleware that connects robotic hardware and software. It offers messaging, tooling, and conventions for building complex robot apps—more a framework than a full OS.
            </p>
        
            <h4>What is it used for?</h4>
            <ul className="file-list">
              <li>Orchestrates communication between modules</li>
              <li>Processes sensor data in real time</li>
              <li>Coordinates perception, navigation, and control</li>
              <li>Enables modular, reusable system design</li>
            </ul>

            <h4>Why ROS for our drone?</h4>
            <ul className="file-list">
              <li>Scalable: Add sensors/components without rewrites</li>
              <li>Supported: Huge ecosystem (vision, mapping, AI)</li>
              <li>Flexible: Plays well with PX4, Gazebo, Isaac, etc.</li>
              <li>Future-proof: Suits research and industrial use</li>
            </ul>

            <h4>How we used it?</h4>
            <ul className="file-list">
              <li>Linked Pixhawk (PX4) for control/telemetry (via MAVLink / MAVROS2)</li>
              <li>Integrated stereo + IR cameras for real-time processing</li>
              <li>Enabled live video and depth mapping</li>
              <li>Structured all data exchange via ROS topics/services</li>
            </ul>

            <div>
            <p>
              Due to time limitations, the ROS integration could not be fully achieved. The progress achieved can be seen on the <a href="https://gitlab.igem.org/2025/software-tools/epfl" className="interactive-link" target="_blank" rel="noopener noreferrer">Software GitLab repository</a>.
            </p>
            </div>
          </div>


            {/* ROS Nodes Diagram */}
            <div className="proof-block" id="ros-diagram">
              <h3>ROS Nodes Diagram</h3>
              <figure style={{ maxWidth: '720px', margin: '25px auto' }}>
                <img src="https://static.igem.wiki/teams/5590/assets-drone/software/screenshot-2025-10-04-at-21-55-11.webp" alt="ROS nodes diagram" style={{ width: '100%', borderRadius: '8px' }} />
                <figcaption className="caption"><strong>Figure 2:</strong> ROS2 node layout showing perception, planning, and telemetry flows.</figcaption>
              </figure>
            </div>

            {/* Our ROS2-based UAV stack (Jetson Orin Nano) */}
            <div className="proof-block" id="rosstack">
            <h3>Our ROS2-based UAV stack (Jetson Orin Nano)</h3>
            <ul className="file-list">
              <li><b>Camera Input 1:</b> Left RGB feed</li>
              <li><b>Camera Input 2:</b> Right RGB feed</li>
              <li><b>IR Input:</b> Thermal/infrared feed</li>
              <li><b>Foundation Stereo Processing:</b> Fuses left/right images for depth estimation</li>
              <li><b>SLAM Node:</b> Combines stereo depth + GPS for mapping & localization</li>
              <li><b>Obstacle Avoidance & Path Planning:</b> Computes safe navigation routes</li>
              <li><b>Fire Detection:</b> Runs the yologx model trained on fire imagery for real-time wildfire detection</li>
              <li><b>Ground Transmission:</b> Streams processed data via wfb-ng</li>
              <li><b>PX4 Flight Controller Link:</b> Keeps ROS2 and PX4 synchronized for control and telemetry</li>
            </ul>
            </div>

            <div className="proof-block" style={{ marginTop: '2rem' }}>
              <h3>ROS Results: UDP Video Streaming Validation</h3>
              <figure style={{ maxWidth: '720px', margin: '25px auto' }}>
                <img
                  src="https://static.igem.wiki/teams/5590/assets-drone/screenshot-from-2025-10-08-13-20-59.avif"
                  alt="RViz window showing ROS 2 topics for stereo RGB and infrared video feeds"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
                <figcaption className="caption">
                  <strong>Figure:</strong> Visualization of multiple UDP-fed ROS 2 video topics during system validation.
                </figcaption>
              </figure>
              <p>
                We validated the UDP-to-ROS bridge by streaming local videos with <code>ffmpeg</code> to emulate the Raspberry Pi camera feeds. The bridge nodes successfully published three simultaneous topics: the stereo RGB feeds (<code>/stereo/left/image_raw</code> and <code>/stereo/right/image_raw</code>) and the thermal IR feed (<code>/ir/image_raw</code>). The screenshot above captures the ROS 2 visualization while all topics ran in real time, confirming the nodes can ingest and relay stereo plus thermal data without drops.
              </p>
            </div>

            <div className="proof-block" style={{ marginTop: '2rem' }}>
              <h3>ROS Installation Guide</h3>
              <p>
                To help newcomers ramp up quickly, our team authored a concise guide tailored for macOS users. Because ROS 2 Jazzy is not yet available natively on Apple Silicon, we documented a Docker-based workflow that covers setting up a workspace, building packages, launching nodes, and inspecting topics, with direct links to the official tutorials. Check it out here: <a href="https://static.igem.wiki/teams/5590/assets-drone/software/ros-and-gazebo-setup.pdf" className="interactive-link" target="_blank" rel="noopener noreferrer">ROS and Gazebo Setup</a>.
              </p>
            </div>
          


          {/* Fire detection */}
          <div className="proof-block" id="fire-detection">
            <h3>Fire detection</h3>
            <p>
            YOLO-GX is an advanced member of the YOLO (You Only Look Once) family of object detection models. It improves on YOLOv8 with higher accuracy, faster inference, and better handling of small or complex objects, making it well-suited for tasks like fire, smoke, or obstacle detection in UAV applications. It’s lightweight enough for edge devices (like Jetson) while still delivering state-of-the-art real-time detection.
            </p>
            <figure style={{ maxWidth: '720px', margin: '0 auto' }}>
              <img src="https://static.igem.wiki/teams/5590/assets-drone/software/screenshot-2025-10-04-at-21-56-25.webp" alt="YOLO-GX fire detection" style={{ width: '100%', borderRadius: '8px' }} />
              <figcaption className="caption"><strong>Figure 3:</strong> Example YOLO-GX detections on thermal/RGB imagery.</figcaption>
            </figure>
            <p>
              Reference: <a href="https://www.frontiersin.org/journals/environmental-science/articles/10.3389/fenvs.2024.1486212/full" target="_blank" rel="noreferrer">Frontiers: Wildfire detection (2024)</a>
            </p>
          </div>

          {/* Stereo Vision */}
          <div className="proof-block" id="stereo">
            <h3>Stereo Vision</h3>
            <p>
            For our UAV project aimed at forest fire detection and autonomous navigation, we plan to integrate FoundationStereo, a state-of-the-art stereo vision model. Trained on nearly one million diverse stereo pairs, it delivers strong zero-shot depth estimation without the need for per-scene calibration. The model processes left and right camera inputs by extracting features, constructing a cost volume, and applying advanced context reasoning to produce accurate, dense depth maps. This capability allows our UAVs to perceive terrain and obstacles reliably under challenging forest conditions, enabling both real-time fire monitoring and safe autonomous flight through complex environments.
            </p>
            <figure style={{ maxWidth: '720px', margin: '0 auto' }}>
              <img src="https://static.igem.wiki/teams/5590/assets-drone/software/screenshot-2025-10-04-at-21-57-42.webp" alt="FoundationStereo depth estimation" style={{ width: '100%', borderRadius: '8px' }} />
              <figcaption className="caption"><strong>Figure 4:</strong> FoundationStereo output — dense depth maps used for obstacle avoidance and mapping.</figcaption>
            </figure>
          </div>

          {/* Video Transmission */}
          <div className="proof-block" id="video">
            <h3>Video Transmission</h3>
            <p>
          We plan to use wfb-ng, an open-source digital video transmission system that repurposes Wi-Fi hardware for low-latency, long-range video links. Unlike standard Wi-Fi networking, which relies on higher-level protocols that introduce delay, wfb-ng transmits raw data frames directly over the air, minimizing overhead and ensuring faster response times.
          Onboard the drone, the Jetson Orin will capture and encode the RGB and IR camera feeds before streaming them over the wfb-ng link. A ground station equipped with a compatible Wi-Fi adapter will then receive and decode the streams for real-time monitoring.
          This setup provides a lightweight and efficient connection purpose-built for live video transmission, rather than general network traffic, making it well-suited for responsive UAV operations.
            </p>
            <figure style={{ maxWidth: '720px', margin: '0 auto' }}>
              <img src="https://static.igem.wiki/teams/5590/assets-drone/software/screenshot-2025-10-04-at-21-58-25.webp" alt="Video transmission schematic" style={{ width: '100%', borderRadius: '8px' }} />
              <figcaption className="caption"><strong>Figure 5:</strong> Low-latency video pipeline from Jetson to ground station over wfb-ng.</figcaption>
            </figure>
          </div>

          {/* Flight Controller */}
          <div className="proof-block" id="flight-controller">
            <h3>Flight Controller</h3>
            <p>
        Our drone is equipped with a Pixhawk 6C flight controller, which acts as the central hub coordinating all onboard systems. It continuously fuses data from its dual IMUs, barometer, magnetometer, and external GPS to calculate the drone’s exact position, orientation, and movement. Using this information, it issues precise commands to the ESCs, ensuring that the six motors adjust their speed in real time to maintain stability and execute flight maneuvers.
        Beyond basic stabilization, the Pixhawk 6C supports advanced functionality such as autonomous navigation, failsafe mechanisms, and payload management. Through the MAVROS interface, it links directly to ROS, enabling seamless communication between the companion computer (Jetson Orin Nano) and additional sensors (stereo cameras, IR, ultrasonic, distance).
            </p>
            <figure style={{ maxWidth: '300px', margin: '0 auto' }}>
              <img src="https://static.igem.wiki/teams/5590/assets-drone/hardware/pixhawk.webp" alt="Pixhawk 6C and sensor integration" style={{ width: '100%', borderRadius: '8px' }} />
              <figcaption className="caption"><strong>Figure 6:</strong> Pixhawk 6C flight controller and integrated sensors (IMU, GPS, barometer).</figcaption>
            </figure>
          </div>
          

          {/* Other Software Contributions */}
          <div className="proof-block" id="other-software">
            <h2>Other Software Contributions</h2>
            <p> In addition to the drone stack described above, we developed complementary tools that streamline data processing, visualization, and experimental validation. This includes:
            </p>

                      {/* IR camera application */}
          <div className="proof-subblock" id="IRcamera">
            <h3>IR camera application</h3>
            <p>
            We developed an infrared (IR) camera application to perform and monitor the burn test. The system uses both I²C and SPI communication protocols — I²C for register access and SPI for the high-speed video feed. A custom C++ program processes the SPI data and converts it into a live thermal gradient that automatically adjusts to the detected temperature range. The application provides 
            real-time max and min temperature readings, automatic color recalibration, and a central crosshair showing a localized 5×5 pixel temperature average. It also includes a recalibration button, built-in video recording directly from the GUI, and smart overlay text that changes color for better visibility during use.
          </p>

          {/* IR Camera Application Video */}
            <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              <div style={{ maxWidth: 720, margin: '0 auto' }}>
                <iframe
                  title="EPFL: Infrared Camera Application Testing (2025)"
                  width="100%"
                  height="315"
                  src="https://video.igem.org/videos/embed/785d3z3CyUPwBkBHsRbtrL"
                  allowFullScreen
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  style={{ border: 0, borderRadius: 8 }}
                />
              </div>
              <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '0.5rem', color: '#666' }}>
                Infrared Camera Application Testing
              </p>
            </div>
            <p>
              This video shows the testing of our custom infrared (IR) camera application, developed to capture and process real-time thermal data.
            </p>

          <p>You can see an example for video feed in the <Link to="/measurement" className="interactive-link">Burn Measurement</Link> section.
          </p>
          </div>

            <div className="proof-subblock">
              <h3>Data Processing and Analysis</h3>
                          <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              <div style={{ maxWidth: 720, margin: '0 auto' }}>
                <iframe
                  title="EPFL: Fiji Demo for Rhodamine Fluorescence Analysis (2025)"
                  width="100%"
                  height="315"
                  src="https://video.igem.org/videos/embed/8WW9mRcNCEVZeCu6HBrPqJ"
                  allow="fullscreen"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  style={{ border: 0 }}
                ></iframe>
              </div>
              <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '0.5rem', color: '#666' }}>
                Automated microscopy image analysis
              </p>
            </div>
              <p>
                A crucial part of Pyronix was turning raw data into actionable insight. We built end-to-end pipelines to clean data, visualize trends, and apply appropriate statistical tests, so we could judge whether observed effects were genuine and reproducible. These tools include a Fiji macro for automated microscopy image analysis , a data-visualization script for quantitative plots, and code that fits hydrogel rheology data  to a known model, bridging software, biological experimentation, and materials science (for more information, refer to the <Link to="/results" className="interactive-link">Results</Link> section ). </p>
              <p>We also developed statistical analysis and plotting code for the burn measurements (see{' '} <Link to="/measurement" className="interactive-link">Burn Measurement</Link> ), which underscored the value of significance testing and made outcomes easy to interpret.</p>
              <p>All code is hosted on our <Link to="https://gitlab.igem.org/2025/software-tools/epfl" className="interactive-link">GitLab</Link> with dedicated README files to ensure reproducibility, transparent methods, and clear contributions for future collaborators.</p>
            </div>

            <div className="proof-subblock">
              <h3>Simulation of the Drone</h3>
              <p>
                We rebuilt our simulation pipeline around NVIDIA Isaac Sim coupled with Pegasus so the virtual drone matches our CAD twin. The Fusion 360 assembly was exported to USD, annotated with the measured mass and inertia, and wrapped in a Pegasus vehicle profile that mounts the same stereo RGB and thermal cameras we fly in hardware.
              </p>
              <p>
                Pegasus drives PX4 SITL while our ROS 2 launch files bring up the simulator, autopilot bridge, and perception nodes together. Those runs stream stereo and IR topics into the same workspace that powers the drone, letting us exercise the FoundationStereo depth pipeline and record reproducible bags for downstream analytics before ever leaving the lab.
              </p>
              <p>
                Detailed notes and future work stay tracked on the{' '}
                <Link to="/modeling" className="interactive-link">Modeling</Link> page.
              </p>
            </div>
          </div>
          
        </section>
      </div>
      <ReferencesDropdown references={softwareReferences} />
    </div>
  );
};

export default SoftwareSection;