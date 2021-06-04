import "./bootstrap";
import "alpinejs";
import Vue from "vue";
import VueRouter from "vue-router";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
import moment from "moment";

import PostList from "./components/PostList";
import Post from "./components/Post";
import TopicPostList from "./components/TopicPostList";
import AuthorPostList from "./components/AuthorPostList";
import NotFound from "./components/404"


window.Vue = Vue;
Vue.use(VueApollo);
Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: PostList },
  { path: "/post/:id", name: "post", component: Post },
  { path: "/authors/:id", name: "authors", component: AuthorPostList },
  { path: "/topics/:slug", name: "topics", component: TopicPostList },
  { path: "*", name: "404", component: NotFound },
];

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: "http://localhost:3000/graphql",
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.filter('timePassed', value => moment(value).fromNow());
Vue.filter('formattedDate', value => moment(value).format('MMM Do, YYYY'));

const app = new Vue({
  el: "#app",
  apolloProvider,
  router,
});
