<template>
  <div>

    <div class="flex gap-[4px] items-center c-violet-600 w-full">

      <span id="busuanzi_container_site_pv">本站总访问量
        <span id="busuanzi_value_site_pv" class="font-bold"></span>次
      </span>

      本站访客数 <span id="busuanzi_value_site_uv" class="font-bold" />人次

      <span>Post {{ posts }}</span>
    </div>
  </div>
</template>

<script setup>
import { data as posts } from "../utils/post.data.js"
console.log(posts)
console.log("hi")
</script>