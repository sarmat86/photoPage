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
  Route::resource('admin/gallery', 'GalleryController');
  Route::resource('admin/customerZone', 'CustomerZoneController');
  Route::post('admin/gallery/publish', 'GalleryController@publish');
  Route::resource('admin/galleryPhoto', 'GalleryPhotoController');
  Route::post('admin/galleryPhoto/updateAll', 'GalleryPhotoController@updateAll');
  Route::post('/admin/media/delete', 'MediaController@delete')->name('admin.mediaDelete');
  Route::post('/admin/updatePosition', 'DataUpdateController@updatePosition');
  Route::post('/admin/publish', 'DataUpdateController@publish');
  Route::resource('/admin/slides', 'SlideController');
  Route::get('admin/settings', 'SettingsController@editSettings')->name('editSettings');
  Route::post('admin/updateSettings', 'SettingsController@updateSettings')->name('updateSettings');
  Route::post('admin/updateSettings/updateContactData', 'SettingsController@updateContactData')->name('updateContactData');
  Route::get('admin/updateSettings/clearCache', 'SettingsController@clearCache')->name('clearCache');
  Route::get('admin/additions', 'SettingsController@editAdditions')->name('editAdditions');
  Route::post('admin/updateFavicon', 'SettingsController@updateFavicon')->name('updateFavicon');


});