import { useState } from 'react';
import styles from './FAQSection.module.scss';

const faqs = [
  {
    question: 'How can I book an appointment?',
    answer: 'You can easily book through our app or website in just a few steps.',
  },
  {
    question: 'Can I cancel or reschedule?',
    answer: 'Yes, appointments can be managed anytime through your account.',
  },
  {
    question: 'Is my data secure?',
    answer: 'We use industry-standard encryption to keep your data safe and private.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>Have a question? We’re here to help.</p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.faqItem}>
              <button className={styles.question} onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
                {faq.question}
              </button>
              {openIndex === idx && <p className={styles.answer}>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
