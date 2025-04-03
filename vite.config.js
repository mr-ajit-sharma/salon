import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  // server:{
  //   proxy:{
  //     '/api':{
  //       target:process.env.VITE_SERVER_URL,
  //       changeOrigin:true,
  //       secure:true,
  //       rewrite:(path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // }
  server:{
    cors:process.env.VITE_SERVER_URL
  }
})
