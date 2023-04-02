import { visualizer } from 'rollup-plugin-visualizer';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';

const packageName = 'LiftCompanionUI';
const outputFileName = 'lift-companion-ui';
const outputDir = `dist`;
const inputs = [`src/index.ts`];
const bundles = [
  {
    format: 'cjs',
    inputs,
    outputDir,
  },
  {
    format: 'esm',
    inputs,
    outputDir,
    preserveModules: true,
  },
];

const configs = bundles
  .map(({ inputs, outputDir, format, preserveModules }) =>
    inputs.map(input => ({
      input,
      plugins: [
        peerDepsExternal(),
        resolve(),
        visualizer({
          sourcemap: true,
          filename: `${format}-bundle-analysis.html`,
          open: false,
        }),
        dts(),
      ],
      external: ['react', 'react-dom'],
      output: {
        name: packageName,
        ...(preserveModules
          ? {
              dir: `${outputDir}/${format}`,
            }
          : {
              file: `${outputDir}/${format}/${outputFileName}.js`,
            }),
        format,
        sourcemap: true,
        preserveModules,
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    })),
  )
  .flat();

export default configs;
