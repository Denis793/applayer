import styles from './StepsSection.module.scss';
import Image from '@/img/steps/steps-img.svg';

const steps = [
  {
    title: 'Install This App',
    description: 'Lorem ipsum dolor samet consetner discing elitr, serewd diam nonumy eirmod tempor invidunt.',
  },
  {
    title: 'Login Or Signup',
    description: 'Lorem ipsum dolor samet consetner discing elitr, serewd diam nonumy eirmod tempor invidunt.',
  },
  {
    title: 'Search Your Doctor & Book',
    description: 'Lorem ipsum dolor samet consetner discing elitr, serewd diam nonumy eirmod tempor invidunt.',
  },
];

export function StepsSection() {
  return (
    <section className={styles.section} id="steps" data-aos="fade-up">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.imageBlock}>
            <img src={Image} alt="Choose the date mockup" className={styles.image} />
          </div>

          <div className={styles.textBlock}>
            <h2>Very Easy To Use Just Following 3 Steps</h2>
            <p>Lorem ipsum dolor samet consetner discing elitr, serewd diam nonumy eirmod tempor invidunt.</p>

            <div className={styles.steps}>
              {steps.map((step, idx) => (
                <div key={idx} className={styles.step}>
                  <span className={styles.dot} />
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
