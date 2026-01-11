// components/DiveSection.tsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../containers/HomepageNew/hero.module.css';

gsap.registerPlugin(ScrollTrigger);

interface DiveSectionProps {
  background: string;
  quote: string;
  subtitle?: string;
}

export const DiveSection: React.FC<DiveSectionProps> = ({ background, quote, subtitle }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set([overlayRef.current, textRef.current], { opacity: 0 });
    gsap.set(bgRef.current, { scale: 1 });

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=380%',
        scrub: 1,
        pin: true,
      }
    })
      .to(bgRef.current, { scale: 1.5, duration: 1.5 })
      .to(overlayRef.current, { opacity: 1, duration: 1 }, 0)
      .to(textRef.current, { opacity: 1, y: 0, duration: 1.5 }, 1)
      .to(bgRef.current, { scale: 2.2, duration: 2 }, 2.5)
      .to(textRef.current, { opacity: 0, y: -40, duration: 1 }, 4)
      .to([bgRef.current, overlayRef.current], { opacity: 0, duration: 1 }, 5);

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section ref={containerRef} className={styles.wrapper}>
      <div ref={bgRef} className={styles.background} style={{ backgroundImage: `url(${background})` }} />
      <div ref={overlayRef} className={styles.blackOverlay} />
      <div ref={textRef} className={styles.quoteContainer}>
        <h1 className={styles.quote}>{quote}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
};