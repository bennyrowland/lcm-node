/**
 * Created by ben on 25/03/16.
 */

var Gulp = require('gulp');
var Plugins = require('gulp-load-plugins')();

var paths = {
    backendSrc: './backend/**/*.js'
};

var pipes = {};

pipes.validatedBackendScripts = function () {
    return Gulp.src(paths.backendSrc)
        .pipe(Plugins.jshint())
        .pipe(Plugins.jshint.reporter('jshint-stylish'));
};

Gulp.task('validate-backend-scripts', pipes.validatedBackendScripts);

Gulp.task('watch-dev', ['validate-backend-scripts'], function () {
    Plugins.nodemon({
        script: 'index.js',
        ext: 'js',
        watch: ['backend/'],
        env: {NODE_ENV: 'development'}
    })
        .on('change', ['validate-devserver-scripts'])
        .on('restart', function() {
            console.log('[nodemon] restarted dev server');
        });
});
