import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/products">Products & Services</Link></li>
                <li><Link to="/support">Customer Support</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Our Products</h4>
              <ul>
                <li><Link to="/blinds">Blinds</Link></li>
                <li><Link to="/shutters">Shutters</Link></li>
                <li><Link to="/shades">Shades</Link></li>
                <li><Link to="/motorization">Motorized</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <ul>
                <li><b>Phone:</b> +1 (404) 924-0455</li>
                <li><b>Email: </b>sonnyblindpromo@gmail.com</li>
                <li><b>Address: </b><a href="https://www.google.com/maps/place/1680+Roberts+Blvd+%23403,+Kennesaw,+GA+30144/@34.0047566,-84.5979895,17z/data=!3m1!4b1!4m5!3m4!1s0x88f5156f7c9e03cd:0xd95e69e2c2c31e24!8m2!3d34.0047566!4d-84.5954146?entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">1680 Roberts Blvd NW Ste 403, Kennesaw, GA, 30144</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2026 SonnyBlinds. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer;