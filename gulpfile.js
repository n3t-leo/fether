// Gulp.js Configuration
'use strict';

const

  // Directory
  dir = {
    src         : 'src/',
    dist        : 'dist/'
  },

  // Plugins
  gulp          = require('gulp'),
  babel         = require('gulp-babel'),
  gutil         = require('gulp-util'),
  newer         = require('gulp-newer'),
  imagemin      = require('gulp-imagemin'),
  sass          = require('gulp-sass'),
  postcss       = require('gulp-postcss'),
  deporder      = require('gulp-deporder'),
  concat        = require('gulp-concat'),
  stripdebug    = require('gulp-strip-debug'),
  uglify        = require('gulp-uglify')
;

// BrowserSync
var browsersync = false;

// PHP
const php = {
  src           : dir.src + 'template/**/*.php',
  dist          : dir.dist
};

gulp.task('php', () => {
  return gulp.src(php.src)
    .pipe(newer(php.dist))
    .pipe(gulp.dest(php.dist));
});

// Images
const images = {
  src         : dir.src + 'images/**/*',
  dist        : dir.dist + 'images/'
};

gulp.task('images', () => {
  return gulp.src(images.src)
    .pipe(newer(images.dist))
    .pipe(imagemin())
    .pipe(gulp.dest(images.dist));
});

// CSS
var css = {
  src         : dir.src + 'scss/style.scss',
  watch       : dir.src + 'scss/**/*',
  dist        : dir.dist,
  sassOpts: {
    outputStyle     : 'nested',
    imagePath       : images.dist,
    precision       : 3,
    errLogToConsole : true
  },
  processors: [
    require('postcss-assets')({
      loadPaths: ['images/'],
      basePath: dir.dist
//      baseUrl: '/wp-content/themes/wptheme/'
    }),
    require('autoprefixer')({
      browsers: ['last 2 versions', '> 2%']
    }),
    require('css-mqpacker'),
    require('cssnano')
  ]
};

gulp.task('css', ['images'], () => {
  return gulp.src(css.src)
    .pipe(sass(css.sassOpts))
    .pipe(postcss(css.processors))
    .pipe(gulp.dest(css.dist))
    .pipe(browsersync ? browsersync.reload({ stream: true }) : gutil.noop());
});

// JavaScript
const js = {
  src         : dir.src + 'js/**/*',
  dist        : dir.dist + 'js/',
  filename    : 'script.js'
};

gulp.task('js', () => {
  return gulp.src(js.src)
    .pipe(deporder())
    .pipe(concat(js.filename))
    .pipe(stripdebug())
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(js.dist))
    .pipe(browsersync ? browsersync.reload({ stream: true }) : gutil.noop());
});

// Build Tasks
gulp.task('build', ['php','css','js']);

// BrowserSync
const syncOpts = {
  proxy       : 'localhost/gulptest',
  files       : dir.dist + '**/*',
  open        : false,
  notify      : false,
  ghostMode   : false,
  ui: {
    port: 8001
  }
};

gulp.task('browsersync', () => {
  if (browsersync === false) {
    browsersync = require('browser-sync').create();
    browsersync.init(syncOpts);
  }
});

// Watch
gulp.task('watch', ['browsersync'], () => {
  gulp.watch(php.src, ['php'], browsersync ? browsersync.reload : {});
  gulp.watch(images.src, ['images']);
  gulp.watch(css.watch, ['css']);
  gulp.watch(js.src, ['js']);
});

// Default Tasks
gulp.task('default', ['build', 'watch']);

// JavaScript: Post-Minification Debugging
//var pump = require('pump');
//gulp.task('uglify-error-debugging', function (cb) {
//  pump([
//    gulp.src( dir.src + 'js/**/*'),
//    uglify(),
//    gulp.dest(dir.dist)
//  ], cb);
//});