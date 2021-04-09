<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class footer extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'facebook',
        'twitter',
        'linkedin',
        'email',
        'aboutUs',
        'location',
        'phone',
        'copyright',
    ];
}
