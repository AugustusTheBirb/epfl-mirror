import { StatBlock } from './StatBlock';
import './quoteStats.css';

export const QuoteStats = () => {
  return (
    <section className="quote-stats" aria-label="Wildfire Statistics">
      <StatBlock
        delay={0}
        icon="🔥"
        value={1_000_000}
        start={100_000}
        suffix=" Million"
        mobileSuffix="M"
        mobileValue={1}
        label="hectares burned in EU"
        description="2025 is the worst year on record"
      />
      <StatBlock
        delay={200}
        icon="🌍"
        value={37}
        start={5}
        suffix=" Million"
        mobileSuffix="M"
        mobileValue={37}
        label="tonnes of CO₂ emitted"
        description="equal to Portugal or Sweden's annual emissions"
      />
      <StatBlock
        delay={400}
        icon="🚬"
        value={40_000}
        start={5_000}
        mobileSuffix="K"
        mobileValue={40}
        label="human-caused wildfires in the U.S."
        description="all were preventable"
      />
    </section>
  );
};