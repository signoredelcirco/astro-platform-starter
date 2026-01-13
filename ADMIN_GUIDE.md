# A-Normal Opinion - Admin Guide

## 🎯 Modifiche Completate

Il sito è stato completamente ridisegnato con il branding **A-Normal Opinion** e dotato di un **sistema Admin completo** che ti permette di modificare tutte le sezioni senza toccare il codice.

### ✅ Cambiamenti Implementati

#### 1. **Header Redesignato** 🎨
- **Prima**: "I Podcast del Signore del Circo"
- **Adesso**: "A-Normal Opinion"
- Design moderno con tema scuro e accenti cyan (#0ea5e9)
- Titolo e sottotitolo dinamici configurabili
- Responsive design per mobile

#### 2. **Admin Dashboard - Netlify CMS** 🎛️
Accedi all'admin dashboard: `https://tuosito.com/admin`

**Sezioni Disponibili:**

**📝 Articoli**
- Crea, modifica e pubblica articoli
- Carica immagini di copertina
- Visualizza anteprima in tempo reale

**🎙️ Podcast**
- Gestisci episodi dei podcast
- Numeri episodio, date di uscita
- Link audio e durata
- Note e descrizioni

**⚙️ Configurazione Sito** (NUOVO)
- Modifica titolo del sito
- Cambio sottotitolo
- Descrizione sito e metadati SEO
- Link ai social media (Instagram, Twitter, YouTube, Spotify, LinkedIn)
- Colori tema (primario e secondario)
- Informazioni autore e email

#### 3. **Variabili di Configurazione**
File: `.env.local`
```
SITE_TITLE="A-Normal Opinion"
SITE_SUBTITLE="Opinioni Non Richieste"
```

File: `src/config/site.yml`
Contiene la configurazione principale gestibile via CMS

#### 4. **Codice Snellito**
- Rimossi componenti non necessari
- Semplificato markup HTML
- Ottimizzato CSS globale
- Migliorata performance

---

## 📱 Come Usare l'Admin

### Accesso
1. Vai su `https://tuosito.com/admin`
2. Effettua login con le tue credenziali GitHub
3. Seleziona la sezione che vuoi modificare

### Modificare la Configurazione del Sito
1. Clicca su **"Configurazione Sito"** nel menu
2. Clicca su **"Configurazione Principale"**
3. Modifica i campi:
   - Titolo Sito
   - Sottotitolo
   - Descrizione
   - Autore
   - Email
   - Social Links (Instagram, Twitter, YouTube, Spotify, LinkedIn)
   - Colori tema
4. Clicca **"Salva"** in alto a destra
5. Pubblica la modifica quando pronto

### Creare un Nuovo Articolo
1. Clicca su **"Articoli"**
2. Clicca **"Crea Nuovo"** (tasto "+")
3. Compila i campi:
   - Titolo
   - Descrizione (estratto)
   - Autore (default: Signore del Circo)
   - Data di pubblicazione
   - Immagine di copertina (opzionale)
   - Corpo articolo (editor markdown)
4. Salva e pubblica

### Aggiungere un Episodio Podcast
1. Clicca su **"Puntate Podcast"**
2. Clicca **"Crea Nuovo"**
3. Compila:
   - Titolo episodio
   - Descrizione
   - Numero episodio
   - Data di uscita
   - Link audio/Spotify
   - Durata (es: 45:30)
   - Note (opzionale)
4. Salva e pubblica

---

## 🎨 Customizzazione

### Cambiare i Colori del Tema
1. Vai in **Configurazione Sito → Configurazione Principale**
2. Modifica:
   - **Colore Primario (Hex)**: attualmente `#0ea5e9` (cyan)
   - **Colore Secondario (Hex)**: attualmente `#06b6d4` (teal)
3. I colori si applicheranno automaticamente al header e ai componenti

### Aggiornare i Link Sociali
1. Vai in **Configurazione Sito → Configurazione Principale**
2. Trova la sezione **Social Links**
3. Aggiorna gli URL:
   - Instagram
   - Twitter (X)
   - YouTube
   - Spotify
   - LinkedIn

---

## 📁 Struttura File Modificati

```
src/
├── components/
│   └── Header.astro          ← RIDISEGNATO (A-Normal Opinion)
├── config/
│   └── site.yml              ← NUOVO (configurazione sito)
├── layouts/
│   └── Layout.astro          ← (supporta variabili d'ambiente)
│
public/
└── admin/
    └── config.yml            ← AGGIORNATO (nuova collection site_config)

.env.local                     ← AGGIORNATO (variabili SITE_TITLE e SITE_SUBTITLE)
```

---

## 🚀 Prossimi Passaggi

### Favicon Personalizzato
Quando fornisci l'immagine per il favicon, sarà necessario:
1. Convertire l'immagine in formato SVG (se non lo è già)
2. Sostituire `public/favicon.svg`
3. Commita il cambiamento su GitHub

### Deploy
1. Il sito è deployato su **Netlify** (GitHub Pages)
2. Ogni commit su GitHub triggera un nuovo deploy automatico
3. I cambiamenti fatti via CMS vengono salvati automaticamente su GitHub

---

## 🔧 Note Tecniche

- **CMS**: Netlify CMS (configurazione in `public/admin/config.yml`)
- **Backend**: Git Gateway (GitHub)
- **Framework**: Astro.js
- **Hosting**: Netlify / GitHub Pages
- **Configurazione dinamica**: Astro Environment Variables + YAML config file

---

## 📞 Support

Se hai domande o bisogno di aiuto:
1. Controlla il file config.yml nel pannello admin
2. Verifica che le modifiche siano state salvate correttamente
3. Fai un hard refresh del browser (Ctrl+Shift+R)

---

**Ultima modifica**: 13 Gennaio 2026
**Versione**: 2.0 - A-Normal Opinion Edition
