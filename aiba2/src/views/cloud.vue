<script setup>
import Pages from '../components/pages.vue'
import {ref} from 'vue'

const title = ref('AIBA - Cloud')
document.title = title.value
</script>

<template>
    <Pages>
        <template v-slot:title>Cloud</template>
        <template v-slot:content="{ h1_class, h2_class, h3_class, p_class }">
            <p :class="p_class">Hey! Welcome to this page!!</p>
            <p :class="p_class">Here are AIBA's cloud! We put some files here, which may include our <span class="text-red-500">[slide]</span>, <span class="text-yellow-500">[code]</span> and <span class="text-blue-500">[other files]</span>.</p>
            <p :class="p_class">On this page, we list our files in <span class="font-bold">time order</span>, latest first.</p>
            <h1 :class="h1_class">Ooops, no files here now.</h1>
            <p :class="p_class" class="text-red-500">But it will have sooooon! keep follow!</p>
        </template>
        <template v-slot:side_bar="{ h1_class, h2_class, h3_class, p_class }">
            <h3 :class="h3_class">On this Page:</h3>
            <p :class="p_class">Some files!</p>
        </template>
    </Pages>
</template>