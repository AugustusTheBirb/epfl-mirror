// Hero.tsx
import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
interface IProps { title?: string; subtitle?: string; }
type TStatus = 'attempting' | 'playing' | 'failed';

function useHeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<TStatus>('attempting');
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const onPlaying = () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      setStatus('playing');
    };

    const onError = () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      setStatus('failed');
    };

    v.addEventListener('playing', onPlaying);
    v.addEventListener('error', onError);

    (async () => {
      try {
        v.muted = true;
        v.playsInline = true;
        await v.play(); // don't set status here; some Safaris resolve without actually playing
      } catch {
        /* ignore — we'll fall back via the timer */
      }

      // Verify playback really started; otherwise show fallback
      timerRef.current = window.setTimeout(() => {
        if (!v || v.paused || v.currentTime === 0) setStatus('failed');
      }, 1200);
    })();

    return () => {
      v.removeEventListener('playing', onPlaying);
      v.removeEventListener('error', onError);
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  const playManually = async () => {
    const v = ref.current;
    if (!v) return;
    try {
      v.muted = true;
      v.playsInline = true;
      await v.play(); // wait for the 'playing' event to flip state
      window.setTimeout(() => {
        if (!v || v.paused || v.currentTime === 0) setStatus('failed');
      }, 800);
    } catch {
      setStatus('failed');
    }
  };

  return { ref, status, playManually };
}

const Hero: React.FC<IProps> = ({ title = 'PYRONIX', subtitle = 'The Next Generation Fire Retardant ' }) => {
  const { status, playManually } = useHeroVideo();
  const showFallback = status !== 'playing';

  return (
    <section className="hero">

      {showFallback && (
        <>
          <img className="hero-gif" src="https://static.igem.wiki/teams/5590/optimizedhomepage/herovid/wiki-video-v3-2.webp" alt="" aria-hidden="true" />
          <div className="hero-overlay">
            <div className="hero-overlay-inner">
              <h1 className="hero-title">{title}</h1>
              <p className="hero-subtitle">{subtitle}</p>
              <button className="hero-play" onClick={playManually} aria-label="Play background video">
                ▶ Play video
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
