@extends('layouts.admin.main')
@section('header')
Edit CMS zone 
@endsection
@section('content')

      <div class="form-wrapper">
      <form action="{{action('CmsZoneController@update', $cmsZone->id)}}" class="card" method="POST">
          @csrf
          @method('PATCH')
        <div class="row">
          <div class="col-md-6">
              <div class="form-group">
                  <label for="name">Name </label>
              <input type="text" name="name" id="name_input" class="form-control" value="{{$cmsZone->name}}">
              </div>
          </div>
          <div class="col-md-6">
              <div class="form-group">
                  <label for="page">Page</label>
                  <input type="text" name="page" id="page_input" class="form-control" value="{{$cmsZone->page}}">
              </div>
          </div>
          <div class="col-md-12">
              <div class="form-group ">
                  <label for="content">Content</label>
                  <textarea name="content" id="content_textarea"  rows="10" class="trumbArea">{{$cmsZone->content}}</textarea>
              </div>
          </div>
        </div>

            <div class="form-group text-right">
                <button type="submit" class="btn btn-primary">edit</button>
            <form action="{{action('CmsZoneController@destroy', $cmsZone->id)}}">
              @csrf
              @method('DELETE')
              <button type="submit" class="btn btn-danger">Delete</button>
            </form>
              </div>
          </form>
        </div>

@endsection