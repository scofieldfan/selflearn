<template>
    <section class="app-main" :style="[hiddenSidebarStyle]">
        <div class="app-content">
            <breadcrumb></breadcrumb>
            <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
                <router-view class="view animated"></router-view>
            </transition>
        </div>
    </section>
</template>

<script>
import Breadcrumb from './Breadcrumb';
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            layout: 'layout'
        }),
        hiddenSidebarStyle() {
            return !this.layout.showSidebar ? { 'margin-left': 0 } : null;
        }
    },
    data() {
        return {
            showLevelbar: true
        };
    },
    methods: {},
    components: {
        Breadcrumb
    }
};
</script>

<style lang="less" scoped>
@import '../../assets/css/index';
.app-main {
    padding-top: @navbarHeight;
    margin-left: @sidebarWidth;
    // transform: translate3d(0, 0, 0);
}
.app-content {
    padding: 16px;
}
</style>
