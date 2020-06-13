import Vue from 'vue';
import { MdAvatar, MdSwitch } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import './assets/css/fonts.css';
import App from './App.vue';

import router from './router';

Vue.config.productionTip = false;

Vue.use(MdAvatar);
Vue.use(MdSwitch);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
