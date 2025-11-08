import React from 'react';
import { anant, manav, vansh, anuj } from '../../assets';

const Ourteam = () => {
  const teamMembers = [
    { id: 1, name: 'Anant', role: 'Frontend Developer', image: anant },
    { id: 2, name: 'Manav', role: 'Backend Developer', image: manav },
    { id: 3, name: 'Vansh', role: 'UI/UX Designer', image: vansh },
    { id: 4, name: 'Anuj', role: 'Project Manager', image: anuj },
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="ourteam-section" aria-labelledby="ourteam-title" id="team">
      <div className="ourteam-container">
        <div className="ourteam-header">
          <p className="ourteam-eyebrow">Our Team</p>
          <h2 id="ourteam-title" className="ourteam-title">Awesome team members</h2>
        </div>

        <div className="ourteam-grid">
          {teamMembers.map((member, index) => (
            <article
              className="team-card"
              key={member.id}
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <div className="team-image">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  loading="lazy"
                />
                <div className="team-actions" aria-label="Quick actions">
                  <a
                    href="#"
                    className="icon-btn"
                    aria-label="View LinkedIn profile"
                    onClick={(e) => e.preventDefault()}
                  >
                    {/* LinkedIn icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="2" fill="#000000"/>
                      <path d="M8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" fill="#FFFFFF"/>
                    </svg>
                  </a>
                </div>
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button className="scroll-top-btn" aria-label="Scroll to top" onClick={handleScrollTop}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5" stroke="#ff4343" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 11L12 5L18 11" stroke="#ff4343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
};

export default Ourteam;


