var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('hello', function() {
  console.log('Hellow world!');
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        files: ["*.html", "js/*.js"],
        server: {
            baseDir: "./public",
        }
    });
});
