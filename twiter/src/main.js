// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import AppTwit from './components/twit.vue';
import AppTwitCreate from './components/twitCreate.vue';
Vue.component('AppTwit', AppTwit);
Vue.component('AppTwitCreate', AppTwitCreate);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
