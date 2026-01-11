// useHomepageScroll.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useHomepageScroll = (containerRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!containerRef.current) return;

    // Disable normal scroll
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      // Re-enable normal scroll on unmount
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [containerRef]);
};