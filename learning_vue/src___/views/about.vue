<!-- my first vue programme -->
<template>
    <div>
        <title>{{ title }}</title>
        <h1>{{ about }}</h1>
    </div>
</template>

<style scoped>
.h1 {
    padding: 10px;
}
</style>

<script>
export default {
    data () {
        return {
            title : 'this is about me',
            about : 'this is a page about myself.',
        }
    },
    mounted () {
        document.title = this.title
    }
}
</script>