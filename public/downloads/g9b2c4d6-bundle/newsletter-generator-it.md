---
name: newsletter-generator-it
description: "Genera newsletter professionali in italiano partendo da appunti, punti chiave o idee sparse. Usa questa skill quando l'utente chiede di scrivere una newsletter, creare una email per la mailing list, trasformare appunti in una newsletter, o menziona 'newsletter', 'email marketing', 'mailing list', 'email settimanale/mensile'. Produce oggetto, apertura, corpo strutturato e call to action — tutto pronto per l'invio."
---

# Newsletter Generator IT

## Cosa fa
Trasforma appunti, punti chiave o idee sparse in una newsletter completa e professionale in italiano. Output: oggetto email, preview text, apertura, corpo strutturato, CTA. Pronta per copia-incolla nel tool di email marketing.

## Step 0 — Carica il profilo
Prima di scrivere, leggi il file `PROFILE.md` nella cartella parent delle skill.
- Se compilato: usa tono di voce, target, settore, nome e stile per calibrare la newsletter
- Se vuoto/assente: procedi chiedendo il minimo necessario
- Usa il nome dal profilo per firmare la newsletter (se presente)
- Adatta registro e tecnicismi al livello del target indicato nel profilo

## Processo

### 1. Raccogli l'input
L'utente può fornire:
- Appunti sparsi o bullet point
- Un tema/argomento principale
- Link ad articoli da commentare
- Punti chiave della settimana/mese
- Un mix di contenuti da organizzare

Se l'input è insufficiente, chiedi al massimo 2 domande:
1. "Qual è il messaggio principale che vuoi far passare?"
2. "Chi sono i destinatari?" (solo se non è chiaro dal PROFILE.md o dal contesto)

### 2. Determina il tipo di newsletter

**A) Curated / Rassegna**
- 3-5 argomenti selezionati con commento personale
- Ogni sezione: titolo + 2-3 frasi di insight + link (se disponibile)
- Filo conduttore che collega le sezioni

**B) Deep-dive / Approfondimento**
- Un solo tema sviluppato in profondità
- Struttura: contesto → analisi → implicazioni pratiche → prossimi passi
- Sottosezioni con titoli parlanti

**C) Update / Aggiornamento**
- Novità dal business/progetto
- Struttura: cosa è successo → perché conta → cosa cambia per il lettore
- Tono diretto e concreto

**D) Educational / How-to**
- Insegna qualcosa di pratico
- Struttura: problema → framework → step-by-step → esempio concreto
- Il lettore deve poter applicare subito

### 3. Scrivi la newsletter

**OGGETTO EMAIL (Subject line):**
- Max 50 caratteri (visualizzazione mobile)
- Tecniche efficaci:
  - Numero concreto: "3 errori che ho fatto su X"
  - Curiosità: "Quello che nessuno dice su X"
  - Beneficio diretto: "Come fare X in metà tempo"
  - Domanda: "Stai facendo anche tu questo errore?"
- MAI: clickbait puro, ALL CAPS, emoji nell'oggetto, "Newsletter #47"
- Genera 3 opzioni di oggetto, indica quella consigliata

**PREVIEW TEXT:**
- 80-100 caratteri che completano l'oggetto
- Deve aggiungere contesto, non ripetere l'oggetto

**APERTURA (Prime 3-4 righe):**
- Aggancia il lettore nei primi 2 secondi
- Tecniche: aneddoto breve, dato sorprendente, domanda diretta, affermazione forte
- MAI: "Ciao a tutti! Spero che stiate bene" (zero valore)
- MAI: "In questa newsletter parleremo di..." (noioso)
- Sì: tono conversazionale, come se scrivessi a un collega che stimi

**CORPO:**
- Frasi corte, paragrafi di 2-3 righe max
- Sottotitoli per ogni sezione (rendono scannable)
- Grassetto strategico: solo concetti chiave (1-2 per sezione)
- Una sola idea per paragrafo
- Esempi concreti > teoria astratta
- Lunghezza totale: 400-600 parole (4-5 minuti di lettura)

**CALL TO ACTION (Chiusura):**
- UNA sola CTA principale, chiara e specifica
- Deve essere un'azione concreta: rispondere, cliccare, provare qualcosa
- Opzionale: PS con contenuto bonus o teaser per la prossima uscita
- Il PS è il secondo elemento più letto dopo l'oggetto — usalo bene

### 4. Output

Presenta la newsletter così:

```
📧 NEWSLETTER
━━━━━━━━━━━━━━━

📌 Oggetto (consigliato): [oggetto 1]
   Alternativa A: [oggetto 2]
   Alternativa B: [oggetto 3]

👁️ Preview text: [preview]

━━━━━━━━━━━━━━━

[Testo completo della newsletter, pronto per copia-incolla]

━━━━━━━━━━━━━━━
📊 Note:
- Tipo: [A/B/C/D]
- Parole: [N]
- Tempo di lettura: ~[N] min
- CTA principale: [descrizione]
```

### 5. Checklist interna (verifica prima di presentare)
- [ ] Oggetto < 50 caratteri?
- [ ] Apertura aggancia in 2 secondi?
- [ ] Ogni sezione ha un titolo parlante?
- [ ] Una sola CTA chiara?
- [ ] Tono consistente con PROFILE.md?
- [ ] Nessun paragrafo supera le 3 righe?
- [ ] Il PS aggiunge valore?

## Anti-pattern — NON fare MAI
- Newsletter che sembrano compiti scolastici (intro → svolgimento → conclusione)
- Aperture con saluti generici senza valore
- Muri di testo senza sottotitoli
- CTA multiple che confondono
- Tono da comunicato stampa aziendale
- Grassetto su intere frasi o paragrafi
- Emoji come decorazione (sì come bullet point per scansionabilità)
- Gergo inglese non necessario quando esiste l'equivalente italiano chiaro
- Hashtag o tag social alla fine della newsletter
