<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    
    protected $table = 'reviews';

    protected $fillable = [
        'u_id',
        'a_id',
        'title',
        'body',
        'created_at'
    ];

public function user()
{
    return $this->belongsTo(User::class, 'u_id');
}

public function anime()
{
    return $this->belongsTo(Anime::class, 'a_id');
 
}

public function comments()
{
    return $this->hasMany(Comment::class, 'r_id');


}

}
