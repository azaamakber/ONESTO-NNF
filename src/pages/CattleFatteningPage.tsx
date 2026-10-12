import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { Seo } from '../components/Seo';
import { assetUrl } from '../config/site';
import { products } from '../data/products';

const cattleProducts = products.filter((product) => product.category === 'Cattle Fattening / Meat Feed');

export function CattleFatteningPage() {
  return (
    <>
      <Seo title="Cattle Fattening" description="Explore NutriNova cattle fattening feed options for practical livestock finishing and growth stages." />

      <div className="page-hero inner-page-hero">
        <div className="container narrow">
          <span className="section-kicker">Cattle Fattening</span>
          <h1>Feed support for cattle finishing and practical growth programs.</h1>
        </div>
      </div>

      <section className="section">
        <div className="container split-layout large-gap">
          <div className="section-heading compact">
            <span className="section-kicker">Purpose</span>
            <h2>Supporting cattle management with routine feed planning.</h2>
            <p>
              Cattle fattening feed is designed for operations focused on regular feeding stages, herd condition management, and practical farm planning during finishing periods.
            </p>
            <Link to="/products" className="text-link">
              Explore all feed options
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="full-width-image-panel">
            <img src={assetUrl('images/Golden Sunrise Over the Dairy Farm.png')} alt="Cattle in a field during the day" />
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">Meat feed category</span>
            <h2>Available NNF cattle finishing options.</h2>
          </div>

          <div className="product-grid">
            {cattleProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
