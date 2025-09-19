import heroImg from '@/img/hero/hero-img.png';

import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.textBlock}>
        <h1 className={styles.title}>Complete Health- Care Solution App For Everyone</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consetetur sadipscing eserewd diam nonumy eirmod tempor invidunt ut labore.
        </p>
        <a href="#" className={styles.ctaButton}>
          Get Started
        </a>
      </div>

      <img className={styles.heroImg} src={heroImg} alt="heroImg" />
    </section>
  );
}
