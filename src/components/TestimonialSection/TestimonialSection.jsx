import styles from './TestimonialSection.module.scss';

const testimonials = [
  {
    name: 'Emily Johnson',
    role: 'Product Manager',
    text: 'This app is amazing. It helped me manage all my appointments and health records easily!',
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    name: 'Michael Brown',
    role: 'Software Engineer',
    text: 'Highly recommend it! Easy to use and very helpful in day-to-day health tracking.',
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    name: 'Sarah Williams',
    role: 'Designer',
    text: 'I love how intuitive and responsive the app is. Great experience!',
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
];

export function TestimonialSection() {
  return (
    <>
      <section className={styles.testimonialSection} id="testimonial" data-aos="fade-up">
        <div className="container">
          <div className={styles.header}>
            <h2>What Our Users Say</h2>
            <h3>Real feedback from people who use our app every day.</h3>
          </div>

          <div className={styles.grid}>
            {testimonials.map((t, idx) => (
              <div key={idx} className="card">
                <img src={t.avatar} alt={t.name} className={styles.avatar} />
                <p className={styles.text}>"{t.text}"</p>
                <div className={styles.author}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
