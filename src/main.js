import Vue from 'vue';
import router from './router/index.js';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue'
import App from './App';
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import * as echarts from 'echarts';

Vue.use(Antd)
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)
Vue.config.productionTip = false
Vue.prototype.Global = global

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.$echarts = echarts
