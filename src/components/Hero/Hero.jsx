import hero1 from '@/img/hero/hero-img-1.png';
import hero2 from '@/img/hero/hero-img-2.png';
import hero3 from '@/img/hero/hero-img-3.png';
import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>Complete Health- Care Solution App For Everyone</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consetetur sadipscing eserewd diam nonumy eirmod tempor invidunt ut labore.
          </p>
          <a href="#" className={styles.ctaButton}>
            Get Started
          </a>
        </div>

        <div className={styles.imageBlock}>
          <img src={hero1} alt="Card 1" className={`${styles.card} ${styles.card1}`} />
          <img src={hero2} alt="Card 2" className={`${styles.card} ${styles.card2}`} />
          <img src={hero3} alt="Card 3" className={`${styles.card} ${styles.card3}`} />
        </div>
      </div>
    </section>
  );
}
