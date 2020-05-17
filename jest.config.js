const { jest: jestConfig } = require('cod-scripts/config');

module.exports = Object.assign(jestConfig, {
  roots: ['./generators'],
});
