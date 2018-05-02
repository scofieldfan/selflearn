<template>
    <div>
        {{msg}}
    </div>
</template>
<script>
import common from '../../util/common.js';
function test() {
    console.log('hi...');
}
function hello() {
    console.log('world...');
}
export default {
    data() {
        return {
            msg: 'function'
        };
    },
    mounted() {
        const thrTest = common.throttle(test, 100);
        thrTest();
        thrTest();
        thrTest();
        thrTest();
        thrTest();
        thrTest();
        const debounceTest = common.debounce(hello, 100);
        debounceTest();
        setTimeout(() => {
            debounceTest();
        }, 200);
        setTimeout(() => {
            debounceTest();
        }, 50);
        setTimeout(() => {
            debounceTest();
        }, 50);
        setTimeout(() => {
            debounceTest();
        }, 50);
        setTimeout(() => {
            debounceTest();
        }, 50);
    },
    components: {},
    methods: {}
};
</script>
