import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We start with a free discovery call to understand your business, goals, and current digital situation. No pressure, no obligation.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Strategy & Structure',
    description: 'We define the sitemap, user flow, and strategic direction. Every page and element is planned to serve your business goals.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Design Direction',
    description: 'Visual direction, typography, and brand alignment are established. You approve the concept before a single line of code is written.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Development',
    description: 'Clean, fast, and well-structured code. Built with HTML, CSS, and JavaScript — or React when the project calls for it. Optimised for performance from the start.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Launch',
    description: 'We handle hosting, domain configuration, Google Business setup, and go-live checks. Your business launches with everything connected and working.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 2L11 13"/>
        <path d="M22 2L15 22 11 13 2 9l20-7z"/>
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Ongoing Support',
    description: 'Monthly partnership clients receive regular performance reviews, updates, SEO improvements, and direct access to Eden-Core for questions and changes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process__header">
          <div className="section-label">How We Work</div>
          <h2 className="process__title">
            A Clear Process.<br />
            <span className="gradient-text">Zero Guesswork.</span>
          </h2>
          <p className="process__subtitle">
            From first conversation to live website — every step is structured, transparent, and focused on delivering value.
          </p>
        </div>

        <div className="process__timeline">
          {steps.map((step, i) => (
            <div key={i} className="process__step">
              <div className="process__step-line">
                <div className="process__step-dot">
                  <span className="process__step-icon">{step.icon}</span>
                </div>
                {i < steps.length - 1 && <div className="process__connector" />}
              </div>
              <div className="glass-card process__step-card">
                <span className="process__step-number">{step.number}</span>
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
