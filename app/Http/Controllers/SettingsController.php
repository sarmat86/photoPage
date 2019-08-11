<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Settings;

class SettingsController extends Controller
{
    
    public function editInstagram(){
        $token = Settings::where('name', 'instagram')->first();
        return view('admin.settings.instagram', compact('token'));
    }
    
    public function updateInstagramToken(Request $request){

        $data = $request->validate([
            'value' => 'required',
        ]);
        
        $token = Settings::where('name', 'instagram')->first();
        $token->update([
            'value' => $data['value']
            ]);
        $request->session()->flash('status', 'Instagram token has been updated');
        return redirect()->back();
    }
    
}
