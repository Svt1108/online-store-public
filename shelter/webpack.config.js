const path = require("path");
const webpack = require("webpack");
const sassloader = require("sass-loader");
const htmlloader = require("html-webpack-plugin");
const miniCss = require("mini-css-extract-plugin");

// module.exports = {
//   mode: "development",
//   entry: "./src/index.js",
//   output: {
//     filename: "script.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(s*)css$/,
//         use: [miniCss.loader, "css-loader", "sass-loader"],
//       },
//     ],
//   },
//   plugins: [
//     new miniCss({
//       filename: "style.css",
//     }),
//   ],
// };

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
    pets: "./src/index_pet.js",
  },
  output: {
    filename: "[name]/script.js",
    path: __dirname + "/final",
    /*   assetModuleFilename: "fonts/[hash][ext][query]",   для Webpack 5 вместо file-loader */
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [miniCss.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]",
        },
        type: "javascript/auto" /* отключение встроенного assetModule */,
      },
    ],
  },
  plugins: [
    new miniCss({
      filename: "[name]/style.css",
    }),
  ],
};
