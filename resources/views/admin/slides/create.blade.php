@extends('layouts.admin.main')
@section('header')
Create new slide
@endsection
@section('content')


<div class="row">
<div class="form-wrapper col-md-12">
    <form id="post_create_form" action="{{action('SlideController@store')}}" class="card" method="POST" enctype="multipart/form-data" >
        @csrf
      <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="title">Name </label>
                <input type="text" name="name" id="name_input" class="form-control">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="title">Text color </label>
                <input type="color" name="colorText" id="textcolor_input" class="form-control">
            </div>
        </div> 
        {{-- DESKTOP --}}
        <div class="col-md-12">
          <div class="slide-add-section card">
            <div class="slide-add-label jumbotron">
              <span>Desktop</span>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                    <label for="file" class="d-block">Upload photo</label>
                    <input type="file" name="4" id="file_desktop" class="d-block file_thumnail">
                </div>
              </div>
              <div class="col-md-6">
                <div class="thumbnail_preview_wrapper">
                  <img src="" class="slide_thumbnail">
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group thumbnail_description">
                      <label for="title">Photo description </label>
                      <input type="text" name="4_name" id="desktop_name" class="form-control">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {{-- TABLET --}}
        <div class="col-md-12">
            <div class="slide-add-section card">
              <div class="slide-add-label jumbotron">
                <span>Tablet</span>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                      <label for="file" class="d-block">Upload photo</label>
                      <input type="file" name="2" id="file_tablet" class="d-block file_thumnail">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="thumbnail_preview_wrapper">
                    <img src="" class="slide_thumbnail">
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group thumbnail_description">
                        <label for="title">Photo description </label>
                        <input type="text" name="2_name" id="tablet_name" class="form-control">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {{-- MOBILE --}}
        <div class="col-md-12">
            <div class="slide-add-section card">
              <div class="slide-add-label jumbotron">
                <span>Mobile</span>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                      <label for="file" class="d-block">Upload photo</label>
                      <input type="file" name="1" id="file_mobile" class="d-block file_thumnail">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="thumbnail_preview_wrapper">
                    <img src="" class="slide_thumbnail">
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group thumbnail_description">
                        <label for="title">Photo description </label>
                        <input type="text" name="1_name" id="mobile_name" class="form-control">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


      </div>

      <div class="form-group text-right">
        <button type="submit" class="btn btn-primary">create</button>
      </div>
    </form>
  </div>
</div>
@endsection