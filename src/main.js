// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import * as store2 from 'store2'


// (() => {
// 	const TOKEN = store2.get('token')
// 	if (TOKEN) {
// 		axios.defaults.headers.common['Authorization'] = ` Token ${TOKEN.token}`
// 	} else {
// 		axios.defaults.headers.common['Authorization'] = null
// 	}
// })()


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
