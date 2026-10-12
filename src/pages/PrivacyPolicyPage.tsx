import { Seo } from '../components/Seo';

export function PrivacyPolicyPage() {
  return (
    <>
      <Seo title="Privacy Policy" description="NutriNova Feed privacy policy for website visitors and inquiry forms." />

      <div className="page-hero inner-page-hero">
        <div className="container narrow">
          <span className="section-kicker">Privacy Policy</span>
          <h1>Your information is handled with care.</h1>
        </div>
      </div>

      <section className="section">
        <div className="container text-block page-policy">
          <p>
            NutriNova Feed respects the privacy of website visitors. This page explains how personal information may be collected, used, and protected when users contact the business through the website or WhatsApp channels.
          </p>
          <p>
            Information collected may include contact details submitted through the inquiry form, WhatsApp messages, or direct business communication. This information is used for responding to product questions, dealer inquiries, and farm support requests.
          </p>
          <p>
            We do not sell or rent personal information to third parties. Business data may be stored for internal communication, customer support, and product follow-up as needed.
          </p>
          <p>
            If the website later integrates with a live backend, email service, or CRM, additional data-processing and retention details should be added to this policy in line with local business requirements and legal obligations.
          </p>
        </div>
      </section>
    </>
  );
}
