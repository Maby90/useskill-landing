import '../index.css'

function MinimalNav() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-void/80 backdrop-blur-xl border border-ghost/10 shadow-lg rounded-full px-6 py-3 flex items-center gap-8 w-[95%] max-w-xl">
      <a href="/" className="font-heading font-bold text-lg tracking-tight">
        <span className="text-ghost">Use</span>
        <span className="text-plasma">Skill</span>
      </a>
      <div className="flex-1" />
      <a href="/" className="text-ghost/50 hover:text-ghost text-sm font-medium transition-colors">
        ← Torna al sito
      </a>
    </nav>
  )
}

function LegalFooter() {
  return (
    <footer className="bg-graphite rounded-t-[3rem] py-10 mt-16">
      <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-ghost/25 text-xs">© 2026 UseSkill. Tutti i diritti riservati.</p>
        <div className="flex gap-4">
          <a href="/privacy" className="text-ghost/40 hover:text-ghost text-xs">Privacy</a>
          <a href="/termini" className="text-ghost/40 hover:text-ghost text-xs">Termini</a>
          <a href="/cookie" className="text-ghost/40 hover:text-ghost text-xs">Cookie</a>
        </div>
      </div>
    </footer>
  )
}

export default function Cookie() {
  return (
    <>
      <MinimalNav />
      <main className="bg-void min-h-screen text-ghost">
        <div className="max-w-3xl mx-auto px-6 py-24 pt-32">

          <span className="font-mono text-sm text-plasma tracking-wider uppercase block mb-4">
            Informativa legale
          </span>
          <h1 className="font-heading font-700 text-3xl sm:text-4xl tracking-tight mb-3">
            Cookie Policy
          </h1>
          <p className="text-ghost/40 text-sm mb-12">Ultima revisione: 19 marzo 2026</p>

          <div className="space-y-10 text-ghost/60 leading-relaxed">

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">1. Cosa sono i cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti web salvano nel tuo browser quando li visiti. Vengono utilizzati per far funzionare correttamente il sito, ricordare le tue preferenze, e raccogliere informazioni sul comportamento di navigazione.
              </p>
              <p className="mt-2">
                I cookie possono essere "di sessione" (vengono cancellati alla chiusura del browser) o "persistenti" (rimangono salvati per un periodo definito). Possono essere impostati direttamente dal sito che visiti ("cookie di prima parte") o da servizi terzi integrati nella pagina ("cookie di terza parte").
              </p>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">2. Cookie utilizzati da useskill.it</h2>

              <div className="mt-4 space-y-6">
                <div className="bg-void-light border border-ghost/8 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block bg-emerald-500/15 text-emerald-400 font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">Necessari</span>
                    <span className="text-ghost/40 text-xs font-mono">Nessun consenso richiesto</span>
                  </div>
                  <h3 className="font-heading font-600 text-base text-ghost/80 mb-2">Cookie tecnici di sessione</h3>
                  <p className="text-sm">
                    Questi cookie sono indispensabili per il corretto funzionamento del sito. Consentono la navigazione tra le pagine, il mantenimento della sessione e il corretto caricamento dei contenuti. Non raccolgono informazioni personali identificabili e non possono essere disabilitati senza compromettere il funzionamento del sito.
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-ghost/40 font-mono">
                    <span>Durata: sessione</span>
                    <span>Tipo: prima parte</span>
                  </div>
                </div>

                <div className="bg-void-light border border-ghost/8 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block bg-amber-500/15 text-amber-400 font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">Profilazione</span>
                    <span className="text-ghost/40 text-xs font-mono">Richiede consenso</span>
                  </div>
                  <h3 className="font-heading font-600 text-base text-ghost/80 mb-2">Meta Pixel (Facebook Pixel)</h3>
                  <p className="text-sm">
                    Il sito utilizza il Meta Pixel, uno strumento di analisi fornito da Meta Platforms Ireland Ltd. Il Pixel consente di misurare l'efficacia della pubblicità su Facebook e Instagram, tracciare le conversioni (es. download del freebie, acquisti) e creare audience personalizzate per campagne di remarketing.
                  </p>
                  <p className="mt-2 text-sm">
                    Questo cookie viene attivato solo previo tuo consenso esplicito. Se hai prestato il consenso, il Pixel registra informazioni sulle pagine visitate e sulle azioni compiute e le trasmette a Meta.
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-ghost/40 font-mono">
                    <span>Durata: fino a 180 giorni</span>
                    <span>Tipo: terza parte (Meta)</span>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-ghost/40">Fornitore: Meta Platforms Ireland Ltd., 4 Grand Canal Square, Dublin 2, Irlanda.</p>
                    <p className="text-xs text-ghost/40 mt-1">
                      Privacy Policy Meta: <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-plasma hover:underline">facebook.com/policy.php</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">3. Come disabilitare i cookie</h2>
              <p>
                Puoi gestire e disabilitare i cookie tramite le impostazioni del tuo browser. Di seguito i link alle guide dei principali browser:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-plasma hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-in-firefox" target="_blank" rel="noopener noreferrer" className="text-plasma hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-plasma hover:underline">Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-plasma hover:underline">Microsoft Edge</a></li>
              </ul>
              <p className="mt-3 text-sm">
                Attenzione: la disabilitazione di tutti i cookie potrebbe compromettere alcune funzionalità del sito.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">4. Come opporsi al Meta Pixel</h2>
              <p>
                Puoi opporti all'utilizzo del Meta Pixel per finalità pubblicitarie in diversi modi:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li>Accedendo alle <a href="https://www.facebook.com/ads/preferences/" target="_blank" rel="noopener noreferrer" className="text-plasma hover:underline">Impostazioni Inserzioni di Facebook</a> per gestire le preferenze pubblicitarie.</li>
                <li>Utilizzando lo strumento di opt-out di <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-plasma hover:underline">Digital Advertising Alliance</a>.</li>
                <li>Installando la <a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer" className="text-plasma hover:underline">Facebook Pixel Opt-out Extension</a> nel tuo browser.</li>
                <li>Non fornendo il consenso tramite il banner cookie presente sul sito.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">5. Modifiche alla Cookie Policy</h2>
              <p>
                Questa Cookie Policy può essere aggiornata periodicamente per riflettere modifiche ai cookie utilizzati o alla normativa applicabile. Eventuali modifiche saranno pubblicate su questa pagina con aggiornamento della data di revisione.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">6. Contatti</h2>
              <p>
                Per qualsiasi informazione sui cookie e sul trattamento dei dati scrivi a: <a href="mailto:info@useskill.it" className="text-plasma hover:underline">info@useskill.it</a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <LegalFooter />
    </>
  )
}
