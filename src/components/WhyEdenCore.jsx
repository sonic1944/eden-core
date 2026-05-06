import { useTranslation } from 'react-i18next'
import './WhyEdenCore.css'

const numbers = ['01','02','03','04','05','06']

export default function WhyEdenCore() {
  const { t } = useTranslation()
  const items = t('why.items', { returnObjects: true })

  return (
    <section className="why" id="why">
      <div className="container">
        <div className="why__layout">
          <div className="why__left">
            <div className="section-label">{t('why.label')}</div>
            <h2 className="why__title">
              {t('why.title_1')}<br />
              <span className="gradient-text">{t('why.title_2')}</span>
            </h2>
            <p className="why__desc">{t('why.desc')}</p>
            <a href="#contact" className="btn-primary">
              {t('why.cta')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div className="why__grid">
            {items.map((r, i) => (
              <div key={i} className="glass-card why__card">
                <span className="why__card-number">{numbers[i]}</span>
                <h3 className="why__card-title">{r.title}</h3>
                <p className="why__card-desc">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
