import React from 'react';
import { Shield, Award, Users, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="absolute inset-0 bg-primary-700/80" />
        <div 
          className="relative bg-cover bg-center h-[400px]"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/7662933/pexels-photo-7662933.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl font-bold font-heading mb-4">О нашем клубе</h1>
              <p className="text-xl text-white/90">
                Военно-патриотический клуб "Звезда" - это место, где мы воспитываем настоящих патриотов, 
                развиваем силу духа и готовим молодежь к достойному служению Отечеству.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-heading mb-4">Наша миссия</h2>
            <p className="text-lg text-gray-600">
              Формирование у молодежи высокого патриотического сознания, чувства верности своему Отечеству, 
              готовности к выполнению гражданского долга и конституционных обязанностей по защите интересов Родины.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <Shield className="h-12 w-12 text-primary-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Патриотическое воспитание</h3>
              <p className="text-gray-600">
                Мы проводим регулярные встречи с ветеранами, организуем посещения музеев и памятных мест, 
                изучаем историю нашей страны и ее Вооруженных Сил.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <Target className="h-12 w-12 text-primary-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Военная подготовка</h3>
              <p className="text-gray-600">
                Участники клуба проходят начальную военную подготовку, включающую строевую, огневую, 
                тактическую подготовку и основы военного дела.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <Award className="h-12 w-12 text-primary-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Спортивное развитие</h3>
              <p className="text-gray-600">
                Регулярные спортивные тренировки, участие в соревнованиях по военно-прикладным видам спорта, 
                развитие силы и выносливости.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <Users className="h-12 w-12 text-primary-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Командная работа</h3>
              <p className="text-gray-600">
                Формирование навыков работы в команде, развитие лидерских качеств, 
                взаимовыручка и поддержка товарищей.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 font-heading mb-8 text-center">История клуба</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="text-lg font-semibold text-primary-700">2024</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Основание клуба</h3>
                  <p className="text-gray-600">
                    Клуб был основан по приказу ректора АлтГУ с целью патриотического воспитания 
                    студенческой молодежи и подготовки к военной службе.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="text-lg font-semibold text-primary-700">2024</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Начало деятельности</h3>
                  <p className="text-gray-600">
                    Формирование основных направлений работы, создание учебных программ и начало 
                    регулярных тренировок.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="text-lg font-semibold text-primary-700">2025</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Развитие партнерских отношений</h3>
                  <p className="text-gray-600">
                    Установление сотрудничества с военными учебными заведениями, ветеранскими организациями 
                    и другими патриотическими клубами региона.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="text-lg font-semibold text-primary-700">2025</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Расширение деятельности</h3>
                  <p className="text-gray-600">
                    Увеличение количества направлений подготовки, организация региональных соревнований 
                    и военно-патриотических мероприятий.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-700 rounded-lg overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white font-heading mb-4">
                Присоединяйтесь к нам
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Если вы разделяете наши ценности и готовы развиваться вместе с нами, 
                мы будем рады видеть вас в рядах нашего клуба.
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4">
                <a 
                  href="/schedule" 
                  className="inline-block px-6 py-3 bg-white text-primary-700 font-semibold rounded-md hover:bg-gray-50 transition-colors"
                >
                  Расписание занятий
                </a>
                <a 
                  href="/contact" 
                  className="inline-block px-6 py-3 bg-secondary-500 text-white font-semibold rounded-md hover:bg-secondary-600 transition-colors"
                >
                  Связаться с нами
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;