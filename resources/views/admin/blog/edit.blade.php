@extends('layouts.admin.main')
@section('header')
Edit post
@endsection
@section('content')



<div class="form-wrapper col-md-12">
    <div class="card">
    <form action="{{action('BlogController@update', $post->id)}}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
      <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="title">Title </label>
            <input type="text" name="title" id="name_input" class="form-control" value="{{$post->title}}">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="category_id">Category</label>
                <select name="category_id" class="form-control">
                    <option value="0">Brak kategorii</option>
                    @foreach ($categories as $category)
                <option value="{{$category->id}}" {{$category->id === $post->category_id ? 'selected' : ''}}>
                    {{$category->name}}
                </option>
            
                    @endforeach
                </select>
            </div>
        </div>
        @if ($post->photo_id !== null)
        <div class="col-md-6">
        <div class="form-group">
                <img src="{{Storage::url($post->photo->path)}}" class="img-responsive edit_image">
                
        </div>
        {{-- <div class="">
                <a href="" class="btn btn-danger ">Delete photo</a>
        </div> --}}
        </div>
        @endif
        <div class="col-md-6">
            <div class="form-group">
                <label for="file" class="d-block">Upload photo</label>
                <input type="file" name="file" id="file" class="d-block">
            </div>
        
        </div>
        
        
        <div class="col-md-12">
            <div class="form-group ">
            <textarea name="content" id="content_textarea"  rows="10">{{$post->content}}</textarea>
            </div>
        </div>
      </div>

          <div class="form-group text-right">
              <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </form>
        <form action="{{action('BlogController@destroy', $post->id)}}" method="POST" class="text-right">
                @csrf
                @method('DELETE')
               <button type="submit" class="btn btn-danger ">Delete Post</button>
                </form>
    </div>
    
      </div>
    
@endsection