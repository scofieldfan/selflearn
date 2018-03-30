import Vue from 'vue';
import Vuex from 'vuex';

import { treeList, edit, add, del } from '../../service/admin/resource';

import service from '../../service/service';
import { RESOURCE_TYPE } from '../../config/enums';

Vue.use(Vuex);
const state = {
    dialogFormVisible: false, // 编辑or新增框
    dialogDeleteVisible: false, // 删除框
    data: [],
    defaultProps: {
        children: 'children',
        label: 'name'
    },
    form: {
        // 新增或编辑框的字段
        name: '',
        id: '',
        type: '',
        url: '',
        priority: '',
        identifier: '',
        start: '',
        end: '',
        parentId: ''
    }
};

const getters = {};

const mutations = {
    setTree(state, list) {
        state.data = list;
    },
    setFormEdit(state, data) {
        state.form = clearForm();
        state.form = { ...data };
    },
    setFormAddSameLevel(state, { parentId }) {
        state.form = clearForm();
        state.form.parentId = parentId;
    },
    setFormAddSubLevel(state, { id }) {
        state.form = clearForm();
        state.form.id = id;
    },
    setFormDelete(state, { id }) {
        state.form = clearForm();
        state.form.id = id;
    },
    setDialogFormVisible(state, value) {
        state.dialogFormVisible = value;
    },
    setDialogDeleteVisible(state, value) {
        state.dialogDeleteVisible = value;
    }
};

const actions = {
    getResourceList({ commit }) {
        return service(treeList).then(result => {
            console.log('then', result);
            if (result.data && result.data.list && result.data.list.length) {
                commit('setTree', result.data.list);
            }
        });
    },
    editAction({ commit, state }) {
        const editProp = { ...edit };
        editProp.data = { ...state.form };
        Object.keys(RESOURCE_TYPE).forEach(item => {
            if (editProp.data.type === RESOURCE_TYPE[item]) {
                editProp.data.type = item;
            }
        });
        editProp.url = editProp.url + '/' + state.form.id;
        commit('setDialogFormVisible', false);
        return service(editProp).then(result => {
            console.log('then', result);
        });
    },
    addAction({ commit, state }) {
        const addProp = { ...add };
        addProp.data = { ...state.form };
        Object.keys(RESOURCE_TYPE).forEach(item => {
            if (addProp.data.type === RESOURCE_TYPE[item]) {
                addProp.data.type = item;
            }
        });
        // 新增同级的非顶层节点
        if (state.form.parentId) {
            addProp.url = addProp.url + '/' + state.form.parentId + '/children';
            // 新增子级节点
        } else if (state.form.id) {
            addProp.url = addProp.url + '/' + state.form.id + '/children';
            // 新增顶层节点
        } else {
            addProp.url = addProp.url;
        }
        commit('setDialogFormVisible', false);
        return service(addProp).then(result => {
            console.log('then', result);
        });
    },

    deleteAction({ commit, state }) {
        const delProp = { ...del };
        delProp.url = delProp.url + state.form.id + '/deletes';
        commit('setDialogDeleteVisible', false);
        return service(delProp).then(result => {
            console.log('then', result);
        });
    }
};

function clearForm() {
    return {
        name: '',
        id: '',
        type: '',
        url: '',
        priority: '',
        identifier: '',
        start: '',
        end: '',
        parentId: ''
    };
}

const store = new Vuex.Store({
    actions,
    getters,
    state,
    mutations
});

export default store;
