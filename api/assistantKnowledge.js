const knowledge = {
  company: {
    name: 'Eden-Core',
    tagline: 'Digital Growth Partner for SMEs',
    location: 'Rothenburg, Lucerne, Switzerland',
    email: 'info@eden-core.com',
    website: 'www.eden-core.com',
    founder: 'Nicolas Edeni',
    description:
      'Eden-Core is a service-based technology business that helps small and medium-sized enterprises (SMEs) with weak digital presence strengthen their online visibility, generate more customers, and achieve sustained growth.',
    mission:
      'To act as a growth partner for SMEs by turning their online presence into a business-generating asset.',
    legalForm: 'Sole proprietorship (Einzelfirma) under Swiss law',
  },

  targetMarket: {
    description: 'SMEs with 5–50 employees whose digital presence is weak or outdated.',
    primarySegment:
      'Local service businesses such as salons, gyms, trades, small medical practices, and cleaning companies.',
    painPoints: [
      'Lack of visibility on search engines',
      'Difficulty converting web visitors into customers',
      'Limited expertise in maintaining online platforms',
    ],
  },

  services: [
    {
      name: 'Website Development',
      description:
        'Conversion-focused websites built for speed, clarity, and business results.',
      features: ['Mobile-first design', 'Google Business integration', 'SEO foundation', 'Clear call-to-actions'],
    },
    {
      name: 'Web Applications & Dashboards',
      description:
        'Custom web applications and internal dashboards built with React and modern architecture.',
      features: ['React-based apps', 'Interactive dashboards', 'API integrations', 'Custom logic'],
    },
    {
      name: 'AI Chatbot Integration',
      description:
        'Intelligent AI assistant added to your website that handles enquiries, qualifies leads, and answers questions 24/7.',
      features: ['Lead qualification', 'FAQ automation', 'Customer support', '24/7 availability'],
    },
    {
      name: 'Digital Presence & Consulting',
      description:
        'Strategic guidance on digital positioning — Google Business optimisation, local SEO, and conversion advice.',
      features: ['Google Business setup', 'Local SEO strategy', 'Competitor analysis', 'Conversion consulting'],
    },
    {
      name: 'Maintenance & Support',
      description:
        'Ongoing monthly partnerships keeping your digital presence current, secure, and improving.',
      features: ['Hosting & maintenance', 'Monthly performance reviews', 'Small updates included', 'Priority support'],
    },
  ],

  packages: [
    {
      name: 'Starter Website',
      tag: 'Local Presence',
      description: 'A fast, professional website for local service businesses.',
      features: ['3–5 pages', 'Mobile-first design', 'Google Business integration', 'Contact form & CTA', 'Basic SEO setup'],
    },
    {
      name: 'Business Website',
      tag: 'Growth-Ready',
      description: 'A lead-focused website for established SMEs that want to convert visitors into customers.',
      features: ['5–10 pages', 'Conversion-optimised layout', 'Analytics integration', 'Speed optimisation', 'Monthly partnership available'],
      mostPopular: true,
    },
    {
      name: 'Conversion-Focused Website',
      tag: 'Performance',
      description: 'Advanced website with custom integrations, booking systems, and full digital presence setup.',
      features: ['Custom features & integrations', 'Booking or lead system', 'Multilingual option', 'SEO + copywriting', 'Ongoing partnership'],
    },
    {
      name: 'Custom Digital Solution',
      tag: 'Enterprise',
      description: 'Web applications, dashboards, AI chatbot integration, or bespoke digital systems.',
      features: ['Web app or dashboard', 'AI chatbot integration', 'Custom business logic', 'API integrations', 'Full technical scope'],
      cta: 'Book Free Consultation',
    },
  ],

  pricing: {
    note: 'Prices are not listed publicly. All pricing is discussed after an initial consultation and scoped individually.',
    projectRange: 'CHF 2,500 – CHF 10,000+ depending on scope',
    monthlyPartnerships: 'CHF 150 – CHF 2,000+ per month depending on package',
    hybridModel: 'Reduced upfront payment combined with a monthly retainer is available on request.',
    paymentStructure: [
      '30–50% upfront upon project start',
      'Milestone payments depending on project progress',
      'Final payment before launch or handover',
    ],
    invoiceTerms: 'Invoices are payable within 30 days.',
  },

  process: [
    { step: 1, title: 'Consultation', description: 'A free discovery call to understand your business, goals, and current digital situation.' },
    { step: 2, title: 'Strategy & Structure', description: 'Defining the sitemap, user flow, and strategic direction.' },
    { step: 3, title: 'Design Direction', description: 'Visual direction and brand alignment. Client approval before development.' },
    { step: 4, title: 'Development', description: 'Clean, fast, well-structured code using HTML, CSS, JavaScript, or React.' },
    { step: 5, title: 'Launch', description: 'Hosting, domain configuration, Google Business setup, and go-live checks.' },
    { step: 6, title: 'Ongoing Support', description: 'Monthly performance reviews, updates, SEO improvements, and direct access to Eden-Core.' },
  ],

  faq: [
    { question: 'How long does a website project take?', answer: 'A Starter Website typically takes 2–3 weeks. A Business Website 3–5 weeks. Custom solutions are scoped individually.' },
    { question: 'Do you show prices on the website?', answer: 'No. All pricing is discussed after a consultation and scoped individually per project.' },
    { question: 'What is a monthly partnership?', answer: 'An ongoing service including hosting, maintenance, small updates, performance monitoring, basic SEO, and monthly analytics.' },
    { question: 'Do you work with clients outside Switzerland?', answer: 'Eden-Core is based in Switzerland but can work with clients remotely via email and phone.' },
    { question: 'Can I get an AI chatbot added to my existing website?', answer: 'Yes. AI chatbot integration is available as an add-on to any project Eden-Core builds or manages.' },
    { question: 'How do I get started?', answer: 'Book a free 30-minute consultation. We discuss your goals and whether Eden-Core is the right fit. No commitment required.' },
  ],

  consultation: {
    type: 'Free 30-minute discovery call',
    calendlyLink: 'https://calendly.com/nedeni-eden-core/30min',
    description: 'No commitment. We discuss your goals and whether Eden-Core is the right fit.',
  },
}

module.exports = { knowledge }