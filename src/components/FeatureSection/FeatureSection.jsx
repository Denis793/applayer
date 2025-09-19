import { IconBox } from '../IconBox';
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
    <section id="feature" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Awesome Features</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.card}>
              <IconBox icon={feature.icon} colorClass={colorMap[feature.color]} />
              <h4 className={styles.cardTitle}>{feature.title}</h4>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
