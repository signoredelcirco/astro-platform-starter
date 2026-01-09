# 🎙️ Signore del Circo - Setup e Guida d'Uso

## 📋 Introduzione

Questo è il tuo sito podcast statico ospitato su GitHub Pages con editor visuale integrato. **Non dovrai mai toccare il codice** - tutto è gestito attraverso una dashboard visuale simile a WordPress.

## 🎯 Sezioni del sito

- **Home** (`/`) - Pagina di presentazione principale
- **Chi sono** (`/chi-sono`) - La tua bio e link social
- **Ascoltami** (`/ascoltami`) - Lista di tutti i tuoi episodi podcast
- **Leggi** (`/leggi`) - Blog con articoli e analisi

## 🚀 Come gestire i contenuti

### Opzione 1: Pages CMS (Consigliato - Editor Visuale)

1. Installa [Pages CMS](https://www.pagescms.org) come app GitHub
2. Connetti il repository `astro-platform-starter`
3. Accedi al pannello: https://pagescms.org
4. Vedrai le sezioni: **Pagine**, **Episodi Podcast**, **Articoli Blog**, **Chi Sono**

### Per ogni sezione:

#### 📌 **PAGINE** (Home, Chi sono)
- Titolo della pagina
- Testo principale
- Immagini
- Link CTA (call-to-action)

#### 🎙️ **EPISODI PODCAST**
- **Titolo**: Titolo dell'episodio
- **Slug**: URL amichevole (es: `episodio-1-game-of-thrones`)
- **Data**: Quando è stato pubblicato
- **Descrizione**: Note sulla puntata
- **Copertina**: Immagine episodio
- **ID Episodio Spreaker**: 
  1. Vai su Spreaker.com
  2. Clicca su una puntata
  3. L'ID è nella URL: `https://www.spreaker.com/episode/**ID-QUI**`
  4. Copia e incolla il numero
- **Tag**: Etichette (es: "Game of Thrones", "Analisi", ecc.)

#### 📝 **ARTICOLI BLOG**
- **Titolo**: Titolo articolo
- **Slug**: URL (es: `analisi-ned-stark`)
- **Data**: Pubblicazione
- **Copertina**: Immagine articolo
- **Estratto**: Anteprima per la lista articoli
- **Contenuto**: Il testo completo (Markdown supportato)
- **ID Spreaker** (opzionale): Se vuoi embeddare un player
- **Tag**: Categorie

#### 👤 **CHI SONO**
- **Titolo Pagina**: "Chi sono"
- **Biografia**: Testo su di te
- **Foto Profilo**: La tua foto
- **Link Social**: 
  - Piattaforma (YouTube, Instagram, TikTok, X, Spreaker, ecc.)
  - URL profilo
  - Icona FontAwesome (opzionale)

## 🔐 Sicurezza

- **Non usare mai dati sensibili** nel testo
- **Password**: I file sono su GitHub pubblicamente
- **Git**: Ogni modifica crea un commit automatico
- **Backup**: Il repository è il tuo backup

## 🌐 Pubblicazione

Il sito si pubblica automaticamente su GitHub Pages quando fai un commit (Pages CMS lo fa per te).

URL del sito: `https://signoredelcirco.github.io/astro-platform-starter/`

## 🛠️ Stack Tecnico (Per riferimento)

- **Astro**: Framework statico super-rapido
- **Markdown**: Formato semplice per i contenuti
- **GitHub**: Repository e hosting
- **Pages CMS**: Editor visuale collegato a Git
- **Spreaker**: Player podcast automatico

## 📚 Markdown Basics (Nel testo articoli)

```markdown
# Titolo 1
## Titolo 2
### Titolo 3

**Testo in grassetto**
*Testo in corsivo*

- Punto elenco
- Altro punto

1. Elenco numerato
2. Secondo elemento

[Link](https://example.com)

![Immagine](url-immagine.jpg)
```

## ❓ FAQ

**D: Come cambio il tema del sito?**  
R: Modifica il file `src/styles/theme.css` (oppure chiedi aiuto)

**D: Il player Spreaker non appare?**  
R: Assicurati di aver inserito l'ID corretto della puntata Spreaker

**D: Posso aggiungere altre pagine?**  
R: Sì, da Pages CMS puoi creare nuove sezioni

**D: Come posso dominare il ranking di Google?**  
R: Il sito è SEO-friendly di base. Aggiungi descriptions e keywords nei metadata

---

**Buona fortuna con il tuo podcast! 🎪**
