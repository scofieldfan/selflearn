import Vue from 'vue';
import Router from 'vue-router';
import { state } from '../store/menu';
Vue.use(Router);
import menuUtil from '../util/menuUtil';
export default new Router({
    mode: 'hash',
    linkActiveClass: 'is-active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            name: '欢迎页',
            path: '*',
            meta: {},
            component: () => import('../views/user/BorderRadius.vue')
        },
        ...menuUtil.generateRoutesFromMenu(state.items)
    ]
});
