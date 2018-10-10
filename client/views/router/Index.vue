<template>
    <div class="test-css">
        <h2>Parent</h2>
        <ul>
            <li>
                <router-link to="/user/router">/parent</router-link>
            </li>
            <li>
                <router-link to="/user/router/foo">/parent/foo</router-link>
            </li>
            <li>
                <router-link to="/user/router/bar">/parent/bar</router-link>
            </li>
        </ul>
        <transition :name="transitionName">
            <router-view class="child-view"></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            transitionName: 'slide-left'
        };
    },
    beforeRouteUpdate(to, from, next) {
        console.log('to', to);
        console.log('from', from);
        console.log('next', next);
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        this.transitionName =
            toDepth < fromDepth ? 'slide-right' : 'slide-left';
        next();
    },
    methods: {}
};
</script>
<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
.child-view {
    position: absolute;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
}
</style>
