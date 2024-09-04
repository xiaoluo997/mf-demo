
const {ModuleFederationPlugin} = require('@module-federation/enhanced/webpack')
module.exports = {
  devServer: {
    port: 2001,
  },
  output: {
    // 使用 manifest 必须要配置 publicPath
    publicPath: 'http://localhost:2001/', //or 'auto'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'rspack_provider',
      filename: 'remoteEntry.js',
      
      remotes: {
        federation_provider:
          'federation_provider@http://localhost:3000/mf-manifest.json',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};