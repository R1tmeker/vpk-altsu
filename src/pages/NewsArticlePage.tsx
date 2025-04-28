// Импортирование зависимостей
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { mockNewsArticles, mockUsers } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

// Основная компонента страницы статьи
const NewsArticlePage: React.FC = () => {
  // Получаем параметр из URL
  const { id } = useParams();
  // Ищем статью по ID
  const article = mockNewsArticles.find(article => article.id === id);
  // Ищем автора статьи
  const author = mockUsers.find(user => user.id === article?.createdBy);

  // Если статья не найдена, показываем сообщение об ошибке
  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Статья не найдена</h1>
          <Link to="/news" className="mt-4 inline-block">
            <Button variant="primary" leftIcon={<ArrowLeft />}>
              Вернуться к новостям
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Отображение статьи, если она найдена
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to="/news" className="inline-flex items-center text-primary-700 hover:text-primary-800">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад к новостям
          </Link>
        </div>

        {/* Отображение изображения, если оно есть */}
        {article.coverImage && (
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Основное содержание статьи */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-6">
            <Badge variant="primary" className="mb-2">
              {article.category}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">
              {article.title}
            </h1>
            <div className="flex items-center mt-4 text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{format(article.createdAt, 'dd.MM.yyyy')}</span>
              {author && (
                <>
                  <span className="mx-2">•</span>
                  <span>Автор: {author.name}</span>
                </>
              )}
            </div>
          </div>

          {/* Содержание статьи, переданное через dangerouslySetInnerHTML */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Отображение тегов, если они есть */}
          {article.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
                  >
                    <Tag className="h-4 w-4 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Экспортируем компоненту
export default NewsArticlePage;
