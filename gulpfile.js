'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./www/sass/**/*.scss')
        .pipe(sass({
            // outputStyle: 'expanded'
            // outputStyle: 'compact'
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./www/css'));
});

gulp.task('default', function () {
    gulp.watch('./www/sass/**/*.scss', ['sass']);
});