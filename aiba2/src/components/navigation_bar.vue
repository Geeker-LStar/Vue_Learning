<script setup>
import { computed, ref } from 'vue'

// restore links
const links = [
    { path: '/', name: 'Homepage' },
    { path: '/about', name: 'About' },
    { path: '/blogs', name: 'Blogs' },
    { path: '/cloud', name: 'Cloud' },
    { path: '/members', name: 'Members' },
    { path: '/projects', name: 'Projects' },
];

const mouseIndex = ref(-1)

const RouterLinkClass = (index) => computed(() => {
    return index === mouseIndex.value ? 'mx-5 text-yellow-300' : 'mx-5'
})

function isMouseMove (index) {
    mouseIndex.value = index
}

function isntMouseMove () {
    mouseIndex.value = -1
}

</script>

<template>
    <nav class="fixed w-screen px-8 lg:px-16 xl:px-36 2xl:px-48 top-0 transition-colors duration-100 flex items-center h-16 z-20 
    bg-white/30 backdrop-filter backdrop-blur-lg" style="transition-delay: 0s">
        <div>

        </div>
        <div class="ml-auto">
            <router-link
                v-for="(link, index) in links"
                :key="link.name"
                :to="link.path"
                :class="RouterLinkClass(index).value"
                class="font-bold"
                @mouseover="isMouseMove(index)"
                @mouseleave="isntMouseMove"
            >
                {{ link.name }}
            </router-link>
        </div>
        
    </nav>
</template>

<style>
</style>