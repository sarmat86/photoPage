@extends('layouts.admin.main')
@section('header')
Customer zones list
@endsection
@section('content')

@if (count($customerZones) > 0)
<div class="card">
    <div class="gallery_list_wrapper"  data-type="customer_zone">
        @foreach ($customerZones as $customerZone)
        <div class="gallery_item" data-id="{{$customerZone->id}}" data-position="{{$customerZone->position}}">
            <div class="move_handle"><i class="icon-move"></i></div>
            @if ($customerZone->photo_id !== null)
            <div class="gallery_item_thumb">
                <img src="{{Storage::url($customerZone->photo->path)}}">
            </div>
            @endif
            <p class="gallery_item_title">{{$customerZone->title}}</p>
            <span class="gallery_item_pass">Hasło: {{$customerZone->password}}</span>
            <div class="gallery_item_btns__wrapper text-right">
                <a href="{{route('customerZone.edit', $customerZone->id)}}" class="btn btn-warning"><i
                        class="icon-pencil"></i></a>
                @if ($customerZone->confirmed)
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
<div class="alert alert-info text-center">You have not created any customer zone yet.</div>
@endif

@endsection
