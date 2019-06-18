/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const {
  override,
  addBabelPlugins,
} = require('customize-cra');

module.exports = override(
  ...addBabelPlugins(
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ),
);
