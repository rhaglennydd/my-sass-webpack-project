const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const miniSVGDataURI = require("mini-svg-data-uri");

module.exports = {
    name: "app",
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.[contenthash].js",
        assetModuleFilename: "assets/[hash][ext]",
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [[require("autoprefixer")]],
                            },
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                quietDeps: true,
                                silenceDeprecations: [
                                    "import",
                                    "color-functions",
                                    "global-builtin",
                                    "mixed-decls",
                                ],
                                sourceMap: true,
                                sourceMapIncludeSources: true,
                            },
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                type: "asset/inline",
                generator: {
                    dataUrl(content) {
                        content = content.toString();
                        return miniSVGDataURI(content);
                    },
                },
                use: "svgo-loader",
            },
            {
                test: /\.(eot|gif|jpe?g|otf|png|ttf|web[mp]|woff2?)$/,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "app.[contenthash].css",
        }),
    ],
};
