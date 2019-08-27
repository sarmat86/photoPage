@extends('layouts.admin.main')
@section('header')
Edit Page Settings
@endsection
@section('content')


<div class="row">
    <div class="col-md-12 mb-4">
        <form action="{{action('SettingsController@updateContactData')}}" method="POST" class="card">
          @csrf
          <div class="row">
            <div class="col-md-6">
            <div class="form-group">
              <label for="value">Contact Email: </label>
                <input type="text" name="email" class="form-control" value="{{$settings['contactEmail']}}" required>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
                <label for="value">Contact phone:</label>
                  <input type="phone" name="phone" class="form-control" value="{{$settings['contactPhone']}}" >
              </div>
            </div>
          </div>
            <div class="form-group text-right">
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
    <div class="col-md-6 mb-4">
      <form action="{{action('SettingsController@updateSettings')}}" method="POST" class="card">
        @csrf
          <div class="form-group">
            <label for="value">Instagram token</label>
            <input type="hidden" name="id" value="instagram_token">
              <input type="text" name="value" class="form-control" value="{{$settings['instaToken']}}">
          </div>
          <div class="form-group text-right">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
      </form>
  </div>
  <div class="col-md-6 mb-4">
      <form action="{{action('SettingsController@updateSettings')}}" method="POST" class="card">
        @csrf
          <div class="form-group">
            <label for="value">Instagram link</label>
              <input type="hidden" name="id" value="instagram_link">
              <input type="text" name="value" class="form-control" value="{{$settings['instaLink']}}">
          </div>
          <div class="form-group text-right">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
      </form>
  </div>
  <div class="col-md-6 mb-4">
      <form action="{{action('SettingsController@updateSettings')}}" method="POST" class="card">
        @csrf
          <div class="form-group">
            <label for="value">Facebook link</label>
              <input type="hidden" name="id" value="facebook_link">
              <input type="text" name="value" class="form-control" value="{{$settings['fbLink']}}">
          </div>
          <div class="form-group text-right">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
      </form>
  </div>
  <div class="col-md-6 mb-4">
      <form action="{{action('SettingsController@updateSettings')}}" method="POST" class="card">
        @csrf
          <div class="form-group">
            <label for="value">Page title</label>
            <input type="hidden" name="id" value="page_title">
              <input type="text" name="value" class="form-control" value="{{$settings['pageTitle'] }}">
          </div>
          <div class="form-group text-right">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
      </form>
  </div>
  <div class="col-md-6 mb-4">
      <form action="{{action('SettingsController@updateSettings')}}" method="POST" class="card">
        @csrf
          <div class="form-group">
            <label for="value">Meta keywords</label>
            <input type="hidden" name="id" value="meta_keywords">
            <textarea type="text" name="value" class="form-control">{{ $settings['metaKeywords']}}</textarea>
          </div>
          <div class="form-group text-right">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
      </form>
  </div>
  <div class="col-md-6 mb-4">
      <form action="{{action('SettingsController@updateSettings')}}" method="POST" class="card">
        @csrf
          <div class="form-group">
            <label for="value">Meta description</label>
            <input type="hidden" name="id" value="meta_description">
              <textarea type="text" name="value" class="form-control">{{ $settings['metaDescription']}}</textarea>
          </div>
          <div class="form-group text-right">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
      </form>
  </div>

  <div class="col-md-6">
    <form  action="{{action('SettingsController@updateFavicon')}}" method="POST" class="card" enctype="multipart/form-data">
        @csrf
      <div class="row">
          <div class="form-group col-md-6">
              <label for="file" class="d-block">Upload favicon - 16px x 16px</label>
              <input type="file" name="file" id="file" class="d-block">
          </div>
          <div class="thumbnail_preview_wrapper col-md-6">
          <img src="{{Storage::url($settings['favicon'])}}" class="thumbnail_preview">
          </div>
          <div class="form-group text-right col-md-12">
              <button type="submit" class="btn btn-primary">Save</button>
          </div>
      </div>
  </form>
</div>



</div>
@endsection