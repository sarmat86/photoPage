@extends('layouts.admin.main')
@section('header')
Edit customer zone
@endsection
@section('content')


    <div class="card">
        <form action="{{action('CustomerZoneController@update', $customerZone->id) }}" class="gallery_create_form " method="POST"
            enctype="multipart/form-data" data-id="{{$customerZone->id}}">
            @csrf
            @method('PATCH')
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" name="title" id="title_input" class="form-control"
                            value="{{$customerZone->title}}">
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
                        <img src="{{$customerZone->photo_id ? Storage::url($customerZone->photo->path) : ''}}" class="thumbnail_preview">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group thumbnail_description {{$customerZone->photo_id ? 'active' : ''}}">
                                    <label for="title">Thumbnail description </label>
                                    <input type="text" name="thumbnail" id="thumbnail_input" class="form-control"
                                        value="{{$customerZone->photo_id ? $customerZone->photo->name : ''}}">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div class="col-md-12 upload-wrapper {{$customerZone->file ? 'uploaded' : ''}}" >
                <div class="row">
                    <div class="col-md-6">
                        <div class="resumable-load">
                            <div id="resumable-error" style="display: none">
                                Resumable not supported
                            </div>
                            <div id="resumable-drop" style="display: none">
                                <div id="customerZoneFileBtn" data-id="{{$customerZone->id}}"  class="btn btn-warning">Upload file</div>
                            </div>
                            <ul id="file-upload-list" class="list-unstyled">    
                                @if ($customerZone->file)
                                    <li class="upload_preview">
                                        <span>{{$fileName}}</span>
                                        <a href="#" class="btn btn-danger removeCustomerFile edit-mode" data-id="{{$customerZone->id}}"><i class="icon-trash-empty"></i></a>     
                                    </li>
                                @endif      
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
             
            <div class=" col-md-12">
                <div id="galleryPhotosDropZone" data-id="{{$customerZone->id}}" data-type="{{'App\CustomerZone'}}" class="dropzone dropzone-style gallery_data_update"></div>
            </div>
            </div>
        </form>
        <div class="change_view">
                <a id="change_gallery_view" href="#">Change view</a>
            </div>
        @if (count($customerZonePhotos) === 0)
        <div class="gallery_photos_wrapper  dropzone-previews "></div>
        @else
        
        <div class="gallery_photos_wrapper  dropzone-previews">
            @foreach ($customerZonePhotos as $item)
            <div data-id="{{$item->id}}" data-position="{{$item->position}}" class="photo-tile">
                <div class="move_handle"><i class="icon-move"></i></div>
                <div class="photo_tile_img_wrapper"><img src="{{Storage::url($item->path)}}"></div>
                <div class="photo_tile_btns__wrapper">
                    <a href="#" class="btn btn-danger galPhoto__del"><i class="icon-trash-empty"></i></a>
                </div>
                <div class="photo_tile_input_wrapper">
                    <input type="text" name="alt" placeholder="photo description"
                        value="{{$item->alt !== null ? $item->alt : ''}}">
                </div>
            </div>
            @endforeach
        </div>
        @endif

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


<form hidden class="delete-form" action="{{action('CustomerZoneController@destroy', $customerZone->id)}}" method="POST">
    @csrf
    @method('DELETE')
</form>

@endsection
