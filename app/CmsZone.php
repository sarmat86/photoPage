<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CmsZone extends Model
{
    protected $fillable = [
        'name',
        'page',
        'content'
    ];

    public function image()
    {
        return $this->morphMany('App\Media', 'imageable');
    }
}
