import React, { useEffect, useRef } from 'react';
import ServiceCard from '../ServiceCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { webDesign, servicesImage, img1, dev } from '../../assets';
gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  const services = [
    {
      id: 1,
      title: 'Web Design',
      shortDesc: 'Clean, modern, and conversion-focused designs that reflect your brand and engage your audience.',
      features: ['UI/UX Design', 'Website Redesign', 'Graphic & Motion Design'],
      bgColor: '#1a1a1a',
      accent: '#ffffff',
      accentRgb: '255, 255, 255',
      image: webDesign
    },
    {
      id: 2,
      title: 'Web Development',
      shortDesc: 'Reliable, scalable, and secure websites built to perform.',
      features: ['Front-End & Back-End Development', 'Custom Web Applications', 'API & Third-Party Integrations', 'Hosting, Database & Cloud Solutions'],
      bgColor: '#222222',
      accent: '#ffffff',
      accentRgb: '255, 255, 255',
      image: dev
    },
    {
      id: 3,
      title: 'Digital Strategy & Marketing',
      shortDesc: 'We help your website perform better and attract the right audience.',
      features: ['SEO (Technical, On-Page, Content)', 'Content Strategy & Copywriting', 'Conversion Rate Optimization (CRO)'],
      bgColor: '#262626',
      accent: '#ffffff',
      accentRgb: '255, 255, 255',
      image: servicesImage
    },
    {
      id: 4,
      title: 'Maintenance & Support',
      shortDesc: 'Because a great website needs ongoing care.',
      features: ['Security & Backup Management', 'Performance Optimization', 'Maintenance & Technical Support'],
      bgColor: '#2d2d2d',
      accent: '#ffffff',
      accentRgb: '255, 255, 255',
      image: img1
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const cards = cardsRef.current;

    if (!section || !container || !cards) return;

    const computeScrollValues = () => {
      const cardElements = Array.from(cards.children);
      if (cardElements.length === 0) return { scrollDistance: 0 };

      const styles = window.getComputedStyle(cards);
      const gap = parseFloat(styles.gap || '0');
      const firstCardWidth = cardElements[0].getBoundingClientRect().width;
      const totalCards = cardElements.length;
      const viewportWidth = window.innerWidth;
      const leftPadding = viewportWidth * 0.15; // 15vw padding applied in CSS
      
      // Calculate total width of all cards
      const totalCardsWidth = (totalCards * firstCardWidth) + ((totalCards - 1) * gap);
      
      // Scroll distance should be: total cards width - viewport width + left padding
      // This ensures scroll stops exactly when the last card's right edge reaches the viewport's right edge
      const scrollDistance = Math.max(0, totalCardsWidth - viewportWidth + leftPadding);
      return { scrollDistance };
    };

    let { scrollDistance } = computeScrollValues();

    // Set up the horizontal scroll animation with smooth transitions
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: `+=${scrollDistance}`,
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
        ease: "power2.out",
        onUpdate: (self) => {
          const progress = self.progress;
          const translateX = -progress * scrollDistance;
          gsap.to(cards, {
            x: translateX,
            duration: 0.3,
            ease: "power2.out"
          });
          section.style.setProperty('--scroll-progress', progress);
        },
        onRefresh: () => {
          // Recompute distances when ScrollTrigger refreshes
          const values = computeScrollValues();
          scrollDistance = values.scrollDistance;
          const st = tl.scrollTrigger;
          if (st) {
            st.vars.end = `+=${scrollDistance}`;
          }
        }
      }
    });

    const handleResize = () => {
      // Recalculate on resize and refresh ScrollTrigger
      const values = computeScrollValues();
      scrollDistance = values.scrollDistance;
      const st = tl.scrollTrigger;
      if (st) {
        st.vars.end = `+=${scrollDistance}`;
        st.refresh();
      }
    };

    window.addEventListener('resize', handleResize);

    // Interactive highlight following the cursor across cards
    const handlePointerMove = (e) => {
      const target = e.target.closest('.service-card');
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      target.style.setProperty('--mouse-x', `${x}px`);
      target.style.setProperty('--mouse-y', `${y}px`);
    };
    cards.addEventListener('mousemove', handlePointerMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      cards.removeEventListener('mousemove', handlePointerMove);
      // Only kill ScrollTriggers that belong to this component
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, [services.length]);

  return (
    <section ref={sectionRef} className="our-services-section" id="ourServices">
      <div ref={containerRef} className="our-services__container">
        <div className="our-services__header">
          <h2 className="our-services__title">TAILORED CREATIVE SOLUTIONS</h2>
          <p className="our-services__intro">
            <span>We design, develop, and scale digital experiences that help businesses grow.</span>
            <span>Our approach blends creativity, technology, and business strategy to deliver websites that perform — not just exist.</span>
          </p>
        </div>
{/*  */}
        <div className="our-services__scroll-container">
          <div ref={cardsRef} className="our-services__cards">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card"
                style={{ '--card-bg-color': service.bgColor, '--card-accent': service.accent, '--card-accent-rgb': service.accentRgb }}
              >
                <ServiceCard
                  image={service.image}
                  title={service.title}
                  description={service.shortDesc}
                  shortDesc={service.shortDesc}
                  features={service.features}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;