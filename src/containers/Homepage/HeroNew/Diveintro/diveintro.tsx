// diveintro.tsx
import React, { useRef, useEffect } from 'react';
import styles from './diveintro.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface IProps {}

export const DiveIntro = ({}: IProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !overlayRef.current || !quoteRef.current) return;

    // Kill any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Set initial states
    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set(quoteRef.current, { opacity: 0, y: 80 });

    // Create the animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom', // Start when dive intro enters viewport
        end: '+=300%', // Scroll distance
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        markers: true,
      }
    });

    // SEQUENCE: Overlay and text animations only
    // The background zoom is handled by ContinuousBackground component
    
    // Black overlay fades in
    tl.to(overlayRef.current, {
      opacity: 0.9,
      ease: "power2.inOut",
      duration: 1.5
    })

    // Quote appears
    .to(quoteRef.current, {
      opacity: 1,
      y: 0,
      ease: "power3.out",
      duration: 1.5
    }, "-=1") // Overlap with overlay

    // Hold for a moment
    .to({}, { duration: 0.5 })

    // Quote fades out
    .to(quoteRef.current, {
      opacity: 0,
      y: -50,
      ease: "power2.in",
      duration: 1
    })

    // Overlay fades out
    .to(overlayRef.current, {
      opacity: 1,
      ease: "power4.in",
      duration: 1
    },0);

    

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className={`${styles.wrapper} dive-intro-section`}>
      <div className={styles.stickyContainer}>
        {/* Only overlay and text - background is continuous */}
        <div ref={overlayRef} className={styles.overlay} />
        
        <div ref={quoteRef} className={styles.quoteContainer}>
          <h1 className={styles.quote}>"Our planet is burning."</h1>
          <p className={styles.subtitle}>Wildfires are increasing at an alarming rate worldwide</p>
        </div>
      </div>
      
      <div className={styles.spacer} />
    </section>
  );
};