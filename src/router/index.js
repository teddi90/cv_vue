import { createRouter, createWebHistory } from 'vue-router'
import index from "@/views/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: index
    },
    {
      path: '/works/:id',
      name: 'work',
      props:true,
      component: () => import('@/views/work.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.name === 'work') {
      return {top: 0}
    }
  }
})

export default router
