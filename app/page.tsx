import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Platform from '@/components/Platform'
import Programs from '@/components/Programs'
import HowItWorks from '@/components/HowItWorks'
import Partners from '@/components/Partners'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Platform />
      <Programs />
      <HowItWorks />
      <Partners />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
