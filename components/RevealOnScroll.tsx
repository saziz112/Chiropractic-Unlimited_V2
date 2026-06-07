import React, { useEffect, useRef, useState } from 'react';

type AnimationVariant = 'fade-up' | 'slide-left' | 'slide-right' | 'scale-up' | 'fade-only' | 'stagger';

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animation?: AnimationVariant;
  threshold?: number;
}

const variantClass: Record<AnimationVariant, string> = {
  'fade-up': '',
  'slide-left': 'slide-left',
  'slide-right': 'slide-right',
  'scale-up': 'scale-up',
  'fade-only': 'fade-only',
  'stagger': '',
};

// True only while the very first page render (the hydration pass) is mounting.
// Prerendered HTML ships every section with `is-visible` (see prerender.cjs),
// so the initial client render must match it exactly or React 18 throws a
// hydration mismatch (#418) and tears down the whole DOM — which is what
// caused the sitewide footer CLS. SPA navigations after first load mount
// fresh and keep the original hidden-then-reveal animation.
let initialPageLoad = true;

export const RevealOnScroll: React.FC<Props> = ({
  children,
  delay = 0,
  className = "",
  animation = 'fade-up',
  threshold = 0.1,
}) => {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [isVisible, setIsVisible] = useState(() => initialPageLoad || prefersReducedMotion);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wasInitialLoad = initialPageLoad;
    if (wasInitialLoad) {
      // All instances of the first page mount in the same tick; anything after
      // this is an SPA navigation.
      setTimeout(() => { initialPageLoad = false; }, 0);
    }

    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;

    if (wasInitialLoad) {
      // Hydration pass: content is already visible (matches prerendered HTML).
      // Keep above-the-fold sections as-is; below-the-fold sections are hidden
      // post-hydration so they still get their scroll-reveal. Both states are
      // opacity/transform only — no layout shift.
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) return;
      setIsVisible(false);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px 50px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReducedMotion, threshold]);

  const style = {
    transitionDelay: `${delay}ms`,
  };

  const baseClass = animation === 'stagger' ? 'stagger-children' : 'fade-in-section';
  const variant = variantClass[animation] || '';

  return (
    <div
      ref={ref}
      style={style}
      className={`${baseClass} ${variant} ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
