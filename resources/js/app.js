import Vue from "vue";
import Index from './components/Index'

require('./bootstrap');

require('alpinejs');

window.Vue = require('vue');

const app = new Vue({
  el: '#app',
  components: {
    "Index": Index
  },
});
