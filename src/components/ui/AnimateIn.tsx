import { useEffect, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

type AnimationType = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right';
type TagName = 'div' | 'section' | 'article' | 'li' | 'span' | 'p';

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  /** Animation delay in milliseconds */
  delay?: number;
  animation?: AnimationType;
  threshold?: number;
  durationMs?: number;
  once?: boolean;
  as?: TagName;
}

const keyframeMap: Record<AnimationType, string> = {
  'fade-up': 'fadeUp',
  'fade-in': 'fadeIn',
  'fade-left': 'fadeLeft',
  'fade-right': 'fadeRight',
};

export function AnimateIn({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
  threshold = 0.15,
  durationMs = 650,
  once = false,
  as: Tag = 'div',
}: AnimateInProps) {
  const { ref, inView } = useInView(threshold, { once });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setPrefersReducedMotion(media.matches);
    onChange();
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const shouldAnimate = inView && !prefersReducedMotion;

  const style: CSSProperties = shouldAnimate
    ? {
        animation: `${keyframeMap[animation]} ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms both`,
        willChange: 'opacity, transform',
      }
    : { opacity: inView ? 1 : 0 };

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}
