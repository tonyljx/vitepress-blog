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
      link: /posts/gpt/gpt-plus
    - theme: alt
      text: GPT使用指南
      link: /posts/gpt/glossary-intro
features:
  - icon: 💰
    title: GPT
    details: 了解GPT的原理, 使用GPT4, 以及开通GPT会员/SORA
    link: /posts/gpt/
    linkText: 了解GPT
  - icon: 🖖
    title: 账号注册分享
    details: 常见账号注册方法分享 GPT4/onlyfans/sora
    link: /posts/blog/onlyfans
    linkText: 账号注册方法
  - icon: 🛠️
    title: 技术/副业
    details: 记录工作中遇到的技术问题以及技术变现副业
---

<home></home>

<script lang="ts" setup>
import home from './.vitepress/theme/components/Home.vue'
</script>
