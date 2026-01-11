import React, { useRef, useState } from "react";
import "./awards.css";
import { Link } from "react-router-dom";


export default function Awards() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="awards-container">
      <img
        src="https://static.igem.wiki/teams/5590/awards/awards.avif"
        alt="Awards Banner"
        className="awards-banner"
      />

      <section className="awards-content">
        {/* Hero Section */}
        <div className="awards-hero">
          <h1 className="awards-title">iGEM Grand Jamboree 2025</h1>
        </div>

        {/* Intro Message */}
        <div className="awards-intro">
          <p className="intro-text">
            From concept to reality, our project evolved into a multidisciplinary achievement 
            that bridges innovation in the lab, meaningful outreach, and technical excellence. 
            At the iGEM Grand Jamboree 2025, we proudly brought home numerous awards recognizing 
            this journey.
          </p>
          <p className="intro-gratitude">
            Every bit of dedication paid off, and our collective teamwork brought us to the top. 
            Immense gratitude to our mentors whose guidance made this possible.
          </p>

          <p className="intro-explore">
            <Link to="https://video.igem.org/w/hHE93UdsZu9h6o9tCtvQMF" className="interactive-link">Relive our presentation</Link>, view our awards below, and explore all{" "}
                
                <a 
                href="https://competition.igem.org/results/2025" 
                target="_blank" 
                rel="noopener noreferrer"
                className="interactive-link"
              >
                iGEM 2025 results
              </a>{" "}
             on the official website.
          </p>
          </div>
       
       <div className="video-container">
          <iframe 
                title="EPFL - iGEM 2025 Finalist - Pyronix - The Next Generation of Firefighting" 
                width="560" height="315" src="https://video.igem.org/videos/embed/hHE93UdsZu9h6o9tCtvQMF" 
                allow="fullscreen" 
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms" 
                style={{ border: 0 }}>
                  
                </iframe>
        </div>
        

        <div className="row-prizes">
          {/* First Runner Up */}
          <div className="grand-prize-card">
            <div className="prize-icon-xlarge">
              <img src="https://static.igem.wiki/teams/5590/awards/firstrunner.avif" alt="First Runner Up" style={{ width: "350px", height: "350px" }}/>
            </div>
            <h2>First Runner Up</h2>
            <p className="prize-name">iGEM Grand Prize 2025</p>
          </div>

          {/* Best Climate Crisis */}
          <div className="grand-prize-card climate">
            <div className="prize-icon-xlarge">
              <img src="https://static.igem.wiki/teams/5590/awards/climate.avif" alt="Best Climate Crisis Project" style={{width: "350px", height: "350px"}}/>
            </div>
            <h2>Best Climate Crisis Project</h2>
          </div>
          
        </div>
      
        {/* Third Row - Three Special Prizes */}
        <div className="third-row-prizes">
          {/* Best Measurement */}
          <Link to="/measurement" className="prize-card">
            <div className="prize-icon">
              <img src="https://static.igem.wiki/teams/5590/awards/measurement.svg" alt="Best Measurement" />
            </div>
            <h3>Best Measurement</h3>
          </Link>

          {/* Best Software Tool */}
          <Link to="/software" className="prize-card">
            <div className="prize-icon">
              <img src="https://static.igem.wiki/teams/5590/awards/software-tool.svg" alt="Best Software Tool" />
            </div>
            <h3>Best Software Tool</h3>
          </Link>

          {/* Best Sustainable Development */}
          <Link to="/sustainability" className="prize-card">
            <div className="prize-icon">
              <img src="https://static.igem.wiki/teams/5590/awards/sustainable-development-impact.svg" alt="Best Sustainable Development" />
            </div>
            <h3>Best Sustainable Development</h3>
          </Link>
        </div>

        {/* Fourth Row - Two Centered Prizes */}
        <div className="fourth-row-prizes">
          {/* Best Presentation */}
          <div className="prize-card">
            <div className="prize-icon">
              <img src="https://static.igem.wiki/teams/5590/awards/presentation.svg" alt="Best Presentation" />
            </div>
            <h3>Best Presentation</h3>
          </div>

          {/* Best Wiki */}
          <div className="prize-card">
            <div className="prize-icon">
              <img src="https://static.igem.wiki/teams/5590/awards/wiki.svg" alt="Best Wiki" />
            </div>
            <h3>Best Wiki</h3>
          </div>
        </div>

{/* Additional Recognition - Bottom */}
        <div className="additional-recognition">
          <div className="recognition-badge">
            <span className="badge-icon">
              <img
                src="https://static.igem.org/websites/common/2022/icons/awards/top10-color.svg"
                alt="Top 10"
                width="48"
                height="48"
              />
            </span>
            <span>Top 10</span>
          </div>
          <div className="recognition-badge">
            <span className="badge-icon">🥈</span>
            <span>Finalist</span>
          </div>
          <div className="recognition-badge">
            <span className="badge-icon">
              <img
                src="https://static.igem.org/websites/common/2023/icons/medal-flat.svg"
                alt="Gold Medal"
                width="48"
                height="48"
              />
            </span>
            <span>Gold Medal</span>
          </div>
        </div>     

        {/* Image Carousel */}
        <div 
          className="awards-carousel"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div className="carousel-track">
            {/* First set of images */}
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/swissteam.avif" alt="Swiss teams" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/beforep.avif" alt="Before presentation" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/day4.avif" alt="Finalist Announcement" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/e2ec7006-c5fb-41a6-b076-be0c73cb81f0.avif" alt="Team photo 1" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-1154.avif" alt="Team photo 2" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-4545.avif" alt="Software Prize" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-4549.avif" alt="Software Prize 2" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-4559.avif" alt="Best Climate Crisis Project" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-4560.avif" alt="Running again" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-7418.avif" alt="Team and award picture" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-9957.avif" alt="Jamboree moments" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-9961.avif" alt="At the booth" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-9978.avif" alt="Team picture" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-9984.avif" alt="First Runner Up Prize" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/otherteam.avif" alt="Other team" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-4565.avif" alt="Finalists" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-9954.avif" alt="Other team" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-7311.avif" alt="before judging session" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-7315.avif" alt="before judging session2" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-7324.avif" alt="Team photo 3" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-7373.avif" alt="Day 4" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-7392.avif" alt="Our Prizes" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-7416.avif" alt="Team Pic with Prizes 2" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-4121-2-large.avif" alt="before judging session" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-4160-2-large.avif" alt="before judging session" />
            </div>
      
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-4317-2-large.avif" alt="before judging session" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/img-4319-2-large.avif" alt="before judging session" />
            </div>
            <div className="carousel-slide">
              <img src="https://static.igem.wiki/teams/5590/awards/carousel/pxl-20251028-124154392-large.avif" alt="before judging session" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}