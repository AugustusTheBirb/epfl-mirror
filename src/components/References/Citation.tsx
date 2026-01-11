import React from 'react';
import './references.css';

interface CitationProps {
  id: string; // reference id (e.g. "1" or "smith-2024")
  label?: React.ReactNode; // optional display label (defaults to id)
}

const Citation: React.FC<CitationProps> = ({ id, label }) => {
  const display = label ?? id;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Dispatch an event so the references panel (which controls visibility) can open and scroll
    const ev = new CustomEvent('open-references-and-scroll', { detail: { id } });
    window.dispatchEvent(ev);
    // Fallback: if reference is already in DOM, scroll to it immediately
    const refEl = document.getElementById(`ref-${id}`);
    if (refEl) {
      if (!(refEl as HTMLElement).hasAttribute('tabindex')) {
        refEl.setAttribute('tabindex', '-1');
      }
      refEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      (refEl as HTMLElement).focus();
      history.replaceState(null, '', `#ref-${id}`);
    }
  };

  return (
    <a
      href={`#ref-${id}`}
      id={`cite-${id}`}
      className="inline-citation"
      aria-describedby={`ref-${id}`}
      title={`See reference ${display}`}
      onClick={handleClick}
    >
      <sup className="inline-citation-sup" aria-hidden="true">{display}</sup>
      <span className="sr-only">See reference {display}</span>
    </a>
  );
};

export default Citation;
