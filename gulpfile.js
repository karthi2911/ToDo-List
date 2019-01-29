

var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

/* Task to compile less */
gulp.task('compile-less', function() {  
  gulp.src('./assets/less/style.less')
    .pipe(sourcemaps.init())  
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./assets/css/'));
}); 
/* Task to watch less changes */
gulp.task('watch-less', function() {  
  gulp.watch('./assets/less/**/*.less' , ['compile-less']);
});

gulp.task('serve', function () {
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    }); 
    gulp.watch("./assets/less/*.less").on("change", reload);
    gulp.watch("./*.html").on("change", reload);
});
 
/* Task when running `gulp` from terminal */
gulp.task('default', ['watch-less', 'serve', 'compile-less']);