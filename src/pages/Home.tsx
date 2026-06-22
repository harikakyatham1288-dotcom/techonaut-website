import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { StatsBar, About, Industries } from '@/components/Sections'
import { Services, Roles, Advantage, WhyUs } from '@/components/MoreSections'
import { DiversityTraining, Contact, Footer } from '@/components/EndSections'
import HowItWorks from '@/components/HowItWorks'
import { Testimonials, Careers, ScrollToTop } from '@/components/Extra'
import ClientLogos from '@/components/ClientLogos'

/* @section: home-page */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ClientLogos />
        <About />
        <Industries />
        <Services />
        <HowItWorks />
        <Roles />
        <Advantage />
        <WhyUs />
        <Testimonials />
        <DiversityTraining />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
