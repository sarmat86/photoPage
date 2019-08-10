@extends('layouts.admin.main')
@section('header')
Slides list
@endsection
@section('content')

@if (count($slides) > 0)
<div class="card">
    <div class="gallery_list_wrapper" data-type="slider">
        @foreach ($slides as $slide)
        <div class="gallery_item" data-id="{{$slide->id}}" data-position="{{$slide->position}}">
            <div class="move_handle"><i class="icon-move"></i></div>
            @if (count($slide->image) > 0 )
            
            <div class="gallery_item_thumb">
                <img src="{{Storage::url( $slide->image->first()->path )}}">
            </div>
            @endif
            <p class="gallery_item_title">{{$slide->name}}</p>
            <div class="gallery_item_btns__wrapper text-right">
                <a href="{{route('slides.edit', $slide->id)}}" class="btn btn-warning"><i
                        class="icon-pencil"></i></a>
                @if ($slide->confirmed)
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
<div class="alert alert-info text-center">You have not created any slides yet.</div>
@endif

@endsection
