import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/console/home/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account/login/',
    name: 'Authentication',
    // route level code-splitting
    // this generates a separate chunk (authentication.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "authentication" */ '../views/Authentication.vue')
  },
  {
    path: '/account/reset-password/',
    name: 'ResetPassword',
    component: Home
  },
  {
    path: '/console/review/',
    name: 'PastAlerts',
    component: Home
  },
  {
    path: '/console/configure/',
    name: 'Configure',
    component: () => import(/* webpackChunkName: "configurehome" */ '../views/ConfigureHome.vue')
  },
  {
    path: '/console/alert-source/add/',
    name: 'AddNewAlertSource',
    component: Home
  },
  {
    path: '/console/alert-sources/',
    name: 'ManageAlertSource',
    component: Home
  },
  {
    path: '/console/users/',
    name: 'ManageUsers',
    component: Home
  },
  {
    path: '/console/configure/extras/',
    name: 'OtherAppSettings',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
