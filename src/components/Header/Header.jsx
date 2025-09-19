import { useEffect, useState } from 'react';
import logoLight from '@/img/logo/logo.svg';
import styles from './Header.module.scss';
import clsx from 'clsx';

export function Header() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={clsx(styles.header, sticky ? styles.sticky : styles.absolute)}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <a href="#home">
            <img src={logoLight} alt="Logo" className={styles.logo} />
          </a>

          <nav className={styles.nav}>
            <a href="#home">Home</a>
            <a href="#feature">Features</a>
            <a href="#about">About</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#explore">Explore</a>
            <a href="#faq">FAQ</a>
          </nav>

          <button className={styles.burger} onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={clsx(styles.mobileMenu, menuOpen && styles.open)}>
          <a href="#home" onClick={handleLinkClick}>
            Home
          </a>
          <a href="#feature" onClick={handleLinkClick}>
            Features
          </a>
          <a href="#about" onClick={handleLinkClick}>
            About
          </a>
          <a href="#testimonial" onClick={handleLinkClick}>
            Testimonial
          </a>
          <a href="#explore" onClick={handleLinkClick}>
            Explore
          </a>
          <a href="#faq" onClick={handleLinkClick}>
            FAQ
          </a>
        </div>
      </div>
      {menuOpen && <div className={styles.overlay} onClick={toggleMenu} />}
    </header>
  );
}
