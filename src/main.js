import Vue from 'vue'
import App from './App.vue'
import router from './router/routerConfig'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

// UI size
Vue.prototype.UISize = "medium"

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
