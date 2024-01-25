<!-- Comment.vue -->
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { inBrowser } from 'vitepress'
import Gitalk from 'gitalk'
import "gitalk/dist/gitalk.css";
const commentRef = ref<HTMLElement | null>(null)

const init = () => {
  if (inBrowser) {
    const wrap = document.createElement('div')
    wrap.setAttribute('id', 'gitalk-page-container')
    commentRef.value?.appendChild(wrap) // 把组件加入到想加载的地方 // querySelector的节点可自己根据自己想加载的地方设置
    const gitTalk = new Gitalk({
      id: location.pathname, // 可选。默认为 location.href
      owner: 'tonyljx', // GitHub repository 所有者
      repo: 'gpthanghai', // GitHub repo
      clientID: '9272dd53e49333777311', // clientID
      clientSecret: '1346337aa05c7fee9ae537c216dacc2497eb3175', // clientSecret
      admin: ['tonyljx'], // GitHub repo 所有者
      labels: ['GitTalk'], // GitHub issue 标签
      // proxy:
      //   'https://gpthanghai.com/github_access_token',
      createIssueManually: true //如果当前页面没有相应的 issue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
    })
    gitTalk.render('gitalk-page-container')
  }
}

onMounted(() => {
  init()
})
</script>
<template>
  <div id="gitalk-page-container" class="commentRef"></div>
</template>