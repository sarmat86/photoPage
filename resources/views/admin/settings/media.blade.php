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
        <th>Path</th>
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
    <td>{{Storage::url($item->path)}}</td>
       <td>{{$item->imageable_type === null ? 'none' : formatModelName($item->imageable_type)}}</td> 

    <td>{{formatSizeUnits($item->size)}}</td>
    </tr>
     @endforeach
   </tbody>
  </table>
  <div class="pagination-wrapper text-center">
      {{ $media->links() }}
  </div>
</form>
<form action="{{action('MediaController@addMedia')}}" method="POST" class="add-media" enctype="multipart/form-data">
  @csrf
  <hr>
  <h2>Add media</h2>
<div class="row">
    <div class="col-md-6">
        <div class="form-group">
            <label for="file" class="d-block">Upload thumbnail</label>
            <input type="file" name="file" id="file" class="d-block">
        </div>
    </div>
    
    <div class="col-md-12">
            <div class="thumbnail_preview_wrapper">
            <div class="row">
                <img src="" class="thumbnail_preview">
                <div class="col-md-6">
                    <div class="form-group thumbnail_description">
                        <label for="title">Image description </label>
                        <input type="text" name="alt" id="media_name" class="form-control">
                    </div>
                </div>
            </div>
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
    </div>
   
</div>
</form>
  </div>
@else
   <div class="alert alert-info text-center">There isn't any media on this page</div>
@endif

@endsection