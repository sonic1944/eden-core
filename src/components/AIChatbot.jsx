import './AIChatbot.css'

const useCases = [
  {
    icon: '💬',
    title: 'Customer Support',
    description: 'Answers frequently asked questions instantly, 24 hours a day — without you lifting a finger.',
  },
  {
    icon: '🎯',
    title: 'Lead Qualification',
    description: 'Captures visitor intent and qualifies enquiries before they reach your inbox or phone.',
  },
  {
    icon: '📅',
    title: 'Booking Assistance',
    description: 'Guides visitors toward booking a consultation or service appointment directly from your site.',
  },
  {
    icon: '⚡',
    title: 'Instant Responses',
    description: 'Responds to product or service questions in seconds — keeping potential customers engaged.',
  },
]

export default function AIChatbot() {
  return (
    <section className="ai-chatbot" id="ai">
      <div className="container">
        <div className="ai-chatbot__layout">
          {/* Left: Chat UI mockup */}
          <div className="ai-chatbot__demo">
            <div className="chat-window glass-card">
              <div className="chat-header">
                <div className="chat-status">
                  <div className="chat-dot" />
                  <span>Eden-Core AI Assistant</span>
                </div>
                <span className="chat-badge">AI-Powered</span>
              </div>
              <div className="chat-messages">
                <div className="chat-msg chat-msg--bot">
                  <div className="chat-msg__avatar">
                    <svg width="16" height="16" viewBox="0 0 100 100" fill="none">
                      <defs>
                        <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#18EFE0"/>
                          <stop offset="100%" stopColor="#4525E6"/>
                        </linearGradient>
                      </defs>
                      <polygon points="50,8 92,88 8,88" stroke="url(#cg)" strokeWidth="10" fill="none"/>
                    </svg>
                  </div>
                  <div className="chat-msg__bubble">
                    Hi! I'm the digital assistant for this business. How can I help you today?
                  </div>
                </div>
                <div className="chat-msg chat-msg--user">
                  <div className="chat-msg__bubble">
                    What services do you offer?
                  </div>
                </div>
                <div className="chat-msg chat-msg--bot">
                  <div className="chat-msg__avatar">
                    <svg width="16" height="16" viewBox="0 0 100 100" fill="none">
                      <polygon points="50,8 92,88 8,88" stroke="#18EFE0" strokeWidth="10" fill="none"/>
                    </svg>
                  </div>
                  <div className="chat-msg__bubble">
                    We specialise in website design, maintenance, and local SEO. Would you like to book a free consultation?
                  </div>
                </div>
                <div className="chat-msg chat-msg--user">
                  <div className="chat-msg__bubble">
                    Yes, how does that work?
                  </div>
                </div>
                <div className="chat-msg chat-msg--bot typing">
                  <div className="chat-msg__avatar">
                    <svg width="16" height="16" viewBox="0 0 100 100" fill="none">
                      <polygon points="50,8 92,88 8,88" stroke="#18EFE0" strokeWidth="10" fill="none"/>
                    </svg>
                  </div>
                  <div className="chat-msg__bubble">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                </div>
              </div>
              <div className="chat-input">
                <input type="text" placeholder="Type a message..." readOnly />
                <button className="chat-send">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="ai-chatbot__content">
            <div className="section-label">AI Integration</div>
            <h2 className="ai-chatbot__title">
              Turn Your Website Into a<br />
              <span className="gradient-text">24/7 Sales Assistant</span>
            </h2>
            <p className="ai-chatbot__desc">
              Eden-Core can integrate an intelligent AI chatbot into any website we build or manage. 
              Your visitors get instant answers, and you receive qualified enquiries — not noise.
            </p>

            <div className="ai-chatbot__use-cases">
              {useCases.map((uc, i) => (
                <div key={i} className="ai-chatbot__use-case">
                  <span className="ai-chatbot__use-case-icon">{uc.icon}</span>
                  <div>
                    <h4>{uc.title}</h4>
                    <p>{uc.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="ai-chatbot__cta-row">
              <a href="#contact" className="btn-primary">
                Add AI to My Website
              </a>
              <span className="ai-chatbot__note">Available as an add-on to any project</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
