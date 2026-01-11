// src/utils/useBreakpoint.ts
import { useEffect, useState } from 'react';

/** Breakpoint map (edit to taste) */
export interface IBreakpoints {
  sm: number; // phones
  md: number; // tablets
  lg: number; // small desktops
  xl: number; // large desktops
}
export const BREAKPOINTS: IBreakpoints = { sm: 0, md: 768, lg: 1024, xl: 1280 };

/** Window size + boolean helpers */
export interface IBreakpointState {
  width: number;
  isSM: boolean;
  isMD: boolean;
  isLG: boolean;
  isXL: boolean;
}

/** Responsive state, SSR-safe, with proper cleanup */
export const useBreakpoint = (): IBreakpointState => {
  const get = (): IBreakpointState => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 0;
    return {
      width: w,
      isSM: w < BREAKPOINTS.md,
      isMD: w >= BREAKPOINTS.md && w < BREAKPOINTS.lg,
      isLG: w >= BREAKPOINTS.lg && w < BREAKPOINTS.xl,
      isXL: w >= BREAKPOINTS.xl,
    };
  };

  const [state, setState] = useState<IBreakpointState>(get);

  useEffect(() => {
    const on = () => setState(get());
    // Chrome/Safari/mobile friendly
    window.addEventListener('resize', on, { passive: true });
    // Fire once on mount (covers iOS toolbar changes)
    on();
    return () => window.removeEventListener('resize', on);
  }, []);

  return state;
};

/** Reduced‑motion: pauses background video/animations for a11y */
export const usePrefersReducedMotion = (): boolean => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    const on = () => setReduced(m.matches);

    // Safari + old Chrome support
    if (m.addEventListener) m.addEventListener('change', on);
    else if ((m as any).addListener) (m as any).addListener(on);

    on(); // init

    return () => {
      if (m.removeEventListener) m.removeEventListener('change', on);
      else if ((m as any).removeListener) (m as any).removeListener(on);
    };
  }, []);

  return reduced;
};
