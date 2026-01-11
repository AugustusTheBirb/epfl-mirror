import { useRef, useEffect } from 'react';
import './footer.css';
import { gsap } from 'gsap';

const Footer = () => {
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <footer ref={footerRef} className="igem-footer">
      <div className="footer-wrapper">
        <div className='footer-main'>
          <div className="footer-left">
            <div className="footer-text-logo">
              <img src="https://static.igem.wiki/teams/5590/homepage/logo-retry.avif" alt="Team Logo" className="logo" />
              <div className="footer-text">
                <h2 className="title">Pyronix – EPFL 2025</h2>
                <p className="footer-body">
                  The Next Generation of Firefighting
                </p>            
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <div className="subtitle">Contact Us</div>
            <div className="social-links">
                <a href="https://www.instagram.com/igem_epfl/?hl=en" className="social-item" target="_blank" rel="noopener noreferrer">
                  <img src="https://static.igem.wiki/teams/5590/socials/insta-background-removed.webp" alt="Instagram" className='social-icon' />
                  <span className="footer-body">Instagram</span>
                </a>

                <a href="https://www.linkedin.com/company/igem-epfl-team/" className="social-item" target="_blank" rel="noopener noreferrer">
                  <img src="https://static.igem.wiki/teams/5590/socials/linkedin-transparent.webp" alt="LinkedIn" className='social-icon' />
                  <span className="footer-body">LinkedIn</span>
                </a>
</div>
            <p className='footer-body'>✉️ igem@mccabelab.org</p>
            <div>
              <p className='footer-body'>📍 Swiss Federal Institute of Technology Lausanne</p>
                <p className='footer-body'>  Rte Cantonale, 1015 Lausanne</p>
            </div>
          </div>

        </div>
      </div>

        {/* The following MUST be on every page: license information and link to the repository on gitlab.igem.org */}
        <div className="row mt-4 footer-legal" style={{color: 'var(--color-light-orange)'}}>
          <div className="col">
            <p className="mb-0">
              <small style={{ fontSize: '0.9rem' }} >
                © 2025 - Content on this site is licensed under a{" "}
                <a
                  
                  href="https://creativecommons.org/licenses/by/4.0/"
                  style={{color: 'var(--color-light-orange)'}}
                
                >
                  Creative Commons Attribution 4.0 International license
                </a>
                .
              </small>
            </p>
            <p>
              <small style={{ fontSize: '0.9rem' }}>
                The repository used to create this website is available at{" "}
                <a href={`https://gitlab.igem.org/2025/epfl`} style={{color: 'var(--color-light-orange)'}}>
                  https://gitlab.igem.org/2025/epfl
                </a>
                .
              </small>
            </p>
          </div>
        </div>


      
    </footer>
  );
};

export default Footer;