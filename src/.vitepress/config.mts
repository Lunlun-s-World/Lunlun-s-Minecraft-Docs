import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lunlun's Minecraft Docs",
  description: "伺服器詳細說明文檔",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '官方網站', link: 'https://www.lunworld.eu.org' },
      { text: '文檔首頁', link: '/' },
    ],

    sidebar: [
      {
        text: '開始吧？',
        items: [
          { text: '🎉 新玩家加入指南 🎮', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lunlun-s-World' },
      { icon: 'twitter', link: 'https://twitter.com/lunluns_world' },
      { icon: 'facebook', link: 'https://www.facebook.com/lunlunsworld' },
      { icon: 'instagram', link: 'https://www.instagram.com/_lunworld.ig_' }
    ]
  }
})
