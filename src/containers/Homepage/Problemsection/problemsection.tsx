import React, { useRef, useEffect, useState } from 'react';

const ProblemSection = () => {
  const problemSections = useRef<(HTMLElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [smoothProgress, setSmoothProgress] = useState(0);

  // 🔹 Effect 1: intersection + scroll progress
  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '-10% 0px -10% 0px',
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        const ratio = entry.intersectionRatio;

        if (entry.isIntersecting) {
          target.classList.add('visible');
          target.classList.remove('exiting');
          target.style.setProperty('--intersection-ratio', ratio.toString());
        } else {
          target.classList.add('exiting');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    problemSections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const wrapperTop = wrapperRect.top;
      const wrapperHeight = wrapperRect.height;
      const windowHeight = window.innerHeight;

      let progress = 0;
      const scrolledIntoView = windowHeight / 2 - wrapperTop;
      const totalScrollDistance = wrapperHeight;

      if (scrolledIntoView <= 0) {
        progress = 0;
      } else if (scrolledIntoView >= totalScrollDistance) {
        progress = 1;
      } else {
        progress = scrolledIntoView / totalScrollDistance;
      }

      setScrollProgress(progress);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // 🔹 Effect 2: smoothing progress
  useEffect(() => {
    let frame: number;

    const animate = () => {
      setSmoothProgress((prev) => {
        const lerp = 0.08; // smaller = smoother/slower
        return prev + (scrollProgress - prev) * lerp;
      });
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [scrollProgress]);

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

  const getIconPosition = () => {
    if (!pathRef.current || !wrapperRef.current) return { x: 50, y: 50 };

    const adjustedProgress = Math.max(0, Math.min(1, smoothProgress));
    const pathLength = pathRef.current.getTotalLength();
    const point = pathRef.current.getPointAtLength(adjustedProgress * pathLength);

    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const yPosition = (point.y / 1800) * wrapperRect.height;

    return { x: point.x, y:yPosition };
  };

  const iconPosition = getIconPosition();

  return (
    <div className="problem-section-wrapper" ref={wrapperRef}>
      <style>{`
        .problem-section-wrapper {
          position: relative;
          width: 100%;
          min-height: 2000px;
          padding:  180px 0 120px 0;
          padding-top: 200px;
          overflow: hidden;
          background: transparent;
        }

        .problem-section-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          
          z-index: 0;
          pointer-events: none;
        }

        .problem-path {
          position: absolute;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          pointer-events: none;
          z-index: 1;
          animation: fadeInPath 1.5s ease-out forwards;
          animation-delay: 0.5s;
        }

        @keyframes fadeInPath {
          from {
            opacity: 0;
          }
          to {
            opacity: 0;
          }
        }

        .main-path {
          stroke-dasharray: 3000;
          stroke-dashoffset: 3000;
          animation: drawPath 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.3s;
          filter: url(#liquid-glow);
        }

        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }

        .flow-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 100, 0, 1), transparent);
          opacity: 0;
          animation: flowParticle 4s ease-in-out infinite;
        }

        @keyframes flowParticle {
          0%, 100% { opacity: 0; transform: scale(0); }
          10% { opacity: 0.8; transform: scale(1); }
          90% { opacity: 0.8; transform: scale(1); }
        }

        .traveling-icon {
          position: absolute;
          width: 120px;
          height: 120px;
          z-index: 10;
          pointer-events: none;
          will-change: transform;
          opacity: 0;
          animation: fadeInIcon 1.2s ease-out forwards;
          animation-delay: 1s;
        }

        @keyframes fadeInIcon {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .icon-liquid-bg {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: radial-gradient(circle, 
            rgba(255, 100, 0, 0.4) 0%, 
            rgba(255, 69, 0, 0.2) 30%,
            transparent 70%);
          animation: liquid-morph 10s ease-in-out infinite;
          filter: blur(25px);
          will-change: transform;
        }

        @keyframes liquid-morph {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: rotate(0deg) scale(1);
          }
          20% {
            border-radius: 40% 60% 50% 50% / 50% 50% 60% 40%;
            transform: rotate(72deg) scale(1.08);
          }
          40% {
            border-radius: 50% 50% 40% 60% / 40% 60% 50% 50%;
            transform: rotate(144deg) scale(0.95);
          }
          60% {
            border-radius: 60% 40% 60% 40% / 50% 50% 50% 50%;
            transform: rotate(216deg) scale(1.05);
          }
          80% {
            border-radius: 40% 60% 50% 50% / 60% 40% 50% 50%;
            transform: rotate(288deg) scale(0.98);
          }
        }

        .icon-ripple {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid rgba(255, 100, 0, 0.6);
          animation: ripple-wave 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          top: 0;
          left: 0;
        }

        .icon-ripple:nth-child(2) { animation-delay: 1s; }
        .icon-ripple:nth-child(3) { animation-delay: 2s; }

        @keyframes ripple-wave {
          0% {
            transform: scale(0.5);
            opacity: 1;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .icon-emoji {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 4rem;
          filter: drop-shadow(0 0 30px rgba(255, 100, 0, 1));
          animation: float-smooth 4s ease-in-out infinite, 
                     rotate-gentle 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes float-smooth {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-20px) scale(1.1);
          }
        }

        @keyframes rotate-gentle {
          0%, 100% {
            transform: translate(-50%, -50%) rotate(-8deg);
          }
          50% {
            transform: translate(-50%, -50%) rotate(8deg);
          }
        }

        .problem-section {
          position: relative;
          max-height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
          opacity: 0;
          transform: translateY(80px) scale(0.95);
          transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 1s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 5;
        }

        .problem-section.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .problem-section.exiting {
          opacity: 0.2;
          transform: translateY(-40px) scale(0.98);
        }

        .problem-content {
          max-width: 900px;
          width: 100%;
          position: relative;
          padding: 4rem;
          background: linear-gradient(135deg, 
            rgba(0, 0, 0, 0.6) 0%, 
            rgba(20, 10, 10, 0.4) 100%);
          border-radius: 30px;
          backdrop-filter: blur(20px) saturate(150%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .problem-content::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, 
            rgba(255, 100, 0, 0.05) 0%, 
            transparent 70%);
          animation: ambient-float 15s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes ambient-float {
          0%, 100% { transform: translate(0%, 0%) rotate(0deg); }
          33% { transform: translate(10%, -10%) rotate(120deg); }
          66% { transform: translate(-10%, 10%) rotate(240deg); }
        }

        .problem-section.visible .problem-content {
          transform: translateZ(0);
        }

        .problem-section:hover .problem-content {
          border-color: rgba(255, 100, 0, 0.3);
          box-shadow: 
            0 30px 80px rgba(255, 100, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .problem-number {
          font-size: 8rem;
          font-weight: 900;
          opacity: 0.1;
          position: absolute;
          top: -3rem;
          right: 2rem;
          line-height: 1;
          user-select: none;
          background: linear-gradient(135deg, 
            var(--accent-color, #FF6400) 0%, 
            transparent 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: number-pulse 3s ease-in-out infinite;
        }

        @keyframes number-pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.02); }
        }

        .problem-text {
          font-size: 1.75rem;
          line-height: 1.9;
          color: #ffffff;
          margin: 0 0 2.5rem 0;
          position: relative;
          z-index: 2;
          font-weight: 300;
          letter-spacing: 0.02em;
        }

        .problem-text::before {
          content: '';
          position: absolute;
          left: -2rem;
          top: 0;
          bottom: 0;
          width: 5px;
          background: linear-gradient(to bottom, 
            var(--accent-color, #FF6400) 0%, 
            transparent 100%);
          border-radius: 3px;
          box-shadow: 0 0 25px var(--accent-color, #FF6400);
          animation: accent-pulse 2s ease-in-out infinite;
        }

        @keyframes accent-pulse {
          0%, 100% { opacity: 0.8; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.05); }
        }

        .problem-line {
          height: 4px;
          width: 0;
          border-radius: 3px;
          transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
          box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
          position: relative;
          overflow: hidden;
        }

        .problem-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.6) 50%, 
            transparent 100%);
          animation: shimmer 2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        .problem-section.visible .problem-line {
          width: 100%;
        }

                  @media (max-width: 768px) {
          .problem-section-wrapper {
            min-height: 1800px;
            padding: 80px 0;
            padding-top: 250px;
          }

          .problem-section {
            min-height: 400px;
            padding: 3rem 1rem;
          }

          .problem-content {
            padding: 2.5rem;
          }

          .problem-number {
            font-size: 5rem;
            top: -1.5rem;
            right: 1rem;
          }

          .problem-text {
            font-size: 1.3rem;
            line-height: 1.7;
          }

          .problem-text::before {
            left: -1.5rem;
            width: 4px;
          }

          .traveling-icon {
            width: 80px;
            height: 80px;
          }

          .icon-emoji {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <svg className="problem-path" viewBox="0 0 100 1800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF6400" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FF4500" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C82300" stopOpacity="1" />
          </linearGradient>
          <filter id="liquid-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feOffset dx="0" dy="0" result="offsetBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
  ref={pathRef}
  d="M 50 100
     C 70 250, 85 400, 85 600
     S 90 1000, 90 1300
     S 50 1500, 50 1700
     L 50 1900"
  stroke="url(#pathGradient)"
  strokeWidth="4"
  fill="none"
  className="main-path"
  strokeLinecap="round"
/>
      </svg>

      <div className="flow-particles">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${50 + Math.sin(i * 0.5) * 35}%`,
              top: `${(i / 12) * 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div 
        className="traveling-icon" 
        style={{
          top: `${iconPosition.y}px`,
          left: `${iconPosition.x}%`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="icon-liquid-bg"></div>
        <div className="icon-ripple"></div>
        <div className="icon-ripple"></div>
        <div className="icon-ripple"></div>
        <img className="icon-emoji" src="https://static.igem.wiki/teams/5590/socials/favicon-background-removed.webp" alt="Emoji" />
      </div>

      {problemData.map((problem, index) => (
        <section
          key={index}
          ref={(el) => (problemSections.current[index] = el)}
          className="problem-section"
        >
          <div className="problem-content" style={{ '--accent-color': problem.accentColor } as React.CSSProperties}>
            <div
              className="problem-number"
              style={{ '--accent-color': problem.accentColor } as React.CSSProperties}
            >
              {String(index + 1).padStart(2, '0')}
            </div>
            <p
              className="problem-text"
              style={{ '--accent-color': problem.accentColor } as React.CSSProperties}
            >
              {problem.text}
            </p>
            <div
              className="problem-line"
              style={{ backgroundColor: problem.accentColor }}
            ></div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProblemSection;