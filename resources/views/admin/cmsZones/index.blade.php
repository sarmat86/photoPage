@extends('layouts.admin.main')
@section('header')
CMS zones list
@endsection
@section('content')

@if (count($cmsZones) > 0)
<div class="card">
  <table class="table-sm table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Page</th>
        <th>Created</th>
        <th>Action</th>
      </tr>
   </thead>
   <tbody>
     @foreach ($cmsZones as  $key => $zone)
    <tr>
      <td>{{$zone->name}}</td>
      <td>{{$zone->page}}</td>
    <td>{{$zone->created_at->diffForHumans()}}
      <td>
      <a href="{{route('CmsZone.edit', $zone->id)}}" class="btn btn-warning"><i class="icon-pencil"></i></a>
      </td>
    </tr>
     @endforeach
   </tbody>
  </table>
  <div class="pagination_wrapper">
  {{$cmsZones->links()}}
</div>
  </div>
@else
   <div class="alert alert-info text-center">There are no Cms Zones</div>
@endif

@endsection