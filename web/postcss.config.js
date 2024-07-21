/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
module.exports.plugins = [
  require("postcss-import"),
  require("tailwindcss/nesting")(require("postcss-nesting")),
  require("autoprefixer"),
  require("tailwindcss"),
];
