module.exports = {
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "../.stylelintrc",
    "stylelint-config-prettier",
    "stylelint-config-styled-components"
  ]
};