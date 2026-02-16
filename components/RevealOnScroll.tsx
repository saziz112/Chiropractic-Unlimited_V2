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

export const RevealOnScroll: React.FC<Props> = ({
  children,
  delay = 0,
  className = "",
  animation = 'fade-up',
  threshold = 0.1,
}) => {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [isVisible, setIsVisible] = useState(prefersReducedMotion);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
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
