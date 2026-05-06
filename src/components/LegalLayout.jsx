import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './LegalLayout.css'

export default function LegalLayout({ titleKey, subtitleKey, children }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div className="app">
      <Navbar />
      <main className="legal-page">
        <div className="legal-page__hero">
          <div className="legal-page__hero-overlay" />
          <div className="container legal-page__hero-inner">
            <span className="section-label">{subtitleKey}</span>
            <h1 className="legal-page__title">{titleKey}</h1>
          </div>
        </div>
        <div className="container legal-page__body">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
