import { Album, ContactForm, DashboardStats, Event, NewsArticle, PhotoItem, User } from '../types';
import { addDays, addHours, addMonths, format, subDays, subMonths } from 'date-fns';

// Mock users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Алексей Иванов',
    email: 'admin@zvezda.ru',
    role: 'admin',
    avatar: 'https://swsu.ru/upload/iblock/050/15m9uv2hrcsig520a54dljy0y5phg7ey/1.jpg',
    bio: 'Руководитель клуба, ветеран боевых действий.',
    createdAt: subMonths(new Date(), 24),
  },
  {
    id: '2',
    name: 'Николай Петров',
    email: 'petrov@zvezda.ru',
    role: 'trainer',
    avatar: 'https://msalkirov.ru/wp-content/uploads/2022/09/image001.jpg',
    bio: 'Инструктор по тактической подготовке, мастер спорта по стрельбе.',
    createdAt: subMonths(new Date(), 18),
  },
  {
    id: '3',
    name: 'Елена Смирнова',
    email: 'smirnova@zvezda.ru',
    role: 'moderator',
    avatar: 'https://avatars.dzeninfra.ru/get-zen_doc/148075/pub_5ca4e25cd959dc00b319d1c7_5ca4e7c7b59e2e00b3fce1a2/scale_1200',
    bio: 'Отвечает за организацию мероприятий и патриотическое воспитание.',
    createdAt: subMonths(new Date(), 12),
  },
  {
    id: '4',
    name: 'Павел Соколов',
    email: 'sokolov@zvezda.ru',
    role: 'trainer',
    avatar: 'https://avatars.mds.yandex.net/i?id=237b7e90ebf54f0102c5621dc656b84848ed4a88-10144593-images-thumbs&n=13',
    bio: 'Инструктор по физической подготовке, бывший офицер спецназа.',
    createdAt: subMonths(new Date(), 8),
  },
];

// Mock events
export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Общая физическая подготовка',
    description: 'Тренировка выносливости, силы и ловкости. Форма одежды: спортивная.',
    location: 'Спортзал центра "Патриот"',
    startDate: addDays(new Date(), 1),
    endDate: addHours(addDays(new Date(), 1), 2),
    type: 'training',
    repeat: 'weekly',
    isCancelled: false,
    isRescheduled: false,
    trainerId: '4',
    createdBy: '1',
    createdAt: subDays(new Date(), 30),
  },
  {
    id: '2',
    title: 'Тактическая подготовка',
    description: 'Отработка действий в составе группы. Тактические приемы передвижения и маскировки.',
    location: 'Полигон "Восточный"',
    startDate: addDays(new Date(), 3),
    endDate: addHours(addDays(new Date(), 3), 4),
    type: 'training',
    repeat: 'monthly',
    isCancelled: false,
    isRescheduled: false,
    trainerId: '2',
    createdBy: '1',
    createdAt: subDays(new Date(), 22),
  },
  {
    id: '3',
    title: 'Собрание клуба',
    description: 'Обсуждение планов на следующий квартал. Обязательное присутствие всех участников.',
    location: 'Конференц-зал центра "Патриот"',
    startDate: addDays(new Date(), 5),
    endDate: addHours(addDays(new Date(), 5), 2),
    type: 'meeting',
    repeat: 'once',
    isCancelled: false,
    isRescheduled: false,
    trainerId: '1',
    createdBy: '1',
    createdAt: subDays(new Date(), 15),
  },
  {
    id: '4',
    title: 'Соревнования по стрельбе',
    description: 'Ежегодные соревнования по стрельбе из пневматического оружия. Регистрация участников с 9:00.',
    location: 'Тир "Снайпер"',
    startDate: addDays(new Date(), 14),
    endDate: addHours(addDays(new Date(), 14), 6),
    type: 'competition',
    repeat: 'once',
    isCancelled: false,
    isRescheduled: false,
    trainerId: '2',
    createdBy: '3',
    createdAt: subDays(new Date(), 45),
  },
  {
    id: '5',
    title: 'Полевой выход',
    description: 'Трехдневные полевые учения. Проверка навыков выживания, ориентирования на местности.',
    location: 'Район лесного массива "Дубрава"',
    startDate: addDays(new Date(), 30),
    endDate: addDays(new Date(), 32),
    type: 'expedition',
    repeat: 'once',
    isCancelled: false,
    isRescheduled: false,
    trainerId: '4',
    createdBy: '1',
    createdAt: subDays(new Date(), 60),
  },
];

