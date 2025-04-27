import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Star, AArrowDown as VK } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <Star className="h-8 w-8 text-secondary-500" />
              <span className="ml-2 text-xl font-bold text-white">Звезда</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Военно-патриотический клуб "Звезда" - место, где воспитываем патриотов, развиваем силу духа и готовим к будущему.
            </p>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  О клубе
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Расписание
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Галерея
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Новости
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact information */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  пер. Некрасова, 64, Барнаул
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-secondary-500 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  +7 (***) ***-**-**
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-secondary-500 mr-2 flex-shrink-0" />
                <a href="mailto:info@zvezda.ru" className="text-sm text-gray-300 hover:text-white transition-colors">
                  info@zvezda.ru
                </a>
              </li>
            </ul>
          </div>

          {/* Social links and subscription */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://vk.com" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">VKontakte</span>
                <VK className="h-6 w-6" />
              </a>
            </div>
            
            <h3 className="text-lg font-semibold mb-2">Подписаться на новости</h3>
            <div className="mt-2">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-l-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-secondary-500 text-white font-medium text-sm rounded-r-md hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
                >
                  Подписаться
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Военно-патриотический клуб "Звезда". Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};