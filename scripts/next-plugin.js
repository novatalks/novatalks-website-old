const WebpackPlugin = require("./webpack-plugin");

const plugin = (pluginOptions = {}) => (nextConfig = {}) => {
  const { dataFolder } = pluginOptions;

  if (!dataFolder) {
    throw new Error(`Please supply "dataFolder" option`);
  }

  return {
    ...nextConfig,
    webpack(config, options) {
      config.resolve = config.resolve || {};
      config.resolve.alias = config.resolve.alias || {};
      config.resolve.alias.Data = dataFolder;

      config.module.rules.push({
        test: /\.md$/,
        use: [
          // options.defaultLoaders.babel
          {
            loader: "./scripts/webpack-talk-loader",
            options: pluginOptions,
          },
        ],
      });

      config.module.rules.push({
        test: /\.loader\.ts$/,
        use: [
          "val-loader",
          {
            loader: "babel-loader",
            options: {
              plugins: ["@babel/plugin-transform-modules-commonjs"],
              presets: ["@babel/preset-typescript"],
              // Don't look for configs
              configFile: false,
              babelrc: false,
            },
          },
        ],
      });

      config.plugins.push(new WebpackPlugin());

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
};

module.exports = plugin;
