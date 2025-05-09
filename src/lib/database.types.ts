// Типы для работы с данными

// Интерфейс для представления пользователя
export interface User {
  id: string; // Уникальный идентификатор пользователя
  email: string; // Электронная почта пользователя
  full_name: string; // Полное имя пользователя
  role: 'admin' | 'trainer' | 'moderator' | 'user'; // Роль пользователя (админ, тренер, модератор, обычный пользователь)
  avatar_url: string | null; // URL аватара пользователя, может быть null, если аватар не установлен
  bio: string | null; // Биография пользователя, может быть null, если не указана
  created_at: string; // Дата и время создания пользователя
}

// Интерфейс для представления события
export interface Event {
  id: string; // Уникальный идентификатор события
  title: string; // Заголовок события
  description: string | null; // Описание события, может быть null, если описание не указано
  location: string; // Местоположение события
  start_date: string; // Дата начала события
  end_date: string; // Дата окончания события
  type: 'training' | 'competition' | 'meeting' | 'expedition' | 'other'; // Тип события (тренировка, соревнование, встреча, экспедиция и др.)
  repeat: 'once' | 'daily' | 'weekly' | 'monthly'; // Повторяемость события (один раз, ежедневно, еженедельно, ежемесячно)
  is_cancelled: boolean; // Флаг, указывающий, отменено ли событие
  is_rescheduled: boolean; // Флаг, указывающий, перенесено ли событие
  trainer_id: string | null; // Идентификатор тренера, может быть null, если тренер не назначен
  created_by: string; // Идентификатор пользователя, создавшего событие
  created_at: string; // Дата и время создания события
}

// Интерфейс для представления статьи новостей
export interface NewsArticle {
  id: string; // Уникальный идентификатор статьи
  title: string; // Заголовок статьи
  content: string; // Содержание статьи
  excerpt: string; // Краткое описание статьи
  cover_image: string | null; // URL изображения обложки, может быть null, если изображение не указано
  category: string; // Категория статьи (например, новости, события и т. д.)
  created_by: string; // Идентификатор пользователя, создавшего статью
  created_at: string; // Дата и время создания статьи
  updated_at: string; // Дата и время последнего обновления статьи
}