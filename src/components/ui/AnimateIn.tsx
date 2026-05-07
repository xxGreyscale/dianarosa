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
  as: Tag = 'div',
}: AnimateInProps) {
  const { ref, inView } = useInView(threshold);

  const style: CSSProperties = inView
    ? {
        animation: `${keyframeMap[animation]} 0.6s ease-out ${delay}ms both`,
      }
    : { opacity: 0 };

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
