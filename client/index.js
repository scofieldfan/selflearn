import Vue from 'vue';
import Element from 'element-ui';
import './assets/eletheme/index.css';
import './assets/css/index.less';
import './assets/css/element-rewrite.less';
import * as CommonComp from './components/common/index';
import router from './router';
import store from './store';
import App from './App.vue';
import NProgress from 'vue-nprogress';
Vue.use(NProgress, {});
Vue.use(Element, { size: 'small' });

const nprogress = new NProgress({ parent: '.app-nprogress' });

// 全局组件
Object.keys(CommonComp).forEach(v => {
    Vue.component(v, CommonComp[v]);
});

const app = new Vue({
    router,
    store,
    nprogress,
    render(h) {
        return h(App, {
            props: {
                projectName: 'Learn'
            }
        });
    }
});

app.$mount('#App');

/**
__RESOURCE_MAP__;
**/
