import '../styles/Products.css';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <h2>Our Products</h2>
          <p>Discover our extensive range of window treatments</p>
        </div>
        
        <div className="products-grid">
          <Link to="/blinds/vertical" className="product-card card-vertical-blinds">
            <h3>Vertical Blinds</h3>
          </Link>
          
          <Link to="/blinds/aluminum" className="product-card card-aluminum-blinds">
            <h3>Aluminum Blinds</h3>
          </Link>
          
          <Link to="/blinds/wood" className="product-card card-wood-blinds">
            <h3>Wood Blinds</h3>
          </Link>
          
          <Link to="/blinds/faux" className="product-card card-faux-blinds">
            <h3>Faux Blinds</h3>
          </Link>
          
          <Link to="/shutters/plantation" className="product-card card-plantation-shutters">
            <h3>Plantation Shutters</h3>
          </Link>
          
          <Link to="/shutters/eclipse" className="product-card card-eclipse-shutters">
            <h3>Eclipse® Shutters</h3>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Products;
