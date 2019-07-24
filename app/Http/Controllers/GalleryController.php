<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Gallery;
use App\GalleryPhoto;
use App\Photo;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $galToDelete = Gallery::where('autodelete', 1)->get();
        foreach ($galToDelete as $item) {
            $galleryPhotos = $item->galleryPhoto;

                foreach ($galleryPhotos as  $galleryPhoto) {
                    GalleryPhoto::findOrFail($galleryPhoto->id)->delete();
                }
           $item->delete();
        }
        $galleries  = Gallery::all()->sortBy('position');
        return view('admin.gallery.index', compact('galleries'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $gallery = Gallery::create([
                'title' => 'gallery'
        ]);

          //division of pictures in the gallery due to the position -> null or not null
          $galleryPhotosPos = $gallery->galleryPhoto->filter(function($value, $key){
            return $value->position != null;  
            })->sortBy('position');
        $galleryPhotosPosNull = $gallery->galleryPhoto->where('position', null);
        return view('admin.gallery.create', compact('gallery', 'galleryPhotosPos', 'galleryPhotosPosNull'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function publish(Request $request)
    {
        $data = $request->all();

      $gallery = Gallery::findOrFail( $data['id']);
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $gallery  = Gallery::findOrFail($id);

          //division of pictures in the gallery due to the position -> null or not null
          $galleryPhotosPos = $gallery->galleryPhoto->filter(function($value, $key){
            return $value->position != null;  
            })->sortBy('position');
        $galleryPhotosPosNull = $gallery->galleryPhoto->where('position', null);
        return view('admin.gallery.edit', compact('gallery', 'galleryPhotosPos', 'galleryPhotosPosNull'));
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
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:255',
        ]);
        if ($validator->fails()) {
            return redirect()->route('gallery.edit', $id)
                        ->withErrors($validator)
                        ->withInput();
        }
        // $data = $request->validate([
        //     'title' => 'required|max:255',
        // ]);
        $gallery = Gallery::findOrFail($id);

        $input = $request->all();
        if ($file = $request->file('file')) {
            if ($gallery->photo_id) {
               $currentPhoto = Photo::findOrFail($gallery->photo_id);
               if (Storage::exists($currentPhoto->path)) {
                Storage::delete($currentPhoto->path);
            }
                $currentPhoto->delete();
            }

            $name =  time().'_'.$file->getClientOriginalName();
            $size = $file->getClientSize();
            $path = $file->storeAs('gallery_photos', $name);
            
            $photo = Photo::create([
                'path' => $path,
                'size' => $size,
                'name' => $input['thumbnail']
            ]);
            $input['photo_id'] = $photo->id;
        }
        $input['autodelete'] = 0;
        $gallery->update($input);

        $request->session()->flash('status', 'Gallery has been saved');

        return redirect()->route('gallery.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Request $request)
    {
        $gallery = Gallery::findOrFail($id);

        $galleryPhotos = $gallery->galleryPhoto;

        foreach ($galleryPhotos as  $galleryPhoto) {
            GalleryPhoto::findOrFail($galleryPhoto->id)->delete();
        }

        $gallery->delete();
        $request->session()->flash('status', 'Gallery has been deleted');
       return redirect()->route('gallery.index');
    }

    public function updatePosition(Request $request)
    {
        $data = $request->all();
        $items = $data['galleryData'];

        foreach ($items as $key => $item) {
           $elem = Gallery::findOrFail( $item['id']); 
           $elem->update([
               'position' => $item['position'],
           ]);
        }
       return response()->json([
           'succes' => true
       ]);
    }
}
