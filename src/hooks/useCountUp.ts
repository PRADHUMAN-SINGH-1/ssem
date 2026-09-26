import { useEffect, useState, useRef } from 'react';
import type { RefObject } from 'react';

interface CountUpOptions {
  duration?: number;
  startOnView?: boolean;
}

export function useCountUp<T extends HTMLElement = HTMLDivElement>(
  target: number,
  options: CountUpOptions = {}
): { count: number; elementRef: RefObject<T | null> } {
  const { duration = 1800, startOnView = true } = options;
  const [count, setCount] = useState(0);
  const elementRef = useRef<T | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.round(easeOut * target);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(animate);
    };

    if (!startOnView) {
      startAnimation();
      return;
    }

    const el = elementRef.current;
    if (!el) {
      startAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [target, duration, startOnView]);

  return { count, elementRef };
}
