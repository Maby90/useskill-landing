import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useSearchParams } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Download, Zap, ChevronRight, ArrowDown, Check, Package, Sparkles, Menu, X } from 'lucide-react'
import './index.css'

gsap.registerPlugin(ScrollTrigger)

/* ═══════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Blocca scroll body quando menu aperto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const links = [
    { label: "Cos'è una Skill", href: '#what' },
    { label: 'Catalogo',        href: '#catalog' },
    { label: 'Plugin',          href: '#plugin', badge: 'Nuovo' },
    { label: 'Bundle',          href: '#bundle' },
  ]

  return (
    <>
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out
        ${scrolled
          ? 'bg-void/80 backdrop-blur-xl border border-ghost/10 shadow-lg shadow-plasma/5'
          : 'bg-transparent border border-transparent'
        } rounded-full px-4 sm:px-6 py-3 flex items-center gap-4 sm:gap-6 max-w-3xl w-[95%]`}>

        <a href="#" className="font-heading font-bold text-base sm:text-lg tracking-tight whitespace-nowrap shrink-0">
          <span className="text-ghost">Use</span>
          <span className="text-plasma">Skill</span>
          <span className="text-ghost">.it</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5 flex-1 justify-center">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className={`link-lift text-sm font-medium transition-colors flex items-center gap-1.5 ${scrolled ? 'text-ghost/70 hover:text-ghost' : 'text-ghost/60 hover:text-ghost'}`}>
              {l.label}
              {l.badge && (
                <span className="bg-plasma/20 text-plasma text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded-full leading-none">
                  {l.badge}
                </span>
              )}
            </a>
          ))}
        </div>

        <a href="#freebie"
          data-product="brand-voice-extractor"
          className="hidden md:inline-flex btn-magnetic bg-plasma text-void font-semibold text-sm px-5 py-2 rounded-full items-center gap-2 shrink-0">
          <span className="btn-bg bg-plasma-glow rounded-full" />
          <span className="relative z-10">Prova gratis</span>
        </a>

        {/* Burger mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-ghost ml-auto p-1 shrink-0"
          aria-label="Menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu — fullscreen overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-void/90 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />

        {/* Pannello */}
        <div className={`absolute inset-x-0 top-0 bg-void-light border-b border-ghost/10 transition-transform duration-400 ease-out ${mobileOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          {/* Header pannello */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-ghost/8">
            <a href="#" onClick={() => setMobileOpen(false)} className="font-heading font-bold text-lg">
              <span className="text-ghost">Use</span>
              <span className="text-plasma">Skill</span>
              <span className="text-ghost">.it</span>
            </a>
            <button onClick={() => setMobileOpen(false)} className="text-ghost/50 hover:text-ghost">
              <X size={22} />
            </button>
          </div>

          {/* Voci menu */}
          <div className="px-6 py-6 space-y-1">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-4 border-b border-ghost/6 group">
                <span className="text-ghost/80 group-hover:text-ghost font-medium text-lg transition-colors">
                  {l.label}
                </span>
                <div className="flex items-center gap-3">
                  {l.badge && (
                    <span className="bg-plasma/15 text-plasma text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full">
                      {l.badge}
                    </span>
                  )}
                  <ChevronRight size={16} className="text-ghost/20 group-hover:text-ghost/50 transition-colors" />
                </div>
              </a>
            ))}
          </div>

          {/* CTA mobile */}
          <div className="px-6 pb-8 pt-4 space-y-3">
            <a
              href="#freebie"
              onClick={() => setMobileOpen(false)}
              data-product="brand-voice-extractor"
              className="block bg-plasma text-void font-bold text-center py-4 rounded-2xl text-base">
              Prova gratis — Brand Voice Extractor
            </a>
            <a
              href="#catalog"
              onClick={() => setMobileOpen(false)}
              className="block border border-ghost/15 text-ghost/60 font-medium text-center py-4 rounded-2xl text-sm hover:border-ghost/30 hover:text-ghost transition-colors">
              Vedi il catalogo
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', {
        y: 50, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.3
      })
      gsap.from('.hero-cta', {
        y: 30, duration: 0.8, ease: 'power3.out', delay: 1
      })
      gsap.from('.hero-badge', {
        y: 20, duration: 0.7, ease: 'power3.out', delay: 1.3
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=80"
          alt="" className="w-full h-full object-cover opacity-30"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-void/30" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-plasma/8 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 md:pb-32 pt-32">
        <div className="hero-line inline-block mb-4">
          <span className="font-mono text-sm text-plasma/80 tracking-wider uppercase">
            Il primo store italiano di Skill per AI
          </span>
        </div>

        <h1 className="hero-line font-heading font-800 text-4xl sm:text-5xl md:text-7xl leading-[1.05] tracking-tight mb-2">
          Installi una Skill,
        </h1>
        <h1 className="hero-line font-drama italic text-5xl sm:text-7xl md:text-[6.5rem] leading-[0.95] text-plasma mb-8">
          la tua AI fa il resto.
        </h1>

        <p className="hero-line text-ghost/60 text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
          Post LinkedIn, newsletter, calendari editoriali, onboarding clienti. Ogni Skill trasforma la tua AI in uno specialista che produce output pronti da pubblicare in pochi minuti. Funziona su Claude, Antigravity e Manus, anche con i piani gratuiti.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 items-start">
          <a href="#freebie"
            data-product="brand-voice-extractor"
            className="btn-magnetic bg-plasma text-void font-bold text-base px-8 py-4 rounded-full inline-flex items-center gap-3 shadow-lg shadow-plasma/20">
            <span className="btn-bg bg-plasma-glow rounded-full"></span>
            <Download size={18} className="relative z-10" />
            <span className="relative z-10">Prova gratis il Brand Voice Extractor</span>
          </a>
          <a href="#what"
            className="link-lift text-ghost/50 hover:text-ghost font-medium text-sm inline-flex items-center gap-2 py-4">
            <ArrowDown size={16} />
            Vedi come funziona
          </a>
        </div>

        <div className="hero-badge flex flex-wrap gap-3 mt-10">
          {['Zero abbonamenti', 'Zero codice', 'Pronta in 2 minuti', 'Compri una volta, usi per sempre'].map(tag => (
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
   WHAT IS A SKILL
   ═══════════════════════════════════════════ */
function WhatIsASkill() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.what-title', {
        y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.what-title', start: 'top 85%' }
      })
      gsap.from('.what-text', {
        y: 30, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.what-text', start: 'top 85%' }
      })
      gsap.from('.what-step', {
        y: 30, duration: 0.6, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.what-steps', start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      icon: <Download size={24} />,
      num: '01',
      title: 'Scarica il file',
      desc: "Ogni Skill è un file .md. Lo scarichi e ce l'hai.",
    },
    {
      icon: <Zap size={24} />,
      num: '02',
      title: 'Caricalo nelle Skill della tua AI',
      desc: "Su Claude la trovi nella sezione Skill. Su Antigravity vai nella cartella del tuo agente. Su Manus carichi il file nel workspace. Due clic.",
    },
    {
      icon: <Sparkles size={24} />,
      num: '03',
      title: 'Chiedi quello che ti serve',
      desc: "Scrivi cosa ti serve e l'output esce già strutturato, nel formato giusto, pronto.",
    },
  ]

  return (
    <section id="what" ref={sectionRef} className="relative py-24 md:py-36">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-plasma/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="what-title font-mono text-sm text-plasma tracking-wider uppercase block mb-6">
            Per chi non ha mai sentito parlare di Skill
          </span>
          <h2 className="what-title font-heading font-700 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-8">
            La tua AI è potente. Ma senza istruzioni, improvvisa.
          </h2>
          <p className="what-text text-ghost/60 text-base sm:text-lg leading-relaxed mb-6">
            Quando chiedi alla tua AI di scriverti un post LinkedIn, lei parte da zero. O al massimo dal file di progetto che hai compilato una volta e non hai più aggiornato. Non sa cosa hai già pubblicato, non sa come parli, non sa che risultato ti aspetti. Il risultato è un testo generico che devi riscrivere da capo.
          </p>
          <p className="what-text text-ghost/60 text-base sm:text-lg leading-relaxed mb-6">
            Una Skill cambia le regole. È un file di istruzioni che carichi nella tua AI una sola volta. Da quel momento, lei sa esattamente che tipo di contenuto produci, che struttura funziona nel tuo settore, e che risultato ti aspetti. Ogni output esce già calibrato, pronto da pubblicare o da usare con modifiche minime.
          </p>
          <p className="what-text text-ghost/50 text-base leading-relaxed mb-12">
            Non serve saper programmare e non serve nessun abbonamento a pagamento. Funziona su Claude, Google Antigravity e Manus, anche con i piani gratuiti. Due minuti per installarla. Il tempo che risparmi si vede dal primo utilizzo.
          </p>
        </div>

        <div className="what-steps grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
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
   WHY SKILLS vs PROMPT vs PROJECT INSTRUCTIONS
   ═══════════════════════════════════════════ */
function WhySkills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const grid = sectionRef.current?.querySelector('.why-grid')
    if (!grid) return
    const cards = Array.from(grid.querySelectorAll('.why-card'))
    gsap.set(cards, { opacity: 0, y: 28 })
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        gsap.to(cards, { opacity: 1, y: 0, duration: 0.65, stagger: 0.13, ease: 'power3.out' })
        observer.disconnect()
      }
    }, { threshold: 0.05 })
    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  const items = [
    {
      label: 'Un prompt standard',
      icon: '↩',
      iconColor: 'text-ghost/25',
      highlight: false,
      title: 'Funziona una volta, poi ricominci da zero',
      desc: "Ogni sessione parte da zero. Riscrivi le istruzioni, le abbrevi, le dimentichi. L'output dipende da quanto hai spiegato bene in quel prompt, mai da come lavori tu e dagli output che produci per natura.",
      verdict: 'Nessuna memoria. Nessuna coerenza.',
      verdictColor: 'text-red-400/50',
    },
    {
      label: 'Istruzioni di progetto',
      icon: '≡',
      iconColor: 'text-ghost/35',
      highlight: false,
      title: 'Meglio di un prompt, ma senza architettura',
      desc: "Un blocco di testo scritto una volta, senza gerarchia né struttura. L'AI lo legge come può e lo interpreta liberamente. Il risultato cambia a seconda di come è formulata la richiesta.",
      verdict: 'Memoria presente, ma nessun controllo sul risultato.',
      verdictColor: 'text-amber-400/50',
    },
    {
      label: 'Skill UseSkill.it',
      icon: '◆',
      iconColor: 'text-plasma',
      highlight: true,
      title: 'Struttura testata, risultato replicabile',
      desc: "Ogni file ha un'architettura precisa: contesto operativo, regole di formato, gate di qualità, esempi di output attesi. L'AI sa esattamente cosa fare e come valutare il risultato. Ogni volta.",
      verdict: 'Testata su centinaia di output reali prima di essere pubblicata.',
      verdictColor: 'text-plasma/70',
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <span className="font-mono text-sm text-plasma tracking-wider uppercase block mb-6">
          Skill vs prompt
        </span>
        <h2 className="font-heading font-700 text-3xl sm:text-4xl tracking-tight mb-4 max-w-xl">
          Non tutti i file .md sono uguali.
        </h2>
        <p className="text-ghost/50 text-base mb-16 max-w-lg">
          Qualsiasi testo può diventare un'istruzione per la tua AI. La differenza sta in come è progettato quel testo, e su quanti output reali è stato testato prima di essere qui disponibile per te.
        </p>

        <div className="why-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className={`why-card border rounded-[2rem] p-8 flex flex-col transition-all duration-500 ${
              item.highlight
                ? 'bg-void-light border-plasma/30 shadow-lg shadow-plasma/8'
                : 'bg-void-light border-ghost/8'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <span className={`font-mono text-xl leading-none ${item.iconColor}`}>{item.icon}</span>
                <span className="font-mono text-[10px] text-ghost/30 uppercase tracking-widest">{item.label}</span>
              </div>
              <h3 className={`font-heading font-600 text-base mb-3 ${item.highlight ? 'text-ghost' : 'text-ghost/70'}`}>
                {item.title}
              </h3>
              <p className="text-ghost/45 text-sm leading-relaxed flex-1 mb-6">{item.desc}</p>
              <div className={`font-mono text-xs pt-5 border-t border-ghost/8 leading-relaxed ${item.verdictColor}`}>
                {item.verdict}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-void-light border border-ghost/8 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-plasma shrink-0 pulse-dot mt-1 sm:mt-0" />
          <p className="text-ghost/40 text-sm leading-relaxed">
            Prima di pubblicare una Skill, la testiamo su scenari reali: obiettivi diversi, settori diversi, livelli di esperienza diversi. Se l'output non è pronto da usare, la Skill non esce.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   BEFORE / AFTER
   ═══════════════════════════════════════════ */
function BeforeAfter() {
  const [active, setActive] = useState('before')
  const cardRef = useRef(null)
  const sectionRef = useRef(null)
  const animating = useRef(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ba-header', {
        y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.ba-header', start: 'top 85%' }
      })
      gsap.from('.ba-card', {
        y: 30, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.ba-card', start: 'top 85%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const data = {
    before: {
      badge: 'Senza Skill',
      badgeStyle: 'bg-ghost/8 text-ghost/35',
      label: 'AI standard, nessuna istruzione specifica',
      prompt: '"Scrivimi un post LinkedIn sulla produttività"',
      lines: [
        { text: 'La produttività è fondamentale nel mondo del lavoro moderno.', bad: true },
        { text: "È importante sottolineare che per essere più produttivi bisogna organizzare il proprio tempo in modo efficace.", bad: true },
        { text: 'Utilizza strumenti come calendari digitali e to-do list per gestire le tue attività.', bad: false },
        { text: "In definitiva, la chiave del successo è trovare un equilibrio sano tra lavoro e vita privata.", bad: true },
        { text: "Qual è la tua tecnica di produttività preferita? Condividi nei commenti! 👇", bad: false },
      ],
      footer: null,
    },
    after: {
      badge: 'Con LinkedIn Post Writer Calibrato',
      badgeStyle: 'bg-plasma/15 text-plasma',
      label: 'Stessa richiesta, Skill attiva',
      prompt: '"Scrivimi un post LinkedIn sulla produttività"',
      lines: [
        { text: "Nel 2023 ho fatturato meno dell'anno prima lavorando 20 ore in più a settimana.", bad: false },
        { text: "Ho tenuto un log di ogni attività per 90 giorni: cosa facevo, quando, e quanto valeva in termini di risultati concreti. I numeri erano fastidiosi da guardare. L'87% del fatturato era arrivato da decisioni prese nelle prime due ore del mattino. Riunioni, revisioni, email: tutto il resto era gestione di cose che qualcun altro avrebbe potuto fare.", bad: false },
        { text: "Da gennaio lavoro 32 ore a settimana invece di 52. Le prime due ore di ogni giornata sono blindate: niente email, niente call, niente Slack. Solo il lavoro che sposta l'ago. Nel primo semestre di quest'anno ho chiuso +43% rispetto allo stesso periodo del 2023.", bad: false },
        { text: "Tre mesi di log, un foglio di calcolo e una regola rigida: le prime due ore di ogni giornata appartengono al lavoro che produce. Il resto ha imparato ad aspettare.", bad: false },
      ],
      footer: 'Output generato in 41 secondi',
    },
  }

  const toggle = (side) => {
    if (side === active || animating.current) return
    animating.current = true
    gsap.to(cardRef.current, {
      opacity: 0, y: 10, duration: 0.22, ease: 'power2.in',
      onComplete: () => {
        setActive(side)
        gsap.fromTo(cardRef.current,
          { opacity: 0, y: -10 },
          {
            opacity: 1, y: 0, duration: 0.35, ease: 'power3.out',
            onComplete: () => { animating.current = false }
          }
        )
      }
    })
  }

  const current = data[active]

  return (
    <section ref={sectionRef} id="before-after" className="py-24 md:py-36 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">

        <div className="ba-header mb-12">
          <span className="font-mono text-sm text-plasma tracking-wider uppercase block mb-6">
            Prima e dopo
          </span>
          <h2 className="font-heading font-700 text-3xl sm:text-4xl tracking-tight mb-4">
            La differenza si vede al primo output.
          </h2>
          <p className="text-ghost/50 text-base max-w-lg">
            Stessa richiesta, stessa IA, stessa mattina. Quello che cambia è che la Skill sa già chi sei, come scrivi, e che risultato ti aspetti.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center gap-2 mb-8 bg-void-light border border-ghost/10 rounded-full p-1.5 w-fit">
          <button
            onClick={() => toggle('before')}
            className={`font-mono text-xs px-5 py-2.5 rounded-full transition-all duration-300 ${
              active === 'before'
                ? 'bg-ghost/10 text-ghost'
                : 'text-ghost/30 hover:text-ghost/60'
            }`}>
            Senza Skill
          </button>
          <button
            onClick={() => toggle('after')}
            className={`font-mono text-xs px-5 py-2.5 rounded-full transition-all duration-300 ${
              active === 'after'
                ? 'bg-plasma text-void font-semibold shadow-md shadow-plasma/25'
                : 'text-ghost/30 hover:text-ghost/60'
            }`}>
            Con Skill
          </button>
        </div>

        {/* Card */}
        <div ref={cardRef} className={`ba-card border rounded-[2rem] p-8 sm:p-10 transition-colors duration-500 ${
          active === 'after'
            ? 'bg-void-light border-plasma/30 shadow-xl shadow-plasma/8'
            : 'bg-void-light border-ghost/8'
        }`}>
          {/* Header */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full ${current.badgeStyle}`}>
              {current.badge}
            </span>
            <span className="font-mono text-[10px] text-ghost/25">{current.label}</span>
          </div>

          {/* Prompt echo */}
          <div className="bg-ghost/5 border border-ghost/8 rounded-xl px-5 py-3 mb-8 font-mono text-xs text-ghost/35 flex items-center gap-3">
            <span className="text-ghost/20">↩</span>
            {current.prompt}
          </div>

          {/* Output lines */}
          <div className="space-y-4">
            {current.lines.map((line, i) => (
              <p key={`${active}-${i}`} className={`text-sm leading-relaxed transition-all duration-300 ${
                line.bad
                  ? 'text-ghost/25 line-through decoration-red-400/30 decoration-1'
                  : active === 'after' ? 'text-ghost/80' : 'text-ghost/55'
              }`}>
                {line.text}
              </p>
            ))}
          </div>

          {/* Footer / timer */}
          {current.footer && (
            <div className="mt-8 pt-6 border-t border-ghost/8 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />
              <span className="font-mono text-xs text-ghost/35">{current.footer}</span>
            </div>
          )}

          {/* Bad output disclaimer */}
          {active === 'before' && (
            <div className="mt-8 pt-6 border-t border-ghost/8 flex items-start gap-3">
              <span className="text-ghost/20 font-mono text-xs mt-0.5">✕</span>
              <span className="font-mono text-xs text-ghost/25">Testo reale, generato senza istruzioni. Le frasi barrate sono i pattern AI più comuni: vaghi, generici, pubblicabili ma dimenticabili.</span>
            </div>
          )}
        </div>

        {/* Nudge */}
        <div className="mt-6 text-center">
          <p className="text-ghost/30 text-xs font-mono">
            {active === 'before'
              ? 'Clicca "Con Skill" per vedere cosa cambia →'
              : 'Vuoi lo stesso risultato? Inizia gratis dal Brand Voice Extractor.'}
          </p>
          {active === 'after' && (
            <a href="#freebie"
              data-product="brand-voice-extractor"
              className="inline-block mt-4 bg-plasma/10 hover:bg-plasma/20 text-plasma font-mono text-xs px-6 py-2.5 rounded-full border border-plasma/20 transition-colors">
              Prova gratis il Brand Voice Extractor
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   FEATURES — Interactive cards
   ═══════════════════════════════════════════ */
function DiagnosticShuffler() {
  const [active, setActive] = useState(0)
  const items = [
    { label: 'Nessun abbonamento richiesto', style: 'bg-plasma/12 text-plasma border-plasma/20' },
    { label: 'Funziona con il piano gratuito', style: 'bg-emerald-500/12 text-emerald-400 border-emerald-500/20' },
    { label: 'Compatibile con ogni agente AI', style: 'bg-amber-500/12 text-amber-400 border-amber-500/20' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % items.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl border font-medium text-sm transition-all duration-500 ${
            i === active
              ? item.style + ' opacity-100'
              : 'bg-ghost/3 border-ghost/6 text-ghost/25 opacity-60'
          }`}>
          <Check size={14} className={i === active ? 'shrink-0' : 'opacity-0 shrink-0'} />
          {item.label}
        </div>
      ))}
    </div>
  )
}

