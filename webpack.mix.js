const mix = require('laravel-mix')

mix.webpackConfig({
    devtool: "inline-source-map"
});

mix.js('resources/js/app.js', 'public/js')
    .less('resources/less/app.less', 'public/css')

    .version()

mix.sourceMaps()

