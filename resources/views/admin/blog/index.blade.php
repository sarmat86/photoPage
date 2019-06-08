@extends('layouts.admin.main')
@section('header')
Blog list
@endsection
@section('content')

@if (count($posts) > 0)
<div class="card">
  <table class="table-sm table-striped">
    <thead>
      <tr>
        <th>No</th>
        <th>Title</th>
        <th>Photo</th>
        <th>Action</th>
      </tr>
   </thead>
   <tbody>
     @foreach ($posts as $key => $post)
    <tr>
      <td>{{$key}}</td>
      <td>{{$post->title}}</td>
      <td><img class="list_image" src="{{$post->photo_id === null ? '' : Storage::url($post->photo->path)}}"></td>
      <td>
        <a href="{{route('blog.edit', $post->id)}}" class="btn btn-warning">Edit</a>
        </td>
      
      <td></td>
     
     
    </tr>
     @endforeach
   </tbody>
  </table>
  </div>
@else
   <div class="alert alert-info text-center">There isn't any CMS Zones on this page</div>
@endif

@endsection