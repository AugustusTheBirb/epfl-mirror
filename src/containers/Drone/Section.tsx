// Section.tsx
import React from 'react';

export interface ISectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLDivElement, ISectionProps>(
  ({ id, title, children }, ref) => (
    <section id={id} ref={ref} style={{ padding: '2rem' }}>
      <h2 className="title">{title}</h2>
      <div className="body">{children}</div>
    </section>
  )
);
Section.displayName = 'Section';

