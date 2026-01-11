import React, { useState } from "react";
import "./references.css";
import ReferenceList from "../../../components/References/ReferenceList";

type SimpleRef = { text: string; url: string };
type RichRef = { id: string; text: string };

interface ReferencesDropdownProps {
  references: Array<SimpleRef | RichRef>;
}

const ReferencesDropdown: React.FC<ReferencesDropdownProps> = ({ references }) => {
  const [open, setOpen] = useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  // Listen for events from Citation to open the panel and scroll to a specific ref
  React.useEffect(() => {
    const handler = (e: any) => {
      const id = e?.detail?.id;
      if (!id) return;
      setOpen(true);

      // Use a MutationObserver to wait until the reference item is actually rendered
      // inside our dropdown, then scroll and focus it. This is more robust than a fixed timeout.
      let observer: MutationObserver | null = null;
      let fallbackTimer: number | null = null;

      const attemptScroll = () => {
        const refEl = document.getElementById(`ref-${id}`);
        if (refEl) {
          if (!(refEl as HTMLElement).hasAttribute('tabindex')) refEl.setAttribute('tabindex', '-1');
          refEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          (refEl as HTMLElement).focus();
          return true;
        }
        return false;
      };

      // If it's already rendered (fast path), scroll immediately
      if (attemptScroll()) return;

      // Otherwise observe the container (or document) for DOM changes
      const root = containerRef.current ?? document.body;
      observer = new MutationObserver(() => {
        if (attemptScroll()) {
          if (observer) observer.disconnect();
          if (fallbackTimer) window.clearTimeout(fallbackTimer);
        }
      });

      observer.observe(root, { childList: true, subtree: true });

      // Safety fallback: stop observing after 4s to avoid leaks
      fallbackTimer = window.setTimeout(() => {
        if (observer) observer.disconnect();
        // Try one last time synchronously
        attemptScroll();
      }, 4000);
    };

    window.addEventListener('open-references-and-scroll', handler as EventListener);
    return () => window.removeEventListener('open-references-and-scroll', handler as EventListener);
  }, []);

  if (!references || references.length === 0) return null; // don’t show empty

  const isRich = (references[0] as any).id !== undefined;

  return (
    <div className="references-container" ref={containerRef}>
      <button onClick={() => setOpen(!open)} className="references-toggle">
        {open ? "Hide References" : "Show References"}
      </button>

      {open && (
        <div className="references-list">
          {isRich ? (
            // Render the richer reference list using the shared ReferenceList component
            <ReferenceList references={(references as RichRef[]).map(r => ({ id: r.id, text: r.text }))} />
          ) : (
            <ul>
              {(references as SimpleRef[]).map((ref, index) => (
                <li key={index}>
                  {ref.text}: <a href={ref.url} target="_blank" rel="noopener noreferrer">{ref.url.replace(/^https?:\/\//, "")}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default ReferencesDropdown;
