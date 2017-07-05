const gulp = require('gulp');
const glp = require('gulp-load-plugins')({lazy: true});
const args = require('yargs').argv;

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
