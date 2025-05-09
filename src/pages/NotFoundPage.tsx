import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Star, ArrowLeft } from 'lucide-react';

// Компонент NotFoundPage
const NotFoundPage: React.FC = () => {
  return (
    // Основной контейнер для страницы с ошибкой
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        {/* Иконка звезды */}
        <div className="flex justify-center mb-6">
          <Star className="h-16 w-16 text-secondary-500" />
        </div>
        {/* Заголовок страницы с ошибкой */}
        <h1 className="text-6xl font-bold text-gray-900 font-heading">404</h1>
        {/* Подзаголовок с текстом ошибки */}
        <h2 className="mt-3 text-2xl font-semibold text-gray-700">Страница не найдена</h2>
        {/* Описание ошибки */}
        <p className="mt-4 text-gray-600 max-w-md mx-auto">
          Извините, но страница, которую вы пытаетесь открыть, не существует или была перемещена.
        </p>
        {/* Кнопка для возвращения на главную */}
        <div className="mt-8">
          <Link to="/">
            <Button 
              variant="primary" 
              size="lg"
              leftIcon={<ArrowLeft className="h-5 w-5" />}
            >
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Экспорт компонента NotFoundPage
export default NotFoundPage;
