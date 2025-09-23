import { useEffect, useRef } from 'react';
import heroImg from '@/img/hero/hero-img.png';
import styles from './Hero.module.scss';

export function Hero() {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }

      if (textRef.current) {
        textRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className={styles.heroWrapper} ref={wrapperRef} id="home">
        <div className="container">
          <div className={styles.heroSection}>
            <div className={styles.textBlock} ref={textRef}>
              <h1>Complete Health-Care Solution App For Everyone</h1>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consetetur sadipscing eserewd diam nonumy eirmod tempor invidunt ut labore.
              </p>
              <a href="#" className={styles.ctaButton}>
                Get Started
              </a>
            </div>

            <img className={styles.heroImg} src={heroImg} alt="hero" ref={imgRef} />
          </div>
        </div>
      </section>
    </>
  );
}
