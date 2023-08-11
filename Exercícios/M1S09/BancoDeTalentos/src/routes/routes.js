import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home/Home.vue'
import About from '../views/About/About.vue'
import TalentNew from '../views/Talent/New/TalentNew.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sobre',
      name: 'About',
      component: About
    },
    {
      path: '/talentos/novo',
      name: 'TalentNew',
      component: TalentNew
    }
  ]
})

export default router
