import { useRef, useEffect, useState } from 'react';

export function useSmoothScroll() {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(80);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  const scrollToId = (event, id, onClose = () => {}) => {
    event.preventDefault();
    onClose();

    const target = document.getElementById(id);
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return { headerRef, scrollToId };
}
