import { useTranslation } from 'react-i18next'
import './Process.css'

const icons = [
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
]
const numbers = ['01','02','03','04','05','06']

export default function Process() {
  const { t } = useTranslation()
  const steps = t('process.steps', { returnObjects: true })

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process__header">
          <div className="section-label">{t('process.label')}</div>
          <h2 className="process__title">
            {t('process.title_1')}<br />
            <span className="gradient-text">{t('process.title_2')}</span>
          </h2>
          <p className="process__subtitle">{t('process.subtitle')}</p>
        </div>
        <div className="process__timeline">
          {steps.map((step, i) => (
            <div key={i} className="process__step">
              <div className="process__step-line">
                <div className="process__step-dot">
                  <span className="process__step-icon">{icons[i]}</span>
                </div>
                {i < steps.length - 1 && <div className="process__connector" />}
              </div>
              <div className="glass-card process__step-card">
                <span className="process__step-number">{numbers[i]}</span>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
