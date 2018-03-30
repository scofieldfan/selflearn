import Vue from 'vue';
import Vuex from 'vuex';
import {
    SelectRoles,
    AddRole,
    DeleteRole,
    EditRole,
    SelectResource,
    SelectResourceList,
    AllotResource
} from '../../service/admin/role';

import service from '../../service/service';

Vue.use(Vuex);

const state = {
    roles: {},
    sourceList: {}
};

const getters = {};

const mutations = {
    setRoles(state, data) {
        state.roles = data;
    },
    setSourceList(state, data) {
        state.sourceList = data;
    }
};

const actions = {
    getRolesList({ commit }, params) {
        SelectRoles.data = params;
        return service(SelectRoles).then(data => {
            commit('setRoles', data.data);
            return data.data;
        });
    },

    //增加角色
    // eslint-disable-next-line
    addRole({ state }, params) {
        AddRole.data = params;
        return service(AddRole).then(data => {
            return data;
        });
    },

    //删除角色
    // eslint-disable-next-line
    deleteRole({ state }, params) {
        const sendData = {
            ...DeleteRole,
            url: DeleteRole.url + params + '/deletes',
            data: params
        };
        return service(sendData).then(data => {
            return data;
        });
    },

    //编辑角色
    // eslint-disable-next-line
    editRole({ state }, params) {
        const sendData = {
            ...EditRole,
            url: EditRole.url + params.id,
            data: params
        };

        return service(sendData).then(data => {
            return data;
        });
    },

    //获取资源列表
    getResourceList({ commit }) {
        const sendData = {
            ...SelectResourceList
        };
        return service(sendData).then(data => {
            console.log(data);
            commit('setSourceList', data.data);
            return data.data;
        });
    },

    //获取角色资源
    // eslint-disable-next-line
    getResource({ state }, params) {
        const sendData = {
            ...SelectResource,
            url: SelectResource.url + params + '/resources'
        };
        return service(sendData).then(data => {
            return data;
        });
    },

    //给角色分配资源
    // eslint-disable-next-line
    allotResource({ state }, params) {
        const sendData = {
            ...AllotResource,
            url: AllotResource.url + params.id + '/resources',
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
