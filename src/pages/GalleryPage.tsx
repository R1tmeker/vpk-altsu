import React, { useState } from 'react';
import { Camera, Calendar } from 'lucide-react';
import { mockAlbums, mockPhotos } from '../data/mockData';
import { format } from 'date-fns';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Страница галереи
const GalleryPage: React.FC = () => {
  // Состояния для выбранного альбома, состояния окна Lightbox и индекса фото в Lightbox
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Получаем фотографии для выбранного альбома
  const albumPhotos = selectedAlbum 
    ? mockPhotos.filter(photo => photo.albumId === selectedAlbum)
    : [];

  // Преобразуем фотографии для Lightbox
  const lightboxPhotos = albumPhotos.map(photo => ({
    src: photo.src,
    alt: photo.alt,
    width: photo.width,
    height: photo.height,
  }));

  // Открытие Lightbox с выбранным индексом фото
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок страницы */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 font-heading mb-4">Фотогалерея</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Фотографии с мероприятий, тренировок и соревнований нашего клуба
          </p>
        </div>

        {/* Если альбом не выбран, отображаем сетку альбомов */}
        {!selectedAlbum ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockAlbums.map((album) => (
              <button
                key={album.id}
                onClick={() => setSelectedAlbum(album.id)} // При клике на альбом выбираем его
                className="text-left focus:outline-none group"
              >
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img 
                    src={album.coverImage} 
                    alt={album.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white font-semibold text-lg group-hover:underline">
                      {album.title}
                    </h3>
                    <div className="flex items-center text-white/90 text-sm mt-1">
                      <Camera className="h-4 w-4 mr-1" />
                      <span>{album.imagesCount} фото</span>
                      <span className="mx-2">•</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{format(album.createdAt, 'dd.MM.yyyy')}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          // Если альбом выбран, отображаем фотографии альбома
          <div>
            <button
              onClick={() => setSelectedAlbum(null)} // Возврат к альбомам
              className="mb-6 text-primary-700 hover:text-primary-800 font-medium flex items-center"
            >
              ← Назад к альбомам
            </button>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {mockAlbums.find(a => a.id === selectedAlbum)?.title} {/* Заголовок альбома */}
              </h2>
              <p className="text-gray-600">
                {mockAlbums.find(a => a.id === selectedAlbum)?.description} {/* Описание альбома */}
              </p>
            </div>

            {/* Сетка с фотографиями альбома */}
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {albumPhotos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => openLightbox(index)} // Открытие фото в Lightbox
                  className="focus:outline-none group"
                >
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-200">
                    <img 
                      src={photo.src} 
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Lightbox для просмотра фотографий */}
            <Lightbox
              open={lightboxOpen} // Состояние открытия Lightbox
              close={() => setLightboxOpen(false)} // Закрытие Lightbox
              index={lightboxIndex} // Индекс текущего фото
              slides={lightboxPhotos} // Слайды для Lightbox
            />
          </div>
        )}
      </div>
    </div>
  );
};

// Экспорт страницы галереи
export default GalleryPage;
