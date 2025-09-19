import footerLogo from '@/img/logo/logo-dark.svg';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import styles from './Footer.module.scss';

export function Footer() {
  const { scrollToId } = useSmoothScroll();

  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.top}>
            <div className={styles.brand}>
              <img src={footerLogo} alt="Logo" className={styles.logo} />
              <h3>Empowering people with the tools they need for better health and wellbeing.</h3>
            </div>

            <div className={styles.links}>
              <div className={styles.column}>
                <h4 className={styles.columnTitle}>Company</h4>
                <ul>
                  <li>
                    <a href="#about" onClick={(e) => scrollToId(e, 'about')}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#feature" onClick={(e) => scrollToId(e, 'feature')}>
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#testimonial" onClick={(e) => scrollToId(e, 'testimonial')}>
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#explore" onClick={(e) => scrollToId(e, 'explore')}>
                      Explore
                    </a>
                  </li>
                </ul>
              </div>

              <div className={styles.column}>
                <h4 className={styles.columnTitle}>Support</h4>
                <ul>
                  <li>
                    <a href="#faq" onClick={(e) => scrollToId(e, 'faq')}>
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>

              <div className={styles.column}>
                <h4 className={styles.columnTitle}>Contact</h4>
                <ul>
                  <li>Email: support@applayer.com</li>
                  <li>Phone: +1 (123) 456-7890</li>
                  <li>Mon - Fri: 9:00 - 18:00</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <p className={styles.copy}>&copy; {new Date().getFullYear()} Applayer. All rights reserved.</p>
            <div className={styles.socials}>
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebookF />
              </a>
              <a href="https://github.com/Denis793" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shevchenkodenys3/" target="_blank">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/denys__shevchenko__/" target="_blank">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
