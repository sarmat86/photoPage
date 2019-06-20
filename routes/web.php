<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();

Route::get('/', 'HomeController@index')->name('home');



Route::group(['middleware' => ['admin']], function () {
    
  Route::get('/admin', 'AdminController@index')->name('admin');
  Route::get('/admin/edit', 'AdminController@edit')->name('admin.edit');
  Route::post('/admin/updatePassword', 'AdminController@updatePassword')->name('admin.update_password');
  Route::post('/admin/updateAdminData', 'AdminController@updateData')->name('admin.updateData');
  Route::resource('admin/CmsZone', 'CmsZoneController');
  Route::resource('admin/categories', 'CategoryController');
  Route::resource('admin/blog', 'BlogController');
  Route::resource('admin/media', 'MediaController');
  Route::post('/admin/media/delete', 'MediaController@delete')->name('admin.mediaDelete');
});