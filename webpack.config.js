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
                test: /(\.jsx$|\.js$)/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel'],
                /*query:{
                    presets : ["es2015", 'react', "stage-0"]
                }*/
            }
        ]
    },
    /*externals: {
        react: 'React'
    },*/
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ],
    /*resolve: {
        extensions: ['', '.jsx', '.js']
    }*/
};

module.exports = webpackConfig;
