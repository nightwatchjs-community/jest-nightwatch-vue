import {createRouter, createWebHistory} from 'vue-router'
import Home from './Home.vue';
import About from './About.vue';

const history = createWebHistory();
const routes = [
  {
    path: '/',
    component: Home
  },

  {
    path: '/about/',
    component: About
  }
];

export default createRouter({
  history,
  routes
});