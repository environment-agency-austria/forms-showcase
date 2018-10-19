const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["prismjs", {
      "languages": ["javascript", "css", "markup", "bash", "jsx"],
      "plugins": ["line-numbers"],
      "theme": "tomorrow",
      "css": true
    }],
    config
  );
  return config;
}
