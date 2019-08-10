<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\GalleryPhoto;
use App\Photo;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\CustomerZone;

class CustomerZoneController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $customerToDelete = CustomerZone::where('autodelete', 1)->get();
        foreach ($customerToDelete as $item) {
            $customerPhotos = $item->galleryPhoto;

                foreach ($customerPhotos as  $customerPhoto) {
                    GalleryPhoto::findOrFail($customerPhoto->id)->delete();
                }
           $item->delete();
        }
        $customerZones  = CustomerZone::all()->sortBy('position');
        return view('admin.customerZone.index', compact('customerZones'));
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $customerZone = CustomerZone::create([
            'title' => 'me & you',
            'password' => str_random(8),
            'file' => null
        ]);
        return view('admin.customerZone.create', compact('customerZone'));

    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
        $customerZone  = CustomerZone::findOrFail($id);
        $customerZonePhotos = $customerZone->galleryPhoto->sortBy('position');
        return view('admin.customerZone.edit', compact('customerZone', 'customerZonePhotos'));
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
             'password' => 'required|min:6|alpha_num',          
                 
        ]);
        if ($validator->fails()) {
            return redirect()->route('customerZone.edit', $id)
                        ->withErrors($validator)
                        ->withInput();
        }

        $customerZone = CustomerZone::findOrFail($id);

        $input = $request->all();
        if ($file_photo = $request->file('file')) {
            if ($customerZone->photo_id) {
               $currentPhoto = Photo::findOrFail($customerZone->photo_id);
               if (Storage::exists($currentPhoto->path)) {
                Storage::delete($currentPhoto->path);
            }
                $currentPhoto->delete();
            }

            $name =  time().'_'.$file_photo->getClientOriginalName();
            $size = $file_photo->getClientSize();
            $path = $file_photo->storeAs('gallery_photos', $name);
            
            $photo = Photo::create([
                'path' => $path,
                'size' => $size,
                'name' => $input['thumbnail']
            ]);
            $input['photo_id'] = $photo->id;
        }
        if ($file_cszone = $request->file('file_cszone')) {
            if ($customerZone->file) {
               if (Storage::exists($customerZone->file)) {
                Storage::delete($customerZone->file);
            }
            }
            $name =  time().'_'.$file_cszone->getClientOriginalName();
            $size = $file_cszone->getClientSize();
           
            $path = Storage::putFileAs('gallery_files', $file_cszone, $name);
            // $path = $file_cszone->storeAs('gallery_files', $name);
            
            $input['file'] = $path;
        }
        $input['autodelete'] = 0;
        $customerZone->update($input);

        $request->session()->flash('status', 'Customer Zone has been saved');

        return redirect()->route('customerZone.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Request $request) 
    {
        $customerZone = CustomerZone::findOrFail($id);

        $customerZonePhotos = $customerZone->galleryPhoto;

        foreach ($customerZonePhotos as  $customerZonePhoto) {
            GalleryPhoto::findOrFail($customerZonePhoto->id)->delete();
        }
        if ($customerZone->file) {
            if (Storage::exists($customerZone->file)) {
             Storage::delete($customerZone->file);
         }
         }
        $customerZone->delete();
        $request->session()->flash('status', 'Customer Zone has been deleted');
       return redirect()->route('customerZone.index');
    }
}
