import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  once?: boolean;
  rootMargin?: string;
}

/**
 * Returns a ref and whether the element is currently visible in viewport.
 * By default it updates on both enter and leave for replayable animations.
 */
export function useInView(threshold = 0.15, options: UseInViewOptions = {}) {
  const { once = false, rootMargin = '0px 0px -8% 0px' } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);

        if (once && entry.isIntersecting) {
          obs.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once, rootMargin, threshold]);

  return { ref, inView };
}