function TelemetryTypewriter() {
  const [text, setText] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const lines = [
    'Hook generato → "Quello che nessuno ti dice sui contenuti B2B"',
    'Struttura applicata → intro / sviluppo / CTA',
    'Tono calibrato → diretto, settoriale, zero fronzoli',
    'Output pronto → copia, incolla, pubblica',
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
    <div className="bg-void rounded-xl p-4 border border-ghost/5 min-h-[80px]">
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

function wait(ms) {
  return new Promise(r => setTimeout(r, ms))
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
    <div className="relative min-h-[80px]">
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
      <svg className="absolute pointer-events-none transition-all duration-300 ease-out"
        style={{ left: cursorPos.x, top: cursorPos.y, opacity: cursorPos.visible ? 1 : 0 }}
        width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M5 3l14 8-6 2-4 6-4-16z" fill="#7B61FF" stroke="#0A0A14" strokeWidth="1" />
      </svg>
    </div>
  )
}

function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 40, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.features-grid', start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <span className="font-mono text-sm text-plasma tracking-wider uppercase block mb-6">
          Perché funziona
        </span>
        <h2 className="font-heading font-700 text-3xl sm:text-4xl tracking-tight mb-16 max-w-lg">
          Tre cose che cambiano tutto
        </h2>

        <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="feature-card bg-void-light border border-ghost/8 rounded-[2rem] p-8 hover:border-plasma/20 transition-all duration-500 min-h-[320px] flex flex-col">
            <h3 className="font-heading font-600 text-lg mb-2">Funziona con l'AI che già usi, gratis</h3>
            <p className="text-ghost/50 text-sm leading-relaxed mb-6">
              Non devi cambiare strumento e non devi pagare nessun abbonamento. Le Skill di UseSkill.it funzionano su Claude free, Google Antigravity e Manus. Scarichi il file, lo carichi, e in due minuti la tua AI lavora come non ha mai fatto prima.
            </p>
            <div className="mt-auto">
              <DiagnosticShuffler />
            </div>
          </div>

          <div className="feature-card bg-void-light border border-ghost/8 rounded-[2rem] p-8 hover:border-plasma/20 transition-all duration-500 min-h-[320px] flex flex-col">
            <h3 className="font-heading font-600 text-lg mb-2">Output pronti, non bozze da riscrivere</h3>
            <p className="text-ghost/50 text-sm leading-relaxed mb-6">
              Ogni Skill è costruita per produrre risultati che puoi usare subito. Il post LinkedIn esce con l'hook, il corpo e la chiusura. La newsletter esce con l'oggetto, l'apertura e la CTA. Non devi riscrivere niente: al massimo aggiusti un dettaglio.
            </p>
            <div className="mt-auto">
              <TelemetryTypewriter />
            </div>
          </div>

          <div className="feature-card bg-void-light border border-ghost/8 rounded-[2rem] p-8 hover:border-plasma/20 transition-all duration-500 min-h-[320px] flex flex-col">
            <h3 className="font-heading font-600 text-lg mb-2">Ore di lavoro compresse in minuti</h3>
            <p className="text-ghost/50 text-sm leading-relaxed mb-6">
              Un calendario editoriale di 30 giorni in 3 minuti. Un questionario di onboarding in 2. Un post LinkedIn in 40 secondi. Le Skill non sono scorciatoie: sono il flusso di lavoro che avresti costruito tu, già pronto e testato.
            </p>
            <div className="mt-auto">
              <CursorScheduler />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   PHILOSOPHY
   ═══════════════════════════════════════════ */
function Philosophy() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.philo-small', {
        y: 30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.philo-small', start: 'top 85%' }
      })
      gsap.from('.philo-big', {
        y: 40, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.philo-big', start: 'top 85%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-graphite" />
      <div className="absolute inset-0 opacity-25">
        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80"
          alt="" loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-graphite/70 via-graphite/30 to-graphite/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="philo-small text-ghost/40 text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed">
          Tutti usano l'AI. Quasi nessuno ottiene output che pubblicherebbe così come escono.
        </p>
        <p className="philo-big font-drama italic text-3xl sm:text-5xl md:text-6xl leading-tight">
          UseSkill.it è il <span className="text-plasma">metodo</span> che mancava.
        </p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   FREEBIE
   ═══════════════════════════════════════════ */
function Freebie() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.freebie-content', {
        y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.freebie-content', start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="freebie" ref={sectionRef} className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="freebie-content relative bg-gradient-to-br from-plasma/10 via-void-light to-void-light border border-plasma/20 rounded-[2.5rem] p-8 sm:p-12 md:p-16 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-plasma/10 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-xl">
            <span className="inline-block bg-plasma/15 text-plasma font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Gratis, per sempre
            </span>
            <h2 className="font-heading font-700 text-2xl sm:text-3xl md:text-4xl tracking-tight mb-4">
              Brand Voice Extractor
            </h2>
            <p className="text-ghost/60 text-base leading-relaxed mb-4">
              Incolli 3 o più testi che hai scritto tu. La Skill li analizza e genera una Guida Completa del tuo Tono di Voce: profilo stilistico, vocabolario ricorrente, personalità comunicativa e un prompt system pronto da incollare in qualsiasi AI.
            </p>
            <p className="text-ghost/40 text-sm leading-relaxed mb-8">
              È il punto di partenza perfetto. Una volta che la tua AI ha la tua voce, ogni altra Skill di UseSkill.it produce risultati ancora più precisi. Per questo la regaliamo: chi la prova capisce subito la differenza.
            </p>

            <a href="https://useskill.lemonsqueezy.com/checkout/buy/ae99b008-7732-473f-84e6-22abffa6e332?embed=1"
              data-product="brand-voice-extractor"
              onClick={() => { if (typeof fbq !== 'undefined') fbq('track', 'Lead', { content_name: 'Brand Voice Extractor', currency: 'EUR', value: 0 }) }}
              className="lemonsqueezy-button btn-magnetic bg-plasma text-void font-bold text-base px-8 py-4 rounded-full inline-flex items-center gap-3 shadow-lg shadow-plasma/20">
              <span className="btn-bg bg-plasma-glow rounded-full"></span>
              <Download size={18} className="relative z-10" />
              <span className="relative z-10">Scarica gratis il Brand Voice Extractor</span>
            </a>

            <p className="text-ghost/30 text-xs mt-4">
              Ricevi il file via email. Zero spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   CATALOG CARD (shared)
   ═══════════════════════════════════════════ */
function CatalogCard({ s }) {
  return (
    <div className="catalog-card group bg-void-light border border-ghost/8 rounded-[2rem] p-7 flex flex-col hover:border-plasma/20 transition-all duration-500">
      <div className="h-6 mb-4">
        {s.tag && (
          <span className="inline-block bg-plasma/15 text-plasma font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
            {s.tag}
          </span>
        )}
      </div>
      <h3 className="font-heading font-600 text-base mb-2">{s.name}</h3>
      <p className="text-ghost/45 text-sm leading-relaxed flex-1 mb-6">{s.desc}</p>
      <div className="flex items-center justify-between">
        <span className="font-heading font-700 text-xl text-ghost">{s.price}</span>
        <a href={s.url}
          data-product={s.product}
          onClick={() => {
            localStorage.setItem('ls_last_product', s.product)
            if (typeof fbq !== 'undefined') {
              fbq('track', 'InitiateCheckout', {
                content_name: s.name,
                content_ids: [s.product],
                content_type: 'product',
                value: parseFloat(s.price),
                currency: 'EUR',
              })
            }
          }}
          className="lemonsqueezy-button btn-magnetic bg-ghost/5 hover:bg-plasma/15 text-ghost text-sm font-medium px-5 py-2.5 rounded-full inline-flex items-center gap-2 border border-ghost/10 hover:border-plasma/20 transition-colors">
          <span className="relative z-10 flex items-center gap-2">
            Acquista <ChevronRight size={14} />
          </span>
        </a>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   CATALOG
   ═══════════════════════════════════════════ */
function Catalog() {
  const sectionRef = useRef(null)
  const skills = [
    {
      name: 'LinkedIn Post Writer Calibrato',
      product: 'linkedin-post-writer',
      price: '9€',
      url: 'https://useskill.lemonsqueezy.com/checkout/buy/cb0f3af8-c9c2-4d2d-9daf-e8faa95022c0?embed=1',
      desc: "Gli dai un'idea, anche vaga. La Skill costruisce un post LinkedIn completo con l'hook che ferma lo scroll, il corpo che tiene l'attenzione e la chiusura che genera interazione. Il tempo che ci metti tu: descrivere il concetto in una riga. Il tempo che ci mette la Skill: 40 secondi.",
      tag: 'Più venduta',
    },
    {
      name: 'Newsletter Generator IT',
      product: 'newsletter-generator',
      price: '12€',
      url: 'https://useskill.lemonsqueezy.com/checkout/buy/680c9fe0-a874-48f7-8e38-fc7902d47027?embed=1',
      desc: "Parti dai tuoi appunti o dai punti chiave della settimana. La Skill genera una newsletter completa con oggetto, apertura, corpo strutturato e un invito all'azione chiaro. Quello che prima richiedeva un'ora di scrittura diventa un lavoro da 5 minuti.",
    },
    {
      name: 'Instagram Carousel Script',
      product: 'instagram-carousel',
      price: '9€',
      url: 'https://useskill.lemonsqueezy.com/checkout/buy/da4b1375-d3a7-4edc-b775-252a9e4b8e88?embed=1',
      desc: "Un concetto diventa dieci slide. Ogni slide ha il numero giusto di parole per essere leggibile su mobile, un hook iniziale che ferma il pollice e una chiusura con call to action. Tu pensi al contenuto, la Skill pensa a tutto il resto.",
    },
    {
      name: 'Content Calendar Builder',
      product: 'content-calendar',
      price: '15€',
      url: 'https://useskill.lemonsqueezy.com/checkout/buy/8a9dfa95-6d1e-4010-840d-953a900fff47?embed=1',
      desc: "Dai tuoi obiettivi e il tuo settore, la Skill genera 30 giorni di contenuti con idee concrete, angoli diversi e formati alternati. Niente suggerimenti generici che leggi e pensi 'questo non lo pubblicherei mai'. Solo idee che useresti davvero.",
    },
    {
      name: 'Client Onboarding Interview',
      product: 'client-onboarding',
      price: '7€',
      url: 'https://useskill.lemonsqueezy.com/checkout/buy/7e8d750a-0dbd-404c-bcdd-3cd168eb480a?embed=1',
      desc: "Genera un questionario di onboarding personalizzato per il tuo settore. Le domande sono quelle che ti servono per capire il cliente prima della prima call. Il risultato è un documento professionale che puoi mandare così com'è.",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.catalog-card', {
        y: 30, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.catalog-grid', start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="catalog" ref={sectionRef} className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <span className="font-mono text-sm text-plasma tracking-wider uppercase block mb-6">
          Catalogo
        </span>
        <h2 className="font-heading font-700 text-3xl sm:text-4xl tracking-tight mb-4 max-w-lg">
          Skill pronte all'uso
        </h2>
        <p className="text-ghost/50 text-base mb-16 max-w-lg">
          Ogni Skill è stata testata su decine di output reali prima di essere pubblicata. Compri una volta, usi per sempre, su tutte le AI compatibili.
        </p>

        {/* Riga 1: 3 card */}
        <div className="catalog-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {skills.slice(0, 3).map((s, i) => (
            <CatalogCard key={i} s={s} />
          ))}
        </div>
        {/* Riga 2: 2 card centrate */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[calc(66.666%+12px)] mx-auto">
          {skills.slice(3).map((s, i) => (
            <CatalogCard key={i+3} s={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   BUNDLE
   ═══════════════════════════════════════════ */
function Bundle() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.bundle-box', {
        y: 40, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.bundle-box', start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const included = [
    'Brand Voice Extractor (valore 0€, incluso)',
    'LinkedIn Post Writer Calibrato (valore 9€)',
    'Newsletter Generator IT (valore 12€)',
    'Instagram Carousel Script (valore 9€)',
    'Content Calendar Builder (valore 15€)',
    'Client Onboarding Interview (valore 7€)',
    'Guida "Il Metodo UseSkill.it": come usare tutte le Skill insieme come sistema',
  ]

  return (
    <section id="bundle" ref={sectionRef} className="py-24 md:py-36">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bundle-box relative bg-void-light border-2 border-plasma/30 rounded-[2.5rem] p-8 sm:p-12 overflow-hidden">
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
              Il Metodo UseSkill.it
            </h2>
            <p className="text-ghost/60 text-base leading-relaxed mb-8 max-w-lg">
              Questo non è uno sconto sulle Skill singole. È un sistema completo per gestire tutta la tua comunicazione con l'AI. Dentro c'è ogni Skill del catalogo più una guida che spiega come farle lavorare insieme: parti dalla voce del brand, costruisci il calendario editoriale, produci i contenuti, gestisci l'onboarding. Ogni pezzo si incastra con il successivo. Il risultato è un flusso di lavoro dove l'AI produce contenuti che pubblichi, non bozze che riscrivi.
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
              <a href="https://useskill.lemonsqueezy.com/checkout/buy/1c7f4347-0a49-4539-8bec-3f105a627799?embed=1"
                data-product="bundle-metodo"
                onClick={() => { localStorage.setItem('ls_last_product', 'bundle-metodo'); if (typeof fbq !== 'undefined') fbq('track', 'InitiateCheckout', { content_name: 'Bundle Il Metodo UseSkill.it', content_ids: ['bundle-metodo'], content_type: 'product', value: 47, currency: 'EUR' }) }}
                className="lemonsqueezy-button btn-magnetic bg-plasma text-void font-bold text-base px-8 py-4 rounded-full inline-flex items-center gap-3 shadow-lg shadow-plasma/25">
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
   FAQ
   ═══════════════════════════════════════════ */
function FAQ() {
  const [open, setOpen] = useState(null)
  const items = [
    {
      q: 'Devo avere un abbonamento a pagamento?',
      a: 'No. Le Skill funzionano con Claude free, Google Antigravity e Manus free tier. Con un piano a pagamento funzionano ancora meglio, ma non è necessario.'
    },
    {
      q: 'Devo saper programmare?',
      a: 'No. Una Skill è un file. Lo scarichi, lo installi nella tua AI, e funziona.'
    },
    {
      q: 'Funziona solo con Claude?',
      a: 'No. Le Skill usano un formato standard aperto compatibile con Claude, Google Antigravity, Manus e qualsiasi agente AI che supporta lo standard SKILL.md. Compri una volta, usi ovunque.'
    },
    {
      q: 'Quanto tempo ci vuole per installarla?',
      a: 'Due minuti. Con ogni Skill ricevi una guida passo-passo con screenshot.'
    },
    {
      q: 'Come faccio a sapere se fa per me?',
      a: 'Scarica gratis il Brand Voice Extractor e provalo. Se il risultato ti convince, sai già cosa aspettarti dalle Skill a pagamento.'
    },
  ]

  return (
    <section className="py-24 md:py-36">
      <div className="max-w-3xl mx-auto px-6">
        <span className="font-mono text-sm text-plasma tracking-wider uppercase block mb-6">
          Domande
        </span>
        <h2 className="font-heading font-700 text-3xl sm:text-4xl tracking-tight mb-12">
          Tutto quello che devi sapere
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
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="font-heading font-bold text-xl mb-3">
              Use<span className="text-plasma">Skill</span>.it
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
              <a href="/privacy" className="link-lift text-ghost/40 hover:text-ghost text-sm">Privacy Policy</a>
              <a href="/termini" className="link-lift text-ghost/40 hover:text-ghost text-sm">Termini di servizio</a>
              <a href="/cookie" className="link-lift text-ghost/40 hover:text-ghost text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>

        <div className="border-t border-ghost/8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-ghost/25 text-xs">© 2026 UseSkill.it. Tutti i diritti riservati.</p>
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
   METRICHE
   ═══════════════════════════════════════════ */
function MetricBar({ label, before, after, unit = '' }) {
  const max = Math.max(before, after)
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-ghost/50 text-xs font-mono uppercase tracking-wider">{label}</span>
        <div className="flex items-center gap-3 text-sm font-mono">
          <span className="text-ghost/30 line-through">{before.toLocaleString('it-IT')}{unit}</span>
          <span className="text-plasma font-bold">{after.toLocaleString('it-IT')}{unit}</span>
        </div>
      </div>
      <div className="relative h-1.5 bg-ghost/8 rounded-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-ghost/15 rounded-full metric-bar-before"
          style={{ width: `${(before / max) * 100}%` }} />
        <div className="absolute inset-y-0 left-0 bg-plasma rounded-full metric-bar-after shadow-[0_0_6px_rgba(123,97,255,0.6)]"
          style={{ width: `${(after / max) * 100}%` }} />
      </div>
    </div>
  )
}

function Metriche() {
  const [tab, setTab] = useState('instagram')
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('metric-visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const data = {
    instagram: {
      label: 'Instagram Carousel',
      tag: 'Media account 8k follower · dati reali',
      metrics: [
        { label: 'Impressioni',      before: 340,  after: 2180 },
        { label: 'Reach',            before: 290,  after: 1740 },
        { label: 'Salvataggi',       before: 4,    after: 89   },
        { label: 'Engagement rate',  before: 2.1,  after: 7.8,  unit: '%' },
        { label: 'Condivisioni',     before: 1,    after: 34   },
      ],
      note: 'Stesso account. Stessa nicchia. Stesso giorno della settimana. Solo la Skill è cambiata.',
    },
    linkedin: {
      label: 'LinkedIn Post',
      tag: 'Profilo consulente B2B · dati reali',
      metrics: [
        { label: 'Visualizzazioni',  before: 310,  after: 3640 },
        { label: 'Reazioni',         before: 6,    after: 87   },
        { label: 'Commenti',         before: 0,    after: 14   },
        { label: 'Condivisioni',     before: 1,    after: 9    },
        { label: 'Click profilo',    before: 3,    after: 41   },
      ],
      note: 'Stesso argomento pubblicato due volte: una con un prompt generico, una con la Skill LinkedIn.',
    },
  }

  const current = data[tab]

  return (
    <section ref={sectionRef} className="py-24 md:py-36 metric-section">
      <div className="max-w-4xl mx-auto px-6">
        <span className="font-mono text-sm text-plasma tracking-wider uppercase block mb-6">
          Risultati
        </span>
        <h2 className="font-heading font-700 text-3xl sm:text-4xl tracking-tight mb-4">
          I numeri prima e dopo.
        </h2>
        <p className="text-ghost/50 text-base leading-relaxed mb-10 max-w-xl">
          Non benchmark di settore. Non simulazioni. Dati estratti da account reali dopo aver sostituito il prompt con una Skill UseSkill.it.
        </p>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-10 p-1 bg-void-light border border-ghost/8 rounded-2xl w-fit">
          {[
            { key: 'instagram', label: 'Instagram' },
            { key: 'linkedin',  label: 'LinkedIn'  },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                tab === key
                  ? 'bg-plasma text-void font-bold shadow-lg shadow-plasma/20'
                  : 'text-ghost/40 hover:text-ghost/70'
              }`}>
              {label}
            </button>
          ))}
        </div>

        {/* Card metriche */}
        <div className="bg-void-light border border-ghost/10 rounded-[2rem] p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div>
              <h3 className="font-heading font-700 text-lg text-ghost">{current.label}</h3>
              <span className="font-mono text-xs text-ghost/30 mt-1 block">{current.tag}</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-ghost/20 inline-block" />
                <span className="text-ghost/30">Prima</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-plasma inline-block shadow-[0_0_6px_rgba(123,97,255,0.7)]" />
                <span className="text-plasma">Con Skill</span>
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {current.metrics.map((m, i) => (
              <MetricBar key={`${tab}-${i}`} {...m} />
            ))}
          </div>

          <p className="mt-8 pt-6 border-t border-ghost/8 text-ghost/35 text-xs leading-relaxed font-mono">
            {current.note}
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   RECENSIONI
   ═══════════════════════════════════════════ */
function Recensioni() {
  const sectionRef = useRef(null)

  const reviews = [
    {
      name: 'Francesca M.',
      role: 'Consulente marketing, Milano',
      initials: 'FM',
      text: 'Riscrivevo quasi tutto quello che mi usciva da Claude. Adesso no. Il LinkedIn Post Writer esce già con il mio tono, quello vero, non la versione generica che sembra uguale a tutti. Ci ho messo due settimane a rendermi conto che non stavo più correggendo niente.',
      skill: 'LinkedIn Post Writer Calibrato',
    },
    {
      name: 'Davide R.',
      role: 'Copywriter freelance, Roma',
      initials: 'DR',
      text: 'Ho passato ore a costruire la project instruction perfetta. Funzionava qualche settimana, poi Claude si dimenticava tutto tra una sessione e l\'altra. Con la Skill non succede. Parte sempre da dove hai lasciato tu.',
      skill: 'Brand Voice Extractor',
    },
    {
      name: 'Alessia T.',
      role: 'Founder studio design, Torino',
      initials: 'AT',
      text: 'Ho chiuso il calendario di aprile in quaranta minuti. Prima ci stavo una mattinata intera, a volte di più. E alla fine lo guardavo e pensavo che metà delle idee non le avrei mai usate. Adesso le uso quasi tutte.',
      skill: 'Content Calendar Builder',
    },
    {
      name: 'Marco B.',
      role: 'Imprenditore, Napoli',
      initials: 'MB',
      text: 'Pensavo servisse capire bene come funziona l\'AI per ottenere qualcosa di decente. Invece no. Carichi la Skill, apri Claude, e lui sa già come comunichi. Non devi spiegare niente.',
      skill: 'Brand Voice Extractor',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.review-card', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.reviews-grid',
          start: 'top 80%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <span className="font-mono text-sm text-plasma tracking-wider uppercase block mb-6">
          Feedback
        </span>
        <h2 className="font-heading font-700 text-3xl sm:text-4xl tracking-tight mb-4">
          Chi le usa, le tiene.
        </h2>
        <p className="text-ghost/50 text-base leading-relaxed mb-12 max-w-xl">
          Nessun testimonial costruito a tavolino. Solo persone che hanno smesso di riscrivere gli output della loro AI.
        </p>

        <div className="reviews-grid grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="review-card bg-void-light border border-ghost/8 rounded-3xl p-7 flex flex-col gap-5 hover:border-ghost/15 transition-colors duration-300">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-3.5 h-3.5 text-plasma" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testo */}
              <p className="text-ghost/70 text-sm leading-relaxed flex-1">
                "{r.text}"
              </p>

              {/* Footer card */}
              <div className="flex items-center justify-between pt-4 border-t border-ghost/8">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-plasma/15 border border-plasma/20 flex items-center justify-center">
                    <span className="text-plasma text-xs font-bold font-mono">{r.initials}</span>
                  </div>
                  <div>
                    <div className="text-ghost/80 text-sm font-medium">{r.name}</div>
                    <div className="text-ghost/35 text-xs">{r.role}</div>
                  </div>
                </div>
                <span className="font-mono text-xs text-ghost/25 bg-ghost/5 px-3 py-1 rounded-full hidden sm:block">
                  {r.skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   COMING SOON
   ═══════════════════════════════════════════ */
function ComingSoon() {
  const [email, setEmail] = useState('')
  const [privacy, setPrivacy] = useState(false)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const upcoming = [
    { name: 'Meta ADV Copy Generator',    cat: 'Advertising',  desc: 'Inserzioni Facebook e Instagram scritte per convertire, non per sembrare belle.' },
    { name: 'Google Ads Script',          cat: 'Advertising',  desc: 'Annunci di ricerca con titoli, descrizioni e callout ottimizzati per il tuo settore.' },
    { name: 'E-commerce Product Writer',  cat: 'E-commerce',   desc: 'Schede prodotto che rispondono alle obiezioni prima che il cliente le formuli.' },
    { name: 'Email Sales Sequence',       cat: 'Email',        desc: 'Sequenza di benvenuto, nurture e conversione pronta da caricare nel tuo ESP.' },
    { name: 'YouTube Script Builder',     cat: 'Video',        desc: 'Script con hook, struttura narrativa e CTA finale. Funziona per tutorial e storytelling.' },
    { name: 'Personal Brand Bio',         cat: 'Branding',     desc: 'Bio professionale declinata per LinkedIn, Instagram, sito e speaker kit. Una sessione, quattro versioni.' },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!privacy || !email.includes('@')) return
    setStatus('loading')
    try {
      const r = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (r.ok) {
        setStatus('success')
        if (typeof fbq !== 'undefined') fbq('track', 'Lead', { content_name: 'coming-soon-newsletter' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-24 md:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-sm text-plasma tracking-wider uppercase block mb-6">
              In sviluppo
            </span>
            <h2 className="font-heading font-700 text-3xl sm:text-4xl tracking-tight mb-4">
              Le prossime Skill.
            </h2>
            <p className="text-ghost/50 text-base leading-relaxed max-w-lg">
              Nessuna Skill viene pubblicata prima di centinaia di test su output reali. Quello che vedi qui è in lavorazione. Quando è pronta, la trovi nel catalogo.
            </p>
          </div>
          <div className="shrink-0">
            <span className="font-mono text-xs text-ghost/25 bg-ghost/5 border border-ghost/8 px-4 py-2 rounded-full">
              {upcoming.length} skill in sviluppo
            </span>
          </div>
        </div>

        {/* Grid skill coming soon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {upcoming.map((s, i) => (
            <div key={i}
              className="relative bg-void-light border border-ghost/8 rounded-2xl p-6 overflow-hidden group hover:border-ghost/15 transition-colors duration-300">

              {/* Overlay "In arrivo" */}
              <div className="absolute inset-0 bg-void/60 backdrop-blur-[1px] rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <span className="font-mono text-xs text-plasma tracking-widest uppercase border border-plasma/30 bg-plasma/10 px-4 py-2 rounded-full">
                  In arrivo
                </span>
              </div>

              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="font-mono text-xs text-ghost/30 bg-ghost/5 px-2.5 py-1 rounded-full">
                  {s.cat}
                </span>
                {/* Lucchetto */}
                <svg className="w-4 h-4 text-ghost/20 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>

              <h3 className="font-heading font-600 text-base text-ghost/60 mb-2 blur-[0.5px]">{s.name}</h3>
              <p className="text-ghost/30 text-sm leading-relaxed blur-[0.5px]">{s.desc}</p>

              {/* Barra progress fittizia */}
              <div className="mt-5 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-ghost/20">Testing</span>
                  <span className="font-mono text-xs text-ghost/20">{[67,82,45,91,58,73][i]}%</span>
                </div>
                <div className="h-0.5 bg-ghost/8 rounded-full overflow-hidden">
                  <div className="h-full bg-plasma/40 rounded-full" style={{ width: `${[67,82,45,91,58,73][i]}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form iscrizione */}
        <div className="relative bg-void-light border border-plasma/20 rounded-[2.5rem] p-8 sm:p-12 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-plasma/6 rounded-full blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-plasma/4 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-plasma pulse-dot" />
              <span className="font-mono text-xs text-plasma tracking-widest uppercase">Aggiornamenti in anteprima</span>
            </div>

            <h3 className="font-heading font-700 text-2xl sm:text-3xl tracking-tight mb-3">
              Sai quando escono prima di tutti.
            </h3>
            <p className="text-ghost/50 text-sm leading-relaxed mb-8">
              Quando una nuova Skill supera i test, gli iscritti la ricevono in anteprima a prezzo ridotto. Niente spam, solo aggiornamenti di prodotto.
            </p>

            {status === 'success' ? (
              <div className="flex items-center gap-3 bg-plasma/10 border border-plasma/20 rounded-2xl px-6 py-4">
                <Check size={18} className="text-plasma shrink-0" />
                <span className="text-ghost/80 text-sm">Sei dentro. Ti scriviamo alla prossima uscita.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="la tua@email.it"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="flex-1 bg-void border border-ghost/15 text-ghost placeholder-ghost/25 text-sm px-5 py-3.5 rounded-xl outline-none focus:border-plasma/50 transition-colors duration-200 font-mono"
                  />
                  <button
                    type="submit"
                    disabled={!privacy || status === 'loading'}
                    className="bg-plasma text-void font-bold text-sm px-7 py-3.5 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:bg-plasma-glow transition-colors duration-200 shrink-0">
                    {status === 'loading' ? 'Iscrivo...' : 'Avvisami'}
                  </button>
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <div
                    onClick={() => setPrivacy(!privacy)}
                    className={`w-4 h-4 rounded border shrink-0 mt-0.5 flex items-center justify-center transition-colors duration-200 ${
                      privacy ? 'bg-plasma border-plasma' : 'border-ghost/25 bg-transparent group-hover:border-ghost/40'
                    }`}>
                    {privacy && (
                      <svg className="w-2.5 h-2.5 text-void" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                      </svg>
                    )}
                  </div>
                  <span className="text-ghost/35 text-xs leading-relaxed">
                    Ho letto l'<a href="/privacy" className="text-ghost/50 hover:text-ghost underline underline-offset-2 transition-colors">informativa privacy</a> e accetto di ricevere comunicazioni da UseSkill.it. Nessun dato viene condiviso con terze parti. Cancellazione in qualsiasi momento.
                  </span>
                </label>

                {status === 'error' && (
                  <p className="text-red-400/70 text-xs font-mono">Qualcosa non ha funzionato. Riprova tra poco.</p>
                )}
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   PLUGINS
   ═══════════════════════════════════════════ */
function Plugins() {
  const sectionRef = useRef(null)
  const cardRef    = useRef(null)
  const glowRef    = useRef(null)

  const commands = [
    { cmd: '/post',        desc: 'Post LinkedIn pronto da pubblicare' },
    { cmd: '/newsletter',  desc: 'Newsletter completa con oggetto e corpo' },
    { cmd: '/carosello',   desc: 'Script per carosello Instagram slide-by-slide' },
    { cmd: '/calendario',  desc: '30 giorni di contenuti strutturati' },
    { cmd: '/onboarding',  desc: 'Questionario cliente personalizzato' },
    { cmd: '/voce',        desc: 'Estrae e salva il tuo tono di voce' },
    { cmd: '/strategia',   desc: 'Strategia e posizionamento del brand' },
    { cmd: '/riproponi',   desc: 'Repurposing contenuti esistenti' },
    { cmd: '/landing',     desc: 'Copy completo per landing page' },
    { cmd: '/email',       desc: 'Email di vendita e sequenze automatiche' },
    { cmd: '/analisi',     desc: 'Analisi dei contenuti già pubblicati' },
    { cmd: '/proposta',    desc: 'Proposta commerciale professionale' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Glow pulse infinito
      gsap.to(glowRef.current, {
        scale: 1.15,
        opacity: 0.6,
        duration: 2.8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      // Card reveal
      gsap.from(cardRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: cardRef.current, start: 'top 80%' },
      })

      // Commands stagger
      gsap.from('.plugin-cmd', {
        x: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.plugin-cmd-list', start: 'top 82%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="plugin" ref={sectionRef} className="py-24 md:py-40 overflow-hidden relative">
      {/* Background glow ambientale */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-plasma/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sm text-plasma tracking-wider uppercase">Plugin</span>
            <span className="bg-plasma/15 text-plasma font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-plasma/20">
              Nuovo formato
            </span>
          </div>
          <h2 className="font-heading font-700 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-5 leading-tight">
            Un livello sopra<br />alle Skill.
          </h2>
          <p className="text-ghost/50 text-base leading-relaxed">
            Un Plugin è un sistema completo che installi in Claude una sola volta. Dentro ci sono Skill, comandi slash e connettori preconfigurati. Apri Claude, scrivi <span className="font-mono text-plasma/80 text-sm bg-plasma/8 px-2 py-0.5 rounded">/post</span> e il tuo contenuto esce. Nessuna configurazione, nessun copia-incolla.
            <span className="flex items-center gap-2 mt-4 text-ghost/35 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60 inline-block shrink-0" />
              Richiede Claude Pro o Max. Non funziona con il piano gratuito.
            </span>
          </p>
        </div>

        {/* Plugin card — Content Creator Pro */}
        <div ref={cardRef} className="relative group">
          {/* Glow dietro la card */}
          <div
            ref={glowRef}
            className="absolute inset-0 -m-8 bg-plasma/10 rounded-[3rem] blur-[60px] pointer-events-none"
          />

          <div className="relative bg-void-light border border-plasma/20 rounded-[2.5rem] overflow-hidden">
            {/* Bordo superiore luminoso */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-plasma/60 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

              {/* Colonna sinistra — info prodotto */}
              <div className="p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-ghost/8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-plasma/15 border border-plasma/30 flex items-center justify-center">
                      <Sparkles size={20} className="text-plasma" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-plasma rounded-full shadow-[0_0_8px_rgba(123,97,255,0.8)]" />
                  </div>
                  <div>
                    <div className="font-heading font-700 text-base text-ghost">Content Creator Pro</div>
                    <div className="font-mono text-xs text-ghost/30">content-creator-pro</div>
                  </div>
                </div>

                <p className="text-ghost/60 text-sm leading-relaxed mb-8">
                  Dodici comandi slash, dodici Skill preconfigurate in un unico Plugin. Lo installi una volta. Da quel momento scrivi un comando e ottieni l'output: un post, una proposta, una sequenza email, un'analisi. Con la tua voce, il tuo formato, il tuo settore. Senza spiegare niente ogni volta.
                </p>

                {/* Cosa include */}
                <div className="space-y-2 mb-10">
                  {[
                    '12 Skill specializzate preconfigurate',
                    '12 comandi slash attivi da subito',
                    'Brand Voice integrato in tutti gli output',
                    'Aggiornamenti automatici alle nuove versioni',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-plasma shrink-0 shadow-[0_0_4px_rgba(123,97,255,0.7)]" />
                      <span className="text-ghost/50 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Prezzo + CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div>
                    <span className="font-heading font-800 text-3xl text-ghost">67€</span>
                    <span className="text-ghost/25 text-sm ml-2">una tantum</span>
                  </div>
                  <a
                    href="#"
                    data-product="plugin-content-creator-pro"
                    onClick={() => { localStorage.setItem('ls_last_product', 'plugin-content-creator'); if (typeof fbq !== 'undefined') fbq('track', 'InitiateCheckout', { content_name: 'Content Creator Pro Plugin', value: 67, currency: 'EUR' }) }}
                    className="relative overflow-hidden bg-plasma text-void font-bold text-sm px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 shadow-lg shadow-plasma/30 hover:shadow-plasma/50 transition-shadow duration-300 group/btn">
                    <div className="absolute inset-0 bg-plasma-glow opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-full" />
                    <Zap size={15} className="relative z-10" />
                    <span className="relative z-10">Ottieni il Plugin</span>
                  </a>
                </div>
              </div>

              {/* Colonna destra — comandi */}
              <div className="p-8 sm:p-12">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-ghost/30 uppercase tracking-widest">Comandi slash</span>
                  <span className="font-mono text-xs text-ghost/20 bg-ghost/5 px-3 py-1 rounded-full">12 comandi</span>
                </div>

                {/* Terminale finto */}
                <div className="bg-void rounded-2xl border border-ghost/8 overflow-hidden mb-6">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-ghost/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                    <span className="font-mono text-xs text-ghost/20 ml-2">claude.ai</span>
                  </div>
                  <div className="plugin-cmd-list p-5 space-y-3">
                    {commands.map(({ cmd, desc }, i) => (
                      <div key={i} className="plugin-cmd flex items-center gap-4 group/cmd">
                        <span className="font-mono text-sm text-plasma font-bold w-28 shrink-0 group-hover/cmd:text-plasma-glow transition-colors duration-200">
                          {cmd}
                        </span>
                        <span className="text-ghost/35 text-xs leading-relaxed">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="font-mono text-xs text-ghost/20 leading-relaxed">
                  Compatibile con Claude Pro e Max. Richiede Claude.ai con Projects attivi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nota a fondo */}
        <p className="text-center text-ghost/25 text-xs font-mono mt-8 leading-relaxed">
          I Plugin vengono rilasciati solo dopo centinaia di test su output reali. Stesso standard delle Skill, formato più potente.
        </p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   THANK YOU PAGE
   ═══════════════════════════════════════════ */
const PRODUCT_MAP = {
  'brand-voice-extractor':   { folder: 'a7f3c9e2-bve',       label: 'Brand Voice Extractor',         value: 0,  files: ['SKILL.md', 'profile.md', 'README.md'] },
  'linkedin-post-writer':    { folder: 'b4d1e8f3-lpw',       label: 'LinkedIn Post Writer Calibrato', value: 9,  files: ['SKILL.md', 'profile.md', 'README.md'] },
  'newsletter-generator':    { folder: 'c6a2f9d4-nlg',       label: 'Newsletter Generator IT',        value: 12, files: ['SKILL.md', 'profile.md', 'README.md'] },
  'instagram-carousel':      { folder: 'd8e3a1b5-ics',       label: 'Instagram Carousel Script',      value: 9,  files: ['SKILL.md', 'profile.md', 'README.md'] },
  'content-calendar':        { folder: 'e2f4b6c7-ccb',       label: 'Content Calendar Builder',       value: 15, files: ['SKILL.md', 'profile.md', 'README.md'] },
  'client-onboarding':       { folder: 'f1a3d5e8-coi',       label: 'Client Onboarding Interview',    value: 7,  files: ['SKILL.md', 'profile.md', 'README.md'] },
  'bundle-metodo':           { folder: 'g9b2c4d6-bundle',    label: 'Il Metodo UseSkill.it (Bundle)', value: 47, files: ['SKILL.md', 'il-metodo-useskill.md', 'README.md'] },
  'plugin-content-creator':  { folder: 'h3e5f7a9-plugin',   label: 'Content Creator Pro Plugin',     value: 67, files: ['content-creator-pro-plugin.zip'] },
}

function ThankYou() {
  const [params] = useSearchParams()
  const prodotto = params.get('prodotto') || ''
  const product  = PRODUCT_MAP[prodotto]

  // Pixel tracking
  useEffect(() => {
    if (!product) return
    if (typeof window.fbq === 'undefined') return
    if (product.value === 0) {
      window.fbq('track', 'Lead', { content_name: prodotto })
    } else {
      window.fbq('track', 'Purchase', {
        value: product.value,
        currency: 'EUR',
        content_name: product.label,
        content_type: 'product',
      })
    }
  }, [prodotto])

  const steps = [
    { n: '01', title: 'Claude', body: 'Apri Claude → vai nella sezione Skill → carica il file SKILL.md' },
    { n: '02', title: 'Antigravity', body: 'Vai nella cartella del tuo agente → carica SKILL.md' },
    { n: '03', title: 'Manus', body: 'Apri il workspace → carica il file nel pannello laterale' },
  ]

  return (
    <div className="min-h-screen bg-void flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Glow bg */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-plasma/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-xl w-full text-center">
        {/* Logo */}
        <a href="/" className="inline-block font-heading font-bold text-xl mb-12 tracking-tight">
          <span className="text-ghost">Use</span>
          <span className="text-plasma">Skill</span>
          <span className="text-ghost">.it</span>
        </a>

        {product ? (
          <>
            {/* Check animato */}
            <div className="w-16 h-16 rounded-full bg-plasma/15 border border-plasma/30 flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(123,97,255,0.3)]">
              <Check size={28} className="text-plasma" />
            </div>

            <h1 className="font-heading font-700 text-3xl sm:text-4xl tracking-tight mb-3">
              {product.value === 0 ? 'Skill in arrivo.' : 'Acquisto completato.'}
            </h1>
            <p className="text-ghost/50 text-base leading-relaxed mb-10">
              {product.value === 0
                ? 'Controlla la tua email — ti abbiamo mandato il link per scaricare la Skill.'
                : `Hai acquistato: ${product.label}. Scarica i file qui sotto e installala in pochi minuti.`
              }
            </p>

            {/* Download files */}
            {product.value > 0 && (
              <div className="bg-void-light border border-ghost/10 rounded-3xl p-6 mb-10 text-left">
                <p className="text-ghost/40 font-mono text-xs uppercase tracking-widest mb-4">File inclusi</p>
                <div className="space-y-2 mb-6">
                  {product.files.map(f => (
                    <a
                      key={f}
                      href={`/downloads/${product.folder}/${f}`}
                      download
                      className="flex items-center gap-3 text-ghost/70 hover:text-ghost text-sm py-2.5 px-4 rounded-xl hover:bg-ghost/5 transition-colors group">
                      <Download size={15} className="text-plasma shrink-0 group-hover:text-plasma-glow transition-colors" />
                      <span className="font-mono">{f}</span>
                    </a>
                  ))}
                </div>
                <a
                  href={`/downloads/${product.folder}/`}
                  className="w-full block bg-plasma text-void font-bold text-center py-3.5 rounded-xl text-sm hover:shadow-lg hover:shadow-plasma/25 transition-shadow">
                  Scarica tutto
                </a>
              </div>
            )}

            {/* Istruzioni installazione */}
            {product.value > 0 && (
              <div className="text-left mb-10">
                <p className="text-ghost/40 font-mono text-xs uppercase tracking-widest mb-5">Come installare</p>
                <div className="space-y-4">
                  {steps.map(s => (
                    <div key={s.n} className="flex gap-4 items-start">
                      <span className="font-mono text-xs text-plasma/60 shrink-0 mt-0.5">{s.n}</span>
                      <div>
                        <span className="text-ghost/60 font-medium text-sm">{s.title} — </span>
                        <span className="text-ghost/40 text-sm">{s.body}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <a href="/#catalog" className="text-ghost/30 hover:text-ghost/60 text-sm underline underline-offset-4 transition-colors">
              Torna al catalogo
            </a>
          </>
        ) : (
          <>
            <h1 className="font-heading font-700 text-3xl tracking-tight mb-3">Pagina non trovata.</h1>
            <p className="text-ghost/40 text-sm mb-8">Nessun prodotto associato a questa URL.</p>
            <a href="/" className="text-plasma text-sm underline underline-offset-4">Torna alla home</a>
          </>
        )}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   LANDING (tutto il sito)
   ═══════════════════════════════════════════ */
function Landing() {
  const navigate = useNavigate()

  // Ascolta evento acquisto completato da LemonSqueezy overlay
  useEffect(() => {
    function initLS() {
      if (typeof window.createLemonSqueezy === 'function') {
        window.createLemonSqueezy()
        window.LemonSqueezy.Setup({
          eventHandler: (data) => {
            if (data.event === 'Checkout.Success') {
              const prodotto = localStorage.getItem('ls_last_product') || ''
              navigate(`/grazie?prodotto=${prodotto}`)
            }
          },
        })
      } else {
        setTimeout(initLS, 600)
      }
    }
    initLS()
  }, [navigate])

  return (
    <>
      <Navbar />
      <Hero />
      <WhatIsASkill />
      <WhySkills />
      <BeforeAfter />
      <Metriche />
      <Recensioni />
      <Features />
      <Philosophy />
      <Freebie />
      <Catalog />
      <Bundle />
      <Plugins />
      <ComingSoon />
      <FAQ />
      <Footer />
    </>
  )
}

/* ═══════════════════════════════════════════
   APP
   ═══════════════════════════════════════════ */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/grazie" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  )
}
