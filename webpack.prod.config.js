/** @type {import('webpack').Configuration} */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode : "production",
    entry : path.join(__dirname,'src','index.ts'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
    rules: [
        {
            test : /\.scss$/,
            use : [
                // 'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader : "postcss-loader",
                  
                },
                'sass-loader']
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        
      ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    plugins : [
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname,'src','index.html'),
            minify : false
        }),
        new MiniCssExtractPlugin() 
    ],
    
  };
