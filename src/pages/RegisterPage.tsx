import React, { useState } from 'react'; // Импортируем React и хук useState для управления состоянием
import { useNavigate, Link } from 'react-router-dom'; // Импортируем useNavigate для навигации и Link для ссылок
import { Card, CardContent } from '../components/ui/Card'; // Компоненты карточек для отображения формы
import { Button } from '../components/ui/Button'; // Компонент кнопки
import { Input } from '../components/ui/Input'; // Компонент ввода
import { Alert } from '../components/ui/Alert'; // Компонент для отображения сообщений об ошибках
import { Star, Mail, Lock, User } from 'lucide-react'; // Иконки для использования в полях ввода
import { useForm } from 'react-hook-form'; // Хук для работы с формой и валидацией

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
}

const RegisterPage: React.FC = () => {
  const navigate = useNavigate(); // Для навигации после успешной регистрации
  const [isLoading, setIsLoading] = useState(false); // Состояние для отображения загрузки
  const [error, setError] = useState<string | null>(null); // Состояние для отображения ошибки регистрации
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterFormData>(); // Хук для управления формой
  const password = watch('password'); // Слежение за полем пароля для валидации подтверждения пароля

  const onSubmit = async (data: RegisterFormData) => { // Обработчик отправки формы
    setIsLoading(true); // Включаем загрузку
    setError(null); // Сбрасываем ошибку

    try {
      // Симуляция задержки API (в реальном приложении здесь будет запрос на создание пользователя)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // После успешной регистрации перенаправляем пользователя на страницу входа
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error); // Логирование ошибки
      setError('Произошла ошибка при регистрации. Пожалуйста, попробуйте позже.'); // Отображение ошибки пользователю
    } finally {
      setIsLoading(false); // Завершаем процесс загрузки
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-6">
          {/* Логотип и название */}
          <Link to="/" className="inline-flex items-center justify-center">
            <Star className="h-10 w-10 text-secondary-500" />
            <span className="ml-2 text-2xl font-bold text-primary-700">Звезда</span>
          </Link>
          <h1 className="mt-4 text-3xl font-bold font-heading text-gray-900">Регистрация</h1>
          <p className="mt-2 text-gray-600">
            Создайте аккаунт для доступа к личному кабинету
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            {/* Отображение ошибки, если она есть */}
            {error && (
              <Alert variant="error" className="mb-4">
                {error}
              </Alert>
            )}

            {/* Форма регистрации */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Поле ввода ФИО с валидацией */}
              <Input
                id="fullName"
                label="ФИО"
                leftIcon={<User className="h-5 w-5" />}
                error={errors.fullName?.message}
                {...register('fullName', {
                  required: 'Пожалуйста, введите ваше ФИО', // Обязательное поле
                  minLength: {
                    value: 2,
                    message: 'ФИО должно содержать минимум 2 символа' // Минимальная длина
                  }
                })}
              />

              {/* Поле ввода Email с валидацией */}
              <Input
                id="email"
                type="email"
                label="Email"
                leftIcon={<Mail className="h-5 w-5" />}
                error={errors.email?.message}
                {...register('email', {
                  required: 'Email обязателен', // Обязательное поле
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Некорректный email адрес' // Проверка формата email
                  }
                })}
              />

              {/* Поле ввода пароля с валидацией */}
              <Input
                id="password"
                type="password"
                label="Пароль"
                leftIcon={<Lock className="h-5 w-5" />}
                error={errors.password?.message}
                {...register('password', {
                  required: 'Пароль обязателен', // Обязательное поле
                  minLength: {
                    value: 6,
                    message: 'Пароль должен содержать минимум 6 символов' // Минимальная длина пароля
                  }
                })}
              />

              {/* Поле подтверждения пароля с валидацией */}
              <Input
                id="confirmPassword"
                type="password"
                label="Подтверждение пароля"
                leftIcon={<Lock className="h-5 w-5" />}
                error={errors.confirmPassword?.message}
                {...register('confirmPassword', {
                  required: 'Подтвердите пароль', // Обязательное поле
                  validate: value =>
                    value === password || 'Пароли не совпадают' // Проверка совпадения паролей
                })}
              />

              {/* Кнопка отправки формы */}
              <Button
                type="submit"
                variant="primary"
                fullWidth
                isLoading={isLoading} // Показываем индикатор загрузки
              >
                Зарегистрироваться
              </Button>
            </form>

            {/* Ссылка для перехода на страницу входа, если пользователь уже зарегистрирован */}
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

export default RegisterPage;
