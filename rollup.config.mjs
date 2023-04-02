import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import terser from "@rollup/plugin-terser";
import typescript from '@rollup/plugin-typescript';
import { visualizer } from 'rollup-plugin-visualizer';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = ['.js', '.jsx', '.ts', '.tsx' ];

export default  {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: 'src',
    globals: {
      react: 'react',
      'react-dom': 'react-dom',
    },
  },
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    typescript(),
    babel({
      babelHelpers: 'bundled',
      include: [
        'src/**/*.ts',
        'src/**/*.tsx'
      ],
      extensions,
      exclude: './node_modules/**'
    }),
    terser(),
    visualizer({
      sourcemap: true,
      filename: "bundle-analysis.html",
      open: true,
    }),
  ],
  external: ['react', 'react-dom'],
}
