const gulp = require('gulp');  
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');  
const browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('./styles/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./styles/css'))
      .pipe(browserSync.stream());
  });
gulp.task('scripts', ()=> {  
    return gulp.src('scripts/*.js')
    .pipe(browserSync.stream());
  });
gulp.task('html',()=>{  
    return gulp.src('*.html')
    .pipe(browserSync.stream());
});

gulp.task('watch',()=> {  
    browserSync.init({
        server: "./"
    });
    gulp.watch('./styles/sass/*.scss', ['sass']);
    gulp.watch('./scripts/*.js', ['scripts']);
    gulp.watch('*.html', ['html']);
});

gulp.task('serve', ['watch']);  
