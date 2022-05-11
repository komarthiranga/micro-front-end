const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const ModuleWebpackPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJSON = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleWebpackPlugin({
          name: 'container',
          remotes: {
              'marketing': 'marketing@http://localhost:8081/remoteEntry.js'
          },
          shared: packageJSON.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig);