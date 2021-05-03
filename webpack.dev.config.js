/** @type {import('webpack').Configuration} */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path")


module.exports = {
    mode : "development",
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
                 'style-loader',

                'css-loader',
                
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
 
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot : true
      },
  };
