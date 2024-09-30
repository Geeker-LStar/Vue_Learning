// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
// pages
import Home from '../views/homepage.vue';
import About from '../views/about.vue';
import Blogs from '../views/blogs.vue'
import Cloud from '../views/cloud.vue'
import Members from '../views/members.vue'
import Projects from '../views/projects.vue'
// blogs
import blog_240918 from '../views/blogs/blog_240918.vue'


const routes = [
  // pages
  {
    path: '/',
    name: 'homepage',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs,
  },
  {
    path: '/cloud',
    name: 'cloud',
    component: Cloud,
  },
  {
    path: '/members',
    name: 'members',
    component: Members,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
  },
  // blogs
  {
    path: '/blogs/240918',
    name: 'blog_240918',
    component: blog_240918
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
