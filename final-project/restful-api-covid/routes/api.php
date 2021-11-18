<?php

use App\Http\Controllers\PatientController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Monolog\Handler\RotatingFileHandler;

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

// membuat route mendapatkan all resource 
Route::get('/patients', [PatientController::class, 'index']);

// membuat route menambahkan resource
Route::post('/patients', [PatientController::class, 'store']);

// membuat route mendapatkan detail resource berdasarkan {id}
Route::get('/patients/{id}', [PatientController::class, 'show']);

// membuat route untuk update resource berdasarkan {id}
Route::put('/patients/{id}', [PatientController::class, 'update']);

// membuat route untuk menghapus resource berdasarkan {id}
Route::delete('/patients/{id}', [PatientController::class, 'destroy']);

// membuat route search by name patients ->
Route::get('/patients/search/{name}', [PatientController::class, 'search']);

// membuat route search by status -> positive
Route::get('/patients/status/{positive}', [PatientController::class, 'positive']);

// membuat route search by status -> recovered
Route::get('/patients/status/{recovered}', [PatientController::class, 'recovered']);

// membuat route search by status -> dead
Route::get('/patients/status/{dead}', [PatientController::class, 'dead']);
