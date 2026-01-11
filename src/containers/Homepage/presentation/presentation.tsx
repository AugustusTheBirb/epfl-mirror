import React, { useRef, useEffect } from 'react';
import AwardsTicker from '../Awardband/awards';
import './presentation.css';

const Presentation = () => {
  const problemSections = useRef<(HTMLElement | null)[]>([]);
  const solutionRef = useRef<HTMLElement>(null);
  const transitionRef = useRef<HTMLElement>(null);
  const exploreTransitionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Looser threshold so animations trigger reliably
      rootMargin: '0px ', // Trigger a bit before fully in view
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          target.classList.add('visible');
          target.classList.remove('exiting');
        } else {
          target.classList.add('exiting');
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Observe all problem sections
    problemSections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    if (transitionRef.current) observer.observe(transitionRef.current);
    if (solutionRef.current) observer.observe(solutionRef.current);
    if (exploreTransitionRef.current) observer.observe(exploreTransitionRef.current);

    return () => observer.disconnect();
  }, []);

  const problemData = [
    {
      text: 'Wildfires are becoming more frequent and destructive as global temperatures rise, while water drops and firebreaks are increasingly unsustainable.',
      accentColor: '#FF6400',
    },
    {
      text: 'Conventional fire retardants contaminate ecosystems and pose serious health risks to people.',
      accentColor: '#FF4500',
    },
    {
      text: 'Firefighters remain exposed to extreme heat, smoke, and dangerous terrain, often forced to react after the damage has begun.',
      accentColor: '#C82300',
    },
  ];

  return (
    <div className="section-two-container">

      {/* Transition Question */}
      <section ref={transitionRef} className="transition-section">
        <h2 className="transition-text">
          What if we could harness synthetic biology and technology to prevent
          wildfires safely and sustainably?
        </h2>
      </section>
       <AwardsTicker />

      {/* Solution Section */}
      <section ref={solutionRef} className="solution-section">
        <div className="flash-overlay"></div>
        <h1 className="solution-title">Introducing Pyronix</h1>

        

        <div className="solution-content">
          {/* Feature 1 - Synthetic Hydrogel */}
          <div className="feature-row feature-hydrogel">
            <div className="feature-text-fluid left">
              <div className="text-reveal-container">
                <h3 className="feature-title-fluid">Pyronix is a</h3>
                <h3 className="feature-title-fluid highlight">
                  firefighting solution
                </h3>
              </div>

              <div className="text-reveal-container">
                <p className="feature-desc-fluid">where drones deploy a synthetic</p>
                <p className="feature-desc-fluid">hydrogel made of bacterial</p>
                <p className="feature-desc-fluid"> <span className="highlight-text">cellulose,</span></p> 
                <p className="feature-desc-fluid"> <span className="highlight-text">chitosan,</span></p> 
                <p className="feature-desc-fluid">and  <span className="highlight-text">silica,</span> </p>
                <p className="feature-desc-fluid">to combat flames <span className="highlight-text">safely and sustainably.</span></p>
              </div>
            </div>

            <div className="feature-visual-enhanced right">
              <div className="chemical-container">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
                <div className="particle particle-5"></div>

                <img
                  src="https://static.igem.wiki/teams/5590/homepage/feature1.webp"
                  alt="Pyronix Feature 1"
                  className="feature-image chemical-image-fluid"
                />

              </div>
            </div>
          </div>

          {/* Feature 2 - Drone Technology */}
          <div className="feature-row feature-drone">
            <div className="feature-visual-enhanced left">
              <div className="drone-container">
                <div className="drone-circle-bg"></div>
                <div className="drone-circle-bg delay-1"></div>
                <div className="drone-circle-bg delay-2"></div>

                <img
                  src="https://static.igem.wiki/teams/5590/homepage/feature2.webp"
                  alt="Pyronix Drone"
                  className="feature-image drone-image-fluid"
                />
              </div>
            </div>

            <div className="feature-text-fluid right">
              <div className="text-reveal-container">
                <h3 className="feature-title-fluid drone-line-1">
                  Equipped with real-time
                </h3>
                <h3 className="feature-title-fluid drone-line-2">
                  fire detection, our
                </h3>
                <h3 className="feature-title-fluid drone-line-3">
                  drone autonomously
                </h3>
                <h3 className="feature-title-fluid highlight drone-line-4">
                  maps
                </h3>
              </div>

              <div className="text-reveal-container">
                <p className="feature-desc-fluid drone-line-5">
                  and target <span className="highlight-text"> fire zones</span></p>
                <p className="feature-desc-fluid drone-line-6">with precision. An</p>
                <p className="feature-desc-fluid drone-line-7">
                  onboard algorithm
                </p>
                <p className="feature-desc-fluid drone-line-8">
                  calculates the <span className="highlight-text">optimal spray path</span>,
                </p>
                <p className="feature-desc-fluid drone-line-9">
                ensuring <span className="highlight-text">efficient</span> and <span className="highlight-text"> rapid response</span>
                </p>
                <p className="feature-desc-fluid drone-line-11">
                  wildfire containment.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 - How Pyronix Works */}
          <div className="feature-row feature-mechanism">
            <div className="feature-text-fluid left">
              <div className="text-reveal-container">
                <h3 className="feature-title-fluid mechanism-line-1">
                  When Pyronix
                </h3>
                <h3 className="feature-title-fluid mechanism-line-2">
                  comes into contact with fire,
                </h3>
                <h3 className="feature-title-fluid highlight mechanism-line-3">
                  chitosan and cellulose
                </h3>
              </div>

              <div className="text-reveal-container">
                <p className="feature-desc-fluid mechanism-line-4">
                  retain moisture while
                </p>
                <p className="feature-desc-fluid mechanism-line-5">
                  forming a <span className="highlight-text">protective char,</span>
                </p>
                <p className="feature-desc-fluid mechanism-line-6">
                  with silica enhancing
                </p>
                <p className="feature-desc-fluid mechanism-line-7">
                  <span className="highlight-text">insulation</span> and <span className="highlight-text">ignition resistance.</span>
                </p>
              </div>
            </div>

            <div className="feature-visual-enhanced right">
              <div className="mechanism-container">
                {/* Main mechanism image */}
                <img
                  src="https://static.igem.wiki/teams/5590/homepage/feature3.webp"
                  alt="Pyronix mechanism visualization showing protective char formation"
                  className="mechanism-image-fluid"
                />

                {/* Animated glow effect around image */}
                <div className="mechanism-glow"></div>

                {/* Component labels with animated connection lines */}
                <svg className="label-connections" viewBox="0 0 500 500">
                  <line x1="80" y1="120" x2="200" y2="180" className="label-line line-chitosan" />
                  <line x1="420" y1="160" x2="300" y2="220" className="label-line line-cellulose" />
                  <line x1="420" y1="340" x2="300" y2="300" className="label-line line-silica" />
                </svg>

                {/* Component labels */}
                <div className="component-label chitosan-label">
                  <div className="label-dot"></div>
                  <span>Chitosan</span>
                </div>
                <div className="component-label cellulose-label">
                  <div className="label-dot"></div>
                  <span>Cellulose</span>
                </div>
                <div className="component-label silica-label">
                  <div className="label-dot"></div>
                  <span>Silica</span>
                </div>

                {/* Animated particles around the mechanism */}
                <div className="mechanism-particle particle-1"></div>
                <div className="mechanism-particle particle-2"></div>
                <div className="mechanism-particle particle-3"></div>
                <div className="mechanism-particle particle-4"></div>
              </div>
            </div>
          </div>

          {/* Feature 4 - Safety & Environmental Protection */}
          <div className="feature-row feature-safety">
            <div className="feature-visual-enhanced left">
              <div className="safety-container">

                <img
                  src="https://static.igem.wiki/teams/5590/homepage/feature4.webp"
                />
                

                {/* Central protection visualization */}
                <div className="protection-pulse-container">
                  <div className="protection-pulse pulse-1"></div>
                  <div className="protection-pulse pulse-2"></div>
                  <div className="protection-pulse pulse-3"></div>
                </div>

                
              </div>
            </div>

            <div className="feature-text-fluid right">
              <div className="text-reveal-container">
                <h3 className="feature-title-fluid safety-line-1">
                  By replacing
                </h3>
                <h3 className="feature-title-fluid safety-line-2">
                  traditional chemical
                </h3>
                <h3 className="feature-title-fluid safety-line-3">
                  retardants, Pyronix
                </h3>
                <h3 className="feature-title-fluid highlight safety-line-4">
                  safeguards
                </h3>
              </div>

              <div className="text-reveal-container">
                <p className="feature-desc-fluid safety-line-5">
                  both <span className="highlight-text">the environment</span>
                </p>
                <p className="feature-desc-fluid safety-line-6">
                  and <span className="highlight-text">firefighters</span> from
                </p>
                <p className="feature-desc-fluid safety-line-7">
                  hazardous exposure.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 5 - Complete Solution Summary */}
          <div className="feature-row feature-complete">
            <div className="feature-text-fluid left">
              <div className="text-reveal-container">
                

                <h3 className="feature-title-fluid complete-line-1">
                  It's a
                </h3>
                <h3 className="feature-title-fluid highlight complete-line-2">
                  cleaner, smarter,
                </h3>
                <h3 className="feature-title-fluid highlight complete-line-3">
                  and safer way
                </h3>
              </div>

              <div className="text-reveal-container">
                <p className="feature-desc-fluid complete-line-4">
                  to manage wildfires
                </p>
                <p className="feature-desc-fluid complete-line-5">
                  before they spread
                </p>
                <p className="feature-desc-fluid complete-line-6">
                  out of control.
                </p>
              </div>

              <div className="text-reveal-container">
                <p className="feature-desc-fluid complete-line-7">
                  <span className="highlight-text">Eco-friendly,</span> powered by
                </p>
                <p className="feature-desc-fluid complete-line-8">
                  <span className="highlight-text">synthetic biology,</span> and
                </p>
                <p className="feature-desc-fluid complete-line-9">
                  built for a <span className="highlight-text">sustainable</span>
                </p>
                <p className="feature-desc-fluid complete-line-10">
                  future in fire control.
                </p>
              </div>
            </div>

            <div className="feature-visual-enhanced right">
              <div className="complete-container">
                <img
                  src="https://static.igem.wiki/teams/5590/homepage/feature5.webp"
                  alt="Complete solution summary"
                  className="feature5-image"
                />
              </div>            
            </div>
          </div>

        </div>

      </section>

      {/* Transition to Explore More Section */}
<section ref={exploreTransitionRef} className="explore-transition-section">
  <div className="explore-transition-content">
    <h2 className="explore-transition-title">
      Ready to dive deeper?
    </h2>
    <p className="explore-transition-subtitle">
      Discover the science, the team, and the journey behind our solution
    </p>
    <div className="explore-arrow">
      <svg 
        className="arrow-icon" 
        width="60" 
        height="60" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M19 14l-7 7m0 0l-7-7m7 7V3" 
        />
      </svg>
    </div>
  </div>
</section>

<div className="video-container">
  <iframe
    width="100%"
    height="500"
    src="https://video.igem.org/videos/embed/2HBuN6Q5a5fXDC2LNFgwu3"
    title="Promotional video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>

</div>
  );
};

export default Presentation;