// Mock albums
export const mockAlbums: Album[] = [
  {
    id: '1',
    title: 'Строевая подготовка 2024',
    description: 'Отработка строевых приемов и слаженности подразделения.',
    coverImage: 'https://swsu.ru/upload/iblock/050/15m9uv2hrcsig520a54dljy0y5phg7ey/1.jpg',
    imagesCount: 12,
    createdAt: subMonths(new Date(), 2),
  },
  {
    id: '2',
    title: 'Занятия в учебном центре',
    description: 'Теоретическая и практическая подготовка курсантов.',
    coverImage: 'https://msalkirov.ru/wp-content/uploads/2022/09/image001.jpg',
    imagesCount: 18,
    createdAt: subMonths(new Date(), 1),
  },
  {
    id: '3',
    title: 'Специальная подготовка',
    description: 'Занятия по военно-специальным дисциплинам.',
    coverImage: 'https://avatars.mds.yandex.net/i?id=91acaab619700b403b00b119beae3c033277e27a-4865547-images-thumbs&n=13',
    imagesCount: 8,
    createdAt: subDays(new Date(), 15),
  },
  {
    id: '4',
    title: 'Торжественное построение',
    description: 'Построение личного состава на плацу.',
    coverImage: 'https://avatars.mds.yandex.net/i?id=230e37dd7b3b1a8c83c3fef9dedb4addf45271c0-5253128-images-thumbs&n=13',
    imagesCount: 24,
    createdAt: subDays(new Date(), 45),
  },
];

// Mock photos
export const mockPhotos: PhotoItem[] = [
  {
    id: '1-1',
    albumId: '1',
    src: 'https://swsu.ru/upload/iblock/050/15m9uv2hrcsig520a54dljy0y5phg7ey/1.jpg',
    alt: 'Строевая подготовка',
    width: 1260,
    height: 750,
    tags: ['строевая', 'подготовка', 'построение'],
    createdAt: subMonths(new Date(), 2),
  },
  {
    id: '1-2',
    albumId: '1',
    src: 'https://msalkirov.ru/wp-content/uploads/2022/09/image001.jpg',
    alt: 'Учебный центр',
    width: 1260,
    height: 750,
    tags: ['обучение', 'центр', 'подготовка'],
    createdAt: subMonths(new Date(), 2),
  },
  {
    id: '1-3',
    albumId: '1',
    src: 'https://avatars.dzeninfra.ru/get-zen_doc/148075/pub_5ca4e25cd959dc00b319d1c7_5ca4e7c7b59e2e00b3fce1a2/scale_1200',
    alt: 'Специальная подготовка',
    width: 1260,
    height: 750,
    tags: ['спецподготовка', 'обучение', 'курсанты'],
    createdAt: subMonths(new Date(), 2),
  },
  {
    id: '2-1',
    albumId: '2',
    src: 'https://avatars.mds.yandex.net/i?id=237b7e90ebf54f0102c5621dc656b84848ed4a88-10144593-images-thumbs&n=13',
    alt: 'Построение на плацу',
    width: 1260,
    height: 750,
    tags: ['построение', 'плац', 'строевая'],
    createdAt: subMonths(new Date(), 1),
  },
  {
    id: '2-2',
    albumId: '2',
    src: 'https://avatars.mds.yandex.net/i?id=91acaab619700b403b00b119beae3c033277e27a-4865547-images-thumbs&n=13',
    alt: 'Военная подготовка',
    width: 1260,
    height: 750,
    tags: ['подготовка', 'обучение', 'курсанты'],
    createdAt: subMonths(new Date(), 1),
  },
  {
    id: '2-3',
    albumId: '2',
    src: 'https://avatars.mds.yandex.net/i?id=230e37dd7b3b1a8c83c3fef9dedb4addf45271c0-5253128-images-thumbs&n=13',
    alt: 'Занятия в классе',
    width: 1260,
    height: 750,
    tags: ['класс', 'обучение', 'теория'],
    createdAt: subMonths(new Date(), 1),
  },
];

