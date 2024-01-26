// posts.data.js
import { createContentLoader } from "vitepress";

// https://github.com/vuejs/blog/blob/main/.vitepress/theme/posts.data.ts

// interface Post {
//   title: string;
//   url: string;
//   date: {
//     time: number;
//     string: string;
//   };
//   excerpt: string | undefined;
// }

// declare const data: Post[];
// export { data }; 

const pages = createContentLoader("/posts/**/*.md", {
  includeSrc: false, // include raw markdown source?
  render: false, // include rendered full page HTML?
  excerpt: false, // include excerpt?
  transform(rawData) {
    // map, sort, or filter the raw data as you wish.
    // the final result is what will be shipped to the client.
    return rawData.map(({ url, frontmatter, excerpt }) => ({
      title: frontmatter.title,
      url,
      excerpt,
      date: formatDate(frontmatter.date)
    }))
    // .sort((a, b) => {
    //   return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
    // });
  },
});

function formatDate(raw) {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}

export default pages;
