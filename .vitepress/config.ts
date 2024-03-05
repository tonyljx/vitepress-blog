import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";
import taskLists from "markdown-it-task-checkbox";

// const mode = process.argv[process.argv.length - 1];

// console.log(mode);

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GPT航海",
  description: "ChatGPT指南、AI编程、副业、赚钱案例分析",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "开通Plus会员", link: "/posts/gpt/gpt-plus" },
      {
        text: "统计",
        link: "https://umami.runningpig.top/share/CouKtS2S83QRdKdO/gpthanghai",
      },
    ],

    sidebar: [
      // {
      //   text: "博客配置",
      //   items: [
      //     { text: "Markdown Examples", link: "/posts/blog/markdown-examples" },
      //     { text: "Runtime API Examples", link: "/posts/blog/api-examples" },
      //   ],
      // },
      {
        text: "会员服务升级",
        items: [
          { text: "Chatgpt升级GPT Plus🚀", link: "/posts/gpt/gpt-plus" },
          { text: "Onlyfans开通指南🤣", link: "/posts/blog/onlyfans" },
        ],
      },
      {
        text: "GPT使用指南",
        items: [
          { text: "如何使用Sora🌊", link: "/posts/gpt/sora" },
          { text: "深度对比GPT4vs3.5 附常用场景", link: "/posts/gpt/gpt4-3.5" },
          { text: "GPT使用-提示工程最佳实践🤖", link: "/posts/gpt/gpt-intro" },
          { text: "AI副业赚钱案例💰", link: "/posts/gpt/gpt-money" },
          { text: "GPTs教程资源📚", link: "/posts/gpt/gpts" },
          { text: "Prompt资源📚", link: "/posts/gpt/prompt" },
          { text: "Claude3✨", link: "/posts/gpt/claude3" },
          { text: "Claude3-视觉 API 评估🧐", link: "/posts/gpt/claude3-use" },
        ],
      },
      {
        text: "Sora",
        items: [
          { text: "如何使用Sora🌊", link: "/posts/gpt/sora" },
          {
            text: "Datawhale学习笔记-C1",
            link: "/posts/gpt/sora-datawhale-c1",
          },
        ],
      },
      {
        text: "小产品",
        items: [{ text: "面试高频算法网站", link: "/posts/blog/leetcode" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/tonyljx" },
      // { icon: "x", link: "https://twitter.com/abc30037274" },
      // {
      //   icon: {
      //     svg: '<svg t="1706005797851" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1681" width="200" height="200"><path d="M660.39 123.63v463.59S645.04 726.4 558.98 771.43c-53.12 31.21-128.85 67.54-228.63 70.61l58.33 58.33s175-15.35 254.82-87.5 82.89-159.9 82.89-194.31V172.75l-66-49.12z" fill="#62B2E4" p-id="1682"></path><path d="M660.39 123.63v463.58s-15.36 139.17-101.41 184.21c-53.12 31.22-128.85 67.54-228.62 70.62L297.6 702.85s70.62-13.31 117.71-28.64c47.07-15.36 72-95.19 72-95.19V123.63h173.08z" fill="#F3DB2B" p-id="1683"></path></svg>',
      //   },
      //   link: "https://web.okjike.com/u/0BB676D8-9E13-4908-A80D-1CE0B4049C51",
      // },
    ],

    search: {
      provider: "local",
    },

    outline: {
      level: "deep",
      label: "目录",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present RunningPig",
    },
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // md.use(task, { label: true, marker: false });
      md.use(taskLists, {
        // https://www.npmjs.com/package/markdown-it-task-checkbox
        disabled: true,
        divWrap: false,
        divClass: "checkbox",
        idPrefix: "cbx_",
        ulClass: "task-list",
        liClass: "task-list-item",
      });
    },
  },
  lastUpdated: true,
  vite: {
    plugins: [UnoCSS()],
  },
  sitemap: {
    hostname: "https://gpthanghai.com/",
  },
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    // analytics
    [
      "script",
      {
        async: "",
        defer: "",
        "data-website-id": "2189df23-1170-4efd-8b63-b4d88049ce96",
        src: "https://umami.runningpig.top/script.js",
      },
    ],
    // ga
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-Z3GNE7VQRL",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Z3GNE7VQRL');`,
    ],
    [
      "script",
      {},
      ` (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "kshjatzcss");`,
    ],
  ],
});
