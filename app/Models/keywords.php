<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class keywords extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'name',
        'date',
    ];
    public function websites()
    {
        $this->belongsTo('App\Models\websites', 'website_id','id');
    }


    public function User()
    {
        $this->belongsTo('App\Models\users', 'id','website_id');
    }

}
