<template>
    <div ref="editor" style="text-align:left;height:534px;"></div>
</template>

<script>
    import E from 'wangeditor'
    export default {
        name: 'editor',
        model: {
            prop: 'content',
            event: 'watch'
        },
        props: ['content'],
        data () {
            return {
                editorContent: ''
            }
        },
        watch: {
            editorContent(newVal){
                this.$emit('watch', this.editorContent)
            }
        },
        mounted() {
            var editor = new E(this.$refs.editor)
            // editor.customConfig.uploadImgShowBase64 = true
            // 设置 图片上传地址
            editor.customConfig.uploadImgServer = '/apis/uploadEditorImg'
            // 图片大小限制 1M
            editor.customConfig.uploadImgMaxSize = 1024 * 1024
            // 一次最多传 10 张
            editor.customConfig.uploadImgMaxLength = 10
            editor.customConfig.onchange = (html) => {
                this.editorContent = html
            }
            editor.create()
            this.$emit('setInner', editor)
        }
    }
</script>