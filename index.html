import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

/* ─── Scroll reveal hook ─────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80)
          }
        })
      },
      { threshold: 0.1 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ─── Netlify Forms encode helper ────────────────── */
function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

/* ─── Root ───────────────────────────────────────── */
function LandingPage() {
  useReveal()
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <AlertsSection />
      <CtaSection />
    </>
  )
}

/* ─── NAV ────────────────────────────────────────── */
function Nav() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        Dose<span>Certa</span>
      </a>
      <ul className="nav-links">
        <li><a href="#funcoes">Funcoes</a></li>
        <li><a href="#como">Como funciona</a></li>
        <li><a href="#alertas">Alertas</a></li>
      </ul>
      <a href="#cta" className="nav-cta">Criar conta gratis &rarr;</a>
    </nav>
  )
}

/* ─── HERO ───────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="badge">
          <div className="badge-dot" />
          Acesso antecipado &mdash; teste primeiro
        </div>
        <h1>
          Nunca fique sem<br />seus <em>remedios.</em>
        </h1>
        <p className="hero-sub">
          O app que calcula quando seus remedios vao acabar, avisa antes e
          encontra a melhor opcao de compra com entrega.
        </p>
        <div className="cta-row">
          <a href="#cta" className="btn-primary">
            ✉ Criar conta gratuita
          </a>
          <a href="#como" className="btn-ghost">
            Ver como funciona &rarr;
          </a>
          <a href="/buscar" className="btn-ghost" style={{ borderColor: 'rgba(0,200,150,.4)', color: 'var(--pill)' }}>
            💊 Buscar precos
          </a>
        </div>
        <div className="stat-row">
          <div className="stat-item">
            <strong>ate 30%</strong>
            <span>de economia potencial</span>
          </div>
          <div className="stat-item">
            <strong>R$0</strong>
            <span>para testar</span>
          </div>
          <div className="stat-item">
            <strong>3+ dias</strong>
            <span>de aviso antecipado</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="phone-wrap">
          {/* Floating cards */}
          <div className="float-card price-card">
            <div className="float-label">💊 Omeprazol 20mg</div>
            <div className="float-price">R$ 12,90</div>
            <div className="float-savings">Opcao mais em conta encontrada</div>
          </div>
          <div className="float-card alert-card">
            <div className="float-alert-icon">⏰</div>
            <div className="float-alert-msg">
              Atenolol acaba em<br /><strong>3 dias</strong> &mdash; hora de comprar
            </div>
          </div>

          {/* Phone mockup */}
          <div className="phone">
            <div className="phone-notch" />
            <div className="phone-screen-top">
              <div className="phone-greeting">Bom dia,</div>
              <div className="phone-name">Maria Silva 👋</div>
              <div className="next-dose">
                <div className="next-dose-label">Proxima dose</div>
                <div className="next-dose-name">Metformina 850mg</div>
                <div className="next-dose-time">⏰ Hoje as 14:00 · 1 comprimido</div>
              </div>
            </div>
            <div className="med-list">
              <MedCard icon="💊" cls="green" name="Atenolol 25mg" detail="1x ao dia · manha" stockCls="low" stock="3 dias" />
              <MedCard icon="🔴" cls="red" name="Losartana 50mg" detail="2x ao dia" stockCls="out" stock="Acabou!" />
              <MedCard icon="✨" cls="gold" name="Omeprazol 20mg" detail="1x ao dia · em jejum" stockCls="ok" stock="28 dias" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MedCard({
  icon, cls, name, detail, stockCls, stock,
}: {
  icon: string; cls: string; name: string
  detail: string; stockCls: string; stock: string
}) {
  return (
    <div className="med-card">
      <div className={`med-icon ${cls}`}>{icon}</div>
      <div className="med-info">
        <div className="med-name">{name}</div>
        <div className="med-detail">{detail}</div>
      </div>
      <span className={`med-stock ${stockCls}`}>{stock}</span>
    </div>
  )
}

