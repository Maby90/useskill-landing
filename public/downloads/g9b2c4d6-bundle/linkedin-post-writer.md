---
name: linkedin-post-writer
description: "Genera post LinkedIn professionali e calibrati in italiano. Usa questa skill ogni volta che l'utente chiede di scrivere un post LinkedIn, creare contenuti per LinkedIn, trasformare un'idea in un post LinkedIn, o menziona 'post LinkedIn', 'LinkedIn', 'contenuto LinkedIn'. Funziona anche con input vaghi o parziali — basta un concetto, un appunto, una frase. La skill costruisce hook, corpo e chiusura ottimizzati per l'algoritmo LinkedIn."
---

# LinkedIn Post Writer Calibrato

## Cosa fa
Trasforma qualsiasi input — anche vago — in un post LinkedIn completo, calibrato per engagement e leggibilità mobile. Ogni post ha: hook che ferma lo scroll, corpo che mantiene l'attenzione, chiusura che genera interazione.

## Step 0 — Carica il profilo
Prima di scrivere qualsiasi cosa, leggi il file `PROFILE.md` nella stessa cartella delle skill (cartella parent).
- Se il file è compilato: usa tono di voce, target, settore e stile per calibrare il post
- Se il file è vuoto o assente: procedi chiedendo all'utente il minimo necessario
- Il profilo NON va citato nell'output — serve solo a te per scrivere nel modo giusto

## Processo

### 1. Analizza l'input
L'utente può dare:
- Un'idea vaga ("vorrei parlare di leadership")
- Un concetto specifico ("ho assunto 3 persone in una settimana")
- Un articolo/link da commentare
- Bullet point o appunti sparsi
- Un tema + angolo ("AI nel marketing, tono provocatorio")

Se l'input è troppo vago per procedere (es. solo "fammi un post"), chiedi UNA domanda mirata:
"Di cosa vuoi parlare? Anche un concetto in una riga va benissimo."

### 2. Scegli la struttura
Seleziona la struttura più efficace per il contenuto:

**A) Storia personale → Lezione**
- Hook: situazione concreta che crea curiosità
- Corpo: racconto breve (max 5-6 righe), poi il ribaltamento/insight
- Chiusura: principio universale + domanda

**B) Opinione forte / Contrarian**
- Hook: affermazione provocatoria o controintuitiva
- Corpo: 3 argomenti con evidenze/esempi
- Chiusura: invito al dibattito

**C) Lista di valore**
- Hook: promessa chiara di cosa si ottiene leggendo
- Corpo: 5-7 punti, ognuno su una riga, con emoji di contesto (non decorative)
- Chiusura: "Salva questo post" + domanda

**D) Caso studio / Risultato**
- Hook: numero o risultato concreto
- Corpo: contesto → problema → azione → risultato
- Chiusura: lezione replicabile + CTA

**E) Riflessione / Vulnerability**
- Hook: confessione o ammissione inaspettata
- Corpo: il percorso, cosa è cambiato
- Chiusura: messaggio di crescita + domanda personale

### 3. Scrivi il post

**Regole di scrittura INVIOLABILI:**

**Hook (prime 2-3 righe):**
- Deve funzionare PRIMA del "...vedi altro"
- Massimo 2 righe visibili su mobile
- Tecniche: numero concreto, domanda provocatoria, affermazione controintuitiva, confessione
- MAI iniziare con "Ciao a tutti", "Oggi vorrei parlare di...", "In questo post..."
- MAI usare frasi generiche tipo "Il mondo sta cambiando"

**Corpo:**
- Frasi corte. Una frase = una riga.
- Spazio bianco tra i paragrafi (riga vuota)
- Max 150-180 parole totali per il post
- Ogni frase deve aggiungere valore o far avanzare il ragionamento
- Usare numeri concreti quando possibile
- NO jargon inutile, NO buzzword vuote
- Tono: calibrato sul PROFILE.md — se assente, conversazionale ma autorevole

**Chiusura (ultime 2-3 righe):**
- Riassumi il concetto chiave in una frase
- Chiudi con UNA domanda aperta che inviti al commento
- La domanda deve essere facile da rispondere
- Oppure: CTA chiara ("Salva se ti è utile", "Condividi con chi...")

**Formattazione:**
- Riga vuota tra ogni blocco di 1-3 frasi
- Emoji: massimo 3-4 nel post, solo se aggiungono contesto visivo
- NO grassetto esagerato, NO CAPS LOCK per intere frasi
- NO liste puntate infinite
- ZERO hashtag (obsoleti su LinkedIn — non usarli mai)

### 4. Output

Presenta il post così:

```
📝 POST LINKEDIN
━━━━━━━━━━━━━━━

[Il post completo, pronto per copia-incolla]

━━━━━━━━━━━━━━━
📊 Note:
- Struttura: [A/B/C/D/E — nome]
- Parole: [N]
- Hook: [tipo di hook usato]
- Obiettivo: [commenti/condivisioni/salvataggi]
```

### 5. Varianti (se richiesto)
Se l'utente chiede alternative, offri 2 varianti con strutture diverse.
Se chiede di modificare il tono, adatta mantenendo la stessa struttura.

## Anti-pattern — NON fare MAI
- Post che sembrano scritti da un AI (frasi generiche, strutture prevedibili, tono asettico)
- "In un mondo dove..." come apertura
- Elenchi di 10+ punti senza contesto
- Tono predicatorio o da guru
- Frasi tipo "E tu? Cosa ne pensi?" piazzate a caso senza contesto
- Emoji ogni 3 parole
- Hashtag di qualsiasi tipo
- Post più lunghi di 200 parole (sweet spot: 120-170)
- Aperture con "Ho imparato una lezione importante" (MOSTRA la lezione, non annunciarla)
- Ignorare il tono e lo stile del PROFILE.md se è compilato
