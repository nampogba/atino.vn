<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', 'Api\v1\AuthController@register');
Route::post('login', 'Api\v1\AuthController@login');
Route::get('get-user', 'Api\v1\AuthController@getUser');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});





