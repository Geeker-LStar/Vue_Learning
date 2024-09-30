<script setup>
import blogFrame from '../../components/blogFrame.vue'
</script>

<template>
    <blogFrame>
        <template v-slot:title>This is test</template>
        <template v-slot:content="{ h1_class, h2_class, h3_class, p_class }">
            <p :class="p_class">eeeee</p>
            <h1 :class="h1_class">this is a h1</h1>
            <p :class="p_class">this is a p</p>
            <h1 :class="h1_class">this is another h1</h1>
            <p :class="p_class">this is another p
            </p>
        </template>
        <template v-slot:side_bar="{ h1_class, h2_class, h3_class, p_class }">
            <h3 :class="h3_class">On this page:</h3>
            <p :class="p_class">Introduction about AIBA!</p>
        </template>
    </blogFrame>
</template>