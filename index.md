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
      link: /api-examples

features:
  - icon: ⚡️
    title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: 🖖
    title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: 🛠️
    title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<home></home>

<script lang="ts" setup>
import home from './.vitepress/theme/components/Home.vue'
</script>
