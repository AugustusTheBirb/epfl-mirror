import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./exploresection.css";
import {Link} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

type Section = {
  title: string;
  icon?: React.ComponentType<{ size?: number }>; // Lucide icon
  image?: string; // Image URL
  color: string;
  link: string;
};

const sections: Section[] = [
  { title: "Project", image: "https://static.igem.wiki/teams/5590/navbaricons/wetlab/wetlab-notebook.webp", color: "orange", link: "project" },
  { title: "Wetlab", image: "https://static.igem.wiki/teams/5590/navbaricons/wetlab/wetlab-exp.webp", color: "blue", link: "wetlab" },
  { title: "Drone", image: "https://static.igem.wiki/teams/5590/navbaricons/drone/hardware2.webp", color: "yellow", link: "drone" },
  { title: "Human Practices", image: "https://static.igem.wiki/teams/5590/navbaricons/humanpractices/ihp-transparent.webp", color: "blue", link: "human-practices" },
  { title: "Entrepreneurship", image: "https://static.igem.wiki/teams/5590/entrepreneur/businessplan-transparent.webp", color: "orange", link: "entrepreneurshiphome" },
  { title: "Safety", image: "https://static.igem.wiki/teams/5590/navbaricons/drone/modeling.webp", color: "blue", link: "safetyhome" },
  { title: "Team", image: "https://static.igem.wiki/teams/5590/navbaricons/team/team-roster.webp", color: "yellow", link: "team" },
];

export default function ExploreSections() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="explore-container">
      <h2 className="explore-title">Explore Our Project</h2>
      <p className="explore-subtitle">
        Discover all aspects of our synthetic biology initiative
      </p>

      <div className="explore-scroll-container" ref={containerRef}>
        <div className="explore-horizontal-scroll">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Link
                key={section.title}
                to={`/${section.link}`}
                className="explore-link"
                ref={(el) => (cardsRef.current[index] = el as HTMLAnchorElement)}
              >
                <div className="explore-card">
                  <div className={`explore-icon ${section.color}`}>
                    {IconComponent ? (
                      <IconComponent size={32} />
                    ) : section.image ? (
                      <img
                        src={section.image}
                        alt={section.title}
                        className="explore-image"
                      />
                    ) : null}
                  </div>
                  <p className="explore-text">{section.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}