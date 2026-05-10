import { useEffect, useRef, useState, type RefObject } from 'react';

interface UseScrollClipPathOptions {
  scrollDownStart?: string;
  scrollDownEnd?: string;
  scrollUpStart?: string;
  scrollUpEnd?: string;
}

interface UseScrollClipPathReturn {
  ref: RefObject<HTMLDivElement | null>;
  clipPath: string;
}

/**
 * Animates clip-path based on scroll direction.
 * When scrolling down: animates from scrollDownStart to scrollDownEnd
 * When scrolling up: animates from scrollUpStart to scrollUpEnd
 */
export function useScrollClipPath(
  options: UseScrollClipPathOptions = {}
): UseScrollClipPathReturn {
  const {
    scrollDownStart = 'polygon(0 0%, 100% 0, 100% 100%, 0 100%)',
    scrollDownEnd = 'polygon(0 20%, 100% 0, 100% 100%, 0 100%)',
    scrollUpStart = 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)',
    scrollUpEnd = 'polygon(0 20%, 100% 0, 100% 100%, 0 100%)',
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [clipPath, setClipPath] = useState(scrollDownEnd);
  const lastScrollYRef = useRef(0);
  const directionRef = useRef<'down' | 'up' | null>(null);
  const elementVisibleRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const elementRect = element.getBoundingClientRect();

      // Check if element is in viewport
      const isVisible =
        elementRect.top < window.innerHeight && elementRect.bottom > 0;
      elementVisibleRef.current = isVisible;

      if (!isVisible) {
        lastScrollYRef.current = currentScrollY;
        return;
      }

      // Determine scroll direction
      const isScrollingDown = currentScrollY > lastScrollYRef.current;
      const directionChanged =
        (isScrollingDown && directionRef.current !== 'down') ||
        (!isScrollingDown && directionRef.current !== 'up');

      if (directionChanged) {
        directionRef.current = isScrollingDown ? 'down' : 'up';
      }

      // Calculate position of element relative to viewport
      // 0 = element top at window bottom, 1 = element top at window top
      const relativePosition = 1 - elementRect.top / window.innerHeight;
      const progress = Math.max(0, Math.min(1, relativePosition));

      // Interpolate based on scroll direction
      if (directionRef.current === 'down') {
        const interpolated = interpolateClipPath(
          scrollDownStart,
          scrollDownEnd,
          progress
        );
        setClipPath(interpolated);
      } else if (directionRef.current === 'up') {
        const interpolated = interpolateClipPath(
          scrollUpStart,
          scrollUpEnd,
          progress
        );
        setClipPath(interpolated);
      }

      lastScrollYRef.current = currentScrollY;
    };

    // Use requestAnimationFrame for smoother updates
    let rafId: number;
    const handleScrollWithRAF = () => {
      handleScroll();
      rafId = requestAnimationFrame(handleScrollWithRAF);
    };

    window.addEventListener('scroll', handleScrollWithRAF, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScrollWithRAF);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [scrollDownStart, scrollDownEnd, scrollUpStart, scrollUpEnd]);

  return { ref, clipPath };
}

/**
 * Interpolates between two clip-path polygon values
 */
function interpolateClipPath(
  start: string,
  end: string,
  progress: number
): string {
  const startValues = extractPolygonValues(start);
  const endValues = extractPolygonValues(end);

  if (!startValues || !endValues) return end;

  // Interpolate each value
  const interpolated = startValues.map((val, i) => {
    const endVal = endValues[i];
    return val + (endVal - val) * progress;
  });

  // Reconstruct polygon string
  return `polygon(${interpolated.map((v, i) => (i % 2 === 0 ? `${v}%` : `${v}%`)).join(', ')})`;
}

/**
 * Extracts numeric values from polygon string
 */
function extractPolygonValues(polygon: string): number[] | null {
  const match = polygon.match(/\d+(?:\.\d+)?/g);
  return match ? match.map(Number) : null;
}
