<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;
    protected $table = 'ratings';
    protected $fillable = [
        'u_id',
        'a_id',
        'r_rating',
        
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'u_id');
    }

    public function anime()
    {
        return $this->belongsTo(Anime::class, 'a_id');
    }
}
