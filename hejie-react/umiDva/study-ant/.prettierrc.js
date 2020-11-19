const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  // singleQuote: false,
  semi: false,
  trailingComma: 'none'
  // printWidth: 30,
  // overrides: [
  //   {
  //     files: ".prettierrc",
  //     options: {
  //       parser: "json"
  //     }
  //   }
  // ]
};
