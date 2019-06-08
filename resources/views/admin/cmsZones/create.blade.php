@extends('layouts.admin.main')
@section('header')
Create new CMS zone
@endsection
@section('content')



      <div class="form-wrapper col-md-12">
      <form action="{{action('CmsZoneController@store')}}" class="card" method="POST">
          @csrf
        <div class="row">
          <div class="col-md-6">
              <div class="form-group">
                  <label for="name">Name </label>
                  <input type="text" name="name" id="name_input" class="form-control">
              </div>
          </div>
          <div class="col-md-6">
              <div class="form-group">
                  <label for="page">Page</label>
                  <input type="text" name="page" id="page_input" class="form-control">
              </div>
          </div>
          <div class="col-md-12">
              <div class="form-group ">
                  <label for="content">Content</label>
                  <textarea name="content" id="content_textarea"  rows="10"></textarea>
              </div>
          </div>
        </div>

            <div class="form-group text-right">
                <button type="submit" class="btn btn-primary">create</button>
              </div>
          </form>
        </div>

@endsection