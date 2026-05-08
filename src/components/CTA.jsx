import { useTranslation } from 'react-i18next'
import ctaBg from '../assets/images/cta-bg.png'
import './CTA.css'

export default function CTA({ onStartProject }) {
  const { t } = useTranslation()
  return (
    <section className="cta-section" id="contact">
      <div className="cta-section__bg" style={{ backgroundImage: `url(${ctaBg})` }} />
      <div className="cta-section__overlay" />
      <div className="container cta-section__inner">
        <div className="cta-section__content">
          <div className="section-label">{t('cta.label')}</div>
          <h2 className="cta-section__title">
            {t('cta.title_1')}<br />
            <span className="gradient-text">{t('cta.title_2')}</span>
          </h2>
          <p className="cta-section__desc">{t('cta.desc')}</p>
          <div className="cta-section__actions">
            <button
              className="btn-primary cta-section__btn-main"
              onClick={onStartProject}
            >
              {t('cta.btn_primary')}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <a
              href="mailto:info@eden-core.com"
              className="btn-secondary cta-section__btn-sec"
            >
              {t('cta.btn_secondary')}
            </a>
          </div>
          <div className="cta-section__info">
            <div className="cta-info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>{t('cta.location')}</span>
            </div>
            <div className="cta-info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>info@eden-core.com</span>
            </div>
            <div className="cta-info-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>{t('cta.response')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
