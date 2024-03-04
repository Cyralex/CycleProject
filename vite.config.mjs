import vue from '@vitejs/plugin-vue';
import jsconfigPaths from 'vite-jsconfig-paths';
import { defineConfig } from "vite";


export default{
    plugins: [vue(), jsconfigPaths()],    
   
}