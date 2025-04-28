import React from 'react';
import { Header } from './Header'; // Импорт компонента Header
import { Footer } from './Footer'; // Импорт компонента Footer

// Описание интерфейса для пропсов компонента Layout
interface LayoutProps {
  children: React.ReactNode; // Пропс children, который представляет вложенные компоненты
}

// Компонент Layout, который принимает пропсы типа LayoutProps
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Компонент Header, отображаемый в верхней части страницы */}
      <Header />
      
      {/* Основная часть страницы, где отображаются вложенные компоненты (children) */}
      <main className="flex-grow">{children}</main>
      
      {/* Компонент Footer, отображаемый в нижней части страницы */}
      <Footer />
    </div>
  );
};