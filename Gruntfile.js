module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-git-describe');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-sourcemap');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    html2js: {
      /**
       * These are the templates from `src/app`.
       */
      app: {
        options: {
          base: 'app/public/src'
        },
        src: ['app/public/src/**/*.tpl.html'],
        dest: 'app/public/dist/templates-app.js'
      }
    },
    less: {
      all: {
        src: 'style.less',
        dest: 'build/style.css',
        options: {
          report: 'gzip'
        }
      }
    },
    /*
    connect: {
      serve: {
        options: {
          port: 3000,
          base: 'build/',
          hostname: '*',
          debug: true
        }
      }
    },
    */
    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          args: ['dev'],
          nodeArgs: ['--debug'],
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });
          },
          env: {
            PORT: '8080'
          },
          cwd: __dirname,
          ignore: ['node_modules/**'],
          ext: 'js,coffee',
          watch: ['server'],
          delay: 1000,
          legacyWatch: true
        }
      }
    },
    watch: {
      options: {
        atBegin: true
      },
      templates: {
        files: ['app/public/src/**/*.tpl.html'],
        tasks: ['html2js']
      },
//      less: {
//        files: ['style.less', 'src/**/*.less'],
//        tasks: ['less']
//      },
      sources: {
        files: ['app/public/src/**/*.js', 'app/public/src/*.js'],
        tasks: ['concat_sourcemap:app']
      },
      index: {
        files: 'app/public/index.html',
        tasks: ['copy:index']
      }
  },
    'git-describe': {
      all: {}
    },
    // Useful in future, when i'll need to minify
    concat: {
      buildapp: {
        src: ['app/public/src/**/*.js', 'app/public/src/*.js'],
        dest: 'app/public/dist/app.js',
        options: {
          banner: '/*! <%=pkg.name %> v<%=grunt.option("gitRevision") %> | date: <%=grunt.template.today("dd-mm-yyyy") %> */\n'
        }
      },
      buildlibs: {
        src: [
          'app/public/libs/angular/angular.js',
          'app/public/libs/angular-bootstrap/ui-bootstrap-tpls.js',
          'app/public/libs/angular-ui-router/release/angular-ui-router.js',
          'app/public/libs/angular-animate/angular-animate.js',
          'app/public/libs/ng-table/ng-table.js'
        ],
        dest: 'app/public/dist/libs.js'
      },
      together: {
        src: ['app/public/dist/libs.js', 'app/public/dist/app.js' ],
        dest: 'app/public/dist/app-all.js'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'app/public/dist/app-all.min.js': ['app/public/dist/app-all.js']
        }
      }
    },
    concat_sourcemap: {
      options: {
        sourcesContent: true
      },
      app: {
        src: ['app/public/src/**/*.js', 'app/public/src/*.js'],
        dest: 'app/public/build/app.js'
      },
      libs: {
        src: [
          'app/public/libs/angular/angular.js',
          'app/public/libs/angular-bootstrap/ui-bootstrap-tpls.js',
          'app/public/libs/angular-ui-router/release/angular-ui-router.js',
          'app/public/libs/angular-animate/angular-animate.js',
          'app/public/libs/ng-table/ng-table.js',
        ],
        dest: 'app/public/build/libs.js'
      }
    },
    copy: {
      index: {
        src: 'index.html',
        dest: 'build/',
        options: {
          processContent: function (content, srcpath) {
            // Compiling index.html file!
            return grunt.template.process(content, {
              gitRevision: grunt.option('gitRevision')
            });
          }
        }
      }
    },
    clean: {
      all: {
        src: ['app/public/build/', 'app/public/dist/']
      }
    }
  });

  grunt.registerTask('saveRevision', function () {
    grunt.event.once('git-describe', function (rev) {
      grunt.option('gitRevision', rev);
    });
    grunt.task.run('git-describe');
  });

  // Build process:
  // - clean build/
  // - creates build/templates-app.js from *.tpl.html files
  // - creates build/style.css from all the .less files
  // - get git revision in local grunt memory
  // - concatenates all the source files in build/app.js - banner with git revision
  // - concatenates all the libraries in build/libs.js
  // - copies index.html over build/
  grunt.registerTask('build', ['clean', 'html2js', /*'less',*/ 'saveRevision', 'concat_sourcemap:app', 'concat_sourcemap:libs', 'uglify', 'copy']);
  grunt.registerTask('default', [/*'clean',*/ 'html2js', 'concat', 'uglify',  'concat_sourcemap:app', 'concat_sourcemap:libs', 'concurrent:dev']);
};
