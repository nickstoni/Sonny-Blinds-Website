import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Get Your Free Quote Today</h2>
            <p>Ready to transform your space? Contact us for a free consultation and quote.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h4>📞 Phone</h4>
                <p><a href="tel:+14049240455">+1 (404) 924-0455</a></p>
              </div>
              
              <div className="contact-item">
                <h4>📧 Email</h4>
                <p><a href="mailto:sonnyblindpromo@gmail.com">sonnyblindpromo@gmail.com</a></p>
              </div>

              <div className="contact-item">
                <h4>🏢 Address</h4>
                <p><a href="https://www.google.com/maps/place/1680+Roberts+Blvd+%23403,+Kennesaw,+GA+30144/@34.0047566,-84.5979895,17z/data=!3m1!4b1!4m5!3m4!1s0x88f5156f7c9e03cd:0xd95e69e2c2c31e24!8m2!3d34.0047566!4d-84.5954146?entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">1680 Roberts Blvd NW Ste 403, Kennesaw, GA, United States, 30144</a></p>
              </div>
              
              <div className="contact-item">
                <h4>🕒 Hours</h4>
                <p>Monday - Friday: Input time</p>
              </div>

              <div className="contact-item">
                <h4>🌐 Follow Us</h4>
                <div className="social-links">
                  <a href="https://www.facebook.com/p/Sony-Blind-Factory-100066608982517/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
                </div>
              </div>
            </div>
          </div>
          
          <div id="quote" className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-block">
                Request Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
