import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from 'react';

interface UseScrollTruckMotionReturn {
  ref: RefObject<HTMLDivElement | null>;
  style: CSSProperties;
}

const REST_STYLE: CSSProperties = {
  opacity: 1,
  transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateZ(0deg) scale(1)',
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/**
 * Animates truck position and perspective from scroll progress.
 * Motion plays both directions naturally as users scroll down/up.
 */
export function useScrollTruckMotion(): UseScrollTruckMotionReturn {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>(REST_STYLE);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const element = ref.current;
    if (!element) return;

    let rafId: number | null = null;

    const update = () => {
      rafId = null;

      if (media.matches) {
        setStyle(REST_STYLE);
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;

      // 0 when entering near viewport bottom, 1 when settled near viewport top.
      const start = viewportHeight * 0.94;
      const end = -rect.height * 0.14;
      const rawProgress = (start - rect.top) / (start - end);
      const progress = clamp(rawProgress, 0, 1);
      const eased = 1 - Math.pow(1 - progress, 2);

      const translateX = -72 * (1 - eased);
      const rotateY = 14 * (1 - eased);
      const rotateZ = -1.4 * (1 - eased);
      const scale = 0.975 + 0.025 * eased;
      const opacity = 0.45 + 0.55 * eased;

      setStyle({
        opacity,
        transform: `translate3d(${translateX}px, 0, 0) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
      });
    };

    const requestUpdate = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    media.addEventListener('change', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      media.removeEventListener('change', requestUpdate);

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return { ref, style };
}
