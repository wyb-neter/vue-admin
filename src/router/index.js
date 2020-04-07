import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import axios from 'axios'
Vue.use(VueResource)
Vue.use(ElementUi)
Vue.use(VueRouter);
Vue.http.options.emulateJSON = true;

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
