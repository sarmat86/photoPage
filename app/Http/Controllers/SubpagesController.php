<?php

namespace App\Http\Controllers;

use App\Blog;
use App\Category;
use App\CustomerZone;
use App\Gallery;
use Illuminate\Http\Request;


class SubpagesController extends Controller
{
    public function aboutMe(){
        $cmsZones = getCMSZone('aboutme');

        $settings = getPageSettingsCached();

        return view('front.aboutme', compact('cmsZones', 'settings'));
    }
    public function galleries(){
        
        $settings = getPageSettingsCached();
        $galleries = Gallery::where('confirmed', 1)->orderBy('position', 'desc')->paginate(9);
        return view('front.galleries', compact('settings', 'galleries'));
    }

    public function galleryItem($slug){
        $gallery = Gallery::findBySlug($slug);
        $photos = $gallery->galleryPhoto->sortByDesc('position');
        $settings = getPageSettingsCached();
        $current = $gallery->position;
        $next = Gallery::where('confirmed', 1)->where('position', '<', $current)->orderBy('position', 'desc')->first();
        $prev = Gallery::where('confirmed', 1)->where('position', '>', $current)->first();
        $nav = ['current' => $current, 'prev' => $prev, 'next' => $next ];
        return view('front.galleryItem', compact('settings','gallery', 'nav', 'photos'));
    }
    
    public function blog(){
        $settings = getPageSettingsCached();
        $posts = Blog::orderBy('created_at', 'desc')->paginate(4);
        $categories = Category::all();
        $id = 0;
        return view('front.blog', compact('settings', 'posts',  'categories', 'id'));
    }
    public function blogCategory($id){
        $settings = getPageSettingsCached();
        $categories = Category::all();
        $category = Category::findOrFail($id);

         $posts = $category->blog->sortByDesc('created_at')->paginate(4);
       
         return view('front.blog', compact('settings', 'posts',  'categories', 'id'));
    }
    public function blogItem($slug){
        $settings = getPageSettingsCached();
        $post = Blog::findBySlug($slug);
        return view('front.blogItem', compact('settings', 'post'));
    }
     
    public function customerZone(){
        $settings = getPageSettingsCached();
        $customerZones = CustomerZone::where('confirmed', 1)->orderBy('position', 'desc')->paginate(6);
        return view('front.customerZone', compact('settings', 'customerZones'));
    }

    public function customerZoneItem(Request $request){

        $settings = getPageSettingsCached();
        $data = $request->all();
        
        $customerZone = CustomerZone::findOrFail($data['customerZoneId']);
        if($customerZone->password === $data['password']){
            $cmsZones = getCMSZone('customerZone');
            $photos = $customerZone->galleryPhoto->sortByDesc('position');
            return view('front.customerZoneItem', compact('settings', 'customerZone', 'cmsZones', 'photos'));
        }else{
            $request->session()->flash('status', 'Wpisane hasło jest nieprawidłowe');
           return redirect()->back();
        }
    }

    public function offer(){
        $cmsZones = getCMSZone('offer');

        $settings = getPageSettingsCached();

        return view('front.offer', compact('cmsZones', 'settings'));
    }
    public function contact(){
        $cmsZones = getCMSZone('contact');

        $settings = getPageSettingsCached();

        return view('front.contact', compact('cmsZones', 'settings'));
    }
    public function privacy(){
        $cmsZones = getCMSZone('privacy');

        $settings = getPageSettingsCached();

        return view('front.privacy', compact('cmsZones', 'settings'));
    }
    public function infantPhotography(){
        $cmsZones = getCMSZone('noworodki');

        $settings = getPageSettingsCached();

        return view('front.infantPhotography', compact('cmsZones', 'settings'));
    }
    
}
