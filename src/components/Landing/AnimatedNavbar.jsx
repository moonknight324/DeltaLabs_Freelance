import React from 'react'
import PropTypes from 'prop-types'

const AnimatedNavbar = ({ className, onContactClick }) => {
  return (
    <nav className={`animated-navbar ${className || ''}`.trim()}>
      <div className="navbar__wide" aria-hidden={false}>
        <div className="wide__brand">DELTA LABS</div>
        <ul className="wide__links">
          <li><a href="#ourServices">Services</a></li>
          <li><a href="#projectSection">Work</a></li>
          <li><a href="#workflow">How we work</a></li>
          <li><a href="#prices">Prices</a></li>
        </ul>
        <button className="wide__cta" onClick={onContactClick}>Contact Us</button>
      </div>
    </nav>
  )
}

AnimatedNavbar.propTypes = {
  className: PropTypes.string,
  onContactClick: PropTypes.func,
}

AnimatedNavbar.defaultProps = {
  className: '',
  onContactClick: () => {},
}

export default AnimatedNavbar


