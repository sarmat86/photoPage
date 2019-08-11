@extends('layouts.admin.main')
@section('header')
Edit Instagram token
@endsection
@section('content')


<div class="card">
<form action="{{action('SettingsController@updateInstagramToken')}}" method="POST">
    @csrf
    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
              <label for="value">Instagram token</label>
                <input type="text" name="value" class="form-control" value={{$token->value}}>
            </div>
        </div>
    </div>
    
    <div class="form-group text-right">
      <button type="submit" class="btn btn-primary">Save</button>
    </div>
</form>
  </div>

@endsection