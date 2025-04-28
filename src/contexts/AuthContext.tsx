import React, { createContext, useContext, useState } from 'react';
import { User } from '../types';
import { mockUsers } from '../data/mockData';

// Определение типа контекста аутентификации
interface AuthContextType {
  currentUser: User | null;        // Текущий пользователь
  isAuthenticated: boolean;        // Флаг аутентификации
  userRole: string | null;         // Роль пользователя
  login: () => Promise<void>;      // Функция входа
  logout: () => Promise<void>;     // Функция выхода
}

// Создание контекста с начальными значениями
const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  isAuthenticated: false,
  userRole: null,
  login: async () => {},
  logout: async () => {},
});

// Хук для использования контекста аутентификации
export const useAuth = () => useContext(AuthContext);

// Пропсы провайдера аутентификации
interface AuthProviderProps {
  children: React.ReactNode;
}

// Провайдер аутентификации
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Состояние для хранения данных текущего пользователя
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Функция входа - устанавливает первого пользователя из мок-данных (админ)
  const login = async () => {
    setCurrentUser(mockUsers[0]);
  };

  // Функция выхода - очищает данные текущего пользователя
  const logout = async () => {
    setCurrentUser(null);
  };

  // Значения, предоставляемые контекстом
  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    userRole: currentUser?.role || null,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};