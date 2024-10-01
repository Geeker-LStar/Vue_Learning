<script setup>
import {ref} from 'vue'

const title = ref('AIBA - Homepage')
document.title = title.value
</script>

<template>
    <div>

  
      <main class="p-4">
        <div class="content">
          <p v-for="i in 100" :key="i">
            这是第 {{ i }} 段内容。首页还在开发，首页还在开发，首页还在开发，首页还在开发，首页还在开发，首页还在开发。</p>
        </div>
      </main>
  
      <footer class="bg-gray-200 p-4 text-center">
        <p>这是页脚</p>
      </footer>
    </div>
  </template>
  
<style>
.content {
  min-height: 150vh; /* 确保内容足够长 */
}
</style>
