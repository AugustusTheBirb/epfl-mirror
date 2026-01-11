import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PANELS = [
  {
    id: 1,
    title: "What is a Wildfire?",
    description: "Wildfires are uncontrolled fires in vegetation and forests. They can start from human activity (campfires, cigarettes, power lines) or lightning. Types include surface, crown, and ground fires.",
    image: "https://static.igem.wiki/teams/5590/wildiferepanels/wildfire1.webp",
    color: "#ff6b35"
  },
  {
    id: 2,
    title: "Fighting Methods",
    description: "Crews use helicopters, planes, engines and hand tools. Fire lines, breaks and backfires remove fuel. Drones and satellites map hotspots and damage in real time.",
    image: "https://static.igem.wiki/teams/5590/wildiferepanels/wildfire2.webp",
    color: "#ff8c42"
  },
  {
    id: 3,
    title: "Consequences",
    description: "Fires emit CO₂ and fine particles, destroy habitats and contaminate water. Suppression can add toxic retardants. Warming and drought increase fire frequency.",
    image: "https://static.igem.wiki/teams/5590/wildiferepanels/wildfire3.webp",
    color: "#d64545"
  }
];

export default function WildfireFluidPanels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const panelsContainer = panelsContainerRef.current;
    
    if (!container || !panelsContainer) return;

    const panels = gsap.utils.toArray<HTMLElement>('.wf-panel');
    
    // Horizontal scroll animation
    const scrollTween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => `+=${panelsContainer.offsetWidth}`,
      }
    });

    // Parallax effect for images
    panels.forEach((panel) => {
      const image = panel.querySelector<HTMLElement>('.wf-img-wrap');
      if (image) {
        gsap.to(image, {
          xPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: panel,
            start: 'left right',
            end: 'right left',
            scrub: 1,
            containerAnimation: scrollTween,
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div ref={containerRef} style={styles.container}>
        <div ref={panelsContainerRef} style={styles.panelsContainer}>
          {PANELS.map((panel, index) => (
            <div key={panel.id} className="wf-panel" style={styles.panel}>
              <div style={styles.panelContent}>
                <div className="wf-img-wrap" style={styles.imageWrap}>
                  <img 
                    src={panel.image} 
                    alt={panel.title}
                    style={styles.image}
                  />
                  <div style={{
                    ...styles.imageOverlay,
                    background: `linear-gradient(to right, ${panel.color}20, transparent)`
                  }} />
                </div>
                
                <div style={styles.textContent}>
                  <div style={styles.numberBadge}>
                    <span style={{ color: panel.color }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 style={{ ...styles.title, color: panel.color }}>
                    {panel.title}
                  </h2>
                  <p style={styles.description}>
                    {panel.description}
                  </p>
                  <div style={styles.accentBar}>
                    <div style={{ ...styles.accentBarFill, background: panel.color }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .wf-panel > div {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          
          .wf-img-wrap {
            width: 100% !important;
            height: 50vh !important;
          }
        }

        @media (max-width: 768px) {
          .wf-panel h2 {
            font-size: 2rem !important;
          }
          
          .wf-panel p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: 'black',
  },
  panelsContainer: {
    display: 'flex',
    width: 'fit-content',
  },
  panel: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    background: 'black',
  },
  panelContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
    maxWidth: '1400px',
    width: '90%',
    height: '80vh',
  },
  imageWrap: {
    position: 'relative',
    flex: '0 0 55%',
    height: '100%',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
  },
  textContent: {
    flex: '1',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  numberBadge: {
    display: 'inline-block',
    alignSelf: 'flex-start',
    padding: '0.5rem 1.25rem',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '50px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    fontSize: '1.1rem',
    fontWeight: '700',
    letterSpacing: '0.1em',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '700',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    margin: 0,
  },
  description: {
    fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
    lineHeight: '1.8',
    color: 'rgba(255, 255, 255, 0.85)',
    margin: 0,
  },
  accentBar: {
    width: '100%',
    height: '4px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '2px',
    overflow: 'hidden',
    marginTop: '1rem',
  },
  accentBarFill: {
    height: '100%',
    width: '40%',
    borderRadius: '2px',
    boxShadow: '0 0 20px currentColor',
  },
};