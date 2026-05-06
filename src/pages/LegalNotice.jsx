import { useTranslation } from 'react-i18next'
import LegalLayout from '../components/LegalLayout'
import '../components/LegalLayout.css'

export default function LegalNotice() {
  const { t } = useTranslation()
  const n = (key) => t(`legal.notice.${key}`)

  return (
    <LegalLayout titleKey={n('title')} subtitleKey={n('subtitle')}>
      <div className="legal-content">
        <section>
          <h2><span className="legal-num">—</span>{n('s1_title')}</h2>
          <div className="legal-info-card">
            <p><strong>Eden-Core</strong></p>
            <p>Rothenburg, Lucerne / Luzern</p>
            <p>Switzerland / Schweiz</p>
            <p>E-Mail: <a href="mailto:info@eden-core.com">info@eden-core.com</a></p>
            <p>Website: <a href="https://www.eden-core.com" target="_blank" rel="noopener noreferrer">www.eden-core.com</a></p>
          </div>
        </section>
        <section>
          <h2><span className="legal-num">—</span>{n('s2_title')}</h2>
          <div className="legal-info-card"><p><strong>Nicolas Edeni</strong></p></div>
        </section>
        <section>
          <h2><span className="legal-num">—</span>{n('s3_title')}</h2>
          <p>{n('s3_p1')}</p><p>{n('s3_p2')}</p>
        </section>
        <section>
          <h2><span className="legal-num">—</span>{n('s4_title')}</h2>
          <p>{n('s4_p1')}</p>
        </section>
        <section>
          <h2><span className="legal-num">—</span>{n('s5_title')}</h2>
          <p>{n('s5_p1')}</p><p>{n('s5_p2')}</p>
        </section>
        <section>
          <h2><span className="legal-num">—</span>{n('s6_title')}</h2>
          <div className="legal-info-card">
            <p>E-Mail: <a href="mailto:info@eden-core.com">info@eden-core.com</a></p>
          </div>
        </section>
      </div>
    </LegalLayout>
  )
}
