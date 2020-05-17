const path = require('path');
const helpers = require('yeoman-test');

describe('generator-vercel-shortener:app', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../app')));

  it.todo('creates files');
});
