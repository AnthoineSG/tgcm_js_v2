import { memo } from 'react';

import faqData from 'src/data/faqData';

import './faq.scss';

function Faq() {
  return (
    <main className="faq__container">
      <h2 className="faq__container-title">FAQ</h2>
      <ul className="faq__container__list">
        {faqData.map((faq) => (
          <li className="faq__container__list__theme" key={faq.id}>
            <h3 className="faq__container__list__theme-title">{faq.title}</h3>
            <ul className="faq__container__list__theme__content">
              {faq.questions.map((question) => (
                <div key={question.id}>
                  <li className="faq__container__list__theme__content-question">
                    {question.question}
                  </li>
                  <p className="faq__container__list__theme__content-answer">
                    {question.answer}
                  </p>
                </div>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default memo(Faq);
