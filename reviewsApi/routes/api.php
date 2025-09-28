<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;
use App\Http\Controllers\animeController; 
use App\Http\Controllers\reviewController;

Route::post('/login', [userController::class, 'login']);
Route::post('/register', [userController::class, 'store']);

Route::middleware(['auth:sanctum'])->group(function (){
    Route::get('/animes', [animeController::class, 'index']);
    Route::get('/genres' , [animeController::class, 'indexGenres']);
    Route::get('/reviews', [reviewController::class, 'indexReview']);
    Route::get('/reviews/Me', [reviewController::class, 'indexMeReviews']);
    
    Route::get('/ratings', [reviewController::class, 'indexRatings']);
    
    Route::get('/comments', [reviewController::class, 'indexComments']);
    
    
    Route::post('/genres' , [animeController::class, 'storeGenre']);
    
    Route::post('/reviews', [reviewController::class, 'storeReview']);
    
    Route::post('/ratings', [reviewController::class, 'storeRating']);
    
    Route::post('/comments', [reviewController::class, 'storeComment']);
    Route::post('/logout', [userController::class, 'logout']);
});








