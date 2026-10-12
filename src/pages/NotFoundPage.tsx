import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you are looking for could not be found." />

      <div className="section">
        <div className="container text-block centered-block">
          <span className="section-kicker">404</span>
          <h1>Page not found.</h1>
          <p>The page you are looking for does not exist or may have moved.</p>
          <Link to="/" className="btn btn-primary">
            <ArrowLeft size={18} />
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
}
