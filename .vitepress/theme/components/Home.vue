<template>
  <div class="container px-[64px] mx-auto">
    <h2 class="mt-10 mb-3 text-xl font-semibold">最近文章</h2>
    <div class="flex flex-col gap-lg ">
      <!-- grid grid-cols-3 -->
      <!-- <div class="" v-for="post in sidebarItems" :key="post.text">
        <div class="flex flex-col gap-sm ">
          <div class="flex gap-sm">

            <div>#{{ post.categoryText }}</div>

            <div class="hover:cursor-pointer hover:text-sky-500 transition-300 " @click="onClick(post.link)">{{ post.text
            }}
            </div>
          </div>

        </div>
      </div> -->
      <div class="space-y-4" v-for="post in sidebarItems" :key="post.text">
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">

            <div class="text-sm font-semibold text-gray-600">
              #{{ post.categoryText }}
            </div>

            <div class="flex-grow text-blue-500 hover:text-blue-700 cursor-pointer transition duration-300"
              @click="onClick(post.link)">
              {{ post.text }}
            </div>

          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import { useData, useRouter } from 'vitepress'

const { theme } = useData();

const route = useRouter();

// const sidebarItems = theme.value.sidebar.map(item => item.items).flat();

const sidebarItems = theme.value.sidebar.flatMap(section => section.items.map(item => ({
  categoryText: section.text,
  text: item.text,
  link: item.link
})));

function onClick(url: string) {
  route.go(url)
}

</script>

