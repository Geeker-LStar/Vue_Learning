<!-- A TodoList -->

<script setup>
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

const title = ref('this is todolist')
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
</style>