import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Sparkles } from 'lucide-react'
import { getApplications } from '../lib/store'

const SYSTEM = `You are a helpful, warm assistant for Lupindo Senior Secondary School in Tshisa Location, Lupindo A/A, Matatiele, Eastern Cape, South Africa.

School facts:
- Principal: Mr L.M. Ntshayisa
- Phone: 079 500 8111 / 073 077 9988
- Email: 200500470@ecschools.org.za
- Address: Tshisa Location, Lupindo A/A, Matatiele, 4730
- District: Alfred Nzo West, Circuit: ANW Magudlaphi
- Grades 8–12, public no-fee school
- EMIS: 200500470
- 2025 matric pass rate: 94.5% | Bachelor passes: 206 (71.8%) | Distinctions: 451
- 2027 general admission applications currently open
- School hours: Mon–Thu 07:30–15:30, Fri 07:30–13:30
- Sports: Soccer, Netball, Athletics, Rugby
- Activities: Debating, Spelling Bee, Choir, Drama

Be concise, warm and helpful. If unsure, direct them to call the school.`

const uid = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`

const QUICK = [
  'How do I apply for admission?',
  'What subjects do you offer?',
  'What documents do I need?',
  'What are your school hours?',
]

async function askClaude(userMsg) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: SYSTEM,
      messages: [{ role: 'user', content: userMsg }],
    }),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const data = await res.json()
  return data.content?.filter(b => b.type === 'text').map(b => b.text).join('\n').trim() || ''
}

function parseStatusQuery(text) {
  const t = text.toLowerCase()
  const m = t.match(/(\d{4}-\d{6})/)
  if (m) return m[1].toUpperCase()
  return null
}

export default function ChatbotWidget() {
  const [open, setOpen]       = useState(false)
  const [input, setInput]     = useState('')
  const [busy, setBusy]       = useState(false)
  const [messages, setMessages] = useState([{
    id: uid(), role: 'bot',
    text: "👋 Hello! I'm the Lupindo SSS assistant. Ask me anything about admissions, results, or school life — I'm happy to help!",
  }])
  const endRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 150) }, [open])

  const addMsg = (role, text) => setMessages(p => [...p, { id: uid(), role, text }])

  const send = async (override) => {
    const text = (override ?? input).trim()
    if (!text || busy) return
    addMsg('user', text)
    setInput('')
    setBusy(true)
    try {
      // Local status lookup
      const sn = parseStatusQuery(text)
      if (sn) {
        const app = getApplications().find(a => a.studentNumber?.toUpperCase() === sn)
        addMsg('bot', app
          ? `I found the application for ${app.firstName} ${app.lastName} (${sn}). Status: **${app.status}**. Submitted: ${app.submittedDate}.`
          : `I couldn't find an application with student number ${sn}. Please double-check the number or contact the school office.`)
        return
      }
      const reply = await askClaude(text)
      addMsg('bot', reply)
    } catch {
      addMsg('bot', 'I\'m having trouble connecting right now. Please contact the school directly at 079 500 8111.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed z-50 bottom-20 right-3 sm:right-6 flex flex-col"
          style={{
            width: 'min(375px, calc(100vw - 1.5rem))',
            height: 'min(560px, 72vh)',
            background: '#fff',
            borderRadius: '1.25rem',
            boxShadow: '0 24px 64px rgba(22,101,52,0.18)',
            border: '1px solid rgba(200,164,0,0.2)',
            overflow: 'hidden',
          }}>

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{ background: '#166534', borderBottom: '3px solid #C8A400' }}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#C8A400' }}>
                <Sparkles size={15} style={{ color: '#166534' }} />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight" style={{ color: '#C8A400' }}>Lupindo Assistant</p>
                <p className="text-xs flex items-center gap-1" style={{ color: 'rgba(200,164,0,0.6)' }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-green-400 inline-block" />
                  Online · AI-powered
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg transition-colors"
              style={{ color: '#C8A400' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,164,0,0.15)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '' }}
              aria-label="Close">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3" style={{ background: '#f9fafb' }}>
            {messages.map(m => (
              <div key={m.id} className={`flex items-end gap-2 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {m.role === 'bot' && (
                  <div className="w-6 h-6 rounded-full shrink-0 mb-0.5 flex items-center justify-center"
                    style={{ background: '#166534' }}>
                    <Sparkles size={11} style={{ color: '#C8A400' }} />
                  </div>
                )}
                <div className="max-w-[80%] rounded-2xl px-3 py-2.5 text-sm leading-relaxed"
                  style={
                    m.role === 'user'
                      ? { background: '#166534', color: '#fff', borderBottomRightRadius: '4px' }
                      : { background: '#fff', color: '#111', border: '1px solid rgba(200,164,0,0.15)', borderBottomLeftRadius: '4px' }
                  }>
                  {m.text}
                </div>
              </div>
            ))}

            {busy && (
              <div className="flex items-end gap-2">
                <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center" style={{ background: '#166534' }}>
                  <Sparkles size={11} style={{ color: '#C8A400' }} />
                </div>
                <div className="bg-white rounded-2xl rounded-bl px-4 py-3 border" style={{ borderColor: 'rgba(200,164,0,0.15)' }}>
                  <div className="flex gap-1">
                    {[0, 150, 300].map(d => (
                      <span key={d} className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: `${d}ms` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {messages.length === 1 && !busy && (
              <div className="pt-2">
                <p className="text-center text-xs text-gray-400 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {QUICK.map(q => (
                    <button key={q} onClick={() => send(q)}
                      className="text-xs px-2.5 py-1 rounded-full border font-medium transition-colors"
                      style={{ borderColor: 'rgba(22,101,52,0.2)', color: '#166534', background: '#fff' }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#166534'; e.currentTarget.style.color = '#C8A400' }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#166534' }}>
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white shrink-0" style={{ borderTop: '1px solid rgba(200,164,0,0.15)' }}>
            <div className="flex gap-2">
              <input ref={inputRef} value={input} onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
                placeholder="Ask about the school…"
                disabled={busy}
                className="flex-1 text-sm px-3 py-2 rounded-xl outline-none"
                style={{
                  border: '1px solid rgba(200,164,0,0.25)',
                  background: '#f9fafb',
                }} />
              <button onClick={() => send()} disabled={busy || !input.trim()}
                className="px-3 py-2 rounded-xl transition-all disabled:opacity-40"
                style={{ background: '#166534', color: '#C8A400' }}
                aria-label="Send">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAB */}
      <button onClick={() => setOpen(v => !v)}
        className="fixed z-50 bottom-4 right-3 sm:right-6 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95"
        style={{ background: '#166534', border: '3px solid #C8A400', color: '#C8A400' }}
        aria-label={open ? 'Close chat' : 'Open chat'}>
        {open ? <X size={22} /> : (
          <div className="relative">
            <MessageCircle size={22} />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
          </div>
        )}
      </button>
    </>
  )
}
