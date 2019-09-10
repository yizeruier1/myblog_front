<template>
    <div ref="editor" style="text-align:left;"></div>
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
            editor.customConfig.uploadImgShowBase64 = true
            editor.customConfig.onchange = (html) => {
                this.editorContent = html
            }
            editor.create()

            this.editorContent = this.content
        }
    }
</script>