import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { gsap } from 'gsap'

const ServiceCard = ({ image, title, description, features }) => {
  const cardRef = useRef(null)
  const overlayRef = useRef(null)
  const tlRef = useRef(null)

  useEffect(() => {
    if (!overlayRef.current) return undefined

    // Prepare timeline for hover in/out
    tlRef.current = gsap.timeline({ paused: true })
      .fromTo(
        overlayRef.current,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }
      )

    const node = cardRef.current
    if (!node) return undefined

    const onEnter = () => tlRef.current && tlRef.current.play()
    const onLeave = () => tlRef.current && tlRef.current.reverse()

    node.addEventListener('mouseenter', onEnter)
    node.addEventListener('mouseleave', onLeave)
    node.addEventListener('focusin', onEnter)
    node.addEventListener('focusout', onLeave)

    return () => {
      node.removeEventListener('mouseenter', onEnter)
      node.removeEventListener('mouseleave', onLeave)
      node.removeEventListener('focusin', onEnter)
      node.removeEventListener('focusout', onLeave)
    }
  }, [])

  return (
    <div className="svc-card-container">
      <div ref={cardRef} className="svc-card" tabIndex={0} aria-label={title}>
        <img className="svc-card__image" src={image} alt={title} />
        <div ref={overlayRef} className="svc-card__overlay" aria-hidden="true">
          <div className="svc-card__overlay-content">
            <h3 className="svc-card__title">{title}</h3>
            <p className="svc-card__desc">{description}</p>
            <div className="svc-card__features">
              {features && features.map((feature, index) => (
                <span key={index} className="svc-card__feature-tag">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  shortDesc: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
}

export default ServiceCard



