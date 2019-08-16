<template>
    <div class="verticleMiddle">
        <div class="demo1">
            demo1
        </div>

        <div class="demo2">
            <p>demo2</p>
        </div>

        <div class="demo3">
            <img src="http://img.taopic.com/uploads/allimg/120727/201995-120HG1030762.jpg">
        </div>

        <div class="demo4">
            <p>demo4</p>
        </div>

        <div class="demo5">
            <div class="parent">
                <p>demo5</p>
            </div>
        </div>
        <div class="demo6">
            <div class="parent">
                <p>demo6</p>
            </div>
        </div>

        <div class="demo7">
            <div class="parent">
                <p>demo7...</p>
            </div>
        </div>
        <div class="demo8">
            <div class="parent">
                <p>demo8...</p>
            </div>
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
.verticleMiddle {
    & > div {
        // height: 100px;
        margin-top: 10px;
    }
    & > div:nth-child(2n + 1) {
        background: blanchedalmond;
    }
    & > div:nth-child(2n) {
        background: red;
    }
    .demo1 {
        height: 100px;
        line-height: 100px;
    }
    .demo2 {
        display: table;
        p {
            width: 50px;
            height: 50px;
            display: table-cell;
            vertical-align: middle;
            background: #ccc;
        }
    }

    .demo3 {
        line-height: 200px;
        // height: 50px;
        img {
            height: 30px;
            vertical-align: middle;
        }
    }
    .demo4 {
        line-height: 200px;
        // height: 50px;
        p {
            display: inline-block;
            vertical-align: middle;
            background: #ccc;
        }
    }

    .demo5 {
        // height: 100px;
        .parent {
            position: relative;
            /*absolute 高度塌陷 */
            height: 300px;
            background: blue;
            p {
                position: absolute;
                top: 50%;
                left: 50%;
                height: 100px;
                width: 100px;
                margin: -50px 0 0 -50px;
                background: #ccc;
            }
        }
    }

    .demo6 {
        height: 100px;
        overflow: hidden;
        .parent {
            position: relative;
            /*absolute 高度塌陷 */
            height: 300px;
            background: yellow;
            p {
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                height: 30%;
                width: 50%;
                margin: auto;
                background: #ccc;
            }
        }
    }

    .demo7 {
        overflow: hidden;
        .parent {
            height: 100px;
            position: relative;
            background: red;
            p {
                height: 50px;
                background: #ccc;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translateX(-50%) translateY(-50%);
            }
        }
    }

    .demo8 {
        overflow: hidden;
        .parent {
            background: red;
            height: 250px;
            display: flex;
            align-items: center;
            p {
                background: #ccc;
                height: 50px;
            }
        }
    }
}
</style>
