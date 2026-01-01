import { Helmet } from 'react-helmet-async'

// Sections
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import TechnologyPartners from '@/components/sections/TechnologyPartners'
import Booking from '@/components/sections/Booking'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>VIV53 IT Services - Professional IT Solutions for SMB Companies</title>
        <meta name="description" content="Expert on-premises and cloud services across multiple vendors. Empowering SMB companies with reliable IT infrastructure and support." />
      </Helmet>

      <Hero />
      <Services />
      <About />
      <TechnologyPartners />
      <Booking />
      <Contact />
    </>
  )
}
