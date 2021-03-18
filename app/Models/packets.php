<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\websites;
class packets extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'id_sa',
        'user_id',
        'website_id',
        'count_of_words',
        'descrpitions',
        'end_of_pocket',
        'max_count_of_websites',
        'rank_follow',
        'rank_follow_max',
        'max_count_of_words',
        'packet_names',
        'started_of_pockets',
        'count_of_websites',
    ];
    public function user()
    {
        $this->belongsTo('App\Models\users', 'id','id');
    }
    public function websitess()
    {
        return $this->hasMany('App\Models\websites', 'id','id');
    }

}
