import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server :{
    port: 3000, // if you want to changer port number you can change it from here
  },
  plugins: [react()],
})
