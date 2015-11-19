"use strict";
var webpack = require('webpack');

let webpackConfig = {
    entry: "./example/client/app.js",
    output: {
        filename: "./example/server/assets/client/js/bundle.js"
    },
    module:{
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query:{
                    presets : ["es2015", 'react', "stage-0"]
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ]
};

module.exports = webpackConfig;