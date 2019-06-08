@extends('layouts.pages.main')
@section('content')
<h1>Main Page</h1>
<a href="{{route('admin')}}">Admin</a>
<hr>
<h2>Blog posts</h2>
@foreach ($posts as $post)
    <div style="background: #cccccc;">
    <h3>{{$post->title}}</h3>
    <p>{{$post->title}}</p>
    <p>Kategoria: {{$post->category_id === null ? 'brak' : $post->category->name }}</p>
    <p><img src="{{$post->photo_id === null ? '' : Storage::url($post->photo->path)}}" alt="{{$post->title}}"></p>
    <p>{!!$post->content!!}</p>
    </div>
  
@endforeach

@endsection