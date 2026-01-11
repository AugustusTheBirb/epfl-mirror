import { useCountUpOnView } from './useCountUpOnView';

interface StatBlockProps {
  icon: string;
  value: number;
  start?: number;
  suffix?: string;
  label: string;
  description: string;
  delay?: number;
  mobileValue?: number;      
  mobileSuffix?: string;     
}

export const StatBlock = ({ 
  icon, 
  value, 
  start = 0, 
  suffix = '', 
  label, 
  description,
  delay = 0 
}: StatBlockProps) => {
  const { ref, count } = useCountUpOnView({
    start,
    end: value,
    durationMs: 1800,
    delayMs: delay
  });

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <div ref={ref} className="stat-block">
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">
        {formatNumber(count)}{count === value && suffix}
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-desc">{description}</div>
    </div>
  );
};