var gulp = require('gulp'),
del = require('del'),
ts = require('gulp-typescript'),
tsd = require('gulp-tsd'),
debug = require('gulp-debug'),
concat = require('gulp-concat'),
series = require('stream-series'),
inject = require('gulp-inject'),
sourcemaps = require('gulp-sourcemaps'),
rename = require('gulp-rename');

var webroot = "webroot";
var paths = {
    scripts_source: 'Scripts/',
    scripts_dest: webroot + "/js/",
    angular_source: 'app/',
    angular_source_templates: 'app/**/*.html',
    angular_dest: webroot + "/app/",
    angular_typescript_source: ['app/**/*.ts', '!**/*.test.ts'],
    angular_typescript_dest: 'app/',
    bower: "bower_components/",
    lib: webroot + "/lib/"
};

gulp.task('default', ['compile:typescript', 'copy:injected-spa-index-html', 'copy:angular-templates'], function () {
    process.stdout.write('Building debug friendly frontend for environment');
});

gulp.task('compile:typescript', ['clean:compiled-typescript'], function () {
    gulp.src(paths.angular_typescript_source)
        .pipe(sourcemaps.init())
        .pipe(ts({
            noImplicitAny: true,
            target: "ES5"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.angular_dest));
});

gulp.task('clean:compiled-typescript', function () {
    return del(paths.angular_source + '**/*.js');
});

gulp.task("watcher", function () {
    gulp.watch(paths.angular_source + '**/*.{ts,html,json}', ['compile:typescript', 'copy:angular-templates']);
});

gulp.task('copy:lib', function () {
    return getVendorLibraryJsInRightOrder()
    .pipe(debug({ title: 'Concatenating vendor JS libraries:' }))
    .pipe(concat("lib.js"))
    .pipe(gulp.dest(paths.lib + "js"));
});

function getVendorLibraryJsInRightOrder() {
    return gulp.src([
        paths.bower + 'angular/angular.js',
        paths.bower + 'angular-route/angular-route.js'
    ]);
}

gulp.task('copy:injected-spa-index-html', ['copy:lib'], function () {
    var angularModulesDestination = gulp.src(paths.angular_dest + 'app.js', { read: false });
    var angularLogicDestination = gulp.src([paths.angular_dest + '**/*.js',
                                            '!' + paths.angular_dest + 'app.js',
                                            '!' + paths.angular_dest + 'settings.js'], {
                                                read: false
                                            });

    return gulp.src('app/index-spa.html')
        .pipe(inject(series(angularModulesDestination, angularLogicDestination),
        {
            ignorePath: webroot,
            addRootSlash: false
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(webroot));
});

gulp.task('copy:angular-templates', function () {
    return gulp.src([paths.angular_source_templates, '!' + paths.angular_source + 'index-spa.html'])
        .pipe(gulp.dest(paths.angular_dest));
});

gulp.task('clean:angular', function () {
    return del(paths.angular_dest + '/*');
});