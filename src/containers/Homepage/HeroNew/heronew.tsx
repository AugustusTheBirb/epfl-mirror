import  { useRef, useLayoutEffect, useState, useEffect } from 'react';
import styles from './hero.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { QuoteText } from './Diveintro/textreveal';
import { QuoteStats } from '../quotestat/QuoteStats';

gsap.registerPlugin(ScrollTrigger);

type TStatus = 'attempting' | 'playing' | 'failed';

export const NewHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const [status, setStatus] = useState<TStatus>('attempting');

  // Handle iframe load / fail
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const onLoad = () => {
      setStatus('playing');
    };
    const onError = () => {
      setStatus('failed');
    };

    iframe.addEventListener('load', onLoad);
    iframe.addEventListener('error', onError);

    return () => {
      iframe.removeEventListener('load', onLoad);
      iframe.removeEventListener('error', onError);
    };
  }, []);

  // GSAP timeline
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 50 });
      gsap.set(statsRef.current, { opacity: 0, y: '80vh', scale: 0.8 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current!,
          start: 'top top',
          end: '+=3000',
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(scrollIndicatorRef.current, { opacity: 0, duration: 0.4 })
        .to(overlayRef.current, { opacity: 1, duration: 0.8 }, 0)
        .to(
          iframeRef.current,
          {
            scale: 1.6,
            opacity: 0.1,
            duration: 1.2,
            ease: 'power2.inOut',
          },
          0
        )
        .to(titleRef.current, { opacity: 1, y: 0, duration: 1 }, '>-0.2')
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 1 }, '>-0.4')
        .to({}, { duration: 1 })
        .to([titleRef.current, subtitleRef.current], {
          opacity: 0,
          y: -50,
          scale: 0.9,
          duration: 1.2,
          ease: 'power2.in',
        })
        .to(
          statsRef.current,
          {
            opacity: 1,
            y: -40,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out',
          },
          '>-0.3'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Vertical hint text */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '0.5rem',
          transform: 'translateY(-50%) rotate(90deg)',
          transformOrigin: 'right',
          fontSize: '0.75rem',
          fontWeight: 300,
          letterSpacing: '0.1em',
          color: 'rgba(252, 248, 248, 1)',
          zIndex: 10,
          whiteSpace: 'nowrap',
        }}
      >
        If the video doesn’t play, reload or disable low power mode for the best
        experience.
      </div>

      <section ref={containerRef} className={styles.hero}>
        {/* Video iframe */}
        <iframe
          ref={iframeRef}
          title="EPFL: wiki (2025)"
          src="https://video.igem.org/videos/embed/2cSUbDYkW629R2rofcMGwM?autoplay=1&muted=1&loop=1&title=0&warningTitle=0&p2p=0"
          allow="autoplay; fullscreen"
          className={styles.videoBackground}
        />

        {/* Overlays */}
        <div className={styles.bottomGradientSmooth} />
        <div ref={overlayRef} className={styles.overlay} />

        {/* Scroll indicator */}
        <div ref={scrollIndicatorRef} className={styles.scrollIndicator}>
          <div className={styles.arrow}>↓</div>
        </div>

        {/* Quote */}
        <QuoteText
          titleRef={titleRef}
          subtitleRef={subtitleRef}
          text="Our planet is burning."
          subtitle="A global crisis demanding immediate action"
        />

        {/* Stats */}
        <div ref={statsRef} className={styles.statsContainer}>
          <QuoteStats />
        </div>
      </section>
    </>
  );
};
