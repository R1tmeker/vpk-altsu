import React, { useState } from 'react';
import { Camera, Calendar } from 'lucide-react';
import { mockAlbums, mockPhotos } from '../data/mockData';
import { format } from 'date-fns';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const GalleryPage: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const albumPhotos = selectedAlbum 
    ? mockPhotos.filter(photo => photo.albumId === selectedAlbum)
    : [];

  const lightboxPhotos = albumPhotos.map(photo => ({
    src: photo.src,
    alt: photo.alt,
    width: photo.width,
    height: photo.height,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 font-heading mb-4">Фотогалерея</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Фотографии с мероприятий, тренировок и соревнований нашего клуба
          </p>
        </div>

        {!selectedAlbum ? (
          // Albums Grid
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockAlbums.map((album) => (
              <button
                key={album.id}
                onClick={() => setSelectedAlbum(album.id)}
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
          // Album Photos View
          <div>
            <button
              onClick={() => setSelectedAlbum(null)}
              className="mb-6 text-primary-700 hover:text-primary-800 font-medium flex items-center"
            >
              ← Назад к альбомам
            </button>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {mockAlbums.find(a => a.id === selectedAlbum)?.title}
              </h2>
              <p className="text-gray-600">
                {mockAlbums.find(a => a.id === selectedAlbum)?.description}
              </p>
            </div>

            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {albumPhotos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => openLightbox(index)}
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

            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              index={lightboxIndex}
              slides={lightboxPhotos}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;