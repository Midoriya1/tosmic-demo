import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const LenisContext = createContext(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScroll({ children }) {
  const [lenisInstance, setLenisInstance] = useState(null);
  const lenisRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Respect user's accessibility reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    // Initialize Lenis with official GSAP ticker integration pattern
    const lenis = new Lenis({
      autoRaf: false, // Let GSAP ticker handle frame updates exclusively
      smoothWheel: true,
      syncTouch: false, // Preserve natural, buttery touch scrolling on mobile
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    // Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis RAF loop strictly through GSAP ticker (time converted from seconds to ms)
    const tickerUpdate = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    // Global interceptor for in-page anchor links (e.g. href="#lab-products")
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl, {
          offset: -85, // Account for sticky header height
          duration: 1.1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Cleanup ticker, event listeners, and destroy instance on unmount
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
    };
  }, []);

  // Handle route navigation: reset scroll to top or scroll to target hash
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) {
      window.scrollTo(0, 0);
      return;
    }

    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        // Small delay to allow new route to mount layout
        setTimeout(() => {
          lenis.scrollTo(el, { offset: -85, duration: 0.9 });
        }, 80);
        return;
      }
    }

    // Immediate scroll to top on route change without animation delay
    lenis.scrollTo(0, { immediate: true });
    ScrollTrigger.refresh();
  }, [location.pathname, location.hash]);

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
}
