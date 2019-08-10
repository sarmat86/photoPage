@extends('layouts.admin.main')
@section('header')
Edit gallery
@endsection
@section('content')


    <div class="card">
        <form action="{{action('GalleryController@update', $gallery->id) }}" class="gallery_create_form" method="POST"
            enctype="multipart/form-data">
            @csrf
            @method('PATCH')
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" name="title" id="title_input" class="form-control"
                            value="{{$gallery->title}}">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="file" class="d-block">Upload thumbnail</label>
                        <input type="file" name="file" id="file" class="d-block">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group thumbnail_description {{$gallery->photo_id ? 'active' : ''}}">
                        <label for="title">Thumbnail description </label>
                        <input type="text" name="thumbnail" id="thumbnail_input" class="form-control" value="{{$gallery->photo_id ? $gallery->photo->name : ''}}">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="thumbnail_preview_wrapper">
                        <img src="{{$gallery->photo_id ? Storage::url($gallery->photo->path) : ''}}"
                            class="thumbnail_preview">
                    </div>
                </div>
                <div class=" col-md-12">
                    <div id="galleryPhotosDropZone" data-id="{{$gallery->id}}" class="dropzone dropzone-style"></div>
                </div>
            </div>
        </form>
        @if (count($galleryPhotos) === 0)
        <div class="gallery_photos_wrapper  dropzone-previews "></div>
        @else

        <div class="gallery_photos_wrapper  dropzone-previews">
            @foreach ($galleryPhotos as $item)
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


<form hidden class="delete-form" action="{{action('GalleryController@destroy', $gallery->id)}}" method="POST">
    @csrf
    @method('DELETE')
</form>

@endsection
