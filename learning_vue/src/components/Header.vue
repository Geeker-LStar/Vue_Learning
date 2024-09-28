<template>
    <div>
        <h1>{{ header_content }}</h1>
    </div>
</template>

<style scoped>
h1 {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #b3428d;
}
</style>

<script>
export default {
    name: 'Header',
    data () {
        return {
            header_content: 'TEST HEADER COMPONENT!!'
        }
    }
}
</script>