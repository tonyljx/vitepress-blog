<template>
  <!-- panel -->
  <data-panel></data-panel>

  <div class="home">
    <div class="mx-auto container max-w-[1152px] min-h-[32px]  w-full rounded-[8px] p-[6px] mt-6">
      <!-- bg-[var(--vp-c-bg-soft)] -->
      <h2 class="mb-3 text-xl font-semibold">最近文章</h2>
      <div class="flex flex-col gap-lg ">
        <!-- grid grid-cols-3 -->
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

      <h2 class="mb-3 text-xl font-semibold mt-6">友链🔗</h2>

      <div class="flex flex-cal gap-lg">
        <a href="http://chatgptzh.com.cn/">ChatGPT 中文导航网 - 分享 ChatGPT 咨询和最新教程</a>
      </div>


      <div class="flex flex-cal gap-lg">
        <a href="https://aliyuntm.com/">ChatGPT中文学习网站</a>
      </div>



    </div>
  </div>
</template>

<script setup lang="ts">
import { useData, useRouter } from 'vitepress'
import dataPanel from "./DataPanel.vue"

const { theme } = useData();

const route = useRouter();


// const sidebarItems = theme.value.sidebar.map(item => item.items).flat();


const sidebarItems = theme.value.sidebar.flatMap(section => section.items.map(item => ({
  categoryText: section.text,
  text: item.text,
  link: item.link
})));

console.log(sidebarItems);


function onClick(url: string) {
  route.go(url)
}

</script>

<style scoped>
.home {
  padding: 0 24px;
  margin-top: 24px;
}

@media (min-width: 640px) {
  .home {
    padding: 0 48px;
    margin-top: 32px;
  }
}

@media (min-width: 960px) {
  .home {
    padding: 0 64px;
    margin-top: 48px;
  }
}
</style>