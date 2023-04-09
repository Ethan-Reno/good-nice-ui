import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import terser from "@rollup/plugin-terser";
import typescript from '@rollup/plugin-typescript';
import { visualizer } from 'rollup-plugin-visualizer';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import typescript from 'rollup-plugin-typescript2';

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
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      globals: globals,
    },
    {
      dir: 'dist',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
      entryFileNames: '[name].cjs',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    typescript(),
    // babel({
    //   babelHelpers: 'bundled',
    //   include: [
    //     'src/**/*.ts',
    //     'src/**/*.tsx'
    //   ],
    //   extensions,
    //   exclude: './node_modules/**'
    // }),
    terser(),
    visualizer({
      sourcemap: true,
      filename: "bundle-analysis.html",
      open: true,
    }),
  ],
  external: ['react', 'react-dom'],
}
