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

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      compass: {  // Build scss and sass files when changed or added. Then, autoprefix built css
        files: ['<%= yeoman.app %>/_scss/**/*.{scss,sass}'],
        tasks: ['compass:server', 'newer:autoprefixer:server', 'newer:csslint:check'],
        options: {
          event: ['added', 'changed']
        }
      },
      css: { // Copy css files when changed or added. Then, autoprefix pasted css
        files: ['<%= yeoman.app %>/css/**/*.css'],
        tasks: ['newer:copy:stageCss', 'newer:autoprefixer:server', 'newer:csslint:check'],
        options: {
          event: ['added', 'changed']
        }
      },
      js: { // js_hint js files when added and changed
        files: ['<%= yeoman.app %>/js/**/*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          event: ['added', 'changed'],
        }
      },
      coffee: { // Build coffee files when added or changed
        files: ['<%= yeoman.app %>/_src/**/*.coffee'],
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
          '<%= yeoman.app %>/js/**/*.js'
        ],
        tasks: ['injector'],
        options: {
          event: ['added']
        }
      },
      deletedStylesScripts: { // Rebuild everything when a source css/scss/sass/coffee file is deleted (it's hard to remove only a target source+built couple)
        files: [
          '<%= yeoman.app %>/_src/**/*.coffee',
          '<%= yeoman.app %>/css/**/*.css',
          '<%= yeoman.app %>/_scss/**/*.{scss,sass}'
        ],
        tasks: ['local'],
        options: {
          event: ['deleted']
        }
      },
      deletedJs: {  // Source js deletion it's easier to manage. Running the injector it's enough.
        files: ['<%= yeoman.app %>/js/**/*.js'],
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
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
          '!<%= yeoman.app %>/_bower_components/**/*'
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
          '<%= yeoman.app %>/js/**/*.js',
          '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
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
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= yeoman.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            '.jekyll',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.dist %>/.git*'
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
        sassDir: '<%= yeoman.app %>/_scss',
        cssDir: '.tmp/css',
        imagesDir: '<%= yeoman.app %>/img',
        javascriptsDir: '<%= yeoman.app %>/js',
        relativeAssets: false,
        httpImagesPath: '/img',
        httpGeneratedImagesPath: '/img/generated',
        outputStyle: 'expanded',
        raw: 'extensions_dir = "<%= yeoman.app %>/_bower_components"\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/img/generated'
        }
      },
      server: {
        options: {
          debugInfo: true,
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
          cwd: '<%= yeoman.dist %>/css',
          src: '**/*.css',
          dest: '<%= yeoman.dist %>/css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }]
      }
    },
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/_src',
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
            '<%= yeoman.app %>/_includes/styles.html': [
                '.tmp/css/**/*.css'
              ],
            '<%= yeoman.app %>/_includes/scripts.html': [
                '<%= yeoman.app %>/js/**/*.js',
                '.tmp/js/**/*.js'
              ],
          },
        },
        options: {
          ignorePath: [
            '<%= yeoman.app %>',
            '.tmp'
          ]
        }
    },
    wiredep: {
      inject:{
        src: [
          '<%= yeoman.app %>/_includes/styles.html',
          '<%= yeoman.app %>/_includes/scripts.html'
        ],
        exclude: [
          '<%= yeoman.app %>/_bower_components/bootstrap/dist/css/', // Include the src files directly with Compass
          '<%= yeoman.app %>/_bower_components/modernizr'
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
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>',
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
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.dist %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: '<%= yeoman.dist %>',
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/css/**/*.css']
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
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
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
          cwd: '<%= yeoman.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
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
          dest: '<%= yeoman.dist %>'
        }]
      },
      // Copy CSS into .tmp directory for Autoprefixer processing
      stageCss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/css',
          src: '**/*.css',
          dest: '.tmp/css'
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
            '<%= yeoman.dist %>/js/**/*.js',
            '<%= yeoman.dist %>/css/**/*.css',
            '<%= yeoman.dist %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
            '<%= yeoman.dist %>/fonts/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }]
      }
    },
    buildcontrol: {
      dist: {
        options: {
          dir: 'dist',
          remote: 'git@bitbucket.org:Chosko/jekyll-project-compiled',
          branch: 'gh-pages',
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
      check: ['<%= yeoman.app %>/_src/*.coffee']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/js/**/*.js',
        'test/spec/**/*.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/css/**/*.css',
          '<%= yeoman.app %>/_scss/**/*.scss'
        ]
      }
    },
    concurrent: {
      server: [
        'compass:server',
        'coffee:dist',
        'copy:stageCss',
      ],
      dist: [
        'compass:dist',
        'coffee:dist',
        'copy:dist',
      ]
    },
    shell: {
      bower: {
        command: 'bower install'
      },
      gem: {
        command: 'bundle install'
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
    'autoprefixer:server'
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

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'compass:server',
    'coffeelint:check',
    'coffee:dist',
    'jshint:all',
    'csslint:check'
  ]);

  grunt.registerTask('build', [
    'shell:gem',
    'shell:bower',
    'clean',
    // Jekyll cleans files from the target directory, so must run first
    'concurrent:dist',
    'injectDependencies',
    'jekyll:dist',
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
