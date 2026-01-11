import { useCallback, useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import Navbarsearch from './navbarsearch';
 

/* ---------- hooks ---------- */

interface IUseMenuToggle {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}
const useMenuToggle = (): IUseMenuToggle => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);
  // ESC closes
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return { isOpen, open, close, toggle };
};

interface IUseIsDesktop { isDesktop: boolean; }
const useIsDesktop = (bp = 769): IUseIsDesktop => {
  const [isDesktop, setIsDesktop] = useState<boolean>(() => window.innerWidth >= bp);
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= bp);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [bp]);
  return { isDesktop };
};

const useClickOutside = (onOutside: () => void) => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onOutside();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onOutside]);
  return { ref };
};

/* ---------- subcomponents ---------- */

const LogoLink = () => (
  // Desktop: regular home link (left)
  <Link to="/" className="logo-link desktop-only" aria-label="Home">
    <div className="logo-container">
      <img src="https://static.igem.wiki/teams/5590/socials/logo-letter-recadre-transparent.webp" alt="Logo" className="logo" />
    </div>
  </Link>
);

interface ILogoToggleProps { isOpen: boolean; onToggle: () => void; }
const LogoToggle = ({ isOpen, onToggle }: ILogoToggleProps) => (
  // Mobile: logo acts as a toggle button (top-right)
  <button
    className="logo-toggle mobile-only"
    aria-label="Toggle navigation"
    aria-expanded={isOpen}
    aria-controls="mobile-nav"
    onClick={onToggle}
  >
    <div className="logo-container">
      <img src="https://static.igem.wiki/teams/5590/socials/logo-letter-quali.avif" alt="" aria-hidden="true" className="logo" />
    </div>
  </button>
);

