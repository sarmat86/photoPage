<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CmsZone;
use App\Media;
use Illuminate\Support\Facades\Storage;

class CmsZoneController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cmsZones = CmsZone::orderBy('page', 'asc')->paginate(15);
        return view('admin.cmsZones.index', compact('cmsZones'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.cmsZones.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|max:255',
            'page' => 'required|max:50',
            'content' => 'required|max:65535 '
        ]);

        $newCmsZone = CmsZone::create($data);

        if($medias = $request->mediaID){
            foreach ($medias as $media) {
                $toUpdate = Media::findOrFail($media);
                $toUpdate->update([
                   "imageable_id" => $newCmsZone->id,
                   'imageable_type' => 'App\CmsZone'
               ]);
            }
        }


        $request->session()->flash('status', 'New CMS zone has been created');
        return redirect()->route('cmsZones.index');
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
        $cmsZone = CmsZone::findOrFail($id);
        return view('admin.cmsZones.edit', compact('cmsZone'));
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
        $data = $request->validate([
            'name' => 'required|max:255',
            'page' => 'required|max:50',
            'content' => 'required|max:65535 '
        ]);

        $cmsZone = CmsZone::findOrFail($id)->update($data);
        $request->session()->flash('status', 'Cms zone "'.$request->name.'"'.' has been edited');
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Request $request)
    {
        $cmsZone = CmsZone::findOrFail($id);

        $media = $cmsZone->image;
        foreach ($media as $item) {

            if (Storage::exists($item->path)) {
                Storage::delete($item->path);
            }
            Media::findOrFail($item->id)->delete();
        }
        $cmsZone->delete();

        $request->session()->flash('status', 'Cms zone "'.$cmsZone->name.'"'.' has been deleted');
        return redirect()->route('cmsZones.index');
    }
}
