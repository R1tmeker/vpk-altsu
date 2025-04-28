// Импортируем необходимые библиотеки и компоненты
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Alert } from '../components/ui/Alert';
import { Star, Mail, Lock, User } from 'lucide-react';
import { useForm } from 'react-hook-form';

// Интерфейс данных формы регистрации
interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
}

const RegisterPage: React.FC = () => {
  // Хуки состояния для загрузки и ошибок
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Хуки для управления формой с помощью react-hook-form
  const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterFormData>();
  const password = watch('password');

  // Обработчик отправки формы
  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Симуляция задержки при вызове API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // В реальном приложении это создало бы нового пользователя
      // Пока просто перенаправляем на страницу входа
      navigate('/login');
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      setError('Произошла ошибка при регистрации. Пожалуйста, попробуйте позже.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Логотип и заголовок */}
        <div className="text-center mb-6">
          <Link to="/" className="inline-flex items-center justify-center">
            <Star className="h-10 w-10 text-secondary-500" />
            <span className="ml-2 text-2xl font-bold text-primary-700">Звезда</span>
          </Link>
          <h1 className="mt-4 text-3xl font-bold font-heading text-gray-900">Регистрация</h1>
          <p className="mt-2 text-gray-600">
            Создайте аккаунт для доступа к личному кабинету
          </p>
        </div>

        {/* Форма регистрации */}
        <Card>
          <CardContent className="pt-6">
            {/* Ошибки при регистрации */}
            {error && (
              <Alert variant="error" className="mb-4">
                {error}
              </Alert>
            )}

            {/* Форма с полями для ввода данных */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                id="fullName"
                label="ФИО"
                leftIcon={<User className="h-5 w-5" />}
                error={errors.fullName?.message}
                {...register('fullName', {
                  required: 'Пожалуйста, введите ваше ФИО',
                  minLength: {
                    value: 2,
                    message: 'ФИО должно содержать минимум 2 символа'
                  }
                })}
              />

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
                    message: 'Некорректный email адрес'
                  }
                })}
              />

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
                    message: 'Пароль должен содержать минимум 6 символов'
                  }
                })}
              />

              <Input
                id="confirmPassword"
                type="password"
                label="Подтверждение пароля"
                leftIcon={<Lock className="h-5 w-5" />}
                error={errors.confirmPassword?.message}
                {...register('confirmPassword', {
                  required: 'Подтвердите пароль',
                  validate: value =>
                    value === password || 'Пароли не совпадают'
                })}
              />

              {/* Кнопка отправки формы */}
              <Button
                type="submit"
                variant="primary"
                fullWidth
                isLoading={isLoading}
              >
                Зарегистрироваться
              </Button>
            </form>

            {/* Ссылка на страницу входа */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Уже есть аккаунт?{' '}
                <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                  Войти
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Экспортируем компоненту
export default RegisterPage;