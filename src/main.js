import "./common/mobile.js"
import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import "amfe-flexible"
import request from "@/utils/request.js"
import Vconsole from 'vconsole';
import 'vant/lib/index.css';
import VueCookies from 'vue-cookies'
import appInit from '@/utils/common.js'
Vue.use(VueCookies)
if (process.env.NODE_ENV === "development") {
    new Vconsole()
}
let userlocalStorage = localStorage.getItem('userInfo');
if (userlocalStorage == "[object Object]") {
    localStorage.removeItem('userInfo');
    userlocalStorage = null;
}

let _user = JSON.parse(userlocalStorage)
window.localStorage.wmUserInfo = JSON.stringify({
    userId: _user && _user.uid || '未获得id',
    userTag: _user && _user.header && _user.header['X-os'] || '未获得tag',
    projectVersion: '1.0.1'
})
Vue.prototype.request = request;
Vue.prototype.appInit = appInit;
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
