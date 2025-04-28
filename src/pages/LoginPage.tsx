// Импортирование необходимых библиотек и компонентов
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Alert } from '../components/ui/Alert';
import { useAuth } from '../contexts/AuthContext';
import { Star, Mail, Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';

// Описание интерфейса для формы логина
interface LoginFormData {
  email: string;
  password: string;
}

// Компонент страницы входа
const LoginPage: React.FC = () => {
  const { login } = useAuth(); // Получаем функцию логина из контекста
  const navigate = useNavigate(); // Навигация по страницам
  const [loginError, setLoginError] = useState<string | null>(null); // Ошибка входа
  const [isLoading, setIsLoading] = useState(false); // Состояние загрузки

  // Инициализация реактивной формы
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  // Функция, вызываемая при отправке формы
  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setLoginError(null);
    
    try {
      const result = await login(data.email, data.password); // Пытаемся войти
      if (result.success) {
        navigate('/'); // Переходим на главную при успехе
      } else {
        // Обработка различных ошибок
        if (result.message.includes('invalid_credentials')) {
          setLoginError('Неверный email или пароль. Пожалуйста, проверьте введенные данные.');
        } else {
          setLoginError(result.message);
        }
      }
    } catch (error) {
      // Обработка ошибок сети или сервера
      setLoginError('Произошла ошибка при входе. Пожалуйста, проверьте подключение к интернету и попробуйте снова.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false); // Останавливаем индикатор загрузки
    }
  };

  return (
    // Внешний контейнер
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        
        {/* Заголовок и логотип */}
        <div className="text-center mb-6">
          <Link to="/" className="inline-flex items-center justify-center">
            <Star className="h-10 w-10 text-secondary-500" />
            <span className="ml-2 text-2xl font-bold text-primary-700">Звезда</span>
          </Link>
          <h1 className="mt-4 text-3xl font-bold font-heading text-gray-900">Вход в систему</h1>
          <p className="mt-2 text-gray-600">
            Введите данные для доступа к личному кабинету
          </p>
        </div>
        
        {/* Карточка формы */}
        <Card>
          <CardContent className="pt-6">
            
            {/* Вывод ошибки логина */}
            {loginError && (
              <Alert variant="error" className="mb-4">
                {loginError}
              </Alert>
            )}
            
            {/* Форма входа */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                {/* Поле ввода email */}
                <Input
                  id="email"
                  type="email"
                  label="Email"
                  leftIcon={<Mail className="h-5 w-5" />}
                  error={errors.email?.message}
                  {...register('email', {
                    required: 'Email обязателен',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Некорректный email',
                    },
                  })}
                />
                
                {/* Поле ввода пароля */}
                <Input
                  id="password"
                  type="password"
                  label="Пароль"
                  leftIcon={<Lock className="h-5 w-5" />}
                  error={errors.password?.message}
                  {...register('password', {
                    required: 'Пароль обязателен',
                    minLength: {
                      value: 6,
                      message: 'Пароль должен содержать не менее 6 символов',
                    },
                  })}
                />
              </div>
              
              {/* Ссылка на восстановление пароля */}
              <div className="mt-2 flex justify-end">
                <Link to="/forgot-password" className="text-sm text-primary-600 hover:text-primary-700">
                  Забыли пароль?
                </Link>
              </div>
              
              {/* Кнопка входа */}
              <Button 
                type="submit" 
                variant="primary" 
                fullWidth 
                className="mt-6"
                isLoading={isLoading}
              >
                Войти
              </Button>

              {/* Ссылка на регистрацию */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Нет аккаунта?{' '}
                  <Link to="/register" className="text-primary-600 hover:text-primary-700 font-medium">
                    Зарегистрироваться
                  </Link>
                </p>
              </div>
            </form>
            
            {/* Дополнительная информация */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Для входа используйте учетные данные, полученные при регистрации
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Если вы забыли пароль, воспользуйтесь функцией восстановления
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
