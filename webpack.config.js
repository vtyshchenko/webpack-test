import path from "path";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main-webpack.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: "babel-loader",
      },
      {
        test: /\.handlebars$/i,
        loader: "handlebars-loader",
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
    pluggins: [
      new HtmlWebpackPlugin({ template: "src/omdex.html" }),
      new MiniCssExtractPlugin(),
      new CleanWebpackPlugin(),
    ],
  },
  devServer: {
    client: {
      logging: "error",
    },
    port: 1234,
    allowedHosts: "all",
    open: true,
  },
};
