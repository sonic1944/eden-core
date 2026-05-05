import './Services.css'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Website Development',
    description: 'Conversion-focused websites built for speed, clarity, and business results. From local service businesses to professional firms — designed to generate enquiries, not just impressions.',
    features: ['Mobile-first design', 'Google Business integration', 'SEO foundation', 'Clear call-to-actions'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Web Applications & Dashboards',
    description: 'Custom web applications and internal dashboards when your business needs more than a website. Built with React and modern architecture — scalable, fast, and maintainable.',
    features: ['React-based apps', 'Interactive dashboards', 'API integrations', 'Custom logic'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 10h.01M12 10h.01M16 10h.01"/>
      </svg>
    ),
    title: 'AI Chatbot Integration',
    description: 'Add an intelligent AI assistant to your website that handles customer enquiries, qualifies leads, and answers questions 24/7 — reducing manual workload while improving visitor experience.',
    features: ['Lead qualification', 'FAQ automation', 'Customer support', '24/7 availability'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Digital Presence & Consulting',
    description: 'Strategic guidance on your digital positioning — from Google Business optimisation and local SEO to structured advice on how to attract and convert more customers online.',
    features: ['Google Business setup', 'Local SEO strategy', 'Competitor analysis', 'Conversion consulting'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Maintenance & Support',
    description: 'Ongoing monthly partnerships that keep your digital presence current, secure, and improving. Performance monitoring, updates, and regular analytics reports included.',
    features: ['Hosting & maintenance', 'Monthly performance reviews', 'Small updates included', 'Priority support'],
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <div className="section-label">What We Do</div>
          <h2 className="services__title">
            A Full Digital Stack<br />
            <span className="gradient-text">for Growing Businesses</span>
          </h2>
          <p className="services__subtitle">
            From your first professional website to complex web applications — 
            Eden-Core delivers the digital infrastructure your business needs to grow.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <div key={i} className="glass-card services__card">
              <div className="services__card-icon">
                {service.icon}
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
              <ul className="services__card-features">
                {service.features.map((f, j) => (
                  <li key={j}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
