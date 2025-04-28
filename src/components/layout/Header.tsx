import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Star, Menu, X, ChevronDown, LogIn, LogOut, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для открытия/закрытия меню
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Состояние для открытия/закрытия профиля
  const { isAuthenticated, currentUser, logout } = useAuth(); // Получаем информацию о пользователе
  const location = useLocation(); // Получаем текущий путь для определения активной ссылки

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Функция для переключения меню
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen); // Функция для переключения профиля
  const closeMenu = () => setIsMenuOpen(false); // Функция для закрытия меню

  const mainNavItems = [
    { name: 'Главная', path: '/' },
    { name: 'О клубе', path: '/about' },
    { name: 'Расписание', path: '/schedule' },
    { name: 'Галерея', path: '/gallery' },
    { name: 'Новости', path: '/news' },
    { name: 'Контакты', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path; // Проверка на активную ссылку
  };

  const handleLogout = () => {
    logout(); // Логика выхода
    setIsProfileOpen(false); // Закрытие профиля после выхода
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <Star className="h-8 w-8 text-secondary-500" /> {/* Иконка звезды */}
              <span className="ml-2 text-xl font-bold text-primary-700">Звезда</span> {/* Название клуба */}
            </Link>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'border-secondary-500 text-gray-900' // Активная ссылка
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300' // Неактивная ссылка
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Меню пользователя и кнопка мобильного меню */}
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="ml-3 relative">
                <div>
                  <button
                    onClick={toggleProfile}
                    className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    <span className="sr-only">Открыть меню пользователя</span>
                    {currentUser?.avatar ? (
                      <img 
                        className="h-8 w-8 rounded-full object-cover"
                        src={currentUser.avatar}
                        alt={currentUser.name}
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary-700" />
                      </div>
                    )}
                    <span className="hidden md:block ml-2 text-sm text-gray-700">{currentUser?.name}</span>
                    <ChevronDown className="hidden md:block ml-1 h-4 w-4 text-gray-400" />
                  </button>
                </div>
                {isProfileOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <div className="px-4 py-2 text-xs text-gray-500 border-b border-gray-100">
                      {currentUser?.role === 'admin' && 'Администратор'}
                      {currentUser?.role === 'trainer' && 'Тренер'}
                      {currentUser?.role === 'moderator' && 'Модератор'}
                      {currentUser?.role === 'user' && 'Пользователь'}
                    </div>
                    {(currentUser?.role === 'admin' || currentUser?.role === 'trainer' || currentUser?.role === 'moderator') && (
                      <Link
                        to="/admin"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Панель управления
                      </Link>
                    )}
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Мой профиль
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Выйти
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex">
                <Link to="/login">
                  <Button 
                    variant="outline" 
                    size="sm"
                    leftIcon={<LogIn className="h-4 w-4" />}
                  >
                    Войти
                  </Button>
                </Link>
              </div>
            )}

            {/* Кнопка для мобильного меню */}
            <div className="ml-4 md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              >
                <span className="sr-only">Открыть меню</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" /> // Иконка закрытия меню
                ) : (
                  <Menu className="block h-6 w-6" /> // Иконка открытия меню
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-primary-50 text-primary-700' // Активная ссылка
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50' // Неактивная ссылка
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            {!isAuthenticated && (
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={closeMenu}
              >
                <div className="flex items-center">
                  <LogIn className="h-5 w-5 mr-2" /> {/* Иконка входа */}
                  Войти
                </div>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};