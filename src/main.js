import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.prototype.$localStorageKeys = {
  get modeKey() {
    return 'AGI-MODE';
  },
};

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
