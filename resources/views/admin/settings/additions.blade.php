@extends('layouts.admin.main')
@section('header')
Additional scripts and css
@endsection
@section('content')


<div class="row">
  <div class="col-md-12 mb-4">
      <form action="{{action('SettingsController@updateSettings')}}" method="POST" class="card">
        @csrf
          <div class="form-group">
            <label for="value">Head section</label>
            <input type="hidden" name="id" value="additions_head" >
            <textarea type="text" name="value" class="form-control" rows="8">{{$additionsHead ? $additionsHead->value : ''}}</textarea>
          </div>
          <div class="form-group text-right">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
      </form>
  </div>
  <div class="col-md-12 mb-4">
      <form action="{{action('SettingsController@updateSettings')}}" method="POST" class="card">
        @csrf
          <div class="form-group">
            <label for="value">Body - top section</label>
            <input type="hidden" name="id" value="additions_body_top" >
            <textarea type="text" name="value" class="form-control" rows="8">{{$additionsBodyTop ? $additionsBodyTop->value : ''}}</textarea>
          </div>
          <div class="form-group text-right">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
      </form>
  </div>
  <div class="col-md-12 mb-4">
      <form action="{{action('SettingsController@updateSettings')}}" method="POST" class="card">
        @csrf
          <div class="form-group">
            <label for="value">Body - bottom section</label>
            <input type="hidden" name="id" value="additions_body_bottom" >
            <textarea type="text" name="value" class="form-control" rows="8">{{$additionsBodyBottom ? $additionsBodyBottom->value : ''}}</textarea>
          </div>
          <div class="form-group text-right">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
      </form>
  </div>

</div>
@endsection