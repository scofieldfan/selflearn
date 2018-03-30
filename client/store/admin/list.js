import Vue from 'vue';
import Vuex from 'vuex';
import {
    SelectAdmin,
    AddAdmin,
    EditAdmin,
    DeleteAdmin,
    SelectRoles,
    AllotRoles
} from '../../service/admin/list';

import service from '../../service/service';

Vue.use(Vuex);

const state = {
    admin: {},
    roles: {}
};

const getters = {};

const mutations = {
    setAdmin(state, data) {
        state.admin = data;
    },
    setRoles(state, data) {
        state.roles = data;
    }
};

const actions = {
    // 获取管理员列表接口
    getAdminList({ commit }, params) {
        const sendData = {
            ...SelectAdmin,
            data: params
        };
        SelectAdmin.data = { urm_service: 'URM' };
        return service(sendData).then(data => {
            commit('setAdmin', data.data);
            return data.data;
        });
    },
    //添加管理员
    // eslint-disable-next-line
    addAdmin({ state }, params) {
        const sendData = {
            ...AddAdmin,
            data: params
        };
        return service(sendData).then(data => {
            return data;
        });
    },
    //修改管理员信息
    // eslint-disable-next-line
    editAdmin({ state }, params) {
        const sendData = {
            ...EditAdmin,
            url: EditAdmin.url + params.id,
            data: params
        };
        return service(sendData).then(data => {
            return data;
        });
    },
    //删除管理员信息
    // eslint-disable-next-line
    deleteAdmin({ state }, id) {
        const sendData = {
            ...DeleteAdmin,
            url: DeleteAdmin.url + id + '/deletes'
        };
        return service(sendData).then(data => {
            return data;
        });
    },

    //获取角色列表
    selectRoles({ commit }) {
        return service(SelectRoles).then(data => {
            commit('setRoles', data.data);
            return data.data;
        });
    },

    //给管理员分配角色
    // eslint-disable-next-line
    allotRoles({ state }, params) {
        const sendData = {
            ...AllotRoles,
            url: AllotRoles.url + params.id + '/roles',
            data: params
        };
        return service(sendData).then(data => {
            return data;
        });
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
