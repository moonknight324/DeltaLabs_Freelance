import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          {/* <div className="header__logo-icon"></div> */}
          <Link to="/" className="header__logo-text">DELTA LABS</Link>
        </div>

        <nav className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`}>
          <Link to="/webflow-services" className="header__nav-link">Our services</Link>
          <Link to="/retainers" className="header__nav-link">Our work</Link>
          <Link to="/portfolio" className="header__nav-link">How we work</Link>
          <Link to="/blog" className="header__nav-link">Prices</Link>
        </nav>

        <div className="header__actions">
          <Link to="/contact" className="header__contact-btn">Contact Us</Link>
        </div>

        <button className="header__mobile-toggle" onClick={toggleMobileMenu}>
          <span className={`header__mobile-icon ${mobileMenuOpen ? 'header__mobile-icon--open' : ''}`}></span>
        </button>
      </div>
    </header>
  )
}

export default Header