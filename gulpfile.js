var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
   gulp.watch(['./*.css'], ['css']);
   gulp.watch('./sass/**/*.scss', ['sass']);
});
 
gulp.task('css', function () {
  gulp.src('./*.css')
    .pipe(connect.reload());
});

 
gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

 
gulp.task('default', function () {
    return gulp.src('src/*.css')
        .pipe(autoprefixer({
            browsers: ['last 22 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css/min/'));
});

gulp.task('default', ['connect', 'watch']);
 