@extends('layouts.admin.main')
@section('header')
All media
@endsection
@section('content')

@if (count($media) > 0)
<div class="card">
<form action="{{action('MediaController@delete')}}" method="POST">
    @csrf
    <div class="form-group">
      <button type="submit" class="btn btn-danger"><i class="icon-trash-empty"></i></button>
    </div>
  
    
  <table class="table table-striped">
    <thead>
      <tr>
        <th><input type="checkbox" name="selectAll" id="selectAll"></th>
        <th>Name</th>
        <th>Photo</th>
        <th>Component</th>
        <th>Size</th>
      
      </tr>
   </thead>
   <tbody>
     @foreach ($media as $key => $item)
    <tr>
      <td><input type="checkbox" name="deleteMedia[]" value="{{$item->id}}"></td>
      <td>{{$item->name}}</td>
      <td><img class="list_image" src="{{$item->path === null ? '' : Storage::url($item->path)}}"></td>
       <td>{{$item->imageable_type === null ? 'none' : formatModelName($item->imageable_type)}}</td> 

    <td>{{formatSizeUnits($item->size)}}</td>
   

     
     
    </tr>
     @endforeach
   </tbody>
  </table>
</form>
  </div>
@else
   <div class="alert alert-info text-center">There isn't any media on this page</div>
@endif

@endsection