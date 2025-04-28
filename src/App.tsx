// Импорт необходимых компонентов и зависимостей
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SchedulePage from './pages/SchedulePage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import NewsArticlePage from './pages/NewsArticlePage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    // Оборачиваем приложение в провайдер аутентификации
    <AuthProvider>
      {/* Настройка маршрутизации */}
      <Router>
        <Routes>
          {/* Страницы с общим layout */}
          <Route 
            path="/" 
            element={
              <Layout>
                <HomePage />
              </Layout>
            } 
          />
          <Route 
            path="/about" 
            element={
              <Layout>
                <AboutPage />
              </Layout>
            } 
          />
          <Route 
            path="/schedule" 
            element={
              <Layout>
                <SchedulePage />
              </Layout>
            } 
          />
          <Route 
            path="/gallery" 
            element={
              <Layout>
                <GalleryPage />
              </Layout>
            } 
          />
          <Route 
            path="/news" 
            element={
              <Layout>
                <NewsPage />
              </Layout>
            } 
          />
          <Route 
            path="/news/:id" 
            element={
              <Layout>
                <NewsArticlePage />
              </Layout>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <Layout>
                <ContactPage />
              </Layout>
            } 
          />
          
          {/* Панель администратора */}
          <Route path="/admin" element={<AdminPage />} />
          
          {/* Страницы аутентификации (без стандартного header/footer) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Страница 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;