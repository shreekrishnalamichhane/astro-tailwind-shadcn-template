import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
dotenv.config();

const PORT = Number(process.env.PORT) || 3000;

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  trailingSlash: 'never',
  output: 'static',
  compressHTML: false,
  server: { host: true, port: PORT }
});