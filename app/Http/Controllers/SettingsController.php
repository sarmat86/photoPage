<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Settings;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class SettingsController extends Controller
{
    
    public function editSettings(){
        $settings = getPageSettings();
        return view('admin.settings.settings', compact('settings'));
    }

      public function editAdditions(){
        $data = Settings::all();
        $additionsHead = $data->where('name', 'additions_head')->first();
        $additionsBodyTop = $data->where('name', 'additions_body_top')->first();
        $additionsBodyBottom = $data->where('name', 'additions_body_bottom')->first();
        return view('admin.settings.additions', compact('additionsHead', 'additionsBodyTop', 'additionsBodyBottom'));
      }

    public function updateSettings(Request $request){
        
  
        $data = $request->all();
        $inputName = $data['id'];
        $item = Settings::where('name', $inputName)->first();
        if ($item) {
            $item->update([
                'value' => $data['value']
                ]);
        }else{
            Settings::create([
                'name' => $inputName,
                'value' => $data['value']
                ]);
        }

        $request->session()->flash('status', 'Data has been updated successful');
        return redirect()->back();
    }
    
    public function updateFavicon(Request $request){

        if ($file = $request->file('file')) {

            $item = Settings::where('name', 'favicon')->first();
            $name =  time().'_favicon';
            $path = $file->storeAs('settings', $name, 'public');

            if ($item) {
                if (Storage::exists($item->value)) {
                    Storage::delete($item->value);
                }
              $item->update([
                'value' => $path
              ]);
            }else{
                
                Settings::create([
                    'name' => 'favicon',
                    'value' => $path
                    ]); 
            }

            
        }
        $request->session()->flash('status', 'Favicon has been updated successful');
        return redirect()->back();
    }

    public function updateContactData(Request $request){

        $data = $request->validate([
            'email' => 'required|email',
            'phone' => ''
        ]);
        $phone = Settings::where('name', 'contact_phone')->first();
        $email = Settings::where('name', 'contact_email')->first();
        $phone ? $phone->update(['value' => $data['phone']]) : Settings::create(['name' => 'contact_phone','value' => $data['phone']]);
        $email ? $email->update(['value' => $data['email']]) : Settings::create(['name' => 'contact_email','value' => $data['email']]);
        return redirect()->back();
    }

    public function clearCache(Request $request){
        Cache::forget('pageSettings');
        Cache::forget('slides');
        Cache::forget('categories');
        Cache::forget('posts');
        Cache::forget('cmsZones');
        Cache::forget('homeGallery');
        $request->session()->flash('status', 'Cache has been cleared.');
         return redirect()->back();
    }
    
    
    
}
