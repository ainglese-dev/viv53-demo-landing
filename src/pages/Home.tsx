import { Helmet } from 'react-helmet-async'

// Sections
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import ITAssessment from '@/components/sections/ITAssessment'
import Industries from '@/components/sections/Industries'
import TechnologyPartners from '@/components/sections/TechnologyPartners'
import Booking from '@/components/sections/Booking'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>VIV53 IT Services - Enterprise Network Engineering with Automation & AI</title>
        <meta name="description" content="High-level Network Consulting Engineers delivering zero-downtime infrastructure with multivendor automation and AI-enhanced operations for SMB and mid-market companies." />
      </Helmet>

      <Hero />
      <Services />
      <About />
      <ITAssessment />
      <Industries />
      <TechnologyPartners />
      <Booking />
      <Contact />
    </>
  )
}
