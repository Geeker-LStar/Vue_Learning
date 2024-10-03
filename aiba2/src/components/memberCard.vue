<script setup>
    import {defineProps} from 'vue'
    const props = defineProps({
    avatar_link: {
        type: String,
        default: '/images/members/default.jpg',
    },
    avatar_class: {
        type: String,
        default: 'w-full h-full object-cover'
    }
})
</script>

<template>
    <div class="bg-gray-100 rounded-xl transition-shadow hover:shadow-xl">
        <div class="flex justify-center items-center pt-5">
            <div class="flex justify-center items-center w-36 h-36 rounded-full overflow-hidden bg-gray-200"> 
                <slot name="avatar" :avatar_link="avatar_link" :avatar_class="avatar_class">this is your avatar</slot>
            </div>
        </div>
        <div class="text-3xl pt-8 px-10 pb-5 font-bold">
            <slot name="name">this is your name</slot>
        </div>
        
        <div class="px-10 pb-5 text-lg leading-10">
            <slot name="intro">this is your self-intro</slot>
        </div>
    </div>
</template>