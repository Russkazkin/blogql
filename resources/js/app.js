import './bootstrap';
import 'alpinejs';
import Vue from "vue";
import VueRouter from 'vue-router';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo'

import PostList from "./components/PostList";
import Post from "./components/Post";

window.Vue = Vue;
Vue.use(VueApollo);
Vue.use(VueRouter);

const routes = [
  {path: '/', name: 'home', component: PostList},
  {path: '/post/:id', name: 'post', component: Post},
];

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://blogql.skazkin/graphql'
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

const router = new VueRouter({
  mode: "history",
  routes,
});

const app = new Vue({
  el: '#app',
  apolloProvider,
  router,
});
