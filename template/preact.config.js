const webpack = require('webpack');
const ESPBuildPlugin = require('./esp/build');

export default {
    webpack(config, env, helpers, options) {
        if (env.isProd) {
            config.devtool = false;
            config.plugins = [
                ...config.plugins,
                new ESPBuildPlugin(env)
            ];
        };
    }
};