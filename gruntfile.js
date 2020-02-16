module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat:{
            css:{
                src:[
                    "css/tailwind.min.css",
                    "css/styles.css"
                ],
                dest: "css/styles.concat.css"
            },
            js:{
                src:[
                    "js/jquery-3.4.1.min.js",
                    "js/main.min.js"
                ],
                dest: "js/main.concat.js"
            }
        },
        uglify:{
            compress:{
                files:{
                    "js/main.min.js":"<%= concat.js.dest %>"
                }
            }
        },
        cssmin:{
            compress:{
                files:{
                    "css/styles.min.css":"<%= concat.css.dest %>"
                }
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.registerTask("default",["concat","uglify","cssmin"]);
};