<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Media;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $media = Media::all();
        return view('admin.settings.media', compact('media'));
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
        if ($file = $request->file('file')) {

            $name =  time().'_'.$file->getClientOriginalName();
            $size = $file->getClientSize();
            $path = $file->storeAs('media_photos', $name, 'public');
            $input['path'] = $path;
            $input['size'] = $size;
            $input['name'] = $request->alt;

            $photo = Media::create($input);
            if ($path) {
                return response()->json([
                    'success' => true,
                    'url' => Storage::url($path),
                    'photo' => $photo
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function delete(Request $request)
    {
        $media = $request->deleteMedia;
        foreach ($media as $item) {
            $photo = Media::findOrFail($item);
            if (Storage::exists($photo->path)) {
                Storage::delete($photo->path);
            }
            $photo->delete();
        }
        $request->session()->flash('status', 'Selected media have been deleted');
        return redirect()->back();
    }
}
