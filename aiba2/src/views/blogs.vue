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
            <div v-for="card in blogsList" 
                :id="card.id" 
                :key="card.id">
                <a :href="card.path">
                    <blogCard v-for="card in blogsList" 
                        :id="card.id" 
                        :key="card.id">
                        <template v-slot:blog_title>{{ card.title }}</template>
                        <template v-slot:blog_author><span class="font-bold text-blue-300">Author: </span>{{ card.author }}</template>
                        <template v-slot:blog_date><span class="font-bold text-blue-300">Date: </span>{{ card.date }}</template>
                        <template v-slot:blog_abstract>{{ card.abstract }}</template>
                        <p>{{ card.abstract }}</p>
                    </blogCard>
                </a>
            </div>
        </template>
        <template v-slot:side_bar="{ h1_class, h2_class, h3_class, p_class }">
            <h3 :class="h3_class">On This Page:</h3>
            <p :class="p_class">Our Blogs! Orderd by time, latest first.</p>
            <p :class="p_class">Click and Have a Looook!</p>
            <p :class="p_class" v-for="card in blogsList" 
                :id="card.id" 
                :key="card.id"
                class="font-bold italic">- <a :href="card.path">{{ card.title }}</a></p>
        </template>
    </Pages>
</template>