var gulp = require('gulp');
var historyApiFallback = require('connect-history-api-fallback');
var bs = require('browser-sync').create(); // create a browser sync instance.

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./",
            middleware: [ historyApiFallback() ]
        },
        files: ["views/*.html", "views/dashboard/*.html", "controllers/*.js", "controllers/dashboard/*.js", "styles/*.css"]
    });
});
