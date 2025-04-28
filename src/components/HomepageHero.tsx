// Импорт необходимых зависимостей
import React from 'react';
import { Link } from 'react-router-dom'; // Для навигации по страницам
import { Button } from './ui/Button'; // Компонент кнопки
import { ChevronRight } from 'lucide-react'; // Иконка стрелки для кнопки

// Компонент главного экрана
export const HomepageHero: React.FC = () => {
  return (
    <div className="relative">
      {/* Градиентный фон поверх изображения */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700/80 to-primary-900/80 z-10" />
      
      {/* Фоновое изображение для геро-блока */}
      <div 
        className="relative bg-cover bg-center h-[600px]"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/7662457/pexels-photo-7662457.jpeg?auto=compress&cs=tinysrgb&w=1920')", // Указание изображения фона
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-20">
          {/* Контейнер с текстом */}
          <div className="max-w-2xl text-white">
            {/* Заголовок с названием клуба */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Военно-патриотический клуб "Звезда"
            </h1>
            {/* Описание клуба */}
            <p className="text-lg sm:text-xl mb-8 text-white/90">
              Воспитываем настоящих патриотов, развиваем силу духа, дисциплину и лидерские качества. Присоединяйтесь к нам!
            </p>
            {/* Кнопки для перехода на страницы "О нас" и "Контакты" */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button 
                  size="lg" 
                  variant="secondary" // Вторичный стиль для кнопки
                  rightIcon={<ChevronRight />} // Иконка стрелки справа
                >
                  Узнать больше
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" // Обводка для кнопки
                  className="bg-white/10 border-white text-white hover:bg-white/20" // Кастомизация цвета и эффекта нажатия
                >
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
