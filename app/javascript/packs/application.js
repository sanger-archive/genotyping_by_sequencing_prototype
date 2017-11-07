/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
// VueRouter helps determine which page to render based on the accessed route,
// allowing us to easily write SPAs
import VueRouter from 'vue-router';

Vue.use(BootstrapVue)
Vue.use(VueRouter)

import App from '../app.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue(App).$mount('#vue-application-container')
})
