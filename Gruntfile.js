// Generated on 2015-03-03 using generator-jekyllrb 1.2.1
'use strict';

// Directory reference:
//   css: css
//   compass: _scss
//   javascript: js
//   coffeescript: _src
//   images: img
//   fonts: fonts


module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);
  // Load yaml parser and filesystem  lib

  // Read configuration from _config.yml
  var configuration = grunt.file.readYAML('_config.yml');

  grunt.initConfig({
    // Configurable paths
    config: configuration.build_settings,
    watch: {
      compass: {  // Build scss and sass files when changed or added. Then, autoprefix built css
        files: ['<%= config.app %>/_scss/**/*.{scss,sass}'],
        tasks: ['compass:server', 'newer:autoprefixer:server'],
        options: {
          event: ['added', 'changed']
        }
      },
      css: { // Copy css files when changed or added. Then, autoprefix pasted css
        files: ['<%= config.app %>/css/**/*.css'],
        tasks: ['newer:copy:stageCss', 'newer:autoprefixer:server', 'newer:csslint:check'],
        options: {
          event: ['added', 'changed']
        }
      },
      js: { // js_hint js files when added and changed
        files: ['<%= config.app %>/js/**/*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          event: ['added', 'changed'],
        }
      },
      coffee: { // Build coffee files when added or changed
        files: ['<%= config.app %>/_src/**/*.coffee'],
        tasks: ['coffee:dist', 'newer:coffeelint:check'],
        options: {
          event: ['added', 'changed']
        }
      },
      coffeeTest: { // Run tests
        files: ['test/spec/**/*.coffee'],
        tasks: ['coffee:test']
      },
      addedStylesScripts: { // Inject new css and js files as references into html files
        files: [
          '.tmp/css/**/*.css',
          '.tmp/js/**/*.js',
          '<%= config.app %>/js/**/*.js'
        ],
        tasks: ['injector'],
        options: {
          event: ['added']
        }
      },
      deletedStylesScripts: { // Rebuild everything when a source css/scss/sass/coffee file is deleted (it's hard to remove only a target source+built couple)
        files: [
          '<%= config.app %>/_src/**/*.coffee',
          '<%= config.app %>/css/**/*.css',
          '<%= config.app %>/_scss/**/*.{scss,sass}'
        ],
        tasks: ['local'],
        options: {
          event: ['deleted']
        }
      },
      deletedJs: {  // Source js deletion it's easier to manage. Running the injector it's enough.
        files: ['<%= config.app %>/js/**/*.js'],
        tasks: ['injector'],
        options: {
          event: ['deleted']
        }
      },
      config: { // Rebuild everything when a config file is changed
        files: [
          'Gruntfile.js',
          '_config.build.yml',
          '_config.yml',
          'bower.json',
          '.bowerrc',
          'Gemfile',
          'Gemfile.lock'
        ],
        tasks: ['local']
      },
      jshint: { // js_hint everything when the jshintrc file is changed
        files: ['.jshintrc'],
        tasks: ['jshint:all']
      },
      csslint: { // js_hint everything when the jshintrc file is changed
        files: ['.csslintrc'],
        tasks: ['csslint:check']
      },
      jekyll: { // Run jekyll when source html content change
        files: [
          '<%= config.app %>/**/*.{html,yml,md,mkd,markdown}',
          '!<%= config.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      },
      livereload: { // Livereload target files
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.jekyll/**/*.html',
          '.tmp/css/**/*{.css,.css.map}',
          '.tmp/js/**/*{.js,.js.map}',
          '<%= config.app %>/js/**/*.js',
          '<%= config.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '.jekyll',
            '<%= config.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            '.jekyll',
            'test',
            '<%= config.app %>'
          ]
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= config.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= config.dist %>/.git*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    compass: {
      options: {
        // If you're using global Sass gems, require them here.
        // require: ['singularity', 'jacket'],
        bundleExec: true,
        sourcemap: true,
        sassDir: '<%= config.app %>/_scss',
        cssDir: '.tmp/css',
        imagesDir: '<%= config.app %>/img',
        javascriptsDir: '<%= config.app %>/js',
        relativeAssets: false,
        httpImagesPath: '/img',
        httpGeneratedImagesPath: '/img/generated',
        outputStyle: 'expanded',
        raw: 'extensions_dir = "<%= config.app %>/_bower_components"\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= config.dist %>/img/generated'
        }
      },
      server: {
        options: {
          debugInfo: false,
          generatedImagesDir: '.tmp/img/generated'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.dist %>/css',
          src: '**/*.css',
          dest: '<%= config.dist %>/css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }],
        options: {
          map: true // Update the sourcemap files
        }
      }
    },
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/_src',
          src: '**/*.coffee',
          dest: '.tmp/js',
          ext: '.js'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: 'test/spec',
          src: '**/*.coffee',
          dest: '.tmp/spec',
          ext: '.js'
        }]
      }
    },
    injector: {
        local_dependencies: {
          files: {
            '<%= config.app %>/_includes/styles.html': [
                '.tmp/css/**/*.css'
              ],
            '<%= config.app %>/_includes/scripts.html': [
                '<%= config.app %>/js/**/*.js',
                '.tmp/js/**/*.js'
              ],
          },
        },
        options: {
          ignorePath: [
            '<%= config.app %>',
            '.tmp'
          ]
        }
    },
    wiredep: {
      inject:{
        src: [
          '<%= config.app %>/_includes/styles.html',
          '<%= config.app %>/_includes/scripts.html'
        ],
        exclude: [
          // '<%= config.app %>/_bower_components/bootstrap/dist/css/', // Include the src files directly with Compass
          '<%= config.app %>/_bower_components/modernizr' // Included manually on the header
        ],
        dependencies: true,
        devDependencies: true,
        includeSelf: false,
        ignorePath: '../',
        fileTypes: {
          html: {
            replace: {
              js: '<script src="/{{filePath}}"></script>',
              css: '<link rel="stylesheet" href="/{{filePath}}" />'
            }
          }
        }
      }
    },

    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml,_config.build.yml',
        src: '<%= config.app %>'
      },
      dist: {
        options: {
          dest: '<%= config.dist %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= config.dist %>'
      },
      html: '<%= config.dist %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: '<%= config.dist %>',
      },
      html: ['<%= config.dist %>/**/*.html'],
      css: ['<%= config.dist %>/css/**/*.css']
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: '**/*.html',
          dest: '<%= config.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {},
    // Usemin adds files to cssmin
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= config.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: '**/*.svg',
          dest: '<%= config.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          src: [
            // Jekyll processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            'img/**/*',
            'fonts/**/*',
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}',
            'favicon.ico',
            'apple-touch*.png'
          ],
          dest: '<%= config.dist %>'
        }, {
          expand: true,
          cwd: '.tmp/fonts/',
          src: '{,*/}*.{eot,otf,svg,ttf,woff,woff2}',
          dest: '<%= config.dist %>/fonts'
        }]
      },
      // Copy CSS into .tmp directory for Autoprefixer processing
      stageCss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }]
      },
      fonts: {
        files:[{
          expand: true,
          cwd: '<%= config.app %>/_bower_components/bootstrap-sass/assets/fonts/',
          dest: '.tmp/fonts/',
          src: '{,*/}*.{eot,otf,svg,ttf,woff,woff2}'
        }]
      }
    },
    filerev: {
      options: {
        length: 4
      },
      dist: {
        files: [{
          src: [
            '<%= config.dist %>/js/**/*.js',
            '<%= config.dist %>/css/**/*.css',
            '<%= config.dist %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
            '<%= config.dist %>/fonts/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }]
      }
    },
    buildcontrol: {
      dist: {
        options: {
          dir: 'dist',
          remote: '<%= config.deploy.remote %>',
          branch: '<%= config.deploy.branch %>',
          commit: true,
          push: true,
          message: 'Built %sourceName% from commit %sourceCommit%'
        }
      }
    },
    coffeelint: {
      options: {
        'max_line_length': {
          'level': 'ignore'
        }
      },
      check: ['<%= config.app %>/_src/*.coffee']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= config.app %>/js/**/*.js',
        'test/spec/**/*.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: ['<%= config.app %>/css/**/*.css']
      }
    },
    concurrent: {
      server: [
        'compass:server',
        'coffee:dist',
        'copy:stageCss',
        'copy:fonts'
      ],
      dist: [
        'compass:dist',
        'coffee:dist'
      ]
    },
    shell: {
      bower: {
        command: 'bower install'
      },
      gem: {
        command: 'bundle install'
      }
    },
    writeCNAME: {
      options: {
        cname: '<%= config.cname %>',
        dest: '<%= config.dist %>/CNAME'
      }
    }
  });


  // Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'local',
      'notify_hooks',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('local', [
    'shell:gem',
    'shell:bower',
    'clean:server',
    'concurrent:server',
    'injectDependencies',
    'jekyll:server',
    'autoprefixer:server',
  ]);


  // No real tests yet. Add your own.
  grunt.registerTask('test', [
  //   'clean:server',
  //   'concurrent:test',
  //   'connect:test'
  ]);

  grunt.registerTask('injectDependencies', [
    'injector',
    'wiredep'
  ]);

  grunt.registerTask('writeCNAME', function() {
    var opts = this.options();
    if(opts.cname && opts.dest){
      grunt.file.write(opts.dest,opts.cname);
      grunt.log.ok('CNAME file written into dist folder (' + opts.cname + ')');
    }
  });

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'compass:server',
    'coffeelint:check',
    'coffee:dist',
    'jshint:all',
    'csslint:check',
  ]);

  grunt.registerTask('build', [
    'shell:gem',
    'shell:bower',
    'clean',
    'copy:fonts',
    'concurrent:dist',
    'injectDependencies',
    'jekyll:dist', // Jekyll cleans files from the target directory, so must run first
    'copy:dist',
    'writeCNAME',
    'useminPrepare',
    'concat',
    'autoprefixer:dist',
    'cssmin',
    'uglify',
    'imagemin',
    'svgmin',
    'filerev',
    'usemin',
    'htmlmin'
    ]);

  grunt.registerTask('deploy', [
    'check',
    'test',
    'build',
    'buildcontrol'
    ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};