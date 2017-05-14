module.exports = function (grunt) {

    grunt.initConfig({
        uglify:{
            my_target:{
                files:{
                    'Core/minified/script.js':['Core/js/es5-script.js']
                }
            }
        },
        compass:{
            dev:{
                options:{
                    config:'config.rb'
                }
            }
        },
        babel:{
            options:{
                presets:['es2015']
            },
            dist: {
                files:{
                    'Core/js/es5-script.js':'Core/js/es6-script.js'
                }
            }
        },
        watch:{
            options:{livereload:true},
            scripts:{
                files:['Core/js/es6-script.js'],
                tasks:['babel', 'uglify']
            },
            html: {
                files:['*.html']
            },
            sass: {
                files:['Core/sass/*.scss'],
                tasks:['compass:dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default', ['watch']);


};