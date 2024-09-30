<script setup>
import Pages from '../components/pages.vue'
import blogCard from '../components/blogCard.vue'
import { blogsList } from '../components/blogInfos.vue'
import { ref } from 'vue'
import { marked }  from 'marked'
import 'github-markdown-css'

const title = ref('AIBA - Blogs')
document.title = title.value

</script>

<template>
    <Pages>
        <template v-slot:title>Blogs</template>
        <template v-slot:content="{ h1_class, h2_class, h3_class, p_class }">
            <blogCard v-for="card in blogsList" 
                :id="card.id" 
                :key="card.id">
                <template v-slot:blog_title><a :href="card.path">{{ card.title }}</a></template>
                <template v-slot:blog_author>Author: {{ card.author }}</template>
                <template v-slot:blog_date>Date: {{ card.date }}</template>
                <template v-slot:blog_abstract>{{ card.abstract }}</template>
                <p>{{ card.abstract }}</p>
            </blogCard>
        </template>
        <template v-slot:side_bar="{ h1_class, h2_class, h3_class, p_class }"></template>
    </Pages>
</template>