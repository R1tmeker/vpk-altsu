// Импорт конфигураций и плагинов ESLint
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

// Конфигурация ESLint
export default tseslint.config(
  { ignores: ['dist'] },  // Игнорируем папку dist
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended], // Расширяем базовые конфигурации
    files: ['**/*.{ts,tsx}'],  // Проверяем TypeScript файлы
    languageOptions: {
      ecmaVersion: 2020,       // Версия ECMAScript
      globals: globals.browser, // Глобальные переменные браузера
    },
    plugins: {
      'react-hooks': reactHooks,      // Плагин для хуков React
      'react-refresh': reactRefresh,  // Плагин для React Refresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,  // Правила для хуков
      'react-refresh/only-export-components': [ // Правила для React Refresh
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);