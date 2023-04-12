import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Hridoy 💖 Moon",
        short_name: "Hridoy 💖 Moon",
        categories: ["fundraising", "donations"],
        iarc_rating_id: "e84b072d-71b3-4d3e-86ae-31a8ce4e53b7",
        description:
          "Digital invitation card for the marriage ceremony of Hridoy 💖 Moon",
        screenshots: [
          {
            src: "/assets/screenshots/mobile.jpg",
            sizes: "360x812",
            // platform: "android",
            // form_factor: "narrow",
            label: "Lots of organizations to donate to Mobile",
          },
          {
            src: "/assets/screenshots/desktop.jpg",
            sizes: "1350x940",
            // platform: "windows",
            // form_factor: "wide",
            label: "Lots of organizations to donate to PC",
          },
        ],
        theme_color: "#ffffff",
        start_url: "/",
        icons: [
          {
            src: "/assets/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      registerType: "prompt",
      devOptions: {
        enabled: true,
      },
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ],
});
