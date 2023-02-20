import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import postcss from 'rollup-plugin-postcss';
import { visualizer } from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react() as PluginOption,
    dts({ insertTypesEntry: true }) as PluginOption
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'umd'],
      fileName: (format) => `lift-companion-ui.${format}.js`
    },
    rollupOptions: {
      plugins: [
        postcss(),
        terser(),
        visualizer({
          filename: 'bundle-analysis.html',
          open: true,
        }),
      ],
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
        // exports: 'named', // exporting more than one thing, so need this
      }
    }
  }
})
