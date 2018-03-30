import Vue from 'vue';
import Vuex from 'vuex';
import {
    SelectDevelopers,
    SelectMedias,
    Adslots,
    DelAdslot,
    PutAdslotPrice,
    PutAdslotStatus
} from '../../service/resourceAd';

import service from '../../service/service';

Vue.use(Vuex);

const state = {
    developers: {
        details: ['1112', '2e33', '4235'],
        total: 0
    },
    medias: {
        details: [],
        total: 0
    },
    adslots: {
        details: [],
        total: 0
    }
};

const getters = {
    developersDetail(state) {
        return state.developers.details;
    }
};

const mutations = {
    setDevelopers(state, data) {
        data = data || [];
        state.developers = data;
    },
    setMedias(state, data) {
        data = data || [];
        state.medias = data;
    },
    setAdslots(state, data) {
        if (data.details) {
            state.adslots = data;
        }
    },
    // 修改广告状态
    setAdslotStatus(state, data) {
        console.log(data);
        const Adslots = state.adslots.details;
        const { adSlotID, status } = data;
        Adslots.forEach((value, index) => {
            if (value.adSlotID == adSlotID) {
                state.adslots.details[index].status = status;
            }
        });
    }
};

const actions = {
    // 获取开发者列表接口
    getDevelopersList({ commit }) {
        return service(SelectDevelopers).then(data => {
            commit('setDevelopers', data.data);
        });
    },
    // 获取媒体列表接口
    getMediasList({ commit }) {
        return service(SelectMedias).then(data => {
            commit('setMedias', data.data);
        });
    },
    // 获取广告位列表
    getAdslotsList({ commit }, params) {
        Adslots.data = params;
        return service(Adslots).then(data => {
            commit('setAdslots', data.data);
        });
    },
    // 删除广告位
    // eslint-disable-next-line
    delAdslot({}, params) {
        DelAdslot.url = DelAdslot.url + '/' + params.adSlotID;
        return service(DelAdslot);
    },
    // 编辑广告位
    // eslint-disable-next-line
    putAdslotPrice({}, params) {
        PutAdslotPrice.data = params;
        return service(PutAdslotPrice);
    },
    // 编辑广告位状态
    putAdslotStatus({ commit }, params) {
        PutAdslotStatus.data = params;
        commit('setAdslotStatus', {
            adSlotID: params.adSlotID,
            status: params.status
        });
        return service(PutAdslotStatus).catch(data => {
            commit('setAdslotStatus', {
                adSlotID: params.adSlotID,
                status: params.oldStatus
            });
            throw data;
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
