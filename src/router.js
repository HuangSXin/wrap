import Vue from "vue";
import Router from "vue-router";
import Login from '../src/Login_registration/Login';
import Registration from '../src/Login_registration/registration';
import Cheshi from './cheshi';
Vue.use(Router);
export default new Router({
  routes: [
      {
          path: '/cheshi',
          component: Cheshi
      },
    {
      name:'/login',
      path: '/login',
      component: Login
    },
    {
          name:'/registration',
          path: '/registration',
          component: Registration
     }
  ]
});
