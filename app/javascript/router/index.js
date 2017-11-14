import Vue from 'vue'
import Router from 'vue-router'
import Root from '../pages/Root'
import Inbox from '../pages/Inbox'
import Stage from '../pages/Stage'
import NotFound from '../pages/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    },
    {
      path: '/inboxes/:state',
      name: 'Inbox',
      component: Inbox,
      props: true
    },
    {
      path: '/stages/:state_name/:plate',
      name: 'Stage',
      component: Stage,
      props: true
    },
    { path: '*', component: NotFound }
  ],
  mode: 'history'
})
