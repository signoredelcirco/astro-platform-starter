# Configurazione Google OAuth per il Pannello Admin

## Panoramica

Il pannello admin del sito supporta l'autenticazione tramite Google OAuth 2.0. Questo documento fornisce le istruzioni per configurare l'accesso Google.

## Prerequisiti

- Un account Google
- Accesso a [Google Cloud Console](https://console.cloud.google.com/)
- Il dominio del tuo sito GitHub Pages (es. `signoredelcirco.github.io`)

## Passaggi per la Configurazione

### 1. Creare un Progetto Google Cloud

1. Vai a [Google Cloud Console](https://console.cloud.google.com/)
2. Clicca sul dropdown del progetto nella parte superiore della pagina
3. Seleziona **Nuovo Progetto**
4. Assegna un nome al progetto (es. "Podcast Admin Panel")
5. Clicca **Crea**

### 2. Abilitare l'API Google+ (Identity)

1. Nel menu laterale, vai a **API e Servizi** > **Libreria**
2. Cerca "Google+ API"
3. Clicca su **Google+ API** e seleziona **Abilita**

### 3. Creare le Credenziali OAuth

1. Nel menu laterale, vai a **API e Servizi** > **Credenziali**
2. Clicca sul pulsante **+ Crea Credenziali**
3. Seleziona **ID Client OAuth**
4. Se richiesto, configura la schermata di consenso OAuth:
   - Seleziona **Esterno** come tipo di utente
   - Clicca **Crea**
   - Compila il modulo:
     - **Nome app**: Podcast Admin
     - **Email di supporto**: Il tuo indirizzo email
     - **Email di contatto**: Il tuo indirizzo email
     - Salva e continua
5. Dopo la configurazione della schermata di consenso, torna a **Credenziali**
6. Clicca di nuovo **+ Crea Credenziali** > **ID Client OAuth**
7. Seleziona **Applicazione Web**
8. Sotto **URI di reindirizzamento autorizzati**, clicca **+ Aggiungi URI**
9. Aggiungi i seguenti URI:
   - `https://signoredelcirco.github.io/astro-platform-starter/admin/`
   - `https://signoredelcirco.github.io/astro-platform-starter/admin`
   - `http://localhost:3000/admin/` (per il testing locale)
   - `http://localhost:3000/admin`
10. Clicca **Crea**

### 4. Ottenere il Client ID

1. Dopo la creazione, visualizzerai il tuo **Client ID**
2. Copia il **Client ID** (non il Client Secret per questo scopo)

## Configurare il Client ID nel Sito

### Opzione 1: Modifica Diretta del File (Sconsigliato per Ambienti di Produzione)

1. Vai al file `src/pages/admin.astro`
2. Trova la linea con `data-client_id="YOUR_GOOGLE_CLIENT_ID"`
3. Sostituisci `YOUR_GOOGLE_CLIENT_ID` con il tuo Client ID ottenuto
4. Salva il file e fai il commit su GitHub

### Opzione 2: Variabili d'Ambiente (Consigliato)

#### Per GitHub Pages (usando un file di configurazione)

1. Crea un file `.env.local` nella root del progetto:
```
PUBLIC_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID_HERE
```

2. Aggiorna il file `src/pages/admin.astro` per utilizzare la variabile:
```html
<div
  id="g_id_onload"
  data-client_id={import.meta.env.PUBLIC_GOOGLE_CLIENT_ID}
  data-callback="handleCredentialResponse"
></div>
```

3. Fai il commit e il push su GitHub

#### Per sviluppo locale

1. Nel terminale, dalla root del progetto, imposta la variabile:
```bash
# Windows (PowerShell)
$env:PUBLIC_GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID_HERE"

# Windows (CMD)
set PUBLIC_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID_HERE

# macOS/Linux
export PUBLIC_GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID_HERE"
```

2. Avvia il server di sviluppo:
```bash
npm run dev
```

## Test Locale

1. Assicurati di aver impostato le variabili d'ambiente
2. Avvia il server di sviluppo: `npm run dev`
3. Apri http://localhost:3000/admin/
4. Clicca sul pulsante "Accedi con Google"
5. Completa il flusso di autenticazione Google
6. Dovresti visualizzare il pannello dashboard con le tue informazioni

## Test in Produzione (GitHub Pages)

1. Dopo il commit e il push su GitHub, attendi 2-3 minuti perché GitHub Pages ricostruisca il sito
2. Visita https://signoredelcirco.github.io/astro-platform-starter/admin/
3. Testa l'accesso Google

## Troubleshooting

### "Client ID non configurato"

**Causa**: Il Client ID non è stato correttamente impostato.

**Soluzione**: Verifica che:
- Il file `admin.astro` contenga il tuo Client ID effettivo (non `YOUR_GOOGLE_CLIENT_ID`)
- Se usi variabili d'ambiente, assicurati che siano configurate correttamente
- Per GitHub Pages, ricostruisci il sito facendo un nuovo push

### Errore di reindirizzamento (redirect_uri_mismatch)

**Causa**: L'URI di reindirizzamento non è configurato in Google Cloud Console.

**Soluzione**:
1. Vai a Google Cloud Console > Credenziali
2. Clicca sull'ID Client OAuth che hai creato
3. Aggiungi l'URI esatto dove il sito è ospitato (es. `https://signoredelcirco.github.io/astro-platform-starter/admin/`)
4. Clicca Salva
5. Attendi 5-10 minuti per l'applicazione dei cambiamenti

### Il pulsante Google non appare

**Causa**: Lo script di Google GSI non è stato caricato.

**Soluzione**:
- Verifica che la pagina include: `<script src="https://accounts.google.com/gsi/client" async defer></script>`
- Controlla la console del browser (F12) per eventuali errori
- Ricarica la pagina (Ctrl+F5 per hard refresh)

## Funzionalità di Autenticazione

Una volta configurato, l'admin panel fornisce:

- ✅ Accesso tramite Google OAuth
- ✅ Decodifica JWT del token di accesso
- ✅ Persistenza della sessione tramite localStorage
- ✅ Visualizzazione delle informazioni utente
- ✅ Pulsante di logout
- ✅ Navigazione verso la home page dal pannello

## Prossimi Passi

Dopo aver configurato l'autenticazione, puoi:

1. **Aggiungere gestione dei ruoli**: Differenziare fra admin, editor e viewer
2. **Implementare API backend**: Creare un backend per la gestione dei contenuti
3. **Aggiungere protezione delle pagine**: Proteggere le route protette
4. **Implementare funzioni CRUD**: Creare, leggere, aggiornare, eliminare contenuti

## Supporto

Per problemi relativi a Google OAuth, consulta la [documentazione ufficiale di Google Sign-In](https://developers.google.com/identity/protocols/oauth2).
