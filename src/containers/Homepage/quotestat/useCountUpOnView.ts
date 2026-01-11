import { useEffect, useRef, useState } from 'react';

interface IUseCountUpOnView {
  start?: number;
  end: number;
  durationMs?: number;
  delayMs?: number;
}

export const useCountUpOnView = ({ 
  start = 0, 
  end, 
  durationMs = 1800, 
  delayMs = 0 
}: IUseCountUpOnView) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(start);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          setTimeout(() => {
            // Skip animation if trivial
            if (end <= 1) {
              setCount(end);
              return;
            }

            let current = start;
            const stepTime = 1000 / 60;
            const increment = (end - start) / (durationMs / stepTime);
            
            const counter = setInterval(() => {
              current += increment;
              if (current >= end) {
                clearInterval(counter);
                setCount(end);
              } else {
                setCount(Math.floor(current));
              }
            }, stepTime);
          }, delayMs);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, started, delayMs, durationMs, start]);

  return { ref, count };
};