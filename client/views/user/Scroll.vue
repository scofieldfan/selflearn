<template>
    <div class="scroll">
        <div class="test-scroll-container">
            <div class="test"> 测试 </div>
            <div class="test"> 测试 </div>
            <div class="test"> 测试 </div>
            <div class="test"> 测试 </div>
            <div class="test"> 测试 </div>
            <div class="test"> 测试 </div>
            <div class="test"> 测试 </div>
            <div class="test"> 测试 </div>
            <div class="test"> 测试 </div>
            <div class="test"> 测试 </div>
            <div class="test"> 测试 </div>
        </div>
        <div class="test-scroll-container"></div>
        <div class="test-scroll-container"></div>
        <div class="test-scroll-container"></div>
        <div class="test-scroll-container"></div>
        <div class="test-scroll-container"></div>
        <div class="test-scroll-container"></div>
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
.scroll {
    .test-scroll-container {
        width: 300px;
        height: 100px;
    }
}
</style>
