import {ISidebarMenu} from "../modules/sidebar";

export const getMenus = (notificationsQty: number = 0) => {
  const menus: ISidebarMenu[] = [
    {
      id: 1,
      name: 'Home',
      icon: '/images/menuIcons/home.png',
      notification: 0,
      url: '/',
    },
    {
      id: 2,
      name: 'Info Portal',
      icon: '/images/menuIcons/portal.png',
      notification: 0,
      url: '/',
    },
    {
      id: 3,
      name: 'Organizations',
      icon: '/images/menuIcons/organizations.png',
      notification: 0,
      url: '/',
    },
    {
      id: 4,
      name: 'Specialists',
      icon: '/images/menuIcons/specialists.png',
      notification: 0,
      url: '/',
    },
    {
      id: 5,
      name: 'Goods',
      icon: '/images/menuIcons/goods.png',
      notification: 0,
      url: '/',
    },
    {
      id: 6,
      name: 'Services',
      icon: '/images/menuIcons/services.png',
      notification: 0,
      url: '/',
    },
    {
      id: 7,
      name: 'Tasks',
      icon: '/images/menuIcons/tasks.png',
      notification: 0,
      url: '/tasks',
    },
    {
      id: 8,
      name: 'Forum',
      icon: '/images/menuIcons/forum.png',
      notification: 0,
      url: '/',
    },
    {
      id: 9,
      name: 'Treatment',
      icon: '/images/menuIcons/treatment.png',
      notification: 0,
      url: '/',
    },
    {
      id: 10,
      name: 'Medical records',
      icon: '/images/menuIcons/medicalRecords.png',
      notification: 0,
      url: '/',
    },
    {
      id: 11,
      name: 'Stay сlean',
      icon: '/images/menuIcons/stayClean.png',
      notification: 0,
      url: '/',
    },
    {
      id: 12,
      name: 'My friends',
      icon: '/images/menuIcons/friends.png',
      notification: 0,
      url: '/',
    },
    {
      id: 13,
      name: 'Notifications',
      icon: '/images/menuIcons/notification.png',
      notification: notificationsQty,
      url: '/notifications',
    },
    {
      id: 14,
      name: 'Messages',
      icon: '/images/menuIcons/messages.png',
      notification: 0,
      url: '/',
    },
  ];

  return menus;
}