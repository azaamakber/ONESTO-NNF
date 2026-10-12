import { ArrowRight, PackageOpen, ShieldCheck, Warehouse } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { Seo } from '../components/Seo';
import { buildWhatsAppLink } from '../config/site';
import { products } from '../data/products';

export function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="section">
        <div className="container text-block centered-block">
          <h1>Product not found</h1>
          <p>The product you are looking for is not available in the NNF catalog.</p>
          <Link to="/products" className="btn btn-primary">
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3);
  const inquiryMessage = `Assalam-o-Alaikum, I would like information about ${product.name} by NutriNova Feed (NNF). Please share the available specifications, bag sizes, pricing, and dealer information.`;

  return (
    <>
      <Seo title={product.name} description={product.shortDescription} />

      <div className="section product-detail-section">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <span>{product.name}</span>
          </nav>

          <div className="product-detail-layout">
            <div className="product-detail-media">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-detail-copy">
              <span className="badge light">{product.category}</span>
              <h1>{product.name}</h1>
              <p className="lead">{product.fullDescription}</p>

              <div className="detail-actions">
                <a href={buildWhatsAppLink(inquiryMessage)} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Inquire on WhatsApp
                  <ArrowRight size={18} />
                </a>
                <Link to="/products" className="btn btn-secondary">
                  Browse all products
                </Link>
              </div>

              <div className="detail-meta">
                <div>
                  <span>Intended animal</span>
                  <strong>{product.intendedAnimal}</strong>
                </div>
                <div>
                  <span>Available bags</span>
                  <strong>{product.packageSizes.join(' • ')}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section alt-section">
        <div className="container two-col-layout">
          <div>
            <div className="section-heading compact">
              <span className="section-kicker">Key specifications</span>
              <h2>Product details and usage guidance.</h2>
            </div>

            <div className="spec-list">
              {product.specifications.map((spec) => (
                <div key={spec.label} className="spec-item">
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-panel-group">
            <div className="detail-panel">
              <div className="panel-icon">
                <PackageOpen size={18} />
              </div>
              <h3>Feeding guidance</h3>
              <p>{product.feedingGuidance ?? 'Please contact us for feeding guidance related to your herd and farm routine.'}</p>
            </div>

            <div className="detail-panel">
              <div className="panel-icon">
                <Warehouse size={18} />
              </div>
              <h3>Storage guidance</h3>
              <p>{product.storageGuidance ?? 'Please store feed in a clean, dry area away from moisture and pests.'}</p>
            </div>

            <div className="detail-panel">
              <div className="panel-icon">
                <ShieldCheck size={18} />
              </div>
              <h3>Highlights</h3>
              <ul className="check-list no-gap">
                {product.pastoralFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">Frequently asked</span>
            <h2>Quick product questions.</h2>
          </div>

          <div className="faq-inline-list">
            <div className="faq-item">
              <h3>What is this product intended for?</h3>
              <p>{product.intendedAnimal}</p>
            </div>
            <div className="faq-item">
              <h3>Which bag sizes are available?</h3>
              <p>{product.packageSizes.join(', ')}</p>
            </div>
            <div className="faq-item">
              <h3>How can I get the latest specifications?</h3>
              <p>Contact NutriNova Feed on WhatsApp to discuss the latest specifications, bag availability, and dealer support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">Related products</span>
            <h2>Explore more NNF feed options.</h2>
          </div>

          <div className="product-grid">
            {relatedProducts.map((item, index) => (
              <ProductCard key={item.id} product={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
