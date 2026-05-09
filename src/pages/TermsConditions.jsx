import { useTranslation } from 'react-i18next'
import LegalLayout from '../components/LegalLayout'
import '../components/LegalLayout.css'

export default function TermsConditions() {
  const { t } = useTranslation()
  const tc = (key) => t(`legal.terms.${key}`)
  const sections = t('legal.terms.sections', { returnObjects: true })

  return (
    <LegalLayout titleKey={tc('title')} subtitleKey={tc('subtitle')}>
      <div className="legal-content">

        <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>{tc('intro')}</p>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '48px' }}>{tc('acceptance')}</p>

        {sections.map((section, i) => (
          <section key={i}>
            <h2>
              <span className="legal-num">{section.num}</span>
              {section.title}
            </h2>

            {section.content && <p>{section.content}</p>}

            {section.list && section.list.length > 0 && (
              <ul>
                {section.list.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )}

            {section.footer && <p>{section.footer}</p>}

            {/* Section 14: Contact */}
            {section.num === '14' && (
              <div className="legal-info-card">
                <p><strong>Eden-Core</strong></p>
                <p>Rothenburg, Lucerne / Luzern</p>
                <p>Switzerland / Schweiz</p>
                <p>E-Mail: <a href="mailto:info@eden-core.com">info@eden-core.com</a></p>
                <p>Website: <a href="https://www.eden-core.com" target="_blank" rel="noopener noreferrer">www.eden-core.com</a></p>
              </div>
            )}
          </section>
        ))}

      </div>
    </LegalLayout>
  )
}
