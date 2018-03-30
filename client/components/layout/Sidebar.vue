<template>
    <!-- <aside class="app-sidebar animated " :class="{ slideInLeft: show, slideOutLeft: !show }"> -->
    <aside class="app-sidebar animated " :class="{ 'slide-toggle-left': !show }">
        <el-menu class="el-menu-vertical-demo" background-color="#3f3f3f" text-color="#cbcbcb" active-text-color="#fe4444" :default-active="defaultPath" :router="true" :default-openeds="defaultOpen">
            <div v-for="(item, index) in menuItems" v-bind:key="index">
                <el-submenu :index="item.path || index + ''" v-if="item.children && item.children.length">
                    <template slot="title">
                        <i :class="['fa', item.meta.icon]"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-for="(subItem, subIndex) in item.children" v-if="subItem.name || subItem.path" v-bind:key="subIndex" :index="subItem.path || index + '' + subIndex">
                            {{subItem.name}}
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item :index="item.path || index + ''" v-else>
                    <i :class="['fa', item.meta.icon]"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </div>
        </el-menu>
    </aside>
</template>

<style lang="less">
@import '../../assets/css/index';
.app-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: @sidebarWidth;
    margin-top: @navbarHeight;
    z-index: @maxZindex + 1;
    background: #3f3f3f;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 0 15px;
    .sidebar-hd {
        color: #fff;
        font-size: 25px;
        height: @navbarHeight;
        background-color: #000;
    }
    .el-menu {
        border-right: 0px;
        i {
            font-size: 16px;
            width: 16px;
        }
        .el-icon-arrow-down {
            font-size: 12px;
            width: 16px;
            height: 16px;
            line-height: 16px;
            text-align: center;
        }
        .el-menu-item-group__title {
            padding: 0px;
        }
    }
    .el-submenu__title,
    .el-menu-item {
        height: 40px;
        line-height: 40px;
        &.is-active {
            background-color: #222 !important;
        }
    }
    transition: all 0.3s linear;
}
</style>

<script>
import { mapGetters } from 'vuex';

export default {
    components: {},
    props: {
        show: Boolean
    },
    data() {
        return {
            defaultPath: '',
            defaultOpen: []
        };
    },
    computed: {
        ...mapGetters(['menuItems'])
    },
    mounted() {
        const menuItems = this.menuItems;
        menuItems.forEach((item, index) => {
            if (item.meta.expanded) {
                this.defaultOpen.push(item.path || index + '');
            }
        });
    },
    methods: {},
    watch: {
        $route() {
            const matched = [this.$route];
            let meta = this.$route.meta;
            while (meta && meta.parentMenu) {
                matched.unshift(meta.parentMenu);
                meta = meta.parentMenu.meta;
            }
            this.defaultPath = (matched[1] && matched[1].path) || '/';
        }
    }
};
</script>
