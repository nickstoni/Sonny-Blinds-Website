import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({isMenuOpen, setIsMenuOpen}) {
    const [openDropdown, setOpenDropdown] = useState(null);
    const closeTimeoutRef = useRef(null);

    const handleMouseEnter = (dropdown) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setOpenDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setOpenDropdown(null);
        }, 120);
    };

    return (
        <nav className="navbar">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <Link to="/"><img src="/logo1.png" alt="Sonny Blinds Logo" className="logo-img" /></Link>
            </div>
            
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <li><Link to="/">HOME</Link></li>
              <li className="separator">|</li>

              {/* Products & Services — mega menu */}
              <li
                className={`dropdown mega-menu ${openDropdown === 'products' ? 'open' : ''}`}
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/products" className="dropdown-toggle">PRODUCTS &amp; SERVICES<span className="chevron-down"></span></Link>
                <div
                  className={`dropdown-content mega-content ${openDropdown === 'products' ? 'open' : ''}`}
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="mega-menu-grid">
                    <div className="mega-menu-column">
                      <h3>BLINDS</h3>
                      <Link to="/blinds/vertical">VERTICAL BLIND</Link>
                      <Link to="/blinds/aluminum">ALUMINUM BLIND</Link>
                      <Link to="/blinds/wood">WOOD BLIND</Link>
                      <Link to="/blinds/faux">FAUX BLIND</Link>
                    </div>
                    <div className="mega-menu-column">
                      <h3>SHUTTERS</h3>
                      <Link to="/shutters/plantation">PLANTATION SHUTTERS</Link>
                      <Link to="/shutters/eclipse">ECLIPSE® SHUTTERS</Link>
                    </div>
                    <div className="mega-menu-column">
                      <h3>SHADES</h3>
                      <Link to="/shades/honeycomb">HONEYCOMB</Link>
                      <Link to="/shades/sheer">SHEER SHADE</Link>
                      <Link to="/shades/resolve">RESOLVE SHADE</Link>
                      <Link to="/shades/roller">ROLLER SHADE</Link>
                      <Link to="/shades/outdoor">OUTDOOR</Link>
                    </div>
                    <div className="mega-menu-column">
                      <h3>MOTORIZATION</h3>
                      <Link to="/motorization">MOTORIZED OPTIONS</Link>
                    </div>
                  </div>
                </div>
              </li>

              <li className="separator">|</li>

              {/* Customer Support — regular dropdown */}
              <li
                className={`dropdown ${openDropdown === 'support' ? 'open' : ''}`}
                onMouseEnter={() => handleMouseEnter('support')}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/support" className="dropdown-toggle">CUSTOMER SUPPORT<span className="chevron-down"></span></Link>
                <div
                  className={`dropdown-content support-content ${openDropdown === 'support' ? 'open' : ''}`}
                  onMouseEnter={() => handleMouseEnter('support')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to="/about">ABOUT US</Link>
                  <Link to="/contact">CONTACT US</Link>
                  <Link to="/faq">FAQ</Link>
                </div>
              </li>

              <li className="separator">|</li>
              <li><Link to="/contact" className="btn-quote">CONTACT US</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;