import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import '../index.css'

gsap.registerPlugin(ScrollTrigger)

function MinimalNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
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

export default function Privacy() {
  return (
    <>
      <MinimalNav />
      <main className="bg-void min-h-screen text-ghost">
        <div className="max-w-3xl mx-auto px-6 py-24 pt-32">

          <span className="font-mono text-sm text-plasma tracking-wider uppercase block mb-4">
            Informativa legale
          </span>
          <h1 className="font-heading font-700 text-3xl sm:text-4xl tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-ghost/40 text-sm mb-12">Ultima revisione: 19 marzo 2026</p>

          <div className="space-y-10 text-ghost/60 leading-relaxed">

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">1. Titolare del trattamento</h2>
              <p>
                Il titolare del trattamento dei dati personali è <strong className="text-ghost">Mariarosaria Prochilo</strong>,
                con sede in Via Gaetano Pilati, 50136 Firenze (FI), P.IVA 03068590805.
              </p>
              <p className="mt-2">
                Contatto email: <a href="mailto:info@useskill.it" className="text-plasma hover:underline">info@useskill.it</a>
              </p>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">2. Dati personali raccolti</h2>
              <p>Il sito raccoglie le seguenti categorie di dati personali:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong className="text-ghost/80">Indirizzo email</strong> — fornito volontariamente per ricevere il freebie (Brand Voice Extractor) e comunicazioni successive.</li>
                <li><strong className="text-ghost/80">Dati di acquisto</strong> — nome, indirizzo email e metodo di pagamento (gestiti da terze parti; UseSkill non archivia dati di carta di credito).</li>
                <li><strong className="text-ghost/80">Dati di navigazione</strong> — dati tecnici raccolti automaticamente (indirizzo IP, tipo di browser, pagine visitate, orario di accesso) tramite cookie tecnici e strumenti di analisi.</li>
                <li><strong className="text-ghost/80">Dati comportamentali pubblicitari</strong> — raccolti tramite Meta Pixel a fini di remarketing e analisi delle conversioni.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">3. Finalità del trattamento e base giuridica</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-ghost/80 font-medium">Consegna del freebie e comunicazioni email</p>
                  <p>Base giuridica: consenso dell'interessato (art. 6, par. 1, lett. a GDPR). L'indirizzo email viene utilizzato per inviare il file richiesto e, previo consenso esplicito, per comunicazioni promozionali successive. Il consenso è revocabile in qualsiasi momento.</p>
                </div>
                <div>
                  <p className="text-ghost/80 font-medium">Gestione degli acquisti</p>
                  <p>Base giuridica: esecuzione di un contratto (art. 6, par. 1, lett. b GDPR). I dati forniti in fase di acquisto vengono trattati per processare l'ordine, consegnare il prodotto digitale e adempiere agli obblighi fiscali.</p>
                </div>
                <div>
                  <p className="text-ghost/80 font-medium">Cookie tecnici</p>
                  <p>Base giuridica: legittimo interesse (art. 6, par. 1, lett. f GDPR). I cookie tecnici sono necessari al funzionamento del sito e non richiedono consenso.</p>
                </div>
                <div>
                  <p className="text-ghost/80 font-medium">Meta Pixel (remarketing e analisi conversioni)</p>
                  <p>Base giuridica: consenso dell'interessato (art. 6, par. 1, lett. a GDPR). Il pixel viene attivato solo previo consenso tramite il banner cookie.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">4. Periodo di conservazione</h2>
              <p>I dati vengono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Dati email (freebie): fino a revoca del consenso o richiesta di cancellazione.</li>
                <li>Dati di acquisto: 10 anni per obblighi fiscali (art. 2220 c.c.).</li>
                <li>Dati di navigazione: massimo 13 mesi.</li>
                <li>Dati raccolti da Meta Pixel: secondo la policy di Meta Platforms Ireland Ltd.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">5. Destinatari dei dati</h2>
              <p>I dati personali possono essere comunicati a:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Fornitori di servizi di email marketing (es. Mailchimp, Brevo) in qualità di responsabili del trattamento.</li>
                <li>Piattaforme di pagamento terze (es. Stripe, Gumroad) per la gestione delle transazioni.</li>
                <li>Meta Platforms Ireland Ltd. per le finalità pubblicitarie del Meta Pixel.</li>
                <li>Autorità competenti, ove richiesto dalla legge.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">6. Trasferimento di dati extra-UE</h2>
              <p>
                Meta Platforms Ireland Ltd. può trasferire dati verso gli Stati Uniti. Tali trasferimenti avvengono sulla base di clausole contrattuali standard approvate dalla Commissione Europea (art. 46 GDPR) o di altri meccanismi di garanzia adeguati. Per maggiori informazioni consultare la <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-plasma hover:underline">Privacy Policy di Meta</a>.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">7. Cookie</h2>
              <p>Il sito utilizza cookie tecnici necessari al funzionamento e cookie di profilazione (Meta Pixel) soggetti a consenso. Per informazioni dettagliate consulta la nostra <a href="/cookie" className="text-plasma hover:underline">Cookie Policy</a>.</p>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">8. Diritti dell'interessato</h2>
              <p>Ai sensi degli artt. 15-22 GDPR, hai il diritto di:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong className="text-ghost/80">Accesso</strong> — ottenere conferma che siano in corso trattamenti di dati che ti riguardano e accedere a tali dati.</li>
                <li><strong className="text-ghost/80">Rettifica</strong> — ottenere la correzione di dati inesatti o incompleti.</li>
                <li><strong className="text-ghost/80">Cancellazione ("diritto all'oblio")</strong> — ottenere la cancellazione dei tuoi dati, salvo obblighi legali di conservazione.</li>
                <li><strong className="text-ghost/80">Limitazione</strong> — richiedere la limitazione del trattamento in determinate circostanze.</li>
                <li><strong className="text-ghost/80">Portabilità</strong> — ricevere i dati forniti in formato strutturato e leggibile da dispositivo automatico.</li>
                <li><strong className="text-ghost/80">Opposizione</strong> — opporsi al trattamento basato su legittimo interesse o per finalità di marketing diretto.</li>
                <li><strong className="text-ghost/80">Revoca del consenso</strong> — revocare in qualsiasi momento il consenso prestato, senza pregiudicare la liceità del trattamento precedente.</li>
              </ul>
              <p className="mt-3">Per esercitare i tuoi diritti scrivi a <a href="mailto:info@useskill.it" className="text-plasma hover:underline">info@useskill.it</a>. Risponderemo entro 30 giorni dalla ricezione della richiesta.</p>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">9. Responsabile della protezione dei dati (DPO)</h2>
              <p>Non è stato nominato un Data Protection Officer (DPO), in quanto il titolare non rientra nelle categorie che ne rendono obbligatoria la designazione ai sensi dell'art. 37 GDPR.</p>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">10. Reclamo all'Autorità di controllo</h2>
              <p>
                Hai il diritto di proporre reclamo al Garante per la protezione dei dati personali (Autorità di controllo italiana), con sede in Piazza Venezia 11, 00187 Roma — <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-plasma hover:underline">www.garanteprivacy.it</a>.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-600 text-lg text-plasma mb-3">11. Modifiche alla presente informativa</h2>
              <p>
                Il titolare si riserva il diritto di modificare la presente informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con aggiornamento della data di revisione. Si consiglia di consultare periodicamente questa pagina.
              </p>
            </section>

          </div>
        </div>
      </main>
      <LegalFooter />
    </>
  )
}