interface INavListProps {
  id?: string;
  vertical: boolean;
  onAnyItemClick: () => void;
  enableDesktopHover: boolean;
  setDesktopExpanded: (v: boolean) => void;
}
const NavList = ({
  id,
  vertical,
  onAnyItemClick,
  enableDesktopHover,
  setDesktopExpanded,
}: INavListProps) => {
  const hoverProps = enableDesktopHover
    ? {
        onMouseEnter: () => setDesktopExpanded(true),
        onMouseLeave: () => setDesktopExpanded(false),
        onFocus: () => setDesktopExpanded(true),
        onBlur: () => setDesktopExpanded(false),
      }
    : {};

  return (
  <>
    <ul id={id} className={`nav-list panel ${vertical ? 'open' : ''}`} role="menubar">
      {vertical && (
  <li className="nav-item mobile-home-item">
    <Link 
      to="/" 
      className="nav-link" 
      onClick={onAnyItemClick}
      role="menuitem"
    >
      Home
    </Link>
  </li>
)}
      {/* Mobile-only search bar at top of panel */}
      {vertical && (
        <li className="nav-item mobile-search-item">
          <Navbarsearch />
        </li>
      )}

      {/* Project */}
      <li className="nav-item dropdown" role="none" {...hoverProps}>
        <Link className="nav-link " to="project" role="menuitem" onClick={onAnyItemClick}>Project</Link>
        <ul className="dropdown-menu" role="menu" aria-label="Project submenu">
          <li className="dropdown-item" role="none">
            <Link className="with-icon icon-description body" role="menuitem" to="projectdescription" onClick={onAnyItemClick}>Description</Link>
          </li>
          <li className="dropdown-item" role="none">
            <Link className="with-icon icon-model body" role="menuitem" to="measurement" onClick={onAnyItemClick}>Burn Measurement</Link>
          </li>
          <li className="dropdown-item" role="none">
            <Link className="with-icon icon-proof body" role="menuitem" to="proofofconcept" onClick={onAnyItemClick}>Proof of Concept</Link>
          </li>
          <li className="dropdown-item" role="none">
            <Link className="with-icon icon-app body" role="menuitem" to="engineering" onClick={onAnyItemClick}>Engineering & Applications </Link>
          </li>
          <li className="dropdown-item" role="none">
            <Link className="with-icon icon-contribution body" role="menuitem" to="contribution" onClick={onAnyItemClick}>Contribution</Link>
          </li>
          <li className="dropdown-item" role="none">
            <Link className="with-icon icon-headline body" role="menuitem" to="wildfireheadlines" onClick={onAnyItemClick}>Wildfire Headlines</Link>
          </li>
        </ul>
      </li>

      {/* Wet Lab */}
      <li className="nav-item dropdown" role="none" {...hoverProps}>
        <Link className="nav-link" role="menuitem" onClick={onAnyItemClick} to="wetlab">Wet Lab</Link>
        <ul className="dropdown-menu" role="menu" aria-label="Wet Lab submenu">
          <li className="dropdown-item" role="none">
            <Link className="with-icon icon-wetlab-overview body" role="menuitem" to="/design" onClick={onAnyItemClick}>
              Design
            </Link>
          </li>
          <li className="dropdown-item" role="none">
            <Link className="with-icon icon-wetlab-experiments body" role="menuitem" to="/experiments" onClick={onAnyItemClick}>
              Experiments
            </Link>
          </li>
          <li className="dropdown-item" role="none">
            <Link className="with-icon icon-wetlab-protocols body" role="menuitem" to="/protocols" onClick={onAnyItemClick}>
              Protocols
            </Link>
          </li>
          <li className="dropdown-item" role="none">
            <Link className="with-icon icon-wetlab-parts body" role="menuitem" to="/parts" onClick={onAnyItemClick}>
              Parts
            </Link>
          </li>
          <li className="dropdown-item" role="none">
            <Link className="with-icon icon-wetlab-notebook body" role="menuitem" to="/notebook" onClick={onAnyItemClick}>
              Notebook
            </Link>
          </li>
          <li className="dropdown-item" role="none">
            <Link className="with-icon icon-wetlab-results body" role="menuitem" to="/results" onClick={onAnyItemClick}>
              Results
            </Link>
          </li>
        </ul>

      </li>

      {/* Drone */}
      <li className="nav-item dropdown" role="none" {...hoverProps}><NavLink
            to="drone"
            end={false}
            className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}
            onClick={onAnyItemClick}
          >
            Drone
          </NavLink>

        <ul className="dropdown-menu" role="menu" aria-label="Drone submenu">
          <li className="dropdown-item" role="none">
            <NavLink
              to="/hardware"
              className={({ isActive }) =>
                `with-icon icon-hardware body ${isActive ? 'nav-active' : ''}`
              }
              onClick={onAnyItemClick}
              role="menuitem"
            >
              Hardware
            </NavLink>
          </li>
          <li className="dropdown-item" role="none">
            <NavLink
              to="/software"
              className={({ isActive }) =>
                `with-icon icon-software body ${isActive ? 'nav-active' : ''}`
              }
              onClick={onAnyItemClick}
              role="menuitem"
            >
              Software
            </NavLink>
          </li>
          <li className="dropdown-item" role="none">
            <NavLink
              to="/modeling"
              className={({ isActive }) =>
                `with-icon icon-modeling body ${isActive ? 'nav-active' : ''}`
              }
              onClick={onAnyItemClick}
              role="menuitem"
            >
              Modeling
            </NavLink>
          </li>
        </ul>
      </li>


      {/* Human Practices */}
      <li className="nav-item dropdown" role="none" {...hoverProps}>
        <Link className="nav-link" role="menuitem" aria-haspopup="true" aria-expanded="false" to="/human-practices">Human Practices</Link>
        <ul className="dropdown-menu" role="menu" aria-label="Human Practices submenu">
          <li className="dropdown-item" role="none">
            <Link className="with-icon icon-overview body" role="menuitem" to="/education" onClick={onAnyItemClick}>Education</Link>
          </li>
          <li className="dropdown-item" role="none">
            <Link className="with-icon icon-ihp body" role="menuitem" to="/integratedhumanpractice" onClick={onAnyItemClick}>Integrated Human Practices</Link>
          </li>
          <li className="dropdown-item" role="none">
            <Link className="with-icon icon-meetingigem body" role="menuitem" to="/meetings" onClick={onAnyItemClick}>Meeting iGEM Teams</Link>
          </li>
          
          <li className="dropdown-item" role="none">
            <Link className="with-icon icon-sustainability body" role="menuitem" to="/sustainability" onClick={onAnyItemClick}>Sustainability</Link>
          </li>
        </ul>
      </li>

      {/* Entrepreneurship */}
      <li className="nav-item dropdown" role="none" {...hoverProps}>
      <Link className="nav-link" role="menuitem" to="/entrepreneurshiphome" onClick={onAnyItemClick}>
        Entrepreneurship
      </Link>
      <ul className="dropdown-menu" role="menu" aria-label="Entrepreneurship submenu">
        <li className="dropdown-item" role="none">
          <NavLink
            to="/entrepreneurship"
            className={({ isActive }) =>
              `with-icon icon-businessplan body ${isActive ? 'nav-active' : ''}`
            }
            onClick={onAnyItemClick}
            role="menuitem"
          >
            Business Strategy
          </NavLink>
        </li>
      </ul>
    </li>

      {/* Safety */}
      <li className="nav-item dropdown" role="none" {...hoverProps}><NavLink to="safetyhome" end={false} className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`} onClick={onAnyItemClick}> Safety</NavLink>
        <ul className="dropdown-menu" role="menu" aria-label="Team submenu">
          <li className="dropdown-item" role="none">
            <NavLink
              to="/safety"
              className={({ isActive }) =>
                `with-icon icon-safety body ${isActive ? 'nav-active' : ''}`
              }
              onClick={onAnyItemClick}
              role="menuitem"
            >
              All Safety Measures
            </NavLink>
          </li>
        </ul>
      </li>

      {/* Team */}
       <li className="nav-item dropdown" role="none" {...hoverProps}><NavLink
            to="team"
            end={false}
            className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}
            onClick={onAnyItemClick}
          >
            Team
          </NavLink>

        <ul className="dropdown-menu" role="menu" aria-label="Team submenu">
          <li className="dropdown-item" role="none">
            <NavLink
              to="/roster"
              className={({ isActive }) =>
                `with-icon icon-roster body ${isActive ? 'nav-active' : ''}`
              }
              onClick={onAnyItemClick}
              role="menuitem"
            >
              Roster
            </NavLink>
          </li>
          <li className="dropdown-item" role="none">
            <NavLink
              to="/attributions"
              className={({ isActive }) =>
                `with-icon icon-team-attributions body ${isActive ? 'nav-active' : ''}`
              }
              onClick={onAnyItemClick}
              role="menuitem"
            >
              Attributions
            </NavLink>
          </li> 
        </ul>
      </li>
      {/* Awards */}
<li className="nav-item" role="none" {...hoverProps}>
  <NavLink
    to="awards"
    end={false}
    className={({ isActive }) => `nav-link awards-highlight ${isActive ? 'nav-active' : ''}`}
    onClick={onAnyItemClick}
  >
     Awards
  </NavLink>
</li>

    </ul>
    </>
  );
}
    
                

export const Navbar = () => {
  const { isDesktop } = useIsDesktop();
  const { isOpen, toggle, close } = useMenuToggle();
  const { ref } = useClickOutside(close);
  const [expandedDesktop, setExpandedDesktop] = useState(false);

  return (
    <nav className={`navbar${expandedDesktop ? ' expanded' : ''}`} ref={ref}>
      <div className="navbar-inner">
        {/* left desktop logo */}
        <LogoLink />
        {/* nav list: horizontal on desktop, vertical on mobile when open */}
        <NavList
          id="mobile-nav"
          vertical={!isDesktop && isOpen}
          onAnyItemClick={close}
          enableDesktopHover={isDesktop}
          setDesktopExpanded={setExpandedDesktop}
        />
        <div className="nav-search">
          <Navbarsearch />
        </div>
        {/* right mobile logo (toggle) */}
        <LogoToggle isOpen={isOpen} onToggle={toggle} />
        
      </div>
    </nav>
  );
};

export default Navbar;
