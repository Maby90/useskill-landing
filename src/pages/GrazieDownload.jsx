import { useEffect } from 'react'
import { Check } from 'lucide-react'
import '../index.css'

const skills = [
  {
    name: 'Italian LinkedIn Post Writer',
    product: 'linkedin-post-writer',
    price: '9€',
    desc: 'Post LinkedIn completi con hook, corpo e chiusura. Output pronto in 40 secondi.',
    tag: 'Più venduta',
  },
  {
    name: 'Newsletter Generator IT',
    product: 'newsletter-generator',
    price: '12€',
    desc: 'Da appunti a newsletter completa con oggetto, apertura e CTA. In 5 minuti.',
  },
  {
    name: 'Instagram Carousel Script',
    product: 'instagram-carousel',
    price: '9€',
    desc: 'Un concetto, dieci slide ottimizzate per mobile con hook e call to action.',
  },
  {
    name: 'Content Calendar Builder',
    product: 'content-calendar',
    price: '15€',
    desc: '30 giorni di contenuti con idee concrete, angoli diversi e formati alternati.',
  },
  {
    name: 'Client Onboarding Interview',
    product: 'client-onboarding',
    price: '7€',
    desc: 'Questionario di onboarding personalizzato per il tuo settore. Pronto da mandare.',
  },
]

export default function GrazieDownload() {
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'Lead')
    }
  }, [])

  return (
    <main className="bg-void min-h-screen text-ghost flex flex-col">
      <div className="flex-1 max-w-2xl mx-auto px-6 py-24 w-full">

        {/* Success header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/15 mb-8">
            <Check size={48} className="text-emerald-400" />
          </div>
          <h1 className="font-heading font-700 text-3xl sm:text-4xl tracking-tight mb-4">
            Il Brand Voice Extractor è in arrivo.
          </h1>
          <p className="text-ghost/60 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
            Controlla la tua casella email, il file arriva entro pochi minuti. Se non lo trovi, guarda in spam — a volte finisce lì per via dei filtri.
          </p>
        </div>

        {/* Next steps */}
        <div className="bg-void-light border border-ghost/8 rounded-[2rem] p-8 mb-12">
          <h2 className="font-heading font-600 text-lg mb-6">Come usarlo</h2>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-plasma/15 text-plasma font-mono text-sm flex items-center justify-center shrink-0">1</div>
              <div>
                <p className="font-medium text-ghost/80">Apri il file .md</p>
                <p className="text-ghost/50 text-sm mt-0.5">Il file che ricevi via email è un documento Markdown leggibile con qualsiasi editor di testo.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-plasma/15 text-plasma font-mono text-sm flex items-center justify-center shrink-0">2</div>
              <div>
                <p className="font-medium text-ghost/80">Caricalo in un progetto della tua AI</p>
                <p className="text-ghost/50 text-sm mt-0.5">Apri Claude, Manus o Google Antigravity, crea un nuovo progetto e incolla il contenuto del file come istruzione.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-plasma/15 text-plasma font-mono text-sm flex items-center justify-center shrink-0">3</div>
              <div>
                <p className="font-medium text-ghost/80">Incolla 3 o più tuoi testi e lancia la Skill</p>
                <p className="text-ghost/50 text-sm mt-0.5">Copia testi che hai già scritto (post, email, articoli) e chiedi all'AI di analizzarli. La Skill genererà la tua guida completa al tono di voce.</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-ghost/10 mb-12" />

        {/* Upsell catalog */}
        <div>
          <h2 className="font-heading font-600 text-xl mb-2">Mentre aspetti</h2>
          <p className="text-ghost/50 text-sm mb-8">Le Skill a pagamento del catalogo. Una volta che hai la tua voce, queste ti danno output pronti da pubblicare.</p>

          <div className="space-y-3">
            {skills.map((s, i) => (
              <a key={i} href="/#catalog"
                className="block bg-void-light border border-ghost/8 hover:border-plasma/20 rounded-2xl px-6 py-4 transition-all duration-300 group">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {s.tag && (
                        <span className="inline-block bg-plasma/15 text-plasma font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full">
                          {s.tag}
                        </span>
                      )}
                      <span className="font-heading font-600 text-sm text-ghost/80 group-hover:text-ghost transition-colors">{s.name}</span>
                    </div>
                    <p className="text-ghost/40 text-xs leading-relaxed truncate">{s.desc}</p>
                  </div>
                  <span className="font-heading font-700 text-base text-ghost shrink-0">{s.price}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA back */}
        <div className="text-center mt-12">
          <a href="/"
            className="inline-block bg-void-light border border-ghost/10 hover:border-ghost/30 text-ghost/70 hover:text-ghost font-medium text-sm px-8 py-3 rounded-full transition-colors">
            Torna al sito
          </a>
        </div>
      </div>
    </main>
  )
}
