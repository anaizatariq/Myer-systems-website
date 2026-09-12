'use client';

import { useEffect, useRef } from 'react';

/**
 * Adds the `is-visible` class to elements with the `reveal` class
 * when they enter the viewport. Includes fail-safes to prevent blank pages.
 */
export function useReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Fail-safe: Force show everything after 1.5s if observer fails to trigger
    const fallbackTimeout = setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-up, .reveal-scale, .reveal-left').forEach(el => {
        el.classList.add('is-visible');
      });
    }, 1500);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '100px 0px 100px 0px' }
    );
    observerRef.current = observer;

    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.is-visible), .reveal-up:not(.is-visible), .reveal-scale:not(.is-visible), .reveal-left:not(.is-visible)')
        .forEach((el) => observer.observe(el));
    };

    observeAll();

    // Check again after a delay to ensure Next.js routing has injected the DOM
    const t1 = setTimeout(observeAll, 100);
    const t2 = setTimeout(observeAll, 500);

    return () => {
      clearTimeout(fallbackTimeout);
      clearTimeout(t1);
      clearTimeout(t2);
      observer.disconnect();
    };
  }, []);
}
