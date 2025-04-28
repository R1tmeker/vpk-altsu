// Импорт необходимых зависимостей
import React from 'react';
import { Award, ShieldCheck, Users, Target, Compass, FileText } from 'lucide-react'; // Иконки для различных направлений

// Тип для отображения фичи
interface Feature {
  icon: React.ReactNode; // Иконка для фичи
  title: string; // Заголовок фичи
  description: string; // Описание фичи
}

export const FeatureSection: React.FC = () => {
  // Массив направлений деятельности с иконками, заголовками и описаниями
  const features: Feature[] = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary-700" />,
      title: 'Патриотическое воспитание',
      description: 'Формирование патриотизма, любви к Родине и готовности к её защите.',
    },
    {
      icon: <Target className="h-10 w-10 text-primary-700" />,
      title: 'Военная подготовка',
      description: 'Обучение базовым военным навыкам, строевая подготовка, тактические занятия.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary-700" />,
      title: 'Командная работа',
      description: 'Развитие навыков командного взаимодействия и лидерских качеств.',
    },
    {
      icon: <Award className="h-10 w-10 text-primary-700" />,
      title: 'Спортивная подготовка',
      description: 'Физическое развитие, тренировки силы, выносливости и ловкости.',
    },
    {
      icon: <Compass className="h-10 w-10 text-primary-700" />,
      title: 'Туристические навыки',
      description: 'Обучение ориентированию на местности, выживанию в дикой природе.',
    },
    {
      icon: <FileText className="h-10 w-10 text-primary-700" />,
      title: 'Историческое образование',
      description: 'Изучение военной истории России, посещение исторических мест и музеев.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции и описание */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-heading">Направления деятельности</h2>
          <p className="mt-3 text-lg text-gray-600">
            Чем занимаются участники военно-патриотического клуба "Звезда"
          </p>
        </div>

        {/* Сетка для отображения направлений */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Перебор всех фич и отображение их в виде карточек */}
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Иконка и информация о фиче */}
              <div className="flex items-start">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
