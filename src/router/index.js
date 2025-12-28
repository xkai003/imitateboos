import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import ('../view/position/index.vue')
  },
  {
    path: '/JobDetails',
    component: () => import ('../view/JobDetails/index.vue')
  },
  {
    path: '/have',
    component: () => import('../view/have/index.vue')
  },
  {
    path: '/information',
    component: () => import ('../view/information/index.vue')
  },
  {
    path: '/mine',
    component: () => import('../view/mine/index.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
