const path = require('path');
const webpack = require('webpack');
const {
  override,
  babelInclude,
  addBabelPreset,
  addExternalBabelPlugin,
  addWebpackPlugin,
} = require('customize-cra');

module.exports = override(
  babelInclude([
    path.resolve('src'),
    path.resolve('node_modules/react-native-reanimated'),
    path.resolve('node_modules/react-native-ratings'),
    path.resolve('node_modules//react-native-gesture-handler'),
  ]),
  addBabelPreset('@babel/preset-react'),
  addExternalBabelPlugin('@babel/plugin-proposal-class-properties'),
  addWebpackPlugin(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: process.env.NODE_ENV !== 'production' || true,
    }),
  ),
);
