/**
 *
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var gulp = require('gulp');
var gulpif = require('gulp-if');
var minifyHtml = require('gulp-minify-html');
var replace = require('gulp-replace');

gulp.task('html:watch', function() {
  gulp.watch(GLOBAL.config.src + '/**/*.html', ['html']);
});

gulp.task('html', function() {
  return gulp.src([
      GLOBAL.config.src + '/**/*.html',
    ])
    .pipe(gulpif(GLOBAL.config.env == 'prod', minifyHtml()))
    .pipe(replace(/@VERSION@/g, GLOBAL.config.version))
    .pipe(gulp.dest(config.dest));
});
