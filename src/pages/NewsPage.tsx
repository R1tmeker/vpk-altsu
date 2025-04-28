import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { mockNewsArticles } from '../data/mockData';
import { format } from 'date-fns';

// Компонент NewsPage
const NewsPage: React.FC = () => {
  // Состояние для выбранной категории новостей
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Получение уникальных категорий
  const categories = Array.from(new Set(mockNewsArticles.map(article => article.category)));

  // Фильтрация новостей по выбранной категории
  const filteredArticles = selectedCategory
    ? mockNewsArticles.filter(article => article.category === selectedCategory)
    : mockNewsArticles;

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок страницы новостей */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 font-heading mb-4">Новости клуба</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Будьте в курсе последних событий, мероприятий и достижений
          </p>
        </div>

        {/* Фильтры категорий */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <Button
            variant={selectedCategory === null ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(null)} // Сброс фильтра
          >
            Все новости
          </Button>
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)} // Установка выбранной категории
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Сетка новостей */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <Card key={article.id} hoverable>
              {/* Картинка статьи, если она есть */}
              {article.coverImage && (
                <Link to={`/news/${article.id}`}>
                  <img 
                    src={article.coverImage} 
                    alt={article.title} 
                    className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              )}
              <CardContent className="p-6">
                {/* Информация о статье (категория и дата) */}
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="primary">{article.category}</Badge>
                  <span className="text-sm text-gray-500">
                    {format(article.createdAt, 'dd.MM.yyyy')} {/* Форматирование даты */}
                  </span>
                </div>

                {/* Заголовок статьи */}
                <Link to={`/news/${article.id}`}>
                  <h2 className="text-xl font-semibold mb-2 hover:text-primary-700 transition-colors">
                    {article.title}
                  </h2>
                </Link>

                {/* Краткое описание статьи */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="space-y-4">
                  {/* Теги статьи */}
                  {article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="inline-flex items-center text-sm text-gray-600"
                        >
                          <Tag className="h-4 w-4 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Кнопка для перехода к полному тексту статьи */}
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

        {/* Сообщение, если нет новостей по выбранной категории */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              Новостей в выбранной категории не найдено
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Экспорт компонента NewsPage
export default NewsPage;
