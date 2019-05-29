@extends('layouts.admin.main')
@section('content')
<h1>Hello {{Auth::User()->name}}</h1>
@endsection