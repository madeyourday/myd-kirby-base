// Requirements
var autoprefixer = require('autoprefixer-core');
var fs = require('fs');
var svg2ttf = require('svg2ttf');
var ttf2woff = require('ttf2woff');
var shell = require('shelljs');

module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				indentedSyntax: true,
			},
			main: {
				files: {
					'assets/temp/css/main.css': 'assets-src/css/main.sass',
				},
			},
			build: {
				options: {
					outputStyle: 'compressed',
				},
				files: {
					'assets/temp/css/main.css': 'assets-src/css/main.sass',
				},
			},
		},
		postcss: {
			options: {
				processors: [
					autoprefixer({ browsers: ['last 2 version'] }).postcss,
				],
			},
			main: {
				files: {
					'assets/css/main.css': 'assets/temp/css/main.css',
				},
			},
		},
		concat: {
			options: {
				separator: '\n;',
			},
			dist: {
				src: ['node_modules/jquery/dist/jquery.min.js', 'assets-src/js/script.js'],
				dest: 'assets/js/main.js',
			},
		},
		tinypng: {
			options: {
				apiKey: "INSERT TINYPNG API KEY",
				checkSigs: true,
				sigFile: 'assets/temp/image_md5s.json',
				summarize: true,
				showProgress: true,
				stopOnImageError: true
			},
			main: {
				files: [{
					expand: true,
					cwd: 'assets-src/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'assets/images/',
				}],
			},
		},
		copy: {
			fonts: {
				files: [{
					expand: true,
					cwd: 'assets-src/fonts/',
					src: ['*.{eot,svg,ttf,woff,woff2}'],
					dest: 'assets/fonts/',
				}],
			},
		},
	});

	// Grunt Tasks
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-tinypng');
	grunt.loadNpmTasks('grunt-contrib-copy'); // currently not used
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('iconfont', 'Create icon font from SVG icons', function() {

		if (!fs.existsSync('assets/fonts')){
			fs.mkdirSync('assets/fonts');
		}

		shell.exec('vendor/bin/svg-icon-font-generator create-font --rename-files assets-src/fonts/icons assets/fonts/icons.svg');
		shell.exec('vendor/bin/svg-icon-font-generator create-info assets/fonts/icons.svg assets/fonts/icons.html');

		var ttf = svg2ttf(fs.readFileSync('assets/fonts/icons.svg', {encoding: 'utf-8'}), {});
		grunt.file.write('assets/fonts/icons.ttf', new Buffer(ttf.buffer));
		grunt.log.writeln('File "assets/fonts/icons.ttf" created.');

		var woff = ttf2woff(fs.readFileSync('assets/fonts/icons.ttf'), {});
		grunt.file.write('assets/fonts/icons.woff', new Buffer(woff.buffer));
		grunt.log.writeln('File "assets/fonts/icons.woff" created.');

	});

	// Custom Tasks
	grunt.registerTask('default', ['iconfont', 'sass:main', 'postcss', 'concat', 'tinypng', 'copy:fonts']);
	grunt.registerTask('build', ['iconfont', 'sass:build', 'postcss', 'concat', 'tinypng', 'copy:fonts']);

};
