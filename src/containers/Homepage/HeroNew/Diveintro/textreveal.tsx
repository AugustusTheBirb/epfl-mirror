// TextReveal.tsx
import React from 'react';
import styles from './textreveal.module.css';

interface QuoteTextProps {
  text: string;
  subtitle?: string;
  titleRef: React.RefObject<HTMLHeadingElement>;
  subtitleRef: React.RefObject<HTMLParagraphElement>;
}

export const QuoteText: React.FC<QuoteTextProps> = ({ text, subtitle, titleRef, subtitleRef }) => (
  <div className={styles.quoteContainer}>
    <h1 ref={titleRef} className={styles.quote}>{text}</h1>
    {subtitle && <p ref={subtitleRef} className={styles.subtitle}>{subtitle}</p>}
  </div>
);
