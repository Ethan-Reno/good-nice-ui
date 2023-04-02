const sharedPresets = ['@babel/typescript'];
const shared = {
  ignore: [
    'src/**/*.stories.ts',
    'src/**/*.stories.tsx',
  ],
  presets: sharedPresets
}

module.exports = {
  env: {
    esmBundled: {
      ...shared,
      presets: [['@babel/env', {
        targets: "> 0.25%, not dead"
      }], ...sharedPresets],
    },
  }
}
