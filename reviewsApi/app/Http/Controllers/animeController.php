<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Anime;
use App\Models\Genre;


class animeController extends Controller
{
    public function index()
    {
    $animes = Anime::with('genre')->get();
        return response()->json($animes);
    }

    public function store(Request $request)
    {
        $validate = $request->validate([
            'a_tittle' => 'required|string|max:255',
            'a_description' => 'required|string',
            'a_image_url' => 'required|string',
            'a_release_year' => 'required|integer',
            'a_episodes' => 'required|integer',
            'a_status' => 'required|in:ongoing,completed,upcoming',
            'a_average_rating' => 'required|numeric|min:0|max:10',
        ]);

        $anime = Anime::create([
            'a_title' => $validate['a_tittle'],
            'a_description' => $validate['a_description'],
            'a_image_url' => $validate['a_image_url'],
            'a_release_year' => $validate['a_release_year'],
            'a_episodes' => $validate['a_episodes'],
            'a_status' => $validate['a_status'],
            'a_average_rating' => $validate['a_average_rating'],
        ]);

        return response()->json([
            'status' => 'success',
            'data' => $anime
        ], 201);



    }

    public function indexGenres(){
        $genres = Genre::with('anime')->get();
        return response()->json($genres);
    }

    public function storeGenre(Request $request)
    {
        $validate = $request->validate([
            'g_name' => 'required|string|max:255',
            'g_description' => 'nullable|string',
        ]);

        $genre = Genre::create([
            'g_name' => $validate['g_name'],
            'g_description' => $validate['g_description'] ?? null,
        ]);

        return response()->json([
            'status' => 'success',
            'data' => $genre
        ], 201);
    }

}
