// Типы пользователей
export type UserRole = 'admin' | 'trainer' | 'moderator' | 'user';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  bio?: string;
  createdAt: Date;
}

// Типы мероприятий
export type EventType = 'training' | 'competition' | 'meeting' | 'expedition' | 'other';
export type EventRepeat = 'once' | 'daily' | 'weekly' | 'monthly';

export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  type: EventType;
  repeat: EventRepeat;
  isCancelled: boolean;
  isRescheduled: boolean;
  trainerId?: string;
  createdBy: string;
  createdAt: Date;
}

// Типы галереи
export interface Album {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  imagesCount: number;
  createdAt: Date;
}

export interface PhotoItem {
  id: string;
  albumId: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  tags: string[];
  createdAt: Date;
}

// Типы новостей
export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage?: string;
  category: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
}

// Тип контактной формы
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// Статистика панели управления
export interface DashboardStats {
  membersCount: number;
  upcomingEvents: number;
  newApplications: number;
  recentNewsCount: number;
}