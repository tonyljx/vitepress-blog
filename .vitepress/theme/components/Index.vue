<!-- Index.vue -->
<script setup>
import Theme from 'vitepress/theme'
import Comment from './Comment.vue'
import MyComponent from './MyComponent.vue';
const { Layout } = Theme
import { watch, ref } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const num = ref(0)

watch(
  () => route.path,
  () => {
    num.value++
  }
)

</script>
<template>
  <Layout>

    <template #doc-before>
      <MyComponent />
    </template>

    <template #doc-after class="mt-10">
      <Comment :key="num" />
    </template>
  </Layout>
</template>