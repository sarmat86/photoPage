@extends('layouts.admin.main')
@section('header')
Gallery list
@endsection
@section('content')

@if (count($galleries) > 0)
<div class="card">
    <div class="gallery_list_wrapper">
        @foreach ($galleries as $gallery)
        <div class="gallery_item" data-id="{{$gallery->id}}" data-position="{{$gallery->position}}">
            <div class="move_handle"><i class="icon-move"></i></div>
            @if ($gallery->photo_id !== null)
            <div class="gallery_item_thumb">
                <img src="{{Storage::url($gallery->photo->path)}}">
            </div>
            @endif
            <p class="gallery_item_title">{{$gallery->title}}</p>
            <div class="gallery_item_btns__wrapper text-right">
                <a href="{{route('gallery.edit', $gallery->id)}}" class="btn btn-warning"><i
                        class="icon-pencil"></i></a>
                @if ($gallery->confirmed)
                <a href="#" class="btn btn-secondary gallery__publish">unpublish</a>
                @else
                <a href="#" class="btn btn-info gallery__publish">publish</a>
                @endif

            </div>
        </div>
        @endforeach
    </div>
    <div class="text-right">
        <button type="submit" class="btn btn-primary galPosition__update">update position</button>
    </div>
</div>
@else
<div class="alert alert-info text-center">You have not created any gallery yet.</div>
@endif

@endsection
