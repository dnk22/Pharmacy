module.exports = {
  presets: ['react-native','@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      [
        'module-resolver',
        {
          alias: {
            'assets/*': ['src/assets/*'],
            'components/*': ['src/components/*'],
            'features/*': ['src/features/*'],
            'navigation/*': ['src/navigation/*'],
            'resources/theme': ['src/resources/theme'],
            'services/*': ['src/services/*'],
            'share/*': ['src/share/*'],
            'store/*': ['src/store/*'],
            'utils/*': ['src/utils/*'],
            'database/*': ['src/database/*'],
          },
        },
      ],
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '/*': ['./'],
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }, 'unique-name-p'],
    '@babel/plugin-proposal-export-namespace-from',
    ['react-native-web', { commonjs: true }],
    'react-native-reanimated/plugin',
  ],
};
