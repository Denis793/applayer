import { FaCalendarAlt, FaMicrophone, FaStethoscope } from 'react-icons/fa';
import styles from './FeatureSection.module.scss';

const features = [
  {
    title: 'Easy Appointments',
    description: 'Schedule visits quickly and easily.',
    icon: <FaCalendarAlt />,
    color: 'blue',
  },
  {
    title: 'Live Consultation',
    description: 'Talk to doctors online anytime.',
    icon: <FaMicrophone />,
    color: 'green',
  },
  {
    title: 'Health Records',
    description: 'Keep track of all your medical data.',
    icon: <FaStethoscope />,
    color: 'pink',
  },
];

const colorMap = {
  blue: styles.blue,
  green: styles.green,
  pink: styles.pink,
};

export function FeatureSection() {
  return (
    <section className={styles.section} id="feature">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What Makes Us Stand Out</h2>
          <p className={styles.subtitle}>
            Discover a better way to manage your health with features designed to make your life easier.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.card}>
              <div className={`${styles.iconWrapper} ${colorMap[feature.color]}`}>{feature.icon}</div>
              <h4 className={styles.cardTitle}>{feature.title}</h4>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
