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
        <div className="legal-placeholder" style={{ marginBottom: '48px' }}>
          <p>
            {tc('placeholder')}{' '}
            <a href="mailto:info@eden-core.com">info@eden-core.com</a>.
          </p>
        </div>
        {sections.map((title, i) => (
          <section key={i}>
            <h2>
              <span className="legal-num">{String(i + 1).padStart(2, '0')}</span>
              {title}
            </h2>
            <div className="legal-placeholder">
              <p>{tc('coming_soon')}</p>
            </div>
          </section>
        ))}
      </div>
    </LegalLayout>
  )
}
