module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '@mycooluilib/assets': './src/assets',
          '@mycooluilib/components': './src/components',
          '@mycooluilib/utils': './src/utils',
        },
      },
    ],
  ],
};
