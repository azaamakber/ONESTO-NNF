import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircleMore, Phone, MapPin } from 'lucide-react';
import { assetUrl, siteConfig, buildWhatsAppLink } from '../config/site';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand-lockup footer-brand">
            <img src={assetUrl('images/logo.png')} alt="Onesto Nutri Nova feed logo" className="brand-logo" />
            <div>
              <span className="brand-name">Onesto Nutri Nova</span>
              <span className="brand-tag">Feed</span>
            </div>
          </div>
          <p className="footer-copy">
            Practical animal nutrition support for dairy farmers, cattle growers, and wholesale buyers in Pakistan.
          </p>
        </div>

        <div>
          <h3>Navigation</h3>
          <ul className="footer-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/dairy-feed">Dairy Feed</Link></li>
            <li><Link to="/cattle-fattening">Cattle Fattening</Link></li>
            <li><Link to="/resources">Resources</Link></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="footer-links footer-contact">
            <li><Phone size={14} /> {siteConfig.phone}</li>
            <li><MapPin size={14} /> {siteConfig.address}</li>
            <li>
              <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
                <MessageCircleMore size={14} /> WhatsApp Chat
              </a>
            </li>
          </ul>
        </div>

        <div>
          {siteConfig.socialLinks.facebook || siteConfig.socialLinks.instagram ? (
            <>
              <h3>Social</h3>
              <div className="social-links">
                {siteConfig.socialLinks.facebook ? (
                  <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
                ) : null}
                {siteConfig.socialLinks.instagram ? (
                  <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
                ) : null}
              </div>
            </>
          ) : null}
          <ul className="footer-links">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} NutriNova Feed. All rights reserved.</p>
      </div>
    </footer>
  );
}
