import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PiArrowBendDownRightBold } from "react-icons/pi";
import GradientText from './GradientText';

gsap.registerPlugin(ScrollTrigger)

// OurStorySection - modern two-column section with subtle GSAP entrance
const OurStorySection = ({ className }) => {
  const sectionRef = useRef(null)
  const labelRef = useRef(null)
  const headingRef = useRef(null)
  const bodyRef = useRef(null)
  const highlightRef = useRef(null)
  const ctaGroupRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        defaults: { ease: 'power2.out', duration: 0.8 },
      })

      tl.from(labelRef.current, { y: 16, opacity: 0 })
        .from(headingRef.current, { y: 24, opacity: 0 }, '-=0.4')
        .from(bodyRef.current, { y: 24, opacity: 0 }, '-=0.3')
        .from(highlightRef.current, { y: 18, opacity: 0 }, '-=0.25')
        .from(ctaGroupRef.current, { y: 16, opacity: 0, scale: 0.98 }, '-=0.2')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="our-story" className={`our-story-section ${className || ''}`.trim()}>
      <div className="our-story__bg" aria-hidden />
      <div className="our-story__container">
        <div ref={labelRef} className="our-story__label">
          <PiArrowBendDownRightBold className='icon' /> Our Story
        </div>

        <div className="our-story__content">
          <h3 ref={headingRef} className="our-story__headline">Turning <GradientText className='gradient-text'>Business Ideas</GradientText> Into Digital Reality.</h3>
          <p ref={bodyRef} className="our-story__body">
            We exist to build simple, reliable, and growth-driven technology for scaling businesses. Our team fuses creative insight with technical mastery to craft fast, scalable websites aligned with your goals. Let us turn your ambitious vision into a powerful digital reality.
          </p>
          <p ref={highlightRef} className="our-story__highlight">We don’t just build websites — we build growth engines.</p>
          <div ref={ctaGroupRef} className="our-story__cta-group" role="group" aria-label="Primary action">
            <a href="#team" className="our-story__cta" aria-label="Meet the team">
              <span><a href="#team">Meet the team</a></span>
              <span className="icon" aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

OurStorySection.propTypes = {
  className: PropTypes.string,
}

OurStorySection.defaultProps = {
  className: '',
}

export default OurStorySection