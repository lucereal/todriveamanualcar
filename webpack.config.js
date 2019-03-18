const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

module.exports = {
    //entry: './docs/config.js',
    entry: glob.sync("../assets/**"),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs'),
        publicPath: "/docs/",
    },
   

    plugins:[

        new CopyWebpackPlugin([
            {from:path.resolve(__dirname,'assets'),
            to:path.resolve(__dirname,'docs','assets')}
        ]),
        new HtmlWebpackPlugin({
            hash:true,
            filename: './docs/index.html'
        })
   
        
    ]
}