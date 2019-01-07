import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/VideoPage').default,
      children: [{
        path: 'settings',
        name: 'settings-page',
        component: require('@/components/SettingsDialog').default,
      }],
    },
    {
      path: '/video',
      name: 'video-page',
      component: require('@/components/VideoPage').default,
    },
    {
      path: '/video',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
})
