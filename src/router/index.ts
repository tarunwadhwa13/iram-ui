import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/console/alerts/active/',
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
    path: '/console/alerts/past/',
    name: 'PastAlerts',
    component: () => import(/* webpackChunkName: "pastalerts" */ '../views/PastAlerts.vue')
  },
  {
    path: '/console/configure/',
    name: 'Configure',
    component: () => import(/* webpackChunkName: "configurehome" */ '../views/ConfigureHome.vue')
  },
  {
    path: '/console/alerts/me/',
    name: 'AssignedAlerts',
    component: () => import(/* webpackChunkName: "assignedalerts" */ '../views/AssignedAlerts.vue')
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
  },
  {
    path: '/console/subscriptions/',
    name: 'Subscription',
    component: () => import(/* webpackChunkName: "subscription" */ '../views/Subscription.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
