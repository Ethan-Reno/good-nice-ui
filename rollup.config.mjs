import resolve from '@rollup/plugin-node-resolve';
import terser from "@rollup/plugin-terser";
import typescript from '@rollup/plugin-typescript';
import { visualizer } from 'rollup-plugin-visualizer';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = ['.js', '.jsx', '.ts', '.tsx' ];

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
      entryFileNames: '[name].js',
    },
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
      entryFileNames: '[name].cjs',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    typescript(),
    // babel here if wanted
    terser(),
    visualizer({
      sourcemap: true,
      filename: "bundle-analysis.html",
      open: true,
    }),
  ],
  external: ['react', 'react-dom'],
}
