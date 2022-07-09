const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const EslintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const baseConfig = {
    entry: path.resolve(__dirname, "./src/index"),
    mode: "development",
    module: {
        rules: [{
                test: /\.(s*)css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.ts$/i,
                use: "ts-loader",
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: "asset/inline",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "./dist"),
        assetModuleFilename: (pathData) => {
            const filepath = path
                .dirname(pathData.filename)
                .split("/")
                .slice(1)
                .join("/");
            return `${filepath}/[name][ext]`;
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html",
        }),
        new CleanWebpackPlugin(),
        new EslintPlugin({ extensions: "ts" }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, "./src/assets/images"),
                to: path.resolve(__dirname, "./dist/assets/images"),
            }, ],
        }),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === "dev";
    const envConfig = isProductionMode ?
        require("./webpack.prod.config") :
        require("./webpack.dev.config");

    return merge(baseConfig, envConfig);
};