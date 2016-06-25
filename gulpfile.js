'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./www"
        }
    });
    gulp.watch('./www/sass/**/*.scss', ['sass']);
    gulp.watch('./www/css/**/*.css').on('change', browserSync.reload);
    gulp.watch('./www/controllers/**/*.js').on('change', browserSync.reload);
    gulp.watch('./www/index.html').on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('./www/sass/**/*.scss')
        .pipe(sass({
            // outputStyle: 'expanded'
            // outputStyle: 'compact'
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./www/css'));
});

gulp.task('default', ['sass', 'browser-sync']);