module.exports = function (grunt) {

    'use strict';

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        // Project settings
        app: {
            // configurable paths
            app: 'www',
            url: '',
            default_local_server_url: 'http://localhost:8001'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            less: {
                files: ['<%= app.app %>/less/*.less'],
                tasks: ['less'],
                options: {
                    livereload: 35730
                }
            },
            js: {
                files: ['<%= app.app %>/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: 35730
                }
            },
            styles: {
                files: ['<%= app.app %>/css/,*/*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer'],
                options: {
                    livereload: 35730
                }
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= app.app %>/{,*/}*.html',
                    '.tmp/css/{,*/}*.css',
                    '<%= app.app %>/imgs/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9002,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35730
            },
            livereload: {
                options: {
                    open: {
                        target: '<%= app.url %>'
                    },
                    base: [
                        '.tmp',
                        '<%= app.app %>'
                    ]
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            server: '.tmp'
        },

        // define grunt task for formating js code
        // to specfic rules outlined in projects root
        // `.jshintrc` file. We also pass in our files
        // sourcePaths in form of array.
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            files: {
                src: '<%= pkg.srcPaths %>'
            }
        },

        // define grunt task for liniting our projects
        // js scripts
        lintspaces: {
            javascript: {
                options: {
                    trailingspaces: true,
                    indentation: 'spaces', // defaults to 4
                    ignores: ['js-comments']
                },
                src: '<%= pkg.srcPaths %>'
            }
        },

        // This is used to minify all
        // the CSS files for use in
        // the binary builds.

        // invoke task `grunt cssmin:build`
        cssmin: {
            build: {
                src: 'www/css/*.css',
                dest: 'www/css/app.css'
            }
        },

        // This takes care of javascript compression
        // and minification, thus reducing file size
        // which is important for websites to load fast.

        // invoke task `grunt uglify:build` from
        // the command line. It will concatenate and
        // uglify jquery.js and main.js in one file.
        uglify: {
            build: {
                files: {
                    '/www/app.js': ['./www/**/*.js', './www/*.js']
                }
            }
        },

        // common terminal command and util shell
        // scripts used during development
        shell: {
            weinre: {
                options: {
                    stdout: true
                },
                command: './util/weinre.sh'
            }
        },

        // testing suite tasks
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },

        // grunt task to compile less to css
        less: {
            development: {
                options: {
                    optimization: 2,
                    paths: ['www/less']
                },
                files: {
                    'www/css/style.css': 'www/less/main.less'
                }
            }
        }
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'local') {
            var conn = 'http://' + grunt.config.get('connect.options.hostname') + ':' +
                grunt.config.get('connect.options.port');
            var url = grunt.option('url') || grunt.config.get('app.default_local_server_url');
            grunt.config.set('app.url', conn + '/?url=' + url);
        } else {
            // open with no url passed to fh-js-sdk
            grunt.config.set('connect.livereload.options.open', true);
        }

        grunt.task.run([
            'clean:server',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-lintspaces');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // format scripts
    grunt.registerTask('format', ['less', 'lintspaces', 'jshint']);

    // start weinre server
    grunt.registerTask('weinre', ['shell:weinre']);

    grunt.registerTask('minify', ['lintspaces', 'jshint', 'less', 'uglify', 'cssmin']);

    grunt.registerTask('default', ['less', 'serve']);
};
