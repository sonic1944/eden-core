import './Packages.css'

const packages = [
  {
    name: 'Starter Website',
    tag: 'Local Presence',
    description: 'A fast, professional website for local service businesses ready to establish a credible online presence.',
    features: [
      '3–5 pages',
      'Mobile-first design',
      'Google Business integration',
      'Contact form & call-to-action',
      'Basic SEO setup',
    ],
    cta: 'Request a Quote',
    highlight: false,
  },
  {
    name: 'Business Website',
    tag: 'Growth-Ready',
    description: 'A lead-focused website built for established SMEs that want to actively convert visitors into customers.',
    features: [
      '5–10 pages',
      'Conversion-optimised layout',
      'Analytics integration',
      'Speed optimisation',
      'Monthly partnership available',
    ],
    cta: 'Request a Quote',
    highlight: true,
  },
  {
    name: 'Conversion-Focused Website',
    tag: 'Performance',
    description: 'Advanced website with custom integrations, booking systems, and a full digital presence setup for maximum results.',
    features: [
      'Custom features & integrations',
      'Booking or lead system',
      'Multilingual option',
      'SEO + copywriting',
      'Ongoing partnership',
    ],
    cta: 'Request a Quote',
    highlight: false,
  },
  {
    name: 'Custom Digital Solution',
    tag: 'Enterprise',
    description: 'Web applications, dashboards, AI chatbot integration, or bespoke digital systems tailored to your business logic.',
    features: [
      'Web app or dashboard',
      'AI chatbot integration',
      'Custom business logic',
      'API integrations',
      'Full technical scope',
    ],
    cta: 'Book Consultation',
    highlight: false,
  },
]

export default function Packages() {
  return (
    <section className="packages" id="packages">
      <div className="container">
        <div className="packages__header">
          <div className="section-label">Solutions</div>
          <h2 className="packages__title">
            Find the Right<br />
            <span className="gradient-text">Starting Point</span>
          </h2>
          <p className="packages__subtitle">
            Every project is scoped individually. These packages reflect typical starting configurations — 
            final pricing is discussed after your consultation.
          </p>
        </div>

        <div className="packages__grid">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`glass-card packages__card ${pkg.highlight ? 'packages__card--highlight' : ''}`}
            >
              {pkg.highlight && (
                <div className="packages__popular">Most Popular</div>
              )}
              <div className="packages__tag">{pkg.tag}</div>
              <h3 className="packages__card-name">{pkg.name}</h3>
              <p className="packages__card-desc">{pkg.description}</p>
              <ul className="packages__features">
                {pkg.features.map((f, j) => (
                  <li key={j}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={pkg.highlight ? 'btn-primary packages__btn' : 'btn-outline packages__btn'}
              >
                {pkg.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <p className="packages__note">
          All packages include a structured proposal, clear scope, and professional contract. 
          Hybrid pricing (reduced upfront + monthly) available on request.
        </p>
      </div>
    </section>
  )
}
