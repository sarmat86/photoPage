@extends('layouts.admin.main')
@section('content')
{{-- <h1>Edit</h1> --}}
<div class="row">
  
  <div class="form-wrapper col-md-6">
    <form action="{{action('AdminController@updatePassword')}}" class="card" method="POST">
      @csrf
      <h2>Change Your Password</h2>

      <div class="form-group">
          <label for="user_password">New password: </label>
          <input type="password" name="password" id="password" class="form-control">
      </div>
      <div class="form-group">
          <label for="user_confrim_password">Confirm password: </label>
          <input type="password" name="password_confirmation" id="password_confirmation" class="form-control">
      </div>
      <div class="form-group text-right">
          <button type="submit" class="btn btn-primary">change</button>
        </div>
    </form>
  </div>

  <div class="form-wrapper col-md-6 " >
      <form action="{{route('admin.updateData')}}" method="POST" class="card">
        {{-- @method('PUT') --}}
        @csrf
        
            <h2>Edit Your Email</h2>
            <div class="form-group">
                <label for="user_email">Email: </label>
            <input type="text" name="email" id="user_email" class="form-control" value="{{$user->email}}">
            </div>
            <div class="form-group text-right">
              <button type="submit" class="btn btn-primary">Change</button>
            </div>
          </form>
    </div>
</div>


@endsection