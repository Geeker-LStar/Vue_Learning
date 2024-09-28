<!-- practice 1: declarative rendering -->
<!-- <template>
    <div>
        <h1>{{ message }}</h1>
        <p>{{ counter.count }}</p>
    </div>
</template>

<script setup>
    import { reactive, ref } from 'vue'
    const counter  = reactive({ count: 0})
    const message = ref('H W!')
</script> -->

<!-- <script setup>
import { reactive, ref } from 'vue'

const counter = reactive( {count: 0})
const message = ref('hw!')
</script> -->

<template>
    <div>
        <h1>{{ message }}</h1>
        <p>Count is: {{ counter.count }}</p>
        <button @click="counter.count++">Increase Count</button>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const counter = reactive({ count: 0 })
const message = ref('hw!')
</script>
  

<!-- <script>
export default {
    name: '...',
    data () {
        return {
            message: '1111',
            counter: {
                count: 0,
            }
        }
    }
}
</script> -->

<!-- <template>
    <div>
        <h1>{{ message }}</h1>
        <p>Count is: {{ counter.count }}</p>
    </div>
  
</template> -->

<!-- my first vue programme -->
<!-- <template>
    <div>
        <title>{{ title }}</title>
        <h1>{{ about }}</h1>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title : 'this is about me',
            about : 'this is a page about myself.',
        }
    },
    mounted () {
        document.title = this.title
    }
}
</script> -->