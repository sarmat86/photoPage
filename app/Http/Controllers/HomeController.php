<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Blog;
use App\CmsZone;
use App\Gallery;
use App\Slide;
use Illuminate\Support\Facades\Cache;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        
        if(Cache::has('categories')){
            $categories = Cache::get('categories');
        }else{
            $categories = Category::all();
            Cache::put('categories', $categories, 300);
        }
        if(Cache::has('posts')){
            $posts = Cache::get('posts');
        }else{
            $posts = Blog::all();
            Cache::put('posts', $posts, 300);
        }
        $cmsZones = getCMSZone('home');
        if(Cache::has('slides')){
            $slides = Cache::get('slides');
        }else{
            $slides = Slide::where('confirmed', 1)->get()->sortBy('position');
            Cache::put('slides', $slides, 300);
        }
        if(Cache::has('settings')){
            $settings = Cache::get('settings');
        }else{
            $settings = getPageSettings();
        }
      
        if(Cache::has('homeGallery')){
            $homeGallery = Cache::get('homeGallery');
        }else{
            $homeGallery = Gallery::where('confirmed', 1)->orderBy('position', 'desc')->take(4)->get();
            Cache::put('homeGallery', $homeGallery, 300);
        }
        return view('front.home', compact('categories', 'posts', 'cmsZones', 'slides', 'settings', 'homeGallery'));
    }
}