/* ─── FEATURES ───────────────────────────────────── */
const FEATURE_CARDS = [
  {
    emoji: '🧮',
    title: 'Calcula automaticamente',
    desc: 'Informe sua dosagem e quantidade. O app calcula exatamente quando seu estoque acaba  --  sem planilha, sem conta de cabeca.',
    tag: 'Calculo inteligente',
    accent: false,
  },
  {
    emoji: '🔔',
    title: 'Avisa antes de acabar',
    desc: 'Notificacoes com 7, 3 e 1 dia de antecedencia. Voce nunca mais vai chegar na ultima caixa sem saber o que fazer.',
    tag: 'Alertas inteligentes',
    accent: true,
  },
  {
    emoji: '💰',
    title: 'Encontra opcoes de compra',
    desc: 'Mostra alternativas de compra com entrega na sua cidade. Compare e escolha o que faz mais sentido para voce.',
    tag: 'Comparacao de precos',
    accent: false,
  },
  {
    emoji: '👨‍👩‍👧',
    title: 'Para toda a familia',
    desc: 'Cadastre os remedios de todos. Ideal para quem cuida dos pais, filhos ou qualquer pessoa que depende de medicacao continua.',
    tag: 'Multi-perfil',
    accent: false,
  },
  {
    emoji: '📋',
    title: 'Historico completo',
    desc: 'Veja quando tomou, quando comprou, e quanto gastou. Informacao organizada para levar ao medico na proxima consulta.',
    tag: 'Historico de saude',
    accent: false,
  },
  {
    emoji: '🔒',
    title: 'Seguro e privado',
    desc: 'Seus dados de saude sao seus. Nunca vendemos suas informacoes. Sem anuncios, sem rastreamento de terceiros.',
    tag: '100% privado',
    accent: false,
  },
]

