import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Star, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

// Компонент страницы входа
const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  // Обработчик входа в систему
  const handleLogin = async () => {
    await login();                 // Выполняем вход
    navigate('/admin');            // Перенаправляем на админ панель
  };

  return (
    // Контейнер страницы с центрированным содержимым
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Шапка с логотипом и заголовком */}
        <div className="text-center mb-6">
          <Link to="/" className="inline-flex items-center justify-center">
            <Star className="h-10 w-10 text-secondary-500" />
            <span className="ml-2 text-2xl font-bold text-primary-700">Звезда</span>
          </Link>
          <h1 className="mt-4 text-3xl font-bold font-heading text-gray-900">Вход в систему</h1>
          <p className="mt-2 text-gray-600">
            Нажмите кнопку для входа в панель администратора
          </p>
        </div>

        {/* Карточка с формой входа */}
        <Card>
          <CardContent className="pt-6">
            {/* Кнопка входа */}
            <Button 
              onClick={handleLogin}
              variant="primary" 
              fullWidth 
              className="mt-6"
              leftIcon={<LogIn className="h-5 w-5" />}
            >
              Войти в панель управления
            </Button>

            {/* Кнопка возврата на главную */}
            <div className="mt-4">
              <Link to="/">
                <Button 
                  variant="outline" 
                  fullWidth
                >
                  Вернуться на главную
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;