---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "GPT航海"
  text: "AI相关知识分享"
  tagline: Way to GPT
  image:
    src: /chatgpt.png
    alt: chatgpt
  actions:
    - theme: brand
      text: chatgpt
      link: /gpt/gpt-plus
    - theme: alt
      text: 博客配置
      link: /blog/
features:
  - icon: ⚡️
    title: GPT
    details: 了解GPT的原理, 使用GPT, 以及开通会员
    link: /gpt/
    linkText: 了解GPT
  - icon: 🖖
    title: 博客搭建
    details: 搭建一个实用且好看的博客
    link: /blog/
    linkText: 博客搭建
  - icon: 🛠️
    title: 技术/副业
    details: 记录工作中遇到的技术问题以及技术变现副业
---

<home></home>

<script lang="ts" setup>
import home from './.vitepress/theme/components/Home.vue'
</script>
