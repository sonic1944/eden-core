import { useTranslation } from 'react-i18next'
import heroBg from '../assets/images/hero-network-bg.png'
import './Hero.css'

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section className="hero" id="home">
      <div className="hero__bg" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="hero__overlay" />
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <div className="hero__inner">
        <div className="hero__content">
          <div className="section-label animate-fade-up">{t('hero.label')}</div>
          <h1 className="hero__headline animate-fade-up-delay-1">
            {t('hero.headline_1')}<br />
            <span className="gradient-text">{t('hero.headline_2')}</span>
          </h1>
          <p className="hero__subheadline animate-fade-up-delay-2">{t('hero.sub')}</p>
          <div className="hero__ctas animate-fade-up-delay-3">
            <a href="#contact" className="btn-primary">
              {t('hero.cta_primary')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#services" className="btn-secondary">{t('hero.cta_secondary')}</a>
          </div>
          <div className="hero__stats animate-fade-up-delay-4">
            <div className="hero__stat">
              <span className="hero__stat-value gradient-text">{t('hero.stat1_value')}</span>
              <span className="hero__stat-label">{t('hero.stat1_label')}</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value gradient-text">{t('hero.stat2_value')}</span>
              <span className="hero__stat-label">{t('hero.stat2_label')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span>{t('hero.scroll')}</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
