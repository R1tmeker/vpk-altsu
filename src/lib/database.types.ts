// Типы для работы с данными
export interface User {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'trainer' | 'moderator' | 'user';
  avatar_url: string | null;
  bio: string | null;
  created_at: string;
}

export interface Event {
  id: string;
  title: string;
  description: string | null;
  location: string;
  start_date: string;
  end_date: string;
  type: 'training' | 'competition' | 'meeting' | 'expedition' | 'other';
  repeat: 'once' | 'daily' | 'weekly' | 'monthly';
  is_cancelled: boolean;
  is_rescheduled: boolean;
  trainer_id: string | null;
  created_by: string;
  created_at: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  cover_image: string | null;
  category: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}