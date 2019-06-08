const mix = require('laravel-mix');



mix.js(['resources/js/libs/admin.js'],
'public/js/admin')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/admin.scss', 'public/css'); 
   