'use client';

import { useEffect } from 'react';

/**
 * ScrollToTop - Client component that scrolls to top when mounted
 * Used to ensure project pages start at the top, with iframe handling
 */
export default function ScrollToTop() {
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Force scroll to top after a short delay to handle iframe loading
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    // Additional scroll after iframe potential load
    const timer2 = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return null;
}