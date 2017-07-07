const gulp = require('gulp');
const glp = require('gulp-load-plugins')({lazy: true});
const args = require('yargs').argv;
const pump = require('pump');


//linting and code style
gulp.task('vet', function() {
  log('Analyzing source with JSHint and JSCS');
  return gulp
    .src([
      './src/*.js',
      './*.js'
    ])
    .pipe(glp.if(args.verbose, glp.print()))
    .pipe(glp.jscs())
    .pipe(glp.jshint())
    .pipe(glp.jshint.reporter('jshint-stylish', {verbose: true}))
    .pipe(glp.jshint.reporter('fail'));
});

//make it ugly and concantination
gulp.task('uglycat', function(done) {
  pump([
    (gulp.src('./src/*.js')),
    (glp.concat('all.min.js')),
    (glp.uglify()),
    (gulp.dest('./dist/'))
    ],
  done);
});

//logging
function log(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        glp.util.log(glp.util.colors.blue(msg[item]));
      }
    }
  }
  else {
    glp.util.log(glp.util.colors.blue(msg));
  }
}
