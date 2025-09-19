import styles from './IconBox.module.scss';
import clsx from 'clsx';

export function IconBox({ icon, colorClass }) {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.shadow, colorClass)} />
      <div className={clsx(styles.iconBox, colorClass)}>{icon}</div>
    </div>
  );
}
