<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\GalleryPhoto;
use Illuminate\Support\Facades\Storage;

class GalleryPhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      
        $input = [];
        if ($file = $request->file('galleryPhoto')) {
            $name =  time().'_'.$file->getClientOriginalName();
            $size = $file->getClientSize();
            $path = $file->storeAs('gallery_photos', $name, 'public');
            $input['path'] = $path;
            $input['size'] = $size;
            $input['name'] = $name;
            $input['galleryphotoable_id'] = request()->gallery_id;
            $input['galleryphotoable_type'] = request()->galleryphotoable_type;

             $photo = GalleryPhoto::create($input);
            if ($path) {
                return response()->json([
                    'success' => true,
                     'url' => Storage::url($path),
                    'id' => $photo->id,
                    'name' => $name,
                ]);
            }
            else{
                return response()->json([
                    'success' => false, 
                ]);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }
    public function updateAll(Request $request)
    {
   
        $data = $request->all();
        if (array_key_exists('galleryData', $data)) {
            $items = $data['galleryData'];

         foreach ($items as $key => $item) {
            $elem = GalleryPhoto::findOrFail( $item['id']); 
            $elem->update([
                'position' => $item['position'],
                'alt' => $item['alt']
            ]);
         }    
        return response()->json([
            'succes' => true
        ]);
        }
        return response()->json([
            'succes' => false
        ]);
         
             
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $photo = GalleryPhoto::findOrFail($id);
        $id = $photo->id;
        if (Storage::exists($photo->path)) {
            Storage::delete($photo->path);
        }
         $photo->delete();
        return response()->json([
            'success' => true,
            'deleted' => $id,
        ]);
       
    }
}
