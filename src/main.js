import Vue from 'vue'
import App from './App.vue'
import router from './router/routerConfig'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font-icon/iconfont.css'
import 'normalize.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

// 指令
Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})

// UI size
Vue.prototype.UISize = "medium"

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
