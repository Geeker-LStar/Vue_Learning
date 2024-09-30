<!-- <script setup>
import {ref} from 'vue'

const title = ref('AIBA - Homepage')
document.title = title.value
</script>

<template>
    <h1 class="absolute inset-0 flex justify-center items-center">AIBA intro</h1>
</template> -->

<template>
    <div>

  
      <main class="p-4">
        <div class="content">
          <p v-for="i in 100" :key="i">
            这是第 {{ i }} 段内容。这是一些示例文本，用于展示长页面滚动的效果。
          </p>
        </div>
      </main>
  
      <footer class="bg-gray-200 p-4 text-center">
        <p>这是页脚</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  // 不需要特别的逻辑，只是展示长内容
  </script>
  
  <style>
  .content {
    min-height: 150vh; /* 确保内容足够长 */
  }
  </style>
  