<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

// restore links
const links = [
    { path: '/', name: 'Homepage', icon: 'fa fa-home'},
    { path: '/about', name: 'About', icon: 'fa fa-quote-left' },
    { path: '/blogs', name: 'Blogs', icon: 'fa fa-pencil-square-o' },
    { path: '/cloud', name: 'Cloud', icon: 'fa fa-cloud-download' },
    { path: '/members', name: 'Members', icon: 'fa fa-group' },
    { path: '/projects', name: 'Projects', icon: 'fa fa-globe' },
];

const mouseIndex = ref(-1)
const isMenuOpen = ref(false) 

const RouterLinkClass = (index) => computed(() => {
    return index === mouseIndex.value ? 'mx-5 text-yellow-300' : 'mx-5'
})

function isMouseMove (index) {
    mouseIndex.value = index
}

function isntMouseMove () {
    mouseIndex.value = -1
}

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}

function handleLinkClick() {
    isMenuOpen.value = false;
}

</script>

<template>
    <nav class="fixed w-screen px-8 lg:px-16 xl:px-36 2xl:px-48 top-0 transition-colors duration-100 flex items-center h-16 z-20 backdrop-filter backdrop-blur-lg">
        <div class="ml-auto flex items-center">
            <button @click="toggleMenu" class="lg:hidden">
                <span class="font-bold px-4 md:px-8 text-lg">
                    <i class="fa fa-paper-plane-o"></i>
                    menu
                </span>
            </button>
        </div>

        <div v-if="isMenuOpen" class="absolute top-16 left-0 right-0 z-10 lg:hidden bg-red-50">
            <center>
                <router-link
                    v-for="(link, index) in links"
                    :key="link.name"
                    :to="link.path"
                    :class="RouterLinkClass(index).value"
                    class="block p-5 font-bold"
                    @mouseover="isMouseMove(index)"
                    @mouseleave="isntMouseMove"
                    @click="handleLinkClick" 
                >   
                    <i :class="link.icon"></i>
                    {{ link.name }}
                </router-link>
            </center>
        </div>

        <div class="hidden lg:flex ml-auto">
            <router-link
                v-for="(link, index) in links"
                :key="link.name"
                :to="link.path"
                :class="RouterLinkClass(index).value"
                class="font-bold"
                @mouseover="isMouseMove(index)"
                @mouseleave="isntMouseMove"
                @click="handleLinkClick"
            >
                <i :class="link.icon"></i>
                {{ link.name }}
            </router-link>
        </div>
    </nav>
</template>
