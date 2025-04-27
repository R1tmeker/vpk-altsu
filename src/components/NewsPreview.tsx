import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Card, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { NewsArticle } from '../types';

interface NewsPreviewProps {
  articles: NewsArticle[];
}

export const NewsPreview: React.FC<NewsPreviewProps> = ({ articles }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-heading">Последние новости</h2>
          <p className="mt-3 text-lg text-gray-600">
            Будьте в курсе последних событий и мероприятий нашего клуба
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.id} hoverable className="h-full flex flex-col">
              {article.coverImage && (
                <Link to={`/news/${article.id}`}>
                  <img 
                    src={article.coverImage} 
                    alt={article.title} 
                    className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              )}
              <CardContent className="flex flex-col h-full">
                <div className="mb-3">
                  <Badge variant="primary">{article.category}</Badge>
                  <span className="text-sm text-gray-500 ml-2">
                    {format(article.createdAt, 'dd.MM.yyyy')}
                  </span>
                </div>
                
                <Link to={`/news/${article.id}`}>
                  <h3 className="text-xl font-semibold mb-2 hover:text-primary-700 transition-colors">
                    {article.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Link to={`/news/${article.id}`}>
                    <Button variant="outline" fullWidth>
                      Читать полностью
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/news">
            <Button variant="primary">Все новости</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};