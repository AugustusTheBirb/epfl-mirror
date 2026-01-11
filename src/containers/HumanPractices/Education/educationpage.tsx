import React, { useState, useEffect, useRef } from 'react';
import './educationpage.css';
import '../../../components/Sidebar/sidebar.css';
import PageHead from '../../../components/Head/PageHead';

// PDF Link component for uploading and viewing PDFs
interface PDFLinkProps {
  url: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
}

const PDFLink: React.FC<PDFLinkProps> = ({ url, title, isOpen, onToggle }) => (
  <>
    <button 
      onClick={onToggle}
      className="pdf-toggle-button"
      aria-pressed={isOpen}
      style={{ 
        display: 'flex',
        alignItems: 'center',
        padding: '0.8rem 1rem',
        color: 'var(--color-whitish)',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        borderLeft: '2px solid var(--color-dark-orange)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'left'
      }}
    >
      {/* Orange dot */}
      <div style={{ 
        minWidth: '6px', 
        height: '6px', 
        backgroundColor: 'var(--color-dark-orange)', 
        borderRadius: '50%', 
        marginRight: '1rem',
        flexShrink: 0
      }}></div>

      {/* Title text */}
      <span className="pdf-title" style={{ fontSize: '1.125rem', fontWeight: '400' }}>
        {title}
      </span>

      {/* Chevron */}
      <span
        aria-hidden="true"
        className="book-chevron"
        style={{ marginLeft: 'auto', opacity: 0.85 }}
      >
        ▸
      </span>
    </button>

    {isOpen && (
      <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
        <iframe 
          src={url}
          width="100%"
          height="600px"
          style={{ border: '1px solid #ccc', borderRadius: '8px' }}
          title={`${title} PDF`}
        />
      </div>
    )}
  </>
);

// Define navigation items for the Education page
const navItems = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'dive-into-stem', label: 'Dive Into STEM' },
  { id: 's4s', label: 'S4S' },
  { id: 'sv-industry', label: 'SV Industry' },
  { id: 'childrens-book', label: "Children's Book" },
  { id: 'posters', label: 'Posters' },
  { id: 'high-school-open-day', label: 'High-School Open Day' },
];

// Custom hook for active section tracking
const useActiveSection = (sectionIds: string[], offset = 100) => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);
  const observers = useRef<IntersectionObserver[]>([]);

  useEffect(() => {
    observers.current.forEach(obs => obs.disconnect());
    observers.current = [];

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { rootMargin: `-${offset}px 0px 0px 0px`, threshold: 0.5 }
        );
        observer.observe(element);
        observers.current.push(observer);
      }
    });
    return () => {
      observers.current.forEach(obs => obs.disconnect());
    };
  }, [sectionIds, offset]);
  return activeSection;
};

