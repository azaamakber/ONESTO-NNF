import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { Seo } from '../components/Seo';
import { assetUrl } from '../config/site';
import { products } from '../data/products';

const dairyProducts = products.filter((product) => product.category === 'Dairy Feed');

export function DairyFeedPage() {
  return (
    <>
      <Seo title="Dairy Feed" description="Discover NutriNova dairy feed options for productive herds and practical farm nutrition planning." />

      <div className="page-hero inner-page-hero">
        <div className="container narrow">
          <span className="section-kicker">Dairy Feed</span>
          <h1>Practical nutrition support for productive dairy herds.</h1>
        </div>
      </div>

      <section className="section">
        <div className="container split-layout large-gap">
          <div className="section-heading compact">
            <span className="section-kicker">Purpose</span>
            <h2>Feed that supports day-to-day dairy routines.</h2>
            <p>
              Dairy feed categories are designed for farms that need dependable feeding options for productive cattle and regular herd routines. The aim is practical support without overpromising guaranteed production results.
            </p>
            <Link to="/products" className="text-link">
              Explore all products
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="full-width-image-panel">
            <img src={assetUrl('images/ONESTO Premium Dairy Feed in Action.png')} alt="Dairy feed in farm environment" />
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">Dairy portfolio</span>
            <h2>Available NNF dairy feed options.</h2>
          </div>

          <div className="product-grid">
            {dairyProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
