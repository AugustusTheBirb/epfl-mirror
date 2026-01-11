// useDiveAnimation.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface IUseDiveAnimationProps {
  containerRef: React.RefObject<HTMLElement>;
  backgroundRef: React.RefObject<HTMLElement>;
  quoteRef: React.RefObject<HTMLElement>;
}

// useDiveAnimation.ts - TEST VERSION
export const useDiveAnimation = ({
  containerRef,
  backgroundRef,
  quoteRef,
}: IUseDiveAnimationProps) => {
  useEffect(() => {
    if (!containerRef.current || !backgroundRef.current || !quoteRef.current) return;

    const ctx = gsap.context(() => {
      const overlay = containerRef.current?.querySelector('.overlay') as HTMLElement;
      
      // Simple test: Just make the overlay black immediately on scroll
      gsap.to(overlay, {
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'top+=100 top',
          scrub: true,
          markers: true,
        }
      });

      // Make text appear
      gsap.to(quoteRef.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top+=50 top',
          end: 'top+=200 top',
          scrub: true,
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, backgroundRef, quoteRef]);
};