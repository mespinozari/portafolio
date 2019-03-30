var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');

 
gulp.task('sass', function () {
  return gulp.src('./src/assets/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/styles'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/styles/*.scss',gulp.series('sass'));
});