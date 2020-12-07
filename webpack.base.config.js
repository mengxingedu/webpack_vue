const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	// 入口文件
    entry: './src/main.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.join(__dirname, '/dist')
    },
    module: {
    	// 配置相应的规则
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            }, {
                test: /\.vue$/,
                // use: 'vue-loader'
                loader: 'vue-loader'
            },
        ]
    },
    // 配置相应的插件
    plugins: [
        new HtmlWebpackPlugin({
            // template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ]
};

