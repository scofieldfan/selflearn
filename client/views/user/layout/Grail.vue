<template>
    <div class="flexbox">
        <div class="demo1 ">
            <div class="main">
                <div class="content">content</div>

            </div>
            <div class="left">left</div>

            <div class="right">right</div>
        </div>

        <div class="demo2 ">
            <div class="main">
                content

            </div>
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

    /* 双飞翼布局 ,核心思想 负边距 + main 里的子元素margin    */
    .demo1 {
        background-color: red;
        overflow: hidden;
        .left {
            float: left;
            width: 100px;
            background-color: yellow;
            margin-left: -100%;
        }
        .main {
            float: left;
            width: 100%;
            background-color: #ccc;
        }
        .right {
            float: left;
            background-color: aqua;
            width: 200px;
            overflow: hidden;
            margin-left: -200px;
        }
        .content {
            margin-left: 100px;
            margin-right: 200px;
        }
        &:after {
            clear: both;
            content: '';
            display: block;
        }
    }
    /* 圣杯布局 ,核心思想 负边距 + padding + relatives */
    .demo2 {
        background-color: red;
        overflow: hidden;
        padding: 0 200px 0 100px;
        position: relative;
        .main {
            float: left;
            width: 100%;
            background-color: #ccc;
        }
        .left {
            position: relative;
            float: left;
            width: 100px;
            left: -100px;
            background-color: yellow;
            margin-left: -100%;
        }

        .right {
            position: relative;
            float: left;
            background-color: aqua;
            width: 200px;
            overflow: hidden;
            margin-left: -200px;
            right: -200px;
        }

        &:after {
            clear: both;
            content: '';
            display: block;
        }
    }
}
</style>
