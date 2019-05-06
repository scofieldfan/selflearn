<template>
    <div class="flexbox">
        <div class="demo1 ">
            <div class="left">le234234234234234234 sdfg 345345</div>
            <div class="right">right</div>
        </div>

        <div class="demo2 ">
            <div class="left">left</div>
            <div class="right">right</div>
        </div>

        <div class="demo3 ">
            <div class="left">left</div>
            <div class="right">right</div>
        </div>

        <div class="demo4 ">
            <div class="left">left</div>
            <div class="right">right</div>
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
.flexbox {
    > div {
        margin-bottom: 50px;
    }
    /*  float + BFC */
    .demo1 {
        background-color: red;

        .left {
            /* 高度一般由内容 撑开 */
            float: left;
            width: 100px;
            background-color: #ccc;
        }
        .right {
            /* 高度一般由内容 撑开 */
            // margin-left: 100px;
            background-color: #fff;
            overflow: hidden;
        }

        /* 浮动元素为最高元素时了,父元素会出现高度坍的问题  s*/
        &:after {
            content: '';
            display: block;
            clear: both;
        }
    }

    /*  flex */
    .demo2 {
        background-color: red;
        display: flex;
        .left {
            width: 100px;
            background-color: #ccc;
        }
        .right {
            flex: 1;
            background-color: #fff;
        }
    }

    /*  absolute */
    .demo3 {
        background-color: red;
        position: relative;
        .left {
            position: absolute;
            width: 100px;
            background-color: #ccc;
        }
        .right {
            margin-left: 100px;

            background-color: #fff;
        }
    }

    /*  float + margin */
    .demo4 {
        background-color: red;

        .left {
            /* 高度一般由内容 撑开 */
            float: left;
            width: 100px;
            background-color: #ccc;
        }
        .right {
            /* 高度一般由内容 撑开 */
            margin-left: 100px;
            background-color: #fff;
        }

        &:after {
            content: '';
            clear: both;
        }
    }
}
</style>
