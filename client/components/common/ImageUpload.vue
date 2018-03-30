/**
 * 图片上传
 * Created by mac on 2017/12/19.
 */
<template>
    <div class="image-upload">
        <div v-if="imageurl">
            <span>{{showFileName(imageurl)}}</span> <a href="javascript:void(0)" @click="onRemove">删除</a>
        </div>
        
        <el-upload v-else
                :action="action"
                :on-success="onUploadSuccess"
                :on-error="onUploadError"
                :before-upload="onBeforeUpload"
                :show-file-list='false'
                >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2M</div>
        </el-upload>
    </div>
</template>

<style lang="less">
.image-upload {
}
</style>

<script>
export default {
    name: 'ImageUpload',
    props: {
        action: {
            type: String,
            default: './'
        },
        imageurl: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            name: 'aaa',
            url: this.imageurl
        };
    },
    methods: {
        showFileName(url) {
            // eslint-disable-next-line
            const urlNames = url.match(/([^\/]+)\.(jpg|png)$/);
            console.log('showFileName', url);
            return (urlNames && urlNames[0]) || url;
        },
        onUploadSuccess(response) {
            this.url = response.data.ImageUrl;
            this.$emit('update:imageurl', this.url);
        },
        onUploadError() {
            this.$message.error('上传文件出错，请重试!');
        },
        onBeforeUpload(file) {
            const isJPG =
                file.type === 'image/jpeg' || file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传文件只能是 JPG、png 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传文件大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        onRemove() {
            this.url = '';
            this.$emit('update:imageurl', this.url);
        }
    },
    components: {}
};
</script>

