@extends('layouts.admin.main')
@section('header')
Create new customer Zone
@endsection
@section('content')

<div class="col-md-12">
    <div class="card">
        <form  action="{{action('CustomerZoneController@update', $customerZone->id) }}" class="gallery_create_form" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PATCH')
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" name="title" id="title_input" class="form-control">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="file" class="d-block">Upload thumbnail</label>
                        <input type="file" name="file" id="file" class="d-block">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="title">Password</label>
                        <input type="text" name="password" id="password_input" class="form-control" value="{{$customerZone->password}}">
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="thumbnail_preview_wrapper">
                        <img src="" class="thumbnail_preview">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group thumbnail_description">
                                    <label for="title">Thumbnail description </label>
                                    <input type="text" name="thumbnail" id="thumbnail_input" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="title">File with photos (.zip, .rar)</label>
                        <input type="file" name="file_cszone" id="file_cszone" class="d-block">
                    </div>
                </div>
                
              
                
                <div class=" col-md-12">
                    <div id="galleryPhotosDropZone" data-id="{{$customerZone->id}}" data-type="{{'App\CustomerZone'}}" class="dropzone dropzone-style"></div>
                </div>
               
            </div>
        </form>
        <div class="gallery_photos_wrapper  dropzone-previews "></div>
        <div class="buttons_wrapper">
            <div class="row">
                <div class="col-md-6">
                        <div class="form-group text-left">
                            <button type="submit" class="btn btn-danger del-submit">delete</button>
                        </div>
                    </div>
                    <div class="col-md-6 buttons_wrapper_right">
                        <div class="form-group text-right">
                            <button type="submit" class="btn btn-primary galPhoto__save">save</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>

</div>
</div>

<form hidden class="delete-form" action="{{action('CustomerZoneController@destroy', $customerZone->id)}}" method="POST">
    @csrf
    @method('DELETE')
</form>
@endsection
