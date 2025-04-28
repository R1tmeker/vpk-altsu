import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Конфигурация Vite
export default defineConfig({
  // Подключаем плагин React
  plugins: [react()],
  // Исключаем lucide-react из оптимизации зависимостей
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});