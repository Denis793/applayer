import clsx from 'clsx';
import { useEffect, useState } from 'react';
import logoLight from '@/img/logo/logo.svg';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import styles from './Header.module.scss';

export function Header({ menuOpen, setMenuOpen }) {
  const [sticky, setSticky] = useState(false);
  const { headerRef, scrollToId } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header ref={headerRef} className={clsx(styles.header, sticky ? styles.sticky : styles.absolute)}>
      <div className="container">
        <div className={styles.inner}>
          <a href="#hero" onClick={(e) => scrollToId(e, 'hero', handleLinkClick)}>
            <img src={logoLight} alt="Logo" className={styles.logo} />
          </a>

          <nav className={styles.nav}>
            {['hero', 'about', 'client', 'feature', 'faq', 'steps', 'departments', 'testimonial'].map((id) => (
              <a key={id} href={`#${id}`} onClick={(e) => scrollToId(e, id, handleLinkClick)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
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
          {['hero', 'about', 'client', 'feature', 'faq', 'steps', 'departments', 'testimonial'].map((id) => (
            <a key={id} href={`#${id}`} onClick={(e) => scrollToId(e, id, handleLinkClick)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
