<template>
    <div class="test-eventloop">
        <el-button type="primary" @click="onClick">click me!!</el-button>
        <div class="test">
            {{msg}}
        </div>
    </div>
</template>
<script>
// import DateUtil from '../../util/date';
export default {
    data() {
        return {
            show: true,
            msg: ''
        };
    },
    methods: {
        onClick() {
            console.log('onclick...');
            setTimeout(() => {
                console.log('onclick timeout...');
                const date = new Date();
                this.msg =
                    'onclick..' + date.getMinutes() + ':' + date.getSeconds();
            }, 2000);
        }
    }
};
</script>
<style lang="less" scoped>
.test-eventloop {
    .test {
        height: 200px;
        margin-top: 15px;
        padding: 15px;
        background: #000;
        color: #fff;
    }
}
</style>
