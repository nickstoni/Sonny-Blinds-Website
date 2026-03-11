import { Link } from 'react-router-dom';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About SonnyBlinds</h2>
            <p className="lead">Your trusted partner for quality window treatments since ####.</p>
            <p>
              At SonnyBlinds, we specialize in providing premium{' '}
              <Link to="/blinds">blinds</Link>,{' '}
              <Link to="/shades">shades</Link>, and{' '}
              <Link to="/shutters">shutters</Link>{' '}
              to homeowners and businesses. With over a decade of experience, we've helped thousands of customers transform their spaces with our high-quality window treatments.
            </p>
            <p>Our commitment to excellence is reflected in every aspect of our service - from the initial consultation to the final installation. We work with leading manufacturers to ensure you receive products that combine style, functionality, and durability.</p>
            <ul className="about-list">
              <li>✓ Over ## years of industry experience</li>
              <li>✓ Thousands of satisfied customers</li>
              <li>✓ Wide selection of premium products</li>
              <li>✓ Expert installation services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
