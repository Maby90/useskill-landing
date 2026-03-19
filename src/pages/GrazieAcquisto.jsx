import { useEffect } from 'react'
import { Package } from 'lucide-react'
import '../index.css'

export default function GrazieAcquisto() {
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'Purchase', { currency: 'EUR' })
    }
  }, [])

  return (
    <main className="bg-void min-h-screen text-ghost flex flex-col">
      <div className="flex-1 max-w-2xl mx-auto px-6 py-24 w-full">

        {/* Success header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-plasma/15 mb-8">
            <Package size={48} className="text-plasma" />
          </div>
          <h1 className="font-heading font-700 text-3xl sm:text-4xl tracking-tight mb-4">
            Acquisto confermato.
          </h1>
          <p className="text-ghost/60 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
            Stai per ricevere il file via email. Se entro 10 minuti non arriva, scrivi a{' '}
            <a href="mailto:info@useskill.it" className="text-plasma hover:underline">info@useskill.it</a>{' '}
            e lo mandiamo subito.
          </p>
        </div>

        {/* Info boxes */}
        <div className="space-y-4 mb-12">

          <div className="bg-void-light border border-ghost/8 rounded-2xl p-6">
            <h2 className="font-heading font-600 text-base mb-3 text-ghost/80">Cosa trovi nel file</h2>
            <p className="text-ghost/50 text-sm leading-relaxed">
              Il file .md che ricevi contiene le istruzioni strutturate per il tuo sistema AI. Include il contesto operativo, le regole di formato, i gate di qualità e gli esempi di output attesi. Tutto ciò che serve all'AI per produrre risultati coerenti ogni volta.
            </p>
          </div>

          <div className="bg-void-light border border-ghost/8 rounded-2xl p-6">
            <h2 className="font-heading font-600 text-base mb-3 text-ghost/80">Come installarlo</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-plasma/15 text-plasma font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">1</div>
                <p className="text-ghost/50 text-sm">Apri la tua AI (Claude, Manus o Google Antigravity) e vai alla sezione Progetti o System Prompt.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-plasma/15 text-plasma font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">2</div>
                <p className="text-ghost/50 text-sm">Copia il contenuto del file .md e incollalo come istruzione di sistema o documento di progetto. Due clic, e la Skill è attiva.</p>
              </div>
            </div>
          </div>

          <div className="bg-void-light border border-ghost/8 rounded-2xl p-6">
            <h2 className="font-heading font-600 text-base mb-3 text-ghost/80">Hai bisogno di aiuto?</h2>
            <p className="text-ghost/50 text-sm leading-relaxed">
              Se hai dubbi su come installare la Skill o se qualcosa non funziona come ti aspetti, scrivi a{' '}
              <a href="mailto:info@useskill.it" className="text-plasma hover:underline">info@useskill.it</a>.
              Rispondiamo entro 24 ore.
            </p>
          </div>

          <div className="bg-plasma/8 border border-plasma/20 rounded-2xl p-6">
            <h2 className="font-heading font-600 text-base mb-2 text-plasma">Hai acquistato il Bundle?</h2>
            <p className="text-ghost/60 text-sm leading-relaxed">
              La guida <strong className="text-ghost/80">"Il Metodo UseSkill"</strong> è inclusa nel pacchetto. Ti spiega come far lavorare tutte le Skill insieme come sistema integrato: parti dalla voce del brand, costruisci il calendario editoriale, produci i contenuti e gestisci l'onboarding. Ogni pezzo si incastra con il successivo.
            </p>
          </div>

        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/#catalog"
            className="inline-flex items-center justify-center bg-plasma text-void font-bold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-plasma/20 hover:shadow-plasma/30 transition-shadow">
            Esplora il resto del catalogo
          </a>
          <a href="/"
            className="inline-flex items-center justify-center bg-void-light border border-ghost/10 hover:border-ghost/30 text-ghost/70 hover:text-ghost font-medium text-sm px-8 py-3.5 rounded-full transition-colors">
            Torna al sito
          </a>
        </div>

      </div>
    </main>
  )
}
