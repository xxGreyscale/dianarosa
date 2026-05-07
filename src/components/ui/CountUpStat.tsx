import { useEffect, useRef, useState } from 'react';
import { useInView } from '../../hooks/useInView';

interface CountUpStatProps {
  /** Value string like "3000+" or "14+" */
  value: string;
  label: string;
  delay?: number;
}

/**
 * Renders a stat that counts up from zero to the numeric part of the value
 * once it scrolls into view.
 */
export function CountUpStat({ value, label, delay = 0 }: CountUpStatProps) {
  const match = value.match(/^(\d+)(\D*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  const { ref, inView } = useInView(0.2);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const duration = 1400;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    // Respect animation delay before starting
    const timer = setTimeout(() => requestAnimationFrame(step), delay);
    return () => clearTimeout(timer);
  }, [inView, target, delay]);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="mb-1 text-4xl font-bold text-brand-black md:text-5xl">
        {count}
        {suffix}
      </div>
      <p className="text-sm leading-tight text-neutral-mid">{label}</p>
    </div>
  );
}
