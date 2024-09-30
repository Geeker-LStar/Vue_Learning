<!-- blog card -->

<script setup>
import { ref, computed } from 'vue'

const mouseOn = ref(false)

const linkColor = computed(() => {
    return mouseOn.value ? 'text-yellow-300' : ''
})

function isMouseMove () {
    mouseOn.value = true
}

function isntMouseMove () {
    mouseOn.value = false
}
</script>

<template>
    <div class="bg-gray-100 mb-10 rounded-xl">
        <div class="text-3xl leading-10 pt-8 px-10 pb-5 underline underline-offset-4 font-bold" 
        :class="linkColor"
        @mouseover="isMouseMove" 
        @mouseleave="isntMouseMove">
            <slot name="blog_title">this is title</slot>
        </div>
        
        <div class="text-lg leading-10 px-10">
            <slot name="blog_author">this is author</slot>
        </div>
        <div class="text-lg leading-10 pb-10 px-10">
            <slot name="blog_date">this is date</slot>
        </div>
        <div class="text-lg leading-10 px-10 pb-5">
            <slot name="blog_abstract">this is abs</slot>
        </div>
        
    </div>
</template>