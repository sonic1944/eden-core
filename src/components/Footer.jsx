import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Footer.css'
import logo from '../assets/images/eden-core-logo.svg'

const navHrefs = ['#services','#why','#process','#packages','#ai','#contact']
const serviceHrefs = ['#services','#services','#ai','#services','#packages']

export default function Footer() {
  const { t } = useTranslation()
  const navLinks = t('footer.nav_links', { returnObjects: true })
  const serviceLinks = t('footer.service_links', { returnObjects: true })

  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (e, hash) => {
    e.preventDefault()
    if (location.pathname === '/') {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <footer className="footer">
      <div className="footer__top-line" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo} alt="Eden-Core" className="footer__logo-img" />
          </div>
          <p className="footer__tagline">{t('footer.tagline')}</p>
          <div className="footer__contact">
            <a href="mailto:info@eden-core.com" className="footer__contact-link">info@eden-core.com</a>
            <span className="footer__location">Rothenburg, Lucerne, CH</span>
          </div>
        </div>

        <div className="footer__nav-col">
          <h4 className="footer__col-title">{t('footer.nav_title')}</h4>
          <ul className="footer__links">
            {navLinks.map((label, i) => (
              <li key={i}>
                <a href={navHrefs[i]} className="footer__link"
                  onClick={(e) => handleNavClick(e, navHrefs[i])}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__nav-col">
          <h4 className="footer__col-title">{t('footer.services_title')}</h4>
          <ul className="footer__links">
            {serviceLinks.map((label, i) => (
              <li key={i}>
                <a href={serviceHrefs[i]} className="footer__link"
                  onClick={(e) => handleNavClick(e, serviceHrefs[i])}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__nav-col">
          <h4 className="footer__col-title">{t('footer.legal_title')}</h4>
          <ul className="footer__links">
            <li><Link to="/legal-notice" className="footer__link">{t('footer.legal_notice')}</Link></li>
            <li><Link to="/privacy-policy" className="footer__link">{t('footer.privacy')}</Link></li>
            <li><Link to="/terms" className="footer__link">{t('footer.terms')}</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span className="footer__copy">© {new Date().getFullYear()} Eden-Core. {t('footer.copy')}</span>
          <span className="footer__built">{t('footer.built')}</span>
        </div>
      </div>
    </footer>
  )
}
