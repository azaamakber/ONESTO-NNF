import { FormEvent, useState } from 'react';
import { MapPin, MessageCircleMore, Phone } from 'lucide-react';
import { Seo } from '../components/Seo';
import { buildWhatsAppLink, siteConfig } from '../config/site';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'General inquiry',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError('Please complete your name, phone number, and message before submitting.');
      setSuccess('');
      return;
    }

    setSuccess('Your message has been prepared for follow-up. Please note that this demo form does not send to a live backend without additional configuration.');
    setError('');
    setFormData({
      name: '',
      phone: '',
      category: 'General inquiry',
      message: '',
    });
  };

  return (
    <>
      <Seo title="Contact" description="Contact NutriNova Feed for product information, dealer support, and feed inquiries in Pakistan." />

      <div className="page-hero inner-page-hero">
        <div className="container narrow">
          <span className="section-kicker">Contact</span>
          <h1>Let’s help you find the right feed for your farm.</h1>
        </div>
      </div>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-cards">
            <article className="contact-card">
              <Phone size={20} />
              <div>
                <span>Phone</span>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>{siteConfig.phone}</a>
              </div>
            </article>

            <article className="contact-card">
              <MessageCircleMore size={20} />
              <div>
                <span>WhatsApp</span>
                <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
                  Chat with the team
                </a>
              </div>
            </article>

            <article className="contact-card">
              <MapPin size={20} />
              <div>
                <span>Location</span>
                <p>{siteConfig.address}</p>
              </div>
            </article>
          </div>

          <div className="contact-form-card">
            <h2>Send a product or dealer inquiry</h2>
            <form className="lead-form" onSubmit={handleSubmit}>
              <div className="field-row two-up">
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  />
                </label>
                <label>
                  <span>Phone</span>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                  />
                </label>
              </div>

              <label>
                <span>Inquiry type</span>
                <select
                  value={formData.category}
                  onChange={(event) => setFormData({ ...formData, category: event.target.value })}
                >
                  <option>General inquiry</option>
                  <option>Product inquiry</option>
                  <option>Dealer inquiry</option>
                  <option>Wholesale inquiry</option>
                </select>
              </label>

              <label>
                <span>Message</span>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                />
              </label>

              {error ? <p className="field-error">{error}</p> : null}
              {success ? <p className="field-success">{success}</p> : null}

              <button type="submit" className="btn btn-primary">
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
