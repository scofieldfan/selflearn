<!--
@file: 主APP引入文件
-->
<template>
    <div id="app" class="pcadmin">
        <!--顶部导航-->
        <Navbar :show="true">

            <flex-box class="hd" justify="space-between">

                <flex-box justify="flex-start" class="nav-slider-container" :class="{ 'slide-toggle-left': !layout.showSidebar}">

                    <div class="app-title ">NIO {{projectName}}</div>
                    <a href="javascript:void(0); " class="sidebar-toggle " @click="onClickToggle ">
                        <span class="fa fa-align-justify "> </span>
                    </a>
                </flex-box>
                <span> {{userName}} </span>
            </flex-box>
        </Navbar>

        <Sidebar :show="layout.showSidebar "></Sidebar>
        <!--页面内容-->
        <AppMain></AppMain>
    </div>

</template>

<style lang="less">
// @import './assets/css/reset.less';
// @import './assets/css/common.less';
@import './assets/css/index';
.pcadmin {
    .hd {
        // margin-left: 180px;
        height: 100%;
        color: #fff;
        padding: 0 15px 0 15px;
        font-size: 14px;
    }
    .app-title {
        width: @sidebarWidth;
        height: @navbarHeight;
        line-height: @navbarHeight;
        text-align: center;
        color: #fff;
        font-size: 25px;
    }
    .sidebar-toggle {
        color: #fff;
        height: 50px;
        line-height: 50px;
        width: 40px;
        text-align: center;
        &:hover {
            background-color: #367fa9;
        }
    }
    .nav-slider-container {
        transition: all 0.3s linear;
    }
}
</style>

<script>
import { mapState, mapMutations } from 'vuex';
import { Navbar, Sidebar, AppMain } from './components/layout/index';
import cookitUtil from './util/cookie';
console.log(cookitUtil.getCookie('user_name'));
const mixin = {
    computed: {
        ...mapState(['layout'])
    },
    methods: {
        ...mapMutations(['setShowSideBar'])
    }
};

export default {
    components: {
        Navbar,
        Sidebar,
        AppMain
    },
    props: {
        projectName: {
            type: String,
            default: 'ZEUS'
        }
    },
    mixins: [mixin],
    data() {
        return {
            userName: cookitUtil.getCookie('user_name'),
            show: true
        };
    },
    computed: {},
    mounted() {
        console.log('layout:', this.layout);
    },
    methods: {
        onClickToggle() {
            this.setShowSideBar(!this.layout.showSidebar);
        }
    }
};
</script>
