import { createRouter, createWebHistory } from 'vue-router';

import Home from '../screens/Home';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/videos',
    name: 'Videos',

    component: () => import(/* webpackChunkName: "videos" */ '../screens/Videos')
  },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../screens/About')
  },
  {
    path: '/contact',
    name: 'Contact',

    component: () => import(/* webpackChunkName: "contact" */ '../screens/Contact')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;