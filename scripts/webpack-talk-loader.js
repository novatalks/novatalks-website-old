const loaderUtils = require("loader-utils");
const { processTalk } = require("./process-talk");

module.exports = function loader(content) {
  const callback = this.async();
  // const options = loaderUtils.getOptions(this) || {};

  processTalk(this.resourcePath, content)
    .then(({ data, html }) =>
      [
        `exports.data = ${JSON.stringify(data)};`,
        `exports.html = ${JSON.stringify(html)};`,
      ].join("\n")
    )
    .then(
      r => callback(null, r),
      e => callback(e)
    );
};
