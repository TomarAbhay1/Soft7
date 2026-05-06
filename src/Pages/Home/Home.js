import React from 'react'
import Hero from '../../Components/Hero/Hero'
import HowItWorks from '../../Components/HowItWorks/HowItWorks'
import GrowthEngine from '../../Components/GrowthEngine/GrowthEngine'
import Integrations from '../../Components/Integrations/Integrations'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Pricing from '../../Components/Pricing/Pricing'
import FAQ from '../../Components/FAQ/FAQ'
import CTABanner from '../../Components/CTABanner/CTABanner'
import Footer from '../../Components/Footer/Footer'

export default function Home() {
  return (
    <div className=''>
      <header>
      </header>

      <main>
       <section>
        <Hero></Hero>
       </section>
       
       <HowItWorks />
       <GrowthEngine />
       <Integrations />
       <Testimonials />
       <Pricing />
       <FAQ />
       <CTABanner />
       <Footer />
       
      </main>
    </div>
  )
}
