const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-definitions/**/*.steps.js
`
module.exports = {
  default: `${common} features/**/*.feature`,
}