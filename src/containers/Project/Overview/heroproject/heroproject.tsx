import React, { useLayoutEffect } from "react";
import "./heroproject.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroProjectProps {
  title: string;
  subtitle: string;
  image: string;
  children?: React.ReactNode;
}

const HeroProject: React.FC<HeroProjectProps> = ({ children }) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const textEl = document.querySelector("#hero-text");
      const imageEl = document.querySelector("#hero-image");

      if (textEl) {
        gsap.from(textEl, {
          opacity: 0,
          x: -60,
          duration: 1,
          scrollTrigger: {
            trigger: textEl,
            start: "top 80%",
          },
        });
      }

      if (imageEl) {
        gsap.from(imageEl, {
          opacity: 0,
          x: 60,
          duration: 1,
          scrollTrigger: {
            trigger: imageEl,
            start: "top 80%",
          },
        });
      }
    });

    return () => ctx.revert(); 
  }, []);

  return <section className="hero-section">{children}</section>;
};

export default HeroProject;