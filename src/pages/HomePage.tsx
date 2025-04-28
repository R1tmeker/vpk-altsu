import React from 'react';
import { HomepageHero } from '../components/HomepageHero';
import { FeatureSection } from '../components/FeatureSection';
import { UpcomingEvents } from '../components/UpcomingEvents';
import { TeamMembersSection } from '../components/TeamMembersSection';
import { NewsPreview } from '../components/NewsPreview';
import { GalleryPreview } from '../components/GalleryPreview';
import { mockEvents, mockNewsArticles, mockUsers, mockAlbums } from '../data/mockData';

const HomePage: React.FC = () => {
  // Get only upcoming events
  const upcomingEvents = mockEvents
    .filter((event) => new Date(event.startDate) > new Date())
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    .slice(0, 3);

  // Get recent news
  const recentNews = [...mockNewsArticles]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

  // Filter team members for display
  const teamMembers = mockUsers.filter(
    (user) => user.role === 'admin' || user.role === 'trainer' || user.role === 'moderator'
  );

  return (
    <div>
      <HomepageHero />
      <FeatureSection />
      <UpcomingEvents events={upcomingEvents} />
      <TeamMembersSection members={teamMembers} />
      <NewsPreview articles={recentNews} />
      <GalleryPreview albums={mockAlbums} />
    </div>
  );
};

export default HomePage;