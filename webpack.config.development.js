const commonConfig = require("./webpack.config.common");
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");

module.exports = {
    ...commonConfig,
    mode: "development",
};
// noinspection JSUnresolvedReference
module.exports.plugins.push(
    new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
    }),
);
