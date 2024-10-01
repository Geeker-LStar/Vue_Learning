<script setup>
import { computed, ref } from 'vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'

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
const isMenuOpen = ref(false) // 控制菜单的开关

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

// 在离开路由时关闭菜单
onBeforeRouteLeave(() => {
    console.log('正在离开导航栏');
    isMenuOpen.value = false
})
  
</script>

<template>
    <nav class="fixed w-screen px-8 lg:px-16 xl:px-36 2xl:px-48 top-0 transition-colors duration-100 flex items-center h-16 z-20 bg-white/30 backdrop-filter backdrop-blur-lg">
        <div class="ml-auto flex items-center">
            <button @click="toggleMenu" class="lg:hidden">
                <span class="material-icons font-bold px-4 md:px-8 text-lg">menu</span>
            </button>
        </div>

        <div v-if="isMenuOpen" class="absolute top-16 left-0 right-0 bg-white z-10 lg:hidden">
            <router-link
                v-for="(link, index) in links"
                :key="link.name"
                :to="link.path"
                :class="RouterLinkClass(index).value"
                class="block p-5 font-bold"
                @mouseover="isMouseMove(index)"
                @mouseleave="isntMouseMove"
            >
                {{ link.name }}
            </router-link>
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
            >
                {{ link.name }}
            </router-link>
        </div>
    </nav>
</template>
