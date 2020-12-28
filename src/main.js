// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//初始化css
import "@/assets/css/Initializtion.css"
import "@/assets/css/Public.css"//共用表单的css
import 'mint-ui/lib/style.css'
///引入rem.js
import '@static/public/Rem'

//preview
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    window.document.title = to.meta.title;
  } else {
    window.document.title = '铭筑艺成园';
  }
  if ((to.fullPath !== window.location.hash.slice(1)) && to.meta.isShare) {
    let href = window.location.href;
    href = href.replace(href.hash, ('#' + to.fullPath)); // hash模式下的页面路径拼接方式
    // console.log(href)
    window.location.assign(href);
    next();
  }else{
    next();
  }
})

router.afterEach((to,from,next) => { //路由到新页面定位到新页面的顶部
  document.body.scrollTop =0;
  document.documentElement.scrollTop = 0;
});


//引入mint-ui
import {
  Swipe,
  SwipeItem,
  Header,
  Button,
  Navbar,
  Actionsheet,
  Loadmore,
  Lazyload,
} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Navbar.name, Navbar);
Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Loadmore.name, Loadmore);
Vue.use(Lazyload);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
