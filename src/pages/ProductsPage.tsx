import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Seo } from '../components/Seo';
import { products } from '../data/products';

const categories = ['All', 'Dairy Feed', 'Cattle Fattening / Meat Feed'] as const;

export function ProductsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<(typeof categories)[number]>('All');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || product.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [category, search]);

  return (
    <>
      <Seo title="Products" description="Browse NutriNova Feed dairy and cattle products in Pakistan." />

      <div className="page-hero inner-page-hero">
        <div className="container narrow">
          <span className="section-kicker">Our products</span>
          <h1>Feed solutions for dairy operations, cattle finishing, and practical farm planning.</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="catalog-toolbar">
            <label className="search-field" aria-label="Search products">
              <Search size={18} />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search products"
              />
            </label>

            <div className="category-pills" aria-label="Filter by feed category">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={item === category ? 'category-pill active' : 'category-pill'}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)
            ) : (
              <div className="empty-state">
                <h3>No products match your search.</h3>
                <p>Please try another product name or feed category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
