---
name: brand-voice-extractor
description: "Analizza i contenuti esistenti di un brand o professionista ed estrae il tono di voce, lo stile di scrittura, i pattern linguistici e le regole di comunicazione. Usa questa skill quando l'utente chiede di analizzare il proprio tono di voce, estrarre la brand voice, capire come scrive, definire le linee guida di comunicazione, o menziona 'tono di voce', 'brand voice', 'come scrivo', 'stile di comunicazione', 'voice guidelines'. Funziona con post LinkedIn, caption Instagram, newsletter, pagine web, email — qualsiasi testo scritto dall'utente o dal brand."
---

# Brand Voice Extractor

## Cosa fa
Analizza i contenuti esistenti di un brand o professionista ed estrae un profilo completo del tono di voce: stile, pattern, vocabolario, ritmo, regole e anti-pattern. L'output è un documento pronto da usare come guida per chiunque debba scrivere per quel brand — o da inserire direttamente nel PROFILE.md per calibrare tutte le altre skill.

## Step 0 — Verifica il profilo
Controlla se esiste un `PROFILE.md` nella cartella parent delle skill.
- Se la sezione "Tono di voce" è già compilata: usala come punto di partenza, poi arricchiscila/conferma con l'analisi dei testi
- Se è vuota: l'analisi che stai per fare può compilarla — offrilo all'utente alla fine
- Questo è il ponte: la Brand Voice Extractor alimenta il PROFILE.md, che alimenta tutte le altre skill

## Processo

### 1. Raccogli i testi da analizzare
Servono contenuti scritti dall'utente o dal brand. Più ce ne sono, più l'analisi è precisa.

**Input ideale (in ordine di utilità):**
- 5-10 post LinkedIn o caption Instagram già pubblicati
- 2-3 newsletter inviate
- Pagina "Chi siamo" o "About" del sito
- Email a clienti (non template, email reali)
- Bio o presentazioni scritte di proprio pugno
- Qualsiasi testo dove l'utente sente "questo sono io"

**Input minimo:** almeno 3 testi diversi. Con meno è troppo poco per estrarre pattern affidabili.

Se l'utente non fornisce testi, chiedi:
"Per estrarre il tuo tono di voce mi servono almeno 3 tuoi contenuti scritti — post, email, newsletter, pagine del sito. Incollali qui o allegali come file."

### 2. Analisi in profondità

Analizza i testi su 8 dimensioni. Per ognuna, estrai pattern concreti con esempi reali dai testi forniti.

**A) Registro e formalità**
- Dove si posiziona su scala informale ↔ formale?
- Usa il "tu" o il "Lei"?
- Quanto è colloquiale? Usa espressioni parlate?
- Esempio dai testi: [cita una frase che esemplifica il registro]

**B) Struttura delle frasi**
- Frasi corte e dirette o lunghe e articolate?
- Usa paragrafi brevi o blocchi densi?
- Domande retoriche? Quanto spesso?
- Pattern di ritmo: "corta-corta-lunga" o uniforme?
- Esempio dai testi: [pattern ricorrente]

**C) Vocabolario e lessico**
- Parole ricorrenti (le ripete spesso — sono le sue parole-firma)
- Tecnicismi: li usa? Li spiega?
- Anglicismi: li evita, li abbraccia o li mixa?
- Parole che NON usa mai (assenze significative)
- Esempio: "[parola]" compare N volte su N testi → parola-firma

**D) Aperture e chiusure**
- Come inizia i contenuti? (domanda, dato, storia, affermazione...)
- Come chiude? (CTA, domanda, riflessione, frase secca...)
- Ha un pattern riconoscibile nelle aperture?
- Esempio: "Su 8 post, 5 iniziano con una domanda diretta al lettore"

**E) Dispositivi retorici**
- Usa metafore? Di che tipo? (sport, guerra, viaggio, cibo...)
- Humor: presente? Che tipo? (ironia, autoironia, sarcasmo...)
- Storytelling: racconta storie personali? In prima persona?
- Numeri e dati: li usa come prova o li evita?
- Esempio: [dispositivo + citazione dal testo]

