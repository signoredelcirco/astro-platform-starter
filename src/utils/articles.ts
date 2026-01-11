import { supabase } from '../db/supabase';

export interface Article {
  id?: number;
  title: string;
  content: string;
  section: string;
  created_at?: string;
}

export async function saveArticle(article: Article) {
  try {
    const { data, error } = await supabase
      .from('articles')
      .insert([{
        title: article.title,
        content: article.content,
        section: article.section,
      }])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error saving article:', error);
    return { success: false, error };
  }
}

export async function getArticlesBySection(section: string) {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('section', section)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return { success: false, error };
  }
}

export async function getAllArticles() {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching all articles:', error);
    return { success: false, error };
  }
}
