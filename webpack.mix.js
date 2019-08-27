const mix = require('laravel-mix');



mix.js([
    'resources/js/libs/admin.js', 
], 'public/js/admin')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/admin.scss', 'public/css')
    .sass('resources/sass/main.scss', 'public/css'); 
   

mix.scripts([
'resources/js/libs/dropzone.js',
'resources/js/libs/alertify.min.js',
], 'public/js/admin/libs.js');

mix.js([
    'resources/js/libs/main.js',
    ], 'public/js/pages/main.js');