**F) Relazione con il lettore**
- Parla al lettore o parla di sé?
- Inclusivo ("noi") o direttivo ("tu devi")?
- Vulnerabile o sempre in posizione di autorità?
- Come gestisce il disaccordo?

**G) Valori impliciti**
- Cosa emerge come importante? (concretezza, trasparenza, velocità, qualità...)
- Cosa critica? Cosa celebra?
- Che visione del mondo traspare?

**H) Anti-pattern (cosa NON fa)**
- Cosa evita costantemente? (certi argomenti, certi toni, certe strutture)
- Cosa non troveresti MAI nei suoi contenuti?
- Questo è fondamentale: sapere cosa NON fare è importante quanto sapere cosa fare

### 3. Genera il report

**Output: Brand Voice Report** — un documento strutturato con:

```
🎤 BRAND VOICE — [Nome brand/professionista]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Analisi basata su: [N] contenuti ([tipi])

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## IDENTITÀ VOCALE IN UNA FRASE
[Una frase che cattura l'essenza: es. "Diretto come un messaggio WhatsApp, preciso come un foglio Excel."]

## PROFILO COMPLETO

### Registro
[Analisi + esempi reali]

### Struttura
[Pattern + esempi]

### Vocabolario
Parole-firma: [lista]
Parole assenti: [lista]
[Analisi anglicismi e tecnicismi]

### Aperture e chiusure
[Pattern + statistiche]

### Dispositivi retorici
[Analisi + esempi]

### Relazione col lettore
[Analisi]

### Valori impliciti
[Cosa emerge]

### Anti-pattern
[Cosa NON fa MAI]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## REGOLE OPERATIVE

Le regole pratiche per chiunque debba scrivere con questa voce:

✅ FAI:
1. [Regola concreta con esempio]
2. [Regola concreta con esempio]
3. [Regola concreta con esempio]
4. [Regola concreta con esempio]
5. [Regola concreta con esempio]

❌ NON FARE:
1. [Anti-regola con esempio]
2. [Anti-regola con esempio]
3. [Anti-regola con esempio]
4. [Anti-regola con esempio]
5. [Anti-regola con esempio]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## TEST DI VOCE

Per verificare se un testo rispetta questa voce, chiediti:
1. [Domanda di verifica specifica per questo brand]
2. [Domanda di verifica specifica]
3. [Domanda di verifica specifica]

Se la risposta a tutte è sì, il testo è in voce.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 4. Integrazione con PROFILE.md

Alla fine del report, proponi all'utente:

"Vuoi che inserisca queste informazioni nel tuo PROFILE.md? Così tutte le altre skill (LinkedIn, Newsletter, Carousel, Calendar, Onboarding) useranno automaticamente il tuo tono di voce."

Se l'utente accetta:
- Compila la sezione "Tono di voce" del PROFILE.md con:
  - Stile di comunicazione (le checkbox giuste)
  - Parole/espressioni che usa spesso (le parole-firma)
  - Parole/espressioni da evitare (gli anti-pattern)
  - Tu/Lei
- Se altre sezioni del PROFILE.md sono vuote ma l'analisi ha rivelato info utili (es. settore, target), suggerisci di compilarle

### 5. Output come file (se richiesto)

Se l'utente vuole un documento scaricabile:
- Genera un **.docx** professionale con il report completo
- Oppure un **.md** se preferisce testo puro
- Il documento deve essere pronto da condividere con copywriter, social media manager, o team

## Anti-pattern — NON fare MAI
- Analisi generiche che vanno bene per chiunque ("tono professionale ma amichevole" senza prove)
- Conclusioni senza citare esempi reali dai testi analizzati
- Inventare pattern non supportati dai dati
- Usare terminologia di marketing vuota ("brand identity autentica e coerente")
- Ignorare gli anti-pattern (cosa NON fa è cruciale quanto cosa fa)
- Report troppo lungo e teorico — le regole operative sono la parte più importante
- Dimenticare di proporre l'integrazione con PROFILE.md
- Analizzare meno di 3 testi (risultato inaffidabile — chiedi più materiale)
