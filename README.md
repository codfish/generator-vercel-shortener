# generator-vercel-shortener

> Generator to create your own personal url shortener to deploy to Vercel (formerly Zeit Now).

[![version][version-badge]][package] [![downloads][downloads-badge]][npmcharts]
[![GitHub Workflow Status][actions-badge]][actions-badge] [![MIT License][license-badge]][license]
[![PRs Welcome][prs-badge]][prs] [![Semantic Release][semantic-release-badge]][semantic-release]
[![Commitizen friendly][commitizen-badge]][commitizen]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [After you generate](#after-you-generate)
- [Related Projects](#related-projects)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting Started

These aren't prerequisites but before you're able to actually deploy your url shortener you should:

1. Create a [Vercel account](https://vercel.com/signup).
1. Set up Vercel
   [GitHub Integration](https://vercel.com/docs/v2/git-integrations/vercel-for-github). This way
   Vercel deploys automatically for you.
1. Buy, migrate or simply point a domain you already own to Vercel's dns.

You don't technically need to have a domain. By default your new project in Vercel will be deployed
with a domain like `https://my-url-shortener.now.sh`, and you're redirects will work just fine.
However part of the glory of url shorteners is that they create **short urls** that are easy to type
and remember!

## Installation

```sh
npm install -g yo generator-vercel-shortener
```

## Usage

```sh
yo vercel-shortener
```

By default it will look to generate in your current working directory. If that's not what you want,
then specify the directory in the call or create a new directory to run the generator in.

```sh
yo vercel-shortener [<project-directory>]
```

_or..._

```sh
mkdir <project-directory>
cd <project-directory>
yo vercel-shortener
```

## After you generate

Next steps after generating:

1. Create a repository for your url shortener, [https://github.com/new](https://github.com/new).
1. Run `git remote add origin <repo_url>`.
1. Run `git push origin master`.
1. Run `git branch -u origin/master`.
1. Run `vercel` to setup & deploy your project to Vercel.
1. Add redirects:
   - Run `shorten <destination> [<source>]`. The generator will expose a globally available script
     for you. Run this from anywhere in your terminal. See
     [vercel-redirects](https://github.com/codfish/vercel-redirects) for the full cli documentation.
   - Run `npm run shorten <destination> [<source>]` from the root of the project.
   - Add them in `vercel.json` [manually](https://vercel.com/docs/configuration#project/redirects).
     You'll need to commit and push them yourself.

For example:

```sh
shorten https://gist.github.com/codfish/91ef26f3a56a5c5ca0912aa8c0c5c020 /linting
```

And in about ~5 seconds I can hit [codfi.sh/linting](https://codfi.sh/linting) and it will redirect
for me.

## Related Projects

- [`codfi.sh`](https://github.com/codfish/codfi.sh) - My own personal url shortener, using the same
  configuration as a project built with this generator.
- [`vercel-redirects`](https://github.com/codfish/vercel-redirects) - Command-line utility to manage
  your Vercel project redirects.
- [`netlify-shortener`](https://github.com/kentcdodds/netlify-shortener) - Your own free URL
  shortener with Netlify (different serverless platform).

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[semantic-release]: https://github.com/semantic-release/semantic-release
[semantic-release-badge]:
  https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[prs]: http://makeapullrequest.com
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[commitizen]: http://commitizen.github.io/cz-cli/
[commitizen-badge]:
  https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square
[npmcharts]: http://npmcharts.com/compare/generator-vercel-shortener
[version-badge]: https://img.shields.io/npm/v/generator-vercel-shortener.svg?style=flat-square
[package]: https://www.npmjs.com/package/generator-vercel-shortener
[downloads-badge]: https://img.shields.io/npm/dm/generator-vercel-shortener.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/generator-vercel-shortener.svg?style=flat-square
[license]: https://github.com/codfish/generator-vercel-shortener/blob/master/LICENSE
[actions]: https://github.com/codfish/generator-vercel-shortener/actions
[actions-badge]:
  https://img.shields.io/github/workflow/status/codfish/generator-vercel-shortener/Release/master?style=flat-square
