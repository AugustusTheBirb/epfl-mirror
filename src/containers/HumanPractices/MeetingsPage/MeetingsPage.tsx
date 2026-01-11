

import { useState } from 'react';
import '../Education/educationpage.css';
import '../../../components/Sidebar/sidebar.css';
import PageHead from '../../../components/Head/PageHead';
import { useSectionRefs } from './useSectionRefs';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';


const navItems = [
  { id: 'symposium', label: 'iGEM Symposium' },
  { id: 'swiss-meeting', label: 'Switzerland Team Meeting' },
];

const symposiumImages = [
  { src: 'https://static.igem.wiki/teams/5590/humanpractice/img-4467.webp', legend: 'iGEM Symposium participants' },
  { src: 'https://static.igem.wiki/teams/5590/humanpractice/img-4466.webp', legend: 'iGEM Symposium presentation' },
  { src: 'https://static.igem.wiki/teams/5590/humanpractice/img-4468.webp', legend: 'iGEM Symposium discussion' },
  { src: 'https://static.igem.wiki/teams/5590/humanpractice/img-4463.webp', legend: 'iGEM Symposium group photo' },
];
const swissImages = [
  { src: 'https://static.igem.wiki/teams/5590/humanpractice/1757336114641-min.webp', legend: 'Switzerland iGEM team meeting' },
  { src: 'https://static.igem.wiki/teams/5590/humanpractice/1757336114750-min.webp', legend: 'Swiss teams collaboration' },
];

const shsdteam = [
  { src: 'https://static.igem.wiki/teams/5590/humanpractice/meetingshsd/wiki-page-shsd.webp', legend: 'Wiki homepage of the SHSD Team' },
  { src: 'https://static.igem.wiki/teams/5590/humanpractice/meetingshsd/meeting-shsd.webp', legend: '' },
  { src: 'https://static.igem.wiki/teams/5590/humanpractice/meetingshsd/meeting-shsd.webp', legend: '' },
]

function Carousel({ images }: { images: { src: string; legend: string }[] }) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      marginTop: '1.5rem' 
    }}>
      <div style={{ 
        position: 'relative', 
        maxWidth: '500px', 
        width: '100%',
        overflow: 'visible',
        borderRadius: '8px',
        backgroundColor: '#000000'
      }}>
        <button 
          onClick={prev}
          style={{ 
            position: 'absolute',
            left: '-50px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: 'var(--color-dark-orange)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            fontSize: '25px',
            opacity: 1,
            transition: 'opacity 0.3s ease'
          }}
          
        >
          &#8249;
        </button>
        
        <div style={{ 
          position: 'relative',
          width: '100%',
          height: '400px',
          overflow: 'hidden'
        }}
        >
          <img 
            src={images[index].src} 
            alt={images[index].legend} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain',
              objectPosition: 'center',
              display: 'block',
              backgroundColor: '#000000ff'
            }} 
          />
        </div>
        
        <button 
          onClick={next}
          style={{ 
            position: 'absolute',
            right: '-50px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: 'var(--color-dark-orange)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            fontSize: '25px',
            opacity: 1,
            transition: 'opacity 0.3s ease'
          }}
          
        >
          &#8250;
        </button>
      </div>
      
      <div style={{ 
        marginTop: '0.5rem', 
        fontSize: '0.9rem', 
        color: '#666', 
        fontStyle: 'normal', 
        textAlign: 'center' 
      }}>
        {images[index].legend}
      </div>
    </div>
  );
}

const MeetingPage = () => {
  const { registerRef } = useSectionRefs(navItems, 120);

  return (
    <div className="proof-container">
      <PageHead
        title="Meeting iGEM Teams"
        subtitle="Building connections and sharing knowledge within the iGEM community"
        backgroundUrl="https://static.igem.wiki/teams/5590/humanpractice/img-7013.avif"
        grayscale={true}
      />

      <div className="hardware-layout">
        {/* Sidebar */}
        <aside className="hardware-sidebar">
          <div className="sidebar-title">Table of Contents</div>
          <nav>
            <ul>
              <li>
                <a className="sidebar-button" href="#symposium">
                  iGEM Symposium
                </a>
              </li>
              <li>
                <a className="sidebar-button" href="#swiss-meeting">
                  Switzerland Team Meeting
                </a>
              </li>
              <li>
                <a className="sidebar-button" href="#shsd-team">
                  SHSD Team
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="hardware-main proof-section">
          <div className="proof-block" id="symposium" ref={registerRef('symposium')}>
            <h2>iGEM Symposium</h2>
            <p>
              The iGEM symposium gave us the opportunity to experience a mini-Jamboree together with many European teams. Each team presented their project, listened to others, and engaged in lively discussions by asking and answering questions. It was a valuable training experience that allowed us to share our project with other iGEM teams facing similar challenges, while also learning from their approaches.
            </p>
            <Carousel images={symposiumImages} />
          </div>

          <div className="proof-block" id="swiss-meeting" ref={registerRef('swiss-meeting')}>
            <h2>Switzerland Team Meeting</h2>
            <p>
              The Switzerland iGEM meetup brought together teams from EPFL, UNIL, the University of Zurich, the University of Basel, and students from La Rosée. Co-organized by EPFL and UNIL, we were delighted to host the event on our Lausanne campus.
            </p>
            <p>
              The day started with a networking lunch at the Italian restaurant The Piano, fostering informal exchanges between participants. This was followed by a mini-Jamboree, where each team had the chance to practice presenting their project. The presentations were accompanied by interactive Q&A sessions, creating a collaborative environment for sharing feedback, reflecting on challenges, and exploring opportunities for improvement.
            </p>
            <p>
              Overall, the meetup was a valuable experience that strengthened connections within the Swiss iGEM community and supported teams in refining their projects ahead of the competition.
            </p>
            <p>
              <a href="https://drive.google.com/drive/folders/1numm39xItc8xlf2IwXyUDuokr8AOdUZY" target="_blank" rel="noopener noreferrer" className='interactive-link'>Link toward the drive with the photos</a>
            </p>
            <Carousel images={swissImages} />

          </div>

          <div className="proof-block" id="shsd-team" ref={registerRef('shsd-team')}>
            <h2> SHSD Team</h2>
            <p>On 5 October 2025, we met the <Link to="https://2024.igem.wiki/shsd/index.html" className='interactive-link'> SHSD iGEM team </Link>
 from Beijing to discuss their project on enzyme-based PET plastic degradation. Because we are based in Lausanne, Switzerland, and SHSD is in Beijing, the meeting was held over Zoom. As teams within the Climate Crisis Village, we quickly aligned on shared goals and had a focused, engaging exchange.

</p><p>The SHSD students, impressively a high-school team, presented their work and asked thoughtful questions about our approach; we also presented our project and responded to their queries. Although this meeting took place near the end of the iGEM season, when both teams had completed most of their work, it proved especially valuable for refining our pitch and strengthening how we communicate our results.

</p><p>We’re grateful for SHSD’s time and enthusiasm, and we appreciated seeing how iGEM empowers young scientists to tackle real-world challenges
</p>


<Carousel images={shsdteam} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MeetingPage;