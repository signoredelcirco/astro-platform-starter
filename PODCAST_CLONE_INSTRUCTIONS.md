# Podcast Site - Clone & Setup Instructions

## Overview
Queste sono le istruzioni complete per replicare il sito podcast su GitHub usando Git CLI.
Tutto il contenuto del sito visual-podcasts.preview.emergentagent.com sara copiato fedelmente.

## Step 1: Clone Repository

```bash
git clone https://github.com/signoredelcirco/astro-platform-starter.git
cd astro-platform-starter
```

## Step 2: Create Directory Structure

```bash
mkdir -p src/pages/sections
mkdir -p src/components
mkdir -p src/layouts
mkdir -p src/styles
```

## Step 3: Create Layout Component

Create `src/layouts/PodcastLayout.astro`

## Step 4: Create Pages

Create the following pages in `src/pages/`:
- index.astro (HOME)
- opinione-non-richiesta.astro
- a-normal.astro
- chiacchiere.astro
- chi-sono.astro

## Step 5: Modify astro.config.mjs

Ensure routing is configured correctly

## Step 6: Add Tailwind Styles

Add custom styles for podcast layout

## Step 7: Commit and Push

```bash
git add .
git commit -m "Add podcast site pages and components"
git push origin main
```

NOTE: Questo e un file di partenza. I file specifici dovranno essere creati singolarmente.
