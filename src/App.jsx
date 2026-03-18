import { useState, useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Download, Zap, Globe, Clock, ChevronRight, ArrowDown, Check, Star, Package, Sparkles, Menu, X } from 'lucide-react'
import './index.css'

gsap.registerPlugin(ScrollTrigger)

/* ═══════════════════════════════════════════
   NAVBAR — Floating pill, morph on scroll
   ═══════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Cos\'è una Skill', href: '#what' },
    { label: 'Catalogo', href: '#catalog' },
    { label: 'Bundle', href: '#bundle' },
  ]

  return (
    <nav ref={navRef} className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out
      ${scrolled
        ? 'bg-void/70 backdrop-blur-xl border border-ghost/10 shadow-lg shadow-plasma/5'
        : 'bg-transparent border border-transparent'
      } rounded-full px-4 sm:px-6 py-3 flex items-center gap-4 sm:gap-8 max-w-2xl w-[95%] sm:w-auto`}>

      <a href="#" className="font-heading font-bold text-base sm:text-lg tracking-tight whitespace-nowrap">
        <span className={scrolled ? 'text-ghost' : 'text-ghost'}>Use</span>
        <span className="text-plasma">Skill</span>
      </a>

      <div className="hidden sm:flex items-center gap-6 flex-1 justify-center">
        {links.map(l => (
          <a key={l.href} href={l.href}
            className={`link-lift text-sm font-medium transition-colors ${scrolled ? 'text-ghost/70 hover:text-ghost' : 'text-ghost/60 hover:text-ghost'}`}>
            {l.label}
          </a>
        ))}
      </div>

      <a href="#freebie"
        data-product="brand-voice-extractor"
        className="hidden sm:inline-flex btn-magnetic bg-plasma text-void font-semibold text-sm px-5 py-2 rounded-full items-center gap-2">
        <span className="btn-bg bg-plasma-glow rounded-full"></span>
        <span className="relative z-10">Scarica gratis</span>
      </a>

      <button onClick={() => setMobileOpen(!mobileOpen)} className="sm:hidden text-ghost ml-auto">
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-void-light/95 backdrop-blur-xl border border-ghost/10 rounded-3xl p-6 flex flex-col gap-4 sm:hidden">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
              className="text-ghost/80 hover:text-ghost font-medium text-base">
              {l.label}
            </a>
          ))}
          <a href="#freebie" onClick={() => setMobileOpen(false)}
            data-product="brand-voice-extractor"
            className="bg-plasma text-void font-semibold text-center py-3 rounded-full">
            Scarica gratis
          </a>
        </div>
      )}
    </nav>
  )
}

/* ═══════════════════════════════════════════
   HERO — The Opening Shot
   ═══════════════════════════════════════════ */
