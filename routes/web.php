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


Route::get('/admin', 'AdminController@index')->name('admin')->middleware('admin');
Route::get('/admin/edit', 'AdminController@edit')->name('admin.edit')->middleware('admin');
Route::post('/admin/updatePassword', 'AdminController@updatePassword')->name('admin.update_password')->middleware('admin');
Route::post('/admin/updateAdminData', 'AdminController@updateData')->name('admin.updateData')->middleware('admin');
