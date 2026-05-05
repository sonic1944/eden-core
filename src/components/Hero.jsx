import heroBg from '../assets/images/hero-network-bg.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background */}
      <div className="hero__bg" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="hero__overlay" />

      {/* Gradient orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <div className="hero__inner">
        <div className="hero__content">
          <div className="section-label animate-fade-up">
            Digital Growth Partner for SMEs
          </div>

          <h1 className="hero__headline animate-fade-up-delay-1">
            Your Business.<br />
            <span className="gradient-text">Digitally Reimagined.</span>
          </h1>

          <p className="hero__subheadline animate-fade-up-delay-2">
            Eden-Core builds conversion-focused websites, modern web applications, 
            and digital systems that turn your online presence into a measurable 
            business asset. Based in Switzerland. Built for growth.
          </p>

          <div className="hero__ctas animate-fade-up-delay-3">
            <a href="#contact" className="btn-primary">
              Get a Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#services" className="btn-secondary">
              Explore Services
            </a>
          </div>

          {/* Trust indicators */}
          <div className="hero__stats animate-fade-up-delay-4">
            <div className="hero__stat">
              <span className="hero__stat-value gradient-text">12-Month</span>
              <span className="hero__stat-label">Growth Partnerships</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value gradient-text">Swiss</span>
              <span className="hero__stat-label">Based & Operated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
