import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './LegalLayout.css'

export default function LegalLayout({ title, subtitle, children }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main className="legal-page">
        <div className="legal-page__hero">
          <div className="legal-page__hero-overlay" />
          <div className="container legal-page__hero-inner">
            <span className="section-label">{subtitle}</span>
            <h1 className="legal-page__title">{title}</h1>
          </div>
        </div>
        <div className="container legal-page__body">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
