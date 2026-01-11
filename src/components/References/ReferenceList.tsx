import React from 'react';
import './references.css';

export interface Reference {
  id: string; // unique id matching citations
  text: string; // formatted reference text
}

interface ReferenceListProps {
  references: Reference[];
  title?: string;
}

const ReferenceList: React.FC<ReferenceListProps> = ({ references, title = 'References' }) => {
  if (!references || references.length === 0) return null;

  const handleBacklink = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const citeEl = document.getElementById(`cite-${id}`);
    if (citeEl) {
      if (!(citeEl as HTMLElement).hasAttribute('tabindex')) {
        citeEl.setAttribute('tabindex', '-1');
      }
      citeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      (citeEl as HTMLElement).focus();
      history.replaceState(null, '', `#cite-${id}`);
    }
  };

  return (
    <section className="reference-list" aria-label="References">
      <h3>{title}</h3>
      <ol>
        {references.map((r) => (
          <li key={r.id} id={`ref-${r.id}`} tabIndex={-1}>
            <span dangerouslySetInnerHTML={{ __html: r.text }} />
            {' '}
            <a
              href={`#cite-${r.id}`}
              className="backlink"
              aria-label={`Back to citation ${r.id}`}
              onClick={(e) => handleBacklink(e, r.id)}
            >
              ↩
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ReferenceList;
