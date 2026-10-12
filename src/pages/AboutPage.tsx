import { ArrowRight, BadgeCheck, Leaf, ShieldCheck, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { assetUrl } from '../config/site';

const pillars = [
  {
    icon: Leaf,
    title: 'Healthy herd nutrition',
    text: 'NutriNova Feed focuses on practical feed routines that support dairy herds, cattle buyers, and livestock operations across Pakistan.',
  },
  {
    icon: BadgeCheck,
    title: 'Consistent feed quality',
    text: 'The brand is positioned around dependable quality control, careful bag management, and feed consistency for everyday farm use.',
  },
  {
    icon: ShieldCheck,
    title: 'Farmer-first support',
    text: 'Support is centred on helping farmers make better feed decisions with clear guidance, dealership support, and product communication.',
  },
  {
    icon: Sprout,
    title: 'Practical livestock solutions',
    text: 'Each product category is presented as a real-world feeding option for different herd stages rather than a one-size-fits-all message.',
  },
];

export function AboutPage() {
  return (
    <>
      <Seo title="About" description="Learn about NutriNova Feed and its farmer-focused approach to dairy and cattle nutrition in Pakistan." />

      <div className="page-hero inner-page-hero">
        <div className="container narrow">
          <span className="section-kicker">About NutriNova</span>
          <h1>Feed built around the realities of modern dairy and cattle farming.</h1>
        </div>
      </div>

      <section className="section">
        <div className="container split-layout large-gap">
          <div className="section-heading compact">
            <span className="section-kicker">Our focus</span>
            <h2>Better feeding decisions for productive livestock operations.</h2>
            <p>
              NutriNova Feed was created with a practical understanding of Pakistan’s dairy and cattle production environment. The focus is to support herd nutrition with reliable feed choices and communication that helps farmers and buyers make informed decisions.
            </p>
            <p>
              The brand’s approach combines feed quality, farm practicality, and real support for cattle owners, dairy farms, and wholesale buyers looking for straightforward livestock nutrition guidance.
            </p>
          </div>

          <div className="full-width-image-panel">
            <img src={assetUrl('images/Golden Sunrise Over the Dairy Farm.png')} alt="Dairy cattle grazing in a green field" />
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading centered narrow max-750">
            <span className="section-kicker">Our values</span>
            <h2>Built around real farm needs, not formulas alone.</h2>
          </div>

          <div className="feature-grid values-grid">
            {pillars.map(({ icon: Icon, title, text }) => (
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

      <section className="section">
        <div className="container text-block centered-block">
          <span className="section-kicker">Why it matters</span>
          <h2>Nutrition is part of the farm system, not a separate decision.</h2>
          <p>
            From routine dairy feeding to cattle finishing and product handling, good feed decisions affect herd management, farm planning, and the consistency of daily operations. NutriNova Feed is positioned to support that daily work with clear product choices and practical communication.
          </p>
          <Link to="/products" className="btn btn-primary">
            Browse Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
