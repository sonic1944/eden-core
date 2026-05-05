import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyEdenCore from './components/WhyEdenCore'
import Process from './components/Process'
import Packages from './components/Packages'
import AIChatbot from './components/AIChatbot'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyEdenCore />
        <Process />
        <Packages />
        <AIChatbot />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
