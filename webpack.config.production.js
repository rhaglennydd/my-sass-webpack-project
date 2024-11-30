const commonConfig = require("./webpack.config.common");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// noinspection JSCheckFunctionSignatures
commonConfig.plugins.push(
    new WebpackAssetsManifest({
        entrypoints: true,
    }),
);
commonConfig.optimization = {
    minimizer: [new CssMinimizerPlugin()],
};

module.exports = {
    ...commonConfig,
    mode: "production",
};
