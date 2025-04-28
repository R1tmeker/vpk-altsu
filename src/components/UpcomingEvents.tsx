// Импорт необходимых зависимостей
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin } from 'lucide-react'; // иконки для календаря, времени и места
import { Card, CardContent } from './ui/Card'; // Компоненты карточек
import { Button } from './ui/Button'; // Компонент кнопки
import { Badge } from './ui/Badge'; // Компонент бейджа
import { Event } from '../types'; // Типы для данных событий
import { format } from 'date-fns'; // Для форматирования дат

// Интерфейс пропсов компонента (массив событий)
interface UpcomingEventsProps {
  events: Event[]; // Список предстоящих событий
}

// Основной функциональный компонент
export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  // Словарь для отображения типа события и его стиля
  const eventTypeMap = {
    training: { label: 'Тренировка', variant: 'primary' as const }, // Тренировка
    competition: { label: 'Соревнование', variant: 'secondary' as const }, // Соревнование
    meeting: { label: 'Собрание', variant: 'default' as const }, // Собрание
    expedition: { label: 'Экспедиция', variant: 'warning' as const }, // Экспедиция
    other: { label: 'Другое', variant: 'default' as const }, // Другое
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 font-heading">Ближайшие мероприятия</h2>
          <p className="mt-3 text-lg text-gray-600">
            Ознакомьтесь с предстоящими событиями и тренировками нашего клуба
          </p>
        </div>

        {/* Карточки событий */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id} hoverable className="h-full flex flex-col">
              <CardContent className="flex flex-col h-full">
                <div className="mb-4">
                  {/* Бейджи для типа события (например, тренировка, соревнование) */}
                  <Badge variant={eventTypeMap[event.type].variant}>
                    {eventTypeMap[event.type].label}
                  </Badge>
                  {/* Бейджи для статуса события (отменено или перенесено) */}
                  {event.isCancelled && (
                    <Badge variant="danger" className="ml-2">
                      Отменено
                    </Badge>
                  )}
                  {event.isRescheduled && (
                    <Badge variant="warning" className="ml-2">
                      Перенесено
                    </Badge>
                  )}
                </div>

                {/* Заголовок события */}
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                
                {/* Описание события */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">{event.description}</p>
                
                {/* Дата, время и место */}
                <div className="mt-auto space-y-2">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      {format(event.startDate, 'dd.MM.yyyy')}
                      {/* Проверка на различие дат начала и конца события */}
                      {!event.startDate.toDateString() === event.endDate.toDateString() && 
                        ` - ${format(event.endDate, 'dd.MM.yyyy')}`
                      }
                    </span>
                  </div>
                  
                  {/* Время события */}
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      {format(event.startDate, 'HH:mm')} - {format(event.endDate, 'HH:mm')}
                    </span>
                  </div>
                  
                  {/* Место проведения события */}
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{event.location}</span>
                  </div>
                  
                  {/* Ссылка на подробности события */}
                  <Link to={`/schedule/${event.id}`} className="block mt-4">
                    <Button variant="outline" fullWidth>
                      Подробнее
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Кнопка для перехода ко всем мероприятиям */}
        <div className="text-center mt-10">
          <Link to="/schedule">
            <Button variant="primary">Все мероприятия</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
