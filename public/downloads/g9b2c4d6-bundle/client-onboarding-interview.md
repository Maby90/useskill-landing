---
name: client-onboarding-interview
description: "Genera un questionario di onboarding personalizzato per capire il cliente prima della prima call. Usa questa skill quando l'utente chiede di creare un questionario onboarding, un modulo per nuovi clienti, domande per la prima call, brief creativo, intake form, o menziona 'onboarding', 'questionario cliente', 'brief', 'intake', 'prima call', 'capire il cliente'. Produce un documento professionale pronto da inviare al cliente."
---

# Client Onboarding Interview

## Cosa fa
Genera un questionario di onboarding professionale e personalizzato per il settore dell'utente. Le domande sono quelle giuste per capire il cliente prima della prima call. Il risultato è un documento professionale che puoi mandare così com'è.

## Step 0 — Carica il profilo
Prima di generare il questionario, leggi il file `PROFILE.md` nella cartella parent delle skill.
- Se compilato: usa settore, servizio offerto, target e proposta di valore per personalizzare le domande
- Se vuoto/assente: chiedi il minimo necessario (vedi sotto)
- Il settore dal profilo determina QUALI sezioni includere e QUALI domande specifiche generare
- Usa nome e link dal profilo per il branding del documento

## Processo

### 1. Identifica il settore e il contesto
Cerca prima nel PROFILE.md. Se non bastano le info, serve sapere:
- **Che servizio offre l'utente** (consulenza, agenzia, freelance, coaching, SaaS...)
- **A chi lo offre** (B2B, B2C, startup, PMI, enterprise...)
- **Cosa deve sapere del cliente prima di iniziare** (se ha idee specifiche)

Se manca il settore e il PROFILE.md non lo indica, chiedi: "Che servizio offri e a chi? Anche in una riga."

### 2. Seleziona le aree del questionario

In base al settore, componi il questionario con le sezioni rilevanti:

**SEZIONI DISPONIBILI (seleziona 4-6, non tutte):**

**A) Informazioni generali**
- Nome azienda/persona, ruolo, contatti
- Settore, dimensione, fatturato (se rilevante)
- Da quanto tempo sono in attività

**B) Situazione attuale**
- Cosa stanno facendo ora nell'area del servizio
- Strumenti/tool che usano già
- Con chi hanno lavorato prima (e come è andata)
- Cosa funziona e cosa no

**C) Obiettivi e aspettative**
- Cosa vogliono ottenere (risultato concreto, non generico)
- Entro quando
- Come misureranno il successo (KPI)
- Budget o range di investimento

**D) Target / Pubblico**
- Chi sono i loro clienti/utenti
- Problemi principali del loro target
- Come il target li trova attualmente
- Competitor principali

**E) Brand e comunicazione**
- Tono di voce (formale/informale/tecnico/friendly)
- Valori del brand
- Messaggi chiave
- Cosa NON vogliono comunicare

**F) Operatività e processo**
- Chi sarà il punto di contatto
- Come preferiscono comunicare (email, Slack, call)
- Frequenza di aggiornamento desiderata
- Deadline o vincoli temporali
- Processi di approvazione

**G) Contenuti e asset esistenti**
- Materiali disponibili (brand guide, foto, video, testi)
- Accessi necessari (social, analytics, CRM)
- Contenuti passati che hanno funzionato bene

**H) Domande specifiche per settore**
- Personalizzate in base al settore dell'utente
- Queste differenziano un questionario generico da uno professionale

### 3. Scrivi le domande

**REGOLE PER LE DOMANDE:**

**Struttura:**
- Ogni sezione: titolo chiaro + intro di 1 riga che spiega perché servono quelle info
- Max 4-6 domande per sezione
- Max 20-25 domande totali (di più = il cliente non compila)
- Mix di domande aperte e a scelta multipla
- Le domande cruciali vanno prima (il cliente potrebbe non finire)

**Tono:**
- Professionale ma non burocratico
- Il cliente deve sentirsi guidato, non interrogato
- Ogni domanda deve avere un motivo chiaro
- Riformula domande tecniche: "Qual è il tuo posizionamento?" → "Come ti presenteresti a un potenziale cliente in 2 frasi?"

**Tipi di domande efficaci:**
- Scelta multipla con opzione "Altro": rapide e precise
- Scale 1-5: per capire priorità e percezioni
- Domande aperte brevi: "In 2-3 righe, descrivi..."
- Domande condizionali: "Se hai risposto Sì sopra, specifica..."

**Domande da evitare:**
- Troppo generiche: "Parlaci della tua azienda"
- Troppo tecniche: "Qual è il tuo CAC?"
- Domande retoriche o ovvie
- Domande doppie: "Budget e tempistiche?" → spezza in 2

### 4. Output come documento professionale

**Output primario: file .docx** con:
- Header con titolo professionale e branding (nome/logo dal PROFILE.md se disponibile)
- Intro di 3-4 righe: spiega al cliente cosa aspettarsi e perché compilare
- Sezioni con titoli formattati
- Spazio per le risposte (righe vuote, checkbox, scale)
- Footer con contatti (dal PROFILE.md se disponibile)
- Stima del tempo: "Tempo stimato: 10-15 minuti"

**Se docx non è possibile**: formato markdown pulito, pronto per copia-incolla.

Presenta così:

```
📋 QUESTIONARIO ONBOARDING — [Settore/Servizio]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 Sezioni: [N]
❓ Domande totali: [N]
⏱️ Tempo compilazione: ~[N] min
📄 Formato: [docx/markdown]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Preview delle prime 3-5 domande chiave]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 5. Domande specifiche per settore (riferimento)

**Marketing / Social Media:**
- Quali canali usi attualmente e con quale frequenza?
- Hai mai fatto campagne a pagamento? Budget mensile?
- 3 account che ti piacciono come stile

**Web Design / Sviluppo:**
- Hai un sito attuale? Cosa non funziona?
- 3 siti che ti piacciono come riferimento
- Funzionalità indispensabili vs nice-to-have

**Consulenza / Coaching:**
- Qual è la sfida più grande in questo momento?
- Hai già provato a risolverla? Come?
- Come sapresti che il percorso ha funzionato?

**E-commerce:**
- Quanti prodotti/SKU?
- Margine medio per ordine?
- Canali di vendita attuali e % per canale

**Content / Copywriting:**
- Hai una brand voice definita? Se sì, condividila
- 3 contenuti tuoi che ritieni riusciti
- Argomenti da evitare assolutamente

## Anti-pattern — NON fare MAI
- Questionari con 30+ domande (il cliente abbandona)
- Domande senza contesto
- Tono da modulo burocratico della PA
- Sezioni non rilevanti per il settore specifico
- Domande che richiedono dati che il cliente potrebbe non avere
- Questionari senza intro che spiega il perché
- Domande aperte troppo ampie senza guida
- Mancanza di stima del tempo di compilazione
- Ignorare nome, branding e settore dal PROFILE.md
