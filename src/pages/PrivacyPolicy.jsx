import { useTranslation } from 'react-i18next'
import LegalLayout from '../components/LegalLayout'
import '../components/LegalLayout.css'

export default function PrivacyPolicy() {
  const { t } = useTranslation()
  const p = (key) => t(`legal.privacy.${key}`)
  const arr = (key) => t(`legal.privacy.${key}`, { returnObjects: true })

  return (
    <LegalLayout titleKey={p('title')} subtitleKey={p('subtitle')}>
      <div className="legal-content">
        <section>
          <h2><span className="legal-num">01</span>{p('s1_title')}</h2>
          <p>{p('s1_p1')}</p><p>{p('s1_p2')}</p>
        </section>
        <section>
          <h2><span className="legal-num">02</span>{p('s2_title')}</h2>
          <div className="legal-info-card">
            <p><strong>Eden-Core</strong></p>
            <p>Rothenburg, Lucerne / Luzern</p>
            <p>Switzerland / Schweiz</p>
            <p>E-Mail: <a href="mailto:info@eden-core.com">info@eden-core.com</a></p>
          </div>
        </section>
        <section>
          <h2><span className="legal-num">03</span>{p('s3_title')}</h2>
          <p>{p('s3_collect_intro')}</p>
          <ul>{arr('s3_collect').map((i,k)=><li key={k}>{i}</li>)}</ul>
          <p>{p('s3_data_intro')}</p>
          <ul>{arr('s3_data').map((i,k)=><li key={k}>{i}</li>)}</ul>
        </section>
        <section>
          <h2><span className="legal-num">04</span>{p('s4_title')}</h2>
          <p>{p('s4_p1')}</p><p>{p('s4_p2')}</p><p>{p('s4_p3')}</p><p>{p('s4_p4')}</p>
        </section>
        <section>
          <h2><span className="legal-num">05</span>{p('s5_title')}</h2>
          <p>{p('s5_p1')}</p><p>{p('s5_p2')}</p>
          <ul>{arr('s5_data').map((i,k)=><li key={k}>{i}</li>)}</ul>
          <p>{p('s5_p3')}</p><p>{p('s5_p4')}</p><p>{p('s5_p5')}</p>
          <ul>{arr('s5_prevent').map((i,k)=><li key={k}>{i}</li>)}</ul>
          <p>{p('s5_more')} <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></p>
        </section>
        <section>
          <h2><span className="legal-num">06</span>{p('s6_title')}</h2>
          <p>{p('s6_p1')}</p><p>{p('s6_p2')}</p>
        </section>
        <section>
          <h2><span className="legal-num">07</span>{p('s7_title')}</h2>
          <p>{p('s7_p1')}</p><p>{p('s7_p2')}</p>
        </section>
        <section>
          <h2><span className="legal-num">08</span>{p('s8_title')}</h2>
          <p>{p('s8_p1')}</p>
        </section>
        <section>
          <h2><span className="legal-num">09</span>{p('s9_title')}</h2>
          <p>{p('s9_intro')}</p>
          <ul>{arr('s9_rights').map((i,k)=><li key={k}>{i}</li>)}</ul>
          <p>{p('s9_p2')}</p>
        </section>
        <section>
          <h2><span className="legal-num">10</span>{p('s10_title')}</h2>
          <p>{p('s10_p1')}</p><p>{p('s10_p2')}</p>
        </section>
        <section>
          <h2><span className="legal-num">11</span>{p('s11_title')}</h2>
          <p>{p('s11_p1')}</p>
        </section>
        <section>
          <h2><span className="legal-num">12</span>{p('s12_title')}</h2>
          <p>{p('s12_p1')}</p><p>{p('s12_p2')}</p>
        </section>
        <section>
          <h2><span className="legal-num">13</span>{p('s13_title')}</h2>
          <p>{p('s13_p1')}</p>
          <div className="legal-info-card">
            <p><strong>Eden-Core</strong></p>
            <p>E-Mail: <a href="mailto:info@eden-core.com">info@eden-core.com</a></p>
          </div>
        </section>
      </div>
    </LegalLayout>
  )
}
