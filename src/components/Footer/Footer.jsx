import footerLogo from '@/img/logo/logo-dark.svg';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src={footerLogo} alt="Logo" className={styles.logo} />
            <p className={styles.description}>
              Empowering people with the tools they need for better health and wellbeing.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Company</h4>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#feature">Features</a>
                </li>
                <li>
                  <a href="#testimonial">Testimonials</a>
                </li>
                <li>
                  <a href="#explore">Explore</a>
                </li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Support</h4>
              <ul>
                <li>
                  <a href="#faq">FAQ</a>
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
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
