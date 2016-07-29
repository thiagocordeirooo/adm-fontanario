module.exports = function (grunt) {
    grunt.initConfig({
        clean:{
            temp: ['dist/js/libs.js', 'dist/js/scripts.js', 'dist/js/scripts.min.js'],
            all: ['dist/']
        },
        jshint: {
            dist:{
                src: ['app/controllers/**/*.js']
            }            
        },
        concat:{
            scripts:{
                src: [
                     'app/*.js',
                     'app/src/js/dirPagination.js',
                     'app/data/services/*.js',
                     'app/controllers/**/*.js'
                     ],
                dest: 'dist/js/scripts.js'
            },            
            libs :{
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'bower_components/toastr/toastr.min.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                    'bower_components/angular-animate/angular-animate.min.js',
                    'bower_components/angular-cookies/angular-cookies.min.js',
                    'bower_components/angular-loading-bar/build/loading-bar.min.js'
                    ],
                dest: 'dist/js/libs.js'
            },
            all:{
                src: ['dist/js/libs.js', 'dist/js/scripts.min.js'],
                dest: 'dist/js/scripts.1.0.0.min.js'
            },
            styles: {
                src: [
                    'bower_components/toastr/toastr.min.css',
                    'bower_components/angular-loading-bar/build/loading-bar.min.css',
                ],
                dest: 'dist/styles/styles.css'
            }
        },
        uglify:{
            scripts:{
                src: ['dist/js/scripts.js'],
                dest: 'dist/js/scripts.min.js'
            }
        },
        htmlmin: {
            options: { 
                removeComments: true,
                collapseWhitespace: true
            },            
            views: {
                expand: true,
                src: ['app/views/**/*.html'],
                dest: 'dist'
            }             
        },
        copy: {
            paper: {
                expand: true,
                flatten: true,
                src: ['bower_components/bootswatch/paper/bootstrap.min.css'],
                dest: 'dist/styles/paper/',
                filter: 'isFile'
           },
           sandstone: {
                expand: true,
                flatten: true,
                src: ['bower_components/bootswatch/sandstone/bootstrap.min.css'],
                dest: 'dist/styles/sandstone/',
                filter: 'isFile'
           },
           superhero: {
                expand: true,
                flatten: true,
                src: ['bower_components/bootswatch/superhero/bootstrap.min.css'],
                dest: 'dist/styles/superhero/',
                filter: 'isFile'
           },
           yeti: {
                expand: true,
                flatten: true,
                src: ['bower_components/bootswatch/yeti/bootstrap.min.css'],
                dest: 'dist/styles/yeti/',
                filter: 'isFile'
           },
           images: {
                expand: true,
                flatten: true,
                src: ['app/src/images/logo.png'],
                dest: 'dist/app/src/images/',
                filter: 'isFile'
           },
           fonts: {
                expand: true,
                flatten: true,
                src: ['bower_components/bootstrap/fonts/**'],
                dest: 'dist/styles/fonts/',
                filter: 'isFile'
           }           
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    grunt.registerTask('build', ['clean:all',
                                 'jshint',
                                 'copy',
                                 'concat:scripts',
                                 'uglify:scripts',
                                 'concat:libs',
                                 'concat:all',
                                 'concat:styles',
                                 'htmlmin',
                                 'clean:temp']);
                                 
    require('time-grunt')(grunt);
}