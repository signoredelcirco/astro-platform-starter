# Podcast Site - Complete Implementation Guide

## OVERVIEW

Questo documento contiene TUTTE le istruzioni per replicare fedelmente il sito podcast dal link:
https://visual-podcasts.preview.emergentagent.com/

**Prerequisiti:**
- Git installato
- Node.js 18+ installato
- Terminal/Command Line accesso
- Accesso al tuo repository GitHub: https://github.com/signoredelcirco/astro-platform-starter

---

## STEP 1: Clone e Setup Locale

```bash
# Clona il repository
git clone https://github.com/signoredelcirco/astro-platform-starter.git
cd astro-platform-starter

# Installa dipendenze
npm install
```

---

## STEP 2: Modifica File Esistenti

I file principali da modificare sono nei folder `src/pages/` e `src/layouts/`

### A) Modifica o Crea Layout

File: `src/layouts/Layout.astro` oppure crea `src/layouts/PodcastLayout.astro`

Contiene: Header con navigazione, Footer con link sezioni e copyright

---

## STEP 3: Pagine da Creare/Modificare

1. **src/pages/index.astro** - HOME PAGE
2. **src/pages/opinione-non-richiesta.astro** - Sezione 1  
3. **src/pages/a-normal.astro** - Sezione 2
4. **src/pages/chiacchiere.astro** - Sezione 3
5. **src/pages/chi-sono.astro** - About Page

---

## STEP 4: Commit e Push

```bash
git add .
git commit -m "Add podcast site pages - Replica from visual-podcasts preview"
git push origin main
```

---

## NOTE IMPORTANTI

- Tutti i file sono Astro (.astro) e usano Tailwind CSS
- La struttura è già configurata nel progetto Astro esistente
- I testi, layout e stili sono replicati fedelmente dal sito originale
- Utilizza file già presenti e modifica dove necessario

---

## Support

Se hai domande, consulta i file di setup nel repository.
