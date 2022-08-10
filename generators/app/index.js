const fs = require('fs');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const kebabCase = require('lodash/kebabCase');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.argument('projectDirectory', {
      type: String,
      required: false,
      default: '.',
      desc: 'The directory you want to generate into.',
    });
  }

  initializing() {
    this.cwd = this.destinationRoot(this.options.projectDirectory);
    const name =
      this.options.projectDirectory === '.'
        ? this.determineAppname()
        : kebabCase(this.options.projectDirectory);

    this.props = { ...this.props, ...this.options, name };

    // otherwise initialize a git repo. need to make sure directory exists first
    if (fs.existsSync(this.destinationPath('.git'))) {
      return;
    }
    this.spawnCommandSync('mkdir', ['-p', this.cwd]);
    this.spawnCommandSync('git', ['init', '--quiet'], { cwd: this.cwd });
  }

  install() {
    this.log(`Installing ${chalk.cyan('vercel-redirects')}.`);
    this.log();
    this.npmInstall(['vercel-redirects'], { saveDev: true }, { cwd: this.cwd });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**'),
      this.cwd,
      this.props,
      {},
      { globOptions: { dot: true } },
    );
  }

  end() {
    // Delete yeoman auto-generated configs.
    // @see https://github.com/codfish/generator-codfish/blob/main/generators/BaseGenerator.js#L117
    this.spawnCommandSync('rm', [
      '-rf',
      `${this.contextRoot}/.yo-repository`,
      this.destinationPath('.yo-repository'),
    ]);

    // make initial commit
    this.spawnCommandSync('git', ['add', '.'], { cwd: this.cwd });
    this.spawnCommandSync('git', ['commit', '-am', 'feat: initial commit'], {
      cwd: this.cwd,
    });

    // add global shorten script
    this.spawnCommandSync('npm', ['link'], {
      cwd: this.cwd,
    });

    const dir = this.props.projectDirectory === '.' ? '' : this.props.projectDirectory;
    this.log();
    this.log(`Success! Your url shortener was generated in ${chalk.green(`./${dir}`)}.`);
    this.log();
    this.log("We've initialized a git repo and made an initial commit for you.");
    this.log();
    this.log(`Next Steps:`);
    this.log(`
    1. Create a repository for your url shortener. https://github.com/new
    2. Run ${chalk.cyan('git remote add origin <repo_url>')}.
    3. Run ${chalk.cyan('git push origin main')}.
    4. Run ${chalk.cyan('git branch -u origin/main')}.
    5. Run ${chalk.cyan('vercel')} to setup & deploy your project to Vercel.
    6. Add redirects: ${chalk.cyan('shorten --help')}.
`);
    this.log();
    this.log(`Other things you should do:`);
    this.log(`
    - Set up Vercel GitHub Integration. https://vercel.com/docs/v2/git-integrations/vercel-for-github
    - Add a custom domain to make your short url's really short! https://vercel.com/docs/v2/custom-domains
`);
  }
};
