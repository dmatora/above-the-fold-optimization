/* global module:false */
module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/*!\n' +
				' * Above the fold Optimization <%= pkg.version %>\n' +
				' * @author https://optimalisatie.nl\n' +
				' */'
		},

		uglify: {
			options: {
				banner: ''
			},
			build: {
				files: {

					// Above The Fold Javascript Controller
					'public/js/abovethefold.min.js' : [
						'public/js/src/abovethefold.js',
						'public/js/src/abovethefold.loadcss.js'
					],

					// Enhanced loadCSS
					'public/js/abovethefold-loadcss-enhanced.min.js' : [
						'public/js/src/abovethefold.loadcss-modified.js'
					],

					// Original loadCSS
					'public/js/abovethefold-loadcss.min.js' : [
						'bower_components/loadcss/loadCSS.js'
					],

					// Original loadCSS
					'admin/js/admincp.min.js' : [
						'bower_components/selectize/dist/js/standalone/selectize.min.js',
						'admin/js/admincp.js'
					]
				}
			}
		},

		cssmin: {

			admincp: {
				options: {
					banner: '<%= meta.banner %>\n',
					advanced: true,
					aggressiveMerging: true,
					processImport: true
				},
				files: {
					'admin/css/admincp.min.css': [
						'admin/css/admincp.css',
						'bower_components/selectize/dist/css/selectize.default.css'
					]
				}
			}
		},
	});

	// Load Dependencies
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask( 'default', [ 'uglify' ] );
};
