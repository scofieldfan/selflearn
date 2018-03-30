import Vue from 'vue';
import Vuex from 'vuex';
import menus from './menu';

Vue.use(Vuex);
// eslint-disable-next-line
import service from '../service/service';
// eslint-disable-next-line
import cookieUtil from '../util/cookie';

// user信息
// const userInfo = window.serverData;

const state = {
    // 布局设置
    layout: {
        showNavbar: true,
        showSidebar: true
    }
};
const actions = {};

const getters = {
    layout: state => state.layout,
    menuItems: state => state.menus.items
};

const mutations = {
    setShowSideBar(state, showSidebar) {
        state.layout.showSidebar = showSidebar;
    }
};

const modules = {
    menus
};

const store = new Vuex.Store({
    strict: true,
    actions,
    getters,
    modules,
    state,
    mutations
});

export default store;
