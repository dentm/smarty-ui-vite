import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuejsx from '@vitejs/plugin-vue-jsx'

const rollupOptions = {

}


export default defineConfig({
    plugins: [
        vue(),
        vuejsx()
    ],
    build: {
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        },
        minify: false,
        lib: {
            entry: './src/entry.ts',
            name: 'SmartUI',
            fileName: (format) => `smart-ui.${format}.js`
        }
    }
})




