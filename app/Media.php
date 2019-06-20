<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    protected $fillable = ['name', 'path', 'size', 'imageable_id', 'imageable_type'];

    public function imageable()
    {
        return $this->morphTo();
    }
}
