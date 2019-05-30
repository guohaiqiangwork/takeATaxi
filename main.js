import Vue from 'vue'
import App from './App'
import axios from './bin/fetch'
import baseUrl from './bin/url'

Vue.prototype.$axios =axios;
Vue.prototype.$baseUrl =baseUrl;
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
