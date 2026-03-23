---
name: content-calendar-builder
description: "Genera un calendario editoriale di 30 giorni con idee concrete, angoli diversi e formati alternati. Usa questa skill quando l'utente chiede un piano editoriale, un calendario di contenuti, un content plan, idee per post per un mese, o menziona 'piano editoriale', 'content calendar', 'calendario contenuti', 'programmazione post', 'cosa pubblicare'. Produce un piano completo con titoli, formati, angoli e ganci — niente suggerimenti generici, solo idee pubblicabili."
---

# Content Calendar Builder

## Cosa fa
Genera 30 giorni di contenuti con idee concrete, angoli diversi e formati alternati. Niente suggerimenti generici tipo "parla di leadership" — ogni idea ha titolo, formato, angolo specifico e hook pronto. Solo idee che useresti davvero.

## Step 0 — Carica il profilo
Prima di generare qualsiasi idea, leggi il file `PROFILE.md` nella cartella parent delle skill.
- Se compilato: usa settore, target, piattaforme, frequenza e obiettivi per calibrare TUTTO il calendario
- Se vuoto/assente: chiedi le 3 informazioni base (vedi sotto)
- Il profilo è la fonte primaria: se dice "LinkedIn 3/settimana" non chiedere la frequenza
- Usa i "temi forti" e "argomenti tabù" dal profilo per filtrare le idee

## Processo

### 1. Raccogli le informazioni
Servono 3 cose per un buon calendario. Cercale prima nel PROFILE.md:

**A) Settore/Nicchia** — Cosa fa l'utente, per chi
**B) Obiettivi** — Awareness, lead generation, vendita, community, personal brand
**C) Piattaforme e frequenza** — Dove pubblica e quanto spesso

Se mancano e il PROFILE.md non le ha, chiedi con UNA domanda combinata:
"Per fare un calendario che spacca mi servono 3 cose: il tuo settore, il tuo obiettivo principale, e dove pubblichi. Anche in una riga va bene."

### 2. Definisci i pillar di contenuto
Identifica 4-5 pillar tematici basati sul settore e obiettivo:

- **Expertise** — Dimostra competenza nel settore
- **Dietro le quinte** — Processo, errori, quotidianità
- **Opinioni/Hot take** — Posizioni forti su temi del settore
- **Valore pratico** — Tutorial, how-to, framework
- **Sociale/Umano** — Storie, riflessioni, vulnerabilità

Personalizza i nomi dei pillar sul settore specifico dell'utente. Es. per un fitness coach: "Allenamento", "Nutrizione", "Mindset", "Behind the scenes", "Risultati clienti".

### 3. Genera il calendario

**REGOLE DI GENERAZIONE:**

**Varietà di formato (alternare sempre):**
- Post testo (LinkedIn, Twitter/X)
- Carosello/Carousel (Instagram, LinkedIn)
- Video script breve (Reel, TikTok, Short)
- Newsletter deep-dive
- Sondaggio/Domanda
- Thread
- Story sequence

**Varietà di angolo (mai 2 post consecutivi con lo stesso approccio):**
- Educativo → Personale → Contrarian → Case study → Valore pratico
- Mai 2 liste di fila, mai 2 storie di fila, mai 2 opinioni di fila

**Frequenza:**
- Prendi la frequenza dal PROFILE.md se disponibile
- Se non specificata, proponi un default sensato per la piattaforma

**Ogni idea deve avere:**
1. **Giorno** — Giorno del mese e giorno della settimana
2. **Piattaforma** — Dove esce
3. **Formato** — Tipo di contenuto
4. **Pillar** — Quale area tematica copre
5. **Titolo/Hook** — Il titolo o l'hook del contenuto, pronto da usare
6. **Angolo** — In 1 riga, l'approccio specifico
7. **Note** — Spunti per lo sviluppo (solo se aggiungono valore)

### 4. Output

**Output primario: file .xlsx** con:
- Una riga per contenuto
- Colonne: Data | Giorno | Piattaforma | Formato | Pillar | Titolo/Hook | Angolo | Note
- Formattazione condizionale per pillar (colori diversi)
- Tab riepilogo: distribuzione per pillar, per formato, per piattaforma

**Se xlsx non è possibile**: tabella markdown chiara con le stesse colonne.

Aggiungi sempre un riepilogo testuale:

```
📅 CONTENT CALENDAR — [Mese] [Anno]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Obiettivo: [obiettivo]
📱 Piattaforme: [lista]
📊 Frequenza: [N post/settimana per piattaforma]

PILLAR:
1. [Nome] — [descrizione]
2. [Nome] — [descrizione]
3. [Nome] — [descrizione]
4. [Nome] — [descrizione]
5. [Nome] — [descrizione]

DISTRIBUZIONE:
- [Pillar 1]: [N]%
- [Pillar 2]: [N]%
- [etc.]
```

### 5. Il test di qualità
Prima di includere un'idea, applica questo filtro:

> "Se vedessi questo titolo nel mio feed, mi fermerei a leggerlo?"

Se no → riscrivilo o sostituiscilo.

**Idee BUONE (specifiche, azionabili):**
- "Ho perso un cliente da 50k. Ecco cosa ho sbagliato."
- "Il framework 3-2-1 per creare contenuti senza stress"
- "3 email che mi hanno generato più lead di 100 post"

**Idee CATTIVE (generiche, noiose):**
- "L'importanza del content marketing"
- "Come usare i social per il business"
- "Perché dovresti investire in marketing"

Zero filler. Ogni idea deve superare il test.

## Anti-pattern — NON fare MAI
- Idee generiche che vanno bene per qualsiasi settore
- Stesso formato per 3+ giorni consecutivi
- Stesso pillar per 3+ giorni consecutivi
- Titoli/hook che non fermerebbero nessuno nel feed
- Calendari con solo un tipo di contenuto
- Suggerimenti tipo "condividi un articolo interessante" senza specificare l'angolo
- Ignorare il weekend (i contenuti weekend funzionano diversamente)
- Sovraccaricare con troppi contenuti/giorno senza che l'utente lo chieda
- Hashtag nei titoli o nelle note
- Ignorare settore, target e tono del PROFILE.md
