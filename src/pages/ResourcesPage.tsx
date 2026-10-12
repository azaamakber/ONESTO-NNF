import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';

const resourceItems = [
  {
    title: 'Dairy feeding basics',
    text: 'Practical guidance for building a consistent feeding routine for productive dairy cattle and stable herd management.',
  },
  {
    title: 'Cattle finishing planning',
    text: 'A simple look at how feeding stages, storage, and routine farm planning influence cattle management.',
  },
  {
    title: 'Feed safety and storage',
    text: 'Helpful reminders on keeping feed clean, dry, and protected from moisture, pests, and handling issues.',
  },
  {
    title: 'Choosing the right product',
    text: 'A practical checklist for farmers comparing products by category, herd stage, and feeding requirements.',
  },
];

export function ResourcesPage() {
  return (
    <>
      <Seo title="Resources" description="Practical farm resources and feeding guidance for dairy and cattle operations in Pakistan." />

      <div className="page-hero inner-page-hero">
        <div className="container narrow">
          <span className="section-kicker">Farming resources</span>
          <h1>Helpful guidance for better farm feeding decisions.</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="resource-grid">
            {resourceItems.map((item) => (
              <article key={item.title} className="resource-card">
                <span className="section-kicker">Guide</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to="/contact" className="text-link">
                  Ask for product guidance
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
