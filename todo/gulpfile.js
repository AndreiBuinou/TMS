const {series, parallel, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const gulpClean = require('gulp-clean');
const browserSync = require('browser-sync').create();

function serve() {
    browserSync.init({
        server: 'build',
        watch: true,
        notify: false
    });
}

function clean() {
    return src('build', {read: false, allowEmpty: true})
        .pipe(gulpClean());
}

function copyHTML() {
    return src('src/index.html')
        .pipe(dest('build'));
}

function transformSCSS() {
    return src('src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(concat('index.css'))
        .pipe(dest('build'));
}

function js() {
    return src('src/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(dest('build'));
}

function watchTasks() {
    watch('src/index.html', copyHTML);
    watch('src/styles/**/*.scss', transformSCSS);
    watch('src/js/**/*.js', js);
}

exports.js = js;
exports.clean = clean;
exports.watch = watchTasks;
exports.style = transformSCSS;
exports.default = series(
    clean,
    parallel(copyHTML, transformSCSS, js),
    parallel(watchTasks, serve)
);