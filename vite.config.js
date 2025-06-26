 import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/KoadProject/", // 👈 Ye repo ka exact naam daala hai
  plugins: [tailwindcss(), react()],
})
