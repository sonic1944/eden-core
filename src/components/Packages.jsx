import { useTranslation } from 'react-i18next'
import './Packages.css'

const highlights = [false, true, false, false]

export default function Packages() {
  const { t } = useTranslation()
  const items = t('packages.items', { returnObjects: true })

  return (
    <section className="packages" id="packages">
      <div className="container">
        <div className="packages__header">
          <div className="section-label">{t('packages.label')}</div>
          <h2 className="packages__title">
            {t('packages.title_1')}<br />
            <span className="gradient-text">{t('packages.title_2')}</span>
          </h2>
          <p className="packages__subtitle">{t('packages.subtitle')}</p>
        </div>
        <div className="packages__grid">
          {items.map((pkg, i) => (
            <div key={i} className={`glass-card packages__card ${highlights[i] ? 'packages__card--highlight' : ''}`}>
              {highlights[i] && <div className="packages__popular">{t('packages.popular')}</div>}
              <div className="packages__tag">{pkg.tag}</div>
              <h3 className="packages__card-name">{pkg.name}</h3>
              <p className="packages__card-desc">{pkg.description}</p>
              <ul className="packages__features">
                {pkg.features.map((f, j) => (
                  <li key={j}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={highlights[i] ? 'btn-primary packages__btn' : 'btn-outline packages__btn'}>
                {i === 3 ? t('packages.cta_consult') : t('packages.cta_quote')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          ))}
        </div>
        <p className="packages__note">{t('packages.note')}</p>
      </div>
    </section>
  )
}
