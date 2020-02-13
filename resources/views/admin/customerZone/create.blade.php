@extends('layouts.admin.main')
@section('header')
Create new customer Zone
@endsection
@section('content')


<div class="col-md-12">
    <div class="card">
        <form id="customerZoneForm"  action="{{action('CustomerZoneController@update', $customerZone->id) }}" class="gallery_create_form" method="POST" enctype="multipart/form-data" data-id="{{$customerZone->id}}">
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
                        <input type="file" name="file_thumbnail" id="file" class="d-block">
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

                <div class="col-md-12 upload-wrapper ">
                    <div class="row">
                        <div class="col-md-6" >
                            <div class="resumable-load">
                                <div id="resumable-error" style="display: none">
                                    Resumable not supported
                                </div>
                                <div id="resumable-drop" style="display: none">
                                    <div id="customerZoneFileBtn" data-id="{{$customerZone->id}}"  class="btn btn-warning">Upload file</div>
                                </div>
                                <ul id="file-upload-list" class="list-unstyled"  style="display: none"> </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class=" col-md-12">
                    <div id="galleryPhotosDropZone" data-id="{{$customerZone->id}}" data-type="{{'App\CustomerZone'}}" class="dropzone dropzone-style  gallery_data_update"></div>
                </div>
                
               
            </div>
        </form>
        <div class="change_view">
                <a id="change_gallery_view" href="#">Change view</a>
            </div>
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
