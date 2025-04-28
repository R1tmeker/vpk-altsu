import React from 'react';
// Импортируем компоненты, которые будут отображать различные секции на главной странице
import { HomepageHero } from '../components/HomepageHero';
import { FeatureSection } from '../components/FeatureSection';
import { UpcomingEvents } from '../components/UpcomingEvents';
import { TeamMembersSection } from '../components/TeamMembersSection';
import { NewsPreview } from '../components/NewsPreview';
import { GalleryPreview } from '../components/GalleryPreview';
// Импортируем моковые данные
import { mockEvents, mockNewsArticles, mockUsers, mockAlbums } from '../data/mockData';

const HomePage: React.FC = () => {
  // Получаем только предстоящие события (сортируем и отбираем первые 3)
  const upcomingEvents = mockEvents
    .filter((event) => new Date(event.startDate) > new Date()) // Только будущие события
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()) // Сортировка по дате
    .slice(0, 3); // Отбираем только 3 ближайших события

  // Получаем последние новости (сортируем по дате создания, отбираем первые 3)
  const recentNews = [...mockNewsArticles]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) // Сортировка по дате
    .slice(0, 3); // Отбираем только 3 последние новости

  // Фильтруем участников команды по ролям
  const teamMembers = mockUsers.filter(
    (user) => user.role === 'admin' || user.role === 'trainer' || user.role === 'moderator'
  );

  return (
    <div>
      {/* Компоненты для отображения секций на главной странице */}
      <HomepageHero />
      <FeatureSection />
      <UpcomingEvents events={upcomingEvents} /> {/* Передаем события в секцию */}
      <TeamMembersSection members={teamMembers} /> {/* Передаем участников в секцию */}
      <NewsPreview articles={recentNews} /> {/* Передаем новости в секцию */}
      <GalleryPreview albums={mockAlbums} /> {/* Передаем альбомы в секцию */}
    </div>
  );
};

export default HomePage;
