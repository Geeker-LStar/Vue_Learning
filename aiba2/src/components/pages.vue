<script setup>
import {ref, defineProps} from 'vue'

const props = defineProps({
    h1_class: {
        type: String,
        default: 'text-3xl font-bold font-display leading-10 my-5'
    },
    h2_class: {
        type: String,
        default: 'text-2xl font-bold font-display leading-10 my-3'
    },
    h3_class: {
        type: String,
        default: 'text-xl font-bold font-display leading-10 my-2'
    },
    p_class: {
        type: String,
        default: 'text-lg leading-10'
    }
})
const bg_img = ref('background-image: url(http://lstar.ltx1102.com/members.webp);')
const title_box_class = ref('w-screen pt-40 pb-48 px-8 lg:px-16 xl:px-36 2xl:px-48 flex items-center bg-cover bg-center bg-green-500 text-white')
// const footer_content = ref('Copyright 2024-2024 <span class=\'text-blue-500\'>Artificial Intelligence</span> club of Beijing Academy | Powerd by PASSION🔥 and LOVE❤.')
</script>

<template>
    <header>
        <!-- <slot name="title_box" :title_box_class="title_box_class" :title_box_style="bg_img"></slot> -->
        <div class="w-screen pt-40 pb-48 px-8 lg:px-16 xl:px-36 2xl:px-48 flex items-center bg-cover bg-center bg-green-500 text-white" :style="bg_img">
            <div class="text-7xl lg:text-8xl font-bold font-display">
                <slot name="title">This is title</slot>
            </div>
        </div>
    </header>
    <main class="leading-10">
        <div class="py-16 px-8 lg:px-16 xl:px-36 2xl:px-48">
            <div class="flex flex-col lg:flex-row relative">
                <div class="w-full lg:w-4/5 lg:pr-8" id="base">
                    <div>
                        <slot name="content" :h1_class="h1_class" :h2_class="h2_class" :h3_class="h3_class" :p_class="p_class">
                            <h1 :class="h1_class">this is h1</h1>
                            <h2 :class="h2_class">this is h2</h2>
                            <h3 :class="h3_class">this is h3</h3>
                            <p :class="p_class">this is p</p>
                        </slot>
                    </div>
                </div>
                <div class="w-1/5 hidden lg:block" id="section">
                    <div>
                        <slot name="side_bar" :h1_class="h1_class" :h2_class="h2_class" :h3_class="h3_class" :p_class="p_class">
                            <h1 :class="h1_class">this is h1</h1>
                            <h2 :class="h2_class">this is h2</h2>
                            <h3 :class="h3_class">this is h3</h3>
                            <p :class="p_class">this is p</p>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <div class="w-full bg-gray-50 p-12" id="footer">
            <p :class="p_class">
                Copyright 2024-2024 <span class='text-blue-500'>Artificial Intelligence</span> club of <span class="text-red-500">Beijing Academy</span> | Powerd by PASSION🔥 and LOVE❤.
            </p>
        </div>
    </footer>
    
</template>