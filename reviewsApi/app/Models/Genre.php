<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    use HasFactory;
    protected $table = 'genres';
    protected $fillable = [
        'g_name',
        'g_description',
        

    ];

    public function anime()
    {
        return $this->belongsToMany(Anime::class, 'anime_genres', 'g_id', 'a_id');
    }
}
