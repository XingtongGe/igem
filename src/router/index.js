import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },

/*----下面是Project----*/
  {
    path: '/background',
    name: 'Background',
    component: () => import('../views/project/Background.vue')
  },
  {
   path: '/bio',
   name: 'Bio',
   component: () => import('../views/project/Bio.vue')
  },
  {
    path: '/demonstrate',
    name: 'Demonstrate',
    component: () => import('../views/project/Demonstrate.vue')
  },
  {
    path: '/hardware',
    name: 'Hardware',
    component: () => import('../views/project/Hardware.vue')
  },
  {
    path: '/model',
    name: 'Model',
    component: () => import('../views/project/Model.vue')
  },

/*----下面是Project----*/
  {
    path: '/overview',
    name: 'Overview',
    component: () => import('../views/practice/Overview.vue')
  },
  {
    path: '/silver',
    name: 'Silver',
    component: () => import('../views/practice/Silver.vue')
  },
  {
    path: '/integrated_practice',
    name: 'Integrated_Practice',
    component: () => import('../views/practice/Integrated_Practice.vue')
  },
  {
    path: '/education_and_public_engagement',
    name: 'Education_and_Public_Engagement',
    component: () => import('../views/practice/Education_and_Public_Engagement.vue')
  },

/*----下面是Medal----*/
  {
    path: '/medal',
    name: 'Medal',
    component: () => import('../views/judging/Medal.vue')
  },
  {
    path: '/safety',
    name: 'Safety',
    component: () => import('../views/judging/Safety')
  },

/*下面是Team*/
  {
    path: '/members',
    name: 'Members',
    component: () => import('../views/team/Members')
  },
  {
    path: '/collaborations',
    name: 'Collaborations',
    component: () => import('../views/team/Collaborations')
  },
  {
    path: '/notebook',
    name: 'Notebook',
    component: () => import('../views/team/Notebook')
  },
  {
    path: '/attributions',
    name: 'Attributions',
    component: () => import('../views/team/Attributions')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
