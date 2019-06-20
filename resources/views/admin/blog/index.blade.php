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
        <th>Title</th>
        <th>Photo</th>
        <th>Created</th>
        <th>Action</th>
      </tr>
   </thead>
   <tbody>
     @foreach ($posts as $key => $post)
    <tr>

      <td>{{$post->title}}</td>
      <td><img class="list_image" src="{{$post->photo_id === null ? '' : Storage::url($post->photo->path)}}"></td>
    <td>{{$post->created_at->diffForHumans()}}</td>
      <td>
        <a href="{{route('blog.edit', $post->id)}}" class="btn btn-warning"><i class="icon-pencil"></i></a>
        </td>
      
      <td></td>
     
     
    </tr>
     @endforeach
   </tbody>
  </table>
  <div class="pagination_wrapper">
    {{$posts->links()}}
  </div>

  </div>
@else
   <div class="alert alert-info text-center">There isn't any CMS Zones on this page</div>
@endif

@endsection