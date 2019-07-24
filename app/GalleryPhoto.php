<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GalleryPhoto extends Model
{
    protected $fillable = ['name', 'path', 'size', 'position', 'alt', 'galleryphotoable_id', 'galleryphotoable_type'];
    public function galleryPhotoAble()
    {
        return $this->morphTo();
    }
}
