<template>
    <div class="resource">
        <flex-box justify="center" dir="column">
            <span>aaa</span>
            <span>bbb</span>
            <span>ccc</span>
        </flex-box>
        <flex-box justify="center" dir="row">
            <span class="test">aaa</span>
            <span class="test">bbb</span>
            <span class="test">ccc</span>
        </flex-box>
        <div style="width:33%">vava </div>
        <div style="width:33%">vava </div>
        <div style="width:33%">vava </div>

        <flex-box dir="row">
            <span class="test">aaa</span>
            <span class="test">bbb</span>
            <span class="test">ccc</span>
        </flex-box>

        <button v-on:click="show = !show">
            Toggle
        </button>
        <!-- <transition name="fade"> <p v-if="show">hello</p> </transition> -->
        <!-- <div id="triangle-down"></div> -->
        <div class="half-circle"></div>
        <div class="circle"></div>
        <div class="arc1"></div>
        <div class="arc2"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: true
        };
    }
};
</script>
<style lang="less" scoped>
@import '../../assets/css/index';
.resource {
    min-height: 500px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    padding: 24px;

    .test {
        flex: 1;
        text-align: center;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
    .half-circle {
        width: 100px;
        height: 0px;
        border-top: 50px solid #000;
        border-radius: 100px 100px 0 0;
        background-color: #000;
    }
    .arc1 {
        width: 100px;
        height: 200px;
        border: 1px solid #000;
        border-radius: 0 100px 100px 0;
    }

    .arc2 {
        width: 200px;
        height: 100px;
        border: 1px solid #000;
        border-radius: 100px 100px 0 0;
    }
    .circle {
        width: 200px;
        height: 200px;
        border-radius: 0 100px 0 0;
        // border-left: 10px solid #f00;
        // border-top: 10px solid #0f0;
        // border-right: 10px solid #00f;
        // border-bottom: 10px solid #000;
        box-sizing: border-box;
    }
    #triangle-down {
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-top: 100px solid red;
        border-right: 50px solid transparent;
        border-bottom: 100px solid red;
    }
}
</style>
