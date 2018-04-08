<template>
    <div class="border-radius">
        <div class="circle"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
        <div class="circle5"></div>
        <div class="circle6"></div>
        <div class="half-circle"></div>
        <div class="arc0"></div>
        <div class="arc1"></div>
        <div class="arc2"></div>
        <div class="triangle1"></div>
        <div class="triangle2"></div>
        <div class="triangle3"></div>
        <div class="triangle4"></div>
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
.border-radius {
    display: flex;
    flex-wrap: wrap;
    div {
        margin: 10px;
    }
    //border-radius 一个属性代表了左边框 和上边框 ，最后一个属性下边框和左边框
    .circle {
        width: 200px;
        height: 200px;
        border-radius: 100px 100px 0 0;
        background: #000;
        // border-left: 10px solid #f00;
        // border-top: 10px solid #0f0;
        // border-right: 10px solid #00f;
        // border-bottom: 10px solid #000;
        box-sizing: border-box;
    }
    .circle2 {
        width: 100px;
        height: 100px;
        border-radius: 100px 0 0 0;
        border-left: 10px solid #f00;
        border-top: 10px solid #0f0;
        border-right: 10px solid #00f;
        border-bottom: 10px solid #000;
        box-sizing: border-box;
    }
    .circle3 {
        width: 100px;
        height: 100px;
        border-radius: 100px 0 0 0;
        border-top: 10px solid #f00;
        box-sizing: border-box;
        background: #000;
    }
    .circle4 {
        width: 100px;
        height: 100px;
        border-radius: 100px 0 0 0;
        border-top: 10px solid #f00;
        border-left: 10px solid #0f0;
        box-sizing: border-box;
        background: #000;
    }
    .circle5 {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        border-left: 10px solid #f00;
        border-top: 10px solid #0f0;
        border-right: 10px solid #00f;
        border-bottom: 10px solid #000;
        box-sizing: border-box;
        transition: all 1s ease;
        transform: rotate(720deg);
    }
    .circle6 {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        border-left: 10px solid #f00;
        border-top: 10px solid #0f0;
        border-right: 10px solid #00f;
        // border-bottom: 10px solid #000;
        box-sizing: border-box;
        transition: all 1s ease;
        transform: rotate(720deg);
    }
    .half-circle {
        width: 100px;
        height: 0px;
        border-top: 50px solid #000;
        border-radius: 100px 100px 0 0;
        background-color: #000;
    }

    .arc0 {
        width: 100px;
        height: 100px;
        border-radius: 100px 0 0 0;
        border-top: 10px solid #f00;
        box-sizing: border-box;
    }
    .arc1 {
        width: 100px;
        height: 200px;
        border: 1px solid #000;
        border-radius: 0 100px 100px 0;
        border-left: none;
        //X轴不动，正的就是逆时针，负值为顺时针
        transform: skewX(10deg);
    }

    .arc2 {
        width: 200px;
        height: 100px;
        border: 1px solid #000;
        border-radius: 100px 100px 0 0;
        border-bottom: none;
        //Y轴不动，正的就是顺时针，负值为逆时针
        transform: skewY(10deg);
    }

    .triangle1 {
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-top: 100px solid blue;
        border-right: 50px solid transparent;
    }
    .triangle2 {
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-bottom: 100px solid blue;
        border-right: 50px solid transparent;
    }
    .triangle3 {
        width: 0;
        height: 0;
        border: 50px solid transparent;
        border-left: 100px solid blue;
    }
    .triangle4 {
        width: 0;
        height: 0;
        border-left: 50px solid #ccc;
        border-right: 50px solid #f00;
        border-bottom: 50px solid #0f0;
        border-top: 50px solid #00f;
    }
}
</style>
