import { useTranslation } from 'react-i18next'
import './AIChatbot.css'

export default function AIChatbot() {
  const { t } = useTranslation()
  const useCases = t('ai.use_cases', { returnObjects: true })

  return (
    <section className="ai-chatbot" id="ai">
      <div className="container">
        <div className="ai-chatbot__layout">
          <div className="ai-chatbot__demo">
            <div className="chat-window glass-card">
              <div className="chat-header">
                <div className="chat-status">
                  <div className="chat-dot" />
                  <span>{t('ai.chat_assistant')}</span>
                </div>
                <span className="chat-badge">{t('ai.chat_badge')}</span>
              </div>
              <div className="chat-messages">
                <div className="chat-msg chat-msg--bot">
                  <div className="chat-msg__avatar">
                    <svg width="16" height="16" viewBox="0 0 100 100" fill="none">
                      <defs><linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#18EFE0"/><stop offset="100%" stopColor="#4525E6"/></linearGradient></defs>
                      <polygon points="50,8 92,88 8,88" stroke="url(#cg)" strokeWidth="10" fill="none"/>
                    </svg>
                  </div>
                  <div className="chat-msg__bubble">{t('ai.chat_msg1')}</div>
                </div>
                <div className="chat-msg chat-msg--user">
                  <div className="chat-msg__bubble">{t('ai.chat_msg2')}</div>
                </div>
                <div className="chat-msg chat-msg--bot">
                  <div className="chat-msg__avatar">
                    <svg width="16" height="16" viewBox="0 0 100 100" fill="none"><polygon points="50,8 92,88 8,88" stroke="#18EFE0" strokeWidth="10" fill="none"/></svg>
                  </div>
                  <div className="chat-msg__bubble">{t('ai.chat_msg3')}</div>
                </div>
                <div className="chat-msg chat-msg--user">
                  <div className="chat-msg__bubble">{t('ai.chat_msg4')}</div>
                </div>
                <div className="chat-msg chat-msg--bot typing">
                  <div className="chat-msg__avatar">
                    <svg width="16" height="16" viewBox="0 0 100 100" fill="none"><polygon points="50,8 92,88 8,88" stroke="#18EFE0" strokeWidth="10" fill="none"/></svg>
                  </div>
                  <div className="chat-msg__bubble">
                    <span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" />
                  </div>
                </div>
              </div>
              <div className="chat-input">
                <input type="text" placeholder={t('ai.chat_input_placeholder')} readOnly />
                <button className="chat-send">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/></svg>
                </button>
              </div>
            </div>
          </div>

          <div className="ai-chatbot__content">
            <div className="section-label">{t('ai.label')}</div>
            <h2 className="ai-chatbot__title">
              {t('ai.title_1')}<br />
              <span className="gradient-text">{t('ai.title_2')}</span>
            </h2>
            <p className="ai-chatbot__desc">{t('ai.desc')}</p>
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
              <a href="#contact" className="btn-primary">{t('ai.cta')}</a>
              <span className="ai-chatbot__note">{t('ai.addon_note')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
