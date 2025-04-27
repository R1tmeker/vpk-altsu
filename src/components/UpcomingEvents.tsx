import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Event } from '../types';
import { format } from 'date-fns';

interface UpcomingEventsProps {
  events: Event[];
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  const eventTypeMap = {
    training: { label: 'Тренировка', variant: 'primary' as const },
    competition: { label: 'Соревнование', variant: 'secondary' as const },
    meeting: { label: 'Собрание', variant: 'default' as const },
    expedition: { label: 'Экспедиция', variant: 'warning' as const },
    other: { label: 'Другое', variant: 'default' as const },
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 font-heading">Ближайшие мероприятия</h2>
          <p className="mt-3 text-lg text-gray-600">
            Ознакомьтесь с предстоящими событиями и тренировками нашего клуба
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id} hoverable className="h-full flex flex-col">
              <CardContent className="flex flex-col h-full">
                <div className="mb-4">
                  <Badge variant={eventTypeMap[event.type].variant}>
                    {eventTypeMap[event.type].label}
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
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">{event.description}</p>
                
                <div className="mt-auto space-y-2">
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

        <div className="text-center mt-10">
          <Link to="/schedule">
            <Button variant="primary">Все мероприятия</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};