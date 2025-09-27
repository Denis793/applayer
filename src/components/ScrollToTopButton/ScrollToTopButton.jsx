import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './ScrollToTopButton.module.scss';

export function ScrollToTopButton({ menuOpen }) {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => setVisible(window.scrollY > 300);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible || menuOpen) return null;

  return (
    <button onClick={scrollToTop} className={styles.scrollToTop}>
      <FaArrowUp />
    </button>
  );
}
