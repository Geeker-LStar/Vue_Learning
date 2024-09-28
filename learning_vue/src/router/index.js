// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import zzo from '../views/001.vue'; 
import about from '../views/about.vue';
import playground from '../views/playground.vue'
import todo from '../views/todo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld,
  },
  {
    path: '/001',
    name: '001',
    component: zzo,
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  },
  {
    path: '/playground',
    name: 'playground',
    component: playground,
  },
  {
    path: '/todo',
    name: 'todo',
    component: todo,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
