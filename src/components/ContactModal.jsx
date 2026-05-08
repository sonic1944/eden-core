import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './ContactModal.css'

const FORMSPREE_URL = 'https://formspree.io/f/xlgzwvvj'

export default function ContactModal({ isOpen, onClose, preselectedPackage }) {
  const { t } = useTranslation()
  const packages = t('packages.items', { returnObjects: true })

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    package: preselectedPackage || '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  // Sync preselected package when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, package: preselectedPackage || '' }))
      setStatus('idle')
    }
  }, [isOpen, preselectedPackage])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">

        {/* Close button */}
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {status === 'success' ? (
          <div className="modal__success">
            <div className="modal__success-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3>{t('contact.success_title')}</h3>
            <p>{t('contact.success_desc')}</p>
            <button className="btn-primary" onClick={onClose}>{t('contact.success_close')}</button>
          </div>
        ) : (
          <>
            <div className="modal__header">
              <span className="section-label">{t('contact.label')}</span>
              <h2 className="modal__title">{t('contact.title')}</h2>
              <p className="modal__subtitle">{t('contact.subtitle')}</p>
            </div>

            <form className="modal__form" onSubmit={handleSubmit}>
              <div className="modal__row">
                <div className="modal__field">
                  <label>{t('contact.name')} <span>*</span></label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t('contact.name_placeholder')}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="modal__field">
                  <label>{t('contact.company')}</label>
                  <input
                    type="text"
                    name="company"
                    placeholder={t('contact.company_placeholder')}
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="modal__row">
                <div className="modal__field">
                  <label>{t('contact.email')} <span>*</span></label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t('contact.email_placeholder')}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="modal__field">
                  <label>{t('contact.phone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t('contact.phone_placeholder')}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="modal__field">
                <label>{t('contact.package')}</label>
                <select name="package" value={formData.package} onChange={handleChange}>
                  <option value="">{t('contact.package_placeholder')}</option>
                  {packages.map((pkg, i) => (
                    <option key={i} value={pkg.name}>{pkg.name}</option>
                  ))}
                </select>
              </div>

              <div className="modal__field">
                <label>{t('contact.message')}</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={t('contact.message_placeholder')}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {status === 'error' && (
                <p className="modal__error">{t('contact.error')}</p>
              )}

              <button
                type="submit"
                className="btn-primary modal__submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? t('contact.submitting') : t('contact.submit')}
                {status !== 'submitting' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
