'use strict';

/* Notes:
   - watch.js watches the source files for changes, then calls the needed task.
   - gulp/tasks/browserSync.js reloads the browser with the compiled files.
*/

var gulp = require( 'gulp' );
var connect = require( 'gulp-connect' );
var config = require( '../config' );

gulp.task('connect', function() {
  connect.server({
    root: 'dist'
  });
});

gulp.task( 'watch', [ 'connect', 'browserSync' ], function() {
  gulp.watch( config.scripts.src, [ 'scripts' ] );
  gulp.watch( config.styles.cwd + '/**/*.less', [ 'styles' ] );
  gulp.watch( config.images.src, [ 'images' ] );
  gulp.watch( config.copy.files.src, [ 'copy:files' ] );
} );
