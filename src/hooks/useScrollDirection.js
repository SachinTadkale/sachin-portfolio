import { useState, useEffect, useRef } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      
      // Only update if scroll difference is significant (reduces jitter)
      if (Math.abs(scrollY - lastScrollY.current) > 5) {
        const direction = scrollY > lastScrollY.current ? 'down' : 'up';
        setScrollDirection(direction);
        lastScrollY.current = scrollY > 0 ? scrollY : 0;
      }
      
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return scrollDirection;
};
