<template>
    <div>
        <div ref="editor" style="text-align:left;margin-top:20px;"></div>
    </div>
</template>

<script>
    import E from 'wangeditor'
    export default {
        name: 'editor',
        // model: {
        //     prop: 'content',
        //     event: 'input'
        // },
        // props: ['content'],
        data () {
            return {
                editorContent: ''
            }
        },
        methods: {
            getContent() {
                console.log(this.editorContent)
            }
        },
        mounted() {
            var editor = new E(this.$refs.editor)
            editor.customConfig.onchange = (html) => {
                this.editorContent = html
            }
            editor.create()
        }
    }
</script>