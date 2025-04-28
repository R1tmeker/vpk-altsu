import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Filter } from 'lucide-react'; // Импорт иконок для UI
import { Card, CardContent } from '../components/ui/Card'; // Импорт компонентов карточек
import { Button } from '../components/ui/Button'; // Импорт кнопки
import { Badge } from '../components/ui/Badge'; // Импорт бейджей
import { mockEvents } from '../data/mockData'; // Импорт моковых данных событий
import { EventType } from '../types'; // Типы для событий
import { format } from 'date-fns'; // Функция для форматирования дат

const SchedulePage: React.FC = () => {
  // Состояние для фильтрации по типу события
  const [selectedType, setSelectedType] = useState<EventType | 'all'>('all');

  // Определение типов событий с их метками и цветами
  const eventTypes = {
    all: { label: 'Все мероприятия', color: 'default' as const },
    training: { label: 'Тренировки', color: 'primary' as const },
    competition: { label: 'Соревнования', color: 'secondary' as const },
    meeting: { label: 'Собрания', color: 'default' as const },
    expedition: { label: 'Экспедиции', color: 'warning' as const },
    other: { label: 'Другое', color: 'default' as const },
  };

  // Фильтрация и сортировка событий по выбранному типу
  const filteredEvents = mockEvents
    .filter(event => selectedType === 'all' || event.type === selectedType)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок страницы */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 font-heading mb-4">Расписание занятий</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ознакомьтесь с расписанием предстоящих мероприятий, тренировок и занятий нашего клуба
          </p>
        </div>

        {/* Фильтры для выбора типа событий */}
        <div className="mb-8">
          <div className="flex items-center justify-center flex-wrap gap-3">
            {Object.entries(eventTypes).map(([type, { label, color }]) => (
              <Button
                key={type}
                variant={selectedType === type ? 'primary' : 'outline'} // Выделение выбранной кнопки
                size="sm"
                onClick={() => setSelectedType(type as EventType | 'all')}
                leftIcon={<Filter className="h-4 w-4" />} // Иконка фильтра
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Сетка для отображения карточек событий */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <Card key={event.id} hoverable>
              <CardContent className="p-6">
                {/* Бейджи с типами событий и статусами */}
                <div className="mb-4">
                  <Badge variant={eventTypes[event.type].color}>
                    {eventTypes[event.type].label}
                  </Badge>
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

                {/* Заголовок и описание события */}
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{event.description}</p>

                {/* Дата и время события */}
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      {format(event.startDate, 'dd.MM.yyyy')}
                      {!event.startDate.toDateString() === event.endDate.toDateString() && 
                        ` - ${format(event.endDate, 'dd.MM.yyyy')}`
                      }
                    </span>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      {format(event.startDate, 'HH:mm')} - {format(event.endDate, 'HH:mm')}
                    </span>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{event.location}</span>
                  </div>
                </div>

                {/* Кнопка для записи на событие */}
                <Button 
                  variant="outline" 
                  fullWidth 
                  className="mt-6"
                  onClick={() => window.location.href = '/login'}
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Сообщение, если нет событий по выбранным фильтрам */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              Мероприятий по выбранным критериям не найдено
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchedulePage;
