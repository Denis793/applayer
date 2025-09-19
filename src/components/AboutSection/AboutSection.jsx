import styles from './AboutSection.module.scss';
import aboutImage from '@/img/department/department.png';

export function AboutSection() {
  return (
    <>
      <section className={styles.aboutWrapper} id="about">
        <div className="container">
          <div className={styles.aboutSection}>
            <div className={styles.imageBlock}>
              <img src={aboutImage} alt="About Us" className={styles.image} />
            </div>

            <div className={styles.textBlock}>
              <h2>Why Choose Applayer?</h2>

              <h3>
                Our platform is built to help you manage your health with ease. From booking appointments to tracking
                your records — it's all here.
              </h3>

              <ul className={styles.list}>
                <li>Easy to use, intuitive interface</li>
                <li>Secure and private health data</li>
                <li>Available 24/7 — anytime, anywhere</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
