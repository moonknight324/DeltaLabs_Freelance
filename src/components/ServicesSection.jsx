import React from 'react'
import ServiceCard from './ServiceCard'
import { card1, card2, card3 } from '@/assets'

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      image: card1,
      title: 'Web Development',
      description: 'High-performance, scalable web apps built with modern stacks.'
    },
    {
      id: 2,
      image: card2,
      title: 'UI/UX Design',
      description: 'User-centered design systems that are accessible and beautiful.'
    },
    {
      id: 3,
      image: card3,
      title: 'SEO Optimization',
      description: 'Technical and content strategies focused on sustainable growth.'
    },
  ]

  return (
    <section className="svc-section">
      <div className="svc-container">
        <h2 className="svc-heading">Our Services</h2>
        <div className="svc-grid">
          {services.map((s) => (
            <ServiceCard key={s.id} image={s.image} title={s.title} description={s.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection



