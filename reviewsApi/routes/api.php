<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;

Route::post('/register', [userController::class, 'store']);

Route::post('/login', [userController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [userController::class, 'logout']);
});


