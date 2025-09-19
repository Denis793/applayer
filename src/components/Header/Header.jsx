import clsx from 'clsx';
import { useEffect, useState } from 'react';
import logoLight from '@/img/logo/logo.svg';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import styles from './Header.module.scss';

export function Header() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { headerRef, scrollToId } = useSmoothScroll();

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
    <>
      <header ref={headerRef} className={clsx(styles.header, sticky ? styles.sticky : styles.absolute)}>
        <div className="container">
          <div className={styles.inner}>
            <a href="#home" onClick={(e) => scrollToId(e, 'home', handleLinkClick)}>
              <img src={logoLight} alt="Logo" className={styles.logo} />
            </a>

            <nav className={styles.nav}>
              <a href="#home" onClick={(e) => scrollToId(e, 'home', handleLinkClick)}>
                Home
              </a>
              <a href="#about" onClick={(e) => scrollToId(e, 'about', handleLinkClick)}>
                About
              </a>
              <a href="#explore" onClick={(e) => scrollToId(e, 'explore', handleLinkClick)}>
                Explore
              </a>
              <a href="#feature" onClick={(e) => scrollToId(e, 'feature', handleLinkClick)}>
                Features
              </a>
              <a href="#faq" onClick={(e) => scrollToId(e, 'faq', handleLinkClick)}>
                FAQ
              </a>
              <a href="#testimonial" onClick={(e) => scrollToId(e, 'testimonial', handleLinkClick)}>
                Testimonial
              </a>
            </nav>

            <button
              className={clsx(styles.burger, { [styles.open]: menuOpen })}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          {menuOpen && <div className={styles.overlay} onClick={handleLinkClick} />}

          <div className={clsx(styles.mobileMenu, { [styles.open]: menuOpen })}>
            <a href="#home" onClick={(e) => scrollToId(e, 'home', handleLinkClick)}>
              Home
            </a>
            <a href="#about" onClick={(e) => scrollToId(e, 'about', handleLinkClick)}>
              About
            </a>
            <a href="#explore" onClick={(e) => scrollToId(e, 'explore', handleLinkClick)}>
              Explore
            </a>
            <a href="#feature" onClick={(e) => scrollToId(e, 'feature', handleLinkClick)}>
              Features
            </a>
            <a href="#faq" onClick={(e) => scrollToId(e, 'faq', handleLinkClick)}>
              FAQ
            </a>
            <a href="#testimonial" onClick={(e) => scrollToId(e, 'testimonial', handleLinkClick)}>
              Testimonial
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
