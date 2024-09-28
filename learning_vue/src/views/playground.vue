<!-- practice 1: show declarative rendering -->
<!-- <script setup>
import { reactive, ref } from 'vue';

const title = ref('playground page')
const message = ref('hello world!');
const counter = reactive({ count: 0});

document.title = title.value
</script>

<template>
    <h1>{{ message }}</h1>
    <p>{{ counter.count }}</p>
</template> -->

<!-- practice 2: try attribute binding -->
<!-- <script setup>
import { ref } from 'vue';

const titleClass = ref('title')

const title = ref('this is playground')
document.title = title.value
</script>

<template>
    <h1>Make me red</h1>
    <h1 :class="titleClass">Make me red</h1>
</template>

<style>
.title {
    color: red
}
</style> -->

<!-- practice 3: event listening -->
<!-- <script setup>
import { ref } from "vue";

const count = ref(0)
function increment () {
    count.value++
}
</script>

<template>
    <br>
    <button @click="increment">Count is: {{ count }}</button>
</template> -->

<!-- practice 4: form binding -->
<!-- <script setup>
import { ref } from 'vue'

const text = ref('')

const title = ref('this is plgrd')
document.title = title.value
</script>

<template>
    <input v-model="text" placeholder="typing sth...">
    <p>{{ text }}</p>
</template> -->

<!-- practice 5: condition rendering -->
<!-- <script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
    awesome.value = !awesome.value
}

const title = ref('this is plgrd')
document.title = title.value
</script>

<template>
    <button @click="toggle">click me!</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>oh no...</h1>
</template> -->

<!-- practice 6: list rendering -->
<!-- <script setup>
import { ref } from 'vue'

let id = -1
const newTodo = ref('')
const todoList = ref([
    {id: id++, text: 'this is 1'},
    {id: id++, text: 'this is 2'},
    {id: id++, text: 'this is 3'},
])

function addList() {
    todoList.value.push({ id: id++, text: newTodo.value})
    newTodo.value = ''
}

function removeList(todo) {
    todoList.value = todoList.value.filter((t) => t !== todo)
}

const title = ref('this is plgrd')
document.title = title.value
</script>

<template>
    <form @submit.prevent="addList">
        <input v-model="newTodo" placeholder="add new todo">
        <button>add todo</button>
    </form>
    <ul>
        <li v-for="todo in todoList" :key="todo.id">
            {{ todo.text }}
            <button @click="removeList(todo)">X</button>
        </li>
    </ul>
</template> -->

<!-- practice 7: computation attribute -->
<!-- <script setup>
import { computed } from 'vue';
import { ref } from 'vue'

let id = -1
const newTodo = ref('')
const hideCompleted = ref(false)
const hidden_or_show = ref('hidden completed')

const todoList = ref([
    {id: id++, text: 'this is 1', done: true},
    {id: id++, text: 'this is 2', done: false},
    {id: id++, text: 'this is 3', done: true},
])

const filterTodos = computed(() => {
    if (hideCompleted.value) {
        return todoList.value.filter((t) => t.done !== true)
    } else {
        return todoList.value
    }
})

function addList() {
    todoList.value.push({ id: id++, text: newTodo.value })
    newTodo.value = ''
}

function removeList(todo) {
    todoList.value = todoList.value.filter((t) => t !== todo)
}

function hidden() {
    hideCompleted.value = !hideCompleted.value
    hidden_or_show.value = hideCompleted.value ? 'show all' : 'hidden completed'
}

const title = ref('this is plgrd')
document.title = title.value
</script>

<template>
    <form @submit.prevent="addList">
        <input v-model="newTodo" placeholder="add new todo">
        <button>add todo</button>
    </form>
    <ul>
        <li v-for="todo in filterTodos" :key="todo.id">
            <input type="checkbox" v-model="todo.done">
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
            <button @click="removeList(todo)">X</button>
        </li>
    </ul>
    <button @click="hidden">{{ hidden_or_show }}</button>
    <p>hidden state: {{ hideCompleted }}</p>
</template>

<style>
.done {
    text-decoration: line-through;
}
</style> -->

<!-- practice 8: Template reference -->
<!-- <script setup>
import {ref, onMounted} from 'vue'

const pElementRef = ref(null)
onMounted(() => {
    pElementRef.value.textContent = '11111'
})

const title = ref('this is plgrd')
document.title = title.value
</script>

<template>
    <p ref="pElementRef">Hello</p>
</template> -->

<!-- practice 9: detectaphone -->
<script setup>
import { ref, watch } from 'vue'

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

fetchData()

watch(todoId, fetchData)

const title = ref('this is plgrd')
document.title = title.value
</script>

<template>
    <p>{{ todoId }}</p>
    <button :disabled="!todoData" @click="todoId++">fetch data!</button>
    <p v-if="!todoData">Loading...</p>
    <p v-else>{{ todoData }}</p>
</template>