import React from "react";
import "./hardware.css";
import "../Project/Proofofconcept/proofofconcept.css";
import "../../components/Sidebar/sidebar.css";
import "../../components/ImageCaption/imageCaption.css";
import "../../components/Lists/appleLists.css";
import "../../components/Links/links.css";
import PageHead from "../../components/Head/PageHead";
import { Link } from "react-router-dom";


const HardwareSection: React.FC = () => {
  
  return (
    <div className="proof-container">
      <PageHead
        title="Hardware"
        subtitle="The key hardware components that power our drone system – from motors to microcontrollers."
        backgroundUrl="https://static.igem.wiki/teams/5590/assets-drone/drone-bg.avif"
        grayscale={true}
      />

      <div className="hardware-layout">
        <aside className="hardware-sidebar">
          <div className="sidebar-title">Table Of Contents</div>
          <nav>
            <ul>
              <li><a className="sidebar-button" href="#introduction">Hardware</a></li>
              <li><a className="sidebar-button" href="#components">Main components</a></li>
              <li><a className="sidebar-button" href="#sensors">Sensors and Cameras</a></li>
              <li><a className="sidebar-button" href="#parts-built">Parts we built</a></li>
              <li><a className="sidebar-button" href="#assembly">Assembly</a></li>
              <li><a className="sidebar-button" href="#spraying">Spraying system</a></li>
              <li><a className="sidebar-button" href="#results">Results & limitations</a></li>
            </ul>
          </nav>
        </aside>

        <section className="hardware-main proof-section">
          <div className="proof-block" id="introduction">
            <h2>Hardware</h2>
            <p>
              In this section we detail the hardware design and components that we used for our drone. The following video demonstrates a successful take-off and flight test, showcasing the drone's stability and control.

            </p>
             {/* Video embed */}
            <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <div style={{ maxWidth: 720, margin: '0 auto' }}>
                <iframe
                  title="EPFL: drone flight test (2025)"
                  width="100%"
                  height="400"
                  src="https://video.igem.org/videos/embed/fVGLpG9rHgCnPwAEsbEFV7"
                  allowFullScreen
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  style={{ border: 0, borderRadius: 8 }}
                />
              </div>
            </div>

              <p>
              Two types of components can be distinguished: bought components and designed parts.
            </p>

            <figure className="image-figure image-figure--medium image-figure--center">
              <img className="image-img" src="https://static.igem.wiki/teams/5590/assets-drone/hardware/real-drone-image.webp" alt="Real drone" />
              <figcaption className="image-caption"><strong>Figure 1:</strong>The assembled drone (≈1 m diameter) optimized for stability and endurance.</figcaption>
            </figure>

            <p className="muted small">The drone is roughly 1 meter in diameter and achieves a 20-minute flight time on a 16,000 mAh 6S battery with a total load of ~4kg, optimized for stability and endurance.</p>
          </div>

          <div className="proof-block" id="components">
            <h2>Main components</h2>

            <h3>Carbon Fiber Frame - ZD 850</h3>
            <figure className="image-figure image-figure--large image-figure--center">
              <img className="projectdescrip-img image-img" src="https://static.igem.wiki/teams/5590/assets-drone/hardware/carbon-fiber.webp" alt="Carbon fiber frame" />
              <figcaption className="image-caption"><strong>Figure 2:</strong> ZD 850 carbon fiber frame: lightweight skeleton providing structure and support for the drone.</figcaption>
            </figure>

            <h4>General Overview</h4>
            <p>
              The ZD 850 carbon fiber frame serves as the structural foundation of the drone. Designed for strength, stiffness, and lightweight performance, it provides the necessary rigidity to support all flight components, including the propulsion system, sensors, and payload, while maintaining an optimized center of gravity. Its modular design ensures easy assembly and maintenance, allowing components to be swapped or serviced without compromising frame integrity.
            </p>
            <p>
              Learn more about the technical details in the linked document: <a href="https://readytosky.com/e_productshow/?827-ZD850-Full-Carbon-Fiber-Hexa-Rotor-Frame-With-Unflodable-Landing-Gear-827.html" className="interactive-link" target="_blank" rel="noopener noreferrer">ZD850 Technical Specifications</a>
            </p>

            <h4>Technical Specifications</h4>
            <ul className="file-tech-list">
              <li><strong>Material:</strong> 3K woven carbon fiber composite</li>
              <li><strong>Wheelbase:</strong> 850 mm motor-to-motor diagonal</li>
              <li><strong>Weight:</strong> ~1200 g (frame with landing gear)</li>
              <li><strong>Arm configuration:</strong> 6 arms, foldable for transport</li>
              <li><strong>Motor mount pattern:</strong> multi-pattern (16×19 / 19×25 / 30×30 mm), supports 35–41 mm class motors</li>
              <li><strong>Landing gear:</strong> foldable carbon tube landing gear</li>
              <li><strong>Payload capacity:</strong> configuration-dependent (propulsion and battery selection)</li>
            </ul>
            <p>
              These specifications balance rigidity, weight, and vibration resistance, ensuring optimal performance under both manual and autonomous flight modes.
            </p>

            <h3>Motors: Racerstar BR4114 400KV</h3>
            <figure className="image-figure image-figure--large image-figure--center">
              <img className="projectdescrip-img image-img" src="https://static.igem.wiki/teams/5590/assets-drone/hardware2/motors.webp" alt="Racerstar motors" />
              <figcaption className="image-caption"><strong>Figure 3:</strong> Racerstar BR4114 400KV brushless motors, efficient thrust sources for sustained flight.</figcaption>
            </figure>
            <p>
              The Racerstar BR4114 400KV brushless motors are high-torque propulsion units responsible for generating lift and maneuverability. Their low KV rating makes them ideal for large propellers, providing efficient thrust with smooth response. The brushless design minimizes mechanical wear and maximizes energy conversion efficiency, contributing to longer flight endurance and stable operation under load.
            </p>
            <p>
              These motors deliver efficient thrust-to-power ratios and precise control response, enabling the drone to achieve stable flight, smooth acceleration, and reliable maneuverability across a variety of payload and mission profiles.
            </p>
            <p>
              Learn more about the technical details in the linked document: <a href="https://www.banggood.com/de/Racerstar-Racing-Edition-4114-BR4114-400KV-4-8S-Brushless-Motor-For-600-650-700-800-RC-Drone-FPV-Racing-p-1124370.html?cur_warehouse=CN&rmmds=search" className="interactive-link" target="_blank" rel="noopener noreferrer">Racerstar BR4114 Technical Specifications</a>
            </p>

            <h3>ESCs (Electronic Speed Controllers): TBS Lucid 4in1 6S</h3>
            <figure className="image-figure image-figure--large image-figure--center">
              <img className="projectdescrip-img image-img" src="https://static.igem.wiki/teams/5590/assets-drone/hardware/escz.webp" alt="TBS Lucid ESCs" />
              <figcaption className="image-caption"><strong>Figure 4:</strong> TBS Lucid 4-in-1 6S ESCs controlling motor speeds for precise flight control.</figcaption>
            </figure>
            <p>
              This image presents the ESCs of the drone.
            </p>
            <p>
              The Electronic Speed Controllers (ESCs) form a critical part of the drone's propulsion system. They regulate the electrical power delivered from the battery to each motor, converting flight controller signals into precise motor speeds. This fine control ensures stable lift, yaw, pitch, and roll, allowing the drone to maintain smooth, responsive, and balanced flight even under varying load conditions.
            </p>
            <p>
              Our drone utilizes 2 TBS Lucid 4-in-1 6S ESCs, each having 4 separate channels, engineered for high efficiency and reliability. This configuration gives us 2 spare ESC channels in case of failure.
            </p>
            <ul className="file-tech-list">
              <li>Current: 60 A continuous / 70 A peak</li>
              <li>Input: 3S–6S LiPo (up to 25.2 V)</li>
              <li>Firmware: AM32 (pre-flashed)</li>
              <li>Features: Bi-directional DShot 300/600, KISS ESC telemetry, ESC current sensor port</li>
              <li>BEC Output: None (power the flight controller and onboard accessories via FC regulator or separate BEC)</li>
            </ul>
            <p></p>
            <p>
              Learn more about the technical details in the linked document: <a href="https://www.digitec.ch/en/s1/product/tbs-lucid-6s-4in1-esc-fpv-accessories-rc-drone-accessories-55663263" className="interactive-link" target="_blank" rel="noopener noreferrer">TBS Lucid 6S 4-in-1 ESC Technical Specifications</a>
            </p>

            <h3>Battery: Swaytronic LiPo 6S 22.2V 16000mAh 35C</h3>
            <figure className="image-figure image-figure--medium image-figure--center">
              <img className="projectdescrip-img image-img" src="https://static.igem.wiki/teams/5590/assets-drone/hardware/battery.webp" alt="Battery of the drone" />
              <figcaption className="image-caption"><strong>Figure 5:</strong> Swaytronic LiPo battery - the main power source for sustained flight operations.</figcaption>
            </figure>
            <p>
              The Swaytronic LiPo 6S 22.2V 16000mAh 35C battery serves as the drone's main power source, supplying consistent and reliable energy to the motors, flight controller, and onboard electronics. Designed for long-endurance flights, this high-capacity pack provides a balance between power output, efficiency, and weight, ensuring optimal performance across extended missions. Its stable discharge curve and low internal resistance support smooth voltage delivery, reducing fluctuations that can affect flight stability.
            </p>
  
            <p>
              Learn more about the technical details in the linked document: <a href="https://www.swaytronic.ch/LiPo-Akku-222V-16000mAh-35C-HV-XT150" className="interactive-link" target="_blank" rel="noopener noreferrer">Swaytronic LiPo Battery Technical Specifications</a>
            </p>

            <h3>Flight Controller: Pixhawk 6C</h3>
            <figure className="image-figure image-figure--medium image-figure--center">
              <img className="projectdescrip-img image-img" src="https://static.igem.wiki/teams/5590/assets-drone/hardware/pixhawk.webp" alt="Flight Controller of the drone" />
              <figcaption className="image-caption"><strong>Figure 6:</strong> Pixhawk 6C flight controller - the brain managing all flight operations.</figcaption>
            </figure>
            <p>
              The Pixhawk 6C acts as the brain of the drone, managing all aspects of flight control and stability. It continuously gathers data from onboard sensors to determine the drone's precise position and motion. By processing pilot inputs or autonomous flight commands, the Pixhawk calculates and adjusts motor outputs in real time, ensuring smooth, balanced, and responsive operation.
            </p>

            <h4>Technical Specifications</h4>
            <ul className="file-tech-list">
              <li>Processor: STM32H743 @ 480&nbsp;MHz (Arm Cortex‑M7, 2&nbsp;MB flash, 1&nbsp;MB RAM)</li>
              <li>Sensors: Dual IMUs (ICM‑42688‑P + BMI055), barometer (MS5611), magnetometer (IST8310)</li>
              <li>Outputs: 16 PWM/servo channels (8 via IO, 8 via FMU; hardware‑switchable 3.3&nbsp;V / 5&nbsp;V signal level)</li>
              <li>Interfaces: 3 UART (Telem1, Telem2, Telem3), 2 GPS ports (full + basic), 1 I²C, 2 CAN buses, dedicated RCIn and S.BUS output, MicroSD logging</li>
              <li>Power: Max input 6&nbsp;V; USB 4.75–5.25&nbsp;V; servo rail 0–36&nbsp;V; redundant power inputs; onboard failsafes</li>
              <li>Features: Redundant, temperature‑controlled IMUs with vibration isolation; GPS and gimbal support; companion computer integration (e.g., Jetson) for vision, mapping, and avoidance</li>
            </ul>
            <p>
              Learn more about the technical details in the linked document: <a href="https://docs.px4.io/main/en/flight_controller/pixhawk6c.html" className="interactive-link" target="_blank" rel="noopener noreferrer">Pixhawk 6C Technical Specifications</a>
            </p>

            <h3>Remote Controller: Turnigy Evolution Digital AFHDS Radio Control System</h3>
            <figure className="image-figure image-figure--medium image-figure--center">
              <img className="projectdescrip-img image-img" src="https://static.igem.wiki/teams/5590/assets-drone/components/pxl-20250928-171822786.webp" alt="Turnigy Evolution transmitter" />
              <figcaption className="image-caption"><strong>Figure 7:</strong> Turnigy Evolution Digital AFHDS transmitter for manual control and monitoring.</figcaption>
            </figure>
            <p>
              The Turnigy Evolution Digital AFHDS Radio Control System is a 2.4&nbsp;GHz digital transmitter used to manually control and monitor the drone during testing and development. Designed for both safety and reliability, it provides an immediate failsafe option, allowing the operator to take control at any time during autonomous operations. Its ergonomic interface, real-time telemetry feedback, and multi-channel communication make it an intuitive and dependable tool for UAV operation.
            </p>

            <h3>NVIDIA Jetson Orin Nano</h3>
            <figure className="image-figure image-figure--large image-figure--center">
              <img className="projectdescrip-img image-img" src="https://static.igem.wiki/teams/5590/assets-drone/hardware2/jetson.webp" alt="Jetson Orin Nano" />
              <figcaption className="image-caption"><strong>Figure 8:</strong> NVIDIA Jetson Orin Nano for AI inference and autonomous navigation.</figcaption>
            </figure>
            <p>
              The NVIDIA Jetson Orin Nano serves as the companion computer responsible for high-level onboard computation, including real-time image processing, AI inference, and autonomous navigation tasks. It works in close coordination with the Pixhawk 6C flight controller through the ROS2 and MAVROS frameworks, allowing advanced algorithms, such as stereo vision, depth estimation, and fire detection, to run directly onboard without relying on external computing resources.
            </p>

            <h4>Technical Specifications</h4>
            <ul className="file-tech-list">
              <li>CPU: 6-core Arm Cortex-A78AE v8.2 64-bit</li>
              <li>GPU: 1024-core NVIDIA Ampere architecture with 32 Tensor Cores</li>
              <li>AI Performance: Up to 40 TOPS (INT8)</li>
              <li>Memory: 8 GB LPDDR5 (68 GB/s bandwidth)</li>
              <li>Storage: M.2 Key M slot for NVMe SSD</li>
              <li>I/O Interfaces: 1x PCIe Gen3 x4 (M.2 Key M), 2x MIPI CSI-2 camera interfaces, 4x USB 3.2 Gen 2, GPIO, I2C, SPI, UART</li>
              <li>Networking: Gigabit Ethernet</li>
              <li>Power Consumption: Configurable 7 W – 15 W</li>
              <li>Operating System: Ubuntu 22.04 with NVIDIA JetPack 6 (L4T r36.x)</li>
            </ul>

            <p>
              Learn more about the technical details in the linked document: <a href="https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/nano-super-developer-kit/" className="interactive-link" target="_blank" rel="noopener noreferrer">NVIDIA Jetson Orin Nano Technical Specifications</a>
            </p>

            <h3>Raspberry Pi</h3>
            <figure className="image-figure image-figure--large image-figure--center">
              <img className="projectdescrip-img image-img" src="https://static.igem.wiki/teams/5590/assets-drone/hardware2/raspberry-pi.webp" alt="Raspberry Pi 5" />
              <figcaption className="image-caption"><strong>Figure 9:</strong> Raspberry Pi 5 Model B (8 GB) for sensor interfacing and peripheral management.</figcaption>
            </figure>
            <p>
              The Raspberry Pi 5 Model B (8 GB) functions as a supporting onboard microcontroller, dedicated to handling sensor interfacing, peripheral management, and communication tasks that complement the main computing system powered by the Jetson Orin Nano. It provides a flexible and reliable platform for lightweight processing, data logging, and custom control applications, allowing the drone to manage secondary systems such as telemetry, thermal sensing, or auxiliary automation routines.
            </p>

            <h4>Technical Specifications</h4>
            <ul className="file-tech-list">
              <li>Processor: Broadcom BCM2712, Quad-core Cortex-A76 (ARM v8.2-A) 64-bit @ 2.4 GHz</li>
              <li>Memory: 8 GB LPDDR4X-4267 SDRAM</li>
              <li>Storage: MicroSD card slot (UHS-I; supports large-capacity cards)</li>
              <li>Networking: Gigabit Ethernet, Dual-band 2.4 GHz / 5.0 GHz Wi‑Fi (802.11ac), Bluetooth 5.0/BLE</li>
              <li>USB Ports: 2× USB 3.0, 2× USB 2.0</li>
              <li>Display & Camera Interfaces: 2× micro HDMI (dual 4Kp60), 2× MIPI connectors for camera/display</li>
              <li>GPIO: 40‑pin header with I²C, SPI, UART, and PWM support</li>
              <li>Power Input: 5 V DC via USB‑C (27 W PSU recommended for heavy loads)</li>
              <li>Operating System: Raspberry Pi OS (Raspbian) 64‑bit</li>
            </ul>

            <p>
              Learn more about the technical details in the linked document: <a href="https://www.raspberrypi.com/" className="interactive-link" target="_blank" rel="noopener noreferrer">Raspberry Pi Technical Specifications</a>
            </p>

            <h3>Propellers: Eolo Carbon Fiber Reinforced Nylon UAV Propellers 15x5.5 inch</h3>
            <figure className="image-figure image-figure--small image-figure--center">
              <img
              className="projectdescrip-img image-img"
              src="https://static.igem.wiki/teams/5590/assets-drone/hardware2/propellers.webp"
              />
              <figcaption className="image-caption"><strong>Figure 10:</strong> Eolo carbon fiber reinforced nylon propellers for efficient thrust generation.</figcaption>
            </figure>
            <p>
              The Eolo 15×5.5 inch carbon fiber reinforced nylon propellers provide the lift and thrust necessary for stable and efficient flight. Their lightweight yet durable construction ensures excellent strength-to-weight performance, minimizing vibration and improving flight responsiveness. The carbon fiber reinforcement significantly enhances rigidity and aerodynamic efficiency, while the nylon matrix provides flexibility and impact resistance, reducing the risk of damage during operation.
            </p>
            <p>
              Learn more about the technical details in the linked document: <a href="https://sunnyskyusa.com/products/eolo-cn15-5-5-prop" className="interactive-link" target="_blank" rel="noopener noreferrer">Eolo Propellers Technical Specifications</a>
            </p>
          </div>

          <div className="proof-block" id="sensors">
            <h2>Sensors and Cameras</h2>

            <h3>Two RGB Cameras - Pi Camera Module 3 NoIR</h3>
            <figure className="image-figure image-figure--large image-figure--center">
              <img className="projectdescrip-img image-img" src="https://static.igem.wiki/teams/5590/assets-drone/hardware/rgb-cameras.webp" alt="Drone's cameras" />
              <figcaption className="image-caption"><strong>Figure 11:</strong> Raspberry Pi Camera Module 3 NoIR units for stereo vision and depth estimation.</figcaption>
            </figure>
            <p>
              The drone is equipped with two Raspberry Pi Camera Module 3 NoIR units. These cameras capture synchronized RGB imagery during flight, enabling real-time depth estimation, mapping, and obstacle detection. The absence of an infrared filter (NoIR) allows better low-light performance and compatibility with infrared illumination when needed.
            </p>
            <p>
              This setup provides the visual foundation for the drone's autonomous navigation and perception systems, supporting computer vision algorithms running on the Jetson Orin Nano. The stereo configuration ensures precise 3D reconstruction of the environment, essential for navigating complex terrains and detecting fire or smoke in forested areas.
            </p>
            <p>
              Learn more about the technical details in the linked document: <a href="https://www.raspberrypi.com/products/camera-module-3/" className="interactive-link" target="_blank" rel="noopener noreferrer">Raspberry Pi Camera Module 3 Technical Specifications</a>
            </p>

            <h3>IR Camera - Lepton 3.5</h3>
            <div className="image-row">
              <figure className="image-figure image-figure--small">
                <img className="projectdescrip-img image-img" src="https://static.igem.wiki/teams/5590/assets-drone/hardware/ir-camera.webp" alt="Infrared camera hardware" />
                <figcaption className="image-caption"><strong>Figure 12a:</strong> FLIR Lepton 3.5 infrared camera hardware.</figcaption>
              </figure>
              <figure className="image-figure image-figure--small">
                <img className="projectdescrip-img image-img" src="https://static.igem.wiki/teams/5590/burn-test/nothing-ir.webp" alt="IR camera live feed" />
                <figcaption className="image-caption"><strong>Figure 12b:</strong> Live IR feed from custom application.</figcaption>
              </figure>
            </div>
            <p>
              The FLIR Lepton 3.5 is a compact infrared thermal imaging sensor used to capture detailed heat maps and surface temperature variations during flight. It provides the thermal data necessary for fire detection, hotspot monitoring, and burn test analysis, making it an essential part of the drone's environmental sensing suite.
            </p>
            <p>
              Figure 12a shows the infrared (IR) camera, while Figure 12b displays the live feed captured through a custom application developed for its operation. Additional details about the software can be found in the <Link to="/software" className="interactive-link">software</Link> section.
            </p>
            <p>
              Learn more about the technical details in the linked document: <a href="https://oem.flir.com/products/lepton/?model=500-0771-01&vertical=microcam&segment=oem" className="interactive-link" target="_blank" rel="noopener noreferrer">FLIR Lepton 3.5 Technical Specifications</a>
            </p>

            <h3>Distance Sensor - Generic Ultrasonic</h3>
            <figure className="image-figure image-figure--medium image-figure--center">
              <img className="projectdescrip-img image-img" src="https://static.igem.wiki/teams/5590/assets-drone/hardware/screenshot-2025-10-06-at-22-04-34.webp" alt="Ultrasonic distance sensor" />
              <figcaption className="image-caption"><strong>Figure 13:</strong> Ultrasonic distance sensor for altitude and proximity measurements.</figcaption>
            </figure>
            <p>
              The ultrasonic distance sensor provides accurate altitude and proximity measurements, enabling the drone to maintain a safe distance from the ground and nearby obstacles. Mounted facing downward, it continuously measures the time-of-flight of sound waves reflected from surfaces, giving the flight controller real-time altitude feedback.
            </p>
            <p>
              Learn more about the technical details in the linked document: <a href="https://www.sparkfun.com/ultrasonic-distance-sensor-hc-sr04.html" className="interactive-link" target="_blank" rel="noopener noreferrer">HC-SR04 Ultrasonic Sensor Technical Specifications</a>
            </p>
          </div>

          <div className="proof-block" id="parts-built">
            <h2>Parts we built</h2>
            <p>
              Our drone includes engineered subsystems designed to improve structural integration and ease of maintenance. These include the battery holder and camera holder, both developed to optimize mounting and protection.
            </p>

            {/* 3D Printing Video */}
            <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              <div style={{ maxWidth: 720, margin: '0 auto' }}>
                <iframe
                  title="EPFL: 3D Printing Demonstration – Fabrication of a Custom Drone Component (2025)"
                  width="100%"
                  height="315"
                  src="https://video.igem.org/videos/embed/nerUodQ9ioCPkx1bUgyfd8?muted=1"
                  allowFullScreen
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  style={{ border: 0, borderRadius: 8 }}
                />
              </div>
              <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '0.5rem', color: '#666' }}>
                Printing Demonstration : Fabrication of a Custom Drone Component
              </p>
            </div>
            <p>
              The video demonstrates the 3D printing process used to fabricate one of our custom-designed drone parts. The footage shows the printer layer-by-layer deposition in action, highlighting the precision, material consistency, and design-to-production workflow that allow our team to rapidly prototype and test structural components before integration into the final drone assembly.
            </p>

            <h3>Battery Holder</h3>
            <p>
              We designed and built a custom battery holder to prevent pressure on the battery and eliminate potential safety risks. The system combines a 3D-printed support, Velcro straps, and rubber strips for optimal stability and protection. Each component serves a distinct purpose: the 3D-printed frame and straps ensure a secure, tight fit, while the rubber pieces increase friction and vibration damping, preventing any unwanted movement during flight.
            </p>

            {/* Battery Holder Video */}
            <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              <div style={{ maxWidth: 720, margin: '0 auto' }}>
                <iframe
                  title="EPFL: Battery Holder Stability Demonstration (2025)"
                  width="100%"
                  height="315"
                  src="https://video.igem.org/videos/embed/ko262NtGnpHXCZqsiPagjX"
                  allowFullScreen
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  style={{ border: 0, borderRadius: 8 }}
                />
              </div>
               <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '0.5rem', color: '#666' }}>
                Battery Holder Stability Demonstration
              </p>
            </div>
            <p>
              The video demonstrates the stability and vibration resistance of our custom-designed battery holder during operation. The test highlights how the holder's reinforced structure and rubber-damped mounts securely maintain the battery's position under dynamic forces, minimizing vibration transfer to the frame and ensuring safe, reliable power delivery throughout flight.
            </p>

            <h3>Camera Holder</h3>
            <figure className="image-figure image-figure--medium image-figure--center">
              <img className="projectdescrip-img image-img" src="https://static.igem.wiki/teams/5590/assets-drone/3d-parts/pxl-20250928-174535872.webp" alt="Custom camera holder" />
              <figcaption className="image-caption"><strong>Figure 14:</strong> Custom camera holder for precise stereo vision configuration.</figcaption>
            </figure>
            <p>
              A custom camera holder was designed to securely mount all onboard cameras, including the infrared (IR) unit, at precisely calibrated distances from one another. This configuration enables accurate stereo vision, with the two RGB cameras positioned approximately 15 cm apart to ensure proper depth perception. The holder also aligns the RGB and IR cameras at matching angles, allowing them to capture the same field of view simultaneously for synchronized visual and thermal imaging.
            </p>

            <h3>ESC Support</h3>
            <figure className="image-figure image-figure--medium image-figure--center">
              <img className="projectdescrip-img image-img" src="https://static.igem.wiki/teams/5590/assets-drone/3d-parts/pxl-20250912-170647411.webp" alt="ESC support structure" />
              <figcaption className="image-caption"><strong>Figure 15:</strong> Custom ESC holder with cooling optimization and vibration isolation.</figcaption>
            </figure>
            <p>
              We designed a custom ESC holder optimized for both lightweight performance and efficient cooling. The structure features hexagonal cutout patterns to reduce mass while maximizing airflow around the electronic speed controllers. The design incorporates a 3D-printed support fitted with rubber pads, which serve to isolate the ESCs from high-frequency vibrations from the motors, enhancing stability and protecting the components during flight.
            </p>
          </div>

          <div className="proof-block" id="assembly">
            <h2>Assembly</h2>
            
            {/* Assembly Video */}
            <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              <div style={{ maxWidth: 720, margin: '0 auto' }}>
                <iframe
                  title="EPFL: Drone Assembly Visualization Using Fusion 360 Explosion Tool (2025)"
                  width="100%"
                  height="315"
                  src="https://video.igem.org/videos/embed/bp8bSYNcPxNgwUw4Qch9ir"
                  allowFullScreen
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  style={{ border: 0, borderRadius: 8 }}
                />
              </div>
               <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '0.5rem', color: '#666' }}>
                Drone Assembly Visualization Using Fusion 360 Explosion Tool
              </p>
            </div>
            <p>
              The drone assembly brings together our custom frame, propulsion system, and sensor array into a modular platform. The design emphasizes easy maintenance and component accessibility while maintaining structural integrity.
            </p>
            <p>
              Explore the full 3D CAD model in the <Link to="/modeling" className="interactive-link">modeling</Link> section
            </p>
            
          </div>

          <div className="proof-block" id="spraying">
            <h2>Spraying system</h2>
            <p>
              The spraying system is designed to handle gel-like substances, enabling them to be dispersed in a homogeneous manner while maintaining their integrity. This ensures effective coating of surfaces during fire events. Due to limited development time, the system was not integrated into the current hardware. However, a modeling analysis was conducted to identify the most suitable spraying mechanism for integration with the drone, and the results are presented in the <Link to="/modeling" className="interactive-link">modeling</Link> section.
            </p>
          </div>

          <div className="proof-block" id="results">
            <h2>Results & Limitations</h2>
            <p>
              While autonomous navigation using manually defined waypoints on a map was successfully implemented, we were unable to fully develop and integrate an algorithm capable of detecting and autonomously surrounding a fire, nor to implement the spraying system, due to time constraints.
            </p>
            <p>
              Nonetheless, significant upgrades were made to the drone inherited from the EPFL iGEM Team 2024. These include several custom-designed components such as the battery holder, camera mounts, and ESC support structure. In addition, the sensor and camera systems were configured to enable real-time data collection and processing, creating a robust foundation for future advancements in firefighting drone applications through the integration of stereo vision and other intelligent navigation algorithms.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
};

export default HardwareSection;