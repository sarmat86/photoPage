@extends('layouts.admin.main')
@section('header')
Create new post
@endsection
@section('content')



<div class="form-wrapper col-md-12">
    <form id="post_create_form" action="{{action('BlogController@store')}}" class="card media_upload" method="POST" enctype="multipart/form-data" >
        @csrf
      <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="title">Title </label>
                <input type="text" name="title" id="title_input" class="form-control">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="category_id">Category</label>
                <select name="category_id" class="form-control">
                    <option value="0">Wybierz</option>
                    @foreach ($categories as $category)
                <option value="{{$category->id}}">{{$category->name}}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="file" class="d-block">Upload photo</label>
                <input type="file" name="file" id="file" class="d-block">
            </div>
        </div>
        <div class="col-md-6">
                <div class="thumbnail_preview_wrapper">
                <img src="" class="thumbnail_preview">
                </div>
        </div>
        <div class="col-md-6">
            <div class="form-group thumbnail_description">
                <label for="title">Photo description </label>
                <input type="text" name="name" id="name_input" class="form-control">
            </div>
        </div>
        
        <div class="col-md-12">
            <div class="form-group ">
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