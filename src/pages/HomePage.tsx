import React from 'react';
import { HomepageHero } from '../components/HomepageHero';
import { FeatureSection } from '../components/FeatureSection';
import { UpcomingEvents } from '../components/UpcomingEvents';
import { TeamMembersSection } from '../components/TeamMembersSection';
import { NewsPreview } from '../components/NewsPreview';
import { GalleryPreview } from '../components/GalleryPreview';
import { mockEvents, mockNewsArticles, mockUsers, mockAlbums } from '../data/mockData';

// Главная страница
const HomePage: React.FC = () => {
  // Получение предстоящих событий, фильтрация будущих событий и сортировка по дате
  const upcomingEvents = mockEvents
    .filter((event) => new Date(event.startDate) > new Date()) // Фильтрация будущих событий
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()) // Сортировка по дате начала
    .slice(0, 3); // Ограничение 3 событиями

  // Получение последних новостей, сортировка по дате создания
  const recentNews = [...mockNewsArticles]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) // Сортировка по дате создания
    .slice(0, 3); // Ограничение 3 статьями

  // Фильтрация членов команды для отображения (по ролям)
  const teamMembers = mockUsers.filter(
    (user) => user.role === 'admin' || user.role === 'trainer' || user.role === 'moderator'
  );

  return (
    <div>
      {/* Главный экран с героем */}
      <HomepageHero />
      {/* Секция с особенностями */}
      <FeatureSection />
      {/* Секция с предстоящими событиями */}
      <UpcomingEvents events={upcomingEvents} />
      {/* Секция с членами команды */}
      <TeamMembersSection members={teamMembers} />
      {/* Секция с превью новостей */}
      <NewsPreview articles={recentNews} />
      {/* Секция с галереей */}
      <GalleryPreview albums={mockAlbums} />
    </div>
  );
};

// Экспорт главной страницы
export default HomePage;
