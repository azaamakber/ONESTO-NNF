import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu, MessageCircleMore, X } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../config/site';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Dairy Feed', href: '/dairy-feed' },
    { label: 'Quality & Manufacturing', href: '/quality-manufacturing' },
    { label: 'Resources', href: '/resources' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="site-header">
      <div className="announcement-bar">
        <p>{siteConfig.announcementBarText}</p>
      </div>

      <div className="container nav-wrap">
        <Link to="/" className="brand-lockup" aria-label="Onesto Nutri Nova home">
          <img src="/images/logo.png" alt="Onesto Nutri Nova feed logo" className="brand-logo" />
          <div>
            <span className="brand-name">ONESTO </span>
            <span className="brand-tag">Nutri Nova • Feed</span>
          </div>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <div className="nav-item" key={item.label}>
              {item.label === 'Products' ? (
                <div className="dropdown-wrap" onMouseLeave={() => setProductsOpen(false)}>
                  <button
                    type="button"
                    className="nav-link dropdown-toggle"
                    aria-expanded={productsOpen}
                    onClick={() => setProductsOpen((current) => !current)}
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                  <div className={`dropdown-panel ${productsOpen ? 'active' : ''}`}>
                    <Link to="/products">All Products</Link>
                    <Link to="/dairy-feed">Dairy Feed</Link>
                    <Link to="/cattle-fattening">Cattle Fattening</Link>
                    <Link to="/quality-manufacturing">Quality & Manufacturing</Link>
                  </div>
                </div>
              ) : (
                <NavLink to={item.href} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  {item.label}
                </NavLink>
              )}
            </div>
          ))}
        </nav>

        <div className="nav-actions">
          <a href={buildWhatsAppLink()} className="btn btn-primary header-whatsapp" target="_blank" rel="noreferrer">
            <MessageCircleMore size={16} />
            WhatsApp Inquiry
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-drawer">
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.href} className="mobile-link" onClick={() => setIsOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/products" className="btn btn-primary mobile-cta" onClick={() => setIsOpen(false)}>
              Explore Products
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
