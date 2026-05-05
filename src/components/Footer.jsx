import './Footer.css'
import logo from '../assets/images/eden-core-logo.svg'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Eden-Core', href: '#why' },
  { label: 'Process', href: '#process' },
  { label: 'Packages', href: '#packages' },
  { label: 'AI Integration', href: '#ai' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Website Development',
  'Web Applications',
  'AI Chatbot Integration',
  'Digital Consulting',
  'Monthly Partnerships',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top-line" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo} alt="Eden-Core" className="footer__logo-img" />
          </div>
          <p className="footer__tagline">
            Digital growth partner for small and medium-sized enterprises. 
            Websites, web applications, and ongoing digital support — built in Switzerland.
          </p>
          <div className="footer__contact">
            <a href="mailto:info@eden-core.com" className="footer__contact-link">
              info@eden-core.com
            </a>
            <span className="footer__location">Rothenburg, Lucerne, CH</span>
          </div>
        </div>

        <div className="footer__nav-col">
          <h4 className="footer__col-title">Navigation</h4>
          <ul className="footer__links">
            {navLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} className="footer__link">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__nav-col">
          <h4 className="footer__col-title">Services</h4>
          <ul className="footer__links">
            {services.map(s => (
              <li key={s}>
                <a href="#services" className="footer__link">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__nav-col">
          <h4 className="footer__col-title">Legal</h4>
          <ul className="footer__links">
            <li><a href="#" className="footer__link">Impressum</a></li>
            <li><a href="#" className="footer__link">Privacy Policy</a></li>
            <li><a href="#" className="footer__link">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span className="footer__copy">
            © {new Date().getFullYear()} Eden-Core. All rights reserved.
          </span>
          <span className="footer__built">
            Built with precision in Switzerland 🇨🇭
          </span>
        </div>
      </div>
    </footer>
  )
}
