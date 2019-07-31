<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataUpdateController extends Controller
{
    public function updatePosition(Request $request)
    {
        $data = $request->all();
        $items = $data['galleryData'];
        $type = $data['galleryType'];
        $model = null;

        if ($type === 'customer_zone') {
            $model = 'App\CustomerZone';
        }elseif ($type === 'gallery') {
            $model = 'App\Gallery';
        }

        foreach ($items as $key => $item) {
           $elem = $model::findOrFail( $item['id']); 
           $elem->update([
               'position' => $item['position'],
           ]);
        }
       return response()->json([
           'succes' => true
       ]);
    }
    public function publish(Request $request)
    {
        $data = $request->all();
        $type = $data['galleryType'];

        if ($type === 'customer_zone') {
            $model = 'App\CustomerZone';
        }elseif ($type === 'gallery') {
            $model = 'App\Gallery';
        }


      $gallery = $model::findOrFail( $data['id']);
      $confirmed = 0;
       if (!$gallery->confirmed) {
        $confirmed = 1;
       }else{
        $confirmed = 0; 
       }
       $gallery->update(['confirmed' => $confirmed]);

        return response()->json([
            'succes' => true,
            'id' =>$gallery->id,
            'confirmed' => $confirmed 
          
        ]);
    }
}
