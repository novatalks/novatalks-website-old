require("@babel/register")({
  // Support transforming typescript files
  plugins: ["@babel/plugin-transform-modules-commonjs"],
  presets: ["@babel/preset-typescript"],
  // Only ".ts" files
  extensions: [".ts"],
  // Only from "scripts" folder
  only: [/scripts/],
  // Don't look for configs
  configFile: false,
  babelrc: false,
  // Ignore any node_modules (not just those in current working directory)
  // https://github.com/babel/babel/blob/master/packages/babel-register/src/node.js#L146
  ignore: [/node_modules/],
});

const path = require("path");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextPlugin = require("./scripts/next-plugin");

// TODO https://github.com/zeit/next.js/blob/canary/examples/with-next-offline/next.config.js

const withPlugin = nextPlugin({
  dataFolder: path.resolve(__dirname, "data"),
});

module.exports = (phase, { defaultConfig }) => {
  const config = {
    trailingSlash: true,
  };

  return withPlugin(config);
};
