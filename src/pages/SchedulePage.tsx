import React, { useState } from 'react'; // Импортируем React и хук useState для управления состоянием
import { Calendar, Clock, MapPin, Filter } from 'lucide-react'; // Импортируем иконки из библиотеки lucide-react
import { Card, CardContent } from '../components/ui/Card'; // Импортируем компоненты карточек
import { Button } from '../components/ui/Button'; // Импортируем компонент кнопки
import { Badge } from '../components/ui/Badge'; // Импортируем компонент бейджа
import { mockEvents } from '../data/mockData'; // Импортируем данные о событиях
import { EventType } from '../types'; // Импортируем типы данных для события
import { format } from 'date-fns'; // Импортируем функцию форматирования дат из библиотеки date-fns

const SchedulePage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<EventType | 'all'>('all'); // Состояние для выбранного типа мероприятия

  const eventTypes = { // Объект с типами событий для фильтрации
    all: { label: 'Все мероприятия', color: 'default' as const },
    training: { label: 'Тренировки', color: 'primary' as const },
    competition: { label: 'Соревнования', color: 'secondary' as const },
    meeting: { label: 'Собрания', color: 'default' as const },
    expedition: { label: 'Экспедиции', color: 'warning' as const },
    other: { label: 'Другое', color: 'default' as const },
  };

  // Фильтруем и сортируем мероприятия по выбранному типу
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

        {/* Фильтры для выбора типа мероприятий */}
        <div className="mb-8">
          <div className="flex items-center justify-center flex-wrap gap-3">
            {Object.entries(eventTypes).map(([type, { label, color }]) => (
              <Button
                key={type}
                variant={selectedType === type ? 'primary' : 'outline'} // Выделяем выбранный фильтр
                size="sm"
                onClick={() => setSelectedType(type as EventType | 'all')} // Устанавливаем выбранный тип
                leftIcon={<Filter className="h-4 w-4" />} // Иконка фильтра
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Сетка с мероприятиями */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <Card key={event.id} hoverable>
              <CardContent className="p-6">
                <div className="mb-4">
                  {/* Бейдж для типа мероприятия */}
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

                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{event.description}</p>

                <div className="space-y-3">
                  {/* Дата начала мероприятия */}
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      {format(event.startDate, 'dd.MM.yyyy')}
                      {/* Если начало и конец события не совпадают по дате, показываем дату окончания */}
                      {!event.startDate.toDateString() === event.endDate.toDateString() && 
                        ` - ${format(event.endDate, 'dd.MM.yyyy')}`
                      }
                    </span>
                  </div>

                  {/* Время мероприятия */}
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      {format(event.startDate, 'HH:mm')} - {format(event.endDate, 'HH:mm')}
                    </span>
                  </div>

                  {/* Местоположение мероприятия */}
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{event.location}</span>
                  </div>
                </div>

                {/* Кнопка для записи на мероприятие */}
                <Button 
                  variant="outline" 
                  fullWidth 
                  className="mt-6"
                  onClick={() => window.location.href = '/login'} // Перенаправление на страницу входа
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Если нет подходящих мероприятий, выводим сообщение */}
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
