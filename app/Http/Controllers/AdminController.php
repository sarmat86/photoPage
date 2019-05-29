<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AdminController extends Controller
{
    public function index(){
        return view('admin.index');
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {
        $user = Auth::user();
        return view('admin.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updatePassword(Request $request)
    {
        $validateData = $request->validate([
            'password' => 'required|min:6|confirmed|regex:/[A-Z]/|regex:/[a-z]/|regex:/[0-9]/',
        ]);
        $user = Auth::user();

        $password = $request->password;
        
        $user->update(['password' => bcrypt($password)]);

        $request->session()->flash('status', 'Password has been changed.');
        return redirect()->back();
    }
    public function updateData(Request $request)
    {
        $validateData = $request->validate([
            'email' => 'required|email'
        ]);

        $user = Auth::user();
        $user->update(['email' => $request->email]);
        $request->session()->flash('status', 'Email has been changed.');
        return redirect()->back();
    }
    
}
