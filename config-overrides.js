module.exports = function override(config, env) {
  config = {
    ...config,
    node: { fs: "empty" },
    externals: [{ "./cptable": "var cptable" }, { "./jszip": "jszip" }],
  };
  return config;
};
