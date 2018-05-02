<template>
    <div>
        {{msg}}
        <my-component></my-component>

    </div>
</template>
<script>
import ChildComponent from './Child.vue';
export default {
    data() {
        return {
            msg: 'father'
        };
    },
    components: {
        'my-component': ChildComponent
    }
};
</script>
