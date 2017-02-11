var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonConfig = require("./webpack.common.js");
var helpers = require("./helpers");

module.exports = webpackMerge(commonConfig, {
    devtool: "source-map",

    output: {
        path: helpers.root("wwwroot"),
        filename: "js/[name].js",
        chunkFilename: "js/[id].chunk.js",
        devtoolModuleFilenameTemplate: '../[resource-path]'
    },

    plugins: [
        new ExtractTextPlugin("css/[name].css")
    ]
});
