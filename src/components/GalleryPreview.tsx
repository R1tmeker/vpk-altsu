// Импорт необходимых зависимостей
import React from 'react';
import { Link } from 'react-router-dom'; // Для навигации по страницам
import { Camera } from 'lucide-react'; // Иконка камеры для отображения количества фотографий
import { Button } from './ui/Button'; // Компонент кнопки
import { Album } from '../types'; // Тип данных для альбома
import { format } from 'date-fns'; // Для форматирования даты

// Интерфейс пропсов компонента (массив альбомов)
interface GalleryPreviewProps {
  albums: Album[]; // Список альбомов
}

// Основной функциональный компонент
export const GalleryPreview: React.FC<GalleryPreviewProps> = ({ albums }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-heading">Галерея</h2>
          <p className="mt-3 text-lg text-gray-600">
            Фотографии с мероприятий и тренировок нашего клуба
          </p>
        </div>

        {/* Сетка альбомов */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Отображаем первые 4 альбома */}
          {albums.slice(0, 4).map((album) => (
            <Link key={album.id} to={`/gallery/${album.id}`} className="group">
              {/* Карточка альбома с изображением */}
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img 
                  src={album.coverImage} 
                  alt={album.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Наложение градиента с текстовой информацией о альбоме */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  {/* Название альбома */}
                  <h3 className="text-white font-semibold text-lg group-hover:underline line-clamp-2">
                    {album.title}
                  </h3>
                  <div className="flex items-center text-white/90 text-sm mt-1">
                    {/* Иконка камеры и количество фотографий */}
                    <Camera className="h-4 w-4 mr-1" />
                    <span>{album.imagesCount} фото</span>
                    <span className="mx-2">•</span>
                    {/* Дата создания альбома */}
                    <span>{format(album.createdAt, 'dd.MM.yyyy')}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Кнопка для перехода ко всем альбомам */}
        <div className="text-center mt-10">
          <Link to="/gallery">
            <Button variant="primary">Все альбомы</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
