// Импортирование необходимых зависимостей
import React, { createContext, useContext, useState } from 'react';
import { User, UserRole } from '../types';
import { mockUsers } from '../data/mockData';

// Описание интерфейса для контекста аутентификации
interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  userRole: UserRole | null;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

// Создание контекста с начальным значением
const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  isAuthenticated: false,
  userRole: null,
  login: async () => ({ success: false, message: 'Not implemented' }),
  logout: async () => {},
  isLoading: false,
});

// Хук для использования контекста аутентификации
export const useAuth = () => useContext(AuthContext);

// Интерфейс для пропсов провайдера аутентификации
interface AuthProviderProps {
  children: React.ReactNode;
}

// Провайдер контекста аутентификации
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Состояния для текущего пользователя и загрузки
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Функция для входа в систему
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Симуляция задержки вызова API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Поиск пользователя по email
      const user = mockUsers.find(u => u.email === email);
      
      // Проверка правильности пароля
      if (user && password === 'password123') {
        setCurrentUser(user);
        return { success: true, message: 'Вход выполнен успешно!' };
      }
      
      return { success: false, message: 'Неверный email или пароль.' };
    } finally {
      setIsLoading(false);
    }
  };

  // Функция для выхода из системы
  const logout = async () => {
    setCurrentUser(null);
  };

  // Значение, передаваемое в контекст
  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    userRole: currentUser?.role || null,
    login,
    logout,
    isLoading,
  };

  // Провайдер контекста
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
