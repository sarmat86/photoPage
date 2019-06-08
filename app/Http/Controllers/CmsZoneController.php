<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CmsZone;

class CmsZoneController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cmsZones = CmsZone::all();
        return view('admin.CmsZones.index', compact('cmsZones'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.CmsZones.create');
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

        CmsZone::create($data);
        $request->session()->flash('status', 'New CMS zone has been created');
        return redirect()->route('CmsZone.index');
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
        return view('admin.CmsZones.edit', compact('cmsZone'));
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
        $cmsZone = CmsZone::findOrFail($id)->delete();
        $request->session()->flash('status', 'Cms zone "'.$request->name.'"'.' has been deleted');
        return redirect()->route('CmsZone.index');
    }
}
