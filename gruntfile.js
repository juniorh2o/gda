module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            options: {
                interrupt: true,
                livereload: true
            },
            js: {
                files: ['public/controllers/*.js'],
                options: {
                    reload: true
                }
            },
            html: {
                files: ['public/views/*.html']
            },
            css: {
                files: ['public/css/*.css']
            }
        },
        nodemon: {
            dev: {
                script: 'app.js',
                options: {
                    nodeArgs: [],
                    ignore: ['README.md', 'node_modules/**'],
                    ext: 'js',
                    watch: ['app.js', 'server'],
                    delayTime: 1,
                    env: {
                        PORT: 3000
                    },
                    cwd: __dirname
                }
            }
        },
        concurrent: {
            default: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    });
    grunt.option('force', true);
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('run', ['concurrent:default']);

};