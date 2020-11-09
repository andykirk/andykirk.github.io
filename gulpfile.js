const gulp        = require('gulp');

const { series } = require('gulp');
const { watch }  = require('gulp');

const pump        = require('pump');
const fs          = require('fs');
const del         = require('del');


require('make-promises-safe');


/*------------------------------------------------------------------------------------------------*\
    CSS
\*------------------------------------------------------------------------------------------------*/
const css_src  = './_styles/';
const css_dest = './css/';
const css_map_filename = 'map.css';

const sass   = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');


// Empty the CSS folder.
function empty_css_output(cb) {
    del.sync([css_dest + '*.css']);
    cb();
}


// Compile SCSS in expanded mode so it's easier to inspect the result.
function do_sass(cb) {
    console.log('Running sass...');

    pump([
        gulp.src(css_src + '**/*.scss'),
        sass({outputStyle: 'expanded'}),
        gulp.dest((file) => {
            return file.base;
        })
    ],
    cb);
}

// Compile combine other CSS files (e.g. 3rd party).
function do_concat_css(cb) {
    console.log('Running concat_css...');
    /*
    // Separate map CSS:
    gulp.src([
        './_scripts/vendor/leaflet/leaflet.css',
        './_scripts/vendor/leaflet-fullscreen/Control.FullScreen.css',
    ])
    .pipe(concat(css_map_filename))
    .pipe(gulp.dest(css_src));
    */
    // Callback:
    cb();
}




// Then create a minified version in the output folder.
function do_cssmin(cb) {
    console.log('Running cssmin...');

    var now = Date.now();

    pump([
        gulp.src(css_src + '**/*.css'),
        cssmin(),
        rename({extname: '.min.css'}),
        gulp.dest((file) => {
            //return css_dest;

            fs.writeFile('./_data/cache_bust_css.yml', 'date: ' + now, (err) => {
                if (err) throw err;
            });
            return css_dest;
        }),
        rename({suffix: '.' + now}),
        gulp.dest(css_dest)
    ],
    cb);
}


exports.empty_css_output = empty_css_output;
exports.sass   = do_sass;
exports.cssmin = do_cssmin;

// This combined task makes it convenient to run all the steps together.
//exports.css = series(empty_css_output, do_concat_css, do_sass, do_cssmin);
exports.css = series(empty_css_output, do_sass, do_cssmin);



/*------------------------------------------------------------------------------------------------*\
    IMAGES
\*------------------------------------------------------------------------------------------------*/
const img_src  = './_images/';
const img_dest = './img/';

const svg2png  = require('gulp-svg2png-update');
const imagemin = require('gulp-imagemin');
const svgmin   = require('gulp-svgmin');


// Here we're converting SVG to PNG as a fallback for older browsers.
// Note we're placing the files in the same directry as the SVG files, not the output folder as
// we're not done processing them yet.
// Also note that we're doing this BEFORE we optimise the SVG. The SVG optimisation (below) removes
// the width and height attributes which causes problems for the PNG generation.
function do_svg2png(cb) {
    console.log('Running svg2png...');

    pump([
        gulp.src(img_src + '**/*.svg'),
        svg2png(),
        gulp.dest((file) => {
            return file.base;
        })
    ],
    cb);
}

// Next we're optimising all bitmap images, including the ones generated by the previous step, and
// putting them in the output folder.
function do_imagemin(cb) {
    console.log('Running imagemin...');

    pump([
        gulp.src(img_src + '**/*.{png,jpg,gif}'),
        imagemin(),
        gulp.dest(img_dest)
    ],
    cb);
}

// Finally, we're optimising the SVG's and putting them in the output folder.
function do_svgmin(cb) {
    console.log('Running svgmin...');

    pump([
        gulp.src(img_src + '**/*.svg'),
        svgmin({
            plugins: [{
                removeViewBox: false
            }]
        }),
        gulp.dest(img_dest)
    ],
    cb);
}

exports.svgtopng = do_svg2png;
exports.imagemin = do_imagemin;
exports.svgmin   = do_svgmin;

// This combined task makes it convenient to run all the steps together.
exports.img = series(do_svg2png, do_imagemin, do_svgmin);



/*------------------------------------------------------------------------------------------------*\
    JS
\*------------------------------------------------------------------------------------------------*/
const js_src             = './_scripts/';
const js_dest            = './js/';
const js_filename        = 'script.js';
const js_map_filename    = 'map.js';
const js_filter_filename = 'filter.js';

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


// Concat all JS files.
function do_concat_js(cb) {
    console.log('Running concat_js...');

    // Common script:
    /*gulp.src([
        './_scripts/js/cookie-notice-settings.js',
        './_scripts/js/fit-contents.js',
        './_scripts/js/layout-adjustments.js',
        './_scripts/js/image-cover.js',
        './bower_components/Fall-Back-Cookie-Notice/cookie-notice.js',
        './bower_components/Fall-Back-Patterns/Nav Bar/js/nav-bar.js',
        './bower_components/Fall-Back-Patterns/Over Panel/js/over-panel.js',
        './bower_components/Fall-Back-Patterns/Dropdown/js/dropdown.js',
        './bower_components/Details-Polyfill/dist/details-element-polyfill.js'
    ])*/
    gulp.src([
        './_scripts/js/cookie-notice-settings.js',
        './_scripts/js/fit-contents.js',
        './_scripts/js/layout-adjustments.js',
        './_scripts/js/image-cover.js',
        './bower_components/Details-Polyfill/dist/details-element-polyfill.js'
    ])
    .pipe(concat(js_filename))
    .pipe(gulp.dest(js_src));

    // Separate map script:
    /*gulp.src([
        './_scripts/vendor/leaflet/leaflet-src.js',
        './_scripts/vendor/leaflet-svgicon/leaflet-svg-icon.js',
        './_scripts/js/leaflet-map.js',
        './_scripts/vendor/leaflet-fullscreen/Control.FullScreen.js'
    ])

    .pipe(concat(js_map_filename))
    .pipe(gulp.dest(js_src));
    */

    // Separate filter script:
    /*gulp.src([
        './bower_components/Mark-JS/dist/mark.js',
        './bower_components/Fall-Back-Filterability/filterability.js'
    ])

    .pipe(concat(js_filter_filename))
    .pipe(gulp.dest(js_src));
    */


    // Callback:
    cb();
}

// And minify them.
function do_uglify(cb) {
    console.log('Running uglify...');

    pump([
        /*gulp.src([
            js_src + js_filename,
            js_src + js_map_filename,
            js_src + js_filter_filename
        ]),*/
        gulp.src([
            js_src + js_filename
        ]),
        uglify(),
        rename({extname: '.min.js'}),
        gulp.dest(js_dest)
    ],
    cb);
}

exports.concat_js = do_concat_js;
exports.uglify    = do_uglify;

// This combined task makes it convenient to run all the steps together.
exports.js = series(do_concat_js, do_uglify);



/*------------------------------------------------------------------------------------------------*\
    WATCHERS
\*------------------------------------------------------------------------------------------------*/

// Watch CSS:
function do_watch_css(cb) {
    watch(css_src + '**/*.scss', exports.css);
}
exports.watch_css = do_watch_css;


// Watch JS:
function do_watch_js(cb) {
    watch(js_src + '**/!(script|map)*.js', exports.js);
}
exports.watch_js = do_watch_js;


// Watch all of the above:
function do_watch_all(cb) {
    watch(css_src + '**/*.scss', exports.css);
    watch(js_src + '**/!(script|map)*.js', exports.js);
}
exports.watch_all = do_watch_all;
