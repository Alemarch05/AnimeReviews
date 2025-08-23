<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anime extends Model
{
    use HasFactory;
    protected $table = 'animes';
    protected $fillable = [
        'a_title',
        'a_description',
        'a_image_url',
        'a_release_year',
        'a_episodes',
        'a_status',
        'a_average_rating',

    ];


    public function ratings()
    {
        return $this->hasMany(Rating::class, 'a_id');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class, 'a_id');
    }

    public function genre()
    {
        return $this->belongsToMany(Genre::class, 'anime_genres', 'a_id', 'g_id'); 
    }
}
