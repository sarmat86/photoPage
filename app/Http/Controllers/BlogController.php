<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Blog;
use Illuminate\Support\Facades\Storage;
use App\Photo;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $posts = Blog::all(); 
        return view('admin.blog.index', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();
        return view('admin.blog.create', compact('categories'));
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
            'title' => 'required|max:255',
            'content' => 'required'
        ]);
        $input = $request->all();
        if ($file = $request->file('file')) {

            $name =  time().'_'.$file->getClientOriginalName();
            $size = $file->getClientSize();
            $path = $file->storeAs('blog_photos', $name, 'public');
            
            $photo = Photo::create([
                'path' => $path,
                'size' => $size
            ]);

            $input['photo_id'] = $photo->id;

        }
         Blog::create($input);
         $request->session()->flash('status', 'New post has been created');
         return redirect()->route('blog.index');
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
        $categories = Category::all();
        $post = Blog::findOrFail($id);
        
        return view('admin.blog.edit', compact('post', 'categories'));


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
            'title' => 'required|max:255',
            'content' => 'required'
        ]);
        $post = Blog::findOrFail($id);

        $input = $request->all();
        if ($file = $request->file('file')) {
            if ($post->photo_id) {
               $currentPhoto = Photo::findOrFail($post->photo_id);
               if (Storage::exists($currentPhoto->path)) {
                Storage::delete($currentPhoto->path);
            }
                $currentPhoto->delete();
            }

            $name =  time().'_'.$file->getClientOriginalName();
            $size = $file->getClientSize();
            $path = $file->storeAs('blog_photos', $name);
            
            $photo = Photo::create([
                'path' => $path,
                'size' => $size
            ]);
            $input['photo_id'] = $photo->id;
        }
        $post->update($input);
         $request->session()->flash('status', 'Post has been updated');
         return redirect()->route('blog.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Request $request)
    {
        $post = Blog::findOrFail($id);
        if ($post->photo_id) {
            $photo = Photo::findOrFail($post->photo_id);
            if (Storage::exists($photo->path)) {
                Storage::delete($photo->path);
            }
        
            
            $photo->delete();
        }
        $post->delete();
        $request->session()->flash('status', 'Post has been deleted');
        return redirect()->route('blog.index');
    }
}
