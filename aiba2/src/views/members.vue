<script setup>
import memberPage from '../components/memberPage.vue'
import memberCard from '../components/memberCard.vue'
import { membersList } from '../components/memberInfos.vue'
import {ref} from 'vue'

const title = ref('AIBA - Members')
document.title = title.value
</script>

<template>
    <memberPage>
        <template v-slot:title>Members</template>
        <template v-slot:content="{ h1_class, h2_class, h3_class, p_class }">
            <center><h1 :class="h1_class">Here are members of AIBA!🎇</h1></center>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 my-10">
                <memberCard v-for="member in membersList"
                    :id="member.id"
                    :key="member.id">
                    <template v-slot:avatar="{ avatar_link, avatar_class }">
                        <img :src=" member.avatar || avatar_link" :class="avatar_class">
                    </template>
                    <template v-slot:name>
                        <p>{{ member.name }}</p>
                    </template>
                    <template v-slot:intro>
                        <p>{{ member.intro }}</p>
                    </template>
                </memberCard>
            </div>
        </template>
    </memberPage>

</template>