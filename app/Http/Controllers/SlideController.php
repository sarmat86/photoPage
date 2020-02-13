<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Media;
use App\Slide;
use Illuminate\Support\Facades\Storage;

class SlideController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $slides = Slide::all();
        $slides = $slides->sortBy('position');
        return view('admin.slides.index', compact('slides'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {   

        return view('admin.slides.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
        ]);

        $photos = [];
        $input = $request->all();
        $slide = Slide::create($input);
        foreach($request->files as $key => $file){
            $name =  $input[$key.'_name'];
            $nameForPath =  $key.'_'.time().'_'.$file->getClientOriginalName();
            $size = $file->getClientSize();
            $path = $request->file($key)->storeAs('slider_photos', $nameForPath, 'public');
            array_push($photos, 
            Media::create([ 
                'name' => $name,
                'path' => $path,
                'size' => $size,
                'imageable_id' => $slide->id,
                'imageable_type' => 'App\Slide',
                'screen' => $key
                ])
            );
        } 
        $slide->image()->saveMany($photos);
        $request->session()->flash('status', 'New slide has been created');
        return redirect()->route('slides.index');
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
        $slide = Slide::findOrFail($id);
        $slidePhotos = $slide->image;
        $slide4 = $slide->image->where('screen', 4)->first();
        $slide2 = $slide->image->where('screen', 2)->first();
        $slide1 = $slide->image->where('screen', 1)->first();
        return view('admin.slides.edit', compact('slide', 'slidePhotos', 'slide1', 'slide2', 'slide4'));
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
        $request->validate([
            'name' => 'required|max:255',
        ]);

        $slide = Slide::findOrFail($id);
        $input = $request->all();
        $photoNames = [4 => $input['4_name'], 2 => $input['2_name'], 1 => $input['1_name']];
    
        foreach($photoNames as $key => $value){
            
            $currentPhoto = $slide->image->where('screen', $key)->first();
            $settings = [   
                    'imageable_id' => $slide->id,
                    'imageable_type' => 'App\Slide',
                    'screen' => $key,
                    'name' => $value,
            ];
            if($file = $request->file($key)){
              
                if (Storage::exists($currentPhoto->path)) {
                    Storage::delete($currentPhoto->path);
                }
                $nameForPath =  $key.'_'.time().'_'.$file->getClientOriginalName();
                $size = $file->getClientSize();
                $path = $request->file($key)->storeAs('slider_photos', $nameForPath, 'public');
                $settings['size'] = $size; 
                $settings['path'] = $path;
            }
            $currentPhoto->update($settings);
        }

        $slide->update($input);
        $request->session()->flash('status', 'Slide has been update');
        return redirect()->route('slides.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Request $request)
    {
        $slide = Slide::findOrFail($id);
  
        $media = $slide->image;
        foreach ($media as $item) {
            if (Storage::exists($item->path)) {
                Storage::delete($item->path);
            }
            Media::findOrFail($item->id)->delete();
        }
        $slide->delete();
        $request->session()->flash('status', 'Slide has been deleted');
        return redirect()->route('slides.index');
    }
}
