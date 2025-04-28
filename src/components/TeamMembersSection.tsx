// Импорт необходимых зависимостей
import React from 'react';
import { User } from '../types'; // Тип данных пользователя
import { Card, CardContent } from './ui/Card'; // Компоненты карточек

// Интерфейс пропсов компонента (массив членов команды)
interface TeamMembersSectionProps {
  members: User[]; // Список членов команды
}

// Основной функциональный компонент
export const TeamMembersSection: React.FC<TeamMembersSectionProps> = ({ members }) => {
  // Функция для определения роли члена команды
  const getRoleTitle = (role: string): string => {
    switch (role) {
      case 'admin': // Руководитель
        return 'Руководитель';
      case 'trainer': // Тренер
        return 'Тренер';
      case 'moderator': // Модератор
        return 'Модератор';
      default: // Участник
        return 'Участник';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-heading">Наша команда</h2>
          <p className="mt-3 text-lg text-gray-600">
            Познакомьтесь с руководителями и инструкторами нашего клуба
          </p>
        </div>

        {/* Карточки для каждого члена команды */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {members
            .filter(member => member.role !== 'user') // Отображаем только членов команды, исключая обычных пользователей
            .map((member) => (
              <Card key={member.id} hoverable className="text-center overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden bg-gray-200">
                  {/* Если у члена команды есть аватар, показываем его */}
                  {member.avatar ? (
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    // Если аватар отсутствует, показываем инициал члена команды
                    <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-700">
                      <span className="text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')} {/* Инициал имени */}
                      </span>
                    </div>
                  )}
                </div>
                <CardContent>
                  {/* Имя члена команды */}
                  <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
                  {/* Роль члена команды */}
                  <p className="text-sm text-primary-700 font-medium mb-2">
                    {getRoleTitle(member.role)} {/* Определяем роль через getRoleTitle */}
                  </p>
                  {/* Биография, если она есть */}
                  {member.bio && (
                    <p className="text-sm text-gray-600 line-clamp-3">{member.bio}</p>
                  )}
                </CardContent>
              </Card>
          ))}
        </div>
      </div>
    </section>
  );
};