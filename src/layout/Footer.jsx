import React from 'react'
import PropTypes from 'prop-types'

function Footer({ onConnectClick }) {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-top-note">Are You Ready to redefine your Product ?</div>

        <div className="footer-grid">
          <div className="footer-tagline">
            <h3>
              Let's turn your <br />
              ideas into  <br />
              reality.
            </h3>
            <button className="cta-pill" type="button" onClick={onConnectClick}>Let's Connect</button>
          </div>

          <div className="footer-nav">
            <h4>Quick Links</h4>
            <nav aria-label="Footer Navigation" className="footer-links">
              <a href="#" className="pill">Home</a>
              <a href="#" className="pill">About Us</a>
              <a href="#" className="pill">Services</a>
              <a href="#" className="pill">Pricing</a>
              <a href="#" className="pill">Our Work</a>
            </nav>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>Email: <a href="mailto:deltalabs.in@gmail.com">deltalabs.in@gmail.com</a></li>
              <li>Phone: <a href="tel:+919350508692">+91 9350508692</a></li>
              <li>Location: Jaipur, Rajasthan</li>
              <li>Pincode: 302019</li>
            </ul>
          </div>
        </div>

        <div className="footer-brand" aria-label="DeltaLabs brand">DeltaLabs</div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  onConnectClick: PropTypes.func,
}

Footer.defaultProps = {
  onConnectClick: () => {},
}

export default Footer