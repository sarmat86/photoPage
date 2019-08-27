<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Blog;
use App\CmsZone;
use App\Slide;

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
        $categories = Category::all();
        $posts = Blog::all();
        $cmsZones = CmsZone::all();
        $slides = Slide::where('confirmed', 1)->get()->sortBy('position');
        $settings = getPageSettings();
        return view('front.home', compact('categories', 'posts', 'cmsZones', 'slides', 'settings'));
    }
}
