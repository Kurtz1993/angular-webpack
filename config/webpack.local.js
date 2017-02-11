var webpackMerge = require("webpack-merge");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonConfig = require("./webpack.common.js");
var helpers = require("./helpers");

module.exports = webpackMerge(commonConfig, {
    devtool: "inline-source-map",

    output: {
        path: helpers.root("wwwroot", "js"),
        publicPath: "http://localhost:8000/",
        filename: "[name].[hash].js",
        chunkFilename: "[id].[hash].chunk.js",
        devtoolModuleFilenameTemplate: '../[resource-path]'
    },

    plugins: [
        new ExtractTextPlugin("[name].css")
    ],

    devServer: {
        historyApiFallback: true,
        stats: "minimal"
    }
});
