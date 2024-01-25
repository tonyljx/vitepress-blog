import DefaultTheme from "vitepress/theme";
import "./style/var.css";
import type { Theme } from "vitepress";
import { inBrowser, useRoute } from "vitepress";

import {
  registerAnalytics,
  siteIds,
  trackPageview,
} from "./plugins/baidutongji";

import "uno.css";
import busuanzi from "busuanzi.pure.js";
import LayoutIndex from "./components/Index.vue";
export default {
  extends: DefaultTheme,
  Layout: LayoutIndex,
  enhanceApp({ app, router, siteData }) {
    if (inBrowser) {
      registerAnalytics(siteIds);

      window.addEventListener("hashchange", () => {
        const { href: url } = window.location;
        trackPageview(siteIds, url);
      });

      router.onAfterRouteChanged = (to) => {
        trackPageview(siteIds, to);
        busuanzi.fetch();
      };
    }
  },
} satisfies Theme;

// import { h } from "vue";
// import MyComponent from "./components/MyComponent.vue";
// import Comment from "./components/Comment.vue";
// import Discussion from "./components/Discussion.vue";

//   // Layout: () => {
//   return h(DefaultTheme.Layout, null, {
//     // https://vitepress.dev/guide/extending-default-theme#layout-slots
//     "doc-before": () => h(MyComponent),
//     "doc-after": () => h(Comment),
//     // "doc-after": () => h(Discussion),
//   });
// },
