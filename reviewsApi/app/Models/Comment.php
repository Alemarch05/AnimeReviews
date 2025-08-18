<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $table = 'comments';
    protected $fillable = [
        'r_id',
        'c_body',
        'created_at'
    ];

    public function review()
    {
        return $this->belongsTo(Review::class, 'r_id');
    }
}
