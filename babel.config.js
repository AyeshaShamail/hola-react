module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }], //Adding preset because babel help our testing library to convert our jsx to html so that it can read properly
  ],
};
