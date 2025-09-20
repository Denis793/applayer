import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from './FAQSection.module.scss';
import Image from '@/img/faq/faq-img.svg';

const faqs = [
  {
    question: 'Can I make an online appointment?',
    answer:
      'Lorem ipsum dolor samet consetner discing elit, serewd diam nonumy eirmod tempor invidunt.Lorem ipsum colewort samet consetner discing elit.',
  },
  {
    question: 'How can I select a best doctor?',
    answer: 'Lorem ipsum dolor samet consetner discing elit, serewd diam nonumy eirmod tempor invidunt.',
  },
  {
    question: 'How can I edit my personal information?',
    answer: 'You can edit your data from the profile page after logging in.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq" data-aos="fade-up">
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <div className={styles.header}>
            <h2>Frequently Asked Queries</h2>
            <p className={styles.subtitle}>
              Lorem ipsum dolor samet consetner discing elit, serewd diam nonumy eirmod tempor invidunt.
            </p>
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

        <div className={styles.imageBlock}>
          <img src={Image} alt="FAQ illustration" className={styles.image} />
        </div>
      </div>
    </section>
  );
}
