import logo1 from '@/img/client-logo/client-logo-1.png';
import logo2 from '@/img/client-logo/client-logo-2.png';
import logo3 from '@/img/client-logo/client-logo-3.png';
import logo4 from '@/img/client-logo/client-logo-4.png';
import logo5 from '@/img/client-logo/client-logo-5.png';

import styles from './ClientLogoSection.module.scss';

const logos = [logo1, logo2, logo3, logo4, logo5];

export function ClientLogoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logoGrid}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logoWrapper}>
              <img src={logo} alt={`Client Logo ${index + 1}`} className={styles.logoImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
