import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Users, CalendarDays, Image, MessageSquare } from 'lucide-react';

const AdminPage: React.FC = () => {
  const { currentUser, userRole } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>('dashboard');
  
  // Redirect if not admin
  React.useEffect(() => {
    if (!currentUser || userRole !== 'admin') {
      navigate('/login');
    }
  }, [currentUser, userRole, navigate]);

  // If not logged in or not authorized, don't render the page content
  if (!currentUser || userRole !== 'admin') {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Панель управления</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveSection('schedule')}
                className={`w-full flex items-center px-4 py-2 text-gray-700 rounded hover:bg-gray-100 ${
                  activeSection === 'schedule' ? 'bg-gray-100' : ''
                }`}
              >
                <CalendarDays className="w-5 h-5 mr-2" />
                Расписание
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('composition')}
                className={`w-full flex items-center px-4 py-2 text-gray-700 rounded hover:bg-gray-100 ${
                  activeSection === 'composition' ? 'bg-gray-100' : ''
                }`}
              >
                <Users className="w-5 h-5 mr-2" />
                Состав
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('photos')}
                className={`w-full flex items-center px-4 py-2 text-gray-700 rounded hover:bg-gray-100 ${
                  activeSection === 'photos' ? 'bg-gray-100' : ''
                }`}
              >
                <Image className="w-5 h-5 mr-2" />
                Загрузить фото
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('applications')}
                className={`w-full flex items-center px-4 py-2 text-gray-700 rounded hover:bg-gray-100 ${
                  activeSection === 'applications' ? 'bg-gray-100' : ''
                }`}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Заявки
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Добро пожаловать, {currentUser.full_name}!
          </h1>
        </header>

        {/* Content Sections */}
        {activeSection === 'schedule' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Расписание</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left border">День</th>
                  <th className="p-3 text-left border">Дата</th>
                  <th className="p-3 text-left border">Время</th>
                  <th className="p-3 text-left border">Место</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Понедельник</td>
                  <td className="p-3 border">1 ноября</td>
                  <td className="p-3 border">10:00 - 11:30</td>
                  <td className="p-3 border">ВУЦ</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        )}

        {activeSection === 'composition' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Состав</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left border">ФИО</th>
                  <th className="p-3 text-left border">Группа</th>
                  <th className="p-3 text-left border">Действия</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Иванов Иван Иванович</td>
                  <td className="p-3 border">Группа A</td>
                  <td className="p-3 border">
                    <button className="text-red-600 hover:text-red-800">
                      Удалить
                    </button>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        )}

        {activeSection === 'photos' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Загрузить фото</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Фото:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Загрузить
              </button>
            </form>
          </div>
        )}

        {activeSection === 'applications' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Заявки</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left border">ФИО</th>
                  <th className="p-3 text-left border">Дата рождения</th>
                  <th className="p-3 text-left border">Почта</th>
                  <th className="p-3 text-left border">Телефон</th>
                  <th className="p-3 text-left border">Действия</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Иванов Иван Иванович</td>
                  <td className="p-3 border">01.01.2000</td>
                  <td className="p-3 border">ivanov@example.com</td>
                  <td className="p-3 border">+7 (123) 456-78-90</td>
                  <td className="p-3 border">
                    <div className="space-x-2">
                      <button className="text-green-600 hover:text-green-800">
                        Одобрить
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        Отклонить
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPage;