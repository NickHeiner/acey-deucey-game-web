"use strict";

module.exports = {
    entry: "./app/index.js",
    output: {
        path: __dirname,
        filename: "built.js"
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!acey-deucey-game-engine)/,
                loader: "babel",
            }
        ],
        noParse: [/angular.js$/, /foundation-apps\/dist/, /lodash/]
    }
};
