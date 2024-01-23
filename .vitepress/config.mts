import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "GPT",
        items: [
          { text: "BeWildCard 升级 GPT4", link: "/gpt/gpt-plus" },
          { text: "GPT使用指南", link: "/gpt/gpt-intro" },
          { text: "AI副业赚钱案例", link: "/gpt/gpt-money" },
          { text: "GPTs教程资源", link: "/gpt/gpts" },
        ],
        docFooterText: "test",
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
      { icon: "x", link: "https://twitter.com/abc30037274" },
      {
        icon: {
          svg: '<svg t="1706005797851" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1681" width="200" height="200"><path d="M660.39 123.63v463.59S645.04 726.4 558.98 771.43c-53.12 31.21-128.85 67.54-228.63 70.61l58.33 58.33s175-15.35 254.82-87.5 82.89-159.9 82.89-194.31V172.75l-66-49.12z" fill="#62B2E4" p-id="1682"></path><path d="M660.39 123.63v463.58s-15.36 139.17-101.41 184.21c-53.12 31.22-128.85 67.54-228.62 70.62L297.6 702.85s70.62-13.31 117.71-28.64c47.07-15.36 72-95.19 72-95.19V123.63h173.08z" fill="#F3DB2B" p-id="1683"></path></svg>',
        },
        link: "https://web.okjike.com/u/0BB676D8-9E13-4908-A80D-1CE0B4049C51",
      },
    ],

    search: {
      provider: "local",
    },

    outline: {
      level: "deep",
      label: "目录",
    },
  },
  markdown: {
    lineNumbers: true,
  },
  lastUpdated: true,
});
