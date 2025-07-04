import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import favicons from 'astro-favicons';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: "https://dabble.fyi/",
  integrations: [
    tailwind(), 
    mdx(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    favicons({
      masterPicture: "./public/favicon.svg",
      emitAssets: true,
      appName: "Dabble Product Company",
      appShortName: "Dabble",
      appDescription: "Dabble is a product studio building experiences that inspire, empower, and amplify creative expression.",
      // dir:"auto",
      lang: "en-US",
      // display: "standalone",
      // orientation: "any",
      // start_url: "/?homescreen=1",
      // background: "#fff",
      // theme_color: "#fff",

      faviconsDarkMode: false, // default `true`, Make favicon compatible with light and dark modes
      
      // appleStatusBarStyle: "black-translucent",
    }),
  ],
  output: 'server',
  adapter: cloudflare(),
});