import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Alert } from '../components/ui/Alert';
import { useForm } from 'react-hook-form';
import { ContactForm } from '../types';
import { handleContactFormSubmission } from '../data/mockData';

// Страница контактов
const ContactPage: React.FC = () => {
  // Состояния для отображения процесса отправки и результата отправки формы
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);
  
  // Используем хук для работы с формой
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

  // Функция для обработки отправки формы
  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitResult(null);
    
    try {
      const result = await handleContactFormSubmission(data);
      setSubmitResult(result);
      if (result.success) {
        reset(); // Сброс формы, если сообщение отправлено успешно
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.',
      });
    } finally {
      setIsSubmitting(false); // Завершаем процесс отправки
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок страницы */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 font-heading mb-4">Контакты</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом или оставьте сообщение через форму обратной связи
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Контактная информация */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Наши контакты</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary-700 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Адрес</h3>
                      <p className="text-gray-600">
                        пер. Некрасова, 64<br />
                        г. Барнаул
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary-700 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Телефон</h3>
                      <p className="text-gray-600">
                        +7 (***) ***-**-**
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary-700 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@zvezda.ru" className="hover:text-primary-700">
                          info@zvezda.ru
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Как добраться</h2>
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                <iframe
                  src="https://yandex.ru/profile/87593302206?lang=ru"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Напишите нам
                </h2>

                {submitResult && (
                  <Alert
                    variant={submitResult.success ? 'success' : 'error'}
                    className="mb-6"
                  >
                    {submitResult.message}
                  </Alert>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <Input
                    id="name"
                    label="Ваше имя"
                    error={errors.name?.message}
                    {...register('name', { 
                      required: 'Пожалуйста, введите ваше имя',
                      minLength: {
                        value: 2,
                        message: 'Имя должно содержать минимум 2 символа'
                      }
                    })}
                  />

                  <Input
                    id="email"
                    type="email"
                    label="Email"
                    error={errors.email?.message}
                    {...register('email', {
                      required: 'Пожалуйста, введите email',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Некорректный email адрес'
                      }
                    })}
                  />

                  <Input
                    id="phone"
                    type="tel"
                    label="Телефон (необязательно)"
                    {...register('phone')}
                  />

                  <div>
                    <label 
                      htmlFor="message" 
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`w-full rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${
                        errors.message ? 'border-red-300' : 'border-gray-300'
                      }`}
                      {...register('message', {
                        required: 'Пожалуйста, введите сообщение',
                        minLength: {
                          value: 10,
                          message: 'Сообщение должно содержать минимум 10 символов'
                        }
                      })}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    isLoading={isSubmitting}
                    leftIcon={<Send className="h-4 w-4" />}
                  >
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

// Экспорт страницы контактов
export default ContactPage;