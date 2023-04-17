import resolve from '@rollup/plugin-node-resolve';
import terser from "@rollup/plugin-terser";
import typescript from '@rollup/plugin-typescript';
import { visualizer } from 'rollup-plugin-visualizer';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = ['.js', '.jsx', '.ts', '.tsx' ];
const globals = {
  react: 'react',
  'react-dom': 'react-dom',
};

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: false,
      entryFileNames: '[name].js',
      globals: globals,
    },
    {
      dir: 'dist',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: false,
      entryFileNames: '[name].cjs',
      globals: globals,
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