// Mock news articles
export const mockNewsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Начало занятий в новом учебном центре',
    content: `<p>Сегодня начались занятия в новом учебном военном центре АлтГУ.</p>
    <p>Курсанты приступили к изучению теоретических основ военного дела и практическим занятиям по специальной подготовке.</p>
    <p>Новый центр оснащен современным оборудованием и позволяет проводить комплексную подготовку будущих специалистов.</p>`,
    excerpt: 'В АлтГУ открылся новый учебный военный центр, оснащенный современным оборудованием.',
    coverImage: 'https://swsu.ru/upload/iblock/050/15m9uv2hrcsig520a54dljy0y5phg7ey/1.jpg',
    createdBy: '1',
    createdAt: subDays(new Date(), 5),
    updatedAt: subDays(new Date(), 5),
    category: 'Обучение',
    tags: ['учебный центр', 'подготовка', 'АлтГУ'],
  },
  {
    id: '2',
    title: 'Строевой смотр курсантов',
    content: `<p>Состоялся первый строевой смотр курсантов военного учебного центра.</p>
    <p>Курсанты продемонстрировали отличную строевую подготовку и слаженность действий в составе подразделения.</p>
    <p>Командование центра высоко оценило уровень подготовки личного состава.</p>`,
    excerpt: 'Прошел первый строевой смотр курсантов нового набора.',
    coverImage: 'https://msalkirov.ru/wp-content/uploads/2022/09/image001.jpg',
    createdBy: '3',
    createdAt: subDays(new Date(), 10),
    updatedAt: subDays(new Date(), 8),
    category: 'Мероприятия',
    tags: ['строевая подготовка', 'смотр', 'курсанты'],
  },
  {
    id: '3',
    title: 'Специальная подготовка курсантов',
    content: `<p>В учебном центре проходят занятия по специальной подготовке.</p>
    <p>Курсанты осваивают:</p>
    <ul>
      <li>Тактическую подготовку</li>
      <li>Огневую подготовку</li>
      <li>Военно-техническую подготовку</li>
      <li>Строевую подготовку</li>
    </ul>
    <p>Все занятия проводятся под руководством опытных инструкторов.</p>`,
    excerpt: 'Курсанты проходят комплексную программу специальной подготовки.',
    coverImage: 'https://avatars.mds.yandex.net/i?id=91acaab619700b403b00b119beae3c033277e27a-4865547-images-thumbs&n=13',
    createdBy: '2',
    createdAt: subDays(new Date(), 15),
    updatedAt: subDays(new Date(), 15),
    category: 'Обучение',
    tags: ['специальная подготовка', 'обучение', 'курсанты'],
  },
  {
    id: '4',
    title: 'Теоретические занятия в учебном центре',
    content: `<p>В учебном военном центре проходят теоретические занятия по военным дисциплинам.</p>
    <p>Курсанты изучают основы военного дела, тактику, стратегию и другие важные аспекты военной науки.</p>
    <p>Занятия проводятся в специально оборудованных классах с использованием современных технических средств обучения.</p>`,
    excerpt: 'Курсанты изучают теоретические основы военного дела.',
    coverImage: 'https://avatars.mds.yandex.net/i?id=230e37dd7b3b1a8c83c3fef9dedb4addf45271c0-5253128-images-thumbs&n=13',
    createdBy: '3',
    createdAt: subDays(new Date(), 22),
    updatedAt: subDays(new Date(), 22),
    category: 'Обучение',
    tags: ['теория', 'военное дело', 'обучение'],
  },
];

// Mock form submission handler
export const handleContactFormSubmission = async (formData: ContactForm): Promise<{ success: boolean, message: string }> => {
  console.log('Form submitted:', formData);
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: 'Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.'
  };
};

// Mock dashboard stats
export const mockDashboardStats: DashboardStats = {
  membersCount: 45,
  upcomingEvents: 7,
  newApplications: 12,
  recentNewsCount: 4,
};