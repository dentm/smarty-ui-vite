/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuejsx from '@vitejs/plugin-vue-jsx'
import unocss from './src/config/unocss'


export default defineConfig({
    plugins: [
        vue(),
        vuejsx(),
        unocss()
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js'
        }
    },
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
        cssCodeSplit: true,
        lib: {
            entry: './src/entry.ts',
            name: 'SmartUI',
            fileName: (format) => `smart-ui.${format}.js`,
        }
    },
    test: {
        globals: true,
        environment: 'happy-dom',
        // 支持tsx组件，很关键
        transformMode: {
            web: [/.[tj]sx$/]
        }
    }
})




