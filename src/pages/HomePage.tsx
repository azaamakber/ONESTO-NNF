import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Leaf, ShieldCheck, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { Seo } from '../components/Seo';
import { buildWhatsAppLink } from '../config/site';
import { products } from '../data/products';

const reasons = [
  {
    icon: CheckCircle2,
    title: 'Nutritional consistency',
    copy: 'Balanced feeding built for regular herd routines and practical dairy management.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality-minded handling',
    copy: 'Reliable storage, clean operations, and support for farm and dealer requirements.',
  },
  {
    icon: Leaf,
    title: 'Farmer-first guidance',
    copy: 'Simple advice for dairy farms, cattle growers, and commercial buyers.',
  },
  {
    icon: Sprout,
    title: 'Livestock-ready solutions',
    copy: 'Feed choices shaped around productivity, planning, and herd care.',
  },
];

export function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <Seo title="Home" description="Onesto Nutri Nova Feed supports livestock farmers and distributors with practical dairy and cattle nutrition solutions in Pakistan." />

      <header className="hero-section">
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-kicker light">Onesto Nutri Nova • NNF</span>
            <h1>Better Nutrition. Stronger Herds. A Better Tomorrow.</h1>
            <p>
              Premium feed solutions for productive dairy cattle and commercial livestock operations across Pakistan.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">
                Explore Products
                <ArrowRight size={18} />
              </Link>
              <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer" className="btn btn-secondary light">
                Talk to Our Team
              </a>
            </div>
            <div className="hero-badges">
              <span>Dairy Feed</span>
              <span>Cattle Fattening</span>
              <span>Dealer Support</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 36, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            <div className="product-display-card modern-card">
              <img src="/images/Premium Dairy Feed Showcase (1).png" alt="Premium dairy feed showcase" />
            </div>
          </motion.div>
        </div>
      </header>

      <section className="section intro-section">
        <div className="container split-layout">
          <motion.div
            className="section-heading compact"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-kicker">Why Onesto Nutri Nova</span>
            <h2>Feed that supports healthy, productive herds.</h2>
            <p>
              Onesto Nutri Nova Feed supports dairy farmers, cattle owners, and buyers with practical feeding solutions designed around everyday livestock management and farm realities.
            </p>
            <Link to="/about" className="text-link">
              Learn more about our approach
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            className="intro-image-panel"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <img src="/images/Golden Sunrise Over the Dairy Farm.png" alt="Healthy dairy cattle in a farm field" />
          </motion.div>
        </div>
      </section>

      <section className="section product-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">Featured Products</span>
            <h2>Simple feed choices for real farm routines.</h2>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product, index) => (
              <ProductCard product={product} index={index} key={product.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">Core strengths</span>
            <h2>A dependable feed partner for livestock operations.</h2>
          </div>

          <div className="feature-grid">
            {reasons.map(({ icon: Icon, title, copy }) => (
              <motion.article
                key={title}
                className="feature-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
              >
                <div className="feature-icon">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-banner-section">
        <div className="container">
          <div className="cta-banner">
            <div>
              <span className="section-kicker light">Need the right feed?</span>
              <h2>Let’s find the correct feed for your farm.</h2>
            </div>
            <div className="cta-actions">
              <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer" className="btn btn-primary">
                WhatsApp Inquiry
              </a>
              <Link to="/contact" className="btn btn-secondary light">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
