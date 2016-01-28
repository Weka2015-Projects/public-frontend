module.exports = function(grunt) {

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Configure a mochaTest task
    sass: {
       dist: {
         options: {
           style: 'expanded'
         },
         files: {
           'styles/main.css': 'styles/main.scss'
         }
       }
    }
  });

  grunt.registerTask('default', ['sass']);

};
