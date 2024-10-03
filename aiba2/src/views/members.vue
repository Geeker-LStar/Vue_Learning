<script setup>
import memberPage from '../components/memberPage.vue'
import memberCard from '../components/memberCard.vue'
import { supportersList, membersList } from '../components/memberInfos.vue'
import {ref} from 'vue'

const title = ref('AIBA - Members')
document.title = title.value
</script>

<template>
    <memberPage>
        <template v-slot:title>Members</template>
        <template v-slot:content="{ h1_class, h2_class, h3_class, p_class }">
            <center>
                <h1 :class="h1_class">Here are members of AIBA!🎇</h1>
                <p :class="p_class">Orderd by Grade and Class, from Grade 9 to Grade 11, Class 1 to Class 4.</p>
                <p :class="p_class" class="text-red-500">Note: There were also some members whose information was not filled in.</p>
                <h2 :class="h2_class">-- Principle Members -- </h2>
                <p :class="p_class">Below are the Principle Members of AIBA.</p>
            
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 my-10 md:w-3/4 lg:w-full xl:w-full 2xl:w-full">
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
                            <p>@{{ member.class }}</p>
                            <p>{{ member.intro }}</p>
                        </template>
                    </memberCard>
                </div>

                <h2 :class="h2_class">-- Supporters -- </h2>
                <p :class="p_class">Below are the Supporters of AIBA.</p>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 my-10">
                    <memberCard v-for="supporter in supportersList"
                        :id="supporter.id"
                        :key="supporter.id">
                        <template v-slot:avatar="{ avatar_link, avatar_class }">
                            <img :src=" supporter.avatar || avatar_link" :class="avatar_class">
                        </template>
                        <template v-slot:name>
                            <p>{{ supporter.name }}</p>
                        </template>
                        <template v-slot:intro>
                            <p>@{{ supporter.class }}</p>
                            <p>{{ supporter.intro }}</p>
                        </template>
                    </memberCard>
                </div>
            </center>
        </template>
    </memberPage>

</template>