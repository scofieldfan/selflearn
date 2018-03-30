/**
 * 菜单和路由配置
 */

import Vue from 'vue';
import Vuex from 'vuex';
import data from './data';

// import service from '../../service/service';

Vue.use(Vuex);

// user信息
const userInfo = {};

export const state = {
    items: data(userInfo)
};

const getters = {};
const mutations = {};

const actions = {};

const store = {
    state,
    actions,
    getters,
    mutations
};

export default store;
