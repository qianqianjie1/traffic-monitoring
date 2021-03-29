import Vue from 'vue';
import router from './router/index.js';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue'
import App from './App';

Vue.use(Antd)
Vue.config.productionTip = false
Vue.prototype.Global = global

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
