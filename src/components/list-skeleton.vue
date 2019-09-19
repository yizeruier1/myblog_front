<template>
    <content-loader :height="95" style="margin-bottom:30px;">
        <rect x="300" y="0" rx="6" ry="6" width="100" height="86" />
        <rect x="0" y="0" rx="3" ry="3" width="290" height="20" />
        <rect x="0" y="30" rx="3" ry="3" width="290" height="40" />
        <rect x="0" y="80" rx="3" ry="3" width="60" height="16" />
        <rect x="70" y="80" rx="3" ry="3" width="70" height="16" />
        <rect x="150" y="80" rx="3" ry="3" width="140" height="16" />
    </content-loader>
</template>

<script>
    import { ContentLoader } from 'vue-content-loader'
    export default {
        name: 'list-skeleton',
        components: {
            ContentLoader
        }
    }
</script>