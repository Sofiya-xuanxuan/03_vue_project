import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)

const router=new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      meta:{auth:true},//此路由需要验证
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
router.beforeEach((to,from,next)=>{
  //判断当前用户有么有登录
  if(to.meta.auth) {
    //只要本地有token就认为登录
    const token =localStorage.getItem('token');
    if(token) {
      next();
    }else {
      //未登录
      next({
        path:'/login',
        query:{redirect:to.path}//查询参
      })
    }
  }else {
    //不需要登录（被称为白名单）
    next();
  }
});

export default router;
