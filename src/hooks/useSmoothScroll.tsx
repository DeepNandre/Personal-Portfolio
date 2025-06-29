
import { useEffect } from 'react';

interface SmoothScrollOptions {
  duration?: number;
  easing?: string;
}

export const useSmoothScroll = (options: SmoothScrollOptions = {}) => {
  const { duration = 1000, easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' } = options;

  useEffect(() => {
    let isScrolling = false;

    const smoothScrollTo = (target: number) => {
      if (isScrolling) return;
      
      isScrolling = true;
      const start = window.pageYOffset;
      const distance = target - start;
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Cubic bezier easing
        const ease = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        window.scrollTo(0, start + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          isScrolling = false;
        }
      };

      requestAnimationFrame(animateScroll);
    };

    const handleAnchorClicks = (e: Event) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.slice(1);
        const targetElement = targetId ? document.getElementById(targetId) : null;
        
        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
          smoothScrollTo(targetPosition);
        }
      }
    };

    document.addEventListener('click', handleAnchorClicks);
    
    return () => {
      document.removeEventListener('click', handleAnchorClicks);
    };
  }, [duration]);
};

export const scrollToElement = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};
