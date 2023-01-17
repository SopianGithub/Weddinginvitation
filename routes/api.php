<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ContentSetController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('contentsetting', ContentSetController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::group(['prefix' => 'setting', 'as' => 'setting.'], function() {
        Route::apiResource('contents', ContentSetController::class);
        Route::get('/fontlist', [\App\Http\Controllers\API\FontlistController::class, 'list'])->name('fontlist');
    });

    Route::group(['prefix' => 'invited', 'as' => 'invited.'], function() {
        Route::get('/greetings/{id?}', [\App\Http\Controllers\Invited\Greetingcontrol::class, 'index'])->name('greetings');
        Route::post('/greetings', [\App\Http\Controllers\Invited\Greetingcontrol::class, 'submit'])->name('greeting_post');
    });
});
