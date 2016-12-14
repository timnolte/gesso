module.exports = function (grunt) {
  grunt.config.merge({
    shell: {
      patternlabComposer: {
        command: 'composer install',
        options: {
          execOptions : {
            cwd: '<%= pkg.themePath %>/pattern-lab-demo'
          }
        }
      },
      patternlab: {
        command: 'php core/console --generate',
        options: {
          execOptions: {
            cwd: '<%= pkg.themePath %>/pattern-lab-demo'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
}
