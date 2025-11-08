import React from 'react';

const Pricing = () => {
  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic',
      subtitle:
        'For startups, freelancers, and local businesses taking their first digital step.',
      price: '₹50,000',
      features: [
        'Up to 5 custom-coded pages (Home, About, Contact, etc.)',
        'Full-stack build: React / Next.js + Node.js',
        'Smooth UI with basic animations',
        'Secure setup: SSL-ready + input validation',
        'Simple admin panel for quick edits',
        '1 revision round after final review',
        '3–4 weeks delivery + 1 month support'
      ],
      buttonText: 'Get Started',
      highlighted: false
    },
    {
      id: 'growth',
      name: 'Growth Plan',
      subtitle:
        'For growing brands ready to scale with automation and data-driven systems.',
      price: '₹1,00,000',
      features: [
        '8–10 responsive pages',
        'MERN / Next.js full-stack architecture',
        'Admin panel + User authentication system',
        'API integrations: chat, forms, payments',
        'Custom dashboards & SEO structure',
        'Advanced UI animations & micro-interactions',
        '4–6 weeks delivery + 2 months support'
      ],
      buttonText: 'Choose Growth',
      highlighted: true
    },
    {
      id: 'custom',
      name: 'Custom Plan',
      subtitle:
        'For enterprises and SaaS platforms needing scalability and security.',
      price: 'Custom',
      features: [
        'Modular, scalable architecture',
        'Unlimited pages & feature extensions',
        'User roles, permissions & data management',
        'Complex APIs: REST / GraphQL / CRM / Cloud',
        'Security-first: JWT auth, encryption, sanitization',
        'CI/CD pipeline (AWS, GCP, Render, Vercel)',
        '8–10 weeks delivery + SLA-based support'
      ],
      buttonText: 'Contact Us',
      highlighted: false
    }
  ];

  // Collapsible behavior removed; always show full feature lists

  return (
    <section className="pricing-section" id="prices">
      <div className="pricing-container">
        {/* Section Header */}
        <div className="pricing-header">
          <h2 className="pricing-title">
            Choose Your <span className="pricing-title-highlight">Plan</span>
          </h2>
          <p className="pricing-subtitle">
            Select the perfect plan that aligns with your business needs and goals. Scale your digital presence with our comprehensive solution
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.highlighted ? 'pricing-card-highlighted' : ''}`}
            >
              {/* Card Header */}
              <div className="pricing-card-header">
                <h3 className="pricing-card-title">{plan.name}</h3>
                <p className="pricing-card-subtitle">{plan.subtitle}</p>
              </div>

              {/* Pricing */}
              <div className="pricing-card-price">
                {plan.originalPrice && (
                  <span className="pricing-card-original-price">
                    ${plan.originalPrice}
                  </span>
                )}
                <div className="pricing-card-current-price">
                  {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                </div>
              </div>

              {/* Features List */}
              <ul className="pricing-card-features">
                {plan.features.map((feature, index) => (
                  <li key={index} className="pricing-card-feature">
                    <svg
                      className="pricing-card-check-icon"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.6667 5L7.50004 14.1667L3.33337 10"
                        stroke="#5D00E0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`pricing-card-button ${plan.highlighted ? 'pricing-card-button-highlighted' : ''}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

