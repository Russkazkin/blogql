import './bootstrap';
import 'alpinejs';
import Vue from "vue";
import VueRouter from 'vue-router';

import Index from './components/Index';

window.Vue = Vue;
Vue.use(VueRouter);

const app = new Vue({
  el: '#app',
  components: {
    "Index": Index
  },
});
