import { ArrowRight, MessageCircleMore } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { buildWhatsAppLink } from '../config/site';
import type { Product } from '../data/products';

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const inquiryMessage = `Assalam-o-Alaikum, I would like information about ${product.name} by NutriNova Feed (NNF). Please share the available specifications, bag sizes, pricing, and dealer information.`;

  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <div className="product-media">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="product-body">
        <span className="badge light">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>

        <dl className="product-meta">
          <div>
            <dt>Animal</dt>
            <dd>{product.intendedAnimal}</dd>
          </div>
          <div>
            <dt>Bag Size</dt>
            <dd>{product.packageSizes[0]}</dd>
          </div>
        </dl>

        <div className="product-actions">
          <Link to={`/products/${product.slug}`} className="btn btn-secondary">
            View Details
            <ArrowRight size={16} />
          </Link>
          <a href={buildWhatsAppLink(inquiryMessage)} target="_blank" rel="noreferrer" className="btn btn-primary inline-flex">
            <MessageCircleMore size={16} />
            Inquire
          </a>
        </div>
      </div>
    </motion.article>
  );
}
