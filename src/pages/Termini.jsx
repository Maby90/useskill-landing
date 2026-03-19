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

export default function Termini() {
  return (
    <>
      <MinimalNav />
      <main className="bg-void min-h-screen text-ghost">
        <div className="max-w-3xl mx-auto px-6 py-24 pt-32">

          <span className="font-mono text-sm text-plasma tracking-wider uppercase block mb-4">
            Informativa legale
          </span>
          <h1 className="font-heading font-700 text-3xl sm:text-4xl tracking-tight mb-3">
            Termini e Condizioni di Vendita
          </h1>
          <p className="text-ghost/40 text-sm mb-12">Ultima revisione: 19 marzo 2026</p>

          <div className="space-y-10 text-ghost/60 leading-relaxed">

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">1. Definizioni</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong className="text-ghost/80">UseSkill</strong> — il servizio gestito da Mariarosaria Prochilo, P.IVA 03068590805, con sede in Via Gaetano Pilati, 50136 Firenze (FI), raggiungibile a <a href="mailto:info@useskill.it" className="text-plasma hover:underline">info@useskill.it</a>.</li>
                <li><strong className="text-ghost/80">Skill</strong> — file in formato .md (Markdown) contenente istruzioni strutturate per sistemi di intelligenza artificiale. Ogni Skill è un prodotto digitale scaricabile.</li>
                <li><strong className="text-ghost/80">Acquirente</strong> — qualsiasi persona fisica o giuridica che acquista una Skill tramite il sito useskill.it.</li>
                <li><strong className="text-ghost/80">AI compatibile</strong> — qualsiasi sistema di intelligenza artificiale che supporti l'utilizzo di file di istruzioni in formato Markdown come contesto operativo (es. Claude, Google Gemini via Antigravity, Manus).</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">2. Processo di acquisto</h2>
              <p>
                L'acquisto delle Skill avviene direttamente tramite il sito useskill.it. Completato il pagamento tramite il processore di pagamento indicato, l'Acquirente riceve via email il file .md acquistato entro 10 minuti dalla conferma del pagamento. In caso di mancata consegna, l'Acquirente è invitato a contattare <a href="mailto:info@useskill.it" className="text-plasma hover:underline">info@useskill.it</a>.
              </p>
              <p className="mt-2">
                Il contratto di vendita si intende concluso al momento della conferma del pagamento da parte del processore di pagamento.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">3. Licenza d'uso</h2>
              <p>
                Con l'acquisto, UseSkill concede all'Acquirente una licenza personale, non esclusiva, non trasferibile e non cedibile a terzi per utilizzare il file acquistato.
              </p>
              <p className="mt-2">È <strong className="text-ghost/80">vietato</strong>:</p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Rivendere, cedere, sublicenziare o distribuire il file a terzi, a titolo oneroso o gratuito.</li>
                <li>Pubblicare il contenuto del file su piattaforme pubbliche, repository o forum.</li>
                <li>Presentare il file come proprio e commercializzarlo in qualsiasi forma.</li>
              </ul>
              <p className="mt-2">
                L'uso è strettamente personale e limitato ai propri sistemi AI.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">4. Proprietà intellettuale</h2>
              <p>
                Tutti i file Skill distribuiti da UseSkill sono e rimangono di proprietà esclusiva di Mariarosaria Prochilo / UseSkill. L'acquisto non trasferisce alcun diritto di proprietà intellettuale all'Acquirente. UseSkill si riserva tutti i diritti non espressamente concessi.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">5. Requisiti tecnici e limitazione di responsabilità</h2>
              <p>
                Le Skill sono progettate per funzionare con sistemi AI compatibili. L'utilizzo di tali sistemi è a carico esclusivo dell'Acquirente, che li possiede e gestisce autonomamente. UseSkill non è responsabile per eventuali malfunzionamenti, variazioni di comportamento o indisponibilità dei sistemi AI di terze parti.
              </p>
              <p className="mt-2">
                UseSkill non garantisce risultati specifici derivanti dall'uso delle Skill, in quanto l'output dei sistemi AI dipende da molteplici variabili esterne al controllo di UseSkill, incluse le impostazioni, la versione e il comportamento del modello AI utilizzato dall'Acquirente.
              </p>
              <p className="mt-2">
                Nella misura massima consentita dalla legge applicabile, UseSkill non sarà responsabile per danni indiretti, incidentali, speciali o consequenziali derivanti dall'utilizzo delle Skill.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">6. Assenza di garanzia sui risultati</h2>
              <p>
                I risultati prodotti da un sistema AI utilizzando una Skill dipendono dalla qualità degli input forniti dall'Acquirente, dalla versione e configurazione del modello AI, e da altri fattori non controllabili da UseSkill. Le Skill sono state testate su scenari reali e ottimizzate per produrre output di qualità, ma UseSkill non garantisce che ogni utilizzo produca risultati pubblicabili senza revisione.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">7. Politica di rimborso</h2>
              <p>
                Trattandosi di prodotti digitali consegnati immediatamente, l'Acquirente riconosce che la fornitura inizia contestualmente all'acquisto e che, ai sensi dell'art. 59, lett. o) del Codice del Consumo (D.Lgs. 206/2005), il diritto di recesso è escluso per i contenuti digitali non forniti su supporto materiale, una volta iniziata l'esecuzione.
              </p>
              <p className="mt-2">
                Prima di acquistare, l'Acquirente può scaricare gratuitamente il <strong className="text-ghost/80">Brand Voice Extractor</strong>, che costituisce un'anteprima rappresentativa della qualità e del formato delle Skill di UseSkill.
              </p>
              <p className="mt-2">
                In caso di problemi tecnici nella consegna del file, UseSkill si impegna a risolvere la questione entro 24 ore dalla segnalazione a <a href="mailto:info@useskill.it" className="text-plasma hover:underline">info@useskill.it</a>.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">8. Legge applicabile e foro competente</h2>
              <p>
                I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia relativa all'interpretazione, validità o esecuzione dei presenti Termini, le parti concordano sulla competenza esclusiva del Tribunale di Firenze.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">9. Contatti</h2>
              <p>
                Per qualsiasi domanda relativa ai presenti Termini scrivi a: <a href="mailto:info@useskill.it" className="text-plasma hover:underline">info@useskill.it</a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <LegalFooter />
    </>
  )
}
