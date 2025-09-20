import styles from './DepartmentsSection.module.scss';
import Image from '@/img/department/department.png';

const departments = [
  { title: 'General', description: 'Lorem ipsum dolor samet consetner ching elitr serewd diam nonumy.' },
  { title: 'Ophthalmology', description: 'Lorem ipsum dolor samet consetner ching elitr serewd diam nonumy.' },
  { title: 'Neurology', description: 'Lorem ipsum dolor samet consetner ching elitr serewd diam nonumy.' },
  { title: 'Dental', description: 'Lorem ipsum dolor samet consetner ching elitr serewd diam nonumy.' },
  { title: 'Cardiology', description: 'Lorem ipsum dolor samet consetner ching elitr serewd diam nonumy.' },
  { title: 'Laboratory', description: 'Lorem ipsum dolor samet consetner ching elitr serewd diam nonumy.' },
];

export function DepartmentsSection() {
  const leftDepartments = departments.slice(0, 3);
  const rightDepartments = departments.slice(3);

  return (
    <section className={styles.section} id="departments" data-aos="fade-up">
      <div className="container">
        <div className={styles.header}>
          <h2>Different Types Of Departments</h2>
          <p>Lorem ipsum dolor samet consetner discing elitr, serewd diam nonumy eirmod tempor invidunt ut labore.</p>
        </div>

        <div className={styles.content}>
          <div className={styles.column}>
            {leftDepartments.map((dept, idx) => (
              <div key={idx} className={styles.item}>
                <span className={styles.dot} />
                <div>
                  <h3>{dept.title}</h3>
                  <p>{dept.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.imageBlock}>
            <img src={Image} alt="Department categories mockup" className={styles.image} />
          </div>

          <div className={styles.column}>
            {rightDepartments.map((dept, idx) => (
              <div key={idx} className={styles.item}>
                <span className={styles.dot} />
                <div>
                  <h3>{dept.title}</h3>
                  <p>{dept.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
