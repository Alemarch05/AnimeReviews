<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use App\Models\Rating;
use App\Models\Comment;



class reviewController extends Controller
{
public function indexReview()
 {
    $reviews = Review::all();
    return response()->json([
        'status' => 'success',
        'data' => $reviews
    ]);
 }

 public function storeReview(Request $request)
 {
    $validate = $request->validate([
        'u_id' => 'required|exists:users,id',
        'a_id' => 'required|exists:animes,id',
        'title' => 'required|string|max:200',
        'body' => 'required|string',

    ]);

    $review = Review::create([
        'u_id' => $validate['u_id'],
        'a_id' => $validate['a_id'],
        'title' => $validate['title'],
        'body' => $validate['body'],
        'created_at' => now()
 
    ]);

    return response()->json([
        'status' => 'success',
        'data' => $review
    ], 201);
 }

public function indexRatings()
{
 $ratings = Rating::all();
 return response()->json([
        'status' => 'success',
        'data' => $ratings
 ]) ;
}

public function storeRating(Request $request)
{
    $validate = $request->validate([
        'u_id' => 'required|exists:users,id',
        'a_id' => 'required|exists:animes,id',
        'r_rating' => 'required|numeric|min:0|max:10'
    ]);

    $rating = Rating::create([
        'u_id' => $validate['u_id'],
        'a_id' => $validate['a_id'],
        'r_rating' => $validate['r_rating'],
    ]);

    return response()->json([
        'status' => 'success',
        'data' => $rating
    ], 201);

}

public function indexComments()
{
    $comments = Comment::all();
    return response()->json([
        'status' => 'success',
        'data' => $comments
    ]);

}
public function storeComment(Request $request)
  {
    $validate = $request->validate([
        'r_id' => 'required|exists:reviews,id',
        'u_id' => 'required|exists:users,id',
    ]);

    $comment = Comment::create([
        'r_id' => $validate['r_id'],
        'c_body' => $validate['body'],
        'created_at' => now(),
    ]);

    return response()->json([
        'status' => 'success',
        'data' => $comment
    ], 201);

  }
}
