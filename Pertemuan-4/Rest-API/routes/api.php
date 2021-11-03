<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;

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

# Method Animals (GET, POST, PUT, DELETE)
Route::get("/animals", [AnimalController::class, "index"]);

Route::post("/animals", [AnimalController::class, "store"]);

Route::put("/animals/{id}", [AnimalController::class, "update"]);

Route::delete("/animals/{id}", [AnimalController::class, "destroy"]);

# Method Student

Route::get("/students", [StundentController::class, "index"]);

Route::post("/students", [StundentController::class, "store"]);

Route::put("/students/{id}", [StundentController::class, "update"]);

Route::delete("/students/{id}", [StundentController::class, "destroy"]);
