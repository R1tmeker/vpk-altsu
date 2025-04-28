// Импорт необходимых зависимостей
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Создание корневого элемента и рендеринг приложения
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);