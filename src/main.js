/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MainSite from './MainSite'
import router from './router'
import Account from './Account'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { MainSite },
  template: '<MainSite/>'
})

new Vue({
  el: '#app_account',
  router,
  components: { Account },
  template: '<Account/>'
});
let test = 0



