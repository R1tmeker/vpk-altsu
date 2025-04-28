import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Alert } from '../components/ui/Alert';
import { Star, Mail, Lock, User } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
}

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterFormData>();
  const password = watch('password');

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would create a new user
      // For now, just redirect to login
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      setError('Произошла ошибка при регистрации. Пожалуйста, попробуйте позже.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
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

        <Card>
          <CardContent className="pt-6">
            {error && (
              <Alert variant="error" className="mb-4">
                {error}
              </Alert>
            )}

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

              <Button
                type="submit"
                variant="primary"
                fullWidth
                isLoading={isLoading}
              >
                Зарегистрироваться
              </Button>
            </form>

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