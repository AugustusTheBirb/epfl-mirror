import React, { useLayoutEffect } from "react";
import HeroProject from "./heroproject/heroproject";
import "./project.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);



const Project: React.FC = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animated-word", {
        opacity: 0,
        y: 10,
        scale: 0.95,
        duration: 2,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".project-mission",
          start: "top 80%",
        },
      });

      gsap.from(".columns-2 li", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".columns-2",
          start: "top 85%",
        },
      });

      gsap.to(".columns-2 li", {
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".columns-2",
          start: "top 85%",
        },
      });

      gsap.from(".project-nav-grid .nav-card", {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-nav-grid",
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <HeroProject
        title="Pyronix"
        subtitle="Rethinking Fire Retardant for a Burning World"
        image="https://static.igem.wiki/teams/5590/optimizedhomepage/herovid/wiki-video-v3-2.webp"
      >
        <div className="project-hero">
          <div className="project-hero-text" id="hero-text">
            <div className="title">Pyronix</div>
            <div className="subtitle">Rethinking Fire Retardant for a Burning World</div>
            <div className="body">
              <strong>Wildfires</strong> are a natural part of many ecosystems.
            </div>
            <div className="body">
              But <strong>climate change</strong> is making them more <strong>frequent</strong>, <strong>intense</strong>, and <strong>devastating</strong>.
            </div>
            <div className="body">
              <strong>Traditional containment methods</strong>, as chemical retardants, physical firebreaks, and controlled burns, are often <strong>too slow</strong>, <strong>inefficient</strong>, or <strong>harmful</strong> to the environment.
            </div>
          </div>
          <div className="project-hero-image" id="hero-image">
            <img src="https://static.igem.wiki/teams/5590/optimizedhomepage/herovid/wiki-video-v3-2.webp" alt="Project visual" />
          </div>
        </div>
      </HeroProject>

    <div className="project-mission">
        <div className="body">
          <div className="subtitle" style={{ color: "var(--color-dark-blue)" }}>
            Our mission:
          </div>

          <div className="body">
            Design a <span className="animated-word">NEW</span> generation of wildfire containment that is:
          </div>

          <ul className="columns-2">
            <li>🌱 Sustainable</li>
            <li>⚡ Efficient</li>
            <li>📈 Scalable</li>
          </ul>

          <div className="body" style={{ marginTop: "2rem" }}>
            We use <span className="animated-word">synthetic biology</span> and <span className="animated-word">autonomous drones</span> to create a bio-based, <span className="animated-word">fire-retardant hydrogel</span> that is:
          </div>

          <ul className="columns-2">
            <li>♻️ Biodegradable</li>
            <li>🛡️ Non-toxic</li>
            <li>🔄 Continuously produced by engineered microbes</li>
          </ul>

          <div className="body" style={{ marginTop: "2rem" }}>
            Combined with <span className="animated-word">drones</span>, this system enables us to:
          </div>

          <ul className="columns-4">
            <li>🔥 Stop fire spread in critical zones</li>
            <li>🌿 Minimize ecological disruption</li>
            <li>💨 Reduce CO₂ and toxic smoke emissions</li>
            <li>🛠 Integrate with existing firefighting tools</li>
          </ul>
        </div>
    

      <div className="project-navigation-section">
          <h2 className="subtitle">Explore by topic</h2>
          <div className="project-nav-grid">
            <Link className="nav-card" to="/project-description">
                <img src="https://static.igem.wiki/teams/5590/optimizedhomepage/herovid/wiki-video-v3-2.webp" alt="Project Description" />
                <div className="subtitle" style={{ fontSize: "1.2rem" }}>
                  Project Description
                </div>
              
            </Link>
            <Link className="nav-card" to="/headline">
              <div className="nav-emoji">🧮</div>
              <div className="subtitle" style={{ fontSize: "1.2rem" }}>
                  Wildfire Headlines
                </div>
            </Link>
            <Link className="nav-card" to="/model">
              <div className="nav-emoji">🧮</div>
              <div className="subtitle" style={{ fontSize: "1.2rem" }}>
                  Model
                </div>
            </Link>
            <Link className="nav-card" to="/engineering">
              <div className="nav-emoji">🛠️</div>
              <div className="subtitle" style={{ fontSize: "1.2rem" }}>
                  Engineering
                </div>
            </Link>
            <Link className="nav-card" to="/results">
              <div className="nav-emoji">📊</div>
              <div className="subtitle" style={{ fontSize: "1.2rem" }}>
                  Results
                </div>
            </Link>
            <Link className="nav-card" to="/applications">
              <div className="nav-emoji">🌿</div>
              <div className="subtitle" style={{ fontSize: "1.2rem" }}>
                  Applications
                </div>
            </Link>
            <Link className="nav-card" to="/contributions">
              <div className="nav-emoji">🤝</div>
              <div className="subtitle" style={{ fontSize: "1.2rem" }}>
                  Contribution
                </div>
            </Link>
          
          </div>
        </div>
    </div>
  </div>
  );
};

export default Project;
