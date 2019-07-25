module.exports = {
  "processors": ["stylelint-processor-styled-components"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-config-prettier",
    "stylelint-config-styled-components"
  ],
  rules: {
    "order/properties-alphabetical-order": null,
    "declaration-block-no-duplicate-properties": true
  }
};