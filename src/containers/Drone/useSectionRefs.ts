// useSectionRefs.ts

import { useMemo, useRef } from 'react';

export interface INavItem { id: string; label: string; }

export const useSectionRefs = (_items: INavItem[], offset = 100) => {
  // Map of id -> HTMLElement
  const mapRef = useRef<Record<string, HTMLElement | null>>({});

  const registerRef = (id: string) => (el: HTMLElement | null) => {
    mapRef.current[id] = el;
  };

  const scrollTo = (id: string) => {
    const el = mapRef.current[id];
    if (!el) return;
    const top = window.scrollY + el.getBoundingClientRect().top - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    window.history.pushState(null, '', `#${id}`);
  };

  return useMemo(() => ({ registerRef, scrollTo }), []);
};
