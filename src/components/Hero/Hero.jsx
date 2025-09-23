import { useEffect, useRef } from 'react';
import heroImg from '@/img/hero/hero-img.png';
import styles from './Hero.module.scss';

export function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.heroWrapper} id="home">
      <div ref={bgRef} className={styles.bgImage} />
      <div className="container">
        <div className={styles.heroSection}>
          <div className={styles.textBlock}>
            <h1>Complete Health- Care Solution App For Everyone</h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consetetur sadipscing eserewd diam nonumy eirmod tempor invidunt ut labore.
            </p>
            <a href="#" className={styles.ctaButton}>
              Get Started
            </a>
          </div>

          <img className={styles.heroImg} src={heroImg} alt="hero" />
        </div>
      </div>
    </section>
  );
}
