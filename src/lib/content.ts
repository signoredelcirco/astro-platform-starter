// Helper per leggere e parsare i file di contenuto (pages, episodes, posts)
// Questo file facilita l'accesso ai dati del CMS

import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const contentDir = join(process.cwd(), 'src', 'content');

// Tipo per i metadati frontmatter
export interface ContentMetadata {
  title: string;
  slug?: string;
  date?: string;
  description?: string;
  cover?: string;
  excerpt?: string;
  spreaker_episode_id?: string;
  [key: string]: any;
}

export interface ContentPage {
  metadata: ContentMetadata;
  content: string;
}

// Legge tutti gli episodi
export function getEpisodes(): ContentPage[] {
  // Qui venerebbero letti i file da src/content/episodes
  // Per ora ritorno un placeholder
  return [];
}

// Legge tutti i post
export function getPosts(): ContentPage[] {
  // Leggerebbe i file da src/content/posts
  return [];
}

// Legge la pagina home
export function getHomePage(): ContentPage {
  return { metadata: { title: 'Home' }, content: '' };
}

// Legge la pagina about
export function getAboutPage(): ContentPage {
  return { metadata: { title: 'Chi sono' }, content: '' };
}
