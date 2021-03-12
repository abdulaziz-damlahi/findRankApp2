<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

use App\Enums\CalculationMode;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\App;
use Illuminate\Validation\ValidationException;
use App\Models\users;

class websites extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'website_name',
        'id_website',
        'user_id',
        'rank',
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\users', 'id','id_website');
    }

    public function keywords()
    {
         $this->belongsTo('App\Models\keywords', 'id','id');
    }

    public function packets():HasMany
    {
        $this->HasMany('App\Models\packets', 'id','id');
    }

}

