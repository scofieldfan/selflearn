<template>
    <section class="app-navbar animated slideInDown">
        <!-- <section class="app-navbar animated "> -->
        <nprogress></nprogress>
        <slot></slot>
    </section>
</template>

<style lang="less" scoped>
@import '../../assets/css/index';

.app-navbar {
    position: fixed;
    min-width: 100%;
    z-index: @maxZindex + 2;
    box-shadow: 0 1px 1px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
    background: #000;
    height: @navbarHeight;
}
</style>

<script>
import Nprogress from './Nprogress';
export default {
    components: {
        Nprogress
    }
};
</script>
