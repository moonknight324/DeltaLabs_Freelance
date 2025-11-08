import React from 'react';
import { clientLogo } from '../../assets';

const logos = new Array(12).fill(0).map((_, idx) => ({ id: idx + 1, src: clientLogo, alt: `Client Logo ${idx + 1}` }));

const ClientSection = () => {
  return (
    <section className="client-section" aria-label="Our Clients">
      <div className="client-container">
        <p className="client-eyebrow">Trusted by amazing teams</p>
        <h2 className="client-title">Our Clients</h2>

        <div className="client-marquee" aria-live="off">
          <div className="client-track" style={{ ['--speed']: '35s' }}>
            {logos.concat(logos).map((logo) => (
              <div className="client-item" key={`logo-${logo.id}-${Math.random()}`}>
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;


