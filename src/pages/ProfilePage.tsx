import React from 'react';
import { useNavigate } from 'react-router-dom'; // Для навигации
import { useAuth } from '../contexts/AuthContext'; // Контекст для авторизации пользователя
import { Card, CardContent } from '../components/ui/Card'; // Компоненты карточек
import { Button } from '../components/ui/Button'; // Компонент кнопки
import { Input } from '../components/ui/Input'; // Компонент ввода
import { Alert } from '../components/ui/Alert'; // Компонент для отображения ошибок
import { User, Shield, Medal, Calendar, MapPin, Mail, Phone } from 'lucide-react'; // Иконки
import { mockEvents } from '../data/mockData'; // Моковые данные для событий
import { format } from 'date-fns'; // Для форматирования дат

const ProfilePage: React.FC = () => {
  const { currentUser, isAuthenticated } = useAuth(); // Извлекаем данные о текущем пользователе и статус авторизации
  const navigate = useNavigate(); // Для навигации при необходимости редиректа

  // Если пользователь не аутентифицирован, перенаправляем на страницу входа
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!currentUser) return null; // Если данных о пользователе нет, ничего не отображаем

  // Получаем предстоящие события для пользователя
  const userEvents = mockEvents
    .filter(event => new Date(event.startDate) > new Date()) // Только будущие события
    .slice(0, 3); // Показываем максимум 3 события

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Блок с информацией о пользователе */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  {currentUser.avatar ? (
                    <img
                      src={currentUser.avatar} // Отображаем аватар пользователя
                      alt={currentUser.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                      <User className="h-16 w-16 text-primary-700" />
                    </div>
                  )}
                  <h2 className="text-2xl font-semibold text-gray-900">{currentUser.name}</h2>
                  <p className="text-gray-600 mt-1">{currentUser.email}</p>
                  
                  <div className="mt-4 flex justify-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                      {currentUser.role === 'admin' && 'Администратор'}
                      {currentUser.role === 'trainer' && 'Тренер'}
                      {currentUser.role === 'moderator' && 'Модератор'}
                      {currentUser.role === 'user' && 'Участник'}
                    </span>
                  </div>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-6">
                  <div className="space-y-4">
                    {/* Статистика пользователя */}
                    <div className="flex items-center text-gray-600">
                      <Shield className="h-5 w-5 mr-2" />
                      <span>Участник с {format(currentUser.createdAt, 'dd.MM.yyyy')}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Medal className="h-5 w-5 mr-2" />
                      <span>12 достижений</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>36 посещенных занятий</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button variant="outline" fullWidth>
                    Редактировать профиль
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Основное содержимое страницы */}
          <div className="md:col-span-2 space-y-8">
            {/* Личная информация */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Личная информация</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      id="fullName"
                      label="ФИО"
                      value={currentUser.name}
                      disabled
                    />
                    <Input
                      id="birthDate"
                      label="Дата рождения"
                      type="date"
                      value="2000-01-01"
                      disabled
                    />
                    <Input
                      id="phone"
                      label="Телефон"
                      type="tel"
                      value="+7 (999) 123-45-67"
                      disabled
                    />
                    <Input
                      id="email"
                      label="Email"
                      type="email"
                      value={currentUser.email}
                      disabled
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Предстоящие занятия */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Предстоящие занятия</h3>
                <div className="space-y-4">
                  {userEvents.map((event) => (
                    <div key={event.id} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <Calendar className="h-5 w-5 text-primary-700 mt-1 flex-shrink-0" />
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">{event.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                        <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {format(event.startDate, 'dd.MM.yyyy')}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {format(event.startDate, 'HH:mm')} - {format(event.endDate, 'HH:mm')}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {userEvents.length === 0 && (
                    <p className="text-gray-600 text-center py-4">
                      Нет предстоящих занятий
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Достижения */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Достижения</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <Medal className="h-8 w-8 text-yellow-500" />
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">Лучший стрелок</h4>
                      <p className="text-sm text-gray-600">Получено 15.03.2024</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <Medal className="h-8 w-8 text-blue-500" />
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">Мастер тактики</h4>
                      <p className="text-sm text-gray-600">Получено 01.03.2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
