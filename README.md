# MYD-Kirby-Base

This is a starting platform for basic websites using Kirby CMS + Kirby Panel and the following technology stack:

- Sass - Indented Syntax via libsass
- jQuery
- Grunt
- On-the-fly icon font generation via our [Icon Font Generator](https://github.com/madeyourday/SVG-Icon-Font-Generator)
- Automatic image compression via TinyPNG

## Starting a project

1. Clone this base with `git clone --recursive https://github.com/madeyourday/myd-kirby-base.git new-project`

2. Run `npm install` in the new project directory. Everything else is automatically setup via npm and composer.

## Watch for changes

1. `grunt watch` watches all assets, content and templates
2. Start livereload in your browser
3. Make changes

### Options

`grunt watch:sass` watches only the Sass files  
`grunt watch:images` watches only the images  
`grunt watch:js` watches only the js files  

## Support

We do not support this in any way. If you know how to use it you are welcome to make your worflow more efficient and fun.

## Dependencies

### Node.js

The whole grunt workflow relies on [Node.js](https://nodejs.org/) and its package manager [npm](https://www.npmjs.com/). All you need to do is [installing Node.js](https://nodejs.org/) on your system.

### grunt-cli

You need [grunt-cli](https://github.com/gruntjs/grunt-cli) on your system to start the workflow via the `grunt` command. We'd recommend to install it globally via `npm install -g grunt-cli`. But you can also install it locally on a per project basis via `npm install grunt-cli --save-dev`.

## License

The MIT License applies only to the assets, workflow setup and content. The [Kirby Core and Panel](http://getkirby.com/), which are loaded as git submodules, have their own proprietary license and are **not free**. Buy a license via http://getkirby.com/buy if you want to use Kirby productive.

Note: We're not affiliated with Kirby in any way.
