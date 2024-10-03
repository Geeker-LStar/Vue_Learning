<script setup>
import Pages from '../components/pages.vue'
import {ref} from 'vue'


const title = ref('AIBA - About')
document.title = title.value
</script>

<template>
    <Pages :bg_img="11">
        <template v-slot:title>About</template>
        <!-- <template v-slot:title_box="{ title_box_class, title_box_style }"></template> -->
        <template v-slot:content="{ h1_class, h2_class, h3_class, p_class }">
            <p :class="p_class">Hi!!! Finally, you're here!!</p>
            <p :class="p_class">Welcome to AIBA, or <span class="text-blue-500">Artificial Intelligence</span> club of <span class="text-red-500">Beijing Academy</span>, for all students interested in mathematics or artificial intelligence!!</p>

            <h1 :class="h1_class" id="what_aiba_is">What AIBA Is</h1>
            <p :class="p_class">AIBA is a club focused on artificial intelligence and math, primarily through lectures and collaborative projects. AIBA has a well-structured curriculum and project planning, from beginner to advanced levels, covering theory and practice, and from proposing ideas to launching projects! Don't miss out!!</p>

            <h1 :class="h1_class" id="q_and_a">You Might Be Wondering:</h1>
            <h3 :class="h3_class">What if I don't have a computer science background? / What if I find it too difficult?</h3>
            <p :class="p_class">— No worries! AIBA is very friendly to students with no foundation, as the curriculum starts from the basics of programming languages and gradually progresses. We adjust dynamically and tackle any difficulties together!</p>
            <h3 :class="h3_class">What if I have some suggestions for the club's planning?</h3>
            <p :class="p_class">— AIBA encourages freedom and diversity (which is also part of the spirit of the Internet). All ideas are welcome! We can explore a diverse club model together!</p>
            <h3 :class="h3_class">I still have some questions / ideas...</h3>
            <p :class="p_class">— Contact Us!! AIBA welcomes ALL questions / ideas!!</p>
            <br>
            <center>
                <img id="poster" src="/images/pages/about/aiba_poster.jpg" alt="AIBA Poster Here!" class="w-3/4 lg:w-1/2"/>
            </center>
            <br>
            <h1 :class="h1_class" id="welcome">In the end, AIBA welcomes you!!</h1>
            <h1 :class="h1_class">Let's Explore Artificial Intelligence TOGETHER!!</h1>
        </template>
        <template v-slot:side_bar="{ h1_class, h2_class, h3_class, p_class }">
            <h3 :class="h3_class">On this page:</h3>
            <p :class="p_class">Introduction about AIBA!</p>
            <a :class="p_class" href="#what_aiba_is">- What AIBA Is</a><br>
            <a :class="p_class" href="#q_and_a">- You Might Be Wondering</a><br>
            <a :class="p_class" href="#poster">- Our Poster</a><br>
            <a :class="p_class" href="#welcome">- Welcome!</a>
        </template>
    </Pages>
</template>