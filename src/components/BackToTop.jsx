import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLenis } from './SmoothScroll';

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    // If Lenis is active, listen to its scroll event
    if (lenis) {
      const handleLenisScroll = ({ scroll }) => {
        setVisible(scroll > 450);
      };
      lenis.on('scroll', handleLenisScroll);
      return () => {
        lenis.off('scroll', handleLenisScroll);
      };
    }

    // Fallback native scroll listener (when reduced motion disables Lenis or before Lenis mounts)
    const handleNativeScroll = () => {
      setVisible(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleNativeScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleNativeScroll);
    };
  }, [lenis]);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (lenis) {
      if (prefersReducedMotion) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        lenis.scrollTo(0, {
          duration: 1.15,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
      return;
    }

    // Native fallback
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  };

  return (
    <>
      <button
        type="button"
        className={`back-to-top-btn ${visible ? 'is-visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp size={20} strokeWidth={2.2} />
      </button>

      <style>{`
        .back-to-top-btn {
          position: fixed;
          bottom: max(1.5rem, calc(env(safe-area-inset-bottom, 0px) + 1.25rem));
          right: max(1.5rem, calc(env(safe-area-inset-right, 0px) + 1.25rem));
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: var(--color-graphite, #141D24);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 16px rgba(20, 29, 36, 0.25), 0 1px 3px rgba(20, 29, 36, 0.12);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 900;
          opacity: 0;
          pointer-events: none;
          transform: translateY(12px) scale(0.92);
          transition: opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      background-color 0.18s ease,
                      box-shadow 0.18s ease;
          touch-action: manipulation;
        }

        .back-to-top-btn.is-visible {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0) scale(1);
        }

        .back-to-top-btn:hover {
          background-color: var(--color-muted-bronze, #A48256);
          border-color: rgba(255, 255, 255, 0.35);
          box-shadow: 0 8px 24px rgba(164, 130, 86, 0.35), 0 2px 6px rgba(20, 29, 36, 0.15);
          transform: translateY(-2px) scale(1.03);
        }

        .back-to-top-btn:active {
          transform: translateY(1px) scale(0.97);
          box-shadow: 0 2px 8px rgba(20, 29, 36, 0.2);
        }

        .back-to-top-btn:focus-visible {
          outline: 2px solid var(--color-muted-bronze, #A48256);
          outline-offset: 3px;
        }

        @media (max-width: 480px) {
          .back-to-top-btn {
            width: 46px;
            height: 46px;
            bottom: max(1.15rem, calc(env(safe-area-inset-bottom, 0px) + 0.95rem));
            right: max(1.15rem, calc(env(safe-area-inset-right, 0px) + 0.95rem));
          }
          .back-to-top-btn svg {
            width: 18px;
            height: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .back-to-top-btn {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default BackToTop;
