const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["prismjs", {
      "css": true,
      "languages": ["javascript", "css", "markup", "bash", "jsx"],
      "plugins": ["line-numbers"],
      "theme": "tomorrow"
    }],
    config
  );
  return config;
}
