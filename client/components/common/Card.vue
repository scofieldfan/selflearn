/**
 * 卡片布局
 * Created by mac on 2017/12/19.
 */
<template>
    <div class="common-card">
        <div class="title">
            <slot name="header"></slot>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="less">
.common-card {
    background-color: #ffffff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    .title {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 10px;
    }
}
</style>

<script>
export default {
    name: 'card',
    props: {}
};
</script>

