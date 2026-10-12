import { Factory, PackageCheck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { assetUrl } from '../config/site';

const qualityPillars = [
  {
    icon: Factory,
    title: 'Manufacturing discipline',
    text: 'Production routines are set around practical feed handling, quality-conscious storage, and consistent bagging processes.',
  },
  {
    icon: PackageCheck,
    title: 'Proper packaging',
    text: 'Feed bags are prepared to support easy handling, storage, and distribution for farms, dealers, and bulk buyers.',
  },
  {
    icon: ShieldCheck,
    title: 'Farm-ready assurance',
    text: 'The focus remains on dependable feed products and clear communication with farmers, dealers, and livestock buyers.',
  },
];

export function QualityPage() {
  return (
    <>
      <Seo title="Quality & Manufacturing" description="Learn about NutriNova Feed manufacturing practices, packaging care, and feed quality focus." />

      <div className="page-hero inner-page-hero">
        <div className="container narrow">
          <span className="section-kicker">Quality & Manufacturing</span>
          <h1>Quality-minded production, packaging, and feed handling.</h1>
        </div>
      </div>

      <section className="section">
        <div className="container split-layout large-gap">
          <div className="section-heading compact">
            <span className="section-kicker">How we work</span>
            <h2>Feed quality starts with disciplined handling and practical routines.</h2>
            <p>
              NutriNova Feed is positioned around clean handling, practical production standards, and consistent product delivery to dairy farms, cattle operations, and wholesale buyers. The emphasis remains on dependable feed supply and effective farm use.
            </p>
            <Link to="/contact" className="btn btn-secondary">
              Talk to the team
            </Link>
          </div>

          <div className="full-width-image-panel">
            <img src={assetUrl('images/ONESTO Feed Sack Filling Line.png')} alt="Feed manufacturing and bagging process" />
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading centered narrow max-750">
            <span className="section-kicker">Production standards</span>
            <h2>Practical quality principles that support the feed supply chain.</h2>
          </div>

          <div className="feature-grid values-grid">
            {qualityPillars.map(({ icon: Icon, title, text }) => (
              <article key={title} className="feature-card">
                <div className="feature-icon">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
