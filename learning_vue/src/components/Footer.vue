<template>
    <div>
        <h2>{{ footer_content }}</h2>
    </div>
</template>

<style scoped>
h2 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: gold;
}
</style>

<script>
export default {
    name: 'Footer',
    data () {
        return {
            footer_content: 'test fooooooter content!'
        }
    }
}
</script>