<template>
    <flex-box class="app-levelbar" justify="space-between">
        <flex-box class="routers">
            <div v-for="(item, index) in list" :key="index" class="router">
                <span v-if="(index === list.length - 1)||!item.path">
                    <i :class="['fa', item.meta.icon]"></i>
                    {{ item.name }}
                </span>
                <router-link :to="item.path" v-else>{{ item.name }}</router-link>
            </div>
            <!-- <el-button  class="but-back" size="mini"  v-if="list.length > 2" @click="backEvent" type="default">返回</el-button> -->
        </flex-box>
    </flex-box>
</template>
<style lang="less">
@import '../../assets/css/index';
.app-levelbar {
    //height: 35px;
    padding-bottom: 10px;
    .routers {
        .router {
            i.fa {
                color: #4a4a4a;
            }
            font-size: 14px;
            display: inline-block;
            &:before {
                color: #4a4a4a;
                content: '>';
                display: inline-block;
                padding: 0 3px;
            }
            // &:last-child {
            //color: #ccc;
            // }
            &:first-child:before {
                display: none;
            }
        }
    }
    .but-back {
        margin-left: 15px;
    }
}
</style>
<script>
export default {
    components: {},
    data() {
        return {
            list: null
        };
    },
    created() {
        this.getList();
    },
    computed: {
        name() {
            return this.$route.name;
        }
    },
    methods: {
        getList() {
            const matched = [this.$route];
            let meta = this.$route.meta;
            while (meta && meta.parentMenu) {
                matched.unshift(meta.parentMenu);
                meta = meta.parentMenu.meta;
            }
            console.log(matched);
            this.list = matched;
        },
        backEvent() {
            this.$router.back();
        }
    },
    watch: {
        $route() {
            this.getList();
        }
    }
};
</script>
