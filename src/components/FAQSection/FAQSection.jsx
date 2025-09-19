// src/components/FAQSection.jsx
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
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
  {
    question: 'Do you offer telemedicine services?',
    answer: 'Yes! You can consult with a doctor online using video calls.',
  },
  {
    question: 'Are my medical records accessible anytime?',
    answer: 'Absolutely. Your digital health records are always available securely.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className={styles.section} id="faq">
        <div className="container">
          <div className={styles.header}>
            <h2>Frequently Asked Questions</h2>
            <h3 className={styles.subtitle}>Still curious? Here’s what others often ask.</h3>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, idx) => (
              <div key={idx} className={`${styles.faqItem} ${openIndex === idx ? styles.open : ''}`}>
                <button className={styles.question} onClick={() => toggleFAQ(idx)}>
                  <span>{faq.question}</span>
                  <FaChevronDown className={styles.icon} />
                </button>
                <div className={styles.answerWrapper} style={{ maxHeight: openIndex === idx ? '200px' : '0px' }}>
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
