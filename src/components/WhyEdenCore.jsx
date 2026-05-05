import './WhyEdenCore.css'

const reasons = [
  {
    number: '01',
    title: 'Strategy Before Code',
    description: 'Every project starts with understanding your business goals, target customers, and competitive context. We build what makes strategic sense — not just what looks nice.',
  },
  {
    number: '02',
    title: 'Premium Design Standard',
    description: 'Your website is your first impression. Eden-Core applies the same design principles used by leading tech companies to make your SME look credible and professional from day one.',
  },
  {
    number: '03',
    title: 'Scalable Technical Foundation',
    description: 'Clean, maintainable code that can grow with your business. No bloated plugins or fragile setups — just solid fundamentals that support long-term digital development.',
  },
  {
    number: '04',
    title: 'Conversion-Focused Execution',
    description: 'Every design decision is measured against one question: does this make visitors more likely to contact you? Structure, copy, and UX all serve your business objectives.',
  },
  {
    number: '05',
    title: 'Clear, Direct Communication',
    description: 'No project ambiguity, no hidden scope creep. Eden-Core operates with structured proposals, documented deliverables, and professional communication throughout.',
  },
  {
    number: '06',
    title: 'Long-Term Partnership Model',
    description: `We don't disappear after launch. Monthly partnerships mean your digital presence keeps improving — with performance monitoring, updates, and ongoing optimisation.`,
  },
]

export default function WhyEdenCore() {
  return (
    <section className="why" id="why">
      <div className="container">
        <div className="why__layout">
          <div className="why__left">
            <div className="section-label">Why Eden-Core</div>
            <h2 className="why__title">
              A Digital Partner.<br />
              <span className="gradient-text">Not Just a Developer.</span>
            </h2>
            <p className="why__desc">
              Most SMEs hire a developer and get a website. 
              Eden-Core delivers a strategic digital system — designed to attract customers, 
              build trust, and grow with your business over time.
            </p>
            <a href="#contact" className="btn-primary">
              Start a Conversation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="why__grid">
            {reasons.map((r, i) => (
              <div key={i} className="glass-card why__card">
                <span className="why__card-number">{r.number}</span>
                <h3 className="why__card-title">{r.title}</h3>
                <p className="why__card-desc">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
