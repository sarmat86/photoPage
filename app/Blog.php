<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;


class Blog extends Model
{
    protected $fillable = ['title', 'content', 'category_id', 'photo_id'];

    public function category(){
        return $this->belongsTo('App\Category');
    }
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
                'source' => 'title'
            ]
        ];
    }
    public function image()
    {
        return $this->morphMany('App\Media', 'imageable');
    }
    
}
