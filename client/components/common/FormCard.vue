/**
 * 搜索卡片布局
 * Created by mac on 2017/12/19.
 */
<template>
    <div class="common-searchcard">
        <Card>
            <div slot="header">
                <slot name="header"></slot>
            </div>
            <FlexBox
                justify="space-between"
                class="choice"
                v-if="isHaveHeader"
            >
                <div>
                    <div class="choice-title">
                        <slot name="choice-title"></slot>
                    </div>
                        <slot name="choice"></slot>
                </div>
                <div>
                    <slot name="operation"></slot>
                </div>
            </FlexBox>
            <slot name="form"></slot>
        </Card>
    </div>
</template>

<style lang="less">
.common-searchcard {
    .choice {
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #ebeef5;
    }
    .choice-title {
        display: inline-block;
        width: 100px;
        text-align: right;
    }
}
</style>

<script>
import FlexBox from './FlexBox.vue';
import Card from './Card.vue';
export default {
    name: 'searchCard',
    props: {
        isHaveHeader: {
            type: Boolean,
            default: false
        }
    },
    components: {
        FlexBox,
        Card
    }
};
</script>

