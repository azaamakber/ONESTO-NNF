import { ChevronRight } from 'lucide-react';
import { Seo } from '../components/Seo';

const faqs = [
  {
    question: 'Which feed is best for dairy cattle?',
    answer: 'The right feed depends on the herd stage, production goals, and feeding routine. NutriNova dairy feed options are designed to support regular dairy feeding plans in practical farm conditions.',
  },
  {
    question: 'Do you support wholesale and dealer enquiries?',
    answer: 'Yes. For dealer and wholesale discussions, the team can help with product availability and farm or distribution support.',
  },
  {
    question: 'Are these products suitable for cattle fattening?',
    answer: 'NutriNova offers feed categories geared toward cattle fattening and finishing routines, depending on farm objectives and herd stage.',
  },
  {
    question: 'How can I get product specifications?',
    answer: 'Contact the NutriNova team for the latest specifications, available bag sizes, and the most suitable product for your farm or business requirement.',
  },
];

export function FaqPage() {
  return (
    <>
      <Seo title="FAQ" description="Frequently asked questions about NutriNova Feed product categories, dairy feed, and dealer enquiries." />

      <div className="page-hero inner-page-hero">
        <div className="container narrow">
          <span className="section-kicker">FAQ</span>
          <h1>Common questions about NutriNova Feed.</h1>
        </div>
      </div>

      <section className="section">
        <div className="container faq-list-wrap">
          {faqs.map((item) => (
            <div key={item.question} className="faq-card">
              <div className="faq-question">
                <ChevronRight size={18} />
                <h3>{item.question}</h3>
              </div>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
