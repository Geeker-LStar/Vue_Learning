<script setup>
import Pages from '../components/pages.vue'
import {ref} from 'vue'

const title = ref('AIBA - Projects')
document.title = title.value
</script>

<template>
    <Pages>
        <template v-slot:title>Projects</template>
        <template v-slot:content>
        </template>
        <template v-slot:side_bar></template>
    </Pages>
</template>