function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', {
        y: 50, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.3
      })
      gsap.from('.hero-cta', {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 1
      })
      gsap.from('.hero-badge', {
        y: 20, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 1.3
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534996858221-380b92700493?w=1600&q=80"
          alt="" className="w-full h-full object-cover opacity-30"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-void/30" />
        {/* Plasma glow orb */}
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-plasma/8 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 md:pb-28 pt-32">
        <div className="hero-line inline-block mb-4">
          <span className="font-mono text-sm text-plasma/80 tracking-wider uppercase">
            Per professionisti che vogliono risultati, non prompt
          </span>
        </div>

        <h1 className="hero-line font-heading font-800 text-4xl sm:text-5xl md:text-7xl leading-[1.05] tracking-tight mb-2">
          La tua AI parla
        </h1>
        <h1 className="hero-line font-drama italic text-5xl sm:text-7xl md:text-[6.5rem] leading-[0.95] text-plasma mb-8">
          italiano vero.
        </h1>

        <p className="hero-line text-ghost/60 text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
          Skill professionali che trasformano qualsiasi AI in un collaboratore che scrive come te,
          pensa come te, lavora come te. Funzionano su Claude, Antigravity, Manus e ogni agente compatibile.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 items-start">
          <a href="#freebie"
            data-product="brand-voice-extractor"
            className="btn-magnetic bg-plasma text-void font-bold text-base px-8 py-4 rounded-full inline-flex items-center gap-3 shadow-lg shadow-plasma/20">
            <span className="btn-bg bg-plasma-glow rounded-full"></span>
            <Download size={18} className="relative z-10" />
            <span className="relative z-10">Scarica gratis la tua prima Skill</span>
          </a>
          <a href="#what"
            className="link-lift text-ghost/50 hover:text-ghost font-medium text-sm inline-flex items-center gap-2 py-4">
            <ArrowDown size={16} />
            Scopri cosa sono le Skill
          </a>
        </div>

        <div className="hero-badge flex flex-wrap gap-3 mt-10">
          {['Claude free', 'Antigravity', 'Manus', 'Zero codice'].map(tag => (
            <span key={tag} className="font-mono text-xs text-ghost/40 border border-ghost/10 px-3 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   WHAT IS A SKILL — Educational section
   ═══════════════════════════════════════════ */
function WhatIsASkill() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.what-title', {
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.what-title', start: 'top 85%' }
      })
      gsap.from('.what-text', {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.what-text', start: 'top 85%' }
      })
      gsap.from('.what-step', {
        y: 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.what-steps', start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    { icon: <Download size={24} />, num: '01', title: 'Scarica il file', desc: 'Ogni Skill è un file di testo. Lo scarichi e ce l\'hai.' },
    { icon: <Zap size={24} />, num: '02', title: 'Caricalo nella tua AI', desc: 'Lo incolli nel progetto della tua AI. Due clic, fatto.' },
    { icon: <Sparkles size={24} />, num: '03', title: 'Chiedi quello che ti serve', desc: 'La tua AI ora sa esattamente cosa fare e come farlo in italiano.' },
  ]

  return (
    <section id="what" ref={sectionRef} className="relative py-24 md:py-36">
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-plasma/5 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="what-title font-mono text-sm text-plasma tracking-wider uppercase block mb-6">
            Per chi parte da zero
          </span>
          <h2 className="what-title font-heading font-700 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-8">
            Cos'è una Skill per AI
          </h2>
          <p className="what-text text-ghost/60 text-base sm:text-lg leading-relaxed mb-6">
            Una Skill è un file di istruzioni che trasforma la tua intelligenza artificiale da assistente generico a specialista.
            Pensa a quando spieghi a un nuovo collaboratore come lavori, che tono usi, cosa ti piace e cosa odi. La Skill fa esattamente questo, ma lo fa una volta sola.
          </p>
          <p className="what-text text-ghost/60 text-base sm:text-lg leading-relaxed mb-6">
            Da quel momento, ogni volta che chiedi qualcosa alla tua AI, lei sa già come risponderti.
            Sa che scrivi in italiano (non in "traduttese"), sa che il tuo pubblico sono professionisti italiani,
            sa che il tuo tono è diretto e mai artificiale.
          </p>
          <p className="what-text text-ghost/50 text-base leading-relaxed mb-12">
            Funziona su Claude (anche gratis), Google Antigravity (gratis), Manus (free tier) e qualsiasi agente AI compatibile con lo standard Skill. Non serve saper programmare, non serve un abbonamento a pagamento, non serve un tutorial di mezz'ora.
          </p>
        </div>

        <div className="what-steps grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="what-step group bg-void-light border border-ghost/8 rounded-[2rem] p-8 hover:border-plasma/20 transition-all duration-500">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-plasma/10 flex items-center justify-center text-plasma group-hover:bg-plasma/20 transition-colors">
                  {s.icon}
                </div>
                <span className="font-mono text-sm text-ghost/30">{s.num}</span>
              </div>
              <h3 className="font-heading font-600 text-lg mb-2">{s.title}</h3>
              <p className="text-ghost/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   FEATURES — Three interactive cards
   ═══════════════════════════════════════════ */

function DiagnosticShuffler() {
  const [cards, setCards] = useState([
    { id: 0, label: 'Nessun abbonamento richiesto', color: 'bg-plasma/15 text-plasma' },
    { id: 1, label: 'Funziona con il piano gratuito', color: 'bg-emerald-500/15 text-emerald-400' },
    { id: 2, label: 'Compatibile con ogni agente AI', color: 'bg-amber-500/15 text-amber-400' },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-36">
      {cards.map((card, i) => (
        <div key={card.id}
          className={`absolute inset-x-0 transition-all duration-500 ${card.color} rounded-2xl px-5 py-4 font-medium text-sm`}
          style={{
            top: i * 12,
            zIndex: cards.length - i,
            opacity: 1 - i * 0.2,
            transform: `scale(${1 - i * 0.04})`,
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}>
          <div className="flex items-center gap-3">
            <Check size={16} />
            {card.label}
          </div>
        </div>
      ))}
    </div>
  )
}

function TelemetryTypewriter() {
  const [text, setText] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const lines = [
    'Analisi tono completata → diretto, tecnico, zero fronzoli',
    'Vocabolario mappato → 847 pattern identificati',
    'Struttura frase → media 12 parole, ritmo veloce',
    'Output generato → italiano nativo, zero AI-ese',
  ]

  useEffect(() => {
    let charIndex = 0
    const currentLine = lines[lineIndex % lines.length]
    const timer = setInterval(() => {
      if (charIndex <= currentLine.length) {
        setText(currentLine.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(timer)
        setTimeout(() => {
          setLineIndex(prev => prev + 1)
          setText('')
        }, 2000)
      }
    }, 35)
    return () => clearInterval(timer)
  }, [lineIndex])

  return (
    <div className="bg-void rounded-xl p-4 border border-ghost/5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-plasma pulse-dot" />
        <span className="font-mono text-[10px] text-ghost/40 uppercase tracking-widest">Live feed</span>
      </div>
      <div className="font-mono text-xs text-plasma-glow leading-relaxed min-h-[2.5rem]">
        {text}<span className="cursor-blink text-plasma">▌</span>
      </div>
    </div>
  )
}

function CursorScheduler() {
  const days = ['L', 'M', 'M', 'G', 'V', 'S', 'D']
  const [activeDay, setActiveDay] = useState(-1)
  const [cursorPos, setCursorPos] = useState({ x: -30, y: 20, visible: false })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const sequence = async () => {
      setCursorPos({ x: -30, y: 20, visible: true })
      await wait(400)

      for (let i = 0; i < 5; i++) {
        const x = 10 + i * 40
        setCursorPos({ x, y: 20, visible: true })
        await wait(300)
        setActiveDay(i)
        await wait(200)
      }

      setCursorPos({ x: 120, y: 60, visible: true })
      await wait(300)
      setSaved(true)
      await wait(1500)

      setCursorPos({ x: 200, y: 60, visible: false })
      await wait(500)

      setActiveDay(-1)
      setSaved(false)
    }

    sequence()
    const interval = setInterval(sequence, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="flex gap-2 mb-4">
        {days.map((d, i) => (
          <div key={i}
            className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-mono transition-all duration-200
              ${i <= activeDay ? 'bg-plasma/20 text-plasma scale-95' : 'bg-ghost/5 text-ghost/30'}`}>
            {d}
          </div>
        ))}
      </div>
      <button className={`font-mono text-xs px-4 py-2 rounded-lg transition-all duration-200
        ${saved ? 'bg-plasma text-void' : 'bg-ghost/5 text-ghost/30'}`}>
        {saved ? '✓ Salvato' : 'Salva'}
      </button>
      {/* SVG Cursor */}
      <svg className="absolute pointer-events-none transition-all duration-300 ease-out"
        style={{ left: cursorPos.x, top: cursorPos.y, opacity: cursorPos.visible ? 1 : 0 }}
        width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M5 3l14 8-6 2-4 6-4-16z" fill="#7B61FF" stroke="#0A0A14" strokeWidth="1"/>
      </svg>
    </div>
  )
}

function wait(ms) {
  return new Promise(r => setTimeout(r, ms))
}

function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.features-grid', start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-6">
        <span className="font-mono text-sm text-plasma tracking-wider uppercase block mb-6">
          Perché funziona
        </span>
        <h2 className="font-heading font-700 text-3xl sm:text-4xl tracking-tight mb-16 max-w-lg">
          Tre cose che cambiano tutto
        </h2>

        <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="feature-card bg-void-light border border-ghost/8 rounded-[2rem] p-8 hover:border-plasma/20 transition-all duration-500">
            <h3 className="font-heading font-600 text-lg mb-2">Funziona con l'AI che già usi, gratis</h3>
            <p className="text-ghost/50 text-sm leading-relaxed mb-6">
              Claude free, Antigravity free, Manus free tier. Nessun abbonamento da pagare, nessun software da installare. Copi un file, lo incolli, la tua AI diventa uno specialista.
            </p>
            <DiagnosticShuffler />
          </div>

          <div className="feature-card bg-void-light border border-ghost/8 rounded-[2rem] p-8 hover:border-plasma/20 transition-all duration-500">
            <h3 className="font-heading font-600 text-lg mb-2">Output in italiano vero, non tradotto da robot</h3>
            <p className="text-ghost/50 text-sm leading-relaxed mb-6">
              Progettate da una strategist italiana per professionisti italiani. Il testo che esce sembra scritto da te, solo più veloce.
            </p>
            <TelemetryTypewriter />
          </div>

          <div className="feature-card bg-void-light border border-ghost/8 rounded-[2rem] p-8 hover:border-plasma/20 transition-all duration-500">
            <h3 className="font-heading font-600 text-lg mb-2">2 minuti e sei operativo</h3>
            <p className="text-ghost/50 text-sm leading-relaxed mb-6">
              Niente codice, niente configurazioni, niente tutorial da 45 minuti. Se sai copiare e incollare, sai già tutto quello che serve.
            </p>
            <CursorScheduler />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   PHILOSOPHY — The Manifesto
   ═══════════════════════════════════════════ */
function Philosophy() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.philo-small', {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.philo-small', start: 'top 85%' }
      })
      gsap.from('.philo-big', {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.philo-big', start: 'top 85%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-graphite" />
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=60"
          alt="" loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-graphite/50 via-transparent to-graphite/50" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="philo-small text-ghost/40 text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed">
          La maggior parte delle persone usa l'AI scrivendo prompt a caso,
          sperando che il risultato non sembri generato da una macchina.
        </p>
        <p className="philo-big font-drama italic text-3xl sm:text-5xl md:text-6xl leading-tight">
          Noi ti diamo un <span className="text-plasma">metodo</span> che funziona
          ogni singola volta.
        </p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   FREEBIE — Brand Voice Extractor
   ═══════════════════════════════════════════ */
function Freebie() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.freebie-content', {
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.freebie-content', start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="freebie" ref={sectionRef} className="py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-6">
        <div className="freebie-content relative bg-gradient-to-br from-plasma/10 via-void-light to-void-light border border-plasma/20 rounded-[2.5rem] p-8 sm:p-12 md:p-16 overflow-hidden">
          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-plasma/10 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-xl">
            <span className="inline-block bg-plasma/15 text-plasma font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Gratis — 0€
            </span>
            <h2 className="font-heading font-700 text-2xl sm:text-3xl md:text-4xl tracking-tight mb-4">
              Brand Voice Extractor
            </h2>
            <p className="text-ghost/60 text-base leading-relaxed mb-4">
              Incolli 3 o più testi che hai scritto tu. La Skill li analizza e produce una Guida Completa del tuo Tono di Voce: profilo stilistico, vocabolario ricorrente, personalità comunicativa e un prompt system pronto da usare in qualsiasi AI.
            </p>
            <p className="text-ghost/40 text-sm leading-relaxed mb-8">
              Da quel momento la tua AI scrive come te. Non come "un professionista generico", non come "un tono caldo e coinvolgente". Come te, con le tue parole, i tuoi ritmi, le tue scelte.
            </p>

            <a href="#"
              data-product="brand-voice-extractor"
              className="btn-magnetic bg-plasma text-void font-bold text-base px-8 py-4 rounded-full inline-flex items-center gap-3 shadow-lg shadow-plasma/20">
              <span className="btn-bg bg-plasma-glow rounded-full"></span>
              <Download size={18} className="relative z-10" />
              <span className="relative z-10">Scarica gratis</span>
            </a>

            <p className="text-ghost/30 text-xs mt-4">
              Ricevi il file via email. Niente spam, solo la Skill e una guida per installarla.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   CATALOG — Paid skills
   ═══════════════════════════════════════════ */
function Catalog() {
  const sectionRef = useRef(null)
  const skills = [
    {
      name: 'Italian LinkedIn Post Writer',
      product: 'linkedin-post-writer',
      price: '9€',
      desc: 'Da un\'idea grezza a un post LinkedIn pronto da pubblicare. Tono umano, struttura che funziona, hook che ferma lo scroll. Niente frasette motivazionali, niente emoji a pioggia.',
      tag: 'Più venduta',
    },
    {
      name: 'Newsletter Generator IT',
      product: 'newsletter-generator',
      price: '12€',
      desc: 'Dai tuoi appunti a una newsletter completa con soggetto, apertura, corpo e chiusura. Il tono è il tuo, la struttura è quella che converte.',
    },
    {
      name: 'Instagram Carousel Script',
      product: 'instagram-carousel',
      price: '9€',
      desc: 'Da un concetto a 10 slide con testo, hook iniziale e chiusura con call to action. Ogni slide ha il numero di parole giusto per essere leggibile.',
    },
    {
      name: 'Content Calendar Builder',
      product: 'content-calendar',
      price: '15€',
      desc: 'Dai tuoi obiettivi a un calendario editoriale di 30 giorni con idee concrete, angoli diversi e formati alternati. Niente "parla del tuo perché" generico.',
    },
    {
      name: 'Client Onboarding Interview',
      product: 'client-onboarding',
      price: '7€',
      desc: 'Genera questionari di onboarding personalizzati per il tuo settore. Le domande giuste per capire il cliente prima ancora della prima call.',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.catalog-card', {
        y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.catalog-grid', start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="catalog" ref={sectionRef} className="py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-6">
        <span className="font-mono text-sm text-plasma tracking-wider uppercase block mb-6">
          Catalogo
        </span>
        <h2 className="font-heading font-700 text-3xl sm:text-4xl tracking-tight mb-4 max-w-lg">
          Skill pronte all'uso
        </h2>
        <p className="text-ghost/50 text-base mb-16 max-w-lg">
          Ogni Skill è stata testata su decine di output reali prima di essere pubblicata. Compri una volta, usi per sempre, su tutte le AI compatibili.
        </p>

        <div className="catalog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <div key={i} className="catalog-card group bg-void-light border border-ghost/8 rounded-[2rem] p-7 flex flex-col hover:border-plasma/20 transition-all duration-500">
              {s.tag && (
                <span className="inline-block self-start bg-plasma/15 text-plasma font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  {s.tag}
                </span>
              )}
              <h3 className="font-heading font-600 text-base mb-2">{s.name}</h3>
              <p className="text-ghost/45 text-sm leading-relaxed flex-1 mb-6">{s.desc}</p>
              <div className="flex items-center justify-between">
                <span className="font-heading font-700 text-xl text-ghost">{s.price}</span>
                <a href="#"
                  data-product={s.product}
                  className="btn-magnetic bg-ghost/5 hover:bg-plasma/15 text-ghost text-sm font-medium px-5 py-2.5 rounded-full inline-flex items-center gap-2 border border-ghost/10 hover:border-plasma/20 transition-colors">
                  <span className="relative z-10 flex items-center gap-2">
                    Acquista <ChevronRight size={14} />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   BUNDLE — Premium package
   ═══════════════════════════════════════════ */
function Bundle() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.bundle-box', {
        y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.bundle-box', start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const included = [
    'Brand Voice Extractor (valore 0€ — incluso)',
    'Italian LinkedIn Post Writer (valore 9€)',
    'Newsletter Generator IT (valore 12€)',
    'Instagram Carousel Script (valore 9€)',
    'Content Calendar Builder (valore 15€)',
    'Client Onboarding Interview (valore 7€)',
    'Guida "Il Metodo UseSkill" — come usare tutte le Skill insieme come sistema',
  ]

  return (
    <section id="bundle" ref={sectionRef} className="py-24 md:py-36">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bundle-box relative bg-void-light border-2 border-plasma/30 rounded-[2.5rem] p-8 sm:p-12 overflow-hidden">
          {/* Glow effects */}
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-plasma/8 rounded-full blur-[120px]" />
          <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-plasma/5 rounded-full blur-[120px]" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-block bg-plasma/15 text-plasma font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full">
                Bundle completo
              </span>
              <span className="inline-block bg-ghost/5 text-ghost/40 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full">
                Valore singoli: 52€
              </span>
            </div>

            <h2 className="font-heading font-700 text-2xl sm:text-3xl md:text-4xl tracking-tight mb-3">
              Il Metodo UseSkill
            </h2>
            <p className="text-ghost/60 text-base leading-relaxed mb-8 max-w-lg">
              Non è uno sconto sulle Skill singole. È un sistema completo: tutte le Skill più una guida che ti spiega come farle lavorare insieme. Dalla voce del brand al calendario editoriale, ogni pezzo si incastra con gli altri.
            </p>

            <div className="space-y-3 mb-10">
              {included.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={16} className="text-plasma mt-0.5 shrink-0" />
                  <span className="text-ghost/60 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div>
                <span className="font-heading font-800 text-4xl text-ghost">47€</span>
                <span className="text-ghost/30 text-sm ml-2">una tantum</span>
              </div>
              <a href="#"
                data-product="bundle-metodo"
                className="btn-magnetic bg-plasma text-void font-bold text-base px-8 py-4 rounded-full inline-flex items-center gap-3 shadow-lg shadow-plasma/25">
                <span className="btn-bg bg-plasma-glow rounded-full"></span>
                <Package size={18} className="relative z-10" />
                <span className="relative z-10">Prendi il bundle completo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   FAQ — Objection handling
   ═══════════════════════════════════════════ */
function FAQ() {
  const [open, setOpen] = useState(null)
  const items = [
    {
      q: 'Devo avere un abbonamento a Claude Pro o a qualche AI a pagamento?',
      a: 'No. Le Skill di UseSkill funzionano con i piani gratuiti di Claude, Google Antigravity e Manus. Se hai un piano a pagamento, funzionano ancora meglio, ma non è necessario per iniziare.'
    },
    {
      q: 'Devo saper programmare?',
      a: 'Assolutamente no. Una Skill è un file di testo. Lo scarichi, lo carichi nella tua AI, e sei operativo. Se sai usare copia-incolla, sai già tutto.'
    },
    {
      q: 'Funziona solo con Claude?',
      a: 'No. Le Skill usano uno standard aperto compatibile con Claude, Google Antigravity, Manus e qualsiasi agente AI che supporta il formato SKILL.md. Compri una volta, usi ovunque.'
    },
    {
      q: 'Quanto tempo ci vuole per installarla?',
      a: 'Due minuti la prima volta. La guida che ricevi con ogni Skill ti mostra esattamente dove incollare il file, passo per passo, con screenshot.'
    },
    {
      q: 'Ma l\'output è davvero in italiano naturale?',
      a: 'Sì, ed è il motivo per cui UseSkill esiste. Ogni Skill è progettata da una strategist italiana della comunicazione, non tradotta dall\'inglese. Il risultato sembra scritto da una persona madrelingua con esperienza nel settore.'
    },
    {
      q: 'Posso avere il rimborso?',
      a: 'Se la Skill non fa quello che promette, ti rimborso senza domande. Ma in tutta onestà, puoi provare gratis il Brand Voice Extractor prima di comprare qualsiasi cosa a pagamento.'
    },
  ]

  return (
    <section className="py-24 md:py-36">
      <div className="max-w-3xl mx-auto px-6">
        <span className="font-mono text-sm text-plasma tracking-wider uppercase block mb-6">
          Domande
        </span>
        <h2 className="font-heading font-700 text-3xl sm:text-4xl tracking-tight mb-12">
          Tutto quello che vuoi sapere
        </h2>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i}
              className="bg-void-light border border-ghost/8 rounded-2xl overflow-hidden transition-all duration-300 hover:border-ghost/15">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4">
                <span className="font-heading font-500 text-sm sm:text-base text-ghost/80">{item.q}</span>
                <ChevronRight size={16}
                  className={`text-ghost/30 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-90' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-400 ${open === i ? 'max-h-48 pb-5' : 'max-h-0'}`}>
                <p className="px-6 text-ghost/50 text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-graphite rounded-t-[3rem] sm:rounded-t-[4rem] py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="font-heading font-bold text-xl mb-3">
              Use<span className="text-plasma">Skill</span>
            </div>
            <p className="text-ghost/40 text-sm leading-relaxed">
              Skill professionali in italiano per far lavorare l'AI come il tuo miglior collaboratore.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-600 text-sm text-ghost/60 mb-4">Navigazione</h4>
            <div className="flex flex-col gap-2">
              <a href="#what" className="link-lift text-ghost/40 hover:text-ghost text-sm">Cos'è una Skill</a>
              <a href="#catalog" className="link-lift text-ghost/40 hover:text-ghost text-sm">Catalogo</a>
              <a href="#bundle" className="link-lift text-ghost/40 hover:text-ghost text-sm">Bundle</a>
              <a href="#freebie" className="link-lift text-ghost/40 hover:text-ghost text-sm">Skill gratuita</a>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-600 text-sm text-ghost/60 mb-4">Legale</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="link-lift text-ghost/40 hover:text-ghost text-sm">Privacy Policy</a>
              <a href="#" className="link-lift text-ghost/40 hover:text-ghost text-sm">Termini di servizio</a>
              <a href="#" className="link-lift text-ghost/40 hover:text-ghost text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>

        <div className="border-t border-ghost/8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-ghost/25 text-xs">© 2026 UseSkill. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />
            <span className="font-mono text-xs text-ghost/30">Operativo</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ═══════════════════════════════════════════
   APP
   ═══════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatIsASkill />
      <Features />
      <Philosophy />
      <Freebie />
      <Catalog />
      <Bundle />
      <FAQ />
      <Footer />
    </>
  )
}
