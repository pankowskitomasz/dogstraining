module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat:{
            js:{
                src:[
                    "js/jquery-3.4.1.min.js",
                    "js/main.js"
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
                    "css/styles.min.css":"css/tailwind.out.css"
                }
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.registerTask("default",["concat","uglify","cssmin"]);
};