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
        return view('admin.gallery.create', compact('gallery'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    

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
        $galleryPhotos = $gallery->galleryPhoto->sortBy('position');
        return view('admin.gallery.edit', compact('gallery', 'galleryPhotos'));
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
}
