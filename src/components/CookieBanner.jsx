import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './CookieBanner.css'

const GA_ID = 'G-G4S5M32MC0'

function loadGA() {
  if (document.getElementById('ga-script')) return // already loaded

  const script1 = document.createElement('script')
  script1.id = 'ga-script'
  script1.async = true
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script1)

  const script2 = document.createElement('script')
  script2.id = 'ga-config'
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `
  document.head.appendChild(script2)
}

export default function CookieBanner() {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (consent === 'accepted') {
      loadGA()
    } else if (consent === 'declined') {
      // do nothing
    } else {
      // no decision yet — show banner
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    loadGA()
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-banner__inner">
        <div className="cookie-banner__content">
          <div className="cookie-banner__icon">🍪</div>
          <div className="cookie-banner__text">
            <p className="cookie-banner__title">{t('cookies.title')}</p>
            <p className="cookie-banner__desc">
              {t('cookies.desc')}{' '}
              <a href="/privacy-policy" className="cookie-banner__link">
                {t('cookies.policy_link')}
              </a>.
            </p>
          </div>
        </div>
        <div className="cookie-banner__actions">
          <button className="cookie-banner__decline" onClick={decline}>
            {t('cookies.decline')}
          </button>
          <button className="cookie-banner__accept" onClick={accept}>
            {t('cookies.accept')}
          </button>
        </div>
      </div>
    </div>
  )
}
