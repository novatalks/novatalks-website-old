// https://v4.webpack.js.org/concepts/plugins/
// From https://github.com/taehwanno/warnings-to-errors-webpack-plugin/blob/master/index.js

class WarningsToErrorsPlugin {
  apply(compiler) {
    compiler.hooks.shouldEmit.tap("WarningsToErrorsPlugin", compilation => {
      if (compilation.warnings.length > 0) {
        compilation.errors = compilation.errors.concat(compilation.warnings);
        compilation.warnings = [];
      }

      for (const child of compilation.children) {
        if (child.warnings.length > 0) {
          child.errors = child.errors.concat(child.warnings);
          child.warnings = [];
        }
      }
    });
  }
}

module.exports = WarningsToErrorsPlugin;
