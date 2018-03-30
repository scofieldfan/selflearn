import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// eslint-disable-next-line
import service from '../../service/service';
// eslint-disable-next-line
import cookieUtil from '../../util/cookie';

const dataManageItems = {
    name: '系统管理',
    meta: {
        icon: 'fa-database',
        expanded: true
    },
    children: [
        {
            name: '用户管理',
            path: '/admin/list',
            component: function() {
                return import('../../views/admin/List.vue');
            },
            meta: {},
            children: []
        },
        {
            name: '角色管理',
            path: '/admin/role',
            component: function() {
                return import('../../views/admin/Role.vue');
            },
            meta: {}
        },
        {
            name: '资源管理',
            path: '/admin/resource',
            component: function() {
                return import('../../views/admin/Resource.vue');
            },
            meta: {}
        }
    ]
};
export const state = {
    // 布局设置
    layout: {
        showNavbar: true,
        showSidebar: true
    },
    items: [dataManageItems]
};
const actions = {};

const getters = {
    layout: state => state.layout,
    menuItems: state => state.items
};
console.log('ares store ', state.items);
const mutations = {
    setShowSideBar(state, showSidebar) {
        state.layout.showSidebar = showSidebar;
    }
};
const store = new Vuex.Store({
    strict: true,
    actions,
    getters,
    state,
    mutations
});

export default store;
