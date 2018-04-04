<template>
    <div class="flexbox">
        <div class="demo1">
            <p>11</p>
            <p>22</p>
            <p>33</p>
        </div>
        <div class="demo2">
            <p>11</p>
            <p>22</p>
            <p>33</p>
        </div>
        <div class="demo3">
            <p>11</p>
            <p>22</p>
            <p>33</p>
        </div>
        <!-- inlineblock 得注意空格会占据位置 -->
        <div class="demo4">
            <p>11</p>
            <p>22</p>
            <p>33</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    }
};
</script>
<style lang="less" scoped>
@import '../../assets/css/index';
.flexbox {
    & > div {
        height: 100px;
    }
    & > div:nth-child(2n + 1) {
        background: blanchedalmond;
    }
    & > div:nth-child(2n) {
        background: red;
    }
    .demo1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .demo2 {
        display: flex;
        align-items: center;
        justify-content: center;
        p {
            flex: 1;
            text-align: center;
        }
    }
    .demo3 {
        overflow: hidden;
        p {
            float: left;
            width: 33%;
            // display: inline-block;
        }
    }
    .demo4 {
        p {
            width: 33%;
            display: inline-block;
        }
    }
}
</style>
