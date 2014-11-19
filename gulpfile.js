'use strict';

var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');

gulp.task('svgToFont', function () {
  gulp.src(['assets/icons/*.svg'])
    .pipe(iconfont({fontName: 'myfont'}))
    .on('codepoints', function (codepoints) {
      console.log(codepoints);

      gulp.src('templates/myfont.css')
        .pipe(consolidate('lodash', {
          glyphs: codepoints,
          fontName: 'myfont',
          fontPath: '../fonts/',
          className: 's'
        }))
        .pipe(gulp.dest('www/css/'));
    })
    .pipe(gulp.dest('www/fonts/'));
});
