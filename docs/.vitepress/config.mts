import { defineConfig } from 'vitepress'
const qqSvg = `
<svg t="1703170914412" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5040" width="200" height="200"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="5041"></path></svg>
`;
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blophy Document",
  description: "Blophy Nova Document",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '判定', link: '/start/judge/judge' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '判定', link: '/start/judge/judge' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BlophyNova/Blophy' },
      { icon: { svg: qqSvg }, link: "https://qm.qq.com/q/20SZqX1d0s"}
    ]
  }
})
