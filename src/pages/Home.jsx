
import React from 'react'
import { FAQSection, OurStorySection, OurServices, Pricing, Ourteam, ClientSection, WorkFlow, Testimonial, BackgroundPaths, ProjectSection, SpaceSepraor, ServicesSection } from '../components';
function Home() {
  return (
    <>
      <BackgroundPaths />

      <OurStorySection />

      <OurServices />
      {/* <ServicesSection /> */}
      <WorkFlow />

      <Pricing />

      <Ourteam />

      <ProjectSection />

      {/* <ClientSection /> */}

      <FAQSection />

      <Testimonial />
    </>
  )
}

export default Home