import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    id: 1,
    title: 'Discovery Call',
    description: 'We understand your goals, audience, and expectations. This conversation sets the foundation for everything that follows.',
  },
  {
    id: 2,
    title: 'Finalizing the Website Structure',
    description: 'Once we know your goals, we define your website’s architecture — the layout, page flow, and navigation that shape the user experience.',
  },
  {
    id: 3,
    title: 'Finalizing the Content',
    description: 'We collaborate with you to refine and finalize all the content — ensuring that messaging, visuals, and tone align perfectly with your brand.',
  },
  {
    id: 4,
    title: 'Final Website & Feedback',
    description: 'We bring your design to life with clean, modern code. You’ll review the website, share feedback, and we’ll refine it until it’s perfect.',
  },
  {
    id: 5,
    title: 'Project Delivery/Closure',
    description: 'Once approved, we launch your website, ensure everything runs smoothly, and hand over all necessary access and documentation. We also provide post-launch support and maintenance options to keep your site optimized.',
  },
]

const WorkFlow = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const getCssVar = (name) => getComputedStyle(sectionRef.current).getPropertyValue(name).trim()
    const primaryColor = getCssVar('--wf-primary')
    const mutedColor = getCssVar('--wf-muted')

    const ctx = gsap.context(() => {
      // Headline entrance
      const headline = sectionRef.current.querySelector('.workflow-headline')
      if (headline) {
        gsap.fromTo(headline, { opacity: 0, y: 40 }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true }
        })
      }

      // Reveal steps sequentially
      const stepItems = gsap.utils.toArray('.workflow-step')
      stepItems.forEach((stepEl) => {
        // Fade-up
        gsap.fromTo(
          stepEl,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: stepEl, start: 'top 75%', toggleActions: 'play none none reverse' }
          }
        )

        // Connector grow
        const lineEl = stepEl.querySelector('.workflow-step__line')
        if (lineEl) {
          gsap.fromTo(lineEl, { scaleY: 0 }, {
            scaleY: 1,
            transformOrigin: 'top center',
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: { trigger: stepEl, start: 'top 75%' }
          })
        }

        // Circle pulse when active
        const circleEl = stepEl.querySelector('.workflow-step__circle')
        ScrollTrigger.create({
          trigger: stepEl,
          start: 'top 55%',
          end: 'bottom 45%',
          onEnter: () => {
            if (circleEl) gsap.fromTo(circleEl, { scale: 1 }, { scale: 1.05, duration: 0.3, ease: 'power2.out', yoyo: true, repeat: 1 })
          },
          onEnterBack: () => {
            if (circleEl) gsap.fromTo(circleEl, { scale: 1 }, { scale: 1.05, duration: 0.3, ease: 'power2.out', yoyo: true, repeat: 1 })
          },
        })

        // Active color transition
        const title = stepEl.querySelector('.workflow-step__title')
        const desc = stepEl.querySelector('.workflow-step__description')
        ScrollTrigger.create({
          trigger: stepEl,
          start: 'top 55%',
          end: 'bottom 45%',
          onEnter: () => {
            if (title) gsap.to(title, { color: primaryColor, duration: 0.3, ease: 'power2.out' })
            if (desc) gsap.to(desc, { color: primaryColor, duration: 0.3, ease: 'power2.out' })
          },
          onEnterBack: () => {
            if (title) gsap.to(title, { color: primaryColor, duration: 0.3, ease: 'power2.out' })
            if (desc) gsap.to(desc, { color: primaryColor, duration: 0.3, ease: 'power2.out' })
          },
          onLeave: () => {
            if (title) gsap.to(title, { color: mutedColor, duration: 0.3, ease: 'power2.out' })
            if (desc) gsap.to(desc, { color: mutedColor, duration: 0.3, ease: 'power2.out' })
          },
          onLeaveBack: () => {
            if (title) gsap.to(title, { color: mutedColor, duration: 0.3, ease: 'power2.out' })
            if (desc) gsap.to(desc, { color: mutedColor, duration: 0.3, ease: 'power2.out' })
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="workflow-section" id="workflow">
      <div className="workflow-container">
        <div className="workflow-left">
          <h2 className="workflow-headline">
            Turn your digital ideas into <span className="highlight">reality!</span>
          </h2>
        </div>

        <div className="workflow-right">
          <div className="workflow-timeline">
            {steps.map((step, index) => (
              <div key={step.id} className="workflow-step">
                <div className="workflow-step__icon">
                  <div className="workflow-step__circle">
                    <span className="workflow-step__number">{step.id}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="workflow-step__line"></div>
                  )}
                </div>

                <div className="workflow-step__content">
                  <h3 className="workflow-step__title">{step.title}</h3>
                  <p className="workflow-step__description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;