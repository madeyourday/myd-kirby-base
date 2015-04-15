# MYD-Kirby-Base

This is a starting platform for basic websites using Kirby CMS + Kirby Panel and the following technology stack:

- Sass - Indented Syntax via libsass
- jQuery
- Grunt
- On-the-fly icon font generation via our [Icon Font Generator](https://github.com/madeyourday/SVG-Icon-Font-Generator)
- Automatic image compression via TinyPNG

## Dependencies

### Node.js

The whole grunt workflow relies on Node.js and its package manager npm. All you need to do is [installing Node.js](https://nodejs.org/) on your system.

### grunt-cli

You need grunt-cli on your system to start the workflow via the `grunt` command. We'd recommend to install it globally via `npm install -g grunt-cli`. But you can also install it locally on a per project basis via `npm install grunt-cli --save-dev`.

## Setup

Just run `npm install` in the project directory. Everything is automatically setup via npm and composer.

## Support

We do not support this. If you know how to use it you are welcome to make your worflow more efficient and fun.

## License

Everything besides the [Kirby](http://getkirby.com/) Core like the assets, workflow setup and content is available under the MIT License or its own license, if available.

Kirby, which is loaded as a submodule, has its own proprietary license and is **not free**. Buy a license via http://getkirby.com/buy if you want to use it productive.

Note: We're not affiliated with Kirby in any way.
