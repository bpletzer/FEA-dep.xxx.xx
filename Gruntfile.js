module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-fea-build');

	grunt.registerTask('default', 'muh', function(){
		console.log(grunt.config())
		console.log('not 42')
	});
}