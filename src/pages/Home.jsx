import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyEdenCore from '../components/WhyEdenCore'
import Process from '../components/Process'
import Packages from '../components/Packages'
import AIChatbot from '../components/AIChatbot'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import ContactModal from '../components/ContactModal'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState('')

  const openModal = (packageName = '') => {
    setSelectedPackage(packageName)
    setModalOpen(true)
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyEdenCore />
        <Process />
        <Packages onRequestQuote={openModal} />
        <AIChatbot />
        <CTA onStartProject={() => openModal()} />
      </main>
      <Footer />
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedPackage={selectedPackage}
      />
    </div>
  )
}
