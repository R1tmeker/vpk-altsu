import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { ChevronRight } from 'lucide-react';

export const HomepageHero: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700/80 to-primary-900/80 z-10" />
      <div 
        className="relative bg-cover bg-center h-[600px]"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/7662457/pexels-photo-7662457.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Военно-патриотический клуб "Звезда"
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-white/90">
              Воспитываем настоящих патриотов, развиваем силу духа, дисциплину и лидерские качества. Присоединяйтесь к нам!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button 
                  size="lg" 
                  variant="secondary"
                  rightIcon={<ChevronRight />}
                >
                  Узнать больше
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 border-white text-white hover:bg-white/20"
                >
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};