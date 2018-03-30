import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

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
        {
            name: '欢迎页',
            path: '/test',
            meta: {},
            component: () => import('../views/user/Test2.vue')
        }
    ]
});