interface SidebarProps {
  items: Array<{ id: string; label: string }>;
  onNavigate: (id: string) => void;
  activeSection?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ items, onNavigate, activeSection }) => (
  <aside className="education-sidebar">
    <div className="sidebar-title">Table of Contents</div>
    <nav>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <button
              className={`sidebar-button ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);

const posters = [
  {
    src: "https://static.igem.wiki/teams/5590/humanpractice/posters/1.webp",
    caption: "Forests Don't Barbecue"
  },
  {
    src: "https://static.igem.wiki/teams/5590/humanpractice/posters/a-casual-fire-can-burn-wild.webp",
    caption: "A Casual Fire Can Burn Wild"
  },
  {
    src: "https://static.igem.wiki/teams/5590/humanpractice/posters/smoke-alone-the-forest-didn-t-ask-for-a-puff-2.webp",
    caption: "Forests Never Ask for a Puff"
  }
];

const diveIntoStemImages = [
  {
    src: "https://static.igem.wiki/teams/5590/education/diveintostem/dive-into-stem-milo-low-format.webp",
    caption: ""
  },
  {
    src: "https://static.igem.wiki/teams/5590/education/diveintostem/dive-into-stem-pitching-low-format.webp",
    caption: ""
  },
  {
    src: "https://static.igem.wiki/teams/5590/education/diveintostem/dive-into-stem-reanding-protocol-low-format.webp",
    caption: ""
  },
  {
    src: "https://static.igem.wiki/teams/5590/education/diveintostem/dive-into-stem-student-low-format.webp",
    caption: ""
  }
];

const s4sImages = [
  {
    src: "https://static.igem.wiki/teams/5590/education/s4s/milo-guiding-student.webp",
    caption: ""
  },
  {
    src: "https://static.igem.wiki/teams/5590/education/s4s/s4s-presenting.webp",
    caption: ""
  },
  {
    src: "https://static.igem.wiki/teams/5590/education/s4s/petri-drawing-2.webp",
    caption: ""
  },
  {
    src: "https://static.igem.wiki/teams/5590/education/s4s/petri-drawing-3.webp",
    caption: ""
  },
  {
    src: "https://static.igem.wiki/teams/5590/education/s4s/petri-drawing-4.webp",
    caption: ""
  },
  {
    src: "https://static.igem.wiki/teams/5590/education/s4s/petri-drawing.webp",
    caption: ""
  }
];

const svIndustryImages = [
  {
    src: "https://static.igem.wiki/teams/5590/humanpractice/svin1.webp",
    caption: ""
  },
  {
    src: "https://static.igem.wiki/teams/5590/humanpractice/svin2.webp",
    caption: ""
  },
  {
    src: "https://static.igem.wiki/teams/5590/humanpractice/svin3.webp",
    caption: ""
  }
];



const EducationPage: React.FC = () => {
  const [openPdf, setOpenPdf] = useState<string | null>(null);
  const [currentPosterIndex, setCurrentPosterIndex] = useState<number>(0);
  const [currentDiveIntoStemIndex, setCurrentDiveIntoStemIndex] = useState<number>(0);
  const [currentS4sIndex, setCurrentS4sIndex] = useState<number>(0);
  const [currentSvIndustryIndex, setCurrentSvIndustryIndex] = useState<number>(0);

  const togglePdf = (pdfUrl: string) => {
    setOpenPdf(openPdf === pdfUrl ? null : pdfUrl);
  };


  return (
    <div className="proof-container">
      {/* Hero Section */}
      <PageHead
        title="Education"
        subtitle="How we ran workshops and engaged students around fire safety and biology."
        backgroundUrl="https://static.igem.wiki/teams/5590/education/s4s/milo-guiding-student.webp"
        grayscale={true}
      />

      {/* Main Content Section with Sidebar */}
      <div className="hardware-layout">
        {/* Sidebar */}
        <aside className="hardware-sidebar">
          <div className="sidebar-title">Table of Contents</div>
          <nav>
            <ul>
              <li><a className="sidebar-button" href="#introduction">Introduction</a></li>
              <li><a className="sidebar-button" href="#dive-into-stem">Dive Into STEM</a></li>
              <li><a className="sidebar-button" href="#s4s">S4S</a></li>
              <li><a className="sidebar-button" href="#sv-industry">SV Industry</a></li>
              <li><a className="sidebar-button" href="#childrens-book">Children's Book</a></li>
              <li><a className="sidebar-button" href="#posters">Posters</a></li>
              <li><a className="sidebar-button" href="#high-school-open-day">High-School Open Day</a></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="hardware-main proof-section">
          {/* Introduction Section */}
          <div className="proof-block" id="introduction">
            <h2>Our Commitment to Educational Outreach</h2>
            <p>
              At EPFL, we believe that learning goes beyond the classroom. Through initiatives like <b>Dive into STEM</b> and <b>S4S</b>, we bring students closer to science and the university experience. Dive into STEM introduces high school students to the fascinating world of synthetic biology through hands-on lab experiments and creative projects, while S4S welcomes first-year EPFL students, helping them navigate their challenging first year and explore cutting-edge research. Both events combine education, curiosity, and real-world experience to make science engaging, interactive, and inspiring.
            </p>
            <div style={{ marginTop: '1.5rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
              <img 
                src="https://static.igem.wiki/teams/5590/humanpractice/screenshot-2025-10-01-at-15-16-53.webp" 
                alt="Education outreach activities" 
                style={{ 
                  maxWidth: '40%', 
                  height: 'auto', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }} 
              />
            </div>
          </div>

          {/* Dive Into STEM Section */}
          <div className="proof-block" id="dive-into-stem">
            <h2>Dive Into STEM</h2>
            <p>
              We welcomed high school students into our lab for an immersive experience in synthetic biology and the iGEM competition. This wasn't just a tour, they rolled up their sleeves and dove into real lab work!
            </p>
            <p>
              Students worked with <b>genetically engineered bacteria containing plasmids coding for different pigment-producing proteins </b>, creating seven distinct colors. Using these living "paints," they turned petri dishes into vibrant canvases. After a day of incubation, their colorful creations appeared, and each student received a one-of-a-kind bacterial artwork to take home.
            </p>
            <p>
              Beyond the fun, the activity taught essential lab skills:
            </p>
            <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
              <li><b>Lab safety and pipetting techniques</b></li>
              <li><b>Plasmid integration</b></li>
              <li><b>Cell culture in tubes and on petri dishes</b></li>
            </ul>
            <p>
              It was an interactive, hands-on way to show that science can be <b>creative, educational, and unforgettable</b>.
            </p>

            {/* Dive Into STEM Image Carousel */}
            <div className="carousel-container-new">
              <div className="carousel-wrapper-new">
                <div className="carousel-track-new">
                  {diveIntoStemImages.map((image, index) => {
                    const isActive = index === currentDiveIntoStemIndex;
                    const isPrev = index === currentDiveIntoStemIndex - 1;
                    const isNext = index === currentDiveIntoStemIndex + 1;
                    
                    // Only show current, previous, and next images
                    if (!isActive && !isPrev && !isNext) {
                      return null;
                    }
                    
                    return (
                      <div 
                        key={index}
                        className={`carousel-slide-new ${isActive ? 'active' : ''}`}
                        onClick={() => !isActive && setCurrentDiveIntoStemIndex(index)}
                      >
                        <img 
                          src={image.src}
                          alt={image.caption}
                        />
                        <p className="poster-caption-new">{image.caption}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="carousel-indicators">
              {diveIntoStemImages.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentDiveIntoStemIndex ? 'active' : ''}`}
                  onClick={() => setCurrentDiveIntoStemIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* S4S Section */}
<div className="proof-block" id="s4s">
  <h2>S4S : Student for Student</h2>
  <p>
    S4S is an event created by EPFL students to support their peers. Held one week before the academic year starts, it’s dedicated to welcoming first-year students and helping them prepare for EPFL’s highly selective first year—where the failure rate exceeds 50%.
  </p>
  <h3 style={{ textDecoration: 'underline' }}>Our Contribution: Exploring Synthetic Biology</h3>
  <p>
    As part of the EPFL Association, we host a special workshop during S4S to introduce students to <b>synthetic biology</b> and our iGEM project. The session begins in a lecture hall, where we:
  </p>
  <ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
  <li>Explain the fundamentals of synthetic biology</li>
  <li>Share insights about our ongoing project</li>
  <li>Present our team and the iGEM competition</li>
</ul>
  <h3 style={{ textDecoration: 'underline' }}>Hands-On Lab Experience</h3>
  <p>
    After the lecture, students join us in our laboratory to <b>carry out hands-on experiments </b>and experience synthetic biology in practice. They get to see real lab techniques, ask questions, and explore the field in a playful yet educational setting.
  </p>
  <h3 style={{ textDecoration: 'underline' }}>Connecting Across Years</h3>
  <p>
    Our iGEM team is composed of students who have already completed their first year, so the new students had plenty of questions for us. Their curiosity and enthusiasm for synthetic biology were incredible to witness. Organizing this event was especially rewarding, as it reminded us of our own first year at EPFL.
  </p>

  {/* S4S Image Carousel */}
  <div className="carousel-container-new">
    <div className="carousel-wrapper-new">
      <div className="carousel-track-new">
        {s4sImages.map((image, index) => {
          const isActive = index === currentS4sIndex;
          const isPrev = index === currentS4sIndex - 1;
          const isNext = index === currentS4sIndex + 1;
          
          // Only show current, previous, and next images
          if (!isActive && !isPrev && !isNext) {
            return null;
          }
          
          return (
            <div 
              key={index}
              className={`carousel-slide-new ${isActive ? 'active' : ''}`}
              onClick={() => !isActive && setCurrentS4sIndex(index)}
            >
              <img 
                src={image.src}
                alt={image.caption}
              />
              <p className="poster-caption-new">{image.caption}</p>
            </div>
          );
        })}
      </div>
    </div>
  </div>

  <div className="carousel-indicators">
    {s4sImages.map((_, index) => (
      <button
        key={index}
        className={`indicator ${index === currentS4sIndex ? 'active' : ''}`}
        onClick={() => setCurrentS4sIndex(index)}
        aria-label={`Go to image ${index + 1}`}
      />
    ))}
  </div>
</div>

          {/* SV Industry Section */}
<div className="proof-block" id="sv-industry">
  <h2>iGEM - SV Industry Collaboration</h2>
  <p>
      SV Industry
    &nbsp;is an EPFL association that hosts, at the start of each semester, a conference where students can discover and join hands-on projects. As a long-standing EPFL initiative, iGEM took this opportunity to promote the team to the next cohort.
  </p>

  <p>
    During the first part of the event, iGEM, alongside many other EPFL student projects,
    presented in the main auditorium, showcasing our goals and progress. In the second part, we hosted a poster session, answering students’ questions and discussing how they can get involved. This outreach helps ensure that EPFL iGEM 2026 will be active and staffed with motivated students.
  </p>


  <p>
    The event was especially meaningful to us: just last year, we were the students in the audience,
    discovering iGEM and admiring the work of previous teams. Returning as presenters closed that loop
    and reinforced our commitment to mentoring the next generation.
  </p>

  

     <figure className="image-figure image-figure--small image-figure--center">
              <img
              className="projectdescrip-img image-img"
              src="https://static.igem.wiki/teams/5590/humanpractice/svindustry/poster-sv-industry.webp"
              />
              <figcaption className="image-caption"><strong>Figure 1:</strong> Poster of the Event.</figcaption>
            </figure>

    <figure className="image-figure image-figure--small image-figure--center">
              <img
              className="projectdescrip-img image-img"
              src="https://static.igem.wiki/teams/5590/humanpractice/svindustry/poster-pyronix.webp"
              />
              <figcaption className="image-caption"><strong>Figure 2:</strong> Pyronix  Poster showcased during the event.</figcaption>
            </figure>
    
    <figure className="image-figure image-figure--small image-figure--center">
              <img
              className="projectdescrip-img image-img"
              src="https://static.igem.wiki/teams/5590/humanpractice/posters/importance-of-fire-safety.webp"
              />
              <figcaption className="image-caption"><strong>Figure 3:</strong> Fire Safety Drills.</figcaption>
            </figure>


  {/* SV Industry Image Carousel */}
  <div className="carousel-container-new">
    <div className="carousel-wrapper-new">
      <div className="carousel-track-new">
        {svIndustryImages.map((image, index) => {
          const isActive = index === currentSvIndustryIndex;
          const isPrev = index === currentSvIndustryIndex - 1;
          const isNext = index === currentSvIndustryIndex + 1;
          
          // Only show current, previous, and next images
          if (!isActive && !isPrev && !isNext) {
            return null;
          }
          
          return (
            <div 
              key={index}
              className={`carousel-slide-new ${isActive ? 'active' : ''}`}
              onClick={() => !isActive && setCurrentSvIndustryIndex(index)}
            >
              <img 
                src={image.src}
                alt={image.caption}
              />
              <p className="poster-caption-new">{image.caption}</p>
            </div>
          );
        })}
      </div>
    </div>
    
  </div>

  <div className="carousel-indicators">
    {svIndustryImages.map((_, index) => (
      <button
        key={index}
        className={`indicator ${index === currentSvIndustryIndex ? 'active' : ''}`}
        onClick={() => setCurrentSvIndustryIndex(index)}
        aria-label={`Go to image ${index + 1}`}
      />
    ))}
  </div>
</div>


          {/* Children's Book Section */}
          <div className="proof-block" id="childrens-book">
            <h2>Children's Book</h2>
            <p>
              We created an educational children's book to introduce young minds to the concepts of fire safety and environmental protection in an engaging and accessible way. This book combines storytelling with scientific education, making complex topics understandable for children.
            </p>
            <p>
              The book serves as an educational tool that can be used by parents, teachers, and educational institutions to raise awareness about fire prevention and environmental conservation among the younger generation.
            </p>
            
            <div style={{ 
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
            className='interactive-link'
            >
              <PDFLink 
                url="https://static.igem.wiki/teams/5590/education/children-book.pdf"
                title="Children's Educational Book"
                isOpen={openPdf === 'https://static.igem.wiki/teams/5590/education/children-book.pdf'}
                onToggle={() => togglePdf('https://static.igem.wiki/teams/5590/education/children-book.pdf')}
              />
              
            </div>
          </div>

           {/* Posters Section */}
          <div className="proof-block" id="posters">
            <h2>Posters</h2>
            <p>
              We designed a series of educational posters to communicate our research findings and promote fire safety awareness. These posters were created for different audiences and contexts, from scientific conferences to public outreach events.
            </p>
            <p>
              Each poster presents information in a visually appealing and scientifically accurate manner, making our work accessible to diverse audiences including students, researchers, and the general public.
            </p>

            <div className="carousel-container-new">
              <div className="carousel-wrapper-new">
                <div className="carousel-track-new">
                  {posters.map((poster, index) => {
                    const isActive = index === currentPosterIndex;
                    const isPrev = index === currentPosterIndex - 1;
                    const isNext = index === currentPosterIndex + 1;
                    
                    // Only show current, previous, and next posters
                    if (!isActive && !isPrev && !isNext) {
                      return null;
                    }
                    
                    return (
                      <div 
                        key={index}
                        className={`carousel-slide-new ${isActive ? 'active' : ''}`}
                        onClick={() => !isActive && setCurrentPosterIndex(index)}
                      >
                        <img 
                          src={poster.src}
                          alt={poster.caption}
                        />
                        <p className="poster-caption-new">{poster.caption}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Simple mobile arrows */}
              <button
                className="carousel-arrow left"
                onClick={() => setCurrentPosterIndex((i) => (i > 0 ? i - 1 : posters.length - 1))}
                aria-label="Previous poster"
              >
                ‹
              </button>
              <button
                className="carousel-arrow right"
                onClick={() => setCurrentPosterIndex((i) => (i + 1) % posters.length)}
                aria-label="Next poster"
              >
                ›
              </button>
            </div>

            <div className="carousel-indicators">
              {posters.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentPosterIndex ? 'active' : ''}`}
                  onClick={() => setCurrentPosterIndex(index)}
                  aria-label={`Go to poster ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* High-School Open day */}
          <div className="proof-block" id="high-school-open-day">
            <h2>High-School Open Day</h2>
            <p>
              After the Jamboree, we decided to continue our educational efforts. Every year, EPFL welcomes high school students who are interested in studying here during the Open Day. 
As part of this, we hosted four workshops in our lab and welcomed a total of 32 high school students. It was a great opportunity to:
<ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
<li>Present our project</li>
<li>Introduce bachelor programs at EPFL</li>
<li>Showcase different student projects</li>
</ul>
After explaining the details of our work and how EPFL encourages learning through concrete, hands-on projects, we invited the students to take part in our “colorful bacteria” lab activity.
Since all of the participants were already interested in joining EPFL, the event was especially rewarding. They showed strong curiosity about:

<ul style={{ marginLeft: '1.5rem', paddingLeft: '1.5rem' }}>
<li>How the experiment worked</li>
<li>The role of the plasmid</li>
<li>The overall lab process and techniques</li>
<li>How much autonomy the EPFL student have in the lab</li>
</ul>

Their enthusiasm and questions made the workshops a very motivating and memorable experience for our team.
           </p>
          
            
            </div>
         
        </main>
      </div>
    </div>
  );
};

export default EducationPage;