<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class keywords extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'name',
        'date',
        'rank',
        'different',
        'website_id',
        'device',
        'language',
        'country',
        'user_keyword_id',
        'city',
        'created_At',
        'updated_At',
    ];
    public $timestamps = true;

    public function website():hasMany
    {
        return $this->hasMany('App\Models\websites', 'id','website_id');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\users', 'id','user_keyword_id');
    }

}
