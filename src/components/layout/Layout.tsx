import React from 'react';
import { Header } from './Header'; // Импорт компонента Header
import { Footer } from './Footer'; // Импорт компонента Footer

interface LayoutProps {
  children: React.ReactNode; // Тип для дочерних элементов компонента Layout
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Обертка для всей страницы с минимальной высотой экрана */}
      <Header /> {/* Добавление компонента Header в верхнюю часть страницы */}
      <main className="flex-grow">{children}</main> {/* Основной контент страницы (передается через children) */}
      <Footer /> {/* Добавление компонента Footer в нижнюю часть страницы */}
    </div>
  );
};
