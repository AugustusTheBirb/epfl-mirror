// useHeroAnimation.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';
// Import your CSS module or define the styles object
import styles from './hero.module.css'; // Adjust the path and filename as needed

export const useNewHeroAnimation = (
  containerRef: React.RefObject<HTMLElement>,
  videoRef: React.RefObject<HTMLVideoElement>
) => {
  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;

    const ctx = gsap.context(() => {
      // Animate title in
      gsap.to(`.${styles.title}`, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.5
      });

      // Animate scroll indicator
      gsap.to(`.${styles.scroll}`, {
        opacity: 1,
        duration: 1,
        delay: 1.5
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, videoRef]);
};