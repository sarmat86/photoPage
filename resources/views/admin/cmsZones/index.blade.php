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
        <th>No</th>
        <th>Name</th>
        <th>Page</th>
        <th>Action</th>
      </tr>
   </thead>
   <tbody>
     @foreach ($cmsZones as  $key => $zone)
    <tr>
      <td>{{$key+1}}</td>
      <td>{{$zone->name}}</td>
      <td>{{$zone->page}}</td>
      <td>
      <a href="{{route('CmsZone.edit', $zone->id)}}" class="btn btn-warning">Edit</a>
      </td>
    </tr>
     @endforeach
   </tbody>
  </table>
  </div>
@else
   <div class="alert alert-info text-center">There are no Cms Zones</div>
@endif

@endsection