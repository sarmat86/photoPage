<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class CustomerZone extends Model
{
    protected $fillable = ['title', 'photo_id', 'confirmed', 'autodelete', 'position', 'password','file'];
    public function photo(){
        return $this->belongsTo('App\Photo');
    }
    use Sluggable;

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title',
                'onUpdate' => true
            ]
        ];
    }
    public function galleryPhoto()
    {
        return $this->morphMany('App\GalleryPhoto', 'galleryPhotoAble');
    }
}
