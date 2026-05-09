import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './ChatWidget.css'

const CALENDLY_URL = 'https://calendly.com/nedeni-eden-core/30min'

function loadCalendlyWidget() {
  // Load Calendly CSS
  if (!document.getElementById('calendly-css')) {
    const link = document.createElement('link')
    link.id = 'calendly-css'
    link.rel = 'stylesheet'
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    document.head.appendChild(link)
  }
  // Load Calendly JS
  if (!document.getElementById('calendly-js')) {
    const script = document.createElement('script')
    script.id = 'calendly-js'
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    document.head.appendChild(script)
  }
}

function openCalendly() {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL })
  } else {
    window.open(CALENDLY_URL, '_blank')
  }
}

const TriangleLogo = () => (
  <svg width="22" height="22" viewBox="477 236 448 430" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wGrad1" x1="20%" y1="10%" x2="80%" y2="85%">
        <stop offset="0%" stopColor="#18efe0"/>
        <stop offset="100%" stopColor="#4525e6"/>
      </linearGradient>
    </defs>
    <polyline points="701,236 477,642 925,642 701,236" fill="none" stroke="url(#wGrad1)" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="535,612 701,344 867,612 790,612" fill="none" stroke="url(#wGrad1)" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="535" y1="612" x2="742" y2="612" stroke="#18efe0" strokeWidth="32"/>
    <circle cx="701" cy="236" r="48" fill="#090c2d" stroke="url(#wGrad1)" strokeWidth="24"/>
    <circle cx="477" cy="642" r="48" fill="#090c2d" stroke="url(#wGrad1)" strokeWidth="24"/>
    <circle cx="925" cy="642" r="48" fill="#090c2d" stroke="url(#wGrad1)" strokeWidth="24"/>
  </svg>
)

export default function ChatWidget() {
  const { i18n } = useTranslation()
  const isDE = i18n.language?.startsWith('de')

  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const strings = {
    title: isDE ? 'Eden-Core Assistent' : 'Eden-Core Assistant',
    subtitle: isDE ? 'KI-gestützt · Antwortet sofort' : 'AI-powered · Replies instantly',
    placeholder: isDE ? 'Nachricht eingeben...' : 'Type a message...',
    welcome: isDE
      ? 'Hallo! Ich bin der KI-Assistent von Eden-Core. Ich helfe Ihnen gerne bei Fragen zu unseren Leistungen, Paketen und Prozessen — oder ich buche direkt einen kostenlosen Beratungstermin für Sie. Wie kann ich helfen?'
      : "Hi! I'm the Eden-Core AI assistant. I can answer questions about our services, packages, and process — or help you book a free consultation. How can I help?",
    tooltipText: isDE ? 'Fragen Sie unseren KI-Assistenten' : 'Chat with our AI assistant',
    bookBtn: isDE ? 'Termin buchen' : 'Book a Meeting',
    thinking: isDE ? 'Denkt nach...' : 'Thinking...',
    errorMsg: isDE
      ? 'Entschuldigung, etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns an info@eden-core.com.'
      : 'Sorry, something went wrong. Please try again or contact us at info@eden-core.com.',
  }

  // Load Calendly on mount
  useEffect(() => { loadCalendlyWidget() }, [])

  // Show tooltip after 3s on first visit
  useEffect(() => {
    if (sessionStorage.getItem('chat_tooltip_shown')) return
    const timer = setTimeout(() => {
      setShowTooltip(true)
      sessionStorage.setItem('chat_tooltip_shown', '1')
      setTimeout(() => setShowTooltip(false), 5000)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  // Set welcome message when opened for first time
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'assistant', content: strings.welcome }])
    }
  }, [open])

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMessage = { role: 'user', content: text }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      })

      const data = await res.json()
      const content = data.content || strings.errorMsg

      // Check if assistant wants to open Calendly
      if (content.includes('[OPEN_CALENDLY]')) {
        const cleanContent = content.replace('[OPEN_CALENDLY]', '').trim()
        setMessages(prev => [...prev, { role: 'assistant', content: cleanContent, showCalendly: true }])
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content }])
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: strings.errorMsg }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="chat-widget">
      {/* Tooltip */}
      {showTooltip && !open && (
        <div className="chat-widget__tooltip">{strings.tooltipText}</div>
      )}

      {/* Chat window */}
      {open && (
        <div className="chat-widget__window">
          {/* Header */}
          <div className="chat-widget__header">
            <div className="chat-widget__header-left">
              <div className="chat-widget__avatar">
                <TriangleLogo />
              </div>
              <div>
                <p className="chat-widget__title">{strings.title}</p>
                <p className="chat-widget__subtitle">
                  <span className="chat-widget__dot" />
                  {strings.subtitle}
                </p>
              </div>
            </div>
            <button className="chat-widget__close" onClick={() => setOpen(false)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="chat-widget__messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-widget__msg chat-widget__msg--${msg.role}`}>
                {msg.role === 'assistant' && (
                  <div className="chat-widget__msg-avatar"><TriangleLogo /></div>
                )}
                <div className="chat-widget__msg-content">
                  <p>{msg.content}</p>
                  {msg.showCalendly && (
                    <button className="chat-widget__calendly-btn" onClick={openCalendly}>
                      📅 {strings.bookBtn}
                    </button>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="chat-widget__msg chat-widget__msg--assistant">
                <div className="chat-widget__msg-avatar"><TriangleLogo /></div>
                <div className="chat-widget__msg-content chat-widget__typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chat-widget__input-row">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder={strings.placeholder}
              disabled={loading}
            />
            <button
              className="chat-widget__send"
              onClick={sendMessage}
              disabled={!input.trim() || loading}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        className={`chat-widget__toggle ${open ? 'open' : ''}`}
        onClick={() => { setOpen(o => !o); setShowTooltip(false) }}
        aria-label="Open chat assistant"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <TriangleLogo />
        )}
      </button>
    </div>
  )
}
