<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Slide extends Model
{
    protected $fillable = ['name', 'photoDesktop_id', 'photoTablet_id', 'photoMobile_id', 'colorText', 'position', 'confirmed'];


    public function image()
    {
        return $this->morphMany('App\Media', 'imageable');
    }
}
