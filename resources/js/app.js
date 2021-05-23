import './bootstrap';
import 'alpinejs';
import Vue from "vue";
import VueRouter from 'vue-router';

import PostList from "./components/PostList";
import Post from "./components/Post";

window.Vue = Vue;
Vue.use(VueRouter);

const routes = [
  {path: '/', name: 'home', component: PostList},
  {path: '/post/:id', name: 'post', component: Post},
];

const router = new VueRouter({
  mode: "history",
  routes,
});

const app = new Vue({
  el: '#app',
  router,
});
