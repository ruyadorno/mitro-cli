'use strict';

module.exports = function (grunt) {

  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    sg_release: {
      options: {
        skipBowerInstall: true,
        developBranch: 'develop',
        masterBranch: 'master',
        files: [
          'package.json',
          'README.md'
        ],
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['-a'], // '-a' for all files
        pushTo: 'origin'
      }
    }

  });

  grunt.registerTask('test', ['mochaTest']);

  grunt.registerTask('release', ['jshint', 'test', 'sg_release']);

  // Default task.
  grunt.registerTask('default', ['jshint', 'test']);

};

