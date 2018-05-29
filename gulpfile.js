var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('watch', function () {
    gulp.watch('./src/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass','watch']);