function Features() {
  return (
    <section className="features" id="funcoes">
      <div className="section-label">O que fazemos</div>
      <h2 className="section-title">Tudo que voce precisa, num so lugar.</h2>
      <div className="features-grid">
        {FEATURE_CARDS.map((c) => (
          <div key={c.title} className={`feature-card reveal${c.accent ? ' accent' : ''}`}>
            <span className="feature-emoji">{c.emoji}</span>
            <h3 className="feature-title">{c.title}</h3>
            <p className="feature-desc">{c.desc}</p>
            <span className="feature-tag">{c.tag}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── HOW IT WORKS ───────────────────────────────── */
const STEPS = [
  {
    title: 'Cadastre seus remedios',
    desc: 'Nome, dosagem, frequencia e quantos comprimidos voce tem agora. Leva menos de 1 minuto por remedio.',
  },
  {
    title: 'O app calcula tudo',
    desc: 'Automaticamente encontra a data que seu estoque acaba e programa os alertas certos para voce.',
  },
  {
    title: 'Receba o alerta',
    desc: 'Notificacao no celular com dias de antecedencia  --  junto com opcoes de compra com entrega.',
  },
  {
    title: 'Compre com tranquilidade',
    desc: 'Sem correria de ultimo momento. Voce decide onde e quando comprar, com informacao na mao.',
  },
]

const PHARMACIES = [
  { icon: '🏆', bg: 'rgba(0,200,150,.15)', name: 'Farmacia A', delivery: '✓ Entrega em 2h · gratis', price: 'R$ 12,90', best: true },
  { icon: '💊', bg: 'rgba(255,255,255,.08)', name: 'Farmacia B', delivery: 'Entrega em 24h · R$ 8,90', price: 'R$ 17,40', best: false },
  { icon: '🏥', bg: 'rgba(255,255,255,.08)', name: 'Farmacia C', delivery: 'Entrega em 48h · gratis', price: 'R$ 19,90', best: false },
]

function HowItWorks() {
  return (
    <section className="how" id="como">
      <div className="how-left">
        <div className="section-label">Como funciona</div>
        <h2 className="section-title" style={{ color: '#fff' }}>
          Simples como deveria ser.
        </h2>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div key={s.title} className="step reveal">
              <div className="step-num">{i + 1}</div>
              <div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="how-right reveal">
        <div className="price-table">
          <div className="price-table-title">💊 Atenolol 25mg · 30 comprimidos</div>
          <div className="price-table-sub">Exemplo de comparacao · valores ilustrativos</div>

          {PHARMACIES.map((p) => (
            <div key={p.name} className={`price-row${p.best ? ' best' : ''}`}>
              <div className="price-pharmacy">
                <div className="pharmacy-icon" style={{ background: p.bg }}>{p.icon}</div>
                <div>
                  <div className="pharmacy-name">{p.name}</div>
                  <div className="pharmacy-delivery">{p.delivery}</div>
                </div>
              </div>
              <div className="price-value">
                <div className="price-amount" style={p.best ? { color: 'var(--pill)' } : undefined}>
                  {p.price}
                </div>
                {p.best && <div className="price-best-badge">🏅 Melhor opcao</div>}
              </div>
            </div>
          ))}

          <div className="price-tip">
            💡 Voce poderia economizar ate R$ 7,00 nesse remedio escolhendo a melhor opcao
          </div>
          <div className="price-table-disclaimer">
            * Valores e farmacias ilustrativos. Precos reais virao da integracao com parceiros.
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── ALERTS ─────────────────────────────────────── */
const NOTIFS = [
  {
    iconCls: 'red',
    icon: '🚨',
    title: 'Losartana esta acabando!',
    msg: 'Voce tem apenas 2 comprimidos restantes. Recomendamos comprar hoje para nao ficar sem.',
    time: 'Agora · DoseCerta',
  },
  {
    iconCls: 'green',
    icon: '💸',
    title: 'Opcao mais barata encontrada',
    msg: 'Encontramos uma opcao melhor para Atenolol 25mg. Confira antes de comprar.',
    time: 'Ha 3 minutos · DoseCerta',
  },
  {
    iconCls: 'blue',
    icon: '⏰',
    title: 'Hora do remedio  --  14:00',
    msg: 'Metformina 850mg · 1 comprimido com o almoco.',
    time: 'Hoje as 14:00 · DoseCerta',
  },
  {
    iconCls: 'green',
    icon: '✅',
    title: 'Estoque atualizado',
    msg: 'Atenolol registrado: 30 comprimidos. Proximo aviso em 27 dias.',
    time: 'Ha 12 minutos · DoseCerta',
  },
]

function AlertsSection() {
  return (
    <section className="alert-section" id="alertas">
      <div className="alert-right reveal" style={{ order: 2 }}>
        <div className="section-label">Alertas inteligentes</div>
        <h2 className="section-title">
          Notificacoes que<br />realmente importam.
        </h2>
        <p className="alert-desc">
          Chega de post-it no espelho. Chega de WhatsApp para familiar lembrando
          de comprar. O app avisa voce com antecedencia suficiente para nao correr.
        </p>
        <a href="#cta" className="btn-primary" style={{ width: 'fit-content' }}>
          Criar conta gratuita &rarr;
        </a>
      </div>

      <div className="alert-mockups reveal" style={{ order: 1 }}>
        {NOTIFS.map((n) => (
          <div key={n.title} className="notif-card">
            <div className={`notif-icon-wrap ${n.iconCls}`}>{n.icon}</div>
            <div>
              <div className="notif-title">{n.title}</div>
              <div className="notif-msg">{n.msg}</div>
              <div className="notif-time">{n.time}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── CTA ────────────────────────────────────────── */
function CtaSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setError(true)
      return
    }
    try {
      await fetch('/early-access.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'early-access', email }),
      })
    } catch {
      // fail silently  --  still show success to user
    }
    setSubmitted(true)
  }

  return (
    <section className="cta-section" id="cta">
      <span className="section-label cta-label">Acesso antecipado</span>
      <h2 className="cta-title">
        Pronto para nunca<br />ficar sem <em>remedios?</em>
      </h2>
      <p className="cta-sub">
        Crie seu acesso gratuito e seja uma das primeiras pessoas a testar o DoseCerta.
      </p>

      {submitted ? (
        <p className="success-msg">
          🎉 Acesso criado! Vamos te avisar quando a versao de teste estiver disponivel.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="cta-form">
          <input type="hidden" name="form-name" value="early-access" />
          <div className="input-row">
            <input
              type="email"
              name="email"
              className={`email-input${error ? ' input-error' : ''}`}
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(false) }}
              required
            />
            <button type="submit" className="btn-primary">
              Criar acesso &rarr;
            </button>
          </div>
        </form>
      )}

      <p className="cta-fine">Sem spam. Sem cartao. Cancele quando quiser.</p>
    </section>
  )
}
